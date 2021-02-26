import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("Users", async () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })
    
    // testando o create  de um usuário
    it("Should be able to create a new user", async() => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User Example"
        });
        
        expect(response.status).toBe(201);
    })

    //testando o create de um usuário já existente
    it("Should not be able to create a user with an exist email", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400)
    })
})