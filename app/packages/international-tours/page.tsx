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
import { Calendar, Compass, Heart, ShieldCheck } from "lucide-react";

import { INTERNATIONAL_PACKAGES } from "@/utils/constants";

const TRIP_INTEL = [
  {
    id: "int-faq-1",
    question: "Do you assist with tourist visas for international trips?",
    answer:
      "Yes! We provide complete visa application support, including document vetting, appointment scheduling, and guidance for visa-on-arrival processes (like Maldives or Bali) or eVisa submissions (like Dubai).",
  },
  {
    id: "int-faq-2",
    question: "Is travel insurance included in these packages?",
    answer:
      "We highly recommend comprehensive international travel insurance covering medical emergencies, baggage loss, and trip cancellations. We partner with leading insurance providers and can bundle policy coverage into your travel package at premium rates.",
  },
  {
    id: "int-faq-3",
    question: "Are flights and currency exchanges managed?",
    answer:
      "Our package base prices exclude international flights, but our ticketing team can book flights directly from your nearest hub. We also help coordinate forex cards and currency exchanges before you depart.",
  },
  {
    id: "int-faq-4",
    question: "What is the policy for cancellations on international bookings?",
    answer:
      "Due to international hotel and flight booking protocols, cancellations are governed by strict vendor timelines. Full cancellations 45 days prior receive full refunds minus minor admin fees. Cancellations under 30 days are subject to actual cancellation charges imposed by airlines and luxury resorts.",
  },
];

export default function InternationalToursPage() {
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
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
              alt="International travel landscape"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-slate-950/65" />
          </div>

          <Container className="relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Explore the World
            </span>
            <Heading variant="display-lg" className="text-white font-extrabold mb-4 tracking-tight">
              International Tour Packages
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">International Tours</span>
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
              Discover Global Wonders and Luxury Escapes
            </Heading>
            <Text variant="body-md" className="text-text-secondary leading-relaxed">
              From overwater luxury bungalows in the Maldives to historic European alpine loops, we
              provide completely curated international travel solutions. Let us manage visas, stays,
              and premium activities so you can explore with peace of mind.
            </Text>
          </Container>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-surface/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {INTERNATIONAL_PACKAGES.map((pkg) => (
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
                        className="text-2xl font-bold tracking-tight text-text-primary mb-3"
                      >
                        {pkg.title}
                      </Heading>

                      <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-6">
                        {pkg.description}
                      </Text>

                      <div className="flex flex-col gap-3 mb-8">
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
                Looking for romantic getaways? Explore our customized {"couples' escapes"} with
                premium privacy and wellness packages.
              </Text>
            </div>

            <div className="max-w-xl mx-auto">
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
                    Celebrate your new beginning with overwater villas in the Maldives, private
                    beachfront dinners, {"couple's"} spa treatments, and stunning tropical sunset
                    packages.
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

        {/* FAQs */}
        <section className="py-20 bg-background border-t border-border">
          <Container className="max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                Travel Intel
              </span>
              <Heading
                variant="h2"
                className="font-extrabold text-text-primary text-3xl md:text-4xl tracking-tight"
              >
                International Travel Assistance
              </Heading>
            </div>

            <Accordion items={TRIP_INTEL} />
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
