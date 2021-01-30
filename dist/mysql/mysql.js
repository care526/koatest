"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlPool = void 0;
const mysql2 = require("mysql2");
const config_1 = require("./config");
exports.MysqlPool = mysql2
    .createPool(config_1.default)
    .promise();
