import Navbar from '@components/Navbar';

export default function ExperimentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
