// import React from "react";
// function Footer() {
//   return (
//     <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
//       <div className="container border-top mt-5">
//         <div className="row mt-5">
//           <div className="col">
//             <img src="media/images/logo.svg" style={{ width: "50%" }} />
//             <p>
//               &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
//             </p>
//           </div>
//           <div className="col">
//             <p>Company</p>
//             <a href="">About</a>
//             <br />
//             <a href="">Products</a>
//             <br />
//             <a href="">Pricing</a>
//             <br />
//             <a href="">Referral programme</a>
//             <br />
//             <a href="">Careers</a>
//             <br />
//             <a href="">Zerodha.tech</a>
//             <br />
//             <a href="">Press & media</a>
//             <br />
//             <a href="">Zerodha cares (CSR)</a>
//             <br />
//           </div>
//           <div className="col">
//             <p>Support</p>
//             <a href="">Contact</a>
//             <br />
//             <a href="">Support portal</a>
//             <br />
//             <a href="">Z-Connect blog</a>
//             <br />
//             <a href="">List of charges</a>
//             <br />
//             <a href="">Downloads & resources</a>
//             <br />
//           </div>
//           <div className="col">
//             <p>Account</p>
//             <a href="">Open an account</a>
//             <br />
//             <a href="">Fund transfer</a>
//             <br />
//             <a href="">60 day challenge</a>
//             <br />
//           </div>
//         </div>
//         <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
//           <p>
//             Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
//             INZ000031633 CDSL: Depository services through Zerodha Securities
//             Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
//             through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
//             no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
//             #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
//             J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
//             complaints pertaining to securities broking please write to
//             complaints@zerodha.com, for DP related to dp@zerodha.com. Please
//             ensure you carefully read the Risk Disclosure Document as prescribed
//             by SEBI | ICF
//           </p>

//           <p>
//             Procedure to file a complaint on SEBI SCORES: Register on SCORES
//             portal. Mandatory details for filing complaints on SCORES: Name,
//             PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
//             Communication, Speedy redressal of the grievances
//           </p>

//           <p>
//             Investments in securities market are subject to market risks; read
//             all the related documents carefully before investing.
//           </p>

//           <p>
//             "Prevent unauthorised transactions in your account. Update your
//             mobile numbers/email IDs with your stock brokers. Receive
//             information of your transactions directly from Exchange on your
//             mobile/email at the end of the day. Issued in the interest of
//             investors. KYC is one time exercise while dealing in securities
//             markets - once KYC is done through a SEBI registered intermediary
//             (broker, DP, Mutual Fund etc.), you need not undergo the same
//             process again when you approach another intermediary." Dear
//             Investor, if you are subscribing to an IPO, there is no need to
//             issue a cheque. Please write the Bank account number and sign the
//             IPO application form to authorize your bank to make payment in case
//             of allotment. In case of non allotment the funds will remain in your
//             bank account. As a business we don't give stock tips, and have not
//             authorized anyone to trade on behalf of others. If you find anyone
//             claiming to be part of Zerodha and offering such services, please
//             create a ticket here.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;

// import React from "react";
// function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} className="py-5">
//       <div className="container border-top pt-5">
//         <div className="row">
//           {/* Brand Section */}
          
//           <div className="col-lg-3 col-md-6 mb-4">
//             <img
//               src="media/images/logo.svg"
//               alt="TradeSphere Logo"
//               style={{ width: "60%", marginBottom: "20px" }}
//             />
//             <p className="text-muted small">
//               &copy; {currentYear} TradeSphere Technologies Pvt. Ltd.
//               <br />
//               All rights reserved.
//             </p>
//             <div className="d-flex gap-3 fs-5 text-secondary mt-3">
//               <i className="fa fa-twitter cursor-pointer"></i>
//               <i className="fa fa-facebook-official"></i>
//               <i className="fa fa-instagram"></i>
//               <i className="fa fa-linkedin-square"></i>
//             </div>
//           </div>

//           {/* Column 2: Company */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h6 className="fw-bold mb-3">Company</h6>
//             <div className="d-flex flex-column gap-2">
//               <a
//                 href="/about"
//                 className="text-decoration-none text-secondary small"
//               >
//                 About Us
//               </a>
//               <a
//                 href="/products"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Our Products
//               </a>
//               <a
//                 href="/pricing"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Pricing
//               </a>
//               <a
//                 href="/refer"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Referral Program
//               </a>
//               <a
//                 href="/careers"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Join the Team
//               </a>
//               <a
//                 href="/press"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Press & Media
//               </a>
//             </div>
//           </div>

//           {/* Column 3: Support */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h6 className="fw-bold mb-3">Support</h6>
//             <div className="d-flex flex-column gap-2">
//               <a
//                 href="/contact"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Contact Us
//               </a>
//               <a
//                 href="/help"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Support Portal
//               </a>
//               <a
//                 href="/blog"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Market Insights Blog
//               </a>
//               <a
//                 href="/charges"
//                 className="text-decoration-none text-secondary small"
//               >
//                 List of Charges
//               </a>
//               <a
//                 href="/resources"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Learning Resources
//               </a>
//             </div>
//           </div>

//           {/* Column 4: Account */}
//           <div className="col-lg-3 col-md-6 mb-4">
//             <h6 className="fw-bold mb-3">Account</h6>
//             <div className="d-flex flex-column gap-2">
//               <a
//                 href="/signup"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Open an Account
//               </a>
//               <a
//                 href="/funds"
//                 className="text-decoration-none text-secondary small"
//               >
//                 Fund Transfer
//               </a>
//               <a
//                 href="/challenge"
//                 className="text-decoration-none text-secondary small"
//               >
//                 30-Day Trading Challenge
//               </a>
//               <a
//                 href="/status"
//                 className="text-decoration-none text-secondary small"
//               >
//                 System Status
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Legal & Compliance Section */}
//         <div
//           className="mt-5 text-muted"
//           style={{ fontSize: "12px", lineHeight: "1.8" }}
//         >
//           <p>
//             <strong>TradeSphere Technologies:</strong> A modern platform for
//             modern investors. TradeSphere refers to the ecosystem of financial
//             services provided by TradeSphere and its partners. All investments
//             are subject to market risks. Read all scheme-related documents
//             carefully before investing.
//           </p>

//           <p>
//             <strong>Disclaimer:</strong> TradeSphere is currently in the
//             development phase. All registration numbers (TS-SAFE-2024) and
//             regulatory mentions are placeholders used for UI/UX demonstration
//             purposes only. We do not provide stock tips or guaranteed returns.
//           </p>

//           <p>
//             <strong>Security Notice:</strong> Prevent unauthorized transactions
//             in your trading account. Always keep your mobile number and email
//             updated with your service providers to receive instant transaction
//             alerts.
//           </p>

//           <p className="border-top pt-3 text-center">
//             Built with ❤️ for the Indian Trading Community.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;

import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%", marginBottom: "15px" }} alt="TradeSphere Logo" />
            <p className="text-muted">
              &copy; 2026 TradeSphere Technologies Pvt. Ltd. All rights reserved.
            </p>
            {/* Social Media Links Section */}
            <div className="fs-4 mt-3">
              <a href="#" className="text-secondary me-3"><i className="fa fa-twitter"></i></a>
              <a href="#" className="text-secondary me-3"><i className="fa fa-facebook-official"></i></a>
              <a href="#" className="text-secondary me-3"><i className="fa fa-instagram"></i></a>
              <a href="#" className="text-secondary me-3"><i className="fa fa-linkedin-square"></i></a>
              <a href="#" className="text-secondary"><i className="fa fa-telegram"></i></a>
            </div>
          </div>
          <div className="col">
            <p className="fw-bold">Company</p>
            <a href="" className="text-decoration-none text-muted">About Us</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Our Products</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Pricing</a>
            <br />
            {/* <a href="" className="text-decoration-none text-muted">Referral Programme</a>
            <br /> */}
            <a href="" className="text-decoration-none text-muted">Careers</a>
            <br />
            <a href="" className="text-decoration-none text-muted">TradeSphere Tech</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Press & Media</a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold">Support</p>
            <a href="" className="text-decoration-none text-muted">Contact Us</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Support Portal</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Market Blog</a>
            <br />
            <a href="" className="text-decoration-none text-muted">List of Charges</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Downloads & Resources</a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold">Account</p>
            <a href="" className="text-decoration-none text-muted">Open an Account</a>
            <br />
            <a href="" className="text-decoration-none text-muted">Fund Transfer</a>
            <br />
            <a href="" className="text-decoration-none text-muted">30 Day Challenge</a>
            <br />
          </div>
        </div>

        {/* Startup Compliance & Legal Section */}
        <div className="mt-5 text-muted pb-4" style={{ fontSize: "13px", textAlign: "justify" }}>
          <p>
            <strong>TradeSphere Technologies:</strong> A modern financial ecosystem designed for the next generation of investors. 
            All financial operations and services are maintained under the TradeSphere Security Standards (TS-SAFE). 
            Registered Address: TradeSphere HQ, Invertis University, Bareilly - 243123, UP, India.
          </p>

          <p>
            Investments in the securities market are subject to market risks; read all the related documents carefully before investing. 
            Digital assets and stock trading involve significant risk of loss and is not suitable for all investors.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with TradeSphere. 
            Receive real-time information of your transactions directly from the platform on your mobile/email at the end of the day. 
            KYC is a one-time exercise while dealing in securities markets."
          </p>

          <p>
            TradeSphere does not provide "stock tips" or guaranteed returns. We are an execution platform built to empower your 
            independent decision-making. If you find anyone claiming to be a TradeSphere partner offering guaranteed profits, 
            please report it immediately to our security cell.
          </p>
          
          <p className="text-center pt-3 border-top">
            TradeSphere: Built for the Future of Indian Markets.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;