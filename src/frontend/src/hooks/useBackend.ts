import { createActor } from "@/backend";
import type {
  Appointment,
  AppointmentInput,
  AppointmentStatus,
  PortfolioItem,
  PortfolioItemInput,
  Review,
  ReviewInput,
  ServiceType,
} from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useBackendActor() {
  return useActor(createActor);
}

// ─── Portfolio ───────────────────────────────────────────────────────────────

export function usePortfolioItems() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PortfolioItem[]>({
    queryKey: ["portfolio"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPortfolioItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePortfolioByService(serviceType: ServiceType) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<PortfolioItem[]>({
    queryKey: ["portfolio", serviceType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPortfolioByService(serviceType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddPortfolioItem() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (item: PortfolioItemInput) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.addPortfolioItem(item);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio"] }),
  });
}

export function useUpdatePortfolioItem() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      item,
    }: { id: bigint; item: PortfolioItemInput }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updatePortfolioItem(id, item);
      if (result.__kind__ === "err") throw new Error(result.err);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio"] }),
  });
}

export function useDeletePortfolioItem() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.deletePortfolioItem(id);
      if (result.__kind__ === "err") throw new Error(result.err);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["portfolio"] }),
  });
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

export function useReviews() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddReview() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (review: ReviewInput) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.addReview(review);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews"] }),
  });
}

export function useUpdateReview() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, review }: { id: bigint; review: ReviewInput }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updateReview(id, review);
      if (result.__kind__ === "err") throw new Error(result.err);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews"] }),
  });
}

export function useDeleteReview() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.deleteReview(id);
      if (result.__kind__ === "err") throw new Error(result.err);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["reviews"] }),
  });
}

// ─── Appointments ─────────────────────────────────────────────────────────────

export function useAppointments() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Appointment[]>({
    queryKey: ["appointments"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAppointments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitAppointment() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (appointment: AppointmentInput) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.submitAppointment(appointment);
      if (result.__kind__ === "err") throw new Error(result.err);
      return result.ok;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["appointments"] }),
  });
}

export function useUpdateAppointmentStatus() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      status,
    }: { id: bigint; status: AppointmentStatus }) => {
      if (!actor) throw new Error("Actor not available");
      const result = await actor.updateAppointmentStatus(id, status);
      if (result.__kind__ === "err") throw new Error(result.err);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["appointments"] }),
  });
}

// ─── Admin Auth ───────────────────────────────────────────────────────────────

export function useIsAdmin() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}
