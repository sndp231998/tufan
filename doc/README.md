# Tufan Project Setup Documentation

## Overview
This document provides instructions for setting up, running, and deploying the Tufan project. It also covers best practices for development and production environments.

---

## 1. Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

---

## 2. Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd tufan
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## 3. Development
To start the development server:
```bash
npm run dev
```
- The app will be available at `http://localhost:5173` (default Vite port).

---

## 4. Build for Production
To build the project for production:
```bash
npm run build
```
- The output will be in the `dist/` directory.

---

## 5. Deployment
- Serve the contents of the `dist/` directory using any static file server (e.g., Nginx, Vercel, Netlify).

---

## 6. WebSocket/Backend Integration (if applicable)
If your frontend communicates with a backend (e.g., for real-time updates via WebSocket):
- Ensure the backend WebSocket endpoint is accessible (e.g., `wss://api.domain.com/ride-websocket`).
- If using a reverse proxy (like Nginx Proxy Manager), enable WebSocket support as described in the backend documentation.

---

## 7. Environment Variables
- You can configure environment variables in a `.env` file at the project root.
- Example:
  ```env
  VITE_API_URL=https://api.domain.com
  ```

---

## 8. Troubleshooting
- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- For WebSocket issues behind a proxy, ensure the proxy is configured to support WebSocket upgrades.

---

## 9. Useful Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build locally

---

## 10. Contact
For further assistance, contact the project maintainer or open an issue in the repository. 