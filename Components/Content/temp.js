"use strict";
(() => {
  var u = "fs-attributes";
  var I = "cmsattribute";
  var p = "countitems";
  var S = "support";
  var w = async (...o) => {
    var n;
    let t = [];
    for (let s of o) {
      let e = await ((n = window.fsAttributes[s]) == null ? void 0 : n.loading);
      t.push(e);
    }
    return t;
  };
  var x = () => {};
  var U = {
    wrapper: "w-dyn-list",
    list: "w-dyn-items",
    item: "w-dyn-item",
    paginationWrapper: "w-pagination-wrapper",
    paginationNext: "w-pagination-next",
    paginationPrevious: "w-pagination-previous",
    pageCount: "w-page-count",
    emptyState: "w-dyn-empty",
  };
  var d = (o) => typeof o == "string";
  var g = (o) => {
    let t = o.split("-"),
      n = parseInt(t[t.length - 1]);
    if (!isNaN(n)) return n;
  };
  function B(o, t, n) {
    var e;
    let s = window.fsAttributes[o];
    return (s.destroy = n || x), (e = s.resolve) == null || e.call(s, t), t;
  }
  var L = (o, t = "1", n = "iife") => {
    let e = `${o}${n === "esm" ? ".esm" : ""}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${o}@${t}/${e}`;
  };
  var D = `${u}-${S}`,
    v = async () => {
      var e;
      let { fsAttributes: o, location: t } = window,
        { host: n, searchParams: s } = new URL(t.href);
      return !n.includes("webflow.io") || !s.has(D)
        ? !1
        : (e = o.import) == null
        ? void 0
        : e.call(o, S, "1");
    };
  var P = (o) => (t) => `${o}${t ? `-${t}` : ""}`,
    A = (o) => {
      let t = (e, i, r) => {
        let c = o[e],
          { key: m, values: f } = c,
          a;
        if (!i) return `[${m}]`;
        let b = f == null ? void 0 : f[i];
        d(b)
          ? (a = b)
          : (a = b(r && "instanceIndex" in r ? r.instanceIndex : void 0));
        let T = r && "caseInsensitive" in r && r.caseInsensitive ? "i" : "";
        if (!(r != null && r.operator)) return `[${m}="${a}"${T}]`;
        switch (r.operator) {
          case "prefixed":
            return `[${m}^="${a}"${T}]`;
          case "suffixed":
            return `[${m}$="${a}"${T}]`;
          case "contains":
            return `[${m}*="${a}"${T}]`;
        }
      };
      function n(e, i) {
        let r = t("element", e, i),
          c = (i == null ? void 0 : i.scope) || document;
        return i != null && i.all
          ? [...c.querySelectorAll(r)]
          : c.querySelector(r);
      }
      return [
        t,
        n,
        (e, i) => {
          let r = o[i];
          return r ? e.getAttribute(r.key) : null;
        },
      ];
    };
  var E = {
      preventLoad: { key: `${u}-preventload` },
      debugMode: { key: `${u}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${u}-dev` },
    },
    [_, Tt] = A(E);
  var N = (o) => {
    let { currentScript: t } = document,
      n = {};
    if (!t) return { attributes: n, preventsLoad: !1 };
    let e = {
      preventsLoad: d(t.getAttribute(E.preventLoad.key)),
      attributes: n,
    };
    for (let i in o) {
      let r = t.getAttribute(o[i]);
      e.attributes[i] = r;
    }
    return e;
  };
  var h = ({ scriptAttributes: o, attributeKey: t, version: n, init: s }) => {
      var c;
      k(), (c = window.fsAttributes)[t] || (c[t] = {});
      let { preventsLoad: e, attributes: i } = N(o),
        r = window.fsAttributes[t];
      (r.version = n),
        (r.init = s),
        e ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => s(i)));
    },
    k = () => {
      let o = F();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        C(window.fsAttributes, o);
        return;
      }
      let t = K(o);
      C(t, o),
        W(t),
        (window.fsAttributes = t),
        (window.FsAttributes = window.fsAttributes),
        v();
    },
    K = (o) => {
      let t = {
        cms: {},
        push(...n) {
          var s, e;
          for (let [i, r] of n)
            (e = (s = this[i]) == null ? void 0 : s.loading) == null ||
              e.then(r);
        },
        async import(n, s) {
          let e = t[n];
          return (
            e ||
            new Promise((i) => {
              let r = document.createElement("script");
              (r.src = L(n, s)),
                (r.async = !0),
                (r.onload = () => {
                  let [c] = C(t, [n]);
                  i(c);
                }),
                document.head.append(r);
            })
          );
        },
        destroy() {
          var n, s;
          for (let e of o)
            (s = (n = window.fsAttributes[e]) == null ? void 0 : n.destroy) ==
              null || s.call(n);
        },
      };
      return t;
    },
    F = () => {
      let o = _("src", "finsweet", { operator: "contains" }),
        t = _("dev");
      return [...document.querySelectorAll(`script${o}, script${t}`)].reduce(
        (e, i) => {
          var c;
          let r =
            i.getAttribute(E.dev.key) ||
            ((c = i.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
          return r && !e.includes(r) && e.push(r), e;
        },
        []
      );
    },
    C = (o, t) =>
      t.map((s) => {
        let e = o[s];
        return (
          e ||
          ((o[s] = {}),
          (e = o[s]),
          (e.loading = new Promise((i) => {
            e.resolve = (r) => {
              i(r), delete e.resolve;
            };
          })),
          e)
        );
      }),
    W = (o) => {
      let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      o.push(...t);
    };
  var O = "1.6.0";
  var j = "fs-cms-element",
    H = {
      wrapper: "wrapper",
      list: "list",
      item: "item",
      paginationWrapper: "pagination-wrapper",
      paginationNext: "pagination-next",
      paginationPrevious: "pagination-previous",
      pageCount: "page-count",
      emptyState: "empty",
    },
    l = (o) => {
      let t = `.${U[o]}`,
        n = `[${j}="${H[o]}"]`;
      return `:is(${t}, ${n})`;
    };
  function M(o, t, n = document) {
    let s = typeof o == "string" ? n.querySelector(o) : o;
    if (!s) return;
    let e = s.closest(l("wrapper"));
    if (!e) return;
    let i = e.querySelector(l("list"));
    return t === "wrapper"
      ? e
      : t === "list"
      ? i
      : t === "items"
      ? [
          ...((i == null
            ? void 0
            : i.querySelectorAll(`:scope > ${l("item")}`)) || []),
        ]
      : t === "pageCount"
      ? e.querySelector(l("pageCount"))
      : t === "empty"
      ? e.querySelector(`:scope > ${l("emptyState")}`)
      : t === "pagination"
      ? e.querySelector(l("paginationWrapper"))
      : e.querySelector(
          l(t === "next" ? "paginationNext" : "paginationPrevious")
        );
  }
  var $ = (o, t) => {
    let n = o.getAttribute(t);
    return n ? g(n) : void 0;
  };
  var G = `fs-${p}`,
    X = "list",
    Y = "value",
    y = { element: { key: `${G}-element`, values: { list: X, value: P(Y) } } },
    [$t, R] = A(y);
  var V = async () => {
    await w(I);
    let o = R("list", { operator: "prefixed", all: !0 });
    for (let t of o) {
      let n = M(t, "list") || t,
        s = $(t, y.element.key),
        e = R("value", { instanceIndex: s });
      if (!e) continue;
      let i = n.children.length;
      e.textContent = `${i}`;
    }
    return B(p, o);
  };
  h({ init: V, version: O, attributeKey: p });
})();