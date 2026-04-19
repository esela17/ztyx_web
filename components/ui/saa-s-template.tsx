"use client";

import React from "react";

// Placeholder components since they weren't provided in the snippet
const Navigation = () => (
  <nav className="p-4 border-b border-white/10 flex justify-between items-center">
    <div className="font-bold text-xl">ZTYX</div>
    <div className="space-x-4">
      <a href="#" className="hover:text-gray-400">Home</a>
      <a href="#" className="hover:text-gray-400">Features</a>
      <a href="#" className="hover:text-gray-400">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="py-20 text-center">
    <h1 className="text-6xl font-bold mb-6">Welcome to the Future</h1>
    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
      Experience the next dimension of web development with our SaaS template.
    </p>
  </section>
);

export default function Component() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
    </main>
  );
}
