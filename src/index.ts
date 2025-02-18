import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import requestSniffer from "./middlewares/requestsniffer";
dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use(requestSniffer);

function root(req: Request, res: Response): void {
  res.status(200).json({ message: "This is root path of malicc server" });
}

app.get("/", root);

try {
  app
    .listen(port, () => {
      console.log("Server running on port", port);
    })
    .on("error", (err) => {
      console.error("Server error:", err);
    });
} catch (error) {
  console.log(error);
}
