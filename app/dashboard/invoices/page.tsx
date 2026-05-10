
import InvoicesTable from '@/app/ui/invoices/table';

export default function InvoicesPage() {
  return (
    <main>
      <h1>Invoices</h1>
      <InvoicesTable query="" currentPage={1} />
    </main>
  );
}
