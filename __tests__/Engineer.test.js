const Engineer = require('../lib/Engineer.js');

test('Creates a random Engineer object', () => {
    const engineer = new Engineer(594,'George Contanza','George@NoSoupForYou.com','constanza');
    
    console.log(engineer);

    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual('Engineer');
});

