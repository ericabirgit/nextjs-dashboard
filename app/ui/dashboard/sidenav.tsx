
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Customers', href: '/dashboard/customers' },
  ];

  return (
    <nav className="flex h-screen w-64 flex-col border-r bg-white p-6 shadow-sm">
      <h2 className="mb-8 text-xl font-semibold">ACME Dashboard</h2>

      <ul className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block rounded-md px-4 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Logout button */}
      <button
        onClick={() => {
          document.cookie = 'loggedIn=; Max-Age=0; path=/';
          window.location.href = '/login';
        }}
        className="mt-auto w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Logout
      </button>
    </nav>
  );
}
