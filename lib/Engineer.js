const employee = require("./Employee");

class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email); //using the employee constructor
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;