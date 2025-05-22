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
          src="/single_home.png"
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
      <div className="stagesCard">
          <h1>The Stages of a Home Loan</h1>
          <h2>For Home Buyers</h2>
          <p>
            Navigating the home loan process can seem daunting, but understanding
            each stage can make it much smoother. At S2 Mortgage, we're here to
            guide you through every step, ensuring you have the support you need
            to secure your dream home. Here's a breakdown of the key stages in the
            home loan process:
          </p>
        </div>

      <div className="servicesGrid">
        <div className="serviceCard">
          <h2>Pre-Approval</h2>
          <h3>WHAT IT IS:</h3>
          <p>
          Before you start house hunting, you'll provide information about your income, assets, and credit so we can help determine a realistic price range for your future home.
          </p>
          <h3>WHY IT MATTERS:</h3>
          <p>
          Getting pre-approved shows sellers you're a serious buyer, strengthens your offer, and gives you the confidence to search with clarity.
          </p>
        </div>
        <div className="serviceCard">
          <h2>Find a Home</h2>
          <h3>WHAT IT IS:</h3>
          <p>
          This is the exciting part! You’ll begin exploring homes that align with your lifestyle, preferences, and long-term plans, often with guidance from a real estate agent.
          </p>
          <h3>WHY IT MATTERS:</h3>
          <p>
          Choosing the right home sets the stage for your mortgage process and helps us tailor your loan options to match your goals.
          </p>
        </div>
        <div className="serviceCard">
          <h2>Underwriting</h2>
          <h3>WHAT IT IS:</h3>
          <p>
            During underwriting, the lender will review your application,
            financial documents, and property details to confirm your loan
            eligibility.
          </p>
          <h3>WHY IT MATTERS:</h3>
          <p>
            This stage ensures the information provided is accurate & meets the
            lending criteria, helping to prevent any surprises later on.
          </p>
        </div>
        <div className="serviceCard">
          <h2>Loan Approval</h2>
          <h3>WHAT IT IS:</h3>
          <p>
            After underwriting, you'll get formal loan approval with the terms and
            conditions. We'll then finalize the details and prepare for closing.
          </p>
          <h3>WHY IT MATTERS:</h3>
          <p>
            Loan approval confirms that you are set to proceed with the purchase
            of your home, pending any final conditions.
          </p>
        </div>
        <div className="serviceCard">
          <h2>Closing</h2>
          <h3>WHAT IT IS:</h3>
          <p>
            Closing is the final step where you sign the documents, pay any
            remaining fees, and officially buy the home.
          </p>
          <h3>WHY IT MATTERS:</h3>
          <p>
            Successful closing means you're officially a homeowner! It's the
            culmination of all the hard work and preparation you've put in.
          </p>
        </div>
        <div className="serviceCard">
          <p>
            If you have any questions about these stages or need assistance with
            your home loan, our team at S2 Mortgage is here to help.
          </p>
          <p>Contact us today to get started on your journey to homeownership!</p>
          <button className="button">Get Started</button>
        </div>
      </div>
    </>
  );
}
