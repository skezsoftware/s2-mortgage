import React from "react";
import Image from "next/image";
// import styles from "./services.module.css";
import "./services.css";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroOverlay"></div>
        <Image
          src="/family_beach.png"
          alt="Family at the beach"
          fill
          className="heroImage"
          priority
        />
        <div className="heroContent">
          <h1>What We Offer</h1>
        </div>
      </section>

      {/* Services Blocks */}
      <div className="servicesGrid">
        <div className="serviceCard-2">
          <h3>Prequalification Services</h3>
          <p>
            Understanding your financial readiness before starting your home
            search is crucial. Our prequalification services clearly show your
            buying power and help streamline the home-buying process. By
            assessing your financial situation, we help you determine a
            realistic budget and strengthen your position as a competitive
            buyer.
          </p>
        </div>
        <div className="serviceCard-2">
          <h3>Mortgage Loans</h3>
          <p>
            Navigating the world of mortgage loans can be complex, but with S2
            Mortgage, it's straightforward and stress-free. We offer various
            mortgage options, including fixed-rate, adjustable-rate, and
            specialty loans, tailored to fit your financial situation and
            homeownership goals. Our team works closely with you to identify the
            best loan product and ensure you secure the most favorable terms and
            rates.
          </p>
        </div>
        <div className="serviceCard-2">
          <h3>Contract Loan Processing</h3>
          <p>
            Efficiency and accuracy are critical to successful loan processing.
            Our contract loan processing services ensure that your loan
            application is handled with the utmost care and professionalism.
            From document collection to application submission and follow-ups,
            we manage every detail to expedite the approval process and keep you
            informed.
          </p>
        </div>
        <div className="serviceCard-2">
          <h3>Our Full Range of Mortgage Services</h3>
          <div className="neighborhoodBlock">
            <div className="neighborhoodText">
              <p>
                At S2 Mortgage, we offer specialized mortgage services to meet
                all your home financing needs. Whether you're looking to
                purchase your first home, refinance an existing mortgage, or
                require expert loan processing, our experienced team is here to
                provide personalized solutions and exceptional support
                throughout every process.
              </p>
            </div>
            <div className="neighborhoodImageWrapper">
              <Image
                src="/neighborhood.png"
                alt="Neighborhood"
                width={320}
                height={200}
                className="neighborhoodImage"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Sections with Backgrounds */}
      <section className="sectionAlt">
        <h2>Serving the Needs of All Homebuyers</h2>
        <div className="servicesGrid">
          <div className="serviceCard">
            <h3>First-Time Homebuyers</h3>
            <p>
              Congratulations on taking the first step toward homeownership!
              Owning a home offers many benefits:
            </p>
            <p>
              <strong>Build Equity:</strong> Every mortgage payment helps you
              build equity instead of paying rent with no return.
            </p>
            <p>
              <strong>Stability:</strong> Enjoy stability and security without
              the uncertainty of rental agreements.
            </p>
            <p>
              <strong>Personalization:</strong> Customize your home to fit your
              style and needs.
            </p>
            <p>
              <strong>Tax Benefits:</strong> Potential tax advantages, like
              deductions for mortgage interest and property taxes.
            </p>
            <p>
              <strong>Community:</strong> Buying a home helps you establish
              roots and connect with your community.
            </p>
            <p>
              We're here to guide you through this exciting journey and ensure
              your first home-buying experience is smooth and rewarding!
            </p>
          </div>
          <div className="serviceCard">
            <h3>Selling and Buying</h3>
            <p>
              Selling your home and buying a new one is an exciting opportunity
              for a fresh start. It's a chance to find a home that better suits
              your current needs, capitalize on your home's equity, and secure a
              stronger financial position.
            </p>
            <p>
              Whether you're seeking more space, a new location, or modern
              amenities, we're here to guide you through the entire process to
              find your next dream home.
            </p>
            <p>Let's make your transition smooth and rewarding!</p>
            <Image
              src="/palm_trees_below.png"
              alt="Selling and Buying"
              width={320}
              height={200}
              className="sellingBuyingImage"
            />
          </div>
          <div className="serviceCard">
            <h3>Veterans & Surviving Spouses</h3>
            <p>
              VA home loans offer great benefits for veterans, including no down
              payment, competitive interest rates, and no private mortgage
              insurance. With flexible credit and qualification standards,
              homeownership is more accessible and affordable.
            </p>
            <p>You've served our country—now let us serve you.</p>
          </div>
          <div className="serviceCard">
            <h3>Second/Vacation Homes</h3>
            <p>
              Purchasing a second home or vacation retreat is an exciting
              opportunity for relaxation and potential investment. Whether
              you're dreaming of a beachfront escape, a mountain cabin, or a
              city getaway, owning a second home gives you the flexibility to
              enjoy your favorite destination anytime.
            </p>
            <p>
              We're here to guide you through financing and rental potential to
              make your second home a rewarding investment. Let's make your
              vision a reality!
            </p>
          </div>
          <div className="serviceCard">
            <h3>Investors</h3>
            <p>
              At S2 Mortgage, we offer flexible financing solutions to support
              your investment goals. Whether you're buying your first investment
              property or expanding your portfolio, we provide options like
              traditional mortgages, Non QM loans, alternative options for
              self-employed borrowers, private money lending, and lines of
              credit.
            </p>
            <p>
              Our experts work closely with you to assess your needs and
              recommend the best financing strategies. Let's create a plan to
              maximize your investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Refinancing Section with Alt Background */}
      <section className="sectionSoft">
        <h2>Refinancing Solutions For Your Home</h2>
        <div className="servicesGrid">
          <div className="serviceCard">
            <h3>Our Cashout Options</h3>
            <ul className="serviceCard-list">
              <li>VA</li>
              <li>FHA</li>
              <li>Conventional</li>
              <li>Lines of Credit</li>
            </ul>
            <p>
              Additional Products are available for self-employed borrowers,
              investors, and those borrowers needing alternative lending
              solutions
            </p>
            <p>
              These products offer financial flexibility and can help you
              achieve your goals.
            </p>
            <p>
              Contact us today to review the several product options available
              that offer financial flexibility and can help you achieve your
              goals.
            </p>
          </div>
          <div className="serviceCard">
            <h3>Reduce Your Rate and Save Money</h3>
            <ul className="serviceCard-list">
              <li>FHA Streamline</li>
              <li>Conventional</li>
            </ul>
            <p>
              A rate/term refinance involves replacing your current mortgage
              with a new one, typically to secure better terms. Here's why you
              might consider it:
            </p>
            <ul className="serviceCard-list">
              <li>Lines of Credit</li>
              <li>Lower Interest Rate</li>
              <li>Improve Loan Feature</li>
              <li>Adjust Your Loan Term</li>
            </ul>
            <p>
              A rate/term refinance can help you save money and better match
              your mortgage to your financial situation. Take special note if
              you have a VA or FHA loan, we can complete your refinance without
              requiring an appraisal or income documentation, saving you
              additional time and money.
            </p>
          </div>
          <div className="serviceCard">
            <h3>Unlock Your Home's Equity with a Cash-Out Refinance</h3>
            <p>
              A cash-out refinance allows you to access your home's equity by
              replacing your current mortgage with a new one for a higher
              amount. Here are some reasons why it might be a good option:
            </p>
          </div>
          <div className="serviceCard">
            <h3>Why Consider a Cash-Out Refinance: Debt Consolidation</h3>
            <ul className="serviceCard-list">
              <li>Debt consolidation</li>
              <li>Home improvements</li>
              <li>Investment opportunities</li>
              <li>Build an ADU/Granny Flat</li>
              <li>Cover major medical expenses</li>
              <li>Pay tuition</li>
              <li>Take a vacation</li>
              <li>Cash reserves/emergency funds</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
