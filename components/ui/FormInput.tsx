"use client";

import React from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

import { cn } from "@/lib/utils";

interface FormInputProps<TFieldValues extends FieldValues> extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "name"
> {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  helperText?: string;
}

export function FormInput<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  helperText,
  className,
  type = "text",
  id,
  ...props
}: FormInputProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputId = id || name;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-foreground tracking-wide font-heading"
        >
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        type={type}
        id={inputId}
        value={field.value ?? ""}
        className={cn(
          "flex h-10 w-full rounded-lg border border-muted bg-background px-3 py-2 text-sm text-foreground ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
      />

      {error ? (
        <p className="text-xs font-medium text-red-500" role="alert">
          {error.message}
        </p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
