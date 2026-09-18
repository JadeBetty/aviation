export type Photo = {
  id: string;
  publicId: string;
  caption: string;
};

export type GalleryCard = {
  slug: string;
  title: string;
  coverId: string;
  photos: Photo[];
};

export const galleryCards: GalleryCard[] = [
  {
    slug: "pnh_vdpp",
    title: "phnom penh intl. airport",
    coverId: "IMG_8349-Enhanced-NR_wyasvq.jpg",
    photos: [
      {
        id: "p1",
        publicId: "IMG_7519-Enhanced-NR-Edit_jlz7sl",
        caption: "qr from pnh to sgn",
      },
      {
        id: "p2",
        publicId: "IMG_8343-Enhanced-NR_ybvyn9",
        caption: "sg's arrival from singapore",
      },
      {
        id: "p3",
        publicId: "IMG_5461_brlnzv",
        caption: "k6's departure for somewhere, i forgot",
      },
      {
        id: "p4",
        publicId: "IMG_4474_2_z5pcza",
        caption: "bello! i papoy banana",
      },
      {
        id: "p5",
        publicId: "IMG_8305-Enhanced-NR_yyg7je",
        caption: "cx a330",
      },
      {
        id: "p6",
        publicId: "full-hd-235_m0ni42",
        caption: "atr from k6",
      },
    ],
  },
  {
    slug: "kti_vdti",
    title: "techo intl. airport",
    coverId: "IMG_0432_fjozfe",
    photos: [
      {
        id: "p1",
        publicId: "IMG_0022_wl5kur",
        caption: "cx a350 on touchdown",
      },
      {
        id: "p2",
        publicId: "IMG_0502_x1eevm",
        caption: "china southern on touchdown",
      },
      {
        id: "p3",
        publicId: "IMG_0013_gzseuj",
        caption: "cx a350 landing",
      },
      {
        id: "p4",
        publicId: "IMG_0537-Enhanced-NR-Edit-3_f11k7o",
        caption: "cx a350 taking off",
      },
      {
        id: "p5",
        publicId: "IMG_0618_uwuvcg",
        caption: "Khmer-Srlanh-Khmer",
      },
    ],
  },
];
