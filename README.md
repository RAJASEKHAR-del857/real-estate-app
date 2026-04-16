# SmartEstate – Full Stack Real Estate Platform

SmartEstate is a full-stack web application designed to demonstrate end-to-end development of a real estate listing system. The application allows users to view property listings and interact with backend APIs through a modern frontend interface.

## Overview

The project is structured as a client-server application. The frontend is built using React with Vite for fast development, while the backend is implemented using Node.js and Express. Communication between the two layers is handled via REST APIs.

## Tech Stack

**Frontend**

* React.js
* Vite
* Axios
* HTML, CSS, JavaScript

**Backend**

* Node.js
* Express.js
* CORS

## Project Structure

```
smartestate_fullstack/
│
├── frontend/
│   ├── index.html
│   ├── main.jsx
│   ├── App.jsx
│
├── backend/
│   ├── server.js
│
└── README.md
```

## Setup Instructions

### Backend

Navigate to the backend directory and install dependencies:

```
cd backend
npm init -y
npm install express cors
node server.js
```

The backend server will start on:

```
http://localhost:5000
```

### Frontend

Navigate to the frontend directory and set up the Vite application:

```
cd frontend
npm create vite@latest
npm install
npm install axios react react-dom
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

## API Endpoints

### Get Properties

```
GET /api/properties
```

Returns a list of available properties.

### Login

```
POST /api/login
```

Accepts a username and returns a mock authentication token.

## Functionality

* Fetches property data from the backend
* Displays property listings in the UI
* Demonstrates basic client-server interaction
* Includes a simple login API for demonstration purposes

## Limitations

* Uses in-memory data storage (no database integration)
* Authentication is not secure and intended only for demonstration
* Minimal UI without advanced user interaction features
* No deployment or production configuration included

## Future Improvements

* Integrate a database such as MongoDB or MySQL
* Implement secure authentication using JWT
* Add advanced filtering and search capabilities
* Improve frontend design and user experience
* Introduce role-based access control
* Add deployment configuration (Docker, cloud services)

## Author

Bommaka Rajasekhar Reddy
GitHub: https://github.com/RAJASEKHAR-del857
LinkedIn: https://linkedin.com/in/bommaka-rajasekhar-reddy

## License

This project is intended for academic and demonstration purposes.
**
