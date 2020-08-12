/*jshint esversion: 8 */
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const Burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The constiables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = Burger;