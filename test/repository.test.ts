import {} from 'jest';
import * as supertest from "supertest";

const request = supertest("http://localhost:8000");

describe("GET /repositories", () => {
  it("should return 200 OK", () => {
    request
      .get("/repository")
      .expect(200);
  });
});
