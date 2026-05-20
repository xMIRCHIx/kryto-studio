import { m as ServiceType } from "./index-C00UYYw1.js";
const SERVICE_LABELS = {
  [ServiceType.webAppDev]: "Web/App Development",
  [ServiceType.videoEditing]: "Video Editing",
  [ServiceType.graphicsDesign]: "Graphics Design",
  [ServiceType.uiUxDesign]: "UI/UX Design"
};
const SERVICE_ICONS = {
  [ServiceType.webAppDev]: "🌐",
  [ServiceType.videoEditing]: "🎬",
  [ServiceType.graphicsDesign]: "🎨",
  [ServiceType.uiUxDesign]: "✏️"
};
const ALL_SERVICE_TYPES = Object.values(ServiceType);
function getServiceLabel(type) {
  return SERVICE_LABELS[type] ?? type;
}
export {
  ALL_SERVICE_TYPES as A,
  SERVICE_LABELS as S,
  SERVICE_ICONS as a,
  getServiceLabel as g
};
