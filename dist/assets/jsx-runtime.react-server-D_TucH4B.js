import { r as requireReact_reactServer } from "./react.react-server-DrDL52Ws.js";
var jsxRuntime_reactServer = { exports: {} };
var reactJsxRuntime_reactServer_production = {};
/**
 * @license React
 * react-jsx-runtime.react-server.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_reactServer_production;
function requireReactJsxRuntime_reactServer_production() {
  if (hasRequiredReactJsxRuntime_reactServer_production) return reactJsxRuntime_reactServer_production;
  hasRequiredReactJsxRuntime_reactServer_production = 1;
  var React = requireReact_reactServer(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
  if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)
    throw Error(
      'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.'
    );
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config)
        "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type,
      key,
      ref: void 0 !== config ? config : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_reactServer_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_reactServer_production.jsx = jsxProd;
  reactJsxRuntime_reactServer_production.jsxDEV = void 0;
  reactJsxRuntime_reactServer_production.jsxs = jsxProd;
  return reactJsxRuntime_reactServer_production;
}
var hasRequiredJsxRuntime_reactServer;
function requireJsxRuntime_reactServer() {
  if (hasRequiredJsxRuntime_reactServer) return jsxRuntime_reactServer.exports;
  hasRequiredJsxRuntime_reactServer = 1;
  {
    jsxRuntime_reactServer.exports = requireReactJsxRuntime_reactServer_production();
  }
  return jsxRuntime_reactServer.exports;
}
var jsxRuntime_reactServerExports = requireJsxRuntime_reactServer();
export {
  jsxRuntime_reactServerExports as j
};
