import { AppointmentStatus } from "@/backend";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useAppointments,
  usePortfolioItems,
  useReviews,
} from "@/hooks/useBackend";
import { CalendarCheck, Clock, Images, Star } from "lucide-react";

export default function AdminDashboard() {
  const { data: portfolio, isLoading: pLoading } = usePortfolioItems();
  const { data: reviews, isLoading: rLoading } = useReviews();
  const { data: appointments, isLoading: aLoading } = useAppointments();

  const pendingCount =
    appointments?.filter((a) => a.status === AppointmentStatus.pending)
      .length ?? 0;

  const stats = [
    {
      label: "Portfolio Items",
      value: portfolio?.length ?? 0,
      icon: Images,
      loading: pLoading,
      ocid: "dashboard.portfolio_stat",
    },
    {
      label: "Client Reviews",
      value: reviews?.length ?? 0,
      icon: Star,
      loading: rLoading,
      ocid: "dashboard.reviews_stat",
    },
    {
      label: "Total Bookings",
      value: appointments?.length ?? 0,
      icon: CalendarCheck,
      loading: aLoading,
      ocid: "dashboard.bookings_stat",
    },
    {
      label: "Pending",
      value: pendingCount,
      icon: Clock,
      loading: aLoading,
      ocid: "dashboard.pending_stat",
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">Overview of Kryto Studio</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, icon: Icon, loading, ocid }) => (
          <Card key={label} data-ocid={ocid} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {label}
              </CardTitle>
              <Icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              {loading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-3xl font-display font-bold text-foreground">
                  {value}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
