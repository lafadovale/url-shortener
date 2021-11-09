import express from "express";
import { URLController } from "./controller/URLController";
import { MongoConnection } from "./database/MongoConnection";

const app = express();
app.use(express.json());
const port = 3333;

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);
app.listen(port, () => console.log(`Express listening on port ${port}`));
