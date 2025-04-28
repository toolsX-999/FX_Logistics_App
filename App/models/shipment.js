const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShipmentSchema = mongoose.Schema({
    trackingNum: String,
    title: String, 
    sender: String,
    receiver: String,
    origin: String, 
    destination: String, 
    shippingDate: Date, 
    arrivalDate: Date, 
    weight: Number,
    facility: {
      type: String,
      default: "FX office 123 CA, USA"
    },
    status: {
      type: String,
      default: "Collected",
    },
},
{ timeStamps: true });

const Shipment = mongoose.model("Shipment", ShipmentSchema);


const UpdateShipmentSchema = mongoose.Schema({
  shipmentId: {type: Schema.Types.ObjectId, ref: 'Shipment'},
  currentDate: {
    type: Date,
    default: Date.now
  }, 
  status: {
    type: String,
    enum: ["Collected", "In Transit", "Siezed", "Stopped", "Damaged", "Delievered"]
  },
  location: String,
  statusMessage: String,
  notification: String,
},
{ timeStamps: true });


const UpdateShipment = mongoose.model("UpdateShipment", UpdateShipmentSchema);

module.exports = {
  Shipment,
  UpdateShipment,
}