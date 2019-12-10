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
const ReactDOM = __importStar(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./components/App");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, { basename: "/app" },
    React.createElement(App_1.App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map