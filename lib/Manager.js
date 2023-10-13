const employee = require("./Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //using the employee constructor
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber()
    {
        return this.officeNumber;
    }
}
module.exports = Manager;