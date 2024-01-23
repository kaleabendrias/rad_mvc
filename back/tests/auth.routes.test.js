const request = require("supertest");
const app = require("../index"); // Assuming auth.routes.test.js is in a `tests` directory
const User = require("../models/User");

jest.mock("../models/User"); // Mock the User model to avoid actual database interactions

describe("Auth routes", () => {
  describe("POST /signin", () => {
    it("should return a 400 error if the user is not found", async () => {
      User.findOne.mockResolvedValueOnce(null);

      const response = await request(app)
        .post("/auth/signin")
        .send({ email: "test@example.com", password: "password" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "User not found" });
    });

    it("should return a 400 error if the password is incorrect", async () => {
      const user = { email: "test@example.com", password: "password" };
      User.findOne.mockResolvedValueOnce(user);

      const response = await request(app)
        .post("/auth/signin")
        .send({ email: user.email, password: "wrongpassword" });

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "Invalid credentials" });
    });
  });
});
