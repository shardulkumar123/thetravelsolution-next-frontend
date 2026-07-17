"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

import { cn } from "@/lib/utils";

interface SubLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href?: string;
  subLinks?: SubLink[];
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Tour Packages",
      subLinks: [
        { name: "Domestic Tours", href: "/packages/domestic-tours" },
        { name: "Religious Tours", href: "/packages/religious-tours" },
        { name: "Honeymoon Packages", href: "/packages/honeymoon-packages" },
      ],
    },
    {
      name: "Booking Services",
      subLinks: [
        { name: "Hotel Booking", href: "/#hotel-booking" },
        { name: "Taxi Booking", href: "/#taxi-booking" },
        { name: "Bus Booking", href: "/#bus-booking" },
        { name: "Flight Ticket Assistance", href: "/#flight-assistance" },
      ],
    },
    { name: "Blogs", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 w-full z-[var(--z-index-sticky-val)] transition-all duration-[var(--transition-duration-default-val)] border-b",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border shadow-soft"
            : "bg-background border-transparent"
        )}
      >
        <Container className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn p-1"
          >
            <span className="flex items-center gap-3">
              <Logo className="w-18 h-18 fill-current text-primary transition-transform duration-300 hover:scale-105" />
              <div className="flex flex-col leading-tight select-none">
                <span className="font-heading text-lg font-extrabold tracking-tight bg-gradient-to-r from-primary-hover via-primary to-secondary bg-clip-text text-transparent">
                  The Travel Solution
                </span>
                <span className="text-[9px] text-text-secondary font-bold tracking-wider uppercase opacity-85 mt-0.5">
                  Your Travel Partner
                </span>
              </div>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-4 lg:gap-2 xl:gap-6"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <div
                    key={link.name}
                    className="relative py-4 group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 text-body-sm font-medium text-text-secondary hover:text-primary tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 py-1 transition-colors duration-200 cursor-pointer"
                      aria-expanded={activeDropdown === link.name}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200 text-text-secondary group-hover:text-primary",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 rounded-md bg-card border border-border shadow-hard py-2 transition-all duration-200 origin-top z-50",
                        activeDropdown === link.name
                          ? "opacity-100 translate-y-0 scale-100 visible"
                          : "opacity-0 translate-y-2 scale-95 invisible"
                      )}
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-body-sm text-text-secondary hover:text-primary hover:bg-surface rounded-md transition-colors duration-150"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href || "#"}
                  className="relative py-2 text-body-sm font-medium text-text-secondary hover:text-primary tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-btn hover:bg-surface text-text-secondary hover:text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[var(--z-index-drawer-val)] transition-opacity duration-300 pointer-events-none lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-4/5 max-w-[320px] h-full bg-background shadow-hard flex flex-col p-6 transition-transform duration-300 ease-out transform border-l border-border",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="flex items-center gap-2.5">
              <Logo className="w-10 h-10 fill-current text-primary" />
              <div className="flex flex-col leading-tight select-none">
                <span className="font-heading text-sm font-extrabold tracking-tight bg-gradient-to-r from-primary-hover via-primary to-secondary bg-clip-text text-transparent">
                  The Travel Solution
                </span>
                <span className="text-[8px] text-text-secondary font-bold tracking-wider uppercase opacity-85 mt-0.5">
                  Your Travel Partner
                </span>
              </div>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-btn hover:bg-surface text-text-secondary hover:text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 mb-8 overflow-y-auto max-h-[calc(100vh-250px)]">
            {navLinks.map((link) => {
              if (link.subLinks) {
                const isExpanded = mobileDropdown === link.name;
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileDropdown(isExpanded ? null : link.name)}
                      className="flex items-center justify-between py-3 text-body-lg font-medium text-text-secondary hover:text-primary tracking-wide border-b border-border/50 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200 cursor-pointer w-full text-left"
                      aria-expanded={isExpanded}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform duration-200 text-text-secondary",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Collapsible Sub-menu */}
                    <div
                      className={cn(
                        "flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded ? "max-h-60 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
                      )}
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 text-body-md text-text-secondary hover:text-primary tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href || "#"}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-body-lg font-medium text-text-secondary hover:text-primary tracking-wide border-b border-border/50 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer CTA */}
          <div className="mt-auto flex flex-col gap-4">
            <Button
              variant="primary"
              size="default"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.displayName = "Navbar";
