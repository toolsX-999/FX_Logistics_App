const { Shipment, UpdateShipment } = require("../models/shipment");

// const getDbShipments = async () => {
//     const shipments = await Shipment.find();
//     if (shipments.length > 0)
//         return shipments;
// } 

const getShipments = async (req, res) => {
    const { activeTab, type } = req.query;
    try {
        const shipments = await Shipment.find();
        console.log("In get shipment", shipments)
        if (shipments.length === 0 || !shipments) {
            console.log("No Shipment found");
            return res.render("pages/user-dashboard/shipments", {
                type: type || "Error",
                activeTab: activeTab || "home-tab-pane",
                shipments: shipments || ""
            });
        }
        return res.render("pages/user-dashboard/shipments", {
            type,
            activeTab: activeTab || "home-tab-pane",
            shipments,
        });
    } catch (error) {
        console.log("Error occured fetching Shipments", error.message);
    }
}

const createShipment = async(req, res) => {
    const { 
        trackingNum, title, sender, receiver, origin,
        destination, shippingDate, arrivalDate, weight, status } = req.body;
    
    if (!trackingNum || !title || !sender || !receiver || !origin || !destination ||
        !shippingDate || !arrivalDate || !weight || !status
    ) {
        console.log("Missing required fields!");
        return res.render("pages/user-dashboard/shipments", {
            message: "Missing required fields!",
            type: "Error",
            activeTab: "contact-tab-pane",
            shipments:""
        });
    }
    else {
    try {
        const existsShipment = await Shipment.findOne({trackingNum});
        if (existsShipment) {
            console.log("Shipment with tracking number already exists");
            return res.render("pages/user-dashboard/shipments", {
                message: "Shipment with tracking number already exists",
                type: "Error",
                activeTab: "contact-tab-pane",
                shipments:""
            });
        }
        await Shipment.create({
            trackingNum,
            title,
            sender,
            receiver,
            origin,
            destination,
            shippingDate,
            arrivalDate,
            weight,
            status});
        return res.redirect("/shipment/view-shipments?activeTab=contact-tab-pane&type=success");
    } catch (error) {
        console.log("Error occured creating shipment in catch", error.message);
        return res.render("pages/user-dashboard/shipments", {
            message: "Error occured creating shipment in catch",
            type: "Error",
            activeTab: "contact-tab-pane"
        });
    }
}
}

// Pending
// Track shipment with tracking number
const trackShipment = async (req, res) => {
    const { trackingNum } = req.query;
    try {
        const shipment = await Shipment.findOne({trackingNum});
        if (!shipment) {
            return res.render("pages/tracking", {
                message: "Error occured creating shipment in catch",
                type: "Error",
            });
        }
        return res.render("pages/tracking", {
            shipment,
            type: "Success"
        })
    } catch (error) {
        console.log("Error occured fetching shipment with tracking number", error.message);
    }
}


const updateShipment = async (req, res) => {
    const { status, statusMessage, notification, location } = req.body;
    const { shipmentId } = req.query;

    try {
        const shipment = await Shipment.findOne({_id: shipmentId});
        if (!shipment) {
            console.log("No shipment found");
            
            return res.render("pages/tracking",  {
                message: "Tracking number does not exist!",
                type: "Error",
                activeTab: "profile-tab-pane",
            });
        }
        await UpdateShipment.create({
            shipmentId,
            status,
            statusMessage,
            notification,
            location
        })
        const updatedShipment = await UpdateShipment.findById({shipmentId});
        if (!updatedShipment || updatedShipment.length === 0) {
            console.log("No Update(s) found");
            return res.render("pages/tracking", {
                type: "Error",
                updatedShipment: "",
                activeTab: "profile-tab-pane",
            });
        }
        console.log(`Shipment with id: ${shipmentId} successfully updated`);
        return res.render("pages/tracking", {
            updatedShipment,
            type: "Success",
            activeTab: "profile-tab-pane",
        })
    } catch (error) {
        console.log("Error occured updating shipment: ", error.message);
    }
}



const editShipment = async(req, res) => {
    const { firstName, lastName, countryOrigin, countryDest, status, trackingNum } = req.body;
    const { id } = req.params;

    try {
        const updatedShipment = await Shipment.findByIdAndUpdate(id, {
            firstName,
            lastName,
            countryOrigin,
            countryDest,
            status,
            trackingNum}, 
            {new: true});
        return res.status(200).json({success: true, data: updatedShipment});
        } catch (error) {
        return res.status(500).json({success: false, msg: "Error occured updating shipment"});        
    }
}

const deleteShipment = async(req, res) => {
    const { id } = req.params;

    try {
        const deletedShipment = await Shipment.findByIdAndDelete(id);
        if (!deletedShipment) {
            return res.status(400).json({success: false, msg: "Shipment not found and could'nt be deleted"});
        }
        return res.status(204).json({success: true, msg: "Shipment deleted"});
        } catch (error) {
        return res.status(500).json({success: false, msg: "Error occured deleting shipment"});        
    }
}

const viewShipment = async(req, res) => {
    const { id } = req.params;

    try {
        const shipment = await Shipment.findById(id);
        if (!shipment)
            return res.status(200).json({success: true, msg: "No shipment found"});
        return res.status(200).json({success: true, data: shipment});
        } catch (error) {
        return res.status(500).json({success: false, msg: "Error occured viewing shipment"});        
    }
}

const viewShipments = async(req, res) => {
    try {
        const shipment = await Shipment.find();
        if (!shipment)
            return res.status(200).json({success: true, msg: "No shipment found"});
        return res.status(200).json({success: true, data: shipment});
        } catch (error) {
        return res.status(500).json({success: false, msg: "Error occured viewing shipment"});        
    }
}


module.exports = {
    createShipment,
    editShipment,
    deleteShipment,
    viewShipment,
    viewShipments,
    updateShipment,
    getShipments,
    trackShipment,
}