const db = require("../database");

async function getSubjects() {
    let disciplinas;

    try {
      const result = await db.query('SELECT * FROM disciplinas');
  
      disciplinas = result.rows;
      
    }catch (error) {
      console.log(error);
  
    }
    
    return disciplinas;

}

module.exports = {
    getSubjects
}