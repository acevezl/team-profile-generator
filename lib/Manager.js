const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(role='Manager') {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }
}

module.exports = Manager;