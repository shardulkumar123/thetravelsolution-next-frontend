"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { ContactFormData, contactSchema } from "@/utils/validation";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section className="bg-background py-20 " id="contact">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <Heading
            variant="h2"
            className="text-text-primary tracking-tight font-extrabold text-3xl md:text-4xl mb-4"
          >
            We&apos;d Love to Hear From You
          </Heading>
          <Text
            variant="body-md"
            color="text-secondary"
            className="max-w-xl mx-auto leading-relaxed"
          >
            Reach out to our travel specialists to plan your next journey or resolve any issues.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Heading variant="h4" className="text-text-primary font-bold mb-2 text-left">
              Get in Touch
            </Heading>

            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-soft text-left">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h5 className="font-semibold text-text-primary text-sm">Our Office</h5>
                <p className="text-xs text-text-secondary mt-1">
                  NANGAL, SAHASTRADHARA RD, DEHRADUN, 248001
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-soft text-left">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-text-primary text-sm">Call Us</h5>
                <div className="flex flex-col text-xs text-text-secondary mt-1 gap-1">
                  <a
                    href="tel:+919258645860"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    +91 9258645860
                  </a>
                  <a
                    href="tel:+919084656222"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    +91 9084656222
                  </a>
                  <a
                    href="tel:+919756706378"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    +91 9756706378
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-soft text-left">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-success/10 border border-success/20 text-success shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-text-primary text-sm">Email Us</h5>
                <p className="text-xs text-text-secondary mt-1">
                  <a
                    href="mailto:travelsolutionuk0@gmail.com"
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    travelsolutionuk0@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-border bg-card shadow-soft text-left">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-text-primary text-sm">Working Hours</h5>
                <p className="text-xs text-text-secondary mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 p-8 rounded-card border border-border bg-card shadow-medium text-left">
            <Heading variant="h4" className="text-text-primary font-bold mb-6">
              Send Us a Message
            </Heading>

            {formSubmitted ? (
              <div className="p-6 rounded-lg bg-success/10 border border-success/20 text-success text-center">
                <Heading variant="h4" className="text-success font-bold mb-2">
                  Message Sent!
                </Heading>
                <p className="text-sm font-medium">
                  Thank you for reaching out. A travel specialist will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-text-primary font-heading"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                      className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-border focus-visible:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium mt-0.5" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-text-primary font-heading"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="johndoe@example.com"
                      {...register("email")}
                      className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-border focus-visible:ring-primary"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-medium mt-0.5" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold text-text-primary font-heading"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Booking inquiry"
                    {...register("subject")}
                    className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      errors.subject
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-border focus-visible:ring-primary"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 font-medium mt-0.5" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-text-primary font-heading"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your next adventure..."
                    {...register("message")}
                    className={`flex w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 resize-none ${
                      errors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-border focus-visible:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium mt-0.5" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

ContactSection.displayName = "ContactSection";
