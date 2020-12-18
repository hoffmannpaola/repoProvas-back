const express = require("express");

const subjectsRepository = require('../repositories/subjectsRepository');

const router = express.Router();

router.get("/get-subjects", async (req, res) => {
    
  try {

    const disciplinas = await subjectsRepository.getSubjects();
    res.status(200).send(disciplinas);

  } catch(e) {
    console.log(e)

  }
    
  });

  module.exports = router;