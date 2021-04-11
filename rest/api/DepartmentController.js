const DepartmentService = require("../../service/DepartmentService");
const RestController = require("./base/RestController");

module.exports = class DepartmentController extends RestController {
    constructor(server) {
        super(server, new DepartmentService(), '/dep');
    }
}