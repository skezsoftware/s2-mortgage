import React from "react";
import Image from "next/image";
import "./loanProcess.css";

export default function LoanProcess() {
  return (
    <>
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroOverlay"></div>
        <Image
          src="/1.png"
          alt="Single home"
          fill
          className="heroImage"
          priority
        />
        <div className="heroContent">
          <h1>Loan Process</h1>
        </div>
      </section>

      {/* Loan Process Steps */}
      <div
        className="stagesCard"
        style={{
          textAlign: "left",
          margin: "0 auto",
          maxWidth: "1100px",
          marginBottom: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        <h1>The Stages of a Home Loan</h1>
        <h2>For Home Buyers</h2>
        <p>
          Navigating the home loan process can seem daunting, but understanding
          each stage can make it much smoother. At S2 Mortgage, we&apos;re here
          to guide you through every step, ensuring you have the support you
          need to secure your dream home. Here&apos;s a breakdown of the key
          stages in the home loan process:
        </p>
      </div>

      <div className="stagesGrid">
        <div className="stagesCard">
          <div className="stageNumber">1</div>
          <div className="stageContent">
            <h2>Pre-Approval</h2>
            <h3>WHAT IT IS:</h3>
            <p>
              Once you decide to buy a new home, before you start looking at
              properties, you&apos;ll need to fill out a loan application with
              details about your income, assets, and debts.
            </p>
            <h3>WHY IT MATTERS:</h3>
            <p>
              Getting pre-approved shows you your budget and strengthens your
              offer on a home, helping to prevent any surprises later on.
            </p>
          </div>
        </div>
        <div className="stagesCard">
          <div className="stageNumber">2</div>
          <div className="stageContent">
            <h2>Find a Home</h2>
            <h3>WHAT IT IS:</h3>
            <p>
              Provide your agent with your Pre-Approval letter from S2 Mortgage
              to elevate your offer.
            </p>
            <h3>WHY IT MATTERS:</h3>
            <p>
              Choosing the right home sets the stage for your mortgage process
              and helps us tailor your loan options to match your goals.
            </p>
          </div>
        </div>
        <div className="stagesCard">
          <div className="stageNumber">3</div>
          <div className="stageContent">
            <h2>Underwriting</h2>
            <h3>WHAT IT IS:</h3>
            <p>
              During underwriting, the lender will review your application,
              financial documents, and property details to confirm your loan
              eligibility.
            </p>
            <h3>WHY IT MATTERS:</h3>
            <p>
              This stage ensures the information provided is accurate & meets
              the lending criteria.
            </p>
          </div>
        </div>
        <div className="stagesCard">
          <div className="stageNumber">4</div>
          <div className="stageContent">
            <h2>Loan Approval</h2>
            <h3>WHAT IT IS:</h3>
            <p>
              After underwriting, you&apos;ll get formal loan approval with the
              terms and conditions. We&apos;ll then finalize the details and
              prepare for closing.
            </p>
            <h3>WHY IT MATTERS:</h3>
            <p>
              Loan approval confirms that you are set to proceed with the
              purchase of your home, pending any final conditions.
            </p>
          </div>
        </div>
        <div className="stagesCard">
          <div className="stageNumber">5</div>
          <div className="stageContent">
            <h2>Closing</h2>
            <h3>WHAT IT IS:</h3>
            <p>
              Closing is the final stage where you sign your loan documents and
              send any additional down payment and closing funds to escrow.
            </p>
            <h3>WHY IT MATTERS:</h3>
            <p>
              Successful closing means you&apos;re officially a homeowner!
              It&apos;s the culmination of all the hard work and preparation
              you&apos;ve put in.
            </p>
          </div>
        </div>
        <div className="stagesCard emptyCard"></div>
      </div>

      <div className="servicesGrid">
        <div className="serviceCard">
          <p>
            If you have any questions about these stages or need assistance with
            your home loan, our team at S2 Mortgage is here to help.
          </p>
          <p>
            Contact us today to get started on your journey to homeownership!
          </p>
          <a
            href="https://plus.preapp1003.com/Nicole-Thompson-Stockmoe"
            className="button"
            role="button"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </>
  );
}
