"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/@barba/core/dist/barba.umd.js
  var require_barba_umd = __commonJS({
    "node_modules/@barba/core/dist/barba.umd.js"(exports, module) {
      init_live_reload();
      !function(t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n();
      }(exports, function() {
        function t(t2, n2) {
          for (var r2 = 0; r2 < n2.length; r2++) {
            var e2 = n2[r2];
            e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t2, e2.key, e2);
          }
        }
        function n(n2, r2, e2) {
          return r2 && t(n2.prototype, r2), e2 && t(n2, e2), n2;
        }
        function r() {
          return (r = Object.assign || function(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = arguments[n2];
              for (var e2 in r2)
                Object.prototype.hasOwnProperty.call(r2, e2) && (t2[e2] = r2[e2]);
            }
            return t2;
          }).apply(this, arguments);
        }
        function e(t2, n2) {
          t2.prototype = Object.create(n2.prototype), t2.prototype.constructor = t2, t2.__proto__ = n2;
        }
        function i(t2) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          })(t2);
        }
        function o(t2, n2) {
          return (o = Object.setPrototypeOf || function(t3, n3) {
            return t3.__proto__ = n3, t3;
          })(t2, n2);
        }
        function u(t2, n2, r2) {
          return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct : function(t3, n3, r3) {
            var e2 = [null];
            e2.push.apply(e2, n3);
            var i2 = new (Function.bind.apply(t3, e2))();
            return r3 && o(i2, r3.prototype), i2;
          }).apply(null, arguments);
        }
        function f(t2) {
          var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return (f = function(t3) {
            if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]"))
              return t3;
            if ("function" != typeof t3)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n2) {
              if (n2.has(t3))
                return n2.get(t3);
              n2.set(t3, r2);
            }
            function r2() {
              return u(t3, arguments, i(this).constructor);
            }
            return r2.prototype = Object.create(t3.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), o(r2, t3);
          })(t2);
        }
        function s(t2, n2) {
          try {
            var r2 = t2();
          } catch (t3) {
            return n2(t3);
          }
          return r2 && r2.then ? r2.then(void 0, n2) : r2;
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var c, a = "2.9.7", h = function() {
        };
        !function(t2) {
          t2[t2.off = 0] = "off", t2[t2.error = 1] = "error", t2[t2.warning = 2] = "warning", t2[t2.info = 3] = "info", t2[t2.debug = 4] = "debug";
        }(c || (c = {}));
        var v = c.off, l = function() {
          function t2(t3) {
            this.t = t3;
          }
          t2.getLevel = function() {
            return v;
          }, t2.setLevel = function(t3) {
            return v = c[t3];
          };
          var n2 = t2.prototype;
          return n2.error = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.error, c.error, n3);
          }, n2.warn = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.warn, c.warning, n3);
          }, n2.info = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.info, c.info, n3);
          }, n2.debug = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            this.i(console.log, c.debug, n3);
          }, n2.i = function(n3, r2, e2) {
            r2 <= t2.getLevel() && n3.apply(console, ["[" + this.t + "] "].concat(e2));
          }, t2;
        }(), d = O, m = E, p = g, w = x, b = T, y = "/", P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");
        function g(t2, n2) {
          for (var r2, e2 = [], i2 = 0, o2 = 0, u2 = "", f2 = n2 && n2.delimiter || y, s2 = n2 && n2.whitelist || void 0, c2 = false; null !== (r2 = P.exec(t2)); ) {
            var a2 = r2[0], h2 = r2[1], v2 = r2.index;
            if (u2 += t2.slice(o2, v2), o2 = v2 + a2.length, h2)
              u2 += h2[1], c2 = true;
            else {
              var l2 = "", d2 = r2[2], m2 = r2[3], p2 = r2[4], w2 = r2[5];
              if (!c2 && u2.length) {
                var b2 = u2.length - 1, g2 = u2[b2];
                (!s2 || s2.indexOf(g2) > -1) && (l2 = g2, u2 = u2.slice(0, b2));
              }
              u2 && (e2.push(u2), u2 = "", c2 = false);
              var E2 = m2 || p2, x2 = l2 || f2;
              e2.push({ name: d2 || i2++, prefix: l2, delimiter: x2, optional: "?" === w2 || "*" === w2, repeat: "+" === w2 || "*" === w2, pattern: E2 ? A(E2) : "[^" + k(x2 === f2 ? x2 : x2 + f2) + "]+?" });
            }
          }
          return (u2 || o2 < t2.length) && e2.push(u2 + t2.substr(o2)), e2;
        }
        function E(t2, n2) {
          return function(r2, e2) {
            var i2 = t2.exec(r2);
            if (!i2)
              return false;
            for (var o2 = i2[0], u2 = i2.index, f2 = {}, s2 = e2 && e2.decode || decodeURIComponent, c2 = 1; c2 < i2.length; c2++)
              if (void 0 !== i2[c2]) {
                var a2 = n2[c2 - 1];
                f2[a2.name] = a2.repeat ? i2[c2].split(a2.delimiter).map(function(t3) {
                  return s2(t3, a2);
                }) : s2(i2[c2], a2);
              }
            return { path: o2, index: u2, params: f2 };
          };
        }
        function x(t2, n2) {
          for (var r2 = new Array(t2.length), e2 = 0; e2 < t2.length; e2++)
            "object" == typeof t2[e2] && (r2[e2] = new RegExp("^(?:" + t2[e2].pattern + ")$", R(n2)));
          return function(n3, e3) {
            for (var i2 = "", o2 = e3 && e3.encode || encodeURIComponent, u2 = !e3 || false !== e3.validate, f2 = 0; f2 < t2.length; f2++) {
              var s2 = t2[f2];
              if ("string" != typeof s2) {
                var c2, a2 = n3 ? n3[s2.name] : void 0;
                if (Array.isArray(a2)) {
                  if (!s2.repeat)
                    throw new TypeError('Expected "' + s2.name + '" to not repeat, but got array');
                  if (0 === a2.length) {
                    if (s2.optional)
                      continue;
                    throw new TypeError('Expected "' + s2.name + '" to not be empty');
                  }
                  for (var h2 = 0; h2 < a2.length; h2++) {
                    if (c2 = o2(a2[h2], s2), u2 && !r2[f2].test(c2))
                      throw new TypeError('Expected all "' + s2.name + '" to match "' + s2.pattern + '"');
                    i2 += (0 === h2 ? s2.prefix : s2.delimiter) + c2;
                  }
                } else if ("string" != typeof a2 && "number" != typeof a2 && "boolean" != typeof a2) {
                  if (!s2.optional)
                    throw new TypeError('Expected "' + s2.name + '" to be ' + (s2.repeat ? "an array" : "a string"));
                } else {
                  if (c2 = o2(String(a2), s2), u2 && !r2[f2].test(c2))
                    throw new TypeError('Expected "' + s2.name + '" to match "' + s2.pattern + '", but got "' + c2 + '"');
                  i2 += s2.prefix + c2;
                }
              } else
                i2 += s2;
            }
            return i2;
          };
        }
        function k(t2) {
          return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function A(t2) {
          return t2.replace(/([=!:$/()])/g, "\\$1");
        }
        function R(t2) {
          return t2 && t2.sensitive ? "" : "i";
        }
        function T(t2, n2, r2) {
          for (var e2 = (r2 = r2 || {}).strict, i2 = false !== r2.start, o2 = false !== r2.end, u2 = r2.delimiter || y, f2 = [].concat(r2.endsWith || []).map(k).concat("$").join("|"), s2 = i2 ? "^" : "", c2 = 0; c2 < t2.length; c2++) {
            var a2 = t2[c2];
            if ("string" == typeof a2)
              s2 += k(a2);
            else {
              var h2 = a2.repeat ? "(?:" + a2.pattern + ")(?:" + k(a2.delimiter) + "(?:" + a2.pattern + "))*" : a2.pattern;
              n2 && n2.push(a2), s2 += a2.optional ? a2.prefix ? "(?:" + k(a2.prefix) + "(" + h2 + "))?" : "(" + h2 + ")?" : k(a2.prefix) + "(" + h2 + ")";
            }
          }
          if (o2)
            e2 || (s2 += "(?:" + k(u2) + ")?"), s2 += "$" === f2 ? "$" : "(?=" + f2 + ")";
          else {
            var v2 = t2[t2.length - 1], l2 = "string" == typeof v2 ? v2[v2.length - 1] === u2 : void 0 === v2;
            e2 || (s2 += "(?:" + k(u2) + "(?=" + f2 + "))?"), l2 || (s2 += "(?=" + k(u2) + "|" + f2 + ")");
          }
          return new RegExp(s2, R(r2));
        }
        function O(t2, n2, r2) {
          return t2 instanceof RegExp ? function(t3, n3) {
            if (!n3)
              return t3;
            var r3 = t3.source.match(/\((?!\?)/g);
            if (r3)
              for (var e2 = 0; e2 < r3.length; e2++)
                n3.push({ name: e2, prefix: null, delimiter: null, optional: false, repeat: false, pattern: null });
            return t3;
          }(t2, n2) : Array.isArray(t2) ? function(t3, n3, r3) {
            for (var e2 = [], i2 = 0; i2 < t3.length; i2++)
              e2.push(O(t3[i2], n3, r3).source);
            return new RegExp("(?:" + e2.join("|") + ")", R(r3));
          }(t2, n2, r2) : function(t3, n3, r3) {
            return T(g(t3, r3), n3, r3);
          }(t2, n2, r2);
        }
        d.match = function(t2, n2) {
          var r2 = [];
          return E(O(t2, r2, n2), r2);
        }, d.regexpToFunction = m, d.parse = p, d.compile = function(t2, n2) {
          return x(g(t2, n2), n2);
        }, d.tokensToFunction = w, d.tokensToRegExp = b;
        var S = { container: "container", history: "history", namespace: "namespace", prefix: "data-barba", prevent: "prevent", wrapper: "wrapper" }, j = new (function() {
          function t2() {
            this.o = S, this.u = new DOMParser();
          }
          var n2 = t2.prototype;
          return n2.toString = function(t3) {
            return t3.outerHTML;
          }, n2.toDocument = function(t3) {
            return this.u.parseFromString(t3, "text/html");
          }, n2.toElement = function(t3) {
            var n3 = document.createElement("div");
            return n3.innerHTML = t3, n3;
          }, n2.getHtml = function(t3) {
            return void 0 === t3 && (t3 = document), this.toString(t3.documentElement);
          }, n2.getWrapper = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
          }, n2.getContainer = function(t3) {
            return void 0 === t3 && (t3 = document), t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
          }, n2.removeContainer = function(t3) {
            document.body.contains(t3) && t3.parentNode.removeChild(t3);
          }, n2.addContainer = function(t3, n3) {
            var r2 = this.getContainer();
            r2 ? this.s(t3, r2) : n3.appendChild(t3);
          }, n2.getNamespace = function(t3) {
            void 0 === t3 && (t3 = document);
            var n3 = t3.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
            return n3 ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
          }, n2.getHref = function(t3) {
            if (t3.tagName && "a" === t3.tagName.toLowerCase()) {
              if ("string" == typeof t3.href)
                return t3.href;
              var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
              if (n3)
                return this.resolveUrl(n3.baseVal || n3);
            }
            return null;
          }, n2.resolveUrl = function() {
            for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
              n3[r2] = arguments[r2];
            var e2 = n3.length;
            if (0 === e2)
              throw new Error("resolveUrl requires at least one argument; got none.");
            var i2 = document.createElement("base");
            if (i2.href = arguments[0], 1 === e2)
              return i2.href;
            var o2 = document.getElementsByTagName("head")[0];
            o2.insertBefore(i2, o2.firstChild);
            for (var u2, f2 = document.createElement("a"), s2 = 1; s2 < e2; s2++)
              f2.href = arguments[s2], i2.href = u2 = f2.href;
            return o2.removeChild(i2), u2;
          }, n2.s = function(t3, n3) {
            n3.parentNode.insertBefore(t3, n3.nextSibling);
          }, t2;
        }())(), M = new (function() {
          function t2() {
            this.h = [], this.v = -1;
          }
          var e2 = t2.prototype;
          return e2.init = function(t3, n2) {
            this.l = "barba";
            var r2 = { ns: n2, scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(r2), this.v = 0;
            var e3 = { from: this.l, index: 0, states: [].concat(this.h) };
            window.history && window.history.replaceState(e3, "", t3);
          }, e2.change = function(t3, n2, r2) {
            if (r2 && r2.state) {
              var e3 = r2.state, i2 = e3.index;
              n2 = this.m(this.v - i2), this.replace(e3.states), this.v = i2;
            } else
              this.add(t3, n2);
            return n2;
          }, e2.add = function(t3, n2) {
            var r2 = this.size, e3 = this.p(n2), i2 = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: t3 };
            this.h.push(i2), this.v = r2;
            var o2 = { from: this.l, index: r2, states: [].concat(this.h) };
            switch (e3) {
              case "push":
                window.history && window.history.pushState(o2, "", t3);
                break;
              case "replace":
                window.history && window.history.replaceState(o2, "", t3);
            }
          }, e2.update = function(t3, n2) {
            var e3 = n2 || this.v, i2 = r({}, this.get(e3), {}, t3);
            this.set(e3, i2);
          }, e2.remove = function(t3) {
            t3 ? this.h.splice(t3, 1) : this.h.pop(), this.v--;
          }, e2.clear = function() {
            this.h = [], this.v = -1;
          }, e2.replace = function(t3) {
            this.h = t3;
          }, e2.get = function(t3) {
            return this.h[t3];
          }, e2.set = function(t3, n2) {
            return this.h[t3] = n2;
          }, e2.p = function(t3) {
            var n2 = "push", r2 = t3, e3 = S.prefix + "-" + S.history;
            return r2.hasAttribute && r2.hasAttribute(e3) && (n2 = r2.getAttribute(e3)), n2;
          }, e2.m = function(t3) {
            return Math.abs(t3) > 1 ? t3 > 0 ? "forward" : "back" : 0 === t3 ? "popstate" : t3 > 0 ? "back" : "forward";
          }, n(t2, [{ key: "current", get: function() {
            return this.h[this.v];
          } }, { key: "state", get: function() {
            return this.h[this.h.length - 1];
          } }, { key: "previous", get: function() {
            return this.v < 1 ? null : this.h[this.v - 1];
          } }, { key: "size", get: function() {
            return this.h.length;
          } }]), t2;
        }())(), L = function(t2, n2) {
          try {
            var r2 = function() {
              if (!n2.next.html)
                return Promise.resolve(t2).then(function(t3) {
                  var r3 = n2.next;
                  if (t3) {
                    var e2 = j.toElement(t3);
                    r3.namespace = j.getNamespace(e2), r3.container = j.getContainer(e2), r3.html = t3, M.update({ ns: r3.namespace });
                    var i2 = j.toDocument(t3);
                    document.title = i2.title;
                  }
                });
            }();
            return Promise.resolve(r2 && r2.then ? r2.then(function() {
            }) : void 0);
          } catch (t3) {
            return Promise.reject(t3);
          }
        }, $ = d, _ = { __proto__: null, update: L, nextTick: function() {
          return new Promise(function(t2) {
            window.requestAnimationFrame(t2);
          });
        }, pathToRegexp: $ }, q = function() {
          return window.location.origin;
        }, B = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).port;
        }, U = function(t2) {
          var n2, r2 = t2.match(/:\d+/);
          if (null === r2)
            /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
          else {
            var e2 = r2[0].substring(1);
            n2 = parseInt(e2, 10);
          }
          var i2, o2 = t2.replace(q(), ""), u2 = {}, f2 = o2.indexOf("#");
          f2 >= 0 && (i2 = o2.slice(f2 + 1), o2 = o2.slice(0, f2));
          var s2 = o2.indexOf("?");
          return s2 >= 0 && (u2 = D(o2.slice(s2 + 1)), o2 = o2.slice(0, s2)), { hash: i2, path: o2, port: n2, query: u2 };
        }, D = function(t2) {
          return t2.split("&").reduce(function(t3, n2) {
            var r2 = n2.split("=");
            return t3[r2[0]] = r2[1], t3;
          }, {});
        }, F = function(t2) {
          return void 0 === t2 && (t2 = window.location.href), t2.replace(/(\/#.*|\/|#.*)$/, "");
        }, H = { __proto__: null, getHref: function() {
          return window.location.href;
        }, getOrigin: q, getPort: B, getPath: function(t2) {
          return void 0 === t2 && (t2 = window.location.href), U(t2).path;
        }, parse: U, parseQuery: D, clean: F };
        function I(t2, n2, r2) {
          return void 0 === n2 && (n2 = 2e3), new Promise(function(e2, i2) {
            var o2 = new XMLHttpRequest();
            o2.onreadystatechange = function() {
              if (o2.readyState === XMLHttpRequest.DONE) {
                if (200 === o2.status)
                  e2(o2.responseText);
                else if (o2.status) {
                  var n3 = { status: o2.status, statusText: o2.statusText };
                  r2(t2, n3), i2(n3);
                }
              }
            }, o2.ontimeout = function() {
              var e3 = new Error("Timeout error [" + n2 + "]");
              r2(t2, e3), i2(e3);
            }, o2.onerror = function() {
              var n3 = new Error("Fetch error");
              r2(t2, n3), i2(n3);
            }, o2.open("GET", t2), o2.timeout = n2, o2.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o2.setRequestHeader("x-barba", "yes"), o2.send();
          });
        }
        var C = function(t2) {
          return !!t2 && ("object" == typeof t2 || "function" == typeof t2) && "function" == typeof t2.then;
        };
        function N(t2, n2) {
          return void 0 === n2 && (n2 = {}), function() {
            for (var r2 = arguments.length, e2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              e2[i2] = arguments[i2];
            var o2 = false, u2 = new Promise(function(r3, i3) {
              n2.async = function() {
                return o2 = true, function(t3, n3) {
                  t3 ? i3(t3) : r3(n3);
                };
              };
              var u3 = t2.apply(n2, e2);
              o2 || (C(u3) ? u3.then(r3, i3) : r3(u3));
            });
            return u2;
          };
        }
        var X = new (function(t2) {
          function n2() {
            var n3;
            return (n3 = t2.call(this) || this).logger = new l("@barba/core"), n3.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n3.registered = /* @__PURE__ */ new Map(), n3.init(), n3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            var t3 = this;
            this.registered.clear(), this.all.forEach(function(n3) {
              t3[n3] || (t3[n3] = function(r3, e2) {
                t3.registered.has(n3) || t3.registered.set(n3, /* @__PURE__ */ new Set()), t3.registered.get(n3).add({ ctx: e2 || {}, fn: r3 });
              });
            });
          }, r2.do = function(t3) {
            for (var n3 = this, r3 = arguments.length, e2 = new Array(r3 > 1 ? r3 - 1 : 0), i2 = 1; i2 < r3; i2++)
              e2[i2 - 1] = arguments[i2];
            if (this.registered.has(t3)) {
              var o2 = Promise.resolve();
              return this.registered.get(t3).forEach(function(t4) {
                o2 = o2.then(function() {
                  return N(t4.fn, t4.ctx).apply(void 0, e2);
                });
              }), o2.catch(function(r4) {
                n3.logger.debug("Hook error [" + t3 + "]"), n3.logger.error(r4);
              });
            }
            return Promise.resolve();
          }, r2.clear = function() {
            var t3 = this;
            this.all.forEach(function(n3) {
              delete t3[n3];
            }), this.init();
          }, r2.help = function() {
            this.logger.info("Available hooks: " + this.all.join(","));
            var t3 = [];
            this.registered.forEach(function(n3, r3) {
              return t3.push(r3);
            }), this.logger.info("Registered hooks: " + t3.join(","));
          }, n2;
        }(h))(), z = function() {
          function t2(t3) {
            if (this.P = [], "boolean" == typeof t3)
              this.g = t3;
            else {
              var n2 = Array.isArray(t3) ? t3 : [t3];
              this.P = n2.map(function(t4) {
                return $(t4);
              });
            }
          }
          return t2.prototype.checkHref = function(t3) {
            if ("boolean" == typeof this.g)
              return this.g;
            var n2 = U(t3).path;
            return this.P.some(function(t4) {
              return null !== t4.exec(n2);
            });
          }, t2;
        }(), G = function(t2) {
          function n2(n3) {
            var r2;
            return (r2 = t2.call(this, n3) || this).k = /* @__PURE__ */ new Map(), r2;
          }
          e(n2, t2);
          var i2 = n2.prototype;
          return i2.set = function(t3, n3, r2) {
            return this.k.set(t3, { action: r2, request: n3 }), { action: r2, request: n3 };
          }, i2.get = function(t3) {
            return this.k.get(t3);
          }, i2.getRequest = function(t3) {
            return this.k.get(t3).request;
          }, i2.getAction = function(t3) {
            return this.k.get(t3).action;
          }, i2.has = function(t3) {
            return !this.checkHref(t3) && this.k.has(t3);
          }, i2.delete = function(t3) {
            return this.k.delete(t3);
          }, i2.update = function(t3, n3) {
            var e2 = r({}, this.k.get(t3), {}, n3);
            return this.k.set(t3, e2), e2;
          }, n2;
        }(z), Q = function() {
          return !window.history.pushState;
        }, W = function(t2) {
          return !t2.el || !t2.href;
        }, J = function(t2) {
          var n2 = t2.event;
          return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
        }, K = function(t2) {
          var n2 = t2.el;
          return n2.hasAttribute("target") && "_blank" === n2.target;
        }, V = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.protocol && window.location.protocol !== n2.protocol || void 0 !== n2.hostname && window.location.hostname !== n2.hostname;
        }, Y = function(t2) {
          var n2 = t2.el;
          return void 0 !== n2.port && B() !== B(n2.href);
        }, Z = function(t2) {
          var n2 = t2.el;
          return n2.getAttribute && "string" == typeof n2.getAttribute("download");
        }, tt = function(t2) {
          return t2.el.hasAttribute(S.prefix + "-" + S.prevent);
        }, nt = function(t2) {
          return Boolean(t2.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
        }, rt = function(t2) {
          var n2 = t2.href;
          return F(n2) === F() && B(n2) === B();
        }, et = function(t2) {
          function n2(n3) {
            var r3;
            return (r3 = t2.call(this, n3) || this).suite = [], r3.tests = /* @__PURE__ */ new Map(), r3.init(), r3;
          }
          e(n2, t2);
          var r2 = n2.prototype;
          return r2.init = function() {
            this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, false);
          }, r2.add = function(t3, n3, r3) {
            void 0 === r3 && (r3 = true), this.tests.set(t3, n3), r3 && this.suite.push(t3);
          }, r2.run = function(t3, n3, r3, e2) {
            return this.tests.get(t3)({ el: n3, event: r3, href: e2 });
          }, r2.checkLink = function(t3, n3, r3) {
            var e2 = this;
            return this.suite.some(function(i2) {
              return e2.run(i2, t3, n3, r3);
            });
          }, n2;
        }(z), it = function(t2) {
          function n2(r2, e2) {
            var i2;
            void 0 === e2 && (e2 = "Barba error");
            for (var o2 = arguments.length, u2 = new Array(o2 > 2 ? o2 - 2 : 0), f2 = 2; f2 < o2; f2++)
              u2[f2 - 2] = arguments[f2];
            return (i2 = t2.call.apply(t2, [this].concat(u2)) || this).error = r2, i2.label = e2, Error.captureStackTrace && Error.captureStackTrace(function(t3) {
              if (void 0 === t3)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t3;
            }(i2), n2), i2.name = "BarbaError", i2;
          }
          return e(n2, t2), n2;
        }(f(Error)), ot = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{ name: "namespace", type: "strings" }, { name: "custom", type: "function" }], t3 && (this.all = this.all.concat(t3)), this.update();
          }
          var n2 = t2.prototype;
          return n2.add = function(t3, n3) {
            switch (t3) {
              case "rule":
                this.A.splice(n3.position || 0, 0, n3.value);
                break;
              case "transition":
              default:
                this.all.push(n3);
            }
            this.update();
          }, n2.resolve = function(t3, n3) {
            var r2 = this;
            void 0 === n3 && (n3 = {});
            var e2 = n3.once ? this.once : this.page;
            e2 = e2.filter(n3.self ? function(t4) {
              return t4.name && "self" === t4.name;
            } : function(t4) {
              return !t4.name || "self" !== t4.name;
            });
            var i2 = /* @__PURE__ */ new Map(), o2 = e2.find(function(e3) {
              var o3 = true, u3 = {};
              return !(!n3.self || "self" !== e3.name) || (r2.A.reverse().forEach(function(n4) {
                o3 && (o3 = r2.R(e3, n4, t3, u3), e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "from") && r2.R(e3, n4, t3, u3, "to")), e3.from && !e3.to && (o3 = r2.R(e3, n4, t3, u3, "from")), !e3.from && e3.to && (o3 = r2.R(e3, n4, t3, u3, "to")));
              }), i2.set(e3, u3), o3);
            }), u2 = i2.get(o2), f2 = [];
            if (f2.push(n3.once ? "once" : "page"), n3.self && f2.push("self"), u2) {
              var s2, c2 = [o2];
              Object.keys(u2).length > 0 && c2.push(u2), (s2 = this.logger).info.apply(s2, ["Transition found [" + f2.join(",") + "]"].concat(c2));
            } else
              this.logger.info("No transition found [" + f2.join(",") + "]");
            return o2;
          }, n2.update = function() {
            var t3 = this;
            this.all = this.all.map(function(n3) {
              return t3.T(n3);
            }).sort(function(t4, n3) {
              return t4.priority - n3.priority;
            }).reverse().map(function(t4) {
              return delete t4.priority, t4;
            }), this.page = this.all.filter(function(t4) {
              return void 0 !== t4.leave || void 0 !== t4.enter;
            }), this.once = this.all.filter(function(t4) {
              return void 0 !== t4.once;
            });
          }, n2.R = function(t3, n3, r2, e2, i2) {
            var o2 = true, u2 = false, f2 = t3, s2 = n3.name, c2 = s2, a2 = s2, h2 = s2, v2 = i2 ? f2[i2] : f2, l2 = "to" === i2 ? r2.next : r2.current;
            if (i2 ? v2 && v2[s2] : v2[s2]) {
              switch (n3.type) {
                case "strings":
                default:
                  var d2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
                  l2[c2] && -1 !== d2.indexOf(l2[c2]) && (u2 = true), -1 === d2.indexOf(l2[c2]) && (o2 = false);
                  break;
                case "object":
                  var m2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
                  l2[a2] ? (l2[a2].name && -1 !== m2.indexOf(l2[a2].name) && (u2 = true), -1 === m2.indexOf(l2[a2].name) && (o2 = false)) : o2 = false;
                  break;
                case "function":
                  v2[h2](r2) ? u2 = true : o2 = false;
              }
              u2 && (i2 ? (e2[i2] = e2[i2] || {}, e2[i2][s2] = f2[i2][s2]) : e2[s2] = f2[s2]);
            }
            return o2;
          }, n2.O = function(t3, n3, r2) {
            var e2 = 0;
            return (t3[n3] || t3.from && t3.from[n3] || t3.to && t3.to[n3]) && (e2 += Math.pow(10, r2), t3.from && t3.from[n3] && (e2 += 1), t3.to && t3.to[n3] && (e2 += 2)), e2;
          }, n2.T = function(t3) {
            var n3 = this;
            t3.priority = 0;
            var r2 = 0;
            return this.A.forEach(function(e2, i2) {
              r2 += n3.O(t3, e2.name, i2 + 1);
            }), t3.priority = r2, t3;
          }, t2;
        }(), ut = function() {
          function t2(t3) {
            void 0 === t3 && (t3 = []), this.logger = new l("@barba/core"), this.S = false, this.store = new ot(t3);
          }
          var r2 = t2.prototype;
          return r2.get = function(t3, n2) {
            return this.store.resolve(t3, n2);
          }, r2.doOnce = function(t3) {
            var n2 = t3.data, r3 = t3.transition;
            try {
              var e2 = function() {
                i2.S = false;
              }, i2 = this, o2 = r3 || {};
              i2.S = true;
              var u2 = s(function() {
                return Promise.resolve(i2.j("beforeOnce", n2, o2)).then(function() {
                  return Promise.resolve(i2.once(n2, o2)).then(function() {
                    return Promise.resolve(i2.j("afterOnce", n2, o2)).then(function() {
                    });
                  });
                });
              }, function(t4) {
                i2.S = false, i2.logger.debug("Transition error [before/after/once]"), i2.logger.error(t4);
              });
              return Promise.resolve(u2 && u2.then ? u2.then(e2) : e2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.doPage = function(t3) {
            var n2 = t3.data, r3 = t3.transition, e2 = t3.page, i2 = t3.wrapper;
            try {
              var o2 = function(t4) {
                if (u2)
                  return t4;
                f2.S = false;
              }, u2 = false, f2 = this, c2 = r3 || {}, a2 = true === c2.sync || false;
              f2.S = true;
              var h2 = s(function() {
                function t4() {
                  return Promise.resolve(f2.j("before", n2, c2)).then(function() {
                    var t5 = false;
                    function r5(r6) {
                      return t5 ? r6 : Promise.resolve(f2.remove(n2)).then(function() {
                        return Promise.resolve(f2.j("after", n2, c2)).then(function() {
                        });
                      });
                    }
                    var o3 = function() {
                      if (a2)
                        return s(function() {
                          return Promise.resolve(f2.add(n2, i2)).then(function() {
                            return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                              return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                return Promise.resolve(Promise.all([f2.leave(n2, c2), f2.enter(n2, c2)])).then(function() {
                                  return Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                            });
                          });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [sync]");
                        });
                      var r6 = function(r7) {
                        return t5 ? r7 : s(function() {
                          var t6 = function() {
                            if (false !== o4)
                              return Promise.resolve(f2.add(n2, i2)).then(function() {
                                return Promise.resolve(f2.j("beforeEnter", n2, c2)).then(function() {
                                  return Promise.resolve(f2.enter(n2, c2, o4)).then(function() {
                                    return Promise.resolve(f2.j("afterEnter", n2, c2)).then(function() {
                                    });
                                  });
                                });
                              });
                          }();
                          if (t6 && t6.then)
                            return t6.then(function() {
                            });
                        }, function(t6) {
                          if (f2.M(t6))
                            throw new it(t6, "Transition error [before/after/enter]");
                        });
                      }, o4 = false, u3 = s(function() {
                        return Promise.resolve(f2.j("beforeLeave", n2, c2)).then(function() {
                          return Promise.resolve(Promise.all([f2.leave(n2, c2), L(e2, n2)]).then(function(t6) {
                            return t6[0];
                          })).then(function(t6) {
                            return o4 = t6, Promise.resolve(f2.j("afterLeave", n2, c2)).then(function() {
                            });
                          });
                        });
                      }, function(t6) {
                        if (f2.M(t6))
                          throw new it(t6, "Transition error [before/after/leave]");
                      });
                      return u3 && u3.then ? u3.then(r6) : r6(u3);
                    }();
                    return o3 && o3.then ? o3.then(r5) : r5(o3);
                  });
                }
                var r4 = function() {
                  if (a2)
                    return Promise.resolve(L(e2, n2)).then(function() {
                    });
                }();
                return r4 && r4.then ? r4.then(t4) : t4();
              }, function(t4) {
                if (f2.S = false, t4.name && "BarbaError" === t4.name)
                  throw f2.logger.debug(t4.label), f2.logger.error(t4.error), t4;
                throw f2.logger.debug("Transition error [page]"), f2.logger.error(t4), t4;
              });
              return Promise.resolve(h2 && h2.then ? h2.then(o2) : o2(h2));
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.once = function(t3, n2) {
            try {
              return Promise.resolve(X.do("once", t3, n2)).then(function() {
                return n2.once ? N(n2.once, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.leave = function(t3, n2) {
            try {
              return Promise.resolve(X.do("leave", t3, n2)).then(function() {
                return n2.leave ? N(n2.leave, n2)(t3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.enter = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do("enter", t3, n2)).then(function() {
                return n2.enter ? N(n2.enter, n2)(t3, r3) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.add = function(t3, n2) {
            try {
              return j.addContainer(t3.next.container, n2), X.do("nextAdded", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.remove = function(t3) {
            try {
              return j.removeContainer(t3.current.container), X.do("currentRemoved", t3), Promise.resolve();
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, r2.M = function(t3) {
            return t3.message ? !/Timeout error|Fetch error/.test(t3.message) : !t3.status;
          }, r2.j = function(t3, n2, r3) {
            try {
              return Promise.resolve(X.do(t3, n2, r3)).then(function() {
                return r3[t3] ? N(r3[t3], r3)(n2) : Promise.resolve();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, n(t2, [{ key: "isRunning", get: function() {
            return this.S;
          }, set: function(t3) {
            this.S = t3;
          } }, { key: "hasOnce", get: function() {
            return this.store.once.length > 0;
          } }, { key: "hasSelf", get: function() {
            return this.store.all.some(function(t3) {
              return "self" === t3.name;
            });
          } }, { key: "shouldWait", get: function() {
            return this.store.all.some(function(t3) {
              return t3.to && !t3.to.route || t3.sync;
            });
          } }]), t2;
        }(), ft = function() {
          function t2(t3) {
            var n2 = this;
            this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = /* @__PURE__ */ new Map(), 0 !== t3.length && (t3.forEach(function(t4) {
              n2.byNamespace.set(t4.namespace, t4);
            }), this.names.forEach(function(t4) {
              X[t4](n2.L(t4));
            }));
          }
          return t2.prototype.L = function(t3) {
            var n2 = this;
            return function(r2) {
              var e2 = t3.match(/enter/i) ? r2.next : r2.current, i2 = n2.byNamespace.get(e2.namespace);
              return i2 && i2[t3] ? N(i2[t3], i2)(r2) : Promise.resolve();
            };
          }, t2;
        }();
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t2) {
          var n2 = this;
          do {
            if (n2.matches(t2))
              return n2;
            n2 = n2.parentElement || n2.parentNode;
          } while (null !== n2 && 1 === n2.nodeType);
          return null;
        });
        var st = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
        return new (function() {
          function t2() {
            this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H;
          }
          var e2 = t2.prototype;
          return e2.use = function(t3, n2) {
            var r2 = this.plugins;
            r2.indexOf(t3) > -1 ? this.logger.warn("Plugin [" + t3.name + "] already installed.") : "function" == typeof t3.install ? (t3.install(this, n2), r2.push(t3)) : this.logger.warn("Plugin [" + t3.name + '] has no "install" method.');
          }, e2.init = function(t3) {
            var n2 = void 0 === t3 ? {} : t3, e3 = n2.transitions, i2 = void 0 === e3 ? [] : e3, o2 = n2.views, u2 = void 0 === o2 ? [] : o2, f2 = n2.schema, s2 = void 0 === f2 ? S : f2, c2 = n2.requestError, a2 = n2.timeout, h2 = void 0 === a2 ? 2e3 : a2, v2 = n2.cacheIgnore, d2 = void 0 !== v2 && v2, m2 = n2.prefetchIgnore, p2 = void 0 !== m2 && m2, w2 = n2.preventRunning, b2 = void 0 !== w2 && w2, y2 = n2.prevent, P2 = void 0 === y2 ? null : y2, g2 = n2.debug, E2 = n2.logLevel;
            if (l.setLevel(true === (void 0 !== g2 && g2) ? "debug" : void 0 === E2 ? "off" : E2), this.logger.info(this.version), Object.keys(s2).forEach(function(t4) {
              S[t4] && (S[t4] = s2[t4]);
            }), this.$ = c2, this.timeout = h2, this.cacheIgnore = d2, this.prefetchIgnore = p2, this.preventRunning = b2, this._ = this.dom.getWrapper(), !this._)
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var x2 = this.data.current;
            if (!x2.container)
              throw new Error("[@barba/core] No Barba container found");
            if (this.cache = new G(d2), this.prevent = new et(p2), this.transitions = new ut(i2), this.views = new ft(u2), null !== P2) {
              if ("function" != typeof P2)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", P2);
            }
            this.history.init(x2.url.href, x2.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach(function(t4) {
              return t4.init();
            });
            var k2 = this.data;
            k2.trigger = "barba", k2.next = k2.current, k2.current = r({}, this.schemaPage), this.hooks.do("ready", k2), this.once(k2), this.q();
          }, e2.destroy = function() {
            this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = [];
          }, e2.force = function(t3) {
            window.location.assign(t3);
          }, e2.go = function(t3, n2, r2) {
            var e3;
            if (void 0 === n2 && (n2 = "barba"), this.transitions.isRunning)
              this.force(t3);
            else if (!(e3 = "popstate" === n2 ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t3) : this.prevent.run("sameUrl", null, null, t3)) || this.transitions.hasSelf)
              return n2 = this.history.change(t3, n2, r2), r2 && (r2.stopPropagation(), r2.preventDefault()), this.page(t3, n2, e3);
          }, e2.once = function(t3) {
            try {
              var n2 = this;
              return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(function() {
                function r2() {
                  return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(function() {
                  });
                }
                var e3 = function() {
                  if (n2.transitions.hasOnce) {
                    var r3 = n2.transitions.get(t3, { once: true });
                    return Promise.resolve(n2.transitions.doOnce({ transition: r3, data: t3 })).then(function() {
                    });
                  }
                }();
                return e3 && e3.then ? e3.then(r2) : r2();
              });
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.page = function(t3, n2, e3) {
            try {
              var i2 = function() {
                var t4 = o2.data;
                return Promise.resolve(o2.hooks.do("page", t4)).then(function() {
                  var n3 = s(function() {
                    var n4 = o2.transitions.get(t4, { once: false, self: e3 });
                    return Promise.resolve(o2.transitions.doPage({ data: t4, page: u2, transition: n4, wrapper: o2._ })).then(function() {
                      o2.q();
                    });
                  }, function() {
                    0 === l.getLevel() && o2.force(t4.current.url.href);
                  });
                  if (n3 && n3.then)
                    return n3.then(function() {
                    });
                });
              }, o2 = this;
              o2.data.next.url = r({ href: t3 }, o2.url.parse(t3)), o2.data.trigger = n2;
              var u2 = o2.cache.has(t3) ? o2.cache.update(t3, { action: "click" }).request : o2.cache.set(t3, o2.request(t3, o2.timeout, o2.onRequestError.bind(o2, n2)), "click").request, f2 = function() {
                if (o2.transitions.shouldWait)
                  return Promise.resolve(L(u2, o2.data)).then(function() {
                  });
              }();
              return Promise.resolve(f2 && f2.then ? f2.then(i2) : i2());
            } catch (t4) {
              return Promise.reject(t4);
            }
          }, e2.onRequestError = function(t3) {
            this.transitions.isRunning = false;
            for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), e3 = 1; e3 < n2; e3++)
              r2[e3 - 1] = arguments[e3];
            var i2 = r2[0], o2 = r2[1], u2 = this.cache.getAction(i2);
            return this.cache.delete(i2), !(this.$ && false === this.$(t3, u2, i2, o2) || ("click" === u2 && this.force(i2), 1));
          }, e2.prefetch = function(t3) {
            var n2 = this;
            this.cache.has(t3) || this.cache.set(t3, this.request(t3, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(t4) {
              n2.logger.error(t4);
            }), "prefetch");
          }, e2.F = function() {
            true !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D);
          }, e2.H = function() {
            true !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D);
          }, e2.B = function(t3) {
            var n2 = this, r2 = this.I(t3);
            if (r2) {
              var e3 = this.dom.getHref(r2);
              this.prevent.checkHref(e3) || this.cache.has(e3) || this.cache.set(e3, this.request(e3, this.timeout, this.onRequestError.bind(this, r2)).catch(function(t4) {
                n2.logger.error(t4);
              }), "enter");
            }
          }, e2.U = function(t3) {
            var n2 = this.I(t3);
            if (n2)
              return this.transitions.isRunning && this.preventRunning ? (t3.preventDefault(), void t3.stopPropagation()) : void this.go(this.dom.getHref(n2), n2, t3);
          }, e2.D = function(t3) {
            this.go(this.url.getHref(), "popstate", t3);
          }, e2.I = function(t3) {
            for (var n2 = t3.target; n2 && !this.dom.getHref(n2); )
              n2 = n2.parentNode;
            if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2)))
              return n2;
          }, e2.q = function() {
            var t3 = this.url.getHref(), n2 = { container: this.dom.getContainer(), html: this.dom.getHtml(), namespace: this.dom.getNamespace(), url: r({ href: t3 }, this.url.parse(t3)) };
            this.C = { current: n2, next: r({}, this.schemaPage), trigger: void 0 }, this.hooks.do("reset", this.data);
          }, n(t2, [{ key: "data", get: function() {
            return this.C;
          } }, { key: "wrapper", get: function() {
            return this._;
          } }]), t2;
        }())();
      });
    }
  });

  // src/index.ts
  init_live_reload();
  var import_core = __toESM(require_barba_umd(), 1);

  // node_modules/motion/dist/main.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/index.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/animate/index.es.js
  init_live_reload();

  // node_modules/@motionone/animation/dist/index.es.js
  init_live_reload();

  // node_modules/@motionone/animation/dist/Animation.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/index.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/array.es.js
  init_live_reload();
  function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
  }

  // node_modules/@motionone/utils/dist/clamp.es.js
  init_live_reload();
  var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

  // node_modules/@motionone/utils/dist/defaults.es.js
  init_live_reload();
  var defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
  };

  // node_modules/@motionone/utils/dist/easing.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/is-easing-list.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/is-number.es.js
  init_live_reload();
  var isNumber = (value) => typeof value === "number";

  // node_modules/@motionone/utils/dist/is-easing-list.es.js
  var isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

  // node_modules/@motionone/utils/dist/wrap.es.js
  init_live_reload();
  var wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
  };

  // node_modules/@motionone/utils/dist/easing.es.js
  function getEasingForSegment(easing, i) {
    return isEasingList(easing) ? easing[wrap(0, easing.length, i)] : easing;
  }

  // node_modules/@motionone/utils/dist/interpolate.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/mix.es.js
  init_live_reload();
  var mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;

  // node_modules/@motionone/utils/dist/noop.es.js
  init_live_reload();
  var noop = () => {
  };
  var noopReturn = (v) => v;

  // node_modules/@motionone/utils/dist/offset.es.js
  init_live_reload();

  // node_modules/@motionone/utils/dist/progress.es.js
  init_live_reload();
  var progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

  // node_modules/@motionone/utils/dist/offset.es.js
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
      const offsetProgress = progress(0, remaining, i);
      offset.push(mix(min, 1, offsetProgress));
    }
  }
  function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
  }

  // node_modules/@motionone/utils/dist/interpolate.es.js
  function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
    const length = output.length;
    const remainder = length - input.length;
    remainder > 0 && fillOffset(input, remainder);
    return (t) => {
      let i = 0;
      for (; i < length - 2; i++) {
        if (t < input[i + 1])
          break;
      }
      let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
      const segmentEasing = getEasingForSegment(easing, i);
      progressInRange = segmentEasing(progressInRange);
      return mix(output[i], output[i + 1], progressInRange);
    };
  }

  // node_modules/@motionone/utils/dist/is-cubic-bezier.es.js
  init_live_reload();
  var isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);

  // node_modules/@motionone/utils/dist/is-easing-generator.es.js
  init_live_reload();
  var isEasingGenerator = (easing) => typeof easing === "object" && Boolean(easing.createAnimation);

  // node_modules/@motionone/utils/dist/is-function.es.js
  init_live_reload();
  var isFunction = (value) => typeof value === "function";

  // node_modules/@motionone/utils/dist/is-string.es.js
  init_live_reload();
  var isString = (value) => typeof value === "string";

  // node_modules/@motionone/utils/dist/time.es.js
  init_live_reload();
  var time = {
    ms: (seconds) => seconds * 1e3,
    s: (milliseconds) => milliseconds / 1e3
  };

  // node_modules/@motionone/animation/dist/utils/easing.es.js
  init_live_reload();

  // node_modules/@motionone/easing/dist/index.es.js
  init_live_reload();

  // node_modules/@motionone/easing/dist/cubic-bezier.es.js
  init_live_reload();
  var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noopReturn;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  }

  // node_modules/@motionone/easing/dist/steps.es.js
  init_live_reload();
  var steps = (steps2, direction = "end") => (progress2) => {
    progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
    const expanded = progress2 * steps2;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps2);
  };

  // node_modules/@motionone/animation/dist/utils/easing.es.js
  var namedEasings = {
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
    "ease-in": cubicBezier(0.42, 0, 1, 1),
    "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
    "ease-out": cubicBezier(0, 0, 0.58, 1)
  };
  var functionArgsRegex = /\((.*?)\)/;
  function getEasingFunction(definition) {
    if (isFunction(definition))
      return definition;
    if (isCubicBezier(definition))
      return cubicBezier(...definition);
    if (namedEasings[definition])
      return namedEasings[definition];
    if (definition.startsWith("steps")) {
      const args = functionArgsRegex.exec(definition);
      if (args) {
        const argsArray = args[1].split(",");
        return steps(parseFloat(argsArray[0]), argsArray[1].trim());
      }
    }
    return noopReturn;
  }

  // node_modules/@motionone/animation/dist/Animation.es.js
  var Animation = class {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal" } = {}) {
      this.startTime = null;
      this.rate = 1;
      this.t = 0;
      this.cancelTimestamp = null;
      this.easing = noopReturn;
      this.duration = 0;
      this.totalDuration = 0;
      this.repeat = 0;
      this.playState = "idle";
      this.finished = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      easing = easing || defaults.easing;
      if (isEasingGenerator(easing)) {
        const custom = easing.createAnimation(keyframes);
        easing = custom.easing;
        keyframes = custom.keyframes || keyframes;
        initialDuration = custom.duration || initialDuration;
      }
      this.repeat = repeat;
      this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
      this.updateDuration(initialDuration);
      const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
      this.tick = (timestamp) => {
        var _a;
        delay = delay;
        let t = 0;
        if (this.pauseTime !== void 0) {
          t = this.pauseTime;
        } else {
          t = (timestamp - this.startTime) * this.rate;
        }
        this.t = t;
        t /= 1e3;
        t = Math.max(t - delay, 0);
        if (this.playState === "finished" && this.pauseTime === void 0) {
          t = this.totalDuration;
        }
        const progress2 = t / this.duration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        const iterationIsOdd = currentIteration % 2;
        if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
          iterationProgress = 1 - iterationProgress;
        }
        const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
        const latest = interpolate$1(this.easing(p));
        output(latest);
        const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t >= this.totalDuration + endDelay);
        if (isAnimationFinished) {
          this.playState = "finished";
          (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
        } else if (this.playState !== "idle") {
          this.frameRequestId = requestAnimationFrame(this.tick);
        }
      };
      this.play();
    }
    play() {
      const now = performance.now();
      this.playState = "running";
      if (this.pauseTime !== void 0) {
        this.startTime = now - this.pauseTime;
      } else if (!this.startTime) {
        this.startTime = now;
      }
      this.cancelTimestamp = this.startTime;
      this.pauseTime = void 0;
      this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
      this.playState = "paused";
      this.pauseTime = this.t;
    }
    finish() {
      this.playState = "finished";
      this.tick(0);
    }
    stop() {
      var _a;
      this.playState = "idle";
      if (this.frameRequestId !== void 0) {
        cancelAnimationFrame(this.frameRequestId);
      }
      (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
      this.stop();
      this.tick(this.cancelTimestamp);
    }
    reverse() {
      this.rate *= -1;
    }
    commitStyles() {
    }
    updateDuration(duration) {
      this.duration = duration;
      this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
      return this.t;
    }
    set currentTime(t) {
      if (this.pauseTime !== void 0 || this.rate === 0) {
        this.pauseTime = t;
      } else {
        this.startTime = performance.now() - t / this.rate;
      }
    }
    get playbackRate() {
      return this.rate;
    }
    set playbackRate(rate) {
      this.rate = rate;
    }
  };

  // node_modules/@motionone/dom/dist/animate/create-animate.es.js
  init_live_reload();

  // node_modules/hey-listen/dist/hey-listen.es.js
  init_live_reload();
  var warning = function() {
  };
  var invariant = function() {
  };
  if (true) {
    warning = function(check, message) {
      if (!check && typeof console !== "undefined") {
        console.warn(message);
      }
    };
    invariant = function(check, message) {
      if (!check) {
        throw new Error(message);
      }
    };
  }

  // node_modules/@motionone/dom/dist/animate/animate-style.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/animate/data.es.js
  init_live_reload();

  // node_modules/@motionone/types/dist/index.es.js
  init_live_reload();

  // node_modules/@motionone/types/dist/MotionValue.es.js
  init_live_reload();
  var MotionValue = class {
    setAnimation(animation) {
      this.animation = animation;
      animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
      });
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  };

  // node_modules/@motionone/dom/dist/animate/data.es.js
  var data = /* @__PURE__ */ new WeakMap();
  function getAnimationData(element) {
    if (!data.has(element)) {
      data.set(element, {
        transforms: [],
        values: /* @__PURE__ */ new Map()
      });
    }
    return data.get(element);
  }
  function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
      motionValues.set(name, new MotionValue());
    }
    return motionValues.get(name);
  }

  // node_modules/@motionone/dom/dist/animate/utils/css-var.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/animate/utils/transforms.es.js
  init_live_reload();
  var axes = ["", "X", "Y", "Z"];
  var order = ["translate", "scale", "rotate", "skew"];
  var transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
  };
  var rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v) => v + "deg"
  };
  var baseTransformProperties = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (v) => v + "px"
    },
    rotate: rotation,
    scale: {
      syntax: "<number>",
      initialValue: 1,
      toDefaultUnit: noopReturn
    },
    skew: rotation
  };
  var transformDefinitions = /* @__PURE__ */ new Map();
  var asTransformCssVar = (name) => `--motion-${name}`;
  var transforms = ["x", "y", "z"];
  order.forEach((name) => {
    axes.forEach((axis) => {
      transforms.push(name + axis);
      transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
  });
  var compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
  var transformLookup = new Set(transforms);
  var isTransform = (name) => transformLookup.has(name);
  var addTransformToElement = (element, name) => {
    if (transformAlias[name])
      name = transformAlias[name];
    const { transforms: transforms2 } = getAnimationData(element);
    addUniqueItem(transforms2, name);
    element.style.transform = buildTransformTemplate(transforms2);
  };
  var buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
  var transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;

  // node_modules/@motionone/dom/dist/animate/utils/css-var.es.js
  var isCssVar = (name) => name.startsWith("--");
  var registeredProperties = /* @__PURE__ */ new Set();
  function registerCssVariable(name) {
    if (registeredProperties.has(name))
      return;
    registeredProperties.add(name);
    try {
      const { syntax, initialValue } = transformDefinitions.has(name) ? transformDefinitions.get(name) : {};
      CSS.registerProperty({
        name,
        inherits: false,
        syntax,
        initialValue
      });
    } catch (e) {
    }
  }

  // node_modules/@motionone/dom/dist/animate/utils/easing.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
  init_live_reload();
  var testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
  var featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        testAnimation({ opacity: [1] });
      } catch (e) {
        return false;
      }
      return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
    linearEasing: () => {
      try {
        testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (e) {
        return false;
      }
      return true;
    }
  };
  var results = {};
  var supports = {};
  for (const key in featureTests) {
    supports[key] = () => {
      if (results[key] === void 0)
        results[key] = featureTests[key]();
      return results[key];
    };
  }

  // node_modules/@motionone/dom/dist/animate/utils/easing.es.js
  var resolution = 0.015;
  var generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i = 0; i < numPoints; i++) {
      points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
  };
  var convertEasing = (easing, duration) => {
    if (isFunction(easing)) {
      return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : defaults.easing;
    } else {
      return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
    }
  };
  var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

  // node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
  init_live_reload();
  function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i = 0; i < keyframes.length; i++) {
      if (keyframes[i] === null) {
        keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
      }
    }
    return keyframes;
  }
  var keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];

  // node_modules/@motionone/dom/dist/animate/style.es.js
  init_live_reload();

  // node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js
  init_live_reload();
  function getStyleName(key) {
    if (transformAlias[key])
      key = transformAlias[key];
    return isTransform(key) ? asTransformCssVar(key) : key;
  }

  // node_modules/@motionone/dom/dist/animate/style.es.js
  var style = {
    get: (element, name) => {
      name = getStyleName(name);
      let value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
      if (!value && value !== 0) {
        const definition = transformDefinitions.get(name);
        if (definition)
          value = definition.initialValue;
      }
      return value;
    },
    set: (element, name, value) => {
      name = getStyleName(name);
      if (isCssVar(name)) {
        element.style.setProperty(name, value);
      } else {
        element.style[name] = value;
      }
    }
  };

  // node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
  init_live_reload();
  function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
      return;
    try {
      if (animation.stop) {
        animation.stop();
      } else {
        needsCommit && animation.commitStyles();
        animation.cancel();
      }
    } catch (e) {
    }
  }

  // node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js
  init_live_reload();
  function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (isString(finalKeyframe)) {
      const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
      if (unit)
        toUnit = (value) => value + unit;
    }
    return toUnit;
  }

  // node_modules/@motionone/dom/dist/animate/animate-style.es.js
  function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
  }
  function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false } = options;
    const data2 = getAnimationData(element);
    const valueIsTransform = isTransform(key);
    let canAnimateNatively = supports.waapi();
    valueIsTransform && addTransformToElement(element, key);
    const name = getStyleName(key);
    const motionValue = getMotionValue(data2.values, name);
    const definition = transformDefinitions.get(name);
    stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
    return () => {
      const readInitialValue = () => {
        var _a, _b;
        return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
      };
      let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
      const toUnit = getUnitConverter(keyframes, definition);
      if (isEasingGenerator(easing)) {
        const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
        easing = custom.easing;
        keyframes = custom.keyframes || keyframes;
        duration = custom.duration || duration;
      }
      if (isCssVar(name)) {
        if (supports.cssRegisterProperty()) {
          registerCssVariable(name);
        } else {
          canAnimateNatively = false;
        }
      }
      if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
        canAnimateNatively = false;
      }
      if (canAnimateNatively) {
        if (definition) {
          keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
        }
        if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
          keyframes.unshift(readInitialValue());
        }
        const animationOptions = {
          delay: time.ms(delay),
          duration: time.ms(duration),
          endDelay: time.ms(endDelay),
          easing: !isEasingList(easing) ? convertEasing(easing, duration) : void 0,
          direction,
          iterations: repeat + 1,
          fill: "both"
        };
        animation = element.animate({
          [name]: keyframes,
          offset,
          easing: isEasingList(easing) ? easing.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
        }, animationOptions);
        if (!animation.finished) {
          animation.finished = new Promise((resolve, reject) => {
            animation.onfinish = resolve;
            animation.oncancel = reject;
          });
        }
        const target = keyframes[keyframes.length - 1];
        animation.finished.then(() => {
          if (persist)
            return;
          style.set(element, name, target);
          animation.cancel();
        }).catch(noop);
        if (!allowWebkitAcceleration)
          animation.playbackRate = 1.000001;
      } else if (AnimationPolyfill && valueIsTransform) {
        keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
        if (keyframes.length === 1) {
          keyframes.unshift(parseFloat(readInitialValue()));
        }
        animation = new AnimationPolyfill((latest) => {
          style.set(element, name, toUnit ? toUnit(latest) : latest);
        }, keyframes, Object.assign(Object.assign({}, options), {
          duration,
          easing
        }));
      } else {
        const target = keyframes[keyframes.length - 1];
        style.set(element, name, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
      }
      if (isRecording) {
        record(element, key, keyframes, {
          duration,
          delay,
          easing,
          repeat,
          offset
        }, "motion-one");
      }
      motionValue.setAnimation(animation);
      return animation;
    };
  }

  // node_modules/@motionone/dom/dist/animate/utils/options.es.js
  init_live_reload();
  var getOptions = (options, key) => (
    /**
     * TODO: Make test for this
     * Always return a new object otherwise delay is overwritten by results of stagger
     * and this results in no stagger
     */
    options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
  );

  // node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
  init_live_reload();
  function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
      if (selectorCache) {
        (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
        elements = selectorCache[elements];
      } else {
        elements = document.querySelectorAll(elements);
      }
    } else if (elements instanceof Element) {
      elements = [elements];
    }
    return Array.from(elements || []);
  }

  // node_modules/@motionone/dom/dist/animate/utils/controls.es.js
  init_live_reload();
  var createAnimation = (factory) => factory();
  var withControls = (animationFactory, options, duration = defaults.duration) => {
    return new Proxy({
      animations: animationFactory.map(createAnimation).filter(Boolean),
      duration,
      options
    }, controls);
  };
  var getActiveAnimation = (state) => state.animations[0];
  var controls = {
    get: (target, key) => {
      const activeAnimation = getActiveAnimation(target);
      switch (key) {
        case "duration":
          return target.duration;
        case "currentTime":
          return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
        case "playbackRate":
        case "playState":
          return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
        case "finished":
          if (!target.finished) {
            target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
          }
          return target.finished;
        case "stop":
          return () => {
            target.animations.forEach((animation) => stopAnimation(animation));
          };
        case "forEachNative":
          return (callback) => {
            target.animations.forEach((animation) => callback(animation, target));
          };
        default:
          return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
      }
    },
    set: (target, key, value) => {
      switch (key) {
        case "currentTime":
          value = time.ms(value);
        case "playbackRate":
          for (let i = 0; i < target.animations.length; i++) {
            target.animations[i][key] = value;
          }
          return true;
      }
      return false;
    }
  };
  var selectFinished = (animation) => animation.finished;

  // node_modules/@motionone/dom/dist/utils/stagger.es.js
  init_live_reload();
  function resolveOption(option, i, total) {
    return isFunction(option) ? option(i, total) : option;
  }

  // node_modules/@motionone/dom/dist/animate/create-animate.es.js
  function createAnimate(AnimatePolyfill) {
    return function animate3(elements, keyframes, options = {}) {
      elements = resolveElements(elements);
      const numElements = elements.length;
      invariant(Boolean(numElements), "No valid element provided.");
      invariant(Boolean(keyframes), "No keyframes defined.");
      const animationFactories = [];
      for (let i = 0; i < numElements; i++) {
        const element = elements[i];
        for (const key in keyframes) {
          const valueOptions = getOptions(options, key);
          valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
          const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
          animationFactories.push(animation);
        }
      }
      return withControls(
        animationFactories,
        options,
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration
      );
    };
  }

  // node_modules/@motionone/dom/dist/animate/index.es.js
  var animate = createAnimate(Animation);

  // node_modules/motion/dist/animate.es.js
  init_live_reload();
  function animateProgress(target, options = {}) {
    return withControls([
      () => {
        const animation = new Animation(target, [0, 1], options);
        animation.finished.catch(() => {
        });
        return animation;
      }
    ], options, options.duration);
  }
  function animate2(target, keyframesOrOptions, options) {
    const factory = isFunction(target) ? animateProgress : animate;
    return factory(target, keyframesOrOptions, options);
  }

  // src/index.ts
  document.addEventListener("alpine:init", () => {
    Alpine.data("utils", () => ({
      level: 0,
      time: 5,
      updateRate: 0.1,
      currentTime: 0,
      score: 0,
      levelArray: [
        [false, false, false, false, 0],
        //BEGIN RANGE
        //EASY
        [false, false, false, true, 10],
        [true, false, false, true, 5],
        [false, true, true, false, 5],
        //MEDIUM
        [true, true, true, false, 5],
        [true, true, true, true, 5],
        [true, true, true, true, 5],
        //Hard
        [true, false, false, false, 3],
        [false, true, true, false, 3],
        [true, true, true, false, 3],
        [true, true, true, true, 3],
        []
        //END RANGE
      ],
      showBlue: Boolean,
      showYellow: Boolean,
      showGreen: Boolean,
      showRed: Boolean,
      showForm: false,
      startScreen: true,
      startButtonText: "Start New Game",
      startMessage: "Welcome to The Game",
      timerId: 0,
      timeAnimation: {},
      buttonAnimation: {},
      startAnimation: {},
      animateStartScreen() {
        animate2(
          "#bearStart",
          {
            transform: ["translate(80svw, 0px)", "translate(-80svw, 0px)"]
          },
          { duration: 36, easing: "linear" }
        );
        animate2(
          "#leaderboard-wrapper",
          {
            transform: ["translate(80svw, 0px)", "translate(0px, 0px)"]
          },
          { duration: 18, easing: [0.64, 0.64, 0.89, 0.99] }
        );
      },
      init() {
        this.animateStartScreen();
        this.time = this.levelArray[this.level][4];
        this.updateStates();
        this.currentTime = this.time;
        this.$watch("level", () => {
          this.time = this.levelArray[this.level][4];
          this.timeAnimation = animate2(
            ".time",
            { scale: [1, 0.5] },
            { duration: this.time, easing: "ease-in" }
          );
          this.buttonAnimation = animate2(
            ".button.animate",
            { scale: [1, 0.5], opacity: [1, 0] },
            { duration: this.time, easing: "ease-in" }
          );
          this.updateStates();
          this.currentTime = this.time;
          if (this.level === this.levelArray.length - 1) {
            this.win();
          }
        });
      },
      refresh() {
        animate2(".start-screen", { transform: "translate(0px, 100%)" }, { duration: 0.2 });
        this.startScreen = false;
        this.level = 1;
        this.score = 0;
        this.timeUpdate();
      },
      cloakBlue() {
        if (!this.startScreen) {
          if (this.showBlue) {
            this.showBlue = false;
            this.addScore();
          } else {
            this.reset();
          }
          this.update();
        }
      },
      cloakYellow() {
        if (!this.startScreen) {
          if (this.showYellow) {
            this.showYellow = false;
            this.addScore();
          } else {
            this.reset();
          }
          this.update();
        }
      },
      cloakGreen() {
        if (!this.startScreen) {
          if (this.showGreen) {
            this.showGreen = false;
            this.addScore();
          } else {
            this.reset();
          }
          this.update();
        }
      },
      cloakRed() {
        if (!this.startScreen) {
          if (this.showRed) {
            this.showRed = false;
            this.addScore();
          } else {
            this.reset();
          }
          this.update();
        }
      },
      update() {
        if (!this.showBlue && !this.showYellow && !this.showGreen && !this.showRed) {
          this.level++;
        }
      },
      timeUpdate() {
        this.timerId = setInterval(() => {
          if (this.currentTime > 0) {
            this.currentTime = Number((this.currentTime - this.updateRate).toFixed(1));
          } else {
            this.lose();
          }
        }, 1e3 * this.updateRate);
      },
      updateStates() {
        this.showBlue = this.levelArray[this.level][0];
        this.showYellow = this.levelArray[this.level][1];
        this.showGreen = this.levelArray[this.level][2];
        this.showRed = this.levelArray[this.level][3];
      },
      addScore() {
        this.score = Number((this.score + this.currentTime).toFixed(1));
      },
      divideScore() {
        this.score = Number((this.score / 2).toFixed(1));
      },
      win() {
        this.stopGame();
        this.startMessage = "You Win";
      },
      lose() {
        this.stopGame();
        this.startMessage = "You Lose";
      },
      stopGame() {
        clearInterval(this.timerId);
        this.timeAnimation.stop();
        this.buttonAnimation.stop();
        this.level = 0;
        animate2(".start-screen", { transform: "translate(0px, 0%)" }, { duration: 0.2 });
        this.animateStartScreen();
        this.startScreen = true;
        this.showForm = true;
        document.getElementById("score").value = this.score;
      },
      reset() {
        this.showBlue = true;
        this.showYellow = true;
        this.showGreen = true;
        this.showRed = true;
        this.divideScore();
      }
    }));
  });
  import_core.default.init();
  document.addEventListener("keypress", (e) => {
    if (e.key === " ") {
      document.getElementById("startButton")?.click();
    }
    if (e.key === "1") {
      document.getElementById("blue")?.click();
    }
    if (e.key === "2") {
      document.getElementById("yellow")?.click();
    }
    if (e.key === "3") {
      document.getElementById("green")?.click();
    }
    if (e.key === "4") {
      document.getElementById("red")?.click();
    }
  });
})();
//# sourceMappingURL=index.js.map
