import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header style={{ padding: "1rem" }} id="header">
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
      <p>
        <Link href="/services">Services</Link>
      </p>
      <p>
        <Link href="/loan_process">Loan Process</Link>
      </p>
    </header>
  );
}
