const express = require("express");

const periodsRepository = require('../repositories/periodsRepository');

const router = express.Router();

router.get("/all-periods", async (req, res) => {

    
    try {
        const periodos = await periodsRepository.getAllPeriods();
        res.status(200).send(periodos);

    } catch(e) {
        console.log(e)
        res.status(409).send(e.message);

    }
    
  });

  module.exports = router;