"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// import { useApp } from "@/context/AppContext";
import { Menu, X } from "lucide-react";

// import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  // const { theme, toggleTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Stats", href: "#stats" },
    { name: "Contact", href: "#contact" },
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
        <Container className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn p-1"
          >
            <span className="font-heading text-xl font-bold tracking-tight text-text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-btn bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-base font-extrabold shadow-soft">
                T
              </span>
              Travel<span className="text-primary font-medium">Solution</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-2 text-body-sm font-medium text-text-secondary hover:text-primary tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle (Commented for future use)
            <button
              onClick={toggleTheme}
              className="p-2 rounded-btn hover:bg-surface text-text-secondary hover:text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer transition-colors duration-200"
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            */}
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle (Commented for future use)
            <button
              onClick={toggleTheme}
              className="p-2 rounded-btn hover:bg-surface text-text-secondary hover:text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer transition-colors duration-200"
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            */}
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
          "fixed inset-0 z-[var(--z-index-drawer-val)] transition-opacity duration-300 pointer-events-none md:hidden",
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
            <span className="font-heading text-lg font-bold tracking-tight text-text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-btn bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-base font-extrabold">
                T
              </span>
              TravelSolution
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
          <nav className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-body-lg font-medium text-text-secondary hover:text-primary tracking-wide border-b border-border/50 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn px-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
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
