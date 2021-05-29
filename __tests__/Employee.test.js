const Employee = require('../lib/Employee.js');

test('Creates a random Employee object', () => {
    const employee = new Employee(594,'George Contanza','George@NoSoupForYou.com');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName().length).toBeGreaterThan(0);
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail().length).toBeGreaterThan(0);
    expect(employee.getRole()).toEqual('Employee');
});

