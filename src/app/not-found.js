import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-950 text-white px-4">
      <div className="max-w-md text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
          404
        </h1>
        <h2 className="mt-2 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-4 text-gray-400">
          Oops! The page you were looking for doesn&apos;t exist or was moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 hover:brightness-110 transition"
        >
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
}
