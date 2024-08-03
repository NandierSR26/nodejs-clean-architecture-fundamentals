import { getAge } from "../../src/plugins";

describe("plugins/get-age-adapter", () => {
  it("getAge should return teh age of a person", () => {
    const birthDate = "2002-04-26";
    const age = getAge(birthDate);

    expect(typeof age).toBe("number");
  });

  it("getAge should return current age", () => {
    const birthDate = "2002-04-26";
    const age = getAge(birthDate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthDate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  it("getAge should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthDate = '1995-10-21'
    const age = getAge(birthDate)

    expect(age).toBe(0)
    expect(spy).toHaveBeenCalledWith()

  })
});
