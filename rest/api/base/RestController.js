const express = require('express');
let app = express();

module.exports = class RestController {

    constructor(server, service, path) {
        this.service = service;

        server.get(`${path}`, this.get);
    }

    create(req, res) {
        this.service.create();
    };
    get(request, response) {
        response.send('this is from rest');
    };
}