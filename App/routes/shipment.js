const express = require("express");
const {
    createShipment,
    editShipment,
    deleteShipment,
    viewShipment,
    viewShipments,
    updateShipment,
    getShipments,
    trackShipment,
} = require("../controllers/shipment");
const router = express.Router();

// /shipment/create-shipment
router.post("/create-shipment", createShipment);
// /shipment/view-shipments
router.get("/view-shipments", getShipments);
// /shipment/track-shipment
// router.get("/track-shipment", getTrackShipment);
// /shipment/track-shipment
router.get("/track-shipment", trackShipment);
// Create steady update records for shipment
router.post("/update_shipment/:shipmentId", updateShipment);
// Create steady update records for shipment
// router.get("/update_shipment/:shipmentId", getUpdatedShipment);

router.put("/edit_shipment/:id", editShipment);
router.delete("/delete_shipment/:id", deleteShipment);
router.get("/view_shipment/:id", viewShipment);
// router.get("/view_shipments", viewShipments);
// router.get("/view-users", viewUsers);

module.exports = router;