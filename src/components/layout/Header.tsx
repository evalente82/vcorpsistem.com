'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            VCorp
          </Link>

          {/* Menu para Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/servicos" className="text-gray-600 hover:text-blue-600">
              Serviços
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-600 hover:text-blue-600">
              Contato
            </Link>
          </div>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/servicos"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
