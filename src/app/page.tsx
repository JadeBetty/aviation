import Link from "next/link";
import Image from "next/image";
import { galleryCards } from "@/data/gallery";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

const COLUMNS: 1 | 2 = 2;

export default function HomePage() {
  const isTwoCol = COLUMNS === 2;

  return (
    <main className="min-h-screen bg-background md:min-h-0">
      <div
        className={`mx-auto w-full px-6 py-24 sm:py-32 ${
          isTwoCol ? "max-w-3xl" : "max-w-md"
        }`}
      >
        <div className="mb-8 flex items-baseline justify-between">
          <h1 className="font-mono text-xs tracking-widest text-text-faint">
            /home
          </h1>
          <div className="flex items-baseline gap-4">
            <ThemeToggle />
            <span className="font-mono text-xs text-text-faint">
              {galleryCards.length}
            </span>
          </div>
        </div>

        <div
          className={`grid gap-x-6 gap-y-12 ${
            isTwoCol ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {galleryCards.map((card, i) => (
            <Link
              key={card.slug}
              href={`/${card.slug}`}
              className="group block animate-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={card.coverId}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority={i === 0}
                />
              </div>
              <p className="mt-3 truncate text-sm font-light text-text">
                {card.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </main>
  );
}
