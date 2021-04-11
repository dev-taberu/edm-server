
const BaseDao = require('./base/BaseDao');

const UserSchema = {
    name: String,
    age: Number
}

module.exports = class UserDao extends BaseDao {
    constructor() {
        super('User', UserSchema);
    }
}