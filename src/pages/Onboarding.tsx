import { HRLayout } from "@/components/HRLayout";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { CheckCircle2, Circle, Clock, UserPlus, ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { StatsCard } from "@/components/StatsCard";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface ChecklistItem {
  id: string;
  task: string;
  category: string;
  done: boolean;
}

const employeeChecklist: ChecklistItem[] = [
  { id: "1", task: "Sign employment contract", category: "Legal", done: true },
  { id: "2", task: "Complete tax forms", category: "Payroll", done: true },
  { id: "3", task: "Collect ID badge", category: "Security", done: true },
  { id: "4", task: "IT equipment setup & login", category: "IT", done: false },
  { id: "5", task: "Complete induction training", category: "Training", done: false },
  { id: "6", task: "Meet your assigned buddy", category: "Culture", done: false },
  { id: "7", task: "Review employee handbook", category: "Policy", done: false },
  { id: "8", task: "Set up payroll bank details", category: "Payroll", done: false },
];

const hrNewHires = [
  { name: "Michael Chen", role: "Product Designer", dept: "Design", startDate: "Mar 3, 2026", progress: 75, buddy: "Alice Turner" },
  { name: "Priya Sharma", role: "Data Analyst", dept: "Analytics", startDate: "Mar 5, 2026", progress: 40, buddy: "Bob Harris" },
  { name: "James O'Brien", role: "DevOps Engineer", dept: "Engineering", startDate: "Mar 10, 2026", progress: 10, buddy: "Carol White" },
];

export default function Onboarding() {
  const { isHRAdmin } = useAuth();
  const [checklist, setChecklist] = useState(employeeChecklist);

  const toggleItem = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const doneCount = checklist.filter((i) => i.done).length;
  const progressPct = Math.round((doneCount / checklist.length) * 100);

  if (isHRAdmin) {
    return (
      <HRLayout title="Onboarding" subtitle="Track and manage new hire onboarding progress">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <StatsCard title="New Hires This Month" value={hrNewHires.length} icon={UserPlus} variant="accent" />
          <StatsCard title="Fully Onboarded" value={0} icon={CheckCircle2} variant="success" />
          <StatsCard title="In Progress" value={hrNewHires.length} icon={Clock} variant="warning" />
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">New Hire Tracker</h2>
          </div>
          <div className="divide-y divide-border">
            {hrNewHires.map((hire) => (
              <div key={hire.name} className="flex items-center gap-4 px-5 py-4 hover:bg-secondary/40 transition-colors">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-300">
                  {hire.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground">{hire.name}</p>
                  <p className="text-xs text-muted-foreground">{hire.role} · {hire.dept}</p>
                </div>
                <div className="hidden sm:block text-xs text-muted-foreground w-28">
                  Starts {hire.startDate}
                </div>
                <div className="w-36 hidden md:block">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium text-foreground">{hire.progress}%</span>
                  </div>
                  <Progress value={hire.progress} className="h-1.5" />
                </div>
                <div className="hidden lg:block text-xs text-muted-foreground w-28">
                  Buddy: {hire.buddy}
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </HRLayout>
    );
  }

  return (
    <HRLayout title="My Onboarding" subtitle="Complete your onboarding tasks to get started">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Progress summary */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-semibold text-foreground">Onboarding Progress</h2>
              <p className="text-sm text-muted-foreground">{doneCount} of {checklist.length} tasks completed</p>
            </div>
            <span className="text-2xl font-bold text-foreground">{progressPct}%</span>
          </div>
          <Progress value={progressPct} className="h-2" />
        </div>

        {/* Checklist */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Checklist</h2>
          </div>
          <div className="divide-y divide-border">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="flex items-center gap-4 px-5 py-3.5 w-full text-left hover:bg-secondary/40 transition-colors"
              >
                {item.done ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
                <span className={cn("flex-1 text-sm font-medium text-foreground", item.done && "line-through text-muted-foreground")}>
                  {item.task}
                </span>
                <StatusBadge
                  label={item.category}
                  variant={item.done ? "success" : "default"}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </HRLayout>
  );
}
