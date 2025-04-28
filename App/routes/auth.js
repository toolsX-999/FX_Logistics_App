// Router for account authentication and registration
const express = require("express");
const router = express.Router();
const {
    getUserLoginForm,
    getAdminLoginForm,
    loginUser,
    loginAdmin,
} = require("../controllers/auth");

// User Login
router.get("/user-login", getUserLoginForm);
router.post("/user-login", loginUser);

// Admin Login
router.get("/admin-login", getAdminLoginForm);
router.post("/admin-login", loginAdmin);

// Register Admin
router.get("admin-create");
router.post("/admin-create");

module.exports = router;