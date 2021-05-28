const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(role='Engineer') {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
}

module.exports = Engineer;