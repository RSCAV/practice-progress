import Counter from '@/components/Counter';

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Hello from Next.js</h1>
        <Counter />
      </div>
    </main>
  );
}
