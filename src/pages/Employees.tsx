import { HRLayout } from "@/components/HRLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";

const employees = [
  { name: "Sarah Miller", role: "Software Engineer", dept: "Engineering", status: "Active", email: "sarah@company.com", joined: "Jan 2024" },
  { name: "James Brown", role: "Marketing Lead", dept: "Marketing", status: "Active", email: "james@company.com", joined: "Mar 2023" },
  { name: "Emily Davis", role: "Product Manager", dept: "Product", status: "Active", email: "emily@company.com", joined: "Aug 2022" },
  { name: "Michael Chen", role: "Junior Developer", dept: "Engineering", status: "Probation", email: "michael@company.com", joined: "Feb 2026" },
  { name: "Jessica Lee", role: "HR Coordinator", dept: "Human Resources", status: "Active", email: "jessica@company.com", joined: "Nov 2023" },
  { name: "Robert Wilson", role: "DevOps Engineer", dept: "Engineering", status: "Exiting", email: "robert@company.com", joined: "Jun 2021" },
];

const Employees = () => {
  return (
    <HRLayout
      title="Employees"
      subtitle="Manage your workforce directory"
      actions={
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium">
          <Plus className="h-4 w-4 mr-2" />
          Add Employee
        </Button>
      }
    >
      {/* Search & Filter */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search employees..." className="pl-9" />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {employees.map((emp, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                  {emp.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-card-foreground">{emp.name}</p>
                  <p className="text-xs text-muted-foreground">{emp.role}</p>
                </div>
              </div>
              <StatusBadge
                label={emp.status}
                variant={emp.status === "Active" ? "success" : emp.status === "Probation" ? "warning" : "destructive"}
              />
            </div>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>{emp.dept} · Joined {emp.joined}</p>
              <div className="flex items-center gap-4 pt-1">
                <a href={`mailto:${emp.email}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Call
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HRLayout>
  );
};

export default Employees;
