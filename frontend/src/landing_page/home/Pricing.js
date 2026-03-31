// import React from "react";

// function Pricing() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4">
//           <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
//           <p>
//             We pioneered the concept of discount broking and price transparency
//             in India. Flat fees and no hidden charges.
//           </p>
//           <a href="" style={{ textDecoration: "none" }}>
//             See Pricing{" "}
//             <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//         </div>
//         <div className="col-2"></div>
//         <div className="col-6  mb-5">
//           <div className="row text-center">
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹0</h1>
//               <p>
//                 Free equity delivery and
//                 <br />
//                 direct mutual funds
//               </p>
//             </div>
//             <div className="col p-3 border">
//               <h1 className="mb-3">₹20</h1>
//               <p>Intraday and F&O</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pricing;

import React from "react";
import { motion } from "framer-motion";

function Pricing() {
  const primeColor = "#5E35B1"; // TradeSphere Purple

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left Side: Pitch */}
        <motion.div
          className="col-lg-5 mb-5 mb-lg-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-3 display-6" style={{ color: "#212121" }}>
            Fair Pricing, <br />
            <span style={{ color: primeColor }}>No Surprises</span>
          </h2>
          <p className="text-muted fs-5 mb-4" style={{ lineHeight: "1.6" }}>
            At TradeSphere, we believe that top-quality trading tools should be
            affordable for everyone, not just the wealthy. That is why we have
            created a very clear and straightforward way of charging you, where
            what you see is exactly what you pay. You will never have to worry
            about surprise costs or hidden fees catching you off guard, as we
            keep our pricing honest and easy to understand for every investor.
          </p>
          <motion.a
            href="/pricing"
            className="fw-bold text-decoration-none d-inline-flex align-items-center"
            style={{ color: primeColor }}
            whileHover={{ x: 8 }}
          >
            Explore Detailed Pricing{" "}
            <i className="bi bi-arrow-right ms-2 fs-5"></i>
          </motion.a>
        </motion.div>

        {/* Right Side: Pricing Cards */}
        <div className="col-lg-7">
          <div className="row g-4 text-center">
            {/* Card 1: Free Tier */}
            <motion.div
              className="col-md-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-5 h-100 rounded-4 shadow-sm border bg-white">
                <motion.h1
                  className="display-4 fw-bold mb-3"
                  style={{ color: primeColor }}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                >
                  ₹0
                </motion.h1>
                <h5 className="fw-bold text-dark">Zero Commission</h5>
                <p className="text-muted mb-0">
                  Pay absolutely nothing in brokerage fees when you buy stocks
                  for the long term or invest in direct mutual funds. Every
                  rupee you save on commissions goes straight back into your
                  growing wealth.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Pro Tier */}
            <motion.div
              className="col-md-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-5 h-100 rounded-4 shadow-sm border bg-white">
                <motion.h1
                  className="display-4 fw-bold mb-3"
                  style={{ color: primeColor }}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                >
                  ₹10
                </motion.h1>
                <h5 className="fw-bold text-dark">Flat Fee Trading</h5>
                <p className="text-muted mb-0">
                  Stop worrying about high percentages. Whether you trade ₹1,000
                  or ₹1,00,000, you only pay a tiny, fixed fee of ₹20 per order.
                  This predictable pricing gives you the freedom to execute
                  fast-paced Intraday, F&O, and Commodities trades without any
                  hidden costs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;