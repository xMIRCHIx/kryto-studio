import { ExternalBlob } from "@/backend";
import { MediaType, ServiceType } from "@/backend";
import type { PortfolioItem, PortfolioItemInput } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddPortfolioItem,
  useDeletePortfolioItem,
  usePortfolioItems,
  useUpdatePortfolioItem,
} from "@/hooks/useBackend";
import { ALL_SERVICE_TYPES, getServiceLabel } from "@/lib/serviceLabels";
import { Edit2, ImageOff, Link2, Plus, Trash2, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormValues {
  title: string;
  description: string;
  serviceType: ServiceType;
  mediaType: MediaType;
  url: string;
  thumbnailUrl: string;
  videoFile: FileList | null;
}

const defaultValues: FormValues = {
  title: "",
  description: "",
  serviceType: ServiceType.webAppDev,
  mediaType: MediaType.link,
  url: "",
  thumbnailUrl: "",
  videoFile: null,
};

export default function AdminPortfolio() {
  const { data: items = [], isLoading } = usePortfolioItems();
  const addItem = useAddPortfolioItem();
  const updateItem = useUpdatePortfolioItem();
  const deleteItem = useDeletePortfolioItem();

  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<PortfolioItem | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<PortfolioItem | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues });

  const watchedMediaType = watch("mediaType");

  useEffect(() => {
    if (editTarget) {
      reset({
        title: editTarget.title,
        description: editTarget.description,
        serviceType: editTarget.serviceType,
        mediaType: editTarget.mediaType,
        url: editTarget.url ?? "",
        thumbnailUrl: editTarget.thumbnailUrl ?? "",
        videoFile: null,
      });
    } else {
      reset(defaultValues);
    }
  }, [editTarget, reset]);

  const openAdd = () => {
    setEditTarget(null);
    setModalOpen(true);
  };

  const openEdit = (item: PortfolioItem) => {
    setEditTarget(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditTarget(null);
    setUploadProgress(0);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      let videoBlob: ExternalBlob | undefined;
      if (data.mediaType === MediaType.video && data.videoFile?.[0]) {
        const bytes = new Uint8Array(await data.videoFile[0].arrayBuffer());
        videoBlob = ExternalBlob.fromBytes(bytes).withUploadProgress((pct) =>
          setUploadProgress(pct),
        );
      }

      const input: PortfolioItemInput = {
        title: data.title,
        description: data.description,
        serviceType: data.serviceType,
        mediaType: data.mediaType,
        url: data.url,
        thumbnailUrl: data.thumbnailUrl || undefined,
        videoBlob,
      };

      if (editTarget) {
        await updateItem.mutateAsync({ id: editTarget.id, item: input });
        toast.success("Portfolio item updated");
      } else {
        await addItem.mutateAsync(input);
        toast.success("Portfolio item added");
      }
      closeModal();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteItem.mutateAsync(deleteTarget.id);
      toast.success("Item deleted");
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Manage your work showcase
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="portfolio.add_button">
          <Plus className="w-4 h-4 mr-2" /> Add New
        </Button>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <Skeleton
              // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length decorative array
              key={`portfolio-loading-${i}`}
              className="h-16 w-full rounded-lg"
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div
          data-ocid="portfolio.empty_state"
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <ImageOff className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No portfolio items yet.</p>
          <Button variant="outline" className="mt-4" onClick={openAdd}>
            Add your first project
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Project
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Service
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr
                  key={String(item.id)}
                  data-ocid={`portfolio.item.${idx + 1}`}
                  className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {item.thumbnailUrl ? (
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-10 h-10 rounded object-cover flex-shrink-0 border border-border"
                        />
                      ) : item.videoBlob ? (
                        <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0">
                          <Video className="w-5 h-5 text-primary" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0">
                          <ImageOff className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate max-w-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className="text-xs">
                      {getServiceLabel(item.serviceType)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="outline"
                      className={`text-xs gap-1 ${
                        item.mediaType === MediaType.video
                          ? "border-primary/40 text-primary"
                          : "border-secondary/40 text-secondary"
                      }`}
                    >
                      {item.mediaType === MediaType.video ? (
                        <Video className="w-3 h-3" />
                      ) : (
                        <Link2 className="w-3 h-3" />
                      )}
                      {item.mediaType === MediaType.video ? "Video" : "Link"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => openEdit(item)}
                        data-ocid={`portfolio.edit_button.${idx + 1}`}
                        className="w-8 h-8 text-muted-foreground hover:text-foreground"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => setDeleteTarget(item)}
                        data-ocid={`portfolio.delete_button.${idx + 1}`}
                        className="w-8 h-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={modalOpen} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display">
              {editTarget ? "Edit Portfolio Item" : "Add Portfolio Item"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {editTarget
                ? "Update project details"
                : "Add a new project to your portfolio"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                data-ocid="portfolio.title_input"
                placeholder="Project name"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="portfolio.title_input.field_error"
                >
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                data-ocid="portfolio.description_input"
                rows={3}
                placeholder="Brief project description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="portfolio.description_input.field_error"
                >
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Service Type</Label>
                <Controller
                  name="serviceType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger data-ocid="portfolio.service_select">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {ALL_SERVICE_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {getServiceLabel(t)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Media Type</Label>
                <Controller
                  name="mediaType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger data-ocid="portfolio.media_select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={MediaType.link}>Link</SelectItem>
                        <SelectItem value={MediaType.video}>Video</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            {watchedMediaType === MediaType.link ? (
              <div className="space-y-1.5">
                <Label htmlFor="url">Project URL</Label>
                <Input
                  id="url"
                  data-ocid="portfolio.url_input"
                  placeholder="https://..."
                  {...register("url", {
                    required:
                      watchedMediaType === MediaType.link
                        ? "URL is required"
                        : false,
                  })}
                />
                {errors.url && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="portfolio.url_input.field_error"
                  >
                    {errors.url.message}
                  </p>
                )}
              </div>
            ) : (
              <div className="space-y-1.5">
                <Label>Video File</Label>
                <button
                  type="button"
                  className="border border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors w-full"
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) =>
                    e.key === "Enter" && fileInputRef.current?.click()
                  }
                  data-ocid="portfolio.video_dropzone"
                >
                  <Video className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {watch("videoFile")?.[0]?.name ??
                      "Click to select video file"}
                  </p>
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}
                </button>
                {(() => {
                  const { ref: registerRef, ...videoFileReg } =
                    register("videoFile");
                  return (
                    <input
                      ref={(el) => {
                        fileInputRef.current = el;
                        registerRef(el);
                      }}
                      {...videoFileReg}
                      type="file"
                      accept="video/*"
                      className="hidden"
                      data-ocid="portfolio.video_upload_button"
                    />
                  );
                })()}
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="thumbnailUrl">Thumbnail URL (optional)</Label>
              <Input
                id="thumbnailUrl"
                data-ocid="portfolio.thumbnail_input"
                placeholder="https://..."
                {...register("thumbnailUrl")}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
                data-ocid="portfolio.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                data-ocid="portfolio.submit_button"
              >
                {isSubmitting
                  ? editTarget
                    ? "Saving..."
                    : "Adding..."
                  : editTarget
                    ? "Save Changes"
                    : "Add Item"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent className="max-w-sm bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display">Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-medium text-foreground">
                {deleteTarget?.title}
              </span>
              ? This cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              data-ocid="portfolio.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={confirmDelete}
              disabled={deleteItem.isPending}
              data-ocid="portfolio.confirm_button"
            >
              {deleteItem.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
