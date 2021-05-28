const Intern = require('../lib/Intern.js');

test('Creates a random intern object', () => {
    const intern = new Intern();
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email.length).toBeGreaterThan(0);
    expect(intern.getRole()).toEqual('Intern');
});