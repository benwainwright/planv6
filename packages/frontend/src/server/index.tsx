import Koa from "koa";
import Router from "koa-router";
import KoaStatic from "koa-static";
import mount from "koa-mount";
import koaWebpack from "koa-webpack";
import * as React from "react";
import { StaticRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import webpack from "webpack";

import { App } from "../client/components/App";
import { indexFile } from "./indexTemplate";
import { PRODUCTION_MODE_STRING } from "./constants";

const initialiseServer = async () => {
  const app = new Koa();
  const router = new Router();

  router.get("/", async (context: Koa.BaseContext) => {
    context.redirect("/app");
  });

  app.use(router.routes());

  app.use(
    mount("/app", async (context: Koa.BaseContext) => {
      context.set("Content-Type", "text/html");

      const routerContext: {} = {};
      const app = ReactDOMServer.renderToString(
        <StaticRouter
          basename="/app"
          location={context.url}
          context={routerContext}
        >
          <App />
        </StaticRouter>
      );

      const renderedPage = indexFile.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</example>`
      );

      context.body = renderedPage;
    })
  );
  if (process.env.NODE_ENV !== PRODUCTION_MODE_STRING) {
    const config: webpack.Configuration = require("../../webpack/webpack.config.dev");
    const middleware = await koaWebpack({ config });
    app.use(middleware);
  } else {
    app.use(mount("/static", KoaStatic("./dist/assets/")));
  }

  app.use(router.routes());
  app.listen(80);
};

initialiseServer();
