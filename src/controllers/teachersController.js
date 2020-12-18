const express = require("express");

const teachersRepository = require('../repositories/teachersRepository');


const router = express.Router();

router.get("/get-teacher", async (req, res) => {

    console.log("entrou aqui")
    
    try {
        const professores = await teachersRepository.getTeachers();
        res.status(200).send(professores);

    } catch(e) {
        console.log(e)
        res.status(409).send(e.message);

    }
    
  });

  module.exports = router;