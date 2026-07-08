"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useGet } from "@/hooks/useGet";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useApp } from "@/context/AppContext";

import { Header } from "@/components/common/Header";
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";
import { Loader } from "@/components/ui/Loader";
import { Modal } from "@/components/ui/Modal";
import { Skeleton } from "@/components/ui/Skeleton";
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Cpu,
  DollarSign,
  Layers,
  Mail,
  Monitor,
  RefreshCw,
} from "lucide-react";

import { formatCurrency, formatDate } from "@/utils/helpers";

interface Post {
  id: number;
  title: string;
  body: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Must be a valid email address"),
});

interface FormData {
  name: string;
  email: string;
}

export default function Home() {
  const { theme } = useApp();
  const { width, height } = useWindowSize();
  const currentDate = new Date();
  const demoPrice = 1299.99;

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formDataToShow, setFormDataToShow] = useState<FormData | null>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormDataToShow(data);
    setIsDemoModalOpen(true);
    reset();
  };

  // React Query fetch demonstration using our custom useGet hook
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useGet<Post[]>(["posts"], "https://jsonplaceholder.typicode.com/posts?_limit=3");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6 flex flex-col gap-12">
        {/* Welcome Section */}
        <section className="flex flex-col items-center text-center gap-4">
          <Image
            className="dark:invert mb-2"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="text-4xl font-extrabold tracking-tight font-heading sm:text-5xl flex items-center gap-3">
            Production Ready Boilerplate
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A modern codebase structure with pre-configured Husky hooks, Jest tests, a global
            Context Provider, Google Fonts, and a unified theme.
          </p>
        </section>

        {/* Controlled Form Validation Section */}
        <section className="border border-muted rounded-2xl p-6 bg-muted/10 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold font-heading flex items-center gap-2">
              <Mail className="text-primary" size={24} />
              Controlled Inputs & Yup Validation
            </h2>
            <p className="text-muted-foreground text-sm">
              Integrated form component demonstration using React Hook Form, Yup validation, and a
              loading spinner.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-4 items-end">
            <FormInput
              name="name"
              control={control}
              label="Full Name"
              placeholder="John Doe"
              helperText="Enter your name (minimum 3 characters)"
            />
            <FormInput
              name="email"
              control={control}
              label="Email Address"
              placeholder="john@example.com"
              helperText="We will never share your email"
            />
            <div className="sm:col-span-2 flex justify-end mt-2">
              <Button type="submit" disabled={isSubmitting} className="min-w-[120px]">
                {isSubmitting ? (
                  <>
                    <Loader size="sm" variant="white" className="mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Form"
                )}
              </Button>
            </div>
          </form>
        </section>

        {/* Modal Showcase */}
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          title="Submission Successful!"
        >
          <div className="flex flex-col items-center gap-4 text-center py-4">
            <CheckCircle2 className="text-green-500 size-16 animate-bounce" />
            <h4 className="text-lg font-bold font-heading">Thank you, {formDataToShow?.name}!</h4>
            <p className="text-muted-foreground">
              A validation confirmation has been sent to <strong>{formDataToShow?.email}</strong>.
            </p>
            <Button className="mt-4" onClick={() => setIsDemoModalOpen(false)}>
              Close Dialog
            </Button>
          </div>
        </Modal>

        {/* TanStack React Query Showcase */}
        <section className="border border-muted rounded-2xl p-6 bg-muted/20 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold font-heading flex items-center gap-2">
                <Cpu className="text-primary" size={24} />
                TanStack React Query + Axios
              </h2>
              <p className="text-muted-foreground text-sm">
                Fetching remote data using standard React Query hooks and configured Axios
                interceptors.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isFetching}>
              <RefreshCw className={`size-4 mr-1 ${isFetching ? "animate-spin" : ""}`} />
              Refetch
            </Button>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-muted p-4 rounded-xl bg-background flex flex-col gap-2"
                >
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 flex items-center gap-2">
              <AlertCircle size={20} />
              <span>Failed to fetch posts from the API.</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {posts?.map((post) => (
                <div
                  key={post.id}
                  className="border border-muted p-4 rounded-xl bg-background flex flex-col gap-2"
                >
                  <span className="text-xs font-semibold text-primary">Post #{post.id}</span>
                  <h3 className="font-bold text-sm line-clamp-1 capitalize">{post.title}</h3>
                  <p className="text-muted-foreground text-xs line-clamp-2">{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* UI Library Showcase */}
        <section className="border border-muted rounded-2xl p-8 bg-muted/20 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold font-heading">Reusable UI Buttons</h2>
            <p className="text-muted-foreground text-sm">
              Standardized design tokens compiling to Tailwind CSS variables automatically.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Theme & Hooks Showcase */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="border border-muted rounded-2xl p-6 bg-muted/30 backdrop-blur-sm flex flex-col gap-4">
            <h2 className="text-xl font-bold font-heading flex items-center gap-2">
              <Layers className="text-primary" size={20} />
              Global State & Theme
            </h2>
            <p className="text-muted-foreground text-sm">
              Theme context is fully responsive to browser settings and localStorage, providing
              values to child components.
            </p>
            <div className="mt-auto">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Active Theme:
              </span>
              <div className="text-lg font-bold text-primary capitalize mt-0.5">{theme} Mode</div>
            </div>
          </div>

          <div className="border border-muted rounded-2xl p-6 bg-muted/30 backdrop-blur-sm flex flex-col gap-4">
            <h2 className="text-xl font-bold font-heading flex items-center gap-2">
              <Monitor className="text-secondary" size={20} />
              Custom Hooks
            </h2>
            <p className="text-muted-foreground text-sm">
              Responsive hooks like{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-secondary">
                useWindowSize
              </code>{" "}
              track browser window width and height.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Width
                </span>
                <div className="text-lg font-bold text-foreground mt-0.5">{width}px</div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Height
                </span>
                <div className="text-lg font-bold text-foreground mt-0.5">{height}px</div>
              </div>
            </div>
          </div>
        </section>

        {/* Utilities Showcase */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1 border-l-2 border-primary pl-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <Calendar size={14} className="text-primary" />
              Formatted Date Utility
            </span>
            <span className="text-base font-semibold">{formatDate(currentDate)}</span>
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-accent pl-4">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <DollarSign size={14} className="text-accent" />
              Formatted Currency Utility
            </span>
            <span className="text-base font-semibold">{formatCurrency(demoPrice)}</span>
          </div>
        </section>
      </main>
    </div>
  );
}
