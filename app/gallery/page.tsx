"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Compass, MapPin } from "lucide-react";

import { GALLERY_FILTERS, GALLERY_ITEMS, GalleryItem } from "@/utils/constants";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = GALLERY_FILTERS;

  const items: GalleryItem[] = GALLERY_ITEMS;

  const filteredItems =
    selectedFilter === "All" ? items : items.filter((item) => item.category === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
              alt="Rivers and hills travel banner"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10">
            <Heading variant="display-lg" className="text-white font-extrabold mb-4">
              Our Travel Gallery
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Gallery</span>
            </div>
          </Container>
        </section>

        {/* Gallery Listings */}
        <section className="py-20 bg-background">
          <Container>
            {/* Filter controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedFilter === filter
                      ? "bg-primary border-primary text-white shadow-soft"
                      : "bg-surface border-border text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Masonry-like dynamic grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-[300px] rounded-card overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                >
                  <CustomImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle black overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Content Overlays */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-left text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary uppercase tracking-wider mb-1.5">
                      <Compass size={12} />
                      {item.category}
                    </span>
                    <h4 className="font-bold text-white text-base leading-tight tracking-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                      <MapPin size={12} className="text-secondary" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty States */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <Text variant="body-lg" color="text-secondary">
                  No photos available in this category.
                </Text>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
