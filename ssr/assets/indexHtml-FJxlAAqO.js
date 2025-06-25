import { r as reactExports } from "./rsc1-lib.js";
import { c as clientExports } from "./client-DM0IEqUR.js";
import { Router } from "./rsc2-88bccf4ec.js";
import "./index-TS6MFGZj.js";
import "util";
const rootElement = reactExports.createElement(reactExports.StrictMode, null, reactExports.createElement(Router));
if (globalThis.__WAKU_HYDRATE__) {
  clientExports.hydrateRoot(document, rootElement);
} else {
  clientExports.createRoot(document).render(rootElement);
}
