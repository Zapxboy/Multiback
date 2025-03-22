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
   let datares = await fbdl(url);
   let data = await datares.data;
   console.log(data);
   res.status(200).json({ success: true, data });
});

router.post("/Instagram", async (req: Request, res: Response): Promise<void> => {
   const { url } = req.body;
   if (!url) {
      res.status(400).json({ error: "URL is required" });
      return;
   }
   // console.log(url);
   let resdata = await igdl(url);
   let data = await resdata.data;
   console.log(resdata);
   for (let media of data) {
      new Promise((resolve) => setTimeout(resolve, 2000));
      // console.log(media.url);
   }
   res.status(200).json({ success: true, data });
});

export default router;
