"use client";

import React from "react";

import { useApp } from "@/context/AppContext";

import { Button } from "../ui/Button";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <header className="border-b border-muted bg-background py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-heading text-xl font-bold tracking-tight text-foreground">
          Next.js Boilerplate
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Button>
      </div>
    </header>
  );
};
