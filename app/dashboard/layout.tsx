
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <a href="/dashboard">Dashboard</a> | 
        <a href="/dashboard/invoices">Invoices</a> | 
        <a href="/dashboard/customers">Customers</a>
      </nav>
      <div>{children}</div>
    </section>
  );
}
