"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
  className?: string;
}

export function SiteBreadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-base", className)}
    >
      <ol className="flex items-center space-x-1" role="list">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="flex items-center text-[#F9F7F2] hover:text-[#FFD483] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD483] focus:ring-offset-2 rounded-sm px-2 py-1"
            aria-label="Go to home page"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight
              className="h-5 w-5 text-[#F9F7F2] mx-2"
              aria-hidden="true"
            />
            {item.current ? (
              <span
                className="text-[#FFD483] font-semibold text-lg px-2 py-1 bg-[#2D8C7E]/20 rounded-md"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href || "#"}
                className="text-[#F9F7F2] hover:text-[#FFD483] hover:bg-[#2D8C7E]/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD483] focus:ring-offset-2 rounded-sm px-2 py-1"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Predefined breadcrumb configurations for each page
export const breadcrumbConfigs = {
  home: [],
  about: [{ label: "About", current: true }],
  communities: [{ label: "Communities", current: true }],
  contribute: [{ label: "Contribute", current: true }],
  projects: [{ label: "Projects", current: true }],
  contact: [{ label: "Contact", current: true }],
  philosophy: [{ label: "Philosophy", current: true }],
  services: [{ label: "Services", current: true }],
  properties: [{ label: "Properties", current: true }],
  vault: [{ label: "Vault", current: true }],
  "advisory-session": [{ label: "Advisory Session", current: true }],
  "privacy-policy": [{ label: "Privacy Policy", current: true }],
  terms: [{ label: "Terms of Service", current: true }],
};
