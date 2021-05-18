const Employee = require("../lib/Employee");

describe("employee", () => {
  it("should create an employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});
