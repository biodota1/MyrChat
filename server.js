import express from "express";
import router from "./src/users/routes";
import dotenv from "dotenv";
const app = express();
const port = 3100;
dotenv.config();

app.use(express.json());

app.use("/users", router);

app.listen(port, () => {
  console.log(`Server is ruinning on port ${port}`);
});
