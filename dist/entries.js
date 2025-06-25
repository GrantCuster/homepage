import { r as requireReact_reactServer } from "./assets/react.react-server-DrDL52Ws.js";
import { INTERNAL_ServerRouter, ErrorBoundary } from "./assets/rsc2-88bccf4ec.js";
import { Children, Slot } from "./assets/rsc1-lib.js";
import "./assets/server.edge-7bA4OHDO.js";
import "./assets/server.edge-BZB9kVGY.js";
import "node:async_hooks";
var react_reactServerExports = requireReact_reactServer();
const setContextStorage = (storage) => {
  globalThis.__WAKU_MIDDLEWARE_CONTEXT_STORAGE__ ||= storage;
};
const getContextStorage = () => {
  return globalThis.__WAKU_MIDDLEWARE_CONTEXT_STORAGE__;
};
try {
  const { AsyncLocalStorage } = await import("node:async_hooks");
  setContextStorage(new AsyncLocalStorage());
} catch {
  console.warn("AsyncLocalStorage is not available");
}
let currentContext;
function getContext() {
  const contextStorage = getContextStorage();
  const context = contextStorage?.getStore() ?? currentContext;
  if (!context) {
    throw new Error("Context is not available. Make sure to use the context middleware. For now, Context is not available during the build time.");
  }
  return context;
}
const EXTENSIONS = [
  ".js",
  ".ts",
  ".tsx",
  ".jsx",
  ".mjs",
  ".cjs"
];
const joinPath = (...paths) => {
  const isAbsolute = paths[0]?.startsWith("/");
  const items = [].concat(...paths.map((path) => path.split("/")));
  let i = 0;
  while (i < items.length) {
    if (items[i] === "." || items[i] === "") {
      items.splice(i, 1);
    } else if (items[i] === "..") {
      if (i > 0) {
        items.splice(i - 1, 2);
        --i;
      } else {
        items.splice(i, 1);
      }
    } else {
      ++i;
    }
  }
  return (isAbsolute ? "/" : "") + items.join("/") || ".";
};
const parsePathWithSlug = (path) => path.split("/").filter(Boolean).map((name) => {
  let type = "literal";
  const isSlug = name.startsWith("[") && name.endsWith("]");
  if (isSlug) {
    type = "group";
    name = name.slice(1, -1);
  }
  const isWildcard = name.startsWith("...");
  if (isWildcard) {
    type = "wildcard";
    name = name.slice(3);
  }
  return {
    type,
    name
  };
});
const parseExactPath = (path) => path.split("/").filter(Boolean).map((name) => ({
  type: "literal",
  name
}));
const path2regexp = (path) => {
  const parts = path.map(({ type, name }) => {
    if (type === "literal") {
      return name;
    } else if (type === "group") {
      return `([^/]+)`;
    } else {
      return `(.*)`;
    }
  });
  return `^/${parts.join("/")}$`;
};
const pathSpecAsString = (path) => {
  return "/" + path.map(({ type, name }) => {
    if (type === "literal") {
      return name;
    } else if (type === "group") {
      return `[${name}]`;
    } else {
      return `[...${name}]`;
    }
  }).join("/");
};
const getPathMapping = (pathSpec, pathname) => {
  const actual = pathname.split("/").filter(Boolean);
  if (pathSpec.length > actual.length) {
    return null;
  }
  const mapping = {};
  let wildcardStartIndex = -1;
  for (let i = 0; i < pathSpec.length; i++) {
    const { type, name } = pathSpec[i];
    if (type === "literal") {
      if (name !== actual[i]) {
        return null;
      }
    } else if (type === "wildcard") {
      wildcardStartIndex = i;
      break;
    } else if (name) {
      mapping[name] = actual[i];
    }
  }
  if (wildcardStartIndex === -1) {
    if (pathSpec.length !== actual.length) {
      return null;
    }
    return mapping;
  }
  let wildcardEndIndex = -1;
  for (let i = 0; i < pathSpec.length; i++) {
    const { type, name } = pathSpec[pathSpec.length - i - 1];
    if (type === "literal") {
      if (name !== actual[actual.length - i - 1]) {
        return null;
      }
    } else if (type === "wildcard") {
      wildcardEndIndex = actual.length - i - 1;
      break;
    } else if (name) {
      mapping[name] = actual[actual.length - i - 1];
    }
  }
  if (wildcardStartIndex === -1 || wildcardEndIndex === -1) {
    throw new Error("Invalid wildcard path");
  }
  const wildcardName = pathSpec[wildcardStartIndex].name;
  if (wildcardName) {
    mapping[wildcardName] = actual.slice(wildcardStartIndex, wildcardEndIndex + 1);
  }
  return mapping;
};
async function unstable_setPlatformData(key, data, serializable) {
  const platformData = globalThis.__WAKU_SERVER_PLATFORM_DATA__ ||= {};
  platformData[key] = [
    data,
    serializable
  ];
}
async function unstable_getPlatformData(key) {
  const platformData = globalThis.__WAKU_SERVER_PLATFORM_DATA__ ||= {};
  const item = platformData[key];
  if (item) {
    return item[0];
  }
  const loader = globalThis.__WAKU_SERVER_PLATFORM_DATA_LOADER__;
  if (loader) {
    return loader(key);
  }
}
function unstable_getBuildOptions() {
  return globalThis.__WAKU_BUILD_OPTIONS__ ||= {};
}
function unstable_createAsyncIterable(create) {
  return {
    [Symbol.asyncIterator]: () => {
      let tasks;
      return {
        next: async () => {
          if (!tasks) {
            tasks = Array.from(await create());
          }
          const task = tasks.shift();
          if (task) {
            return {
              value: await task()
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
  };
}
function unstable_defineEntries(fns) {
  return fns;
}
const ROUTE_PREFIX = "R";
function encodeRoutePath(path) {
  if (!path.startsWith("/")) {
    throw new Error("Path must start with `/`: " + path);
  }
  if (path === "/") {
    return ROUTE_PREFIX + "/_root";
  }
  if (path.endsWith("/")) {
    throw new Error("Path must not end with `/`: " + path);
  }
  return ROUTE_PREFIX + path;
}
function decodeRoutePath(rscPath) {
  if (!rscPath.startsWith(ROUTE_PREFIX)) {
    throw new Error("rscPath should not start with `/`");
  }
  if (rscPath === ROUTE_PREFIX + "/_root") {
    return "/";
  }
  return rscPath.slice(ROUTE_PREFIX.length);
}
const ROUTE_ID = "ROUTE";
const IS_STATIC_ID = "IS_STATIC";
const HAS404_ID = "HAS404";
const SKIP_HEADER = "X-Waku-Router-Skip";
const stringToStream = (str) => {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(str));
      controller.close();
    }
  });
};
const isErrorInfo = (x) => {
  if (typeof x !== "object" || x === null) {
    return false;
  }
  if ("status" in x && typeof x.status !== "number") {
    return false;
  }
  if ("location" in x && typeof x.location !== "string") {
    return false;
  }
  return true;
};
const prefix = "__WAKU_CUSTOM_ERROR__;";
const getErrorInfo = (err) => {
  const digest = err?.digest;
  if (typeof digest !== "string" || !digest.startsWith(prefix)) {
    return null;
  }
  try {
    const info = JSON.parse(digest.slice(prefix.length));
    if (isErrorInfo(info)) {
      return info;
    }
  } catch {
  }
  return null;
};
const isStringArray = (x) => Array.isArray(x) && x.every((y) => typeof y === "string");
const parseRscParams = (rscParams) => {
  if (!(rscParams instanceof URLSearchParams)) {
    return {
      query: ""
    };
  }
  const query = rscParams.get("query") || "";
  return {
    query
  };
};
const RERENDER_SYMBOL = Symbol("RERENDER");
const setRerender = (rerender) => {
  try {
    const context = getContext();
    context[RERENDER_SYMBOL] = rerender;
  } catch {
  }
};
const pathSpec2pathname = (pathSpec) => {
  if (pathSpec.some(({ type }) => type !== "literal")) {
    return void 0;
  }
  return "/" + pathSpec.map(({ name }) => name).join("/");
};
const ROUTE_SLOT_ID_PREFIX = "route:";
function unstable_defineRouter(fns) {
  let cachedPathConfig;
  const getMyPathConfig = async () => {
    const pathConfig = await unstable_getPlatformData("defineRouterPathConfigs");
    if (pathConfig) {
      return pathConfig;
    }
    if (!cachedPathConfig) {
      cachedPathConfig = [
        ...Array.from(await fns.getRouteConfig()).map((item) => {
          const is404 = item.path.length === 1 && item.path[0].type === "literal" && item.path[0].name === "404";
          const isStatic = !!item.rootElement.isStatic && !!item.routeElement.isStatic && Object.values(item.elements).every((x) => x.isStatic);
          return {
            pathSpec: item.path,
            pathname: pathSpec2pathname(item.path),
            pattern: path2regexp(item.pathPattern || item.path),
            specs: {
              ...item.rootElement.isStatic ? {
                rootElementIsStatic: true
              } : {},
              ...item.routeElement.isStatic ? {
                routeElementIsStatic: true
              } : {},
              staticElementIds: Object.entries(item.elements).flatMap(([id, { isStatic: isStatic2 }]) => isStatic2 ? [
                id
              ] : []),
              ...isStatic ? {
                isStatic: true
              } : {},
              ...is404 ? {
                is404: true
              } : {},
              ...item.noSsr ? {
                noSsr: true
              } : {}
            }
          };
        }),
        ...Array.from(await fns.getApiConfig?.() || []).map((item) => {
          return {
            pathSpec: item.path,
            pathname: pathSpec2pathname(item.path),
            pattern: path2regexp(item.path),
            specs: {
              ...item.isStatic ? {
                isStatic: true
              } : {},
              isApi: true
            }
          };
        })
      ];
    }
    return cachedPathConfig;
  };
  const getPathConfigItem = async (pathname) => {
    const pathConfig = await getMyPathConfig();
    const found = pathConfig.find(({ pathSpec }) => getPathMapping(pathSpec, pathname));
    return found;
  };
  const has404 = async () => {
    const pathConfig = await getMyPathConfig();
    return pathConfig.some(({ specs: { is404 } }) => is404);
  };
  const getEntries = async (rscPath, rscParams, headers) => {
    const pathname = decodeRoutePath(rscPath);
    const pathConfigItem = await getPathConfigItem(pathname);
    if (!pathConfigItem) {
      return null;
    }
    let skipParam;
    try {
      skipParam = JSON.parse(headers[SKIP_HEADER.toLowerCase()] || "");
    } catch {
    }
    const skipIdSet = new Set(isStringArray(skipParam) ? skipParam : []);
    const { query } = parseRscParams(rscParams);
    const { rootElement, routeElement, elements } = await fns.handleRoute(pathname, pathConfigItem.specs.isStatic ? {} : {
      query
    });
    if (Object.keys(elements).some((id) => id.startsWith(ROUTE_SLOT_ID_PREFIX))) {
      throw new Error('Element ID cannot start with "route:"');
    }
    const entries2 = {
      ...elements
    };
    for (const id of pathConfigItem.specs.staticElementIds || []) {
      if (skipIdSet.has(id)) {
        delete entries2[id];
      }
    }
    if (!pathConfigItem.specs.rootElementIsStatic || !skipIdSet.has("root")) {
      entries2.root = rootElement;
    }
    const decodedPathname = decodeURIComponent(pathname);
    const routeId = ROUTE_SLOT_ID_PREFIX + decodedPathname;
    if (!pathConfigItem.specs.routeElementIsStatic || !skipIdSet.has(routeId)) {
      entries2[routeId] = routeElement;
    }
    entries2[ROUTE_ID] = [
      decodedPathname,
      query
    ];
    entries2[IS_STATIC_ID] = !!pathConfigItem.specs.isStatic;
    if (await has404()) {
      entries2[HAS404_ID] = true;
    }
    return entries2;
  };
  const handleRequest = async (input, { renderRsc, renderHtml }) => {
    if (input.type === "component") {
      const entries2 = await getEntries(input.rscPath, input.rscParams, input.req.headers);
      if (!entries2) {
        return null;
      }
      return renderRsc(entries2);
    }
    if (input.type === "function") {
      let elementsPromise = Promise.resolve({});
      let rendered = false;
      const rerender = async (rscPath, rscParams) => {
        if (rendered) {
          throw new Error("already rendered");
        }
        elementsPromise = Promise.all([
          elementsPromise,
          getEntries(rscPath, rscParams, input.req.headers)
        ]).then(([oldElements, newElements]) => {
          if (newElements === null) {
            console.warn("getEntries returned null");
          }
          return {
            ...oldElements,
            ...newElements
          };
        });
      };
      setRerender(rerender);
      const value = await input.fn(...input.args);
      rendered = true;
      return renderRsc({
        ...await elementsPromise,
        _value: value
      });
    }
    const pathConfigItem = await getPathConfigItem(input.pathname);
    if (pathConfigItem?.specs?.isApi && fns.handleApi) {
      return fns.handleApi(input.pathname, {
        url: input.req.url,
        body: input.req.body,
        headers: input.req.headers,
        method: input.req.method
      });
    }
    if (input.type === "action" || input.type === "custom") {
      const renderIt = async (pathname, query2) => {
        const rscPath = encodeRoutePath(pathname);
        const rscParams = new URLSearchParams({
          query: query2
        });
        const entries2 = await getEntries(rscPath, rscParams, input.req.headers);
        if (!entries2) {
          return null;
        }
        const html = react_reactServerExports.createElement(INTERNAL_ServerRouter, {
          route: {
            path: pathname,
            query: query2,
            hash: ""
          }
        });
        const actionResult = input.type === "action" ? await input.fn() : void 0;
        return renderHtml(entries2, html, {
          rscPath,
          actionResult
        });
      };
      const query = input.req.url.searchParams.toString();
      if (pathConfigItem?.specs?.noSsr) {
        return null;
      }
      try {
        if (pathConfigItem) {
          return await renderIt(input.pathname, query);
        }
      } catch (e) {
        const info = getErrorInfo(e);
        if (info?.status !== 404) {
          throw e;
        }
      }
      if (await has404()) {
        return {
          ...await renderIt("/404", ""),
          status: 404
        };
      } else {
        return null;
      }
    }
  };
  const handleBuild = ({ renderRsc, renderHtml, rscPath2pathname, unstable_generatePrefetchCode, unstable_collectClientModules }) => unstable_createAsyncIterable(async () => {
    const tasks = [];
    const pathConfig = await getMyPathConfig();
    for (const { pathname, specs } of pathConfig) {
      const { handleApi } = fns;
      if (pathname && specs.isStatic && specs.isApi && handleApi) {
        tasks.push(async () => ({
          type: "file",
          pathname,
          body: handleApi(pathname, {
            url: new URL(pathname, "http://localhost:3000"),
            body: null,
            headers: {},
            method: "GET"
          }).then(({ body }) => body || stringToStream(""))
        }));
      }
    }
    const path2moduleIds = {};
    const moduleIdsForPrefetch = /* @__PURE__ */ new WeakMap();
    const entriesCache = /* @__PURE__ */ new Map();
    await Promise.all(pathConfig.map(async ({ pathSpec, pathname, pattern, specs }) => {
      if (specs.isApi) {
        return;
      }
      const moduleIds = /* @__PURE__ */ new Set();
      moduleIdsForPrefetch.set(pathSpec, moduleIds);
      if (!pathname) {
        return;
      }
      const rscPath = encodeRoutePath(pathname);
      const entries2 = await getEntries(rscPath, void 0, {});
      if (entries2) {
        entriesCache.set(pathname, entries2);
        path2moduleIds[pattern] = await unstable_collectClientModules(entries2);
        if (specs.isStatic) {
          tasks.push(async () => ({
            type: "file",
            pathname: rscPath2pathname(rscPath),
            body: renderRsc(entries2, {
              moduleIdCallback: (id) => moduleIds.add(id)
            })
          }));
        }
      }
    }));
    const getRouterPrefetchCode = () => `
globalThis.__WAKU_ROUTER_PREFETCH__ = (path) => {
  const path2ids = ${JSON.stringify(path2moduleIds)};
  const pattern = Object.keys(path2ids).find((key) => new RegExp(key).test(path));
  if (pattern && path2ids[pattern]) {
    for (const id of path2ids[pattern] || []) {
      import(id);
    }
  }
};`;
    for (const { pathSpec, pathname, specs } of pathConfig) {
      if (specs.isApi) {
        continue;
      }
      tasks.push(async () => {
        const moduleIds = moduleIdsForPrefetch.get(pathSpec);
        if (pathname) {
          const rscPath = encodeRoutePath(pathname);
          const code2 = unstable_generatePrefetchCode([
            rscPath
          ], moduleIds) + getRouterPrefetchCode() + (specs.is404 ? "globalThis.__WAKU_ROUTER_404__ = true;" : "");
          const entries2 = entriesCache.get(pathname);
          if (specs.isStatic && entries2) {
            const html = react_reactServerExports.createElement(INTERNAL_ServerRouter, {
              route: {
                path: pathname,
                query: "",
                hash: ""
              }
            });
            return {
              type: "file",
              pathname,
              body: renderHtml(entries2, html, {
                rscPath,
                htmlHead: `<script type="module" async>${code2}<\/script>`
              }).then(({ body }) => body)
            };
          }
        }
        const code = unstable_generatePrefetchCode([], moduleIds) + getRouterPrefetchCode() + (specs.is404 ? "globalThis.__WAKU_ROUTER_404__ = true;" : "");
        return {
          type: "htmlHead",
          pathSpec,
          head: `<script type="module" async>${code}<\/script>`
        };
      });
    }
    await unstable_setPlatformData("defineRouterPathConfigs", pathConfig, true);
    return tasks;
  });
  return unstable_defineEntries({
    handleRequest,
    handleBuild
  });
}
const __vite_import_meta_env__$1 = {};
const getGrouplessPath = (path) => {
  if (!__vite_import_meta_env__$1?.VITE_EXPERIMENTAL_WAKU_ROUTER) {
    return path;
  }
  if (path.includes("(")) {
    const withoutGroups = path.split("/").filter((part) => !part.startsWith("("));
    path = withoutGroups.length > 1 ? withoutGroups.join("/") : "/";
  }
  return path;
};
const METHODS = [
  "GET",
  "HEAD",
  "POST",
  "PUT",
  "DELETE",
  "CONNECT",
  "OPTIONS",
  "TRACE",
  "PATCH"
];
const sanitizeSlug = (slug) => slug.replace(/\./g, "").replace(/ /g, "-");
const DefaultRoot = ({ children }) => react_reactServerExports.createElement(ErrorBoundary, null, react_reactServerExports.createElement("html", null, react_reactServerExports.createElement("head", null), react_reactServerExports.createElement("body", null, children)));
const createNestedElements = (elements) => {
  return elements.reduceRight((result, element) => react_reactServerExports.createElement(element.component, element.props, result), null);
};
const createPages = (fn) => {
  let configured = false;
  const groupPathLookup = /* @__PURE__ */ new Map();
  const staticPathMap = /* @__PURE__ */ new Map();
  const dynamicPagePathMap = /* @__PURE__ */ new Map();
  const wildcardPagePathMap = /* @__PURE__ */ new Map();
  const dynamicLayoutPathMap = /* @__PURE__ */ new Map();
  const apiPathMap = /* @__PURE__ */ new Map();
  const staticComponentMap = /* @__PURE__ */ new Map();
  let rootItem = void 0;
  const noSsrSet = /* @__PURE__ */ new WeakSet();
  const getPageRoutePath = (path) => {
    if (staticComponentMap.has(joinPath(path, "page").slice(1))) {
      return path;
    }
    const allPaths = [
      ...dynamicPagePathMap.keys(),
      ...wildcardPagePathMap.keys()
    ];
    for (const p of allPaths) {
      if (getPathMapping(parsePathWithSlug(p), path)) {
        return p;
      }
    }
  };
  const getApiRoutePath = (path, method) => {
    for (const [p, v] of apiPathMap.entries()) {
      if (method in v.handlers && getPathMapping(parsePathWithSlug(p), path)) {
        return p;
      }
    }
  };
  const pagePathExists = (path) => {
    for (const pathKey of apiPathMap.keys()) {
      const [_m, p] = pathKey.split(" ");
      if (p === path) {
        return true;
      }
    }
    return staticPathMap.has(path) || dynamicPagePathMap.has(path) || wildcardPagePathMap.has(path);
  };
  const getOriginalStaticPathSpec = (path) => {
    const staticPathSpec = staticPathMap.get(path);
    if (staticPathSpec) {
      return staticPathSpec.originalSpec ?? staticPathSpec.literalSpec;
    }
  };
  const registerStaticComponent = (id, component) => {
    if (staticComponentMap.has(id) && staticComponentMap.get(id) !== component) {
      throw new Error(`Duplicated component for: ${id}`);
    }
    staticComponentMap.set(id, component);
  };
  const createPage = (page) => {
    if (configured) {
      throw new Error("createPage no longer available");
    }
    if (pagePathExists(page.path)) {
      throw new Error(`Duplicated path: ${page.path}`);
    }
    const pathSpec = parsePathWithSlug(page.path);
    if (page.unstable_disableSSR) {
      noSsrSet.add(pathSpec);
    }
    const { numSlugs, numWildcards } = (() => {
      let numSlugs2 = 0;
      let numWildcards2 = 0;
      for (const slug of pathSpec) {
        if (slug.type !== "literal") {
          numSlugs2++;
        }
        if (slug.type === "wildcard") {
          numWildcards2++;
        }
      }
      return {
        numSlugs: numSlugs2,
        numWildcards: numWildcards2
      };
    })();
    if (page.exactPath) {
      const spec = parseExactPath(page.path);
      if (page.render === "static") {
        staticPathMap.set(page.path, {
          literalSpec: spec
        });
        const id = joinPath(page.path, "page").replace(/^\//, "");
        registerStaticComponent(id, page.component);
      } else {
        dynamicPagePathMap.set(page.path, [
          spec,
          page.component
        ]);
      }
    } else if (page.render === "static" && numSlugs === 0) {
      const pagePath = getGrouplessPath(page.path);
      staticPathMap.set(pagePath, {
        literalSpec: pathSpec
      });
      const id = joinPath(pagePath, "page").replace(/^\//, "");
      if (pagePath !== page.path) {
        groupPathLookup.set(pagePath, page.path);
      }
      registerStaticComponent(id, page.component);
    } else if (page.render === "static" && numSlugs > 0 && "staticPaths" in page) {
      const staticPaths = page.staticPaths.map((item) => (Array.isArray(item) ? item : [
        item
      ]).map(sanitizeSlug));
      for (const staticPath of staticPaths) {
        if (staticPath.length !== numSlugs && numWildcards === 0) {
          throw new Error("staticPaths does not match with slug pattern");
        }
        const mapping = {};
        let slugIndex = 0;
        const pathItems = [];
        pathSpec.forEach(({ type, name }) => {
          switch (type) {
            case "literal":
              pathItems.push(name);
              break;
            case "wildcard":
              mapping[name] = staticPath.slice(slugIndex);
              staticPath.slice(slugIndex++).forEach((slug) => {
                pathItems.push(slug);
              });
              break;
            case "group":
              pathItems.push(staticPath[slugIndex++]);
              mapping[name] = pathItems[pathItems.length - 1];
              break;
          }
        });
        const definedPath = "/" + pathItems.join("/");
        const pagePath = getGrouplessPath(definedPath);
        staticPathMap.set(pagePath, {
          literalSpec: pathItems.map((name) => ({
            type: "literal",
            name
          })),
          originalSpec: pathSpec
        });
        if (pagePath !== definedPath) {
          groupPathLookup.set(pagePath, definedPath);
        }
        const id = joinPath(...pathItems, "page");
        const WrappedComponent = (props) => react_reactServerExports.createElement(page.component, {
          ...props,
          ...mapping
        });
        registerStaticComponent(id, WrappedComponent);
      }
    } else if (page.render === "dynamic" && numWildcards === 0) {
      const pagePath = getGrouplessPath(page.path);
      if (pagePath !== page.path) {
        groupPathLookup.set(pagePath, page.path);
      }
      dynamicPagePathMap.set(pagePath, [
        pathSpec,
        page.component
      ]);
    } else if (page.render === "dynamic" && numWildcards === 1) {
      const pagePath = getGrouplessPath(page.path);
      if (pagePath !== page.path) {
        groupPathLookup.set(pagePath, page.path);
      }
      wildcardPagePathMap.set(pagePath, [
        pathSpec,
        page.component
      ]);
    } else {
      throw new Error("Invalid page configuration");
    }
    return page;
  };
  const createLayout = (layout) => {
    if (configured) {
      throw new Error("createLayout no longer available");
    }
    if (layout.render === "static") {
      const id = joinPath(layout.path, "layout").replace(/^\//, "");
      registerStaticComponent(id, layout.component);
    } else if (layout.render === "dynamic") {
      if (dynamicLayoutPathMap.has(layout.path)) {
        throw new Error(`Duplicated dynamic path: ${layout.path}`);
      }
      const pathSpec = parsePathWithSlug(layout.path);
      dynamicLayoutPathMap.set(layout.path, [
        pathSpec,
        layout.component
      ]);
    } else {
      throw new Error("Invalid layout configuration");
    }
  };
  const createApi = (options) => {
    {
      console.warn("createApi is still experimental");
      return;
    }
  };
  const createRoot = (root) => {
    if (configured) {
      throw new Error("createRoot no longer available");
    }
    if (rootItem) {
      throw new Error(`Duplicated root component`);
    }
    if (root.render === "static" || root.render === "dynamic") {
      rootItem = root;
    } else {
      throw new Error("Invalid root configuration");
    }
  };
  let ready;
  const configure = async () => {
    if (!configured && !ready) {
      ready = fn({
        createPage,
        createLayout,
        createRoot,
        createApi
      });
      await ready;
      configured = true;
    }
    await ready;
  };
  const getLayouts = (spec) => {
    const pathSegments = spec.reduce((acc, _segment, index) => {
      acc.push(pathSpecAsString(spec.slice(0, index + 1)));
      return acc;
    }, [
      "/"
    ]);
    return pathSegments.filter((segment) => dynamicLayoutPathMap.has(segment) || staticComponentMap.has(joinPath(segment, "layout").slice(1)));
  };
  const definedRouter = unstable_defineRouter({
    getRouteConfig: async () => {
      await configure();
      const paths = [];
      const rootIsStatic = !rootItem || rootItem.render === "static";
      for (const [path, { literalSpec, originalSpec }] of staticPathMap) {
        const noSsr = noSsrSet.has(literalSpec);
        const layoutPaths = getLayouts(originalSpec ?? literalSpec);
        const elements = {
          ...layoutPaths.reduce((acc, lPath) => {
            acc[`layout:${lPath}`] = {
              isStatic: !dynamicLayoutPathMap.has(lPath)
            };
            return acc;
          }, {}),
          [`page:${path}`]: {
            isStatic: staticPathMap.has(path)
          }
        };
        paths.push({
          path: literalSpec.filter((part) => !part.name?.startsWith("(")),
          ...originalSpec && {
            pathPattern: originalSpec
          },
          rootElement: {
            isStatic: rootIsStatic
          },
          routeElement: {
            isStatic: true
          },
          elements,
          noSsr
        });
      }
      for (const [path, [pathSpec]] of dynamicPagePathMap) {
        const noSsr = noSsrSet.has(pathSpec);
        const layoutPaths = getLayouts(pathSpec);
        const elements = {
          ...layoutPaths.reduce((acc, lPath) => {
            acc[`layout:${lPath}`] = {
              isStatic: !dynamicLayoutPathMap.has(lPath)
            };
            return acc;
          }, {}),
          [`page:${path}`]: {
            isStatic: false
          }
        };
        paths.push({
          path: pathSpec.filter((part) => !part.name?.startsWith("(")),
          rootElement: {
            isStatic: rootIsStatic
          },
          routeElement: {
            isStatic: true
          },
          elements,
          noSsr
        });
      }
      for (const [path, [pathSpec]] of wildcardPagePathMap) {
        const noSsr = noSsrSet.has(pathSpec);
        const layoutPaths = getLayouts(pathSpec);
        const elements = {
          ...layoutPaths.reduce((acc, lPath) => {
            acc[`layout:${lPath}`] = {
              isStatic: !dynamicLayoutPathMap.has(lPath)
            };
            return acc;
          }, {}),
          [`page:${path}`]: {
            isStatic: false
          }
        };
        paths.push({
          path: pathSpec.filter((part) => !part.name?.startsWith("(")),
          rootElement: {
            isStatic: rootIsStatic
          },
          routeElement: {
            isStatic: true
          },
          elements,
          noSsr
        });
      }
      return paths;
    },
    handleRoute: async (path, { query }) => {
      await configure();
      const routePath = getPageRoutePath(path);
      if (!routePath) {
        throw new Error("Route not found: " + path);
      }
      const pageComponent = staticComponentMap.get(joinPath(routePath, "page").slice(1)) ?? dynamicPagePathMap.get(routePath)?.[1] ?? wildcardPagePathMap.get(routePath)?.[1];
      if (!pageComponent) {
        throw new Error("Page not found: " + path);
      }
      const layoutMatchPath = groupPathLookup.get(routePath) ?? routePath;
      const pathSpec = parsePathWithSlug(layoutMatchPath);
      const mapping = getPathMapping(pathSpec, path);
      const result = {
        [`page:${routePath}`]: react_reactServerExports.createElement(pageComponent, {
          ...mapping,
          ...query ? {
            query
          } : {},
          path
        }, react_reactServerExports.createElement(Children))
      };
      const layoutPaths = getLayouts(getOriginalStaticPathSpec(path) ?? pathSpec);
      for (const segment of layoutPaths) {
        const layout = dynamicLayoutPathMap.get(segment)?.[1] ?? staticComponentMap.get(joinPath(segment, "layout").slice(1));
        const isDynamic = dynamicLayoutPathMap.has(segment);
        if (layout) {
          const id = "layout:" + segment;
          result[id] = react_reactServerExports.createElement(layout, isDynamic ? {
            path
          } : null, react_reactServerExports.createElement(Children));
        }
      }
      const routeChildren = [
        ...layoutPaths.map((lPath) => ({
          component: Slot,
          props: {
            id: `layout:${lPath}`
          }
        })),
        {
          component: Slot,
          props: {
            id: `page:${routePath}`
          }
        }
      ];
      return {
        elements: result,
        rootElement: react_reactServerExports.createElement(rootItem ? rootItem.component : DefaultRoot, null, react_reactServerExports.createElement(Children)),
        routeElement: createNestedElements(routeChildren)
      };
    },
    getApiConfig: async () => {
      await configure();
      return Array.from(apiPathMap.values()).map(({ pathSpec, render }) => {
        return {
          path: pathSpec,
          isStatic: render === "static"
        };
      });
    },
    handleApi: async (path, { url, ...options }) => {
      await configure();
      const routePath = getApiRoutePath(path, options.method);
      if (!routePath) {
        throw new Error("API Route not found: " + path);
      }
      const { handlers } = apiPathMap.get(routePath);
      const req = new Request(url, options);
      const handler = handlers[options.method];
      if (!handler) {
        throw new Error("API method not found: " + options.method + "for path: " + path);
      }
      const res = await handler(req);
      return {
        ...res.body ? {
          body: res.body
        } : {},
        headers: Object.fromEntries(res.headers.entries()),
        status: res.status
      };
    }
  });
  return definedRouter;
};
const IGNORED_PATH_PARTS = /* @__PURE__ */ new Set([
  "_components",
  "_hooks"
]);
const isIgnoredPath = (paths) => paths.some((p) => IGNORED_PATH_PARTS.has(p));
const __vite_import_meta_env__ = {};
const DO_NOT_BUNDLE = "";
function unstable_fsRouter(importMetaUrl, loadPage, options) {
  const buildOptions = unstable_getBuildOptions();
  return createPages(async ({ createPage, createLayout, createRoot, createApi }) => {
    let files = await unstable_getPlatformData("fsRouterFiles");
    if (!files) {
      if (__vite_import_meta_env__ && true && !buildOptions.unstable_phase) {
        throw new Error("files must be set in production.");
      }
      const [{ readdir }, { join, dirname, extname, sep }, { fileURLToPath }] = await Promise.all([
        import(
          /* @vite-ignore */
          DO_NOT_BUNDLE + "node:fs/promises"
        ),
        import(
          /* @vite-ignore */
          DO_NOT_BUNDLE + "node:path"
        ),
        import(
          /* @vite-ignore */
          DO_NOT_BUNDLE + "node:url"
        )
      ]);
      const pagesDir = join(dirname(fileURLToPath(importMetaUrl)), options.pagesDir);
      files = await readdir(pagesDir, {
        encoding: "utf8",
        recursive: true
      });
      files = files.flatMap((file) => {
        const myExt = extname(file);
        const myExtIndex = EXTENSIONS.indexOf(myExt);
        if (myExtIndex === -1) {
          return [];
        }
        file = file.replace(/(?<=^|\/|\\)_([^/]+)_(?=\/|\\|\.)/g, "[$1]");
        file = sep === "/" ? file : file.replace(/\\/g, "/");
        const exts = [
          myExt,
          ...EXTENSIONS
        ];
        exts.splice(myExtIndex + 1, 1);
        for (const ext of exts) {
          const f = file.slice(0, -myExt.length) + ext;
          if (loadPage(f)) {
            return [
              f
            ];
          }
        }
        throw new Error("Failed to resolve " + file);
      });
    }
    if (buildOptions.unstable_phase) {
      await unstable_setPlatformData("fsRouterFiles", files, true);
    }
    for (const file of files) {
      const mod = await loadPage(file);
      const config = await mod.getConfig?.();
      const pathItems = file.replace(/\.\w+$/, "").split("/").filter(Boolean);
      if (isIgnoredPath(pathItems)) {
        continue;
      }
      const path = "/" + ([
        "_layout",
        "index",
        "_root"
      ].includes(pathItems.at(-1)) ? pathItems.slice(0, -1) : pathItems).join("/");
      if (pathItems.at(-1) === "[path]") {
        throw new Error("Page file cannot be named [path]. This will conflict with the path prop of the page component.");
      } else if (pathItems.at(0) === options.apiDir) {
        if (config?.render === "static") {
          if (Object.keys(mod).length !== 2 || !mod.GET) {
            console.warn(`API ${path} is invalid. For static API routes, only a single GET handler is supported.`);
          }
          createApi({
            path: pathItems.join("/"),
            render: "static",
            method: "GET",
            handler: mod.GET
          });
        } else {
          const validMethods = new Set(METHODS);
          const handlers = Object.fromEntries(Object.entries(mod).filter(([exportName]) => {
            const isValidExport = exportName === "getConfig" || validMethods.has(exportName);
            if (!isValidExport) {
              console.warn(`API ${path} has an invalid export: ${exportName}. Valid exports are: ${METHODS.join(", ")}`);
            }
            return isValidExport && exportName !== "getConfig";
          }));
          createApi({
            path: pathItems.join("/"),
            render: "dynamic",
            handlers
          });
        }
      } else if (pathItems.at(-1) === "_layout") {
        createLayout({
          path,
          component: mod.default,
          render: "static",
          ...config
        });
      } else if (pathItems.at(-1) === "_root") {
        createRoot({
          component: mod.default,
          render: "static",
          ...config
        });
      } else {
        createPage({
          path,
          component: mod.default,
          render: "dynamic",
          ...config
        });
      }
    }
    return null;
  });
}
const entries = unstable_fsRouter(
  "file:///home/grant/dev/grantcuster-com/src/entries.js",
  (file) => /* @__PURE__ */ Object.assign({ "/src/pages/_layout.tsx": () => import("./pages/_layout.js"), "/src/pages/index.tsx": () => import("./pages/index.js") })[`/src/pages/${file}`]?.(),
  { pagesDir: "pages", apiDir: "api" }
);
const configPrd = {
  basePath: "/",
  rscBase: "RSC"
};
function loadModule(id) {
  switch (id) {
    case "rsdw-server":
      return import("./rsdw-server.js");
    case "client/rd-server":
      return import("./ssr/rd-server.js");
    case "client/rsdw-client":
      return import("./ssr/rsdw-client.js");
    case "client/waku-minimal-client":
      return import("./ssr/waku-minimal-client.js");
    case "ssr/assets/rsc0-lib.js":
      return import("./ssr/assets/rsc0-lib.js");
    case "ssr/assets/rsc1-lib.js":
      return import("./ssr/assets/rsc1-lib.js");
    case "ssr/assets/rsc2-88bccf4ec.js":
      return import("./ssr/assets/rsc2-88bccf4ec.js");
    case "ssr/assets/rsc3-4b06e2ad8.js":
      return import("./ssr/assets/rsc3-4b06e2ad8.js");
    default:
      throw new Error("Cannot find module: " + id);
  }
}
globalThis.__WAKU_SERVER_IMPORT__ = loadModule;
globalThis.__WAKU_CLIENT_IMPORT__ = (id) => loadModule("ssr/" + id);
const dynamicHtmlPaths = [];
const publicIndexHtml = "\n<!doctype html>\n<html>\n  <head>\n    <script type=\"module\" async>\nglobalThis.__WAKU_CLIENT_IMPORT__ = (id) => import(id);\n</script>\n\n    <script async type=\"module\" crossorigin src=\"/assets/indexHtml-yqTQt-QG.js\"></script>\n    <link rel=\"modulepreload\" crossorigin href=\"/assets/client-gX9D-yfm.js\">\n    <link rel=\"modulepreload\" crossorigin href=\"/assets/client-285T95rR.js\">\n    <link rel=\"modulepreload\" crossorigin href=\"/assets/rsc2-88bccf4ec.js\">\n    <link rel=\"stylesheet\" href=\"/assets/_layout-CLPifLU2.css\">\n  </head>\n  <body>\n  </body>\n</html>\n";
const loadPlatformData = 
(key) => {
  switch (key) {
    case 'fsRouterFiles': return import('./platform-data/fsRouterFiles.js').then((m) => m.default);
case 'defineRouterPathConfigs': return import('./platform-data/defineRouterPathConfigs.js').then((m) => m.default);
    default: throw new Error('Cannot find platform data: ' + key);
  }
}
;
const loadConfig = async () => ({});
export {
  configPrd,
  entries as default,
  dynamicHtmlPaths,
  loadConfig,
  loadModule,
  loadPlatformData,
  publicIndexHtml
};
