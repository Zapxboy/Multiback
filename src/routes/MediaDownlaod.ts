import { Router, Request, Response } from "express";
// @ts-ignore
import { igdl, youtube } from "btch-downloader";

const router: Router = Router();
router.post("/Youtube", async (req: Request, res: Response): Promise<void> => {
   const { url } = req.body;

   if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
   }

   try {
      let data;

      if (url.includes("youtube.com") || url.includes("youtu.be")) {
         data = await youtube(url);
         console.log(data);
      } else {
         res.status(400).json({ error: "Unsupported URL or platform" });
         return;
      }

      res.status(200).json({ success: true, data });
   } catch (err) {
      const error = err as Error;
      console.error(error);
      res.status(500).json({ error: "Failed to download media", details: error.message });
   }
});

router.post("/Instagram", async (req: Request, res: Response): Promise<void> => {
   const { url } = req.body;
   try {
      const data = await igdl(url);
      console.log(data);
      res.status(200).json({ success: true, data });
   } catch (err) {
      const error = err as Error;
      console.error(error);
      res.status(500).json({ error: "Failed to download media", details: error.message });
   }
});

export default router;
