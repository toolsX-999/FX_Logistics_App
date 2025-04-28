// Admin Router
const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.render("pages/user-dashboard/index");
});

router.get("/dashboard/users", async (req, res) => {
    res.render("pages/user-dashboard/users");
});

// Shipments has been implemented in "shipments" inside routes directory
// router.get("/dashboard/shipments", async (req, res) => {
//     res.render("pages/user-dashboard/shipments");
// })

// router.post("/dashboard/shipment", async (req, res) => {
//     res.render("pages/user-dashboard/shipments");
// })

router.get("/dashboard/orders", async (req, res) => {
    res.render("pages/user-dashboard/orders");
})
// 
router.get("/dashboard/orders/link1", async (req, res) => {
    res.render("pages/user-dashboard/link1");
})

router.get("/dashboard/orders/link2", async (req, res) => {
    res.render("pages/user-dashboard/link2");
})

router.get("/dashboard/orders/link3", async (req, res) => {
    res.render("pages/user-dashboard/link3");
})

module.exports = router;