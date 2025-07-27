export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to cbill.click</h1>
      <p>This is a Next.js app running on EC2 via Nginx!</p>
      <a href="/about" className="mt-6 text-blue-400 underline">Visit About Page</a>
    </main>
  );
}