import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

// src/app/page.js
export default function Home() {
  return (
    <>
      <div className="homepage">
        <button>
          <a href="https://plus.preapp1003.com/Nicole-Thompson-Stockmoe">
            Get Started Now
          </a>
        </button>
      </div>

      <div>
        <h2>
          At S2 Mortgage, we take pride in delivering exceptional service and
          are confident that we have the perfect solution to you unique home
          loan needs.
        </h2>
      </div>

      <div>
        <h2>Comprehensive Mortgage Consultation Services</h2>
        <p>
          At S2 Mortgage, we take pride in the service we provide and are
          confident that we have the solution for your individual home loan
          needs.
        </p>
      </div>

      <div>
        <h2>What We Offer</h2>
        <ul>
          <li>Home Mortgage Loans</li>
          {/* We offer various options tailored to your unique needs. Our goal is to find the best mortgage solution for your financial situation. */}
          <li>Prequalification Services</li>
          {/* Our detailed prequalification services will give you insight into your home buying power. Understanding your options helps streamline the home buying process and gives you a competitice edge. */}
          <li>Contract Loan Processing</li>
          {/* Our experienced team provides efficient and reliable contract loan processing services, ensuring loan originators can focus on originating without the expense of having a processor on payroll. */}
          <li>Servicing Those Who Serve</li>
          {/* Supporting those who have served our country. Through providing VA loans to our U.S. Veterans and Surviving Spouses, we are proud to deliver the exceptional service you deserve. */}
        </ul>
      </div>

      <div>
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
            interests first. We’re here to guide you through every step and
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
      </div>

      <div>
        <h3>Explore Our Services</h3>
        <p>
          Start your journey with S2 Mortgage, and let us help you achieve your
          home financing goals. Discover our full range of services and find the
          one that aligns with your needs.
        </p>
        <button>Explore Our Services</button>
      </div>
    </>
  );
}
