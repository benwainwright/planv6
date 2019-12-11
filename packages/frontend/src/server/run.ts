import { configureServer } from "./server";
import { DEFAULT_SERVER_PORT, PRODUCTION_MODE_STRING } from "./constants";

const run = async () => {
  const port = process.env.SERVER_PORT || DEFAULT_SERVER_PORT;

  const hmr = process.env.NODE_ENV !== PRODUCTION_MODE_STRING;

  const app = await configureServer(hmr);
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

run();
