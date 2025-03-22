"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// @ts-ignore
const ruhend_scraper_1 = require("ruhend-scraper");
const router = (0, express_1.Router)();
router.post("/Youtube", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        res.status(400).json({ error: "URL is required" });
        return;
    }
    const data = await (0, ruhend_scraper_1.ytmp3)(url);
    if (data) {
        res.status(200).json({ success: true, data });
    }
    else {
        res.status(400).json({ error: "Failed to download media" });
    }
});
router.post("/Instagram", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        res.status(400).json({ error: "URL is required" });
        return;
    }
    // console.log(url);
    let resdata = await (0, ruhend_scraper_1.igdl)(url);
    let data = await resdata.data;
    console.log(resdata);
    for (let media of data) {
        new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(media.url);
    }
    res.status(200).json({ success: true, data });
});
exports.default = router;
