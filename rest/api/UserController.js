const UserService = require("../../service/UserService");
const RestController = require("./base/RestController");

module.exports = class UserController extends RestController{
    constructor(server) {
        super(server, new UserService(), '/user');
    }
}