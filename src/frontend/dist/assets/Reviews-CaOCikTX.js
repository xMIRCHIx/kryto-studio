import { u as useReviews, o as useAddReview, p as useUpdateReview, q as useDeleteReview, r as reactExports, m as ServiceType, j as jsxRuntimeExports, B as Button, S as Star, n as ue } from "./index-C00UYYw1.js";
import { B as Badge } from "./badge-vAGPBMn-.js";
import { P as Plus, T as Trash2, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-P_sw1rpn.js";
import { u as useForm, L as Label, I as Input, C as Controller, T as Textarea } from "./index.esm-BYFPUwmH.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BJMPHTlp.js";
import { S as Skeleton } from "./skeleton-BjIHPZPf.js";
import { g as getServiceLabel, A as ALL_SERVICE_TYPES } from "./serviceLabels-D830frqo.js";
import { M as MessageSquare } from "./message-square-DjpwxFkJ.js";
import { P as Pen } from "./pen-7M1Uv6pO.js";
const defaultValues = {
  clientName: "",
  serviceType: ServiceType.webAppDev,
  rating: 5,
  reviewText: ""
};
function StarRating({
  value,
  onChange
}) {
  const [hover, setHover] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", "data-ocid": "reviews.rating_input", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(star),
      onMouseEnter: () => setHover(star),
      onMouseLeave: () => setHover(0),
      className: "p-0.5 transition-transform hover:scale-110",
      "aria-label": `Rate ${star} stars`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          className: `w-6 h-6 transition-colors ${star <= (hover || value) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`
        }
      )
    },
    star
  )) });
}
function AdminReviews() {
  const { data: reviews = [], isLoading } = useReviews();
  const addReview = useAddReview();
  const updateReview = useUpdateReview();
  const deleteReview = useDeleteReview();
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [editTarget, setEditTarget] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues });
  reactExports.useEffect(() => {
    if (editTarget) {
      reset({
        clientName: editTarget.clientName,
        serviceType: editTarget.serviceType,
        rating: Number(editTarget.rating),
        reviewText: editTarget.reviewText
      });
    } else {
      reset(defaultValues);
    }
  }, [editTarget, reset]);
  const openAdd = () => {
    setEditTarget(null);
    setModalOpen(true);
  };
  const openEdit = (r) => {
    setEditTarget(r);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditTarget(null);
  };
  const onSubmit = async (data) => {
    try {
      const input = {
        clientName: data.clientName,
        serviceType: data.serviceType,
        rating: BigInt(data.rating),
        reviewText: data.reviewText
      };
      if (editTarget) {
        await updateReview.mutateAsync({ id: editTarget.id, review: input });
        ue.success("Review updated");
      } else {
        await addReview.mutateAsync(input);
        ue.success("Review added");
      }
      closeModal();
    } catch (err) {
      ue.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteReview.mutateAsync(deleteTarget.id);
      ue.success("Review deleted");
    } catch {
      ue.error("Delete failed");
    } finally {
      setDeleteTarget(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: "Client testimonials & ratings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openAdd, "data-ocid": "reviews.add_button", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
        " Add Review"
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Skeleton,
      {
        className: "h-14 w-full rounded-lg"
      },
      `reviews-skeleton-${i * 17 + 3}`
    )) }) : reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "reviews.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-12 h-12 text-muted-foreground mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No reviews yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "mt-4", onClick: openAdd, children: "Add first review" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-medium text-muted-foreground", children: "Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-medium text-muted-foreground", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: reviews.map((review, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          "data-ocid": `reviews.item.${idx + 1}`,
          className: "border-b border-border last:border-0 hover:bg-muted/20 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: review.clientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: getServiceLabel(review.serviceType) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: `w-3.5 h-3.5 ${i < Number(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`
                },
                `review-star-${i}`
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                Number(review.rating),
                "/5"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground truncate", children: review.reviewText }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "icon",
                  variant: "ghost",
                  onClick: () => openEdit(review),
                  "data-ocid": `reviews.edit_button.${idx + 1}`,
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
                  onClick: () => setDeleteTarget(review),
                  "data-ocid": `reviews.delete_button.${idx + 1}`,
                  className: "w-8 h-8 text-muted-foreground hover:text-destructive",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                }
              )
            ] }) })
          ]
        },
        String(review.id)
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: modalOpen, onOpenChange: (open) => !open && closeModal(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md bg-card border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: editTarget ? "Edit Review" : "Add Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-muted-foreground", children: editTarget ? "Update client testimonial" : "Add a new client review" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "clientName", children: "Client Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "clientName",
              "data-ocid": "reviews.client_name_input",
              placeholder: "John Smith",
              ...register("clientName", {
                required: "Client name is required"
              })
            }
          ),
          errors.clientName && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "reviews.client_name_input.field_error",
              children: errors.clientName.message
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "serviceType",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: field.value, onValueChange: field.onChange, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "reviews.service_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select service" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ALL_SERVICE_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: getServiceLabel(t) }, t)) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Controller,
            {
              name: "rating",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: field.value, onChange: field.onChange })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reviewText", children: "Review" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "reviewText",
              "data-ocid": "reviews.review_text_input",
              rows: 4,
              placeholder: "What did the client say?",
              ...register("reviewText", {
                required: "Review text is required"
              })
            }
          ),
          errors.reviewText && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs text-destructive",
              "data-ocid": "reviews.review_text_input.field_error",
              children: errors.reviewText.message
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
              "data-ocid": "reviews.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              "data-ocid": "reviews.submit_button",
              children: isSubmitting ? editTarget ? "Saving..." : "Adding..." : editTarget ? "Save Changes" : "Add Review"
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Delete Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogDescription, { children: [
              "Delete review from",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: deleteTarget == null ? void 0 : deleteTarget.clientName }),
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
                "data-ocid": "reviews.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "destructive",
                onClick: confirmDelete,
                disabled: deleteReview.isPending,
                "data-ocid": "reviews.confirm_button",
                children: deleteReview.isPending ? "Deleting..." : "Delete"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdminReviews as default
};
