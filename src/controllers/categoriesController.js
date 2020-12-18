const express = require("express");

const categoriesRepository = require('../repositories/categoriesRepository');

const router = express.Router();

router.get("/all-categories", async (req, res) => {

    
    try {
        const categorias = await categoriesRepository.getAllCategories();
        console.log(categorias)
        res.status(200).send(categorias);

    } catch(e) {
        console.log(e)
        res.status(409).send(e.message);

    }
    
  });

  module.exports = router;