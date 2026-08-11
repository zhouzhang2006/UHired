const express = require("express");

console.log("✅ auth.js loaded");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /api/auth hit");
    res.send("Authentication route working!");
});

module.exports = router;