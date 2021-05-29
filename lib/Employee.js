class Employee {
    constructor(id=0, name='', email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    // The challenge asked to return 'Employee' but the best practice is to
    // have this value associated to the Employee as a PROPERTY so that it is
    // easier and cleaner - So that's what I'm doing
    getRole() {
        return this.role;
    }
    
}

module.exports = Employee;