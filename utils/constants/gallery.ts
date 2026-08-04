export const GALLERY_FILTERS = ["All", "Beaches", "Mountains", "Adventure", "Cities"];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [];
