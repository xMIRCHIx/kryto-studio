import { ServiceType } from "@/backend";
import type { Review, ReviewInput } from "@/backend";
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
  useAddReview,
  useDeleteReview,
  useReviews,
  useUpdateReview,
} from "@/hooks/useBackend";
import { ALL_SERVICE_TYPES, getServiceLabel } from "@/lib/serviceLabels";
import { Edit2, MessageSquare, Plus, Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormValues {
  clientName: string;
  serviceType: ServiceType;
  rating: number;
  reviewText: string;
}

const defaultValues: FormValues = {
  clientName: "",
  serviceType: ServiceType.webAppDev,
  rating: 5,
  reviewText: "",
};

function StarRating({
  value,
  onChange,
}: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1" data-ocid="reviews.rating_input">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="p-0.5 transition-transform hover:scale-110"
          aria-label={`Rate ${star} stars`}
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              star <= (hover || value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function AdminReviews() {
  const { data: reviews = [], isLoading } = useReviews();
  const addReview = useAddReview();
  const updateReview = useUpdateReview();
  const deleteReview = useDeleteReview();

  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Review | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Review | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues });

  useEffect(() => {
    if (editTarget) {
      reset({
        clientName: editTarget.clientName,
        serviceType: editTarget.serviceType,
        rating: Number(editTarget.rating),
        reviewText: editTarget.reviewText,
      });
    } else {
      reset(defaultValues);
    }
  }, [editTarget, reset]);

  const openAdd = () => {
    setEditTarget(null);
    setModalOpen(true);
  };
  const openEdit = (r: Review) => {
    setEditTarget(r);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditTarget(null);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const input: ReviewInput = {
        clientName: data.clientName,
        serviceType: data.serviceType,
        rating: BigInt(data.rating),
        reviewText: data.reviewText,
      };
      if (editTarget) {
        await updateReview.mutateAsync({ id: editTarget.id, review: input });
        toast.success("Review updated");
      } else {
        await addReview.mutateAsync(input);
        toast.success("Review added");
      }
      closeModal();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteReview.mutateAsync(deleteTarget.id);
      toast.success("Review deleted");
    } catch {
      toast.error("Delete failed");
    } finally {
      setDeleteTarget(null);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Reviews
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Client testimonials &amp; ratings
          </p>
        </div>
        <Button onClick={openAdd} data-ocid="reviews.add_button">
          <Plus className="w-4 h-4 mr-2" /> Add Review
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <Skeleton
              key={`reviews-skeleton-${i * 17 + 3}`}
              className="h-14 w-full rounded-lg"
            />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div
          data-ocid="reviews.empty_state"
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <MessageSquare className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No reviews yet.</p>
          <Button variant="outline" className="mt-4" onClick={openAdd}>
            Add first review
          </Button>
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/30 border-b border-border">
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Client
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Service
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Rating
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Review
                </th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, idx) => (
                <tr
                  key={String(review.id)}
                  data-ocid={`reviews.item.${idx + 1}`}
                  className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-foreground">
                    {review.clientName}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className="text-xs">
                      {getServiceLabel(review.serviceType)}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          // biome-ignore lint/suspicious/noArrayIndexKey: static fixed-length decorative array
                          key={`review-star-${i}`}
                          className={`w-3.5 h-3.5 ${
                            i < Number(review.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        {Number(review.rating)}/5
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 max-w-xs">
                    <p className="text-muted-foreground truncate">
                      {review.reviewText}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => openEdit(review)}
                        data-ocid={`reviews.edit_button.${idx + 1}`}
                        className="w-8 h-8 text-muted-foreground hover:text-foreground"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => setDeleteTarget(review)}
                        data-ocid={`reviews.delete_button.${idx + 1}`}
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
        <DialogContent className="max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display">
              {editTarget ? "Edit Review" : "Add Review"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {editTarget
                ? "Update client testimonial"
                : "Add a new client review"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                data-ocid="reviews.client_name_input"
                placeholder="John Smith"
                {...register("clientName", {
                  required: "Client name is required",
                })}
              />
              {errors.clientName && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="reviews.client_name_input.field_error"
                >
                  {errors.clientName.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label>Service Type</Label>
              <Controller
                name="serviceType"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger data-ocid="reviews.service_select">
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
              <Label>Rating</Label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <StarRating value={field.value} onChange={field.onChange} />
                )}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reviewText">Review</Label>
              <Textarea
                id="reviewText"
                data-ocid="reviews.review_text_input"
                rows={4}
                placeholder="What did the client say?"
                {...register("reviewText", {
                  required: "Review text is required",
                })}
              />
              {errors.reviewText && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="reviews.review_text_input.field_error"
                >
                  {errors.reviewText.message}
                </p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={closeModal}
                data-ocid="reviews.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                data-ocid="reviews.submit_button"
              >
                {isSubmitting
                  ? editTarget
                    ? "Saving..."
                    : "Adding..."
                  : editTarget
                    ? "Save Changes"
                    : "Add Review"}
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
            <DialogTitle className="font-display">Delete Review</DialogTitle>
            <DialogDescription>
              Delete review from{" "}
              <span className="font-medium text-foreground">
                {deleteTarget?.clientName}
              </span>
              ? This cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              data-ocid="reviews.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={confirmDelete}
              disabled={deleteReview.isPending}
              data-ocid="reviews.confirm_button"
            >
              {deleteReview.isPending ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
