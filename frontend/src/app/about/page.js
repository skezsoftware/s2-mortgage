import React from "react";
import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <>
      <section className="section about-section">
        <h1>About S2 Mortgage</h1>
        <p className="business-description">
          S2 Mortgage is a full-service mortgage brokerage dedicated to providing exceptional home financing solutions. 
          We specialize in residential mortgages, offering personalized service and expert guidance throughout your home buying journey. 
          Our team combines deep industry knowledge with a commitment to client success, ensuring you receive the best possible mortgage options 
          tailored to your unique needs.
        </p>
      </section>

      <section className="section team-section">
        <h2>Meet Our Team</h2>
        <div className="cards">
          <div className="card">
            <Image
              src="/nicole.png"
              width={200}
              height={200}
              alt="Picture of Nicole Thompson-Stockmoe"
              className="team-image"
            />
            <h3>Nicole Thompson-Stockmoe</h3>
            <h4>Mortgage Broker - Loan Officer</h4>
            <p>
              With over two decades in the mortgage industry, I bring extensive
              knowledge and a proven track record to every transaction. My
              experience spans from processing and loan origination to being the
              Broker/Owner of S2 Mortgage.
            </p>
            <div className="credentials">
              <p>DRE License#: 01872714</p>
              <p>NMLS#: 322857</p>
            </div>
          </div>

          <div className="card">
            <Image
              src="/glenn.jpeg"
              width={200}
              height={200}
              alt="Picture of Glenn Siaumau"
              className="team-image"
            />
            <h3>Glenn Siaumau</h3>
            <h4>Loan Officer</h4>
            <p>
              As a dedicated loan officer, Glenn brings expertise and personalized service 
              to every client interaction. His deep understanding of the mortgage process 
              makes him an invaluable member of our team.
            </p>
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
