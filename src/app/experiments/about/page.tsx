import Link from "next/link";

export default function About() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">About This Site</h1>
      <p>This page was generated using Next.js App Router.</p>
      <Link href="/" className="mt-6 text-blue-600 underline">
        Back to Home
      </Link>
    </section>
  );
}
