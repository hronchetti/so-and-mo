;(this["webpackJsonpso-and-mo-lawn-measurement-tool"] =
  this["webpackJsonpso-and-mo-lawn-measurement-tool"] || []).push([
  [0],
  {
    25: function (e, t, a) {},
    30: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(0),
        c = a.n(n),
        s = a(4),
        r = a.n(s),
        o = a(3),
        l = a(6),
        i = (a(25), a(18)),
        u = a(32),
        d = a(10),
        j = a(7),
        b = a.n(j),
        p = a(13),
        h = a(16),
        f = a(9),
        m = a(1),
        O = function (e) {
          var t = e.panTo,
            a = Object(l.b)(C),
            n = Object(o.a)(a, 1)[0],
            s = c.a.useRef(),
            r = Object(h.a)({
              requestOptions: {
                location: {
                  lat: function () {
                    return 53.394245902896074
                  },
                  lng: function () {
                    return -2.2136139273200524
                  },
                },
                radius: 1e5,
              },
            }),
            i = r.ready,
            u = r.value,
            d = r.suggestions,
            j = d.status,
            O = d.data,
            g = r.setValue,
            x = r.clearSuggestions,
            v = (function () {
              var e = Object(p.a)(
                b.a.mark(function e(a) {
                  var c, s, r, o
                  return b.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              g(a, !1),
                              x(),
                              (e.prev = 2),
                              (e.next = 5),
                              Object(h.b)({ address: a })
                            )
                          case 5:
                            return (c = e.sent), (e.next = 8), Object(h.c)(c[0])
                          case 8:
                            ;(s = e.sent),
                              (r = s.lat),
                              (o = s.lng),
                              t({ lat: r, lng: o }),
                              (e.next = 18)
                            break
                          case 14:
                            ;(e.prev = 14),
                              (e.t0 = e.catch(2)),
                              console.log("Error: ", e.t0),
                              n(
                                "Could not connect to Google Maps, please clear field try again"
                              )
                          case 18:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 14]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return Object(m.jsxs)(f.a, {
            className: "search",
            onSelect: v,
            children: [
              Object(m.jsx)(f.b, {
                value: u,
                className: "search-input",
                onChange: function (e) {
                  g(e.target.value)
                },
                onFocus: function () {
                  return setTimeout(function () {
                    s.current.focus()
                  }, 25)
                },
                ref: s,
                disabled: !i,
                placeholder: "Find your address",
              }),
              Object(m.jsx)(f.c, {
                className: "search-results",
                children:
                  "OK" === j &&
                  O.map(function (e) {
                    var t = e.place_id,
                      a = e.description
                    return Object(m.jsx)(
                      f.d,
                      { className: "search-results-item", value: a },
                      t
                    )
                  }),
              }),
            ],
          })
        },
        g = a(11),
        x = function () {
          return Object(m.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: Object(m.jsxs)("g", {
              fill: "none",
              fillRule: "evenodd",
              children: [
                Object(m.jsx)("path", { d: "M0 0h24v24H0z" }),
                Object(m.jsx)("path", {
                  d:
                    "M13 1v2.055A9.004 9.004 0 0120.945 11H23v2h-2.055A9.004 9.004 0 0113 20.946V23h-2v-2.055a9.004 9.004 0 01-7.945-7.944L1 13v-2h2.055a9.004 9.004 0 017.944-7.945L11 1h2zm-1 4a7 7 0 100 14 7 7 0 000-14z",
                  fill: "#003952",
                }),
                Object(m.jsx)("circle", {
                  fill: "#003952",
                  cx: 12,
                  cy: 12,
                  r: 4,
                }),
              ],
            }),
          })
        },
        v = function (e) {
          var t = e.panTo,
            a = Object(l.b)(C),
            n = Object(o.a)(a, 1)[0],
            s = c.a.useState(!1),
            r = Object(o.a)(s, 2),
            i = r[0],
            u = r[1],
            d = function () {
              navigator.geolocation.getCurrentPosition(
                function (e) {
                  t({ lat: e.coords.latitude, lng: e.coords.longitude }), u(!1)
                },
                function () {
                  n("Could not find your location"), u(!1)
                }
              )
            },
            j = (function () {
              var e = Object(p.a)(
                b.a.mark(function e() {
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          u(!0),
                            navigator.permissions
                              .query({ name: "geolocation" })
                              .then(function (e) {
                                "granted" === e.state
                                  ? d()
                                  : "prompt" === e.state || "denied" === e.state
                                  ? (n("Please give access to geolocation"),
                                    d())
                                  : (n(
                                      "Your device does not support geolocation"
                                    ),
                                    u(!1))
                              })
                        case 2:
                        case "end":
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return Object(m.jsxs)("button", {
            className: "geolocate-button".concat(i ? " loading" : ""),
            onClick: j,
            title: "Show your location",
            children: [
              Object(m.jsx)(x, {}),
              Object(m.jsx)("span", {
                className: "hidden",
                children: "Show your location",
              }),
            ],
          })
        }
      v.propType = { panTo: a.n(g).a.func.isRequired }
      var w = ["places"],
        y = function (e) {
          var t = e.setLawnSize,
            a = Object(l.b)(C),
            n = Object(o.a)(a, 1)[0],
            s = Object(d.d)({
              googleMapsApiKey: "AIzaSyC4ZWAu_GnAWSIhyy9By9wcEuG5weUf6UY",
              libraries: w,
            }),
            r = s.isLoaded,
            j = s.loadError,
            b = c.a.useState({
              lat: 53.394245902896074,
              lng: -2.2136139273200524,
            }),
            p = Object(o.a)(b, 2),
            h = p[0],
            f = p[1],
            g = c.a.useState([]),
            x = Object(o.a)(g, 2),
            y = x[0],
            N = x[1],
            k = c.a.useRef(),
            S = c.a.useCallback(function (e) {
              ;(k.current = e), e.setTilt(0)
            }, []),
            z = c.a.useCallback(function (e) {
              var t = e.lat,
                a = e.lng
              k.current.panTo({ lat: t, lng: a }), k.current.setZoom(19)
            }, [])
          return (
            c.a.useEffect(
              function () {
                var e = Object(u.a)(y)
                return (
                  t(parseInt(e)),
                  function () {
                    t(0)
                  }
                )
              },
              [y, t]
            ),
            c.a.useEffect(
              function () {
                j && n("Error loading map, are you connected to the internet?")
              },
              [j]
            ),
            r && !j
              ? Object(m.jsxs)("section", {
                  className: "map-area",
                  children: [
                    Object(m.jsxs)("header", {
                      className: "map-area-controls",
                      children: [
                        Object(m.jsx)(v, { panTo: z }),
                        Object(m.jsx)(O, { panTo: z }),
                        Object(m.jsx)("button", {
                          className: "clear-markers-button",
                          onClick: function () {
                            return N([])
                          },
                          children: "Clear markers",
                        }),
                      ],
                    }),
                    Object(m.jsxs)(d.a, {
                      mapContainerStyle: { width: "100%", height: "360px" },
                      zoom: 19,
                      mapTypeControl: !1,
                      clickableIcons: !1,
                      onLoad: S,
                      options: {
                        fullscreenControl: !1,
                        mapTypeId: "satellite",
                      },
                      onClick: function (e) {
                        f({ lat: e.latLng.lat(), lng: e.latLng.lng() }),
                          N(function (t) {
                            return [].concat(Object(i.a)(t), [
                              { lat: e.latLng.lat(), lng: e.latLng.lng() },
                            ])
                          })
                      },
                      center: h,
                      children: [
                        y.map(function (e, t) {
                          return Object(m.jsx)(
                            d.b,
                            {
                              draggable: !0,
                              position: { lat: e.lat, lng: e.lng },
                              onDragEnd: function (e) {
                                N(function (a) {
                                  var n = Object(i.a)(a)
                                  return (
                                    (n[t] = {
                                      lat: e.latLng.lat(),
                                      lng: e.latLng.lng(),
                                    }),
                                    n
                                  )
                                })
                              },
                            },
                            e.lat
                          )
                        }),
                        Object(m.jsx)(d.c, { paths: y }),
                      ],
                    }),
                  ],
                })
              : j
              ? Object(m.jsx)("div", {
                  className: "map-area-empty",
                  children: Object(m.jsxs)("span", {
                    className: "map-area-empty-text",
                    children: [
                      "Could not load Google Maps,",
                      Object(m.jsx)("br", {}),
                      " are you connected to the internet?",
                    ],
                  }),
                })
              : Object(m.jsx)("div", {
                  className: "map-area-empty",
                  children: Object(m.jsx)("span", {
                    className: "map-area-empty-text",
                    children: "Loading...",
                  }),
                })
          )
        },
        N = function () {
          return Object(m.jsx)("svg", {
            className: "map-marker",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 15 25",
            children: Object(m.jsxs)("g", {
              transform: "translate(1 1)",
              fill: "none",
              children: [
                Object(m.jsx)("path", {
                  d:
                    "M1.66 2.16C.626 3.266-.023 4.877 0 6.393c.053 3.166 1.48 4.365 3.763 8.723.823 1.918 1.68 3.948 2.497 7.309.113.495.224.956.275.996.051.04.162-.423.275-.918.817-3.361 1.675-5.389 2.497-7.307 2.283-4.358 3.71-5.557 3.763-8.723.025-1.516-.626-3.128-1.662-4.234C10.224.975 8.438.04 6.535 0c-1.903-.039-3.69.896-4.874 2.16z",
                  stroke: "#D73534",
                  strokeWidth: 0.5,
                  fill: "#EA4335",
                }),
                Object(m.jsx)("circle", {
                  fill: "#811411",
                  cx: 6.535,
                  cy: 6.51,
                  r: 2.5,
                }),
              ],
            }),
          })
        },
        C = {
          style: {
            backgroundColor: "#003952",
            color: "white",
            fontFamily: '"Cooper", Arial, sans-serif',
            fontWeight: 300,
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
          },
        },
        k = function () {
          var e = c.a.useState(0),
            t = Object(o.a)(e, 2),
            a = t[0],
            n = t[1],
            s = c.a.useState(""),
            r = Object(o.a)(s, 2),
            i = r[0],
            u = r[1]
          return (
            c.a.useEffect(
              function () {
                !(function (e) {
                  u(
                    e < 126 && e > 0
                      ? "2 years"
                      : e >= 126 && e < 250
                      ? "1 year"
                      : e > 250 && e < 500
                      ? "6 months"
                      : e > 500 && e > 0
                      ? "Multiple boxes"
                      : ""
                  )
                })(a)
              },
              [a]
            ),
            Object(m.jsx)(l.a, {
              children: Object(m.jsxs)("section", {
                className: "feed-duration",
                children: [
                  Object(m.jsxs)("header", {
                    className: "feed-duration-header",
                    children: [
                      Object(m.jsx)("span", {
                        className: "bold-text feed-duration-header-title",
                        children: "Calculate your lawn size with Google Maps",
                      }),
                      Object(m.jsxs)("section", {
                        className: "feed-duration-header-guidance",
                        children: [
                          Object(m.jsx)(N, {}),
                          Object(m.jsx)("p", {
                            children:
                              "Click/Tap to add markers around your lawn on the map",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsxs)("section", {
                    className: "feed-duration-results",
                    children: [
                      Object(m.jsxs)("div", {
                        children: [
                          Object(m.jsx)("label", {
                            htmlFor: "lawn-size",
                            children: "Your lawn size",
                          }),
                          Object(m.jsxs)("div", {
                            className: "feed-duration-results-lawn-size",
                            children: [
                              Object(m.jsx)("input", {
                                type: "number",
                                name: "lawn-size",
                                id: "lawn-size",
                                value: a,
                                onChange: function (e) {
                                  return n(e.target.value)
                                },
                              }),
                              Object(m.jsx)("span", {
                                className:
                                  "feed-duration-results-lawn-size-unit",
                                children: "m\xb2",
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(m.jsxs)("div", {
                        children: [
                          Object(m.jsx)("span", {
                            className: "label",
                            children: "1 So & Mo box will last you:",
                          }),
                          Object(m.jsx)("span", {
                            className: "feed-duration-results-feed-duration",
                            children: "" !== a ? i : "",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(m.jsx)(y, { setLawnSize: n }),
                ],
              }),
            })
          )
        }
      r.a.render(
        Object(m.jsx)(c.a.StrictMode, { children: Object(m.jsx)(k, {}) }),
        document.getElementById("measure-your-lawn")
      )
    },
  },
  [[30, 1, 2]],
])
//# sourceMappingURL=main.4895eb74.chunk.js.map
