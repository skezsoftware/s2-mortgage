import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

// src/app/page.js
export default function Home() {
  return (
    <>
      <div className={styles.homepage}>
        <button>
          <a href="https://plus.preapp1003.com/Nicole-Thompson-Stockmoe">
            Get Started Now
          </a>
        </button>
      </div>

      <section className={styles.section}>
        <h2>
          At S2 Mortgage, we take pride in delivering exceptional service and
          are confident that we have the perfect solution to you unique home
          loan needs.
        </h2>
      </section>

      <section className={styles.section}>
        <h2>Comprehensive Mortgage Consultation Services</h2>
        <p>
          At S2 Mortgage, we take pride in the service we provide and are
          confident that we have the solution for your individual home loan
          needs.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Offer</h2>
        <ul className={styles.serviceList}>
          <li
            className={styles.serviceItem}
            data-description="We offer various options tailored to your unique needs. Our goal is to find the best mortgage solution for your financial situation."
          >
            Home Mortgage Loans
          </li>
          <li
            className={styles.serviceItem}
            data-description="Our detailed prequalification services will give you insight into your home buying power. Understanding your options helps streamline the home buying process and gives you a competitive edge."
          >
            Prequalification Services
          </li>
          <li
            className={styles.serviceItem}
            data-description="Our experienced team provides efficient and reliable contract loan processing services, ensuring loan originators can focus on originating without the expense of having a processor on payroll."
          >
            Contract Loan Processing
          </li>
          <li
            className={styles.serviceItem}
            data-description="Supporting those who have served our country. Through providing VA loans to our U.S. Veterans and Surviving Spouses, we are proud to deliver the exceptional service you deserve."
          >
            Servicing Those Who Serve
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Why Choose Us</h2>
        <div>
          <h3>Commitment to Excellence</h3>
          <p>
            We prioritize your needs and focus on providing a seamless and
            stress-free mortgage experience. Our ethical approach ensures you
            receive honest advice and transparent service.
          </p>
        </div>
        <div>
          <h3>Local Expertise</h3>
          <p>
            Serving San Diego, Los Angeles, and surrounding areas, we understand
            the local market and are well-equipped to assist you with your
            mortgage needs in California.
          </p>
        </div>
        <div>
          <h3>Client-Centric Approach</h3>
          <p>
            Our commitment to exceptional service means we put your best
            interests first. We&apos;re here to guide you through every step and
            ensure you feel confident and informed.
          </p>
        </div>
        <div>
          <h3>Reliable Support</h3>
          <p>
            Whether you are a First Time Homebuyer or a seasoned real estate
            investor, our dedicated team is ready to provide reliable support
            and answer your questions.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Explore Our Services</h3>
        <p>
          Start your journey with S2 Mortgage, and let us help you achieve your
          home financing goals. Discover our full range of services and find the
          one that aligns with your needs.
        </p>
        <button>Explore Our Services</button>
      </section>
    </>
  );
}
