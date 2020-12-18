const express = require("express");

const periodRepository = require('../repositories/periodRepository');

const router = express.Router();

router.get("/all-periods", async (req, res) => {

    
    try {
        const periodos = await periodRepository.getAllPeriods();
        res.status(200).send(periodos);

    } catch(e) {
        console.log(e)
        res.status(409).send(e.message);

    }
    
  });

  module.exports = router;