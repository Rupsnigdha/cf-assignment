export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center">
      <article className="prose lg:prose-xl">{children}</article>
    </main>
  );
}
