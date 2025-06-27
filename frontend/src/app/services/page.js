import React from "react";
import Image from "next/image";
// import styles from "./services.module.css";
import "./services.css";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="heroSection" 
        role="banner" 
        aria-label="Services hero banner"
      >
        <div className="heroOverlay" aria-hidden="true"></div>
        <Image
          src="/family_beach.png"
          alt="Family enjoying time at the beach"
          fill
          className="heroImage"
          priority
        />
        <div className="heroContent">
          <h1>What We Offer</h1>
        </div>
      </section>

      {/* Section 1: Header */}
      <header 
        className="servicesHeaderSection"  
        aria-labelledby="services-header-title"
      >
        <h1 id="services-header-title" className="servicesHeaderTitle">
          Our Full Range of Mortgage Services
        </h1>
        <p className="servicesHeaderSubtitle">
          At S2 Mortgage, we offer specialized mortgage services to meet all
          your home financing needs. Whether you&apos;re looking to purchase
          your first home, refinance an existing mortgage, or require expert
          loan processing, our experienced team is here to provide personalized
          solutions and exceptional support throughout every process.
        </p>
      </header>

      {/* Section 2: What We Offer */}
      <section 
        className="servicesDarkSection" 
        aria-labelledby="what-we-offer-title"
      >
        <h2 id="what-we-offer-title" className="servicesDarkTitle">What We Offer</h2>
        <div className="servicesVerticalCards">
          <article className="serviceCard-2">
            <h3>Pre-Approval Services</h3>
            <p>
              Understanding your financial readiness before starting your home
              search is crucial. Our pre-approval services clearly show your
              buying power and help streamline the home-buying process. By
              assessing your financial situation, we help you determine a
              realistic budget and strengthen your position as a competitive
              buyer.
            </p>
          </article>
          <article className="serviceCard-2">
            <h3>Mortgage Loans</h3>
            <p>
              Navigating the world of mortgage loans can be complex, but with S2
              Mortgage, it&apos;s straightforward and stress-free. We offer
              various mortgage options, including fixed-rate, adjustable-rate,
              and specialty loans, tailored to fit your financial situation and
              homeownership goals. Our team works closely with you to identify
              the best loan product and ensure you secure the most favorable
              terms and rates.
            </p>
          </article>
          <article className="serviceCard-2">
            <h3>Contract Loan Processing</h3>
            <p>
              Efficiency and accuracy are critical to successful loan
              processing. Our contract loan processing services ensure that your
              loan application is handled with the utmost care and
              professionalism. From document collection to application
              submission and follow-ups, we manage every detail to expedite the
              approval process and keep you informed.
            </p>
          </article>
        </div>
      </section>

      {/* Section 3: Serving the Needs of All Homebuyers */}
      <section 
        className="servicesHomebuyersSection" 
        aria-labelledby="homebuyers-title"
      >
        <h2 id="homebuyers-title" className="servicesHomebuyersTitle">
          Serving the Needs of All Homebuyers
        </h2>
        <div className="servicesHomebuyersGrid">
          <article className="serviceCard-3">
            <Image
              src="/first_time.png"
              alt="First-time homebuyers exploring their options"
              width={320}
              height={180}
              className="servicesCardImage"
            />
            <h3>First-Time Homebuyers</h3>
            <p>
              Congratulations on taking the first step toward homeownership!
              Owning a home offers many benefits:
            </p>
            <ul>
              <li>
                <strong>Build Equity:</strong> Every mortgage payment helps you
                build equity instead of paying rent with no return.
              </li>
              <li>
                <strong>Stability:</strong> Enjoy stability and security without
                the uncertainty of rental agreements.
              </li>
              <li>
                <strong>Personalization:</strong> Customize your home to fit your
                style and needs.
              </li>
              <li>
                <strong>Tax Benefits:</strong> Potential tax advantages, like
                deductions for mortgage interest and property taxes.
              </li>
              <li>
                <strong>Community:</strong> Buying a home helps you establish
                roots and connect with your community.
              </li>
            </ul>
            <p>
              We&apos;re here to guide you through this exciting journey and
              ensure your first home-buying experience is smooth and rewarding!
            </p>
          </article>
          <article className="serviceCard-3">
            <Image
              src="/sale.png"
              alt="Selling and buying homes transition"
              width={320}
              height={180}
              className="servicesCardImage"
            />
            <h3>Selling and Buying</h3>
            <p>
              Selling your home and buying a new one is an exciting opportunity
              for a fresh start. It&apos;s a chance to find a home that better
              suits your current needs, capitalize on your home&apos;s equity,
              and secure a stronger financial position.
            </p>
            <p>
              Whether you&apos;re seeking more space, a new location, or modern
              amenities, we&apos;re here to guide you through the entire process
              to find your next dream home.
            </p>
            <p>Let&apos;s make your transition smooth and rewarding!</p>
          </article>
          <article className="serviceCard-3">
            <Image
              src="/veterans.png"
              alt="Veterans and surviving spouses mortgage services"
              width={320}
              height={180}
              className="servicesCardImage"
            />
            <h3>Veterans & Surviving Spouses</h3>
            <p>
              VA home loans offer great benefits for veterans, including no down
              payment, competitive interest rates, and no private mortgage
              insurance. With flexible credit and qualification standards,
              homeownership is more accessible and affordable.
            </p>
            <p>You&apos;ve served our country—now let us serve you.</p>
          </article>
          <article className="serviceCard-3">
            <Image
              src="/vacation.png"
              alt="Second home and vacation property financing"
              width={320}
              height={180}
              className="servicesCardImage"
            />
            <h3>Second/Vacation Homes</h3>
            <p>
              Purchasing a second home or vacation retreat is an exciting
              opportunity for relaxation and potential investment. Whether
              you&apos;re dreaming of a beachfront escape, a mountain cabin, or
              a city getaway, owning a second home gives you the flexibility to
              enjoy your favorite destination anytime.
            </p>
            <p>
              We&apos;re here to guide you through financing and rental
              potential to make your second home a rewarding investment.
              Let&apos;s make your vision a reality!
            </p>
          </article>
          <article className="serviceCard-3">
            <Image
              src="/investors.png"
              alt="Real estate investment financing options"
              width={320}
              height={180}
              className="servicesCardImage"
            />
            <h3>Investors</h3>
            <p>
              At S2 Mortgage, we offer flexible financing solutions to support
              your investment goals. Whether you&apos;re buying your first
              investment property or expanding your portfolio, we provide
              options like traditional mortgages, Non QM loans, alternative
              options for self-employed borrowers, private money lending, and
              lines of credit.
            </p>
            <p>
              Our experts work closely with you to assess your needs and
              recommend the best financing strategies. Let&apos;s create a plan
              to maximize your investment opportunities.
            </p>
          </article>
        </div>
      </section>

      {/* Section 4: Refinancing Solutions for Your Home */}
      <section 
        className="servicesRefinanceSection" 
        aria-labelledby="refinance-title"
      >
        <h2 id="refinance-title" className="servicesRefinanceTitle">
          Refinancing Solutions for Your Home
        </h2>
        <div className="servicesRefinanceGrid">
          <article className="serviceCard-3">
            <h3>Reduce Your Rate and Save Money</h3>
            <p>
              A rate/term refinance involves replacing your current mortgage
              with a new one, typically to secure better terms. Here&apos;s why
              you might consider it:
            </p>
            <ul className="serviceCard-list">
              <li>Lower Interest Rate</li>
              <li>Lower Your Payment</li>
              <li>Improve Loan Features</li>
              <li>Adjust Your Loan Term</li>
            </ul>
            <p>
              A rate/term refinance can help you save money and better match
              your mortgage to your financial situation. Take special note if
              you have a VA or FHA loan, we can complete your refinance without
              requiring an appraisal or income documentation, saving you
              additional time and money.
            </p>
          </article>

          <article className="serviceCard-3">
            <h3>Why Consider a Cash-Out Refinance or Home Equity Loan</h3>
            <p>
              A cash-out refinance allows you to access your home&apos;s equity
              by replacing your current mortgage with a new one for a higher
              amount. Here are some reasons why it might be a good option:
            </p>
            <ul className="serviceCard-list">
              <li>Debt Consolidation</li>
              <li>Home Improvements</li>
              <li>Investment Opportunities</li>
              <li>Build an ADU/ Granny Flat</li>
              <li>Cover major medical expenses</li>
              <li>Pay tuition</li>
              <li>Take a vacation</li>
              <li>Cash Reserves/ Emergency Funds</li>
            </ul>
            <p>
              Contact us today to review the several product options available
              that offer financial flexibility and can help you achieve your
              goals.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
