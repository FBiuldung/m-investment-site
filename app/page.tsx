export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-blue-500">Hello Tailwind CSS!</h1>
      <p className="text-lg mt-4">This is a test page to verify Tailwind CSS is working.</p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
        Click Me
      </button>
    </main>
  );
}

