import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ExitManagement from "./pages/ExitManagement";
import LeaveManagement from "./pages/LeaveManagement";
import Employees from "./pages/Employees";
import Payslips from "./pages/Payslips";
import MyTraining from "./pages/MyTraining";
import { PlaceholderPage } from "./components/PlaceholderPage";
import NotFound from "./pages/NotFound";
import {
  Target, Building2, Network, FileText, ClipboardList, UserPlus,
  GraduationCap, ArrowRightLeft, Landmark, Clock, Fingerprint,
  CheckSquare, TrendingUp, BarChart3, Headphones, HelpCircle,
} from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-training" element={<MyTraining />} />
          <Route path="/my-performance" element={<PlaceholderPage title="My Performance" subtitle="View your goals and feedback" icon={Target} />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/departments" element={<PlaceholderPage title="Departments" subtitle="Manage organizational structure" icon={Building2} />} />
          <Route path="/org-chart" element={<PlaceholderPage title="Org Chart" subtitle="Visual reporting hierarchy" icon={Network} />} />
          <Route path="/documents" element={<PlaceholderPage title="Documents" subtitle="Company policies and contracts" icon={FileText} />} />
          <Route path="/surveys" element={<PlaceholderPage title="Surveys" subtitle="Employee engagement surveys" icon={ClipboardList} />} />
          <Route path="/recruitment" element={<PlaceholderPage title="Recruitment" subtitle="Job postings and applicant tracking" icon={UserPlus} />} />
          <Route path="/training" element={<PlaceholderPage title="Training" subtitle="Company-wide learning management" icon={GraduationCap} />} />
          <Route path="/transfers" element={<PlaceholderPage title="Transfers" subtitle="Internal employee movements" icon={ArrowRightLeft} />} />
          <Route path="/exit" element={<ExitManagement />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/bank-tax" element={<PlaceholderPage title="Bank & Tax" subtitle="Manage banking and tax information" icon={Landmark} />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/attendance" element={<PlaceholderPage title="Attendance" subtitle="Daily clock-in/out records" icon={Clock} />} />
          <Route path="/biometric-shifts" element={<PlaceholderPage title="Biometric & Shifts" subtitle="Shift scheduling and biometric integration" icon={Fingerprint} />} />
          <Route path="/approvals" element={<PlaceholderPage title="Approvals" subtitle="Manage pending approvals" icon={CheckSquare} />} />
          <Route path="/performance" element={<PlaceholderPage title="Performance" subtitle="Performance review cycles" icon={TrendingUp} />} />
          <Route path="/reports" element={<PlaceholderPage title="Reports" subtitle="HR analytics and insights" icon={BarChart3} />} />
          <Route path="/help-desk" element={<PlaceholderPage title="Help Desk" subtitle="IT support ticketing system" icon={Headphones} />} />
          <Route path="/user-manual" element={<PlaceholderPage title="User Manual" subtitle="System documentation" icon={HelpCircle} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
