import { HRLayout } from "@/components/HRLayout";
import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import {
  Users,
  UserPlus,
  CalendarDays,
  TrendingUp,
  Clock,
  FileText,
  CheckSquare,
} from "lucide-react";

const recentActivities = [
  { action: "Leave request approved", person: "Sarah Miller", time: "2 hours ago", type: "leave" as const },
  { action: "New employee onboarded", person: "Michael Chen", time: "5 hours ago", type: "hire" as const },
  { action: "Performance review submitted", person: "Emily Davis", time: "1 day ago", type: "review" as const },
  { action: "Exit clearance completed", person: "Robert Wilson", time: "1 day ago", type: "exit" as const },
  { action: "Training course completed", person: "Jessica Lee", time: "2 days ago", type: "training" as const },
];

const activityIcons = {
  leave: CalendarDays,
  hire: UserPlus,
  review: TrendingUp,
  exit: FileText,
  training: CheckSquare,
};

const upcomingEvents = [
  { title: "Q1 Performance Reviews", date: "Mar 1-15", status: "Upcoming" },
  { title: "New Hire Orientation", date: "Mar 3", status: "Scheduled" },
  { title: "Benefits Enrollment", date: "Mar 10", status: "Upcoming" },
  { title: "Team Building Event", date: "Mar 18", status: "Planning" },
];

const Dashboard = () => {
  return (
    <HRLayout title="Dashboard" subtitle="Welcome back, John. Here's your HR overview.">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Total Employees"
          value={248}
          icon={Users}
          trend="+12 this month"
          trendUp
          variant="accent"
        />
        <StatsCard
          title="Open Positions"
          value={14}
          icon={UserPlus}
          trend="3 new this week"
          trendUp
          variant="info"
        />
        <StatsCard
          title="On Leave Today"
          value={8}
          icon={CalendarDays}
          variant="warning"
        />
        <StatsCard
          title="Pending Approvals"
          value={23}
          icon={Clock}
          trend="5 urgent"
          variant="default"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border shadow-sm">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-card-foreground">Recent Activity</h2>
          </div>
          <div className="divide-y divide-border">
            {recentActivities.map((activity, i) => {
              const Icon = activityIcons[activity.type];
              return (
                <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/50 transition-colors">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.person}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-card rounded-lg border border-border shadow-sm">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-card-foreground">Upcoming Events</h2>
          </div>
          <div className="divide-y divide-border">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="px-5 py-3.5">
                <p className="text-sm font-medium text-card-foreground">{event.title}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                  <StatusBadge
                    label={event.status}
                    variant={event.status === "Upcoming" ? "info" : event.status === "Scheduled" ? "success" : "warning"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HRLayout>
  );
};

export default Dashboard;
