import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Users,
  Building2,
  Network,
  FileText,
  ClipboardList,
  UserPlus,
  GraduationCap,
  ArrowRightLeft,
  LogOut,
  Receipt,
  Landmark,
  CalendarDays,
  Clock,
  Fingerprint,
  CheckSquare,
  BarChart3,
  TrendingUp,
  Headphones,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  label: string;
  items: { title: string; url: string; icon: React.ElementType }[];
}

const navSections: NavSection[] = [
  {
    label: "",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
    ],
  },
  {
    label: "My Work",
    items: [
      { title: "My Training", url: "/my-training", icon: BookOpen },
      { title: "My Performance", url: "/my-performance", icon: Target },
    ],
  },
  {
    label: "Human Resources",
    items: [
      { title: "Employees", url: "/employees", icon: Users },
      { title: "Departments", url: "/departments", icon: Building2 },
      { title: "Org Chart", url: "/org-chart", icon: Network },
      { title: "Documents", url: "/documents", icon: FileText },
      { title: "Surveys", url: "/surveys", icon: ClipboardList },
      { title: "Recruitment", url: "/recruitment", icon: UserPlus },
      { title: "Training", url: "/training", icon: GraduationCap },
      { title: "Transfers", url: "/transfers", icon: ArrowRightLeft },
      { title: "Exit", url: "/exit", icon: LogOut },
    ],
  },
  {
    label: "Payroll",
    items: [
      { title: "Payslips", url: "/payslips", icon: Receipt },
      { title: "Bank & Tax", url: "/bank-tax", icon: Landmark },
    ],
  },
  {
    label: "Time & Attendance",
    items: [
      { title: "Leave", url: "/leave", icon: CalendarDays },
      { title: "Attendance", url: "/attendance", icon: Clock },
      { title: "Biometric & Shifts", url: "/biometric-shifts", icon: Fingerprint },
    ],
  },
  {
    label: "Management",
    items: [
      { title: "Approvals", url: "/approvals", icon: CheckSquare },
      { title: "Performance", url: "/performance", icon: TrendingUp },
      { title: "Reports", url: "/reports", icon: BarChart3 },
    ],
  },
  {
    label: "ICT Support",
    items: [
      { title: "Help Desk", url: "/help-desk", icon: Headphones },
      { title: "User Manual", url: "/user-manual", icon: HelpCircle },
    ],
  },
];

export function HRSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    navSections.forEach((s) => {
      if (s.label) initial[s.label] = true;
    });
    return initial;
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      className={cn(
        "flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-white font-semibold h-screen sticky top-0 transition-all duration-300 z-30 border-r border-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-20 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-base text-gray-900 dark:text-white tracking-tight">
            HR Portal
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg- transition-colors text-sidebar-foreground"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-1 scrollbar-thin">
        {navSections.map((section) => (
          <div key={section.label || "top"}>
            {section.label && !collapsed && (
              <button
                onClick={() => toggleSection(section.label)}
                className="flex items-center justify-between w-full px-2 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                {section.label}
                {openSections[section.label] ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            )}
            {(section.label === "" || collapsed || openSections[section.label]) && (
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <li key={item.url}>
                      <NavLink
                        to={item.url}
                        end
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-150",
                          "hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white",
                          collapsed && "justify-center px-0"
                        )}
                        activeClassName="bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium"
                        title={collapsed ? item.title : undefined}
                      >
                        <item.icon className={cn("h-4 w-4 shrink-0", isActive && "text-blue-600 dark:text-blue-400")} />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-xs font-semibold text-blue-700 dark:text-blue-300">
              JD
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">HR Manager</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
