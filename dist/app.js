"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _billetera = _interopRequireDefault(require("./routes/billetera"));

var _inicio_fleet = _interopRequireDefault(require("./routes/inicio_fleet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])(); // settings

app.set('SERVER_HOST', process.env.SERVER_HOST || '127.0.0.1');
app.set('HTTP_PORT', process.env.HTTP_PORT || 3000);
app.set('DB_USER', process.env.DB_USER);
app.set('DB_HOST', process.env.DB_HOST);
app.set('DB', process.env.DB);
app.set('DB_PASS', process.env.DB_PASS);
app.set('PORT', process.env.PORT); //importing routes

//middlewares
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //routes

app.use('/billetera', _billetera["default"]);
app.use('/inicio_fleet', _inicio_fleet["default"]);
var _default = app;
exports["default"] = _default;