"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.reactCdnPath = process.env.NODE_ENV === constants_1.PRODUCTION_MODE_STRING
    ? "https://unpkg.com/react@16/umd/react.production.min.js"
    : "https://unpkg.com/react@16/umd/react.development.js";
exports.reactDomCdnPath = process.env.NODE_ENV === constants_1.PRODUCTION_MODE_STRING
    ? "https://unpkg.com/react-dom@16/umd/react-dom.production.js"
    : "https://unpkg.com/react-dom@16/umd/react-dom.development.js";
exports.indexFile = `
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <title>Hello React!</title>
</head>

<body>
  <div id="root"></div>
  <script src="${exports.reactCdnPath}" type="text/javascript"></script>
  <script src="${exports.reactDomCdnPath}" type="text/javascript"></script>
  <script src="./assets/main.js" type="text/javascript">
</script>
</body>
</html>

`;
//# sourceMappingURL=indexTemplate.js.map