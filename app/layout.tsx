export const metadata = {
  title: 'ACME Dashboard',
  description: 'Financial dashboard built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
