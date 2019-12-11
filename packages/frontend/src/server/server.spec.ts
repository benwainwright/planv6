import request from "supertest";
import { Server } from "http";
import { DOMParser } from "xmldom";

import { configureServer } from "./server";

describe("Application server", () => {
  let runningServer: Server;

  beforeEach(async () => {
    const server = await configureServer(false);
    runningServer = server.listen(80);
  });

  afterEach(async () => {
    runningServer.close();
  });

  describe("Static bundle path", () => {
    it("Should return a 200 response", async () => {
      const response = await request(runningServer).get("/assets/main.js");
      expect(response.status).toEqual(200);
    });

    it("Should return an application/javascript content-type header", async () => {
      const response = await request(runningServer).get("/assets/main.js");
      expect(response.header["content-type"]).toContain(
        "application/javascript"
      );
    });

    it("Should return valid javascript", async () => {
      const response = await request(runningServer).get("/assets/main.js");
      expect(() => eval(response.body)).not.toThrowError();
    });
  });

  describe("Root path ('/')", () => {
    it("Should redirect to /app", async () => {
      const response = await request(runningServer).get("/");
      expect(response.status).toEqual(302);
      expect(response.header["location"]).toEqual("/app");
    });
  });

  describe("Application home ('/app)", () => {
    it("Should return a 200 response", async () => {
      const response = await request(runningServer).get("/app");
      expect(response.status).toEqual(200);
    });

    it("Should return a text/html content-type header", async () => {
      const response = await request(runningServer).get("/app");
      expect(response.header["content-type"]).toContain("text/html");
    });

    it("Should return an html string", async () => {
      const response = await request(runningServer).get("/app");
      const parser = new DOMParser();
      const parsed = parser.parseFromString(response.text, "text/xml");

      expect(parsed.documentElement.nodeName).toEqual("html");
    });
  });

  describe("The other route ('/app/other)", () => {
    it("Should return a 200 response", async () => {
      const response = await request(runningServer).get("/app/other");
      expect(response.status).toEqual(200);
    });

    it("Should return a text/html content-type header", async () => {
      const response = await request(runningServer).get("/app/other");
      expect(response.header["content-type"]).toContain("text/html");
    });

    it("Should return an html string", async () => {
      const response = await request(runningServer).get("/app/other");
      const parser = new DOMParser();
      const parsed = parser.parseFromString(response.text, "text/xml");

      expect(parsed.documentElement.nodeName).toEqual("html");
    });
  });
});
