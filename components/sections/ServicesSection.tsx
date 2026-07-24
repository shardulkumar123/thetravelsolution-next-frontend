"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Modal } from "@/components/ui/Modal";
import { Heading, Text } from "@/components/ui/Typography";

import { SERVICES_ITEMS } from "@/utils/constants";
import { sendWhatsAppMessage } from "@/utils/whatsapp";

export const ServicesSection: React.FC = () => {
  const [bookingServiceName, setBookingServiceName] = useState<string | null>(null);
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

    const message = `*New Service Inquiry*
Service: ${bookingServiceName}
Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Travel Date: ${bookingForm.date}
Travelers: ${bookingForm.travelers}
Notes: ${bookingForm.notes || "None"}`;

    sendWhatsAppMessage(message);
  };

  const handleOpenModal = (serviceName: string) => {
    setBookingServiceName(serviceName);
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
    <section
      className="bg-background text-text-primary py-20 relative overflow-hidden border-b border-border"
      id="services"
    >
      {/* Decorative blurred backgrounds for a premium feel */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none -ml-32 -mb-32" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold">
            Booking Services
          </div>
          <Heading variant="h2" className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Premium Services We Offer
          </Heading>
          <Text variant="body-md" className="text-text-secondary leading-relaxed max-w-xl">
            From planning customized itineraries to managing transit logistics, we cover all details
            so you can enjoy your dream getaway.
          </Text>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_ITEMS.map((service) => (
            <div
              key={service.id}
              onClick={() => handleOpenModal(service.title)}
              className="group relative flex flex-col p-8 rounded-card border border-border bg-card text-text-primary shadow-soft hover:shadow-medium hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 rounded-btn bg-surface border border-border shrink-0 shadow-soft group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 mb-6">
                {service.icon}
              </div>

              {/* Title & Description */}
              <Heading
                variant="h3"
                className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300"
              >
                {service.title}
              </Heading>

              <Text variant="body-md" className="text-text-secondary leading-relaxed flex-1">
                {service.description}
              </Text>

              {/* Modern subtle micro-interaction link indicator */}
              <div className="mt-6 flex items-center gap-1.5 text-body-sm font-bold text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn More</span>
                <span className="text-base leading-none">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Booking/Inquiry Modal */}
      <Modal
        isOpen={bookingServiceName !== null}
        onClose={() => setBookingServiceName(null)}
        title={`Inquiry: ${bookingServiceName}`}
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
              onClick={() => setBookingServiceName(null)}
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

ServicesSection.displayName = "ServicesSection";
