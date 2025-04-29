import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header style={{ padding: "1rem" }}>
      <ul id="header">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/loan_process">Loan Process</Link>
        </li>
      </ul>
    </header>
  );
}
