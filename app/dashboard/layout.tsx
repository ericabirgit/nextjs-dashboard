import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-6 bg-gray-50">{children}</div>
    </div>
  );
}
