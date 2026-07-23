"use client";

import React, { useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChardhamSpotlight } from "@/components/sections/religious-tours/ChardhamSpotlight";
import { OtherReligiousTours } from "@/components/sections/religious-tours/OtherReligiousTours";
import { ReligiousFaqSection } from "@/components/sections/religious-tours/ReligiousFaqSection";
// Import modular sections
import { ReligiousHero } from "@/components/sections/religious-tours/ReligiousHero";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Heading, Text } from "@/components/ui/Typography";

export default function ReligiousToursPage() {
  const [bookingDhamName, setBookingDhamName] = useState<string | null>(null);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    notes: "",
  });

  const handleBookClick = (dhamName: string) => {
    setBookingDhamName(dhamName);
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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <ReligiousHero />

        {/* Featured Spotlight: Chaar Dham Yatra */}
        <ChardhamSpotlight onBookClick={handleBookClick} />

        {/* Other Religious Packages */}
        <OtherReligiousTours onBookClick={handleBookClick} />

        {/* FAQs - "Pilgrim Intel" Section */}
        <ReligiousFaqSection />
      </main>

      <Footer />

      {/* Booking/Inquiry Modal */}
      <Modal
        isOpen={bookingDhamName !== null}
        onClose={() => setBookingDhamName(null)}
        title={`Inquiry: ${bookingDhamName} Dham Yatra`}
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
              Thank you for your interest. Our travel expert will contact you shortly on your
              provided details.
            </Text>
            <Button
              variant="primary"
              onClick={() => setBookingDhamName(null)}
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
