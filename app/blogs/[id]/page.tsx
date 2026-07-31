"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { ArrowLeft, Calendar, CheckCircle2, Clock, Phone, User } from "lucide-react";

import { BLOG_POSTS } from "@/utils/constants";

import { BLOG_CONTENTS } from "@/constants/blogs";

export default function BlogDetailPage() {
  const { id } = useParams();

  const post = BLOG_POSTS.find((p) => p.id === id);
  const content = post ? BLOG_CONTENTS[post.id] : null;

  if (!post || !content) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-text-primary">
        <Navbar />
        <main className="flex-1 py-20 flex flex-col items-center justify-center">
          <Heading variant="h2" className="text-text-primary mb-4">
            Article Not Found
          </Heading>
          <Text variant="body-md" color="text-secondary" className="mb-6">
            The blog post you are looking for does not exist or has been moved.
          </Text>
          <Link href="/blogs">
            <Button variant="primary">Back to Blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Find related articles (excluding the current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Blog Post Header */}
        <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-hover/20 via-slate-900 to-secondary/30 opacity-60 z-0" />
          <Container className="relative z-10 max-w-4xl text-left">
            {/* Back Button */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-primary transition-colors mb-6 uppercase tracking-wider"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>

            <span className="inline-flex items-center px-3.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              {post.category}
            </span>

            <Heading
              variant="h1"
              className="text-text-primary font-heading font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6"
            >
              {post.title}
            </Heading>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-secondary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Content & Sidebar */}
        <section className="py-16">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2 text-left flex flex-col gap-8">
                {/* Featured Image */}
                <div className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden border border-border shadow-soft">
                  <CustomImage src={post.image} alt={post.title} fill className="object-cover" />
                </div>

                {/* Subtitle */}
                <Text
                  variant="body-lg"
                  className="font-semibold text-text-primary leading-relaxed italic border-l-4 border-primary pl-4 my-2"
                >
                  {content.subtitle}
                </Text>

                {/* Render Sections */}
                {content.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <Heading
                      variant="h3"
                      className="text-xl md:text-2xl font-extrabold tracking-tight text-text-primary"
                    >
                      {section.heading}
                    </Heading>
                    {section.paragraphs.map((p, pIdx) => (
                      <Text
                        key={pIdx}
                        variant="body-sm"
                        className="text-text-secondary leading-relaxed"
                      >
                        {p}
                      </Text>
                    ))}
                  </div>
                ))}

                {/* Quote Callout */}
                <div className="bg-surface border border-border rounded-2xl p-6 text-center my-4">
                  <Text
                    variant="body-md"
                    className="font-heading font-extrabold text-primary italic"
                  >
                    {content.quote}
                  </Text>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 flex flex-col gap-10">
                {/* Call Us Widget */}
                <div className="rounded-3xl border border-border bg-slate-900 text-white p-8 text-left relative overflow-hidden shadow-medium">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-hover/10 to-secondary/10 opacity-60 pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <Heading
                      variant="h4"
                      className="text-white font-extrabold text-xl tracking-tight"
                    >
                      Plan Your Next Getaway
                    </Heading>
                    <Text variant="body-sm" className="text-white/80 leading-relaxed">
                      Inspired by our guides? Our travel specialists are ready to curate your custom
                      itinerary.
                    </Text>
                    <div className="flex flex-col gap-3.5 my-2">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          Premium Lodgings
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          Private Mountain Transit
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-white/90">
                          24/7 Operations Desk
                        </span>
                      </div>
                    </div>
                    <a href="tel:+919258645860" className="mt-2">
                      <Button
                        variant="primary"
                        className="w-full font-bold shadow-soft flex items-center justify-center gap-2"
                      >
                        <Phone size={14} /> Call Us Today
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Related Posts Widget */}
                <div className="flex flex-col gap-5 text-left">
                  <Heading
                    variant="h4"
                    className="text-text-primary font-extrabold text-lg border-b border-border pb-3"
                  >
                    Related Articles
                  </Heading>
                  <div className="flex flex-col gap-6">
                    {relatedPosts.map((rPost) => (
                      <Link
                        key={rPost.id}
                        href={`/blogs/${rPost.id}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                          <CustomImage
                            src={rPost.image}
                            alt={rPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">
                            {rPost.category}
                          </span>
                          <h5 className="font-bold text-text-primary text-xs leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {rPost.title}
                          </h5>
                          <span className="text-[10px] text-text-secondary">{rPost.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
