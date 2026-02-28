import { HRSidebar } from "@/components/HRSidebar";

interface HRLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function HRLayout({ children, title, subtitle, actions }: HRLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <HRSidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">{title}</h1>
              {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </header>
        <div className="flex-1 p-6 animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
