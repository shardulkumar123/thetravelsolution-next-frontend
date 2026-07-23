"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Modal } from "@/components/ui/Modal";
import { Heading, Text } from "@/components/ui/Typography";
import { CheckCircle2, Clock, MapPin } from "lucide-react";

import { SEASONAL_TOURS } from "@/utils/constants";

import { cn } from "@/lib/utils";

const TABS = ["All", "Chardham Yatra", "Himalayan Escapes", "Tropical Retreats"];

export const SeasonalToursSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [bookingTourName, setBookingTourName] = useState<string | null>(null);
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

  const handleOpenModal = (tourName: string) => {
    setBookingTourName(tourName);
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

  const filteredTours =
    activeTab === "All"
      ? SEASONAL_TOURS
      : SEASONAL_TOURS.filter((tour) => tour.category === activeTab);

  return (
    <section
      className="py-20 bg-background border-b border-border relative overflow-hidden"
      id="seasonal-tours"
    >
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[120px] pointer-events-none -ml-20 -mt-20" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none -mr-20 -mb-20" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 gap-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            Seasonal Specials
          </span>
          <Heading
            variant="h2"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary"
          >
            Popular Tours & Seasonal Trips
          </Heading>
          <Text variant="body-md" className="text-text-secondary leading-relaxed max-w-xl">
            Explore our handpicked seasonal itineraries, curated pilgrim tours, and most popular
            destinations trending this season.
          </Text>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-3xl bg-surface border border-border gap-1.5">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-2 text-xs md:text-sm font-semibold rounded-2xl transition-all duration-300 cursor-pointer outline-none",
                    isActive
                      ? "bg-primary text-white shadow-soft"
                      : "text-text-secondary hover:text-primary"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => handleOpenModal(tour.title)}
              className="group relative flex flex-col rounded-3xl border border-border bg-card shadow-soft hover:shadow-medium hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer text-left"
            >
              {/* Tour Image */}
              <div className="relative w-full h-[220px] select-none overflow-hidden shrink-0">
                <CustomImage
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-primary font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20 shadow-soft">
                  {tour.category}
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-xs font-bold text-text-secondary">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-secondary" />
                      {tour.duration}
                    </span>
                  </div>

                  <Heading
                    variant="h3"
                    className="text-xl font-bold tracking-tight text-text-primary mt-1"
                  >
                    {tour.title}
                  </Heading>

                  <Text
                    variant="body-sm"
                    className="text-text-secondary leading-relaxed line-clamp-3"
                  >
                    {tour.description}
                  </Text>
                </div>

                {/* Highlights List */}
                <div className="mt-5 pt-4 border-t border-border/80 flex flex-col gap-2.5">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-xs font-semibold text-text-secondary">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                      Starting Price
                    </span>
                    <span className="text-xl font-black text-primary font-heading mt-0.5">
                      {tour.price}
                    </span>
                  </div>
                  <Button variant="primary" size="sm" className="font-bold px-5">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Booking/Inquiry Modal */}
      <Modal
        isOpen={bookingTourName !== null}
        onClose={() => setBookingTourName(null)}
        title={`Inquiry: ${bookingTourName}`}
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
              onClick={() => setBookingTourName(null)}
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
    </section>
  );
};

SeasonalToursSection.displayName = "SeasonalToursSection";
