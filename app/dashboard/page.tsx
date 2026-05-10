export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">$45,231</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Subscriptions</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">+2350</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Sales</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">+12,234</p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Active Now</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">+573</p>
        </div>
      </div>
    </main>
  );
}
