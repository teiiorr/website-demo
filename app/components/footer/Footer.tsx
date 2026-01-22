// app/components/footer/Footer.tsx
import Container from "../core/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Bolalar Ijodkorlari Uyushmasi
              </div>
              <div className="text-sm text-white/60">
                Ijod — kelajakning tili.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Biz haqimizda
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Loyihalar
            </a>
            <a
              href="#partners"
              className="rounded-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Hamkorlar
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Bog‘lanish
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© teiior_dev | {new Date().getFullYear()}. Barcha huquqlar himoyalangan.</span>
       
        </div>
      </Container>
    </footer>
  );
}
