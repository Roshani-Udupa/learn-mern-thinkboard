<h1 align="center">MERN Notes App Backend</h1>

This is the **backend for a MERN Note-Taking App**, handling **creating, updating, and deleting notes** with **MongoDB for storage** and **Upstash Redis for rate limiting** to protect your API.

---
## Backend Structure

```
src/
│
├── config/
│   ├── db.js              # MongoDB connection setup
│   └── upstash.js         # Upstash Redis client configuration
│
├── controllers/
│   └── notesController.js # CRUD logic for notes
│
├── middleware/
│   └── rateLimiter.js     # Rate limiting middleware
│
├── models/
│   └── note.js            # Note schema/model
│
├── routes/
│   └── notesRouter.js     # Routes for notes API
│
└── server.js              # Entry point for Express server
```

---
## Prerequisites

- Node.js installed    
- MongoDB URL
- Upstash Redis URL and Token

---
## Dependencies Installed

```bash
npm install express cors mongoose dotenv
npm install @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
npm install nodemon -D
```

---
## Running the Server

Setup the environment variables. Use `nodemon` for active development:

```bash
npm run dev
```

This will run:

```
nodemon src/server.js
```

---
## API Overview

An **endpoint** is a combination of **URL and HTTP method** for client interaction with resources.

Example:
- `POST /api/notes` → create a note
- `GET /api/notes` → get all notes
- `GET /api/notes/:id` → get a note by ID
- `PUT /api/notes/:id` → update a note
- `DELETE /api/notes/:id` → delete a note

---
## Key Concepts

### Middleware

Functions that execute during the request-response cycle.

Use Cases:
- Authentication
- Rate Limiting
- Logging

### Rate Limiting

Rate Limiting controls how often a client can hit the API (e.g., 100 requests per 15 minutes per user).

Flow:

```
client -> rateLimiter middleware -> server
```

If a client exceeds the limit, they receive:

```
429 Too Many Requests
```

This project uses **Upstash Redis**, a key-value NoSQL database, to efficiently track request counts.

---
## Deployment Notes

- In **development**, CORS is enabled for `http://localhost:5173`.
- In **production (Render)**, the frontend and backend share the same domain, eliminating CORS issues.
- Use environment variables in Render for MongoDB URI and Upstash credentials.