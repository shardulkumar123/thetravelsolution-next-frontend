"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Modal } from "@/components/ui/Modal";
import { TourCard } from "@/components/ui/TourCard";
import { Heading, Text } from "@/components/ui/Typography";
import { Compass, Heart, ShieldCheck, Sparkles, Star, Wine } from "lucide-react";

import { sendWhatsAppMessage } from "@/utils/whatsapp";

import {
  HONEYMOON_PACKAGES,
  HONEYMOON_PERKS,
  ROMANTIC_INTEL,
} from "@/constants/packages/honeymoon";

const ICON_MAP = {
  wine: { Icon: Wine, colorClass: "text-primary" },
  sparkles: { Icon: Sparkles, colorClass: "text-secondary" },
  heart: { Icon: Heart, colorClass: "text-success" },
  star: { Icon: Star, colorClass: "text-warning" },
};

export default function HoneymoonPackagesPage() {
  const [bookingPackageName, setBookingPackageName] = useState<string | null>(null);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    notes: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitted(true);

    const message = `*New Booking Inquiry*
Package: ${bookingPackageName}
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Travel Date: ${bookingForm.date}
Travelers: ${bookingForm.travelers}
Notes: ${bookingForm.notes || "None"}`;

    sendWhatsAppMessage(message);
  };

  const handleOpenModal = (packageName: string) => {
    setBookingPackageName(packageName);
    setIsBookingSubmitted(false);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      travelers: "1",
      notes: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Romantic beach resort sunset"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          <Container className="relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Couples&apos; Escapes
            </span>
            <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
              Honeymoon Packages
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Honeymoon Packages</span>
            </div>
          </Container>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background border-b border-border">
          <Container className="max-w-4xl text-center">
            <Heading
              variant="h2"
              className="font-extrabold text-3xl md:text-4xl mb-4 tracking-tight"
            >
              Curating Memories That Last a Lifetime
            </Heading>
            <Text variant="body-md" color="text-secondary" className="leading-relaxed">
              Your honeymoon should be an absolute dream. We design custom romantic experiences that
              combine premium privacy, couples&apos; wellness treatments, and beautiful sightseeing.
              Celebrate your new beginning with luxury and style.
            </Text>
          </Container>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-surface/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {HONEYMOON_PACKAGES.map((pkg) => (
                <TourCard key={pkg.id} pkg={pkg} onBookClick={handleOpenModal} />
              ))}
            </div>
          </Container>
        </section>

        {/* Perks Section */}
        <section className="py-20 bg-background border-b border-border">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Extra Luxury
              </span>
              <Heading
                variant="h2"
                className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl mb-4"
              >
                Signature Romantic Experiences
              </Heading>
              <Text
                variant="body-md"
                color="text-secondary"
                className="max-w-xl mx-auto leading-relaxed"
              >
                Add beautiful details to your tour. We offer signature touches to customize your
                romantic journey.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HONEYMOON_PERKS.map((perk, idx) => {
                const iconConfig = ICON_MAP[perk.iconName as keyof typeof ICON_MAP];
                const IconComponent = iconConfig ? iconConfig.Icon : Sparkles;
                const colorClass = iconConfig ? iconConfig.colorClass : "text-primary";

                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 text-left"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border border-border shrink-0 text-primary shadow-soft">
                      <IconComponent className={`${colorClass} size-6`} />
                    </div>
                    <Heading
                      variant="h4"
                      className="font-bold text-text-primary tracking-tight text-base md:text-lg"
                    >
                      {perk.title}
                    </Heading>
                    <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                      {perk.desc}
                    </Text>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FAQs - "Romantic Intel" Section */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-2 flex flex-col gap-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                  <Compass size={14} /> Romantic Intel
                </span>
                <Heading
                  variant="h2"
                  className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl"
                >
                  Planning Your Perfect Escape
                </Heading>
                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  We&apos;ve gathered important information regarding customization, upgrades, visa
                  support, and decor timelines to help you organize your honeymoon seamlessly.
                </Text>
                <div className="mt-4 flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface">
                  <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
                    <ShieldCheck size={18} className="text-primary" /> Honeymoon Guarantee
                  </span>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    All couples&apos; bookings feature priority support, verified luxury stays, and
                    private transportation.
                  </Text>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3">
                <Accordion items={ROMANTIC_INTEL} />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      {/* Booking/Inquiry Modal */}
      <Modal
        isOpen={bookingPackageName !== null}
        onClose={() => setBookingPackageName(null)}
        title={`Inquiry: ${bookingPackageName}`}
      >
        {isBookingSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <Heading variant="h4" className="font-extrabold text-text-primary">
              Inquiry Submitted!
            </Heading>
            <Text variant="body-sm" color="text-secondary" className="max-w-xs">
              Thank you for your interest in the package. Our travel expert will contact you shortly
              on your provided details.
            </Text>
            <Button
              variant="primary"
              onClick={() => setBookingPackageName(null)}
              className="mt-4 font-bold"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="modal-name"
                className="text-xs font-bold text-text-secondary uppercase"
              >
                Full Name
              </label>
              <input
                id="modal-name"
                name="name"
                type="text"
                required
                value={bookingForm.name}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="modal-email"
                  className="text-xs font-bold text-text-secondary uppercase"
                >
                  Email Address
                </label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  value={bookingForm.email}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="modal-phone"
                  className="text-xs font-bold text-text-secondary uppercase"
                >
                  Phone Number
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  value={bookingForm.phone}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="modal-date"
                  className="text-xs font-bold text-text-secondary uppercase"
                >
                  Travel Date
                </label>
                <input
                  id="modal-date"
                  name="date"
                  type="date"
                  required
                  value={bookingForm.date}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="modal-travelers"
                  className="text-xs font-bold text-text-secondary uppercase"
                >
                  Number of Travelers
                </label>
                <select
                  id="modal-travelers"
                  name="travelers"
                  value={bookingForm.travelers}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Traveler" : "Travelers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label
                htmlFor="modal-notes"
                className="text-xs font-bold text-text-secondary uppercase"
              >
                Additional Notes
              </label>
              <textarea
                id="modal-notes"
                name="notes"
                rows={3}
                value={bookingForm.notes}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Any specific requests or requirements..."
              />
            </div>

            <Button type="submit" variant="primary" className="w-full mt-2 font-bold shadow-soft">
              Submit Inquiry
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
}
