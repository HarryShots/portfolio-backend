const portfolioController = require("../controller/app.controller");
const testimonialsController = require("../controller/app.controller");
const express = require ("express");
const router = express.Router();

router.get('/portfolio', portfolioController.portfolioAppRoute);
router.get('/testimonials', testimonialsController.testimonialsAppRoute);

module.exports = router;
