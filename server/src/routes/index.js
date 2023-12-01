const { Router } = require("express");
const router = Router();

const tattooArtistsRouter = require("./tattooArtistRouter.js");
const customerRouter = require("./customerRouter.js");
const publicationRouter = require("./publicationRouter.js");
const PriceRangeRouter = require("./priceRangeRouter.js");
const tattoStyleRouter = require("./tattooStyleRouter.js");
const filterRouter = require("./filterRouter.js");
const timeAvailabilityRouter = require("./timeAvailabilityRouter.js");
const appointmentRouter = require("./appointmentRouter.js");
const loginRouter = require("./loginRouter.js");
const nodemailerRouter = require("./nodemailerRouter.js");
const timeAvailabilityExceptionRouter = require("./timeAvailabilityExceptionRouter.js");
const adminRouter = require("./adminRouter.js");
const reviewRouter = require("./reviewRouter.js");

router.use("/tattooStyles", tattoStyleRouter);
router.use("/tattooArtists", tattooArtistsRouter);
router.use("/priceRange", PriceRangeRouter);
router.use("/publications", publicationRouter);
router.use("/customers", customerRouter);
router.use("/filters", filterRouter);
router.use("/timeAvailabilities", timeAvailabilityRouter);
router.use("/timeAvailabilityExceptions", timeAvailabilityExceptionRouter);
router.use("/appointments", appointmentRouter);
router.use("/auth", loginRouter);
router.use("/nodemailer", nodemailerRouter);
router.use("/admins", adminRouter);
router.use("/reviews", reviewRouter);

module.exports = router;
