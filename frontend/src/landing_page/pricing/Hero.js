import React from "react";
function Hero() {
  const plans = [
    {
      name: "Premium",
      price: "199",
      features: [
        "50+ Real-time Stock Filters",
        "3 Personal Watchlists",
        "Daily Market Summary",
        "Basic Portfolio Tracker",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "599",
      features: [
        "Everything in Basic +",
        "Unlimited Watchlists & Alerts",
        "Advanced Charting Tools",
        "Sector Performance Insights",
        "Priority Email Support",
        "Ad-Free Experience",
      ],
      highlight: true,
    },
    {
      name: "Club",
      price: "1099",
      features: [
        "Everything in Growth +",
        "Expert Market Insights",
        "Beta Access to New Features",
        "Quarterly Portfolio Review",
        "Direct Chat Support",
        "Exclusive Webinars Access",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1 className="display-5 fw-bold">
          Choose The Plan That Is Right For You
        </h1>
        <p className="text-muted fs-5">
          Transparent pricing for all your investment needs.
        </p>
      </div>
      <div className="row mb-5">
        {plans.map((plan, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div
              className={`card h-100 shadow-sm ${plan.highlight ? "border-primary" : ""}`}
              style={
                plan.highlight
                  ? { backgroundColor: "#fffdf5", border: "2px solid #ff9800" }
                  : {}
              }
            >
              {plan.highlight && (
                <div className="text-center bg-warning text-white p-1 fw-bold">
                  Popular
                </div>
              )}

              <div className="card-body p-4">
                <h2 className="fw-bold">{plan.name}</h2>
                <p className="text-muted">
                  For serious investors who want more.
                </p>
                <h3 className="my-4 fw-bold">
                  ₹{plan.price}
                  <span className="fs-6 text-muted">/ year</span>
                </h3>
                <button className="btn btn-primary w-100 mb-4 py-2 fw-bold">
                  Subscribe Now
                </button>

                <ul className="list-unstyled text-start">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="mb-2">
                      <i className="fa fa-check text-success me-2"></i> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-transparent border-0 text-center pb-4 text-muted small">
                For any query Contact: +91 7900404660
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-5">
        <button className="btn btn-primary px-5 py-2">Compare Plans</button>
      </div>
    </div>
  );
}
export default Hero;