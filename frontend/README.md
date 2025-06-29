<h1 align="center">MERN Notes App Frontend</h1>

This is the **frontend for the MERN Note-Taking App**, allowing you to **create, view, update, and delete notes** with a clean, responsive UI.

Built with:
- **React**
- **Tailwind CSS** for styling
- **DaisyUI** for UI components
- **Axios** for API requests
- **React Router** for routing
- **React Hot Toast** for notifications
- **Lucide React** for icons

---

## Project Structure

```
src/
│
├── App.jsx
├── main.jsx
├── index.css
│
├── components/
│   ├── Navbar.jsx
│   ├── NoteCard.jsx
│   ├── NotesNotFound.jsx
│   └── RateLimitedUI.jsx
│
├── lib/
│   ├── axios.js
│   └── utils.js
│
└── pages/
    ├── HomePage.jsx
    ├── CreatePage.jsx
    └── NoteDetailPage.jsx
```

---

## Installation

1️⃣ Initialize your project (in the main folder):

```bash
npm init -y
```

2️⃣ Install dependencies  in frontend folder:

```bash
npm install react-router
npm install react-hot-toast
npm install lucide-react
npm install axios
```

---

### Tailwind CSS Setup

Follow the [Tailwind CSS Vite guide](https://v3.tailwindcss.com/docs/guides/vite).

-  Install Tailwind and dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure `tailwind.config.js`:

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [require("daisyui")],
}
```

- Add Tailwind directives to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---
### DaisyUI Setup

Install DaisyUI:

```bash
npm install daisyui
```

---

### Axios Configuration

- Create `src/lib/axios.js` to configure your API base URL:

```js
import axios from "axios";

const BASE_URL = import.meta.env.MODE==="development"?"http://localhost:5001/api":"/api";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
```

---

### CORS Explanation

**CORS (Cross-Origin Resource Sharing)** allows your React frontend (`localhost:5173`) to communicate with your backend (`localhost:5001`) during development.

On the backend, install:

```bash
npm install cors
```

and configure appropriately to allow requests from your frontend origin.

In **production on Render**, the frontend and backend are served from the same domain, so CORS issues do not occur.

---

## Running the Application

During development:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

### Deployment

- Configuration in main `package.json` file for deployment

```json
"scripts": {

    "build":"npm install --prefix backend && npm install --prefix frontend  && npm run build --prefix frontend",

    "start":"npm run start --prefix backend"
  }
```

- Build the Application

```sh
npm run build
```

- Start running the Application

```sh
npm run start
```