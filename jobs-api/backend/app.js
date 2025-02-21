import express from "express";
const app = express();
import authRouter from "./routes/auth.js";
import jobsRouter from "./routes/jobs.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
app.use(express.static("./src"));
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
dotenv.config();
app.get("/", (req, res) => {
  res.send("Jobs api!");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log("connected to the db")
    app.listen(port, () =>
      console.log(`Yes, the Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


