const Employee = require('../lib/Employee.js');

test('Creates a random employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(0);
});