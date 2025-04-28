const User = require("../models/user");
const bcrypt = require("bcryptjs");
const util = require("util");
bcrypt.compare = util.promisify(bcrypt.compare);
bcrypt.hash = util.promisify(bcrypt.hash);


// GET: Render the Users page
// Implementing PRG with Redirect from (createUser) POST to this GET route to avoid form resubmission
const getUsers = async (req, res) => {
    const { type, activeTab } = req.query;
    try {
        const users = await User.find({});
        if (users.length === 0) {
            console.log("No user found");
            return res.render("pages/admin-dashboard/users", {users: "", type, activeTab: activeTab || "home-tab-pane"});
        } 
        // console.log("Active tab in getUsers = ", activeTab);
        return res.render("pages/admin-dashboard/users", {users, type, activeTab: activeTab || "home-tab-pane"});
    } catch (error) {
        console.log("Error occured fetching user", error.message);
    }
  };

// Create user
const createUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (!fullName || !email || !password || !confirmPassword) {
    console.log("Required fields missing");
    return res.render('pages/admin-dashboard/users', {
      message: "Required fields missing", type: "Error", activeTab: "disabled-tab-pane",
      users: ""
    });
  }
  if (password !== confirmPassword) {
    console.log("Passwords don't match");
    return res.render('pages/admin-dashboard/users', {
      message: "Passwords mismatch", type: "Error", activeTab: "disabled-tab-pane",
      users: "",
    });
  }
  try {
    const existUser = await User.findOne({email});
    if (existUser) {
        console.log("User already exists");
        return res.render('pages/admin-dashboard/users', {
            message: "User already exists", type: "Error", activeTab: "disabled-tab-pane",
            users: "",
        });
    };
    const hashedPswd = await bcrypt.hash(password, 10);
    await User.create({ fullName, email, password: hashedPswd });
    console.log("User created");
    // Implementing PRG with Redirect to a (getUsers) GET route to avoid form resubmission
    return res.redirect(
      `/admin/dashboard/users?activeTab=disabled-tab-pane&type=success`)
  } catch (error) {
    console.log("Error creating user:", error.message);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  console.log("Delete route");
  
  try {
    await User.deleteOne({_id: id});
    console.log("User deleted");
    return res.render("pages/admin-dashboard/users", {
      message: "User deleted successfully",
      type: "Success"
    })
  } catch (error) {
    console.log("Error occured deleting user: ", error.message);
  }

};

module.exports = {
    createUser,
    getUsers,
    deleteUser,
}