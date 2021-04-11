
const Storage = require('./base/Storage');

const UserSchema = {
    name: String,
    age: Number
}

module.exports = class UserModel extends Storage{
    constructor() {
        super('User', UserSchema);
    }
}