const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(id=0, name='', email, phone) {
        super(id,name,email);
        this.role = 'Manager';
        this.officeNumber = phone;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // I absolutely disagree with the method below, but it was required per the assignment.
    // The best practice would be to have this.role = 'Manager' on the constructor, 
    // and not override the method - less code, cleaner, easier to update 
    // (no need to go and fix every overriden method if things change)
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;