import express from "express";
const app = express();
import authRouter from "./routes/auth.js";
import jobsRouter from "./routes/jobs.js";
import connectDB from "./db/connect.js";
import authenticateUser from "./middleware/authentication.js";
import dotenv from "dotenv";

// extra security packages
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";
import rateLimiter from "express-rate-limit";
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
  })
);

app.use(express.static("./src")); // serve static files
app.use(express.json()); // parse json bodies
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(helmet());
app.use(cors());
app.use(xss());

dotenv.config();
app.get("/", (req, res) => {
  res.send("Jobs api!");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to the db");
    app.listen(port, () =>
      console.log(`Yes, the Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
