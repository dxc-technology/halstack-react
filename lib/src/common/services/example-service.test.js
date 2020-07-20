import testFunction from "./example-service";

describe("warnings array creation", () => {
  it("Function sums values", () => {
    const result = testFunction(2, 3);
    expect(result).toEqual(5);
  });
});
