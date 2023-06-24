
const testimonialsController = require("../controller/app.controller");
const express = require ("express");
const router = express.Router();


router.get('/testimonials', testimonialsController.testimonialsAppRoute);

module.exports = router;
