const DepartmentDao = require("../db/dao/DepartmentDao");
const BaseService = require("./base/BaseService");

module.exports = class DepartmentService extends BaseService {
    constructor() {
        super(new DepartmentDao());
    }
}