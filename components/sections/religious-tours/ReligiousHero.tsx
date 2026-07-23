import React from "react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading } from "@/components/ui/Typography";

export const ReligiousHero: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
      <div className="absolute inset-0 z-0 select-none">
        <CustomImage
          src="https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80"
          alt="Majestic Kedarnath Temple mountain"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <Container className="relative z-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Spiritual Journeys
        </span>
        <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
          Religious Tour Packages
        </Heading>
        <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-primary">Religious Tours</span>
        </div>
      </Container>
    </section>
  );
};

ReligiousHero.displayName = "ReligiousHero";
