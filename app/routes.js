const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

router.post("/CTAP-check-identity", function (req, res) {
  var answer = req.session.data["CTAP-check-identity"];
  if (answer === "yes") {
    res.redirect("Option3/CTAP-test-information");
  }
  if (answer === "no") {
    res.redirect("Option3/CTAP-barcode-lookup-blank");
  }
});
