const db = require("../database");

async function getTeachers() {
    let professores;

    try {
      const result = await db.query('SELECT * FROM professores');
  
      professores = result.rows;
      
    } catch (error) {
      console.log(error);
  
    }
    
    return professores;

}

module.exports = {
    getTeachers
}