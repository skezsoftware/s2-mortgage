import React from "react";
import Image from "next/image";
import "./about.css";

export default function About() {
  return (
    <>
      <h1>Meet Our Team</h1>
      <div>
        <Image
          src="/nicole.png"
          width={300}
          height={300}
          alt="Picture of Nicole Thompson-Stockmoe"
        />
        <h3>Nicole Thompson-Stockmoe</h3>
        <h4>Mortgage Broker - Loan Officer - Contract Processor</h4>
        <p>
          With over two decades in the mortgage industry, I bring extensive
          knowledge and a proven track record to every transaction. My
          experience spans from processing and loan origination to being the
          Broker/Owner of S2 Mortgage, providing me with a comprehensive
          understanding of the industry. My commitment to excellence ensures
          that clients receive top-tier service and support throughout their
          mortgage journey. Dedicated to client satisfaction, I offer trusted
          guidance and personalized solutions for all your mortgage needs,
          whether you're purchasing your first home, refinancing, or exploring
          investment opportunities.
        </p>
        <h5>DRE License#: 01872714</h5>
        <h5>NMLS#: 322857</h5>
      </div>

      <div>
        <Image
          src="window.svg"
          width={300}
          height={300}
          alt="Picture of Glenn Siaumau"
        />
        <h3>Glenn Siaumau</h3>
        <h4>Loan Officer</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
        <h5>DRE License#: 01415271</h5>
        <h5>NMLS#: 2278633</h5>
      </div>

      <div>
        <h3>Commitment to Excellence</h3>
        <p>
          We believe in more than just facilitating a transaction; we’re
          committed to being your lifelong partner in home financing. By
          providing excellent service and solutions, we strive to become the
          go-to lender for you, your family and friends. We offer comprehensive
          support through every stage of your home journey. Whether buying your
          first home, refinancing your current mortgage, selling and purchasing
          a new property, or investing in real estate, we’re here to guide and
          support you through every step.
        </p>
      </div>
    </>
  );
}
