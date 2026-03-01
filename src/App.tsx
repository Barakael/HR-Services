import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ExitManagement from "./pages/ExitManagement";
import LeaveManagement from "./pages/LeaveManagement";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Documents from "./pages/Documents";
import Surveys from "./pages/Surveys";
import Recruitment from "./pages/Recruitment";
import Training from "./pages/Training";
import Transfers from "./pages/Transfers";
import Performance from "./pages/Performance";
import Approvals from "./pages/Approvals";
import Reports from "./pages/Reports";
import Payslips from "./pages/Payslips";
import MyTraining from "./pages/MyTraining";
import { PlaceholderPage } from "./components/PlaceholderPage";
import NotFound from "./pages/NotFound";
import {
  Target, Network, Landmark, Clock, Fingerprint,
  Headphones, HelpCircle,
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
          <Route path="/departments" element={<Departments />} />
          <Route path="/org-chart" element={<PlaceholderPage title="Org Chart" subtitle="Visual reporting hierarchy" icon={Network} />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/training" element={<Training />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/exit" element={<ExitManagement />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/bank-tax" element={<PlaceholderPage title="Bank & Tax" subtitle="Manage banking and tax information" icon={Landmark} />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/attendance" element={<PlaceholderPage title="Attendance" subtitle="Daily clock-in/out records" icon={Clock} />} />
          <Route path="/biometric-shifts" element={<PlaceholderPage title="Biometric & Shifts" subtitle="Shift scheduling and biometric integration" icon={Fingerprint} />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/help-desk" element={<PlaceholderPage title="Help Desk" subtitle="IT support ticketing system" icon={Headphones} />} />
          <Route path="/user-manual" element={<PlaceholderPage title="User Manual" subtitle="System documentation" icon={HelpCircle} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
