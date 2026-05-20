import type { AppointmentStatus, MediaType, ServiceType } from "@/backend";

export type { ServiceType, MediaType, AppointmentStatus };
export type { PortfolioItem, PortfolioItemInput } from "@/backend";
export type { Review, ReviewInput } from "@/backend";
export type { Appointment, AppointmentInput } from "@/backend";
export type { UserRole } from "@/backend";

export type ServiceTypeKey = keyof typeof ServiceType;
export type MediaTypeKey = keyof typeof MediaType;
export type AppointmentStatusKey = keyof typeof AppointmentStatus;
