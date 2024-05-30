import express from "express";
import router from "./src/users/routes";
import dotenv from "dotenv";
const app = express();
const port = 3100;
dotenv.config();

app.use(express.json());

//app.use("/users", router);

app.use("/", (req, res) => {
  res.send("OKAY RANA GUYS BETTER LUCK NEXT TIME -Añora");
});

app.listen(port, () => {
  console.log(`Server is ruinning on port ${port}`);
});
