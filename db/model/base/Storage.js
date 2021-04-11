const config = require('../../../config.json').db;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = class Storage {

    constructor(modelName, schema) {
        this.modelName = modelName;
        this.schema = schema;
        this.model = null;
    }

    getModel() {
        return this.model;
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            this.model.findById(id, (err, data) => {
                if(err)
                    reject(err);
                resolve(data);
            })
        })
    }

    updateMany(condition, newData) {
        return new Promise((resolve, reject) => {
            this.model.updateMany(condition, newData, (err, data) => {
                if(err)
                    reject(err);
                resolve(data);
            })
        })
    }

    findOne(condition) {
        return new Promise((resolve, reject) => {
            this.model.findOne(condition, (err, data) => {
                if(err)
                    reject(err);
                resolve(data);
            })
        })
    }

    findAll(condition) {
        return new Promise((resolve, reject) => {
            this.model.find(condition, (err, data) => {
                if(err)
                    reject(err);
                resolve(data);
            })
        })
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.model.find({}, (err, data) => {
                if(err)
                    reject(err);
                resolve(data);
            })
        })
    }

    open() {
        mongoose.connect(this.getConnectionString(), {useNewUrlParser: true});
        this.model = mongoose.model(this.modelName, new Schema(this.schema, {versionKey: false}));
    }

    close() {
        mongoose.disconnect();
    }

    getConnectionString() {
        return `${config.provider}://${config.host}:${config.port}/${config.database_name}`;
    }
}