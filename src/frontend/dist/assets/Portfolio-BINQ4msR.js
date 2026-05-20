import { c as createLucideIcon, e as usePortfolioItems, i as useAddPortfolioItem, k as useUpdatePortfolioItem, l as useDeletePortfolioItem, r as reactExports, M as MediaType, m as ServiceType, j as jsxRuntimeExports, B as Button, E as ExternalBlob, n as ue } from "./index-C00UYYw1.js";
import { B as Badge } from "./badge-vAGPBMn-.js";
import { P as Plus, T as Trash2, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-P_sw1rpn.js";
import { u as useForm, L as Label, I as Input, T as Textarea, C as Controller } from "./index.esm-BYFPUwmH.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BJMPHTlp.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { g as getServiceLabel, A as ALL_SERVICE_TYPES } from "./serviceLabels-D830frqo.js";
import { V as Video } from "./video-DA7qHrTo.js";
import { P as Pen } from "./pen-7M1Uv6pO.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
];
const ImageOff = createLucideIcon("image-off", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode);
const defaultValues = {
  title: "",
  description: "",
  serviceType: ServiceType.webAppDev,
  mediaType: MediaType.link,
  url: "",
  thumbnailUrl: "",
  videoFile: null
};
function AdminPortfolio() {
  var _a, _b;
  const { data: items = [], isLoading } = usePortfolioItems();
  const addItem = useAddPortfolioItem();
  const updateItem = useUpdatePortfolioItem();
  const deleteItem = useDeletePortfolioItem();
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [uploadProgress, setUploadProgress] = reactExports.useState(0);
  const fileInputRef = reactExports.useRef(null);
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues });
  const watchedMediaType = watch("mediaType");
  reactExports.useEffect(() => {
    if (editTarget) {
      reset({
        title: editTarget.title,
        description: editTarget.description,
        serviceType: editTarget.serviceType,
        mediaType: editTarget.mediaType,
        url: editTarget.url ?? "",
        thumbnailUrl: editTarget.thumbnailUrl ?? "",
        videoFile: null
      });
    } else {
      reset(defaultValues);
    }
  }, [editTarget, reset]);
  const openAdd = () => {
    setEditTarget(null);
    setModalOpen(true);
  };
  const openEdit = (item) => {
    setEditTarget(item);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditTarget(null);
    setUploadProgress(0);
  };
  const onSubmit = async (data) => {
    var _a2;
    try {
      let videoBlob;
      if (data.mediaType === MediaType.video && ((_a2 = data.videoFile) == null ? void 0 : _a2[0])) {
        const bytes = new Uint8Array(await data.videoFile[0].arrayBuffer());
        videoBlob = ExternalBlob.fromBytes(bytes).withUploadProgress(
          (pct) => setUploadProgress(pct)
        );
      }
      const input = {
        title: data.title,
        description: data.description,
        serviceType: data.serviceType,
        mediaType: data.mediaType,
        url: data.url,
        thumbnailUrl: data.thumbnailUrl || void 0,
        videoBlob
      };
      if (editTarget) {
        await updateItem.mutateAsync({ id: editTarget.id, item: input });
        ue.success("Portfolio item updated");
      } else {
        await addItem.mutateAsync(input);
        ue.success("Portfolio item added");
      }
      closeModal();
    } catch (err) {
      ue.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteItem.mutateAsync(deleteTarget.id);
      ue.success("Item deleted");
    } catch {
      ue.error("Delete failed");
    } finally {
      setDeleteTarget(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Manage your work showcase" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openAdd, "data-ocid": "portfolio.add_button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
        " Add New"
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton,
      {
        className: "h-16 w-full rounded-lg"
      },
      `portfolio-loading-${i}`
    )) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "portfolio.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOff, { className: "w-12 h-12 text-muted-foreground mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No portfolio items yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "mt-4", onClick: openAdd, children: "Add your first project" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          "data-ocid": `portfolio.item.${idx + 1}`,
          className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              item.thumbnailUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: item.thumbnailUrl,
                  alt: item.title,
                  className: "w-10 h-10 rounded object-cover flex-shrink-0 border border-border"
                }
              ) : item.videoBlob ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-5 h-5 text-primary" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOff, { className: "w-4 h-4 text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground truncate", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate max-w-xs", children: item.description })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: getServiceLabel(item.serviceType) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: `text-xs gap-1 ${item.mediaType === MediaType.video ? "border-primary/40 text-primary" : "border-secondary/40 text-secondary"}`,
                children: [
                  item.mediaType === MediaType.video ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "w-3 h-3" }),
                  item.mediaType === MediaType.video ? "Video" : "Link"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "icon",
                  variant: "ghost",
                  onClick: () => openEdit(item),
                  "data-ocid": `portfolio.edit_button.${idx + 1}`,
                  className: "w-8 h-8 text-muted-foreground hover:text-foreground",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "icon",
                  variant: "ghost",
                  onClick: () => setDeleteTarget(item),
                  "data-ocid": `portfolio.delete_button.${idx + 1}`,
                  className: "w-8 h-8 text-muted-foreground hover:text-destructive",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] }) })
          ]
        },
        String(item.id)
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: modalOpen, onOpenChange: (open) => !open && closeModal(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-card border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: editTarget ? "Edit Portfolio Item" : "Add Portfolio Item" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-muted-foreground", children: editTarget ? "Update project details" : "Add a new project to your portfolio" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "title",
              "data-ocid": "portfolio.title_input",
              placeholder: "Project name",
              ...register("title", { required: "Title is required" })
            }
          ),
          errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "portfolio.title_input.field_error",
              children: errors.title.message
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "description",
              "data-ocid": "portfolio.description_input",
              rows: 3,
              placeholder: "Brief project description",
              ...register("description", {
                required: "Description is required"
              })
            }
          ),
          errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "portfolio.description_input.field_error",
              children: errors.description.message
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "serviceType",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "portfolio.service_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select service" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ALL_SERVICE_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: getServiceLabel(t) }, t)) })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Media Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Controller,
              {
                name: "mediaType",
                control,
                render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "portfolio.media_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: MediaType.link, children: "Link" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: MediaType.video, children: "Video" })
                  ] })
                ] })
              }
            )
          ] })
        ] }),
        watchedMediaType === MediaType.link ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "url", children: "Project URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "url",
              "data-ocid": "portfolio.url_input",
              placeholder: "https://...",
              ...register("url", {
                required: watchedMediaType === MediaType.link ? "URL is required" : false
              })
            }
          ),
          errors.url && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "portfolio.url_input.field_error",
              children: errors.url.message
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Video File" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "border border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors w-full",
              onClick: () => {
                var _a2;
                return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
              },
              onKeyDown: (e) => {
                var _a2;
                return e.key === "Enter" && ((_a2 = fileInputRef.current) == null ? void 0 : _a2.click());
              },
              "data-ocid": "portfolio.video_dropzone",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-6 h-6 text-muted-foreground mx-auto mb-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: ((_b = (_a = watch("videoFile")) == null ? void 0 : _a[0]) == null ? void 0 : _b.name) ?? "Click to select video file" }),
                uploadProgress > 0 && uploadProgress < 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full bg-primary transition-all",
                    style: { width: `${uploadProgress}%` }
                  }
                ) })
              ]
            }
          ),
          (() => {
            const { ref: registerRef, ...videoFileReg } = register("videoFile");
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: (el) => {
                  fileInputRef.current = el;
                  registerRef(el);
                },
                ...videoFileReg,
                type: "file",
                accept: "video/*",
                className: "hidden",
                "data-ocid": "portfolio.video_upload_button"
              }
            );
          })()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "thumbnailUrl", children: "Thumbnail URL (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "thumbnailUrl",
              "data-ocid": "portfolio.thumbnail_input",
              placeholder: "https://...",
              ...register("thumbnailUrl")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: closeModal,
              "data-ocid": "portfolio.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              "data-ocid": "portfolio.submit_button",
              children: isSubmitting ? editTarget ? "Saving..." : "Adding..." : editTarget ? "Save Changes" : "Add Item"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!deleteTarget,
        onOpenChange: (open) => !open && setDeleteTarget(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm bg-card border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Delete Item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
              "Are you sure you want to delete",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: deleteTarget == null ? void 0 : deleteTarget.title }),
              "? This cannot be undone."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setDeleteTarget(null),
                "data-ocid": "portfolio.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "destructive",
                onClick: confirmDelete,
                disabled: deleteItem.isPending,
                "data-ocid": "portfolio.confirm_button",
                children: deleteItem.isPending ? "Deleting..." : "Delete"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdminPortfolio as default
};
