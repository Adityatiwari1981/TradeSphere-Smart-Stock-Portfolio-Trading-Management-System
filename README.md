<h1 align="center">TradeSphere</h1>
<h3 align="center">Smart Stock Portfolio & Trading Management System</h3>

<p align="center">
A Full Stack MERN Web Application for managing stock portfolios, tracking investments,
and simulating real-time trading activities with secure authentication.
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
TradeSphere is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their stock portfolio, track holdings, monitor positions, and perform simulated trading operations through an interactive dashboard.
</p>

<p>
The system includes secure user authentication (JWT), portfolio tracking, watchlist management, and data visualization using charts. It is designed to simulate real-world stock trading platforms and demonstrate complete full-stack development.
</p>

<hr>

<h2>🎯 Objectives</h2>

<ul>
<li>Build a real-world stock trading dashboard</li>
<li>Implement secure authentication system (JWT)</li>
<li>Manage portfolio, orders, and watchlist</li>
<li>Visualize stock data using charts</li>
<li>Integrate real-time stock APIs (Upstox - planned)</li>
</ul>

<hr>

<h2>🚀 Features Implemented</h2>

<ul>
<li>User Signup & Login (JWT Authentication)</li>
<li>Google Login Integration</li>
<li>Forgot Password with OTP</li>
<li>Change Password & Profile Upload</li>
<li>Protected Routes using Middleware</li>
<li>Dashboard UI (Holdings, Orders, Positions, Funds)</li>
<li>Watchlist Management (Backend Connected)</li>
<li>Chart Visualization (Doughnut Chart)</li>
<li>API Integration between Frontend & Backend</li>
</ul>

<hr>

<h2>🛠 Technology Stack</h2>

<h3>Frontend</h3>
<ul>
<li>React.js</li>
<li>HTML5, CSS3, JavaScript</li>
<li>Axios</li>
<li>Material UI</li>
<li>Chart.js</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>JWT Authentication</li>
<li>Multer (File Upload)</li>
</ul>

<h3>Database</h3>
<ul>
<li>MongoDB</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
TradeSphere
│
├── backend
│   ├── config (db, email, multer)
│   ├── controllers (auth, dashboard)
│   ├── middleware (authMiddleware)
│   ├── models (User, Orders, Holdings, etc.)
│   ├── routes (authRoutes, dashboardRoutes)
│   └── index.js
│
├── frontend
│   ├── src
│   │   ├── dashboard
│   │   ├── landing_page
│   │   ├── utils (API helper)
│   │   └── App.js
│
└── README.md
</pre>

<hr>

<h2>⚙️ System Requirements</h2>

<ul>
<li>Node.js (v16+)</li>
<li>MongoDB installed</li>
<li>VS Code</li>
<li>Browser (Chrome recommended)</li>
</ul>

<hr>

<h2>📥 Installation</h2>

<h3>1. Clone Project</h3>

<pre>
git clone https://github.com/your-username/tradesphere.git
</pre>

<hr>

<h3>2. Backend Setup</h3>

<pre>
cd backend
npm install
</pre>

Create `.env` file:

<pre>
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tradesphere
JWT_SECRET=your_secret_key
</pre>

Run backend:

<pre>
npm start
</pre>

<hr>

<h3>3. Frontend Setup</h3>

<pre>
cd frontend
npm install
npm start
</pre>

<hr>

<h2>▶️ Run Project</h2>

<ul>
<li>Backend → http://localhost:5000</li>
<li>Frontend → http://localhost:3000</li>
</ul>

<hr>

<h2>🔐 Authentication Flow</h2>

<ul>
<li>User logs in → JWT token generated</li>
<li>Token stored in localStorage</li>
<li>Token sent in API headers</li>
<li>Backend verifies token using middleware</li>
</ul>

<hr>

<h2>📊 Current Progress</h2>

<ul>
<li>Authentication System Completed</li>
<li>Frontend Dashboard UI Completed</li>
<li>Backend APIs Developed</li>
<li>Watchlist API Connected</li>
<li>Project in Intermediate Stage</li>
</ul>

<hr>

<h2>🚧 Upcoming Features</h2>

<ul>
<li>Portfolio Analysis</li>
<li>Profit / Loss Calculation</li>
<li>Transaction History</li>
<li>Admin Panel</li>
<li>Live Stock API Integration (Upstox)</li>
<li>Stock Search Feature</li>
</ul>

<hr>

<h2>👨‍💻 Team Members</h2>

<ul>
<li>Aditya Tiwari – Backend & API Integration</li>
<li>Manju – Frontend + Database</li>
<li>Priya Gupta – Frontend UI</li>
<li>Lovepreet Singh – Documentation & Testing</li>
</ul>

<hr>

<h2>📚 Conclusion</h2>

<p>
TradeSphere demonstrates a complete full-stack application with authentication,
API integration, and dashboard-based data visualization. The project reflects
real-world implementation of a stock trading system and is continuously evolving
towards advanced features like live market data and analytics.
</p>

<hr>

<h3 align="center">⭐ MCA Major Project – TradeSphere</h3>