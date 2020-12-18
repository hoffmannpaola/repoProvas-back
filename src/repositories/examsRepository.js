const db = require("../database");

async function getExamsByName(id) {
    console.log(id);
    let provas;


        //tenho que pegar todas as provas: nome, periodo
    try {
      const result = await db.query('SELECT * FROM provas WHERE disciplina_id =$1', [id]);
  
      provas = result.rows;
      
    } catch (error) {
      console.log(error);
  
    }
    console.log(provas)
    return provas;

}

module.exports = {
    getExamsByName
}