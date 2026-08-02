export const BLOG_CATEGORIES = ["All", "Adventure", "Guides", "Honeymoon", "Tips"];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Top 10 Hidden Gem Destinations in India for 2026",
    excerpt:
      "Step away from crowded resorts and discover pristine valleys, mystical temples, and untouched waterfalls across the subcontinent.",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    date: "Oct 12, 2026",
    author: "Rahul Sharma",
    readTime: "6 min read",
  },
  {
    id: "post-2",
    title: "How to Plan Your Honeymoon Package on a Budget",
    excerpt:
      "Your dream getaway doesn't need to break the bank. Read our expert tips on booking premium stays and activities at fraction costs.",
    category: "Honeymoon",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    date: "Sep 28, 2026",
    author: "Priya Patel",
    readTime: "5 min read",
  },
  {
    id: "post-3",
    title: "The Essential Packing Guide for Alpine Trekking",
    excerpt:
      "Prepare for high altitudes and freezing temperatures with our ultimate trekking gear list. Learn how to package light but complete.",
    category: "Guides",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    date: "Sep 15, 2026",
    author: "Amit Verma",
    readTime: "8 min read",
  },
  {
    id: "post-4",
    title: "Tips for Seamless Flight Bookings and Assistance",
    excerpt:
      "Navigate last-minute flight delays, baggage policies, and airport ticket assistance with these simple guidelines.",
    category: "Tips",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    date: "Aug 30, 2026",
    author: "Vikram Malhotra",
    readTime: "4 min read",
  },
];
