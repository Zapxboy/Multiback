"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// @ts-ignore
const btch_downloader_1 = require("btch-downloader");
const router = (0, express_1.Router)();
router.post("/Youtube", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        res.status(400).json({ error: "URL is required" });
        return;
    }
    try {
        let data;
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            data = await (0, btch_downloader_1.youtube)(url);
            console.log(data);
        }
        else {
            res.status(400).json({ error: "Unsupported URL or platform" });
            return;
        }
        res.status(200).json({ success: true, data });
    }
    catch (err) {
        const error = err;
        console.error(error);
        res.status(500).json({ error: "Failed to download media", details: error.message });
    }
});
router.post("/Instagram", async (req, res) => {
    const { url } = req.body;
    try {
        const data = await (0, btch_downloader_1.igdl)(url);
        console.log(data);
        res.status(200).json({ success: true, data });
    }
    catch (err) {
        const error = err;
        console.error(error);
        res.status(500).json({ error: "Failed to download media", details: error.message });
    }
});
exports.default = router;
