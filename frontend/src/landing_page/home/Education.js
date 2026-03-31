// import React from "react";

// function Education() {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6">
//           <img src="media/images/education.svg" style={{ width: "70%" }} />
//         </div>
//         <div className="col-6">
//           <h1 className="mb-3 fs-2">Free and open market education</h1>
//           <p>
//             Varsity, the largest online stock market education book in the world
//             covering everything from the basics to advanced trading.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//           <p className="mt-5">
//             TradingQ&A, the most active trading and investment community in
//             India for all your market related queries.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;

import React from "react";

function Education() {
  // Mock data for new startup features
  const featuredStats = [
    { label: "Future Traders", value: "100k+" },
    { label: "Industry Pros", value: "50+" },
    { label: "Market Breakthroughs", value: "5000+" },
  ];

  return (
    <div className="container mt-5 py-5">
      <div className="row align-items-center">
        {/* Visual Content Column */}
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
          <div className="position-relative">
            <img
              src="media/images/education.png"
              alt="Trading Education"
              className="img-fluid"
              style={{ width: "85%", transition: "transform 0.3s ease" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            {/* Added an interactive 'Success Badge' for Startup feel */}
            <div className="position-absolute bottom-0 start-0 bg-white shadow-lg p-3 rounded-4 border-start border-primary border-4 d-none d-md-block">
              <p className="small mb-0 text-muted">Learning Goal</p>
              <h5 className="mb-0 fw-bold">85% Expert Level</h5>
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="col-lg-6 ps-lg-5">
          <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill">
            Learning Ecosystem
          </span>
          <h1 className="display-5 fw-bold mb-4">
            Empower Your Financial Journey
          </h1>

          <div className="education-section mb-5">
            <h5 className="fw-bold text-dark d-flex align-items-center">
              <i className="fa fa-university me-2 text-primary"></i> Varsity
              Academy
            </h5>
            <p className="text-secondary">
              Go from a beginner to a pro with the world's most comprehensive
              stock market encyclopedia. Structured modules designed for modern
              Indian investors.
            </p>
            <a
              href="/varsity"
              className="btn btn-link text-decoration-none p-0 fw-semibold"
            >
              Explore Modules{" "}
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>

          <div className="education-section mb-5">
            <h5 className="fw-bold text-dark d-flex align-items-center">
              <i className="fa fa-comments me-2 text-success"></i> TradingQ&A
              Community
            </h5>
            <p className="text-secondary">
              Don't trade alone. Join India's most active investment forum to
              resolve queries, share strategies, and learn from veteran market
              participants.
            </p>
            <a
              href="/community"
              className="btn btn-link text-decoration-none p-0 fw-semibold"
            >
              Join the Discussion{" "}
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </a>
          </div>

          {/* New Startup Feature: Trust Indicators */}
          <div className="row g-3 mt-4 border-top pt-4">
            {featuredStats.map((stat, idx) => (
              <div key={idx} className="col-4">
                <h4 className="fw-bold mb-0">{stat.value}</h4>
                <p className="small text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
