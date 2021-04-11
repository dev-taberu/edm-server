const mongoose = require('mongoose');
const Storage = require('./model/base/Storage');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number
})

module.exports = class StorageMongoDb extends Storage {
    
    async init() {
        this.connection = mongoose.connect(this.getConnectionString(), {useNewUrlParser: true});
        const User = mongoose.model('User', UserSchema);

        User.find({},(err, docs) => {
            console.log(docs);
        });
    }
}
