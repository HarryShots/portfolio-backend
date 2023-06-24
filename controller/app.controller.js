
const {testimonialsModel} = require("../model/testimonial_model");




exports.testimonialsAppRoute = async (req, res) => {
    try {
        items = await testimonialsModel.find({});
        return res.status(200).send({
            message: "Success",
            data: items
        })
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}