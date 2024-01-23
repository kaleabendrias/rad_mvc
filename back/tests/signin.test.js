const request = require("supertest");
const app = require("../index");
const User = require("../models/User");

jest.mock("../models/User", () => ({
  findOne: jest.fn(),
}));

describe("POST /auth/signin", () => {
  it("should return an error for invalid credentials", async () => {
    const res = await request(app)
      .post("/auth/signin")
      .send({ email: "kal@gmail.com", password: "12345" });

    console.log(res.body);

    expect(res.statusCode).toBe(400);
  });
});
