require("dotenv").config();
const express = require("express");
const cors = require("cors");


const teachersController = require("./controllers/teachersController");
const subjectsController = require("./controllers/subjectsController");
const examsController = require("./controllers/examsController");
const periodController = require("./controllers/periodController");

const app = express();

app.use(cors());
app.use(express.json());

// Define Routes of teachers
app.use("/api/professores", teachersController);

// Define Routes of subjects
app.use("/api/disciplinas", subjectsController);

// Define Routes of exams
app.use("/api/provas", examsController);

// Define Routes of period
app.use("/api/periodos", periodController);


module.exports = app;