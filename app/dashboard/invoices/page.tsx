'use client';

import { useState } from 'react';

type Invoice = {
  id: number;
  customer: string;
  email: string;
  amount: number;
  status: string;
};

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, customer: 'Liam Johnson', email: 'liam@example.com', amount: 250, status: 'Paid' },
    { id: 2, customer: 'Emma Wilson', email: 'emma@example.com', amount: 180, status: 'Pending' },
    { id: 3, customer: 'Noah Brown', email: 'noah@example.com', amount: 320, status: 'Overdue' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending');

  const statusStyles: Record<string, string> = {
    Paid: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Overdue: 'bg-red-100 text-red-800',
  };

  // ADD INVOICE
  function handleAddInvoice(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newInvoice: Invoice = {
      id: invoices.length + 1,
      customer,
      email,
      amount: Number(amount),
      status,
    };

    setInvoices([...invoices, newInvoice]);

    setCustomer('');
    setEmail('');
    setAmount('');
    setStatus('Pending');
    setShowAddForm(false);
  }

  // OPEN EDIT FORM
  function openEditForm(invoice: Invoice) {
    setEditingInvoice(invoice);
    setCustomer(invoice.customer);
    setEmail(invoice.email);
    setAmount(String(invoice.amount));
    setStatus(invoice.status);
    setShowEditForm(true);
    setShowAddForm(false);
  }

  // SAVE EDITED INVOICE
  function handleEditInvoice(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!editingInvoice) return;

    const updated = invoices.map((inv) =>
      inv.id === editingInvoice.id
        ? { ...inv, customer, email, amount: Number(amount), status }
        : inv
    );

    setInvoices(updated);

    setEditingInvoice(null);
    setShowEditForm(false);

    setCustomer('');
    setEmail('');
    setAmount('');
    setStatus('Pending');
  }

  // DELETE INVOICE
  function handleDeleteInvoice(id: number) {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">Invoices</h1>

      {/* Add Invoice Button */}
      <button
        onClick={() => {
          setShowAddForm(!showAddForm);
          setShowEditForm(false);
        }}
        className="mb-6 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {showAddForm ? 'Cancel' : 'Add Invoice'}
      </button>

      {/* Add Invoice Form */}
      {showAddForm && (
        <form onSubmit={handleAddInvoice} className="mb-6 grid gap-4 rounded-lg border bg-white p-6 shadow">
          <input
            type="text"
            placeholder="Customer Name"
            className="rounded-md border px-4 py-2"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-md border px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Amount"
            className="rounded-md border px-4 py-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <select
            className="rounded-md border px-4 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>

          <button
            type="submit"
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Save Invoice
          </button>
        </form>
      )}

      {/* Edit Invoice Form */}
      {showEditForm && (
        <form onSubmit={handleEditInvoice} className="mb-6 grid gap-4 rounded-lg border bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Edit Invoice</h2>

          <input
            type="text"
            placeholder="Customer Name"
            className="rounded-md border px-4 py-2"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-md border px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Amount"
            className="rounded-md border px-4 py-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <select
            className="rounded-md border px-4 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
          </select>

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Update Invoice
          </button>
        </form>
      )}

      {/* Invoice Table */}
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{invoice.customer}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{invoice.email}</td>
              <td className="px-6 py-4 text-sm text-gray-800">${invoice.amount}.00</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusStyles[invoice.status]}`}
                >
                  {invoice.status}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button
                  onClick={() => openEditForm(invoice)}
                  className="rounded-md bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteInvoice(invoice.id)}
                  className="rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
