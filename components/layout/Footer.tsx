import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "../ui/Container";
import { Heading, Text } from "../ui/Typography";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollPos > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Run initially
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
    ],
    services: [
      { name: "Flight Booking", href: "#" },
      { name: "Hotel Reservation", href: "#" },
      { name: "Holiday Packages", href: "#" },
      { name: "Travel Insurance", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Support Info", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.96.23 2.524.45a4.764 4.764 0 011.666 1.086 4.764 4.764 0 011.087 1.666c.217.565.396 1.385.449 2.524.043.927.054 1.282.054 3.71s-.01 2.784-.054 3.71c-.051 1.14-.23 1.96-.45 2.524a4.764 4.764 0 01-1.087 1.666 4.764 4.764 0 01-1.666 1.087c-.565.217-1.385.396-2.524.449-.927.043-1.282.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.051-1.96-.23-2.524-.45a4.764 4.764 0 01-1.666-1.087 4.764 4.764 0 01-1.087-1.666c-.217-.565-.396-1.385-.449-2.524C2.01 14.828 2 14.474 2 12.04c0-2.43.01-2.784.054-3.71.051-1.14.23-1.96.45-2.524a4.764 4.764 0 011.087-1.666A4.764 4.764 0 016.582 2.45c.565-.217 1.385-.396 2.524-.449.927-.043 1.282-.054 3.71-.054zm1.902 1.836c-.88-.04-1.218-.047-3.217-.047s-2.337.007-3.217.047c-.985.045-1.52.209-1.876.348a3.29 3.29 0 00-1.203.783 3.29 3.29 0 00-.783 1.203c-.14.356-.303.891-.348 1.876-.04.88-.047 1.218-.047 3.217s.007 2.337.047 3.217c.045.985.209 1.52.348 1.876a3.29 3.29 0 00.783 1.202 3.29 3.29 0 001.203.783c.356.14.891.303 1.876.348.88.04 1.218.047 3.217.047s2.337-.007 3.217-.047c.985-.045 1.52-.209 1.876-.348a3.29 3.29 0 001.203-.783 3.29 3.29 0 00.783-1.202c.14-.356.303-.891.348-1.876.04-.88.047-1.218.047-3.217s-.007-2.337-.047-3.217c-.045-.985-.209-1.52-.348-1.876a3.29 3.29 0 00-.783-1.203 3.29 3.29 0 00-1.203-.783c-.356-.14-.891-.303-1.876-.348zM12 5.865a6.175 6.175 0 100 12.35 6.175 6.175 0 000-12.35zm0 10.513a4.338 4.338 0 110-8.676 4.338 4.338 0 010 8.676zm5.88-8.733a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <>
      <footer className="bg-surface text-text-primary border-t border-border mt-auto pt-16 pb-8 transition-colors duration-[var(--transition-duration-default-val)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <Link
                href="/"
                className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-btn w-fit"
              >
                <span className="font-heading text-2xl font-bold tracking-tight text-text-primary flex items-center gap-2">
                  <span className="w-9 h-9 rounded-btn bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-base font-extrabold shadow-soft">
                    T
                  </span>
                  Travel<span className="text-primary font-medium">Solution</span>
                </span>
              </Link>
              <Text
                variant="body-md"
                color="text-secondary"
                className="max-w-sm mt-2 leading-relaxed"
              >
                We design premium and modern travel management systems, empowering travelers and
                agencies to navigate the world seamlessly.
              </Text>
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-9.5 h-9.5 rounded-full border border-border bg-card text-text-secondary hover:text-primary hover:border-primary hover:shadow-soft transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <Heading
                variant="h6"
                className="uppercase tracking-wider text-text-primary mb-4 font-semibold text-xs"
              >
                Company
              </Heading>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-body-sm text-text-secondary hover:text-primary hover:underline transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <Heading
                variant="h6"
                className="uppercase tracking-wider text-text-primary mb-4 font-semibold text-xs"
              >
                Services
              </Heading>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-body-sm text-text-secondary hover:text-primary hover:underline transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <Heading
                variant="h6"
                className="uppercase tracking-wider text-text-primary mb-4 font-semibold text-xs"
              >
                Contact Us
              </Heading>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2.5 text-body-sm text-text-secondary">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="break-words">
                    100 Travel Solutions Ave, Suite 500, San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-body-sm text-text-secondary">
                  <Phone size={16} className="text-primary shrink-0" />
                  <a
                    href="tel:+18005550199"
                    className="hover:text-primary hover:underline outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md break-all"
                  >
                    +1 (800) 555-0199
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-body-sm text-text-secondary">
                  <Mail size={16} className="text-primary shrink-0" />
                  <a
                    href="mailto:support@travelsolution.com"
                    className="hover:text-primary hover:underline outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md break-all"
                  >
                    support@travelsolution.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider and Copyright */}
          <div className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <Text variant="caption" color="text-secondary">
              &copy; {currentYear} TravelSolution Inc. All rights reserved.
            </Text>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
              {footerLinks.legal.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-caption text-text-secondary hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-hard border border-primary cursor-pointer transition-all duration-300 hover:bg-primary-hover  active:scale-95 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="stroke-[2.5]" />
      </button>
    </>
  );
};

Footer.displayName = "Footer";
