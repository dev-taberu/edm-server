const BaseDao = require("./base/BaseDao");

const DepartmentSchema = {
    name: String
}

module.exports = class DepartmentDao extends BaseDao {
    constructor() {
        super('Department', DepartmentSchema);
    }
}