const express = require("express");
const Routes = require("./components/Routes");
const UserModel = require("./db/model/UserModel");
const StorageMongoDb = require("./db/StorageMongoDb");

let User = new UserModel();
User.open();

User.getById('607321f3d95e408b62724ff9').then(data => console.log(data));