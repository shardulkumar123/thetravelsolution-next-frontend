"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Modal } from "@/components/ui/Modal";
import { Heading, Text } from "@/components/ui/Typography";
import { Clock, Compass, HeartHandshake, Phone, ShieldCheck } from "lucide-react";

import {
  DOMESTIC_PACKAGES,
  HONEYMOON_PACKAGES,
  INTERNATIONAL_PACKAGES,
  OTHER_RELIGIOUS_TOURS,
  SEASONAL_TOURS,
} from "@/utils/constants";

// Helper to look up package details across all datasets
const findPackageById = (id: string) => {
  const allPackages = [
    ...DOMESTIC_PACKAGES,
    ...INTERNATIONAL_PACKAGES,
    ...HONEYMOON_PACKAGES,
    ...OTHER_RELIGIOUS_TOURS,
    ...SEASONAL_TOURS.map((st) => ({
      ...st,
      highlights: st.highlights,
    })),
  ];
  return allPackages.find((pkg) => pkg.id === id);
};

// Mock itinerary generator based on title & duration
const generateItinerary = (title: string, durationStr: string) => {
  const daysMatch = durationStr.match(/(\d+)\s*Days/i);
  const days = daysMatch ? parseInt(daysMatch[1]) : 4;

  const steps = [
    {
      title: "Arrival and Leisurely Check-in",
      details:
        "Land at the destination terminal. Our luxury private transport coordinates your transition directly to the resort. Enjoy a welcoming orientation, unpack, and relax.",
    },
    {
      title: "Guided Sightseeing and Culture Trail",
      details:
        "Embark on a customized private highlights tour. Explore historic monuments, local heritage sites, panoramic viewpoints, and sample regional delicacies.",
    },
    {
      title: "Adventure, Leisure, and Scenic Treks",
      details:
        "Set out for exciting regional activities like boat cruises, mountain pass crossings, snow treks, or water sports fully arranged by our operations desk.",
    },
    {
      title: "Immersive Local Experiences and Souvenirs",
      details:
        "Spend a relaxing day checking out artisan villages, local craft markets, or taking complimentary couple's spa treatments and taking sunset beach walks.",
    },
    {
      title: "Final Day Transit and Departure",
      details:
        "Enjoy a hearty breakfast at the hotel, complete check-out procedures, and take our private terminal transfer for your return journey home.",
    },
  ];

  return Array.from({ length: days }).map((_, idx) => {
    const step = steps[Math.min(idx, steps.length - 1)];
    return {
      day: `Day ${idx + 1}`,
      title: idx === days - 1 ? "Departure and Farewells" : step.title,
      details:
        idx === days - 1
          ? "Check out from your premium room. Take a private vehicle transfer back to the transit terminal for your journey back home."
          : step.details,
    };
  });
};

export default function PackageDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const pkg = findPackageById(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    notes: "",
  });

  if (!pkg) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-24 px-4 text-center">
          <Heading variant="h2" className="text-3xl font-extrabold mb-4 tracking-tight">
            Package Not Found
          </Heading>
          <Text variant="body-md" className="text-text-secondary max-w-md mb-8">
            The package you are looking for does not exist or has been moved.
          </Text>
          <Link href="/">
            <Button variant="primary" className="font-bold">
              Return Home
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

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

  const handleOpenModal = () => {
    setIsBookingSubmitted(false);
    setIsModalOpen(true);
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      travelers: "2",
      notes: "",
    });
  };

  const itinerary = generateItinerary(pkg.title, pkg.duration);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-28 md:py-36 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src={pkg.image}
              alt={pkg.title}
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest">
              {pkg.location}
            </span>
            <Heading
              variant="display-lg"
              className="text-white font-extrabold tracking-tight max-w-4xl leading-tight"
            >
              {pkg.title}
            </Heading>
            <div className="flex items-center gap-4 text-sm font-semibold text-white/80 mt-2">
              <span className="flex items-center gap-1.5">
                <Compass size={16} className="text-primary" />
                {pkg.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-secondary" />
                {pkg.duration}
              </span>
            </div>
          </Container>
        </section>

        {/* Detailed Grid Section */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left Column: Details & Itinerary */}
              <div className="lg:col-span-2 flex flex-col gap-10 text-left">
                {/* Description */}
                <div className="flex flex-col gap-4">
                  <Heading
                    variant="h2"
                    className="text-2xl md:text-3xl font-extrabold tracking-tight"
                  >
                    Overview
                  </Heading>
                  <Text variant="body-md" className="text-text-secondary leading-relaxed">
                    {pkg.description} We fully manage ground transit, luxury hotel bookings,
                    experienced local guides, and 24/7 emergencies.
                  </Text>
                </div>

                {/* Highlights Grid */}
                <div className="flex flex-col gap-4">
                  <Heading variant="h3" className="text-xl font-bold tracking-tight">
                    Package Highlights
                  </Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-border/80"
                      >
                        <ShieldCheck size={20} className="text-primary shrink-0" />
                        <span className="text-sm font-semibold text-text-secondary">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions / Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-surface rounded-3xl border border-border">
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-extrabold text-primary uppercase tracking-wider">
                      {"What's Included:"}
                    </span>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Luxury Stays & Resorts",
                        "Airport Pick-up & Transfers",
                        "Daily Buffet Breakfasts",
                        "Private Guided Excursions",
                      ].map((inc, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs font-semibold text-text-secondary"
                        >
                          <span className="text-primary font-bold text-sm">✓</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-extrabold text-danger uppercase tracking-wider">
                      {"What's Excluded:"}
                    </span>
                    <ul className="flex flex-col gap-2">
                      {[
                        "International / Domestic Flights",
                        "Visas & Processing Fees",
                        "Personal Laundry & Extras",
                        "Tips and Driver Gratuities",
                      ].map((exc, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs font-semibold text-text-secondary"
                        >
                          <span className="text-danger font-bold text-sm">✗</span> {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Day-by-Day Itinerary Map */}
                <div className="flex flex-col gap-6">
                  <Heading variant="h3" className="text-xl font-bold tracking-tight">
                    Detailed Itinerary
                  </Heading>
                  <div className="flex flex-col">
                    {itinerary.map((step, i) => (
                      <div
                        key={i}
                        className="relative pl-8 border-l border-primary/30 pb-8 last:pb-0"
                      >
                        {/* Circle bullet indicator */}
                        <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-soft" />

                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-extrabold bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-md uppercase">
                            {step.day}
                          </span>
                          <h4 className="font-extrabold text-text-primary text-body-md tracking-tight">
                            {step.title}
                          </h4>
                        </div>
                        <Text
                          variant="body-sm"
                          className="text-text-secondary leading-relaxed pl-1"
                        >
                          {step.details}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Booking Sidebar */}
              <div className="lg:col-span-1 lg:sticky lg:top-24 flex flex-col gap-6 text-left">
                {/* Price & Book Card */}
                <div className="p-6 rounded-3xl border border-border bg-card shadow-soft flex flex-col gap-5">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                      Price Per Person
                    </span>
                    <span className="text-3xl font-black text-primary font-heading mt-1">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 py-4 border-y border-border/80">
                    <div className="flex justify-between items-center text-xs font-semibold text-text-secondary">
                      <span>Trip Duration</span>
                      <span className="font-bold text-text-primary">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold text-text-secondary">
                      <span>Destination</span>
                      <span className="font-bold text-text-primary">{pkg.location}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleOpenModal}
                    variant="primary"
                    className="w-full font-bold shadow-soft cursor-pointer text-sm py-3"
                  >
                    Book This Package
                  </Button>
                </div>

                {/* Support Assistance Card */}
                <div className="p-6 rounded-3xl border border-border bg-surface flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-primary text-sm tracking-tight mb-1">
                      Need Travel Assistance?
                    </h5>
                    <Text variant="body-sm" className="text-text-secondary leading-relaxed mb-3">
                      Our travel desk is available 24/7 to adjust this route or secure helicopter
                      slots, premium cars, and special permits.
                    </Text>
                    <a
                      href="tel:+919258645860"
                      className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      <Phone size={14} />
                      +91 92586 45860
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      {/* Booking/Inquiry Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Inquiry: ${pkg.title}`}
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
              onClick={() => setIsModalOpen(false)}
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
