const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: String,
    confirmPassword: String,
    activated: {
        type: Boolean,
        default: false,
    },
    suspended: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        default: "User",
        enum: ["Admin", "User"]
    },
    createdAt: {
        type: Date,
        default: new Date,
    }
},
{ timeStamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;