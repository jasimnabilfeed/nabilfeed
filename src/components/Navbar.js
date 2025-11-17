"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4 shadow bg-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src="/nabilfeednobg.png"
                            alt="Nabil Feed Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium">
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/teams">Our Team</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/careers">Career</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col gap-4 mt-2 px-2 pb-4 font-medium">
                    <li><Link href="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
                    <li><Link href="/teams" onClick={() => setIsOpen(false)}>Our Team</Link></li>
                    <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
                    <li><Link href="/careers" onClick={() => setIsOpen(false)}>Career</Link></li>
                    <li><Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                </ul>
            )}
        </nav>
    );
}
