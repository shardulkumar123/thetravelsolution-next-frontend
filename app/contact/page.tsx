"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { ContactFormData, contactSchema } from "@/utils/validation";

export default function ContactPage() {
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
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Sandy beach sunset banner"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10">
            <Heading variant="display-lg" className="text-white font-extrabold mb-4">
              Contact Our Team
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Contact</span>
            </div>
          </Container>
        </section>

        {/* Main Content Sections */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Coordinates */}
              <div className="lg:col-span-5 flex flex-col gap-2 text-left">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Information
                  </span>
                  <Heading
                    variant="h2"
                    className="text-text-primary font-extrabold tracking-tight text-3xl mb-4"
                  >
                    How Can We Assist You?
                  </Heading>
                  <Text variant="body-md" color="text-secondary" className="leading-relaxed mb-6">
                    Our team of experienced travel planners is ready to answer your questions,
                    resolve booking issues, or help you outline customized packages.
                  </Text>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary text-base">Office Address</h5>
                    <p className="text-sm text-text-secondary mt-1">
                      NANGAL, SAHASTRADHARA RD, DEHRADUN, 248001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary text-base">Phone Inquiries</h5>
                    <div className="flex  text-sm text-text-secondary mt-1 gap-1">
                      <a
                        href="tel:+919258645860"
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        +91 9258645860,
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

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-success/10 border border-success/20 text-success shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary text-base">Email Support</h5>
                    <p className="text-sm text-text-secondary mt-1">
                      <a
                        href="mailto:travelsolutionuk0@gmail.com"
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        travelsolutionuk0@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary text-base">Support Hours</h5>
                    <p className="text-sm text-text-secondary mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="h-full lg:col-span-7 p-8 md:p-10 rounded-card border border-border bg-card shadow-medium">
                <Heading variant="h3" className="text-text-primary font-bold pb-6">
                  Submit a Query
                </Heading>

                {formSubmitted ? (
                  <div className="p-8 rounded-lg bg-success/10 border border-success/20 text-success text-center">
                    <Heading variant="h4" className="text-success font-bold mb-2">
                      Thank You!
                    </Heading>
                    <p className="text-sm font-medium">
                      Your message has been received successfully. A coordinator will email you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5 text-left">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold text-text-primary font-heading"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
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
                      <div className="flex flex-col gap-1.5 text-left">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold text-text-primary font-heading"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="johndoe@example.com"
                          {...register("email")}
                          className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
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

                    <div className="flex flex-col gap-1.5 text-left">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-text-primary font-heading"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Itinerary consultation"
                        {...register("subject")}
                        className={`flex h-10 w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
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

                    <div className="flex flex-col gap-1.5 text-left">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold text-text-primary font-heading"
                      >
                        Details / Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Provide details about your tour dates, party size, or questions..."
                        {...register("message")}
                        className={`flex w-full rounded-lg border bg-background px-3 py-2 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-none ${
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
                      className="w-full flex items-center justify-center gap-2 mt-20"
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
      </main>

      <Footer />
    </div>
  );
}
