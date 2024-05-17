import express from "express";

const app = express();
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// import copyAssets from "./utils/copyAssets";
// copyAssets();
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
import path from "path";

import cors from "cors";
const corsOptions = {
  origin: [],
};

app.use(cors(corsOptions));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

import formRouter from "./routes/basicDetailsFormRoutes";

app.use("/", formRouter);

const port: string = process.env.PORT as string;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
