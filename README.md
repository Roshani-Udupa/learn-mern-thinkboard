<h1 align="center">📝 MERN Stack Note Taking App ✨</h1>
A minimal, clean, full-stack Note-Taking Application built with the MERN stack (MongoDB, Express, React, Node.js) to help you capture, edit, and manage notes efficiently.

---
## Key Features

- **Create, update, and delete notes** seamlessly  
- **Responsive, clean UI** for distraction-free note-taking  
- **Notes stored in MongoDB** for persistent and scalable storage  
-  **Rate limiting using Redis and Upstash** to prevent abuse of API 
- **CORS handled dynamically:**
	- In **development**, CORS enabled for your frontend dev server
	- In **production on Render**, frontend and backend share the same domain, eliminating CORS issues  
- **Ready for easy one-click deployment on Render**
### Concepts Implemented

- **CRUD Operations** (Create, Read, Update, Delete) on Notes  
- **Rate Limiting Middleware**:
	- Uses Upstash Redis for storing IP-based request counts
	- Prevents excessive API abuse while allowing fair usage
- **Dynamic CORS Handling**:
	- Uses `cors` middleware in Express
	- Allows requests from `http://localhost:5173` during development
	- Uses same-origin policy in production (Render) for a seamless setup
 - **Clean Code Structure**:
	- Modular controllers and routes
	- Environment-based configuration
	- Organized frontend with reusable components
- **Deployment Ready**:
	- Single command build and deployment flow for Render
	- Serves frontend build from the Express backend in production
	- Uses environment variables for secure configuration
### Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router    
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Rate Limiting:** Upstash Redis
- **Deployment:** Render

---
## Run Locally
### 1. Clone this repository

```
git clone https://github.com/Roshani-Udupa/learn-mern-thinkboard.git
```
### 2. .env and Database Setup
- Go to the backend folder and create a `.env` file and fill the following details

```
MONGO_URL=<your_mongo_uri>
PORT=5001
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```
#### 2.a Steps to create a MongoDB database for storing Notes

1. **Create an account on MongoDB Atlas**
    - Go to [mongodb/Atas](https://www.mongodb.com/cloud/atlas)
    - Sign up with your email or GitHub/Google account.

2. **Create a new project**
    - Click **"New Project"** and give it a name (e.g., `ThinkBoard`).

3. **Build a Cluster**
    - Click **"Build a Cluster"**.
    - Choose:
        - **Cloud Provider** (AWS, GCP, Azure)
        - **Region** (closest to your users)
        - **Cluster Tier**:
            - `M0` (free) for learning and small projects
            - `M10`+ for production
    - Click **"Create Cluster"** (it may take 1–3 minutes to provision).

4. **Create a database user**
    - Go to **Database Access** > **Add New Database User**.
    - Set a username and password (store them safely).
        
5. **Configure network access (IP Whitelisting)**
    - Go to **Network Access** > **Add IP Address**.
    - Add your current IP (`0.0.0.0/0` if you want open access for development).

6. **Connect to your cluster**
    - Click **Connect** > **Connect your application**.
    - Copy the **connection string**: ```
```
mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority
```
Replace `<username>`, `<password>`, and `<dbname>`.     

7. **Use the cluster**
	- Use in your Node.js app with Mongoose:

```js
   mongoose.connect(process.env.MONGO_URL); // saved in .env file
 ```

#### 2.b Steps to create Redis Database for collecting Rate Limit data for our website

1. **Create an Upstash account**
	- Go to [upstash](https://upstash.com).
	- Click **“Sign Up”** (or **“Start For Free”**).
	- Sign up using:
	    - GitHub
	    - Google
	    - Email
	- Verify your email if required.

2. **Create a new Redis database**
	- After logging in, go to the **Upstash Console**.
	- Click on **“Redis”** in the sidebar.
	- Click the **“Create Database”** button.

3. **Fill in database details**
	- **Name:** Give your database a recognizable name (e.g., `thinkboard-cache`).
	- **Region:** Select a region closest to your deployment (e.g., `Asia Pacific (Mumbai)` or `US East`).

4. **Create the database**
	 - Click **“Create”** and wait for Upstash to provision your Redis database.

5. **Copy your connection URL**
	- After creation, you will see your database in the list.
	- Click on your database name to view its dashboard.
	- Under **“REST API”** or **“Redis”**, you will see:
	    - **UPSTASH_REDIS_REST_URL** (HTTP API endpoint)
	    - **UPSTASH_REDIS_REST_TOKEN** (token for REST API)

Copy these for your `.env` file:
```
UPSTASH_REDIS_REST_URL=your_rest_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

### 3. Run the Backend

```
cd backend
npm install
npm run dev
```

### 4. Run the Frontend

```
cd frontend
npm install
npm run dev
```

---
## Deployment on Render

1. **Push to GitHub and connect to Render:**
	- Create a new **Web Service** on Render.
	- Connect your GitHub repo.
	- Add environment variables in Render’s dashboard.
	- Enable **automatic deploys on push**.

2. **Build & Deploy**  
	Render will:
	- Install dependencies
	- Build your React frontend
	- Serve your frontend from Express
	- Start your server automatically

Visit your live deployed URL and start taking notes!

---
## Contributing

Pull requests and issues are welcome to enhance features, improve UI, or add authentication.
