import dotenv from "dotenv";
import { app } from "./app";
import { createConnection } from "./config/database.config";

dotenv.config({ path: process.env.ENV || ".env" });

const PORT = process.env.PORT;


const initialize = async () => {
  await createConnection();
  app.listen(PORT, () => {
    console.log(`Application started at port ${PORT}`);
  });
};

initialize();
