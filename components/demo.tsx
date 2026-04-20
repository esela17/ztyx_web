"use client";
import { Footer } from "@/components/ui/modem-animated-footer";
import {
  X,
  Github,
  Mail,
  NotepadTextDashed,
} from "lucide-react";

// Linkedin icon as inline SVG (removed from lucide-react v1+)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FooterDemo() {
  const socialLinks = [
    {
      icon: <X className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <LinkedinIcon className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:contact@resumegpt.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Pricing", href: "/" },
    { label: "Templates", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <Footer
      brandName="ResumeGPT"
      brandDescription="AI-powered resume builder for modern professionals. Create stunning resumes optimized for ATS systems."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Deepak Modi"
      creatorUrl="https://deepakmodi.tech"
      brandIcon={<NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />}
    />
  );
}
