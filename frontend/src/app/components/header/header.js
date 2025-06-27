"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src="/s2_mortgage.png"
            alt="S2 Mortgage Logo"
            width={250}
            height={250}
            className="logo"
            aria-label="Go to home page"
          />
        </Link>

        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link${pathname === "/" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link${pathname === "/about" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/services"
                className={`nav-link${pathname === "/services" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/blog"
                className={`nav-link${pathname === "/blog" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/loan_process"
                className={`nav-link${pathname === "/loan_process" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Loan Process
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link${pathname === "/contact" ? " nav-link-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item" id="apply-now-button">
              <a
                href="https://plus.preapp1003.com/Nicole-Thompson-Stockmoe"
                className="nav-item-button"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
