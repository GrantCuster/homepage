import require$$0 from "node:async_hooks";
import { r as requireReact_reactServer } from "./react.react-server-DrDL52Ws.js";
var server_edge = {};
var reactServerDomWebpackServer_edge_production = {};
var reactDom_reactServer = { exports: {} };
var reactDom_reactServer_production = {};
/**
 * @license React
 * react-dom.react-server.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_reactServer_production;
function requireReactDom_reactServer_production() {
  if (hasRequiredReactDom_reactServer_production) return reactDom_reactServer_production;
  hasRequiredReactDom_reactServer_production = 1;
  var React = requireReact_reactServer();
  function noop() {
  }
  var Internals = {
    d: {
      f: noop,
      r: function() {
        throw Error(
          "Invalid form element. requestFormReset must be passed a form that was rendered by React."
        );
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop
    },
    p: 0,
    findDOMNode: null
  };
  if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)
    throw Error(
      'The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.'
    );
  function getCrossOriginStringAs(as, input) {
    if ("font" === as) return "";
    if ("string" === typeof input)
      return "use-credentials" === input ? input : "";
  }
  reactDom_reactServer_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
  reactDom_reactServer_production.preconnect = function(href, options) {
    "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
  };
  reactDom_reactServer_production.prefetchDNS = function(href) {
    "string" === typeof href && Internals.d.D(href);
  };
  reactDom_reactServer_production.preinit = function(href, options) {
    if ("string" === typeof href && options && "string" === typeof options.as) {
      var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
      "style" === as ? Internals.d.S(
        href,
        "string" === typeof options.precedence ? options.precedence : void 0,
        {
          crossOrigin,
          integrity,
          fetchPriority
        }
      ) : "script" === as && Internals.d.X(href, {
        crossOrigin,
        integrity,
        fetchPriority,
        nonce: "string" === typeof options.nonce ? options.nonce : void 0
      });
    }
  };
  reactDom_reactServer_production.preinitModule = function(href, options) {
    if ("string" === typeof href)
      if ("object" === typeof options && null !== options) {
        if (null == options.as || "script" === options.as) {
          var crossOrigin = getCrossOriginStringAs(
            options.as,
            options.crossOrigin
          );
          Internals.d.M(href, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      } else null == options && Internals.d.M(href);
  };
  reactDom_reactServer_production.preload = function(href, options) {
    if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
      var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
      Internals.d.L(href, as, {
        crossOrigin,
        integrity: "string" === typeof options.integrity ? options.integrity : void 0,
        nonce: "string" === typeof options.nonce ? options.nonce : void 0,
        type: "string" === typeof options.type ? options.type : void 0,
        fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
        referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
        imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
        imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
        media: "string" === typeof options.media ? options.media : void 0
      });
    }
  };
  reactDom_reactServer_production.preloadModule = function(href, options) {
    if ("string" === typeof href)
      if (options) {
        var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
        Internals.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0
        });
      } else Internals.d.m(href);
  };
  reactDom_reactServer_production.version = "19.0.0";
  return reactDom_reactServer_production;
}
var hasRequiredReactDom_reactServer;
function requireReactDom_reactServer() {
  if (hasRequiredReactDom_reactServer) return reactDom_reactServer.exports;
  hasRequiredReactDom_reactServer = 1;
  {
    reactDom_reactServer.exports = requireReactDom_reactServer_production();
  }
  return reactDom_reactServer.exports;
}
var hasRequiredReactServerDomWebpackServer_edge_production;
function requireReactServerDomWebpackServer_edge_production() {
  if (hasRequiredReactServerDomWebpackServer_edge_production) return reactServerDomWebpackServer_edge_production;
  hasRequiredReactServerDomWebpackServer_edge_production = 1;
  globalThis.AsyncLocalStorage = require$$0.AsyncLocalStorage;
  function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var _globalThis, _globalThis1, _globalThis2, _globalThis3;
  var ReactDOM = requireReactDom_reactServer(), React = requireReact_reactServer();
  function handleErrorInNextTick(error) {
    setTimeout(function() {
      throw error;
    });
  }
  var LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function scheduleMicrotask2(callback) {
    LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
  }, currentView = null, writtenBytes = 0;
  function writeChunkAndReturn(destination, chunk) {
    if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
    else {
      var allowableBytes = currentView.length - writtenBytes;
      allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(2048), writtenBytes = 0);
      currentView.set(chunk, writtenBytes);
      writtenBytes += chunk.byteLength;
    }
    return true;
  }
  var textEncoder = new TextEncoder();
  function stringToChunk(content) {
    return textEncoder.encode(content);
  }
  function byteLengthOfChunk(chunk) {
    return chunk.byteLength;
  }
  function closeWithError(destination, error) {
    "function" === typeof destination.error ? destination.error(error) : destination.close();
  }
  var CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference"), SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
  function registerClientReferenceImpl(proxyImplementation, id, async) {
    return Object.defineProperties(proxyImplementation, {
      $$typeof: {
        value: CLIENT_REFERENCE_TAG$1
      },
      $$id: {
        value: id
      },
      $$async: {
        value: async
      }
    });
  }
  var FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice;
  function bind() {
    var newFn = FunctionBind.apply(this, arguments);
    if (this.$$typeof === SERVER_REFERENCE_TAG) {
      var args = ArraySlice.call(arguments, 1), $$typeof = {
        value: SERVER_REFERENCE_TAG
      }, $$id = {
        value: this.$$id
      };
      args = {
        value: this.$$bound ? this.$$bound.concat(args) : args
      };
      return Object.defineProperties(newFn, {
        $$typeof,
        $$id,
        $$bound: args,
        bind: {
          value: bind,
          configurable: true
        }
      });
    }
    return newFn;
  }
  var PROMISE_PROTOTYPE = Promise.prototype, deepProxyHandlers = {
    get: function get(target, name) {
      switch (name) {
        case "$$typeof":
          return target.$$typeof;
        case "$$id":
          return target.$$id;
        case "$$async":
          return target.$$async;
        case "name":
          return target.name;
        case "displayName":
          return;
        case "defaultProps":
          return;
        case "toJSON":
          return;
        case Symbol.toPrimitive:
          return Object.prototype[Symbol.toPrimitive];
        case Symbol.toStringTag:
          return Object.prototype[Symbol.toStringTag];
        case "Provider":
          throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
        case "then":
          throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
      }
      throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
    },
    set: function set() {
      throw Error("Cannot assign to a client module from a server module.");
    }
  };
  function getReference(target, name) {
    switch (name) {
      case "$$typeof":
        return target.$$typeof;
      case "$$id":
        return target.$$id;
      case "$$async":
        return target.$$async;
      case "name":
        return target.name;
      case "defaultProps":
        return;
      case "toJSON":
        return;
      case Symbol.toPrimitive:
        return Object.prototype[Symbol.toPrimitive];
      case Symbol.toStringTag:
        return Object.prototype[Symbol.toStringTag];
      case "__esModule":
        var moduleId = target.$$id;
        target.default = registerClientReferenceImpl(function() {
          throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, target.$$id + "#", target.$$async);
        return true;
      case "then":
        if (target.then) return target.then;
        if (target.$$async) return;
        var clientReference = registerClientReferenceImpl({}, target.$$id, true), proxy = new Proxy(clientReference, proxyHandlers$1);
        target.status = "fulfilled";
        target.value = proxy;
        return target.then = registerClientReferenceImpl(function(resolve) {
          return Promise.resolve(resolve(proxy));
        }, target.$$id + "#then", false);
    }
    if ("symbol" === (typeof name === "undefined" ? "undefined" : _type_of(name))) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
    clientReference = target[name];
    clientReference || (clientReference = registerClientReferenceImpl(function() {
      throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
    }, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", {
      value: name
    }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
    return clientReference;
  }
  var proxyHandlers$1 = {
    get: function get(target, name) {
      return getReference(target, name);
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, name) {
      var descriptor = Object.getOwnPropertyDescriptor(target, name);
      descriptor || (descriptor = {
        value: getReference(target, name),
        writable: false,
        configurable: false,
        enumerable: false
      }, Object.defineProperty(target, name, descriptor));
      return descriptor;
    },
    getPrototypeOf: function getPrototypeOf2() {
      return PROMISE_PROTOTYPE;
    },
    set: function set() {
      throw Error("Cannot assign to a client module from a server module.");
    }
  }, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, previousDispatcher = ReactDOMSharedInternals.d;
  ReactDOMSharedInternals.d = {
    f: previousDispatcher.f,
    r: previousDispatcher.r,
    D: prefetchDNS,
    C: preconnect,
    L: preload,
    m: preloadModule$1,
    X: preinitScript,
    S: preinitStyle,
    M: preinitModuleScript
  };
  function prefetchDNS(href) {
    if ("string" === typeof href && href) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "D|" + href;
        hints.has(key) || (hints.add(key), emitHint(request, "D", href));
      } else previousDispatcher.D(href);
    }
  }
  function preconnect(href, crossOrigin) {
    if ("string" === typeof href) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
        hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [
          href,
          crossOrigin
        ]) : emitHint(request, "C", href));
      } else previousDispatcher.C(href, crossOrigin);
    }
  }
  function preload(href, as, options) {
    if ("string" === typeof href) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "L";
        if ("image" === as && options) {
          var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
          "string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
          key += "[image]" + uniquePart;
        } else key += "[" + as + "]" + href;
        hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
          href,
          as,
          options
        ]) : emitHint(request, "L", [
          href,
          as
        ]));
      } else previousDispatcher.L(href, as, options);
    }
  }
  function preloadModule$1(href, options) {
    if ("string" === typeof href) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "m|" + href;
        if (hints.has(key)) return;
        hints.add(key);
        return (options = trimOptions(options)) ? emitHint(request, "m", [
          href,
          options
        ]) : emitHint(request, "m", href);
      }
      previousDispatcher.m(href, options);
    }
  }
  function preinitStyle(href, precedence, options) {
    if ("string" === typeof href) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "S|" + href;
        if (hints.has(key)) return;
        hints.add(key);
        return (options = trimOptions(options)) ? emitHint(request, "S", [
          href,
          "string" === typeof precedence ? precedence : 0,
          options
        ]) : "string" === typeof precedence ? emitHint(request, "S", [
          href,
          precedence
        ]) : emitHint(request, "S", href);
      }
      previousDispatcher.S(href, precedence, options);
    }
  }
  function preinitScript(src, options) {
    if ("string" === typeof src) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "X|" + src;
        if (hints.has(key)) return;
        hints.add(key);
        return (options = trimOptions(options)) ? emitHint(request, "X", [
          src,
          options
        ]) : emitHint(request, "X", src);
      }
      previousDispatcher.X(src, options);
    }
  }
  function preinitModuleScript(src, options) {
    if ("string" === typeof src) {
      var request = resolveRequest();
      if (request) {
        var hints = request.hints, key = "M|" + src;
        if (hints.has(key)) return;
        hints.add(key);
        return (options = trimOptions(options)) ? emitHint(request, "M", [
          src,
          options
        ]) : emitHint(request, "M", src);
      }
      previousDispatcher.M(src, options);
    }
  }
  function trimOptions(options) {
    if (null == options) return null;
    var hasProperties = false, trimmed = {}, key;
    for (key in options) null != options[key] && (hasProperties = true, trimmed[key] = options[key]);
    return hasProperties ? trimmed : null;
  }
  var supportsRequestStorage = "function" === typeof AsyncLocalStorage, requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
  "object" === (typeof async_hooks === "undefined" ? "undefined" : _type_of(async_hooks)) ? async_hooks.createHook : function() {
    return {
      enable: function enable() {
      },
      disable: function disable() {
      }
    };
  };
  "object" === (typeof async_hooks === "undefined" ? "undefined" : _type_of(async_hooks)) ? async_hooks.executionAsyncId : null;
  var TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference"), proxyHandlers = {
    get: function get(target, name) {
      switch (name) {
        case "$$typeof":
          return target.$$typeof;
        case "name":
          return;
        case "displayName":
          return;
        case "defaultProps":
          return;
        case "toJSON":
          return;
        case Symbol.toPrimitive:
          return Object.prototype[Symbol.toPrimitive];
        case Symbol.toStringTag:
          return Object.prototype[Symbol.toStringTag];
        case "Provider":
          throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
      }
      throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
    },
    set: function set() {
      throw Error("Cannot assign to a temporary client reference from a server module.");
    }
  };
  function createTemporaryReference(temporaryReferences, id) {
    var reference = Object.defineProperties(function() {
      throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
    }, {
      $$typeof: {
        value: TEMPORARY_REFERENCE_TAG
      }
    });
    reference = new Proxy(reference, proxyHandlers);
    temporaryReferences.set(reference, id);
    return reference;
  }
  var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
  var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
  function getIteratorFn(maybeIterable) {
    if (null === maybeIterable || "object" !== (typeof maybeIterable === "undefined" ? "undefined" : _type_of(maybeIterable))) return null;
    maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
    return "function" === typeof maybeIterable ? maybeIterable : null;
  }
  var ASYNC_ITERATOR = Symbol.asyncIterator, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
  function noop$1() {
  }
  function trackUsedThenable(thenableState2, thenable, index) {
    index = thenableState2[index];
    void 0 === index ? thenableState2.push(thenable) : index !== thenable && (thenable.then(noop$1, noop$1), thenable = index);
    switch (thenable.status) {
      case "fulfilled":
        return thenable.value;
      case "rejected":
        throw thenable.reason;
      default:
        "string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenableState2 = thenable, thenableState2.status = "pending", thenableState2.then(function(fulfilledValue) {
          if ("pending" === thenable.status) {
            var fulfilledThenable = thenable;
            fulfilledThenable.status = "fulfilled";
            fulfilledThenable.value = fulfilledValue;
          }
        }, function(error) {
          if ("pending" === thenable.status) {
            var rejectedThenable = thenable;
            rejectedThenable.status = "rejected";
            rejectedThenable.reason = error;
          }
        }));
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
        }
        suspendedThenable = thenable;
        throw SuspenseException;
    }
  }
  var suspendedThenable = null;
  function getSuspendedThenable() {
    if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var thenable = suspendedThenable;
    suspendedThenable = null;
    return thenable;
  }
  var currentRequest$1 = null, thenableIndexCounter = 0, thenableState = null;
  function getThenableStateAfterSuspending() {
    var state = thenableState || [];
    thenableState = null;
    return state;
  }
  var HooksDispatcher = {
    useMemo: function useMemo(nextCreate) {
      return nextCreate();
    },
    useCallback: function useCallback(callback) {
      return callback;
    },
    useDebugValue: function useDebugValue() {
    },
    useDeferredValue: unsupportedHook,
    useTransition: unsupportedHook,
    readContext: unsupportedContext,
    useContext: unsupportedContext,
    useReducer: unsupportedHook,
    useRef: unsupportedHook,
    useState: unsupportedHook,
    useInsertionEffect: unsupportedHook,
    useLayoutEffect: unsupportedHook,
    useImperativeHandle: unsupportedHook,
    useEffect: unsupportedHook,
    useId,
    useSyncExternalStore: unsupportedHook,
    useCacheRefresh: function useCacheRefresh() {
      return unsupportedRefresh;
    },
    useMemoCache: function useMemoCache(size) {
      for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
      return data;
    },
    use
  };
  function unsupportedHook() {
    throw Error("This Hook is not supported in Server Components.");
  }
  function unsupportedRefresh() {
    throw Error("Refreshing the cache is not supported in Server Components.");
  }
  function unsupportedContext() {
    throw Error("Cannot read a Client Context from a Server Component.");
  }
  function useId() {
    if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
    var id = currentRequest$1.identifierCount++;
    return ":" + currentRequest$1.identifierPrefix + "S" + id.toString(32) + ":";
  }
  function use(usable) {
    if (null !== usable && "object" === (typeof usable === "undefined" ? "undefined" : _type_of(usable)) || "function" === typeof usable) {
      if ("function" === typeof usable.then) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        return trackUsedThenable(thenableState, usable, index);
      }
      usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
    }
    if (usable.$$typeof === CLIENT_REFERENCE_TAG$1) {
      if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
      throw Error("Cannot use() an already resolved Client Reference.");
    }
    throw Error("An unsupported type was passed to use(): " + String(usable));
  }
  var DefaultAsyncDispatcher = {
    getCacheForType: function getCacheForType(resourceType) {
      var JSCompiler_inline_result = (JSCompiler_inline_result = resolveRequest()) ? JSCompiler_inline_result.cache : /* @__PURE__ */ new Map();
      var entry = JSCompiler_inline_result.get(resourceType);
      void 0 === entry && (entry = resourceType(), JSCompiler_inline_result.set(resourceType, entry));
      return entry;
    }
  }, ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  if (!ReactSharedInternalsServer) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
  var isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf;
  function objectName(object) {
    return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
      return p0;
    });
  }
  function describeValueForErrorMessage(value) {
    switch (typeof value === "undefined" ? "undefined" : _type_of(value)) {
      case "string":
        return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
      case "object":
        if (isArrayImpl(value)) return "[...]";
        if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
        value = objectName(value);
        return "Object" === value ? "{...}" : value;
      case "function":
        return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
      default:
        return String(value);
    }
  }
  function describeElementType(type) {
    if ("string" === typeof type) return type;
    switch (type) {
      case REACT_SUSPENSE_TYPE:
        return "Suspense";
      case REACT_SUSPENSE_LIST_TYPE:
        return "SuspenseList";
    }
    if ("object" === (typeof type === "undefined" ? "undefined" : _type_of(type))) switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeElementType(type.render);
      case REACT_MEMO_TYPE:
        return describeElementType(type.type);
      case REACT_LAZY_TYPE:
        var payload = type._payload;
        type = type._init;
        try {
          return describeElementType(type(payload));
        } catch (x) {
        }
    }
    return "";
  }
  var CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
  function describeObjectForErrorMessage(objectOrArray, expandedName) {
    var objKind = objectName(objectOrArray);
    if ("Object" !== objKind && "Array" !== objKind) return objKind;
    objKind = -1;
    var length = 0;
    if (isArrayImpl(objectOrArray)) {
      var str = "[";
      for (var i = 0; i < objectOrArray.length; i++) {
        0 < i && (str += ", ");
        var value = objectOrArray[i];
        value = "object" === (typeof value === "undefined" ? "undefined" : _type_of(value)) && null !== value ? describeObjectForErrorMessage(value) : describeValueForErrorMessage(value);
        "" + i === expandedName ? (objKind = str.length, length = value.length, str += value) : str = 10 > value.length && 40 > str.length + value.length ? str + value : str + "...";
      }
      str += "]";
    } else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) str = "<" + describeElementType(objectOrArray.type) + "/>";
    else {
      if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
      str = "{";
      i = Object.keys(objectOrArray);
      for (value = 0; value < i.length; value++) {
        0 < value && (str += ", ");
        var name = i[value], encodedKey = JSON.stringify(name);
        str += ('"' + name + '"' === encodedKey ? name : encodedKey) + ": ";
        encodedKey = objectOrArray[name];
        encodedKey = "object" === (typeof encodedKey === "undefined" ? "undefined" : _type_of(encodedKey)) && null !== encodedKey ? describeObjectForErrorMessage(encodedKey) : describeValueForErrorMessage(encodedKey);
        name === expandedName ? (objKind = str.length, length = encodedKey.length, str += encodedKey) : str = 10 > encodedKey.length && 40 > str.length + encodedKey.length ? str + encodedKey : str + "...";
      }
      str += "}";
    }
    return void 0 === expandedName ? str : -1 < objKind && 0 < length ? (objectOrArray = " ".repeat(objKind) + "^".repeat(length), "\n  " + str + "\n  " + objectOrArray) : "\n  " + str;
  }
  var ObjectPrototype = Object.prototype, stringify = JSON.stringify;
  function defaultErrorHandler(error) {
    console.error(error);
  }
  function defaultPostponeHandler() {
  }
  function RequestInstance(type, model, bundlerConfig, onError, identifierPrefix, onPostpone, temporaryReferences, environmentName, filterStackFrame, onAllReady, onFatalError) {
    if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
    ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
    filterStackFrame = /* @__PURE__ */ new Set();
    environmentName = [];
    var hints = /* @__PURE__ */ new Set();
    this.type = type;
    this.status = 10;
    this.flushScheduled = false;
    this.destination = this.fatalError = null;
    this.bundlerConfig = bundlerConfig;
    this.cache = /* @__PURE__ */ new Map();
    this.pendingChunks = this.nextChunkId = 0;
    this.hints = hints;
    this.abortListeners = /* @__PURE__ */ new Set();
    this.abortableTasks = filterStackFrame;
    this.pingedTasks = environmentName;
    this.completedImportChunks = [];
    this.completedHintChunks = [];
    this.completedRegularChunks = [];
    this.completedErrorChunks = [];
    this.writtenSymbols = /* @__PURE__ */ new Map();
    this.writtenClientReferences = /* @__PURE__ */ new Map();
    this.writtenServerReferences = /* @__PURE__ */ new Map();
    this.writtenObjects = /* @__PURE__ */ new WeakMap();
    this.temporaryReferences = temporaryReferences;
    this.identifierPrefix = identifierPrefix || "";
    this.identifierCount = 1;
    this.taintCleanupQueue = [];
    this.onError = void 0 === onError ? defaultErrorHandler : onError;
    this.onPostpone = void 0 === onPostpone ? defaultPostponeHandler : onPostpone;
    this.onAllReady = onAllReady;
    this.onFatalError = onFatalError;
    type = createTask(this, model, null, false, filterStackFrame);
    environmentName.push(type);
  }
  function noop() {
  }
  var currentRequest = null;
  function resolveRequest() {
    if (currentRequest) return currentRequest;
    if (supportsRequestStorage) {
      var store = requestStorage.getStore();
      if (store) return store;
    }
    return null;
  }
  function serializeThenable(request, task, thenable) {
    var newTask = createTask(request, null, task.keyPath, task.implicitSlot, request.abortableTasks);
    switch (thenable.status) {
      case "fulfilled":
        return newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
      case "rejected":
        return task = logRecoverableError(request, thenable.reason), emitErrorChunk(request, newTask.id, task), newTask.status = 4, request.abortableTasks.delete(newTask), newTask.id;
      default:
        if (12 === request.status) return request.abortableTasks.delete(newTask), newTask.status = 3, task = stringify(serializeByValueID(request.fatalError)), emitModelChunk(request, newTask.id, task), newTask.id;
        "string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
          "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
        }, function(error) {
          "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
        }));
    }
    thenable.then(function(value) {
      newTask.model = value;
      pingTask(request, newTask);
    }, function(reason) {
      0 === newTask.status && (reason = logRecoverableError(request, reason), emitErrorChunk(request, newTask.id, reason), newTask.status = 4, request.abortableTasks.delete(newTask), enqueueFlush(request));
    });
    return newTask.id;
  }
  function serializeReadableStream(request, task, stream) {
    function progress(entry) {
      if (!aborted) if (entry.done) request.abortListeners.delete(abortStream), entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), enqueueFlush(request), aborted = true;
      else try {
        streamTask.model = entry.value, request.pendingChunks++, emitChunk(request, streamTask, streamTask.model), enqueueFlush(request), reader.read().then(progress, error);
      } catch (x$8) {
        error(x$8);
      }
    }
    function error(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortStream);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, streamTask.id, digest);
        enqueueFlush(request);
        reader.cancel(reason).then(error, error);
      }
    }
    function abortStream(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortStream);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, streamTask.id, digest);
        enqueueFlush(request);
        reader.cancel(reason).then(error, error);
      }
    }
    var supportsBYOB = stream.supportsBYOB;
    if (void 0 === supportsBYOB) try {
      stream.getReader({
        mode: "byob"
      }).releaseLock(), supportsBYOB = true;
    } catch (x) {
      supportsBYOB = false;
    }
    var reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, request.abortableTasks);
    request.abortableTasks.delete(streamTask);
    request.pendingChunks++;
    task = streamTask.id.toString(16) + ":" + (supportsBYOB ? "r" : "R") + "\n";
    request.completedRegularChunks.push(stringToChunk(task));
    var aborted = false;
    request.abortListeners.add(abortStream);
    reader.read().then(progress, error);
    return serializeByValueID(streamTask.id);
  }
  function serializeAsyncIterable(request, task, iterable, iterator) {
    function progress(entry) {
      if (!aborted) if (entry.done) {
        request.abortListeners.delete(abortIterable);
        if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
        else try {
          var chunkId = outlineModel(request, entry.value);
          endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
        } catch (x) {
          error(x);
          return;
        }
        request.completedRegularChunks.push(stringToChunk(endStreamRow));
        enqueueFlush(request);
        aborted = true;
      } else try {
        streamTask.model = entry.value, request.pendingChunks++, emitChunk(request, streamTask, streamTask.model), enqueueFlush(request), iterator.next().then(progress, error);
      } catch (x$9) {
        error(x$9);
      }
    }
    function error(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortIterable);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, streamTask.id, digest);
        enqueueFlush(request);
        "function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
      }
    }
    function abortIterable(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortIterable);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, streamTask.id, digest);
        enqueueFlush(request);
        "function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
      }
    }
    iterable = iterable === iterator;
    var streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, request.abortableTasks);
    request.abortableTasks.delete(streamTask);
    request.pendingChunks++;
    task = streamTask.id.toString(16) + ":" + (iterable ? "x" : "X") + "\n";
    request.completedRegularChunks.push(stringToChunk(task));
    var aborted = false;
    request.abortListeners.add(abortIterable);
    iterator.next().then(progress, error);
    return serializeByValueID(streamTask.id);
  }
  function emitHint(request, code, model) {
    model = stringify(model);
    var id = request.nextChunkId++;
    code = "H" + code;
    code = id.toString(16) + ":" + code;
    model = stringToChunk(code + model + "\n");
    request.completedHintChunks.push(model);
    enqueueFlush(request);
  }
  function readThenable(thenable) {
    if ("fulfilled" === thenable.status) return thenable.value;
    if ("rejected" === thenable.status) throw thenable.reason;
    throw thenable;
  }
  function createLazyWrapperAroundWakeable(wakeable) {
    switch (wakeable.status) {
      case "fulfilled":
      case "rejected":
        break;
      default:
        "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
          "pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
        }, function(error) {
          "pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
        }));
    }
    return {
      $$typeof: REACT_LAZY_TYPE,
      _payload: wakeable,
      _init: readThenable
    };
  }
  function voidHandler() {
  }
  function renderFunctionComponent(request, task, key, Component, props) {
    var prevThenableState = task.thenableState;
    task.thenableState = null;
    thenableIndexCounter = 0;
    thenableState = prevThenableState;
    Component = Component(props, void 0);
    if (12 === request.status) throw "object" === (typeof Component === "undefined" ? "undefined" : _type_of(Component)) && null !== Component && "function" === typeof Component.then && Component.$$typeof !== CLIENT_REFERENCE_TAG$1 && Component.then(voidHandler, voidHandler), null;
    if ("object" === (typeof Component === "undefined" ? "undefined" : _type_of(Component)) && null !== Component && Component.$$typeof !== CLIENT_REFERENCE_TAG$1) {
      if ("function" === typeof Component.then) {
        props = Component;
        if ("fulfilled" === props.status) return props.value;
        Component = createLazyWrapperAroundWakeable(Component);
      }
      var iteratorFn = getIteratorFn(Component);
      if (iteratorFn) {
        var iterableChild = Component;
        Component = {};
        Component = (Component[Symbol.iterator] = function Component2() {
          return iteratorFn.call(iterableChild);
        }, Component);
      } else if (!("function" !== typeof Component[ASYNC_ITERATOR] || "function" === typeof ReadableStream && _instanceof(Component, ReadableStream))) {
        var iterableChild$10 = Component;
        Component = {};
        Component = (Component[ASYNC_ITERATOR] = function Component2() {
          return iterableChild$10[ASYNC_ITERATOR]();
        }, Component);
      }
    }
    props = task.keyPath;
    prevThenableState = task.implicitSlot;
    null !== key ? task.keyPath = null === props ? key : props + "," + key : null === props && (task.implicitSlot = true);
    request = renderModelDestructive(request, task, emptyRoot, "", Component);
    task.keyPath = props;
    task.implicitSlot = prevThenableState;
    return request;
  }
  function renderFragment(request, task, children) {
    return null !== task.keyPath ? (request = [
      REACT_ELEMENT_TYPE,
      REACT_FRAGMENT_TYPE,
      task.keyPath,
      {
        children
      }
    ], task.implicitSlot ? [
      request
    ] : request) : children;
  }
  function renderElement(request, task, type, key, ref, props) {
    if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1 && type.$$typeof !== TEMPORARY_REFERENCE_TAG) return renderFunctionComponent(request, task, key, type, props);
    if (type === REACT_FRAGMENT_TYPE && null === key) return type = task.implicitSlot, null === task.keyPath && (task.implicitSlot = true), props = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = type, props;
    if (null != type && "object" === (typeof type === "undefined" ? "undefined" : _type_of(type)) && type.$$typeof !== CLIENT_REFERENCE_TAG$1) switch (type.$$typeof) {
      case REACT_LAZY_TYPE:
        var init = type._init;
        type = init(type._payload);
        if (12 === request.status) throw null;
        return renderElement(request, task, type, key, ref, props);
      case REACT_FORWARD_REF_TYPE:
        return renderFunctionComponent(request, task, key, type.render, props);
      case REACT_MEMO_TYPE:
        return renderElement(request, task, type.type, key, ref, props);
    }
    request = key;
    key = task.keyPath;
    null === request ? request = key : null !== key && (request = key + "," + request);
    props = [
      REACT_ELEMENT_TYPE,
      type,
      request,
      props
    ];
    task = task.implicitSlot && null !== request ? [
      props
    ] : props;
    return task;
  }
  function pingTask(request, task) {
    var pingedTasks = request.pingedTasks;
    pingedTasks.push(task);
    1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, 21 === request.type || 10 === request.status ? scheduleMicrotask(function() {
      return performWork(request);
    }) : setTimeout(function() {
      return performWork(request);
    }, 0));
  }
  function createTask(request, model, keyPath, implicitSlot, abortSet) {
    request.pendingChunks++;
    var id = request.nextChunkId++;
    "object" !== (typeof model === "undefined" ? "undefined" : _type_of(model)) || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
    var task = {
      id,
      status: 0,
      model,
      keyPath,
      implicitSlot,
      ping: function ping() {
        return pingTask(request, task);
      },
      toJSON: function toJSON(parentPropertyName, value) {
        var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
        try {
          var JSCompiler_inline_result = renderModelDestructive(request, task, this, parentPropertyName, value);
        } catch (thrownValue) {
          if (parentPropertyName = task.model, parentPropertyName = "object" === (typeof parentPropertyName === "undefined" ? "undefined" : _type_of(parentPropertyName)) && null !== parentPropertyName && (parentPropertyName.$$typeof === REACT_ELEMENT_TYPE || parentPropertyName.$$typeof === REACT_LAZY_TYPE), 12 === request.status) task.status = 3, prevKeyPath = request.fatalError, JSCompiler_inline_result = parentPropertyName ? "$L" + prevKeyPath.toString(16) : serializeByValueID(prevKeyPath);
          else if (value = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === (typeof value === "undefined" ? "undefined" : _type_of(value)) && null !== value && "function" === typeof value.then) {
            JSCompiler_inline_result = createTask(request, task.model, task.keyPath, task.implicitSlot, request.abortableTasks);
            var ping = JSCompiler_inline_result.ping;
            value.then(ping, ping);
            JSCompiler_inline_result.thenableState = getThenableStateAfterSuspending();
            task.keyPath = prevKeyPath;
            task.implicitSlot = prevImplicitSlot;
            JSCompiler_inline_result = parentPropertyName ? "$L" + JSCompiler_inline_result.id.toString(16) : serializeByValueID(JSCompiler_inline_result.id);
          } else task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, request.pendingChunks++, prevKeyPath = request.nextChunkId++, prevImplicitSlot = logRecoverableError(request, value), emitErrorChunk(request, prevKeyPath, prevImplicitSlot), JSCompiler_inline_result = parentPropertyName ? "$L" + prevKeyPath.toString(16) : serializeByValueID(prevKeyPath);
        }
        return JSCompiler_inline_result;
      },
      thenableState: null
    };
    abortSet.add(task);
    return task;
  }
  function serializeByValueID(id) {
    return "$" + id.toString(16);
  }
  function encodeReferenceChunk(request, id, reference) {
    request = stringify(reference);
    id = id.toString(16) + ":" + request + "\n";
    return stringToChunk(id);
  }
  function serializeClientReference(request, parent, parentPropertyName, clientReference) {
    var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
    if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? "$L" + existingId.toString(16) : serializeByValueID(existingId);
    try {
      var config = request.bundlerConfig, modulePath = clientReference.$$id;
      existingId = "";
      var resolvedModuleData = config[modulePath];
      if (resolvedModuleData) existingId = resolvedModuleData.name;
      else {
        var idx = modulePath.lastIndexOf("#");
        -1 !== idx && (existingId = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
        if (!resolvedModuleData) throw Error('Could not find the module "' + modulePath + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
      }
      if (true === resolvedModuleData.async && true === clientReference.$$async) throw Error('The module "' + modulePath + '" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.');
      var JSCompiler_inline_result = true === resolvedModuleData.async || true === clientReference.$$async ? [
        resolvedModuleData.id,
        resolvedModuleData.chunks,
        existingId,
        1
      ] : [
        resolvedModuleData.id,
        resolvedModuleData.chunks,
        existingId
      ];
      request.pendingChunks++;
      var importId = request.nextChunkId++, json = stringify(JSCompiler_inline_result), row = importId.toString(16) + ":I" + json + "\n", processedChunk = stringToChunk(row);
      request.completedImportChunks.push(processedChunk);
      writtenClientReferences.set(clientReferenceKey, importId);
      return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? "$L" + importId.toString(16) : serializeByValueID(importId);
    } catch (x) {
      return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x), emitErrorChunk(request, parent, parentPropertyName), serializeByValueID(parent);
    }
  }
  function outlineModel(request, value) {
    value = createTask(request, value, null, false, request.abortableTasks);
    retryTask(request, value);
    return value.id;
  }
  function serializeTypedArray(request, tag, typedArray) {
    request.pendingChunks++;
    var bufferId = request.nextChunkId++;
    emitTypedArrayChunk(request, bufferId, tag, typedArray);
    return serializeByValueID(bufferId);
  }
  function serializeBlob(request, blob) {
    function progress(entry) {
      if (!aborted) if (entry.done) request.abortListeners.delete(abortBlob), aborted = true, pingTask(request, newTask);
      else return model.push(entry.value), reader.read().then(progress).catch(error);
    }
    function error(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortBlob);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, newTask.id, digest);
        enqueueFlush(request);
        reader.cancel(reason).then(error, error);
      }
    }
    function abortBlob(reason) {
      if (!aborted) {
        aborted = true;
        request.abortListeners.delete(abortBlob);
        var digest = logRecoverableError(request, reason);
        emitErrorChunk(request, newTask.id, digest);
        enqueueFlush(request);
        reader.cancel(reason).then(error, error);
      }
    }
    var model = [
      blob.type
    ], newTask = createTask(request, model, null, false, request.abortableTasks), reader = blob.stream().getReader(), aborted = false;
    request.abortListeners.add(abortBlob);
    reader.read().then(progress).catch(error);
    return "$B" + newTask.id.toString(16);
  }
  var modelRoot = false;
  function renderModelDestructive(request, task, parent, parentPropertyName, value) {
    task.model = value;
    if (value === REACT_ELEMENT_TYPE) return "$";
    if (null === value) return null;
    if ("object" === (typeof value === "undefined" ? "undefined" : _type_of(value))) {
      switch (value.$$typeof) {
        case REACT_ELEMENT_TYPE:
          var elementReference = null, writtenObjects = request.writtenObjects;
          if (null === task.keyPath && !task.implicitSlot) {
            var existingReference = writtenObjects.get(value);
            if (void 0 !== existingReference) if (modelRoot === value) modelRoot = null;
            else return existingReference;
            else -1 === parentPropertyName.indexOf(":") && (parent = writtenObjects.get(parent), void 0 !== parent && (elementReference = parent + ":" + parentPropertyName, writtenObjects.set(value, elementReference)));
          }
          parentPropertyName = value.props;
          parent = parentPropertyName.ref;
          request = renderElement(request, task, value.type, value.key, void 0 !== parent ? parent : null, parentPropertyName);
          "object" === (typeof request === "undefined" ? "undefined" : _type_of(request)) && null !== request && null !== elementReference && (writtenObjects.has(request) || writtenObjects.set(request, elementReference));
          return request;
        case REACT_LAZY_TYPE:
          task.thenableState = null;
          parentPropertyName = value._init;
          value = parentPropertyName(value._payload);
          if (12 === request.status) throw null;
          return renderModelDestructive(request, task, emptyRoot, "", value);
        case REACT_LEGACY_ELEMENT_TYPE:
          throw Error('A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.');
      }
      if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
      if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
      elementReference = request.writtenObjects;
      writtenObjects = elementReference.get(value);
      if ("function" === typeof value.then) {
        if (void 0 !== writtenObjects) {
          if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
          if (modelRoot === value) modelRoot = null;
          else return writtenObjects;
        }
        request = "$@" + serializeThenable(request, task, value).toString(16);
        elementReference.set(value, request);
        return request;
      }
      if (void 0 !== writtenObjects) if (modelRoot === value) modelRoot = null;
      else return writtenObjects;
      else if (-1 === parentPropertyName.indexOf(":") && (writtenObjects = elementReference.get(parent), void 0 !== writtenObjects)) {
        existingReference = parentPropertyName;
        if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch (parentPropertyName) {
          case "1":
            existingReference = "type";
            break;
          case "2":
            existingReference = "key";
            break;
          case "3":
            existingReference = "props";
            break;
          case "4":
            existingReference = "_owner";
        }
        elementReference.set(value, writtenObjects + ":" + existingReference);
      }
      if (isArrayImpl(value)) return renderFragment(request, task, value);
      if (_instanceof(value, Map)) return value = Array.from(value), "$Q" + outlineModel(request, value).toString(16);
      if (_instanceof(value, Set)) return value = Array.from(value), "$W" + outlineModel(request, value).toString(16);
      if ("function" === typeof FormData && _instanceof(value, FormData)) return value = Array.from(value.entries()), "$K" + outlineModel(request, value).toString(16);
      if (_instanceof(value, Error)) return "$Z";
      if (_instanceof(value, ArrayBuffer)) return serializeTypedArray(request, "A", new Uint8Array(value));
      if (_instanceof(value, Int8Array)) return serializeTypedArray(request, "O", value);
      if (_instanceof(value, Uint8Array)) return serializeTypedArray(request, "o", value);
      if (_instanceof(value, Uint8ClampedArray)) return serializeTypedArray(request, "U", value);
      if (_instanceof(value, Int16Array)) return serializeTypedArray(request, "S", value);
      if (_instanceof(value, Uint16Array)) return serializeTypedArray(request, "s", value);
      if (_instanceof(value, Int32Array)) return serializeTypedArray(request, "L", value);
      if (_instanceof(value, Uint32Array)) return serializeTypedArray(request, "l", value);
      if (_instanceof(value, Float32Array)) return serializeTypedArray(request, "G", value);
      if (_instanceof(value, Float64Array)) return serializeTypedArray(request, "g", value);
      if (_instanceof(value, BigInt64Array)) return serializeTypedArray(request, "M", value);
      if (_instanceof(value, BigUint64Array)) return serializeTypedArray(request, "m", value);
      if (_instanceof(value, DataView)) return serializeTypedArray(request, "V", value);
      if ("function" === typeof Blob && _instanceof(value, Blob)) return serializeBlob(request, value);
      if (elementReference = getIteratorFn(value)) return parentPropertyName = elementReference.call(value), parentPropertyName === value ? "$i" + outlineModel(request, Array.from(parentPropertyName)).toString(16) : renderFragment(request, task, Array.from(parentPropertyName));
      if ("function" === typeof ReadableStream && _instanceof(value, ReadableStream)) return serializeReadableStream(request, task, value);
      elementReference = value[ASYNC_ITERATOR];
      if ("function" === typeof elementReference) return null !== task.keyPath ? (request = [
        REACT_ELEMENT_TYPE,
        REACT_FRAGMENT_TYPE,
        task.keyPath,
        {
          children: value
        }
      ], request = task.implicitSlot ? [
        request
      ] : request) : (parentPropertyName = elementReference.call(value), request = serializeAsyncIterable(request, task, value, parentPropertyName)), request;
      if (_instanceof(value, Date)) return "$D" + value.toJSON();
      request = getPrototypeOf(value);
      if (request !== ObjectPrototype && (null === request || null !== getPrototypeOf(request))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
      return value;
    }
    if ("string" === typeof value) {
      if ("Z" === value[value.length - 1] && _instanceof(parent[parentPropertyName], Date)) return "$D" + value;
      if (1024 <= value.length && null !== byteLengthOfChunk) return request.pendingChunks++, task = request.nextChunkId++, emitTextChunk(request, task, value), serializeByValueID(task);
      request = "$" === value[0] ? "$" + value : value;
      return request;
    }
    if ("boolean" === typeof value) return value;
    if ("number" === typeof value) return Number.isFinite(value) ? 0 === value && -Infinity === 1 / value ? "$-0" : value : Infinity === value ? "$Infinity" : -Infinity === value ? "$-Infinity" : "$NaN";
    if ("undefined" === typeof value) return "$undefined";
    if ("function" === typeof value) {
      if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
      if (value.$$typeof === SERVER_REFERENCE_TAG) return task = request.writtenServerReferences, parentPropertyName = task.get(value), void 0 !== parentPropertyName ? request = "$F" + parentPropertyName.toString(16) : (parentPropertyName = value.$$bound, parentPropertyName = null === parentPropertyName ? null : Promise.resolve(parentPropertyName), request = outlineModel(request, {
        id: value.$$id,
        bound: parentPropertyName
      }), task.set(value, request), request = "$F" + request.toString(16)), request;
      if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
      if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
      if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
      throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.' + describeObjectForErrorMessage(parent, parentPropertyName));
    }
    if ("symbol" === (typeof value === "undefined" ? "undefined" : _type_of(value))) {
      task = request.writtenSymbols;
      elementReference = task.get(value);
      if (void 0 !== elementReference) return serializeByValueID(elementReference);
      elementReference = value.description;
      if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
      request.pendingChunks++;
      parentPropertyName = request.nextChunkId++;
      parent = encodeReferenceChunk(request, parentPropertyName, "$S" + elementReference);
      request.completedImportChunks.push(parent);
      task.set(value, parentPropertyName);
      return serializeByValueID(parentPropertyName);
    }
    if ("bigint" === (typeof value === "undefined" ? "undefined" : _type_of(value))) return "$n" + value.toString(10);
    throw Error("Type " + (typeof value === "undefined" ? "undefined" : _type_of(value)) + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
  }
  function logRecoverableError(request, error) {
    var prevRequest = currentRequest;
    currentRequest = null;
    try {
      var onError = request.onError;
      var errorDigest = supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
    } finally {
      currentRequest = prevRequest;
    }
    if (null != errorDigest && "string" !== typeof errorDigest) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + (typeof errorDigest === "undefined" ? "undefined" : _type_of(errorDigest)) + '" instead');
    return errorDigest || "";
  }
  function fatalError(request, error) {
    var onFatalError = request.onFatalError;
    onFatalError(error);
    null !== request.destination ? (request.status = 14, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
  }
  function emitErrorChunk(request, id, digest) {
    digest = {
      digest
    };
    id = id.toString(16) + ":E" + stringify(digest) + "\n";
    id = stringToChunk(id);
    request.completedErrorChunks.push(id);
  }
  function emitModelChunk(request, id, json) {
    id = id.toString(16) + ":" + json + "\n";
    id = stringToChunk(id);
    request.completedRegularChunks.push(id);
  }
  function emitTypedArrayChunk(request, id, tag, typedArray) {
    request.pendingChunks++;
    var buffer = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    typedArray = 2048 < typedArray.byteLength ? buffer.slice() : buffer;
    buffer = typedArray.byteLength;
    id = id.toString(16) + ":" + tag + buffer.toString(16) + ",";
    id = stringToChunk(id);
    request.completedRegularChunks.push(id, typedArray);
  }
  function emitTextChunk(request, id, text) {
    if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
    request.pendingChunks++;
    text = stringToChunk(text);
    var binaryLength = text.byteLength;
    id = id.toString(16) + ":T" + binaryLength.toString(16) + ",";
    id = stringToChunk(id);
    request.completedRegularChunks.push(id, text);
  }
  function emitChunk(request, task, value) {
    var id = task.id;
    "string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value) : _instanceof(value, ArrayBuffer) ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value)) : _instanceof(value, Int8Array) ? emitTypedArrayChunk(request, id, "O", value) : _instanceof(value, Uint8Array) ? emitTypedArrayChunk(request, id, "o", value) : _instanceof(value, Uint8ClampedArray) ? emitTypedArrayChunk(request, id, "U", value) : _instanceof(value, Int16Array) ? emitTypedArrayChunk(request, id, "S", value) : _instanceof(value, Uint16Array) ? emitTypedArrayChunk(request, id, "s", value) : _instanceof(value, Int32Array) ? emitTypedArrayChunk(request, id, "L", value) : _instanceof(value, Uint32Array) ? emitTypedArrayChunk(request, id, "l", value) : _instanceof(value, Float32Array) ? emitTypedArrayChunk(request, id, "G", value) : _instanceof(value, Float64Array) ? emitTypedArrayChunk(request, id, "g", value) : _instanceof(value, BigInt64Array) ? emitTypedArrayChunk(request, id, "M", value) : _instanceof(value, BigUint64Array) ? emitTypedArrayChunk(request, id, "m", value) : _instanceof(value, DataView) ? emitTypedArrayChunk(request, id, "V", value) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
  }
  var emptyRoot = {};
  function retryTask(request, task) {
    if (0 === task.status) {
      task.status = 5;
      try {
        modelRoot = task.model;
        var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
        modelRoot = resolvedModel;
        task.keyPath = null;
        task.implicitSlot = false;
        if ("object" === (typeof resolvedModel === "undefined" ? "undefined" : _type_of(resolvedModel)) && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
        else {
          var json = stringify(resolvedModel);
          emitModelChunk(request, task.id, json);
        }
        request.abortableTasks.delete(task);
        task.status = 1;
      } catch (thrownValue) {
        if (12 === request.status) {
          request.abortableTasks.delete(task);
          task.status = 3;
          var model = stringify(serializeByValueID(request.fatalError));
          emitModelChunk(request, task.id, model);
        } else {
          var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
          if ("object" === (typeof x === "undefined" ? "undefined" : _type_of(x)) && null !== x && "function" === typeof x.then) {
            task.status = 0;
            task.thenableState = getThenableStateAfterSuspending();
            var ping = task.ping;
            x.then(ping, ping);
          } else {
            request.abortableTasks.delete(task);
            task.status = 4;
            var digest = logRecoverableError(request, x);
            emitErrorChunk(request, task.id, digest);
          }
        }
      } finally {
      }
    }
  }
  function performWork(request) {
    var prevDispatcher = ReactSharedInternalsServer.H;
    ReactSharedInternalsServer.H = HooksDispatcher;
    var prevRequest = currentRequest;
    currentRequest$1 = currentRequest = request;
    var hadAbortableTasks = 0 < request.abortableTasks.size;
    try {
      var pingedTasks = request.pingedTasks;
      request.pingedTasks = [];
      for (var i = 0; i < pingedTasks.length; i++) retryTask(request, pingedTasks[i]);
      null !== request.destination && flushCompletedChunks(request, request.destination);
      if (hadAbortableTasks && 0 === request.abortableTasks.size) {
        var onAllReady = request.onAllReady;
        onAllReady();
      }
    } catch (error) {
      logRecoverableError(request, error), fatalError(request, error);
    } finally {
      ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
    }
  }
  function flushCompletedChunks(request, destination) {
    currentView = new Uint8Array(2048);
    writtenBytes = 0;
    try {
      for (var importsChunks = request.completedImportChunks, i = 0; i < importsChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, importsChunks[i]);
      importsChunks.splice(0, i);
      var hintChunks = request.completedHintChunks;
      for (i = 0; i < hintChunks.length; i++) writeChunkAndReturn(destination, hintChunks[i]);
      hintChunks.splice(0, i);
      var regularChunks = request.completedRegularChunks;
      for (i = 0; i < regularChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, regularChunks[i]);
      regularChunks.splice(0, i);
      var errorChunks = request.completedErrorChunks;
      for (i = 0; i < errorChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, errorChunks[i]);
      errorChunks.splice(0, i);
    } finally {
      request.flushScheduled = false, currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
    }
    0 === request.pendingChunks && (request.status = 14, destination.close(), request.destination = null);
  }
  function startWork(request) {
    request.flushScheduled = null !== request.destination;
    supportsRequestStorage ? scheduleMicrotask(function() {
      requestStorage.run(request, performWork, request);
    }) : scheduleMicrotask(function() {
      return performWork(request);
    });
    setTimeout(function() {
      10 === request.status && (request.status = 11);
    }, 0);
  }
  function enqueueFlush(request) {
    false === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = true, setTimeout(function() {
      request.flushScheduled = false;
      var destination = request.destination;
      destination && flushCompletedChunks(request, destination);
    }, 0));
  }
  function abort(request, reason) {
    try {
      11 >= request.status && (request.status = 12);
      var abortableTasks = request.abortableTasks;
      if (0 < abortableTasks.size) {
        var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === (typeof reason === "undefined" ? "undefined" : _type_of(reason)) && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
        request.fatalError = errorId;
        request.pendingChunks++;
        emitErrorChunk(request, errorId, digest, error);
        abortableTasks.forEach(function(task) {
          if (5 !== task.status) {
            task.status = 3;
            var ref = serializeByValueID(errorId);
            task = encodeReferenceChunk(request, task.id, ref);
            request.completedErrorChunks.push(task);
          }
        });
        abortableTasks.clear();
        var onAllReady = request.onAllReady;
        onAllReady();
      }
      var abortListeners = request.abortListeners;
      if (0 < abortListeners.size) {
        var error$23 = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === (typeof reason === "undefined" ? "undefined" : _type_of(reason)) && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
        abortListeners.forEach(function(callback) {
          return callback(error$23);
        });
        abortListeners.clear();
      }
      null !== request.destination && flushCompletedChunks(request, request.destination);
    } catch (error$24) {
      logRecoverableError(request, error$24), fatalError(request, error$24);
    }
  }
  function resolveServerReference(bundlerConfig, id) {
    var name = "", resolvedModuleData = bundlerConfig[id];
    if (resolvedModuleData) name = resolvedModuleData.name;
    else {
      var idx = id.lastIndexOf("#");
      -1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
      if (!resolvedModuleData) throw Error('Could not find the module "' + id + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
    }
    return resolvedModuleData.async ? [
      resolvedModuleData.id,
      resolvedModuleData.chunks,
      name,
      1
    ] : [
      resolvedModuleData.id,
      resolvedModuleData.chunks,
      name
    ];
  }
  var chunkCache = /* @__PURE__ */ new Map();
  (_globalThis = globalThis).__WAKU_SERVER_MODULE_LOADING__ || (_globalThis.__WAKU_SERVER_MODULE_LOADING__ = /* @__PURE__ */ new Map());
  (_globalThis1 = globalThis).__WAKU_SERVER_MODULE_CACHE__ || (_globalThis1.__WAKU_SERVER_MODULE_CACHE__ = /* @__PURE__ */ new Map());
  (_globalThis2 = globalThis).__WAKU_SERVER_CHUNK_LOAD__ || (_globalThis2.__WAKU_SERVER_CHUNK_LOAD__ = function(id) {
    if (!globalThis.__WAKU_SERVER_MODULE_LOADING__.has(id)) {
      globalThis.__WAKU_SERVER_MODULE_LOADING__.set(id, globalThis.__WAKU_SERVER_IMPORT__(id).then(function(m) {
        globalThis.__WAKU_SERVER_MODULE_CACHE__.set(id, m);
      }));
    }
    return globalThis.__WAKU_SERVER_MODULE_LOADING__.get(id);
  });
  (_globalThis3 = globalThis).__WAKU_SERVER_REQUIRE__ || (_globalThis3.__WAKU_SERVER_REQUIRE__ = function(id) {
    return globalThis.__WAKU_SERVER_MODULE_CACHE__.get(id);
  });
  function requireAsyncModule(id) {
    var promise = __WAKU_SERVER_REQUIRE__(id);
    if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
    promise.then(function(value) {
      promise.status = "fulfilled";
      promise.value = value;
    }, function(reason) {
      promise.status = "rejected";
      promise.reason = reason;
    });
    return promise;
  }
  function ignoreReject() {
  }
  function preloadModule(metadata) {
    for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length; ) {
      var chunkId = chunks[i++];
      chunks[i++];
      var entry = chunkCache.get(chunkId);
      if (void 0 === entry) {
        entry = __WAKU_SERVER_CHUNK_LOAD__(chunkId);
        promises.push(entry);
        var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
        entry.then(resolve, ignoreReject);
        chunkCache.set(chunkId, entry);
      } else null !== entry && promises.push(entry);
    }
    return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
      return requireAsyncModule(metadata[0]);
    }) : 0 < promises.length ? Promise.all(promises) : null;
  }
  function requireModule(metadata) {
    var moduleExports = __WAKU_SERVER_REQUIRE__(metadata[0]);
    if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
    else throw moduleExports.reason;
    return "*" === metadata[2] ? moduleExports : "" === metadata[2] ? moduleExports.__esModule ? moduleExports.default : moduleExports : moduleExports[metadata[2]];
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function Chunk(status, value, reason, response) {
    this.status = status;
    this.value = value;
    this.reason = reason;
    this._response = response;
  }
  Chunk.prototype = Object.create(Promise.prototype);
  Chunk.prototype.then = function(resolve, reject) {
    switch (this.status) {
      case "resolved_model":
        initializeModelChunk(this);
    }
    switch (this.status) {
      case "fulfilled":
        resolve(this.value);
        break;
      case "pending":
      case "blocked":
      case "cyclic":
        resolve && (null === this.value && (this.value = []), this.value.push(resolve));
        reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
        break;
      default:
        reject(this.reason);
    }
  };
  function createPendingChunk(response) {
    return new Chunk("pending", null, null, response);
  }
  function wakeChunk(listeners, value) {
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])(value);
  }
  function triggerErrorOnChunk(chunk, error) {
    if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
    else {
      var listeners = chunk.reason;
      chunk.status = "rejected";
      chunk.reason = error;
      null !== listeners && wakeChunk(listeners, error);
    }
  }
  function resolveModelChunk(chunk, value, id) {
    if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? '"$undefined"' : value.slice(1)) : chunk.enqueueModel(value);
    else {
      var resolveListeners = chunk.value, rejectListeners = chunk.reason;
      chunk.status = "resolved_model";
      chunk.value = value;
      chunk.reason = id;
      if (null !== resolveListeners) switch (initializeModelChunk(chunk), chunk.status) {
        case "fulfilled":
          wakeChunk(resolveListeners, chunk.value);
          break;
        case "pending":
        case "blocked":
        case "cyclic":
          if (chunk.value) for (value = 0; value < resolveListeners.length; value++) chunk.value.push(resolveListeners[value]);
          else chunk.value = resolveListeners;
          if (chunk.reason) {
            if (rejectListeners) for (value = 0; value < rejectListeners.length; value++) chunk.reason.push(rejectListeners[value]);
          } else chunk.reason = rejectListeners;
          break;
        case "rejected":
          rejectListeners && wakeChunk(rejectListeners, chunk.reason);
      }
    }
  }
  function createResolvedIteratorResultChunk(response, value, done) {
    return new Chunk("resolved_model", (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", -1, response);
  }
  function resolveIteratorResultChunk(chunk, value, done) {
    resolveModelChunk(chunk, (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", -1);
  }
  function loadServerReference$1(response, id, bound, parentChunk, parentObject, key) {
    var serverReference = resolveServerReference(response._bundlerConfig, id);
    id = preloadModule(serverReference);
    if (bound) bound = Promise.all([
      bound,
      id
    ]).then(function(_ref) {
      _ref = _ref[0];
      var fn = requireModule(serverReference);
      return fn.bind.apply(fn, [
        null
      ].concat(_ref));
    });
    else if (id) bound = Promise.resolve(id).then(function() {
      return requireModule(serverReference);
    });
    else return requireModule(serverReference);
    bound.then(createModelResolver(parentChunk, parentObject, key, false, response, createModel, []), createModelReject(parentChunk));
    return null;
  }
  function reviveModel(response, parentObj, parentKey, value, reference) {
    if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference);
    if ("object" === (typeof value === "undefined" ? "undefined" : _type_of(value)) && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), Array.isArray(value)) for (var i = 0; i < value.length; i++) value[i] = reviveModel(response, value, "" + i, value[i], void 0 !== reference ? reference + ":" + i : void 0);
    else for (i in value) hasOwnProperty.call(value, i) && (parentObj = void 0 !== reference && -1 === i.indexOf(":") ? reference + ":" + i : void 0, parentObj = reviveModel(response, value, i, value[i], parentObj), void 0 !== parentObj ? value[i] = parentObj : delete value[i]);
    return value;
  }
  var initializingChunk = null, initializingChunkBlockedModel = null;
  function initializeModelChunk(chunk) {
    var prevChunk = initializingChunk, prevBlocked = initializingChunkBlockedModel;
    initializingChunk = chunk;
    initializingChunkBlockedModel = null;
    var rootReference = -1 === chunk.reason ? void 0 : chunk.reason.toString(16), resolvedModel = chunk.value;
    chunk.status = "cyclic";
    chunk.value = null;
    chunk.reason = null;
    try {
      var rawModel = JSON.parse(resolvedModel), value = reviveModel(chunk._response, {
        "": rawModel
      }, "", rawModel, rootReference);
      if (null !== initializingChunkBlockedModel && 0 < initializingChunkBlockedModel.deps) initializingChunkBlockedModel.value = value, chunk.status = "blocked";
      else {
        var resolveListeners = chunk.value;
        chunk.status = "fulfilled";
        chunk.value = value;
        null !== resolveListeners && wakeChunk(resolveListeners, value);
      }
    } catch (error) {
      chunk.status = "rejected", chunk.reason = error;
    } finally {
      initializingChunk = prevChunk, initializingChunkBlockedModel = prevBlocked;
    }
  }
  function reportGlobalError(response, error) {
    response._chunks.forEach(function(chunk) {
      "pending" === chunk.status && triggerErrorOnChunk(chunk, error);
    });
  }
  function getChunk(response, id) {
    var chunks = response._chunks, chunk = chunks.get(id);
    chunk || (chunk = response._formData.get(response._prefix + id), chunk = null != chunk ? new Chunk("resolved_model", chunk, id, response) : createPendingChunk(response), chunks.set(id, chunk));
    return chunk;
  }
  function createModelResolver(chunk, parentObject, key, cyclic, response, map, path) {
    if (initializingChunkBlockedModel) {
      var blocked = initializingChunkBlockedModel;
      cyclic || blocked.deps++;
    } else blocked = initializingChunkBlockedModel = {
      deps: cyclic ? 0 : 1,
      value: null
    };
    return function(value) {
      for (var i = 1; i < path.length; i++) value = value[path[i]];
      parentObject[key] = map(response, value);
      "" === key && null === blocked.value && (blocked.value = parentObject[key]);
      blocked.deps--;
      0 === blocked.deps && "blocked" === chunk.status && (value = chunk.value, chunk.status = "fulfilled", chunk.value = blocked.value, null !== value && wakeChunk(value, blocked.value));
    };
  }
  function createModelReject(chunk) {
    return function(error) {
      return triggerErrorOnChunk(chunk, error);
    };
  }
  function getOutlinedModel(response, reference, parentObject, key, map) {
    reference = reference.split(":");
    var id = parseInt(reference[0], 16);
    id = getChunk(response, id);
    switch (id.status) {
      case "resolved_model":
        initializeModelChunk(id);
    }
    switch (id.status) {
      case "fulfilled":
        parentObject = id.value;
        for (key = 1; key < reference.length; key++) parentObject = parentObject[reference[key]];
        return map(response, parentObject);
      case "pending":
      case "blocked":
      case "cyclic":
        var parentChunk = initializingChunk;
        id.then(createModelResolver(parentChunk, parentObject, key, "cyclic" === id.status, response, map, reference), createModelReject(parentChunk));
        return null;
      default:
        throw id.reason;
    }
  }
  function createMap(response, model) {
    return new Map(model);
  }
  function createSet(response, model) {
    return new Set(model);
  }
  function extractIterator(response, model) {
    return model[Symbol.iterator]();
  }
  function createModel(response, model) {
    return model;
  }
  function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey) {
    reference = parseInt(reference.slice(2), 16);
    reference = response._formData.get(response._prefix + reference);
    reference = constructor === ArrayBuffer ? reference.arrayBuffer() : reference.arrayBuffer().then(function(buffer) {
      return new constructor(buffer);
    });
    bytesPerElement = initializingChunk;
    reference.then(createModelResolver(bytesPerElement, parentObject, parentKey, false, response, createModel, []), createModelReject(bytesPerElement));
    return null;
  }
  function resolveStream(response, id, stream, controller) {
    var chunks = response._chunks;
    stream = new Chunk("fulfilled", stream, controller, response);
    chunks.set(id, stream);
    response = response._formData.getAll(response._prefix + id);
    for (id = 0; id < response.length; id++) chunks = response[id], "C" === chunks[0] ? controller.close("C" === chunks ? '"$undefined"' : chunks.slice(1)) : controller.enqueueModel(chunks);
  }
  function parseReadableStream(response, reference, type) {
    reference = parseInt(reference.slice(2), 16);
    var controller = null;
    type = new ReadableStream({
      type,
      start: function start(c) {
        controller = c;
      }
    });
    var previousBlockedChunk = null;
    resolveStream(response, reference, type, {
      enqueueModel: function enqueueModel(json) {
        if (null === previousBlockedChunk) {
          var chunk = new Chunk("resolved_model", json, -1, response);
          initializeModelChunk(chunk);
          "fulfilled" === chunk.status ? controller.enqueue(chunk.value) : (chunk.then(function(v) {
            return controller.enqueue(v);
          }, function(e) {
            return controller.error(e);
          }), previousBlockedChunk = chunk);
        } else {
          chunk = previousBlockedChunk;
          var chunk$27 = createPendingChunk(response);
          chunk$27.then(function(v) {
            return controller.enqueue(v);
          }, function(e) {
            return controller.error(e);
          });
          previousBlockedChunk = chunk$27;
          chunk.then(function() {
            previousBlockedChunk === chunk$27 && (previousBlockedChunk = null);
            resolveModelChunk(chunk$27, json, -1);
          });
        }
      },
      close: function close2() {
        if (null === previousBlockedChunk) controller.close();
        else {
          var blockedChunk = previousBlockedChunk;
          previousBlockedChunk = null;
          blockedChunk.then(function() {
            return controller.close();
          });
        }
      },
      error: function error(error) {
        if (null === previousBlockedChunk) controller.error(error);
        else {
          var blockedChunk = previousBlockedChunk;
          previousBlockedChunk = null;
          blockedChunk.then(function() {
            return controller.error(error);
          });
        }
      }
    });
    return type;
  }
  function asyncIterator() {
    return this;
  }
  function createIterator(next) {
    next = {
      next
    };
    next[ASYNC_ITERATOR] = asyncIterator;
    return next;
  }
  function parseAsyncIterable(response, reference, iterator) {
    reference = parseInt(reference.slice(2), 16);
    var buffer = [], closed = false, nextWriteIndex = 0, $jscomp$compprop2 = {};
    $jscomp$compprop2 = ($jscomp$compprop2[ASYNC_ITERATOR] = function $jscomp$compprop22() {
      var nextReadIndex = 0;
      return createIterator(function(arg) {
        if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
        if (nextReadIndex === buffer.length) {
          if (closed) return new Chunk("fulfilled", {
            done: true,
            value: void 0
          }, null, response);
          buffer[nextReadIndex] = createPendingChunk(response);
        }
        return buffer[nextReadIndex++];
      });
    }, $jscomp$compprop2);
    iterator = iterator ? $jscomp$compprop2[ASYNC_ITERATOR]() : $jscomp$compprop2;
    resolveStream(response, reference, iterator, {
      enqueueModel: function enqueueModel(value) {
        nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, false) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, false);
        nextWriteIndex++;
      },
      close: function close2(value) {
        closed = true;
        nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, true) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, true);
        for (nextWriteIndex++; nextWriteIndex < buffer.length; ) resolveIteratorResultChunk(buffer[nextWriteIndex++], '"$undefined"', true);
      },
      error: function error(error) {
        closed = true;
        for (nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = createPendingChunk(response)); nextWriteIndex < buffer.length; ) triggerErrorOnChunk(buffer[nextWriteIndex++], error);
      }
    });
    return iterator;
  }
  function parseModelString(response, obj, key, value, reference) {
    if ("$" === value[0]) {
      switch (value[1]) {
        case "$":
          return value.slice(1);
        case "@":
          return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
        case "F":
          return value = value.slice(2), value = getOutlinedModel(response, value, obj, key, createModel), loadServerReference$1(response, value.id, value.bound, initializingChunk, obj, key);
        case "T":
          if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
          return createTemporaryReference(response._temporaryReferences, reference);
        case "Q":
          return value = value.slice(2), getOutlinedModel(response, value, obj, key, createMap);
        case "W":
          return value = value.slice(2), getOutlinedModel(response, value, obj, key, createSet);
        case "K":
          obj = value.slice(2);
          var formPrefix = response._prefix + obj + "_", data = new FormData();
          response._formData.forEach(function(entry, entryKey) {
            entryKey.startsWith(formPrefix) && data.append(entryKey.slice(formPrefix.length), entry);
          });
          return data;
        case "i":
          return value = value.slice(2), getOutlinedModel(response, value, obj, key, extractIterator);
        case "I":
          return Infinity;
        case "-":
          return "$-0" === value ? -0 : -Infinity;
        case "N":
          return NaN;
        case "u":
          return;
        case "D":
          return new Date(Date.parse(value.slice(2)));
        case "n":
          return BigInt(value.slice(2));
      }
      switch (value[1]) {
        case "A":
          return parseTypedArray(response, value, ArrayBuffer, 1, obj, key);
        case "O":
          return parseTypedArray(response, value, Int8Array, 1, obj, key);
        case "o":
          return parseTypedArray(response, value, Uint8Array, 1, obj, key);
        case "U":
          return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key);
        case "S":
          return parseTypedArray(response, value, Int16Array, 2, obj, key);
        case "s":
          return parseTypedArray(response, value, Uint16Array, 2, obj, key);
        case "L":
          return parseTypedArray(response, value, Int32Array, 4, obj, key);
        case "l":
          return parseTypedArray(response, value, Uint32Array, 4, obj, key);
        case "G":
          return parseTypedArray(response, value, Float32Array, 4, obj, key);
        case "g":
          return parseTypedArray(response, value, Float64Array, 8, obj, key);
        case "M":
          return parseTypedArray(response, value, BigInt64Array, 8, obj, key);
        case "m":
          return parseTypedArray(response, value, BigUint64Array, 8, obj, key);
        case "V":
          return parseTypedArray(response, value, DataView, 1, obj, key);
        case "B":
          return obj = parseInt(value.slice(2), 16), response._formData.get(response._prefix + obj);
      }
      switch (value[1]) {
        case "R":
          return parseReadableStream(response, value, void 0);
        case "r":
          return parseReadableStream(response, value, "bytes");
        case "X":
          return parseAsyncIterable(response, value, false);
        case "x":
          return parseAsyncIterable(response, value, true);
      }
      value = value.slice(1);
      return getOutlinedModel(response, value, obj, key, createModel);
    }
    return value;
  }
  function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
    var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), chunks = /* @__PURE__ */ new Map();
    return {
      _bundlerConfig: bundlerConfig,
      _prefix: formFieldPrefix,
      _formData: backingFormData,
      _chunks: chunks,
      _temporaryReferences: temporaryReferences
    };
  }
  function close(response) {
    reportGlobalError(response, Error("Connection closed."));
  }
  function loadServerReference(bundlerConfig, id, bound) {
    var serverReference = resolveServerReference(bundlerConfig, id);
    bundlerConfig = preloadModule(serverReference);
    return bound ? Promise.all([
      bound,
      bundlerConfig
    ]).then(function(_ref) {
      _ref = _ref[0];
      var fn = requireModule(serverReference);
      return fn.bind.apply(fn, [
        null
      ].concat(_ref));
    }) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
      return requireModule(serverReference);
    }) : Promise.resolve(requireModule(serverReference));
  }
  function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix) {
    body = createResponse(serverManifest, formFieldPrefix, void 0, body);
    close(body);
    body = getChunk(body, 0);
    body.then(function() {
    });
    if ("fulfilled" !== body.status) throw body.reason;
    return body.value;
  }
  reactServerDomWebpackServer_edge_production.createClientModuleProxy = function(moduleId) {
    moduleId = registerClientReferenceImpl({}, moduleId, false);
    return new Proxy(moduleId, proxyHandlers$1);
  };
  reactServerDomWebpackServer_edge_production.createTemporaryReferenceSet = function() {
    return /* @__PURE__ */ new WeakMap();
  };
  reactServerDomWebpackServer_edge_production.decodeAction = function(body, serverManifest) {
    var formData = new FormData(), action = null;
    body.forEach(function(value, key) {
      key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? (value = "$ACTION_" + key.slice(12) + ":", value = decodeBoundActionMetaData(body, serverManifest, value), action = loadServerReference(serverManifest, value.id, value.bound)) : key.startsWith("$ACTION_ID_") && (value = key.slice(11), action = loadServerReference(serverManifest, value, null)) : formData.append(key, value);
    });
    return null === action ? null : action.then(function(fn) {
      return fn.bind(null, formData);
    });
  };
  reactServerDomWebpackServer_edge_production.decodeFormState = function(actionResult, body, serverManifest) {
    var keyPath = body.get("$ACTION_KEY");
    if ("string" !== typeof keyPath) return Promise.resolve(null);
    var metaData = null;
    body.forEach(function(value, key) {
      key.startsWith("$ACTION_REF_") && (value = "$ACTION_" + key.slice(12) + ":", metaData = decodeBoundActionMetaData(body, serverManifest, value));
    });
    if (null === metaData) return Promise.resolve(null);
    var referenceId = metaData.id;
    return Promise.resolve(metaData.bound).then(function(bound) {
      return null === bound ? null : [
        actionResult,
        keyPath,
        referenceId,
        bound.length - 1
      ];
    });
  };
  reactServerDomWebpackServer_edge_production.decodeReply = function(body, webpackMap, options) {
    if ("string" === typeof body) {
      var form = new FormData();
      form.append("0", body);
      body = form;
    }
    body = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, body);
    webpackMap = getChunk(body, 0);
    close(body);
    return webpackMap;
  };
  reactServerDomWebpackServer_edge_production.registerClientReference = function(proxyImplementation, id, exportName) {
    return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, false);
  };
  reactServerDomWebpackServer_edge_production.registerServerReference = function(reference, id, exportName) {
    return Object.defineProperties(reference, {
      $$typeof: {
        value: SERVER_REFERENCE_TAG
      },
      $$id: {
        value: null === exportName ? id : id + "#" + exportName,
        configurable: true
      },
      $$bound: {
        value: null,
        configurable: true
      },
      bind: {
        value: bind,
        configurable: true
      }
    });
  };
  reactServerDomWebpackServer_edge_production.renderToReadableStream = function(model, webpackMap, options) {
    var request = new RequestInstance(20, model, webpackMap, options ? options.onError : void 0, options ? options.identifierPrefix : void 0, options ? options.onPostpone : void 0, options ? options.temporaryReferences : void 0, void 0, void 0, noop, noop);
    if (options && options.signal) {
      var signal = options.signal;
      if (signal.aborted) abort(request, signal.reason);
      else {
        var listener = function listener1() {
          abort(request, signal.reason);
          signal.removeEventListener("abort", listener);
        };
        signal.addEventListener("abort", listener);
      }
    }
    return new ReadableStream({
      type: "bytes",
      start: function start() {
        startWork(request);
      },
      pull: function pull(controller) {
        if (13 === request.status) request.status = 14, closeWithError(controller, request.fatalError);
        else if (14 !== request.status && null === request.destination) {
          request.destination = controller;
          try {
            flushCompletedChunks(request, controller);
          } catch (error) {
            logRecoverableError(request, error), fatalError(request, error);
          }
        }
      },
      cancel: function cancel(reason) {
        request.destination = null;
        abort(request, reason);
      }
    }, {
      highWaterMark: 0
    });
  };
  return reactServerDomWebpackServer_edge_production;
}
var hasRequiredServer_edge;
function requireServer_edge() {
  if (hasRequiredServer_edge) return server_edge;
  hasRequiredServer_edge = 1;
  var s;
  {
    s = requireReactServerDomWebpackServer_edge_production();
  }
  server_edge.renderToReadableStream = s.renderToReadableStream;
  server_edge.decodeReply = s.decodeReply;
  server_edge.decodeAction = s.decodeAction;
  server_edge.decodeFormState = s.decodeFormState;
  server_edge.registerServerReference = s.registerServerReference;
  server_edge.registerClientReference = s.registerClientReference;
  server_edge.createClientModuleProxy = s.createClientModuleProxy;
  server_edge.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
  return server_edge;
}
export {
  requireServer_edge as r
};
