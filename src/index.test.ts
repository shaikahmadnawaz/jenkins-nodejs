// @ts-ignore
import request from "supertest";
import { app, server } from "./index"; // Import both app and server

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Welcome to jenkins pipeline");
  });

  afterAll((done) => {
    server.close(done);
  });
});
