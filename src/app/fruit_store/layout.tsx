import FruitHeader from "@/app/fruit_store/components/FruitHeader";

export default function ExperimentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FruitHeader />
      <main>{children}</main>
    </div>
  );
}
