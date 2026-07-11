"use client";

import { useState } from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { CustomImage } from "@/components/ui/CustomImage";
import { Heading, Text } from "@/components/ui/Typography";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

import { BLOG_CATEGORIES, BLOG_POSTS, BlogPost } from "@/utils/constants";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = BLOG_CATEGORIES;

  const posts: BlogPost[] = BLOG_POSTS;

  const filteredPosts =
    selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative py-24 bg-slate-900 text-white overflow-hidden text-center">
          <div className="absolute inset-0 z-0 select-none">
            <CustomImage
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Travel blogs banner"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>

          <Container className="relative z-10">
            <Heading variant="display-lg" className="text-white font-extrabold mb-4">
              Travel Insights & Stories
            </Heading>
            <div className="flex justify-center gap-2 text-sm font-semibold text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Blogs</span>
            </div>
          </Container>
        </section>

        {/* Blog Listings Section */}
        <section className="py-20 bg-background">
          <Container>
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary border-primary text-white shadow-soft"
                      : "bg-surface border-border text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-card border border-border bg-card overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  {/* Image container */}
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <CustomImage
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Category Overlay tag */}
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-xs font-semibold text-white tracking-wider uppercase">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* Meta information row */}
                      <div className="flex items-center gap-4 text-xs text-text-secondary mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-primary" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-primary" />
                          <span>By {post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-primary" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Heading
                        variant="h4"
                        className="text-text-primary font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2"
                      >
                        {post.title}
                      </Heading>

                      <Text
                        variant="body-sm"
                        color="text-secondary"
                        className="mt-3 leading-relaxed line-clamp-3"
                      >
                        {post.excerpt}
                      </Text>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider group-hover:underline cursor-pointer">
                        Read Full Article
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Text variant="body-lg" color="text-secondary">
                  No articles found in this category.
                </Text>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
