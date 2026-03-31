// import React from "react";

// function OpenAccount() {
//   return (
//     <div className="container p-5 mb-5">
//       <div className="row text-center">
//         <h1 className="mt-5">Open a Zerodha account</h1>
//         <p>
//           Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
//           F&O trades.
//         </p>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Sign up Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OpenAccount;

import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  const features = [
    { icon: "fa-bolt", text: "Instant Paperless Onboarding" },
    { icon: "fa-shield", text: "Bank-Grade Data Security" },
    { icon: "fa-tag", text: "Zero Hidden Charges" },
  ];

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5 mb-5 shadow-sm bg-white rounded-5">
        <div className="row text-center justify-content-center">
          <div className="col-lg-8">
            {/* Startup Brand Messaging */}
            <span className="badge bg-success-subtle text-success mb-3 px-3 py-2 rounded-pill">
              Start for Free
            </span>
            <h1 className="display-5 fw-bold mb-3">
              Join the Future of Investing
            </h1>
            <p className="lead text-muted mb-5">
              Invest for free. Trade for less. Save more on every deal with
              <strong> ₹0 brokerage on stocks </strong>
              <strong>₹20 on trades. </strong>
              Join thousands of smart investors today.
            </p>

            {/* Scannable Feature List */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center text-secondary small fw-medium"
                >
                  <i className={`fa ${f.icon} me-2 text-primary`}></i>
                  {f.text}
                </div>
              ))}
            </div>

            {/* Primary & Secondary Actions */}

            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center align-items-center">
              <Link to="/signup">
                <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow">
                  Open Free Account
                </button>
              </Link>
            </div>

            {/* Trust Footer */}
            <div className="mt-5 pt-4 border-top">
              <p
                className="text-uppercase small text-muted fw-bold mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Regulated & Secured By
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4 opacity-50 grayscale">
                <i className="fa fa-university fa-2x"></i>
                <i className="fa fa-lock fa-2x"></i>
                <i className="fa fa-check-circle fa-2x"></i>
                <span className="fw-bold fs-5">India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;