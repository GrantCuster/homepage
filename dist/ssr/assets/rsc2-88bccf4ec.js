import { r as reactExports, Root, useRefetch, prefetchRsc, Slot, ThrowError_UNSTABLE, g as getErrorInfo, useResetError_UNSTABLE } from "./rsc1-lib.js";
import "./index-TS6MFGZj.js";
import "util";
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
const ROUTE_ID = "ROUTE";
const IS_STATIC_ID = "IS_STATIC";
const HAS404_ID = "HAS404";
const SKIP_HEADER = "X-Waku-Router-Skip";
const normalizeRoutePath = (path) => {
  for (const suffix of [
    "/",
    "/index.html"
  ]) {
    if (path.endsWith(suffix)) {
      return path.slice(0, -suffix.length) || "/";
    }
  }
  return path;
};
const parseRoute = (url) => {
  const { pathname, searchParams, hash } = url;
  return {
    path: normalizeRoutePath(pathname),
    query: searchParams.toString(),
    hash
  };
};
const parseRouteFromLocation = () => {
  if (globalThis.__WAKU_ROUTER_404__) {
    return {
      path: "/404",
      query: "",
      hash: ""
    };
  }
  return parseRoute(new URL(window.location.href));
};
let savedRscParams;
const createRscParams = (query) => {
  if (savedRscParams && savedRscParams[0] === query) {
    return savedRscParams[1];
  }
  const rscParams = new URLSearchParams({
    query
  });
  savedRscParams = [
    query,
    rscParams
  ];
  return rscParams;
};
const RouterContext = reactExports.createContext(null);
function useRouter_UNSTABLE() {
  const router = reactExports.useContext(RouterContext);
  if (!router) {
    throw new Error("Missing Router");
  }
  const { route, changeRoute, prefetchRoute } = router;
  const push = reactExports.useCallback((to, options) => {
    const url = new URL(to, window.location.href);
    const newPath = url.pathname !== window.location.pathname;
    window.history.pushState({
      ...window.history.state,
      waku_new_path: newPath
    }, "", url);
    changeRoute(parseRoute(url), {
      shouldScroll: options?.scroll ?? newPath
    });
  }, [
    changeRoute
  ]);
  const replace = reactExports.useCallback((to, options) => {
    const url = new URL(to, window.location.href);
    const newPath = url.pathname !== window.location.pathname;
    window.history.replaceState(window.history.state, "", url);
    changeRoute(parseRoute(url), {
      shouldScroll: options?.scroll ?? newPath
    });
  }, [
    changeRoute
  ]);
  const reload = reactExports.useCallback(() => {
    const url = new URL(window.location.href);
    changeRoute(parseRoute(url), {
      shouldScroll: true
    });
  }, [
    changeRoute
  ]);
  const back = reactExports.useCallback(() => {
    window.history.back();
  }, []);
  const forward = reactExports.useCallback(() => {
    window.history.forward();
  }, []);
  const prefetch = reactExports.useCallback((to) => {
    const url = new URL(to, window.location.href);
    prefetchRoute(parseRoute(url));
  }, [
    prefetchRoute
  ]);
  return {
    ...route,
    push,
    replace,
    reload,
    back,
    forward,
    prefetch
  };
}
function Link({ to, children, scroll, unstable_pending, unstable_notPending, unstable_prefetchOnEnter, unstable_prefetchOnView, unstable_startTransition, ...props }) {
  const router = reactExports.useContext(RouterContext);
  const changeRoute = router ? router.changeRoute : () => {
    throw new Error("Missing Router");
  };
  const prefetchRoute = router ? router.prefetchRoute : () => {
    throw new Error("Missing Router");
  };
  const [isPending, startTransition] = reactExports.useTransition();
  const startTransitionFn = unstable_startTransition || (unstable_pending || unstable_notPending) && startTransition || ((fn) => fn());
  const ref = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    if (unstable_prefetchOnView && ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const url = new URL(to, window.location.href);
            if (router && url.href !== window.location.href) {
              const route = parseRoute(url);
              router.prefetchRoute(route);
            }
          }
        });
      }, {
        threshold: 0.1
      });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [
    unstable_prefetchOnView,
    router,
    to
  ]);
  const onClick = (event) => {
    event.preventDefault();
    const url = new URL(to, window.location.href);
    if (url.href !== window.location.href) {
      const route = parseRoute(url);
      prefetchRoute(route);
      startTransitionFn(() => {
        const newPath = url.pathname !== window.location.pathname;
        window.history.pushState({
          ...window.history.state,
          waku_new_path: newPath
        }, "", url);
        changeRoute(route, {
          shouldScroll: scroll ?? newPath
        });
      });
    }
    props.onClick?.(event);
  };
  const onMouseEnter = unstable_prefetchOnEnter ? (event) => {
    const url = new URL(to, window.location.href);
    if (url.href !== window.location.href) {
      const route = parseRoute(url);
      prefetchRoute(route);
    }
    props.onMouseEnter?.(event);
  } : props.onMouseEnter;
  const ele = reactExports.createElement("a", {
    ...props,
    href: to,
    onClick,
    onMouseEnter,
    ref
  }, children);
  if (isPending && unstable_pending !== void 0) {
    return reactExports.createElement(reactExports.Fragment, null, ele, unstable_pending);
  }
  if (!isPending && unstable_notPending !== void 0) {
    return reactExports.createElement(reactExports.Fragment, null, ele, unstable_notPending);
  }
  return ele;
}
const notAvailableInServer = (name) => () => {
  throw new Error(`${name} is not in the server`);
};
function renderError(message) {
  return reactExports.createElement("html", null, reactExports.createElement("body", null, reactExports.createElement("h1", null, message)));
}
class ErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  render() {
    if ("error" in this.state) {
      if (this.state.error instanceof Error) {
        return renderError(this.state.error.message);
      }
      return renderError(String(this.state.error));
    }
    return this.props.children;
  }
}
const NotFound = ({ has404, reset }) => {
  const resetError = useResetError_UNSTABLE();
  const router = reactExports.useContext(RouterContext);
  if (!router) {
    throw new Error("Missing Router");
  }
  const { changeRoute } = router;
  reactExports.useEffect(() => {
    if (has404) {
      const url = new URL("/404", window.location.href);
      changeRoute(parseRoute(url), {
        shouldScroll: true
      });
      resetError?.();
      reset();
    }
  }, [
    has404,
    resetError,
    reset,
    changeRoute
  ]);
  return has404 ? null : reactExports.createElement("h1", null, "Not Found");
};
const Redirect = ({ to, reset }) => {
  const resetError = useResetError_UNSTABLE();
  const router = reactExports.useContext(RouterContext);
  if (!router) {
    throw new Error("Missing Router");
  }
  const { changeRoute } = router;
  reactExports.useEffect(() => {
    const url = new URL(to, window.location.href);
    if (url.hostname !== window.location.hostname) {
      window.location.replace(to);
      return;
    }
    const newPath = url.pathname !== window.location.pathname;
    window.history.pushState({
      ...window.history.state,
      waku_new_path: newPath
    }, "", url);
    changeRoute(parseRoute(url), {
      shouldScroll: newPath
    });
    resetError?.();
    reset();
  }, [
    to,
    resetError,
    reset,
    changeRoute
  ]);
  return null;
};
class CustomErrorHandler extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.reset = this.reset.bind(this);
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  reset() {
    this.setState({
      error: null
    });
  }
  render() {
    const { error } = this.state;
    if (error !== null) {
      const info = getErrorInfo(error);
      if (info?.status === 404) {
        return reactExports.createElement(NotFound, {
          has404: this.props.has404,
          reset: this.reset
        });
      }
      if (info?.location) {
        return reactExports.createElement(Redirect, {
          to: info.location,
          reset: this.reset
        });
      }
      throw error;
    }
    return this.props.children;
  }
}
const getRouteSlotId = (path) => "route:" + decodeURIComponent(path);
const handleScroll = () => {
  const { hash } = window.location;
  const { state } = window.history;
  const element = hash && document.getElementById(hash.slice(1));
  window.scrollTo({
    left: 0,
    top: element ? element.getBoundingClientRect().top + window.scrollY : 0,
    behavior: state?.waku_new_path ? "instant" : "auto"
  });
};
const InnerRouter = ({ routerData, initialRoute }) => {
  const [locationListeners, staticPathSet, , has404] = routerData;
  const refetch = useRefetch();
  const [route, setRoute] = reactExports.useState(() => ({
    // This is the first initialization of the route, and it has
    // to ignore the hash, because on server side there is none.
    // Otherwise there will be a hydration error.
    // The client side route, including the hash, will be updated in the effect below.
    ...initialRoute,
    hash: ""
  }));
  reactExports.useEffect(() => {
    setRoute((prev) => {
      if (prev.path === initialRoute.path && prev.query === initialRoute.query && prev.hash === initialRoute.hash) {
        return prev;
      }
      return initialRoute;
    });
  }, [
    initialRoute
  ]);
  const changeRoute = reactExports.useCallback((route2, options) => {
    const { skipRefetch } = options || {};
    if (!staticPathSet.has(route2.path) && !skipRefetch) {
      const rscPath = encodeRoutePath(route2.path);
      const rscParams = createRscParams(route2.query);
      refetch(rscPath, rscParams);
    }
    if (options.shouldScroll) {
      handleScroll();
    }
    setRoute(route2);
  }, [
    refetch,
    staticPathSet
  ]);
  const prefetchRoute = reactExports.useCallback((route2) => {
    if (staticPathSet.has(route2.path)) {
      return;
    }
    const rscPath = encodeRoutePath(route2.path);
    const rscParams = createRscParams(route2.query);
    prefetchRsc(rscPath, rscParams);
    globalThis.__WAKU_ROUTER_PREFETCH__?.(route2.path);
  }, [
    staticPathSet
  ]);
  reactExports.useEffect(() => {
    const callback = () => {
      const route2 = parseRoute(new URL(window.location.href));
      changeRoute(route2, {
        shouldScroll: true
      });
    };
    window.addEventListener("popstate", callback);
    return () => {
      window.removeEventListener("popstate", callback);
    };
  }, [
    changeRoute
  ]);
  reactExports.useEffect(() => {
    const callback = (path, query) => {
      const url = new URL(window.location.href);
      url.pathname = path;
      url.search = query;
      url.hash = "";
      if (path !== "/404") {
        window.history.pushState({
          ...window.history.state,
          waku_new_path: url.pathname !== window.location.pathname
        }, "", url);
      }
      changeRoute(parseRoute(url), {
        skipRefetch: true,
        shouldScroll: false
      });
    };
    locationListeners.add(callback);
    return () => {
      locationListeners.delete(callback);
    };
  }, [
    changeRoute,
    locationListeners
  ]);
  const routeElement = reactExports.createElement(Slot, {
    id: getRouteSlotId(route.path)
  });
  const rootElement = reactExports.createElement(Slot, {
    id: "root",
    unstable_handleError: reactExports.createElement(CustomErrorHandler, {
      has404
    }, reactExports.createElement(ThrowError_UNSTABLE))
  }, reactExports.createElement(CustomErrorHandler, {
    has404
  }, routeElement));
  return reactExports.createElement(RouterContext.Provider, {
    value: {
      route,
      changeRoute,
      prefetchRoute
    }
  }, rootElement);
};
const DEFAULT_ROUTER_DATA = [];
function Router({ routerData = DEFAULT_ROUTER_DATA, initialRoute = parseRouteFromLocation(), unstable_enhanceFetch, unstable_enhanceCreateData }) {
  const initialRscPath = encodeRoutePath(initialRoute.path);
  const locationListeners = routerData[0] ||= /* @__PURE__ */ new Set();
  const staticPathSet = routerData[1] ||= /* @__PURE__ */ new Set();
  const cachedIdSet = routerData[2] ||= /* @__PURE__ */ new Set();
  const enhanceFetch = (fetchFn) => (input, init = {}) => {
    const skipStr = JSON.stringify(Array.from(cachedIdSet));
    const headers = init.headers ||= {};
    if (Array.isArray(headers)) {
      headers.push([
        SKIP_HEADER,
        skipStr
      ]);
    } else {
      headers[SKIP_HEADER] = skipStr;
    }
    return fetchFn(input, init);
  };
  const enhanceCreateData = (createData) => async (responsePromise) => {
    const data = createData(responsePromise);
    Promise.resolve(data).then((data2) => {
      if (data2 && typeof data2 === "object") {
        const { [ROUTE_ID]: routeData, [IS_STATIC_ID]: isStatic, [HAS404_ID]: has404, ...rest } = data2;
        if (routeData) {
          const [path, query] = routeData;
          if (window.location.pathname !== path || !isStatic && window.location.search.replace(/^\?/, "") !== query) {
            locationListeners.forEach((listener) => listener(path, query));
          }
          if (isStatic) {
            staticPathSet.add(path);
          }
        }
        if (has404) {
          routerData[3] = true;
        }
        Object.keys(rest).forEach((id) => {
          cachedIdSet.add(id);
        });
      }
    }).catch(() => {
    });
    return data;
  };
  const initialRscParams = createRscParams(initialRoute.query);
  return reactExports.createElement(Root, {
    initialRscPath,
    initialRscParams,
    unstable_enhanceFetch: unstable_enhanceFetch ? (fn) => unstable_enhanceFetch(enhanceFetch(fn)) : enhanceFetch,
    unstable_enhanceCreateData: unstable_enhanceCreateData ? (fn) => unstable_enhanceCreateData(enhanceCreateData(fn)) : enhanceCreateData
  }, reactExports.createElement(InnerRouter, {
    routerData,
    initialRoute
  }));
}
function INTERNAL_ServerRouter({ route }) {
  const routeElement = reactExports.createElement(Slot, {
    id: getRouteSlotId(route.path)
  });
  const rootElement = reactExports.createElement(Slot, {
    id: "root",
    unstable_handleError: null
  }, routeElement);
  return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(RouterContext.Provider, {
    value: {
      route,
      changeRoute: notAvailableInServer("changeRoute"),
      prefetchRoute: notAvailableInServer("prefetchRoute")
    }
  }, rootElement));
}
export {
  ErrorBoundary,
  INTERNAL_ServerRouter,
  Link,
  Router,
  useRouter_UNSTABLE
};
