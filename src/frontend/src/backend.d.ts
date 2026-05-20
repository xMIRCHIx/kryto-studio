import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface AppointmentInput {
    serviceType: ServiceType;
    projectDescription: string;
    name: string;
    email: string;
    phone: string;
    dateTime: string;
}
export interface PortfolioItemInput {
    url: string;
    title: string;
    serviceType: ServiceType;
    thumbnailUrl?: string;
    description: string;
    videoBlob?: ExternalBlob;
    mediaType: MediaType;
}
export interface PortfolioItem {
    id: bigint;
    url: string;
    title: string;
    serviceType: ServiceType;
    thumbnailUrl?: string;
    createdAt: bigint;
    description: string;
    videoBlob?: ExternalBlob;
    mediaType: MediaType;
}
export interface Appointment {
    id: bigint;
    status: AppointmentStatus;
    serviceType: ServiceType;
    projectDescription: string;
    name: string;
    createdAt: bigint;
    email: string;
    phone: string;
    dateTime: string;
}
export interface ReviewInput {
    serviceType: ServiceType;
    clientName: string;
    reviewText: string;
    rating: bigint;
}
export interface Review {
    id: bigint;
    serviceType: ServiceType;
    clientName: string;
    createdAt: bigint;
    reviewText: string;
    rating: bigint;
}
export enum AppointmentStatus {
    cancelled = "cancelled",
    pending = "pending",
    confirmed = "confirmed"
}
export enum MediaType {
    video = "video",
    link = "link"
}
export enum ServiceType {
    videoEditing = "videoEditing",
    webAppDev = "webAppDev",
    uiUxDesign = "uiUxDesign",
    graphicsDesign = "graphicsDesign"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addPortfolioItem(item: PortfolioItemInput): Promise<{
        __kind__: "ok";
        ok: bigint;
    } | {
        __kind__: "err";
        err: string;
    }>;
    addReview(review: ReviewInput): Promise<{
        __kind__: "ok";
        ok: bigint;
    } | {
        __kind__: "err";
        err: string;
    }>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deletePortfolioItem(id: bigint): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    deleteReview(id: bigint): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    getAppointments(): Promise<Array<Appointment>>;
    getCallerUserRole(): Promise<UserRole>;
    getPortfolioByService(serviceType: ServiceType): Promise<Array<PortfolioItem>>;
    getPortfolioItems(): Promise<Array<PortfolioItem>>;
    getReviews(): Promise<Array<Review>>;
    isCallerAdmin(): Promise<boolean>;
    submitAppointment(appointment: AppointmentInput): Promise<{
        __kind__: "ok";
        ok: bigint;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateAppointmentStatus(id: bigint, status: AppointmentStatus): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updatePortfolioItem(id: bigint, item: PortfolioItemInput): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
    updateReview(id: bigint, review: ReviewInput): Promise<{
        __kind__: "ok";
        ok: null;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
