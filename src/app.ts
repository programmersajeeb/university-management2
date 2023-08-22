import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const port = 5000;

// cors use
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("oh amar jan pakhi !");
});

export default app;
