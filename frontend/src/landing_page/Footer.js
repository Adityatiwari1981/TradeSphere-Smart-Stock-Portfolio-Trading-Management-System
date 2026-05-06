import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
      }}
    >
      <div className="conatiner border-top mt-5">
        {/* TOP SECTION */}
        <div className="row mt-5 gy-4">
          {/* LOGO + ABOUT */}
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src="media/images/logo.jpeg"
              alt="TradeSphere Logo"
              className="img-fluid mb-3"
              style={{
                maxWidth: "180px",
                width: "100%",
              }}
            />

            <p className="text-muted small mb-3">
              &copy; 2026 TradeSphere Technologies Pvt. Ltd.
              <br />
              All rights reserved.
            </p>

            {/* SOCIAL ICONS */}
            <div className="fs-4 d-flex flex-wrap gap-3">
              <a href="#" className="text-secondary">
                <FaTwitter />
              </a>

              <a href="#" className="text-secondary">
                <FaFacebook />
              </a>

              <a href="#" className="text-secondary">
                <FaInstagram />
              </a>

              <a href="#" className="text-secondary">
                <FaLinkedin />
              </a>

              <a href="#" className="text-secondary">
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-6 col-md-6 col-lg-3">
            <p className="fw-bold mb-3">Company</p>

            <a
              href="/about"
              className="text-decoration-none text-muted d-block mb-2"
            >
              About Us
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Our Products
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Pricing
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Careers
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              TradeSphere Tech
            </a>

            <a href="" className="text-decoration-none text-muted d-block">
              Press & Media
            </a>
          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-6 col-lg-3">
            <p className="fw-bold mb-3">Support</p>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Contact Us
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Support Portal
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Market Blog
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              List of Charges
            </a>

            <a href="" className="text-decoration-none text-muted d-block">
              Downloads & Resources
            </a>
          </div>

          {/* ACCOUNT */}
          <div className="col-12 col-md-6 col-lg-3">
            <p className="fw-bold mb-3">Account</p>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Open an Account
            </a>

            <a href="" className="text-decoration-none text-muted d-block mb-2">
              Fund Transfer
            </a>

            <a href="" className="text-decoration-none text-muted d-block">
              30 Day Challenge
            </a>
          </div>
        </div>

        {/* LEGAL / COMPLIANCE */}
        <div
          className="mt-5 text-muted pb-4 pt-4 border-top"
          style={{
            fontSize: "13px",
            textAlign: "justify",
            lineHeight: "1.7",
          }}
        >
          <p>
            <strong>TradeSphere Technologies:</strong> A modern financial
            ecosystem designed for the next generation of investors. All
            financial operations and services are maintained under the
            TradeSphere Security Standards (TS-SAFE). Registered Address:
            TradeSphere HQ, Invertis University, Bareilly - 243123, UP, India.
          </p>

          <p>
            Investments in the securities market are subject to market risks;
            read all related documents carefully before investing. Digital
            assets and stock trading involve significant risk of loss and may
            not be suitable for all investors.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with TradeSphere. Receive real-time
            information of your transactions directly from the platform on your
            mobile/email at the end of the day. KYC is a one-time exercise while
            dealing in securities markets.
          </p>

          <p>
            TradeSphere does not provide stock tips or guaranteed returns. We
            are an execution platform built to empower your independent
            decision-making. If you find anyone claiming to be a TradeSphere
            partner offering guaranteed profits, please report it immediately to
            our security cell.
          </p>

          <p className="text-center pt-3 border-top fw-semibold mb-0">
            TradeSphere: Built for the Future of Indian Markets.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
