"use client";
import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(
  dynamic(() => import('./components/Counter/Counter')), {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(
  dynamic(() => import('./components/Header/Header')), {
  name: "Header",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "headingLevel",
      type: "enum",
      enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
      defaultValue: "h1",
    },
  ],
});