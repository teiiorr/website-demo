// app/components/footer/Footer.tsx
import Container from "../core/Container";

export default function Footer() {
  return (
 <footer className="border-t border-[color:var(--color-border)]/70 bg-[color:var(--color-surface-strong)]/95 backdrop-blur-2xl">      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[color:rgba(148,163,184,0.3)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-[0_16px_35px_rgba(30,64,175,0.45)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary-contrast)]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--color-text)]">
                Bolalar Ijodkorlari Uyushmasi
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { href: "#about", label: "Biz haqimizda" },
              { href: "#news", label: "Yangiliklar" },
              { href: "#projects", label: "Loyihalar" },
              { href: "#partners", label: "Hamkorlar" },
              { href: "#contact", label: "Bog‘lanish" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 font-medium text-[var(--color-text-muted)] transition-all duration-300 hover:border-[color:rgba(148,163,184,0.28)] hover:bg-[color:rgba(29,78,216,0.14)] hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--color-border)]/70 pt-6 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <span>© teiior dev | {new Date().getFullYear()}. Barcha huquqlar himoyalangan.</span>
        </div>
      </Container>
    </footer>
  );
}
