import { j as jsxRuntime_reactServerExports } from "../assets/jsx-runtime.react-server-D_TucH4B.js";
import "../assets/react.react-server-DrDL52Ws.js";
function RootLayout({ children }) {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("title", { children: "Grant Custer" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("link", { rel: "icon", type: "image/png", href: "/images/sloth-favicon.png" }),
    children
  ] });
}
const getConfig = async () => {
  return {
    render: "static"
  };
};
export {
  RootLayout as default,
  getConfig
};
