const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "**";

if (!CLOUD) {
  throw new Error("missing cloudinary name in env");
}

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [
    "f_auto",
    "c_limit",
    `w_${width}`,
    `q_${quality || "auto"}`,
  ].join(",");

  return `https://res.cloudinary.com/${CLOUD}/image/upload/${params}/${src}`;
}
