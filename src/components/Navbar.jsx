import React from 'react'
import { Wind, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-300/20">
            <Wind className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-white">rewind</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#impact" className="hover:text-white transition-colors">Impact</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 font-medium text-emerald-950 shadow-sm shadow-emerald-400/30 hover:bg-emerald-300 transition-colors">Get in touch</a>
        </nav>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80 hover:text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
