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
import { Compass, Heart, ShieldCheck } from "lucide-react";

import { DOMESTIC_PACKAGES } from "@/utils/constants";
import { sendWhatsAppMessage } from "@/utils/whatsapp";

const TRIP_INTEL = [
  {
    id: "faq-1",
    question: "Are flights included in the domestic tour package prices?",
    answer:
      "No, our base package rates generally cover airport transfers, premium accommodations, sightseeing, select meals, and ground transportation. However, we have a dedicated flight booking assistance desk that can secure the best fares for your travel dates.",
  },
  {
    id: "faq-2",
    question: "Can I customize the itinerary or extend my stay?",
    answer:
      "Absolutely! We specialize in tailoring custom itineraries. You can upgrade hotel categories, extend stays at specific destinations, add custom activities, or adjust transit schedules to suit your group's preferences.",
  },
  {
    id: "faq-3",
    question: "What travel documents are required for domestic journeys?",
    answer:
      "You will need a government-issued photo ID (like Aadhaar, PAN Card, Driving License, or Voter ID). For specific high-altitude zones or border regions in Ladakh or Northeast India, special Inner Line Permits (ILP) are required, which our operations team will arrange on your behalf.",
  },
  {
    id: "faq-4",
    question: "What is the cancellation and refund policy?",
    answer:
      "Cancellations made 30 days prior to the travel date receive a full refund minus minimal admin charges. Cancellations within 15–29 days receive a 50% refund. Cancellations under 15 days are subject to standard hotel/vendor policies and are usually non-refundable.",
  },
  {
    id: "faq-5",
    question: "What safety protocols are followed during the tours?",
    answer:
      "We ensure all local cabs and coaches are fully sanitized, coordinate only with verified star hotels that maintain high hygiene ratings, and allocate experienced local guides who know safe routes and medical support points.",
  },
];

export default function DomesticToursPage() {
  const [bookingPackageName, setBookingPackageName] = useState<string | null>(null);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    notes: "",
  });

  const filteredPackages = DOMESTIC_PACKAGES.filter(
    (pkg) => activeCategory === "all" || (pkg as { category?: string }).category === activeCategory
  );

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
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Domestic landscape roadtrip"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          <Container className="relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Explore India
            </span>
            <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
              Domestic Tour Packages
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Domestic Tours</span>
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
              Discover the Diverse Landscapes of India
            </Heading>
            <Text variant="body-md" color="text-secondary" className="leading-relaxed">
              From the snow-clad peaks of the Himalayas to the warm shores of the Arabian Sea, India
              offers a rich tapestry of heritage, nature, and adventure. Our meticulously planned
              domestic tours offer premium stays, comfortable transits, and guided visits so you can
              explore without a single worry.
            </Text>
          </Container>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-surface/30">
          <Container>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {[
                { id: "all", label: "All Tours" },
                { id: "religious", label: "Religious Packages" },
                { id: "honeymoon", label: "Honeymoon Packages" },
                { id: "girls-tours", label: "Girls Tours" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-background border border-border text-text-secondary hover:text-primary hover:border-primary/50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg) => (
                  <TourCard key={pkg.id} pkg={pkg} onBookClick={handleOpenModal} />
                ))
              ) : (
                <div className="col-span-1 lg:col-span-2 text-center py-12">
                  <Text variant="body-lg" className="text-text-secondary">
                    No packages found for this category.
                  </Text>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Specialty Collections Section */}
        <section className="py-16 bg-background border-t border-border">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit mx-auto">
                Specialty Collections
              </span>
              <Heading
                variant="h2"
                className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary"
              >
                Explore Themed Travel
              </Heading>
              <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                Looking for something specific? Discover our curated thematic collections designed
                around spiritual pilgrimages and romantic getaways.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Religious Tours Card */}
              <div className="flex flex-col justify-between p-8 rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 text-left">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Compass size={24} />
                  </div>
                  <Heading
                    variant="h3"
                    className="text-xl font-bold tracking-tight text-text-primary"
                  >
                    Spiritual & Religious Tours
                  </Heading>
                  <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                    Embark on sacred journeys including the Char Dham Yatra, Kedarnath, and
                    Badrinath with comprehensive biometric assistance, luxury hotels, and helicopter
                    slot bookings.
                  </Text>
                </div>
                <Link href="/packages/religious-tours" className="mt-8">
                  <Button
                    variant="primary"
                    className="w-full font-bold shadow-soft cursor-pointer text-xs py-2.5"
                  >
                    View Religious Tours
                  </Button>
                </Link>
              </div>

              {/* Honeymoon Packages Card */}
              <div className="flex flex-col justify-between p-8 rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 text-left">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Heart size={24} />
                  </div>
                  <Heading
                    variant="h3"
                    className="text-xl font-bold tracking-tight text-text-primary"
                  >
                    Romantic Honeymoon Packages
                  </Heading>
                  <Text variant="body-sm" className="text-text-secondary leading-relaxed">
                    Celebrate your new beginning with pristine beaches, cozy mountain villas,
                    candlelight dinners, and complimentary room decorations tailored for couples.
                  </Text>
                </div>
                <Link href="/packages/honeymoon-packages" className="mt-8">
                  <Button
                    variant="primary"
                    className="w-full font-bold shadow-soft cursor-pointer text-xs py-2.5"
                  >
                    View Honeymoon Packages
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs - "Trip Intel" Section */}
        <section className="py-20 bg-background border-t border-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Column: Heading and Context */}
              <div className="lg:col-span-2 flex flex-col gap-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider w-fit">
                  <Compass size={14} /> Trip Intel
                </span>
                <Heading
                  variant="h2"
                  className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl"
                >
                  Answers for the Curious Mind
                </Heading>
                <Text variant="body-md" color="text-secondary" className="leading-relaxed">
                  Have questions about custom routes, package inclusions, or transit bookings? We
                  have compiled practical intelligence to help you plan your domestic journey
                  efficiently.
                </Text>
                <div className="mt-4 flex flex-col gap-3 p-5 rounded-2xl border border-border bg-surface">
                  <span className="flex items-center gap-2 text-sm font-bold text-text-primary">
                    <ShieldCheck size={18} className="text-primary" /> Verified Package Standards
                  </span>
                  <Text variant="body-sm" color="text-secondary" className="leading-relaxed">
                    All itineraries are verified for transport reliability, local safety, and
                    support response.
                  </Text>
                </div>
              </div>

              {/* Right Column: Interactive Accordion */}
              <div className="lg:col-span-3">
                <Accordion items={TRIP_INTEL} />
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
