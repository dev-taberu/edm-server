const UserDao = require("../db/dao/UserDao");
const BaseService = require("./base/BaseService");

module.exports = class UserService extends BaseService {
    constructor() {
        super(new UserDao());
    }
}