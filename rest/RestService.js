const express = require('express');
const UserController = require('./api/UserController');
const DepartmentController = require('./api/DepartmentController');
const config = require('../config.json').rest;

let app = express();

module.exports = class RestService {

    defineControllers(server) {
        new UserController(server);
        new DepartmentController(server);
    }

    init() {
        this.defineControllers(app);
    }

    start() {
        this.init();

        app.listen(config.port, config.host, () => {
            console.log(`Rest service started on ${config.host}:${config.port}`)
        });
    }
}