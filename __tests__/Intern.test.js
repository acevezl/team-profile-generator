const Intern = require('../lib/Intern.js');

test('Creates a random intern object', () => {
    const intern = new Intern(594,'George Contanza','George@NoSoupForYou.com','UC Berkeley');
    
    console.log(intern);

    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual('Intern');
});