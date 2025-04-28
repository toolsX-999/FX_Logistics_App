// Admin Router
const express = require("express");
const router = express.Router();
const {getUsers, createUser, deleteUser} = require("../controllers/adminDashboard");

router.get("/dashboard", (req, res) => {
    res.render("pages/admin-dashboard/index");
});

router.get("/dashboard/users", getUsers);

router.post("/dashboard/user-create", createUser);

router.delete("/dashboard/user/:id", deleteUser);

// Profile View
// router.get("/dashboard/profile/:id", async (req, res) => {
//     res.render("pages/admin-dashboard/profile");
// })

router.get("/dashboard/shipments", async (req, res) => {
    res.render("pages/admin-dashboard/shipments");
})

router.get("/dashboard/orders", async (req, res) => {
    res.render("pages/admin-dashboard/orders");
})
// 
router.get("/dashboard/orders/link1", async (req, res) => {
    res.render("pages/admin-dashboard/link1");
})

router.get("/dashboard/orders/link2", async (req, res) => {
    res.render("pages/admin-dashboard/link2");
})

router.get("/dashboard/orders/link3", async (req, res) => {
    res.render("pages/admin-dashboard/link3");
})

module.exports = router;