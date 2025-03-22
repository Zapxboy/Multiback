import express, { Application, Request, Response } from "express";
import downloadRoutes from "./routes/MediaDownlaod";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
);

// Explicitly handle preflight requests for all routes
app.options("*", cors());

app.use("/api", downloadRoutes);

app.get("/", (req: Request, res: Response) => {
   res.send("Media Downloader API is running");
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
