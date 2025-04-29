const User = require("../models/user");
const bcrypt = require("bcryptjs");
const util = require("util");
bcrypt.compare = util.promisify(bcrypt.compare);

const getUserLoginForm = async(req, res) => {
    res.render("pages/user-dashboard/userLogin", {
        message: "",
    });
}

const getAdminLoginForm = async(req, res) => {
    res.render("pages/admin-dashboard/adminLogin", {
        message: "",
    });
}

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    // console.log(`Email = ${email}, Password = ${password}`);

    if (!email || !password) {
        return res.render("pages/user-dashboard/userLogin", {message: "Required fields missing", type: "danger", status: "Error"});
    }
    try {
        const existUser = await User.findOne({email});
        if (!existUser)
            return res.render("pages/user-dashboard/userLogin", {message: "Account does not exist", type: "danger", status: "Failed"});
        const passwd = await bcrypt.compare(password, existUser.password);
        if (!passwd)
            return res.render("pages/user-dashboard/userLogin", {message: "Invalid login credentials", type: "danger", status: "Failed"});
        if (existUser.role !== "User")
            return res.render("pages/user-dashboard/userLogin", {message: "Only users allowed", type: "danger", status: "Failed"});
        return res.redirect("/user/dashboard");
    } catch (error) {
        console.log("Error occured in login", error.message);
        return res.render("pages/user-dashboard/userLogin", {message: error.message, type: "danger", status: "Failed"});
    }
}

const loginAdmin = async(req, res) => {
    const { email, password } = req.body;
    // console.log(`Email = ${email}, Password = ${password}`);

    if (!email || !password) {
        return res.render("pages/admin-dashboard/adminLogin", {message: "Required fields missing", type: "danger", status: "Error"});
    }
    try {
        const existAdmin = await User.findOne({email});
        if (!existAdmin)
            return res.render("pages/admin-dashboard/adminLogin", {message: "Account does not exist", type: "danger", status: "Failed"});
        const passwd = await bcrypt.compare(password, existAdmin.password);
        if (!passwd)
            return res.render("pages/admin-dashboard/adminLogin", {message: "Invalid login credentials", type: "danger", status: "Failed"});
        if (existAdmin.role !== "Admin")
            return res.render("pages/admin-dashboard/adminLogin", {message: "Only admins allowed", type: "danger", status: "Failed"});
        return res.redirect("/admin/dashboard");
    } catch (error) {
        console.log("Error occured in login", error.message);
        return res.render("pages/admin-dashboard/adminLogin", {message: error.message, type: "danger", status: "Failed"});
    }
}

module.exports = {
    getUserLoginForm,
    getAdminLoginForm,
    loginUser,
    loginAdmin,
}