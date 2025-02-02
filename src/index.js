import express from "express";
import cors from "cors";
import { classifyNumber } from "../controllers/num.controller.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/classify-number", classifyNumber);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
