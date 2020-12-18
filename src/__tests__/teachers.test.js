const supertest = require("supertest");

const app = require("../app");
const db = require("../database");

describe("GET on the teachers route", () => {
    it("should answer with 200 status when communication with the bank is successful and also return the information from the teachers table ", async () => {

        const res = await supertest(app).get("api/professores/get-teacher");

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({id: 1, nome: "Paola Santana Hoffmann"})
    })


});