const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email); //using the employee constructor
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}