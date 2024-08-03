import { http } from "../../src/plugins";

describe("plugins/http-client", () => {
  it("httpClient.get() should return a string", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  it("httpClient should have POST, PUT and DELETE methods", () => {
    expect(typeof http.post).toBe("function");
    expect(typeof http.put).toBe("function");
    expect(typeof http.delete).toBe("function");
    expect(typeof http.get).toBe("function");
  });
});
