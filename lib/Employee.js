class Employee {
    constructor(id=0, name='', email, role='Employee') {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.role = role;
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

    getRole() {
        return this.role;
    }
    
}