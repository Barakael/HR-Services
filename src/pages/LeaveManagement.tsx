import { HRLayout } from "@/components/HRLayout";
import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Plus, Umbrella, Thermometer, Baby } from "lucide-react";

const leaveBalances = [
  { type: "Annual Leave", used: 8, total: 21, icon: Umbrella, color: "info" as const },
  { type: "Sick Leave", used: 3, total: 10, icon: Thermometer, color: "warning" as const },
  { type: "Personal Leave", used: 1, total: 5, icon: CalendarDays, color: "accent" as const },
  { type: "Parental Leave", used: 0, total: 90, icon: Baby, color: "success" as const },
];

const leaveRequests = [
  { name: "Sarah Miller", type: "Annual", from: "Mar 5", to: "Mar 7", days: 3, status: "Approved" },
  { name: "James Brown", type: "Sick", from: "Feb 27", to: "Feb 28", days: 2, status: "Approved" },
  { name: "Emily Davis", type: "Personal", from: "Mar 12", to: "Mar 12", days: 1, status: "Pending" },
  { name: "Michael Chen", type: "Annual", from: "Mar 18", to: "Mar 25", days: 6, status: "Pending" },
];

const LeaveManagement = () => {
  return (
    <HRLayout
      title="Leave Management"
      subtitle="Track time-off requests and balances"
      actions={
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
          <Plus className="h-4 w-4 mr-2" />
          Request Leave
        </Button>
      }
    >
      {/* Leave Balances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {leaveBalances.map((lb) => (
          <div key={lb.type} className="bg-card rounded-lg border border-border p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-secondary">
                <lb.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{lb.type}</p>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-card-foreground">{lb.total - lb.used}</p>
              <p className="text-xs text-muted-foreground">{lb.used} / {lb.total} used</p>
            </div>
            <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: `${(lb.used / lb.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Leave Requests Table */}
      <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="font-semibold text-card-foreground">Recent Leave Requests</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">Employee</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">Type</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">From</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">To</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">Days</th>
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leaveRequests.map((r, i) => (
                <tr key={i} className="hover:bg-secondary/30 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-card-foreground">{r.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.type}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.from}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.to}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{r.days}</td>
                  <td className="px-5 py-3.5">
                    <StatusBadge label={r.status} variant={r.status === "Approved" ? "success" : "warning"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </HRLayout>
  );
};

export default LeaveManagement;
