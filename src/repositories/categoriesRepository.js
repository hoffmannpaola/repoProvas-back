const db = require("../database");

async function getAllCategories() {
    
    let categorias;

    try {
      const result = await db.query('SELECT * FROM categorias');
  
      categorias = result.rows;
      
    } catch (error) {
      console.log(error);
  
    }
    
    return categorias;

}

module.exports = {
    getAllCategories
}