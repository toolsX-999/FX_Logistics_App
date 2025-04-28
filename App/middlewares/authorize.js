// A middleware that implements role based access control

// const authorized = (allowedRoles=[]) => {
//     return (req, res, next) => {
//         if (allowedRoles.includes(req.role)) {
//             return next();
//         }
//         return res.redirect("/");
//     }
// }

// module.exports = { authorized };