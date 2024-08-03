import { getUserByID } from "./../../src/js-foundation/04-arrow";

describe("js-foundation/03-callbacks", () => {
  it("getUserByID should return an error if user does not exist", (done) => {
    const id = 10;

    getUserByID(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  it("getUserByID should return user john doe", (done) => {
    const id = 1;
    const john = {
      id: 1,
      name: "John Doe",
    };

    getUserByID(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual(john);
      done();
    });
  });
});
