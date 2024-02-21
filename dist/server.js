"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1["default"])();
var host = process.env.HOST;
var port = process.env.PORT;
var address = host + ":" + port;
app.use(body_parser_1["default"].json());
dotenv_1["default"].config();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
function logAddress() {
    console.log("starting app on: ".concat(address));
}
app.listen(port, logAddress);
