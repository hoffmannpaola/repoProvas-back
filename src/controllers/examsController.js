const express = require("express");

const examsRepository = require('../repositories/examsRepository');


const router = express.Router();

router.post("/exams-by-name", async (req, res) => {

    console.log(req.body)
    
    try {
        const provas = await examsRepository.getExamsByName(req.body.id);
        res.status(200).send(provas);

    } catch(e) {
        console.log(e)
        res.status(409).send(e.message);

    }
    
  });

  module.exports = router;