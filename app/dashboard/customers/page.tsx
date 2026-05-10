'use client';

import { useState } from 'react';

export default function CustomersPage() {
  const allCustomers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', totalInvoices: 12 },
    { id: 2, name: 'Markus Virtanen', email: 'markus@company.fi', totalInvoices: 5 },
    { id: 3, name: 'Sofia Laine', email: 'sofia@designstudio.com', totalInvoices: 8 },
  ];

  const [query, setQuery] = useState('');

  const filtered = allCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(query.toLowerCase()) ||
    customer.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Customers</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search customers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
      />

      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Invoices</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {filtered.length === 0 && (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                No results found
              </td>
            </tr>
          )}

          {filtered.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{customer.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{customer.totalInvoices}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
