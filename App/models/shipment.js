const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShipmentSchema = mongoose.Schema({
    trackingNum: String,
    title: String, 
    sender: String,
    receiver: String,
    invoiceNum: {
      type: String,
      default: "INV180425CA",
    },
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
  notification: {
    type: String,
    default: null,
  },
  tag: {
    type: String,
    default: "OUT FOR DELIVERY",
  },
},
{ timeStamps: true });

const UpdateShipment = mongoose.model("UpdateShipment", UpdateShipmentSchema);
module.exports = {
  Shipment,
  UpdateShipment,
}