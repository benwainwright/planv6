import { PRODUCTION_MODE_STRING } from "./constants";
export const reactCdnPath =
  process.env.NODE_ENV === PRODUCTION_MODE_STRING
    ? "https://unpkg.com/react@16/umd/react.production.min.js"
    : "https://unpkg.com/react@16/umd/react.development.js";

export const reactDomCdnPath =
  process.env.NODE_ENV === PRODUCTION_MODE_STRING
    ? "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
    : "https://unpkg.com/react-dom@16/umd/react-dom.development.js";

export const indexFile = `
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>Hello React!</title>
</head>

<body>
  <div id="root"></div>
  <script src="${reactCdnPath}" type="text/javascript"></script>
  <script src="${reactDomCdnPath}" type="text/javascript"></script>
  <script src="/assets/main.js" type="text/javascript">
</script>
</body>
</html>

`;
