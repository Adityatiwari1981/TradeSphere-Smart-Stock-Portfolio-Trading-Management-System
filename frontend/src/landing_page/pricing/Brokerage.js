import React from "react";
function Brokerage() {
  return (
    <div className="container border-top pt-5 mt-5">
      <div className="row align-items-center mb-5">
        <div className="container border-top pt-5 mt-5">
          {/* Top Header Section */}
          <div className="row text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <h3 className="fw-bold mb-3">Transparency is our Priority</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              We have no hidden charges. You can view all additional and
              regulatory charges in the list provided below.
            </p>
          </div>

          <div className="row">
            {/* Left Side: Important Charges List */}
            <div className="col-md-7 p-4 border-end">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary-subtle p-2 rounded me-3">
                  <i className="fa fa-calculator text-primary fs-4"></i>
                </div>
                <a href="#" className="text-decoration-none">
                  <h3 className="fs-5 mb-0 fw-bold">
                    Brokerage Calculator & Charges
                  </h3>
                </a>
              </div>

              <ul
                className="list-group list-group-flush text-muted"
                style={{ fontSize: "14px" }}
              >
                <li className="list-group-item border-0 ps-0 py-3 d-flex align-items-start">
                  <i className="fa fa-headset me-3 mt-1 text-primary"></i>
                  <span>
                    <strong>Call & Trade:</strong> Additional ₹50 + GST per
                    order (Dealer Assisted).
                  </span>
                </li>
                <li className="list-group-item border-0 ps-0 py-3 d-flex align-items-start">
                  <i className="fa fa-envelope me-3 mt-1 text-primary"></i>
                  <span>
                    <strong>Digital Contracts:</strong> All contract notes will
                    be sent to your email completely free of charge.
                  </span>
                </li>
                <li className="list-group-item border-0 ps-0 py-3 d-flex align-items-start">
                  <i className="fa fa-file-invoice me-3 mt-1 text-primary"></i>
                  <span>
                    <strong>Physical Copies:</strong> ₹20 per contract note +
                    courier charges (Optional).
                  </span>
                </li>
                <li className="list-group-item border-0 ps-0 py-3 d-flex align-items-start">
                  <i className="fa fa-globe me-3 mt-1 text-primary"></i>
                  <span>
                    <strong>NRI Accounts:</strong> ₹200 (PIS) or ₹50 (Non-PIS)
                    per order or 0.5% (whichever is lower).
                  </span>
                </li>
                <li className="list-group-item border-0 ps-0 py-3 d-flex align-items-start">
                  <i className="fa fa-exclamation-triangle me-3 mt-1 text-danger"></i>
                  <span>
                    <strong>Negative Balance:</strong> If the account is in
                    debit, the order charge will be ₹40.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Side: Quick Links & Support */}
            <div className="col-md-5 p-4 ps-md-5 d-flex flex-column justify-content-center">
              <div className="card border-0 shadow-sm p-4 bg-light">
                <h4 className="fs-5 fw-bold mb-3">Want more details?</h4>
                <p className="small text-muted mb-4">
                  Our 100% transparent pricing model allows you to trade at the
                  lowest costs in the market.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-primary w-100 mb-2 fw-bold"
                >
                  View Full List of Charges
                </a>
                <a
                  href="#"
                  className="btn btn-link text-muted text-decoration-none small"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="row mt-5 pb-5 text-center text-muted small">
            <div className="col">
              *GST and other regulatory taxes will be levied as per government
              norms. Interest at 18% p.a is charged on the outstanding bill
              amount if not paid within due date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;