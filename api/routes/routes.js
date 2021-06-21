const express = require("express");
const classficatorController = require("../controllers/classificatorController");
const directoryController = require("../controllers/directoryController");

const router = express.Router();

router.post("/classificator", classficatorController.rateImage);
router.get("/directory/clear", directoryController.removeSnapshotsFiles);
router.get("/healthcheck", (req, res) => {
  return res.json({
    check: true,
  });
});

module.exports = router;
