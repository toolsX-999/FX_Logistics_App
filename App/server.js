const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const methodOverRide = require("method-override");
// const flash = require("connect-flash");
const shipmentRouter = require("./routes/shipment");
const authRouter = require("./routes/auth");
const siteNavRouter = require("./routes/siteNav");
const adminRouter = require("./routes/adminDashboard");
const userRouter = require("./routes/userDashboard");
const connectMongo = require("./config/dbConnection");

const PORT = 3000;

const app = express();
connectMongo();

// app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverRide());
app.use(session({
    secret: "my-secret-key123321",
    resave: false,
    saveUninitialized: true
}));

// ===========================================
// app.use(flash());
// app.use((req, res, next) => {
//     res.locals.message = req.flash('message');
//     res.locals.type    = req.flash('type');
//     next();
//   });
// ===========================================

app.use("/", siteNavRouter);
app.use("/shipment", shipmentRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => console.log(`Server up and running on port-> ${PORT}`));