import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Welcome to ACME Dashboard</h1>
      <p className="mb-8 text-lg text-gray-600">
        This is the public home page.
      </p>

      <Link
        href="/login"
        className="rounded-md bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
      >
        Go to Login
      </Link>
    </main>
  );
}

