import SideNav from '@/app/ui/dashboard/sidenav';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
