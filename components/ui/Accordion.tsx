"use client";

import React, { useState } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 mb-4 overflow-hidden",
        isOpen
          ? "bg-primary/5 border-primary/20 shadow-soft"
          : "bg-surface border-border hover:bg-surface/70"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left p-6 font-medium text-text-primary focus:outline-none cursor-pointer group"
      >
        <span className="text-body-md font-bold pr-4 leading-snug text-text-primary group-hover:text-primary transition-colors">
          {question}
        </span>
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
            isOpen
              ? "bg-primary text-white shadow-soft"
              : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
          )}
        >
          <ChevronDown
            size={16}
            className={cn("transition-transform duration-300", isOpen && "rotate-180")}
          />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-body-sm leading-relaxed text-text-secondary">{answer}</div>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>(items.length > 0 ? [items[0].id] : []);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
