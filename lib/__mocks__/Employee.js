module.exports = function(role='') {
    this.id = Math.floor(Math.random() * 1000);
    this.name = 'George Constanza';
    this.phone = '408-394-5343';
    this.email = 'George@Employees.com';
    
    let roleId = Math.floor(Math.random() * 3);
    let roles = ['Manager','Engineer','Intern'];
    if (role!='') {
        this.role = role;
    } else {
        this.role = roles[roleId];
    }
};