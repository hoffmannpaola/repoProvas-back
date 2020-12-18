const db = require("../database");

async function getAllPeriods() {
    
    let periodos;

    try {
      const result = await db.query('SELECT * FROM periodos');
  
      periodos = result.rows;
      
    } catch (error) {
      console.log(error);
  
    }
    console.log(periodos)
    return periodos;

}

module.exports = {
    getAllPeriods
}