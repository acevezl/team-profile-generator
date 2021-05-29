const Manager = require('../lib/Manager.js');

test('Creates a random manager object', () => {
    const manager = new Manager(594,'George Contanza','George@NoSoupForYou.com','408-555-5555');
    
    console.log(manager);

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
    expect(manager.getRole()).toEqual('Manager');
});