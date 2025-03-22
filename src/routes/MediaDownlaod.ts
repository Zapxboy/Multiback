import { Router, Request, Response } from "express";
// @ts-ignore
import { fbdl, igdl } from "ruhend-scraper";

const router: Router = Router();

router.post("/fb", async (req: Request, res: Response): Promise<void> => {
   const { url } = req.body;

   if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
   }

   try {
      console.log(`Downloading Facebook video from: ${url}`);
      const datares = await fbdl(url);
      const data = await datares.data;

      console.log("Facebook download success:", data);
      res.status(200).json({ success: true, data });

   } catch (error: any) {
      console.error("Facebook download error:", error.message);
      res.status(500).json({ error: "Failed to download Facebook video", details: error.message });
   }
});

router.post("/Instagram", async (req: Request, res: Response): Promise<void> => {
   const { url } = req.body;

   if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
   }

   try {
      console.log(`Downloading Instagram video from: ${url}`);
      const resdata = await igdl(url);
      const data = await resdata.data;

      console.log("Instagram download success:", data);
      res.status(200).json({ success: true, data });

   } catch (error: any) {
      console.error("Instagram download error:", error.message);
      res.status(500).json({ error: "Failed to download Instagram video", details: error.message });
   }
});

export default router;
