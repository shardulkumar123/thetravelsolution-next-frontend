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
import { Heading, Text } from "@/components/ui/Typography";
import { Calendar, Compass, Heart, ShieldCheck, Sparkles, Star, Wine } from "lucide-react";

import { HONEYMOON_PACKAGES } from "@/utils/constants";

const ROMANTIC_INTEL = [
  {
    id: "hm-faq-1",
    question: "Can we customize the honeymoon packages with extra activities?",
    answer:
      "Absolutely! Every honeymoon package can be customized to suit your unique tastes. You can request changes to hotel rooms (e.g., upgrading to pool suites), extend your stay, add specific candlelight settings, or schedule private photography shoots.",
  },
  {
    id: "hm-faq-2",
    question: "Do you arrange complimentary room decorations and surprises?",
    answer:
      "Yes, all our Honeymoon Packages include a complimentary honeymoon cake, a floral bed decoration setup on arrival, and a romantic candlelight dinner at one of the top-rated local dining spots. You can also specify any extra surprises you'd like us to arrange.",
  },
  {
    id: "hm-faq-3",
    question: "Which destinations are best suited for a winter honeymoon?",
    answer:
      "If you love snow-clad peaks and cozy fireplaces, Kashmir and Manali are magical from December to February. If you prefer warm beaches and water adventures, Maldives and Andaman Islands offer the most pleasant weather during the winter months.",
  },
  {
    id: "hm-faq-4",
    question: "Do you assist with visa requirements for international packages?",
    answer:
      "Yes! For destinations like the Maldives (which offers visa-on-arrival for Indian citizens), we guide you through all pre-travel documentation, hotel vouchers, and immigration declarations. For other international destinations requiring prior visas, our ticketing desk coordinates the entire application.",
  },
  {
    id: "hm-faq-5",
    question: "What is your booking timeline and deposit policy?",
    answer:
      "We recommend booking at least 30 to 45 days in advance, especially during the peak wedding/honeymoon season (October to March). A 30% advance deposit is required to secure the bookings, with the remaining balance due 15 days before your travel date.",
  },
];

const PERKS = [
  {
    icon: <Wine className="text-primary size-6" />,
    title: "Candlelight Dinners",
    desc: "A beautifully decorated private dining spot arranged on beaches or overlooking mountain ranges.",
  },
  {
    icon: <Sparkles className="text-secondary size-6" />,
    title: "Floral Room Decors",
    desc: "A warm and fragrant floral bed decoration arranged on the day of your arrival.",
  },
  {
    icon: <Heart className="text-success size-6" />,
    title: "Couple's Spa & Wellness",
    desc: "Complimentary vouchers for deep relaxation massages and body scrubs at premium resort spas.",
  },
  {
    icon: <Star className="text-warning size-6" />,
    title: "Photography Shoots",
    desc: "Professional half-day photo shoots to capture your special moments amidst stunning landscapes.",
  },
];

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
  };

  const handleOpenModal = (packageName: string) => {
    setBookingPackageName(packageName);
    setIsBookingSubmitted(false);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      travelers: "2",
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
                <div
                  key={pkg.id}
                  className="flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="relative w-full h-[280px] md:h-[340px] select-none">
                    <CustomImage
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary font-bold text-xs px-3.5 py-1.5 rounded-full border border-primary/20 shadow-soft">
                      {pkg.location}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs font-bold text-text-secondary mb-3">
                        <span className="flex items-center gap-1">
                          <Compass size={14} className="text-primary" />
                          {pkg.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} className="text-secondary" />
                          {pkg.duration}
                        </span>
                      </div>

                      <Heading
                        variant="h3"
                        className="text-2xl font-bold tracking-tight text-text-primary mb-3 text-left"
                      >
                        {pkg.title}
                      </Heading>

                      <Text
                        variant="body-sm"
                        className="text-text-secondary leading-relaxed mb-6 text-left"
                      >
                        {pkg.description}
                      </Text>

                      <div className="flex flex-col gap-3 mb-8 text-left">
                        <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                          Package Highlights:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {pkg.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-surface border border-border/60"
                            >
                              <ShieldCheck size={16} className="text-primary shrink-0" />
                              <span className="text-xs font-semibold text-text-secondary">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between gap-2">
                      <div className="flex flex-col text-left shrink-0">
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-wider text-[10px]">
                          Starting Price
                        </span>
                        <span className="text-xl font-black text-primary font-heading mt-1">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/packages/${pkg.id}`}>
                          <Button
                            variant="outline"
                            className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleOpenModal(pkg.title)}
                          variant="primary"
                          className="font-bold shadow-soft cursor-pointer text-xs py-2 px-4"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
              {PERKS.map((perk, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 text-left"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface border border-border shrink-0 text-primary shadow-soft">
                    {perk.icon}
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
              ))}
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
