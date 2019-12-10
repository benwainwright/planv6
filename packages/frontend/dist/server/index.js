"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_webpack_1 = __importDefault(require("koa-webpack"));
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const server_1 = __importDefault(require("react-dom/server"));
const App_1 = require("../client/components/App");
const indexTemplate_1 = require("./indexTemplate");
const constants_1 = require("./constants");
const initialiseServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    router.get("/", (context) => __awaiter(void 0, void 0, void 0, function* () {
        context.redirect("/app");
    }));
    app.use(router.routes());
    app.use(koa_mount_1.default("/app", (context) => __awaiter(void 0, void 0, void 0, function* () {
        context.set("Content-Type", "text/html");
        const routerContext = {};
        const app = server_1.default.renderToString(React.createElement(react_router_dom_1.StaticRouter, { basename: "/app", location: context.url, context: routerContext },
            React.createElement(App_1.App, null)));
        const renderedPage = indexTemplate_1.indexFile.replace('<div id="root"></div>', `<div id="root">${app}</example>`);
        context.body = renderedPage;
    })));
    if (process.env.NODE_ENV !== constants_1.PRODUCTION_MODE_STRING) {
        const config = require("../../webpack/webpack.config.dev");
        const middleware = yield koa_webpack_1.default({ config });
        app.use(middleware);
    }
    else {
        app.use(koa_mount_1.default("/static", koa_static_1.default("./dist/assets/")));
    }
    app.use(router.routes());
    app.listen(80);
});
initialiseServer();
//# sourceMappingURL=index.js.map