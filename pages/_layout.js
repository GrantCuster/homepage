import { j as jsxRuntime_reactServerExports } from "../assets/jsx-runtime.react-server-D_TucH4B.js";
import "../assets/react.react-server-DrDL52Ws.js";
function RootLayout({ children }) {
  return /* @__PURE__ */ jsxRuntime_reactServerExports.jsxs(jsxRuntime_reactServerExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("title", { children: "Grant Custer" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:title", content: "Index - Grant Custer" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      "meta",
      {
        property: "og:description",
        content: "Designer and engineer focused on new and alternative interfaces."
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { property: "og:url", content: "http://grantcuster.com" }),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx(
      "meta",
      {
        property: "og:image",
        content: "http://grantcuster.com/images/constraint-systems.jpg"
      }
    ),
    /* @__PURE__ */ jsxRuntime_reactServerExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
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
