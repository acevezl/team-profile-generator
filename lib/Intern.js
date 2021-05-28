const Intern = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(role='Intern') {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
}

module.exports = Intern;