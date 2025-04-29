const mongoose = require("mongoose");
// const localMongo = "mongodb://127.0.0.1:27017/shipmentDB";
const cloudMongo = "mongodb+srv://toolsx999:umWSx1oS7bM0e5Ni@cluster0.pq2pers.mongodb.net/shipmentDB";
// const mongoUri = localMongo;

const connectMongo = () => {
    mongoose.connect(cloudMongo)
        .then(() => console.log("Mongodb connected successfully")
        )
        .catch((err) => console.log("Mongodb connection error", err)
        );
}

module.exports = connectMongo;

