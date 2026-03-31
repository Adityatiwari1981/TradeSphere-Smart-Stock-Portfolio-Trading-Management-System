// import React from "react";
// function Hero() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 mb-5">
//         <h1 className="fs-2 text-center">
//           We pioneered the discount broking model in India
//           <br />
//           Now, we are breaking ground with our technology.
//         </h1>
//       </div>

//       <div
//         className="row p-5 mt-5 border-top text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-5">
//           <p>
//             We kick-started operations on the 15th of August, 2010 with the goal
//             of breaking all barriers that traders and investors face in India in
//             terms of cost, support, and technology. We named the company
//             Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
//             barrier.
//           </p>
//           <p>
//             Today, our disruptive pricing models and in-house technology have
//             made us the biggest stock broker in India.
//           </p>
//           <p>
//             Over 1+ Crore clients place millions of orders every day through our
//             powerful ecosystem of investment platforms, contributing over 15% of
//             all Indian retail trading volumes.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <p>
//             In addition, we run a number of popular open online educational and
//             community initiatives to empower retail traders and investors.
//           </p>
//           <p>
//             <a href="" style={{ textDecoration: "none" }}>
//               Rainmatter
//             </a>
//             , our fintech fund and incubator, has invested in several fintech
//             startups with the goal of growing the Indian capital markets.
//           </p>
//           <p>
//             And yet, we are always up to something new every day. Catch up on
//             the latest updates on our blog or see what the media is saying about
//             us.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const teamMembers = [
//     {
//       name: "Aarav Sharma",
//       role: "Founder & CEO",
//       bio: "A visionary entrepreneur with 10+ years in fintech, Aarav leads the strategic direction of TradeSphere.",
//       wiki: "https://en.wikipedia.org",
//       img: "https://images.unsplash.com"
//     },
//     {
//       name: "Isha Verma",
//       role: "CTO",
//       bio: "An expert in high-frequency trading systems and blockchain architecture, Isha drives our tech stack.",
//       wiki: "https://en.wikipedia.org",
//       img: "https://images.unsplash.com"
//     },
//     {
//       name: "Rohan Das",
//       role: "Head of Product",
//       bio: "Rohan focuses on user-centric design, making complex trading tools accessible to everyone.",
//       wiki: "https://en.wikipedia.org",
//       img: "https://images.unsplash.com"
//     },
//     {
//       name: "Meera Iyer",
//       role: "Chief Compliance Officer",
//       bio: "Meera ensures TradeSphere operates at the highest standards of regulatory integrity.",
//       wiki: "https://en.wikipedia.org",
//       img: "https://images.unsplash.com"
//     }
//   ];

//   return (
//     <div className="container-fluid bg-white p-0">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center py-5 mt-5"
//       >
//         <h1 className="display-3 fw-bold mb-4">We are TradeSphere.</h1>
//         <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
//           We’re a team of innovators, traders, and engineers building the future of
//           investing. Our mission is to democratize the markets for every Indian.
//         </p>
//       </motion.div>

//       {/* Philosophy Section */}
//       <div className="bg-light py-5">
//         <div className="container py-5">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <motion.img
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 src="media/images/about_vision.svg"
//                 alt="Vision"
//                 className="img-fluid"
//               />
//             </div>
//             <div className="col-md-6 ps-md-5">
//               <h2 className="fw-bold mb-4">Our Vision</h2>
//               <p className="text-secondary fs-5">
//                 We believe that financial independence shouldn't be a privilege.
//                 TradeSphere was born out of a desire to replace complex, expensive
//                 legacy systems with a fast, transparent, and beautiful interface.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="container py-5 mt-5">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-center fw-bold mb-5 display-5"
//         >
//           Meet the Minds Behind the Platform
//         </motion.h2>

//         <div className="row g-4">
//           {teamMembers.map((member, index) => (
//             <div className="col-lg-3 col-md-6" key={index}>
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card border-0 shadow-sm rounded-4 overflow-hidden h-100"
//               >
//                 <img src={member.img} className="card-img-top" alt={member.name} style={{ height: '300px', objectFit: 'cover' }} />
//                 <div className="card-body p-4">
//                   <h5 className="fw-bold mb-1">{member.name}</h5>
//                   <p className="text-primary small fw-semibold mb-3">{member.role}</p>
//                   <p className="card-text text-muted small mb-4">{member.bio}</p>
//                   <a
//                     href={member.wiki}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-outline-dark btn-sm rounded-pill px-3"
//                   >
//                     View Wiki <i className="fa fa-external-link ms-2"></i>
//                   </a>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Closing Statement */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="container text-center py-5 my-5 border-top"
//       >
//         <h3 className="fw-bold mb-3">Want to join us?</h3>
//         <p className="text-muted mb-4">We are always looking for passionate builders.</p>
//         <button className="btn btn-primary btn-lg px-5 rounded-pill">View Careers</button>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const teamMembers = [
    {
      name: "Aarav Sharma",
      role: "Team Leader & Architect",
      education: "Master of Computer Application (MCA)",
      bio: "An expert in scalable systems, Aarav bridges the gap between complex trading algorithms and user-centric design.",
      wiki: "https://en.wikipedia.org",
      img: "media/images/leader.jpg",
      isLeader: true,
    },
    {
      name: "Isha Verma",
      role: "Lead Developer",
      education: "Master of Computer Application (MCA)",
      bio: "Specializing in high-frequency trading engines and data security, Isha ensures the platform is fast and unbreakable.",
      wiki: "https://en.wikipedia.org",
      img: "media/images/member1.jpg",
    },
    {
      name: "Rohan Das",
      role: "Product Strategist",
      education: "Master of Computer Application (MCA)",
      bio: "Rohan focuses on UI/UX logic and cloud infrastructure, making professional trading tools accessible to everyone.",
      wiki: "https://en.wikipedia.org",
      img: "media/images/member2.jpg",
    },
    {
      name: "Meera Iyer",
      role: "Systems Engineer",
      education: "Master of Computer Application (MCA)",
      bio: "With a deep understanding of DevOps and compliance logic, Meera maintains the reliability and 99.9% uptime of our cloud.",
      wiki: "https://en.wikipedia.org",
      img: "media/images/member3.jpg",
    },
  ];

  return (
    <div className="container-fluid bg-white p-0">
      {/* 1. Main Hero Section */}
      <div className="container py-5 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row p-lg-5 mt-5 mb-5 text-center"
        >
          <h1 className="display-4 fw-bold">
            We are building the future of{" "}
            <span className="text-primary">TradeSphere</span>
            <br />
            Where technology meets the Indian Market.
          </h1>
        </motion.div>

        {/* 2. Story / Origin Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="row p-lg-5 mt-5 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.1em" }}
        >
          <div className="col-md-6 p-lg-5">
            <p>
              TradeSphere was founded by a core group of{" "}
              <strong>MCA experts</strong> who saw a massive gap in the Indian
              trading landscape. While millions were entering the market, the
              technology supporting them was slow, expensive, and outdated.
            </p>
            <p>
              Our goal is simple: <strong>Zero Barriers.</strong> We've combined
              deep technical knowledge with a passion for finance to create a
              platform that is as powerful as it is simple to use.
            </p>
            <p>
              Today, TradeSphere is more than just a broker; it is a technology
              ecosystem dedicated to transparency and speed.
            </p>
          </div>
          <div className="col-md-6 p-lg-5">
            <p>
              Beyond trading, we believe in education. We are developing
              open-source initiatives to ensure that every investor understands
              the "why" behind every trade.
            </p>
            <p>
              Our <strong>Innovation Lab</strong> is constantly testing new
              AI-driven tools and high-speed data pipelines to stay ahead of the
              curve.
            </p>
            <p>
              We are a team that codes by day and trades by night. We are always
              up to something new, pushing the boundaries of what fintech can
              achieve in India.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. Vision Visual Section */}
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                src="media/images/about_vision.svg"
                alt="Vision"
                className="img-fluid w-75"
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-4">Our Technical Vision</h2>
              <p className="text-secondary fs-5">
                As computer application masters, we don't just use technology—we
                build it. Our vision is to deploy the most secure and responsive
                trading infrastructure in India, backed by data integrity and
                user-first logic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container text-center py-5 my-5 border-top"
      >
        <h3 className="fw-bold mb-3">Be part of our journey</h3>
        <p className="text-muted mb-4">
          We're always looking for brilliant minds to join our mission.
        </p>
        <button className="btn btn-primary btn-lg px-5 rounded-pill shadow">
          See Open Roles
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;