"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1["default"])();
var address = process.env.HOST + ":" + process.env.PORT;
app.use(body_parser_1["default"].json());
dotenv_1["default"].config();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(process.env.PORT, function () {
    console.log("starting app on: ".concat(address));
});
