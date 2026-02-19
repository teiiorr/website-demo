export function SiteFooter() {
  return (
    <footer className="mt-20 border-t py-10">
      <div className="container-shell flex flex-col gap-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Creative Union. All rights reserved.</p>
        <p>Built for accessibility, performance, and scalable content operations.</p>
      </div>
    </footer>
  );
}
