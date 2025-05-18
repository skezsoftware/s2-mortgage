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
    icon: <FaHouse size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Home Mortgage Loans",
    description:
      "We offer various options tailored to your unique needs. Our goal is to find the best mortgage solution for your financial situation.",
  },
  {
    icon: <FaClipboardCheck size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Prequalification Services",
    description:
      "Our detailed prequalification services will give you insight into your home buying power and help streamline the process.",
  },
  {
    icon: <FaFileSignature size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Contract Loan Processing",
    description:
      "Our experienced team provides efficient and reliable contract loan processing services for loan originators and clients.",
  },
  {
    icon: <FaPeopleGroup size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Servicing Those Who Serve",
    description:
      "We proudly provide VA loans to U.S. Veterans and Surviving Spouses, delivering the exceptional service you deserve.",
  },
];

const whyData = [
  {
    icon: <FaAward size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Commitment to Excellence",
    description:
      "We prioritize your needs and focus on providing a seamless and stress-free mortgage experience with honest advice and transparent service.",
  },
  {
    icon: <FaLocationDot size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Local Expertise",
    description:
      "Serving San Diego, Los Angeles, and surrounding areas, we understand the local market and are well-equipped to assist you.",
  },
  {
    icon: <FaUserCheck size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
    title: "Client-First Approach",
    description:
      "Our commitment to exceptional service means we put your best interests first and guide you through every step.",
  },
  {
    icon: <FaHeadset size={36} color="#4b8cff" style={{ marginBottom: "1rem" }} />,
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
      <section className={styles.section}>
        <h2>What We Offer</h2>
        <div className={styles.cards}>
          {cardData.map((card, idx) => (
            <div className={styles.card + ' ' + styles.cardHoverOverlay} key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <div className={styles.cardDescription}>{card.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.section}>
        <h2>Why Choose Us</h2>
        <div className={styles.cards}>
          {whyData.map((card, idx) => (
            <div className={styles.card} key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <p className={styles.whyDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
