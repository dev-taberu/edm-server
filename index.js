const express = require("express");
const Routes = require("./components/Routes");
const UserModel = require("./db/model/UserModel");
const StorageMongoDb = require("./db/StorageMongoDb");

let User = new UserModel();
User.open();

const userModel = User.getModel();

const user = new userModel({
    name: 'Denis',
    age: 24
});

user.save()
    .then(
        () => {
            User.getAll()
                .then(data => console.log(data))
                .then(() => User.close());
        }
    )

