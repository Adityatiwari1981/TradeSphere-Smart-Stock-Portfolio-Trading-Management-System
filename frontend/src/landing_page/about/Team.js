import React from "react";

function Team() {
  const teamData = [
    {
      name: "Aditya Tiwari",
      DevelopmentRole:"Backend Development + API Integration",
      role: "Team Leader & Visionary",
      education: "Master of Computer Application (MCA)",
      qualities: "Strategic Planning, Full-Stack Architecture",
      mindset: "Growth-driven, focused on scalable fintech solutions.",
      bio: "Aditya founded TradeSphere to bridge the gap between complex trading algorithms and everyday users. He specializes in building high-performance systems.",
      wiki: "https://en.wikipedia.org",
      img: "./images/TeamMember.png",
      isLeader: true
    },
    {
      name: "Manju",
      DevelopmentRole:"Frontend + Database Management",
      role: "Lead Developer",
      education: "Master of Computer Application (MCA)",
      qualities: "Backend Optimization, Data Security",
      mindset: "Precision-oriented, obsessed with system security.",
      bio: "Manju ensures that the TradeSphere engine is unbreakable. Her mastery over databases makes our platform the fastest in the segment.",
      wiki: "https://en.wikipedia.org",
      img: "./images/TeamMember.png"
    },
    {
      name: "Priya Gupta",
      DevelopmentRole:"Frontend Development",
      role: "Product Strategist",
      education: "Master of Computer Application (MCA)",
      qualities: "UI/UX Logic, Cloud Infrastructure",
      mindset: "User-first, dedicated to seamless digital experiences.",
      bio: "Priya translates complex financial data into beautiful, intuitive interfaces. He believes software should be invisible to the user.",
      wiki: "https://en.wikipedia.org",
      img: "./images/TeamMember.png"
    },
    {
      name: "Lovepreet Singh",
      DevelopmentRole:"Documentation + Testing + Prompt Engineering",
      role: "Systems Engineer",
      education: "Master of Computer Application (MCA)",
      qualities: "DevOps, FinTech Compliance Logic",
      mindset: "Analytical, focused on reliability and uptime.",
      bio: "Lovepreet manages the TradeSphere cloud. Her expertise ensures 99.9% uptime for our traders, even during high market volatility.",
      wiki: "https://en.wikipedia.org",
      img: "./images/TeamMember.png"
    }
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="row mb-5 border-top pt-5 text-center">
        <h1 className="display-5 fw-bold">The Minds Behind TradeSphere</h1>
        <p className="text-muted">A core team of MCA experts redefining the trading landscape.</p>
      </div>

      {teamData.map((member, index) => (
        <div 
          key={index} 
          className={`row align-items-center mb-5 p-4 rounded-4 ${member.isLeader ? 'bg-light shadow-sm' : ''}`}
        >
          {/* Circular Photo Section */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="position-relative d-inline-block">
              <img
                src={member.img}
                alt={member.name}
                style={{ 
                  borderRadius: "100%", 
                  width: "280px", 
                  height: "280px",
                  objectFit: "cover",
                  border: member.isLeader ? "8px solid #FFD700" : "6px solid #E0E0E0", // Gold for Leader, Silver for Members
                  padding: "5px"
                }}
              />
              {member.isLeader && (
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark px-3 py-2 shadow">
                  LEADER
                </span>
              )}
            </div>
            <h3 className="mt-4 fw-bold">{member.name}</h3>
            <h6 className="text-primary text-uppercase letter-spacing-1">{member.role}</h6>
            <p className="small text-muted">{member.education}</p>
          </div>

          {/* Details Section */}
          <div className="col-md-7 ps-md-5">
            <div className="mb-3">
              <h5 className="fw-bold">Expertise & Mindset</h5>
              <p className="text-muted" style={{ lineHeight: "1.6" }}>
                <strong>Qualities:</strong> {member.qualities} <br />
                <strong>Approach:</strong> {member.mindset}
              </p>
            </div>
            <div className="mb-4">
              <p className="fs-5 text-secondary">{member.bio}</p>
            </div>
            
            <div className="d-flex gap-3 mt-4">
              <a href={member.wiki} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm rounded-pill px-4">
                <i className="fab fa-wikipedia-w me-2"></i>Wikipedia Profile
              </a>
              <a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-outline-primary btn-sm rounded-circle"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;