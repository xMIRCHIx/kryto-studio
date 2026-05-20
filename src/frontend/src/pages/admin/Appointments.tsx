import { AppointmentStatus } from "@/backend";
import type { Appointment } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useAppointments,
  useUpdateAppointmentStatus,
} from "@/hooks/useBackend";
import { getServiceLabel } from "@/lib/serviceLabels";
import { CalendarX2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const STATUS_LABELS: Record<AppointmentStatus, string> = {
  [AppointmentStatus.pending]: "Pending",
  [AppointmentStatus.confirmed]: "Confirmed",
  [AppointmentStatus.cancelled]: "Cancelled",
};

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  [AppointmentStatus.pending]:
    "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  [AppointmentStatus.confirmed]: "bg-primary/15 text-primary border-primary/30",
  [AppointmentStatus.cancelled]:
    "bg-destructive/15 text-destructive border-destructive/30",
};

function AppointmentRow({ appt, index }: { appt: Appointment; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const updateStatus = useUpdateAppointmentStatus();

  const handleStatusChange = async (status: string) => {
    try {
      const newStatus = status as AppointmentStatus;
      await updateStatus.mutateAsync({ id: appt.id, status: newStatus });
      toast.success("Status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

  return (
    <>
      <tr
        data-ocid={`appointments.item.${index}`}
        className="border-b border-border hover:bg-muted/20 transition-colors"
      >
        <td className="px-4 py-3">
          <p className="font-medium text-foreground">{appt.name}</p>
          <p className="text-xs text-muted-foreground">{appt.email}</p>
        </td>
        <td className="px-4 py-3 text-sm text-muted-foreground">
          {appt.phone}
        </td>
        <td className="px-4 py-3">
          <Badge variant="secondary" className="text-xs">
            {getServiceLabel(appt.serviceType)}
          </Badge>
        </td>
        <td className="px-4 py-3 text-sm text-muted-foreground">
          {appt.dateTime}
        </td>
        <td className="px-4 py-3">
          <Badge
            variant="outline"
            className={`text-xs font-medium ${STATUS_STYLES[appt.status]}`}
          >
            {STATUS_LABELS[appt.status]}
          </Badge>
        </td>
        <td className="px-4 py-3">
          <Select
            value={appt.status}
            onValueChange={handleStatusChange}
            disabled={updateStatus.isPending}
          >
            <SelectTrigger
              className="h-7 text-xs w-32"
              data-ocid={`appointments.status_select.${index}`}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={AppointmentStatus.pending}>Pending</SelectItem>
              <SelectItem value={AppointmentStatus.confirmed}>
                Confirmed
              </SelectItem>
              <SelectItem value={AppointmentStatus.cancelled}>
                Cancelled
              </SelectItem>
            </SelectContent>
          </Select>
        </td>
        <td className="px-4 py-3">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => setExpanded((v) => !v)}
            data-ocid={`appointments.expand_button.${index}`}
            className="w-8 h-8 text-muted-foreground hover:text-foreground"
            aria-label={expanded ? "Collapse details" : "Expand details"}
          >
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </td>
      </tr>
      {expanded && (
        <tr className="border-b border-border bg-muted/10">
          <td colSpan={7} className="px-4 py-3">
            <div className="rounded-lg bg-muted/20 border border-border p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                Project Description
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {appt.projectDescription || "No description provided."}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function AdminAppointments() {
  const { data: appointments = [], isLoading } = useAppointments();

  const sorted = [...appointments].sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt),
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Appointments
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Manage client booking requests
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            AppointmentStatus.pending,
            AppointmentStatus.confirmed,
            AppointmentStatus.cancelled,
          ].map((s) => (
            <div
              key={s}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  s === AppointmentStatus.pending
                    ? "bg-yellow-400"
                    : s === AppointmentStatus.confirmed
                      ? "bg-primary"
                      : "bg-destructive"
                }`}
              />
              {STATUS_LABELS[s]}:{" "}
              <span className="font-semibold text-foreground">
                {appointments.filter((a) => a.status === s).length}
              </span>
            </div>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton
              key={`appt-skeleton-${i * 11 + 5}`}
              className="h-14 w-full rounded-lg"
            />
          ))}
        </div>
      ) : sorted.length === 0 ? (
        <div
          data-ocid="appointments.empty_state"
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <CalendarX2 className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No appointments yet.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Bookings from clients will appear here.
          </p>
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
                  Phone
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Service
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Date / Time
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">
                  Change
                </th>
                <th className="text-right px-4 py-3 font-medium text-muted-foreground">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((appt, idx) => (
                <AppointmentRow
                  key={String(appt.id)}
                  appt={appt}
                  index={idx + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
