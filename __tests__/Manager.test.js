const Manager = require('../lib/Manager.js');

test('Creates a random manager object', () => {
    const manager = new Manager();
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.getRole()).toEqual('Manager');
});