const { Shipment, UpdateShipment } = require("../models/shipment");

const countries = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua & Barb.' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia & Herz.' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'IO', name: 'Br. Indian Ocean' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Isl.' },
    { code: 'CF', name: 'Cent. African Rep.' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmas Isl.' },
    { code: 'CC', name: 'Cocos Isl.' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo (Dem. Rep.)' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: 'Côte d\'Ivoire' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czechia' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Rep.' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Eq. Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GF', name: 'Fr. Guiana' },
    { code: 'PF', name: 'Fr. Polynesia' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GR', name: 'Greece' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IM', name: 'Isle of Man' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KP', name: 'Korea (North)' },
    { code: 'KR', name: 'Korea (South)' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macao' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Isl.' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Isl.' },
]
   
const getShipments = async (req, res) => {
    const { activeTab, type, message="" } = req.query;
    try {
        const shipments = await Shipment.find();
        // console.log("In get shipment", shipments)
        if (shipments.length === 0 || !shipments) {
            // console.log("No Shipment found");
            return res.render("pages/user-dashboard/shipments", {
                type: type || "Error",
                message,
                activeTab: activeTab || "home-tab-pane",
                shipments: shipments || "",
                countries,
            });
        }
        return res.render("pages/user-dashboard/shipments", {
            type,
            activeTab: activeTab || "home-tab-pane",
            shipments,
            message,
            countries,
        });
    } catch (error) {
        console.log("Error occured fetching Shipments");
    }
}

const createShipment = async(req, res) => {
    const { 
        trackingNum, title, sender, receiver, origin,
        destination, shippingDate, arrivalDate, weight, status, invoiceNum } = req.body;
    
    if (!trackingNum || !title || !sender || !receiver || !origin || !destination ||
        !shippingDate || !arrivalDate || !weight || !status
    ) {
        // console.log("Missing required fields!");
        return res.render("pages/user-dashboard/shipments", {
            message: "Missing required fields!",
            type: "Error",
            activeTab: "contact-tab-pane",
            shipments:[],
            block: "createShipment",
            countries
        });
    }
    else {
    try {
        const existsShipment = await Shipment.findOne({trackingNum});
        if (existsShipment) {
            // console.log("Shipment with tracking number already exists");
            return res.render("pages/user-dashboard/shipments", {
                message: "Shipment with tracking number already exists",
                type: "Error",
                activeTab: "contact-tab-pane",
                shipments:[],
                block: "createShipment",
                countries
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
            status,
            invoiceNum
        });
        return res.redirect("/shipment/view-shipments?activeTab=contact-tab-pane&type=created");
    } catch (error) {
        // console.log("Error occured creating shipment in catch", error.message);
        return res.render("pages/user-dashboard/shipments", {
            message: "Error occured creating shipment",
            type: "Error",
            activeTab: "contact-tab-pane",
            shipments: [],
            block: "createShipment",
            countries
        });
    }
}
}

// Track shipment with tracking number
const trackShipment = async (req, res) => {
    const { trackingNum, message="" } = req.query;
    try {
        const shipment = await Shipment.findOne({trackingNum});
        if (!shipment) {
            return res.render("pages/tracking", {
                message: "Invalid/No tracking number/id. Contact your agent for a valid tracking id",
                type: "Error",
            });
        }
        let originCountryCode, originCountry, destinationCountryCode, destinationCountry;
        const updatedShipment = await UpdateShipment.find({shipmentId: shipment._id}).sort("-currentDate");
            [originCountryCode, originCountry] = shipment.origin.split("|");
            [destinationCountryCode, destinationCountry] = shipment.destination.split("|");
        // console.log(originCountry, originCountryCode, destinationCountry, destinationCountryCode);
        return res.render("pages/tracking", {
            shipment,
            updatedShipment,
            type: "Success",
            message,
            originCountryCode,
            originCountry,
            destinationCountryCode,
            destinationCountry
        })
    } catch (error) {
        console.log("Error occured fetching shipment with tracking number");
        return res.render("pages/tracking", {
            message: "Error occured fetching shipment with tracking number.c",
            type: "Error",
        });
    }
}


const updateShipment = async (req, res) => {
    const { status, statusMessage, notification, location, tag } = req.body;
    const { shipmentId } = req.params;

    try {
        const shipment = await Shipment.findById(shipmentId);
        if (!shipment) {
            // console.log("No shipment found");
            return res.render("pages/tracking",  {
                message: "Tracking number does not exist!",
                type: "Error",
                activeTab: "profile-tab-pane",
                block: "updateShipment",
            });
        }
        await UpdateShipment.create({
            shipmentId,
            status,
            statusMessage,
            notification: notification || "",
            location,
            tag
        })
        // console.log(`Shipment with id: ${shipmentId} successfully updated`);
        return res.redirect("/shipment/view-shipments?activeTab=profile-tab-pane&type=updated");
    } catch (error) {
        console.log("Error occured updating shipment");
        return res.render("pages/tracking",  {
            message: "Internal server error",
            type: "Error",
            activeTab: "profile-tab-pane",
            block: "updateShipment",
        });

    }
}

// const getUpdatedShipment = async (req, res) => {
//     const { shipmentId } = req.params;
//     try {
//         const shipment = await UpdateShipment.findOne({shipmentId});
//         if (!shipment) {

//         }
//         const updatedShipment = await UpdateShipment.find({shipmentId}).sort('currentDate');
//         if (!updatedShipment || updatedShipment.length === 0) {
//             console.log("No updatedShipment(s) found");
//             return res.render("pages/tracking", {
//                 type: type || "Error",
//                 activeTab: activeTab || "home-tab-pane",
//                 updatedShipment: ""
//             });
//         }
//         console.log("updatedShipment(s) found");
//         return res.render("pages/tracking", {
//             type: type || "Success",
//             activeTab: activeTab || "home-tab-pane",
//             updatedShipment: ""
//         });
//     } catch (error) {
//         console.log("Error occured fetching updated shipments: ", error.message);
//     }
    
// }


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