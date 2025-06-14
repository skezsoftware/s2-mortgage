import React from "react";
import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <>
      <section className="section about-section">
        <h1>About S2 Mortgage, and our Commitment to Excellence</h1>
        <p className="business-description">
          At S2 Mortgage, we&apos;re more than just a mortgage brokerage—we&apos;re your
          dedicated partner in the home financing journey. Whether you&apos;re buying
          your first home, refinancing, upgrading to your next property, or
          exploring investment opportunities, we&apos;re here to guide you every step
          of the way.
        </p>
        <p className="business-description">
          We specialize in residential mortgages and offer personalized,
          one-on-one support tailored to your unique goals. Our experienced team
          combines deep industry knowledge with a true passion for helping
          clients succeed—so you can feel confident you&apos;re getting the right
          solution for your needs.
        </p>
        <p className="business-description">
          We&apos;re committed to building long-term relationships, not just closing
          loans. With outstanding service and smart solutions, our goal is to
          become your go-to resource—not just for today, but for every stage of
          your life, and for your family, friends, and colleagues too.
        </p>
        <p className="business-description">
          Let us help make your homeownership dreams a reality—with expert
          advice, reliable support, and a mortgage experience that feels simple
          and stress-free.
        </p>
      </section>

      <section className="section team-section">
        <h2>Meet Our Team</h2>
        <div className="cards">
          <div className="bio-card">
            <Image
              src="/nicole.png"
              width={200}
              height={200}
              alt="Picture of Nicole Thompson-Stockmoe"
              className="team-image"
            />
            <h3>Nicole Thompson-Stockmoe</h3>
            <h4>Mortgage Broker - Loan Officer - Contract Loan Processor</h4>
            <p>
              I&apos;ve been in the mortgage industry for almost 30 years, and I
              still love helping people turn their homeownership dreams into
              reality. My experience spans from processing and loan origination
              to being the Broker/ Owner of S2 Mortgage, providing me with a
              comprehensive understanding of the industry. Over the years, I&apos;ve
              worked with all kinds of clients—and I pride myself on making the
              mortgage process simple, clear, and as stress-free as possible.
            </p>
            <p>
              What keeps me motivated is my commitment to excellence and being
              of true service. I believe every client deserves personalized
              attention and honest guidance. I&apos;m here to listen, answer your
              questions, and find the best mortgage options tailored just for
              you.
            </p>
            <p>
              When you work with me, you&apos;re not just getting a mortgage
              broker—you&apos;re getting a trusted partner who&apos;s got your back from
              start to finish.
            </p>
            <p>Contact me today via email: nicole@s2mortgage.com</p>
            <div className="credentials">
              <p>DRE License#: 01872714</p>
              <p>NMLS#: 2583860</p>
            </div>
          </div>

          <div className="bio-card">
            <Image
              src="/glenn.jpeg"
              width={200}
              height={200}
              alt="Picture of Glenn Siaumau"
              className="team-image"
            />
            <h3>Glenn Siaumau</h3>
            <h4>Loan Officer - Agent Ally & Growth Partner</h4>
            <p>
              As a U.S. Navy veteran, I bring the same dedication, discipline,
              and integrity to my work in the mortgage industry that I brought
              to my service. Now, as a Loan Originator and Agent Ally & Growth
              Partner at S2 Mortgage, my mission is to serve others—this time by
              helping individuals and families achieve their homeownership
              goals.
            </p>
            <p>
              With a strong foundation in residential lending, I work closely
              with homebuyers to provide personalized mortgage solutions and a
              smooth, stress-free experience. At the same time, I partner with
              real estate agents to support their growth, strengthen their
              client relationships, and help them deliver exceptional service
              every step of the way.
            </p>
            <p>
              I believe in building lasting partnerships based on trust, clear
              communication, and shared success. Whether you&apos;re a first-time
              buyer, looking to refinance, or a real estate professional seeking
              a reliable lending partner—I&apos;m here to help.
            </p>
            <p>
              I&apos;m proud to serve my community now in a new way, helping others
              make smart, confident decisions about home financing.
            </p>
            <p>Contact me today via email: glenn@s2mortgage.com</p>
            <div className="credentials">
              <p>DRE License#: 01415271</p>
              <p>NMLS#: 2278633</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
