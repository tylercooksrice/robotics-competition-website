
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-5xl font-bold tracking-tight">
        Hello, World!
      </h1>

      <p className="mt-6 max-w-lg text-lg text-slate-300">
        Welcome to my first website, built with React, Next.js, and Tailwind CSS.
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
        Explore My Projects
      </button>
    </main>
  );
}
