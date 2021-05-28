const Engineer = require('../lib/Engineer.js');

test('Creates a random engineer object', () => {
    const engineer = new Engineer();
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email.length).toBeGreaterThan(0);
    expect(engineer.getRole()).toEqual('Engineer');
});