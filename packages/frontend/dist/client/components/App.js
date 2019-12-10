"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("./Home");
const Other_1 = require("./Other");
exports.App = () => (React.createElement("div", null,
    React.createElement("nav", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.Link, { to: "/other" }, "Other")))),
    React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/other" },
            React.createElement(Other_1.Other, null)),
        React.createElement(react_router_dom_1.Route, { path: "/" },
            React.createElement(Home_1.Home, null)))));
//# sourceMappingURL=App.js.map