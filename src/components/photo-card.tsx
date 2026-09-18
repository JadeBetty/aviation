"use client";

import Image from "next/image";
import type { Photo } from "@/data/gallery";

export function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <article
      className="animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Image
        src={photo.publicId}
        alt={photo.caption}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 768px"
        className="h-auto w-full"
        loading={index === 0 ? "eager" : "lazy"}
      />
    </article>
  );
}
