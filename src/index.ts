import express, { Application, Request, Response } from "express";
import downloadRoutes from "./routes/MediaDownlaod";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", downloadRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
   res.send("Media Downloader API is running");
});

// Start server
app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
