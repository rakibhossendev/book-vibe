'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0 text-xl font-extrabold tracking-tight text-gray-900 transition-colors hover:text-[#23BE0A] sm:text-2xl"
                >
                    Book<span className="text-[#23BE0A]">Vibe</span>
                </Link>

                {/* Navigation */}
                <ul className="hidden items-center gap-2 md:flex">
                    <li>
                        <Link
                            href="/"
                            className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${pathname === "/"
                                    ? "bg-green-50 text-[#23BE0A]"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/listedBook"
                            className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${pathname === "/listedBook"
                                    ? "bg-green-50 text-[#23BE0A]"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            Listed Books
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/chart"
                            className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${pathname === "/chart"
                                    ? "bg-green-50 text-[#23BE0A]"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            Pages to Read
                        </Link>
                    </li>
                </ul>

                {/* Actions */}
                <div className="hidden items-center gap-2 sm:flex">
                    <button
                        type="button"
                        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="rounded-lg bg-[#23BE0A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#106403] hover:shadow-md active:scale-95"
                    >
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="rounded-lg border border-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-50 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                    </svg>
                </button>

            </div>
        </nav>
    )
}