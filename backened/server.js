import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import fetch from "node-fetch";
// routes
import blogRouter from './routes/blogRoutes.js';

const app = express();
app.use(cors());

app.use(express.json());


//app.use(clerkMiddleware());

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Require auth for all routes after this
//app.use(requireAuth());

// Routes
app.use('/api/blogs', blogRouter);
// Start server
app.get('/', (req, res) => {
  res.send('OK');
});
  


const url = process.env.PING_URL || "https://your-render-app.onrender.com";

setInterval(async () => {
  try {
    const res = await fetch(url);
    console.log(`Pinged ${url} — Status: ${res.status}`);
  } catch (err) {
    console.error(`Ping failed: ${err.message}`);
  }
}, 14 * 60 * 1000); // every 14 minutes

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
