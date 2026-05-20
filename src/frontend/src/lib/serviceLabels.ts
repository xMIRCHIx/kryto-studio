import { ServiceType } from "@/backend";

export const SERVICE_LABELS: Record<ServiceType, string> = {
  [ServiceType.webAppDev]: "Web/App Development",
  [ServiceType.videoEditing]: "Video Editing",
  [ServiceType.graphicsDesign]: "Graphics Design",
  [ServiceType.uiUxDesign]: "UI/UX Design",
};

export const SERVICE_ICONS: Record<ServiceType, string> = {
  [ServiceType.webAppDev]: "🌐",
  [ServiceType.videoEditing]: "🎬",
  [ServiceType.graphicsDesign]: "🎨",
  [ServiceType.uiUxDesign]: "✏️",
};

export const ALL_SERVICE_TYPES = Object.values(ServiceType);

export function getServiceLabel(type: ServiceType): string {
  return SERVICE_LABELS[type] ?? type;
}
