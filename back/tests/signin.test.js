const request = require("supertest");
const app = require("../index");

describe("POST /signin", () => {
  it("it should try to authenticate", async () => {
    const res = await request(app).post("/signin").send({
      email: "kal@gmail.com",
      password: "123",
    });
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /signin", () => {
  it("it should try to authenticate", async () => {
    const res = await request(app).post("/signin").send({
      email: "kal@gmail.com",
      password: "12345",
    });
    expect(res.statusCode).toBe(400);
  });
});
