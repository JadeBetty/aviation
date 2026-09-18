import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryCards } from "@/data/gallery";
import { PhotoCard } from "@/components/photo-card";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export function generateStaticParams() {
  return galleryCards.map((c) => ({ slug: c.slug }));
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const card = galleryCards.find((c) => c.slug === slug);
  if (!card) notFound();

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1 flex-col px-6 py-12 sm:py-16">
        <div className="mx-auto my-auto w-full max-w-lg">
          <div className="mb-8 flex items-baseline justify-between">
            <Link
              href="/"
              className="font-mono text-xs text-text-faint transition-colors duration-500 hover:text-text-muted"
            >
              ← back
            </Link>
            <ThemeToggle />
          </div>

          <div className="mb-8">
            <h1 className="mb-1 font-mono text-xs tracking-widest text-text-faint">
              /{card.slug}
            </h1>
            <p className="text-2xl font-light text-text">{card.title}</p>
            <p className="mt-1 font-mono text-[10px] text-text-faint">
              {card.photos.length}{" "}
              {card.photos.length === 1 ? "photo" : "photos"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {card.photos.map((photo, i) => (
              <PhotoCard key={photo.id} photo={photo} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-lg px-6 pb-6">
        <Footer />
      </div>
    </main>
  );
}
