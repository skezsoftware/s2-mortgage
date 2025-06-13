import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import {
  FaHouse,
  FaClipboardCheck,
  FaFileSignature,
  FaPeopleGroup,
  FaAward,
  FaLocationDot,
  FaUserCheck,
  FaHeadset,
} from "react-icons/fa6";

const cardData = [
  {
    title: "Home Mortgage Loans",
    description:
      "We offer various options tailored to your unique needs. Our goal is to find the best mortgage solution for your financial situation.",
    backgroundImage: "/home_mortgage_loans.jpg",
  },
  {
    title: "Prequalification Services",
    description:
      "Our detailed prequalification services will give you insight into your home buying power. Understanding your options helps streamline the home buying process and gives you a competitive edge.",
    backgroundImage: "/office_marble.jpg",
  },
  {
    title: "Contract Loan Processing",
    description:
      "Our experienced team provides efficient and reliable contract loan processing services, ensuring loan originators are able to maximize productivity without incurring processing payroll expenses.",
    backgroundImage: "/office_marble.jpg",
  },
  {
    title: "Serving Those Who Serve",
    description:
      "We take great pride in serving those who've served our nation—offering VA loans to U.S. Veterans and Surviving Spouses, with the exceptional care and commitment you deserve.",
    backgroundImage: "/flags.jpg",
  },
];

const whyData = [
  {
    icon: (
      <FaAward
        size={36}
        color="var(--primary)"
        style={{ marginBottom: "1rem" }}
      />
    ),
    title: "Commitment to Excellence",
    description:
      "We prioritize your needs and focus on providing a seamless and stress-free mortgage experience with honest advice and transparent service.",
  },
  {
    icon: (
      <FaLocationDot
        size={36}
        color="var(--primary)"
        style={{ marginBottom: "1rem" }}
      />
    ),
    title: "Local Expertise",
    description:
      "Rooted in the communities of San Diego, Los Angeles, and beyond, we know the California market and are here to help you find the right mortgage with confidence.",
  },
  {
    icon: (
      <FaUserCheck
        size={36}
        color="var(--primary)"
        style={{ marginBottom: "1rem" }}
      />
    ),
    title: "Client-First Approach",
    description:
      "Our commitment to exceptional service means we put your best interests first and guide you through every step.",
  },
  {
    icon: (
      <FaHeadset
        size={36}
        color="var(--primary)"
        style={{ marginBottom: "1rem" }}
      />
    ),
    title: "Reliable Support",
    description:
      "Whether you are a first-time homebuyer or a seasoned investor, our dedicated team is ready to provide reliable support and answers.",
  },
];

// src/app/page.js
export default function Home() {
  return (
    <>
      {/* Hero Section with Sunset Background */}
      <div className={styles.homepage}>
        <div className={styles.heroOverlay}></div>
      </div>

      <div className={styles.homeHeroContent}>
        <h1>Welcome to S2 Mortgage</h1>
        <p>
          At S2 Mortgage, we take pride in delivering exceptional service and
          are confident that we have the perfect solution to your unique home
          loan needs.
        </p>
        <button className={styles.heroButton}>
          <a
            href="https://plus.preapp1003.com/Nicole-Thompson-Stockmoe"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Get Started Now
          </a>
        </button>
      </div>

      {/* What We Offer Section */}
      <h2 className="whatWeOfferH2">What We Offer</h2>
      <section className="section">
        <div className={styles.cards + " " + styles.whatWeOfferCards}>
          {cardData.map((card, idx) => (
            <div
              className={styles.card + " " + styles.cardHoverOverlay}
              key={card.title}
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className={styles.cardText}>
                <h3>{card.title}</h3>
              </div>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.section + " " + styles.whyChooseUsSection}>
        <h2>Why Choose Us</h2>
        <div className={styles.cards + " " + styles.whyChooseUsCards}>
          {whyData.map((card, idx) => (
            <div key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <p className={styles.whyDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Services Button Section */}
      <div className={styles.exploreServicesSection}>
        <div className={styles.exploreServicesCard}>
          <h2 className={styles.exploreServicesTitle}>Explore Our Services</h2>
          <p className={styles.exploreServicesSubtitle}>
            Start your journey with S2 Mortgage, and let us help you achieve your home financing goals. Discover our full range of services and find the one that aligns with your needs.
          </p>
          <a href="/services" className={styles.exploreServicesButton}>
            Explore Our Services
          </a>
        </div>
      </div>
    </>
  );
}
