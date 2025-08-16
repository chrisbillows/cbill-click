import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to cbill.click</h1>
      <Link href="/experiments" className="mt-6 text-blue-400 underline">
        Visit Experiments
      </Link>
      <Link href="/fruit_store" className="mt-2 text-blue-400 underline">
        Visit Fruit Store
      </Link>
    </section>
  );
}
