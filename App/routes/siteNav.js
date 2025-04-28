// Router for home page nav links
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("pages/index")
});

router.get("/index", async (req, res) => {
    res.render("pages/index")
});

router.get("/index/tracking", async (req, res) => {
    res.render("pages/tracking")
});

router.get("/service", async (req, res) => {
    res.render("pages/services")
});

router.get("/bookings", async (req, res) => {
    res.render("pages/bookings")
});

router.get("/ship", async (req, res) => {
    res.render("pages/ship")
});

router.get("/about", async (req, res) => {
    res.render("pages/about")
});

// Note: contact has not yet been implemented
router.get("/contact", async (req, res) => {
    res.render("pages/contact")
});


module.exports = router;