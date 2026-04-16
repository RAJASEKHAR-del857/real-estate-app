# SmartEstate – Scalable Real Estate Platform

SmartEstate is a full-stack web application designed to demonstrate production-level architecture for a real estate platform. It implements a structured backend, secure authentication, database integration, and a client-side application with routing and API communication.

## Overview

The application follows a layered architecture separating routing, business logic, and data access. The backend exposes REST APIs, while the frontend consumes these APIs to render property listings and manage user sessions.

## Tech Stack

**Frontend**

* React.js
* Vite
* React Router
* Axios

**Backend**

* Node.js
* Express.js
* MySQL (mysql2)
* JSON Web Tokens (JWT)

## Project Structure

```id="2u8m7n"
smartestate/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── main.jsx
│   │
│   └── index.html
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validation/
│   └── server.js
│
└── README.md
```

## Setup Instructions

### 1. Database Setup

Open MySQL and execute the schema file:

```id="x1n3fj"
source backend/models/schema.sql;
```

This will create:

* `smartestate` database
* `users` table
* `properties` table

---

### 2. Backend Setup

```id="pq93lm"
cd backend
npm init -y
npm install express cors mysql2 jsonwebtoken
node server.js
```

Server runs on:

```id="5bnn7p"
http://localhost:5000
```

---

### 3. Frontend Setup

```id="8l5k3d"
cd frontend
npm create vite@latest
npm install
npm install axios react-router-dom
npm run dev
```

Frontend runs on:

```id="x9sd2k"
http://localhost:5173
```

---

## API Endpoints

### Authentication

```id="z6gk1m"
POST /api/login
```

Returns a JWT token for authenticated access.

---

### Properties

```id="u5b8zt"
GET /api/properties
```

Fetches all property listings from the database.

---

## Key Features

* Layered backend architecture (routes → controllers → database)
* MySQL integration with connection pooling
* JWT-based authentication middleware
* Input validation for API requests
* Centralized error handling
* Client-side routing using React Router
* API abstraction using Axios

---

## Design Decisions

* **Separation of Concerns**: Controllers handle logic, routes handle endpoints, and database configuration is isolated.
* **Stateless Authentication**: JWT is used to avoid server-side session storage.
* **Scalability**: Modular structure allows easy extension into services or microservices.
* **Maintainability**: Code is organized for readability and future enhancements.

---

## Limitations

* Authentication is simplified and does not include password hashing
* No role-based access control implemented
* No pagination or filtering on property listings
* UI is minimal and not optimized for production use

---

## Future Improvements

* Add password hashing (bcrypt)
* Implement role-based authorization (admin/user)
* Introduce pagination and filtering for properties
* Improve frontend UI using a component library or Tailwind CSS
* Add deployment configuration using Docker and cloud platforms

---

## Author

Bommaka Rajasekhar Reddy
GitHub: https://github.com/RAJASEKHAR-del857
LinkedIn: https://linkedin.com/in/bommaka-rajasekhar-reddy

---

