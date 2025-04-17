"use client";
import React from 'react';

interface HeaderProps {
  title: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headingStyles = {
  h1: "text-4xl font-bold tracking-tight mb-6 text-foreground text-center",
  h2: "text-3xl font-semibold tracking-normal mb-5 text-foreground text-center",
  h3: "text-2xl font-medium tracking-normal mb-4 text-foreground text-center",
  h4: "text-xl font-medium tracking-normal mb-3 text-foreground text-center",
  h5: "text-lg font-medium tracking-normal mb-2 text-foreground text-center",
  h6: "text-base font-medium tracking-normal mb-2 text-foreground text-center"
};

export default function Header({ title, headingLevel = "h1" }: HeaderProps) {
  const Heading = headingLevel;
  return (
    <Heading className={headingStyles[headingLevel]}>
      {title}
    </Heading>
  );
} 