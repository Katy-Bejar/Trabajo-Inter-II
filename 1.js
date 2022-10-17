! function(e) {
    var t = {};

    function n(a) { if (t[a]) return t[a].exports; var i = t[a] = { i: a, l: !1, exports: {} }; return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = e, n.c = t, n.d = function(e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(a, i, function(t) { return e[t] }.bind(null, i));
        return a
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "https://demo.morphcast.com/sdk-features/", n(n.s = 263)
}([function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, a;

            function i() { return t.apply(null, arguments) }

            function r(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

            function s(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

            function o(e) { return void 0 === e }

            function d(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

            function l(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

            function u(e, t) { var n, a = []; for (n = 0; n < e.length; ++n) a.push(t(e[n], n)); return a }

            function c(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

            function m(e, t) { for (var n in t) c(t, n) && (e[n] = t[n]); return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e }

            function h(e, t, n, a) { return Ct(e, t, n, a, !0).utc() }

            function _(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

            function f(e) {
                if (null == e._isValid) {
                    var t = _(e),
                        n = a.call(t.parsedDateParts, function(e) { return null != e }),
                        i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
                    e._isValid = i
                }
                return e._isValid
            }

            function p(e) { var t = h(NaN); return null != e ? m(_(t), e) : _(t).userInvalidated = !0, t }
            a = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
                    if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1
            };
            var v = i.momentProperties = [];

            function g(e, t) {
                var n, a, i;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = _(t)), o(t._locale) || (e._locale = t._locale), v.length > 0)
                    for (n = 0; n < v.length; n++) a = v[n], o(i = t[a]) || (e[a] = i);
                return e
            }
            var y = !1;

            function M(e) { g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, i.updateOffset(this), y = !1) }

            function b(e) { return e instanceof M || null != e && null != e._isAMomentObject }

            function L(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

            function k(e) {
                var t = +e,
                    n = 0;
                return 0 !== t && isFinite(t) && (n = L(t)), n
            }

            function w(e, t, n) {
                var a, i = Math.min(e.length, t.length),
                    r = Math.abs(e.length - t.length),
                    s = 0;
                for (a = 0; a < i; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && s++;
                return s + r
            }

            function Y(e) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

            function D(e, t) {
                var n = !0;
                return m(function() {
                    if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
                        for (var a, r = [], s = 0; s < arguments.length; s++) {
                            if (a = "", "object" == typeof arguments[s]) {
                                for (var o in a += "\n[" + s + "] ", arguments[0]) a += o + ": " + arguments[0][o] + ", ";
                                a = a.slice(0, -2)
                            } else a = arguments[s];
                            r.push(a)
                        }
                        Y(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }
            var T, x = {};

            function S(e, t) { null != i.deprecationHandler && i.deprecationHandler(e, t), x[e] || (Y(t), x[e] = !0) }

            function C(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

            function H(e, t) { var n, a = m({}, e); for (n in t) c(t, n) && (s(e[n]) && s(t[n]) ? (a[n] = {}, m(a[n], e[n]), m(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]); for (n in e) c(e, n) && !c(t, n) && s(e[n]) && (a[n] = m({}, a[n])); return a }

            function A(e) { null != e && this.set(e) }
            i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) c(e, t) && n.push(t); return n };
            var O = {};

            function P(e, t) {
                var n = e.toLowerCase();
                O[n] = O[n + "s"] = O[t] = e
            }

            function j(e) { return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0 }

            function E(e) { var t, n, a = {}; for (n in e) c(e, n) && (t = j(n)) && (a[t] = e[n]); return a }
            var F = {};

            function I(e, t) { F[e] = t }

            function W(e, t, n) {
                var a = "" + Math.abs(e),
                    i = t - a.length,
                    r = e >= 0;
                return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + a
            }
            var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                N = {},
                B = {};

            function $(e, t, n, a) { var i = a; "string" == typeof a && (i = function() { return this[a]() }), e && (B[e] = i), t && (B[t[0]] = function() { return W(i.apply(this, arguments), t[1], t[2]) }), n && (B[n] = function() { return this.localeData().ordinal(i.apply(this, arguments), e) }) }

            function V(e, t) { return e.isValid() ? (t = U(t, e.localeData()), N[t] = N[t] || function(e) { var t, n, a, i = e.match(R); for (t = 0, n = i.length; t < n; t++) B[i[t]] ? i[t] = B[i[t]] : i[t] = (a = i[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); return function(t) { var a, r = ""; for (a = 0; a < n; a++) r += C(i[a]) ? i[a].call(t, e) : i[a]; return r } }(t), N[t](e)) : e.localeData().invalidDate() }

            function U(e, t) {
                var n = 5;

                function a(e) { return t.longDateFormat(e) || e }
                for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, a), z.lastIndex = 0, n -= 1;
                return e
            }
            var J = /\d/,
                G = /\d\d/,
                q = /\d{3}/,
                K = /\d{4}/,
                Z = /[+-]?\d{6}/,
                Q = /\d\d?/,
                X = /\d\d\d\d?/,
                ee = /\d\d\d\d\d\d?/,
                te = /\d{1,3}/,
                ne = /\d{1,4}/,
                ae = /[+-]?\d{1,6}/,
                ie = /\d+/,
                re = /[+-]?\d+/,
                se = /Z|[+-]\d\d:?\d\d/gi,
                oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                le = {};

            function ue(e, t, n) { le[e] = C(t) ? t : function(e, a) { return e && n ? n : t } }

            function ce(e, t) { return c(le, e) ? le[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, i) { return t || n || a || i }))) }

            function me(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
            var he = {};

            function _e(e, t) { var n, a = t; for ("string" == typeof e && (e = [e]), d(t) && (a = function(e, n) { n[t] = k(e) }), n = 0; n < e.length; n++) he[e[n]] = a }

            function fe(e, t) { _e(e, function(e, n, a, i) { a._w = a._w || {}, t(e, a._w, a, i) }) }

            function pe(e, t, n) { null != t && c(he, e) && he[e](t, n._a, n, e) }
            var ve = 0,
                ge = 1,
                ye = 2,
                Me = 3,
                be = 4,
                Le = 5,
                ke = 6,
                we = 7,
                Ye = 8;

            function De(e) { return Te(e) ? 366 : 365 }

            function Te(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
            $("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), $(0, ["YY", 2], 0, function() { return this.year() % 100 }), $(0, ["YYYY", 4], 0, "year"), $(0, ["YYYYY", 5], 0, "year"), $(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), I("year", 1), ue("Y", re), ue("YY", Q, G), ue("YYYY", ne, K), ue("YYYYY", ae, Z), ue("YYYYYY", ae, Z), _e(["YYYYY", "YYYYYY"], ve), _e("YYYY", function(e, t) { t[ve] = 2 === e.length ? i.parseTwoDigitYear(e) : k(e) }), _e("YY", function(e, t) { t[ve] = i.parseTwoDigitYear(e) }), _e("Y", function(e, t) { t[ve] = parseInt(e, 10) }), i.parseTwoDigitYear = function(e) { return k(e) + (k(e) > 68 ? 1900 : 2e3) };
            var xe, Se = Ce("FullYear", !0);

            function Ce(e, t) { return function(n) { return null != n ? (Ae(this, e, n), i.updateOffset(this, t), this) : He(this, e) } }

            function He(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

            function Ae(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && Te(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Oe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

            function Oe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n, a = (t % (n = 12) + n) % n; return e += (t - a) / 12, 1 === a ? Te(e) ? 29 : 28 : 31 - a % 7 % 2 }
            xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t;
                return -1
            }, $("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), $("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), $("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), P("month", "M"), I("month", 8), ue("M", Q), ue("MM", Q, G), ue("MMM", function(e, t) { return t.monthsShortRegex(e) }), ue("MMMM", function(e, t) { return t.monthsRegex(e) }), _e(["M", "MM"], function(e, t) { t[ge] = k(e) - 1 }), _e(["MMM", "MMMM"], function(e, t, n, a) {
                var i = n._locale.monthsParse(e, a, n._strict);
                null != i ? t[ge] = i : _(n).invalidMonth = e
            });
            var Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                je = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Fe(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = k(t);
                    else if (!d(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), Oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function Ie(e) { return null != e ? (Fe(this, e), i.updateOffset(this, !0), this) : He(this, "Month") }
            var We = de,
                Re = de;

            function ze() {
                function e(e, t) { return t.length - e.length }
                var t, n, a = [],
                    i = [],
                    r = [];
                for (t = 0; t < 12; t++) n = h([2e3, t]), a.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
                for (a.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) a[t] = me(a[t]), i[t] = me(i[t]);
                for (t = 0; t < 24; t++) r[t] = me(r[t]);
                this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function Ne(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t
            }

            function Be(e, t, n) {
                var a = 7 + t - n,
                    i = (7 + Ne(e, 0, a).getUTCDay() - t) % 7;
                return -i + a - 1
            }

            function $e(e, t, n, a, i) {
                var r, s, o = (7 + n - a) % 7,
                    d = Be(e, a, i),
                    l = 1 + 7 * (t - 1) + o + d;
                return l <= 0 ? s = De(r = e - 1) + l : l > De(e) ? (r = e + 1, s = l - De(e)) : (r = e, s = l), { year: r, dayOfYear: s }
            }

            function Ve(e, t, n) {
                var a, i, r = Be(e.year(), t, n),
                    s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                return s < 1 ? (i = e.year() - 1, a = s + Ue(i, t, n)) : s > Ue(e.year(), t, n) ? (a = s - Ue(e.year(), t, n), i = e.year() + 1) : (i = e.year(), a = s), { week: a, year: i }
            }

            function Ue(e, t, n) {
                var a = Be(e, t, n),
                    i = Be(e + 1, t, n);
                return (De(e) - a + i) / 7
            }

            function Je(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
            $("w", ["ww", 2], "wo", "week"), $("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), I("week", 5), I("isoWeek", 5), ue("w", Q), ue("ww", Q, G), ue("W", Q), ue("WW", Q, G), fe(["w", "ww", "W", "WW"], function(e, t, n, a) { t[a.substr(0, 1)] = k(e) }), $("d", 0, "do", "day"), $("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), $("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), $("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), $("e", 0, 0, "weekday"), $("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), ue("d", Q), ue("e", Q), ue("E", Q), ue("dd", function(e, t) { return t.weekdaysMinRegex(e) }), ue("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), ue("dddd", function(e, t) { return t.weekdaysRegex(e) }), fe(["dd", "ddd", "dddd"], function(e, t, n, a) {
                var i = n._locale.weekdaysParse(e, a, n._strict);
                null != i ? t.d = i : _(n).invalidWeekday = e
            }), fe(["d", "e", "E"], function(e, t, n, a) { t[a] = k(e) });
            var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Ze = de,
                Qe = de,
                Xe = de;

            function et() {
                function e(e, t) { return t.length - e.length }
                var t, n, a, i, r, s = [],
                    o = [],
                    d = [],
                    l = [];
                for (t = 0; t < 7; t++) n = h([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), s.push(a), o.push(i), d.push(r), l.push(a), l.push(i), l.push(r);
                for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = me(o[t]), d[t] = me(d[t]), l[t] = me(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function tt() { return this.hours() % 12 || 12 }

            function nt(e, t) { $(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

            function at(e, t) { return t._meridiemParse }
            $("H", ["HH", 2], 0, "hour"), $("h", ["hh", 2], 0, tt), $("k", ["kk", 2], 0, function() { return this.hours() || 24 }), $("hmm", 0, 0, function() { return "" + tt.apply(this) + W(this.minutes(), 2) }), $("hmmss", 0, 0, function() { return "" + tt.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2) }), $("Hmm", 0, 0, function() { return "" + this.hours() + W(this.minutes(), 2) }), $("Hmmss", 0, 0, function() { return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2) }), nt("a", !0), nt("A", !1), P("hour", "h"), I("hour", 13), ue("a", at), ue("A", at), ue("H", Q), ue("h", Q), ue("k", Q), ue("HH", Q, G), ue("hh", Q, G), ue("kk", Q, G), ue("hmm", X), ue("hmmss", ee), ue("Hmm", X), ue("Hmmss", ee), _e(["H", "HH"], Me), _e(["k", "kk"], function(e, t, n) {
                var a = k(e);
                t[Me] = 24 === a ? 0 : a
            }), _e(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), _e(["h", "hh"], function(e, t, n) { t[Me] = k(e), _(n).bigHour = !0 }), _e("hmm", function(e, t, n) {
                var a = e.length - 2;
                t[Me] = k(e.substr(0, a)), t[be] = k(e.substr(a)), _(n).bigHour = !0
            }), _e("hmmss", function(e, t, n) {
                var a = e.length - 4,
                    i = e.length - 2;
                t[Me] = k(e.substr(0, a)), t[be] = k(e.substr(a, 2)), t[Le] = k(e.substr(i)), _(n).bigHour = !0
            }), _e("Hmm", function(e, t, n) {
                var a = e.length - 2;
                t[Me] = k(e.substr(0, a)), t[be] = k(e.substr(a))
            }), _e("Hmmss", function(e, t, n) {
                var a = e.length - 4,
                    i = e.length - 2;
                t[Me] = k(e.substr(0, a)), t[be] = k(e.substr(a, 2)), t[Le] = k(e.substr(i))
            });
            var it, rt = Ce("Hours", !0),
                st = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: je, monthsShort: Ee, week: { dow: 0, doy: 6 }, weekdays: Ge, weekdaysMin: Ke, weekdaysShort: qe, meridiemParse: /[ap]\.?m?\.?/i },
                ot = {},
                dt = {};

            function lt(e) { return e ? e.toLowerCase().replace("_", "-") : e }

            function ut(t) {
                var a = null;
                if (!ot[t] && void 0 !== e && e && e.exports) try { a = it._abbr, n(184)("./" + t), ct(a) } catch (e) {}
                return ot[t]
            }

            function ct(e, t) { var n; return e && ((n = o(t) ? ht(e) : mt(e, t)) ? it = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), it._abbr }

            function mt(e, t) {
                if (null !== t) {
                    var n, a = st;
                    if (t.abbr = e, null != ot[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = ot[e]._config;
                    else if (null != t.parentLocale)
                        if (null != ot[t.parentLocale]) a = ot[t.parentLocale]._config;
                        else {
                            if (null == (n = ut(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []), dt[t.parentLocale].push({ name: e, config: t }), null;
                            a = n._config
                        }
                    return ot[e] = new A(H(a, t)), dt[e] && dt[e].forEach(function(e) { mt(e.name, e.config) }), ct(e), ot[e]
                }
                return delete ot[e], null
            }

            function ht(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return it;
                if (!r(e)) {
                    if (t = ut(e)) return t;
                    e = [e]
                }
                return function(e) {
                    for (var t, n, a, i, r = 0; r < e.length;) {
                        for (i = lt(e[r]).split("-"), t = i.length, n = (n = lt(e[r + 1])) ? n.split("-") : null; t > 0;) {
                            if (a = ut(i.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && w(i, n, !0) >= t - 1) break;
                            t--
                        }
                        r++
                    }
                    return it
                }(e)
            }

            function _t(e) { var t, n = e._a; return n && -2 === _(e).overflow && (t = n[ge] < 0 || n[ge] > 11 ? ge : n[ye] < 1 || n[ye] > Oe(n[ve], n[ge]) ? ye : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[be] || 0 !== n[Le] || 0 !== n[ke]) ? Me : n[be] < 0 || n[be] > 59 ? be : n[Le] < 0 || n[Le] > 59 ? Le : n[ke] < 0 || n[ke] > 999 ? ke : -1, _(e)._overflowDayOfYear && (t < ve || t > ye) && (t = ye), _(e)._overflowWeeks && -1 === t && (t = we), _(e)._overflowWeekday && -1 === t && (t = Ye), _(e).overflow = t), e }

            function ft(e, t, n) { return null != e ? e : null != t ? t : n }

            function pt(e) {
                var t, n, a, r, s, o = [];
                if (!e._d) {
                    for (a = function(e) { var t = new Date(i.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[ye] && null == e._a[ge] && function(e) {
                            var t, n, a, i, r, s, o, d;
                            if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, s = 4, n = ft(t.GG, e._a[ve], Ve(Ht(), 1, 4).year), a = ft(t.W, 1), ((i = ft(t.E, 1)) < 1 || i > 7) && (d = !0);
                            else {
                                r = e._locale._week.dow, s = e._locale._week.doy;
                                var l = Ve(Ht(), r, s);
                                n = ft(t.gg, e._a[ve], l.year), a = ft(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (d = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : i = r
                            }
                            a < 1 || a > Ue(n, r, s) ? _(e)._overflowWeeks = !0 : null != d ? _(e)._overflowWeekday = !0 : (o = $e(n, a, i, r, s), e._a[ve] = o.year, e._dayOfYear = o.dayOfYear)
                        }(e), null != e._dayOfYear && (s = ft(e._a[ve], a[ve]), (e._dayOfYear > De(s) || 0 === e._dayOfYear) && (_(e)._overflowDayOfYear = !0), n = Ne(s, 0, e._dayOfYear), e._a[ge] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
                    for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[Me] && 0 === e._a[be] && 0 === e._a[Le] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? Ne : function(e, t, n, a, i, r, s) { var o; return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, i, r, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, i, r, s), o }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (_(e).weekdayMismatch = !0)
                }
            }
            var vt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                gt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                yt = /Z|[+-]\d\d(?::?\d\d)?/,
                Mt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                bt = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Lt = /^\/?Date\((\-?\d+)/i;

            function kt(e) {
                var t, n, a, i, r, s, o = e._i,
                    d = vt.exec(o) || gt.exec(o);
                if (d) {
                    for (_(e).iso = !0, t = 0, n = Mt.length; t < n; t++)
                        if (Mt[t][1].exec(d[1])) { i = Mt[t][0], a = !1 !== Mt[t][2]; break }
                    if (null == i) return void(e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, n = bt.length; t < n; t++)
                            if (bt[t][1].exec(d[3])) { r = (d[2] || " ") + bt[t][0]; break }
                        if (null == r) return void(e._isValid = !1)
                    }
                    if (!a && null != r) return void(e._isValid = !1);
                    if (d[4]) {
                        if (!yt.exec(d[4])) return void(e._isValid = !1);
                        s = "Z"
                    }
                    e._f = i + (r || "") + (s || ""), xt(e)
                } else e._isValid = !1
            }
            var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function Yt(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t }
            var Dt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

            function Tt(e) {
                var t, n, a, i, r, s, o, d = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    var l = (t = d[4], n = d[3], a = d[2], i = d[5], r = d[6], s = d[7], o = [Yt(t), Ee.indexOf(n), parseInt(a, 10), parseInt(i, 10), parseInt(r, 10)], s && o.push(parseInt(s, 10)), o);
                    if (! function(e, t, n) {
                            if (e) {
                                var a = qe.indexOf(e),
                                    i = new Date(t[0], t[1], t[2]).getDay();
                                if (a !== i) return _(n).weekdayMismatch = !0, n._isValid = !1, !1
                            }
                            return !0
                        }(d[1], l, e)) return;
                    e._a = l, e._tzm = function(e, t, n) {
                        if (e) return Dt[e];
                        if (t) return 0;
                        var a = parseInt(n, 10),
                            i = a % 100,
                            r = (a - i) / 100;
                        return 60 * r + i
                    }(d[8], d[9], d[10]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function xt(e) {
                if (e._f !== i.ISO_8601)
                    if (e._f !== i.RFC_2822) {
                        e._a = [], _(e).empty = !0;
                        var t, n, a, r, s, o = "" + e._i,
                            d = o.length,
                            l = 0;
                        for (a = U(e._f, e._locale).match(R) || [], t = 0; t < a.length; t++) r = a[t], (n = (o.match(ce(r, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(n))).length > 0 && _(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), l += n.length), B[r] ? (n ? _(e).empty = !1 : _(e).unusedTokens.push(r), pe(r, n, e)) : e._strict && !n && _(e).unusedTokens.push(r);
                        _(e).charsLeftOver = d - l, o.length > 0 && _(e).unusedInput.push(o), e._a[Me] <= 12 && !0 === _(e).bigHour && e._a[Me] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[Me] = function(e, t, n) { var a; return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t }(e._locale, e._a[Me], e._meridiem), pt(e), _t(e)
                    } else Tt(e);
                else kt(e)
            }

            function St(e) {
                var t = e._i,
                    n = e._f;
                return e._locale = e._locale || ht(e._l), null === t || void 0 === n && "" === t ? p({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new M(_t(t)) : (l(t) ? e._d = t : r(n) ? function(e) {
                    var t, n, a, i, r;
                    if (0 === e._f.length) return _(e).invalidFormat = !0, void(e._d = new Date(NaN));
                    for (i = 0; i < e._f.length; i++) r = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], xt(t), f(t) && (r += _(t).charsLeftOver, r += 10 * _(t).unusedTokens.length, _(t).score = r, (null == a || r < a) && (a = r, n = t));
                    m(e, n || t)
                }(e) : n ? xt(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = Lt.exec(e._i);
                        null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Tt(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                    }(e) : r(t) ? (e._a = u(t.slice(0), function(e) { return parseInt(e, 10) }), pt(e)) : s(t) ? function(e) {
                        if (!e._d) {
                            var t = E(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), pt(e)
                        }
                    }(e) : d(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
                }(e), f(e) || (e._d = null), e))
            }

            function Ct(e, t, n, a, i) {
                var o, d = {};
                return !0 !== n && !1 !== n || (a = n, n = void 0), (s(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = i, d._l = n, d._i = e, d._f = t, d._strict = a, (o = new M(_t(St(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
            }

            function Ht(e, t, n, a) { return Ct(e, t, n, a, !1) }
            i.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
            var At = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ht.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
                Ot = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ht.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : p() });

            function Pt(e, t) { var n, a; if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return Ht(); for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]); return n }
            var jt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Et(e) {
                var t = E(e),
                    n = t.year || 0,
                    a = t.quarter || 0,
                    i = t.month || 0,
                    r = t.week || t.isoWeek || 0,
                    s = t.day || 0,
                    o = t.hour || 0,
                    d = t.minute || 0,
                    l = t.second || 0,
                    u = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e)
                        if (-1 === xe.call(jt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, a = 0; a < jt.length; ++a)
                        if (e[jt[a]]) {
                            if (n) return !1;
                            parseFloat(e[jt[a]]) !== k(e[jt[a]]) && (n = !0)
                        }
                    return !0
                }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +i + 3 * a + 12 * n, this._data = {}, this._locale = ht(), this._bubble()
            }

            function Ft(e) { return e instanceof Et }

            function It(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

            function Wt(e, t) {
                $(e, 0, 0, function() {
                    var e = this.utcOffset(),
                        n = "+";
                    return e < 0 && (e = -e, n = "-"), n + W(~~(e / 60), 2) + t + W(~~e % 60, 2)
                })
            }
            Wt("Z", ":"), Wt("ZZ", ""), ue("Z", oe), ue("ZZ", oe), _e(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = zt(oe, e) });
            var Rt = /([\+\-]|\d\d)/gi;

            function zt(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var a = n[n.length - 1] || [],
                    i = (a + "").match(Rt) || ["-", 0, 0],
                    r = 60 * i[1] + k(i[2]);
                return 0 === r ? 0 : "+" === i[0] ? r : -r
            }

            function Nt(e, t) { var n, a; return t._isUTC ? (n = t.clone(), a = (b(e) || l(e) ? e.valueOf() : Ht(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), i.updateOffset(n, !1), n) : Ht(e).local() }

            function Bt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

            function $t() { return !!this.isValid() && this._isUTC && 0 === this._offset }
            i.updateOffset = function() {};
            var Vt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ut = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Jt(e, t) {
                var n, a, i, r, s, o, l = e,
                    u = null;
                return Ft(e) ? l = { ms: e._milliseconds, d: e._days, M: e._months } : d(e) ? (l = {}, t ? l[t] = e : l.milliseconds = e) : (u = Vt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, l = { y: 0, d: k(u[ye]) * n, h: k(u[Me]) * n, m: k(u[be]) * n, s: k(u[Le]) * n, ms: k(It(1e3 * u[ke])) * n }) : (u = Ut.exec(e)) ? (n = "-" === u[1] ? -1 : 1, l = { y: Gt(u[2], n), M: Gt(u[3], n), w: Gt(u[4], n), d: Gt(u[5], n), h: Gt(u[6], n), m: Gt(u[7], n), s: Gt(u[8], n) }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = Ht(l.from), s = Ht(l.to), i = r.isValid() && s.isValid() ? (s = Nt(s, r), r.isBefore(s) ? o = qt(r, s) : ((o = qt(s, r)).milliseconds = -o.milliseconds, o.months = -o.months), o) : { milliseconds: 0, months: 0 }, (l = {}).ms = i.milliseconds, l.M = i.months), a = new Et(l), Ft(e) && c(e, "_locale") && (a._locale = e._locale), a
            }

            function Gt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

            function qt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

            function Kt(e, t) { return function(n, a) { var i; return null === a || isNaN(+a) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), Zt(this, Jt(n = "string" == typeof n ? +n : n, a), e), this } }

            function Zt(e, t, n, a) {
                var r = t._milliseconds,
                    s = It(t._days),
                    o = It(t._months);
                e.isValid() && (a = null == a || a, o && Fe(e, He(e, "Month") + o * n), s && Ae(e, "Date", He(e, "Date") + s * n), r && e._d.setTime(e._d.valueOf() + r * n), a && i.updateOffset(e, s || o))
            }
            Jt.fn = Et.prototype, Jt.invalid = function() { return Jt(NaN) };
            var Qt = Kt(1, "add"),
                Xt = Kt(-1, "subtract");

            function en(e, t) {
                var n, a, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    r = e.clone().add(i, "months");
                return t - r < 0 ? (n = e.clone().add(i - 1, "months"), a = (t - r) / (r - n)) : (n = e.clone().add(i + 1, "months"), a = (t - r) / (n - r)), -(i + a) || 0
            }

            function tn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this) }
            i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var nn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

            function an() { return this._locale }
            var rn = 1e3,
                sn = 60 * rn,
                on = 60 * sn,
                dn = 3506328 * on;

            function ln(e, t) { return (e % t + t) % t }

            function un(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - dn : new Date(e, t, n).valueOf() }

            function cn(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - dn : Date.UTC(e, t, n) }

            function mn(e, t) { $(0, [e, e.length], 0, t) }

            function hn(e, t, n, a, i) {
                var r;
                return null == e ? Ve(this, a, i).year : (r = Ue(e, a, i), t > r && (t = r), function(e, t, n, a, i) {
                    var r = $e(e, t, n, a, i),
                        s = Ne(r.year, 0, r.dayOfYear);
                    return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                }.call(this, e, t, n, a, i))
            }
            $(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), $(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), mn("gggg", "weekYear"), mn("ggggg", "weekYear"), mn("GGGG", "isoWeekYear"), mn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), ue("G", re), ue("g", re), ue("GG", Q, G), ue("gg", Q, G), ue("GGGG", ne, K), ue("gggg", ne, K), ue("GGGGG", ae, Z), ue("ggggg", ae, Z), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) { t[a.substr(0, 2)] = k(e) }), fe(["gg", "GG"], function(e, t, n, a) { t[a] = i.parseTwoDigitYear(e) }), $("Q", 0, "Qo", "quarter"), P("quarter", "Q"), I("quarter", 7), ue("Q", J), _e("Q", function(e, t) { t[ge] = 3 * (k(e) - 1) }), $("D", ["DD", 2], "Do", "date"), P("date", "D"), I("date", 9), ue("D", Q), ue("DD", Q, G), ue("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), _e(["D", "DD"], ye), _e("Do", function(e, t) { t[ye] = k(e.match(Q)[0]) });
            var _n = Ce("Date", !0);
            $("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), I("dayOfYear", 4), ue("DDD", te), ue("DDDD", q), _e(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = k(e) }), $("m", ["mm", 2], 0, "minute"), P("minute", "m"), I("minute", 14), ue("m", Q), ue("mm", Q, G), _e(["m", "mm"], be);
            var fn = Ce("Minutes", !1);
            $("s", ["ss", 2], 0, "second"), P("second", "s"), I("second", 15), ue("s", Q), ue("ss", Q, G), _e(["s", "ss"], Le);
            var pn, vn = Ce("Seconds", !1);
            for ($("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), $(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), $(0, ["SSS", 3], 0, "millisecond"), $(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), $(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), $(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), $(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), $(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), $(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), P("millisecond", "ms"), I("millisecond", 16), ue("S", te, J), ue("SS", te, G), ue("SSS", te, q), pn = "SSSS"; pn.length <= 9; pn += "S") ue(pn, ie);

            function gn(e, t) { t[ke] = k(1e3 * ("0." + e)) }
            for (pn = "S"; pn.length <= 9; pn += "S") _e(pn, gn);
            var yn = Ce("Milliseconds", !1);
            $("z", 0, 0, "zoneAbbr"), $("zz", 0, 0, "zoneName");
            var Mn = M.prototype;

            function bn(e) { return e }
            Mn.add = Qt, Mn.calendar = function(e, t) {
                var n = e || Ht(),
                    a = Nt(n, this).startOf("day"),
                    r = i.calendarFormat(this, a) || "sameElse",
                    s = t && (C(t[r]) ? t[r].call(this, n) : t[r]);
                return this.format(s || this.localeData().calendar(r, this, Ht(n)))
            }, Mn.clone = function() { return new M(this) }, Mn.diff = function(e, t, n) {
                var a, i, r;
                if (!this.isValid()) return NaN;
                if (!(a = Nt(e, this)).isValid()) return NaN;
                switch (i = 6e4 * (a.utcOffset() - this.utcOffset()), t = j(t)) {
                    case "year":
                        r = en(this, a) / 12;
                        break;
                    case "month":
                        r = en(this, a);
                        break;
                    case "quarter":
                        r = en(this, a) / 3;
                        break;
                    case "second":
                        r = (this - a) / 1e3;
                        break;
                    case "minute":
                        r = (this - a) / 6e4;
                        break;
                    case "hour":
                        r = (this - a) / 36e5;
                        break;
                    case "day":
                        r = (this - a - i) / 864e5;
                        break;
                    case "week":
                        r = (this - a - i) / 6048e5;
                        break;
                    default:
                        r = this - a
                }
                return n ? r : L(r)
            }, Mn.endOf = function(e) {
                var t;
                if (void 0 === (e = j(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? cn : un;
                switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        t = this._d.valueOf(), t += on - ln(t + (this._isUTC ? 0 : this.utcOffset() * sn), on) - 1;
                        break;
                    case "minute":
                        t = this._d.valueOf(), t += sn - ln(t, sn) - 1;
                        break;
                    case "second":
                        t = this._d.valueOf(), t += rn - ln(t, rn) - 1
                }
                return this._d.setTime(t), i.updateOffset(this, !0), this
            }, Mn.format = function(e) { e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var t = V(this, e); return this.localeData().postformat(t) }, Mn.from = function(e, t) { return this.isValid() && (b(e) && e.isValid() || Ht(e).isValid()) ? Jt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Mn.fromNow = function(e) { return this.from(Ht(), e) }, Mn.to = function(e, t) { return this.isValid() && (b(e) && e.isValid() || Ht(e).isValid()) ? Jt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, Mn.toNow = function(e) { return this.to(Ht(), e) }, Mn.get = function(e) { return C(this[e = j(e)]) ? this[e]() : this }, Mn.invalidAt = function() { return _(this).overflow }, Mn.isAfter = function(e, t) { var n = b(e) ? e : Ht(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, Mn.isBefore = function(e, t) { var n = b(e) ? e : Ht(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, Mn.isBetween = function(e, t, n, a) {
                var i = b(e) ? e : Ht(e),
                    r = b(t) ? t : Ht(t);
                return !!(this.isValid() && i.isValid() && r.isValid()) && (("(" === (a = a || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === a[1] ? this.isBefore(r, n) : !this.isAfter(r, n)))
            }, Mn.isSame = function(e, t) { var n, a = b(e) ? e : Ht(e); return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = j(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, Mn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, Mn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, Mn.isValid = function() { return f(this) }, Mn.lang = nn, Mn.locale = tn, Mn.localeData = an, Mn.max = Ot, Mn.min = At, Mn.parsingFlags = function() { return m({}, _(this)) }, Mn.set = function(e, t) {
                if ("object" == typeof e)
                    for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: F[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = E(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]);
                else if (C(this[e = j(e)])) return this[e](t);
                return this
            }, Mn.startOf = function(e) {
                var t;
                if (void 0 === (e = j(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? cn : un;
                switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1);
                        break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        t = n(this.year(), this.month(), 1);
                        break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        t = this._d.valueOf(), t -= ln(t + (this._isUTC ? 0 : this.utcOffset() * sn), on);
                        break;
                    case "minute":
                        t = this._d.valueOf(), t -= ln(t, sn);
                        break;
                    case "second":
                        t = this._d.valueOf(), t -= ln(t, rn)
                }
                return this._d.setTime(t), i.updateOffset(this, !0), this
            }, Mn.subtract = Xt, Mn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, Mn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, Mn.toDate = function() { return new Date(this.valueOf()) }, Mn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e,
                    n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? V(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(n, "Z")) : V(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, Mn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]',
                    a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    i = t + '[")]';
                return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + i)
            }, Mn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, Mn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, Mn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, Mn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, Mn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, Mn.year = Se, Mn.isLeapYear = function() { return Te(this.year()) }, Mn.weekYear = function(e) { return hn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, Mn.isoWeekYear = function(e) { return hn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, Mn.quarter = Mn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, Mn.month = Ie, Mn.daysInMonth = function() { return Oe(this.year(), this.month()) }, Mn.week = Mn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, Mn.isoWeek = Mn.isoWeeks = function(e) { var t = Ve(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, Mn.weeksInYear = function() { var e = this.localeData()._week; return Ue(this.year(), e.dow, e.doy) }, Mn.isoWeeksInYear = function() { return Ue(this.year(), 1, 4) }, Mn.date = _n, Mn.day = Mn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, Mn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, Mn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, Mn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, Mn.hour = Mn.hours = rt, Mn.minute = Mn.minutes = fn, Mn.second = Mn.seconds = vn, Mn.millisecond = Mn.milliseconds = yn, Mn.utcOffset = function(e, t, n) { var a, r = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = zt(oe, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (a = Bt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Zt(this, Jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? r : Bt(this) }, Mn.utc = function(e) { return this.utcOffset(0, e) }, Mn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Bt(this), "m")), this }, Mn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var e = zt(se, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }, Mn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? Ht(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, Mn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, Mn.isLocal = function() { return !!this.isValid() && !this._isUTC }, Mn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, Mn.isUtc = $t, Mn.isUTC = $t, Mn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, Mn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, Mn.dates = D("dates accessor is deprecated. Use date instead.", _n), Mn.months = D("months accessor is deprecated. Use month instead", Ie), Mn.years = D("years accessor is deprecated. Use year instead", Se), Mn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), Mn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (g(e, this), (e = St(e))._a) {
                    var t = e._isUTC ? h(e._a) : Ht(e._a);
                    this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var Ln = A.prototype;

            function kn(e, t, n, a) {
                var i = ht(),
                    r = h().set(a, t);
                return i[n](r, e)
            }

            function wn(e, t, n) { if (d(e) && (t = e, e = void 0), e = e || "", null != t) return kn(e, t, n, "month"); var a, i = []; for (a = 0; a < 12; a++) i[a] = kn(e, a, n, "month"); return i }

            function Yn(e, t, n, a) {
                "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || "");
                var i, r = ht(),
                    s = e ? r._week.dow : 0;
                if (null != n) return kn(t, (n + s) % 7, a, "day");
                var o = [];
                for (i = 0; i < 7; i++) o[i] = kn(t, (i + s) % 7, a, "day");
                return o
            }
            Ln.calendar = function(e, t, n) { var a = this._calendar[e] || this._calendar.sameElse; return C(a) ? a.call(t, n) : a }, Ln.longDateFormat = function(e) {
                var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e])
            }, Ln.invalidDate = function() { return this._invalidDate }, Ln.ordinal = function(e) { return this._ordinal.replace("%d", e) }, Ln.preparse = bn, Ln.postformat = bn, Ln.relativeTime = function(e, t, n, a) { var i = this._relativeTime[n]; return C(i) ? i(e, t, n, a) : i.replace(/%d/i, e) }, Ln.pastFuture = function(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return C(n) ? n(t) : n.replace(/%s/i, t) }, Ln.set = function(e) {
                var t, n;
                for (n in e) C(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, Ln.months = function(e, t) { return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone }, Ln.monthsShort = function(e, t) { return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, Ln.monthsParse = function(e, t, n) {
                var a, i, r;
                if (this._monthsParseExact) return function(e, t, n) {
                    var a, i, r, s = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = h([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = xe.call(this._longMonthsParse, s)) ? i : -1 !== (i = xe.call(this._shortMonthsParse, s)) ? i : null
                }.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) { if (i = h([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a; if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a; if (!n && this._monthsParse[a].test(e)) return a }
            }, Ln.monthsRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Re), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, Ln.monthsShortRegex = function(e) { return this._monthsParseExact ? (c(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = We), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, Ln.week = function(e) { return Ve(e, this._week.dow, this._week.doy).week }, Ln.firstDayOfYear = function() { return this._week.doy }, Ln.firstDayOfWeek = function() { return this._week.dow }, Ln.weekdays = function(e, t) { var n = r(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Je(n, this._week.dow) : e ? n[e.day()] : n }, Ln.weekdaysMin = function(e) { return !0 === e ? Je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, Ln.weekdaysShort = function(e) { return !0 === e ? Je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, Ln.weekdaysParse = function(e, t, n) {
                var a, i, r;
                if (this._weekdaysParseExact) return function(e, t, n) {
                    var a, i, r, s = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = h([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = xe.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = xe.call(this._weekdaysParse, s)) ? i : -1 !== (i = xe.call(this._shortWeekdaysParse, s)) ? i : null
                }.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) { if (i = h([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a; if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a; if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a; if (!n && this._weekdaysParse[a].test(e)) return a }
            }, Ln.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, Ln.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, Ln.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, Ln.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, Ln.meridiem = function(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, ct("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), i.lang = D("moment.lang is deprecated. Use moment.locale instead.", ct), i.langData = D("moment.langData is deprecated. Use moment.localeData instead.", ht);
            var Dn = Math.abs;

            function Tn(e, t, n, a) { var i = Jt(t, n); return e._milliseconds += a * i._milliseconds, e._days += a * i._days, e._months += a * i._months, e._bubble() }

            function xn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

            function Sn(e) { return 4800 * e / 146097 }

            function Cn(e) { return 146097 * e / 4800 }

            function Hn(e) { return function() { return this.as(e) } }
            var An = Hn("ms"),
                On = Hn("s"),
                Pn = Hn("m"),
                jn = Hn("h"),
                En = Hn("d"),
                Fn = Hn("w"),
                In = Hn("M"),
                Wn = Hn("Q"),
                Rn = Hn("y");

            function zn(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
            var Nn = zn("milliseconds"),
                Bn = zn("seconds"),
                $n = zn("minutes"),
                Vn = zn("hours"),
                Un = zn("days"),
                Jn = zn("months"),
                Gn = zn("years"),
                qn = Math.round,
                Kn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                Zn = Math.abs;

            function Qn(e) { return (e > 0) - (e < 0) || +e }

            function Xn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = Zn(this._milliseconds) / 1e3,
                    a = Zn(this._days),
                    i = Zn(this._months);
                e = L(n / 60), t = L(e / 60), n %= 60, e %= 60;
                var r = L(i / 12),
                    s = i %= 12,
                    o = a,
                    d = t,
                    l = e,
                    u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    c = this.asSeconds();
                if (!c) return "P0D";
                var m = c < 0 ? "-" : "",
                    h = Qn(this._months) !== Qn(c) ? "-" : "",
                    _ = Qn(this._days) !== Qn(c) ? "-" : "",
                    f = Qn(this._milliseconds) !== Qn(c) ? "-" : "";
                return m + "P" + (r ? h + r + "Y" : "") + (s ? h + s + "M" : "") + (o ? _ + o + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
            }
            var ea = Et.prototype;
            return ea.isValid = function() { return this._isValid }, ea.abs = function() { var e = this._data; return this._milliseconds = Dn(this._milliseconds), this._days = Dn(this._days), this._months = Dn(this._months), e.milliseconds = Dn(e.milliseconds), e.seconds = Dn(e.seconds), e.minutes = Dn(e.minutes), e.hours = Dn(e.hours), e.months = Dn(e.months), e.years = Dn(e.years), this }, ea.add = function(e, t) { return Tn(this, e, t, 1) }, ea.subtract = function(e, t) { return Tn(this, e, t, -1) }, ea.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, n, a = this._milliseconds;
                if ("month" === (e = j(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, n = this._months + Sn(t), e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                } else switch (t = this._days + Math.round(Cn(this._months)), e) {
                    case "week":
                        return t / 7 + a / 6048e5;
                    case "day":
                        return t + a / 864e5;
                    case "hour":
                        return 24 * t + a / 36e5;
                    case "minute":
                        return 1440 * t + a / 6e4;
                    case "second":
                        return 86400 * t + a / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + a;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }, ea.asMilliseconds = An, ea.asSeconds = On, ea.asMinutes = Pn, ea.asHours = jn, ea.asDays = En, ea.asWeeks = Fn, ea.asMonths = In, ea.asQuarters = Wn, ea.asYears = Rn, ea.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN }, ea._bubble = function() {
                var e, t, n, a, i, r = this._milliseconds,
                    s = this._days,
                    o = this._months,
                    d = this._data;
                return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * xn(Cn(o) + s), s = 0, o = 0), d.milliseconds = r % 1e3, e = L(r / 1e3), d.seconds = e % 60, t = L(e / 60), d.minutes = t % 60, n = L(t / 60), d.hours = n % 24, s += L(n / 24), i = L(Sn(s)), o += i, s -= xn(Cn(i)), a = L(o / 12), o %= 12, d.days = s, d.months = o, d.years = a, this
            }, ea.clone = function() { return Jt(this) }, ea.get = function(e) { return e = j(e), this.isValid() ? this[e + "s"]() : NaN }, ea.milliseconds = Nn, ea.seconds = Bn, ea.minutes = $n, ea.hours = Vn, ea.days = Un, ea.weeks = function() { return L(this.days() / 7) }, ea.months = Jn, ea.years = Gn, ea.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(),
                    n = function(e, t, n) {
                        var a = Jt(e).abs(),
                            i = qn(a.as("s")),
                            r = qn(a.as("m")),
                            s = qn(a.as("h")),
                            o = qn(a.as("d")),
                            d = qn(a.as("M")),
                            l = qn(a.as("y")),
                            u = i <= Kn.ss && ["s", i] || i < Kn.s && ["ss", i] || r <= 1 && ["m"] || r < Kn.m && ["mm", r] || s <= 1 && ["h"] || s < Kn.h && ["hh", s] || o <= 1 && ["d"] || o < Kn.d && ["dd", o] || d <= 1 && ["M"] || d < Kn.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                        return u[2] = t, u[3] = +e > 0, u[4] = n,
                            function(e, t, n, a, i) { return i.relativeTime(t || 1, !!n, e, a) }.apply(null, u)
                    }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }, ea.toISOString = Xn, ea.toString = Xn, ea.toJSON = Xn, ea.locale = tn, ea.localeData = an, ea.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Xn), ea.lang = nn, $("X", 0, 0, "unix"), $("x", 0, 0, "valueOf"), ue("x", re), ue("X", /[+-]?\d+(\.\d{1,3})?/), _e("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), _e("x", function(e, t, n) { n._d = new Date(k(e)) }), i.version = "2.24.0", t = Ht, i.fn = Mn, i.min = function() { return Pt("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return Pt("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = h, i.unix = function(e) { return Ht(1e3 * e) }, i.months = function(e, t) { return wn(e, t, "months") }, i.isDate = l, i.locale = ct, i.invalid = p, i.duration = Jt, i.isMoment = b, i.weekdays = function(e, t, n) { return Yn(e, t, n, "weekdays") }, i.parseZone = function() { return Ht.apply(null, arguments).parseZone() }, i.localeData = ht, i.isDuration = Ft, i.monthsShort = function(e, t) { return wn(e, t, "monthsShort") }, i.weekdaysMin = function(e, t, n) { return Yn(e, t, n, "weekdaysMin") }, i.defineLocale = mt, i.updateLocale = function(e, t) {
                if (null != t) {
                    var n, a, i = st;
                    null != (a = ut(e)) && (i = a._config), t = H(i, t), (n = new A(t)).parentLocale = ot[e], ot[e] = n, ct(e)
                } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);
                return ot[e]
            }, i.locales = function() { return T(ot) }, i.weekdaysShort = function(e, t, n) { return Yn(e, t, n, "weekdaysShort") }, i.normalizeUnits = j, i.relativeTimeRounding = function(e) { return void 0 === e ? qn : "function" == typeof e && (qn = e, !0) }, i.relativeTimeThreshold = function(e, t) { return void 0 !== Kn[e] && (void 0 === t ? Kn[e] : (Kn[e] = t, "s" === e && (Kn.ss = t - 1), !0)) }, i.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, i.prototype = Mn, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, i
        }()
    }).call(this, n(183)(e))
}, function(e, t, n) {
    "use strict";

    function a(e, t, n, a, i, r, s, o) {
        var d, l = "function" == typeof e ? e.options : e;
        if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), a && (l.functional = !0), r && (l._scopeId = "data-v-" + r), s ? (d = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, l._ssrRegister = d) : i && (d = o ? function() { i.call(this, this.$root.$options.shadowRoot) } : i), d)
            if (l.functional) {
                l._injectStyles = d;
                var u = l.render;
                l.render = function(e, t) { return d.call(t), u(e, t) }
            } else {
                var c = l.beforeCreate;
                l.beforeCreate = c ? [].concat(c, d) : [d]
            }
        return { exports: e, options: l }
    }
    n.d(t, "a", function() { return a })
}, function(e, t) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function a(e) {
        return function(e) {
            var t, n, a, i, r = "";
            for (t = e.length - 1; t >= 3; t -= 4) {
                for (a = e.substr(t + 1 - 4, 4), i = 0, n = 0; n < 4; n += 1) {
                    if ("0" !== a[n] && "1" !== a[n]) return { valid: !1 };
                    i = 2 * i + parseInt(a[n], 10)
                }
                r = i >= 10 ? String.fromCharCode(i - 10 + "A".charCodeAt(0)) + r : String(i) + r
            }
            if (t >= 0) {
                for (i = 0, n = 0; n <= t; n += 1) {
                    if ("0" !== e[n] && "1" !== e[n]) return { valid: !1 };
                    i = 2 * i + parseInt(e[n], 10)
                }
                r = String(i) + r
            }
            return { valid: !0, result: r }
        }(e.replaceAll(",", "")).result
    }

    function i(e) {
        if (e.indexOf(",") > -1) return e;
        e = function(e) {
            var t, n = "",
                a = { 0: "0000", 1: "0001", 2: "0010", 3: "0011", 4: "0100", 5: "0101", 6: "0110", 7: "0111", 8: "1000", 9: "1001", a: "1010", b: "1011", c: "1100", d: "1101", e: "1110", f: "1111", A: "1010", B: "1011", C: "1100", D: "1101", E: "1110", F: "1111" };
            for (t = 0; t < e.length; t += 1) {
                if (!a.hasOwnProperty(e[t])) return { valid: !1 };
                n += a[e[t]]
            }
            return { valid: !0, result: n }
        }(e).result;
        for (var t = "", n = 0; n < e.length; n += 1) "" != t && (t += ","), "" == t && "0" == e[n] || (t += e[n]);
        return t
    }
    n.d(t, "b", function() { return a }), n.d(t, "a", function() { return i })
}, function(e, t, n) {
    (function(t, n) {
        /*!
         * Vue.js v2.6.10
         * (c) 2014-2019 Evan You
         * Released under the MIT License.
         */
        e.exports = function() {
            "use strict";
            var e = Object.freeze({});

            function a(e) { return null == e }

            function i(e) { return null != e }

            function r(e) { return !0 === e }

            function s(e) { return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e }

            function o(e) { return null !== e && "object" == typeof e }
            var d = Object.prototype.toString;

            function l(e) { return "[object Object]" === d.call(e) }

            function u(e) { var t = parseFloat(String(e)); return t >= 0 && Math.floor(t) === t && isFinite(e) }

            function c(e) { return i(e) && "function" == typeof e.then && "function" == typeof e.catch }

            function m(e) { return null == e ? "" : Array.isArray(e) || l(e) && e.toString === d ? JSON.stringify(e, null, 2) : String(e) }

            function h(e) { var t = parseFloat(e); return isNaN(t) ? e : t }

            function _(e, t) { for (var n = Object.create(null), a = e.split(","), i = 0; i < a.length; i++) n[a[i]] = !0; return t ? function(e) { return n[e.toLowerCase()] } : function(e) { return n[e] } }
            var f = _("slot,component", !0),
                p = _("key,ref,slot,slot-scope,is");

            function v(e, t) { if (e.length) { var n = e.indexOf(t); if (n > -1) return e.splice(n, 1) } }
            var g = Object.prototype.hasOwnProperty;

            function y(e, t) { return g.call(e, t) }

            function M(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }
            var b = /-(\w)/g,
                L = M(function(e) { return e.replace(b, function(e, t) { return t ? t.toUpperCase() : "" }) }),
                k = M(function(e) { return e.charAt(0).toUpperCase() + e.slice(1) }),
                w = /\B([A-Z])/g,
                Y = M(function(e) { return e.replace(w, "-$1").toLowerCase() }),
                D = Function.prototype.bind ? function(e, t) { return e.bind(t) } : function(e, t) {
                    function n(n) { var a = arguments.length; return a ? a > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t) }
                    return n._length = e.length, n
                };

            function T(e, t) { t = t || 0; for (var n = e.length - t, a = new Array(n); n--;) a[n] = e[n + t]; return a }

            function x(e, t) { for (var n in t) e[n] = t[n]; return e }

            function S(e) { for (var t = {}, n = 0; n < e.length; n++) e[n] && x(t, e[n]); return t }

            function C(e, t, n) {}
            var H = function(e, t, n) { return !1 },
                A = function(e) { return e };

            function O(e, t) {
                if (e === t) return !0;
                var n = o(e),
                    a = o(t);
                if (!n || !a) return !n && !a && String(e) === String(t);
                try {
                    var i = Array.isArray(e),
                        r = Array.isArray(t);
                    if (i && r) return e.length === t.length && e.every(function(e, n) { return O(e, t[n]) });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (i || r) return !1;
                    var s = Object.keys(e),
                        d = Object.keys(t);
                    return s.length === d.length && s.every(function(n) { return O(e[n], t[n]) })
                } catch (e) { return !1 }
            }

            function P(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (O(e[n], t)) return n;
                return -1
            }

            function j(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } }
            var E = "data-server-rendered",
                F = ["component", "directive", "filter"],
                I = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                W = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: H, isReservedAttr: H, isUnknownElement: H, getTagNamespace: C, parsePlatformTagName: A, mustUseProp: H, async: !0, _lifecycleHooks: I },
                R = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function z(e, t, n, a) { Object.defineProperty(e, t, { value: n, enumerable: !!a, writable: !0, configurable: !0 }) }
            var N, B = new RegExp("[^" + R.source + ".$_\\d]"),
                $ = "__proto__" in {},
                V = "undefined" != typeof window,
                U = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                J = U && WXEnvironment.platform.toLowerCase(),
                G = V && window.navigator.userAgent.toLowerCase(),
                q = G && /msie|trident/.test(G),
                K = G && G.indexOf("msie 9.0") > 0,
                Z = G && G.indexOf("edge/") > 0,
                Q = (G && G.indexOf("android"), G && /iphone|ipad|ipod|ios/.test(G) || "ios" === J),
                X = (G && /chrome\/\d+/.test(G), G && /phantomjs/.test(G), G && G.match(/firefox\/(\d+)/)),
                ee = {}.watch,
                te = !1;
            if (V) try {
                var ne = {};
                Object.defineProperty(ne, "passive", { get: function() { te = !0 } }), window.addEventListener("test-passive", null, ne)
            } catch (e) {}
            var ae = function() { return void 0 === N && (N = !V && !U && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV), N },
                ie = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function re(e) { return "function" == typeof e && /native code/.test(e.toString()) }
            var se, oe = "undefined" != typeof Symbol && re(Symbol) && "undefined" != typeof Reflect && re(Reflect.ownKeys);
            se = "undefined" != typeof Set && re(Set) ? Set : function() {
                function e() { this.set = Object.create(null) }
                return e.prototype.has = function(e) { return !0 === this.set[e] }, e.prototype.add = function(e) { this.set[e] = !0 }, e.prototype.clear = function() { this.set = Object.create(null) }, e
            }();
            var de = C,
                le = 0,
                ue = function() { this.id = le++, this.subs = [] };
            ue.prototype.addSub = function(e) { this.subs.push(e) }, ue.prototype.removeSub = function(e) { v(this.subs, e) }, ue.prototype.depend = function() { ue.target && ue.target.addDep(this) }, ue.prototype.notify = function() { for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update() }, ue.target = null;
            var ce = [];

            function me(e) { ce.push(e), ue.target = e }

            function he() { ce.pop(), ue.target = ce[ce.length - 1] }
            var _e = function(e, t, n, a, i, r, s, o) { this.tag = e, this.data = t, this.children = n, this.text = a, this.elm = i, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1 },
                fe = { child: { configurable: !0 } };
            fe.child.get = function() { return this.componentInstance }, Object.defineProperties(_e.prototype, fe);
            var pe = function(e) { void 0 === e && (e = ""); var t = new _e; return t.text = e, t.isComment = !0, t };

            function ve(e) { return new _e(void 0, void 0, void 0, String(e)) }

            function ge(e) { var t = new _e(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory); return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t }
            var ye = Array.prototype,
                Me = Object.create(ye);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
                var t = ye[e];
                z(Me, e, function() {
                    for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
                    var i, r = t.apply(this, n),
                        s = this.__ob__;
                    switch (e) {
                        case "push":
                        case "unshift":
                            i = n;
                            break;
                        case "splice":
                            i = n.slice(2)
                    }
                    return i && s.observeArray(i), s.dep.notify(), r
                })
            });
            var be = Object.getOwnPropertyNames(Me),
                Le = !0;

            function ke(e) { Le = e }
            var we = function(e) {
                var t;
                this.value = e, this.dep = new ue, this.vmCount = 0, z(e, "__ob__", this), Array.isArray(e) ? ($ ? (t = Me, e.__proto__ = t) : function(e, t, n) {
                    for (var a = 0, i = n.length; a < i; a++) {
                        var r = n[a];
                        z(e, r, t[r])
                    }
                }(e, Me, be), this.observeArray(e)) : this.walk(e)
            };

            function Ye(e, t) { var n; if (o(e) && !(e instanceof _e)) return y(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : Le && !ae() && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n }

            function De(e, t, n, a, i) {
                var r = new ue,
                    s = Object.getOwnPropertyDescriptor(e, t);
                if (!s || !1 !== s.configurable) {
                    var o = s && s.get,
                        d = s && s.set;
                    o && !d || 2 !== arguments.length || (n = e[t]);
                    var l = !i && Ye(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() { var t = o ? o.call(e) : n; return ue.target && (r.depend(), l && (l.dep.depend(), Array.isArray(t) && function e(t) { for (var n = void 0, a = 0, i = t.length; a < i; a++)(n = t[a]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n) }(t))), t },
                        set: function(t) {
                            var a = o ? o.call(e) : n;
                            t === a || t != t && a != a || o && !d || (d ? d.call(e, t) : n = t, l = !i && Ye(t), r.notify())
                        }
                    })
                }
            }

            function Te(e, t, n) { if (Array.isArray(e) && u(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n; if (t in e && !(t in Object.prototype)) return e[t] = n, n; var a = e.__ob__; return e._isVue || a && a.vmCount ? n : a ? (De(a.value, t, n), a.dep.notify(), n) : (e[t] = n, n) }

            function xe(e, t) {
                if (Array.isArray(e) && u(t)) e.splice(t, 1);
                else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
                }
            }
            we.prototype.walk = function(e) { for (var t = Object.keys(e), n = 0; n < t.length; n++) De(e, t[n]) }, we.prototype.observeArray = function(e) { for (var t = 0, n = e.length; t < n; t++) Ye(e[t]) };
            var Se = W.optionMergeStrategies;

            function Ce(e, t) { if (!t) return e; for (var n, a, i, r = oe ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < r.length; s++) "__ob__" !== (n = r[s]) && (a = e[n], i = t[n], y(e, n) ? a !== i && l(a) && l(i) && Ce(a, i) : Te(e, n, i)); return e }

            function He(e, t, n) {
                return n ? function() {
                    var a = "function" == typeof t ? t.call(n, n) : t,
                        i = "function" == typeof e ? e.call(n, n) : e;
                    return a ? Ce(a, i) : i
                } : t ? e ? function() { return Ce("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e) } : t : e
            }

            function Ae(e, t) { var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e; return n ? function(e) { for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]); return t }(n) : n }

            function Oe(e, t, n, a) { var i = Object.create(e || null); return t ? x(i, t) : i }
            Se.data = function(e, t, n) { return n ? He(e, t, n) : t && "function" != typeof t ? e : He(e, t) }, I.forEach(function(e) { Se[e] = Ae }), F.forEach(function(e) { Se[e + "s"] = Oe }), Se.watch = function(e, t, n, a) {
                if (e === ee && (e = void 0), t === ee && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var i = {};
                for (var r in x(i, e), t) {
                    var s = i[r],
                        o = t[r];
                    s && !Array.isArray(s) && (s = [s]), i[r] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
                }
                return i
            }, Se.props = Se.methods = Se.inject = Se.computed = function(e, t, n, a) { if (!e) return t; var i = Object.create(null); return x(i, e), t && x(i, t), i }, Se.provide = He;
            var Pe = function(e, t) { return void 0 === t ? e : t };

            function je(e, t, n) {
                if ("function" == typeof t && (t = t.options), function(e, t) {
                        var n = e.props;
                        if (n) {
                            var a, i, r = {};
                            if (Array.isArray(n))
                                for (a = n.length; a--;) "string" == typeof(i = n[a]) && (r[L(i)] = { type: null });
                            else if (l(n))
                                for (var s in n) i = n[s], r[L(s)] = l(i) ? i : { type: i };
                            e.props = r
                        }
                    }(t), function(e, t) {
                        var n = e.inject;
                        if (n) {
                            var a = e.inject = {};
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) a[n[i]] = { from: n[i] };
                            else if (l(n))
                                for (var r in n) {
                                    var s = n[r];
                                    a[r] = l(s) ? x({ from: r }, s) : { from: s }
                                }
                        }
                    }(t), function(e) {
                        var t = e.directives;
                        if (t)
                            for (var n in t) { var a = t[n]; "function" == typeof a && (t[n] = { bind: a, update: a }) }
                    }(t), !t._base && (t.extends && (e = je(e, t.extends, n)), t.mixins))
                    for (var a = 0, i = t.mixins.length; a < i; a++) e = je(e, t.mixins[a], n);
                var r, s = {};
                for (r in e) o(r);
                for (r in t) y(e, r) || o(r);

                function o(a) {
                    var i = Se[a] || Pe;
                    s[a] = i(e[a], t[a], n, a)
                }
                return s
            }

            function Ee(e, t, n, a) { if ("string" == typeof n) { var i = e[t]; if (y(i, n)) return i[n]; var r = L(n); if (y(i, r)) return i[r]; var s = k(r); return y(i, s) ? i[s] : i[n] || i[r] || i[s] } }

            function Fe(e, t, n, a) {
                var i = t[e],
                    r = !y(n, e),
                    s = n[e],
                    o = Re(Boolean, i.type);
                if (o > -1)
                    if (r && !y(i, "default")) s = !1;
                    else if ("" === s || s === Y(e)) {
                    var d = Re(String, i.type);
                    (d < 0 || o < d) && (s = !0)
                }
                if (void 0 === s) {
                    s = function(e, t, n) { if (y(t, "default")) { var a = t.default; return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof a && "Function" !== Ie(t.type) ? a.call(e) : a } }(a, i, e);
                    var l = Le;
                    ke(!0), Ye(s), ke(l)
                }
                return s
            }

            function Ie(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

            function We(e, t) { return Ie(e) === Ie(t) }

            function Re(e, t) {
                if (!Array.isArray(t)) return We(t, e) ? 0 : -1;
                for (var n = 0, a = t.length; n < a; n++)
                    if (We(t[n], e)) return n;
                return -1
            }

            function ze(e, t, n) {
                me();
                try {
                    if (t)
                        for (var a = t; a = a.$parent;) {
                            var i = a.$options.errorCaptured;
                            if (i)
                                for (var r = 0; r < i.length; r++) try { if (!1 === i[r].call(a, e, t, n)) return } catch (e) { Be(e, a, "errorCaptured hook") }
                        }
                    Be(e, t, n)
                } finally { he() }
            }

            function Ne(e, t, n, a, i) {
                var r;
                try {
                    (r = n ? e.apply(t, n) : e.call(t)) && !r._isVue && c(r) && !r._handled && (r.catch(function(e) { return ze(e, a, i + " (Promise/async)") }), r._handled = !0)
                } catch (e) { ze(e, a, i) }
                return r
            }

            function Be(e, t, n) {
                if (W.errorHandler) try { return W.errorHandler.call(null, e, t, n) } catch (t) { t !== e && $e(t) }
                $e(e)
            }

            function $e(e, t, n) {
                if (!V && !U || "undefined" == typeof console) throw e;
                console.error(e)
            }
            var Ve, Ue = !1,
                Je = [],
                Ge = !1;

            function qe() {
                Ge = !1;
                var e = Je.slice(0);
                Je.length = 0;
                for (var t = 0; t < e.length; t++) e[t]()
            }
            if ("undefined" != typeof Promise && re(Promise)) {
                var Ke = Promise.resolve();
                Ve = function() { Ke.then(qe), Q && setTimeout(C) }, Ue = !0
            } else if (q || "undefined" == typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ve = void 0 !== n && re(n) ? function() { n(qe) } : function() { setTimeout(qe, 0) };
            else {
                var Ze = 1,
                    Qe = new MutationObserver(qe),
                    Xe = document.createTextNode(String(Ze));
                Qe.observe(Xe, { characterData: !0 }), Ve = function() { Ze = (Ze + 1) % 2, Xe.data = String(Ze) }, Ue = !0
            }

            function et(e, t) { var n; if (Je.push(function() { if (e) try { e.call(t) } catch (e) { ze(e, t, "nextTick") } else n && n(t) }), Ge || (Ge = !0, Ve()), !e && "undefined" != typeof Promise) return new Promise(function(e) { n = e }) }
            var tt = new se;

            function nt(e) {
                ! function e(t, n) {
                    var a, i, r = Array.isArray(t);
                    if (!(!r && !o(t) || Object.isFrozen(t) || t instanceof _e)) {
                        if (t.__ob__) {
                            var s = t.__ob__.dep.id;
                            if (n.has(s)) return;
                            n.add(s)
                        }
                        if (r)
                            for (a = t.length; a--;) e(t[a], n);
                        else
                            for (i = Object.keys(t), a = i.length; a--;) e(t[i[a]], n)
                    }
                }(e, tt), tt.clear()
            }
            var at = M(function(e) {
                var t = "&" === e.charAt(0),
                    n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                    a = "!" === (e = n ? e.slice(1) : e).charAt(0);
                return { name: e = a ? e.slice(1) : e, once: n, capture: a, passive: t }
            });

            function it(e, t) {
                function n() {
                    var e = arguments,
                        a = n.fns;
                    if (!Array.isArray(a)) return Ne(a, null, arguments, t, "v-on handler");
                    for (var i = a.slice(), r = 0; r < i.length; r++) Ne(i[r], null, e, t, "v-on handler")
                }
                return n.fns = e, n
            }

            function rt(e, t, n, i, s, o) { var d, l, u, c; for (d in e) l = e[d], u = t[d], c = at(d), a(l) || (a(u) ? (a(l.fns) && (l = e[d] = it(l, o)), r(c.once) && (l = e[d] = s(c.name, l, c.capture)), n(c.name, l, c.capture, c.passive, c.params)) : l !== u && (u.fns = l, e[d] = u)); for (d in t) a(e[d]) && i((c = at(d)).name, t[d], c.capture) }

            function st(e, t, n) {
                var s;
                e instanceof _e && (e = e.data.hook || (e.data.hook = {}));
                var o = e[t];

                function d() { n.apply(this, arguments), v(s.fns, d) }
                a(o) ? s = it([d]) : i(o.fns) && r(o.merged) ? (s = o).fns.push(d) : s = it([o, d]), s.merged = !0, e[t] = s
            }

            function ot(e, t, n, a, r) { if (i(t)) { if (y(t, n)) return e[n] = t[n], r || delete t[n], !0; if (y(t, a)) return e[n] = t[a], r || delete t[a], !0 } return !1 }

            function dt(e) { return s(e) ? [ve(e)] : Array.isArray(e) ? function e(t, n) { var o, d, l, u, c = []; for (o = 0; o < t.length; o++) a(d = t[o]) || "boolean" == typeof d || (l = c.length - 1, u = c[l], Array.isArray(d) ? d.length > 0 && (lt((d = e(d, (n || "") + "_" + o))[0]) && lt(u) && (c[l] = ve(u.text + d[0].text), d.shift()), c.push.apply(c, d)) : s(d) ? lt(u) ? c[l] = ve(u.text + d) : "" !== d && c.push(ve(d)) : lt(d) && lt(u) ? c[l] = ve(u.text + d.text) : (r(t._isVList) && i(d.tag) && a(d.key) && i(n) && (d.key = "__vlist" + n + "_" + o + "__"), c.push(d))); return c }(e) : void 0 }

            function lt(e) { return i(e) && i(e.text) && !1 === e.isComment }

            function ut(e, t) {
                if (e) {
                    for (var n = Object.create(null), a = oe ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < a.length; i++) {
                        var r = a[i];
                        if ("__ob__" !== r) {
                            for (var s = e[r].from, o = t; o;) {
                                if (o._provided && y(o._provided, s)) { n[r] = o._provided[s]; break }
                                o = o.$parent
                            }
                            if (!o && "default" in e[r]) {
                                var d = e[r].default;
                                n[r] = "function" == typeof d ? d.call(t) : d
                            }
                        }
                    }
                    return n
                }
            }

            function ct(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, a = 0, i = e.length; a < i; a++) {
                    var r = e[a],
                        s = r.data;
                    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, r.context !== t && r.fnContext !== t || !s || null == s.slot)(n.default || (n.default = [])).push(r);
                    else {
                        var o = s.slot,
                            d = n[o] || (n[o] = []);
                        "template" === r.tag ? d.push.apply(d, r.children || []) : d.push(r)
                    }
                }
                for (var l in n) n[l].every(mt) && delete n[l];
                return n
            }

            function mt(e) { return e.isComment && !e.asyncFactory || " " === e.text }

            function ht(t, n, a) {
                var i, r = Object.keys(n).length > 0,
                    s = t ? !!t.$stable : !r,
                    o = t && t.$key;
                if (t) { if (t._normalized) return t._normalized; if (s && a && a !== e && o === a.$key && !r && !a.$hasNormal) return a; for (var d in i = {}, t) t[d] && "$" !== d[0] && (i[d] = _t(n, d, t[d])) } else i = {};
                for (var l in n) l in i || (i[l] = ft(n, l));
                return t && Object.isExtensible(t) && (t._normalized = i), z(i, "$stable", s), z(i, "$key", o), z(i, "$hasNormal", r), i
            }

            function _t(e, t, n) { var a = function() { var e = arguments.length ? n.apply(null, arguments) : n({}); return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : dt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e }; return n.proxy && Object.defineProperty(e, t, { get: a, enumerable: !0, configurable: !0 }), a }

            function ft(e, t) { return function() { return e[t] } }

            function pt(e, t) {
                var n, a, r, s, d;
                if (Array.isArray(e) || "string" == typeof e)
                    for (n = new Array(e.length), a = 0, r = e.length; a < r; a++) n[a] = t(e[a], a);
                else if ("number" == typeof e)
                    for (n = new Array(e), a = 0; a < e; a++) n[a] = t(a + 1, a);
                else if (o(e))
                    if (oe && e[Symbol.iterator]) { n = []; for (var l = e[Symbol.iterator](), u = l.next(); !u.done;) n.push(t(u.value, n.length)), u = l.next() } else
                        for (s = Object.keys(e), n = new Array(s.length), a = 0, r = s.length; a < r; a++) d = s[a], n[a] = t(e[d], d, a);
                return i(n) || (n = []), n._isVList = !0, n
            }

            function vt(e, t, n, a) {
                var i, r = this.$scopedSlots[e];
                r ? (n = n || {}, a && (n = x(x({}, a), n)), i = r(n) || t) : i = this.$slots[e] || t;
                var s = n && n.slot;
                return s ? this.$createElement("template", { slot: s }, i) : i
            }

            function gt(e) { return Ee(this.$options, "filters", e) || A }

            function yt(e, t) { return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t }

            function Mt(e, t, n, a, i) { var r = W.keyCodes[t] || n; return i && a && !W.keyCodes[t] ? yt(i, a) : r ? yt(r, e) : a ? Y(a) !== t : void 0 }

            function bt(e, t, n, a, i) {
                if (n && o(n)) {
                    var r;
                    Array.isArray(n) && (n = S(n));
                    var s = function(s) {
                        if ("class" === s || "style" === s || p(s)) r = e;
                        else {
                            var o = e.attrs && e.attrs.type;
                            r = a || W.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        var d = L(s),
                            l = Y(s);
                        d in r || l in r || (r[s] = n[s], i && ((e.on || (e.on = {}))["update:" + s] = function(e) { n[s] = e }))
                    };
                    for (var d in n) s(d)
                }
                return e
            }

            function Lt(e, t) {
                var n = this._staticTrees || (this._staticTrees = []),
                    a = n[e];
                return a && !t ? a : (wt(a = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), a)
            }

            function kt(e, t, n) { return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e }

            function wt(e, t, n) {
                if (Array.isArray(e))
                    for (var a = 0; a < e.length; a++) e[a] && "string" != typeof e[a] && Yt(e[a], t + "_" + a, n);
                else Yt(e, t, n)
            }

            function Yt(e, t, n) { e.isStatic = !0, e.key = t, e.isOnce = n }

            function Dt(e, t) {
                if (t && l(t)) {
                    var n = e.on = e.on ? x({}, e.on) : {};
                    for (var a in t) {
                        var i = n[a],
                            r = t[a];
                        n[a] = i ? [].concat(i, r) : r
                    }
                }
                return e
            }

            function Tt(e, t, n, a) {
                t = t || { $stable: !n };
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    Array.isArray(r) ? Tt(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), t[r.key] = r.fn)
                }
                return a && (t.$key = a), t
            }

            function xt(e, t) { for (var n = 0; n < t.length; n += 2) { var a = t[n]; "string" == typeof a && a && (e[t[n]] = t[n + 1]) } return e }

            function St(e, t) { return "string" == typeof e ? t + e : e }

            function Ct(e) { e._o = kt, e._n = h, e._s = m, e._l = pt, e._t = vt, e._q = O, e._i = P, e._m = Lt, e._f = gt, e._k = Mt, e._b = bt, e._v = ve, e._e = pe, e._u = Tt, e._g = Dt, e._d = xt, e._p = St }

            function Ht(t, n, a, i, s) {
                var o, d = this,
                    l = s.options;
                y(i, "_uid") ? (o = Object.create(i))._original = i : (o = i, i = i._original);
                var u = r(l._compiled),
                    c = !u;
                this.data = t, this.props = n, this.children = a, this.parent = i, this.listeners = t.on || e, this.injections = ut(l.inject, i), this.slots = function() { return d.$slots || ht(t.scopedSlots, d.$slots = ct(a, i)), d.$slots }, Object.defineProperty(this, "scopedSlots", { enumerable: !0, get: function() { return ht(t.scopedSlots, this.slots()) } }), u && (this.$options = l, this.$slots = this.slots(), this.$scopedSlots = ht(t.scopedSlots, this.$slots)), l._scopeId ? this._c = function(e, t, n, a) { var r = Rt(o, e, t, n, a, c); return r && !Array.isArray(r) && (r.fnScopeId = l._scopeId, r.fnContext = i), r } : this._c = function(e, t, n, a) { return Rt(o, e, t, n, a, c) }
            }

            function At(e, t, n, a, i) { var r = ge(e); return r.fnContext = n, r.fnOptions = a, t.slot && ((r.data || (r.data = {})).slot = t.slot), r }

            function Ot(e, t) { for (var n in t) e[L(n)] = t[n] }
            Ct(Ht.prototype);
            var Pt = {
                    init: function(e, t) {
                        if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                            var n = e;
                            Pt.prepatch(n, n)
                        } else(e.componentInstance = function(e, t) {
                            var n = { _isComponent: !0, _parentVnode: e, parent: t },
                                a = e.data.inlineTemplate;
                            return i(a) && (n.render = a.render, n.staticRenderFns = a.staticRenderFns), new e.componentOptions.Ctor(n)
                        }(e, Kt)).$mount(t ? e.elm : void 0, t)
                    },
                    prepatch: function(t, n) {
                        var a = n.componentOptions;
                        ! function(t, n, a, i, r) {
                            var s = i.data.scopedSlots,
                                o = t.$scopedSlots,
                                d = !!(s && !s.$stable || o !== e && !o.$stable || s && t.$scopedSlots.$key !== s.$key),
                                l = !!(r || t.$options._renderChildren || d);
                            if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), t.$options._renderChildren = r, t.$attrs = i.data.attrs || e, t.$listeners = a || e, n && t.$options.props) {
                                ke(!1);
                                for (var u = t._props, c = t.$options._propKeys || [], m = 0; m < c.length; m++) {
                                    var h = c[m],
                                        _ = t.$options.props;
                                    u[h] = Fe(h, _, n, t)
                                }
                                ke(!0), t.$options.propsData = n
                            }
                            a = a || e;
                            var f = t.$options._parentListeners;
                            t.$options._parentListeners = a, qt(t, a, f), l && (t.$slots = ct(r, i.context), t.$forceUpdate())
                        }(n.componentInstance = t.componentInstance, a.propsData, a.listeners, n, a.children)
                    },
                    insert: function(e) {
                        var t, n = e.context,
                            a = e.componentInstance;
                        a._isMounted || (a._isMounted = !0, en(a, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = a)._inactive = !1, nn.push(t)) : Xt(a, !0))
                    },
                    destroy: function(e) {
                        var t = e.componentInstance;
                        t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                            if (!(n && (t._directInactive = !0, Qt(t)) || t._inactive)) {
                                t._inactive = !0;
                                for (var a = 0; a < t.$children.length; a++) e(t.$children[a]);
                                en(t, "deactivated")
                            }
                        }(t, !0) : t.$destroy())
                    }
                },
                jt = Object.keys(Pt);

            function Et(t, n, s, d, l) {
                if (!a(t)) {
                    var u = s.$options._base;
                    if (o(t) && (t = u.extend(t)), "function" == typeof t) {
                        var m;
                        if (a(t.cid) && void 0 === (t = function(e, t) {
                                if (r(e.error) && i(e.errorComp)) return e.errorComp;
                                if (i(e.resolved)) return e.resolved;
                                var n = Nt;
                                if (n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), r(e.loading) && i(e.loadingComp)) return e.loadingComp;
                                if (n && !i(e.owners)) {
                                    var s = e.owners = [n],
                                        d = !0,
                                        l = null,
                                        u = null;
                                    n.$on("hook:destroyed", function() { return v(s, n) });
                                    var m = function(e) {
                                            for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                                            e && (s.length = 0, null !== l && (clearTimeout(l), l = null), null !== u && (clearTimeout(u), u = null))
                                        },
                                        h = j(function(n) { e.resolved = Bt(n, t), d ? s.length = 0 : m(!0) }),
                                        _ = j(function(t) { i(e.errorComp) && (e.error = !0, m(!0)) }),
                                        f = e(h, _);
                                    return o(f) && (c(f) ? a(e.resolved) && f.then(h, _) : c(f.component) && (f.component.then(h, _), i(f.error) && (e.errorComp = Bt(f.error, t)), i(f.loading) && (e.loadingComp = Bt(f.loading, t), 0 === f.delay ? e.loading = !0 : l = setTimeout(function() { l = null, a(e.resolved) && a(e.error) && (e.loading = !0, m(!1)) }, f.delay || 200)), i(f.timeout) && (u = setTimeout(function() { u = null, a(e.resolved) && _(null) }, f.timeout)))), d = !1, e.loading ? e.loadingComp : e.resolved
                                }
                            }(m = t, u))) return function(e, t, n, a, i) { var r = pe(); return r.asyncFactory = e, r.asyncMeta = { data: t, context: n, children: a, tag: i }, r }(m, n, s, d, l);
                        n = n || {}, Ln(t), i(n.model) && function(e, t) {
                            var n = e.model && e.model.prop || "value",
                                a = e.model && e.model.event || "input";
                            (t.attrs || (t.attrs = {}))[n] = t.model.value;
                            var r = t.on || (t.on = {}),
                                s = r[a],
                                o = t.model.callback;
                            i(s) ? (Array.isArray(s) ? -1 === s.indexOf(o) : s !== o) && (r[a] = [o].concat(s)) : r[a] = o
                        }(t.options, n);
                        var h = function(e, t, n) {
                            var r = t.options.props;
                            if (!a(r)) {
                                var s = {},
                                    o = e.attrs,
                                    d = e.props;
                                if (i(o) || i(d))
                                    for (var l in r) {
                                        var u = Y(l);
                                        ot(s, d, l, u, !0) || ot(s, o, l, u, !1)
                                    }
                                return s
                            }
                        }(n, t);
                        if (r(t.options.functional)) return function(t, n, a, r, s) {
                            var o = t.options,
                                d = {},
                                l = o.props;
                            if (i(l))
                                for (var u in l) d[u] = Fe(u, l, n || e);
                            else i(a.attrs) && Ot(d, a.attrs), i(a.props) && Ot(d, a.props);
                            var c = new Ht(a, d, s, r, t),
                                m = o.render.call(null, c._c, c);
                            if (m instanceof _e) return At(m, a, c.parent, o);
                            if (Array.isArray(m)) { for (var h = dt(m) || [], _ = new Array(h.length), f = 0; f < h.length; f++) _[f] = At(h[f], a, c.parent, o); return _ }
                        }(t, h, n, s, d);
                        var _ = n.on;
                        if (n.on = n.nativeOn, r(t.options.abstract)) {
                            var f = n.slot;
                            n = {}, f && (n.slot = f)
                        }! function(e) {
                            for (var t = e.hook || (e.hook = {}), n = 0; n < jt.length; n++) {
                                var a = jt[n],
                                    i = t[a],
                                    r = Pt[a];
                                i === r || i && i._merged || (t[a] = i ? Ft(r, i) : r)
                            }
                        }(n);
                        var p = t.options.name || l;
                        return new _e("vue-component-" + t.cid + (p ? "-" + p : ""), n, void 0, void 0, void 0, s, { Ctor: t, propsData: h, listeners: _, tag: l, children: d }, m)
                    }
                }
            }

            function Ft(e, t) { var n = function(n, a) { e(n, a), t(n, a) }; return n._merged = !0, n }
            var It = 1,
                Wt = 2;

            function Rt(e, t, n, d, l, u) {
                return (Array.isArray(n) || s(n)) && (l = d, d = n, n = void 0), r(u) && (l = Wt),
                    function(e, t, n, s, d) {
                        return i(n) && i(n.__ob__) ? pe() : (i(n) && i(n.is) && (t = n.is), t ? (Array.isArray(s) && "function" == typeof s[0] && ((n = n || {}).scopedSlots = { default: s[0] }, s.length = 0), d === Wt ? s = dt(s) : d === It && (s = function(e) {
                            for (var t = 0; t < e.length; t++)
                                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                            return e
                        }(s)), "string" == typeof t ? (u = e.$vnode && e.$vnode.ns || W.getTagNamespace(t), l = W.isReservedTag(t) ? new _e(W.parsePlatformTagName(t), n, s, void 0, void 0, e) : n && n.pre || !i(c = Ee(e.$options, "components", t)) ? new _e(t, n, s, void 0, void 0, e) : Et(c, n, e, s, t)) : l = Et(t, n, e, s), Array.isArray(l) ? l : i(l) ? (i(u) && function e(t, n, s) {
                            if (t.ns = n, "foreignObject" === t.tag && (n = void 0, s = !0), i(t.children))
                                for (var o = 0, d = t.children.length; o < d; o++) {
                                    var l = t.children[o];
                                    i(l.tag) && (a(l.ns) || r(s) && "svg" !== l.tag) && e(l, n, s)
                                }
                        }(l, u), i(n) && function(e) { o(e.style) && nt(e.style), o(e.class) && nt(e.class) }(n), l) : pe()) : pe());
                        var l, u, c
                    }(e, t, n, d, l)
            }
            var zt, Nt = null;

            function Bt(e, t) { return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e }

            function $t(e) { return e.isComment && e.asyncFactory }

            function Vt(e) {
                if (Array.isArray(e))
                    for (var t = 0; t < e.length; t++) { var n = e[t]; if (i(n) && (i(n.componentOptions) || $t(n))) return n }
            }

            function Ut(e, t) { zt.$on(e, t) }

            function Jt(e, t) { zt.$off(e, t) }

            function Gt(e, t) { var n = zt; return function a() { null !== t.apply(null, arguments) && n.$off(e, a) } }

            function qt(e, t, n) { zt = e, rt(t, n || {}, Ut, Jt, Gt, e), zt = void 0 }
            var Kt = null;

            function Zt(e) {
                var t = Kt;
                return Kt = e,
                    function() { Kt = t }
            }

            function Qt(e) {
                for (; e && (e = e.$parent);)
                    if (e._inactive) return !0;
                return !1
            }

            function Xt(e, t) {
                if (t) { if (e._directInactive = !1, Qt(e)) return } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) Xt(e.$children[n]);
                    en(e, "activated")
                }
            }

            function en(e, t) {
                me();
                var n = e.$options[t],
                    a = t + " hook";
                if (n)
                    for (var i = 0, r = n.length; i < r; i++) Ne(n[i], e, null, e, a);
                e._hasHookEvent && e.$emit("hook:" + t), he()
            }
            var tn = [],
                nn = [],
                an = {},
                rn = !1,
                sn = !1,
                on = 0,
                dn = 0,
                ln = Date.now;
            if (V && !q) {
                var un = window.performance;
                un && "function" == typeof un.now && ln() > document.createEvent("Event").timeStamp && (ln = function() { return un.now() })
            }

            function cn() {
                var e, t;
                for (dn = ln(), sn = !0, tn.sort(function(e, t) { return e.id - t.id }), on = 0; on < tn.length; on++)(e = tn[on]).before && e.before(), t = e.id, an[t] = null, e.run();
                var n = nn.slice(),
                    a = tn.slice();
                on = tn.length = nn.length = 0, an = {}, rn = sn = !1,
                    function(e) { for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Xt(e[t], !0) }(n),
                    function(e) {
                        for (var t = e.length; t--;) {
                            var n = e[t],
                                a = n.vm;
                            a._watcher === n && a._isMounted && !a._isDestroyed && en(a, "updated")
                        }
                    }(a), ie && W.devtools && ie.emit("flush")
            }
            var mn = 0,
                hn = function(e, t, n, a, i) {
                    this.vm = e, i && (e._watcher = this), e._watchers.push(this), a ? (this.deep = !!a.deep, this.user = !!a.user, this.lazy = !!a.lazy, this.sync = !!a.sync, this.before = a.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++mn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new se, this.newDepIds = new se, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                        if (!B.test(e)) {
                            var t = e.split(".");
                            return function(e) {
                                for (var n = 0; n < t.length; n++) {
                                    if (!e) return;
                                    e = e[t[n]]
                                }
                                return e
                            }
                        }
                    }(t), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get()
                };
            hn.prototype.get = function() {
                var e;
                me(this);
                var t = this.vm;
                try { e = this.getter.call(t, t) } catch (e) {
                    if (!this.user) throw e;
                    ze(e, t, 'getter for watcher "' + this.expression + '"')
                } finally { this.deep && nt(e), he(), this.cleanupDeps() }
                return e
            }, hn.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
            }, hn.prototype.cleanupDeps = function() {
                for (var e = this.deps.length; e--;) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, hn.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                    var t = e.id;
                    if (null == an[t]) {
                        if (an[t] = !0, sn) {
                            for (var n = tn.length - 1; n > on && tn[n].id > e.id;) n--;
                            tn.splice(n + 1, 0, e)
                        } else tn.push(e);
                        rn || (rn = !0, et(cn))
                    }
                }(this)
            }, hn.prototype.run = function() { if (this.active) { var e = this.get(); if (e !== this.value || o(e) || this.deep) { var t = this.value; if (this.value = e, this.user) try { this.cb.call(this.vm, e, t) } catch (e) { ze(e, this.vm, 'callback for watcher "' + this.expression + '"') } else this.cb.call(this.vm, e, t) } } }, hn.prototype.evaluate = function() { this.value = this.get(), this.dirty = !1 }, hn.prototype.depend = function() { for (var e = this.deps.length; e--;) this.deps[e].depend() }, hn.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                    this.active = !1
                }
            };
            var _n = { enumerable: !0, configurable: !0, get: C, set: C };

            function fn(e, t, n) { _n.get = function() { return this[t][n] }, _n.set = function(e) { this[t][n] = e }, Object.defineProperty(e, n, _n) }
            var pn = { lazy: !0 };

            function vn(e, t, n) { var a = !ae(); "function" == typeof n ? (_n.get = a ? gn(t) : yn(n), _n.set = C) : (_n.get = n.get ? a && !1 !== n.cache ? gn(t) : yn(n.get) : C, _n.set = n.set || C), Object.defineProperty(e, t, _n) }

            function gn(e) { return function() { var t = this._computedWatchers && this._computedWatchers[e]; if (t) return t.dirty && t.evaluate(), ue.target && t.depend(), t.value } }

            function yn(e) { return function() { return e.call(this, this) } }

            function Mn(e, t, n, a) { return l(n) && (a = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, a) }
            var bn = 0;

            function Ln(e) {
                var t = e.options;
                if (e.super) {
                    var n = Ln(e.super);
                    if (n !== e.superOptions) {
                        e.superOptions = n;
                        var a = function(e) {
                            var t, n = e.options,
                                a = e.sealedOptions;
                            for (var i in n) n[i] !== a[i] && (t || (t = {}), t[i] = n[i]);
                            return t
                        }(e);
                        a && x(e.extendOptions, a), (t = e.options = je(n, e.extendOptions)).name && (t.components[t.name] = e)
                    }
                }
                return t
            }

            function kn(e) { this._init(e) }

            function wn(e) { return e && (e.Ctor.options.name || e.tag) }

            function Yn(e, t) { return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === d.call(n) && e.test(t)); var n }

            function Dn(e, t) {
                var n = e.cache,
                    a = e.keys,
                    i = e._vnode;
                for (var r in n) {
                    var s = n[r];
                    if (s) {
                        var o = wn(s.componentOptions);
                        o && !t(o) && Tn(n, r, a, i)
                    }
                }
            }

            function Tn(e, t, n, a) { var i = e[t];!i || a && i.tag === a.tag || i.componentInstance.$destroy(), e[t] = null, v(n, t) }! function(t) {
                t.prototype._init = function(t) {
                    var n = this;
                    n._uid = bn++, n._isVue = !0, t && t._isComponent ? function(e, t) {
                            var n = e.$options = Object.create(e.constructor.options),
                                a = t._parentVnode;
                            n.parent = t.parent, n._parentVnode = a;
                            var i = a.componentOptions;
                            n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                        }(n, t) : n.$options = je(Ln(n.constructor), t || {}, n), n._renderProxy = n, n._self = n,
                        function(e) {
                            var t = e.$options,
                                n = t.parent;
                            if (n && !t.abstract) {
                                for (; n.$options.abstract && n.$parent;) n = n.$parent;
                                n.$children.push(e)
                            }
                            e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                        }(n),
                        function(e) {
                            e._events = Object.create(null), e._hasHookEvent = !1;
                            var t = e.$options._parentListeners;
                            t && qt(e, t)
                        }(n),
                        function(t) {
                            t._vnode = null, t._staticTrees = null;
                            var n = t.$options,
                                a = t.$vnode = n._parentVnode,
                                i = a && a.context;
                            t.$slots = ct(n._renderChildren, i), t.$scopedSlots = e, t._c = function(e, n, a, i) { return Rt(t, e, n, a, i, !1) }, t.$createElement = function(e, n, a, i) { return Rt(t, e, n, a, i, !0) };
                            var r = a && a.data;
                            De(t, "$attrs", r && r.attrs || e, null, !0), De(t, "$listeners", n._parentListeners || e, null, !0)
                        }(n), en(n, "beforeCreate"),
                        function(e) {
                            var t = ut(e.$options.inject, e);
                            t && (ke(!1), Object.keys(t).forEach(function(n) { De(e, n, t[n]) }), ke(!0))
                        }(n),
                        function(e) {
                            e._watchers = [];
                            var t = e.$options;
                            t.props && function(e, t) {
                                var n = e.$options.propsData || {},
                                    a = e._props = {},
                                    i = e.$options._propKeys = [];
                                e.$parent && ke(!1);
                                var r = function(r) {
                                    i.push(r);
                                    var s = Fe(r, t, n, e);
                                    De(a, r, s), r in e || fn(e, "_props", r)
                                };
                                for (var s in t) r(s);
                                ke(!0)
                            }(e, t.props), t.methods && function(e, t) { for (var n in e.$options.props, t) e[n] = "function" != typeof t[n] ? C : D(t[n], e) }(e, t.methods), t.data ? function(e) {
                                var t = e.$options.data;
                                l(t = e._data = "function" == typeof t ? function(e, t) { me(); try { return e.call(t, t) } catch (e) { return ze(e, t, "data()"), {} } finally { he() } }(t, e) : t || {}) || (t = {});
                                for (var n, a = Object.keys(t), i = e.$options.props, r = (e.$options.methods, a.length); r--;) {
                                    var s = a[r];
                                    i && y(i, s) || (n = void 0, 36 !== (n = (s + "").charCodeAt(0)) && 95 !== n && fn(e, "_data", s))
                                }
                                Ye(t, !0)
                            }(e) : Ye(e._data = {}, !0), t.computed && function(e, t) {
                                var n = e._computedWatchers = Object.create(null),
                                    a = ae();
                                for (var i in t) {
                                    var r = t[i],
                                        s = "function" == typeof r ? r : r.get;
                                    a || (n[i] = new hn(e, s || C, C, pn)), i in e || vn(e, i, r)
                                }
                            }(e, t.computed), t.watch && t.watch !== ee && function(e, t) {
                                for (var n in t) {
                                    var a = t[n];
                                    if (Array.isArray(a))
                                        for (var i = 0; i < a.length; i++) Mn(e, n, a[i]);
                                    else Mn(e, n, a)
                                }
                            }(e, t.watch)
                        }(n),
                        function(e) {
                            var t = e.$options.provide;
                            t && (e._provided = "function" == typeof t ? t.call(e) : t)
                        }(n), en(n, "created"), n.$options.el && n.$mount(n.$options.el)
                }
            }(kn),
            function(e) {
                Object.defineProperty(e.prototype, "$data", { get: function() { return this._data } }), Object.defineProperty(e.prototype, "$props", { get: function() { return this._props } }), e.prototype.$set = Te, e.prototype.$delete = xe, e.prototype.$watch = function(e, t, n) {
                    if (l(t)) return Mn(this, e, t, n);
                    (n = n || {}).user = !0;
                    var a = new hn(this, e, t, n);
                    if (n.immediate) try { t.call(this, a.value) } catch (e) { ze(e, this, 'callback for immediate watcher "' + a.expression + '"') }
                    return function() { a.teardown() }
                }
            }(kn),
            function(e) {
                var t = /^hook:/;
                e.prototype.$on = function(e, n) {
                    var a = this;
                    if (Array.isArray(e))
                        for (var i = 0, r = e.length; i < r; i++) a.$on(e[i], n);
                    else(a._events[e] || (a._events[e] = [])).push(n), t.test(e) && (a._hasHookEvent = !0);
                    return a
                }, e.prototype.$once = function(e, t) {
                    var n = this;

                    function a() { n.$off(e, a), t.apply(n, arguments) }
                    return a.fn = t, n.$on(e, a), n
                }, e.prototype.$off = function(e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) { for (var a = 0, i = e.length; a < i; a++) n.$off(e[a], t); return n }
                    var r, s = n._events[e];
                    if (!s) return n;
                    if (!t) return n._events[e] = null, n;
                    for (var o = s.length; o--;)
                        if ((r = s[o]) === t || r.fn === t) { s.splice(o, 1); break }
                    return n
                }, e.prototype.$emit = function(e) { var t = this._events[e]; if (t) { t = t.length > 1 ? T(t) : t; for (var n = T(arguments, 1), a = 'event handler for "' + e + '"', i = 0, r = t.length; i < r; i++) Ne(t[i], this, n, this, a) } return this }
            }(kn),
            function(e) {
                e.prototype._update = function(e, t) {
                    var n = this,
                        a = n.$el,
                        i = n._vnode,
                        r = Zt(n);
                    n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), r(), a && (a.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, e.prototype.$forceUpdate = function() { this._watcher && this._watcher.update() }, e.prototype.$destroy = function() {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        en(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();
                        for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), en(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                    }
                }
            }(kn),
            function(e) {
                Ct(e.prototype), e.prototype.$nextTick = function(e) { return et(e, this) }, e.prototype._render = function() {
                    var e, t = this,
                        n = t.$options,
                        a = n.render,
                        i = n._parentVnode;
                    i && (t.$scopedSlots = ht(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
                    try { Nt = t, e = a.call(t._renderProxy, t.$createElement) } catch (n) { ze(n, t, "render"), e = t._vnode } finally { Nt = null }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof _e || (e = pe()), e.parent = i, e
                }
            }(kn);
            var xn = [String, RegExp, Array],
                Sn = {
                    KeepAlive: {
                        name: "keep-alive",
                        abstract: !0,
                        props: { include: xn, exclude: xn, max: [String, Number] },
                        created: function() { this.cache = Object.create(null), this.keys = [] },
                        destroyed: function() { for (var e in this.cache) Tn(this.cache, e, this.keys) },
                        mounted: function() {
                            var e = this;
                            this.$watch("include", function(t) { Dn(e, function(e) { return Yn(t, e) }) }), this.$watch("exclude", function(t) { Dn(e, function(e) { return !Yn(t, e) }) })
                        },
                        render: function() {
                            var e = this.$slots.default,
                                t = Vt(e),
                                n = t && t.componentOptions;
                            if (n) {
                                var a = wn(n),
                                    i = this.include,
                                    r = this.exclude;
                                if (i && (!a || !Yn(i, a)) || r && a && Yn(r, a)) return t;
                                var s = this.cache,
                                    o = this.keys,
                                    d = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                                s[d] ? (t.componentInstance = s[d].componentInstance, v(o, d), o.push(d)) : (s[d] = t, o.push(d), this.max && o.length > parseInt(this.max) && Tn(s, o[0], o, this._vnode)), t.data.keepAlive = !0
                            }
                            return t || e && e[0]
                        }
                    }
                };
            ! function(e) {
                var t = { get: function() { return W } };
                Object.defineProperty(e, "config", t), e.util = { warn: de, extend: x, mergeOptions: je, defineReactive: De }, e.set = Te, e.delete = xe, e.nextTick = et, e.observable = function(e) { return Ye(e), e }, e.options = Object.create(null), F.forEach(function(t) { e.options[t + "s"] = Object.create(null) }), e.options._base = e, x(e.options.components, Sn),
                    function(e) { e.use = function(e) { var t = this._installedPlugins || (this._installedPlugins = []); if (t.indexOf(e) > -1) return this; var n = T(arguments, 1); return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this } }(e),
                    function(e) { e.mixin = function(e) { return this.options = je(this.options, e), this } }(e),
                    function(e) {
                        e.cid = 0;
                        var t = 1;
                        e.extend = function(e) {
                            e = e || {};
                            var n = this,
                                a = n.cid,
                                i = e._Ctor || (e._Ctor = {});
                            if (i[a]) return i[a];
                            var r = e.name || n.options.name,
                                s = function(e) { this._init(e) };
                            return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = je(n.options, e), s.super = n, s.options.props && function(e) { var t = e.options.props; for (var n in t) fn(e.prototype, "_props", n) }(s), s.options.computed && function(e) { var t = e.options.computed; for (var n in t) vn(e.prototype, n, t[n]) }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, F.forEach(function(e) { s[e] = n[e] }), r && (s.options.components[r] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = x({}, s.options), i[a] = s, s
                        }
                    }(e),
                    function(e) { F.forEach(function(t) { e[t] = function(e, n) { return n ? ("component" === t && l(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e] } }) }(e)
            }(kn), Object.defineProperty(kn.prototype, "$isServer", { get: ae }), Object.defineProperty(kn.prototype, "$ssrContext", { get: function() { return this.$vnode && this.$vnode.ssrContext } }), Object.defineProperty(kn, "FunctionalRenderContext", { value: Ht }), kn.version = "2.6.10";
            var Cn = _("style,class"),
                Hn = _("input,textarea,option,select,progress"),
                An = function(e, t, n) { return "value" === n && Hn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e },
                On = _("contenteditable,draggable,spellcheck"),
                Pn = _("events,caret,typing,plaintext-only"),
                jn = function(e, t) { return Rn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true" },
                En = _("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Fn = "http://www.w3.org/1999/xlink",
                In = function(e) { return ":" === e.charAt(5) && "xlink" === e.slice(0, 5) },
                Wn = function(e) { return In(e) ? e.slice(6, e.length) : "" },
                Rn = function(e) { return null == e || !1 === e };

            function zn(e, t) { return { staticClass: Nn(e.staticClass, t.staticClass), class: i(e.class) ? [e.class, t.class] : t.class } }

            function Nn(e, t) { return e ? t ? e + " " + t : e : t || "" }

            function Bn(e) { return Array.isArray(e) ? function(e) { for (var t, n = "", a = 0, r = e.length; a < r; a++) i(t = Bn(e[a])) && "" !== t && (n && (n += " "), n += t); return n }(e) : o(e) ? function(e) { var t = ""; for (var n in e) e[n] && (t && (t += " "), t += n); return t }(e) : "string" == typeof e ? e : "" }
            var $n = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
                Vn = _("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                Un = _("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Jn = function(e) { return Vn(e) || Un(e) };

            function Gn(e) { return Un(e) ? "svg" : "math" === e ? "math" : void 0 }
            var qn = Object.create(null),
                Kn = _("text,number,password,search,email,tel,url");

            function Zn(e) { if ("string" == typeof e) { var t = document.querySelector(e); return t || document.createElement("div") } return e }
            var Qn = Object.freeze({ createElement: function(e, t) { var n = document.createElement(e); return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n) }, createElementNS: function(e, t) { return document.createElementNS($n[e], t) }, createTextNode: function(e) { return document.createTextNode(e) }, createComment: function(e) { return document.createComment(e) }, insertBefore: function(e, t, n) { e.insertBefore(t, n) }, removeChild: function(e, t) { e.removeChild(t) }, appendChild: function(e, t) { e.appendChild(t) }, parentNode: function(e) { return e.parentNode }, nextSibling: function(e) { return e.nextSibling }, tagName: function(e) { return e.tagName }, setTextContent: function(e, t) { e.textContent = t }, setStyleScope: function(e, t) { e.setAttribute(t, "") } }),
                Xn = { create: function(e, t) { ea(t) }, update: function(e, t) { e.data.ref !== t.data.ref && (ea(e, !0), ea(t)) }, destroy: function(e) { ea(e, !0) } };

            function ea(e, t) {
                var n = e.data.ref;
                if (i(n)) {
                    var a = e.context,
                        r = e.componentInstance || e.elm,
                        s = a.$refs;
                    t ? Array.isArray(s[n]) ? v(s[n], r) : s[n] === r && (s[n] = void 0) : e.data.refInFor ? Array.isArray(s[n]) ? s[n].indexOf(r) < 0 && s[n].push(r) : s[n] = [r] : s[n] = r
                }
            }
            var ta = new _e("", {}, []),
                na = ["create", "activate", "update", "remove", "destroy"];

            function aa(e, t) {
                return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && function(e, t) {
                    if ("input" !== e.tag) return !0;
                    var n, a = i(n = e.data) && i(n = n.attrs) && n.type,
                        r = i(n = t.data) && i(n = n.attrs) && n.type;
                    return a === r || Kn(a) && Kn(r)
                }(e, t) || r(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && a(t.asyncFactory.error))
            }

            function ia(e, t, n) { var a, r, s = {}; for (a = t; a <= n; ++a) i(r = e[a].key) && (s[r] = a); return s }
            var ra = { create: sa, update: sa, destroy: function(e) { sa(e, ta) } };

            function sa(e, t) {
                (e.data.directives || t.data.directives) && function(e, t) {
                    var n, a, i, r = e === ta,
                        s = t === ta,
                        o = da(e.data.directives, e.context),
                        d = da(t.data.directives, t.context),
                        l = [],
                        u = [];
                    for (n in d) a = o[n], i = d[n], a ? (i.oldValue = a.value, i.oldArg = a.arg, ua(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (ua(i, "bind", t, e), i.def && i.def.inserted && l.push(i));
                    if (l.length) {
                        var c = function() { for (var n = 0; n < l.length; n++) ua(l[n], "inserted", t, e) };
                        r ? st(t, "insert", c) : c()
                    }
                    if (u.length && st(t, "postpatch", function() { for (var n = 0; n < u.length; n++) ua(u[n], "componentUpdated", t, e) }), !r)
                        for (n in o) d[n] || ua(o[n], "unbind", e, e, s)
                }(e, t)
            }
            var oa = Object.create(null);

            function da(e, t) { var n, a, i = Object.create(null); if (!e) return i; for (n = 0; n < e.length; n++)(a = e[n]).modifiers || (a.modifiers = oa), i[la(a)] = a, a.def = Ee(t.$options, "directives", a.name); return i }

            function la(e) { return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".") }

            function ua(e, t, n, a, i) { var r = e.def && e.def[t]; if (r) try { r(n.elm, e, n, a, i) } catch (a) { ze(a, n.context, "directive " + e.name + " " + t + " hook") } }
            var ca = [Xn, ra];

            function ma(e, t) {
                var n = t.componentOptions;
                if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || a(e.data.attrs) && a(t.data.attrs))) {
                    var r, s, o = t.elm,
                        d = e.data.attrs || {},
                        l = t.data.attrs || {};
                    for (r in i(l.__ob__) && (l = t.data.attrs = x({}, l)), l) s = l[r], d[r] !== s && ha(o, r, s);
                    for (r in (q || Z) && l.value !== d.value && ha(o, "value", l.value), d) a(l[r]) && (In(r) ? o.removeAttributeNS(Fn, Wn(r)) : On(r) || o.removeAttribute(r))
                }
            }

            function ha(e, t, n) { e.tagName.indexOf("-") > -1 ? _a(e, t, n) : En(t) ? Rn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : On(t) ? e.setAttribute(t, jn(t, n)) : In(t) ? Rn(n) ? e.removeAttributeNS(Fn, Wn(t)) : e.setAttributeNS(Fn, t, n) : _a(e, t, n) }

            function _a(e, t, n) {
                if (Rn(n)) e.removeAttribute(t);
                else {
                    if (q && !K && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                        var a = function(t) { t.stopImmediatePropagation(), e.removeEventListener("input", a) };
                        e.addEventListener("input", a), e.__ieph = !0
                    }
                    e.setAttribute(t, n)
                }
            }
            var fa = { create: ma, update: ma };

            function pa(e, t) {
                var n = t.elm,
                    r = t.data,
                    s = e.data;
                if (!(a(r.staticClass) && a(r.class) && (a(s) || a(s.staticClass) && a(s.class)))) {
                    var o = function(e) { for (var t = e.data, n = e, a = e; i(a.componentInstance);)(a = a.componentInstance._vnode) && a.data && (t = zn(a.data, t)); for (; i(n = n.parent);) n && n.data && (t = zn(t, n.data)); return function(e, t) { return i(e) || i(t) ? Nn(e, Bn(t)) : "" }(t.staticClass, t.class) }(t),
                        d = n._transitionClasses;
                    i(d) && (o = Nn(o, Bn(d))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
                }
            }
            var va, ga, ya, Ma, ba, La, ka = { create: pa, update: pa },
                wa = /[\w).+\-_$\]]/;

            function Ya(e) {
                var t, n, a, i, r, s = !1,
                    o = !1,
                    d = !1,
                    l = !1,
                    u = 0,
                    c = 0,
                    m = 0,
                    h = 0;
                for (a = 0; a < e.length; a++)
                    if (n = t, t = e.charCodeAt(a), s) 39 === t && 92 !== n && (s = !1);
                    else if (o) 34 === t && 92 !== n && (o = !1);
                else if (d) 96 === t && 92 !== n && (d = !1);
                else if (l) 47 === t && 92 !== n && (l = !1);
                else if (124 !== t || 124 === e.charCodeAt(a + 1) || 124 === e.charCodeAt(a - 1) || u || c || m) {
                    switch (t) {
                        case 34:
                            o = !0;
                            break;
                        case 39:
                            s = !0;
                            break;
                        case 96:
                            d = !0;
                            break;
                        case 40:
                            m++;
                            break;
                        case 41:
                            m--;
                            break;
                        case 91:
                            c++;
                            break;
                        case 93:
                            c--;
                            break;
                        case 123:
                            u++;
                            break;
                        case 125:
                            u--
                    }
                    if (47 === t) {
                        for (var _ = a - 1, f = void 0; _ >= 0 && " " === (f = e.charAt(_)); _--);
                        f && wa.test(f) || (l = !0)
                    }
                } else void 0 === i ? (h = a + 1, i = e.slice(0, a).trim()) : p();

                function p() {
                    (r || (r = [])).push(e.slice(h, a).trim()), h = a + 1
                }
                if (void 0 === i ? i = e.slice(0, a).trim() : 0 !== h && p(), r)
                    for (a = 0; a < r.length; a++) i = Da(i, r[a]);
                return i
            }

            function Da(e, t) {
                var n = t.indexOf("(");
                if (n < 0) return '_f("' + t + '")(' + e + ")";
                var a = t.slice(0, n),
                    i = t.slice(n + 1);
                return '_f("' + a + '")(' + e + (")" !== i ? "," + i : i)
            }

            function Ta(e, t) { console.error("[Vue compiler]: " + e) }

            function xa(e, t) { return e ? e.map(function(e) { return e[t] }).filter(function(e) { return e }) : [] }

            function Sa(e, t, n, a, i) {
                (e.props || (e.props = [])).push(Ia({ name: t, value: n, dynamic: i }, a)), e.plain = !1
            }

            function Ca(e, t, n, a, i) {
                (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Ia({ name: t, value: n, dynamic: i }, a)), e.plain = !1
            }

            function Ha(e, t, n, a) { e.attrsMap[t] = n, e.attrsList.push(Ia({ name: t, value: n }, a)) }

            function Aa(e, t, n, a, i, r, s, o) {
                (e.directives || (e.directives = [])).push(Ia({ name: t, rawName: n, value: a, arg: i, isDynamicArg: r, modifiers: s }, o)), e.plain = !1
            }

            function Oa(e, t, n) { return n ? "_p(" + t + ',"' + e + '")' : e + t }

            function Pa(t, n, a, i, r, s, o, d) {
                var l;
                (i = i || e).right ? d ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (d ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Oa("!", n, d)), i.once && (delete i.once, n = Oa("~", n, d)), i.passive && (delete i.passive, n = Oa("&", n, d)), i.native ? (delete i.native, l = t.nativeEvents || (t.nativeEvents = {})) : l = t.events || (t.events = {});
                var u = Ia({ value: a.trim(), dynamic: d }, o);
                i !== e && (u.modifiers = i);
                var c = l[n];
                Array.isArray(c) ? r ? c.unshift(u) : c.push(u) : l[n] = c ? r ? [u, c] : [c, u] : u, t.plain = !1
            }

            function ja(e, t, n) { var a = Ea(e, ":" + t) || Ea(e, "v-bind:" + t); if (null != a) return Ya(a); if (!1 !== n) { var i = Ea(e, t); if (null != i) return JSON.stringify(i) } }

            function Ea(e, t, n) {
                var a;
                if (null != (a = e.attrsMap[t]))
                    for (var i = e.attrsList, r = 0, s = i.length; r < s; r++)
                        if (i[r].name === t) { i.splice(r, 1); break }
                return n && delete e.attrsMap[t], a
            }

            function Fa(e, t) { for (var n = e.attrsList, a = 0, i = n.length; a < i; a++) { var r = n[a]; if (t.test(r.name)) return n.splice(a, 1), r } }

            function Ia(e, t) { return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e }

            function Wa(e, t, n) {
                var a = n || {},
                    i = a.number,
                    r = "$$v";
                a.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (r = "_n(" + r + ")");
                var s = Ra(t, r);
                e.model = { value: "(" + t + ")", expression: JSON.stringify(t), callback: "function ($$v) {" + s + "}" }
            }

            function Ra(e, t) { var n = function(e) { if (e = e.trim(), va = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < va - 1) return (Ma = e.lastIndexOf(".")) > -1 ? { exp: e.slice(0, Ma), key: '"' + e.slice(Ma + 1) + '"' } : { exp: e, key: null }; for (ga = e, Ma = ba = La = 0; !Na();) Ba(ya = za()) ? Va(ya) : 91 === ya && $a(ya); return { exp: e.slice(0, ba), key: e.slice(ba + 1, La) } }(e); return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")" }

            function za() { return ga.charCodeAt(++Ma) }

            function Na() { return Ma >= va }

            function Ba(e) { return 34 === e || 39 === e }

            function $a(e) {
                var t = 1;
                for (ba = Ma; !Na();)
                    if (Ba(e = za())) Va(e);
                    else if (91 === e && t++, 93 === e && t--, 0 === t) { La = Ma; break }
            }

            function Va(e) { for (var t = e; !Na() && (e = za()) !== t;); }
            var Ua, Ja = "__r",
                Ga = "__c";

            function qa(e, t, n) { var a = Ua; return function i() { null !== t.apply(null, arguments) && Qa(e, i, n, a) } }
            var Ka = Ue && !(X && Number(X[1]) <= 53);

            function Za(e, t, n, a) {
                if (Ka) {
                    var i = dn,
                        r = t;
                    t = r._wrapper = function(e) { if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return r.apply(this, arguments) }
                }
                Ua.addEventListener(e, t, te ? { capture: n, passive: a } : n)
            }

            function Qa(e, t, n, a) {
                (a || Ua).removeEventListener(e, t._wrapper || t, n)
            }

            function Xa(e, t) {
                if (!a(e.data.on) || !a(t.data.on)) {
                    var n = t.data.on || {},
                        r = e.data.on || {};
                    Ua = t.elm,
                        function(e) {
                            if (i(e[Ja])) {
                                var t = q ? "change" : "input";
                                e[t] = [].concat(e[Ja], e[t] || []), delete e[Ja]
                            }
                            i(e[Ga]) && (e.change = [].concat(e[Ga], e.change || []), delete e[Ga])
                        }(n), rt(n, r, Za, Qa, qa, t.context), Ua = void 0
                }
            }
            var ei, ti = { create: Xa, update: Xa };

            function ni(e, t) {
                if (!a(e.data.domProps) || !a(t.data.domProps)) {
                    var n, r, s = t.elm,
                        o = e.data.domProps || {},
                        d = t.data.domProps || {};
                    for (n in i(d.__ob__) && (d = t.data.domProps = x({}, d)), o) n in d || (s[n] = "");
                    for (n in d) {
                        if (r = d[n], "textContent" === n || "innerHTML" === n) {
                            if (t.children && (t.children.length = 0), r === o[n]) continue;
                            1 === s.childNodes.length && s.removeChild(s.childNodes[0])
                        }
                        if ("value" === n && "PROGRESS" !== s.tagName) {
                            s._value = r;
                            var l = a(r) ? "" : String(r);
                            ai(s, l) && (s.value = l)
                        } else if ("innerHTML" === n && Un(s.tagName) && a(s.innerHTML)) {
                            (ei = ei || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                            for (var u = ei.firstChild; s.firstChild;) s.removeChild(s.firstChild);
                            for (; u.firstChild;) s.appendChild(u.firstChild)
                        } else if (r !== o[n]) try { s[n] = r } catch (e) {}
                    }
                }
            }

            function ai(e, t) {
                return !e.composing && ("OPTION" === e.tagName || function(e, t) { var n = !0; try { n = document.activeElement !== e } catch (e) {} return n && e.value !== t }(e, t) || function(e, t) {
                    var n = e.value,
                        a = e._vModifiers;
                    if (i(a)) { if (a.number) return h(n) !== h(t); if (a.trim) return n.trim() !== t.trim() }
                    return n !== t
                }(e, t))
            }
            var ii = { create: ni, update: ni },
                ri = M(function(e) {
                    var t = {},
                        n = /:(.+)/;
                    return e.split(/;(?![^(]*\))/g).forEach(function(e) {
                        if (e) {
                            var a = e.split(n);
                            a.length > 1 && (t[a[0].trim()] = a[1].trim())
                        }
                    }), t
                });

            function si(e) { var t = oi(e.style); return e.staticStyle ? x(e.staticStyle, t) : t }

            function oi(e) { return Array.isArray(e) ? S(e) : "string" == typeof e ? ri(e) : e }
            var di, li = /^--/,
                ui = /\s*!important$/,
                ci = function(e, t, n) {
                    if (li.test(t)) e.style.setProperty(t, n);
                    else if (ui.test(n)) e.style.setProperty(Y(t), n.replace(ui, ""), "important");
                    else {
                        var a = hi(t);
                        if (Array.isArray(n))
                            for (var i = 0, r = n.length; i < r; i++) e.style[a] = n[i];
                        else e.style[a] = n
                    }
                },
                mi = ["Webkit", "Moz", "ms"],
                hi = M(function(e) { if (di = di || document.createElement("div").style, "filter" !== (e = L(e)) && e in di) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < mi.length; n++) { var a = mi[n] + t; if (a in di) return a } });

            function _i(e, t) {
                var n = t.data,
                    r = e.data;
                if (!(a(n.staticStyle) && a(n.style) && a(r.staticStyle) && a(r.style))) {
                    var s, o, d = t.elm,
                        l = r.staticStyle,
                        u = r.normalizedStyle || r.style || {},
                        c = l || u,
                        m = oi(t.data.style) || {};
                    t.data.normalizedStyle = i(m.__ob__) ? x({}, m) : m;
                    var h = function(e, t) {
                        for (var n, a = {}, i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = si(i.data)) && x(a, n);
                        (n = si(e.data)) && x(a, n);
                        for (var r = e; r = r.parent;) r.data && (n = si(r.data)) && x(a, n);
                        return a
                    }(t);
                    for (o in c) a(h[o]) && ci(d, o, "");
                    for (o in h)(s = h[o]) !== c[o] && ci(d, o, null == s ? "" : s)
                }
            }
            var fi = { create: _i, update: _i },
                pi = /\s+/;

            function vi(e, t) {
                if (t && (t = t.trim()))
                    if (e.classList) t.indexOf(" ") > -1 ? t.split(pi).forEach(function(t) { return e.classList.add(t) }) : e.classList.add(t);
                    else {
                        var n = " " + (e.getAttribute("class") || "") + " ";
                        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                    }
            }

            function gi(e, t) {
                if (t && (t = t.trim()))
                    if (e.classList) t.indexOf(" ") > -1 ? t.split(pi).forEach(function(t) { return e.classList.remove(t) }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                    else {
                        for (var n = " " + (e.getAttribute("class") || "") + " ", a = " " + t + " "; n.indexOf(a) >= 0;) n = n.replace(a, " ");
                        (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                    }
            }

            function yi(e) { if (e) { if ("object" == typeof e) { var t = {}; return !1 !== e.css && x(t, Mi(e.name || "v")), x(t, e), t } return "string" == typeof e ? Mi(e) : void 0 } }
            var Mi = M(function(e) { return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" } }),
                bi = V && !K,
                Li = "transition",
                ki = "animation",
                wi = "transition",
                Yi = "transitionend",
                Di = "animation",
                Ti = "animationend";
            bi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (wi = "WebkitTransition", Yi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Di = "WebkitAnimation", Ti = "webkitAnimationEnd"));
            var xi = V ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) { return e() };

            function Si(e) { xi(function() { xi(e) }) }

            function Ci(e, t) {
                var n = e._transitionClasses || (e._transitionClasses = []);
                n.indexOf(t) < 0 && (n.push(t), vi(e, t))
            }

            function Hi(e, t) { e._transitionClasses && v(e._transitionClasses, t), gi(e, t) }

            function Ai(e, t, n) {
                var a = Pi(e, t),
                    i = a.type,
                    r = a.timeout,
                    s = a.propCount;
                if (!i) return n();
                var o = i === Li ? Yi : Ti,
                    d = 0,
                    l = function() { e.removeEventListener(o, u), n() },
                    u = function(t) { t.target === e && ++d >= s && l() };
                setTimeout(function() { d < s && l() }, r + 1), e.addEventListener(o, u)
            }
            var Oi = /\b(transform|all)(,|$)/;

            function Pi(e, t) {
                var n, a = window.getComputedStyle(e),
                    i = (a[wi + "Delay"] || "").split(", "),
                    r = (a[wi + "Duration"] || "").split(", "),
                    s = ji(i, r),
                    o = (a[Di + "Delay"] || "").split(", "),
                    d = (a[Di + "Duration"] || "").split(", "),
                    l = ji(o, d),
                    u = 0,
                    c = 0;
                return t === Li ? s > 0 && (n = Li, u = s, c = r.length) : t === ki ? l > 0 && (n = ki, u = l, c = d.length) : c = (n = (u = Math.max(s, l)) > 0 ? s > l ? Li : ki : null) ? n === Li ? r.length : d.length : 0, { type: n, timeout: u, propCount: c, hasTransform: n === Li && Oi.test(a[wi + "Property"]) }
            }

            function ji(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max.apply(null, t.map(function(t, n) { return Ei(t) + Ei(e[n]) })) }

            function Ei(e) { return 1e3 * Number(e.slice(0, -1).replace(",", ".")) }

            function Fi(e, t) {
                var n = e.elm;
                i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                var r = yi(e.data.transition);
                if (!a(r) && !i(n._enterCb) && 1 === n.nodeType) {
                    for (var s = r.css, d = r.type, l = r.enterClass, u = r.enterToClass, c = r.enterActiveClass, m = r.appearClass, _ = r.appearToClass, f = r.appearActiveClass, p = r.beforeEnter, v = r.enter, g = r.afterEnter, y = r.enterCancelled, M = r.beforeAppear, b = r.appear, L = r.afterAppear, k = r.appearCancelled, w = r.duration, Y = Kt, D = Kt.$vnode; D && D.parent;) Y = D.context, D = D.parent;
                    var T = !Y._isMounted || !e.isRootInsert;
                    if (!T || b || "" === b) {
                        var x = T && m ? m : l,
                            S = T && f ? f : c,
                            C = T && _ ? _ : u,
                            H = T && M || p,
                            A = T && "function" == typeof b ? b : v,
                            O = T && L || g,
                            P = T && k || y,
                            E = h(o(w) ? w.enter : w),
                            F = !1 !== s && !K,
                            I = Ri(A),
                            W = n._enterCb = j(function() { F && (Hi(n, C), Hi(n, S)), W.cancelled ? (F && Hi(n, x), P && P(n)) : O && O(n), n._enterCb = null });
                        e.data.show || st(e, "insert", function() {
                            var t = n.parentNode,
                                a = t && t._pending && t._pending[e.key];
                            a && a.tag === e.tag && a.elm._leaveCb && a.elm._leaveCb(), A && A(n, W)
                        }), H && H(n), F && (Ci(n, x), Ci(n, S), Si(function() { Hi(n, x), W.cancelled || (Ci(n, C), I || (Wi(E) ? setTimeout(W, E) : Ai(n, d, W))) })), e.data.show && (t && t(), A && A(n, W)), F || I || W()
                    }
                }
            }

            function Ii(e, t) {
                var n = e.elm;
                i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                var r = yi(e.data.transition);
                if (a(r) || 1 !== n.nodeType) return t();
                if (!i(n._leaveCb)) {
                    var s = r.css,
                        d = r.type,
                        l = r.leaveClass,
                        u = r.leaveToClass,
                        c = r.leaveActiveClass,
                        m = r.beforeLeave,
                        _ = r.leave,
                        f = r.afterLeave,
                        p = r.leaveCancelled,
                        v = r.delayLeave,
                        g = r.duration,
                        y = !1 !== s && !K,
                        M = Ri(_),
                        b = h(o(g) ? g.leave : g),
                        L = n._leaveCb = j(function() { n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), y && (Hi(n, u), Hi(n, c)), L.cancelled ? (y && Hi(n, l), p && p(n)) : (t(), f && f(n)), n._leaveCb = null });
                    v ? v(k) : k()
                }

                function k() { L.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), m && m(n), y && (Ci(n, l), Ci(n, c), Si(function() { Hi(n, l), L.cancelled || (Ci(n, u), M || (Wi(b) ? setTimeout(L, b) : Ai(n, d, L))) })), _ && _(n, L), y || M || L()) }
            }

            function Wi(e) { return "number" == typeof e && !isNaN(e) }

            function Ri(e) { if (a(e)) return !1; var t = e.fns; return i(t) ? Ri(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1 }

            function zi(e, t) {!0 !== t.data.show && Fi(t) }
            var Ni = function(e) {
                var t, n, o = {},
                    d = e.modules,
                    l = e.nodeOps;
                for (t = 0; t < na.length; ++t)
                    for (o[na[t]] = [], n = 0; n < d.length; ++n) i(d[n][na[t]]) && o[na[t]].push(d[n][na[t]]);

                function u(e) {
                    var t = l.parentNode(e);
                    i(t) && l.removeChild(t, e)
                }

                function c(e, t, n, a, s, d, u) {
                    if (i(e.elm) && i(d) && (e = d[u] = ge(e)), e.isRootInsert = !s, ! function(e, t, n, a) {
                            var s = e.data;
                            if (i(s)) {
                                var d = i(e.componentInstance) && s.keepAlive;
                                if (i(s = s.hook) && i(s = s.init) && s(e, !1), i(e.componentInstance)) return m(e, t), h(n, e.elm, a), r(d) && function(e, t, n, a) {
                                    for (var r, s = e; s.componentInstance;)
                                        if (s = s.componentInstance._vnode, i(r = s.data) && i(r = r.transition)) {
                                            for (r = 0; r < o.activate.length; ++r) o.activate[r](ta, s);
                                            t.push(s);
                                            break
                                        }
                                    h(n, e.elm, a)
                                }(e, t, n, a), !0
                            }
                        }(e, t, n, a)) {
                        var c = e.data,
                            _ = e.children,
                            p = e.tag;
                        i(p) ? (e.elm = e.ns ? l.createElementNS(e.ns, p) : l.createElement(p, e), g(e), f(e, _, t), i(c) && v(e, t), h(n, e.elm, a)) : r(e.isComment) ? (e.elm = l.createComment(e.text), h(n, e.elm, a)) : (e.elm = l.createTextNode(e.text), h(n, e.elm, a))
                    }
                }

                function m(e, t) { i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, p(e) ? (v(e, t), g(e)) : (ea(e), t.push(e)) }

                function h(e, t, n) { i(e) && (i(n) ? l.parentNode(n) === e && l.insertBefore(e, t, n) : l.appendChild(e, t)) }

                function f(e, t, n) {
                    if (Array.isArray(t))
                        for (var a = 0; a < t.length; ++a) c(t[a], n, e.elm, null, !0, t, a);
                    else s(e.text) && l.appendChild(e.elm, l.createTextNode(String(e.text)))
                }

                function p(e) { for (; e.componentInstance;) e = e.componentInstance._vnode; return i(e.tag) }

                function v(e, n) {
                    for (var a = 0; a < o.create.length; ++a) o.create[a](ta, e);
                    i(t = e.data.hook) && (i(t.create) && t.create(ta, e), i(t.insert) && n.push(e))
                }

                function g(e) {
                    var t;
                    if (i(t = e.fnScopeId)) l.setStyleScope(e.elm, t);
                    else
                        for (var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && l.setStyleScope(e.elm, t), n = n.parent;
                    i(t = Kt) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && l.setStyleScope(e.elm, t)
                }

                function y(e, t, n, a, i, r) { for (; a <= i; ++a) c(n[a], r, e, t, !1, n, a) }

                function M(e) {
                    var t, n, a = e.data;
                    if (i(a))
                        for (i(t = a.hook) && i(t = t.destroy) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
                    if (i(t = e.children))
                        for (n = 0; n < e.children.length; ++n) M(e.children[n])
                }

                function b(e, t, n, a) {
                    for (; n <= a; ++n) {
                        var r = t[n];
                        i(r) && (i(r.tag) ? (L(r), M(r)) : u(r.elm))
                    }
                }

                function L(e, t) {
                    if (i(t) || i(e.data)) {
                        var n, a = o.remove.length + 1;
                        for (i(t) ? t.listeners += a : t = function(e, t) {
                                function n() { 0 == --n.listeners && u(e) }
                                return n.listeners = t, n
                            }(e.elm, a), i(n = e.componentInstance) && i(n = n._vnode) && i(n.data) && L(n, t), n = 0; n < o.remove.length; ++n) o.remove[n](e, t);
                        i(n = e.data.hook) && i(n = n.remove) ? n(e, t) : t()
                    } else u(e.elm)
                }

                function k(e, t, n, a) { for (var r = n; r < a; r++) { var s = t[r]; if (i(s) && aa(e, s)) return r } }

                function w(e, t, n, s, d, u) {
                    if (e !== t) {
                        i(t.elm) && i(s) && (t = s[d] = ge(t));
                        var m = t.elm = e.elm;
                        if (r(e.isAsyncPlaceholder)) i(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
                        else if (r(t.isStatic) && r(e.isStatic) && t.key === e.key && (r(t.isCloned) || r(t.isOnce))) t.componentInstance = e.componentInstance;
                        else {
                            var h, _ = t.data;
                            i(_) && i(h = _.hook) && i(h = h.prepatch) && h(e, t);
                            var f = e.children,
                                v = t.children;
                            if (i(_) && p(t)) {
                                for (h = 0; h < o.update.length; ++h) o.update[h](e, t);
                                i(h = _.hook) && i(h = h.update) && h(e, t)
                            }
                            a(t.text) ? i(f) && i(v) ? f !== v && function(e, t, n, r, s) {
                                for (var o, d, u, m = 0, h = 0, _ = t.length - 1, f = t[0], p = t[_], v = n.length - 1, g = n[0], M = n[v], L = !s; m <= _ && h <= v;) a(f) ? f = t[++m] : a(p) ? p = t[--_] : aa(f, g) ? (w(f, g, r, n, h), f = t[++m], g = n[++h]) : aa(p, M) ? (w(p, M, r, n, v), p = t[--_], M = n[--v]) : aa(f, M) ? (w(f, M, r, n, v), L && l.insertBefore(e, f.elm, l.nextSibling(p.elm)), f = t[++m], M = n[--v]) : aa(p, g) ? (w(p, g, r, n, h), L && l.insertBefore(e, p.elm, f.elm), p = t[--_], g = n[++h]) : (a(o) && (o = ia(t, m, _)), a(d = i(g.key) ? o[g.key] : k(g, t, m, _)) ? c(g, r, e, f.elm, !1, n, h) : aa(u = t[d], g) ? (w(u, g, r, n, h), t[d] = void 0, L && l.insertBefore(e, u.elm, f.elm)) : c(g, r, e, f.elm, !1, n, h), g = n[++h]);
                                m > _ ? y(e, a(n[v + 1]) ? null : n[v + 1].elm, n, h, v, r) : h > v && b(0, t, m, _)
                            }(m, f, v, n, u) : i(v) ? (i(e.text) && l.setTextContent(m, ""), y(m, null, v, 0, v.length - 1, n)) : i(f) ? b(0, f, 0, f.length - 1) : i(e.text) && l.setTextContent(m, "") : e.text !== t.text && l.setTextContent(m, t.text), i(_) && i(h = _.hook) && i(h = h.postpatch) && h(e, t)
                        }
                    }
                }

                function Y(e, t, n) {
                    if (r(n) && i(e.parent)) e.parent.data.pendingInsert = t;
                    else
                        for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a])
                }
                var D = _("attrs,class,staticClass,staticStyle,key");

                function T(e, t, n, a) {
                    var s, o = t.tag,
                        d = t.data,
                        l = t.children;
                    if (a = a || d && d.pre, t.elm = e, r(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                    if (i(d) && (i(s = d.hook) && i(s = s.init) && s(t, !0), i(s = t.componentInstance))) return m(t, n), !0;
                    if (i(o)) {
                        if (i(l))
                            if (e.hasChildNodes())
                                if (i(s = d) && i(s = s.domProps) && i(s = s.innerHTML)) { if (s !== e.innerHTML) return !1 } else {
                                    for (var u = !0, c = e.firstChild, h = 0; h < l.length; h++) {
                                        if (!c || !T(c, l[h], n, a)) { u = !1; break }
                                        c = c.nextSibling
                                    }
                                    if (!u || c) return !1
                                }
                        else f(t, l, n);
                        if (i(d)) {
                            var _ = !1;
                            for (var p in d)
                                if (!D(p)) { _ = !0, v(t, n); break }!_ && d.class && nt(d.class)
                        }
                    } else e.data !== t.text && (e.data = t.text);
                    return !0
                }
                return function(e, t, n, s) {
                    if (!a(t)) {
                        var d, u = !1,
                            m = [];
                        if (a(e)) u = !0, c(t, m);
                        else {
                            var h = i(e.nodeType);
                            if (!h && aa(e, t)) w(e, t, m, null, null, s);
                            else {
                                if (h) {
                                    if (1 === e.nodeType && e.hasAttribute(E) && (e.removeAttribute(E), n = !0), r(n) && T(e, t, m)) return Y(t, m, !0), e;
                                    d = e, e = new _e(l.tagName(d).toLowerCase(), {}, [], void 0, d)
                                }
                                var _ = e.elm,
                                    f = l.parentNode(_);
                                if (c(t, m, _._leaveCb ? null : f, l.nextSibling(_)), i(t.parent))
                                    for (var v = t.parent, g = p(t); v;) {
                                        for (var y = 0; y < o.destroy.length; ++y) o.destroy[y](v);
                                        if (v.elm = t.elm, g) {
                                            for (var L = 0; L < o.create.length; ++L) o.create[L](ta, v);
                                            var k = v.data.hook.insert;
                                            if (k.merged)
                                                for (var D = 1; D < k.fns.length; D++) k.fns[D]()
                                        } else ea(v);
                                        v = v.parent
                                    }
                                i(f) ? b(0, [e], 0, 0) : i(e.tag) && M(e)
                            }
                        }
                        return Y(t, m, u), t.elm
                    }
                    i(e) && M(e)
                }
            }({ nodeOps: Qn, modules: [fa, ka, ti, ii, fi, V ? { create: zi, activate: zi, remove: function(e, t) {!0 !== e.data.show ? Ii(e, t) : t() } } : {}].concat(ca) });
            K && document.addEventListener("selectionchange", function() {
                var e = document.activeElement;
                e && e.vmodel && Ki(e, "input")
            });
            var Bi = {
                inserted: function(e, t, n, a) { "select" === n.tag ? (a.elm && !a.elm._vOptions ? st(n, "postpatch", function() { Bi.componentUpdated(e, t, n) }) : $i(e, t, n.context), e._vOptions = [].map.call(e.options, Ji)) : ("textarea" === n.tag || Kn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Gi), e.addEventListener("compositionend", qi), e.addEventListener("change", qi), K && (e.vmodel = !0))) },
                componentUpdated: function(e, t, n) {
                    if ("select" === n.tag) {
                        $i(e, t, n.context);
                        var a = e._vOptions,
                            i = e._vOptions = [].map.call(e.options, Ji);
                        i.some(function(e, t) { return !O(e, a[t]) }) && (e.multiple ? t.value.some(function(e) { return Ui(e, i) }) : t.value !== t.oldValue && Ui(t.value, i)) && Ki(e, "change")
                    }
                }
            };

            function $i(e, t, n) { Vi(e, t), (q || Z) && setTimeout(function() { Vi(e, t) }, 0) }

            function Vi(e, t, n) {
                var a = t.value,
                    i = e.multiple;
                if (!i || Array.isArray(a)) {
                    for (var r, s, o = 0, d = e.options.length; o < d; o++)
                        if (s = e.options[o], i) r = P(a, Ji(s)) > -1, s.selected !== r && (s.selected = r);
                        else if (O(Ji(s), a)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
                    i || (e.selectedIndex = -1)
                }
            }

            function Ui(e, t) { return t.every(function(t) { return !O(t, e) }) }

            function Ji(e) { return "_value" in e ? e._value : e.value }

            function Gi(e) { e.target.composing = !0 }

            function qi(e) { e.target.composing && (e.target.composing = !1, Ki(e.target, "input")) }

            function Ki(e, t) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n)
            }

            function Zi(e) { return !e.componentInstance || e.data && e.data.transition ? e : Zi(e.componentInstance._vnode) }
            var Qi = {
                    model: Bi,
                    show: {
                        bind: function(e, t, n) {
                            var a = t.value,
                                i = (n = Zi(n)).data && n.data.transition,
                                r = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                            a && i ? (n.data.show = !0, Fi(n, function() { e.style.display = r })) : e.style.display = a ? r : "none"
                        },
                        update: function(e, t, n) { var a = t.value;!a != !t.oldValue && ((n = Zi(n)).data && n.data.transition ? (n.data.show = !0, a ? Fi(n, function() { e.style.display = e.__vOriginalDisplay }) : Ii(n, function() { e.style.display = "none" })) : e.style.display = a ? e.__vOriginalDisplay : "none") },
                        unbind: function(e, t, n, a, i) { i || (e.style.display = e.__vOriginalDisplay) }
                    }
                },
                Xi = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] };

            function er(e) { var t = e && e.componentOptions; return t && t.Ctor.options.abstract ? er(Vt(t.children)) : e }

            function tr(e) {
                var t = {},
                    n = e.$options;
                for (var a in n.propsData) t[a] = e[a];
                var i = n._parentListeners;
                for (var r in i) t[L(r)] = i[r];
                return t
            }

            function nr(e, t) { if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData }) }
            var ar = function(e) { return e.tag || $t(e) },
                ir = function(e) { return "show" === e.name },
                rr = {
                    name: "transition",
                    props: Xi,
                    abstract: !0,
                    render: function(e) {
                        var t = this,
                            n = this.$slots.default;
                        if (n && (n = n.filter(ar)).length) {
                            var a = this.mode,
                                i = n[0];
                            if (function(e) {
                                    for (; e = e.parent;)
                                        if (e.data.transition) return !0
                                }(this.$vnode)) return i;
                            var r = er(i);
                            if (!r) return i;
                            if (this._leaving) return nr(e, i);
                            var o = "__transition-" + this._uid + "-";
                            r.key = null == r.key ? r.isComment ? o + "comment" : o + r.tag : s(r.key) ? 0 === String(r.key).indexOf(o) ? r.key : o + r.key : r.key;
                            var d = (r.data || (r.data = {})).transition = tr(this),
                                l = this._vnode,
                                u = er(l);
                            if (r.data.directives && r.data.directives.some(ir) && (r.data.show = !0), u && u.data && ! function(e, t) { return t.key === e.key && t.tag === e.tag }(r, u) && !$t(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                                var c = u.data.transition = x({}, d);
                                if ("out-in" === a) return this._leaving = !0, st(c, "afterLeave", function() { t._leaving = !1, t.$forceUpdate() }), nr(e, i);
                                if ("in-out" === a) {
                                    if ($t(r)) return l;
                                    var m, h = function() { m() };
                                    st(d, "afterEnter", h), st(d, "enterCancelled", h), st(c, "delayLeave", function(e) { m = e })
                                }
                            }
                            return i
                        }
                    }
                },
                sr = x({ tag: String, moveClass: String }, Xi);

            function or(e) { e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb() }

            function dr(e) { e.data.newPos = e.elm.getBoundingClientRect() }

            function lr(e) {
                var t = e.data.pos,
                    n = e.data.newPos,
                    a = t.left - n.left,
                    i = t.top - n.top;
                if (a || i) {
                    e.data.moved = !0;
                    var r = e.elm.style;
                    r.transform = r.WebkitTransform = "translate(" + a + "px," + i + "px)", r.transitionDuration = "0s"
                }
            }
            delete sr.mode;
            var ur = {
                Transition: rr,
                TransitionGroup: {
                    props: sr,
                    beforeMount: function() {
                        var e = this,
                            t = this._update;
                        this._update = function(n, a) {
                            var i = Zt(e);
                            e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, a)
                        }
                    },
                    render: function(e) {
                        for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), a = this.prevChildren = this.children, i = this.$slots.default || [], r = this.children = [], s = tr(this), o = 0; o < i.length; o++) {
                            var d = i[o];
                            d.tag && null != d.key && 0 !== String(d.key).indexOf("__vlist") && (r.push(d), n[d.key] = d, (d.data || (d.data = {})).transition = s)
                        }
                        if (a) {
                            for (var l = [], u = [], c = 0; c < a.length; c++) {
                                var m = a[c];
                                m.data.transition = s, m.data.pos = m.elm.getBoundingClientRect(), n[m.key] ? l.push(m) : u.push(m)
                            }
                            this.kept = e(t, null, l), this.removed = u
                        }
                        return e(t, null, r)
                    },
                    updated: function() {
                        var e = this.prevChildren,
                            t = this.moveClass || (this.name || "v") + "-move";
                        e.length && this.hasMove(e[0].elm, t) && (e.forEach(or), e.forEach(dr), e.forEach(lr), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
                            if (e.data.moved) {
                                var n = e.elm,
                                    a = n.style;
                                Ci(n, t), a.transform = a.WebkitTransform = a.transitionDuration = "", n.addEventListener(Yi, n._moveCb = function e(a) { a && a.target !== n || a && !/transform$/.test(a.propertyName) || (n.removeEventListener(Yi, e), n._moveCb = null, Hi(n, t)) })
                            }
                        }))
                    },
                    methods: {
                        hasMove: function(e, t) {
                            if (!bi) return !1;
                            if (this._hasMove) return this._hasMove;
                            var n = e.cloneNode();
                            e._transitionClasses && e._transitionClasses.forEach(function(e) { gi(n, e) }), vi(n, t), n.style.display = "none", this.$el.appendChild(n);
                            var a = Pi(n);
                            return this.$el.removeChild(n), this._hasMove = a.hasTransform
                        }
                    }
                }
            };
            kn.config.mustUseProp = An, kn.config.isReservedTag = Jn, kn.config.isReservedAttr = Cn, kn.config.getTagNamespace = Gn, kn.config.isUnknownElement = function(e) { if (!V) return !0; if (Jn(e)) return !1; if (e = e.toLowerCase(), null != qn[e]) return qn[e]; var t = document.createElement(e); return e.indexOf("-") > -1 ? qn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : qn[e] = /HTMLUnknownElement/.test(t.toString()) }, x(kn.options.directives, Qi), x(kn.options.components, ur), kn.prototype.__patch__ = V ? Ni : C, kn.prototype.$mount = function(e, t) { return function(e, t, n) { var a; return e.$el = t, e.$options.render || (e.$options.render = pe), en(e, "beforeMount"), a = function() { e._update(e._render(), n) }, new hn(e, a, C, { before: function() { e._isMounted && !e._isDestroyed && en(e, "beforeUpdate") } }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, en(e, "mounted")), e }(this, e = e && V ? Zn(e) : void 0, t) }, V && setTimeout(function() { W.devtools && ie && ie.emit("init", kn) }, 0);
            var cr, mr = /\{\{((?:.|\r?\n)+?)\}\}/g,
                hr = /[-.*+?^${}()|[\]\/\\]/g,
                _r = M(function(e) {
                    var t = e[0].replace(hr, "\\$&"),
                        n = e[1].replace(hr, "\\$&");
                    return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
                }),
                fr = {
                    staticKeys: ["staticClass"],
                    transformNode: function(e, t) {
                        t.warn;
                        var n = Ea(e, "class");
                        n && (e.staticClass = JSON.stringify(n));
                        var a = ja(e, "class", !1);
                        a && (e.classBinding = a)
                    },
                    genData: function(e) { var t = ""; return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t }
                },
                pr = {
                    staticKeys: ["staticStyle"],
                    transformNode: function(e, t) {
                        t.warn;
                        var n = Ea(e, "style");
                        n && (e.staticStyle = JSON.stringify(ri(n)));
                        var a = ja(e, "style", !1);
                        a && (e.styleBinding = a)
                    },
                    genData: function(e) { var t = ""; return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t }
                },
                vr = _("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                gr = _("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                yr = _("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                Mr = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                br = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                Lr = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + R.source + "]*",
                kr = "((?:" + Lr + "\\:)?" + Lr + ")",
                wr = new RegExp("^<" + kr),
                Yr = /^\s*(\/?)>/,
                Dr = new RegExp("^<\\/" + kr + "[^>]*>"),
                Tr = /^<!DOCTYPE [^>]+>/i,
                xr = /^<!\--/,
                Sr = /^<!\[/,
                Cr = _("script,style,textarea", !0),
                Hr = {},
                Ar = { "&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t", "&#39;": "'" },
                Or = /&(?:lt|gt|quot|amp|#39);/g,
                Pr = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
                jr = _("pre,textarea", !0),
                Er = function(e, t) { return e && jr(e) && "\n" === t[0] };

            function Fr(e, t) { var n = t ? Pr : Or; return e.replace(n, function(e) { return Ar[e] }) }
            var Ir, Wr, Rr, zr, Nr, Br, $r, Vr, Ur = /^@|^v-on:/,
                Jr = /^v-|^@|^:/,
                Gr = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
                qr = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                Kr = /^\(|\)$/g,
                Zr = /^\[.*\]$/,
                Qr = /:(.*)$/,
                Xr = /^:|^\.|^v-bind:/,
                es = /\.[^.\]]+(?=[^\]]*$)/g,
                ts = /^v-slot(:|$)|^#/,
                ns = /[\r\n]/,
                as = /\s+/g,
                is = M(function(e) { return (cr = cr || document.createElement("div")).innerHTML = e, cr.textContent }),
                rs = "_empty_";

            function ss(e, t, n) { return { type: 1, tag: e, attrsList: t, attrsMap: ms(t), rawAttrsMap: {}, parent: n, children: [] } }

            function os(e, t) {
                var n, a;
                (a = ja(n = e, "key")) && (n.key = a), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
                    function(e) {
                        var t = ja(e, "ref");
                        t && (e.ref = t, e.refInFor = function(e) {
                            for (var t = e; t;) {
                                if (void 0 !== t.for) return !0;
                                t = t.parent
                            }
                            return !1
                        }(e))
                    }(e),
                    function(e) {
                        var t;
                        "template" === e.tag ? (t = Ea(e, "scope"), e.slotScope = t || Ea(e, "slot-scope")) : (t = Ea(e, "slot-scope")) && (e.slotScope = t);
                        var n = ja(e, "slot");
                        if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Ca(e, "slot", n, function(e, t) { return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t] }(e, "slot"))), "template" === e.tag) {
                            var a = Fa(e, ts);
                            if (a) {
                                var i = us(a),
                                    r = i.name,
                                    s = i.dynamic;
                                e.slotTarget = r, e.slotTargetDynamic = s, e.slotScope = a.value || rs
                            }
                        } else {
                            var o = Fa(e, ts);
                            if (o) {
                                var d = e.scopedSlots || (e.scopedSlots = {}),
                                    l = us(o),
                                    u = l.name,
                                    c = l.dynamic,
                                    m = d[u] = ss("template", [], e);
                                m.slotTarget = u, m.slotTargetDynamic = c, m.children = e.children.filter(function(e) { if (!e.slotScope) return e.parent = m, !0 }), m.slotScope = o.value || rs, e.children = [], e.plain = !1
                            }
                        }
                    }(e),
                    function(e) { "slot" === e.tag && (e.slotName = ja(e, "name")) }(e),
                    function(e) {
                        var t;
                        (t = ja(e, "is")) && (e.component = t), null != Ea(e, "inline-template") && (e.inlineTemplate = !0)
                    }(e);
                for (var i = 0; i < Rr.length; i++) e = Rr[i](e, t) || e;
                return function(e) {
                    var t, n, a, i, r, s, o, d, l = e.attrsList;
                    for (t = 0, n = l.length; t < n; t++)
                        if (a = i = l[t].name, r = l[t].value, Jr.test(a))
                            if (e.hasBindings = !0, (s = cs(a.replace(Jr, ""))) && (a = a.replace(es, "")), Xr.test(a)) a = a.replace(Xr, ""), r = Ya(r), (d = Zr.test(a)) && (a = a.slice(1, -1)), s && (s.prop && !d && "innerHtml" === (a = L(a)) && (a = "innerHTML"), s.camel && !d && (a = L(a)), s.sync && (o = Ra(r, "$event"), d ? Pa(e, '"update:"+(' + a + ")", o, null, !1, 0, l[t], !0) : (Pa(e, "update:" + L(a), o, null, !1, 0, l[t]), Y(a) !== L(a) && Pa(e, "update:" + Y(a), o, null, !1, 0, l[t])))), s && s.prop || !e.component && $r(e.tag, e.attrsMap.type, a) ? Sa(e, a, r, l[t], d) : Ca(e, a, r, l[t], d);
                            else if (Ur.test(a)) a = a.replace(Ur, ""), (d = Zr.test(a)) && (a = a.slice(1, -1)), Pa(e, a, r, s, !1, 0, l[t], d);
                    else {
                        var u = (a = a.replace(Jr, "")).match(Qr),
                            c = u && u[1];
                        d = !1, c && (a = a.slice(0, -(c.length + 1)), Zr.test(c) && (c = c.slice(1, -1), d = !0)), Aa(e, a, i, r, c, d, s, l[t])
                    } else Ca(e, a, JSON.stringify(r), l[t]), !e.component && "muted" === a && $r(e.tag, e.attrsMap.type, a) && Sa(e, a, "true", l[t])
                }(e), e
            }

            function ds(e) {
                var t;
                if (t = Ea(e, "v-for")) {
                    var n = function(e) {
                        var t = e.match(Gr);
                        if (t) {
                            var n = {};
                            n.for = t[2].trim();
                            var a = t[1].trim().replace(Kr, ""),
                                i = a.match(qr);
                            return i ? (n.alias = a.replace(qr, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = a, n
                        }
                    }(t);
                    n && x(e, n)
                }
            }

            function ls(e, t) { e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t) }

            function us(e) { var t = e.name.replace(ts, ""); return t || "#" !== e.name[0] && (t = "default"), Zr.test(t) ? { name: t.slice(1, -1), dynamic: !0 } : { name: '"' + t + '"', dynamic: !1 } }

            function cs(e) { var t = e.match(es); if (t) { var n = {}; return t.forEach(function(e) { n[e.slice(1)] = !0 }), n } }

            function ms(e) { for (var t = {}, n = 0, a = e.length; n < a; n++) t[e[n].name] = e[n].value; return t }
            var hs = /^xmlns:NS\d+/,
                _s = /^NS\d+:/;

            function fs(e) { return ss(e.tag, e.attrsList.slice(), e.parent) }
            var ps, vs, gs = [fr, pr, {
                    preTransformNode: function(e, t) {
                        if ("input" === e.tag) {
                            var n, a = e.attrsMap;
                            if (!a["v-model"]) return;
                            if ((a[":type"] || a["v-bind:type"]) && (n = ja(e, "type")), a.type || n || !a["v-bind"] || (n = "(" + a["v-bind"] + ").type"), n) {
                                var i = Ea(e, "v-if", !0),
                                    r = i ? "&&(" + i + ")" : "",
                                    s = null != Ea(e, "v-else", !0),
                                    o = Ea(e, "v-else-if", !0),
                                    d = fs(e);
                                ds(d), Ha(d, "type", "checkbox"), os(d, t), d.processed = !0, d.if = "(" + n + ")==='checkbox'" + r, ls(d, { exp: d.if, block: d });
                                var l = fs(e);
                                Ea(l, "v-for", !0), Ha(l, "type", "radio"), os(l, t), ls(d, { exp: "(" + n + ")==='radio'" + r, block: l });
                                var u = fs(e);
                                return Ea(u, "v-for", !0), Ha(u, ":type", n), os(u, t), ls(d, { exp: i, block: u }), s ? d.else = !0 : o && (d.elseif = o), d
                            }
                        }
                    }
                }],
                ys = {
                    expectHTML: !0,
                    modules: gs,
                    directives: {
                        model: function(e, t, n) {
                            var a = t.value,
                                i = t.modifiers,
                                r = e.tag,
                                s = e.attrsMap.type;
                            if (e.component) return Wa(e, a, i), !1;
                            if ("select" === r) ! function(e, t, n) {
                                var a = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val});';
                                a = a + " " + Ra(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Pa(e, "change", a, null, !0)
                            }(e, a);
                            else if ("input" === r && "checkbox" === s) ! function(e, t, n) {
                                var a = n && n.number,
                                    i = ja(e, "value") || "null",
                                    r = ja(e, "true-value") || "true",
                                    s = ja(e, "false-value") || "false";
                                Sa(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === r ? ":(" + t + ")" : ":_q(" + t + "," + r + ")")), Pa(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + r + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (a ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Ra(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Ra(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Ra(t, "$$c") + "}", null, !0)
                            }(e, a, i);
                            else if ("input" === r && "radio" === s) ! function(e, t, n) {
                                var a = n && n.number,
                                    i = ja(e, "value") || "null";
                                Sa(e, "checked", "_q(" + t + "," + (i = a ? "_n(" + i + ")" : i) + ")"), Pa(e, "change", Ra(t, i), null, !0)
                            }(e, a, i);
                            else if ("input" === r || "textarea" === r) ! function(e, t, n) {
                                var a = e.attrsMap.type,
                                    i = n || {},
                                    r = i.lazy,
                                    s = i.number,
                                    o = i.trim,
                                    d = !r && "range" !== a,
                                    l = r ? "change" : "range" === a ? Ja : "input",
                                    u = "$event.target.value";
                                o && (u = "$event.target.value.trim()"), s && (u = "_n(" + u + ")");
                                var c = Ra(t, u);
                                d && (c = "if($event.target.composing)return;" + c), Sa(e, "value", "(" + t + ")"), Pa(e, l, c, null, !0), (o || s) && Pa(e, "blur", "$forceUpdate()")
                            }(e, a, i);
                            else if (!W.isReservedTag(r)) return Wa(e, a, i), !1;
                            return !0
                        },
                        text: function(e, t) { t.value && Sa(e, "textContent", "_s(" + t.value + ")", t) },
                        html: function(e, t) { t.value && Sa(e, "innerHTML", "_s(" + t.value + ")", t) }
                    },
                    isPreTag: function(e) { return "pre" === e },
                    isUnaryTag: vr,
                    mustUseProp: An,
                    canBeLeftOpenTag: gr,
                    isReservedTag: Jn,
                    getTagNamespace: Gn,
                    staticKeys: function(e) { return e.reduce(function(e, t) { return e.concat(t.staticKeys || []) }, []).join(",") }(gs)
                },
                Ms = M(function(e) { return _("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : "")) }),
                bs = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
                Ls = /\([^)]*?\);*$/,
                ks = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
                ws = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
                Ys = { esc: ["Esc", "Escape"], tab: "Tab", enter: "Enter", space: [" ", "Spacebar"], up: ["Up", "ArrowUp"], left: ["Left", "ArrowLeft"], right: ["Right", "ArrowRight"], down: ["Down", "ArrowDown"], delete: ["Backspace", "Delete", "Del"] },
                Ds = function(e) { return "if(" + e + ")return null;" },
                Ts = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: Ds("$event.target !== $event.currentTarget"), ctrl: Ds("!$event.ctrlKey"), shift: Ds("!$event.shiftKey"), alt: Ds("!$event.altKey"), meta: Ds("!$event.metaKey"), left: Ds("'button' in $event && $event.button !== 0"), middle: Ds("'button' in $event && $event.button !== 1"), right: Ds("'button' in $event && $event.button !== 2") };

            function xs(e, t) {
                var n = t ? "nativeOn:" : "on:",
                    a = "",
                    i = "";
                for (var r in e) {
                    var s = Ss(e[r]);
                    e[r] && e[r].dynamic ? i += r + "," + s + "," : a += '"' + r + '":' + s + ","
                }
                return a = "{" + a.slice(0, -1) + "}", i ? n + "_d(" + a + ",[" + i.slice(0, -1) + "])" : n + a
            }

            function Ss(e) {
                if (!e) return "function(){}";
                if (Array.isArray(e)) return "[" + e.map(function(e) { return Ss(e) }).join(",") + "]";
                var t = ks.test(e.value),
                    n = bs.test(e.value),
                    a = ks.test(e.value.replace(Ls, ""));
                if (e.modifiers) {
                    var i = "",
                        r = "",
                        s = [];
                    for (var o in e.modifiers)
                        if (Ts[o]) r += Ts[o], ws[o] && s.push(o);
                        else if ("exact" === o) {
                        var d = e.modifiers;
                        r += Ds(["ctrl", "shift", "alt", "meta"].filter(function(e) { return !d[e] }).map(function(e) { return "$event." + e + "Key" }).join("||"))
                    } else s.push(o);
                    return s.length && (i += function(e) { return "if(!$event.type.indexOf('key')&&" + e.map(Cs).join("&&") + ")return null;" }(s)), r && (i += r), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : a ? "return " + e.value : e.value) + "}"
                }
                return t || n ? e.value : "function($event){" + (a ? "return " + e.value : e.value) + "}"
            }

            function Cs(e) {
                var t = parseInt(e, 10);
                if (t) return "$event.keyCode!==" + t;
                var n = ws[e],
                    a = Ys[e];
                return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(a) + ")"
            }
            var Hs = { on: function(e, t) { e.wrapListeners = function(e) { return "_g(" + e + "," + t.value + ")" } }, bind: function(e, t) { e.wrapData = function(n) { return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")" } }, cloak: C },
                As = function(e) {
                    this.options = e, this.warn = e.warn || Ta, this.transforms = xa(e.modules, "transformCode"), this.dataGenFns = xa(e.modules, "genData"), this.directives = x(x({}, Hs), e.directives);
                    var t = e.isReservedTag || H;
                    this.maybeComponent = function(e) { return !!e.component || !t(e.tag) }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
                };

            function Os(e, t) { var n = new As(t); return { render: "with(this){return " + (e ? Ps(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns } }

            function Ps(e, t) {
                if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return js(e, t);
                if (e.once && !e.onceProcessed) return Es(e, t);
                if (e.for && !e.forProcessed) return Is(e, t);
                if (e.if && !e.ifProcessed) return Fs(e, t);
                if ("template" !== e.tag || e.slotTarget || t.pre) {
                    if ("slot" === e.tag) return function(e, t) {
                        var n = e.slotName || '"default"',
                            a = Ns(e, t),
                            i = "_t(" + n + (a ? "," + a : ""),
                            r = e.attrs || e.dynamicAttrs ? Vs((e.attrs || []).concat(e.dynamicAttrs || []).map(function(e) { return { name: L(e.name), value: e.value, dynamic: e.dynamic } })) : null,
                            s = e.attrsMap["v-bind"];
                        return !r && !s || a || (i += ",null"), r && (i += "," + r), s && (i += (r ? "" : ",null") + "," + s), i + ")"
                    }(e, t);
                    var n;
                    if (e.component) n = function(e, t, n) { var a = t.inlineTemplate ? null : Ns(t, n, !0); return "_c(" + e + "," + Ws(t, n) + (a ? "," + a : "") + ")" }(e.component, e, t);
                    else {
                        var a;
                        (!e.plain || e.pre && t.maybeComponent(e)) && (a = Ws(e, t));
                        var i = e.inlineTemplate ? null : Ns(e, t, !0);
                        n = "_c('" + e.tag + "'" + (a ? "," + a : "") + (i ? "," + i : "") + ")"
                    }
                    for (var r = 0; r < t.transforms.length; r++) n = t.transforms[r](e, n);
                    return n
                }
                return Ns(e, t) || "void 0"
            }

            function js(e, t) { e.staticProcessed = !0; var n = t.pre; return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ps(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")" }

            function Es(e, t) {
                if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Fs(e, t);
                if (e.staticInFor) {
                    for (var n = "", a = e.parent; a;) {
                        if (a.for) { n = a.key; break }
                        a = a.parent
                    }
                    return n ? "_o(" + Ps(e, t) + "," + t.onceId++ + "," + n + ")" : Ps(e, t)
                }
                return js(e, t)
            }

            function Fs(e, t, n, a) {
                return e.ifProcessed = !0,
                    function e(t, n, a, i) {
                        if (!t.length) return i || "_e()";
                        var r = t.shift();
                        return r.exp ? "(" + r.exp + ")?" + s(r.block) + ":" + e(t, n, a, i) : "" + s(r.block);

                        function s(e) { return a ? a(e, n) : e.once ? Es(e, n) : Ps(e, n) }
                    }(e.ifConditions.slice(), t, n, a)
            }

            function Is(e, t, n, a) {
                var i = e.for,
                    r = e.alias,
                    s = e.iterator1 ? "," + e.iterator1 : "",
                    o = e.iterator2 ? "," + e.iterator2 : "";
                return e.forProcessed = !0, (a || "_l") + "((" + i + "),function(" + r + s + o + "){return " + (n || Ps)(e, t) + "})"
            }

            function Ws(e, t) {
                var n = "{",
                    a = function(e, t) {
                        var n = e.directives;
                        if (n) {
                            var a, i, r, s, o = "directives:[",
                                d = !1;
                            for (a = 0, i = n.length; a < i; a++) {
                                r = n[a], s = !0;
                                var l = t.directives[r.name];
                                l && (s = !!l(e, r, t.warn)), s && (d = !0, o += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ",arg:" + (r.isDynamicArg ? r.arg : '"' + r.arg + '"') : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},")
                            }
                            return d ? o.slice(0, -1) + "]" : void 0
                        }
                    }(e, t);
                a && (n += a + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
                for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
                if (e.attrs && (n += "attrs:" + Vs(e.attrs) + ","), e.props && (n += "domProps:" + Vs(e.props) + ","), e.events && (n += xs(e.events, !1) + ","), e.nativeEvents && (n += xs(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function(e, t, n) {
                        var a = e.for || Object.keys(t).some(function(e) { var n = t[e]; return n.slotTargetDynamic || n.if || n.for || Rs(n) }),
                            i = !!e.if;
                        if (!a)
                            for (var r = e.parent; r;) {
                                if (r.slotScope && r.slotScope !== rs || r.for) { a = !0; break }
                                r.if && (i = !0), r = r.parent
                            }
                        var s = Object.keys(t).map(function(e) { return zs(t[e], n) }).join(",");
                        return "scopedSlots:_u([" + s + "]" + (a ? ",null,true" : "") + (!a && i ? ",null,false," + function(e) { for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n); return t >>> 0 }(s) : "") + ")"
                    }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
                    var r = function(e, t) { var n = e.children[0]; if (n && 1 === n.type) { var a = Os(n, t.options); return "inlineTemplate:{render:function(){" + a.render + "},staticRenderFns:[" + a.staticRenderFns.map(function(e) { return "function(){" + e + "}" }).join(",") + "]}" } }(e, t);
                    r && (n += r + ",")
                }
                return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Vs(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
            }

            function Rs(e) { return 1 === e.type && ("slot" === e.tag || e.children.some(Rs)) }

            function zs(e, t) {
                var n = e.attrsMap["slot-scope"];
                if (e.if && !e.ifProcessed && !n) return Fs(e, t, zs, "null");
                if (e.for && !e.forProcessed) return Is(e, t, zs);
                var a = e.slotScope === rs ? "" : String(e.slotScope),
                    i = "function(" + a + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (Ns(e, t) || "undefined") + ":undefined" : Ns(e, t) || "undefined" : Ps(e, t)) + "}",
                    r = a ? "" : ",proxy:true";
                return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + r + "}"
            }

            function Ns(e, t, n, a, i) {
                var r = e.children;
                if (r.length) {
                    var s = r[0];
                    if (1 === r.length && s.for && "template" !== s.tag && "slot" !== s.tag) { var o = n ? t.maybeComponent(s) ? ",1" : ",0" : ""; return "" + (a || Ps)(s, t) + o }
                    var d = n ? function(e, t) { for (var n = 0, a = 0; a < e.length; a++) { var i = e[a]; if (1 === i.type) { if (Bs(i) || i.ifConditions && i.ifConditions.some(function(e) { return Bs(e.block) })) { n = 2; break }(t(i) || i.ifConditions && i.ifConditions.some(function(e) { return t(e.block) })) && (n = 1) } } return n }(r, t.maybeComponent) : 0,
                        l = i || $s;
                    return "[" + r.map(function(e) { return l(e, t) }).join(",") + "]" + (d ? "," + d : "")
                }
            }

            function Bs(e) { return void 0 !== e.for || "template" === e.tag || "slot" === e.tag }

            function $s(e, t) { return 1 === e.type ? Ps(e, t) : 3 === e.type && e.isComment ? (a = e, "_e(" + JSON.stringify(a.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Us(JSON.stringify(n.text))) + ")"; var n, a }

            function Vs(e) {
                for (var t = "", n = "", a = 0; a < e.length; a++) {
                    var i = e[a],
                        r = Us(i.value);
                    i.dynamic ? n += i.name + "," + r + "," : t += '"' + i.name + '":' + r + ","
                }
                return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
            }

            function Us(e) { return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") }

            function Js(e, t) { try { return new Function(e) } catch (n) { return t.push({ err: n, code: e }), C } }

            function Gs(e) {
                var t = Object.create(null);
                return function(n, a, i) {
                    (a = x({}, a)).warn, delete a.warn;
                    var r = a.delimiters ? String(a.delimiters) + n : n;
                    if (t[r]) return t[r];
                    var s = e(n, a),
                        o = {},
                        d = [];
                    return o.render = Js(s.render, d), o.staticRenderFns = s.staticRenderFns.map(function(e) { return Js(e, d) }), t[r] = o
                }
            }
            new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
            var qs, Ks, Zs = (qs = function(e, t) {
                    var n = function(e, t) {
                        Ir = t.warn || Ta, Br = t.isPreTag || H, $r = t.mustUseProp || H, Vr = t.getTagNamespace || H, t.isReservedTag, Rr = xa(t.modules, "transformNode"), zr = xa(t.modules, "preTransformNode"), Nr = xa(t.modules, "postTransformNode"), Wr = t.delimiters;
                        var n, a, i = [],
                            r = !1 !== t.preserveWhitespace,
                            s = t.whitespace,
                            o = !1,
                            d = !1;

                        function l(e) {
                            if (u(e), o || e.processed || (e = os(e, t)), i.length || e === n || n.if && (e.elseif || e.else) && ls(n, { exp: e.elseif, block: e }), a && !e.forbidden)
                                if (e.elseif || e.else) s = e, (l = function(e) {
                                    for (var t = e.length; t--;) {
                                        if (1 === e[t].type) return e[t];
                                        e.pop()
                                    }
                                }(a.children)) && l.if && ls(l, { exp: s.elseif, block: s });
                                else {
                                    if (e.slotScope) {
                                        var r = e.slotTarget || '"default"';
                                        (a.scopedSlots || (a.scopedSlots = {}))[r] = e
                                    }
                                    a.children.push(e), e.parent = a
                                }
                            var s, l;
                            e.children = e.children.filter(function(e) { return !e.slotScope }), u(e), e.pre && (o = !1), Br(e.tag) && (d = !1);
                            for (var c = 0; c < Nr.length; c++) Nr[c](e, t)
                        }

                        function u(e) {
                            if (!d)
                                for (var t;
                                    (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
                        }
                        return function(e, t) {
                            for (var n, a, i = [], r = t.expectHTML, s = t.isUnaryTag || H, o = t.canBeLeftOpenTag || H, d = 0; e;) {
                                if (n = e, a && Cr(a)) {
                                    var l = 0,
                                        u = a.toLowerCase(),
                                        c = Hr[u] || (Hr[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                                        m = e.replace(c, function(e, n, a) { return l = a.length, Cr(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Er(u, n) && (n = n.slice(1)), t.chars && t.chars(n), "" });
                                    d += e.length - m.length, e = m, D(u, d - l, d)
                                } else {
                                    var h = e.indexOf("<");
                                    if (0 === h) {
                                        if (xr.test(e)) { var _ = e.indexOf("--\x3e"); if (_ >= 0) { t.shouldKeepComment && t.comment(e.substring(4, _), d, d + _ + 3), k(_ + 3); continue } }
                                        if (Sr.test(e)) { var f = e.indexOf("]>"); if (f >= 0) { k(f + 2); continue } }
                                        var p = e.match(Tr);
                                        if (p) { k(p[0].length); continue }
                                        var v = e.match(Dr);
                                        if (v) {
                                            var g = d;
                                            k(v[0].length), D(v[1], g, d);
                                            continue
                                        }
                                        var y = w();
                                        if (y) { Y(y), Er(y.tagName, e) && k(1); continue }
                                    }
                                    var M = void 0,
                                        b = void 0,
                                        L = void 0;
                                    if (h >= 0) {
                                        for (b = e.slice(h); !(Dr.test(b) || wr.test(b) || xr.test(b) || Sr.test(b) || (L = b.indexOf("<", 1)) < 0);) h += L, b = e.slice(h);
                                        M = e.substring(0, h)
                                    }
                                    h < 0 && (M = e), M && k(M.length), t.chars && M && t.chars(M, d - M.length, d)
                                }
                                if (e === n) { t.chars && t.chars(e); break }
                            }

                            function k(t) { d += t, e = e.substring(t) }

                            function w() { var t = e.match(wr); if (t) { var n, a, i = { tagName: t[1], attrs: [], start: d }; for (k(t[0].length); !(n = e.match(Yr)) && (a = e.match(br) || e.match(Mr));) a.start = d, k(a[0].length), a.end = d, i.attrs.push(a); if (n) return i.unarySlash = n[1], k(n[0].length), i.end = d, i } }

                            function Y(e) {
                                var n = e.tagName,
                                    d = e.unarySlash;
                                r && ("p" === a && yr(n) && D(a), o(n) && a === n && D(n));
                                for (var l = s(n) || !!d, u = e.attrs.length, c = new Array(u), m = 0; m < u; m++) {
                                    var h = e.attrs[m],
                                        _ = h[3] || h[4] || h[5] || "",
                                        f = "a" === n && "href" === h[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                                    c[m] = { name: h[1], value: Fr(_, f) }
                                }
                                l || (i.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: c, start: e.start, end: e.end }), a = n), t.start && t.start(n, c, l, e.start, e.end)
                            }

                            function D(e, n, r) {
                                var s, o;
                                if (null == n && (n = d), null == r && (r = d), e)
                                    for (o = e.toLowerCase(), s = i.length - 1; s >= 0 && i[s].lowerCasedTag !== o; s--);
                                else s = 0;
                                if (s >= 0) {
                                    for (var l = i.length - 1; l >= s; l--) t.end && t.end(i[l].tag, n, r);
                                    i.length = s, a = s && i[s - 1].tag
                                } else "br" === o ? t.start && t.start(e, [], !0, n, r) : "p" === o && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
                            }
                            D()
                        }(e, {
                            warn: Ir,
                            expectHTML: t.expectHTML,
                            isUnaryTag: t.isUnaryTag,
                            canBeLeftOpenTag: t.canBeLeftOpenTag,
                            shouldDecodeNewlines: t.shouldDecodeNewlines,
                            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                            shouldKeepComment: t.comments,
                            outputSourceRange: t.outputSourceRange,
                            start: function(e, r, s, u, c) {
                                var m = a && a.ns || Vr(e);
                                q && "svg" === m && (r = function(e) {
                                    for (var t = [], n = 0; n < e.length; n++) {
                                        var a = e[n];
                                        hs.test(a.name) || (a.name = a.name.replace(_s, ""), t.push(a))
                                    }
                                    return t
                                }(r));
                                var h, _ = ss(e, r, a);
                                m && (_.ns = m), "style" !== (h = _).tag && ("script" !== h.tag || h.attrsMap.type && "text/javascript" !== h.attrsMap.type) || ae() || (_.forbidden = !0);
                                for (var f = 0; f < zr.length; f++) _ = zr[f](_, t) || _;
                                o || (function(e) { null != Ea(e, "v-pre") && (e.pre = !0) }(_), _.pre && (o = !0)), Br(_.tag) && (d = !0), o ? function(e) {
                                    var t = e.attrsList,
                                        n = t.length;
                                    if (n)
                                        for (var a = e.attrs = new Array(n), i = 0; i < n; i++) a[i] = { name: t[i].name, value: JSON.stringify(t[i].value) }, null != t[i].start && (a[i].start = t[i].start, a[i].end = t[i].end);
                                    else e.pre || (e.plain = !0)
                                }(_) : _.processed || (ds(_), function(e) {
                                    var t = Ea(e, "v-if");
                                    if (t) e.if = t, ls(e, { exp: t, block: e });
                                    else {
                                        null != Ea(e, "v-else") && (e.else = !0);
                                        var n = Ea(e, "v-else-if");
                                        n && (e.elseif = n)
                                    }
                                }(_), function(e) { null != Ea(e, "v-once") && (e.once = !0) }(_)), n || (n = _), s ? l(_) : (a = _, i.push(_))
                            },
                            end: function(e, t, n) {
                                var r = i[i.length - 1];
                                i.length -= 1, a = i[i.length - 1], l(r)
                            },
                            chars: function(e, t, n) {
                                if (a && (!q || "textarea" !== a.tag || a.attrsMap.placeholder !== e)) {
                                    var i, l, u, c = a.children;
                                    (e = d || e.trim() ? "script" === (i = a).tag || "style" === i.tag ? e : is(e) : c.length ? s ? "condense" === s && ns.test(e) ? "" : " " : r ? " " : "" : "") && (d || "condense" !== s || (e = e.replace(as, " ")), !o && " " !== e && (l = function(e, t) {
                                        var n = t ? _r(t) : mr;
                                        if (n.test(e)) {
                                            for (var a, i, r, s = [], o = [], d = n.lastIndex = 0; a = n.exec(e);) {
                                                (i = a.index) > d && (o.push(r = e.slice(d, i)), s.push(JSON.stringify(r)));
                                                var l = Ya(a[1].trim());
                                                s.push("_s(" + l + ")"), o.push({ "@binding": l }), d = i + a[0].length
                                            }
                                            return d < e.length && (o.push(r = e.slice(d)), s.push(JSON.stringify(r))), { expression: s.join("+"), tokens: o }
                                        }
                                    }(e, Wr)) ? u = { type: 2, expression: l.expression, tokens: l.tokens, text: e } : " " === e && c.length && " " === c[c.length - 1].text || (u = { type: 3, text: e }), u && c.push(u))
                                }
                            },
                            comment: function(e, t, n) {
                                if (a) {
                                    var i = { type: 3, text: e, isComment: !0 };
                                    a.children.push(i)
                                }
                            }
                        }), n
                    }(e.trim(), t);
                    !1 !== t.optimize && function(e, t) {
                        e && (ps = Ms(t.staticKeys || ""), vs = t.isReservedTag || H, function e(t) {
                            if (t.static = function(e) { return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || f(e.tag) || !vs(e.tag) || function(e) { for (; e.parent;) { if ("template" !== (e = e.parent).tag) return !1; if (e.for) return !0 } return !1 }(e) || !Object.keys(e).every(ps)))) }(t), 1 === t.type) {
                                if (!vs(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                                for (var n = 0, a = t.children.length; n < a; n++) {
                                    var i = t.children[n];
                                    e(i), i.static || (t.static = !1)
                                }
                                if (t.ifConditions)
                                    for (var r = 1, s = t.ifConditions.length; r < s; r++) {
                                        var o = t.ifConditions[r].block;
                                        e(o), o.static || (t.static = !1)
                                    }
                            }
                        }(e), function e(t, n) {
                            if (1 === t.type) {
                                if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
                                if (t.staticRoot = !1, t.children)
                                    for (var a = 0, i = t.children.length; a < i; a++) e(t.children[a], n || !!t.for);
                                if (t.ifConditions)
                                    for (var r = 1, s = t.ifConditions.length; r < s; r++) e(t.ifConditions[r].block, n)
                            }
                        }(e, !1))
                    }(n, t);
                    var a = Os(n, t);
                    return { ast: n, render: a.render, staticRenderFns: a.staticRenderFns }
                }, function(e) {
                    function t(t, n) {
                        var a = Object.create(e),
                            i = [],
                            r = [];
                        if (n)
                            for (var s in n.modules && (a.modules = (e.modules || []).concat(n.modules)), n.directives && (a.directives = x(Object.create(e.directives || null), n.directives)), n) "modules" !== s && "directives" !== s && (a[s] = n[s]);
                        a.warn = function(e, t, n) {
                            (n ? r : i).push(e)
                        };
                        var o = qs(t.trim(), a);
                        return o.errors = i, o.tips = r, o
                    }
                    return { compile: t, compileToFunctions: Gs(t) }
                })(ys),
                Qs = (Zs.compile, Zs.compileToFunctions);

            function Xs(e) { return (Ks = Ks || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Ks.innerHTML.indexOf("&#10;") > 0 }
            var eo = !!V && Xs(!1),
                to = !!V && Xs(!0),
                no = M(function(e) { var t = Zn(e); return t && t.innerHTML }),
                ao = kn.prototype.$mount;
            return kn.prototype.$mount = function(e, t) {
                if ((e = e && Zn(e)) === document.body || e === document.documentElement) return this;
                var n = this.$options;
                if (!n.render) {
                    var a = n.template;
                    if (a)
                        if ("string" == typeof a) "#" === a.charAt(0) && (a = no(a));
                        else {
                            if (!a.nodeType) return this;
                            a = a.innerHTML
                        }
                    else e && (a = function(e) { if (e.outerHTML) return e.outerHTML; var t = document.createElement("div"); return t.appendChild(e.cloneNode(!0)), t.innerHTML }(e));
                    if (a) {
                        var i = Qs(a, { outputSourceRange: !1, shouldDecodeNewlines: eo, shouldDecodeNewlinesForHref: to, delimiters: n.delimiters, comments: n.comments }, this),
                            r = i.render,
                            s = i.staticRenderFns;
                        n.render = r, n.staticRenderFns = s
                    }
                }
                return ao.call(this, e, t)
            }, kn.compile = Qs, kn
        }()
    }).call(this, n(2), n(37).setImmediate)
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, , , function(e, t, n) {}, function(e, t, n) {
    (function(e) {
        var a = void 0 !== e && e || "undefined" != typeof self && self || window,
            i = Function.prototype.apply;

        function r(e, t) { this._id = e, this._clearFn = t }
        t.setTimeout = function() { return new r(i.call(setTimeout, a, arguments), clearTimeout) }, t.setInterval = function() { return new r(i.call(setInterval, a, arguments), clearInterval) }, t.clearTimeout = t.clearInterval = function(e) { e && e.close() }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() { this._clearFn.call(a, this._id) }, t.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, t.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
        }, n(38), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(this, n(2))
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var a, i, r, s, o, d = 1,
                    l = {},
                    u = !1,
                    c = e.document,
                    m = Object.getPrototypeOf && Object.getPrototypeOf(e);
                m = m && m.setTimeout ? m : e, "[object process]" === {}.toString.call(e.process) ? a = function(e) { t.nextTick(function() { _(e) }) } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() { t = !1 }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function(e) { _(e.data) }, a = function(e) { r.port2.postMessage(e) }) : c && "onreadystatechange" in c.createElement("script") ? (i = c.documentElement, a = function(e) {
                    var t = c.createElement("script");
                    t.onreadystatechange = function() { _(e), t.onreadystatechange = null, i.removeChild(t), t = null }, i.appendChild(t)
                }) : a = function(e) { setTimeout(_, 0, e) } : (s = "setImmediate$" + Math.random() + "$", o = function(t) { t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && _(+t.data.slice(s.length)) }, e.addEventListener ? e.addEventListener("message", o, !1) : e.attachEvent("onmessage", o), a = function(t) { e.postMessage(s + t, "*") }), m.setImmediate = function(e) { "function" != typeof e && (e = new Function("" + e)); for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1]; var i = { callback: e, args: t }; return l[d] = i, a(d), d++ }, m.clearImmediate = h
            }

            function h(e) { delete l[e] }

            function _(e) {
                if (u) setTimeout(_, 0, e);
                else {
                    var t = l[e];
                    if (t) {
                        u = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    a = e.args;
                                switch (a.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(a[0]);
                                        break;
                                    case 2:
                                        t(a[0], a[1]);
                                        break;
                                    case 3:
                                        t(a[0], a[1], a[2]);
                                        break;
                                    default:
                                        t.apply(n, a)
                                }
                            }(t)
                        } finally { h(e), u = !1 }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(2), n(39))
}, function(e, t) {
    var n, a, i = e.exports = {};

    function r() { throw new Error("setTimeout has not been defined") }

    function s() { throw new Error("clearTimeout has not been defined") }

    function o(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : r } catch (e) { n = r } try { a = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { a = s } }();
    var d, l = [],
        u = !1,
        c = -1;

    function m() { u && d && (u = !1, d.length ? l = d.concat(l) : c = -1, l.length && h()) }

    function h() {
        if (!u) {
            var e = o(m);
            u = !0;
            for (var t = l.length; t;) {
                for (d = l, l = []; ++c < t;) d && d[c].run();
                c = -1, t = l.length
            }
            d = null, u = !1,
                function(e) { if (a === clearTimeout) return clearTimeout(e); if ((a === s || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e); try { a(e) } catch (t) { try { return a.call(null, e) } catch (t) { return a.call(this, e) } } }(e)
        }
    }

    function _(e, t) { this.fun = e, this.array = t }

    function f() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new _(e, t)), 1 !== l.length || u || o(h)
    }, _.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 }
}, function(e, t, n) {
    /*!
     * Chart.js v2.8.0
     * https://www.chartjs.org
     * (c) 2019 Chart.js Contributors
     * Released under the MIT License
     */
    e.exports = function(e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = {
            rgb2hsl: n,
            rgb2hsv: a,
            rgb2hwb: i,
            rgb2cmyk: s,
            rgb2keyword: o,
            rgb2xyz: d,
            rgb2lab: l,
            rgb2lch: function(e) { return v(l(e)) },
            hsl2rgb: u,
            hsl2hsv: function(e) {
                var t = e[0],
                    n = e[1] / 100,
                    a = e[2] / 100;
                return 0 === a ? [0, 0, 0] : [t, 2 * (n *= (a *= 2) <= 1 ? a : 2 - a) / (a + n) * 100, (a + n) / 2 * 100]
            },
            hsl2hwb: function(e) { return i(u(e)) },
            hsl2cmyk: function(e) { return s(u(e)) },
            hsl2keyword: function(e) { return o(u(e)) },
            hsv2rgb: c,
            hsv2hsl: function(e) {
                var t, n, a = e[0],
                    i = e[1] / 100,
                    r = e[2] / 100;
                return t = i * r, [a, 100 * (t = (t /= (n = (2 - i) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
            },
            hsv2hwb: function(e) { return i(c(e)) },
            hsv2cmyk: function(e) { return s(c(e)) },
            hsv2keyword: function(e) { return o(c(e)) },
            hwb2rgb: m,
            hwb2hsl: function(e) { return n(m(e)) },
            hwb2hsv: function(e) { return a(m(e)) },
            hwb2cmyk: function(e) { return s(m(e)) },
            hwb2keyword: function(e) { return o(m(e)) },
            cmyk2rgb: h,
            cmyk2hsl: function(e) { return n(h(e)) },
            cmyk2hsv: function(e) { return a(h(e)) },
            cmyk2hwb: function(e) { return i(h(e)) },
            cmyk2keyword: function(e) { return o(h(e)) },
            keyword2rgb: L,
            keyword2hsl: function(e) { return n(L(e)) },
            keyword2hsv: function(e) { return a(L(e)) },
            keyword2hwb: function(e) { return i(L(e)) },
            keyword2cmyk: function(e) { return s(L(e)) },
            keyword2lab: function(e) { return l(L(e)) },
            keyword2xyz: function(e) { return d(L(e)) },
            xyz2rgb: _,
            xyz2lab: f,
            xyz2lch: function(e) { return v(f(e)) },
            lab2xyz: p,
            lab2rgb: y,
            lab2lch: v,
            lch2lab: M,
            lch2xyz: function(e) { return p(M(e)) },
            lch2rgb: function(e) { return y(M(e)) }
        };

        function n(e) {
            var t, n, a = e[0] / 255,
                i = e[1] / 255,
                r = e[2] / 255,
                s = Math.min(a, i, r),
                o = Math.max(a, i, r),
                d = o - s;
            return o == s ? t = 0 : a == o ? t = (i - r) / d : i == o ? t = 2 + (r - a) / d : r == o && (t = 4 + (a - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (s + o) / 2, [t, 100 * (o == s ? 0 : n <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * n]
        }

        function a(e) {
            var t, n, a = e[0],
                i = e[1],
                r = e[2],
                s = Math.min(a, i, r),
                o = Math.max(a, i, r),
                d = o - s;
            return n = 0 == o ? 0 : d / o * 1e3 / 10, o == s ? t = 0 : a == o ? t = (i - r) / d : i == o ? t = 2 + (r - a) / d : r == o && (t = 4 + (a - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, o / 255 * 1e3 / 10]
        }

        function i(e) {
            var t = e[0],
                a = e[1],
                i = e[2],
                r = n(e)[0],
                s = 1 / 255 * Math.min(t, Math.min(a, i)),
                i = 1 - 1 / 255 * Math.max(t, Math.max(a, i));
            return [r, 100 * s, 100 * i]
        }

        function s(e) {
            var t, n = e[0] / 255,
                a = e[1] / 255,
                i = e[2] / 255;
            return t = Math.min(1 - n, 1 - a, 1 - i), [100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - a - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
        }

        function o(e) { return w[JSON.stringify(e)] }

        function d(e) {
            var t = e[0] / 255,
                n = e[1] / 255,
                a = e[2] / 255;
            t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
            var i = .4124 * t + .3576 * n + .1805 * a,
                r = .2126 * t + .7152 * n + .0722 * a,
                s = .0193 * t + .1192 * n + .9505 * a;
            return [100 * i, 100 * r, 100 * s]
        }

        function l(e) {
            var t = d(e),
                n = t[0],
                a = t[1],
                i = t[2];
            return a /= 100, i /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * a - 16, 500 * (n - a), 200 * (a - i)]
        }

        function u(e) {
            var t, n, a, i, r, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100;
            if (0 == o) return [r = 255 * d, r, r];
            t = 2 * d - (n = d < .5 ? d * (1 + o) : d + o - d * o), i = [0, 0, 0];
            for (var l = 0; l < 3; l++)(a = s + 1 / 3 * -(l - 1)) < 0 && a++, a > 1 && a--, r = 6 * a < 1 ? t + 6 * (n - t) * a : 2 * a < 1 ? n : 3 * a < 2 ? t + (n - t) * (2 / 3 - a) * 6 : t, i[l] = 255 * r;
            return i
        }

        function c(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                a = e[2] / 100,
                i = Math.floor(t) % 6,
                r = t - Math.floor(t),
                s = 255 * a * (1 - n),
                o = 255 * a * (1 - n * r),
                d = 255 * a * (1 - n * (1 - r)),
                a = 255 * a;
            switch (i) {
                case 0:
                    return [a, d, s];
                case 1:
                    return [o, a, s];
                case 2:
                    return [s, a, d];
                case 3:
                    return [s, o, a];
                case 4:
                    return [d, s, a];
                case 5:
                    return [a, s, o]
            }
        }

        function m(e) {
            var t, n, a, i, s = e[0] / 360,
                o = e[1] / 100,
                d = e[2] / 100,
                l = o + d;
            switch (l > 1 && (o /= l, d /= l), t = Math.floor(6 * s), a = 6 * s - t, 0 != (1 & t) && (a = 1 - a), i = o + a * ((n = 1 - d) - o), t) {
                default:
                    case 6:
                    case 0:
                    r = n,
                g = i,
                b = o;
                break;
                case 1:
                        r = i,
                    g = n,
                    b = o;
                    break;
                case 2:
                        r = o,
                    g = n,
                    b = i;
                    break;
                case 3:
                        r = o,
                    g = i,
                    b = n;
                    break;
                case 4:
                        r = i,
                    g = o,
                    b = n;
                    break;
                case 5:
                        r = n,
                    g = o,
                    b = i
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function h(e) {
            var t, n, a, i = e[0] / 100,
                r = e[1] / 100,
                s = e[2] / 100,
                o = e[3] / 100;
            return t = 1 - Math.min(1, i * (1 - o) + o), n = 1 - Math.min(1, r * (1 - o) + o), a = 1 - Math.min(1, s * (1 - o) + o), [255 * t, 255 * n, 255 * a]
        }

        function _(e) {
            var t, n, a, i = e[0] / 100,
                r = e[1] / 100,
                s = e[2] / 100;
            return n = -.9689 * i + 1.8758 * r + .0415 * s, a = .0557 * i + -.204 * r + 1.057 * s, t = (t = 3.2406 * i + -1.5372 * r + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, t = Math.min(Math.max(0, t), 1), n = Math.min(Math.max(0, n), 1), a = Math.min(Math.max(0, a), 1), [255 * t, 255 * n, 255 * a]
        }

        function f(e) {
            var t = e[0],
                n = e[1],
                a = e[2];
            return n /= 100, a /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * n - 16, 500 * (t - n), 200 * (n - a)]
        }

        function p(e) {
            var t, n, a, i, r = e[0],
                s = e[1],
                o = e[2];
            return r <= 8 ? i = (n = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((r + 16) / 116, 3), i = Math.pow(n / 100, 1 / 3)), t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + i, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (i - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - o / 200, 3), [t, n, a]
        }

        function v(e) {
            var t, n, a, i = e[0],
                r = e[1],
                s = e[2];
            return t = Math.atan2(s, r), (n = 360 * t / 2 / Math.PI) < 0 && (n += 360), a = Math.sqrt(r * r + s * s), [i, a, n]
        }

        function y(e) { return _(p(e)) }

        function M(e) {
            var t, n, a, i = e[0],
                r = e[1],
                s = e[2];
            return a = s / 360 * 2 * Math.PI, t = r * Math.cos(a), n = r * Math.sin(a), [i, t, n]
        }

        function L(e) { return k[e] }
        var k = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
            w = {};
        for (var Y in k) w[JSON.stringify(k[Y])] = Y;
        var D = function() { return new H };
        for (var T in t) {
            D[T + "Raw"] = function(e) { return function(n) { return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), t[e](n) } }(T);
            var x = /(\w+)2(\w+)/.exec(T),
                S = x[1],
                C = x[2];
            (D[S] = D[S] || {})[C] = D[T] = function(e) { return function(n) { "number" == typeof n && (n = Array.prototype.slice.call(arguments)); var a = t[e](n); if ("string" == typeof a || void 0 === a) return a; for (var i = 0; i < a.length; i++) a[i] = Math.round(a[i]); return a } }(T)
        }
        var H = function() { this.convs = {} };
        H.prototype.routeSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n)) }, H.prototype.setValues = function(e, t) { return this.space = e, this.convs = {}, this.convs[e] = t, this }, H.prototype.getValues = function(e) {
            var t = this.convs[e];
            if (!t) {
                var n = this.space,
                    a = this.convs[n];
                t = D[n][e](a), this.convs[e] = t
            }
            return t
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) { H.prototype[e] = function(t) { return this.routeSpace(e, arguments) } });
        var A = D,
            O = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
            P = {
                getRgba: j,
                getHsla: E,
                getRgb: function(e) { var t = j(e); return t && t.slice(0, 3) },
                getHsl: function(e) { var t = E(e); return t && t.slice(0, 3) },
                getHwb: F,
                getAlpha: function(e) { var t = j(e); return t ? t[3] : (t = E(e)) ? t[3] : (t = F(e)) ? t[3] : void 0 },
                hexString: function(e, t) { var t = void 0 !== t && 3 === e.length ? t : e[3]; return "#" + N(e[0]) + N(e[1]) + N(e[2]) + (t >= 0 && t < 1 ? N(Math.round(255 * t)) : "") },
                rgbString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? I(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")" },
                rgbaString: I,
                percentString: function(e, t) {
                    if (t < 1 || e[3] && e[3] < 1) return W(e, t);
                    var n = Math.round(e[0] / 255 * 100),
                        a = Math.round(e[1] / 255 * 100),
                        i = Math.round(e[2] / 255 * 100);
                    return "rgb(" + n + "%, " + a + "%, " + i + "%)"
                },
                percentaString: W,
                hslString: function(e, t) { return t < 1 || e[3] && e[3] < 1 ? R(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" },
                hslaString: R,
                hwbString: function(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")" },
                keyword: function(e) { return B[e.slice(0, 3)] }
            };

        function j(e) {
            if (e) {
                var t = [0, 0, 0],
                    n = 1,
                    a = e.match(/^#([a-fA-F0-9]{3,4})$/i),
                    i = "";
                if (a) {
                    a = a[1], i = a[3];
                    for (var r = 0; r < t.length; r++) t[r] = parseInt(a[r] + a[r], 16);
                    i && (n = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
                } else if (a = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                    i = a[2], a = a[1];
                    for (var r = 0; r < t.length; r++) t[r] = parseInt(a.slice(2 * r, 2 * r + 2), 16);
                    i && (n = Math.round(parseInt(i, 16) / 255 * 100) / 100)
                } else if (a = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (var r = 0; r < t.length; r++) t[r] = parseInt(a[r + 1]);
                    n = parseFloat(a[4])
                } else if (a = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                    for (var r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(a[r + 1]));
                    n = parseFloat(a[4])
                } else if (a = e.match(/(\w+)/)) { if ("transparent" == a[1]) return [0, 0, 0, 0]; if (!(t = O[a[1]])) return }
                for (var r = 0; r < t.length; r++) t[r] = z(t[r], 0, 255);
                return n = n || 0 == n ? z(n, 0, 1) : 1, t[3] = n, t
            }
        }

        function E(e) {
            if (e) {
                var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var n = parseFloat(t[4]),
                        a = z(parseInt(t[1]), 0, 360),
                        i = z(parseFloat(t[2]), 0, 100),
                        r = z(parseFloat(t[3]), 0, 100),
                        s = z(isNaN(n) ? 1 : n, 0, 1);
                    return [a, i, r, s]
                }
            }
        }

        function F(e) {
            if (e) {
                var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                if (t) {
                    var n = parseFloat(t[4]),
                        a = z(parseInt(t[1]), 0, 360),
                        i = z(parseFloat(t[2]), 0, 100),
                        r = z(parseFloat(t[3]), 0, 100),
                        s = z(isNaN(n) ? 1 : n, 0, 1);
                    return [a, i, r, s]
                }
            }
        }

        function I(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")" }

        function W(e, t) {
            var n = Math.round(e[0] / 255 * 100),
                a = Math.round(e[1] / 255 * 100),
                i = Math.round(e[2] / 255 * 100);
            return "rgba(" + n + "%, " + a + "%, " + i + "%, " + (t || e[3] || 1) + ")"
        }

        function R(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")" }

        function z(e, t, n) { return Math.min(Math.max(t, e), n) }

        function N(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t }
        var B = {};
        for (var $ in O) B[O[$]] = $;
        var V = function(e) { return e instanceof V ? e : this instanceof V ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void("string" == typeof e ? (t = P.getRgba(e)) ? this.setValues("rgb", t) : (t = P.getHsla(e)) ? this.setValues("hsl", t) : (t = P.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new V(e); var t };
        V.prototype = {
            isValid: function() { return this.valid },
            rgb: function() { return this.setSpace("rgb", arguments) },
            hsl: function() { return this.setSpace("hsl", arguments) },
            hsv: function() { return this.setSpace("hsv", arguments) },
            hwb: function() { return this.setSpace("hwb", arguments) },
            cmyk: function() { return this.setSpace("cmyk", arguments) },
            rgbArray: function() { return this.values.rgb },
            hslArray: function() { return this.values.hsl },
            hsvArray: function() { return this.values.hsv },
            hwbArray: function() { var e = this.values; return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb },
            cmykArray: function() { return this.values.cmyk },
            rgbaArray: function() { var e = this.values; return e.rgb.concat([e.alpha]) },
            hslaArray: function() { var e = this.values; return e.hsl.concat([e.alpha]) },
            alpha: function(e) { return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this) },
            red: function(e) { return this.setChannel("rgb", 0, e) },
            green: function(e) { return this.setChannel("rgb", 1, e) },
            blue: function(e) { return this.setChannel("rgb", 2, e) },
            hue: function(e) { return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e) },
            saturation: function(e) { return this.setChannel("hsl", 1, e) },
            lightness: function(e) { return this.setChannel("hsl", 2, e) },
            saturationv: function(e) { return this.setChannel("hsv", 1, e) },
            whiteness: function(e) { return this.setChannel("hwb", 1, e) },
            blackness: function(e) { return this.setChannel("hwb", 2, e) },
            value: function(e) { return this.setChannel("hsv", 2, e) },
            cyan: function(e) { return this.setChannel("cmyk", 0, e) },
            magenta: function(e) { return this.setChannel("cmyk", 1, e) },
            yellow: function(e) { return this.setChannel("cmyk", 2, e) },
            black: function(e) { return this.setChannel("cmyk", 3, e) },
            hexString: function() { return P.hexString(this.values.rgb) },
            rgbString: function() { return P.rgbString(this.values.rgb, this.values.alpha) },
            rgbaString: function() { return P.rgbaString(this.values.rgb, this.values.alpha) },
            percentString: function() { return P.percentString(this.values.rgb, this.values.alpha) },
            hslString: function() { return P.hslString(this.values.hsl, this.values.alpha) },
            hslaString: function() { return P.hslaString(this.values.hsl, this.values.alpha) },
            hwbString: function() { return P.hwbString(this.values.hwb, this.values.alpha) },
            keyword: function() { return P.keyword(this.values.rgb, this.values.alpha) },
            rgbNumber: function() { var e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2] },
            luminosity: function() {
                for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
                    var a = e[n] / 255;
                    t[n] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                }
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            },
            contrast: function(e) {
                var t = this.luminosity(),
                    n = e.luminosity();
                return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
            },
            level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" },
            dark: function() { var e = this.values.rgb; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 },
            light: function() { return !this.dark() },
            negate: function() { for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t]; return this.setValues("rgb", e), this },
            lighten: function(e) { var t = this.values.hsl; return t[2] += t[2] * e, this.setValues("hsl", t), this },
            darken: function(e) { var t = this.values.hsl; return t[2] -= t[2] * e, this.setValues("hsl", t), this },
            saturate: function(e) { var t = this.values.hsl; return t[1] += t[1] * e, this.setValues("hsl", t), this },
            desaturate: function(e) { var t = this.values.hsl; return t[1] -= t[1] * e, this.setValues("hsl", t), this },
            whiten: function(e) { var t = this.values.hwb; return t[1] += t[1] * e, this.setValues("hwb", t), this },
            blacken: function(e) { var t = this.values.hwb; return t[2] += t[2] * e, this.setValues("hwb", t), this },
            greyscale: function() {
                var e = this.values.rgb,
                    t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                return this.setValues("rgb", [t, t, t]), this
            },
            clearer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t - t * e), this },
            opaquer: function(e) { var t = this.values.alpha; return this.setValues("alpha", t + t * e), this },
            rotate: function(e) {
                var t = this.values.hsl,
                    n = (t[0] + e) % 360;
                return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
            },
            mix: function(e, t) {
                var n = e,
                    a = void 0 === t ? .5 : t,
                    i = 2 * a - 1,
                    r = this.alpha() - n.alpha(),
                    s = ((i * r == -1 ? i : (i + r) / (1 + i * r)) + 1) / 2,
                    o = 1 - s;
                return this.rgb(s * this.red() + o * n.red(), s * this.green() + o * n.green(), s * this.blue() + o * n.blue()).alpha(this.alpha() * a + n.alpha() * (1 - a))
            },
            toJSON: function() { return this.rgb() },
            clone: function() {
                var e, t, n = new V,
                    a = this.values,
                    i = n.values;
                for (var r in a) a.hasOwnProperty(r) && (e = a[r], "[object Array]" === (t = {}.toString.call(e)) ? i[r] = e.slice(0) : "[object Number]" === t ? i[r] = e : console.error("unexpected color value:", e));
                return n
            }
        }, V.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, V.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, V.prototype.getValues = function(e) { for (var t = this.values, n = {}, a = 0; a < e.length; a++) n[e.charAt(a)] = t[e][a]; return 1 !== t.alpha && (n.a = t.alpha), n }, V.prototype.setValues = function(e, t) {
            var n, a, i = this.values,
                r = this.spaces,
                s = this.maxes,
                o = 1;
            if (this.valid = !0, "alpha" === e) o = t;
            else if (t.length) i[e] = t.slice(0, e.length), o = t[e.length];
            else if (void 0 !== t[e.charAt(0)]) {
                for (n = 0; n < e.length; n++) i[e][n] = t[e.charAt(n)];
                o = t.a
            } else if (void 0 !== t[r[e][0]]) {
                var d = r[e];
                for (n = 0; n < e.length; n++) i[e][n] = t[d[n]];
                o = t.alpha
            }
            if (i.alpha = Math.max(0, Math.min(1, void 0 === o ? i.alpha : o)), "alpha" === e) return !1;
            for (n = 0; n < e.length; n++) a = Math.max(0, Math.min(s[e][n], i[e][n])), i[e][n] = Math.round(a);
            for (var l in r) l !== e && (i[l] = A[e][l](i[e]));
            return !0
        }, V.prototype.setSpace = function(e, t) { var n = t[0]; return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this) }, V.prototype.setChannel = function(e, t, n) { var a = this.values[e]; return void 0 === n ? a[t] : n === a[t] ? this : (a[t] = n, this.setValues(e, a), this) }, "undefined" != typeof window && (window.Color = V);
        var U, J = V,
            G = {
                noop: function() {},
                uid: (U = 0, function() { return U++ }),
                isNullOrUndef: function(e) { return null == e },
                isArray: function(e) { if (Array.isArray && Array.isArray(e)) return !0; var t = Object.prototype.toString.call(e); return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6) },
                isObject: function(e) { return null !== e && "[object Object]" === Object.prototype.toString.call(e) },
                isFinite: function(e) { return ("number" == typeof e || e instanceof Number) && isFinite(e) },
                valueOrDefault: function(e, t) { return void 0 === e ? t : e },
                valueAtIndexOrDefault: function(e, t, n) { return G.valueOrDefault(G.isArray(e) ? e[t] : e, n) },
                callback: function(e, t, n) { if (e && "function" == typeof e.call) return e.apply(n, t) },
                each: function(e, t, n, a) {
                    var i, r, s;
                    if (G.isArray(e))
                        if (r = e.length, a)
                            for (i = r - 1; i >= 0; i--) t.call(n, e[i], i);
                        else
                            for (i = 0; i < r; i++) t.call(n, e[i], i);
                    else if (G.isObject(e))
                        for (s = Object.keys(e), r = s.length, i = 0; i < r; i++) t.call(n, e[s[i]], s[i])
                },
                arrayEquals: function(e, t) {
                    var n, a, i, r;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (n = 0, a = e.length; n < a; ++n)
                        if (i = e[n], r = t[n], i instanceof Array && r instanceof Array) { if (!G.arrayEquals(i, r)) return !1 } else if (i !== r) return !1;
                    return !0
                },
                clone: function(e) { if (G.isArray(e)) return e.map(G.clone); if (G.isObject(e)) { for (var t = {}, n = Object.keys(e), a = n.length, i = 0; i < a; ++i) t[n[i]] = G.clone(e[n[i]]); return t } return e },
                _merger: function(e, t, n, a) {
                    var i = t[e],
                        r = n[e];
                    G.isObject(i) && G.isObject(r) ? G.merge(i, r, a) : t[e] = G.clone(r)
                },
                _mergerIf: function(e, t, n) {
                    var a = t[e],
                        i = n[e];
                    G.isObject(a) && G.isObject(i) ? G.mergeIf(a, i) : t.hasOwnProperty(e) || (t[e] = G.clone(i))
                },
                merge: function(e, t, n) {
                    var a, i, r, s, o, d = G.isArray(t) ? t : [t],
                        l = d.length;
                    if (!G.isObject(e)) return e;
                    for (a = (n = n || {}).merger || G._merger, i = 0; i < l; ++i)
                        if (t = d[i], G.isObject(t))
                            for (r = Object.keys(t), o = 0, s = r.length; o < s; ++o) a(r[o], e, t, n);
                    return e
                },
                mergeIf: function(e, t) { return G.merge(e, t, { merger: G._mergerIf }) },
                extend: function(e) { for (var t = function(t, n) { e[n] = t }, n = 1, a = arguments.length; n < a; ++n) G.each(arguments[n], t); return e },
                inherits: function(e) {
                    var t = this,
                        n = e && e.hasOwnProperty("constructor") ? e.constructor : function() { return t.apply(this, arguments) },
                        a = function() { this.constructor = n };
                    return a.prototype = t.prototype, n.prototype = new a, n.extend = G.inherits, e && G.extend(n.prototype, e), n.__super__ = t.prototype, n
                }
            },
            q = G;
        G.callCallback = G.callback, G.indexOf = function(e, t, n) { return Array.prototype.indexOf.call(e, t, n) }, G.getValueOrDefault = G.valueOrDefault, G.getValueAtIndexOrDefault = G.valueAtIndexOrDefault;
        var K = {
                linear: function(e) { return e },
                easeInQuad: function(e) { return e * e },
                easeOutQuad: function(e) { return -e * (e - 2) },
                easeInOutQuad: function(e) { return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1) },
                easeInCubic: function(e) { return e * e * e },
                easeOutCubic: function(e) { return (e -= 1) * e * e + 1 },
                easeInOutCubic: function(e) { return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2) },
                easeInQuart: function(e) { return e * e * e * e },
                easeOutQuart: function(e) { return -((e -= 1) * e * e * e - 1) },
                easeInOutQuart: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2) },
                easeInQuint: function(e) { return e * e * e * e * e },
                easeOutQuint: function(e) { return (e -= 1) * e * e * e * e + 1 },
                easeInOutQuint: function(e) { return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2) },
                easeInSine: function(e) { return 1 - Math.cos(e * (Math.PI / 2)) },
                easeOutSine: function(e) { return Math.sin(e * (Math.PI / 2)) },
                easeInOutSine: function(e) { return -.5 * (Math.cos(Math.PI * e) - 1) },
                easeInExpo: function(e) { return 0 === e ? 0 : Math.pow(2, 10 * (e - 1)) },
                easeOutExpo: function(e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e) },
                easeInOutExpo: function(e) { return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e)) },
                easeInCirc: function(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1) },
                easeOutCirc: function(e) { return Math.sqrt(1 - (e -= 1) * e) },
                easeInOutCirc: function(e) { return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1) },
                easeInElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
                },
                easeOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
                },
                easeInOutElastic: function(e) {
                    var t = 1.70158,
                        n = 0,
                        a = 1;
                    return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
                },
                easeInBack: function(e) { var t = 1.70158; return e * e * ((t + 1) * e - t) },
                easeOutBack: function(e) { var t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1 },
                easeInOutBack: function(e) { var t = 1.70158; return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2) },
                easeInBounce: function(e) { return 1 - K.easeOutBounce(1 - e) },
                easeOutBounce: function(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375 },
                easeInOutBounce: function(e) { return e < .5 ? .5 * K.easeInBounce(2 * e) : .5 * K.easeOutBounce(2 * e - 1) + .5 }
            },
            Z = { effects: K };
        q.easingEffects = K;
        var Q = Math.PI,
            X = Q / 180,
            ee = 2 * Q,
            te = Q / 2,
            ne = Q / 4,
            ae = 2 * Q / 3,
            ie = {
                clear: function(e) { e.ctx.clearRect(0, 0, e.width, e.height) },
                roundedRect: function(e, t, n, a, i, r) {
                    if (r) {
                        var s = Math.min(r, i / 2, a / 2),
                            o = t + s,
                            d = n + s,
                            l = t + a - s,
                            u = n + i - s;
                        e.moveTo(t, d), o < l && d < u ? (e.arc(o, d, s, -Q, -te), e.arc(l, d, s, -te, 0), e.arc(l, u, s, 0, te), e.arc(o, u, s, te, Q)) : o < l ? (e.moveTo(o, n), e.arc(l, d, s, -te, te), e.arc(o, d, s, te, Q + te)) : d < u ? (e.arc(o, d, s, -Q, 0), e.arc(o, u, s, 0, Q)) : e.arc(o, d, s, -Q, Q), e.closePath(), e.moveTo(t, n)
                    } else e.rect(t, n, a, i)
                },
                drawPoint: function(e, t, n, a, i, r) {
                    var s, o, d, l, u, c = (r || 0) * X;
                    if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (s = t.toString()) && "[object HTMLCanvasElement]" !== s) {
                        if (!(isNaN(n) || n <= 0)) {
                            switch (e.beginPath(), t) {
                                default: e.arc(a, i, n, 0, ee),
                                e.closePath();
                                break;
                                case "triangle":
                                        e.moveTo(a + Math.sin(c) * n, i - Math.cos(c) * n),
                                    c += ae,
                                    e.lineTo(a + Math.sin(c) * n, i - Math.cos(c) * n),
                                    c += ae,
                                    e.lineTo(a + Math.sin(c) * n, i - Math.cos(c) * n),
                                    e.closePath();
                                    break;
                                case "rectRounded":
                                        l = n - (u = .516 * n),
                                    o = Math.cos(c + ne) * l,
                                    d = Math.sin(c + ne) * l,
                                    e.arc(a - o, i - d, u, c - Q, c - te),
                                    e.arc(a + d, i - o, u, c - te, c),
                                    e.arc(a + o, i + d, u, c, c + te),
                                    e.arc(a - d, i + o, u, c + te, c + Q),
                                    e.closePath();
                                    break;
                                case "rect":
                                        if (!r) { l = Math.SQRT1_2 * n, e.rect(a - l, i - l, 2 * l, 2 * l); break }c += ne;
                                case "rectRot":
                                        o = Math.cos(c) * n,
                                    d = Math.sin(c) * n,
                                    e.moveTo(a - o, i - d),
                                    e.lineTo(a + d, i - o),
                                    e.lineTo(a + o, i + d),
                                    e.lineTo(a - d, i + o),
                                    e.closePath();
                                    break;
                                case "crossRot":
                                        c += ne;
                                case "cross":
                                        o = Math.cos(c) * n,
                                    d = Math.sin(c) * n,
                                    e.moveTo(a - o, i - d),
                                    e.lineTo(a + o, i + d),
                                    e.moveTo(a + d, i - o),
                                    e.lineTo(a - d, i + o);
                                    break;
                                case "star":
                                        o = Math.cos(c) * n,
                                    d = Math.sin(c) * n,
                                    e.moveTo(a - o, i - d),
                                    e.lineTo(a + o, i + d),
                                    e.moveTo(a + d, i - o),
                                    e.lineTo(a - d, i + o),
                                    c += ne,
                                    o = Math.cos(c) * n,
                                    d = Math.sin(c) * n,
                                    e.moveTo(a - o, i - d),
                                    e.lineTo(a + o, i + d),
                                    e.moveTo(a + d, i - o),
                                    e.lineTo(a - d, i + o);
                                    break;
                                case "line":
                                        o = Math.cos(c) * n,
                                    d = Math.sin(c) * n,
                                    e.moveTo(a - o, i - d),
                                    e.lineTo(a + o, i + d);
                                    break;
                                case "dash":
                                        e.moveTo(a, i),
                                    e.lineTo(a + Math.cos(c) * n, i + Math.sin(c) * n)
                            }
                            e.fill(), e.stroke()
                        }
                    } else e.drawImage(t, a - t.width / 2, i - t.height / 2, t.width, t.height)
                },
                _isPointInArea: function(e, t) { return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6 },
                clipArea: function(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip() },
                unclipArea: function(e) { e.restore() },
                lineTo: function(e, t, n, a) {
                    var i = n.steppedLine;
                    if (i) {
                        if ("middle" === i) {
                            var r = (t.x + n.x) / 2;
                            e.lineTo(r, a ? n.y : t.y), e.lineTo(r, a ? t.y : n.y)
                        } else "after" === i && !a || "after" !== i && a ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
                        e.lineTo(n.x, n.y)
                    } else n.tension ? e.bezierCurveTo(a ? t.controlPointPreviousX : t.controlPointNextX, a ? t.controlPointPreviousY : t.controlPointNextY, a ? n.controlPointNextX : n.controlPointPreviousX, a ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
                }
            },
            re = ie;
        q.clear = ie.clear, q.drawRoundedRectangle = function(e) { e.beginPath(), ie.roundedRect.apply(ie, arguments) };
        var se = { _set: function(e, t) { return q.merge(this[e] || (this[e] = {}), t) } };
        se._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 });
        var oe = se,
            de = q.valueOrDefault,
            le = {
                toLineHeight: function(e, t) {
                    var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!n || "normal" === n[1]) return 1.2 * t;
                    switch (e = +n[2], n[3]) {
                        case "px":
                            return e;
                        case "%":
                            e /= 100
                    }
                    return t * e
                },
                toPadding: function(e) { var t, n, a, i; return q.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, a = +e.bottom || 0, i = +e.left || 0) : t = n = a = i = +e || 0, { top: t, right: n, bottom: a, left: i, height: t + a, width: i + n } },
                _parseFont: function(e) {
                    var t = oe.global,
                        n = de(e.fontSize, t.defaultFontSize),
                        a = { family: de(e.fontFamily, t.defaultFontFamily), lineHeight: q.options.toLineHeight(de(e.lineHeight, t.defaultLineHeight), n), size: n, style: de(e.fontStyle, t.defaultFontStyle), weight: null, string: "" };
                    return a.string = function(e) { return !e || q.isNullOrUndef(e.size) || q.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family }(a), a
                },
                resolve: function(e, t, n) {
                    var a, i, r;
                    for (a = 0, i = e.length; a < i; ++a)
                        if (void 0 !== (r = e[a]) && (void 0 !== t && "function" == typeof r && (r = r(t)), void 0 !== n && q.isArray(r) && (r = r[n]), void 0 !== r)) return r
                }
            },
            ue = q,
            ce = Z,
            me = re,
            he = le;
        ue.easing = ce, ue.canvas = me, ue.options = he;
        var _e = function(e) { ue.extend(this, e), this.initialize.apply(this, arguments) };
        ue.extend(_e.prototype, {
            initialize: function() { this.hidden = !1 },
            pivot: function() { var e = this; return e._view || (e._view = ue.clone(e._model)), e._start = {}, e },
            transition: function(e) {
                var t = this,
                    n = t._model,
                    a = t._start,
                    i = t._view;
                return n && 1 !== e ? (i || (i = t._view = {}), a || (a = t._start = {}), function(e, t, n, a) {
                    var i, r, s, o, d, l, u, c, m, h = Object.keys(n);
                    for (i = 0, r = h.length; i < r; ++i)
                        if (s = h[i], l = n[s], t.hasOwnProperty(s) || (t[s] = l), (o = t[s]) !== l && "_" !== s[0]) {
                            if (e.hasOwnProperty(s) || (e[s] = o), d = e[s], (u = typeof l) == typeof d)
                                if ("string" === u) { if ((c = J(d)).valid && (m = J(l)).valid) { t[s] = m.mix(c, a).rgbString(); continue } } else if (ue.isFinite(d) && ue.isFinite(l)) { t[s] = d + (l - d) * a; continue }
                            t[s] = l
                        }
                }(a, i, n, e), t) : (t._view = n, t._start = null, t)
            },
            tooltipPosition: function() { return { x: this._model.x, y: this._model.y } },
            hasValue: function() { return ue.isNumber(this._model.x) && ue.isNumber(this._model.y) }
        }), _e.extend = ue.inherits;
        var fe = _e,
            pe = fe.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
            ve = pe;
        Object.defineProperty(pe.prototype, "animationObject", { get: function() { return this } }), Object.defineProperty(pe.prototype, "chartInstance", { get: function() { return this.chart }, set: function(e) { this.chart = e } }), oe._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: ue.noop, onComplete: ue.noop } });
        var ge = {
                animations: [],
                request: null,
                addAnimation: function(e, t, n, a) {
                    var i, r, s = this.animations;
                    for (t.chart = e, t.startTime = Date.now(), t.duration = n, a || (e.animating = !0), i = 0, r = s.length; i < r; ++i)
                        if (s[i].chart === e) return void(s[i] = t);
                    s.push(t), 1 === s.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(e) { var t = ue.findIndex(this.animations, function(t) { return t.chart === e }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1) },
                requestAnimationFrame: function() {
                    var e = this;
                    null === e.request && (e.request = ue.requestAnimFrame.call(window, function() { e.request = null, e.startDigest() }))
                },
                startDigest: function() { this.advance(), this.animations.length > 0 && this.requestAnimationFrame() },
                advance: function() { for (var e, t, n, a, i = this.animations, r = 0; r < i.length;) e = i[r], t = e.chart, n = e.numSteps, a = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(a, n), ue.callback(e.render, [t, e], t), ue.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (ue.callback(e.onAnimationComplete, [e], t), t.animating = !1, i.splice(r, 1)) : ++r }
            },
            ye = ue.options.resolve,
            Me = ["push", "pop", "shift", "splice", "unshift"];

        function be(e, t) {
            var n = e._chartjs;
            if (n) {
                var a = n.listeners,
                    i = a.indexOf(t); - 1 !== i && a.splice(i, 1), a.length > 0 || (Me.forEach(function(t) { delete e[t] }), delete e._chartjs)
            }
        }
        var Le = function(e, t) { this.initialize(e, t) };
        ue.extend(Le.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function(e, t) { this.chart = e, this.index = t, this.linkScales(), this.addElements() },
            updateIndex: function(e) { this.index = e },
            linkScales: function() {
                var e = this,
                    t = e.getMeta(),
                    n = e.getDataset();
                null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = n.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = n.yAxisID || e.chart.options.scales.yAxes[0].id)
            },
            getDataset: function() { return this.chart.data.datasets[this.index] },
            getMeta: function() { return this.chart.getDatasetMeta(this.index) },
            getScaleForId: function(e) { return this.chart.scales[e] },
            _getValueScaleId: function() { return this.getMeta().yAxisID },
            _getIndexScaleId: function() { return this.getMeta().xAxisID },
            _getValueScale: function() { return this.getScaleForId(this._getValueScaleId()) },
            _getIndexScale: function() { return this.getScaleForId(this._getIndexScaleId()) },
            reset: function() { this.update(!0) },
            destroy: function() { this._data && be(this._data, this) },
            createMetaDataset: function() { var e = this.datasetElementType; return e && new e({ _chart: this.chart, _datasetIndex: this.index }) },
            createMetaData: function(e) { var t = this.dataElementType; return t && new t({ _chart: this.chart, _datasetIndex: this.index, _index: e }) },
            addElements: function() {
                var e, t, n = this.getMeta(),
                    a = this.getDataset().data || [],
                    i = n.data;
                for (e = 0, t = a.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
                n.dataset = n.dataset || this.createMetaDataset()
            },
            addElementAndReset: function(e) {
                var t = this.createMetaData(e);
                this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
            },
            buildOrUpdateElements: function() {
                var e, t, n = this,
                    a = n.getDataset(),
                    i = a.data || (a.data = []);
                n._data !== i && (n._data && be(n._data, n), i && Object.isExtensible(i) && (t = n, (e = i)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }), Me.forEach(function(t) {
                    var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                        a = e[t];
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var t = Array.prototype.slice.call(arguments),
                                i = a.apply(this, t);
                            return ue.each(e._chartjs.listeners, function(e) { "function" == typeof e[n] && e[n].apply(e, t) }), i
                        }
                    })
                }))), n._data = i), n.resyncElements()
            },
            update: ue.noop,
            transition: function(e) {
                for (var t = this.getMeta(), n = t.data || [], a = n.length, i = 0; i < a; ++i) n[i].transition(e);
                t.dataset && t.dataset.transition(e)
            },
            draw: function() {
                var e = this.getMeta(),
                    t = e.data || [],
                    n = t.length,
                    a = 0;
                for (e.dataset && e.dataset.draw(); a < n; ++a) t[a].draw()
            },
            removeHoverStyle: function(e) { ue.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle },
            setHoverStyle: function(e) {
                var t = this.chart.data.datasets[e._datasetIndex],
                    n = e._index,
                    a = e.custom || {},
                    i = e._model,
                    r = ue.getHoverColor;
                e.$previousStyle = { backgroundColor: i.backgroundColor, borderColor: i.borderColor, borderWidth: i.borderWidth }, i.backgroundColor = ye([a.hoverBackgroundColor, t.hoverBackgroundColor, r(i.backgroundColor)], void 0, n), i.borderColor = ye([a.hoverBorderColor, t.hoverBorderColor, r(i.borderColor)], void 0, n), i.borderWidth = ye([a.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth], void 0, n)
            },
            resyncElements: function() {
                var e = this.getMeta(),
                    t = this.getDataset().data,
                    n = e.data.length,
                    a = t.length;
                a < n ? e.data.splice(a, n - a) : a > n && this.insertElements(n, a - n)
            },
            insertElements: function(e, t) { for (var n = 0; n < t; ++n) this.addElementAndReset(e + n) },
            onDataPush: function() {
                var e = arguments.length;
                this.insertElements(this.getDataset().data.length - e, e)
            },
            onDataPop: function() { this.getMeta().data.pop() },
            onDataShift: function() { this.getMeta().data.shift() },
            onDataSplice: function(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2) },
            onDataUnshift: function() { this.insertElements(0, arguments.length) }
        }), Le.extend = ue.inherits;
        var ke = Le;
        oe._set("global", { elements: { arc: { backgroundColor: oe.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } });
        var we = fe.extend({
                inLabelRange: function(e) { var t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2) },
                inRange: function(e, t) {
                    var n = this._view;
                    if (n) {
                        for (var a = ue.getAngleFromPoint(n, { x: e, y: t }), i = a.angle, r = a.distance, s = n.startAngle, o = n.endAngle; o < s;) o += 2 * Math.PI;
                        for (; i > o;) i -= 2 * Math.PI;
                        for (; i < s;) i += 2 * Math.PI;
                        var d = i >= s && i <= o,
                            l = r >= n.innerRadius && r <= n.outerRadius;
                        return d && l
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var e = this._view,
                        t = (e.startAngle + e.endAngle) / 2,
                        n = (e.innerRadius + e.outerRadius) / 2;
                    return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n }
                },
                getArea: function() { var e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)) },
                tooltipPosition: function() {
                    var e = this._view,
                        t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                        n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n }
                },
                draw: function() {
                    var e, t = this._chart.ctx,
                        n = this._view,
                        a = n.startAngle,
                        i = n.endAngle,
                        r = "inner" === n.borderAlign ? .33 : 0;
                    t.save(), t.beginPath(), t.arc(n.x, n.y, Math.max(n.outerRadius - r, 0), a, i), t.arc(n.x, n.y, n.innerRadius, i, a, !0), t.closePath(), t.fillStyle = n.backgroundColor, t.fill(), n.borderWidth && ("inner" === n.borderAlign ? (t.beginPath(), e = r / n.outerRadius, t.arc(n.x, n.y, n.outerRadius, a - e, i + e), n.innerRadius > r ? (e = r / n.innerRadius, t.arc(n.x, n.y, n.innerRadius - r, i + e, a - e, !0)) : t.arc(n.x, n.y, r, i + Math.PI / 2, a - Math.PI / 2), t.closePath(), t.clip(), t.beginPath(), t.arc(n.x, n.y, n.outerRadius, a, i), t.arc(n.x, n.y, n.innerRadius, i, a, !0), t.closePath(), t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), t.strokeStyle = n.borderColor, t.stroke()), t.restore()
                }
            }),
            Ye = ue.valueOrDefault,
            De = oe.global.defaultColor;
        oe._set("global", { elements: { line: { tension: .4, backgroundColor: De, borderWidth: 3, borderColor: De, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } });
        var Te = fe.extend({
                draw: function() {
                    var e, t, n, a, i = this._view,
                        r = this._chart.ctx,
                        s = i.spanGaps,
                        o = this._children.slice(),
                        d = oe.global,
                        l = d.elements.line,
                        u = -1;
                    for (this._loop && o.length && o.push(o[0]), r.save(), r.lineCap = i.borderCapStyle || l.borderCapStyle, r.setLineDash && r.setLineDash(i.borderDash || l.borderDash), r.lineDashOffset = Ye(i.borderDashOffset, l.borderDashOffset), r.lineJoin = i.borderJoinStyle || l.borderJoinStyle, r.lineWidth = Ye(i.borderWidth, l.borderWidth), r.strokeStyle = i.borderColor || d.defaultColor, r.beginPath(), u = -1, e = 0; e < o.length; ++e) t = o[e], n = ue.previousItem(o, e), a = t._view, 0 === e ? a.skip || (r.moveTo(a.x, a.y), u = e) : (n = -1 === u ? n : o[u], a.skip || (u !== e - 1 && !s || -1 === u ? r.moveTo(a.x, a.y) : ue.canvas.lineTo(r, n._view, t._view), u = e));
                    r.stroke(), r.restore()
                }
            }),
            xe = ue.valueOrDefault,
            Se = oe.global.defaultColor;

        function Ce(e) { var t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius }
        oe._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: Se, borderColor: Se, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } });
        var He = fe.extend({
                inRange: function(e, t) { var n = this._view; return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) },
                inLabelRange: Ce,
                inXRange: Ce,
                inYRange: function(e) { var t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius },
                getCenterPoint: function() { var e = this._view; return { x: e.x, y: e.y } },
                getArea: function() { return Math.PI * Math.pow(this._view.radius, 2) },
                tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth } },
                draw: function(e) {
                    var t = this._view,
                        n = this._chart.ctx,
                        a = t.pointStyle,
                        i = t.rotation,
                        r = t.radius,
                        s = t.x,
                        o = t.y,
                        d = oe.global,
                        l = d.defaultColor;
                    t.skip || (void 0 === e || ue.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || l, n.lineWidth = xe(t.borderWidth, d.elements.point.borderWidth), n.fillStyle = t.backgroundColor || l, ue.canvas.drawPoint(n, a, r, s, o, i))
                }
            }),
            Ae = oe.global.defaultColor;

        function Oe(e) { return e && void 0 !== e.width }

        function Pe(e) { var t, n, a, i, r; return Oe(e) ? (r = e.width / 2, t = e.x - r, n = e.x + r, a = Math.min(e.y, e.base), i = Math.max(e.y, e.base)) : (r = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), a = e.y - r, i = e.y + r), { left: t, top: a, right: n, bottom: i } }

        function je(e, t, n) { return e === t ? n : e === n ? t : e }

        function Ee(e, t, n) {
            var a, i, r, s, o = e.borderWidth,
                d = function(e) {
                    var t = e.borderSkipped,
                        n = {};
                    return t ? (e.horizontal ? e.base > e.x && (t = je(t, "left", "right")) : e.base < e.y && (t = je(t, "bottom", "top")), n[t] = !0, n) : n
                }(e);
            return ue.isObject(o) ? (a = +o.top || 0, i = +o.right || 0, r = +o.bottom || 0, s = +o.left || 0) : a = i = r = s = +o || 0, { t: d.top || a < 0 ? 0 : a > n ? n : a, r: d.right || i < 0 ? 0 : i > t ? t : i, b: d.bottom || r < 0 ? 0 : r > n ? n : r, l: d.left || s < 0 ? 0 : s > t ? t : s }
        }

        function Fe(e, t, n) {
            var a = null === t,
                i = null === n,
                r = !(!e || a && i) && Pe(e);
            return r && (a || t >= r.left && t <= r.right) && (i || n >= r.top && n <= r.bottom)
        }
        oe._set("global", { elements: { rectangle: { backgroundColor: Ae, borderColor: Ae, borderSkipped: "bottom", borderWidth: 0 } } });
        var Ie = fe.extend({
                draw: function() {
                    var e = this._chart.ctx,
                        t = this._view,
                        n = function(e) {
                            var t = Pe(e),
                                n = t.right - t.left,
                                a = t.bottom - t.top,
                                i = Ee(e, n / 2, a / 2);
                            return { outer: { x: t.left, y: t.top, w: n, h: a }, inner: { x: t.left + i.l, y: t.top + i.t, w: n - i.l - i.r, h: a - i.t - i.b } }
                        }(t),
                        a = n.outer,
                        i = n.inner;
                    e.fillStyle = t.backgroundColor, e.fillRect(a.x, a.y, a.w, a.h), a.w === i.w && a.h === i.h || (e.save(), e.beginPath(), e.rect(a.x, a.y, a.w, a.h), e.clip(), e.fillStyle = t.borderColor, e.rect(i.x, i.y, i.w, i.h), e.fill("evenodd"), e.restore())
                },
                height: function() { var e = this._view; return e.base - e.y },
                inRange: function(e, t) { return Fe(this._view, e, t) },
                inLabelRange: function(e, t) { var n = this._view; return Oe(n) ? Fe(n, e, null) : Fe(n, null, t) },
                inXRange: function(e) { return Fe(this._view, e, null) },
                inYRange: function(e) { return Fe(this._view, null, e) },
                getCenterPoint: function() { var e, t, n = this._view; return Oe(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), { x: e, y: t } },
                getArea: function() { var e = this._view; return Oe(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base) },
                tooltipPosition: function() { var e = this._view; return { x: e.x, y: e.y } }
            }),
            We = {},
            Re = we,
            ze = Te,
            Ne = He,
            Be = Ie;
        We.Arc = Re, We.Line = ze, We.Point = Ne, We.Rectangle = Be;
        var $e = ue.options.resolve;
        oe._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } });
        var Ve = ke.extend({
                dataElementType: We.Rectangle,
                initialize: function() {
                    var e, t = this;
                    ke.prototype.initialize.apply(t, arguments), (e = t.getMeta()).stack = t.getDataset().stack, e.bar = !0
                },
                update: function(e) { var t, n, a = this.getMeta().data; for (this._ruler = this.getRuler(), t = 0, n = a.length; t < n; ++t) this.updateElement(a[t], t, e) },
                updateElement: function(e, t, n) {
                    var a = this,
                        i = a.getMeta(),
                        r = a.getDataset(),
                        s = a._resolveElementOptions(e, t);
                    e._xScale = a.getScaleForId(i.xAxisID), e._yScale = a.getScaleForId(i.yAxisID), e._datasetIndex = a.index, e._index = t, e._model = { backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderSkipped: s.borderSkipped, borderWidth: s.borderWidth, datasetLabel: r.label, label: a.chart.data.labels[t] }, a._updateElementGeometry(e, t, n), e.pivot()
                },
                _updateElementGeometry: function(e, t, n) {
                    var a = this,
                        i = e._model,
                        r = a._getValueScale(),
                        s = r.getBasePixel(),
                        o = r.isHorizontal(),
                        d = a._ruler || a.getRuler(),
                        l = a.calculateBarValuePixels(a.index, t),
                        u = a.calculateBarIndexPixels(a.index, t, d);
                    i.horizontal = o, i.base = n ? s : l.base, i.x = o ? n ? s : l.head : u.center, i.y = o ? u.center : n ? s : l.head, i.height = o ? u.size : void 0, i.width = o ? void 0 : u.size
                },
                _getStacks: function(e) {
                    var t, n, a = this.chart,
                        i = this._getIndexScale(),
                        r = i.options.stacked,
                        s = void 0 === e ? a.data.datasets.length : e + 1,
                        o = [];
                    for (t = 0; t < s; ++t)(n = a.getDatasetMeta(t)).bar && a.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === o.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack);
                    return o
                },
                getStackCount: function() { return this._getStacks().length },
                getStackIndex: function(e, t) {
                    var n = this._getStacks(e),
                        a = void 0 !== t ? n.indexOf(t) : -1;
                    return -1 === a ? n.length - 1 : a
                },
                getRuler: function() {
                    var e, t, n = this._getIndexScale(),
                        a = this.getStackCount(),
                        i = this.index,
                        r = n.isHorizontal(),
                        s = r ? n.left : n.top,
                        o = s + (r ? n.width : n.height),
                        d = [];
                    for (e = 0, t = this.getMeta().data.length; e < t; ++e) d.push(n.getPixelForValue(null, e, i));
                    return {
                        min: ue.isNullOrUndef(n.options.barThickness) ? function(e, t) {
                            var n, a, i, r, s = e.isHorizontal() ? e.width : e.height,
                                o = e.getTicks();
                            for (i = 1, r = t.length; i < r; ++i) s = Math.min(s, Math.abs(t[i] - t[i - 1]));
                            for (i = 0, r = o.length; i < r; ++i) a = e.getPixelForTick(i), s = i > 0 ? Math.min(s, a - n) : s, n = a;
                            return s
                        }(n, d) : -1,
                        pixels: d,
                        start: s,
                        end: o,
                        stackCount: a,
                        scale: n
                    }
                },
                calculateBarValuePixels: function(e, t) {
                    var n, a, i, r, s, o, d = this.chart,
                        l = this.getMeta(),
                        u = this._getValueScale(),
                        c = u.isHorizontal(),
                        m = d.data.datasets,
                        h = +u.getRightValue(m[e].data[t]),
                        _ = u.options.minBarLength,
                        f = u.options.stacked,
                        p = l.stack,
                        v = 0;
                    if (f || void 0 === f && void 0 !== p)
                        for (n = 0; n < e; ++n)(a = d.getDatasetMeta(n)).bar && a.stack === p && a.controller._getValueScaleId() === u.id && d.isDatasetVisible(n) && (i = +u.getRightValue(m[n].data[t]), (h < 0 && i < 0 || h >= 0 && i > 0) && (v += i));
                    return r = u.getPixelForValue(v), s = u.getPixelForValue(v + h), o = s - r, void 0 !== _ && Math.abs(o) < _ && (o = _, s = h >= 0 && !c || h < 0 && c ? r - _ : r + _), { size: o, base: r, head: s, center: s + o / 2 }
                },
                calculateBarIndexPixels: function(e, t, n) {
                    var a = n.scale.options,
                        i = "flex" === a.barThickness ? function(e, t, n) {
                            var a, i = t.pixels,
                                r = i[e],
                                s = e > 0 ? i[e - 1] : null,
                                o = e < i.length - 1 ? i[e + 1] : null,
                                d = n.categoryPercentage;
                            return null === s && (s = r - (null === o ? t.end - t.start : o - r)), null === o && (o = r + r - s), a = r - (r - Math.min(s, o)) / 2 * d, { chunk: Math.abs(o - s) / 2 * d / t.stackCount, ratio: n.barPercentage, start: a }
                        }(t, n, a) : function(e, t, n) {
                            var a, i, r = n.barThickness,
                                s = t.stackCount,
                                o = t.pixels[e];
                            return ue.isNullOrUndef(r) ? (a = t.min * n.categoryPercentage, i = n.barPercentage) : (a = r * s, i = 1), { chunk: a / s, ratio: i, start: o - a / 2 }
                        }(t, n, a),
                        r = this.getStackIndex(e, this.getMeta().stack),
                        s = i.start + i.chunk * r + i.chunk / 2,
                        o = Math.min(ue.valueOrDefault(a.maxBarThickness, 1 / 0), i.chunk * i.ratio);
                    return { base: s - o / 2, head: s + o / 2, center: s, size: o }
                },
                draw: function() {
                    var e = this.chart,
                        t = this._getValueScale(),
                        n = this.getMeta().data,
                        a = this.getDataset(),
                        i = n.length,
                        r = 0;
                    for (ue.canvas.clipArea(e.ctx, e.chartArea); r < i; ++r) isNaN(t.getRightValue(a.data[r])) || n[r].draw();
                    ue.canvas.unclipArea(e.ctx)
                },
                _resolveElementOptions: function(e, t) {
                    var n, a, i, r = this.chart,
                        s = r.data.datasets,
                        o = s[this.index],
                        d = e.custom || {},
                        l = r.options.elements.rectangle,
                        u = {},
                        c = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                        m = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];
                    for (n = 0, a = m.length; n < a; ++n) u[i = m[n]] = $e([d[i], o[i], l[i]], c, t);
                    return u
                }
            }),
            Ue = ue.valueOrDefault,
            Je = ue.options.resolve;
        oe._set("bubble", {
            hover: { mode: "single" },
            scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] },
            tooltips: {
                callbacks: {
                    title: function() { return "" },
                    label: function(e, t) {
                        var n = t.datasets[e.datasetIndex].label || "",
                            a = t.datasets[e.datasetIndex].data[e.index];
                        return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")"
                    }
                }
            }
        });
        var Ge = ke.extend({
                dataElementType: We.Point,
                update: function(e) {
                    var t = this,
                        n = t.getMeta(),
                        a = n.data;
                    ue.each(a, function(n, a) { t.updateElement(n, a, e) })
                },
                updateElement: function(e, t, n) {
                    var a = this,
                        i = a.getMeta(),
                        r = e.custom || {},
                        s = a.getScaleForId(i.xAxisID),
                        o = a.getScaleForId(i.yAxisID),
                        d = a._resolveElementOptions(e, t),
                        l = a.getDataset().data[t],
                        u = a.index,
                        c = n ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u),
                        m = n ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                    e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = { backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, hitRadius: d.hitRadius, pointStyle: d.pointStyle, rotation: d.rotation, radius: n ? 0 : d.radius, skip: r.skip || isNaN(c) || isNaN(m), x: c, y: m }, e.pivot()
                },
                setHoverStyle: function(e) {
                    var t = e._model,
                        n = e._options,
                        a = ue.getHoverColor;
                    e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Ue(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ue(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ue(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
                },
                _resolveElementOptions: function(e, t) {
                    var n, a, i, r = this.chart,
                        s = r.data.datasets,
                        o = s[this.index],
                        d = e.custom || {},
                        l = r.options.elements.point,
                        u = o.data[t],
                        c = {},
                        m = { chart: r, dataIndex: t, dataset: o, datasetIndex: this.index },
                        h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                    for (n = 0, a = h.length; n < a; ++n) c[i = h[n]] = Je([d[i], o[i], l[i]], m, t);
                    return c.radius = Je([d.radius, u ? u.r : void 0, o.radius, l.radius], m, t), c
                }
            }),
            qe = ue.options.resolve,
            Ke = ue.valueOrDefault;
        oe._set("doughnut", {
            animation: { animateRotate: !0, animateScale: !1 },
            hover: { mode: "single" },
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                var n = e.data,
                    a = n.datasets,
                    i = n.labels;
                if (a.length)
                    for (var r = 0; r < a[0].data.length; ++r) t.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) {
                            var i = e.getDatasetMeta(0),
                                r = t.datasets[0],
                                s = i.data[a],
                                o = s && s.custom || {},
                                d = e.options.elements.arc,
                                l = qe([o.backgroundColor, r.backgroundColor, d.backgroundColor], void 0, a),
                                u = qe([o.borderColor, r.borderColor, d.borderColor], void 0, a),
                                c = qe([o.borderWidth, r.borderWidth, d.borderWidth], void 0, a);
                            return { text: n, fillStyle: l, strokeStyle: u, lineWidth: c, hidden: isNaN(r.data[a]) || i.data[a].hidden, index: a }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, i, r = t.index,
                        s = this.chart;
                    for (n = 0, a = (s.data.datasets || []).length; n < a; ++n)(i = s.getDatasetMeta(n)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
                    s.update()
                }
            },
            cutoutPercentage: 50,
            rotation: -.5 * Math.PI,
            circumference: 2 * Math.PI,
            tooltips: {
                callbacks: {
                    title: function() { return "" },
                    label: function(e, t) {
                        var n = t.labels[e.index],
                            a = ": " + t.datasets[e.datasetIndex].data[e.index];
                        return ue.isArray(n) ? (n = n.slice())[0] += a : n += a, n
                    }
                }
            }
        });
        var Ze = ke.extend({
            dataElementType: We.Arc,
            linkScales: ue.noop,
            getRingIndex: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t; return t },
            update: function(e) {
                var t, n, a = this,
                    i = a.chart,
                    r = i.chartArea,
                    s = i.options,
                    o = r.right - r.left,
                    d = r.bottom - r.top,
                    l = Math.min(o, d),
                    u = { x: 0, y: 0 },
                    c = a.getMeta(),
                    m = c.data,
                    h = s.cutoutPercentage,
                    _ = s.circumference,
                    f = a._getRingWeight(a.index);
                if (_ < 2 * Math.PI) {
                    var p = s.rotation % (2 * Math.PI),
                        v = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + _,
                        g = { x: Math.cos(p), y: Math.sin(p) },
                        y = { x: Math.cos(v), y: Math.sin(v) },
                        M = p <= 0 && v >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= v,
                        b = p <= .5 * Math.PI && .5 * Math.PI <= v || p <= 2.5 * Math.PI && 2.5 * Math.PI <= v,
                        L = p <= -Math.PI && -Math.PI <= v || p <= Math.PI && Math.PI <= v,
                        k = p <= .5 * -Math.PI && .5 * -Math.PI <= v || p <= 1.5 * Math.PI && 1.5 * Math.PI <= v,
                        w = h / 100,
                        Y = { x: L ? -1 : Math.min(g.x * (g.x < 0 ? 1 : w), y.x * (y.x < 0 ? 1 : w)), y: k ? -1 : Math.min(g.y * (g.y < 0 ? 1 : w), y.y * (y.y < 0 ? 1 : w)) },
                        D = { x: M ? 1 : Math.max(g.x * (g.x > 0 ? 1 : w), y.x * (y.x > 0 ? 1 : w)), y: b ? 1 : Math.max(g.y * (g.y > 0 ? 1 : w), y.y * (y.y > 0 ? 1 : w)) },
                        T = { width: .5 * (D.x - Y.x), height: .5 * (D.y - Y.y) };
                    l = Math.min(o / T.width, d / T.height), u = { x: -.5 * (D.x + Y.x), y: -.5 * (D.y + Y.y) }
                }
                for (t = 0, n = m.length; t < n; ++t) m[t]._options = a._resolveElementOptions(m[t], t);
                for (i.borderWidth = a.getMaxBorderWidth(), i.outerRadius = Math.max((l - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, c.total = a.calculateTotal(), a.outerRadius = i.outerRadius - i.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - i.radiusLength * f, 0), t = 0, n = m.length; t < n; ++t) a.updateElement(m[t], t, e)
            },
            updateElement: function(e, t, n) {
                var a = this,
                    i = a.chart,
                    r = i.chartArea,
                    s = i.options,
                    o = s.animation,
                    d = (r.left + r.right) / 2,
                    l = (r.top + r.bottom) / 2,
                    u = s.rotation,
                    c = s.rotation,
                    m = a.getDataset(),
                    h = n && o.animateRotate ? 0 : e.hidden ? 0 : a.calculateCircumference(m.data[t]) * (s.circumference / (2 * Math.PI)),
                    _ = n && o.animateScale ? 0 : a.innerRadius,
                    f = n && o.animateScale ? 0 : a.outerRadius,
                    p = e._options || {};
                ue.extend(e, { _datasetIndex: a.index, _index: t, _model: { backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, borderAlign: p.borderAlign, x: d + i.offsetX, y: l + i.offsetY, startAngle: u, endAngle: c, circumference: h, outerRadius: f, innerRadius: _, label: ue.valueAtIndexOrDefault(m.label, t, i.data.labels[t]) } });
                var v = e._model;
                n && o.animateRotate || (v.startAngle = 0 === t ? s.rotation : a.getMeta().data[t - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), e.pivot()
            },
            calculateTotal: function() {
                var e, t = this.getDataset(),
                    n = this.getMeta(),
                    a = 0;
                return ue.each(n.data, function(n, i) { e = t.data[i], isNaN(e) || n.hidden || (a += Math.abs(e)) }), a
            },
            calculateCircumference: function(e) { var t = this.getMeta().total; return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0 },
            getMaxBorderWidth: function(e) {
                var t, n, a, i, r, s, o, d, l = 0,
                    u = this.chart;
                if (!e)
                    for (t = 0, n = u.data.datasets.length; t < n; ++t)
                        if (u.isDatasetVisible(t)) { a = u.getDatasetMeta(t), e = a.data, t !== this.index && (r = a.controller); break }
                if (!e) return 0;
                for (t = 0, n = e.length; t < n; ++t) i = e[t], "inner" !== (s = r ? r._resolveElementOptions(i, t) : i._options).borderAlign && (o = s.borderWidth, d = s.hoverBorderWidth, l = d > (l = o > l ? o : l) ? d : l);
                return l
            },
            setHoverStyle: function(e) {
                var t = e._model,
                    n = e._options,
                    a = ue.getHoverColor;
                e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = Ke(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Ke(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Ke(n.hoverBorderWidth, n.borderWidth)
            },
            _resolveElementOptions: function(e, t) {
                var n, a, i, r = this.chart,
                    s = this.getDataset(),
                    o = e.custom || {},
                    d = r.options.elements.arc,
                    l = {},
                    u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
                    c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
                for (n = 0, a = c.length; n < a; ++n) l[i = c[n]] = qe([o[i], s[i], d[i]], u, t);
                return l
            },
            _getRingWeightOffset: function(e) { for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n)); return t },
            _getRingWeight: function(e) { return Math.max(Ke(this.chart.data.datasets[e].weight, 1), 0) },
            _getVisibleDatasetWeightTotal: function() { return this._getRingWeightOffset(this.chart.data.datasets.length) }
        });
        oe._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } });
        var Qe = Ve.extend({ _getValueScaleId: function() { return this.getMeta().xAxisID }, _getIndexScaleId: function() { return this.getMeta().yAxisID } }),
            Xe = ue.valueOrDefault,
            et = ue.options.resolve,
            tt = ue.canvas._isPointInArea;

        function nt(e, t) { return Xe(e.showLine, t.showLines) }
        oe._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } });
        var at = ke.extend({
                datasetElementType: We.Line,
                dataElementType: We.Point,
                update: function(e) {
                    var t, n, a = this,
                        i = a.getMeta(),
                        r = i.dataset,
                        s = i.data || [],
                        o = a.getScaleForId(i.yAxisID),
                        d = a.getDataset(),
                        l = nt(d, a.chart.options);
                    for (l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), r._scale = o, r._datasetIndex = a.index, r._children = s, r._model = a._resolveLineOptions(r), r.pivot()), t = 0, n = s.length; t < n; ++t) a.updateElement(s[t], t, e);
                    for (l && 0 !== r._model.tension && a.updateBezierControlPoints(), t = 0, n = s.length; t < n; ++t) s[t].pivot()
                },
                updateElement: function(e, t, n) {
                    var a, i, r = this,
                        s = r.getMeta(),
                        o = e.custom || {},
                        d = r.getDataset(),
                        l = r.index,
                        u = d.data[t],
                        c = r.getScaleForId(s.yAxisID),
                        m = r.getScaleForId(s.xAxisID),
                        h = s.dataset._model,
                        _ = r._resolvePointOptions(e, t);
                    a = m.getPixelForValue("object" == typeof u ? u : NaN, t, l), i = n ? c.getBasePixel() : r.calculatePointY(u, t, l), e._xScale = m, e._yScale = c, e._options = _, e._datasetIndex = l, e._index = t, e._model = { x: a, y: i, skip: o.skip || isNaN(a) || isNaN(i), radius: _.radius, pointStyle: _.pointStyle, rotation: _.rotation, backgroundColor: _.backgroundColor, borderColor: _.borderColor, borderWidth: _.borderWidth, tension: Xe(o.tension, h ? h.tension : 0), steppedLine: !!h && h.steppedLine, hitRadius: _.hitRadius }
                },
                _resolvePointOptions: function(e, t) {
                    var n, a, i, r = this.chart,
                        s = r.data.datasets[this.index],
                        o = e.custom || {},
                        d = r.options.elements.point,
                        l = {},
                        u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
                        c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                        m = Object.keys(c);
                    for (n = 0, a = m.length; n < a; ++n) i = m[n], l[i] = et([o[i], s[c[i]], s[i], d[i]], u, t);
                    return l
                },
                _resolveLineOptions: function(e) {
                    var t, n, a, i = this.chart,
                        r = i.data.datasets[this.index],
                        s = e.custom || {},
                        o = i.options,
                        d = o.elements.line,
                        l = {},
                        u = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];
                    for (t = 0, n = u.length; t < n; ++t) l[a = u[t]] = et([s[a], r[a], d[a]]);
                    return l.spanGaps = Xe(r.spanGaps, o.spanGaps), l.tension = Xe(r.lineTension, d.tension), l.steppedLine = et([s.steppedLine, r.steppedLine, d.stepped]), l
                },
                calculatePointY: function(e, t, n) {
                    var a, i, r, s = this.chart,
                        o = this.getMeta(),
                        d = this.getScaleForId(o.yAxisID),
                        l = 0,
                        u = 0;
                    if (d.options.stacked) {
                        for (a = 0; a < n; a++)
                            if (i = s.data.datasets[a], "line" === (r = s.getDatasetMeta(a)).type && r.yAxisID === d.id && s.isDatasetVisible(a)) {
                                var c = Number(d.getRightValue(i.data[t]));
                                c < 0 ? u += c || 0 : l += c || 0
                            }
                        var m = Number(d.getRightValue(e));
                        return m < 0 ? d.getPixelForValue(u + m) : d.getPixelForValue(l + m)
                    }
                    return d.getPixelForValue(e)
                },
                updateBezierControlPoints: function() {
                    var e, t, n, a, i = this.chart,
                        r = this.getMeta(),
                        s = r.dataset._model,
                        o = i.chartArea,
                        d = r.data || [];

                    function l(e, t, n) { return Math.max(Math.min(e, n), t) }
                    if (s.spanGaps && (d = d.filter(function(e) { return !e._model.skip })), "monotone" === s.cubicInterpolationMode) ue.splineCurveMonotone(d);
                    else
                        for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, a = ue.splineCurve(ue.previousItem(d, e)._model, n, ue.nextItem(d, e)._model, s.tension), n.controlPointPreviousX = a.previous.x, n.controlPointPreviousY = a.previous.y, n.controlPointNextX = a.next.x, n.controlPointNextY = a.next.y;
                    if (i.options.elements.line.capBezierPoints)
                        for (e = 0, t = d.length; e < t; ++e) n = d[e]._model, tt(n, o) && (e > 0 && tt(d[e - 1]._model, o) && (n.controlPointPreviousX = l(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = l(n.controlPointPreviousY, o.top, o.bottom)), e < d.length - 1 && tt(d[e + 1]._model, o) && (n.controlPointNextX = l(n.controlPointNextX, o.left, o.right), n.controlPointNextY = l(n.controlPointNextY, o.top, o.bottom)))
                },
                draw: function() {
                    var e, t = this.chart,
                        n = this.getMeta(),
                        a = n.data || [],
                        i = t.chartArea,
                        r = a.length,
                        s = 0;
                    for (nt(this.getDataset(), t.options) && (e = (n.dataset._model.borderWidth || 0) / 2, ue.canvas.clipArea(t.ctx, { left: i.left, right: i.right, top: i.top - e, bottom: i.bottom + e }), n.dataset.draw(), ue.canvas.unclipArea(t.ctx)); s < r; ++s) a[s].draw(i)
                },
                setHoverStyle: function(e) {
                    var t = e._model,
                        n = e._options,
                        a = ue.getHoverColor;
                    e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = Xe(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = Xe(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = Xe(n.hoverBorderWidth, n.borderWidth), t.radius = Xe(n.hoverRadius, n.radius)
                }
            }),
            it = ue.options.resolve;
        oe._set("polarArea", {
            scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } },
            animation: { animateRotate: !0, animateScale: !0 },
            startAngle: -.5 * Math.PI,
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                var n = e.data,
                    a = n.datasets,
                    i = n.labels;
                if (a.length)
                    for (var r = 0; r < a[0].data.length; ++r) t.push('<li><span style="background-color:' + a[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                return t.push("</ul>"), t.join("")
            },
            legend: {
                labels: {
                    generateLabels: function(e) {
                        var t = e.data;
                        return t.labels.length && t.datasets.length ? t.labels.map(function(n, a) {
                            var i = e.getDatasetMeta(0),
                                r = t.datasets[0],
                                s = i.data[a],
                                o = s.custom || {},
                                d = e.options.elements.arc,
                                l = it([o.backgroundColor, r.backgroundColor, d.backgroundColor], void 0, a),
                                u = it([o.borderColor, r.borderColor, d.borderColor], void 0, a),
                                c = it([o.borderWidth, r.borderWidth, d.borderWidth], void 0, a);
                            return { text: n, fillStyle: l, strokeStyle: u, lineWidth: c, hidden: isNaN(r.data[a]) || i.data[a].hidden, index: a }
                        }) : []
                    }
                },
                onClick: function(e, t) {
                    var n, a, i, r = t.index,
                        s = this.chart;
                    for (n = 0, a = (s.data.datasets || []).length; n < a; ++n)(i = s.getDatasetMeta(n)).data[r].hidden = !i.data[r].hidden;
                    s.update()
                }
            },
            tooltips: { callbacks: { title: function() { return "" }, label: function(e, t) { return t.labels[e.index] + ": " + e.yLabel } } }
        });
        var rt = ke.extend({
            dataElementType: We.Arc,
            linkScales: ue.noop,
            update: function(e) {
                var t, n, a, i = this,
                    r = i.getDataset(),
                    s = i.getMeta(),
                    o = i.chart.options.startAngle || 0,
                    d = i._starts = [],
                    l = i._angles = [],
                    u = s.data;
                for (i._updateRadius(), s.count = i.countVisibleElements(), t = 0, n = r.data.length; t < n; t++) d[t] = o, a = i._computeAngle(t), l[t] = a, o += a;
                for (t = 0, n = u.length; t < n; ++t) u[t]._options = i._resolveElementOptions(u[t], t), i.updateElement(u[t], t, e)
            },
            _updateRadius: function() {
                var e = this,
                    t = e.chart,
                    n = t.chartArea,
                    a = t.options,
                    i = Math.min(n.right - n.left, n.bottom - n.top);
                t.outerRadius = Math.max(i / 2, 0), t.innerRadius = Math.max(a.cutoutPercentage ? t.outerRadius / 100 * a.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
            },
            updateElement: function(e, t, n) {
                var a = this,
                    i = a.chart,
                    r = a.getDataset(),
                    s = i.options,
                    o = s.animation,
                    d = i.scale,
                    l = i.data.labels,
                    u = d.xCenter,
                    c = d.yCenter,
                    m = s.startAngle,
                    h = e.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[t]),
                    _ = a._starts[t],
                    f = _ + (e.hidden ? 0 : a._angles[t]),
                    p = o.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[t]),
                    v = e._options || {};
                ue.extend(e, { _datasetIndex: a.index, _index: t, _scale: d, _model: { backgroundColor: v.backgroundColor, borderColor: v.borderColor, borderWidth: v.borderWidth, borderAlign: v.borderAlign, x: u, y: c, innerRadius: 0, outerRadius: n ? p : h, startAngle: n && o.animateRotate ? m : _, endAngle: n && o.animateRotate ? m : f, label: ue.valueAtIndexOrDefault(l, t, l[t]) } }), e.pivot()
            },
            countVisibleElements: function() {
                var e = this.getDataset(),
                    t = this.getMeta(),
                    n = 0;
                return ue.each(t.data, function(t, a) { isNaN(e.data[a]) || t.hidden || n++ }), n
            },
            setHoverStyle: function(e) {
                var t = e._model,
                    n = e._options,
                    a = ue.getHoverColor,
                    i = ue.valueOrDefault;
                e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = i(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = i(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = i(n.hoverBorderWidth, n.borderWidth)
            },
            _resolveElementOptions: function(e, t) {
                var n, a, i, r = this.chart,
                    s = this.getDataset(),
                    o = e.custom || {},
                    d = r.options.elements.arc,
                    l = {},
                    u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
                    c = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];
                for (n = 0, a = c.length; n < a; ++n) l[i = c[n]] = it([o[i], s[i], d[i]], u, t);
                return l
            },
            _computeAngle: function(e) {
                var t = this,
                    n = this.getMeta().count,
                    a = t.getDataset(),
                    i = t.getMeta();
                if (isNaN(a.data[e]) || i.data[e].hidden) return 0;
                var r = { chart: t.chart, dataIndex: e, dataset: a, datasetIndex: t.index };
                return it([t.chart.options.elements.arc.angle, 2 * Math.PI / n], r, e)
            }
        });
        oe._set("pie", ue.clone(oe.doughnut)), oe._set("pie", { cutoutPercentage: 0 });
        var st = Ze,
            ot = ue.valueOrDefault,
            dt = ue.options.resolve;
        oe._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } });
        var lt = ke.extend({
            datasetElementType: We.Line,
            dataElementType: We.Point,
            linkScales: ue.noop,
            update: function(e) {
                var t, n, a = this,
                    i = a.getMeta(),
                    r = i.dataset,
                    s = i.data || [],
                    o = a.chart.scale,
                    d = a.getDataset();
                for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), r._scale = o, r._datasetIndex = a.index, r._children = s, r._loop = !0, r._model = a._resolveLineOptions(r), r.pivot(), t = 0, n = s.length; t < n; ++t) a.updateElement(s[t], t, e);
                for (a.updateBezierControlPoints(), t = 0, n = s.length; t < n; ++t) s[t].pivot()
            },
            updateElement: function(e, t, n) {
                var a = this,
                    i = e.custom || {},
                    r = a.getDataset(),
                    s = a.chart.scale,
                    o = s.getPointPositionForValue(t, r.data[t]),
                    d = a._resolvePointOptions(e, t),
                    l = a.getMeta().dataset._model,
                    u = n ? s.xCenter : o.x,
                    c = n ? s.yCenter : o.y;
                e._scale = s, e._options = d, e._datasetIndex = a.index, e._index = t, e._model = { x: u, y: c, skip: i.skip || isNaN(u) || isNaN(c), radius: d.radius, pointStyle: d.pointStyle, rotation: d.rotation, backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, tension: ot(i.tension, l ? l.tension : 0), hitRadius: d.hitRadius }
            },
            _resolvePointOptions: function(e, t) {
                var n, a, i, r = this.chart,
                    s = r.data.datasets[this.index],
                    o = e.custom || {},
                    d = r.options.elements.point,
                    l = {},
                    u = { chart: r, dataIndex: t, dataset: s, datasetIndex: this.index },
                    c = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
                    m = Object.keys(c);
                for (n = 0, a = m.length; n < a; ++n) i = m[n], l[i] = dt([o[i], s[c[i]], s[i], d[i]], u, t);
                return l
            },
            _resolveLineOptions: function(e) {
                var t, n, a, i = this.chart,
                    r = i.data.datasets[this.index],
                    s = e.custom || {},
                    o = i.options.elements.line,
                    d = {},
                    l = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];
                for (t = 0, n = l.length; t < n; ++t) d[a = l[t]] = dt([s[a], r[a], o[a]]);
                return d.tension = ot(r.lineTension, o.tension), d
            },
            updateBezierControlPoints: function() {
                var e, t, n, a, i = this.getMeta(),
                    r = this.chart.chartArea,
                    s = i.data || [];

                function o(e, t, n) { return Math.max(Math.min(e, n), t) }
                for (e = 0, t = s.length; e < t; ++e) n = s[e]._model, a = ue.splineCurve(ue.previousItem(s, e, !0)._model, n, ue.nextItem(s, e, !0)._model, n.tension), n.controlPointPreviousX = o(a.previous.x, r.left, r.right), n.controlPointPreviousY = o(a.previous.y, r.top, r.bottom), n.controlPointNextX = o(a.next.x, r.left, r.right), n.controlPointNextY = o(a.next.y, r.top, r.bottom)
            },
            setHoverStyle: function(e) {
                var t = e._model,
                    n = e._options,
                    a = ue.getHoverColor;
                e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius }, t.backgroundColor = ot(n.hoverBackgroundColor, a(n.backgroundColor)), t.borderColor = ot(n.hoverBorderColor, a(n.borderColor)), t.borderWidth = ot(n.hoverBorderWidth, n.borderWidth), t.radius = ot(n.hoverRadius, n.radius)
            }
        });
        oe._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function() { return "" }, label: function(e) { return "(" + e.xLabel + ", " + e.yLabel + ")" } } } });
        var ut = { bar: Ve, bubble: Ge, doughnut: Ze, horizontalBar: Qe, line: at, polarArea: rt, pie: st, radar: lt, scatter: at };

        function ct(e, t) { return e.native ? { x: e.x, y: e.y } : ue.getRelativePosition(e, t) }

        function mt(e, t) {
            var n, a, i, r, s, o = e.data.datasets;
            for (a = 0, r = o.length; a < r; ++a)
                if (e.isDatasetVisible(a))
                    for (n = e.getDatasetMeta(a), i = 0, s = n.data.length; i < s; ++i) {
                        var d = n.data[i];
                        d._view.skip || t(d)
                    }
        }

        function ht(e, t) { var n = []; return mt(e, function(e) { e.inRange(t.x, t.y) && n.push(e) }), n }

        function _t(e, t, n, a) {
            var i = Number.POSITIVE_INFINITY,
                r = [];
            return mt(e, function(e) {
                if (!n || e.inRange(t.x, t.y)) {
                    var s = e.getCenterPoint(),
                        o = a(t, s);
                    o < i ? (r = [e], i = o) : o === i && r.push(e)
                }
            }), r
        }

        function ft(e) {
            var t = -1 !== e.indexOf("x"),
                n = -1 !== e.indexOf("y");
            return function(e, a) {
                var i = t ? Math.abs(e.x - a.x) : 0,
                    r = n ? Math.abs(e.y - a.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
            }
        }

        function pt(e, t, n) {
            var a = ct(t, e);
            n.axis = n.axis || "x";
            var i = ft(n.axis),
                r = n.intersect ? ht(e, a) : _t(e, a, !1, i),
                s = [];
            return r.length ? (e.data.datasets.forEach(function(t, n) {
                if (e.isDatasetVisible(n)) {
                    var a = e.getDatasetMeta(n),
                        i = a.data[r[0]._index];
                    i && !i._view.skip && s.push(i)
                }
            }), s) : []
        }
        var vt = {
            modes: {
                single: function(e, t) {
                    var n = ct(t, e),
                        a = [];
                    return mt(e, function(e) { if (e.inRange(n.x, n.y)) return a.push(e), a }), a.slice(0, 1)
                },
                label: pt,
                index: pt,
                dataset: function(e, t, n) {
                    var a = ct(t, e);
                    n.axis = n.axis || "xy";
                    var i = ft(n.axis),
                        r = n.intersect ? ht(e, a) : _t(e, a, !1, i);
                    return r.length > 0 && (r = e.getDatasetMeta(r[0]._datasetIndex).data), r
                },
                "x-axis": function(e, t) { return pt(e, t, { intersect: !1 }) },
                point: function(e, t) { var n = ct(t, e); return ht(e, n) },
                nearest: function(e, t, n) {
                    var a = ct(t, e);
                    n.axis = n.axis || "xy";
                    var i = ft(n.axis);
                    return _t(e, a, n.intersect, i)
                },
                x: function(e, t, n) {
                    var a = ct(t, e),
                        i = [],
                        r = !1;
                    return mt(e, function(e) { e.inXRange(a.x) && i.push(e), e.inRange(a.x, a.y) && (r = !0) }), n.intersect && !r && (i = []), i
                },
                y: function(e, t, n) {
                    var a = ct(t, e),
                        i = [],
                        r = !1;
                    return mt(e, function(e) { e.inYRange(a.y) && i.push(e), e.inRange(a.x, a.y) && (r = !0) }), n.intersect && !r && (i = []), i
                }
            }
        };

        function gt(e, t) { return ue.where(e, function(e) { return e.position === t }) }

        function yt(e, t) {
            e.forEach(function(e, t) { return e._tmpIndex_ = t, e }), e.sort(function(e, n) {
                var a = t ? n : e,
                    i = t ? e : n;
                return a.weight === i.weight ? a._tmpIndex_ - i._tmpIndex_ : a.weight - i.weight
            }), e.forEach(function(e) { delete e._tmpIndex_ })
        }

        function Mt(e, t) { ue.each(e, function(e) { t[e.position] += e.isHorizontal() ? e.height : e.width }) }
        oe._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });
        var bt, Lt = {
                defaults: {},
                addBox: function(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t) },
                removeBox: function(e, t) { var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1) },
                configure: function(e, t, n) { for (var a, i = ["fullWidth", "position", "weight"], r = i.length, s = 0; s < r; ++s) a = i[s], n.hasOwnProperty(a) && (t[a] = n[a]) },
                update: function(e, t, n) {
                    if (e) {
                        var a = e.options.layout || {},
                            i = ue.options.toPadding(a.padding),
                            r = i.left,
                            s = i.right,
                            o = i.top,
                            d = i.bottom,
                            l = gt(e.boxes, "left"),
                            u = gt(e.boxes, "right"),
                            c = gt(e.boxes, "top"),
                            m = gt(e.boxes, "bottom"),
                            h = gt(e.boxes, "chartArea");
                        yt(l, !0), yt(u, !1), yt(c, !0), yt(m, !1);
                        var _, f = l.concat(u),
                            p = c.concat(m),
                            v = f.concat(p),
                            g = t - r - s,
                            y = n - o - d,
                            M = g / 2,
                            b = (t - M) / f.length,
                            L = g,
                            k = y,
                            w = { top: o, left: r, bottom: d, right: s },
                            Y = [];
                        ue.each(v, function(e) {
                            var t, n = e.isHorizontal();
                            n ? (t = e.update(e.fullWidth ? g : L, y / 2), k -= t.height) : (t = e.update(b, k), L -= t.width), Y.push({ horizontal: n, width: t.width, box: e })
                        }), _ = function(e) {
                            var t = 0,
                                n = 0,
                                a = 0,
                                i = 0;
                            return ue.each(e, function(e) {
                                if (e.getPadding) {
                                    var r = e.getPadding();
                                    t = Math.max(t, r.top), n = Math.max(n, r.left), a = Math.max(a, r.bottom), i = Math.max(i, r.right)
                                }
                            }), { top: t, left: n, bottom: a, right: i }
                        }(v), ue.each(f, A), Mt(f, w), ue.each(p, A), Mt(p, w), ue.each(f, function(e) {
                            var t = ue.findNextWhere(Y, function(t) { return t.box === e }),
                                n = { left: 0, right: 0, top: w.top, bottom: w.bottom };
                            t && e.update(t.width, k, n)
                        }), Mt(v, w = { top: o, left: r, bottom: d, right: s });
                        var D = Math.max(_.left - w.left, 0);
                        w.left += D, w.right += Math.max(_.right - w.right, 0);
                        var T = Math.max(_.top - w.top, 0);
                        w.top += T, w.bottom += Math.max(_.bottom - w.bottom, 0);
                        var x = n - w.top - w.bottom,
                            S = t - w.left - w.right;
                        S === L && x === k || (ue.each(f, function(e) { e.height = x }), ue.each(p, function(e) { e.fullWidth || (e.width = S) }), k = x, L = S);
                        var C = r + D,
                            H = o + T;
                        ue.each(l.concat(c), O), C += L, H += k, ue.each(u, O), ue.each(m, O), e.chartArea = { left: w.left, top: w.top, right: w.left + L, bottom: w.top + k }, ue.each(h, function(t) { t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, k) })
                    }

                    function A(e) {
                        var t = ue.findNextWhere(Y, function(t) { return t.box === e });
                        if (t)
                            if (t.horizontal) {
                                var n = { left: Math.max(w.left, _.left), right: Math.max(w.right, _.right), top: 0, bottom: 0 };
                                e.update(e.fullWidth ? g : L, y / 2, n)
                            } else e.update(t.width, k)
                    }

                    function O(e) { e.isHorizontal() ? (e.left = e.fullWidth ? r : w.left, e.right = e.fullWidth ? t - s : w.left + L, e.top = H, e.bottom = H + e.height, H = e.bottom) : (e.left = C, e.right = C + e.width, e.top = w.top, e.bottom = w.top + k, C = e.right) }
                }
            },
            kt = (bt = Object.freeze({ default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n" })) && bt.default || bt,
            wt = "$chartjs",
            Yt = "chartjs-size-monitor",
            Dt = "chartjs-render-monitor",
            Tt = "chartjs-render-animation",
            xt = ["animationstart", "webkitAnimationStart"],
            St = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };

        function Ct(e, t) {
            var n = ue.getStyle(e, t),
                a = n && n.match(/^(\d+)(\.\d+)?px$/);
            return a ? Number(a[1]) : void 0
        }
        var Ht = !! function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", { get: function() { e = !0 } });
                window.addEventListener("e", null, t)
            } catch (e) {}
            return e
        }() && { passive: !0 };

        function At(e, t, n) { e.addEventListener(t, n, Ht) }

        function Ot(e, t, n) { e.removeEventListener(t, n, Ht) }

        function Pt(e, t, n, a, i) { return { type: e, chart: t, native: i || null, x: void 0 !== n ? n : null, y: void 0 !== a ? a : null } }

        function jt(e) { var t = document.createElement("div"); return t.className = e || "", t }

        function Et(e, t, n) {
            var a, i, r, s, o = e[wt] || (e[wt] = {}),
                d = o.resizer = function(e) {
                    var t = jt(Yt),
                        n = jt(Yt + "-expand"),
                        a = jt(Yt + "-shrink");
                    n.appendChild(jt()), a.appendChild(jt()), t.appendChild(n), t.appendChild(a), t._reset = function() { n.scrollLeft = 1e6, n.scrollTop = 1e6, a.scrollLeft = 1e6, a.scrollTop = 1e6 };
                    var i = function() { t._reset(), e() };
                    return At(n, "scroll", i.bind(n, "expand")), At(a, "scroll", i.bind(a, "shrink")), t
                }((a = function() {
                    if (o.resizer) {
                        var a = n.options.maintainAspectRatio && e.parentNode,
                            i = a ? a.clientWidth : 0;
                        t(Pt("resize", n)), a && a.clientWidth < i && n.canvas && t(Pt("resize", n))
                    }
                }, r = !1, s = [], function() { s = Array.prototype.slice.call(arguments), i = i || this, r || (r = !0, ue.requestAnimFrame.call(window, function() { r = !1, a.apply(i, s) })) }));
            ! function(e, t) {
                var n = e[wt] || (e[wt] = {}),
                    a = n.renderProxy = function(e) { e.animationName === Tt && t() };
                ue.each(xt, function(t) { At(e, t, a) }), n.reflow = !!e.offsetParent, e.classList.add(Dt)
            }(e, function() {
                if (o.resizer) {
                    var t = e.parentNode;
                    t && t !== d.parentNode && t.insertBefore(d, t.firstChild), d._reset()
                }
            })
        }

        function Ft(e) {
            var t = e[wt] || {},
                n = t.resizer;
            delete t.resizer,
                function(e) {
                    var t = e[wt] || {},
                        n = t.renderProxy;
                    n && (ue.each(xt, function(t) { Ot(e, t, n) }), delete t.renderProxy), e.classList.remove(Dt)
                }(e), n && n.parentNode && n.parentNode.removeChild(n)
        }
        var It = {
            disableCSSInjection: !1,
            _enabled: "undefined" != typeof window && "undefined" != typeof document,
            _ensureLoaded: function() {
                this._loaded || (this._loaded = !0, this.disableCSSInjection || function(e, t) {
                    var n = e._style || document.createElement("style");
                    e._style || (e._style = n, t = "/* Chart.js */\n" + t, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(t))
                }(this, kt))
            },
            acquireContext: function(e, t) {
                "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                var n = e && e.getContext && e.getContext("2d");
                return this._ensureLoaded(), n && n.canvas === e ? (function(e, t) {
                    var n = e.style,
                        a = e.getAttribute("height"),
                        i = e.getAttribute("width");
                    if (e[wt] = { initial: { height: a, width: i, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === i || "" === i) {
                        var r = Ct(e, "width");
                        void 0 !== r && (e.width = r)
                    }
                    if (null === a || "" === a)
                        if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                        else {
                            var s = Ct(e, "height");
                            void 0 !== r && (e.height = s)
                        }
                }(e, t), n) : null
            },
            releaseContext: function(e) {
                var t = e.canvas;
                if (t[wt]) {
                    var n = t[wt].initial;
                    ["height", "width"].forEach(function(e) {
                        var a = n[e];
                        ue.isNullOrUndef(a) ? t.removeAttribute(e) : t.setAttribute(e, a)
                    }), ue.each(n.style || {}, function(e, n) { t.style[n] = e }), t.width = t.width, delete t[wt]
                }
            },
            addEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" !== t) {
                    var i = n[wt] || (n[wt] = {}),
                        r = i.proxies || (i.proxies = {}),
                        s = r[e.id + "_" + t] = function(t) {
                            n(function(e, t) {
                                var n = St[e.type] || e.type,
                                    a = ue.getRelativePosition(e, t);
                                return Pt(n, t, a.x, a.y, e)
                            }(t, e))
                        };
                    At(a, t, s)
                } else Et(a, n, e)
            },
            removeEventListener: function(e, t, n) {
                var a = e.canvas;
                if ("resize" !== t) {
                    var i = n[wt] || {},
                        r = i.proxies || {},
                        s = r[e.id + "_" + t];
                    s && Ot(a, t, s)
                } else Ft(a)
            }
        };
        ue.addEvent = At, ue.removeEvent = Ot;
        var Wt = It._enabled ? It : { acquireContext: function(e) { return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null } },
            Rt = ue.extend({ initialize: function() {}, acquireContext: function() {}, releaseContext: function() {}, addEventListener: function() {}, removeEventListener: function() {} }, Wt);
        oe._set("global", { plugins: {} });
        var zt = {
                _plugins: [],
                _cacheId: 0,
                register: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) {-1 === t.indexOf(e) && t.push(e) }), this._cacheId++
                },
                unregister: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) }), this._cacheId++
                },
                clear: function() { this._plugins = [], this._cacheId++ },
                count: function() { return this._plugins.length },
                getAll: function() { return this._plugins },
                notify: function(e, t, n) {
                    var a, i, r, s, o, d = this.descriptors(e),
                        l = d.length;
                    for (a = 0; a < l; ++a)
                        if (i = d[a], r = i.plugin, "function" == typeof(o = r[t]) && ((s = [e].concat(n || [])).push(i.options), !1 === o.apply(r, s))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var n = [],
                        a = [],
                        i = e && e.config || {},
                        r = i.options && i.options.plugins || {};
                    return this._plugins.concat(i.plugins || []).forEach(function(e) {
                        var t = n.indexOf(e);
                        if (-1 === t) {
                            var i = e.id,
                                s = r[i];
                            !1 !== s && (!0 === s && (s = ue.clone(oe.global.plugins[i])), n.push(e), a.push({ plugin: e, options: s || {} }))
                        }
                    }), t.descriptors = a, t.id = this._cacheId, a
                },
                _invalidate: function(e) { delete e.$plugins }
            },
            Nt = { constructors: {}, defaults: {}, registerScaleType: function(e, t, n) { this.constructors[e] = t, this.defaults[e] = ue.clone(n) }, getScaleConstructor: function(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0 }, getScaleDefaults: function(e) { return this.defaults.hasOwnProperty(e) ? ue.merge({}, [oe.scale, this.defaults[e]]) : {} }, updateScaleDefaults: function(e, t) { this.defaults.hasOwnProperty(e) && (this.defaults[e] = ue.extend(this.defaults[e], t)) }, addScalesToLayout: function(e) { ue.each(e.scales, function(t) { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, Lt.addBox(e, t) }) } },
            Bt = ue.valueOrDefault;
        oe._set("global", {
            tooltips: {
                enabled: !0,
                custom: null,
                mode: "nearest",
                position: "average",
                intersect: !0,
                backgroundColor: "rgba(0,0,0,0.8)",
                titleFontStyle: "bold",
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleFontColor: "#fff",
                titleAlign: "left",
                bodySpacing: 2,
                bodyFontColor: "#fff",
                bodyAlign: "left",
                footerFontStyle: "bold",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFontColor: "#fff",
                footerAlign: "left",
                yPadding: 6,
                xPadding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                multiKeyBackground: "#fff",
                displayColors: !0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                callbacks: {
                    beforeTitle: ue.noop,
                    title: function(e, t) {
                        var n = "",
                            a = t.labels,
                            i = a ? a.length : 0;
                        if (e.length > 0) {
                            var r = e[0];
                            r.label ? n = r.label : r.xLabel ? n = r.xLabel : i > 0 && r.index < i && (n = a[r.index])
                        }
                        return n
                    },
                    afterTitle: ue.noop,
                    beforeBody: ue.noop,
                    beforeLabel: ue.noop,
                    label: function(e, t) { var n = t.datasets[e.datasetIndex].label || ""; return n && (n += ": "), ue.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n },
                    labelColor: function(e, t) {
                        var n = t.getDatasetMeta(e.datasetIndex),
                            a = n.data[e.index],
                            i = a._view;
                        return { borderColor: i.borderColor, backgroundColor: i.backgroundColor }
                    },
                    labelTextColor: function() { return this._options.bodyFontColor },
                    afterLabel: ue.noop,
                    afterBody: ue.noop,
                    beforeFooter: ue.noop,
                    footer: ue.noop,
                    afterFooter: ue.noop
                }
            }
        });
        var $t = {
            average: function(e) {
                if (!e.length) return !1;
                var t, n, a = 0,
                    i = 0,
                    r = 0;
                for (t = 0, n = e.length; t < n; ++t) {
                    var s = e[t];
                    if (s && s.hasValue()) {
                        var o = s.tooltipPosition();
                        a += o.x, i += o.y, ++r
                    }
                }
                return { x: a / r, y: i / r }
            },
            nearest: function(e, t) {
                var n, a, i, r = t.x,
                    s = t.y,
                    o = Number.POSITIVE_INFINITY;
                for (n = 0, a = e.length; n < a; ++n) {
                    var d = e[n];
                    if (d && d.hasValue()) {
                        var l = d.getCenterPoint(),
                            u = ue.distanceBetweenPoints(t, l);
                        u < o && (o = u, i = d)
                    }
                }
                if (i) {
                    var c = i.tooltipPosition();
                    r = c.x, s = c.y
                }
                return { x: r, y: s }
            }
        };

        function Vt(e, t) { return t && (ue.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e }

        function Ut(e) { return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e }

        function Jt(e) { var t = oe.global; return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Bt(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Bt(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Bt(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Bt(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Bt(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Bt(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Bt(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Bt(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Bt(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth } }

        function Gt(e, t) { return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding }

        function qt(e) { return Vt([], Ut(e)) }
        var Kt = fe.extend({
                initialize: function() { this._model = Jt(this._options), this._lastActive = [] },
                getTitle: function() {
                    var e = this,
                        t = e._options,
                        n = t.callbacks,
                        a = n.beforeTitle.apply(e, arguments),
                        i = n.title.apply(e, arguments),
                        r = n.afterTitle.apply(e, arguments),
                        s = [];
                    return s = Vt(s, Ut(a)), s = Vt(s, Ut(i)), s = Vt(s, Ut(r))
                },
                getBeforeBody: function() { return qt(this._options.callbacks.beforeBody.apply(this, arguments)) },
                getBody: function(e, t) {
                    var n = this,
                        a = n._options.callbacks,
                        i = [];
                    return ue.each(e, function(e) {
                        var r = { before: [], lines: [], after: [] };
                        Vt(r.before, Ut(a.beforeLabel.call(n, e, t))), Vt(r.lines, a.label.call(n, e, t)), Vt(r.after, Ut(a.afterLabel.call(n, e, t))), i.push(r)
                    }), i
                },
                getAfterBody: function() { return qt(this._options.callbacks.afterBody.apply(this, arguments)) },
                getFooter: function() {
                    var e = this,
                        t = e._options.callbacks,
                        n = t.beforeFooter.apply(e, arguments),
                        a = t.footer.apply(e, arguments),
                        i = t.afterFooter.apply(e, arguments),
                        r = [];
                    return r = Vt(r, Ut(n)), r = Vt(r, Ut(a)), r = Vt(r, Ut(i))
                },
                update: function(e) {
                    var t, n, a, i, r, s, o, d, l, u, c = this,
                        m = c._options,
                        h = c._model,
                        _ = c._model = Jt(m),
                        f = c._active,
                        p = c._data,
                        v = { xAlign: h.xAlign, yAlign: h.yAlign },
                        g = { x: h.x, y: h.y },
                        y = { width: h.width, height: h.height },
                        M = { x: h.caretX, y: h.caretY };
                    if (f.length) {
                        _.opacity = 1;
                        var b = [],
                            L = [];
                        M = $t[m.position].call(c, f, c._eventPosition);
                        var k = [];
                        for (t = 0, n = f.length; t < n; ++t) k.push((a = f[t], i = void 0, r = void 0, s = void 0, o = void 0, d = void 0, l = void 0, u = void 0, i = a._xScale, r = a._yScale || a._scale, s = a._index, o = a._datasetIndex, d = a._chart.getDatasetMeta(o).controller, l = d._getIndexScale(), u = d._getValueScale(), { xLabel: i ? i.getLabelForIndex(s, o) : "", yLabel: r ? r.getLabelForIndex(s, o) : "", label: l ? "" + l.getLabelForIndex(s, o) : "", value: u ? "" + u.getLabelForIndex(s, o) : "", index: s, datasetIndex: o, x: a._model.x, y: a._model.y }));
                        m.filter && (k = k.filter(function(e) { return m.filter(e, p) })), m.itemSort && (k = k.sort(function(e, t) { return m.itemSort(e, t, p) })), ue.each(k, function(e) { b.push(m.callbacks.labelColor.call(c, e, c._chart)), L.push(m.callbacks.labelTextColor.call(c, e, c._chart)) }), _.title = c.getTitle(k, p), _.beforeBody = c.getBeforeBody(k, p), _.body = c.getBody(k, p), _.afterBody = c.getAfterBody(k, p), _.footer = c.getFooter(k, p), _.x = M.x, _.y = M.y, _.caretPadding = m.caretPadding, _.labelColors = b, _.labelTextColors = L, _.dataPoints = k, y = function(e, t) {
                            var n = e._chart.ctx,
                                a = 2 * t.yPadding,
                                i = 0,
                                r = t.body,
                                s = r.reduce(function(e, t) { return e + t.before.length + t.lines.length + t.after.length }, 0);
                            s += t.beforeBody.length + t.afterBody.length;
                            var o = t.title.length,
                                d = t.footer.length,
                                l = t.titleFontSize,
                                u = t.bodyFontSize,
                                c = t.footerFontSize;
                            a += o * l, a += o ? (o - 1) * t.titleSpacing : 0, a += o ? t.titleMarginBottom : 0, a += s * u, a += s ? (s - 1) * t.bodySpacing : 0, a += d ? t.footerMarginTop : 0, a += d * c, a += d ? (d - 1) * t.footerSpacing : 0;
                            var m = 0,
                                h = function(e) { i = Math.max(i, n.measureText(e).width + m) };
                            return n.font = ue.fontString(l, t._titleFontStyle, t._titleFontFamily), ue.each(t.title, h), n.font = ue.fontString(u, t._bodyFontStyle, t._bodyFontFamily), ue.each(t.beforeBody.concat(t.afterBody), h), m = t.displayColors ? u + 2 : 0, ue.each(r, function(e) { ue.each(e.before, h), ue.each(e.lines, h), ue.each(e.after, h) }), m = 0, n.font = ue.fontString(c, t._footerFontStyle, t._footerFontFamily), ue.each(t.footer, h), { width: i += 2 * t.xPadding, height: a }
                        }(this, _), v = function(e, t) {
                            var n, a, i, r, s, o = e._model,
                                d = e._chart,
                                l = e._chart.chartArea,
                                u = "center",
                                c = "center";
                            o.y < t.height ? c = "top" : o.y > d.height - t.height && (c = "bottom");
                            var m = (l.left + l.right) / 2,
                                h = (l.top + l.bottom) / 2;
                            "center" === c ? (n = function(e) { return e <= m }, a = function(e) { return e > m }) : (n = function(e) { return e <= t.width / 2 }, a = function(e) { return e >= d.width - t.width / 2 }), i = function(e) { return e + t.width + o.caretSize + o.caretPadding > d.width }, r = function(e) { return e - t.width - o.caretSize - o.caretPadding < 0 }, s = function(e) { return e <= h ? "top" : "bottom" }, n(o.x) ? (u = "left", i(o.x) && (u = "center", c = s(o.y))) : a(o.x) && (u = "right", r(o.x) && (u = "center", c = s(o.y)));
                            var _ = e._options;
                            return { xAlign: _.xAlign ? _.xAlign : u, yAlign: _.yAlign ? _.yAlign : c }
                        }(this, y), g = function(e, t, n, a) {
                            var i = e.x,
                                r = e.y,
                                s = e.caretSize,
                                o = e.caretPadding,
                                d = e.cornerRadius,
                                l = n.xAlign,
                                u = n.yAlign,
                                c = s + o,
                                m = d + o;
                            return "right" === l ? i -= t.width : "center" === l && ((i -= t.width / 2) + t.width > a.width && (i = a.width - t.width), i < 0 && (i = 0)), "top" === u ? r += c : r -= "bottom" === u ? t.height + c : t.height / 2, "center" === u ? "left" === l ? i += c : "right" === l && (i -= c) : "left" === l ? i -= m : "right" === l && (i += m), { x: i, y: r }
                        }(_, y, v, c._chart)
                    } else _.opacity = 0;
                    return _.xAlign = v.xAlign, _.yAlign = v.yAlign, _.x = g.x, _.y = g.y, _.width = y.width, _.height = y.height, _.caretX = M.x, _.caretY = M.y, c._model = _, e && m.custom && m.custom.call(c, _), c
                },
                drawCaret: function(e, t) {
                    var n = this._chart.ctx,
                        a = this._view,
                        i = this.getCaretPosition(e, t, a);
                    n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
                },
                getCaretPosition: function(e, t, n) {
                    var a, i, r, s, o, d, l = n.caretSize,
                        u = n.cornerRadius,
                        c = n.xAlign,
                        m = n.yAlign,
                        h = e.x,
                        _ = e.y,
                        f = t.width,
                        p = t.height;
                    if ("center" === m) o = _ + p / 2, "left" === c ? (i = (a = h) - l, r = a, s = o + l, d = o - l) : (i = (a = h + f) + l, r = a, s = o - l, d = o + l);
                    else if ("left" === c ? (a = (i = h + u + l) - l, r = i + l) : "right" === c ? (a = (i = h + f - u - l) - l, r = i + l) : (i = n.caretX, a = i - l, r = i + l), "top" === m) o = (s = _) - l, d = s;
                    else {
                        o = (s = _ + p) + l, d = s;
                        var v = r;
                        r = a, a = v
                    }
                    return { x1: a, x2: i, x3: r, y1: s, y2: o, y3: d }
                },
                drawTitle: function(e, t, n) {
                    var a = t.title;
                    if (a.length) {
                        e.x = Gt(t, t._titleAlign), n.textAlign = t._titleAlign, n.textBaseline = "top";
                        var i, r, s = t.titleFontSize,
                            o = t.titleSpacing;
                        for (n.fillStyle = t.titleFontColor, n.font = ue.fontString(s, t._titleFontStyle, t._titleFontFamily), i = 0, r = a.length; i < r; ++i) n.fillText(a[i], e.x, e.y), e.y += s + o, i + 1 === a.length && (e.y += t.titleMarginBottom - o)
                    }
                },
                drawBody: function(e, t, n) {
                    var a, i = t.bodyFontSize,
                        r = t.bodySpacing,
                        s = t._bodyAlign,
                        o = t.body,
                        d = t.displayColors,
                        l = t.labelColors,
                        u = 0,
                        c = d ? Gt(t, "left") : 0;
                    n.textAlign = s, n.textBaseline = "top", n.font = ue.fontString(i, t._bodyFontStyle, t._bodyFontFamily), e.x = Gt(t, s);
                    var m = function(t) { n.fillText(t, e.x + u, e.y), e.y += i + r };
                    n.fillStyle = t.bodyFontColor, ue.each(t.beforeBody, m), u = d && "right" !== s ? "center" === s ? i / 2 + 1 : i + 2 : 0, ue.each(o, function(r, s) { a = t.labelTextColors[s], n.fillStyle = a, ue.each(r.before, m), ue.each(r.lines, function(r) { d && (n.fillStyle = t.legendColorBackground, n.fillRect(c, e.y, i, i), n.lineWidth = 1, n.strokeStyle = l[s].borderColor, n.strokeRect(c, e.y, i, i), n.fillStyle = l[s].backgroundColor, n.fillRect(c + 1, e.y + 1, i - 2, i - 2), n.fillStyle = a), m(r) }), ue.each(r.after, m) }), u = 0, ue.each(t.afterBody, m), e.y -= r
                },
                drawFooter: function(e, t, n) {
                    var a = t.footer;
                    a.length && (e.x = Gt(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = t.footerFontColor, n.font = ue.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), ue.each(a, function(a) { n.fillText(a, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing }))
                },
                drawBackground: function(e, t, n, a) {
                    n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth;
                    var i = t.xAlign,
                        r = t.yAlign,
                        s = e.x,
                        o = e.y,
                        d = a.width,
                        l = a.height,
                        u = t.cornerRadius;
                    n.beginPath(), n.moveTo(s + u, o), "top" === r && this.drawCaret(e, a), n.lineTo(s + d - u, o), n.quadraticCurveTo(s + d, o, s + d, o + u), "center" === r && "right" === i && this.drawCaret(e, a), n.lineTo(s + d, o + l - u), n.quadraticCurveTo(s + d, o + l, s + d - u, o + l), "bottom" === r && this.drawCaret(e, a), n.lineTo(s + u, o + l), n.quadraticCurveTo(s, o + l, s, o + l - u), "center" === r && "left" === i && this.drawCaret(e, a), n.lineTo(s, o + u), n.quadraticCurveTo(s, o, s + u, o), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
                },
                draw: function() {
                    var e = this._chart.ctx,
                        t = this._view;
                    if (0 !== t.opacity) {
                        var n = { width: t.width, height: t.height },
                            a = { x: t.x, y: t.y },
                            i = Math.abs(t.opacity < .001) ? 0 : t.opacity,
                            r = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
                        this._options.enabled && r && (e.save(), e.globalAlpha = i, this.drawBackground(a, t, e, n), a.y += t.yPadding, this.drawTitle(a, t, e), this.drawBody(a, t, e), this.drawFooter(a, t, e), e.restore())
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        n = t._options,
                        a = !1;
                    return t._lastActive = t._lastActive || [], "mouseout" === e.type ? t._active = [] : t._active = t._chart.getElementsAtEventForMode(e, n.mode, n), (a = !ue.arrayEquals(t._active, t._lastActive)) && (t._lastActive = t._active, (n.enabled || n.custom) && (t._eventPosition = { x: e.x, y: e.y }, t.update(!0), t.pivot())), a
                }
            }),
            Zt = $t,
            Qt = Kt;
        Qt.positioners = Zt;
        var Xt = ue.valueOrDefault;

        function en() { return ue.merge({}, [].slice.call(arguments), { merger: function(e, t, n, a) { if ("xAxes" === e || "yAxes" === e) { var i, r, s, o = n[e].length; for (t[e] || (t[e] = []), i = 0; i < o; ++i) s = n[e][i], r = Xt(s.type, "xAxes" === e ? "category" : "linear"), i >= t[e].length && t[e].push({}), !t[e][i].type || s.type && s.type !== t[e][i].type ? ue.merge(t[e][i], [Nt.getScaleDefaults(r), s]) : ue.merge(t[e][i], s) } else ue._merger(e, t, n, a) } }) }

        function tn() {
            return ue.merge({}, [].slice.call(arguments), {
                merger: function(e, t, n, a) {
                    var i = t[e] || {},
                        r = n[e];
                    "scales" === e ? t[e] = en(i, r) : "scale" === e ? t[e] = ue.merge(i, [Nt.getScaleDefaults(r.type), r]) : ue._merger(e, t, n, a)
                }
            })
        }

        function nn(e) {
            var t = e.options;
            ue.each(e.scales, function(t) { Lt.removeBox(e, t) }), t = tn(oe.global, oe[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
        }

        function an(e) { return "top" === e || "bottom" === e }
        oe._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 });
        var rn = function(e, t) { return this.construct(e, t), this };
        ue.extend(rn.prototype, {
            construct: function(e, t) {
                var n = this;
                t = function(e) { var t = (e = e || {}).data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = tn(oe.global, oe[e.type], e.options || {}), e }(t);
                var a = Rt.acquireContext(e, t),
                    i = a && a.canvas,
                    r = i && i.height,
                    s = i && i.width;
                n.id = ue.uid(), n.ctx = a, n.canvas = i, n.config = t, n.width = s, n.height = r, n.aspectRatio = r ? s / r : null, n.options = t.options, n._bufferedRender = !1, n.chart = n, n.controller = n, rn.instances[n.id] = n, Object.defineProperty(n, "data", { get: function() { return n.config.data }, set: function(e) { n.config.data = e } }), a && i ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            },
            initialize: function() { var e = this; return zt.notify(e, "beforeInit"), ue.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), zt.notify(e, "afterInit"), e },
            clear: function() { return ue.canvas.clear(this), this },
            stop: function() { return ge.cancelAnimation(this), this },
            resize: function(e) {
                var t = this,
                    n = t.options,
                    a = t.canvas,
                    i = n.maintainAspectRatio && t.aspectRatio || null,
                    r = Math.max(0, Math.floor(ue.getMaximumWidth(a))),
                    s = Math.max(0, Math.floor(i ? r / i : ue.getMaximumHeight(a)));
                if ((t.width !== r || t.height !== s) && (a.width = t.width = r, a.height = t.height = s, a.style.width = r + "px", a.style.height = s + "px", ue.retinaScale(t, n.devicePixelRatio), !e)) {
                    var o = { width: r, height: s };
                    zt.notify(t, "resize", [o]), n.onResize && n.onResize(t, o), t.stop(), t.update({ duration: n.responsiveAnimationDuration })
                }
            },
            ensureScalesHaveIDs: function() {
                var e = this.options,
                    t = e.scales || {},
                    n = e.scale;
                ue.each(t.xAxes, function(e, t) { e.id = e.id || "x-axis-" + t }), ue.each(t.yAxes, function(e, t) { e.id = e.id || "y-axis-" + t }), n && (n.id = n.id || "scale")
            },
            buildOrUpdateScales: function() {
                var e = this,
                    t = e.options,
                    n = e.scales || {},
                    a = [],
                    i = Object.keys(n).reduce(function(e, t) { return e[t] = !1, e }, {});
                t.scales && (a = a.concat((t.scales.xAxes || []).map(function(e) { return { options: e, dtype: "category", dposition: "bottom" } }), (t.scales.yAxes || []).map(function(e) { return { options: e, dtype: "linear", dposition: "left" } }))), t.scale && a.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), ue.each(a, function(t) {
                    var a = t.options,
                        r = a.id,
                        s = Xt(a.type, t.dtype);
                    an(a.position) !== an(t.dposition) && (a.position = t.dposition), i[r] = !0;
                    var o = null;
                    if (r in n && n[r].type === s)(o = n[r]).options = a, o.ctx = e.ctx, o.chart = e;
                    else {
                        var d = Nt.getScaleConstructor(s);
                        if (!d) return;
                        o = new d({ id: r, type: s, options: a, ctx: e.ctx, chart: e }), n[o.id] = o
                    }
                    o.mergeTicksOptions(), t.isDefault && (e.scale = o)
                }), ue.each(i, function(e, t) { e || delete n[t] }), e.scales = n, Nt.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
                var e = this,
                    t = [];
                return ue.each(e.data.datasets, function(n, a) {
                    var i = e.getDatasetMeta(a),
                        r = n.type || e.config.type;
                    if (i.type && i.type !== r && (e.destroyDatasetMeta(a), i = e.getDatasetMeta(a)), i.type = r, i.controller) i.controller.updateIndex(a), i.controller.linkScales();
                    else {
                        var s = ut[i.type];
                        if (void 0 === s) throw new Error('"' + i.type + '" is not a chart type.');
                        i.controller = new s(e, a), t.push(i.controller)
                    }
                }, e), t
            },
            resetElements: function() {
                var e = this;
                ue.each(e.data.datasets, function(t, n) { e.getDatasetMeta(n).controller.reset() }, e)
            },
            reset: function() { this.resetElements(), this.tooltip.initialize() },
            update: function(e) {
                var t = this;
                if (e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] }), nn(t), zt._invalidate(t), !1 !== zt.notify(t, "beforeUpdate")) {
                    t.tooltip._data = t.data;
                    var n = t.buildOrUpdateControllers();
                    ue.each(t.data.datasets, function(e, n) { t.getDatasetMeta(n).controller.buildOrUpdateElements() }, t), t.updateLayout(), t.options.animation && t.options.animation.duration && ue.each(n, function(e) { e.reset() }), t.updateDatasets(), t.tooltip.initialize(), t.lastActive = [], zt.notify(t, "afterUpdate"), t._bufferedRender ? t._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : t.render(e)
                }
            },
            updateLayout: function() {!1 !== zt.notify(this, "beforeLayout") && (Lt.update(this, this.width, this.height), zt.notify(this, "afterScaleUpdate"), zt.notify(this, "afterLayout")) },
            updateDatasets: function() {
                if (!1 !== zt.notify(this, "beforeDatasetsUpdate")) {
                    for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                    zt.notify(this, "afterDatasetsUpdate")
                }
            },
            updateDataset: function(e) {
                var t = this.getDatasetMeta(e),
                    n = { meta: t, index: e };
                !1 !== zt.notify(this, "beforeDatasetUpdate", [n]) && (t.controller.update(), zt.notify(this, "afterDatasetUpdate", [n]))
            },
            render: function(e) {
                var t = this;
                e && "object" == typeof e || (e = { duration: e, lazy: arguments[1] });
                var n = t.options.animation,
                    a = Xt(e.duration, n && n.duration),
                    i = e.lazy;
                if (!1 !== zt.notify(t, "beforeRender")) {
                    var r = function(e) { zt.notify(t, "afterRender"), ue.callback(n && n.onComplete, [e], t) };
                    if (n && a) {
                        var s = new ve({
                            numSteps: a / 16.66,
                            easing: e.easing || n.easing,
                            render: function(e, t) {
                                var n = ue.easing.effects[t.easing],
                                    a = t.currentStep,
                                    i = a / t.numSteps;
                                e.draw(n(i), i, a)
                            },
                            onAnimationProgress: n.onProgress,
                            onAnimationComplete: r
                        });
                        ge.addAnimation(t, s, a, i)
                    } else t.draw(), r(new ve({ numSteps: 0, chart: t }));
                    return t
                }
            },
            draw: function(e) {
                var t = this;
                t.clear(), ue.isNullOrUndef(e) && (e = 1), t.transition(e), t.width <= 0 || t.height <= 0 || !1 !== zt.notify(t, "beforeDraw", [e]) && (ue.each(t.boxes, function(e) { e.draw(t.chartArea) }, t), t.drawDatasets(e), t._drawTooltip(e), zt.notify(t, "afterDraw", [e]))
            },
            transition: function(e) {
                for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                this.tooltip.transition(e)
            },
            drawDatasets: function(e) {
                var t = this;
                if (!1 !== zt.notify(t, "beforeDatasetsDraw", [e])) {
                    for (var n = (t.data.datasets || []).length - 1; n >= 0; --n) t.isDatasetVisible(n) && t.drawDataset(n, e);
                    zt.notify(t, "afterDatasetsDraw", [e])
                }
            },
            drawDataset: function(e, t) {
                var n = this.getDatasetMeta(e),
                    a = { meta: n, index: e, easingValue: t };
                !1 !== zt.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(t), zt.notify(this, "afterDatasetDraw", [a]))
            },
            _drawTooltip: function(e) {
                var t = this.tooltip,
                    n = { tooltip: t, easingValue: e };
                !1 !== zt.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), zt.notify(this, "afterTooltipDraw", [n]))
            },
            getElementAtEvent: function(e) { return vt.modes.single(this, e) },
            getElementsAtEvent: function(e) { return vt.modes.label(this, e, { intersect: !0 }) },
            getElementsAtXAxis: function(e) { return vt.modes["x-axis"](this, e, { intersect: !0 }) },
            getElementsAtEventForMode: function(e, t, n) { var a = vt.modes[t]; return "function" == typeof a ? a(this, e, n) : [] },
            getDatasetAtEvent: function(e) { return vt.modes.dataset(this, e, { intersect: !0 }) },
            getDatasetMeta: function(e) {
                var t = this.data.datasets[e];
                t._meta || (t._meta = {});
                var n = t._meta[this.id];
                return n || (n = t._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n
            },
            getVisibleDatasetCount: function() { for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++; return e },
            isDatasetVisible: function(e) { var t = this.getDatasetMeta(e); return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden },
            generateLegend: function() { return this.options.legendCallback(this) },
            destroyDatasetMeta: function(e) {
                var t = this.id,
                    n = this.data.datasets[e],
                    a = n._meta && n._meta[t];
                a && (a.controller.destroy(), delete n._meta[t])
            },
            destroy: function() {
                var e, t, n = this,
                    a = n.canvas;
                for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
                a && (n.unbindEvents(), ue.canvas.clear(n), Rt.releaseContext(n.ctx), n.canvas = null, n.ctx = null), zt.notify(n, "destroy"), delete rn.instances[n.id]
            },
            toBase64Image: function() { return this.canvas.toDataURL.apply(this.canvas, arguments) },
            initToolTip: function() {
                var e = this;
                e.tooltip = new Qt({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e)
            },
            bindEvents: function() {
                var e = this,
                    t = e._listeners = {},
                    n = function() { e.eventHandler.apply(e, arguments) };
                ue.each(e.options.events, function(a) { Rt.addEventListener(e, a, n), t[a] = n }), e.options.responsive && (n = function() { e.resize() }, Rt.addEventListener(e, "resize", n), t.resize = n)
            },
            unbindEvents: function() {
                var e = this,
                    t = e._listeners;
                t && (delete e._listeners, ue.each(t, function(t, n) { Rt.removeEventListener(e, n, t) }))
            },
            updateHoverStyle: function(e, t, n) { var a, i, r, s = n ? "setHoverStyle" : "removeHoverStyle"; for (i = 0, r = e.length; i < r; ++i)(a = e[i]) && this.getDatasetMeta(a._datasetIndex).controller[s](a) },
            eventHandler: function(e) {
                var t = this,
                    n = t.tooltip;
                if (!1 !== zt.notify(t, "beforeEvent", [e])) {
                    t._bufferedRender = !0, t._bufferedRequest = null;
                    var a = t.handleEvent(e);
                    n && (a = n._start ? n.handleEvent(e) : a | n.handleEvent(e)), zt.notify(t, "afterEvent", [e]);
                    var i = t._bufferedRequest;
                    return i ? t.render(i) : a && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t
                }
            },
            handleEvent: function(e) {
                var t = this,
                    n = t.options || {},
                    a = n.hover,
                    i = !1;
                return t.lastActive = t.lastActive || [], "mouseout" === e.type ? t.active = [] : t.active = t.getElementsAtEventForMode(e, a.mode, a), ue.callback(n.onHover || n.hover.onHover, [e.native, t.active], t), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, a.mode, !1), t.active.length && a.mode && t.updateHoverStyle(t.active, a.mode, !0), i = !ue.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, i
            }
        }), rn.instances = {};
        var sn = rn;

        function on() { throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.") }

        function dn(e) { this.options = e || {} }
        rn.Controller = rn, rn.types = {}, ue.configMerge = tn, ue.scaleMerge = en, ue.extend(dn.prototype, { formats: on, parse: on, format: on, add: on, diff: on, startOf: on, endOf: on, _create: function(e) { return e } }), dn.override = function(e) { ue.extend(dn.prototype, e) };
        var ln = { _date: dn },
            un = {
                formatters: {
                    values: function(e) { return ue.isArray(e) ? e : "" + e },
                    linear: function(e, t, n) {
                        var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                        Math.abs(a) > 1 && e !== Math.floor(e) && (a = e - Math.floor(e));
                        var i = ue.log10(Math.abs(a)),
                            r = "";
                        if (0 !== e) {
                            var s = Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1]));
                            if (s < 1e-4) {
                                var o = ue.log10(Math.abs(e));
                                r = e.toExponential(Math.floor(o) - Math.floor(i))
                            } else {
                                var d = -1 * Math.floor(i);
                                d = Math.max(Math.min(d, 20), 0), r = e.toFixed(d)
                            }
                        } else r = "0";
                        return r
                    },
                    logarithmic: function(e, t, n) { var a = e / Math.pow(10, Math.floor(ue.log10(e))); return 0 === e ? "0" : 1 === a || 2 === a || 5 === a || 0 === t || t === n.length - 1 ? e.toExponential() : "" }
                }
            },
            cn = ue.valueOrDefault,
            mn = ue.valueAtIndexOrDefault;

        function hn(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(e[t].label); return a }

        function _n(e, t, n) { return ue.isArray(t) ? ue.longestText(e, n, t) : e.measureText(t).width }
        oe._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: un.formatters.values, minor: {}, major: {} } });
        var fn = fe.extend({
                getPadding: function() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 } },
                getTicks: function() { return this._ticks },
                mergeTicksOptions: function() { var e = this.options.ticks; for (var t in !1 === e.minor && (e.minor = { display: !1 }), !1 === e.major && (e.major = { display: !1 }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t])) },
                beforeUpdate: function() { ue.callback(this.options.beforeUpdate, [this]) },
                update: function(e, t, n) { var a, i, r, s, o, d, l = this; for (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = ue.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], o = l.afterBuildTicks(o) || o, l.beforeTickToLabelConversion(), r = l.convertTicksToLabels(o) || l.ticks, l.afterTickToLabelConversion(), l.ticks = r, a = 0, i = r.length; a < i; ++a) s = r[a], (d = o[a]) ? d.label = s : o.push(d = { label: s, major: !1 }); return l._ticks = o, l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l.afterUpdate(), l.minSize },
                afterUpdate: function() { ue.callback(this.options.afterUpdate, [this]) },
                beforeSetDimensions: function() { ue.callback(this.options.beforeSetDimensions, [this]) },
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                },
                afterSetDimensions: function() { ue.callback(this.options.afterSetDimensions, [this]) },
                beforeDataLimits: function() { ue.callback(this.options.beforeDataLimits, [this]) },
                determineDataLimits: ue.noop,
                afterDataLimits: function() { ue.callback(this.options.afterDataLimits, [this]) },
                beforeBuildTicks: function() { ue.callback(this.options.beforeBuildTicks, [this]) },
                buildTicks: ue.noop,
                afterBuildTicks: function(e) { var t = this; return ue.isArray(e) && e.length ? ue.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = ue.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e) },
                beforeTickToLabelConversion: function() { ue.callback(this.options.beforeTickToLabelConversion, [this]) },
                convertTicksToLabels: function() {
                    var e = this.options.ticks;
                    this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                },
                afterTickToLabelConversion: function() { ue.callback(this.options.afterTickToLabelConversion, [this]) },
                beforeCalculateTickRotation: function() { ue.callback(this.options.beforeCalculateTickRotation, [this]) },
                calculateTickRotation: function() {
                    var e = this,
                        t = e.ctx,
                        n = e.options.ticks,
                        a = hn(e._ticks),
                        i = ue.options._parseFont(n);
                    t.font = i.string;
                    var r = n.minRotation || 0;
                    if (a.length && e.options.display && e.isHorizontal())
                        for (var s, o = ue.longestText(t, i.string, a, e.longestTextCache), d = o, l = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > l && r < n.maxRotation;) {
                            var u = ue.toRadians(r);
                            if (s = Math.cos(u), Math.sin(u) * o > e.maxHeight) { r--; break }
                            r++, d = s * o
                        }
                    e.labelRotation = r
                },
                afterCalculateTickRotation: function() { ue.callback(this.options.afterCalculateTickRotation, [this]) },
                beforeFit: function() { ue.callback(this.options.beforeFit, [this]) },
                fit: function() {
                    var e = this,
                        t = e.minSize = { width: 0, height: 0 },
                        n = hn(e._ticks),
                        a = e.options,
                        i = a.ticks,
                        r = a.scaleLabel,
                        s = a.gridLines,
                        o = e._isVisible(),
                        d = a.position,
                        l = e.isHorizontal(),
                        u = ue.options._parseFont,
                        c = u(i),
                        m = a.gridLines.tickMarkLength;
                    if (t.width = l ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : o && s.drawTicks ? m : 0, t.height = l ? o && s.drawTicks ? m : 0 : e.maxHeight, r.display && o) {
                        var h = u(r),
                            _ = ue.options.toPadding(r.padding),
                            f = h.lineHeight + _.height;
                        l ? t.height += f : t.width += f
                    }
                    if (i.display && o) {
                        var p = ue.longestText(e.ctx, c.string, n, e.longestTextCache),
                            v = ue.numberOfLabelLines(n),
                            g = .5 * c.size,
                            y = e.options.ticks.padding;
                        if (e._maxLabelLines = v, e.longestLabelWidth = p, l) {
                            var M = ue.toRadians(e.labelRotation),
                                b = Math.cos(M),
                                L = Math.sin(M),
                                k = L * p + c.lineHeight * v + g;
                            t.height = Math.min(e.maxHeight, t.height + k + y), e.ctx.font = c.string;
                            var w, Y, D = _n(e.ctx, n[0], c.string),
                                T = _n(e.ctx, n[n.length - 1], c.string),
                                x = e.getPixelForTick(0) - e.left,
                                S = e.right - e.getPixelForTick(n.length - 1);
                            0 !== e.labelRotation ? (w = "bottom" === d ? b * D : b * g, Y = "bottom" === d ? b * g : b * T) : (w = D / 2, Y = T / 2), e.paddingLeft = Math.max(w - x, 0) + 3, e.paddingRight = Math.max(Y - S, 0) + 3
                        } else i.mirror ? p = 0 : p += y + g, t.width = Math.min(e.maxWidth, t.width + p), e.paddingTop = c.size / 2, e.paddingBottom = c.size / 2
                    }
                    e.handleMargins(), e.width = t.width, e.height = t.height
                },
                handleMargins: function() {
                    var e = this;
                    e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                },
                afterFit: function() { ue.callback(this.options.afterFit, [this]) },
                isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position },
                isFullWidth: function() { return this.options.fullWidth },
                getRightValue: function(e) {
                    if (ue.isNullOrUndef(e)) return NaN;
                    if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
                    if (e)
                        if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x) } else if (void 0 !== e.y) return this.getRightValue(e.y);
                    return e
                },
                getLabelForIndex: ue.noop,
                getPixelForValue: ue.noop,
                getValueForPixel: ue.noop,
                getPixelForTick: function(e) {
                    var t = this,
                        n = t.options.offset;
                    if (t.isHorizontal()) {
                        var a = t.width - (t.paddingLeft + t.paddingRight),
                            i = a / Math.max(t._ticks.length - (n ? 0 : 1), 1),
                            r = i * e + t.paddingLeft;
                        n && (r += i / 2);
                        var s = t.left + r;
                        return s += t.isFullWidth() ? t.margins.left : 0
                    }
                    var o = t.height - (t.paddingTop + t.paddingBottom);
                    return t.top + e * (o / (t._ticks.length - 1))
                },
                getPixelForDecimal: function(e) {
                    var t = this;
                    if (t.isHorizontal()) {
                        var n = t.width - (t.paddingLeft + t.paddingRight),
                            a = n * e + t.paddingLeft,
                            i = t.left + a;
                        return i += t.isFullWidth() ? t.margins.left : 0
                    }
                    return t.top + e * t.height
                },
                getBasePixel: function() { return this.getPixelForValue(this.getBaseValue()) },
                getBaseValue: function() {
                    var e = this.min,
                        t = this.max;
                    return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                },
                _autoSkip: function(e) {
                    var t, n, a = this,
                        i = a.isHorizontal(),
                        r = a.options.ticks.minor,
                        s = e.length,
                        o = !1,
                        d = r.maxTicksLimit,
                        l = a._tickSize() * (s - 1),
                        u = i ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.PaddingBottom),
                        c = [];
                    for (l > u && (o = 1 + Math.floor(l / u)), s > d && (o = Math.max(o, 1 + Math.floor(s / d))), t = 0; t < s; t++) n = e[t], o > 1 && t % o > 0 && delete n.label, c.push(n);
                    return c
                },
                _tickSize: function() {
                    var e = this,
                        t = e.isHorizontal(),
                        n = e.options.ticks.minor,
                        a = ue.toRadians(e.labelRotation),
                        i = Math.abs(Math.cos(a)),
                        r = Math.abs(Math.sin(a)),
                        s = n.autoSkipPadding || 0,
                        o = e.longestLabelWidth + s || 0,
                        d = ue.options._parseFont(n),
                        l = e._maxLabelLines * d.lineHeight + s || 0;
                    return t ? l * i > o * r ? o / i : l / r : l * r < o * i ? l / i : o / r
                },
                _isVisible: function() {
                    var e, t, n, a = this.chart,
                        i = this.options.display;
                    if ("auto" !== i) return !!i;
                    for (e = 0, t = a.data.datasets.length; e < t; ++e)
                        if (a.isDatasetVisible(e) && ((n = a.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
                    return !1
                },
                draw: function(e) {
                    var t = this,
                        n = t.options;
                    if (t._isVisible()) {
                        var a, i, r, s = t.chart,
                            o = t.ctx,
                            d = oe.global,
                            l = d.defaultFontColor,
                            u = n.ticks.minor,
                            c = n.ticks.major || u,
                            m = n.gridLines,
                            h = n.scaleLabel,
                            _ = n.position,
                            f = 0 !== t.labelRotation,
                            p = u.mirror,
                            v = t.isHorizontal(),
                            g = ue.options._parseFont,
                            y = u.display && u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                            M = cn(u.fontColor, l),
                            b = g(u),
                            L = b.lineHeight,
                            k = cn(c.fontColor, l),
                            w = g(c),
                            Y = u.padding,
                            D = u.labelOffset,
                            T = m.drawTicks ? m.tickMarkLength : 0,
                            x = cn(h.fontColor, l),
                            S = g(h),
                            C = ue.options.toPadding(h.padding),
                            H = ue.toRadians(t.labelRotation),
                            A = [],
                            O = m.drawBorder ? mn(m.lineWidth, 0, 0) : 0,
                            P = ue._alignPixel;
                        if ("top" === _ ? (a = P(s, t.bottom, O), i = t.bottom - T, r = a - O / 2) : "bottom" === _ ? (a = P(s, t.top, O), i = a + O / 2, r = t.top + T) : "left" === _ ? (a = P(s, t.right, O), i = t.right - T, r = a - O / 2) : (a = P(s, t.left, O), i = a + O / 2, r = t.left + T), ue.each(y, function(a, o) {
                                if (!ue.isNullOrUndef(a.label)) {
                                    var d, l, u, c, h, g, y, M, b, k, w, x, S, C, j, E, F = a.label;
                                    o === t.zeroLineIndex && n.offset === m.offsetGridLines ? (d = m.zeroLineWidth, l = m.zeroLineColor, u = m.zeroLineBorderDash || [], c = m.zeroLineBorderDashOffset || 0) : (d = mn(m.lineWidth, o), l = mn(m.color, o), u = m.borderDash || [], c = m.borderDashOffset || 0);
                                    var I = ue.isArray(F) ? F.length : 1,
                                        W = function(e, t, n) { var a = e.getPixelForTick(t); return n && (1 === e.getTicks().length ? a -= e.isHorizontal() ? Math.max(a - e.left, e.right - a) : Math.max(a - e.top, e.bottom - a) : a -= 0 === t ? (e.getPixelForTick(1) - a) / 2 : (a - e.getPixelForTick(t - 1)) / 2), a }(t, o, m.offsetGridLines);
                                    if (v) {
                                        var R = T + Y;
                                        W < t.left - 1e-7 && (l = "rgba(0,0,0,0)"), h = y = b = w = P(s, W, d), g = i, M = r, S = t.getPixelForTick(o) + D, "top" === _ ? (k = P(s, e.top, O) + O / 2, x = e.bottom, j = ((f ? 1 : .5) - I) * L, E = f ? "left" : "center", C = t.bottom - R) : (k = e.top, x = P(s, e.bottom, O) - O / 2, j = (f ? 0 : .5) * L, E = f ? "right" : "center", C = t.top + R)
                                    } else {
                                        var z = (p ? 0 : T) + Y;
                                        W < t.top - 1e-7 && (l = "rgba(0,0,0,0)"), h = i, y = r, g = M = k = x = P(s, W, d), C = t.getPixelForTick(o) + D, j = (1 - I) * L / 2, "left" === _ ? (b = P(s, e.left, O) + O / 2, w = e.right, E = p ? "left" : "right", S = t.right - z) : (b = e.left, w = P(s, e.right, O) - O / 2, E = p ? "right" : "left", S = t.left + z)
                                    }
                                    A.push({ tx1: h, ty1: g, tx2: y, ty2: M, x1: b, y1: k, x2: w, y2: x, labelX: S, labelY: C, glWidth: d, glColor: l, glBorderDash: u, glBorderDashOffset: c, rotation: -1 * H, label: F, major: a.major, textOffset: j, textAlign: E })
                                }
                            }), ue.each(A, function(e) {
                                var t = e.glWidth,
                                    n = e.glColor;
                                if (m.display && t && n && (o.save(), o.lineWidth = t, o.strokeStyle = n, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) {
                                    o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? w.string : b.string, o.fillStyle = e.major ? k : M, o.textBaseline = "middle", o.textAlign = e.textAlign;
                                    var a = e.label,
                                        i = e.textOffset;
                                    if (ue.isArray(a))
                                        for (var r = 0; r < a.length; ++r) o.fillText("" + a[r], 0, i), i += L;
                                    else o.fillText(a, 0, i);
                                    o.restore()
                                }
                            }), h.display) {
                            var j, E, F = 0,
                                I = S.lineHeight / 2;
                            if (v) j = t.left + (t.right - t.left) / 2, E = "bottom" === _ ? t.bottom - I - C.bottom : t.top + I + C.top;
                            else {
                                var W = "left" === _;
                                j = W ? t.left + I + C.top : t.right - I - C.top, E = t.top + (t.bottom - t.top) / 2, F = W ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(j, E), o.rotate(F), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = x, o.font = S.string, o.fillText(h.labelString, 0, 0), o.restore()
                        }
                        if (O) {
                            var R, z, N, B, $ = O,
                                V = mn(m.lineWidth, y.length - 1, 0);
                            v ? (R = P(s, t.left, $) - $ / 2, z = P(s, t.right, V) + V / 2, N = B = a) : (N = P(s, t.top, $) - $ / 2, B = P(s, t.bottom, V) + V / 2, R = z = a), o.lineWidth = O, o.strokeStyle = mn(m.color, 0), o.beginPath(), o.moveTo(R, N), o.lineTo(z, B), o.stroke()
                        }
                    }
                }
            }),
            pn = fn.extend({
                getLabels: function() { var e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels },
                determineDataLimits: function() {
                    var e, t = this,
                        n = t.getLabels();
                    t.minIndex = 0, t.maxIndex = n.length - 1, void 0 !== t.options.ticks.min && (e = n.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = n.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
                },
                buildTicks: function() {
                    var e = this,
                        t = e.getLabels();
                    e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                },
                getLabelForIndex: function(e, t) {
                    var n = this,
                        a = n.chart;
                    return a.getDatasetMeta(t).controller._getValueScaleId() === n.id ? n.getRightValue(a.data.datasets[t].data[e]) : n.ticks[e - n.minIndex]
                },
                getPixelForValue: function(e, t) {
                    var n, a = this,
                        i = a.options.offset,
                        r = Math.max(a.maxIndex + 1 - a.minIndex - (i ? 0 : 1), 1);
                    if (null != e && (n = a.isHorizontal() ? e.x : e.y), void 0 !== n || void 0 !== e && isNaN(t)) {
                        var s = a.getLabels();
                        e = n || e;
                        var o = s.indexOf(e);
                        t = -1 !== o ? o : t
                    }
                    if (a.isHorizontal()) {
                        var d = a.width / r,
                            l = d * (t - a.minIndex);
                        return i && (l += d / 2), a.left + l
                    }
                    var u = a.height / r,
                        c = u * (t - a.minIndex);
                    return i && (c += u / 2), a.top + c
                },
                getPixelForTick: function(e) { return this.getPixelForValue(this.ticks[e], e + this.minIndex, null) },
                getValueForPixel: function(e) {
                    var t = this,
                        n = t.options.offset,
                        a = Math.max(t._ticks.length - (n ? 0 : 1), 1),
                        i = t.isHorizontal(),
                        r = (i ? t.width : t.height) / a;
                    return e -= i ? t.left : t.top, n && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
                },
                getBasePixel: function() { return this.bottom }
            }),
            vn = { position: "bottom" };
        pn._defaults = vn;
        var gn = ue.noop,
            yn = ue.isNullOrUndef,
            Mn = fn.extend({
                getRightValue: function(e) { return "string" == typeof e ? +e : fn.prototype.getRightValue.call(this, e) },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options,
                        n = t.ticks;
                    if (n.beginAtZero) {
                        var a = ue.sign(e.min),
                            i = ue.sign(e.max);
                        a < 0 && i < 0 ? e.max = 0 : a > 0 && i > 0 && (e.min = 0)
                    }
                    var r = void 0 !== n.min || void 0 !== n.suggestedMin,
                        s = void 0 !== n.max || void 0 !== n.suggestedMax;
                    void 0 !== n.min ? e.min = n.min : void 0 !== n.suggestedMin && (null === e.min ? e.min = n.suggestedMin : e.min = Math.min(e.min, n.suggestedMin)), void 0 !== n.max ? e.max = n.max : void 0 !== n.suggestedMax && (null === e.max ? e.max = n.suggestedMax : e.max = Math.max(e.max, n.suggestedMax)), r !== s && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, n.beginAtZero || e.min--)
                },
                getTickLimit: function() {
                    var e, t = this.options.ticks,
                        n = t.stepSize,
                        a = t.maxTicksLimit;
                    return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), a = a || 11), a && (e = Math.min(a, e)), e
                },
                _computeTickLimit: function() { return Number.POSITIVE_INFINITY },
                handleDirectionalChanges: gn,
                buildTicks: function() {
                    var e = this,
                        t = e.options,
                        n = t.ticks,
                        a = e.getTickLimit(),
                        i = { maxTicks: a = Math.max(2, a), min: n.min, max: n.max, precision: n.precision, stepSize: ue.valueOrDefault(n.fixedStepSize, n.stepSize) },
                        r = e.ticks = function(e, t) {
                            var n, a, i, r, s = [],
                                o = e.stepSize,
                                d = o || 1,
                                l = e.maxTicks - 1,
                                u = e.min,
                                c = e.max,
                                m = e.precision,
                                h = t.min,
                                _ = t.max,
                                f = ue.niceNum((_ - h) / l / d) * d;
                            if (f < 1e-14 && yn(u) && yn(c)) return [h, _];
                            (r = Math.ceil(_ / f) - Math.floor(h / f)) > l && (f = ue.niceNum(r * f / l / d) * d), o || yn(m) ? n = Math.pow(10, ue._decimalPlaces(f)) : (n = Math.pow(10, m), f = Math.ceil(f * n) / n), a = Math.floor(h / f) * f, i = Math.ceil(_ / f) * f, o && (!yn(u) && ue.almostWhole(u / f, f / 1e3) && (a = u), !yn(c) && ue.almostWhole(c / f, f / 1e3) && (i = c)), r = (i - a) / f, r = ue.almostEquals(r, Math.round(r), f / 1e3) ? Math.round(r) : Math.ceil(r), a = Math.round(a * n) / n, i = Math.round(i * n) / n, s.push(yn(u) ? a : u);
                            for (var p = 1; p < r; ++p) s.push(Math.round((a + p * f) * n) / n);
                            return s.push(yn(c) ? i : c), s
                        }(i, e);
                    e.handleDirectionalChanges(), e.max = ue.max(r), e.min = ue.min(r), n.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                },
                convertTicksToLabels: function() {
                    var e = this;
                    e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), fn.prototype.convertTicksToLabels.call(e)
                }
            }),
            bn = { position: "left", ticks: { callback: un.formatters.linear } },
            Ln = Mn.extend({
                determineDataLimits: function() {
                    var e = this,
                        t = e.options,
                        n = e.chart,
                        a = n.data,
                        i = a.datasets,
                        r = e.isHorizontal();

                    function s(t) { return r ? t.xAxisID === e.id : t.yAxisID === e.id }
                    e.min = null, e.max = null;
                    var o = t.stacked;
                    if (void 0 === o && ue.each(i, function(e, t) {
                            if (!o) {
                                var a = n.getDatasetMeta(t);
                                n.isDatasetVisible(t) && s(a) && void 0 !== a.stack && (o = !0)
                            }
                        }), t.stacked || o) {
                        var d = {};
                        ue.each(i, function(a, i) {
                            var r = n.getDatasetMeta(i),
                                o = [r.type, void 0 === t.stacked && void 0 === r.stack ? i : "", r.stack].join(".");
                            void 0 === d[o] && (d[o] = { positiveValues: [], negativeValues: [] });
                            var l = d[o].positiveValues,
                                u = d[o].negativeValues;
                            n.isDatasetVisible(i) && s(r) && ue.each(a.data, function(n, a) {
                                var i = +e.getRightValue(n);
                                isNaN(i) || r.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, t.relativePoints ? l[a] = 100 : i < 0 ? u[a] += i : l[a] += i)
                            })
                        }), ue.each(d, function(t) {
                            var n = t.positiveValues.concat(t.negativeValues),
                                a = ue.min(n),
                                i = ue.max(n);
                            e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? i : Math.max(e.max, i)
                        })
                    } else ue.each(i, function(t, a) {
                        var i = n.getDatasetMeta(a);
                        n.isDatasetVisible(a) && s(i) && ue.each(t.data, function(t, n) {
                            var a = +e.getRightValue(t);
                            isNaN(a) || i.data[n].hidden || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a))
                        })
                    });
                    e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                },
                _computeTickLimit: function() { var e; return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = ue.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight)) },
                handleDirectionalChanges: function() { this.isHorizontal() || this.ticks.reverse() },
                getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) },
                getPixelForValue: function(e) {
                    var t = this,
                        n = t.start,
                        a = +t.getRightValue(e),
                        i = t.end - n;
                    return t.isHorizontal() ? t.left + t.width / i * (a - n) : t.bottom - t.height / i * (a - n)
                },
                getValueForPixel: function(e) {
                    var t = this,
                        n = t.isHorizontal(),
                        a = n ? t.width : t.height,
                        i = (n ? e - t.left : t.bottom - e) / a;
                    return t.start + (t.end - t.start) * i
                },
                getPixelForTick: function(e) { return this.getPixelForValue(this.ticksAsNumbers[e]) }
            }),
            kn = bn;
        Ln._defaults = kn;
        var wn = ue.valueOrDefault,
            Yn = { position: "left", ticks: { callback: un.formatters.logarithmic } };

        function Dn(e, t) { return ue.isFinite(e) && e >= 0 ? e : t }
        var Tn = fn.extend({
                determineDataLimits: function() {
                    var e = this,
                        t = e.options,
                        n = e.chart,
                        a = n.data,
                        i = a.datasets,
                        r = e.isHorizontal();

                    function s(t) { return r ? t.xAxisID === e.id : t.yAxisID === e.id }
                    e.min = null, e.max = null, e.minNotZero = null;
                    var o = t.stacked;
                    if (void 0 === o && ue.each(i, function(e, t) {
                            if (!o) {
                                var a = n.getDatasetMeta(t);
                                n.isDatasetVisible(t) && s(a) && void 0 !== a.stack && (o = !0)
                            }
                        }), t.stacked || o) {
                        var d = {};
                        ue.each(i, function(a, i) {
                            var r = n.getDatasetMeta(i),
                                o = [r.type, void 0 === t.stacked && void 0 === r.stack ? i : "", r.stack].join(".");
                            n.isDatasetVisible(i) && s(r) && (void 0 === d[o] && (d[o] = []), ue.each(a.data, function(t, n) {
                                var a = d[o],
                                    i = +e.getRightValue(t);
                                isNaN(i) || r.data[n].hidden || i < 0 || (a[n] = a[n] || 0, a[n] += i)
                            }))
                        }), ue.each(d, function(t) {
                            if (t.length > 0) {
                                var n = ue.min(t),
                                    a = ue.max(t);
                                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? a : Math.max(e.max, a)
                            }
                        })
                    } else ue.each(i, function(t, a) {
                        var i = n.getDatasetMeta(a);
                        n.isDatasetVisible(a) && s(i) && ue.each(t.data, function(t, n) {
                            var a = +e.getRightValue(t);
                            isNaN(a) || i.data[n].hidden || a < 0 || (null === e.min ? e.min = a : a < e.min && (e.min = a), null === e.max ? e.max = a : a > e.max && (e.max = a), 0 !== a && (null === e.minNotZero || a < e.minNotZero) && (e.minNotZero = a))
                        })
                    });
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function() {
                    var e = this,
                        t = e.options.ticks;
                    e.min = Dn(t.min, e.min), e.max = Dn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(ue.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(ue.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(ue.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(ue.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(ue.log10(e.max))) : e.minNotZero = 1)
                },
                buildTicks: function() {
                    var e = this,
                        t = e.options.ticks,
                        n = !e.isHorizontal(),
                        a = { min: Dn(t.min), max: Dn(t.max) },
                        i = e.ticks = function(e, t) {
                            var n, a, i = [],
                                r = wn(e.min, Math.pow(10, Math.floor(ue.log10(t.min)))),
                                s = Math.floor(ue.log10(t.max)),
                                o = Math.ceil(t.max / Math.pow(10, s));
                            0 === r ? (n = Math.floor(ue.log10(t.minNotZero)), a = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(r), r = a * Math.pow(10, n)) : (n = Math.floor(ue.log10(r)), a = Math.floor(r / Math.pow(10, n)));
                            var d = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                            do { i.push(r), 10 == ++a && (a = 1, d = ++n >= 0 ? 1 : d), r = Math.round(a * Math.pow(10, n) * d) / d } while (n < s || n === s && a < o);
                            var l = wn(e.max, r);
                            return i.push(l), i
                        }(a, e);
                    e.max = ue.max(i), e.min = ue.min(i), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && i.reverse()
                },
                convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), fn.prototype.convertTicksToLabels.call(this) },
                getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) },
                getPixelForTick: function(e) { return this.getPixelForValue(this.tickValues[e]) },
                _getFirstTickValue: function(e) {
                    var t = Math.floor(ue.log10(e)),
                        n = Math.floor(e / Math.pow(10, t));
                    return n * Math.pow(10, t)
                },
                getPixelForValue: function(e) {
                    var t, n, a, i, r, s = this,
                        o = s.options.ticks,
                        d = o.reverse,
                        l = ue.log10,
                        u = s._getFirstTickValue(s.minNotZero),
                        c = 0;
                    return e = +s.getRightValue(e), d ? (a = s.end, i = s.start, r = -1) : (a = s.start, i = s.end, r = 1), s.isHorizontal() ? (t = s.width, n = d ? s.right : s.left) : (t = s.height, r *= -1, n = d ? s.top : s.bottom), e !== a && (0 === a && (c = wn(o.fontSize, oe.global.defaultFontSize), t -= c, a = u), 0 !== e && (c += t / (l(i) - l(a)) * (l(e) - l(a))), n += r * c), n
                },
                getValueForPixel: function(e) {
                    var t, n, a, i, r = this,
                        s = r.options.ticks,
                        o = s.reverse,
                        d = ue.log10,
                        l = r._getFirstTickValue(r.minNotZero);
                    if (o ? (n = r.end, a = r.start) : (n = r.start, a = r.end), r.isHorizontal() ? (t = r.width, i = o ? r.right - e : e - r.left) : (t = r.height, i = o ? e - r.top : r.bottom - e), i !== n) {
                        if (0 === n) {
                            var u = wn(s.fontSize, oe.global.defaultFontSize);
                            i -= u, t -= u, n = l
                        }
                        i *= d(a) - d(n), i /= t, i = Math.pow(10, d(n) + i)
                    }
                    return i
                }
            }),
            xn = Yn;
        Tn._defaults = xn;
        var Sn = ue.valueOrDefault,
            Cn = ue.valueAtIndexOrDefault,
            Hn = ue.options.resolve,
            An = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: un.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function(e) { return e } } };

        function On(e) { var t = e.options; return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0 }

        function Pn(e) { var t = e.ticks; return t.display && e.display ? Sn(t.fontSize, oe.global.defaultFontSize) + 2 * t.backdropPaddingY : 0 }

        function jn(e, t, n, a, i) { return e === a || e === i ? { start: t - n / 2, end: t + n / 2 } : e < a || e > i ? { start: t - n, end: t } : { start: t, end: t + n } }

        function En(e) { return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right" }

        function Fn(e, t, n, a) {
            var i, r, s = n.y + a / 2;
            if (ue.isArray(t))
                for (i = 0, r = t.length; i < r; ++i) e.fillText(t[i], n.x, s), s += a;
            else e.fillText(t, n.x, s)
        }

        function In(e, t, n) { 90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h) }

        function Wn(e) { return ue.isNumber(e) ? e : 0 }
        var Rn = Mn.extend({
                setDimensions: function() {
                    var e = this;
                    e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Pn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
                },
                determineDataLimits: function() {
                    var e = this,
                        t = e.chart,
                        n = Number.POSITIVE_INFINITY,
                        a = Number.NEGATIVE_INFINITY;
                    ue.each(t.data.datasets, function(i, r) {
                        if (t.isDatasetVisible(r)) {
                            var s = t.getDatasetMeta(r);
                            ue.each(i.data, function(t, i) {
                                var r = +e.getRightValue(t);
                                isNaN(r) || s.data[i].hidden || (n = Math.min(r, n), a = Math.max(r, a))
                            })
                        }
                    }), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = a === Number.NEGATIVE_INFINITY ? 0 : a, e.handleTickRangeOptions()
                },
                _computeTickLimit: function() { return Math.ceil(this.drawingArea / Pn(this.options)) },
                convertTicksToLabels: function() {
                    var e = this;
                    Mn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                },
                getLabelForIndex: function(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]) },
                fit: function() {
                    var e = this.options;
                    e.display && e.pointLabels.display ? function(e) {
                        var t, n, a, i = ue.options._parseFont(e.options.pointLabels),
                            r = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop },
                            s = {};
                        e.ctx.font = i.string, e._pointLabelSizes = [];
                        var o, d, l, u = On(e);
                        for (t = 0; t < u; t++) {
                            a = e.getPointPosition(t, e.drawingArea + 5), o = e.ctx, d = i.lineHeight, l = e.pointLabels[t] || "", n = ue.isArray(l) ? { w: ue.longestText(o, o.font, l), h: l.length * d } : { w: o.measureText(l).width, h: d }, e._pointLabelSizes[t] = n;
                            var c = e.getIndexAngle(t),
                                m = ue.toDegrees(c) % 360,
                                h = jn(m, a.x, n.w, 0, 180),
                                _ = jn(m, a.y, n.h, 90, 270);
                            h.start < r.l && (r.l = h.start, s.l = c), h.end > r.r && (r.r = h.end, s.r = c), _.start < r.t && (r.t = _.start, s.t = c), _.end > r.b && (r.b = _.end, s.b = c)
                        }
                        e.setReductions(e.drawingArea, r, s)
                    }(this) : this.setCenterPoint(0, 0, 0, 0)
                },
                setReductions: function(e, t, n) {
                    var a = this,
                        i = t.l / Math.sin(n.l),
                        r = Math.max(t.r - a.width, 0) / Math.sin(n.r),
                        s = -t.t / Math.cos(n.t),
                        o = -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(n.b);
                    i = Wn(i), r = Wn(r), s = Wn(s), o = Wn(o), a.drawingArea = Math.min(Math.floor(e - (i + r) / 2), Math.floor(e - (s + o) / 2)), a.setCenterPoint(i, r, s, o)
                },
                setCenterPoint: function(e, t, n, a) {
                    var i = this,
                        r = i.width - t - i.drawingArea,
                        s = e + i.drawingArea,
                        o = n + i.drawingArea,
                        d = i.height - i.paddingTop - a - i.drawingArea;
                    i.xCenter = Math.floor((s + r) / 2 + i.left), i.yCenter = Math.floor((o + d) / 2 + i.top + i.paddingTop)
                },
                getIndexAngle: function(e) {
                    var t = 2 * Math.PI / On(this),
                        n = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                        a = n * Math.PI * 2 / 360;
                    return e * t + a
                },
                getDistanceFromCenterForValue: function(e) { var t = this; if (null === e) return 0; var n = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n },
                getPointPosition: function(e, t) { var n = this.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(n) * t + this.xCenter, y: Math.sin(n) * t + this.yCenter } },
                getPointPositionForValue: function(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)) },
                getBasePosition: function() {
                    var e = this.min,
                        t = this.max;
                    return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                },
                draw: function() {
                    var e = this,
                        t = e.options,
                        n = t.gridLines,
                        a = t.ticks;
                    if (t.display) {
                        var i = e.ctx,
                            r = this.getIndexAngle(0),
                            s = ue.options._parseFont(a);
                        (t.angleLines.display || t.pointLabels.display) && function(e) {
                            var t = e.ctx,
                                n = e.options,
                                a = n.angleLines,
                                i = n.gridLines,
                                r = n.pointLabels,
                                s = Sn(a.lineWidth, i.lineWidth),
                                o = Sn(a.color, i.color),
                                d = Pn(n);
                            t.save(), t.lineWidth = s, t.strokeStyle = o, t.setLineDash && (t.setLineDash(Hn([a.borderDash, i.borderDash, []])), t.lineDashOffset = Hn([a.borderDashOffset, i.borderDashOffset, 0]));
                            var l = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                                u = ue.options._parseFont(r);
                            t.font = u.string, t.textBaseline = "middle";
                            for (var c = On(e) - 1; c >= 0; c--) {
                                if (a.display && s && o) {
                                    var m = e.getPointPosition(c, l);
                                    t.beginPath(), t.moveTo(e.xCenter, e.yCenter), t.lineTo(m.x, m.y), t.stroke()
                                }
                                if (r.display) {
                                    var h = 0 === c ? d / 2 : 0,
                                        _ = e.getPointPosition(c, l + h + 5),
                                        f = Cn(r.fontColor, c, oe.global.defaultFontColor);
                                    t.fillStyle = f;
                                    var p = e.getIndexAngle(c),
                                        v = ue.toDegrees(p);
                                    t.textAlign = En(v), In(v, e._pointLabelSizes[c], _), Fn(t, e.pointLabels[c] || "", _, u.lineHeight)
                                }
                            }
                            t.restore()
                        }(e), ue.each(e.ticks, function(t, o) {
                            if (o > 0 || a.reverse) {
                                var d = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                                if (n.display && 0 !== o && function(e, t, n, a) {
                                        var i, r = e.ctx,
                                            s = t.circular,
                                            o = On(e),
                                            d = Cn(t.color, a - 1),
                                            l = Cn(t.lineWidth, a - 1);
                                        if ((s || o) && d && l) {
                                            if (r.save(), r.strokeStyle = d, r.lineWidth = l, r.setLineDash && (r.setLineDash(t.borderDash || []), r.lineDashOffset = t.borderDashOffset || 0), r.beginPath(), s) r.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                                            else { i = e.getPointPosition(0, n), r.moveTo(i.x, i.y); for (var u = 1; u < o; u++) i = e.getPointPosition(u, n), r.lineTo(i.x, i.y) }
                                            r.closePath(), r.stroke(), r.restore()
                                        }
                                    }(e, n, d, o), a.display) {
                                    var l = Sn(a.fontColor, oe.global.defaultFontColor);
                                    if (i.font = s.string, i.save(), i.translate(e.xCenter, e.yCenter), i.rotate(r), a.showLabelBackdrop) {
                                        var u = i.measureText(t).width;
                                        i.fillStyle = a.backdropColor, i.fillRect(-u / 2 - a.backdropPaddingX, -d - s.size / 2 - a.backdropPaddingY, u + 2 * a.backdropPaddingX, s.size + 2 * a.backdropPaddingY)
                                    }
                                    i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = l, i.fillText(t, 0, -d), i.restore()
                                }
                            }
                        })
                    }
                }
            }),
            zn = An;
        Rn._defaults = zn;
        var Nn = ue.valueOrDefault,
            Bn = Number.MIN_SAFE_INTEGER || -9007199254740991,
            $n = Number.MAX_SAFE_INTEGER || 9007199254740991,
            Vn = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
            Un = Object.keys(Vn);

        function Jn(e, t) { return e - t }

        function Gn(e) {
            var t, n, a, i = {},
                r = [];
            for (t = 0, n = e.length; t < n; ++t) a = e[t], i[a] || (i[a] = !0, r.push(a));
            return r
        }

        function qn(e, t, n, a) {
            var i = function(e, t, n) {
                    for (var a, i, r, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                        if (i = e[(a = s + o >> 1) - 1] || null, r = e[a], !i) return { lo: null, hi: r };
                        if (r[t] < n) s = a + 1;
                        else {
                            if (!(i[t] > n)) return { lo: i, hi: r };
                            o = a - 1
                        }
                    }
                    return { lo: r, hi: null }
                }(e, t, n),
                r = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
                s = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
                o = s[t] - r[t],
                d = o ? (n - r[t]) / o : 0,
                l = (s[a] - r[a]) * d;
            return r[a] + l
        }

        function Kn(e, t) {
            var n = e._adapter,
                a = e.options.time,
                i = a.parser,
                r = i || a.format,
                s = t;
            return "function" == typeof i && (s = i(s)), ue.isFinite(s) || (s = "string" == typeof r ? n.parse(s, r) : n.parse(s)), null !== s ? +s : (i || "function" != typeof r || (s = r(t), ue.isFinite(s) || (s = n.parse(s))), s)
        }

        function Zn(e, t) {
            if (ue.isNullOrUndef(t)) return null;
            var n = e.options.time,
                a = Kn(e, e.getRightValue(t));
            return null === a ? a : (n.round && (a = +e._adapter.startOf(a, n.round)), a)
        }

        function Qn(e) {
            for (var t = Un.indexOf(e) + 1, n = Un.length; t < n; ++t)
                if (Vn[Un[t]].common) return Un[t]
        }

        function Xn(e, t, n, a) {
            var i, r = e._adapter,
                s = e.options,
                o = s.time,
                d = o.unit || function(e, t, n, a) {
                    var i, r, s, o = Un.length;
                    for (i = Un.indexOf(e); i < o - 1; ++i)
                        if (r = Vn[Un[i]], s = r.steps ? r.steps[r.steps.length - 1] : $n, r.common && Math.ceil((n - t) / (s * r.size)) <= a) return Un[i];
                    return Un[o - 1]
                }(o.minUnit, t, n, a),
                l = Qn(d),
                u = Nn(o.stepSize, o.unitStepSize),
                c = "week" === d && o.isoWeekday,
                m = s.ticks.major.enabled,
                h = Vn[d],
                _ = t,
                f = n,
                p = [];
            for (u || (u = function(e, t, n, a) {
                    var i, r, s, o = t - e,
                        d = Vn[n],
                        l = d.size,
                        u = d.steps;
                    if (!u) return Math.ceil(o / (a * l));
                    for (i = 0, r = u.length; i < r && (s = u[i], !(Math.ceil(o / (l * s)) <= a)); ++i);
                    return s
                }(t, n, d, a)), c && (_ = +r.startOf(_, "isoWeek", c), f = +r.startOf(f, "isoWeek", c)), _ = +r.startOf(_, c ? "day" : d), (f = +r.startOf(f, c ? "day" : d)) < n && (f = +r.add(f, 1, d)), i = _, m && l && !c && !o.round && (i = +r.startOf(i, l), i = +r.add(i, ~~((_ - i) / (h.size * u)) * u, d)); i < f; i = +r.add(i, u, d)) p.push(+i);
            return p.push(+i), p
        }
        var ea = fn.extend({
                initialize: function() { this.mergeTicksOptions(), fn.prototype.initialize.call(this) },
                update: function() {
                    var e = this,
                        t = e.options,
                        n = t.time || (t.time = {}),
                        a = e._adapter = new ln._date(t.adapters.date);
                    return n.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), ue.mergeIf(n.displayFormats, a.formats()), fn.prototype.update.apply(e, arguments)
                },
                getRightValue: function(e) { return e && void 0 !== e.t && (e = e.t), fn.prototype.getRightValue.call(this, e) },
                determineDataLimits: function() {
                    var e, t, n, a, i, r, s = this,
                        o = s.chart,
                        d = s._adapter,
                        l = s.options.time,
                        u = l.unit || "day",
                        c = $n,
                        m = Bn,
                        h = [],
                        _ = [],
                        f = [],
                        p = o.data.labels || [];
                    for (e = 0, n = p.length; e < n; ++e) f.push(Zn(s, p[e]));
                    for (e = 0, n = (o.data.datasets || []).length; e < n; ++e)
                        if (o.isDatasetVisible(e))
                            if (i = o.data.datasets[e].data, ue.isObject(i[0]))
                                for (_[e] = [], t = 0, a = i.length; t < a; ++t) r = Zn(s, i[t]), h.push(r), _[e][t] = r;
                            else {
                                for (t = 0, a = f.length; t < a; ++t) h.push(f[t]);
                                _[e] = f.slice(0)
                            }
                    else _[e] = [];
                    f.length && (f = Gn(f).sort(Jn), c = Math.min(c, f[0]), m = Math.max(m, f[f.length - 1])), h.length && (h = Gn(h).sort(Jn), c = Math.min(c, h[0]), m = Math.max(m, h[h.length - 1])), c = Zn(s, l.min) || c, m = Zn(s, l.max) || m, c = c === $n ? +d.startOf(Date.now(), u) : c, m = m === Bn ? +d.endOf(Date.now(), u) + 1 : m, s.min = Math.min(c, m), s.max = Math.max(c + 1, m), s._horizontal = s.isHorizontal(), s._table = [], s._timestamps = { data: h, datasets: _, labels: f }
                },
                buildTicks: function() {
                    var e, t, n, a = this,
                        i = a.min,
                        r = a.max,
                        s = a.options,
                        o = s.time,
                        d = [],
                        l = [];
                    switch (s.ticks.source) {
                        case "data":
                            d = a._timestamps.data;
                            break;
                        case "labels":
                            d = a._timestamps.labels;
                            break;
                        case "auto":
                        default:
                            d = Xn(a, i, r, a.getLabelCapacity(i))
                    }
                    for ("ticks" === s.bounds && d.length && (i = d[0], r = d[d.length - 1]), i = Zn(a, o.min) || i, r = Zn(a, o.max) || r, e = 0, t = d.length; e < t; ++e)(n = d[e]) >= i && n <= r && l.push(n);
                    return a.min = i, a.max = r, a._unit = o.unit || function(e, t, n, a, i) {
                            var r, s, o = Un.length;
                            for (r = o - 1; r >= Un.indexOf(n); r--)
                                if (s = Un[r], Vn[s].common && e._adapter.diff(i, a, s) >= t.length) return s;
                            return Un[n ? Un.indexOf(n) : 0]
                        }(a, l, o.minUnit, a.min, a.max), a._majorUnit = Qn(a._unit), a._table = function(e, t, n, a) {
                            if ("linear" === a || !e.length) return [{ time: t, pos: 0 }, { time: n, pos: 1 }];
                            var i, r, s, o, d, l = [],
                                u = [t];
                            for (i = 0, r = e.length; i < r; ++i)(o = e[i]) > t && o < n && u.push(o);
                            for (u.push(n), i = 0, r = u.length; i < r; ++i) d = u[i + 1], s = u[i - 1], o = u[i], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({ time: o, pos: i / (r - 1) });
                            return l
                        }(a._timestamps.data, i, r, s.distribution), a._offsets = function(e, t, n, a, i) {
                            var r, s, o = 0,
                                d = 0;
                            return i.offset && t.length && (i.time.min || (r = qn(e, "time", t[0], "pos"), o = 1 === t.length ? 1 - r : (qn(e, "time", t[1], "pos") - r) / 2), i.time.max || (s = qn(e, "time", t[t.length - 1], "pos"), d = 1 === t.length ? s : (s - qn(e, "time", t[t.length - 2], "pos")) / 2)), { start: o, end: d }
                        }(a._table, l, 0, 0, s), s.ticks.reverse && l.reverse(),
                        function(e, t, n) { var a, i, r, s, o = []; for (a = 0, i = t.length; a < i; ++a) r = t[a], s = !!n && r === +e._adapter.startOf(r, n), o.push({ value: r, major: s }); return o }(a, l, a._majorUnit)
                },
                getLabelForIndex: function(e, t) {
                    var n = this,
                        a = n._adapter,
                        i = n.chart.data,
                        r = n.options.time,
                        s = i.labels && e < i.labels.length ? i.labels[e] : "",
                        o = i.datasets[t].data[e];
                    return ue.isObject(o) && (s = n.getRightValue(o)), r.tooltipFormat ? a.format(Kn(n, s), r.tooltipFormat) : "string" == typeof s ? s : a.format(Kn(n, s), r.displayFormats.datetime)
                },
                tickFormatFunction: function(e, t, n, a) {
                    var i = this._adapter,
                        r = this.options,
                        s = r.time.displayFormats,
                        o = s[this._unit],
                        d = this._majorUnit,
                        l = s[d],
                        u = +i.startOf(e, d),
                        c = r.ticks.major,
                        m = c.enabled && d && l && e === u,
                        h = i.format(e, a || (m ? l : o)),
                        _ = m ? c : r.ticks.minor,
                        f = Nn(_.callback, _.userCallback);
                    return f ? f(h, t, n) : h
                },
                convertTicksToLabels: function(e) { var t, n, a = []; for (t = 0, n = e.length; t < n; ++t) a.push(this.tickFormatFunction(e[t].value, t, e)); return a },
                getPixelForOffset: function(e) {
                    var t = this,
                        n = t.options.ticks.reverse,
                        a = t._horizontal ? t.width : t.height,
                        i = t._horizontal ? n ? t.right : t.left : n ? t.bottom : t.top,
                        r = qn(t._table, "time", e, "pos"),
                        s = a * (t._offsets.start + r) / (t._offsets.start + 1 + t._offsets.end);
                    return n ? i - s : i + s
                },
                getPixelForValue: function(e, t, n) { var a = null; if (void 0 !== t && void 0 !== n && (a = this._timestamps.datasets[n][t]), null === a && (a = Zn(this, e)), null !== a) return this.getPixelForOffset(a) },
                getPixelForTick: function(e) { var t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null },
                getValueForPixel: function(e) {
                    var t = this,
                        n = t._horizontal ? t.width : t.height,
                        a = t._horizontal ? t.left : t.top,
                        i = (n ? (e - a) / n : 0) * (t._offsets.start + 1 + t._offsets.start) - t._offsets.end,
                        r = qn(t._table, "pos", i, "time");
                    return t._adapter._create(r)
                },
                getLabelWidth: function(e) {
                    var t = this.options.ticks,
                        n = this.ctx.measureText(e).width,
                        a = ue.toRadians(t.maxRotation),
                        i = Math.cos(a),
                        r = Math.sin(a),
                        s = Nn(t.fontSize, oe.global.defaultFontSize);
                    return n * i + s * r
                },
                getLabelCapacity: function(e) {
                    var t = this,
                        n = t.options.time.displayFormats.millisecond,
                        a = t.tickFormatFunction(e, 0, [], n),
                        i = t.getLabelWidth(a),
                        r = t.isHorizontal() ? t.width : t.height,
                        s = Math.floor(r / i);
                    return s > 0 ? s : 1
                }
            }),
            ta = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };
        ea._defaults = ta;
        var na = { category: pn, linear: Ln, logarithmic: Tn, radialLinear: Rn, time: ea },
            aa = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
        ln._date.override("function" == typeof e ? { _id: "moment", formats: function() { return aa }, parse: function(t, n) { return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null }, format: function(t, n) { return e(t).format(n) }, add: function(t, n, a) { return e(t).add(n, a).valueOf() }, diff: function(t, n, a) { return e.duration(e(t).diff(e(n))).as(a) }, startOf: function(t, n, a) { return t = e(t), "isoWeek" === n ? t.isoWeekday(a).valueOf() : t.startOf(n).valueOf() }, endOf: function(t, n) { return e(t).endOf(n).valueOf() }, _create: function(t) { return e(t) } } : {}), oe._set("global", { plugins: { filler: { propagate: !0 } } });
        var ia = {
            dataset: function(e) {
                var t = e.fill,
                    n = e.chart,
                    a = n.getDatasetMeta(t),
                    i = a && n.isDatasetVisible(t),
                    r = i && a.dataset._children || [],
                    s = r.length || 0;
                return s ? function(e, t) { return t < s && r[t]._view || null } : null
            },
            boundary: function(e) {
                var t = e.boundary,
                    n = t ? t.x : null,
                    a = t ? t.y : null;
                return function(e) { return { x: null === n ? e.x : n, y: null === a ? e.y : a } }
            }
        };

        function ra(e, t, n) {
            var a, i = e._model || {},
                r = i.fill;
            if (void 0 === r && (r = !!i.backgroundColor), !1 === r || null === r) return !1;
            if (!0 === r) return "origin";
            if (a = parseFloat(r, 10), isFinite(a) && Math.floor(a) === a) return "-" !== r[0] && "+" !== r[0] || (a = t + a), !(a === t || a < 0 || a >= n) && a;
            switch (r) {
                case "bottom":
                    return "start";
                case "top":
                    return "end";
                case "zero":
                    return "origin";
                case "origin":
                case "start":
                case "end":
                    return r;
                default:
                    return !1
            }
        }

        function sa(e) {
            var t, n = e.el._model || {},
                a = e.el._scale || {},
                i = e.fill,
                r = null;
            if (isFinite(i)) return null;
            if ("start" === i ? r = void 0 === n.scaleBottom ? a.bottom : n.scaleBottom : "end" === i ? r = void 0 === n.scaleTop ? a.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : a.getBasePosition ? r = a.getBasePosition() : a.getBasePixel && (r = a.getBasePixel()), null != r) { if (void 0 !== r.x && void 0 !== r.y) return r; if (ue.isFinite(r)) return { x: (t = a.isHorizontal()) ? r : null, y: t ? null : r } }
            return null
        }

        function oa(e, t, n) {
            var a, i = e[t],
                r = i.fill,
                s = [t];
            if (!n) return r;
            for (; !1 !== r && -1 === s.indexOf(r);) {
                if (!isFinite(r)) return r;
                if (!(a = e[r])) return !1;
                if (a.visible) return r;
                s.push(r), r = a.fill
            }
            return !1
        }

        function da(e) {
            var t = e.fill,
                n = "dataset";
            return !1 === t ? null : (isFinite(t) || (n = "boundary"), ia[n](e))
        }

        function la(e) { return e && !e.skip }

        function ua(e, t, n, a, i) { var r; if (a && i) { for (e.moveTo(t[0].x, t[0].y), r = 1; r < a; ++r) ue.canvas.lineTo(e, t[r - 1], t[r]); for (e.lineTo(n[i - 1].x, n[i - 1].y), r = i - 1; r > 0; --r) ue.canvas.lineTo(e, n[r], n[r - 1], !0) } }
        var ca = {
                id: "filler",
                afterDatasetsUpdate: function(e, t) {
                    var n, a, i, r, s = (e.data.datasets || []).length,
                        o = t.propagate,
                        d = [];
                    for (a = 0; a < s; ++a) n = e.getDatasetMeta(a), i = n.dataset, r = null, i && i._model && i instanceof We.Line && (r = { visible: e.isDatasetVisible(a), fill: ra(i, a, s), chart: e, el: i }), n.$filler = r, d.push(r);
                    for (a = 0; a < s; ++a)(r = d[a]) && (r.fill = oa(d, a, o), r.boundary = sa(r), r.mapper = da(r))
                },
                beforeDatasetDraw: function(e, t) {
                    var n = t.meta.$filler;
                    if (n) {
                        var a = e.ctx,
                            i = n.el,
                            r = i._view,
                            s = i._children || [],
                            o = n.mapper,
                            d = r.backgroundColor || oe.global.defaultColor;
                        o && d && s.length && (ue.canvas.clipArea(a, e.chartArea), function(e, t, n, a, i, r) {
                            var s, o, d, l, u, c, m, h = t.length,
                                _ = a.spanGaps,
                                f = [],
                                p = [],
                                v = 0,
                                g = 0;
                            for (e.beginPath(), s = 0, o = h + !!r; s < o; ++s) l = t[d = s % h]._view, u = n(l, d, a), c = la(l), m = la(u), c && m ? (v = f.push(l), g = p.push(u)) : v && g && (_ ? (c && f.push(l), m && p.push(u)) : (ua(e, f, p, v, g), v = g = 0, f = [], p = []));
                            ua(e, f, p, v, g), e.closePath(), e.fillStyle = i, e.fill()
                        }(a, s, o, r, d, i._loop), ue.canvas.unclipArea(a))
                    }
                }
            },
            ma = ue.noop,
            ha = ue.valueOrDefault;

        function _a(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth }
        oe._set("global", {
            legend: {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                weight: 1e3,
                onClick: function(e, t) {
                    var n = t.datasetIndex,
                        a = this.chart,
                        i = a.getDatasetMeta(n);
                    i.hidden = null === i.hidden ? !a.data.datasets[n].hidden : null, a.update()
                },
                onHover: null,
                onLeave: null,
                labels: { boxWidth: 40, padding: 10, generateLabels: function(e) { var t = e.data; return ue.isArray(t.datasets) ? t.datasets.map(function(t, n) { return { text: t.label, fillStyle: ue.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor, hidden: !e.isDatasetVisible(n), lineCap: t.borderCapStyle, lineDash: t.borderDash, lineDashOffset: t.borderDashOffset, lineJoin: t.borderJoinStyle, lineWidth: t.borderWidth, strokeStyle: t.borderColor, pointStyle: t.pointStyle, datasetIndex: n } }, this) : [] } }
            },
            legendCallback: function(e) {
                var t = [];
                t.push('<ul class="' + e.id + '-legend">');
                for (var n = 0; n < e.data.datasets.length; n++) t.push('<li><span style="background-color:' + e.data.datasets[n].backgroundColor + '"></span>'), e.data.datasets[n].label && t.push(e.data.datasets[n].label), t.push("</li>");
                return t.push("</ul>"), t.join("")
            }
        });
        var fa = fe.extend({
            initialize: function(e) { ue.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1 },
            beforeUpdate: ma,
            update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize },
            afterUpdate: ma,
            beforeSetDimensions: ma,
            setDimensions: function() {
                var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }
            },
            afterSetDimensions: ma,
            beforeBuildLabels: ma,
            buildLabels: function() {
                var e = this,
                    t = e.options.labels || {},
                    n = ue.callback(t.generateLabels, [e.chart], e) || [];
                t.filter && (n = n.filter(function(n) { return t.filter(n, e.chart.data) })), e.options.reverse && n.reverse(), e.legendItems = n
            },
            afterBuildLabels: ma,
            beforeFit: ma,
            fit: function() {
                var e = this,
                    t = e.options,
                    n = t.labels,
                    a = t.display,
                    i = e.ctx,
                    r = ue.options._parseFont(n),
                    s = r.size,
                    o = e.legendHitBoxes = [],
                    d = e.minSize,
                    l = e.isHorizontal();
                if (l ? (d.width = e.maxWidth, d.height = a ? 10 : 0) : (d.width = a ? 10 : 0, d.height = e.maxHeight), a)
                    if (i.font = r.string, l) {
                        var u = e.lineWidths = [0],
                            c = 0;
                        i.textAlign = "left", i.textBaseline = "top", ue.each(e.legendItems, function(e, t) {
                            var a = _a(n, s),
                                r = a + s / 2 + i.measureText(e.text).width;
                            (0 === t || u[u.length - 1] + r + n.padding > d.width) && (c += s + n.padding, u[u.length - (t > 0 ? 0 : 1)] = n.padding), o[t] = { left: 0, top: 0, width: r, height: s }, u[u.length - 1] += r + n.padding
                        }), d.height += c
                    } else {
                        var m = n.padding,
                            h = e.columnWidths = [],
                            _ = n.padding,
                            f = 0,
                            p = 0,
                            v = s + m;
                        ue.each(e.legendItems, function(e, t) {
                            var a = _a(n, s),
                                r = a + s / 2 + i.measureText(e.text).width;
                            t > 0 && p + v > d.height - m && (_ += f + n.padding, h.push(f), f = 0, p = 0), f = Math.max(f, r), p += v, o[t] = { left: 0, top: 0, width: r, height: s }
                        }), _ += f, h.push(f), d.width += _
                    }
                e.width = d.width, e.height = d.height
            },
            afterFit: ma,
            isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position },
            draw: function() {
                var e = this,
                    t = e.options,
                    n = t.labels,
                    a = oe.global,
                    i = a.defaultColor,
                    r = a.elements.line,
                    s = e.width,
                    o = e.lineWidths;
                if (t.display) {
                    var d, l = e.ctx,
                        u = ha(n.fontColor, a.defaultFontColor),
                        c = ue.options._parseFont(n),
                        m = c.size;
                    l.textAlign = "left", l.textBaseline = "middle", l.lineWidth = .5, l.strokeStyle = u, l.fillStyle = u, l.font = c.string;
                    var h = _a(n, m),
                        _ = e.legendHitBoxes,
                        f = e.isHorizontal();
                    d = f ? { x: e.left + (s - o[0]) / 2 + n.padding, y: e.top + n.padding, line: 0 } : { x: e.left + n.padding, y: e.top + n.padding, line: 0 };
                    var p = m + n.padding;
                    ue.each(e.legendItems, function(a, u) {
                        var c = l.measureText(a.text).width,
                            v = h + m / 2 + c,
                            g = d.x,
                            y = d.y;
                        f ? u > 0 && g + v + n.padding > e.left + e.minSize.width && (y = d.y += p, d.line++, g = d.x = e.left + (s - o[d.line]) / 2 + n.padding) : u > 0 && y + p > e.top + e.minSize.height && (g = d.x = g + e.columnWidths[d.line] + n.padding, y = d.y = e.top + n.padding, d.line++),
                            function(e, n, a) {
                                if (!(isNaN(h) || h <= 0)) {
                                    l.save();
                                    var s = ha(a.lineWidth, r.borderWidth);
                                    if (l.fillStyle = ha(a.fillStyle, i), l.lineCap = ha(a.lineCap, r.borderCapStyle), l.lineDashOffset = ha(a.lineDashOffset, r.borderDashOffset), l.lineJoin = ha(a.lineJoin, r.borderJoinStyle), l.lineWidth = s, l.strokeStyle = ha(a.strokeStyle, i), l.setLineDash && l.setLineDash(ha(a.lineDash, r.borderDash)), t.labels && t.labels.usePointStyle) {
                                        var o = h * Math.SQRT2 / 2,
                                            d = e + h / 2,
                                            u = n + m / 2;
                                        ue.canvas.drawPoint(l, a.pointStyle, o, d, u)
                                    } else 0 !== s && l.strokeRect(e, n, h, m), l.fillRect(e, n, h, m);
                                    l.restore()
                                }
                            }(g, y, a), _[u].left = g, _[u].top = y,
                            function(e, t, n, a) {
                                var i = m / 2,
                                    r = h + i + e,
                                    s = t + i;
                                l.fillText(n.text, r, s), n.hidden && (l.beginPath(), l.lineWidth = 2, l.moveTo(r, s), l.lineTo(r + a, s), l.stroke())
                            }(g, y, a, c), f ? d.x += v + n.padding : d.y += p
                    })
                }
            },
            _getLegendItemAt: function(e, t) {
                var n, a, i, r = this;
                if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom)
                    for (i = r.legendHitBoxes, n = 0; n < i.length; ++n)
                        if (a = i[n], e >= a.left && e <= a.left + a.width && t >= a.top && t <= a.top + a.height) return r.legendItems[n];
                return null
            },
            handleEvent: function(e) {
                var t, n = this,
                    a = n.options,
                    i = "mouseup" === e.type ? "click" : e.type;
                if ("mousemove" === i) { if (!a.onHover && !a.onLeave) return } else { if ("click" !== i) return; if (!a.onClick) return }
                t = n._getLegendItemAt(e.x, e.y), "click" === i ? t && a.onClick && a.onClick.call(n, e.native, t) : (a.onLeave && t !== n._hoveredItem && (n._hoveredItem && a.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), a.onHover && t && a.onHover.call(n, e.native, t))
            }
        });

        function pa(e, t) {
            var n = new fa({ ctx: e.ctx, options: t, chart: e });
            Lt.configure(e, n, t), Lt.addBox(e, n), e.legend = n
        }
        var va = {
                id: "legend",
                _element: fa,
                beforeInit: function(e) {
                    var t = e.options.legend;
                    t && pa(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.legend,
                        n = e.legend;
                    t ? (ue.mergeIf(t, oe.global.legend), n ? (Lt.configure(e, n, t), n.options = t) : pa(e, t)) : n && (Lt.removeBox(e, n), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var n = e.legend;
                    n && n.handleEvent(t)
                }
            },
            ga = ue.noop;
        oe._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } });
        var ya = fe.extend({
            initialize: function(e) { ue.extend(this, e), this.legendHitBoxes = [] },
            beforeUpdate: ga,
            update: function(e, t, n) { var a = this; return a.beforeUpdate(), a.maxWidth = e, a.maxHeight = t, a.margins = n, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize },
            afterUpdate: ga,
            beforeSetDimensions: ga,
            setDimensions: function() {
                var e = this;
                e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }
            },
            afterSetDimensions: ga,
            beforeBuildLabels: ga,
            buildLabels: ga,
            afterBuildLabels: ga,
            beforeFit: ga,
            fit: function() {
                var e = this,
                    t = e.options,
                    n = t.display,
                    a = e.minSize,
                    i = ue.isArray(t.text) ? t.text.length : 1,
                    r = ue.options._parseFont(t),
                    s = n ? i * r.lineHeight + 2 * t.padding : 0;
                e.isHorizontal() ? (a.width = e.maxWidth, a.height = s) : (a.width = s, a.height = e.maxHeight), e.width = a.width, e.height = a.height
            },
            afterFit: ga,
            isHorizontal: function() { var e = this.options.position; return "top" === e || "bottom" === e },
            draw: function() {
                var e = this,
                    t = e.ctx,
                    n = e.options;
                if (n.display) {
                    var a, i, r, s = ue.options._parseFont(n),
                        o = s.lineHeight,
                        d = o / 2 + n.padding,
                        l = 0,
                        u = e.top,
                        c = e.left,
                        m = e.bottom,
                        h = e.right;
                    t.fillStyle = ue.valueOrDefault(n.fontColor, oe.global.defaultFontColor), t.font = s.string, e.isHorizontal() ? (i = c + (h - c) / 2, r = u + d, a = h - c) : (i = "left" === n.position ? c + d : h - d, r = u + (m - u) / 2, a = m - u, l = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(i, r), t.rotate(l), t.textAlign = "center", t.textBaseline = "middle";
                    var _ = n.text;
                    if (ue.isArray(_))
                        for (var f = 0, p = 0; p < _.length; ++p) t.fillText(_[p], 0, f, a), f += o;
                    else t.fillText(_, 0, 0, a);
                    t.restore()
                }
            }
        });

        function Ma(e, t) {
            var n = new ya({ ctx: e.ctx, options: t, chart: e });
            Lt.configure(e, n, t), Lt.addBox(e, n), e.titleBlock = n
        }
        var ba = {},
            La = ca,
            ka = va,
            wa = {
                id: "title",
                _element: ya,
                beforeInit: function(e) {
                    var t = e.options.title;
                    t && Ma(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.title,
                        n = e.titleBlock;
                    t ? (ue.mergeIf(t, oe.global.title), n ? (Lt.configure(e, n, t), n.options = t) : Ma(e, t)) : n && (Lt.removeBox(e, n), delete e.titleBlock)
                }
            };
        for (var Ya in ba.filler = La, ba.legend = ka, ba.title = wa, sn.helpers = ue,
                function() {
                    function e(e, t, n) { var a; return "string" == typeof e ? (a = parseInt(e, 10), -1 !== e.indexOf("%") && (a = a / 100 * t.parentNode[n])) : a = e, a }

                    function t(e) { return null != e && "none" !== e }

                    function n(n, a, i) {
                        var r = document.defaultView,
                            s = ue._getParentNode(n),
                            o = r.getComputedStyle(n)[a],
                            d = r.getComputedStyle(s)[a],
                            l = t(o),
                            u = t(d),
                            c = Number.POSITIVE_INFINITY;
                        return l || u ? Math.min(l ? e(o, n, i) : c, u ? e(d, s, i) : c) : "none"
                    }
                    ue.where = function(e, t) { if (ue.isArray(e) && Array.prototype.filter) return e.filter(t); var n = []; return ue.each(e, function(e) { t(e) && n.push(e) }), n }, ue.findIndex = Array.prototype.findIndex ? function(e, t, n) { return e.findIndex(t, n) } : function(e, t, n) {
                        n = void 0 === n ? e : n;
                        for (var a = 0, i = e.length; a < i; ++a)
                            if (t.call(n, e[a], a, e)) return a;
                        return -1
                    }, ue.findNextWhere = function(e, t, n) { ue.isNullOrUndef(n) && (n = -1); for (var a = n + 1; a < e.length; a++) { var i = e[a]; if (t(i)) return i } }, ue.findPreviousWhere = function(e, t, n) { ue.isNullOrUndef(n) && (n = e.length); for (var a = n - 1; a >= 0; a--) { var i = e[a]; if (t(i)) return i } }, ue.isNumber = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, ue.almostEquals = function(e, t, n) { return Math.abs(e - t) < n }, ue.almostWhole = function(e, t) { var n = Math.round(e); return n - t < e && n + t > e }, ue.max = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.max(e, t) }, Number.NEGATIVE_INFINITY) }, ue.min = function(e) { return e.reduce(function(e, t) { return isNaN(t) ? e : Math.min(e, t) }, Number.POSITIVE_INFINITY) }, ue.sign = Math.sign ? function(e) { return Math.sign(e) } : function(e) { return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1 }, ue.log10 = Math.log10 ? function(e) { return Math.log10(e) } : function(e) {
                        var t = Math.log(e) * Math.LOG10E,
                            n = Math.round(t),
                            a = e === Math.pow(10, n);
                        return a ? n : t
                    }, ue.toRadians = function(e) { return e * (Math.PI / 180) }, ue.toDegrees = function(e) { return e * (180 / Math.PI) }, ue._decimalPlaces = function(e) { if (ue.isFinite(e)) { for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++; return n } }, ue.getAngleFromPoint = function(e, t) {
                        var n = t.x - e.x,
                            a = t.y - e.y,
                            i = Math.sqrt(n * n + a * a),
                            r = Math.atan2(a, n);
                        return r < -.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: i }
                    }, ue.distanceBetweenPoints = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) }, ue.aliasPixel = function(e) { return e % 2 == 0 ? 0 : .5 }, ue._alignPixel = function(e, t, n) {
                        var a = e.currentDevicePixelRatio,
                            i = n / 2;
                        return Math.round((t - i) * a) / a + i
                    }, ue.splineCurve = function(e, t, n, a) {
                        var i = e.skip ? t : e,
                            r = t,
                            s = n.skip ? t : n,
                            o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                            d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                            l = o / (o + d),
                            u = d / (o + d);
                        l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u;
                        var c = a * l,
                            m = a * u;
                        return { previous: { x: r.x - c * (s.x - i.x), y: r.y - c * (s.y - i.y) }, next: { x: r.x + m * (s.x - i.x), y: r.y + m * (s.y - i.y) } }
                    }, ue.EPSILON = Number.EPSILON || 1e-14, ue.splineCurveMonotone = function(e) {
                        var t, n, a, i, r, s, o, d, l, u = (e || []).map(function(e) { return { model: e._model, deltaK: 0, mK: 0 } }),
                            c = u.length;
                        for (t = 0; t < c; ++t)
                            if (!(a = u[t]).model.skip) {
                                if (n = t > 0 ? u[t - 1] : null, (i = t < c - 1 ? u[t + 1] : null) && !i.model.skip) {
                                    var m = i.model.x - a.model.x;
                                    a.deltaK = 0 !== m ? (i.model.y - a.model.y) / m : 0
                                }!n || n.model.skip ? a.mK = a.deltaK : !i || i.model.skip ? a.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (n.deltaK + a.deltaK) / 2
                            }
                        for (t = 0; t < c - 1; ++t) a = u[t], i = u[t + 1], a.model.skip || i.model.skip || (ue.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = i.mK = 0 : (r = a.mK / a.deltaK, s = i.mK / a.deltaK, (d = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (o = 3 / Math.sqrt(d), a.mK = r * o * a.deltaK, i.mK = s * o * a.deltaK)));
                        for (t = 0; t < c; ++t)(a = u[t]).model.skip || (n = t > 0 ? u[t - 1] : null, i = t < c - 1 ? u[t + 1] : null, n && !n.model.skip && (l = (a.model.x - n.model.x) / 3, a.model.controlPointPreviousX = a.model.x - l, a.model.controlPointPreviousY = a.model.y - l * a.mK), i && !i.model.skip && (l = (i.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + l, a.model.controlPointNextY = a.model.y + l * a.mK))
                    }, ue.nextItem = function(e, t, n) { return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1] }, ue.previousItem = function(e, t, n) { return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1] }, ue.niceNum = function(e, t) {
                        var n = Math.floor(ue.log10(e)),
                            a = e / Math.pow(10, n);
                        return (t ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10) * Math.pow(10, n)
                    }, ue.requestAnimFrame = "undefined" == typeof window ? function(e) { e() } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3 / 60) }, ue.getRelativePosition = function(e, t) {
                        var n, a, i = e.originalEvent || e,
                            r = e.target || e.srcElement,
                            s = r.getBoundingClientRect(),
                            o = i.touches;
                        o && o.length > 0 ? (n = o[0].clientX, a = o[0].clientY) : (n = i.clientX, a = i.clientY);
                        var d = parseFloat(ue.getStyle(r, "padding-left")),
                            l = parseFloat(ue.getStyle(r, "padding-top")),
                            u = parseFloat(ue.getStyle(r, "padding-right")),
                            c = parseFloat(ue.getStyle(r, "padding-bottom")),
                            m = s.right - s.left - d - u,
                            h = s.bottom - s.top - l - c;
                        return n = Math.round((n - s.left - d) / m * r.width / t.currentDevicePixelRatio), a = Math.round((a - s.top - l) / h * r.height / t.currentDevicePixelRatio), { x: n, y: a }
                    }, ue.getConstraintWidth = function(e) { return n(e, "max-width", "clientWidth") }, ue.getConstraintHeight = function(e) { return n(e, "max-height", "clientHeight") }, ue._calculatePadding = function(e, t, n) { return (t = ue.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10) }, ue._getParentNode = function(e) { var t = e.parentNode; return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t }, ue.getMaximumWidth = function(e) {
                        var t = ue._getParentNode(e);
                        if (!t) return e.clientWidth;
                        var n = t.clientWidth,
                            a = ue._calculatePadding(t, "padding-left", n),
                            i = ue._calculatePadding(t, "padding-right", n),
                            r = n - a - i,
                            s = ue.getConstraintWidth(e);
                        return isNaN(s) ? r : Math.min(r, s)
                    }, ue.getMaximumHeight = function(e) {
                        var t = ue._getParentNode(e);
                        if (!t) return e.clientHeight;
                        var n = t.clientHeight,
                            a = ue._calculatePadding(t, "padding-top", n),
                            i = ue._calculatePadding(t, "padding-bottom", n),
                            r = n - a - i,
                            s = ue.getConstraintHeight(e);
                        return isNaN(s) ? r : Math.min(r, s)
                    }, ue.getStyle = function(e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t) }, ue.retinaScale = function(e, t) {
                        var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
                        if (1 !== n) {
                            var a = e.canvas,
                                i = e.height,
                                r = e.width;
                            a.height = i * n, a.width = r * n, e.ctx.scale(n, n), a.style.height || a.style.width || (a.style.height = i + "px", a.style.width = r + "px")
                        }
                    }, ue.fontString = function(e, t, n) { return t + " " + e + "px " + n }, ue.longestText = function(e, t, n, a) {
                        var i = (a = a || {}).data = a.data || {},
                            r = a.garbageCollect = a.garbageCollect || [];
                        a.font !== t && (i = a.data = {}, r = a.garbageCollect = [], a.font = t), e.font = t;
                        var s = 0;
                        ue.each(n, function(t) { null != t && !0 !== ue.isArray(t) ? s = ue.measureText(e, i, r, s, t) : ue.isArray(t) && ue.each(t, function(t) { null == t || ue.isArray(t) || (s = ue.measureText(e, i, r, s, t)) }) });
                        var o = r.length / 2;
                        if (o > n.length) {
                            for (var d = 0; d < o; d++) delete i[r[d]];
                            r.splice(0, o)
                        }
                        return s
                    }, ue.measureText = function(e, t, n, a, i) { var r = t[i]; return r || (r = t[i] = e.measureText(i).width, n.push(i)), r > a && (a = r), a }, ue.numberOfLabelLines = function(e) { var t = 1; return ue.each(e, function(e) { ue.isArray(e) && e.length > t && (t = e.length) }), t }, ue.color = J ? function(e) { return e instanceof CanvasGradient && (e = oe.global.defaultColor), J(e) } : function(e) { return console.error("Color.js not found!"), e }, ue.getHoverColor = function(e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : ue.color(e).saturate(.5).darken(.1).rgbString() }
                }(), sn._adapters = ln, sn.Animation = ve, sn.animationService = ge, sn.controllers = ut, sn.DatasetController = ke, sn.defaults = oe, sn.Element = fe, sn.elements = We, sn.Interaction = vt, sn.layouts = Lt, sn.platform = Rt, sn.plugins = zt, sn.Scale = fn, sn.scaleService = Nt, sn.Ticks = un, sn.Tooltip = Qt, sn.helpers.each(na, function(e, t) { sn.scaleService.registerScaleType(t, e, e._defaults) }), ba) ba.hasOwnProperty(Ya) && sn.plugins.register(ba[Ya]);
        sn.platform.initialize();
        var Da = sn;
        return "undefined" != typeof window && (window.Chart = sn), sn.Chart = sn, sn.Legend = ba.legend._element, sn.Title = ba.title._element, sn.pluginService = sn.plugins, sn.PluginBase = sn.Element.extend({}), sn.canvasHelpers = sn.helpers.canvas, sn.layoutService = sn.layouts, sn.LinearScaleBase = Mn, sn.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(e) { sn[e] = function(t, n) { return new sn(t, sn.helpers.merge(n || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })) } }), Da
    }(function() { try { return n(0) } catch (e) {} }())
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/647009ac26175ee652b454b89fb6ef5d.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/e8cd4bf1753daef1835667012999c6ba.png" }, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[MÃ´re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù " },
            n = { "Ù¡": "1", "Ù¢": "2", "Ù£": "3", "Ù¤": "4", "Ù¥": "5", "Ù¦": "6", "Ù§": "7", "Ù¨": "8", "Ù©": "9", "Ù ": "0" },
            a = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
            i = { s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"], m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"], h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"], d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"], M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"], y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"] },
            r = function(e) {
                return function(t, n, r, s) {
                    var o = a(t),
                        d = i[e][a(t)];
                    return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            s = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar", { months: s, monthsShort: s, weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/â€M/â€YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /Øµ|Ù…/, isPM: function(e) { return "Ù…" === e }, meridiem: function(e, t, n) { return e < 12 ? "Øµ" : "Ù…" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "Ø¨Ø¹Ø¯ %s", past: "Ù…Ù†Ø° %s", s: r("s"), ss: r("s"), m: r("m"), mm: r("m"), h: r("h"), hh: r("h"), d: r("d"), dd: r("d"), M: r("M"), MM: r("M"), y: r("y"), yy: r("y") }, preparse: function(e) { return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) { return n[e] }).replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "ØŒ") }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-dz", { months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø£Ø­_Ø¥Ø«_Ø«Ù„Ø§_Ø£Ø±_Ø®Ù…_Ø¬Ù…_Ø³Ø¨".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", ss: "%d Ø«Ø§Ù†ÙŠØ©", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª" }, week: { dow: 0, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-kw", { months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", ss: "%d Ø«Ø§Ù†ÙŠØ©", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª" }, week: { dow: 0, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
            n = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
            a = { s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"], m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"], h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"], d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"], M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"], y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"] },
            i = function(e) {
                return function(t, i, r, s) {
                    var o = n(t),
                        d = a[e][n(t)];
                    return 2 === o && (d = d[i ? 0 : 1]), d.replace(/%d/i, t)
                }
            },
            r = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
        e.defineLocale("ar-ly", { months: r, monthsShort: r, weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/â€M/â€YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /Øµ|Ù…/, isPM: function(e) { return "Ù…" === e }, meridiem: function(e, t, n) { return e < 12 ? "Øµ" : "Ù…" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "Ø¨Ø¹Ø¯ %s", past: "Ù…Ù†Ø° %s", s: i("s"), ss: i("s"), m: i("m"), mm: i("m"), h: i("h"), hh: i("h"), d: i("d"), dd: i("d"), M: i("M"), MM: i("M"), y: i("y"), yy: i("y") }, preparse: function(e) { return e.replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "ØŒ") }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-ma", { months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", ss: "%d Ø«Ø§Ù†ÙŠØ©", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª" }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù " },
            n = { "Ù¡": "1", "Ù¢": "2", "Ù£": "3", "Ù¤": "4", "Ù¥": "5", "Ù¦": "6", "Ù§": "7", "Ù¨": "8", "Ù©": "9", "Ù ": "0" };
        e.defineLocale("ar-sa", { months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /Øµ|Ù…/, isPM: function(e) { return "Ù…" === e }, meridiem: function(e, t, n) { return e < 12 ? "Øµ" : "Ù…" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", ss: "%d Ø«Ø§Ù†ÙŠØ©", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª" }, preparse: function(e) { return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) { return n[e] }).replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "ØŒ") }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ar-tn", { months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"), weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"), weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"), weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT", sameElse: "L" }, relativeTime: { future: "ÙÙŠ %s", past: "Ù…Ù†Ø° %s", s: "Ø«ÙˆØ§Ù†", ss: "%d Ø«Ø§Ù†ÙŠØ©", m: "Ø¯Ù‚ÙŠÙ‚Ø©", mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚", h: "Ø³Ø§Ø¹Ø©", hh: "%d Ø³Ø§Ø¹Ø§Øª", d: "ÙŠÙˆÙ…", dd: "%d Ø£ÙŠØ§Ù…", M: "Ø´Ù‡Ø±", MM: "%d Ø£Ø´Ù‡Ø±", y: "Ø³Ù†Ø©", yy: "%d Ø³Ù†ÙˆØ§Øª" }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-Ã¼ncÃ¼", 4: "-Ã¼ncÃ¼", 100: "-Ã¼ncÃ¼", 6: "-ncÄ±", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-Ä±ncÄ±", 90: "-Ä±ncÄ±" };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
            weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
            weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[bugÃ¼n saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT", lastDay: "[dÃ¼nÉ™n] LT", lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT", sameElse: "L" },
            relativeTime: { future: "%s sonra", past: "%s É™vvÉ™l", s: "birneÃ§É™ saniyÉ™", ss: "%d saniyÉ™", m: "bir dÉ™qiqÉ™", mm: "%d dÉ™qiqÉ™", h: "bir saat", hh: "%d saat", d: "bir gÃ¼n", dd: "%d gÃ¼n", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" },
            meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
            isPM: function(e) { return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e) },
            meridiem: function(e, t, n) { return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-Ä±ncÄ±";
                var n = e % 10,
                    a = e % 100 - n,
                    i = e >= 100 ? 100 : null;
                return e + (t[n] || t[a] || t[i])
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) { var a, i, r = { ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´", mm: t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½", hh: t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½", dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½", MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž", yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž" }; return "m" === n ? t ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + (a = +e, i = r[n].split("_"), a % 10 == 1 && a % 100 != 11 ? i[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? i[1] : i[2]) }
        e.defineLocale("be", {
            months: { format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"), standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_") },
            monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
            weekdays: { format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"), standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"), isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/ },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ð³.", LLL: "D MMMM YYYY Ð³., HH:mm", LLLL: "dddd, D MMMM YYYY Ð³., HH:mm" },
            calendar: {
                sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                nextWeek: function() { return "[Ð£] dddd [Ñž] LT" },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ð¿Ñ€Ð°Ð· %s", past: "%s Ñ‚Ð°Ð¼Ñƒ", s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´", m: t, mm: t, h: t, hh: t, d: "Ð´Ð·ÐµÐ½ÑŒ", dd: t, M: "Ð¼ÐµÑÑÑ†", MM: t, y: "Ð³Ð¾Ð´", yy: t },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
            isPM: function(e) { return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e) },
            meridiem: function(e, t, n) { return e < 4 ? "Ð½Ð¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
                    case "D":
                        return e + "-Ð³Ð°";
                    default:
                        return e
                }
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                nextWeek: "dddd [Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "ÑÐ»ÐµÐ´ %s", past: "Ð¿Ñ€ÐµÐ´Ð¸ %s", s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸", ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸", m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸", h: "Ñ‡Ð°Ñ", hh: "%d Ñ‡Ð°ÑÐ°", d: "Ð´ÐµÐ½", dd: "%d Ð´Ð½Ð¸", M: "Ð¼ÐµÑÐµÑ†", MM: "%d Ð¼ÐµÑÐµÑ†Ð°", y: "Ð³Ð¾Ð´Ð¸Ð½Ð°", yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸" },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"), weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm" }, calendar: { sameDay: "[Bi lÉ›rÉ›] LT", nextDay: "[Sini lÉ›rÉ›] LT", nextWeek: "dddd [don lÉ›rÉ›] LT", lastDay: "[Kunu lÉ›rÉ›] LT", lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT", sameElse: "L" }, relativeTime: { future: "%s kÉ”nÉ”", past: "a bÉ› %s bÉ”", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "lÉ›rÉ› kelen", hh: "lÉ›rÉ› %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à§§", 2: "à§¨", 3: "à§©", 4: "à§ª", 5: "à§«", 6: "à§¬", 7: "à§­", 8: "à§®", 9: "à§¯", 0: "à§¦" },
            n = { "à§§": "1", "à§¨": "2", "à§©": "3", "à§ª": "4", "à§«": "5", "à§¬": "6", "à§­": "7", "à§®": "8", "à§¯": "9", "à§¦": "0" };
        e.defineLocale("bn", { months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"), monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦†à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"), weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"), weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"), weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦ƒ_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"), longDateFormat: { LT: "A h:mm à¦¸à¦®à§Ÿ", LTS: "A h:mm:ss à¦¸à¦®à§Ÿ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ", LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ" }, calendar: { sameDay: "[à¦†à¦œ] LT", nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT", nextWeek: "dddd, LT", lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT", lastWeek: "[à¦—à¦¤] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à¦ªà¦°à§‡", past: "%s à¦†à¦—à§‡", s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡", ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡", m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ", mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ", h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾", hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾", d: "à¦à¦• à¦¦à¦¿à¦¨", dd: "%d à¦¦à¦¿à¦¨", M: "à¦à¦• à¦®à¦¾à¦¸", MM: "%d à¦®à¦¾à¦¸", y: "à¦à¦• à¦¬à¦›à¦°", yy: "%d à¦¬à¦›à¦°" }, preparse: function(e) { return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à¼¡", 2: "à¼¢", 3: "à¼£", 4: "à¼¤", 5: "à¼¥", 6: "à¼¦", 7: "à¼§", 8: "à¼¨", 9: "à¼©", 0: "à¼ " },
            n = { "à¼¡": "1", "à¼¢": "2", "à¼£": "3", "à¼¤": "4", "à¼¥": "5", "à¼¦": "6", "à¼§": "7", "à¼¨": "8", "à¼©": "9", "à¼ ": "0" };
        e.defineLocale("bo", { months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"), monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"), weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"), weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"), weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT", nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT", nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT", lastDay: "[à½à¼‹à½¦à½„] LT", lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à½£à¼‹", past: "%s à½¦à¾”à½“à¼‹à½£", s: "à½£à½˜à¼‹à½¦à½„", ss: "%d à½¦à¾à½¢à¼‹à½†à¼", m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚", mm: "%d à½¦à¾à½¢à¼‹à½˜", h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚", hh: "%d à½†à½´à¼‹à½šà½¼à½‘", d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚", dd: "%d à½‰à½²à½“à¼‹", M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚", MM: "%d à½Ÿà¾³à¼‹à½–", y: "à½£à½¼à¼‹à½‚à½…à½²à½‚", yy: "%d à½£à½¼" }, preparse: function(e) { return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) { return e + " " + function(e, t) { return 2 === t ? function(e) { var t = { m: "v", b: "v", d: "z" }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }(e) : e }({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e) }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" },
            calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoÃ¹",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz"
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
            ordinal: function(e) { var t = 1 === e ? "aÃ±" : "vet"; return e + t },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ca", { months: { standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aquÃ­ %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/, ordinal: function(e, t) { var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨"; return "w" !== t && "W" !== t || (n = "a"), e + n }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
            n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
            a = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
            i = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

        function r(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

        function s(e, t, n, a) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "pÃ¡r sekund" : "pÃ¡r sekundami";
                case "ss":
                    return t || a ? i + (r(e) ? "sekundy" : "sekund") : i + "sekundami";
                case "m":
                    return t ? "minuta" : a ? "minutu" : "minutou";
                case "mm":
                    return t || a ? i + (r(e) ? "minuty" : "minut") : i + "minutami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? i + (r(e) ? "hodiny" : "hodin") : i + "hodinami";
                case "d":
                    return t || a ? "den" : "dnem";
                case "dd":
                    return t || a ? i + (r(e) ? "dny" : "dnÃ­") : i + "dny";
                case "M":
                    return t || a ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
                case "MM":
                    return t || a ? i + (r(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : i + "mÄ›sÃ­ci";
                case "y":
                    return t || a ? "rok" : "rokem";
                case "yy":
                    return t || a ? i + (r(e) ? "roky" : "let") : i + "lety"
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: i,
            monthsShortRegex: i,
            monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
            weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zÃ­tra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[vÄera v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "pÅ™ed %s", s: s, ss: s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cv", { months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"), monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"), weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"), weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"), weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]", LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm", LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm" }, calendar: { sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]", sameElse: "L" }, relativeTime: { future: function(e) { var t = /ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½"; return e + t }, past: "%s ÐºÐ°ÑÐ»Ð»Ð°", s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚", ss: "%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚", m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚", h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚", hh: "%d ÑÐµÑ…ÐµÑ‚", d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…", MM: "%d ÑƒÐ¹Ó‘Ñ…", y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»", yy: "%d Ò«ÑƒÐ»" }, dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/, ordinal: "%d-Ð¼Ó—Ñˆ", week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" },
            relativeTime: { future: "mewn %s", past: "%s yn Ã´l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = e,
                    n = "";
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "pÃ¥ dddd [kl.] LT", lastDay: "[i gÃ¥r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "fÃ¥ sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "et Ã¥r", yy: "%d Ã¥r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? i[n][0] : i[n][1] }
        e.defineLocale("de", { months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? i[n][0] : i[n][1] }
        e.defineLocale("de-at", { months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? i[n][0] : i[n][1] }
        e.defineLocale("de-ch", { months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
            n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"];
        e.defineLocale("dv", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/, isPM: function(e) { return "Þ‰ÞŠ" === e }, meridiem: function(e, t, n) { return e < 12 ? "Þ‰Þ†" : "Þ‰ÞŠ" }, calendar: { sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT", nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT", nextWeek: "dddd LT", lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT", lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT", sameElse: "L" }, relativeTime: { future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s", past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s", s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°", ss: "d% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª", m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°", mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d", h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°", hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d", d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°", dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d", M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°", MM: "Þ‰Þ¦ÞÞ° %d", y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°", yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d" }, preparse: function(e) { return e.replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/,/g, "ØŒ") }, week: { dow: 7, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
            monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
            months: function(e, t) { return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl },
            monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
            weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
            weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
            weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
            meridiem: function(e, t, n) { return e > 11 ? n ? "Î¼Î¼" : "ÎœÎœ" : n ? "Ï€Î¼" : "Î Îœ" },
            isPM: function(e) { return "Î¼" === (e + "").toLowerCase()[0] },
            meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
            longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
            calendarEl: {
                sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 6:
                            return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                        default:
                            return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, a = this._calendarEl[e],
                    i = t && t.hours();
                return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), a.replace("{}", i % 12 == 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
            },
            relativeTime: { future: "ÏƒÎµ %s", past: "%s Ï€ÏÎ¹Î½", s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±", ss: "%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±", m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ", mm: "%d Î»ÎµÏ€Ï„Î¬", h: "Î¼Î¯Î± ÏŽÏÎ±", hh: "%d ÏŽÏÎµÏ‚", d: "Î¼Î¯Î± Î¼Î­ÏÎ±", dd: "%d Î¼Î­ÏÎµÏ‚", M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚", MM: "%d Î¼Î®Î½ÎµÏ‚", y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚", yy: "%d Ï‡ÏÏŒÎ½Î¹Î±" },
            dayOfMonthOrdinalParse: /\d{1,2}Î·/,
            ordinal: "%dÎ·",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
            calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
            relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"), weekdays: "dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ÄµaÅ­_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_Äµa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[HodiaÅ­ je] LT", nextDay: "[MorgaÅ­ je] LT", nextWeek: "dddd [je] LT", lastDay: "[HieraÅ­ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaÅ­ %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: i, monthsShortRegex: i, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: i, monthsShortRegex: i, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: i, monthsShortRegex: i, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["Ã¼he minuti", "Ã¼ks minut"], mm: [e + " minuti", e + " minutit"], h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"], hh: [e + " tunni", e + " tundi"], d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"], M: ["kuu aja", "kuu aega", "Ã¼ks kuu"], MM: [e + " kuu", e + " kuud"], y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? i[n][2] ? i[n][2] : i[n][1] : a ? i[n][0] : i[n][1] }
        e.defineLocale("et", { months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[TÃ¤na,] LT", nextDay: "[Homme,] LT", nextWeek: "[JÃ¤rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pÃ¤rast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d pÃ¤eva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "Û±", 2: "Û²", 3: "Û³", 4: "Û´", 5: "Ûµ", 6: "Û¶", 7: "Û·", 8: "Û¸", 9: "Û¹", 0: "Û°" },
            n = { "Û±": "1", "Û²": "2", "Û³": "3", "Û´": "4", "Ûµ": "5", "Û¶": "6", "Û·": "7", "Û¸": "8", "Û¹": "9", "Û°": "0" };
        e.defineLocale("fa", { months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"), weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"), weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/, isPM: function(e) { return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±" }, calendar: { sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT", nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT", nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT", lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT", lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT", sameElse: "L" }, relativeTime: { future: "Ø¯Ø± %s", past: "%s Ù¾ÛŒØ´", s: "Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡", ss: "Ø«Ø§Ù†ÛŒÙ‡ d%", m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡", mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡", h: "ÛŒÚ© Ø³Ø§Ø¹Øª", hh: "%d Ø³Ø§Ø¹Øª", d: "ÛŒÚ© Ø±ÙˆØ²", dd: "%d Ø±ÙˆØ²", M: "ÛŒÚ© Ù…Ø§Ù‡", MM: "%d Ù…Ø§Ù‡", y: "ÛŒÚ© Ø³Ø§Ù„", yy: "%d Ø³Ø§Ù„" }, preparse: function(e) { return e.replace(/[Û°-Û¹]/g, function(e) { return n[e] }).replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "ØŒ") }, dayOfMonthOrdinalParse: /\d{1,2}Ù…/, ordinal: "%dÙ…", week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", t[7], t[8], t[9]];

        function a(e, a, i, r) {
            var s = "";
            switch (i) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return r ? "sekunnin" : "sekuntia";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    s = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    s = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
                case "dd":
                    s = r ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    s = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    s = r ? "vuoden" : "vuotta"
            }
            return s = function(e, a) { return e < 10 ? a ? n[e] : t[e] : e }(e, r) + " " + s
        }
        e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s pÃ¤Ã¤stÃ¤", past: "%s sitten", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fo", { months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"), weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Ã dag kl.] LT", nextDay: "[Ã morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã gjÃ¡r kl.] LT", lastWeek: "[sÃ­Ã°stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s sÃ­Ã°ani", s: "fÃ¡ sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein tÃ­mi", hh: "%d tÃ­mar", d: "ein dagur", dd: "%d dagar", M: "ein mÃ¡naÃ°ur", MM: "%d mÃ¡naÃ°ir", y: "eitt Ã¡r", yy: "%d Ã¡r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Aujourdâ€™hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L" },
            relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Aujourdâ€™hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L" },
            relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Aujourdâ€™hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L" },
            relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                    default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                            case "W":
                            return e + (1 === e ? "re" : "e")
                }
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[Ã´frÃ»ne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien minÃºt", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ga", { months: ["EanÃ¡ir", "Feabhra", "MÃ¡rta", "AibreÃ¡n", "Bealtaine", "MÃ©itheamh", "IÃºil", "LÃºnasa", "MeÃ¡n FÃ³mhair", "Deaireadh FÃ³mhair", "Samhain", "Nollaig"], monthsShort: ["EanÃ¡", "Feab", "MÃ¡rt", "Aibr", "Beal", "MÃ©it", "IÃºil", "LÃºna", "MeÃ¡n", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["DÃ© Domhnaigh", "DÃ© Luain", "DÃ© MÃ¡irt", "DÃ© CÃ©adaoin", "DÃ©ardaoin", "DÃ© hAoine", "DÃ© Satharn"], weekdaysShort: ["Dom", "Lua", "MÃ¡i", "CÃ©a", "DÃ©a", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "MÃ¡", "Ce", "DÃ©", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[AmÃ¡rach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[InnÃ© aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s Ã³ shin", s: "cÃºpla soicind", ss: "%d soicind", m: "nÃ³imÃ©ad", mm: "%d nÃ³imÃ©ad", h: "uair an chloig", hh: "%d uair an chloig", d: "lÃ¡", dd: "%d lÃ¡", M: "mÃ­", MM: "%d mÃ­", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"], monthsShort: ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"], monthsParseExact: !0, weekdays: ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-mÃ ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dÃ¨ aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mÃ¬os", MM: "%d mÃ¬osan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.".split("_"), weekdaysMin: "do_lu_ma_mÃ©_xo_ve_sÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT" }, nextDay: function() { return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return t ? i[n][0] : i[n][1] }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" },
            calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" },
            relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e
                }
            },
            week: { dow: 1, doy: 4 },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0 },
            meridiem: function(e, t, n) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à«§", 2: "à«¨", 3: "à«©", 4: "à«ª", 5: "à««", 6: "à«¬", 7: "à«­", 8: "à«®", 9: "à«¯", 0: "à«¦" },
            n = { "à«§": "1", "à«¨": "2", "à«©": "3", "à«ª": "4", "à««": "5", "à«¬": "6", "à«­": "7", "à«®": "8", "à«¯": "9", "à«¦": "0" };
        e.defineLocale("gu", { months: "àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°".split("_"), monthsShort: "àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.".split("_"), monthsParseExact: !0, weekdays: "àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°".split("_"), weekdaysShort: "àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿".split("_"), weekdaysMin: "àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶".split("_"), longDateFormat: { LT: "A h:mm àªµàª¾àª—à«àª¯à«‡", LTS: "A h:mm:ss àªµàª¾àª—à«àª¯à«‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡", LLLL: "dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡" }, calendar: { sameDay: "[àª†àªœ] LT", nextDay: "[àª•àª¾àª²à«‡] LT", nextWeek: "dddd, LT", lastDay: "[àª—àª‡àª•àª¾àª²à«‡] LT", lastWeek: "[àªªàª¾àª›àª²àª¾] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s àª®àª¾", past: "%s àªªà«‡àª¹àª²àª¾", s: "àª…àª®à«àª• àªªàª³à«‹", ss: "%d àª¸à«‡àª•àª‚àª¡", m: "àªàª• àª®àª¿àª¨àª¿àªŸ", mm: "%d àª®àª¿àª¨àª¿àªŸ", h: "àªàª• àª•àª²àª¾àª•", hh: "%d àª•àª²àª¾àª•", d: "àªàª• àª¦àª¿àªµàª¸", dd: "%d àª¦àª¿àªµàª¸", M: "àªàª• àª®àª¹àª¿àª¨à«‹", MM: "%d àª®àª¹àª¿àª¨à«‹", y: "àªàª• àªµàª°à«àª·", yy: "%d àªµàª°à«àª·" }, preparse: function(e) { return e.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "àª°àª¾àª¤" === t ? e < 4 ? e : e + 12 : "àª¸àªµàª¾àª°" === t ? e : "àª¬àªªà«‹àª°" === t ? e >= 10 ? e : e + 12 : "àª¸àª¾àª‚àªœ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "àª°àª¾àª¤" : e < 10 ? "àª¸àªµàª¾àª°" : e < 17 ? "àª¬àªªà«‹àª°" : e < 20 ? "àª¸àª¾àª‚àªœ" : "àª°àª¾àª¤" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("he", { months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"), monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"), weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"), weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"), weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [×‘]MMMM YYYY", LLL: "D [×‘]MMMM YYYY HH:mm", LLLL: "dddd, D [×‘]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[×”×™×•× ×‘Ö¾]LT", nextDay: "[×ž×—×¨ ×‘Ö¾]LT", nextWeek: "dddd [×‘×©×¢×”] LT", lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT", lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT", sameElse: "L" }, relativeTime: { future: "×‘×¢×•×“ %s", past: "×œ×¤× ×™ %s", s: "×ž×¡×¤×¨ ×©× ×™×•×ª", ss: "%d ×©× ×™×•×ª", m: "×“×§×”", mm: "%d ×“×§×•×ª", h: "×©×¢×”", hh: function(e) { return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª" }, d: "×™×•×", dd: function(e) { return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×" }, M: "×—×•×“×©", MM: function(e) { return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×" }, y: "×©× ×”", yy: function(e) { return 2 === e ? "×©× ×ª×™×™×" : e % 10 == 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×" } }, meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i, isPM: function(e) { return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e) }, meridiem: function(e, t, n) { return e < 5 ? "×œ×¤× ×•×ª ×‘×•×§×¨" : e < 10 ? "×‘×‘×•×§×¨" : e < 12 ? n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : e < 18 ? n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘" } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦" },
            n = { "à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0" };
        e.defineLocale("hi", { months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"), monthsParseExact: !0, weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: { LT: "A h:mm à¤¬à¤œà¥‡", LTS: "A h:mm:ss à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡", LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡" }, calendar: { sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤•à¤²] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤²] LT", lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à¤®à¥‡à¤‚", past: "%s à¤ªà¤¹à¤²à¥‡", s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£", ss: "%d à¤¸à¥‡à¤•à¤‚à¤¡", m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¤Ÿ", h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾", hh: "%d à¤˜à¤‚à¤Ÿà¥‡", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡", MM: "%d à¤®à¤¹à¥€à¤¨à¥‡", y: "à¤à¤• à¤µà¤°à¥à¤·", yy: "%d à¤µà¤°à¥à¤·" }, preparse: function(e) { return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? e < 4 ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "à¤°à¤¾à¤¤" : e < 10 ? "à¤¸à¥à¤¬à¤¹" : e < 17 ? "à¤¦à¥‹à¤ªà¤¹à¤°" : e < 20 ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }
        e.defineLocale("hr", {
            months: { format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") },
            monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");

        function n(e, t, n, a) {
            var i = e;
            switch (n) {
                case "s":
                    return a || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
                case "ss":
                    return i + (a || t) ? " mÃ¡sodperc" : " mÃ¡sodperce";
                case "m":
                    return "egy" + (a || t ? " perc" : " perce");
                case "mm":
                    return i + (a || t ? " perc" : " perce");
                case "h":
                    return "egy" + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "hh":
                    return i + (a || t ? " Ã³ra" : " Ã³rÃ¡ja");
                case "d":
                    return "egy" + (a || t ? " nap" : " napja");
                case "dd":
                    return i + (a || t ? " nap" : " napja");
                case "M":
                    return "egy" + (a || t ? " hÃ³nap" : " hÃ³napja");
                case "MM":
                    return i + (a || t ? " hÃ³nap" : " hÃ³napja");
                case "y":
                    return "egy" + (a || t ? " Ã©v" : " Ã©ve");
                case "yy":
                    return i + (a || t ? " Ã©v" : " Ã©ve")
            }
            return ""
        }

        function a(e) { return (e ? "" : "[mÃºlt] ") + "[" + t[this.day()] + "] LT[-kor]" }
        e.defineLocale("hu", { months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"), monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"), weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, n) { return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return a.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return a.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s mÃºlva", past: "%s", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: { format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"), standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_") },
            monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
            weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
            weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Õ©.", LLL: "D MMMM YYYY Õ©., HH:mm", LLLL: "dddd, D MMMM YYYY Õ©., HH:mm" },
            calendar: { sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT", nextDay: "[Õ¾Õ¡Õ²Õ¨] LT", lastDay: "[Õ¥Ö€Õ¥Õ¯] LT", nextWeek: function() { return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT" }, lastWeek: function() { return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT" }, sameElse: "L" },
            relativeTime: { future: "%s Õ°Õ¥Õ¿Õ¸", past: "%s Õ¡Õ¼Õ¡Õ»", s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶", ss: "%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶", m: "Ö€Õ¸ÕºÕ¥", mm: "%d Ö€Õ¸ÕºÕ¥", h: "ÕªÕ¡Õ´", hh: "%d ÕªÕ¡Õ´", d: "Ö…Ö€", dd: "%d Ö…Ö€", M: "Õ¡Õ´Õ«Õ½", MM: "%d Õ¡Õ´Õ«Õ½", y: "Õ¿Õ¡Ö€Õ«", yy: "%d Õ¿Õ¡Ö€Õ«" },
            meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
            isPM: function(e) { return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e) },
            meridiem: function(e) { return e < 4 ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : e < 12 ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : e < 17 ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶" },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
                    default:
                        return e
                }
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e) { return e % 100 == 11 || e % 10 != 1 }

        function n(e, n, a, i) {
            var r = e + " ";
            switch (a) {
                case "s":
                    return n || i ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
                case "ss":
                    return t(e) ? r + (n || i ? "sekÃºndur" : "sekÃºndum") : r + "sekÃºnda";
                case "m":
                    return n ? "mÃ­nÃºta" : "mÃ­nÃºtu";
                case "mm":
                    return t(e) ? r + (n || i ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : n ? r + "mÃ­nÃºta" : r + "mÃ­nÃºtu";
                case "hh":
                    return t(e) ? r + (n || i ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                case "d":
                    return n ? "dagur" : i ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? r + "dagar" : r + (i ? "daga" : "dÃ¶gum") : n ? r + "dagur" : r + (i ? "dag" : "degi");
                case "M":
                    return n ? "mÃ¡nuÃ°ur" : i ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
                case "MM":
                    return t(e) ? n ? r + "mÃ¡nuÃ°ir" : r + (i ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : n ? r + "mÃ¡nuÃ°ur" : r + (i ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
                case "y":
                    return n || i ? "Ã¡r" : "Ã¡ri";
                case "yy":
                    return t(e) ? r + (n || i ? "Ã¡r" : "Ã¡rum") : r + (n || i ? "Ã¡r" : "Ã¡ri")
            }
        }
        e.defineLocale("is", { months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"), weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"), weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"), weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[Ã­ dag kl.] LT", nextDay: "[Ã¡ morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Ã­ gÃ¦r kl.] LT", lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s sÃ­Ã°an", s: n, ss: n, m: n, mm: n, h: "klukkustund", hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm", LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYYå¹´MæœˆDæ—¥", lll: "YYYYå¹´MæœˆDæ—¥ HH:mm", llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm" },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function(e) { return "åˆå¾Œ" === e },
            meridiem: function(e, t, n) { return e < 12 ? "åˆå‰" : "åˆå¾Œ" },
            calendar: { sameDay: "[ä»Šæ—¥] LT", nextDay: "[æ˜Žæ—¥] LT", nextWeek: function(e) { return e.week() < this.week() ? "[æ¥é€±]dddd LT" : "dddd LT" }, lastDay: "[æ˜¨æ—¥] LT", lastWeek: function(e) { return this.week() < e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT" }, sameElse: "L" },
            dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    default:
                        return e
                }
            },
            relativeTime: { future: "%så¾Œ", past: "%så‰", s: "æ•°ç§’", ss: "%dç§’", m: "1åˆ†", mm: "%dåˆ†", h: "1æ™‚é–“", hh: "%dæ™‚é–“", d: "1æ—¥", dd: "%dæ—¥", M: "1ãƒ¶æœˆ", MM: "%dãƒ¶æœˆ", y: "1å¹´", yy: "%då¹´" }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ka", { months: { standalone: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"), format: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_") }, monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"), weekdays: { standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"), format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"), isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/ }, weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"), weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]", nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]", lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]", nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]", lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”", sameElse: "L" }, relativeTime: { future: function(e) { return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(e) ? e.replace(/áƒ˜$/, "áƒ¨áƒ˜") : e + "áƒ¨áƒ˜" }, past: function(e) { return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0 }, s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜", ss: "%d áƒ¬áƒáƒ›áƒ˜", m: "áƒ¬áƒ£áƒ—áƒ˜", mm: "%d áƒ¬áƒ£áƒ—áƒ˜", h: "áƒ¡áƒáƒáƒ—áƒ˜", hh: "%d áƒ¡áƒáƒáƒ—áƒ˜", d: "áƒ“áƒ¦áƒ”", dd: "%d áƒ“áƒ¦áƒ”", M: "áƒ—áƒ•áƒ”", MM: "%d áƒ—áƒ•áƒ”", y: "áƒ¬áƒ”áƒšáƒ˜", yy: "%d áƒ¬áƒ”áƒšáƒ˜" }, dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 0: "-ÑˆÑ–", 1: "-ÑˆÑ–", 2: "-ÑˆÑ–", 3: "-ÑˆÑ–", 4: "-ÑˆÑ–", 5: "-ÑˆÑ–", 6: "-ÑˆÑ‹", 7: "-ÑˆÑ–", 8: "-ÑˆÑ–", 9: "-ÑˆÑ‹", 10: "-ÑˆÑ‹", 20: "-ÑˆÑ‹", 30: "-ÑˆÑ‹", 40: "-ÑˆÑ‹", 50: "-ÑˆÑ–", 60: "-ÑˆÑ‹", 70: "-ÑˆÑ–", 80: "-ÑˆÑ–", 90: "-ÑˆÑ‹", 100: "-ÑˆÑ–" };
        e.defineLocale("kk", {
            months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
            monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
            weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
            weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
            weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT", nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT", nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT", lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT", lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT", sameElse: "L" },
            relativeTime: { future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ", past: "%s Ð±Ò±Ñ€Ñ‹Ð½", s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´", ss: "%d ÑÐµÐºÑƒÐ½Ð´", m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚", h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚", hh: "%d ÑÐ°Ò“Ð°Ñ‚", d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½", dd: "%d ÐºÒ¯Ð½", M: "Ð±Ñ–Ñ€ Ð°Ð¹", MM: "%d Ð°Ð¹", y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»", yy: "%d Ð¶Ñ‹Ð»" },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
            ordinal: function(e) {
                var n = e % 10,
                    a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "áŸ¡", 2: "áŸ¢", 3: "áŸ£", 4: "áŸ¤", 5: "áŸ¥", 6: "áŸ¦", 7: "áŸ§", 8: "áŸ¨", 9: "áŸ©", 0: "áŸ " },
            n = { "áŸ¡": "1", "áŸ¢": "2", "áŸ£": "3", "áŸ¤": "4", "áŸ¥": "5", "áŸ¦": "6", "áŸ§": "7", "áŸ¨": "8", "áŸ©": "9", "áŸ ": "0" };
        e.defineLocale("km", { months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"), monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"), weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"), weekdaysShort: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"), weekdaysMin: "áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/, isPM: function(e) { return "áž›áŸ’áž„áž¶áž…" === e }, meridiem: function(e, t, n) { return e < 12 ? "áž–áŸ’ážšáž¹áž€" : "áž›áŸ’áž„áž¶áž…" }, calendar: { sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT", nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT", nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT", lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT", lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT", sameElse: "L" }, relativeTime: { future: "%sáž‘áŸ€áž", past: "%sáž˜áž»áž“", s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸", ss: "%d ážœáž·áž“áž¶áž‘áž¸", m: "áž˜áž½áž™áž“áž¶áž‘áž¸", mm: "%d áž“áž¶áž‘áž¸", h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„", hh: "%d áž˜áŸ‰áŸ„áž„", d: "áž˜áž½áž™ážáŸ’áž„áŸƒ", dd: "%d ážáŸ’áž„áŸƒ", M: "áž˜áž½áž™ážáŸ‚", MM: "%d ážáŸ‚", y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†", yy: "%d áž†áŸ’áž“áž¶áŸ†" }, dayOfMonthOrdinalParse: /áž‘áž¸\d{1,2}/, ordinal: "áž‘áž¸%d", preparse: function(e) { return e.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à³§", 2: "à³¨", 3: "à³©", 4: "à³ª", 5: "à³«", 6: "à³¬", 7: "à³­", 8: "à³®", 9: "à³¯", 0: "à³¦" },
            n = { "à³§": "1", "à³¨": "2", "à³©": "3", "à³ª": "4", "à³«": "5", "à³¬": "6", "à³­": "7", "à³®": "8", "à³¯": "9", "à³¦": "0" };
        e.defineLocale("kn", { months: "à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³".split("_"), monthsShort: "à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚".split("_"), monthsParseExact: !0, weekdays: "à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°".split("_"), weekdaysShort: "à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿".split("_"), weekdaysMin: "à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[à²‡à²‚à²¦à³] LT", nextDay: "[à²¨à²¾à²³à³†] LT", nextWeek: "dddd, LT", lastDay: "[à²¨à²¿à²¨à³à²¨à³†] LT", lastWeek: "[à²•à³†à³‚à²¨à³†à²¯] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à²¨à²‚à²¤à²°", past: "%s à²¹à²¿à²‚à²¦à³†", s: "à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³", ss: "%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³", m: "à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·", mm: "%d à²¨à²¿à²®à²¿à²·", h: "à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†", hh: "%d à²—à²‚à²Ÿà³†", d: "à²’à²‚à²¦à³ à²¦à²¿à²¨", dd: "%d à²¦à²¿à²¨", M: "à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³", MM: "%d à²¤à²¿à²‚à²—à²³à³", y: "à²’à²‚à²¦à³ à²µà²°à³à²·", yy: "%d à²µà²°à³à²·" }, preparse: function(e) { return e.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à²°à²¾à²¤à³à²°à²¿" === t ? e < 4 ? e : e + 12 : "à²¬à³†à²³à²¿à²—à³à²—à³†" === t ? e : "à²®à²§à³à²¯à²¾à²¹à³à²¨" === t ? e >= 10 ? e : e + 12 : "à²¸à²‚à²œà³†" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "à²°à²¾à²¤à³à²°à²¿" : e < 10 ? "à²¬à³†à²³à²¿à²—à³à²—à³†" : e < 17 ? "à²®à²§à³à²¯à²¾à²¹à³à²¨" : e < 20 ? "à²¸à²‚à²œà³†" : "à²°à²¾à²¤à³à²°à²¿" }, dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/, ordinal: function(e) { return e + "à²¨à³†à³•" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
            weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYYë…„ MMMM Dì¼", LLL: "YYYYë…„ MMMM Dì¼ A h:mm", LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYYë…„ MMMM Dì¼", lll: "YYYYë…„ MMMM Dì¼ A h:mm", llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm" },
            calendar: { sameDay: "ì˜¤ëŠ˜ LT", nextDay: "ë‚´ì¼ LT", nextWeek: "dddd LT", lastDay: "ì–´ì œ LT", lastWeek: "ì§€ë‚œì£¼ dddd LT", sameElse: "L" },
            relativeTime: { future: "%s í›„", past: "%s ì „", s: "ëª‡ ì´ˆ", ss: "%dì´ˆ", m: "1ë¶„", mm: "%dë¶„", h: "í•œ ì‹œê°„", hh: "%dì‹œê°„", d: "í•˜ë£¨", dd: "%dì¼", M: "í•œ ë‹¬", MM: "%dë‹¬", y: "ì¼ ë…„", yy: "%dë…„" },
            dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "ì¼";
                    case "M":
                        return e + "ì›”";
                    case "w":
                    case "W":
                        return e + "ì£¼";
                    default:
                        return e
                }
            },
            meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
            isPM: function(e) { return "ì˜¤í›„" === e },
            meridiem: function(e, t, n) { return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„" }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "Ù¡", 2: "Ù¢", 3: "Ù£", 4: "Ù¤", 5: "Ù¥", 6: "Ù¦", 7: "Ù§", 8: "Ù¨", 9: "Ù©", 0: "Ù " },
            n = { "Ù¡": "1", "Ù¢": "2", "Ù£": "3", "Ù¤": "4", "Ù¥": "5", "Ù¦": "6", "Ù§": "7", "Ù¨": "8", "Ù©": "9", "Ù ": "0" },
            a = ["Ú©Ø§Ù†ÙˆÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "Ø´ÙˆØ¨Ø§Øª", "Ø¦Ø§Ø²Ø§Ø±", "Ù†ÛŒØ³Ø§Ù†", "Ø¦Ø§ÛŒØ§Ø±", "Ø­ÙˆØ²Û•ÛŒØ±Ø§Ù†", "ØªÛ•Ù…Ù…ÙˆØ²", "Ø¦Ø§Ø¨", "Ø¦Û•ÛŒÙ„ÙˆÙˆÙ„", "ØªØ´Ø±ÛŒÙ†ÛŒ ÛŒÛ•ÙƒÛ•Ù…", "ØªØ´Ø±ÛŒÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…", "ÙƒØ§Ù†ÙˆÙ†ÛŒ ÛŒÛ•Ú©Û•Ù…"];
        e.defineLocale("ku", { months: a, monthsShort: a, weekdays: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø³ÛŽØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"), weekdaysShort: "ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…_Ø³ÛŽØ´Ù‡â€ŒÙ…_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ".split("_"), weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ù‡_Ø´".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ|Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ/, isPM: function(e) { return /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ" : "Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ" }, calendar: { sameDay: "[Ø¦Ù‡â€ŒÙ…Ø±Û† ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT", nextDay: "[Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT", nextWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT", lastDay: "[Ø¯ÙˆÛŽÙ†ÛŽ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT", lastWeek: "dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT", sameElse: "L" }, relativeTime: { future: "Ù„Ù‡â€Œ %s", past: "%s", s: "Ú†Ù‡â€ŒÙ†Ø¯ Ú†Ø±ÙƒÙ‡â€ŒÛŒÙ‡â€ŒÙƒ", ss: "Ú†Ø±ÙƒÙ‡â€Œ %d", m: "ÛŒÙ‡â€ŒÙƒ Ø®ÙˆÙ„Ù‡â€ŒÙƒ", mm: "%d Ø®ÙˆÙ„Ù‡â€ŒÙƒ", h: "ÛŒÙ‡â€ŒÙƒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±", hh: "%d ÙƒØ§ØªÚ˜Ù…ÛŽØ±", d: "ÛŒÙ‡â€ŒÙƒ Ú•Û†Ú˜", dd: "%d Ú•Û†Ú˜", M: "ÛŒÙ‡â€ŒÙƒ Ù…Ø§Ù†Ú¯", MM: "%d Ù…Ø§Ù†Ú¯", y: "ÛŒÙ‡â€ŒÙƒ Ø³Ø§Úµ", yy: "%d Ø³Ø§Úµ" }, preparse: function(e) { return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) { return n[e] }).replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "ØŒ") }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 0: "-Ñ‡Ò¯", 1: "-Ñ‡Ð¸", 2: "-Ñ‡Ð¸", 3: "-Ñ‡Ò¯", 4: "-Ñ‡Ò¯", 5: "-Ñ‡Ð¸", 6: "-Ñ‡Ñ‹", 7: "-Ñ‡Ð¸", 8: "-Ñ‡Ð¸", 9: "-Ñ‡Ñƒ", 10: "-Ñ‡Ñƒ", 20: "-Ñ‡Ñ‹", 30: "-Ñ‡Ñƒ", 40: "-Ñ‡Ñ‹", 50: "-Ñ‡Ò¯", 60: "-Ñ‡Ñ‹", 70: "-Ñ‡Ð¸", 80: "-Ñ‡Ð¸", 90: "-Ñ‡Ñƒ", 100: "-Ñ‡Ò¯" };
        e.defineLocale("ky", {
            months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
            weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
            weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT", nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT", nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT", lastDay: "[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT", lastWeek: "[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT", sameElse: "L" },
            relativeTime: { future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ", past: "%s Ð¼ÑƒÑ€ÑƒÐ½", s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´", ss: "%d ÑÐµÐºÑƒÐ½Ð´", m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚", mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚", h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚", hh: "%d ÑÐ°Ð°Ñ‚", d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½", dd: "%d ÐºÒ¯Ð½", M: "Ð±Ð¸Ñ€ Ð°Ð¹", MM: "%d Ð°Ð¹", y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»", yy: "%d Ð¶Ñ‹Ð»" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
            ordinal: function(e) {
                var n = e % 10,
                    a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? i[n][0] : i[n][1] }

        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10,
                    a = e / 10;
                return n(0 === t ? a : t)
            }
            if (e < 1e4) { for (; e >= 10;) e /= 10; return n(e) }
            return n(e /= 1e3)
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[GÃ«schter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: { future: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d MÃ©int", y: t, yy: "%d Joer" },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("lo", { months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"), monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"), weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"), weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"), weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm" }, meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/, isPM: function(e) { return "àº•àº­àº™à»àº¥àº‡" === e }, meridiem: function(e, t, n) { return e < 12 ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡" }, calendar: { sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT", nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT", nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT", lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT", lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT", sameElse: "L" }, relativeTime: { future: "àº­àºµàº %s", past: "%sàºœà»ˆàº²àº™àº¡àº²", s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ", ss: "%d àº§àº´àº™àº²àº—àºµ", m: "1 àº™àº²àº—àºµ", mm: "%d àº™àº²àº—àºµ", h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡", hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡", d: "1 àº¡àº·à»‰", dd: "%d àº¡àº·à»‰", M: "1 à»€àº”àº·àº­àº™", MM: "%d à»€àº”àº·àº­àº™", y: "1 àº›àºµ", yy: "%d àº›àºµ" }, dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/, ordinal: function(e) { return "àº—àºµà»ˆ" + e } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { ss: "sekundÄ—_sekundÅ¾iÅ³_sekundes", m: "minutÄ—_minutÄ—s_minutÄ™", mm: "minutÄ—s_minuÄiÅ³_minutes", h: "valanda_valandos_valandÄ…", hh: "valandos_valandÅ³_valandas", d: "diena_dienos_dienÄ…", dd: "dienos_dienÅ³_dienas", M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯", MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius", y: "metai_metÅ³_metus", yy: "metai_metÅ³_metus" };

        function n(e, t, n, a) { return t ? i(n)[0] : a ? i(n)[1] : i(n)[2] }

        function a(e) { return e % 10 == 0 || e > 10 && e < 20 }

        function i(e) { return t[e].split("_") }

        function r(e, t, r, s) { var o = e + " "; return 1 === e ? o + n(0, t, r[0], s) : t ? o + (a(e) ? i(r)[1] : i(r)[0]) : s ? o + i(r)[1] : o + (a(e) ? i(r)[1] : i(r)[2]) }
        e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"), standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Å iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[PraÄ—jusÄ¯] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieÅ¡ %s", s: function(e, t, n, a) { return t ? "kelios sekundÄ—s" : a ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes" }, ss: r, m: n, mm: r, h: n, hh: r, d: n, dd: r, M: n, MM: r, y: n, yy: r }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { ss: "sekundes_sekundÄ“m_sekunde_sekundes".split("_"), m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"), mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"), h: "stundas_stundÄm_stunda_stundas".split("_"), hh: "stundas_stundÄm_stunda_stundas".split("_"), d: "dienas_dienÄm_diena_dienas".split("_"), dd: "dienas_dienÄm_diena_dienas".split("_"), M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"), MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

        function n(e, t, n) { return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1] }

        function a(e, a, i) { return e + " " + n(t[i], e, a) }

        function i(e, a, i) { return n(t[i], e, a) }
        e.defineLocale("lv", { months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"), weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Å odien pulksten] LT", nextDay: "[RÄ«t pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pÄ“c %s", past: "pirms %s", s: function(e, t) { return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m" }, ss: a, m: i, mm: a, h: i, hh: a, d: i, dd: a, M: i, MM: a, y: i, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var i = t.words[a]; return 1 === a.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i) } };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() { return ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mjesec", MM: t.translate, y: "godinu", yy: t.translate },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mi", { months: "Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei".split("_"), weekdaysShort: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"), weekdaysMin: "Ta_Ma_TÅ«_We_TÄi_Pa_HÄ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hÄ“kona ruarua", ss: "%d hÄ“kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
            weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ð¿Ð¾ÑÐ»Ðµ %s", past: "Ð¿Ñ€ÐµÐ´ %s", s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸", ss: "%d ÑÐµÐºÑƒÐ½Ð´Ð¸", m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°", mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸", h: "Ñ‡Ð°Ñ", hh: "%d Ñ‡Ð°ÑÐ°", d: "Ð´ÐµÐ½", dd: "%d Ð´ÐµÐ½Ð°", M: "Ð¼ÐµÑÐµÑ†", MM: "%d Ð¼ÐµÑÐµÑ†Ð¸", y: "Ð³Ð¾Ð´Ð¸Ð½Ð°", yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸" },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = e % 100;
                return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && n < 20 ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ml", { months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"), monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"), monthsParseExact: !0, weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"), weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"), weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"), longDateFormat: { LT: "A h:mm -à´¨àµ", LTS: "A h:mm:ss -à´¨àµ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -à´¨àµ", LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ" }, calendar: { sameDay: "[à´‡à´¨àµà´¨àµ] LT", nextDay: "[à´¨à´¾à´³àµ†] LT", nextWeek: "dddd, LT", lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT", lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à´•à´´à´¿à´žàµà´žàµ", past: "%s à´®àµàµ»à´ªàµ", s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾", ss: "%d à´¸àµ†à´•àµà´•àµ»à´¡àµ", m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ", mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ", h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼", hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼", d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚", dd: "%d à´¦à´¿à´µà´¸à´‚", M: "à´’à´°àµ à´®à´¾à´¸à´‚", MM: "%d à´®à´¾à´¸à´‚", y: "à´’à´°àµ à´µàµ¼à´·à´‚", yy: "%d à´µàµ¼à´·à´‚" }, meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === t && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === t || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "à´°à´¾à´¤àµà´°à´¿" : e < 12 ? "à´°à´¾à´µà´¿à´²àµ†" : e < 17 ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : e < 20 ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿" } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            switch (n) {
                case "s":
                    return t ? "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´" : "Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½";
                case "ss":
                    return e + (t ? " ÑÐµÐºÑƒÐ½Ð´" : " ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½");
                case "m":
                case "mm":
                    return e + (t ? " Ð¼Ð¸Ð½ÑƒÑ‚" : " Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½");
                case "h":
                case "hh":
                    return e + (t ? " Ñ†Ð°Ð³" : " Ñ†Ð°Ð³Ð¸Ð¹Ð½");
                case "d":
                case "dd":
                    return e + (t ? " Ó©Ð´Ó©Ñ€" : " Ó©Ð´Ñ€Ð¸Ð¹Ð½");
                case "M":
                case "MM":
                    return e + (t ? " ÑÐ°Ñ€" : " ÑÐ°Ñ€Ñ‹Ð½");
                case "y":
                case "yy":
                    return e + (t ? " Ð¶Ð¸Ð»" : " Ð¶Ð¸Ð»Ð¸Ð¹Ð½");
                default:
                    return e
            }
        }
        e.defineLocale("mn", {
            months: "ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€".split("_"),
            monthsShort: "1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€".split("_"),
            monthsParseExact: !0,
            weekdays: "ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°".split("_"),
            weekdaysShort: "ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼".split("_"),
            weekdaysMin: "ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D", LLL: "YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm", LLLL: "dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm" },
            meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
            isPM: function(e) { return "Ò®Ð¥" === e },
            meridiem: function(e, t, n) { return e < 12 ? "Ò®Ó¨" : "Ò®Ð¥" },
            calendar: { sameDay: "[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT", nextDay: "[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT", nextWeek: "[Ð˜Ñ€ÑÑ…] dddd LT", lastDay: "[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT", lastWeek: "[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT", sameElse: "L" },
            relativeTime: { future: "%s Ð´Ð°Ñ€Ð°Ð°", past: "%s Ó©Ð¼Ð½Ó©", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
            dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " Ó©Ð´Ó©Ñ€";
                    default:
                        return e
                }
            }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦" },
            n = { "à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0" };

        function a(e, t, n, a) {
            var i = "";
            if (t) switch (n) {
                case "s":
                    i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "ss":
                    i = "%d à¤¸à¥‡à¤•à¤‚à¤¦";
                    break;
                case "m":
                    i = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                    break;
                case "mm":
                    i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                    break;
                case "h":
                    i = "à¤à¤• à¤¤à¤¾à¤¸";
                    break;
                case "hh":
                    i = "%d à¤¤à¤¾à¤¸";
                    break;
                case "d":
                    i = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                    break;
                case "dd":
                    i = "%d à¤¦à¤¿à¤µà¤¸";
                    break;
                case "M":
                    i = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                    break;
                case "MM":
                    i = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                    break;
                case "y":
                    i = "à¤à¤• à¤µà¤°à¥à¤·";
                    break;
                case "yy":
                    i = "%d à¤µà¤°à¥à¤·à¥‡"
            } else switch (n) {
                case "s":
                    i = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "ss":
                    i = "%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                    break;
                case "m":
                    i = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                    break;
                case "mm":
                    i = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                    break;
                case "h":
                    i = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                    break;
                case "hh":
                    i = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                    break;
                case "d":
                    i = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                    break;
                case "dd":
                    i = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                    break;
                case "M":
                    i = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                    break;
                case "MM":
                    i = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                    break;
                case "y":
                    i = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                    break;
                case "yy":
                    i = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
            }
            return i.replace(/%d/i, e)
        }
        e.defineLocale("mr", { months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"), monthsParseExact: !0, weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"), weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"), weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"), longDateFormat: { LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾", LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾", LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾" }, calendar: { sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT", nextWeek: "dddd, LT", lastDay: "[à¤•à¤¾à¤²] LT", lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sà¤®à¤§à¥à¤¯à¥‡", past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, preparse: function(e) { return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? e < 4 ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : e < 10 ? "à¤¸à¤•à¤¾à¤³à¥€" : e < 17 ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : e < 20 ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹".split("_"), weekdays: "Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt".split("_"), weekdaysShort: "Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib".split("_"), weekdaysMin: "Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[GÄ§ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-bieraÄ§ fil-]LT", lastWeek: "dddd [li gÄ§adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "fâ€™ %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "siegÄ§a", hh: "%d siegÄ§at", d: "Ä¡urnata", dd: "%d Ä¡ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "á", 2: "á‚", 3: "áƒ", 4: "á„", 5: "á…", 6: "á†", 7: "á‡", 8: "áˆ", 9: "á‰", 0: "á€" },
            n = { "á": "1", "á‚": "2", "áƒ": "3", "á„": "4", "á…": "5", "á†": "6", "á‡": "7", "áˆ": "8", "á‰": "9", "á€": "0" };
        e.defineLocale("my", { months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"), monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"), weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"), weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"), weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]", nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]", nextWeek: "dddd LT [á€™á€¾á€¬]", lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]", lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]", sameElse: "L" }, relativeTime: { future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬", past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€", s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º", ss: "%d á€…á€€á€¹á€€á€”á€·á€º", m: "á€á€…á€ºá€™á€­á€”á€…á€º", mm: "%d á€™á€­á€”á€…á€º", h: "á€á€…á€ºá€”á€¬á€›á€®", hh: "%d á€”á€¬á€›á€®", d: "á€á€…á€ºá€›á€€á€º", dd: "%d á€›á€€á€º", M: "á€á€…á€ºá€œ", MM: "%d á€œ", y: "á€á€…á€ºá€”á€¾á€…á€º", yy: "%d á€”á€¾á€…á€º" }, preparse: function(e) { return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"), weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"), weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i gÃ¥r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en mÃ¥ned", MM: "%d mÃ¥neder", y: "ett Ã¥r", yy: "%d Ã¥r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à¥§", 2: "à¥¨", 3: "à¥©", 4: "à¥ª", 5: "à¥«", 6: "à¥¬", 7: "à¥­", 8: "à¥®", 9: "à¥¯", 0: "à¥¦" },
            n = { "à¥§": "1", "à¥¨": "2", "à¥©": "3", "à¥ª": "4", "à¥«": "5", "à¥¬": "6", "à¥­": "7", "à¥®": "8", "à¥¯": "9", "à¥¦": "0" };
        e.defineLocale("ne", { months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"), monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"), monthsParseExact: !0, weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"), weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"), weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡", LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡", LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡" }, preparse: function(e) { return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? e < 4 ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 3 ? "à¤°à¤¾à¤¤à¤¿" : e < 12 ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : e < 16 ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : e < 20 ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿" }, calendar: { sameDay: "[à¤†à¤œ] LT", nextDay: "[à¤­à¥‹à¤²à¤¿] LT", nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT", lastDay: "[à¤¹à¤¿à¤œà¥‹] LT", lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sà¤®à¤¾", past: "%s à¤…à¤—à¤¾à¤¡à¤¿", s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£", ss: "%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡", m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ", mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ", h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾", hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾", d: "à¤à¤• à¤¦à¤¿à¤¨", dd: "%d à¤¦à¤¿à¤¨", M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾", MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾", y: "à¤à¤• à¤¬à¤°à¥à¤·", yy: "%d à¤¬à¤°à¥à¤·" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: i, monthsShortRegex: i, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "Ã©Ã©n minuut", mm: "%d minuten", h: "Ã©Ã©n uur", hh: "%d uur", d: "Ã©Ã©n dag", dd: "%d dagen", M: "Ã©Ã©n maand", MM: "%d maanden", y: "Ã©Ã©n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t }, monthsRegex: i, monthsShortRegex: i, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: a, longMonthsParse: a, shortMonthsParse: a, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "Ã©Ã©n minuut", mm: "%d minuten", h: "Ã©Ã©n uur", hh: "%d uur", d: "Ã©Ã©n dag", dd: "%d dagen", M: "Ã©Ã©n maand", MM: "%d maanden", y: "Ã©Ã©n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I gÃ¥r klokka] LT", lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein mÃ¥nad", MM: "%d mÃ¥nader", y: "eit Ã¥r", yy: "%d Ã¥r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à©§", 2: "à©¨", 3: "à©©", 4: "à©ª", 5: "à©«", 6: "à©¬", 7: "à©­", 8: "à©®", 9: "à©¯", 0: "à©¦" },
            n = { "à©§": "1", "à©¨": "2", "à©©": "3", "à©ª": "4", "à©«": "5", "à©¬": "6", "à©­": "7", "à©®": "8", "à©¯": "9", "à©¦": "0" };
        e.defineLocale("pa-in", { months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"), monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"), weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"), weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"), weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"), longDateFormat: { LT: "A h:mm à¨µà¨œà©‡", LTS: "A h:mm:ss à¨µà¨œà©‡", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡", LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡" }, calendar: { sameDay: "[à¨…à¨œ] LT", nextDay: "[à¨•à¨²] LT", nextWeek: "[à¨…à¨—à¨²à¨¾] dddd, LT", lastDay: "[à¨•à¨²] LT", lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à¨µà¨¿à©±à¨š", past: "%s à¨ªà¨¿à¨›à¨²à©‡", s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ", ss: "%d à¨¸à¨•à¨¿à©°à¨Ÿ", m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ", mm: "%d à¨®à¨¿à©°à¨Ÿ", h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾", hh: "%d à¨˜à©°à¨Ÿà©‡", d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨", dd: "%d à¨¦à¨¿à¨¨", M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾", MM: "%d à¨®à¨¹à©€à¨¨à©‡", y: "à¨‡à©±à¨• à¨¸à¨¾à¨²", yy: "%d à¨¸à¨¾à¨²" }, preparse: function(e) { return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? e < 4 ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "à¨°à¨¾à¨¤" : e < 10 ? "à¨¸à¨µà©‡à¨°" : e < 17 ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : e < 20 ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");

        function a(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

        function i(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "ss":
                    return i + (a(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutÄ™";
                case "mm":
                    return i + (a(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinÄ™";
                case "hh":
                    return i + (a(e) ? "godziny" : "godzin");
                case "MM":
                    return i + (a(e) ? "miesiÄ…ce" : "miesiÄ™cy");
                case "yy":
                    return i + (a(e) ? "lata" : "lat")
            }
        }
        e.defineLocale("pl", {
            months: function(e, a) { return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: {
                sameDay: "[DziÅ› o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielÄ™ o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W Å›rodÄ™ o] LT";
                        case 6:
                            return "[W sobotÄ™ o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: i, m: i, mm: i, h: i, hh: i, d: "1 dzieÅ„", dd: "%d dni", M: "miesiÄ…c", MM: i, y: "rok", yy: i },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt", { months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"), weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "hÃ¡ %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("pt-br", { months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"), weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm" }, calendar: { sameDay: "[Hoje Ã s] LT", nextDay: "[AmanhÃ£ Ã s] LT", nextWeek: "dddd [Ã s] LT", lastDay: "[Ontem Ã s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "hÃ¡ %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mÃªs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº" })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) { var a = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[n] }
        e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mÃ¢ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s Ã®n urmÄƒ", s: "cÃ¢teva secunde", ss: t, m: "un minut", mm: t, h: "o orÄƒ", hh: t, d: "o zi", dd: t, M: "o lunÄƒ", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) { var a, i, r = { ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´", mm: t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚", hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹", MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²", yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚" }; return "m" === n ? t ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + (a = +e, i = r[n].split("_"), a % 10 == 1 && a % 100 != 11 ? i[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? i[1] : i[2]) }
        var n = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
        e.defineLocale("ru", {
            months: { format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"), standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_") },
            monthsShort: { format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"), standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_") },
            weekdays: { standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"), format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"), isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/ },
            weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
            monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ð³.", LLL: "D MMMM YYYY Ð³., H:mm", LLLL: "dddd, D MMMM YYYY Ð³., H:mm" },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ñ‡ÐµÑ€ÐµÐ· %s", past: "%s Ð½Ð°Ð·Ð°Ð´", s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´", ss: t, m: t, mm: t, h: "Ñ‡Ð°Ñ", hh: t, d: "Ð´ÐµÐ½ÑŒ", dd: t, M: "Ð¼ÐµÑÑÑ†", MM: t, y: "Ð³Ð¾Ð´", yy: t },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function(e) { return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e) },
            meridiem: function(e, t, n) { return e < 4 ? "Ð½Ð¾Ñ‡Ð¸" : e < 12 ? "ÑƒÑ‚Ñ€Ð°" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return e + "-Ñ";
                    default:
                        return e
                }
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Ø¬Ù†ÙˆØ±ÙŠ", "ÙÙŠØ¨Ø±ÙˆØ±ÙŠ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÙŠÙ„", "Ù…Ø¦ÙŠ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¡Ù", "Ø¢Ú¯Ø³Ù½", "Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±", "Ø¢ÚªÙ½ÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "ÚŠØ³Ù…Ø¨Ø±"],
            n = ["Ø¢Ú†Ø±", "Ø³ÙˆÙ…Ø±", "Ø§Ú±Ø§Ø±Ùˆ", "Ø§Ø±Ø¨Ø¹", "Ø®Ù…ÙŠØ³", "Ø¬Ù…Ø¹", "Ú‡Ù†Ú‡Ø±"];
        e.defineLocale("sd", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ddddØŒ D MMMM YYYY HH:mm" }, meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/, isPM: function(e) { return "Ø´Ø§Ù…" === e }, meridiem: function(e, t, n) { return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…" }, calendar: { sameDay: "[Ø§Ú„] LT", nextDay: "[Ø³Ú€Ø§Ú»ÙŠ] LT", nextWeek: "dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT", lastDay: "[ÚªØ§Ù„Ù‡Ù‡] LT", lastWeek: "[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT", sameElse: "L" }, relativeTime: { future: "%s Ù¾ÙˆØ¡", past: "%s Ø§Ú³", s: "Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ", ss: "%d Ø³ÙŠÚªÙ†ÚŠ", m: "Ù‡Úª Ù…Ù†Ù½", mm: "%d Ù…Ù†Ù½", h: "Ù‡Úª ÚªÙ„Ø§Úª", hh: "%d ÚªÙ„Ø§Úª", d: "Ù‡Úª ÚÙŠÙ†Ù‡Ù†", dd: "%d ÚÙŠÙ†Ù‡Ù†", M: "Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ", MM: "%d Ù…Ù‡ÙŠÙ†Ø§", y: "Ù‡Úª Ø³Ø§Ù„", yy: "%d Ø³Ø§Ù„" }, preparse: function(e) { return e.replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/,/g, "ØŒ") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("se", { months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"), monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"), weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"), weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geaÅ¾es", past: "maÅ‹it %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mÃ¡nnu", MM: "%d mÃ¡nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("si", { months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"), monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"), weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"), weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"), weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss" }, calendar: { sameDay: "[à¶…à¶¯] LT[à¶§]", nextDay: "[à·„à·™à¶§] LT[à¶§]", nextWeek: "dddd LT[à¶§]", lastDay: "[à¶Šà¶ºà·š] LT[à¶§]", lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]", sameElse: "L" }, relativeTime: { future: "%sà¶šà·’à¶±à·Š", past: "%sà¶šà¶§ à¶´à·™à¶»", s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º", ss: "à¶­à¶­à·Šà¶´à¶» %d", m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€", mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d", h: "à¶´à·à¶º", hh: "à¶´à·à¶º %d", d: "à¶¯à·’à¶±à¶º", dd: "à¶¯à·’à¶± %d", M: "à¶¸à·à·ƒà¶º", MM: "à¶¸à·à·ƒ %d", y: "à·€à·ƒà¶»", yy: "à·€à·ƒà¶» %d" }, dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/, ordinal: function(e) { return e + " à·€à·à¶±à·’" }, meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./, isPM: function(e) { return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e }, meridiem: function(e, t, n) { return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”" } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
            n = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");

        function a(e) { return e > 1 && e < 5 }

        function i(e, t, n, i) {
            var r = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
                case "ss":
                    return t || i ? r + (a(e) ? "sekundy" : "sekÃºnd") : r + "sekundami";
                case "m":
                    return t ? "minÃºta" : i ? "minÃºtu" : "minÃºtou";
                case "mm":
                    return t || i ? r + (a(e) ? "minÃºty" : "minÃºt") : r + "minÃºtami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? r + (a(e) ? "hodiny" : "hodÃ­n") : r + "hodinami";
                case "d":
                    return t || i ? "deÅˆ" : "dÅˆom";
                case "dd":
                    return t || i ? r + (a(e) ? "dni" : "dnÃ­") : r + "dÅˆami";
                case "M":
                    return t || i ? "mesiac" : "mesiacom";
                case "MM":
                    return t || i ? r + (a(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                case "y":
                    return t || i ? "rok" : "rokom";
                case "yy":
                    return t || i ? r + (a(e) ? "roky" : "rokov") : r + "rokmi"
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[vÄera o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "pred %s", s: i, ss: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || a ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return i += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return i += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return i += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                case "d":
                    return t || a ? "en dan" : "enim dnem";
                case "dd":
                    return i += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                case "M":
                    return t || a ? "en mesec" : "enim mesecem";
                case "MM":
                    return i += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                case "y":
                    return t || a ? "eno leto" : "enim letom";
                case "yy":
                    return i += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[vÄeraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[prejÅ¡njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejÅ¡njo] [sredo] [ob] LT";
                        case 6:
                            return "[prejÅ¡njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Äez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"), weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"), weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, n) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot nÃ«] LT", nextDay: "[NesÃ«r nÃ«] LT", nextWeek: "dddd [nÃ«] LT", lastDay: "[Dje nÃ«] LT", lastWeek: "dddd [e kaluar nÃ«] LT", sameElse: "L" }, relativeTime: { future: "nÃ« %s", past: "%s mÃ« parÃ«", s: "disa sekonda", ss: "%d sekonda", m: "njÃ« minutÃ«", mm: "%d minuta", h: "njÃ« orÃ«", hh: "%d orÃ«", d: "njÃ« ditÃ«", dd: "%d ditÃ«", M: "njÃ« muaj", MM: "%d muaj", y: "njÃ« vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var i = t.words[a]; return 1 === a.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i) } };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function() { return ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { words: { ss: ["ÑÐµÐºÑƒÐ½Ð´Ð°", "ÑÐµÐºÑƒÐ½Ð´Ðµ", "ÑÐµÐºÑƒÐ½Ð´Ð¸"], m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"], mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"], h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"], hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"], dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"], MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"], yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, a) { var i = t.words[a]; return 1 === a.length ? n ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i) } };
        e.defineLocale("sr-cyrl", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
            monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
            monthsParseExact: !0,
            weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
            weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
            calendar: {
                sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                },
                lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                lastWeek: function() { return ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"][this.day()] },
                sameElse: "L"
            },
            relativeTime: { future: "Ð·Ð° %s", past: "Ð¿Ñ€Ðµ %s", s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "Ð´Ð°Ð½", dd: t.translate, M: "Ð¼ÐµÑÐµÑ†", MM: t.translate, y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", yy: t.translate },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, t, n) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
            weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
            weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" },
            calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[IgÃ¥r] LT", nextWeek: "[PÃ¥] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" },
            relativeTime: { future: "om %s", past: "fÃ¶r %s sedan", s: "nÃ¥gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en mÃ¥nad", MM: "%d mÃ¥nader", y: "ett Ã¥r", yy: "%d Ã¥r" },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "à¯§", 2: "à¯¨", 3: "à¯©", 4: "à¯ª", 5: "à¯«", 6: "à¯¬", 7: "à¯­", 8: "à¯®", 9: "à¯¯", 0: "à¯¦" },
            n = { "à¯§": "1", "à¯¨": "2", "à¯©": "3", "à¯ª": "4", "à¯«": "5", "à¯¬": "6", "à¯­": "7", "à¯®": "8", "à¯¯": "9", "à¯¦": "0" };
        e.defineLocale("ta", { months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"), monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"), weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"), weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"), weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[à®‡à®©à¯à®±à¯] LT", nextDay: "[à®¨à®¾à®³à¯ˆ] LT", nextWeek: "dddd, LT", lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT", lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à®‡à®²à¯", past: "%s à®®à¯à®©à¯", s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯", ss: "%d à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯", m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯", mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯", h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯", hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯", d: "à®’à®°à¯ à®¨à®¾à®³à¯", dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯", M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯", MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯", y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯", yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯" }, dayOfMonthOrdinalParse: /\d{1,2}à®µà®¤à¯/, ordinal: function(e) { return e + "à®µà®¤à¯" }, preparse: function(e) { return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/, meridiem: function(e, t, n) { return e < 2 ? " à®¯à®¾à®®à®®à¯" : e < 6 ? " à®µà¯ˆà®•à®±à¯ˆ" : e < 10 ? " à®•à®¾à®²à¯ˆ" : e < 14 ? " à®¨à®£à¯à®ªà®•à®²à¯" : e < 18 ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : e < 22 ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? e < 2 ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t ? e : "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("te", { months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"), monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±à°²à±ˆ_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"), monthsParseExact: !0, weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"), weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"), weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[à°¨à±‡à°¡à±] LT", nextDay: "[à°°à±‡à°ªà±] LT", nextWeek: "dddd, LT", lastDay: "[à°¨à°¿à°¨à±à°¨] LT", lastWeek: "[à°—à°¤] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s à°²à±‹", past: "%s à°•à±à°°à°¿à°¤à°‚", s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±", ss: "%d à°¸à±†à°•à°¨à±à°²à±", m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚", mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±", h: "à°’à°• à°—à°‚à°Ÿ", hh: "%d à°—à°‚à°Ÿà°²à±", d: "à°’à°• à°°à±‹à°œà±", dd: "%d à°°à±‹à°œà±à°²à±", M: "à°’à°• à°¨à±†à°²", MM: "%d à°¨à±†à°²à°²à±", y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚", yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±" }, dayOfMonthOrdinalParse: /\d{1,2}à°µ/, ordinal: "%dà°µ", meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === t ? e < 4 ? e : e + 12 : "à°‰à°¦à°¯à°‚" === t ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === t ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "à°°à°¾à°¤à±à°°à°¿" : e < 10 ? "à°‰à°¦à°¯à°‚" : e < 17 ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : e < 20 ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿" }, week: { dow: 0, doy: 6 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_JuÃ±u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" },
            relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 0: "-ÑƒÐ¼", 1: "-ÑƒÐ¼", 2: "-ÑŽÐ¼", 3: "-ÑŽÐ¼", 4: "-ÑƒÐ¼", 5: "-ÑƒÐ¼", 6: "-ÑƒÐ¼", 7: "-ÑƒÐ¼", 8: "-ÑƒÐ¼", 9: "-ÑƒÐ¼", 10: "-ÑƒÐ¼", 12: "-ÑƒÐ¼", 13: "-ÑƒÐ¼", 20: "-ÑƒÐ¼", 30: "-ÑŽÐ¼", 40: "-ÑƒÐ¼", 50: "-ÑƒÐ¼", 60: "-ÑƒÐ¼", 70: "-ÑƒÐ¼", 80: "-ÑƒÐ¼", 90: "-ÑƒÐ¼", 100: "-ÑƒÐ¼" };
        e.defineLocale("tg", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "ÑÐºÑˆÐ°Ð½Ð±Ðµ_Ð´ÑƒÑˆÐ°Ð½Ð±Ðµ_ÑÐµÑˆÐ°Ð½Ð±Ðµ_Ñ‡Ð¾Ñ€ÑˆÐ°Ð½Ð±Ðµ_Ð¿Ð°Ð½Ò·ÑˆÐ°Ð½Ð±Ðµ_Ò·ÑƒÐ¼ÑŠÐ°_ÑˆÐ°Ð½Ð±Ðµ".split("_"),
            weekdaysShort: "ÑÑˆÐ±_Ð´ÑˆÐ±_ÑÑˆÐ±_Ñ‡ÑˆÐ±_Ð¿ÑˆÐ±_Ò·ÑƒÐ¼_ÑˆÐ½Ð±".split("_"),
            weekdaysMin: "ÑÑˆ_Ð´Ñˆ_ÑÑˆ_Ñ‡Ñˆ_Ð¿Ñˆ_Ò·Ð¼_ÑˆÐ±".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Ð˜Ð¼Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT", nextDay: "[ÐŸÐ°Ð³Ð¾Ò³ ÑÐ¾Ð°Ñ‚Ð¸] LT", lastDay: "[Ð”Ð¸Ñ€Ó¯Ð· ÑÐ¾Ð°Ñ‚Ð¸] LT", nextWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð¾ÑÐ½Ð´Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT", lastWeek: "dddd[Ð¸] [Ò³Ð°Ñ„Ñ‚Ð°Ð¸ Ð³ÑƒÐ·Ð°ÑˆÑ‚Ð° ÑÐ¾Ð°Ñ‚Ð¸] LT", sameElse: "L" },
            relativeTime: { future: "Ð±Ð°ÑŠÐ´Ð¸ %s", past: "%s Ð¿ÐµÑˆ", s: "ÑÐºÑ‡Ð°Ð½Ð´ ÑÐ¾Ð½Ð¸Ñ", m: "ÑÐº Ð´Ð°Ò›Ð¸Ò›Ð°", mm: "%d Ð´Ð°Ò›Ð¸Ò›Ð°", h: "ÑÐº ÑÐ¾Ð°Ñ‚", hh: "%d ÑÐ¾Ð°Ñ‚", d: "ÑÐº Ñ€Ó¯Ð·", dd: "%d Ñ€Ó¯Ð·", M: "ÑÐº Ð¼Ð¾Ò³", MM: "%d Ð¼Ð¾Ò³", y: "ÑÐº ÑÐ¾Ð»", yy: "%d ÑÐ¾Ð»" },
            meridiemParse: /ÑˆÐ°Ð±|ÑÑƒÐ±Ò³|Ñ€Ó¯Ð·|Ð±ÐµÐ³Ð¾Ò³/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "ÑˆÐ°Ð±" === t ? e < 4 ? e : e + 12 : "ÑÑƒÐ±Ò³" === t ? e : "Ñ€Ó¯Ð·" === t ? e >= 11 ? e : e + 12 : "Ð±ÐµÐ³Ð¾Ò³" === t ? e + 12 : void 0 },
            meridiem: function(e, t, n) { return e < 4 ? "ÑˆÐ°Ð±" : e < 11 ? "ÑÑƒÐ±Ò³" : e < 16 ? "Ñ€Ó¯Ð·" : e < 19 ? "Ð±ÐµÐ³Ð¾Ò³" : "ÑˆÐ°Ð±" },
            dayOfMonthOrdinalParse: /\d{1,2}-(ÑƒÐ¼|ÑŽÐ¼)/,
            ordinal: function(e) {
                var n = e % 10,
                    a = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[a])
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("th", { months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"), monthsShort: "à¸¡.à¸„._à¸.à¸ž._à¸¡à¸µ.à¸„._à¹€à¸¡.à¸¢._à¸ž.à¸„._à¸¡à¸´.à¸¢._à¸.à¸„._à¸ª.à¸„._à¸.à¸¢._à¸•.à¸„._à¸ž.à¸¢._à¸˜.à¸„.".split("_"), monthsParseExact: !0, weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"), weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm", LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H:mm" }, meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/, isPM: function(e) { return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e }, meridiem: function(e, t, n) { return e < 12 ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" }, calendar: { sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT", lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT", lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT", sameElse: "L" }, relativeTime: { future: "à¸­à¸µà¸ %s", past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§", s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ", ss: "%d à¸§à¸´à¸™à¸²à¸—à¸µ", m: "1 à¸™à¸²à¸—à¸µ", mm: "%d à¸™à¸²à¸—à¸µ", h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡", d: "1 à¸§à¸±à¸™", dd: "%d à¸§à¸±à¸™", M: "1 à¹€à¸”à¸·à¸­à¸™", MM: "%d à¹€à¸”à¸·à¸­à¸™", y: "1 à¸›à¸µ", yy: "%d à¸›à¸µ" } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, a, i) {
            var r = function(e) {
                var n = Math.floor(e % 1e3 / 100),
                    a = Math.floor(e % 100 / 10),
                    i = e % 10,
                    r = "";
                return n > 0 && (r += t[n] + "vatlh"), a > 0 && (r += ("" !== r ? " " : "") + t[a] + "maH"), i > 0 && (r += ("" !== r ? " " : "") + t[i]), "" === r ? "pagh" : r
            }(e);
            switch (a) {
                case "ss":
                    return r + " lup";
                case "mm":
                    return r + " tup";
                case "hh":
                    return r + " rep";
                case "dd":
                    return r + " jaj";
                case "MM":
                    return r + " jar";
                case "yy":
                    return r + " DIS"
            }
        }
        e.defineLocale("tlh", { months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"), monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[waâ€™leS] LT", nextWeek: "LLL", lastDay: "[waâ€™Huâ€™] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", ss: n, m: "waâ€™ tup", mm: n, h: "waâ€™ rep", hh: n, d: "waâ€™ jaj", dd: n, M: "waâ€™ jar", MM: n, y: "waâ€™ DIS", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'Ã¼ncÃ¼", 4: "'Ã¼ncÃ¼", 100: "'Ã¼ncÃ¼", 6: "'ncÄ±", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'Ä±ncÄ±", 90: "'Ä±ncÄ±" };
        e.defineLocale("tr", {
            months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
            monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[bugÃ¼n saat] LT", nextDay: "[yarÄ±n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[dÃ¼n] LT", lastWeek: "[geÃ§en] dddd [saat] LT", sameElse: "L" },
            relativeTime: { future: "%s sonra", past: "%s Ã¶nce", s: "birkaÃ§ saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gÃ¼n", dd: "%d gÃ¼n", M: "bir ay", MM: "%d ay", y: "bir yÄ±l", yy: "%d yÄ±l" },
            ordinal: function(e, n) {
                switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'Ä±ncÄ±";
                        var a = e % 10,
                            i = e % 100 - a,
                            r = e >= 100 ? 100 : null;
                        return e + (t[a] || t[i] || t[r])
                }
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n, a) { var i = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n mÃ­ut", "'iens mÃ­ut"], mm: [e + " mÃ­uts", e + " mÃ­uts"], h: ["'n Ã¾ora", "'iensa Ã¾ora"], hh: [e + " Ã¾oras", e + " Ã¾oras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return a ? i[n][0] : t ? i[n][0] : i[n][1] }
        e.defineLocale("tzl", { months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"), weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"), weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi Ã ] LT", nextDay: "[demÃ  Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[ieiri Ã ] LT", lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm", { months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"), weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[â´°âµ™â´·âµ… â´´] LT", nextDay: "[â´°âµ™â´½â´° â´´] LT", nextWeek: "dddd [â´´] LT", lastDay: "[â´°âµšâ´°âµâµœ â´´] LT", lastWeek: "dddd [â´´] LT", sameElse: "L" }, relativeTime: { future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s", past: "âµ¢â´°âµ %s", s: "âµ‰âµŽâµ‰â´½", ss: "%d âµ‰âµŽâµ‰â´½", m: "âµŽâµ‰âµâµ“â´º", mm: "%d âµŽâµ‰âµâµ“â´º", h: "âµ™â´°âµ„â´°", hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ", d: "â´°âµ™âµ™", dd: "%d oâµ™âµ™â´°âµ", M: "â´°âµ¢oâµ“âµ”", MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ", y: "â´°âµ™â´³â´°âµ™", yy: "%d âµ‰âµ™â´³â´°âµ™âµ" }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("tzm-latn", { months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minuá¸", mm: "%d minuá¸", h: "saÉ›a", hh: "%d tassaÉ›in", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            monthsShort: "ÙŠØ§Ù†Û‹Ø§Ø±_ÙÛÛ‹Ø±Ø§Ù„_Ù…Ø§Ø±Øª_Ø¦Ø§Ù¾Ø±ÛÙ„_Ù…Ø§ÙŠ_Ø¦Ù‰ÙŠÛ‡Ù†_Ø¦Ù‰ÙŠÛ‡Ù„_Ø¦Ø§Û‹ØºÛ‡Ø³Øª_Ø³ÛÙ†ØªÛ•Ø¨Ù‰Ø±_Ø¦Û†ÙƒØªÛ•Ø¨Ù‰Ø±_Ù†ÙˆÙŠØ§Ø¨Ù‰Ø±_Ø¯ÛÙƒØ§Ø¨Ù‰Ø±".split("_"),
            weekdays: "ÙŠÛ•ÙƒØ´Û•Ù†Ø¨Û•_Ø¯ÛˆØ´Û•Ù†Ø¨Û•_Ø³Û•ÙŠØ´Û•Ù†Ø¨Û•_Ú†Ø§Ø±Ø´Û•Ù†Ø¨Û•_Ù¾Û•ÙŠØ´Û•Ù†Ø¨Û•_Ø¬ÛˆÙ…Û•_Ø´Û•Ù†Ø¨Û•".split("_"),
            weekdaysShort: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            weekdaysMin: "ÙŠÛ•_Ø¯Ûˆ_Ø³Û•_Ú†Ø§_Ù¾Û•_Ø¬Ûˆ_Ø´Û•".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰", LLL: "YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm", LLLL: "ddddØŒ YYYY-ÙŠÙ‰Ù„Ù‰M-Ø¦Ø§ÙŠÙ†Ù‰Ú­D-ÙƒÛˆÙ†Ù‰ØŒ HH:mm" },
            meridiemParse: /ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•|Ø³Û•Ú¾Û•Ø±|Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†|Ú†ÛˆØ´|Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†|ÙƒÛ•Ú†/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" === t || "Ø³Û•Ú¾Û•Ø±" === t || "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" === t ? e : "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" === t || "ÙƒÛ•Ú†" === t ? e + 12 : e >= 11 ? e : e + 12 },
            meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "ÙŠÛØ±Ù‰Ù… ÙƒÛÚ†Û•" : a < 900 ? "Ø³Û•Ú¾Û•Ø±" : a < 1130 ? "Ú†ÛˆØ´ØªÙ‰Ù† Ø¨Û‡Ø±Û‡Ù†" : a < 1230 ? "Ú†ÛˆØ´" : a < 1800 ? "Ú†ÛˆØ´ØªÙ‰Ù† ÙƒÛÙŠÙ‰Ù†" : "ÙƒÛ•Ú†" },
            calendar: { sameDay: "[Ø¨ÛˆÚ¯ÛˆÙ† Ø³Ø§Ø¦Û•Øª] LT", nextDay: "[Ø¦Û•ØªÛ• Ø³Ø§Ø¦Û•Øª] LT", nextWeek: "[ÙƒÛÙ„Û•Ø±ÙƒÙ‰] dddd [Ø³Ø§Ø¦Û•Øª] LT", lastDay: "[ØªÛ†Ù†ÛˆÚ¯ÛˆÙ†] LT", lastWeek: "[Ø¦Ø§Ù„Ø¯Ù‰Ù†Ù‚Ù‰] dddd [Ø³Ø§Ø¦Û•Øª] LT", sameElse: "L" },
            relativeTime: { future: "%s ÙƒÛÙŠÙ‰Ù†", past: "%s Ø¨Û‡Ø±Û‡Ù†", s: "Ù†Û•Ú†Ú†Û• Ø³ÛÙƒÙˆÙ†Øª", ss: "%d Ø³ÛÙƒÙˆÙ†Øª", m: "Ø¨Ù‰Ø± Ù…Ù‰Ù†Û‡Øª", mm: "%d Ù…Ù‰Ù†Û‡Øª", h: "Ø¨Ù‰Ø± Ø³Ø§Ø¦Û•Øª", hh: "%d Ø³Ø§Ø¦Û•Øª", d: "Ø¨Ù‰Ø± ÙƒÛˆÙ†", dd: "%d ÙƒÛˆÙ†", M: "Ø¨Ù‰Ø± Ø¦Ø§ÙŠ", MM: "%d Ø¦Ø§ÙŠ", y: "Ø¨Ù‰Ø± ÙŠÙ‰Ù„", yy: "%d ÙŠÙ‰Ù„" },
            dayOfMonthOrdinalParse: /\d{1,2}(-ÙƒÛˆÙ†Ù‰|-Ø¦Ø§ÙŠ|-Ú¾Û•Ù¾ØªÛ•)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-ÙƒÛˆÙ†Ù‰";
                    case "w":
                    case "W":
                        return e + "-Ú¾Û•Ù¾ØªÛ•";
                    default:
                        return e
                }
            },
            preparse: function(e) { return e.replace(/ØŒ/g, ",") },
            postformat: function(e) { return e.replace(/,/g, "ØŒ") },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";

        function t(e, t, n) { var a, i, r = { ss: t ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´", mm: t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½", hh: t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²", MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²", yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²" }; return "m" === n ? t ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === n ? t ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + (a = +e, i = r[n].split("_"), a % 10 == 1 && a % 100 != 11 ? i[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? i[1] : i[2]) }

        function n(e) { return function() { return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT" } }
        e.defineLocale("uk", {
            months: { format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"), standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_") },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: function(e, t) { var n = { nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"), genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_") }; if (!0 === e) return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)); if (!e) return n.nominative; var a = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"; return n[a][e.day()] },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ñ€.", LLL: "D MMMM YYYY Ñ€., HH:mm", LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm" },
            calendar: {
                sameDay: n("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: n("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: n("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: n("[Ð£] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ð·Ð° %s", past: "%s Ñ‚Ð¾Ð¼Ñƒ", s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´", ss: t, m: t, mm: t, h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", hh: t, d: "Ð´ÐµÐ½ÑŒ", dd: t, M: "Ð¼Ñ–ÑÑÑ†ÑŒ", MM: t, y: "Ñ€Ñ–Ðº", yy: t },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function(e) { return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e) },
            meridiem: function(e, t, n) { return e < 4 ? "Ð½Ð¾Ñ‡Ñ–" : e < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : e < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-Ð¹";
                    case "D":
                        return e + "-Ð³Ð¾";
                    default:
                        return e
                }
            },
            week: { dow: 1, doy: 7 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        var t = ["Ø¬Ù†ÙˆØ±ÛŒ", "ÙØ±ÙˆØ±ÛŒ", "Ù…Ø§Ø±Ú†", "Ø§Ù¾Ø±ÛŒÙ„", "Ù…Ø¦ÛŒ", "Ø¬ÙˆÙ†", "Ø¬ÙˆÙ„Ø§Ø¦ÛŒ", "Ø§Ú¯Ø³Øª", "Ø³ØªÙ…Ø¨Ø±", "Ø§Ú©ØªÙˆØ¨Ø±", "Ù†ÙˆÙ…Ø¨Ø±", "Ø¯Ø³Ù…Ø¨Ø±"],
            n = ["Ø§ØªÙˆØ§Ø±", "Ù¾ÛŒØ±", "Ù…Ù†Ú¯Ù„", "Ø¨Ø¯Ú¾", "Ø¬Ù…Ø¹Ø±Ø§Øª", "Ø¬Ù…Ø¹Û", "ÛÙØªÛ"];
        e.defineLocale("ur", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ddddØŒ D MMMM YYYY HH:mm" }, meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/, isPM: function(e) { return "Ø´Ø§Ù…" === e }, meridiem: function(e, t, n) { return e < 12 ? "ØµØ¨Ø­" : "Ø´Ø§Ù…" }, calendar: { sameDay: "[Ø¢Ø¬ Ø¨ÙˆÙ‚Øª] LT", nextDay: "[Ú©Ù„ Ø¨ÙˆÙ‚Øª] LT", nextWeek: "dddd [Ø¨ÙˆÙ‚Øª] LT", lastDay: "[Ú¯Ø°Ø´ØªÛ Ø±ÙˆØ² Ø¨ÙˆÙ‚Øª] LT", lastWeek: "[Ú¯Ø°Ø´ØªÛ] dddd [Ø¨ÙˆÙ‚Øª] LT", sameElse: "L" }, relativeTime: { future: "%s Ø¨Ø¹Ø¯", past: "%s Ù‚Ø¨Ù„", s: "Ú†Ù†Ø¯ Ø³ÛŒÚ©Ù†Úˆ", ss: "%d Ø³ÛŒÚ©Ù†Úˆ", m: "Ø§ÛŒÚ© Ù…Ù†Ù¹", mm: "%d Ù…Ù†Ù¹", h: "Ø§ÛŒÚ© Ú¯Ú¾Ù†Ù¹Û", hh: "%d Ú¯Ú¾Ù†Ù¹Û’", d: "Ø§ÛŒÚ© Ø¯Ù†", dd: "%d Ø¯Ù†", M: "Ø§ÛŒÚ© Ù…Ø§Û", MM: "%d Ù…Ø§Û", y: "Ø§ÛŒÚ© Ø³Ø§Ù„", yy: "%d Ø³Ø§Ù„" }, preparse: function(e) { return e.replace(/ØŒ/g, ",") }, postformat: function(e) { return e.replace(/,/g, "ØŒ") }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz", { months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"), monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"), weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"), weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"), weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]", nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]", sameElse: "L" }, relativeTime: { future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°", past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½", s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚", ss: "%d Ñ„ÑƒÑ€ÑÐ°Ñ‚", m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°", mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°", h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚", hh: "%d ÑÐ¾Ð°Ñ‚", d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½", dd: "%d ÐºÑƒÐ½", M: "Ð±Ð¸Ñ€ Ð¾Ð¹", MM: "%d Ð¾Ð¹", y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»", yy: "%d Ð¹Ð¸Ð»" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("vi", { months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [nÄƒm] YYYY", LLL: "D MMMM [nÄƒm] YYYY HH:mm", LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[HÃ´m nay lÃºc] LT", nextDay: "[NgÃ y mai lÃºc] LT", nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT", lastDay: "[HÃ´m qua lÃºc] LT", lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT", sameElse: "L" }, relativeTime: { future: "%s tá»›i", past: "%s trÆ°á»›c", s: "vÃ i giÃ¢y", ss: "%d giÃ¢y", m: "má»™t phÃºt", mm: "%d phÃºt", h: "má»™t giá»", hh: "%d giá»", d: "má»™t ngÃ y", dd: "%d ngÃ y", M: "má»™t thÃ¡ng", MM: "%d thÃ¡ng", y: "má»™t nÄƒm", yy: "%d nÄƒm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
            monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
            weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
            weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT", nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT", nextWeek: "dddd [Ã¡t] LT", lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT", lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT", sameElse: "L" },
            relativeTime: { future: "Ã­~Ã± %s", past: "%s Ã¡~gÃ³", s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds", ss: "%d s~Ã©cÃ³Ã±~ds", m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©", mm: "%d m~Ã­Ã±Ãº~tÃ©s", h: "Ã¡~Ã± hÃ³~Ãºr", hh: "%d h~Ã³Ãºrs", d: "Ã¡ ~dÃ¡Ã½", dd: "%d d~Ã¡Ã½s", M: "Ã¡ ~mÃ³Ã±~th", MM: "%d m~Ã³Ã±t~hs", y: "Ã¡ ~Ã½Ã©Ã¡r", yy: "%d Ã½~Ã©Ã¡rs" },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("yo", { months: "Sáº¹Ìráº¹Ì_EÌ€reÌ€leÌ€_áº¸ráº¹Ì€naÌ€_IÌ€gbeÌ_EÌ€bibi_OÌ€kuÌ€du_Agáº¹mo_OÌ€guÌn_Owewe_á»ŒÌ€waÌ€raÌ€_BeÌluÌ_á»ŒÌ€páº¹Ì€Ì€".split("_"), monthsShort: "Sáº¹Ìr_EÌ€rl_áº¸rn_IÌ€gb_EÌ€bi_OÌ€kuÌ€_Agáº¹_OÌ€guÌ_Owe_á»ŒÌ€waÌ€_BeÌl_á»ŒÌ€páº¹Ì€Ì€".split("_"), weekdays: "AÌ€iÌ€kuÌ_AjeÌ_IÌ€sáº¹Ìgun_á»Œjá»ÌruÌ_á»Œjá»Ìbá»_áº¸tiÌ€_AÌ€baÌmáº¹Ìta".split("_"), weekdaysShort: "AÌ€iÌ€k_AjeÌ_IÌ€sáº¹Ì_á»Œjr_á»Œjb_áº¸tiÌ€_AÌ€baÌ".split("_"), weekdaysMin: "AÌ€iÌ€_Aj_IÌ€s_á»Œr_á»Œb_áº¸t_AÌ€b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[OÌ€niÌ€ ni] LT", nextDay: "[á»ŒÌ€la ni] LT", nextWeek: "dddd [á»Œsáº¹Ì€ toÌn'bá»] [ni] LT", lastDay: "[AÌ€na ni] LT", lastWeek: "dddd [á»Œsáº¹Ì€ toÌlá»Ì] [ni] LT", sameElse: "L" }, relativeTime: { future: "niÌ %s", past: "%s ká»jaÌ", s: "iÌ€sáº¹juÌ aayaÌ die", ss: "aayaÌ %d", m: "iÌ€sáº¹juÌ kan", mm: "iÌ€sáº¹juÌ %d", h: "waÌkati kan", hh: "waÌkati %d", d: "á»já»Ì kan", dd: "á»já»Ì %d", M: "osuÌ€ kan", MM: "osuÌ€ %d", y: "á»duÌn kan", yy: "á»duÌn %d" }, dayOfMonthOrdinalParse: /á»já»Ì\s\d{1,2}/, ordinal: "á»já»Ì %d", week: { dow: 1, doy: 4 } })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†", LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†", l: "YYYY/M/D", ll: "YYYYå¹´MæœˆDæ—¥", lll: "YYYYå¹´MæœˆDæ—¥ HH:mm", llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm" },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : e >= 11 ? e : e + 12 },
            meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š" },
            calendar: { sameDay: "[ä»Šå¤©]LT", nextDay: "[æ˜Žå¤©]LT", nextWeek: "[ä¸‹]ddddLT", lastDay: "[æ˜¨å¤©]LT", lastWeek: "[ä¸Š]ddddLT", sameElse: "L" },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "å‘¨";
                    default:
                        return e
                }
            },
            relativeTime: { future: "%så†…", past: "%så‰", s: "å‡ ç§’", ss: "%d ç§’", m: "1 åˆ†é’Ÿ", mm: "%d åˆ†é’Ÿ", h: "1 å°æ—¶", hh: "%d å°æ—¶", d: "1 å¤©", dd: "%d å¤©", M: "1 ä¸ªæœˆ", MM: "%d ä¸ªæœˆ", y: "1 å¹´", yy: "%d å¹´" },
            week: { dow: 1, doy: 4 }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm", LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm", l: "YYYY/M/D", ll: "YYYYå¹´MæœˆDæ—¥", lll: "YYYYå¹´MæœˆDæ—¥ HH:mm", llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm" },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0 },
            meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š" },
            calendar: { sameDay: "[ä»Šå¤©]LT", nextDay: "[æ˜Žå¤©]LT", nextWeek: "[ä¸‹]ddddLT", lastDay: "[æ˜¨å¤©]LT", lastWeek: "[ä¸Š]ddddLT", sameElse: "L" },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: { future: "%så…§", past: "%så‰", s: "å¹¾ç§’", ss: "%d ç§’", m: "1 åˆ†é˜", mm: "%d åˆ†é˜", h: "1 å°æ™‚", hh: "%d å°æ™‚", d: "1 å¤©", dd: "%d å¤©", M: "1 å€‹æœˆ", MM: "%d å€‹æœˆ", y: "1 å¹´", yy: "%d å¹´" }
        })
    }(n(0))
}, function(e, t, n) {
    ! function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm", LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm", l: "YYYY/M/D", ll: "YYYYå¹´MæœˆDæ—¥", lll: "YYYYå¹´MæœˆDæ—¥ HH:mm", llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm" },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function(e, t) { return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0 },
            meridiem: function(e, t, n) { var a = 100 * e + t; return a < 600 ? "å‡Œæ™¨" : a < 900 ? "æ—©ä¸Š" : a < 1130 ? "ä¸Šåˆ" : a < 1230 ? "ä¸­åˆ" : a < 1800 ? "ä¸‹åˆ" : "æ™šä¸Š" },
            calendar: { sameDay: "[ä»Šå¤©] LT", nextDay: "[æ˜Žå¤©] LT", nextWeek: "[ä¸‹]dddd LT", lastDay: "[æ˜¨å¤©] LT", lastWeek: "[ä¸Š]dddd LT", sameElse: "L" },
            dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function(e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "æ—¥";
                    case "M":
                        return e + "æœˆ";
                    case "w":
                    case "W":
                        return e + "é€±";
                    default:
                        return e
                }
            },
            relativeTime: { future: "%så…§", past: "%så‰", s: "å¹¾ç§’", ss: "%d ç§’", m: "1 åˆ†é˜", mm: "%d åˆ†é˜", h: "1 å°æ™‚", hh: "%d å°æ™‚", d: "1 å¤©", dd: "%d å¤©", M: "1 å€‹æœˆ", MM: "%d å€‹æœˆ", y: "1 å¹´", yy: "%d å¹´" }
        })
    }(n(0))
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/4266edb85ec6bc92f01fb79279ebfa75.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/74e6471e8017473b8586979c78aea950.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/e049050a746a8f4822482a70a5c3c989.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/d84aea39f2c149af4d400af18e501554.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/51ffef62a0b9ec74aab1865ae80ec571.png" }, function(e, t, n) {
    e.exports = function(e) {
        var t = {};

        function n(a) { if (t[a]) return t[a].exports; var i = t[a] = { i: a, l: !1, exports: {} }; return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
        return n.m = e, n.c = t, n.d = function(e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(a, i, function(t) { return e[t] }.bind(null, i));
            return a
        }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 90)
    }({
        17: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a = n(18),
                i = function() {
                    function e() {}
                    return e.getFirstMatch = function(e, t) { var n = t.match(e); return n && n.length > 0 && n[1] || "" }, e.getSecondMatch = function(e, t) { var n = t.match(e); return n && n.length > 1 && n[2] || "" }, e.matchAndReturnConst = function(e, t, n) { if (e.test(t)) return n }, e.getWindowsVersionName = function(e) {
                        switch (e) {
                            case "NT":
                                return "NT";
                            case "XP":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return
                        }
                    }, e.getMacOSVersionName = function(e) {
                        var t = e.split(".").splice(0, 2).map(function(e) { return parseInt(e, 10) || 0 });
                        if (t.push(0), 10 === t[0]) switch (t[1]) {
                            case 5:
                                return "Leopard";
                            case 6:
                                return "Snow Leopard";
                            case 7:
                                return "Lion";
                            case 8:
                                return "Mountain Lion";
                            case 9:
                                return "Mavericks";
                            case 10:
                                return "Yosemite";
                            case 11:
                                return "El Capitan";
                            case 12:
                                return "Sierra";
                            case 13:
                                return "High Sierra";
                            case 14:
                                return "Mojave";
                            case 15:
                                return "Catalina";
                            default:
                                return
                        }
                    }, e.getAndroidVersionName = function(e) { var t = e.split(".").splice(0, 2).map(function(e) { return parseInt(e, 10) || 0 }); if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0 }, e.getVersionPrecision = function(e) { return e.split(".").length }, e.compareVersions = function(t, n, a) {
                        void 0 === a && (a = !1);
                        var i = e.getVersionPrecision(t),
                            r = e.getVersionPrecision(n),
                            s = Math.max(i, r),
                            o = 0,
                            d = e.map([t, n], function(t) {
                                var n = s - e.getVersionPrecision(t),
                                    a = t + new Array(n + 1).join(".0");
                                return e.map(a.split("."), function(e) { return new Array(20 - e.length).join("0") + e }).reverse()
                            });
                        for (a && (o = s - Math.min(i, r)), s -= 1; s >= o;) {
                            if (d[0][s] > d[1][s]) return 1;
                            if (d[0][s] === d[1][s]) {
                                if (s === o) return 0;
                                s -= 1
                            } else if (d[0][s] < d[1][s]) return -1
                        }
                    }, e.map = function(e, t) { var n, a = []; if (Array.prototype.map) return Array.prototype.map.call(e, t); for (n = 0; n < e.length; n += 1) a.push(t(e[n])); return a }, e.find = function(e, t) { var n, a; if (Array.prototype.find) return Array.prototype.find.call(e, t); for (n = 0, a = e.length; n < a; n += 1) { var i = e[n]; if (t(i, n)) return i } }, e.assign = function(e) { for (var t, n, a = e, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) r[s - 1] = arguments[s]; if (Object.assign) return Object.assign.apply(Object, [e].concat(r)); var o = function() { var e = r[t]; "object" == typeof e && null !== e && Object.keys(e).forEach(function(t) { a[t] = e[t] }) }; for (t = 0, n = r.length; t < n; t += 1) o(); return e }, e.getBrowserAlias = function(e) { return a.BROWSER_ALIASES_MAP[e] }, e.getBrowserTypeByAlias = function(e) { return a.BROWSER_MAP[e] || "" }, e
                }();
            t.default = i, e.exports = t.default
        },
        18: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, t.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, t.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, t.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, t.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" }
        },
        90: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a, i = (a = n(91)) && a.__esModule ? a : { default: a },
                r = n(18);

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var o = function() {
                function e() {}
                var t, n;
                return e.getParser = function(e, t) { if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string"); return new i.default(e, t) }, e.parse = function(e) { return new i.default(e).getResult() }, t = e, (n = [{ key: "BROWSER_MAP", get: function() { return r.BROWSER_MAP } }, { key: "ENGINE_MAP", get: function() { return r.ENGINE_MAP } }, { key: "OS_MAP", get: function() { return r.OS_MAP } }, { key: "PLATFORMS_MAP", get: function() { return r.PLATFORMS_MAP } }]) && s(t, n), e
            }();
            t.default = o, e.exports = t.default
        },
        91: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a = d(n(92)),
                i = d(n(93)),
                r = d(n(94)),
                s = d(n(95)),
                o = d(n(17));

            function d(e) { return e && e.__esModule ? e : { default: e } }
            var l = function() {
                function e(e, t) {
                    if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                }
                var t = e.prototype;
                return t.getUA = function() { return this._ua }, t.test = function(e) { return e.test(this._ua) }, t.parseBrowser = function() {
                    var e = this;
                    this.parsedResult.browser = {};
                    var t = o.default.find(a.default, function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some(function(t) { return e.test(t) }); throw new Error("Browser's test function is not valid") });
                    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                }, t.getBrowser = function() { return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser() }, t.getBrowserName = function(e) { return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "" }, t.getBrowserVersion = function() { return this.getBrowser().version }, t.getOS = function() { return this.parsedResult.os ? this.parsedResult.os : this.parseOS() }, t.parseOS = function() {
                    var e = this;
                    this.parsedResult.os = {};
                    var t = o.default.find(i.default, function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some(function(t) { return e.test(t) }); throw new Error("Browser's test function is not valid") });
                    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                }, t.getOSName = function(e) { var t = this.getOS().name; return e ? String(t).toLowerCase() || "" : t || "" }, t.getOSVersion = function() { return this.getOS().version }, t.getPlatform = function() { return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform() }, t.getPlatformType = function(e) { void 0 === e && (e = !1); var t = this.getPlatform().type; return e ? String(t).toLowerCase() || "" : t || "" }, t.parsePlatform = function() {
                    var e = this;
                    this.parsedResult.platform = {};
                    var t = o.default.find(r.default, function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some(function(t) { return e.test(t) }); throw new Error("Browser's test function is not valid") });
                    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                }, t.getEngine = function() { return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine() }, t.getEngineName = function(e) { return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "" }, t.parseEngine = function() {
                    var e = this;
                    this.parsedResult.engine = {};
                    var t = o.default.find(s.default, function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some(function(t) { return e.test(t) }); throw new Error("Browser's test function is not valid") });
                    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                }, t.parse = function() { return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this }, t.getResult = function() { return o.default.assign({}, this.parsedResult) }, t.satisfies = function(e) {
                    var t = this,
                        n = {},
                        a = 0,
                        i = {},
                        r = 0;
                    if (Object.keys(e).forEach(function(t) { var s = e[t]; "string" == typeof s ? (i[t] = s, r += 1) : "object" == typeof s && (n[t] = s, a += 1) }), a > 0) {
                        var s = Object.keys(n),
                            d = o.default.find(s, function(e) { return t.isOS(e) });
                        if (d) { var l = this.satisfies(n[d]); if (void 0 !== l) return l }
                        var u = o.default.find(s, function(e) { return t.isPlatform(e) });
                        if (u) { var c = this.satisfies(n[u]); if (void 0 !== c) return c }
                    }
                    if (r > 0) {
                        var m = Object.keys(i),
                            h = o.default.find(m, function(e) { return t.isBrowser(e, !0) });
                        if (void 0 !== h) return this.compareVersion(i[h])
                    }
                }, t.isBrowser = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = this.getBrowserName().toLowerCase(),
                        a = e.toLowerCase(),
                        i = o.default.getBrowserTypeByAlias(a);
                    return t && i && (a = i.toLowerCase()), a === n
                }, t.compareVersion = function(e) {
                    var t = [0],
                        n = e,
                        a = !1,
                        i = this.getBrowserVersion();
                    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (a = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (a = !0, n = e.substr(1)), t.indexOf(o.default.compareVersions(i, n, a)) > -1
                }, t.isOS = function(e) { return this.getOSName(!0) === String(e).toLowerCase() }, t.isPlatform = function(e) { return this.getPlatformType(!0) === String(e).toLowerCase() }, t.isEngine = function(e) { return this.getEngineName(!0) === String(e).toLowerCase() }, t.is = function(e, t) { return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e) }, t.some = function(e) { var t = this; return void 0 === e && (e = []), e.some(function(e) { return t.is(e) }) }, e
            }();
            t.default = l, e.exports = t.default
        },
        92: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a, i = (a = n(17)) && a.__esModule ? a : { default: a },
                r = /version\/(\d+(\.?_?\d+)+)/i,
                s = [{
                    test: [/googlebot/i],
                    describe: function(e) {
                        var t = { name: "Googlebot" },
                            n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/opera/i],
                    describe: function(e) {
                        var t = { name: "Opera" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/opr\/|opios/i],
                    describe: function(e) {
                        var t = { name: "Opera" },
                            n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/SamsungBrowser/i],
                    describe: function(e) {
                        var t = { name: "Samsung Internet for Android" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/Whale/i],
                    describe: function(e) {
                        var t = { name: "NAVER Whale Browser" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/MZBrowser/i],
                    describe: function(e) {
                        var t = { name: "MZ Browser" },
                            n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/focus/i],
                    describe: function(e) {
                        var t = { name: "Focus" },
                            n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/swing/i],
                    describe: function(e) {
                        var t = { name: "Swing" },
                            n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/coast/i],
                    describe: function(e) {
                        var t = { name: "Opera Coast" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/opt\/\d+(?:.?_?\d+)+/i],
                    describe: function(e) {
                        var t = { name: "Opera Touch" },
                            n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/yabrowser/i],
                    describe: function(e) {
                        var t = { name: "Yandex Browser" },
                            n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/ucbrowser/i],
                    describe: function(e) {
                        var t = { name: "UC Browser" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/Maxthon|mxios/i],
                    describe: function(e) {
                        var t = { name: "Maxthon" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/epiphany/i],
                    describe: function(e) {
                        var t = { name: "Epiphany" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/puffin/i],
                    describe: function(e) {
                        var t = { name: "Puffin" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/sleipnir/i],
                    describe: function(e) {
                        var t = { name: "Sleipnir" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/k-meleon/i],
                    describe: function(e) {
                        var t = { name: "K-Meleon" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/micromessenger/i],
                    describe: function(e) {
                        var t = { name: "WeChat" },
                            n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/qqbrowser/i],
                    describe: function(e) {
                        var t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" },
                            n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/msie|trident/i],
                    describe: function(e) {
                        var t = { name: "Internet Explorer" },
                            n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/\sedg\//i],
                    describe: function(e) {
                        var t = { name: "Microsoft Edge" },
                            n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/edg([ea]|ios)/i],
                    describe: function(e) {
                        var t = { name: "Microsoft Edge" },
                            n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/vivaldi/i],
                    describe: function(e) {
                        var t = { name: "Vivaldi" },
                            n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/seamonkey/i],
                    describe: function(e) {
                        var t = { name: "SeaMonkey" },
                            n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/sailfish/i],
                    describe: function(e) {
                        var t = { name: "Sailfish" },
                            n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/silk/i],
                    describe: function(e) {
                        var t = { name: "Amazon Silk" },
                            n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/phantom/i],
                    describe: function(e) {
                        var t = { name: "PhantomJS" },
                            n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/slimerjs/i],
                    describe: function(e) {
                        var t = { name: "SlimerJS" },
                            n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                    describe: function(e) {
                        var t = { name: "BlackBerry" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i],
                    describe: function(e) {
                        var t = { name: "WebOS Browser" },
                            n = i.default.getFirstMatch(r, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/bada/i],
                    describe: function(e) {
                        var t = { name: "Bada" },
                            n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/tizen/i],
                    describe: function(e) {
                        var t = { name: "Tizen" },
                            n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/qupzilla/i],
                    describe: function(e) {
                        var t = { name: "QupZilla" },
                            n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/firefox|iceweasel|fxios/i],
                    describe: function(e) {
                        var t = { name: "Firefox" },
                            n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/electron/i],
                    describe: function(e) {
                        var t = { name: "Electron" },
                            n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/MiuiBrowser/i],
                    describe: function(e) {
                        var t = { name: "Miui" },
                            n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/chromium/i],
                    describe: function(e) {
                        var t = { name: "Chromium" },
                            n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/chrome|crios|crmo/i],
                    describe: function(e) {
                        var t = { name: "Chrome" },
                            n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/GSA/i],
                    describe: function(e) {
                        var t = { name: "Google Search" },
                            n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function(e) {
                        var t = !e.test(/like android/i),
                            n = e.test(/android/i);
                        return t && n
                    },
                    describe: function(e) {
                        var t = { name: "Android Browser" },
                            n = i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/playstation 4/i],
                    describe: function(e) {
                        var t = { name: "PlayStation 4" },
                            n = i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/safari|applewebkit/i],
                    describe: function(e) {
                        var t = { name: "Safari" },
                            n = i.default.getFirstMatch(r, e);
                        return n && (t.version = n), t
                    }
                }, { test: [/.*/i], describe: function(e) { var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /; return { name: i.default.getFirstMatch(t, e), version: i.default.getSecondMatch(t, e) } } }];
            t.default = s, e.exports = t.default
        },
        93: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a, i = (a = n(17)) && a.__esModule ? a : { default: a },
                r = n(18),
                s = [{ test: [/Roku\/DVP/], describe: function(e) { var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e); return { name: r.OS_MAP.Roku, version: t } } }, { test: [/windows phone/i], describe: function(e) { var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e); return { name: r.OS_MAP.WindowsPhone, version: t } } }, {
                    test: [/windows /i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                            n = i.default.getWindowsVersionName(t);
                        return { name: r.OS_MAP.Windows, version: t, versionName: n }
                    }
                }, {
                    test: [/Macintosh(.*?) FxiOS(.*?)\//],
                    describe: function(e) {
                        var t = { name: r.OS_MAP.iOS },
                            n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: [/macintosh/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                            n = i.default.getMacOSVersionName(t),
                            a = { name: r.OS_MAP.MacOS, version: t };
                        return n && (a.versionName = n), a
                    }
                }, { test: [/(ipod|iphone|ipad)/i], describe: function(e) { var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, "."); return { name: r.OS_MAP.iOS, version: t } } }, {
                    test: function(e) {
                        var t = !e.test(/like android/i),
                            n = e.test(/android/i);
                        return t && n
                    },
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                            n = i.default.getAndroidVersionName(t),
                            a = { name: r.OS_MAP.Android, version: t };
                        return n && (a.versionName = n), a
                    }
                }, {
                    test: [/(web|hpw)[o0]s/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                            n = { name: r.OS_MAP.WebOS };
                        return t && t.length && (n.version = t), n
                    }
                }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e) { var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e); return { name: r.OS_MAP.BlackBerry, version: t } } }, { test: [/bada/i], describe: function(e) { var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e); return { name: r.OS_MAP.Bada, version: t } } }, { test: [/tizen/i], describe: function(e) { var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e); return { name: r.OS_MAP.Tizen, version: t } } }, { test: [/linux/i], describe: function() { return { name: r.OS_MAP.Linux } } }, { test: [/CrOS/], describe: function() { return { name: r.OS_MAP.ChromeOS } } }, { test: [/PlayStation 4/], describe: function(e) { var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e); return { name: r.OS_MAP.PlayStation4, version: t } } }];
            t.default = s, e.exports = t.default
        },
        94: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a, i = (a = n(17)) && a.__esModule ? a : { default: a },
                r = n(18),
                s = [{ test: [/googlebot/i], describe: function() { return { type: "bot", vendor: "Google" } } }, {
                    test: [/huawei/i],
                    describe: function(e) {
                        var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                            n = { type: r.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                        return t && (n.model = t), n
                    }
                }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() { return { type: r.PLATFORMS_MAP.tablet, vendor: "Nexus" } } }, { test: [/ipad/i], describe: function() { return { type: r.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" } } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() { return { type: r.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" } } }, { test: [/kftt build/i], describe: function() { return { type: r.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" } } }, { test: [/silk/i], describe: function() { return { type: r.PLATFORMS_MAP.tablet, vendor: "Amazon" } } }, { test: [/tablet(?! pc)/i], describe: function() { return { type: r.PLATFORMS_MAP.tablet } } }, {
                    test: function(e) {
                        var t = e.test(/ipod|iphone/i),
                            n = e.test(/like (ipod|iphone)/i);
                        return t && !n
                    },
                    describe: function(e) { var t = i.default.getFirstMatch(/(ipod|iphone)/i, e); return { type: r.PLATFORMS_MAP.mobile, vendor: "Apple", model: t } }
                }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() { return { type: r.PLATFORMS_MAP.mobile, vendor: "Nexus" } } }, { test: [/[^-]mobi/i], describe: function() { return { type: r.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "blackberry" === e.getBrowserName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.mobile, vendor: "BlackBerry" } } }, { test: function(e) { return "bada" === e.getBrowserName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "windows phone" === e.getBrowserName() }, describe: function() { return { type: r.PLATFORMS_MAP.mobile, vendor: "Microsoft" } } }, { test: function(e) { var t = Number(String(e.getOSVersion()).split(".")[0]); return "android" === e.getOSName(!0) && t >= 3 }, describe: function() { return { type: r.PLATFORMS_MAP.tablet } } }, { test: function(e) { return "android" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "macos" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.desktop, vendor: "Apple" } } }, { test: function(e) { return "windows" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.desktop } } }, { test: function(e) { return "linux" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.desktop } } }, { test: function(e) { return "playstation 4" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.tv } } }, { test: function(e) { return "roku" === e.getOSName(!0) }, describe: function() { return { type: r.PLATFORMS_MAP.tv } } }];
            t.default = s, e.exports = t.default
        },
        95: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            var a, i = (a = n(17)) && a.__esModule ? a : { default: a },
                r = n(18),
                s = [{ test: function(e) { return "microsoft edge" === e.getBrowserName(!0) }, describe: function(e) { if (/\sedg\//i.test(e)) return { name: r.ENGINE_MAP.Blink }; var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e); return { name: r.ENGINE_MAP.EdgeHTML, version: t } } }, {
                    test: [/trident/i],
                    describe: function(e) {
                        var t = { name: r.ENGINE_MAP.Trident },
                            n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function(e) { return e.test(/presto/i) },
                    describe: function(e) {
                        var t = { name: r.ENGINE_MAP.Presto },
                            n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, {
                    test: function(e) {
                        var t = e.test(/gecko/i),
                            n = e.test(/like gecko/i);
                        return t && !n
                    },
                    describe: function(e) {
                        var t = { name: r.ENGINE_MAP.Gecko },
                            n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }, { test: [/(apple)?webkit\/537\.36/i], describe: function() { return { name: r.ENGINE_MAP.Blink } } }, {
                    test: [/(apple)?webkit/i],
                    describe: function(e) {
                        var t = { name: r.ENGINE_MAP.WebKit },
                            n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                        return n && (t.version = n), t
                    }
                }];
            t.default = s, e.exports = t.default
        }
    })
}, function(e, t, n) {}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/46c2967086245cf2dee3ebdaae167762.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/1e7e38c9c85759dd83c9303509174afb.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/270319bca6a53ce8d3ccef09f2ea8729.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/00ef6bc9ae8cb5a60224052087143f9b.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/f9c3224c76449d390303f39a11f2c627.jpg" }, function(e, t, n) {
    "use strict";
    var a = n(5);
    n.n(a).a
}, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t, n) {
    var a = { "./af": 43, "./af.js": 43, "./ar": 44, "./ar-dz": 45, "./ar-dz.js": 45, "./ar-kw": 46, "./ar-kw.js": 46, "./ar-ly": 47, "./ar-ly.js": 47, "./ar-ma": 48, "./ar-ma.js": 48, "./ar-sa": 49, "./ar-sa.js": 49, "./ar-tn": 50, "./ar-tn.js": 50, "./ar.js": 44, "./az": 51, "./az.js": 51, "./be": 52, "./be.js": 52, "./bg": 53, "./bg.js": 53, "./bm": 54, "./bm.js": 54, "./bn": 55, "./bn.js": 55, "./bo": 56, "./bo.js": 56, "./br": 57, "./br.js": 57, "./bs": 58, "./bs.js": 58, "./ca": 59, "./ca.js": 59, "./cs": 60, "./cs.js": 60, "./cv": 61, "./cv.js": 61, "./cy": 62, "./cy.js": 62, "./da": 63, "./da.js": 63, "./de": 64, "./de-at": 65, "./de-at.js": 65, "./de-ch": 66, "./de-ch.js": 66, "./de.js": 64, "./dv": 67, "./dv.js": 67, "./el": 68, "./el.js": 68, "./en-SG": 69, "./en-SG.js": 69, "./en-au": 70, "./en-au.js": 70, "./en-ca": 71, "./en-ca.js": 71, "./en-gb": 72, "./en-gb.js": 72, "./en-ie": 73, "./en-ie.js": 73, "./en-il": 74, "./en-il.js": 74, "./en-nz": 75, "./en-nz.js": 75, "./eo": 76, "./eo.js": 76, "./es": 77, "./es-do": 78, "./es-do.js": 78, "./es-us": 79, "./es-us.js": 79, "./es.js": 77, "./et": 80, "./et.js": 80, "./eu": 81, "./eu.js": 81, "./fa": 82, "./fa.js": 82, "./fi": 83, "./fi.js": 83, "./fo": 84, "./fo.js": 84, "./fr": 85, "./fr-ca": 86, "./fr-ca.js": 86, "./fr-ch": 87, "./fr-ch.js": 87, "./fr.js": 85, "./fy": 88, "./fy.js": 88, "./ga": 89, "./ga.js": 89, "./gd": 90, "./gd.js": 90, "./gl": 91, "./gl.js": 91, "./gom-latn": 92, "./gom-latn.js": 92, "./gu": 93, "./gu.js": 93, "./he": 94, "./he.js": 94, "./hi": 95, "./hi.js": 95, "./hr": 96, "./hr.js": 96, "./hu": 97, "./hu.js": 97, "./hy-am": 98, "./hy-am.js": 98, "./id": 99, "./id.js": 99, "./is": 100, "./is.js": 100, "./it": 101, "./it-ch": 102, "./it-ch.js": 102, "./it.js": 101, "./ja": 103, "./ja.js": 103, "./jv": 104, "./jv.js": 104, "./ka": 105, "./ka.js": 105, "./kk": 106, "./kk.js": 106, "./km": 107, "./km.js": 107, "./kn": 108, "./kn.js": 108, "./ko": 109, "./ko.js": 109, "./ku": 110, "./ku.js": 110, "./ky": 111, "./ky.js": 111, "./lb": 112, "./lb.js": 112, "./lo": 113, "./lo.js": 113, "./lt": 114, "./lt.js": 114, "./lv": 115, "./lv.js": 115, "./me": 116, "./me.js": 116, "./mi": 117, "./mi.js": 117, "./mk": 118, "./mk.js": 118, "./ml": 119, "./ml.js": 119, "./mn": 120, "./mn.js": 120, "./mr": 121, "./mr.js": 121, "./ms": 122, "./ms-my": 123, "./ms-my.js": 123, "./ms.js": 122, "./mt": 124, "./mt.js": 124, "./my": 125, "./my.js": 125, "./nb": 126, "./nb.js": 126, "./ne": 127, "./ne.js": 127, "./nl": 128, "./nl-be": 129, "./nl-be.js": 129, "./nl.js": 128, "./nn": 130, "./nn.js": 130, "./pa-in": 131, "./pa-in.js": 131, "./pl": 132, "./pl.js": 132, "./pt": 133, "./pt-br": 134, "./pt-br.js": 134, "./pt.js": 133, "./ro": 135, "./ro.js": 135, "./ru": 136, "./ru.js": 136, "./sd": 137, "./sd.js": 137, "./se": 138, "./se.js": 138, "./si": 139, "./si.js": 139, "./sk": 140, "./sk.js": 140, "./sl": 141, "./sl.js": 141, "./sq": 142, "./sq.js": 142, "./sr": 143, "./sr-cyrl": 144, "./sr-cyrl.js": 144, "./sr.js": 143, "./ss": 145, "./ss.js": 145, "./sv": 146, "./sv.js": 146, "./sw": 147, "./sw.js": 147, "./ta": 148, "./ta.js": 148, "./te": 149, "./te.js": 149, "./tet": 150, "./tet.js": 150, "./tg": 151, "./tg.js": 151, "./th": 152, "./th.js": 152, "./tl-ph": 153, "./tl-ph.js": 153, "./tlh": 154, "./tlh.js": 154, "./tr": 155, "./tr.js": 155, "./tzl": 156, "./tzl.js": 156, "./tzm": 157, "./tzm-latn": 158, "./tzm-latn.js": 158, "./tzm.js": 157, "./ug-cn": 159, "./ug-cn.js": 159, "./uk": 160, "./uk.js": 160, "./ur": 161, "./ur.js": 161, "./uz": 162, "./uz-latn": 163, "./uz-latn.js": 163, "./uz.js": 162, "./vi": 164, "./vi.js": 164, "./x-pseudo": 165, "./x-pseudo.js": 165, "./yo": 166, "./yo.js": 166, "./zh-cn": 167, "./zh-cn.js": 167, "./zh-hk": 168, "./zh-hk.js": 168, "./zh-tw": 169, "./zh-tw.js": 169 };

    function i(e) { var t = r(e); return n(t) }

    function r(e) { if (!n.o(a, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return a[e] }
    i.keys = function() { return Object.keys(a) }, i.resolve = r, e.exports = i, i.id = 184
}, function(e, t, n) {
    "use strict";
    var a = n(6);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(7);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(8);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(9);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(10);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(11);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/d3f9f9b78b54ecea1ced475c305948ad.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/596020509cf59f3c801ee30d73aeed47.png" }, function(e, t, n) {
    "use strict";
    var a = n(12);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/62ea674dc5e51bf359ee833d4f3b8eb2.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/817200b45f54586d58dbd3e82288e86f.png" }, function(e, t, n) {
    "use strict";
    var a = n(13);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/03c4ed9d318d9299bdc4dac36271a3b5.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/360c388f6924e0affcb15baf8b2ba9a8.png" }, function(e, t, n) {
    "use strict";
    var a = n(14);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(15);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(16);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(17);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(18);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/fb2a4b1887228404ba7621eef3761339.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/6a626a213557abe270c2d0a185637e0c.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/5bc41bb2e500bfb3126538cc2faa64fa.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/6d3b6c577bab6fbe38d2f74fe0d768f6.png" }, function(e, t, n) {
    "use strict";
    var a = n(19);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/db57342f4921d5ec99ba3de44c1e5cb2.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/170a8cda455ba1c3c8749dbb272890e0.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/25f96f0583b8dad501cddce83577bb68.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/b23c6887673ff99f7e39c92cc0a83a9b.png" }, function(e, t, n) {
    "use strict";
    var a = n(20);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(21);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(22);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/4266edb85ec6bc92f01fb79279ebfa75.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/74e6471e8017473b8586979c78aea950.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/e049050a746a8f4822482a70a5c3c989.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/d84aea39f2c149af4d400af18e501554.png" }, function(e, t, n) {
    "use strict";
    var a = n(23);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/08e777d67e4bd10c87c580d1e9aaf5bf.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/b06afc2f66c94a234f86a3ff9f9b3146.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/d167e4923187f4fd2c049aee6747608b.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/5d3b65d9e2bbcaf42ea544577b69e780.png" }, function(e, t, n) {
    "use strict";
    var a = n(24);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/6149993ab8c6980724059556b7900add.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/9832c2fe947700d1df71db6c5af2801c.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/0874af6320e9a391fc9e8c1389eb2bf9.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/b3725d5a0102b8238134c37f55b82970.png" }, function(e, t, n) {
    "use strict";
    var a = n(25);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/ffed551b46409045adae78eed1e3424a.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/fe54291cb0f1d188e5aaccc921c435eb.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/a21b76fc267b08c0b7afe5bfdce6f679.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/993ba55f92b372a4a4e036c5f89be437.png" }, function(e, t, n) {
    "use strict";
    var a = n(26);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(27);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(28);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/09bff4c53a449d7b585de8ae8781d5b1.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/a127c346db8114564ddbdd19fc7c2460.png" }, function(e, t, n) {
    "use strict";
    var a = n(29);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(30);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/7c5ff869bee90bd45c6ecdb918af7515.svg" }, function(e, t, n) {
    "use strict";
    var a = n(31);
    n.n(a).a
}, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/4ea7fe21b9f9f5a63f61e7c9b4f5da61.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/ac99920f03968af90506a9fc25c15d43.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/5ad0f5a3a128f955e350e58c4d1d12a5.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/0af8c536640e9868a56249b4da190ead.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/256ff3bec497dc0990becf25478316a2.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/1274b1e384bd1232b921221be6c3dce9.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/0bb76e3d25ef3e0cd805ed45cf24459d.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/0fb3011878bb37d94683a6ff2679db26.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/46b0966eb4ffbb70f8b4c3c65724d1ee.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/5ffb42706051ae5c22699bc8b9dc752d.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/71690b365a804ffb8bd848d86e586b0a.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/f5525855462bd947bca6e479c6b9a0fd.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/99193996242d7cfa72dfe7231b75dcf5.png" }, function(e, t) { e.exports = "https://demo.morphcast.com/sdk-features/media/3cc44353c45f7762a2c6fbc007affb1e.png" }, function(e, t, n) {
    "use strict";
    var a = n(32);
    n.n(a).a
}, function(e, t, n) {
    "use strict";
    var a = n(33);
    n.n(a).a
}, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(36), n(176);
    var a = n(4),
        i = n.n(a),
        r = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "wrapper", class: { black: e.black } }, [n("div", { staticClass: "content" }, [n("LeftBar", { staticClass: "left", attrs: { yt: e.yt, switch_src: e.switch_src, na: e.na, black: e.black, mood: e.mood, wish: e.wish, words: e.words, tracking: e.tracking }, on: { wish_click: e.toggleWish, words_click: e.toggleWords, mood_click: e.toggleMood, tracking_click: e.toggleTracking } }), e._v(" "), n("div", { staticClass: "mid" }, [n("div", { staticClass: "header" }, [e._m(0), e._v(" "), n("img", { staticClass: "icon", attrs: { src: e.cameraIcon }, on: { click: function(t) { return e.openCamera(!0) } } }), e._v(" "), n("img", { staticClass: "icon", attrs: { src: e.videoIcon }, on: { click: function(t) { return e.openDialogVideo() } } }), e._v(" "), n("img", { staticClass: "icon_header_bar", attrs: { id: "openLocalFile", src: e.openFileIcon }, on: { click: function(t) { return e.openLocalFile() } } }), e._v(" "), n("img", { staticClass: "icon", attrs: { src: e.youtubeIcon }, on: { click: function(t) { return e.openDialogVideoYoutube() } } }), e._v(" "), n("img", { staticClass: "icon icon_2 gdpr", attrs: { src: e.gdprIcon } }), e._v(" "), n("div", { staticClass: "dx" }, [e.IsMobile ? e._e() : n("a", { attrs: { href: "https://ai-sdk.morphcast.com/latest/index.html", target: "_blank" } }, [n("img", { staticClass: "icon_3", attrs: { src: e.buttonAiHtml5Sdk } })]), e._v(" "), n("img", { staticClass: "icon_header_bar", attrs: { src: e.shareIcon }, on: { click: function(t) { return e.share() } } }), e._v(" "), n("img", { staticClass: "icon_header_bar", attrs: { src: e.fullscreenIcon }, on: { click: function(t) { return e.fullscreen() } } }), e._v(" "), e.youtube_id || e.yt ? n("img", { staticClass: "icon_header_bar mute", attrs: { src: e.playerMuteIcon }, on: { click: function(t) { return e.unMute() } } }) : e._e(), e._v(" "), e.youtube_id || e.yt ? n("img", { staticClass: "icon_header_bar unmute hide", attrs: { src: e.playerUnMuteIcon }, on: { click: function(t) { return e.mute() } } }) : e._e(), e._v(" "), e.yt ? e._e() : n("img", { staticClass: "switch_camera", attrs: { src: e.switchCameraIcon }, on: { click: function(t) { return e.switchCamera() } } }), e._v(" "), e.yt ? e._e() : n("span", { staticClass: "camera_id" }), e._v(" Â \n                ")])]), e._v(" "), n("div", { staticClass: "video_dialog hide" }, [n("p", [e._v("Choose video:")]), e._v(" "), n("span", { staticClass: "pointer option", on: { click: function(t) { return e.openVideo(!0, "prueba.mp4") } } }, [e._v("Breeze Woodson emotions")]), e._v(" "), n("span", { staticClass: "pointer option", on: { click: function(t) { return e.openVideo(!0, "prueba.mp4") } } }, [e._v("NBA")]), e._v(" "), n("span", { staticClass: "pointer option", on: { click: function(t) { return e.openVideo(!0, "prueba.mp4") } } }, [e._v("prueba")]), e._v(" "), n("span", { staticClass: "pointer option", on: { click: function(t) { return e.openVideo(!0, "prueba.mp4") } } }, [e._v("MorphCast girl emotions")])]), e._v(" "), n("div", { staticClass: "youtube_dialog hide" }, [n("a", { attrs: { href: "https://www.youtube.com", target: "_blank" } }, [e._v("YouTube")]), e._v(" url: Â  "), n("input", { attrs: { id: "youtube_url", value: "https://www.youtube.com/watch?v=ph3_W6HEiQE" } }), e._v(" Â \n                "), n("span", { staticClass: "pointer", on: { click: function(t) { return e.pasteUrlVideoYoutube() } } }, [e._v("ðŸ“‹")]), e._v(" Â \n                "), n("span", { staticClass: "pointer", on: { click: function(t) { return e.openVideoYoutube() } } }, [e._v("âž¤")])]), e._v(" "), n("div", { staticClass: "share_dialog hide" }, [n("Share")], 1), e._v(" "), n("div", { staticClass: "camera_switch_dialog hide" }, [n("p", [e._v("Choose your camera:")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_0 hide", on: { click: function(t) { return e.changeStreamVideo(0) } } }, [e._v("Camera 1")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_1 hide", on: { click: function(t) { return e.changeStreamVideo(1) } } }, [e._v("Camera 2")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_2 hide", on: { click: function(t) { return e.changeStreamVideo(2) } } }, [e._v("Camera 3")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_3 hide", on: { click: function(t) { return e.changeStreamVideo(3) } } }, [e._v("Camera 4")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_4 hide", on: { click: function(t) { return e.changeStreamVideo(4) } } }, [e._v("Camera 5")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_5 hide", on: { click: function(t) { return e.changeStreamVideo(5) } } }, [e._v("Camera 6")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_6 hide", on: { click: function(t) { return e.changeStreamVideo(6) } } }, [e._v("Camera 7")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_7 hide", on: { click: function(t) { return e.changeStreamVideo(7) } } }, [e._v("Camera 8")]), e._v(" "), n("span", { staticClass: "pointer option switch_camera_8 hide", on: { click: function(t) { return e.changeStreamVideo(8) } } }, [e._v("Camera 9")])]), e._v(" "), n("input", { staticClass: "hide", attrs: { id: "openFile", type: "file", accept: "video/*" } }), e._v(" "), n("div", { staticClass: "camera" }, [n("CameraContainer", { attrs: { sv: e.sv, emotions: e.emotions, fSize: e.fSize, yt: e.yt, yt_id: e.yt_id, mood: e.mood, youtube_id: e.youtube_id, tracking: e.tracking, emotionBalancer: e.emotionBalancer, wish: e.wish, words: e.words, showFps: e.showFps }, on: { "video-switch-click": e.switchVideo } })], 1), e._v(" "), n("FeaturesBar", { staticClass: "bar", attrs: { features: e.features, na: e.na, emotions: e.emotions, black: e.black, wish: e.wish, mood: e.mood, tracking: e.tracking, yt: e.yt, emotionBalancer: e.emotionBalancer, words: e.words }, on: { mood_click: e.toggleMood, wish_click: e.toggleWish, words_click: e.toggleWords, tracking_click: e.toggleTracking } })], 1), e._v(" "), n("RightBar", { staticClass: "right", attrs: { features: e.features, black: e.black, emotionBalancer: e.emotionBalancer } }), e._v(" "), e._m(1), e._v(" "), e._m(2)], 1)])
        },
        s = [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("a", { attrs: { href: "https://www.morphcast.com", target: "_blank" } }, [t("img", { staticClass: "icon icon_2", attrs: { src: n(41) } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "bufferingOverlay hide" }, [t("div", { staticClass: "lds-ring" }, [t("div"), this._v(" "), t("div"), this._v(" "), t("div"), this._v(" "), t("div")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "textOverlay hide" }, [t("div", { staticClass: "lds-ring textOver" })])
        }];
    r._withStripped = !0;
    JSON.parse(JSON.stringify({ title: "Experience MorphCast's emotional AI!", description: "Try it on your mobile or desktop! MorphCast AI can analyse emotion, attention level, wish, arousal and valence, affect, demographics and many other features. And it's 100% GDPR compliant." }));
    var o = function() {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", { staticClass: "outer" }, [a("div", { ref: "wrapper", staticClass: "wrapper" }, [a("video", { ref: "cam_video", staticClass: "videoPlayer", class: { hide: e.yt, youtube: e.youtube_id }, attrs: { playsinline: "", crossorigin: "Anonymous", preload: "auto" } }), e._v(" "), e.yt ? a("div", { staticClass: "YTPlayer" }, [a("video", { ref: "vid_player", attrs: { playsinline: "", preload: "auto", controls: "controls", disablePictureInPicture: "", controlsList: "nodownload nofullscreen", muted: "", loop: "", crossorigin: "Anonymous", src: e.yt_id, id: "yt_player" }, domProps: { muted: !0 }, on: { play: e.play, pause: e.pause, click: e.toggleVideo } })]) : e._e(), e._v(" "), a("div", { class: { hide: !e.youtube_id }, attrs: { id: "youtube_player" } }), e._v(" "), a("span", { class: { hide: !e.yt }, attrs: { id: "video_time" } }, [e._v(e._s(e.video_ct))]), e._v(" "), a("span", { attrs: { id: "fps", title: "predictions per second" } }, [e._v(e._s(e.fps.toFixed(1)) + " pps")]), e._v(" "), e.yt ? e._e() : a("img", { staticClass: "icon switch_camera", attrs: { src: n(42) }, on: { click: e.switchCamera } }), e._v(" "), e.yt ? e._e() : a("span", { staticClass: "icon camera_id" }), e._v(" "), e.yt && !e.video_playing ? a("img", { staticClass: "play_icon", attrs: { src: n(177) } }) : e._e(), e._v(" "), e.mood ? a("MoodGrid", { staticClass: "mood_grid", attrs: { "current-time": e.currentTime } }) : e._e(), e._v(" "), e.wish ? a("WishGrid", { staticClass: "wish_grid", attrs: { "current-time": e.currentTime } }) : e._e(), e._v(" "), e.words || e.mood ? a("WordsGrid", { staticClass: "words_grid", attrs: { "current-time": e.currentTime } }) : e._e(), e._v(" "), e.tracking ? a("TrackingGrid", { staticClass: "tracking_grid", attrs: { emotions: e.emotions, "current-time": e.currentTime, emotionBalancer: e.emotionBalancer } }) : e._e(), e._v(" "), a("div", { staticClass: "trackingFace hide" })], 1)])
    };

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    o._withStripped = !0;
    var l = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
        var t, n, a;
        return t = e, a = [{ key: "loadAiSDK", value: function() { return null == e.p && (e.p = u("https://ai-sdk.morphcast.com/stage/ai-sdk.js").then(function() { return CY })), e.p } }], (n = null) && d(t.prototype, n), a && d(t, a), e
    }();

    function u(e) {
        return new Promise(function(t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.readyState ? n.onreadystatechange = function() { "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t()) } : n.onload = function() { t() }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
        })
    }
    var c = function() {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;
        return a("div", { ref: "wrapper", staticClass: "wrapper" }, [a("picture", [e.isMobile() ? e._e() : a("source", { attrs: { media: "(min-width:1200px)", srcset: n(178) } }), e._v(" "), e.isMobile() ? e._e() : a("img", { ref: "grid", staticClass: "grid desktop", attrs: { src: n(179) }, on: { load: e.setDim } }), e._v(" "), e.isMobile() ? a("img", { ref: "gridM", staticClass: "grid mobile", attrs: { src: n(180) }, on: { load: e.setDim } }) : e._e()]), e._v(" "), a("div", { ref: "pin_wrap", staticClass: "pin_wrap" }, [a("div", { ref: "pin", staticClass: "pin" })])])
    };

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    c._withStripped = !0;
    var h = function() {
            function e() {
                var t = this;
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e);
                var a = new Image;
                a.onload = function() { return t._init(a) }, a.src = n(181)
            }
            var t, a, i;
            return t = e, (a = [{ key: "_init", value: function(e) { this._canvas = document.createElement("canvas"), this._canvas.width = e.width, this._canvas.height = e.height, this._context = this._canvas.getContext("2d"), this._context.drawImage(e, 0, 0, e.width, e.height), this._ready = !0 } }, {
                key: "getPixelColor",
                value: function(e, t) {
                    if (!this._ready) return "rgba(0,0,0,0)";
                    100 === e && e--, 100 === t && t--;
                    var n = e * this._canvas.width / 100,
                        a = t * this._canvas.height / 100;
                    a = this._canvas.height - a;
                    var i = this._context.getImageData(n, a, 1, 1).data;
                    return "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] / 255 + ")"
                }
            }]) && m(t.prototype, a), i && m(t, i), e
        }(),
        _ = { data: function() { return {} }, methods: { isMobile: function() { return window.innerWidth <= 1e3 }, isDesktop: function() { return window.innerWidth > 1e3 } } };

    function f() { return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(navigator.userAgent.substr(0, 4))) }
    var p = {
            props: ["currentTime"],
            mixins: [_],
            created: function() {
                var e = this;
                this._colorMap = new h, this.crtDisableTimeout = setTimeout(function() { return e.hidePin() }, 1500);
                var t = function(t) { clearTimeout(e.crtDisableTimeout), e.showPin(), e.setEmotion(t.detail.output), e.crtDisableTimeout = setTimeout(function() { return e.hidePin() }, 3e3) },
                    n = function() { e.setDim() };
                window.addEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", t), window.addEventListener("resize", n), this.unreg = function() { window.removeEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", t), window.removeEventListener("resize", n) }
            },
            destroyed: function() { this.unreg(), clearTimeout(this.crtDisableTimeout) },
            mounted: function() { this.start = this.currentTime },
            components: {},
            data: function() { return {} },
            methods: {
                isMobile: function() { return f() },
                setDim: function() {
                    var e = this,
                        t = this.isDesktop() ? this.$refs.grid : this.$refs.gridM;
                    t && 0 !== t.clientWidth ? (this.$refs.pin_wrap.style.width = t.clientWidth + "px", this.$refs.pin_wrap.style.height = t.clientHeight + "px") : setTimeout(function() { e.setDim() }, 10)
                },
                setEmotion: function(e) {
                    var t = e.arousal,
                        n = e.valence,
                        a = this.calcCoorinate({ valence: n, arousal: t }),
                        i = a.x,
                        r = a.y;
                    i = Math.max(i, 5.15), r = Math.max(r, 6), this.setPinPosition(i, r), this.setPinColor(i, r)
                },
                calcCoorinate: function(e) {
                    var t = e.valence,
                        n = e.arousal,
                        a = function(e) { return (e + 1) / 2 };
                    return { x: 100 * (101 + 598 * a(t)) / 800, y: 100 * (45 + 598 * a(n)) / 686 }
                },
                setPinPosition: function(e, t) { this.$refs.pin.style.left = "".concat(e - 5.15, "%"), this.$refs.pin.style.bottom = "".concat(t - 6, "%") },
                setPinColor: function(e, t) {
                    var n = this._colorMap.getPixelColor(e, t);
                    this.$refs.pin.style["background-color"] = n, this.$refs.pin.style.color = n
                },
                showPin: function() { this.$refs.pin.style.opacity = .7 },
                hidePin: function() { this.$refs.pin.style.opacity = 0 },
                getCurrentTime: function() { return this.currentTime - this.start }
            }
        },
        v = (n(182), n(1)),
        g = Object(v.a)(p, c, [], !1, null, "7f20ad90", null);
    g.options.__file = "app/ui/overlay/mood_grid.vue";
    var y = g.exports,
        M = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "wrapper", staticClass: "wrapper" }, [t("canvas", { ref: "chart", staticClass: "charts" })])
        };
    M._withStripped = !0;
    var b, L = n(40);

    function k(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function Y(e, t, n) { return t && w(e.prototype, t), n && w(e, n), e }

    function D(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var T = ["Anger", "Disgust", "Fear", "Happiness", "Sadness", "Surprise", "Rested"];
    T.ANGER = T[0], T.DISGUST = T[1], T.FEAR = T[2], T.HAPPINESS = T[3], T.SADNESS = T[4], T.SURPRISE = T[5], T.RESTED = T[6];
    var x = (D(b = {}, T.ANGER, "#cc002e"), D(b, T.DISGUST, "#36c341"), D(b, T.FEAR, "#9a59a0"), D(b, T.HAPPINESS, "#e1ef00"), D(b, T.SADNESS, "#83c0e4"), D(b, T.SURPRISE, "#FFC0CB"), D(b, T.RESTED, "#CCC"), b),
        S = 30,
        C = 2,
        H = function() {
            function e(t) {
                k(this, e), this._element = t;
                var n = T.slice(0, 6).map(function(e) { return { label: e, fill: !1, borderColor: x[e], borderWidth: 2, data: [], pointRadius: 0 } }).concat([{ label: "Face not detected", fill: !0, backgroundColor: "rgba(170,170,170,0.6)", borderColor: "rgba(170,170,170,0.6)", data: [], lineTension: 0, pointRadius: 0 }]),
                    a = t.getContext("2d"),
                    i = { type: "line", data: { datasets: n }, options: { responsive: !1, animation: { duration: 0 }, scales: { xAxes: [{ type: "linear", display: !1, scaleLabel: { display: !1, labelString: "time (sec)" }, ticks: { min: 0, suggestedMax: S + C, stepSize: C } }], yAxes: [{ display: !1, scaleLabel: { display: !1, labelString: "" }, ticks: { display: !1, min: 0, max: 1 } }] }, legend: { position: "none" } } };
                this._chart = new L(a, i), this._datasets = n, this._config = i, this._noDataTime = null, this._lastUpdateTime = null
            }
            return Y(e, [{ key: "reset", value: function() { this._datasets.forEach(function(e) { e.data = [] }), this._chart.update() } }, {
                key: "update",
                value: function(e, t) {
                    var n = this;
                    [t.Angry, t.Disgust, t.Fear, t.Happy, t.Sad, t.Surprise].forEach(function(t, a) { n._datasets[a].data.push({ y: t, x: e }) }), null !== this._noDataTime && (this._datasets[this._datasets.length - 1].data.push({ x: e, y: 1 }), this._datasets[this._datasets.length - 1].data.push({ x: e, y: void 0 }), this._noDataTime = null), this._updateMinMax(e), this._chart.update(), this._lastUpdateTime = e
                }
            }, {
                key: "updateNoData",
                value: function(e) {
                    var t = this;
                    this._lastUpdateTime && (this._datasets[this._datasets.length - 1].data.push({ x: this._lastUpdateTime, y: 1 }), this._lastUpdateTime = null), this._datasets.forEach(function(n, a) {
                        var i = void 0;
                        a === t._datasets.length - 1 && (i = 1), n.data.push({ y: i, x: e })
                    }), this._updateMinMax(e), this._chart.update(), this._noDataTime = e
                }
            }, {
                key: "_updateMinMax",
                value: function(e) {
                    var t = this._config.options.scales.xAxes[0].ticks.max || S;
                    e >= t && (this._config.options.scales.xAxes[0].ticks.min = t, this._config.options.scales.xAxes[0].ticks.max = t + S + C, this._datasets.forEach(function(e) { return e.data = [] }))
                }
            }, { key: "visible", set: function(e) { this._element.style.display = e ? "block" : "none" } }]), e
        }(),
        A = function() {
            function e(t) {
                k(this, e), this._element = t;
                var n = [{ label: "Wish", fill: !1, borderColor: "#ffffff", lineTension: .4, data: [], pointRadius: 0, borderWidth: 5, borderCapStyle: "round" }, { label: "Face not detected", fill: !0, backgroundColor: "rgba(170,170,170,0.6)", borderColor: "rgba(170,170,170,0.6)", data: [], lineTension: 0, pointRadius: 0 }],
                    a = t.getContext("2d"),
                    i = { type: "line", data: { datasets: n }, options: { responsive: !1, animation: { duration: 0 }, scales: { xAxes: [{ type: "linear", display: !1, scaleLabel: { display: !1, labelString: "time (sec)" }, ticks: { min: 0, suggestedMax: S + C, stepSize: C } }], yAxes: [{ display: !1, scaleLabel: { display: !1, labelString: "" }, ticks: { display: !1, min: 0, max: 1 } }] }, legend: { position: "none" } } };
                this._chart = new L(a, i), this._datasets = n, this._config = i, this._noDataTime = null, this._lastUpdateTime = null
            }
            return Y(e, [{ key: "reset", value: function() { this._datasets.forEach(function(e) { e.data = [] }), this._chart.update() } }, { key: "update", value: function(e, t) { this._datasets[0].data.push({ y: t, x: e }), null !== this._noDataTime && (this._datasets[1].data.push({ x: e, y: 1 }), this._datasets[1].data.push({ x: e, y: void 0 }), this._noDataTime = null), this._updateMinMax(e), this._chart.update(), this._lastUpdateTime = e } }, {
                key: "updateNoData",
                value: function(e) {
                    this._lastUpdateTime && (this._datasets[1].data.push({ x: this._lastUpdateTime, y: 1 }), this._lastUpdateTime = null), this._datasets.forEach(function(t, n) {
                        var a = void 0;
                        1 === n && (a = 1), t.data.push({ y: a, x: e })
                    }), this._updateMinMax(e), this._chart.update(), this._noDataTime = e
                }
            }, {
                key: "_updateMinMax",
                value: function(e) {
                    var t = this._config.options.scales.xAxes[0].ticks.max || S;
                    e >= t && (this._config.options.scales.xAxes[0].ticks.min = t, this._config.options.scales.xAxes[0].ticks.max = t + S + C)
                }
            }, { key: "visible", set: function(e) { this._element.style.display = e ? "block" : "none" } }]), e
        }(),
        O = {
            props: ["currentTime", "emotions", "emotionBalancer"],
            created: function() { this.unreg = function(e) { return e } },
            mounted: function() {
                var e, t = this;
                this.start = this.currentTime, this.chart = (e = this.$refs.chart, new H(e)), this.chart.visible = !0, this.chart.reset(), this.lastCrt = -1, this.resetTimeout(), this._emo = null;
                var n = function(e) { t.lastCrt !== t.getCurrentTime() && (t.lastCrt = t.getCurrentTime(), t.resetTimeout(), t._emo = Object.assign({}, e.detail.output.emotion), t._emo.Angry = t._emo.Angry * (t.emotionBalancer ? 1 : t._angrySmooth), t.emotions[0] || delete t._emo.Angry, t.emotions[1] || delete t._emo.Disgust, t.emotions[2] || delete t._emo.Fear, t.emotions[3] || delete t._emo.Happy, t.emotions[4] || delete t._emo.Sad, t.emotions[5] || delete t._emo.Surprise, t.emotions[6] || delete t._emo.Neutral) };
                window.addEventListener("CY_FACE_POSE_RESULT", function(e) {
                    var n = e.detail.output.pose.pitch + .1;
                    t._angrySmooth = n < 0 ? 1 : 1 - Math.min(n / .2, 1)
                });
                var a = setInterval(function() { null != t._emo && t.chart.update(t.getCurrentTime(), t._emo) }, 100);
                window.addEventListener("CY_FACE_EMOTION_RESULT", n), this.unreg = function() { window.removeEventListener("CY_FACE_EMOTION_RESULT", n), clearInterval(a) }
            },
            destroyed: function() { this.unreg() },
            components: {},
            data: function() { return {} },
            methods: {
                updateNoData: function() {
                    var e = this;
                    this.chart.updateNoData(this.getCurrentTime()), delete this._emo, this.noDataTimeOut = setTimeout(function() { return e.updateNoData() }, 500)
                },
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.noDataTimeOut), this.noDataTimeOut = setTimeout(function() { return e.updateNoData() }, 500)
                },
                getCurrentTime: function() { return this.currentTime - this.start }
            }
        },
        P = (n(185), Object(v.a)(O, M, [], !1, null, "40de8660", null));
    P.options.__file = "app/ui/overlay/tracking_grid.vue";
    var j = P.exports;

    function E(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function F(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function I(e, t, n) { return t && F(e.prototype, t), n && F(e, n), e }
    var W = function() {
            function e(t) { E(this, e), this._ytPlayer = t, this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"), this._stopped = !0, this._waitforpromise = Promise.resolve(), this._imageDataHelper = new z }
            return I(e, [{
                key: "getFrame",
                value: function(e) {
                    var t = this;
                    return this._waitforpromise.then(function() {
                        t._canvas.height = t._ytPlayer.videoHeight, t._canvas.width = t._ytPlayer.videoWidth, t._ctx.drawImage(t._ytPlayer, 0, 0, t._ytPlayer.videoWidth, t._ytPlayer.videoHeight);
                        var n = t._ctx.getImageData(0, 0, t._canvas.width, t._canvas.height);
                        if (void 0 !== e) {
                            var a = new R(e).resizedDimensions(n);
                            n = t._imageDataHelper.scaleImageData(n, a)
                        }
                        return n
                    })
                }
            }, { key: "waitfor", value: function(e) { this._waitforpromise = e } }, { key: "start", value: function() { return this._stopped = !1, Promise.resolve() } }, { key: "stop", value: function() { return this._stopped = !0, Promise.resolve() } }, { key: "stopped", get: function() { return this._stopped } }, { key: "width", get: function() { return this._ytPlayer.videoWidth } }, { key: "height", get: function() { return this._ytPlayer.videoHeight } }]), e
        }(),
        R = function() {
            function e(t) { E(this, e), this._maxSize = t }
            return I(e, [{
                key: "resizedDimensions",
                value: function(e) {
                    var t, n, a = e.width,
                        i = e.height;
                    return a >= i ? n = (t = Math.min(this._maxSize, a)) / a * i : t = (n = Math.min(this._maxSize, i)) / i * a, { width: t, height: n }
                }
            }]), e
        }(),
        z = function() {
            function e() { E(this, e), this._canvas = document.createElement("canvas"), this._context = this._canvas.getContext("2d") }
            return I(e, [{ key: "toImageData", value: function(e) { return this._draw(e), this._context.getImageData(0, 0, e.width, e.height) } }, { key: "toCanvas", value: function(e) { return this._draw(e), { canvas: this._canvas, context: this._context } } }, { key: "scaleImageData", value: function(e, t) { return this._canvas.height = e.height, this._canvas.width = e.width, this._context.putImageData(e, 0, 0), this._context.drawImage(this._canvas, 0, 0, t.width, t.height), this._context.getImageData(0, 0, t.width, t.height) } }, { key: "_draw", value: function(e) { this._canvas.height = e.height, this._canvas.width = e.width, this._context.drawImage(e.source, 0, 0, e.width, e.height) } }]), e
        }(),
        N = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "wrapper", staticClass: "wrapper" }, [t("canvas", { ref: "chart", staticClass: "charts" })])
        };
    N._withStripped = !0;
    var B = {
            props: ["currentTime"],
            created: function() { this.unreg = function(e) { return e } },
            mounted: function() {
                var e, t = this;
                this.start = this.currentTime, this.chart = (e = this.$refs.chart, new A(e)), this.chart.visible = !0, this.chart.reset(), this.lastCrt = -1, this.resetTimeout(), this._wish = null;
                var n = function(e) { t.lastCrt !== t.getCurrentTime() && (t.lastCrt = t.getCurrentTime(), t.resetTimeout(), t._wish = e.detail.output.wish) },
                    a = setInterval(function() { null != t._wish && t.chart.update(t.getCurrentTime(), t._wish) }, 100);
                window.addEventListener("CY_FACE_WISH_RESULT", n), this.unreg = function() { window.removeEventListener("CY_FACE_WISH_RESULT", n), clearInterval(a) }
            },
            destroyed: function() { this.unreg() },
            components: {},
            data: function() { return {} },
            methods: {
                updateNoData: function() {
                    var e = this;
                    this.chart.updateNoData(this.getCurrentTime()), delete this._wish, this.noDataTimeOut = setTimeout(function() { return e.updateNoData() }, 500)
                },
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.noDataTimeOut), this.noDataTimeOut = setTimeout(function() { return e.updateNoData() }, 500)
                },
                getCurrentTime: function() { return this.currentTime - this.start }
            }
        },
        $ = (n(186), Object(v.a)(B, N, [], !1, null, "7264c440", null));
    $.options.__file = "app/ui/overlay/wish_grid.vue";
    var V = $.exports,
        U = function() { var e = this.$createElement; return (this._self._c || e)("div", { ref: "wrapper", staticClass: "wrapper" }, [this._m(0)]) };

    function J(e, t) {
        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
            var n = [],
                a = !0,
                i = !1,
                r = void 0;
            try { for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); a = !0); } catch (e) { i = !0, r = e } finally { try { a || null == o.return || o.return() } finally { if (i) throw r } }
            return n
        }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") }()
    }
    U._withStripped = !0;
    var G = {
            props: ["currentTime"],
            created: function() { this.unreg = function(e) { return e } },
            mounted: function() {
                var e = this;
                this._animation = !0, this.start = this.currentTime, this._wrapper = document.querySelector(".face_tracker_out"), this._element = document.createElement("span"), this._element.classList.add("emotion"), this._element.classList.add("quadrant"), this._wrapper.appendChild(this._element), this._elements = [];
                for (var t = 0; t < 3; t++) this._elements[t] = document.createElement("span"), this._elements[t].classList.add("emotion"), this._elements[t].style.opacity = 1, this._elements[t].style.fontWeight = 700, this._elements[t].style.bottom = Math.round(15 * t + 30) + "%", this._wrapper.appendChild(this._elements[t]);
                var n = function(t) {
                    for (var n = Object.entries(t.detail.output.affects98).sort(function(e, t) { var n = J(e, 2)[1]; return J(t, 2)[1] - n }), a = 0; a < 3; a++) e._elements[a].innerHTML = n[a][0], e._elements[a].style.fontSize = Math.round(500 * (n[a][1] - .9)) + "px";
                    t.detail.output.quadrant != e._element.innerHTML && e._animation && (e._element.classList.toggle("fade"), e._animation = !1, setTimeout(function() { e._element.innerHTML = t.detail.output.quadrant, e._element.classList.toggle("fade"), e._animation = !0 }, 400))
                };
                window.addEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", n), this.unreg = function() { window.removeEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", n) }
            },
            destroyed: function() { this.unreg() },
            components: {},
            data: function() { return {} },
            methods: {}
        },
        q = (n(187), n(188), Object(v.a)(G, U, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { attrs: { id: "video_overlay" } }, [t("div", { staticClass: "face_tracker_out" })])
        }], !1, null, "3318d68a", null));
    q.options.__file = "app/ui/overlay/words_grid.vue";
    var K = q.exports;

    function Z(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Q = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
        var t, n, a;
        return t = e, a = [{
            key: "createVideo",
            value: function(e) {
                var t = document.createElement("script");
                t.src = "https://www.youtube.com/iframe_api";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n);
                var a = !1;

                function i() {
                    a = !0, e.loadP.then(function(e) {
                        (0, e.start)(), window.youtube_player.mute(), window.youtube_player.playVideo()
                    })
                }
                window.onYouTubePlayerAPIReady = function() { window.youtube_player = new window.YT.Player("youtube_player", { height: "100%", width: "100%", videoId: e.youtube_id, events: { onReady: i, onStateChange: o } }) };
                var r = !1,
                    s = !1;

                function o(t) { t.data == window.YT.PlayerState.PLAYING && (e.video_playing = !0, r || (e.loadP.then(function(e) { return (0, e.start)() }), r = !0)), t.data == window.YT.PlayerState.PAUSED && (e.video_playing = !1, r && (s ? s = !1 : e.loadP.then(function(e) { return (0, e.stop)() }), r = !1)) }
                window.addEventListener(window.CY.modules().FACE_DETECTOR.eventName, function(e) { a && void 0 !== e.detail.totalFacesChangedFrom && (e.detail.totalFaces > 0 ? window.youtube_player.playVideo() : (window.youtube_player.pauseVideo(), s = !0)) })
            }
        }], (n = null) && Z(t.prototype, n), a && Z(t, a), e
    }();
    /*!
     * canvas-size
     * v1.2.5
     * https://github.com/jhildenbiddle/canvas-size
     * (c) 2015-2021 John Hildenbiddle <http://hildenbiddle.com>
     * MIT license
     */
    function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, a)
        }
        return n
    }

    function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? X(Object(n), !0).forEach(function(t) { te(e, t, n[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })
        }
        return e
    }

    function te(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function ne(e, t) {
        if (null == e) return {};
        var n, a, i = function(e, t) {
            if (null == e) return {};
            var n, a, i = {},
                r = Object.keys(e);
            for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]) }
        return i
    }

    function ae(e, t) {
        return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var a, i, r = [],
                s = !0,
                o = !1;
            try { for (n = n.call(e); !(s = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); s = !0); } catch (e) { o = !0, i = e } finally { try { s || null == n.return || n.return() } finally { if (o) throw i } }
            return r
        }(e, t) || re(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
    }

    function ie(e) { return function(e) { if (Array.isArray(e)) return se(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || re(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function re(e, t) { if (e) { if ("string" == typeof e) return se(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? se(e, t) : void 0 } }

    function se(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a
    }

    function oe(e) {
        var t, n, a = e.sizes.shift(),
            i = Math.max(Math.ceil(a[0]), 1),
            r = Math.max(Math.ceil(a[1]), 1),
            s = [i - 1, r - 1, 1, 1],
            o = Date.now(),
            d = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
        d ? (t = new OffscreenCanvas(1, 1), n = new OffscreenCanvas(i, r)) : ((t = document.createElement("canvas")).width = 1, t.height = 1, (n = document.createElement("canvas")).width = i, n.height = r);
        var l = t.getContext("2d"),
            u = n.getContext("2d");
        u && (u.fillRect.apply(u, s), l.drawImage(n, i - 1, r - 1, 1, 1, 0, 0, 1, 1));
        var c = l && 0 !== l.getImageData(0, 0, 1, 1).data[3],
            m = Date.now() - o;
        return d ? (postMessage({ width: i, height: r, benchmark: m, isTestPass: c }), !c && e.sizes.length && oe(e)) : c ? e.onSuccess(i, r, m) : (e.onError(i, r, m), e.sizes.length && oe(e)), c
    }
    var de = [16384, 14188, 11402, 11180, 10836, 8192, 4096, 1],
        le = [8388607, 65535, 32767, 16384, 8192, 4096, 1],
        ue = [4194303, 65535, 32767, 16384, 8192, 4096, 1],
        ce = ["onError", "onSuccess"],
        me = { max: null, min: 1, sizes: [], step: 1024, usePromise: !1, useWorker: !1, onError: Function.prototype, onSuccess: Function.prototype },
        he = {};

    function _e(e) {
        var t = e.width === e.height,
            n = 1 === e.height,
            a = 1 === e.width,
            i = [];
        if (e.width && e.height)
            for (var r = e.min || me.min, s = e.step || me.step, o = Math.max(e.width, e.height); o >= r;) {
                var d = t || n ? o : 1,
                    l = t || a ? o : 1;
                i.push([d, l]), o -= s
            } else e.sizes.forEach(function(e) {
                var r = t || n ? e : 1,
                    s = t || a ? e : 1;
                i.push([r, s])
            });
        return i
    }

    function fe(e) {
        var t = window && "HTMLCanvasElement" in window,
            n = window && "OffscreenCanvas" in window,
            a = Date.now(),
            i = e.onError,
            r = e.onSuccess,
            s = ne(e, ce),
            o = null;
        if (!t) return !1;
        if (e.useWorker && n) {
            var d = "\n            var canvasTest = ".concat(oe.toString(), ";\n            onmessage = function(e) {\n                canvasTest(e.data);\n            };\n        "),
                l = new Blob([d], { type: "application/javascript" }),
                u = URL.createObjectURL(l);
            o = new Worker(u), URL.revokeObjectURL(u), o.onmessage = function(e) {
                var t = e.data,
                    n = t.width,
                    i = t.height,
                    r = t.benchmark;
                t.isTestPass ? (he[a].onSuccess(n, i, r), delete he[a]) : he[a].onError(n, i, r)
            }
        }
        return e.usePromise ? new Promise(function(t, n) {
            var d = ee(ee({}, e), {}, {
                onError: function(t, a, r) {
                    var s;
                    if (0 === e.sizes.length) s = !0;
                    else {
                        var o = ae(e.sizes.slice(-1), 1),
                            d = ae(o[0], 2),
                            l = d[0],
                            u = d[1];
                        s = t === l && a === u
                    }
                    i(t, a, r), s && n({ width: t, height: a, benchmark: r })
                },
                onSuccess: function(e, n, a) { r(e, n, a), t({ width: e, height: n, benchmark: a }) }
            });
            if (o) {
                var l = d.onError,
                    u = d.onSuccess;
                he[a] = { onError: l, onSuccess: u }, o.postMessage(s)
            } else oe(d)
        }) : o ? (he[a] = { onError: i, onSuccess: r }, void o.postMessage(s)) : oe(e)
    }
    var pe = {
            maxArea: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = _e({ width: e.max, height: e.max, min: e.min, step: e.step, sizes: ie(de) }),
                    n = ee(ee(ee({}, me), e), {}, { sizes: t });
                return fe(n)
            },
            maxHeight: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = _e({ width: 1, height: e.max, min: e.min, step: e.step, sizes: ie(le) }),
                    n = ee(ee(ee({}, me), e), {}, { sizes: t });
                return fe(n)
            },
            maxWidth: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = _e({ width: e.max, height: 1, min: e.min, step: e.step, sizes: ie(ue) }),
                    n = ee(ee(ee({}, me), e), {}, { sizes: t });
                return fe(n)
            },
            test: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = ee(ee({}, me), e);
                return t.sizes = ie(t.sizes), t.width && t.height && (t.sizes = [
                    [t.width, t.height]
                ]), fe(t)
            }
        },
        ve = n(175),
        ge = n.n(ve);

    function ye(e, t, n, a, i, r, s) {
        try {
            var o = e[r](s),
                d = o.value
        } catch (e) { return void n(e) }
        o.done ? t(d) : Promise.resolve(d).then(a, i)
    }
    var Me, be, Le = {
            props: ["wish", "words", "mood", "tracking", "yt", "yt_id", "youtube_id", "fSize", "emotions", "sv", "emotionBalancer", "showFps"],
            components: { MoodGrid: y, TrackingGrid: j, WishGrid: V, WordsGrid: K },
            mounted: (Me = regeneratorRuntime.mark(function e() {
                var t, n, a, i, r, s = this;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = function(e) { console.error("Error: ", e) }, i = function(e) { t.stream = e, t.$refs.cam_video.srcObject = e }, a = function(e) { window.deviceVideoActive = 0, t.deviceInfos = e, t.deviceVideo = e.filter(function(e) { return "videoinput" === e.kind }), window.deviceVideo = t.deviceVideo, !f() && t.deviceVideo.length > 1 && t.$parent.openDialogSwitchCamera() }, n = function() { return navigator.mediaDevices.enumerateDevices() }, window.addEventListener("CY_IOS_FLAGS_ENABLED", function() { document.querySelector(".textOverlay .lds-ring").innerHTML = "This demo doesn't work on your device <br/>due to a bug in Safari 15.  You can fix it<br/>obtaining advantages also in other<br/>sites until Apple fixes the bug.<br/>Go to Settings. Click on Safari. <br/>Scroll down to Advanced. Scroll to <br/>Experimental Features and Turn off:<br/>GPU Process: Media<br/>GPU Process: Video Capture<br/>GPU Process: Canvas Rendering. <br/>Close the Safari App and open it again and <br/>you should be able to see your videos.", document.querySelector(".textOverlay").classList.remove("hide") }), e.prev = 5, e.next = 8, new Promise(function(e, t) {
                                var n = ge.a.getParser(window.navigator.userAgent);
                                n.satisfies({ mobile: { safari: ">=15.0" } }) && n.satisfies({ mobile: { safari: "<15.4" } }) && (pe.maxHeight({ onSuccess: e }), t()), e()
                            });
                        case 8:
                            e.next = 15;
                            break;
                        case 10:
                            return e.prev = 10, e.t0 = e.catch(5), console.log("FLAGS_ENABLED"), window.dispatchEvent(new CustomEvent("CY_IOS_FLAGS_ENABLED", { bubbles: !1, cancelable: !1 })), e.abrupt("return");
                        case 15:
                            console.log("FLAGS_DISABLED"), this.loadP = l.loadAiSDK().then(function(e) {
                                if (s.yt) window.source = s.createCamera(s.$refs.vid_player), s.onUpdate(s.$refs.vid_player);
                                else {
                                    window.deviceVideoActive = window.deviceVideoActive == s.deviceVideo.length - 1 ? 0 : window.deviceVideoActive + 0, t.deviceVideo.length <= 1 ? document.querySelectorAll(".switch_camera").forEach(function(e) { return e.style.display = "none" }) : document.querySelectorAll(".camera_id").forEach(function(e) { return e.innerHTML = window.deviceVideoActive + 1 }), s.bufferingOverlay(!0);
                                    var n = s.deviceVideo[window.deviceVideoActive] ? s.deviceVideo[window.deviceVideoActive].groupId : null,
                                        a = e.getUserMediaCameraFactory().createCamera;
                                    window.source = a(n ? { constraints: { video: { groupId: { exact: n } } }, video: s.$refs.cam_video } : { video: s.$refs.cam_video }), window.source._cameraStream._video.addEventListener("loadstart", function() { s.bufferingOverlay(!1) }, !1)
                                }
                                window.addEventListener(e.modules().CAMERA.eventName, function(e) { s._sdk_w = e.detail.width, s._sdk_h = e.detail.height }), window.addEventListener("CY_LOG_TPS_NN", function(e) { s.fps = e.detail.avg });
                                var i = new URLSearchParams(window.location.hash.replace("#", "?")),
                                    r = i.get("tracking-face");
                                s.trackingFace = !(r && r.indexOf("false") >= 0), window.addEventListener(e.modules().FACE_DETECTOR.eventName, function(e) {
                                    if (s.showFps) {
                                        s._profilerStartTime = s._profilerStartTime || performance.now(), s._frameCounter = s._frameCounter || 0;
                                        var t = performance.now() - s._profilerStartTime;
                                        if (t >= 1e3) {
                                            var n = t / s._frameCounter;
                                            s.fps = 1e3 / n, s.showFps && console.log("FPS: " + s.fps.toFixed(1)), s._frameCounter = 0, s._profilerStartTime = performance.now()
                                        }
                                        s._frameCounter++
                                    }
                                    if (s.trackingFace && e.detail.rects.length > 0 && s._sdk_w && s._sdk_h) {
                                        var a = s.yt ? s.$refs.vid_player : s.$refs.cam_video,
                                            i = a.videoWidth / a.videoHeight,
                                            r = a.offsetWidth / a.offsetHeight,
                                            o = a.offsetWidth,
                                            d = a.offsetHeight;
                                        r > i ? o = Math.round(d * i) : d = Math.round(o / i);
                                        var l = (s.yt, a.offsetWidth / s._sdk_w),
                                            u = (s.yt, a.offsetHeight / s._sdk_h),
                                            c = l < u ? l : u,
                                            m = s.youtube_id ? 10 : 0,
                                            h = s.youtube_id ? 10 : 0,
                                            _ = s.yt ? 0 : -1 * a.clientHeight * .3,
                                            f = s.yt ? Math.round((a.offsetWidth - o) / 2) : m,
                                            p = s.yt ? Math.round((a.offsetHeight - d) / 2) : Math.round((a.offsetHeight - d) / 2) + h + _,
                                            v = s.yt ? "left" : "right";
                                        document.querySelector(".trackingFace").classList.remove("hide"), document.querySelector(".trackingFace").style.cssText = "top: " + (Math.round(e.detail.rects[0].y * c) + p) + "px; " + v + ": " + (Math.round(e.detail.rects[0].x * c) + f) + "px; height: " + Math.round(e.detail.rects[0].height * c) + "px; width: " + Math.round(e.detail.rects[0].width * c) + "px;"
                                    } else document.querySelector(".trackingFace").classList.add("hide")
                                }), s.youtube_id && Q.createVideo(t);
                                var o = { maxInputFrameSize: s.fSize, riseSmoothness: Math.exp(-2), fallSmoothness: Math.exp(-.05) };
                                location.href.indexOf("tracker=0") > 0 && (o.multiFace = !0);
                                var d = .4;
                                location.href.indexOf("power=0") > 0 && (d = 0), console.log("CY", "FACE_DETECTOR", o);
                                var l = e.loader(),
                                    u = i.get("ai-modules");
                                if (l.addModule(e.modules().FACE_DETECTOR.name, o), (!u || u.indexOf("po") >= 0) && l.addModule(e.modules().FACE_POSE.name, {}), (!u || u.indexOf("ag") >= 0) && l.addModule(e.modules().FACE_AGE.name, { windowSizeMs: 4e3, maxVarianceCutoff: Math.pow(7, 2), numericalStability: 1 }), (!u || u.indexOf("ge") >= 0) && l.addModule(e.modules().FACE_GENDER.name, {}), (!u || u.indexOf("em") >= 0) && l.addModule(e.modules().FACE_EMOTION.name, { smoothness: .5, enableBalancer: s.emotionBalancer }), (!u || u.indexOf("fe") >= 0) && l.addModule(e.modules().FACE_FEATURES.name, {}), !u || u.indexOf("av") >= 0) {
                                    var c = i.get("av") && !isNaN(parseFloat(i.get("av"))) ? parseFloat(i.get("av")) : .9;
                                    console.log("FACE_AROUSAL_VALENCE initValue", c), l.addModule(e.modules().FACE_AROUSAL_VALENCE.name, { smoothness: c })
                                }
                                return (!u || u.indexOf("at") >= 0) && l.addModule(e.modules().FACE_ATTENTION.name, {}), l.powerSave(d).source(window.source).maxInputFrameSize(Math.max(s.fSize, 320)).licenseKey("574c704f478529ef6dc6048b8dbace4d000744cda5cd").load()
                            }), this.sv && !this.youtube_id || this.start(), t = this, window.changeStreamVideo = function(e) {
                                if (t.deviceVideo.length <= 1) return !1;
                                t.stream && t.stream.getTracks().forEach(function(e) { e.stop() }), window.source && window.source.stream.getTracks().forEach(function(e) { e.stop() }), window.deviceVideoActive = null != e ? e : window.deviceVideoActive == t.deviceVideo.length - 1 ? 0 : window.deviceVideoActive + 1, document.querySelectorAll(".camera_id").forEach(function(e) { return e.innerHTML = window.deviceVideoActive + 1 });
                                var n = t.deviceVideo[window.deviceVideoActive].deviceId,
                                    a = { video: { deviceId: n ? { exact: n } : void 0 } };
                                return navigator.mediaDevices.getUserMedia(a).then(i).catch(r)
                            }, n().then(a), window.gotStreamVideo = function(e, n) { "" === t.$refs.vid_player.canPlayType(n) ? console.error('Can play type "' + n) : (t.$refs.vid_player.pause(), window.source.waitfor(new Promise(function(e) { t.$refs.vid_player.onloadeddata = e }).then(function() { t.video_playing && t.$refs.vid_player.play() })), t.$refs.vid_player.src = e) };
                        case 22:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [5, 10]
                ])
            }), be = function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, a) {
                    var i = Me.apply(e, t);

                    function r(e) { ye(i, n, a, r, s, "next", e) }

                    function s(e) { ye(i, n, a, r, s, "throw", e) }
                    r(void 0)
                })
            }, function() { return be.apply(this, arguments) }),
            data: function() { return { currentTime: 0, video_playing: !1, started: !1, video_ct: "00:00", fps: 0, deviceVideo: [] } },
            methods: {
                bufferingOverlay: function(e) { e ? document.querySelector(".bufferingOverlay").classList.remove("hide") : document.querySelector(".bufferingOverlay").classList.add("hide") },
                switchCamera: function() { window.changeStreamVideo() },
                onUpdate: function(e) {
                    var t = this;
                    e.ontimeupdate = function() {
                        var n = Math.round(e.currentTime),
                            a = Math.floor(n / 60);
                        a < 10 && (a = "0" + a), (n -= 60 * a) < 10 && (n = "0" + n), t.video_ct = a + ":" + n
                    }
                },
                createCamera: function(e) { return new W(e) },
                toggleVideo: function() { this.started || this.start(), this.video_playing ? this.$refs.vid_player.pause() : this.$refs.vid_player.play(), this.video_playing = !this.video_playing },
                start: function() {
                    var e = this;
                    this.started = !0, this.loadP.then(function(e) { return (0, e.start)() }), setInterval(function() {
                        (!e.yt && !e.youtube_id || e.video_playing) && (e.currentTime += .1)
                    }, 100)
                },
                play: function() { this.started || this.start(), this.video_playing = !0 },
                pause: function() { this.video_playing = !1 }
            }
        },
        ke = (n(189), Object(v.a)(Le, o, [], !1, null, "33bf0814", null));
    ke.options.__file = "app/ui/camera_container.vue";
    var we = ke.exports,
        Ye = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "bar", class: { black: e.black } }, [n("Cell", { staticClass: "cell mood", attrs: { black: e.black, active: e.mood, title: "mood" }, on: { mood_click: function(t) { return e.$emit("mood_click") } } }), e._v(" "), n("Cell", { staticClass: "cell track", attrs: { black: e.black, active: e.tracking, title: "tracking" }, on: { tracking_click: function(t) { return e.$emit("tracking_click") } } }), e._v(" "), n("Cell", { staticClass: "cell gender", attrs: { title: "likely gender" } }), e._v(" "), n("Cell", { staticClass: "cell age", attrs: { slot: "horizontal", na: e.na, black: e.black, title: "likely age" }, slot: "horizontal" }), e._v(" "), n("Cell", { staticClass: "cell emotions", attrs: { emotions: e.emotions, black: e.black, emotionBalancer: e.emotionBalancer, title: "emotions" } }), e._v(" "), n("Cell", { staticClass: "cell pose", attrs: { title: "pose", yt: e.yt } }), e._v(" "), n("Cell", { staticClass: "cell affects", attrs: { black: e.black, title: "affects" } }), e._v(" "), n("Cell", { staticClass: "cell attention", attrs: { black: e.black, title: "attention" } }), e._v(" "), n("Cell", { staticClass: "features", attrs: { black: e.black, features: e.features, title: "features" } })], 1)
        };
    Ye._withStripped = !0;
    var De = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "cell", class: { black: e.black } }, [n("div", { staticClass: "title" }, [n("span", { attrs: { alt: e.title } }, [e._v(e._s(e.getTitle(e.title)))])]), e._v(" "), n("div", { staticClass: "content" }, ["morphcast" == e.title ? n("div", { staticClass: "wrap" }, [e._m(0)]) : e._e(), e._v(" "), e.components["open camera"] || e.components.video ? n("SwitchCamera", { attrs: { yt: e.yt, emotions: e.emotions, black: e.black } }) : e._e(), e._v(" "), e.components.balancer ? n("Balancer", { attrs: { black: e.black, active: e.active } }) : e._e(), e._v(" "), e.components.emotions ? n("Emotions", { attrs: { emotions: e.emotions, black: e.black, emotionBalancer: e.emotionBalancer } }) : e._e(), e._v(" "), e.components.affects ? n("Affects", { attrs: { black: e.black } }) : e._e(), e._v(" "), e.components["likely gender"] ? n("Gender") : e._e(), e._v(" "), e.components["likely age"] && e.slots.vertical && !e.na ? n("VAge", { attrs: { na: e.na, black: e.black } }) : e._e(), e._v(" "), e.components["likely age"] && e.slots.horizontal && !e.na ? n("HAge", { attrs: { black: e.black } }) : e._e(), e._v(" "), e.components["likely age"] && e.na ? n("Age", { attrs: { black: e.black } }) : e._e(), e._v(" "), e.components.pose ? n("Pose", { attrs: { yt: e.yt } }) : e._e(), e._v(" "), e.components.features ? n("Features", { attrs: { features: e.features, black: e.black } }) : e._e(), e._v(" "), e.components.mood ? n("Mood", { attrs: { black: e.black, active: e.active }, on: { mood_click: function(t) { return e.$emit("mood_click") } } }) : e._e(), e._v(" "), e.components.wish ? n("Wish", { attrs: { black: e.black, active: e.active }, on: { wish_click: function(t) { return e.$emit("wish_click") } } }) : e._e(), e._v(" "), e.components.words ? n("Words", { attrs: { black: e.black, active: e.active }, on: { words_click: function(t) { return e.$emit("words_click") } } }) : e._e(), e._v(" "), e.components.tracking ? n("Tracking", { attrs: { black: e.black, active: e.active }, on: { tracking_click: function(t) { return e.$emit("tracking_click") } } }) : e._e(), e._v(" "), e.components.attention ? n("Attention", { attrs: { black: e.black } }) : e._e()], 1)])
        },
        Te = [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("a", { attrs: { href: "https://www.morphcast.com", target: "_blank" } }, [t("img", { staticClass: "logo", attrs: { src: n(41) } })])
        }];
    De._withStripped = !0;
    var xe = function() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;
        return n("div", { staticClass: "wrapper", class: { black: e.black } }, [n("div", { staticClass: "centered" }, [e.emotions[0] ? n("div", { staticClass: "emo angry" }, [n("span", [e._v("Angry")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.angry + "%" } })])]) : e._e(), e._v(" "), e.emotions[1] ? n("div", { staticClass: "emo disgust" }, [n("span", [e._v("Disgust")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.disgust + "%" } })])]) : e._e(), e._v(" "), e.emotions[2] ? n("div", { staticClass: "emo fear" }, [n("span", [e._v("Fear")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.fear + "%" } })])]) : e._e(), e._v(" "), e.emotions[3] ? n("div", { staticClass: "emo happy" }, [n("span", [e._v("Happy")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.happy + "%" } })])]) : e._e(), e._v(" "), e.emotions[4] ? n("div", { staticClass: "emo sad" }, [n("span", [e._v("Sad")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.sad + "%" } })])]) : e._e(), e._v(" "), e.emotions[5] ? n("div", { staticClass: "emo surprise" }, [n("span", [e._v("Surprise")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.surprise + "%" } })])]) : e._e(), e._v(" "), e.emotions[6] ? n("div", { staticClass: "emo neutral" }, [n("span", [e._v("Neutral")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "lvl", style: { height: e.level.neutral + "%" } })])]) : e._e()])])
    };
    xe._withStripped = !0;
    var Se = {
            props: ["black", "emotions", "emotionBalancer"],
            created: function() {
                var e = this;
                this._angrySmooth = 1, window.addEventListener("CY_FACE_EMOTION_RESULT", function(t) { e.resetTimeout(), e.level.angry = 100 * t.detail.output.emotion.Angry * (e.emotionBalancer ? 1 : e._angrySmooth), e.level.disgust = 100 * t.detail.output.emotion.Disgust, e.level.fear = 100 * t.detail.output.emotion.Fear, e.level.happy = 100 * t.detail.output.emotion.Happy, e.level.sad = 100 * t.detail.output.emotion.Sad, e.level.surprise = 100 * t.detail.output.emotion.Surprise, e.level.neutral = 100 * t.detail.output.emotion.Neutral }), window.addEventListener("CY_FACE_POSE_RESULT", function(t) {
                    var n = t.detail.output.pose.pitch + .1;
                    e._angrySmooth = n < 0 ? 1 : 1 - Math.min(n / .2, 1)
                })
            },
            mounted: function() {},
            components: {},
            data: function() { return { level: { angry: 0, disgust: 0, fear: 0, happy: 0, sad: 0, surprise: 0, neutral: 0 } } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.level.angry = 0, e.level.fear = 0, e.level.happy = 0, e.level.neutral = 0, e.level.sad = 0, e.level.surprise = 0, e.level.disgust = 0 }, 3e3)
                }
            }
        },
        Ce = (n(190), Object(v.a)(Se, xe, [], !1, null, "6ee7f2ac", null));
    Ce.options.__file = "app/ui/cell_comp/emotions.vue";
    var He = Ce.exports,
        Ae = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "wrap" }, ["male" === this.gender.toLowerCase() ? t("img", { staticClass: "image", attrs: { src: n(191) } }) : this._e(), this._v(" "), "female" === this.gender.toLowerCase() ? t("img", { staticClass: "image", attrs: { src: n(192) } }) : this._e()])
        };
    Ae._withStripped = !0;
    var Oe = {
            data: function() { return { multipliers: { Bald: 2, "Big Nose": .5, "Black Hair": 2, "Blond Hair": 2, "Brown Hair": 2, Chubby: .5, "Double Chin": .5, Earrings: 2, Eyeglasses: 2, "Gray Hair": 2, Hat: 2, Lipstick: 2, Necklace: 2, Necktie: 2, "No Beard": .5, "Straight Hair": 2, "Wavy Hair": 2 } } },
            methods: {
                mostConfident: function(e) {
                    var t = this;
                    return Object.entries(e).reduce(function(e, n) {
                        var a = n[0],
                            i = t.multipliers[a] || 1,
                            r = n[1] * i;
                        return e.val <= r && (e.label = a, e.val = r), e
                    }, { label: "", val: 0 })
                }
            }
        },
        Pe = {
            mixins: [Oe],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_GENDER_RESULT", function(t) { e.resetTimeout(), e.gender = t.detail.output.mostConfident || "undef" })
            },
            mounted: function() {},
            components: {},
            data: function() { return { gender: "undef" } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.gender = "undef" }, 3e3)
                }
            }
        },
        je = (n(193), Object(v.a)(Pe, Ae, [], !1, null, "34e39ff3", null));
    je.options.__file = "app/ui/cell_comp/gender.vue";
    var Ee = je.exports,
        Fe = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "cell", staticClass: "wrap" }, [t("div", { staticClass: "bar" }, [t("img", { attrs: { src: this.icon } }), this._v(" "), t("div", { ref: "lvl", staticClass: "level", style: { bottom: this.btmLvl, opacity: this.opacity } })])])
        };
    Fe._withStripped = !0;
    var Ie = {
            props: ["black"],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_AGE_RESULT", function(t) {
                    if (e.resetTimeout(), e.age = t.detail.output.numericAge, e.age) {
                        var n = 195 * Math.min(Math.max(e.age - 5, 0), 90) / 100 + 10;
                        e.btmLvl = n + "px", e.opacity = 1
                    }
                })
            },
            mounted: function() {},
            components: {},
            data: function() { return { btmLvl: "10px", opacity: 0, icon: this.black ? n(194) : n(195) } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.opacity = 0 }, 3e3)
                }
            }
        },
        We = (n(196), Object(v.a)(Ie, Fe, [], !1, null, "762af70a", null));
    We.options.__file = "app/ui/cell_comp/vage.vue";
    var Re = We.exports,
        ze = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "cell", staticClass: "wrap" }, [t("div", { staticClass: "bar" }, [t("img", { attrs: { src: this.icon } }), this._v(" "), t("div", { ref: "lvl", staticClass: "level", style: { left: this.leftLvl, opacity: this.opacity } })])])
        };
    ze._withStripped = !0;
    var Ne = {
            props: ["black"],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_AGE_RESULT", function(t) {
                    if (e.resetTimeout(), e.age = t.detail.output.numericAge, e.age) {
                        var n = 271 * Math.min(Math.max(e.age - 5, 0), 90) / 100 + 13;
                        e.leftLvl = n + "px", e.opacity = 1
                    }
                })
            },
            data: function() { return { leftLvl: "13px", opacity: 0, icon: this.black ? n(197) : n(198) } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.opacity = 0 }, 3e3)
                }
            }
        },
        Be = (n(199), Object(v.a)(Ne, ze, [], !1, null, "169a1049", null));
    Be.options.__file = "app/ui/cell_comp/hage.vue";
    var $e = Be.exports,
        Ve = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "main" }, [t("square-loader", { staticClass: "centered", attrs: { loading: this.loading, color: "#f08e37" } }), this._v(" "), t("div", { ref: "scene", staticClass: "scene" })], 1)
        };
    Ve._withStripped = !0;
    var Ue = function() {
        var e = this.$createElement,
            t = this._self._c || e;
        return t("div", { directives: [{ name: "show", rawName: "v-show", value: this.loading, expression: "loading" }], staticClass: "v-spinner" }, [t("div", { staticClass: "v-square", style: this.spinnerStyle })])
    };
    Ue._withStripped = !0;
    var Je = { name: "SquareLoader", props: { loading: { type: Boolean, default: !0 }, color: { type: String, default: "#5dc596" }, size: { type: String, default: "50px" } }, data() { return { spinnerStyle: { backgroundColor: this.color, height: this.size, width: this.size } } } },
        Ge = (n(200), Object(v.a)(Je, Ue, [], !1, null, null, null));
    Ge.options.__file = "node_modules/vue-spinner/src/SquareLoader.vue";
    var qe = Ge.exports;

    function Ke(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var Ze = function() {
            function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._rotation = [], this._mirrored = t }
            var t, n, a;
            return t = e, (n = [{
                key: "init",
                value: function(e, t) {
                    var n = this,
                        a = new THREE.Scene,
                        i = new THREE.PerspectiveCamera(75, e / t, .1, 1e3),
                        r = new THREE.WebGLRenderer({ alpha: !0 });
                    r.setSize(window.innerWidth, window.innerHeight);
                    var s = new THREE.LoadingManager,
                        o = new THREE.Texture;
                    new THREE.ImageLoader(s).load("https://demo.morphcast.com/externals/4c47ef2b-fc78-44b1-91ab-b0918aa7b3d4", function(e) { o.image = e, o.needsUpdate = !0 }), new THREE.OBJLoader(s).load("https://demo.morphcast.com/externals/30b03572-f2f5-45cf-b2d4-54909cc76830", function(e) { e.traverse(function(e) { e instanceof THREE.Mesh && (e.material.map = o) }), n.face = e, a.add(e) });
                    var d = new THREE.AmbientLight(12303291);
                    a.add(d);
                    var l = new THREE.DirectionalLight(14540253);
                    return l.position.set(0, 0, 1), a.add(l), i.position.z = 20, this.render(r, a, i), r.domElement.style.width = "100%", r.domElement.style.height = "100%", r.domElement
                }
            }, { key: "render", value: function(e, t, n) { var a = this;! function i() { requestAnimationFrame(i), null != a.rotation[0] && null != a.rotation[1] && null != a.rotation[2] && (a.face.rotation.x = a.rotation[0], a.face.rotation.y = -a.rotation[1], a.face.rotation.z = -a.rotation[2]), e.render(t, n) }() } }, { key: "setRotation", value: function(e, t, n) { this._mirrored && (t = -t, n = -n), this._rotation[0] = e, this._rotation[1] = t, this._rotation[2] = n } }, { key: "rotation", get: function() { return this._rotation } }]) && Ke(t.prototype, n), a && Ke(t, a), e
        }(),
        Qe = {
            props: ["yt"],
            created: function() {
                var e = this;
                this.loadPromise = ["https://demo.morphcast.com/externals/three.min.js", "https://demo.morphcast.com/externals/OBJLoader.js"].reduce(function(e, t) { return e.then(function() { return u(t) }) }, Promise.resolve()), this.poseView = new Ze(this.yt), window.addEventListener("CY_FACE_POSE_RESULT", function(t) { e.resetTimeout(), e.$refs.scene.style.visibility = "visible", e.poseView.setRotation(t.detail.output.pose.pitch, t.detail.output.pose.yaw, t.detail.output.pose.roll) })
            },
            mounted: function() {
                var e = this;
                this.loadPromise.then(function() { e.loading = !1, e.scene = e.poseView.init(e.$refs.scene.clientWidth, e.$refs.scene.clientHeight), e.$refs.scene.innerHTML = "", e.$refs.scene.appendChild(e.scene) })
            },
            components: { SquareLoader: qe },
            data: function() { return { loading: !0 } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.poseView.setRotation(0, 0, 0), e.$refs.scene.style.visibility = "hidden" }, 500)
                }
            }
        },
        Xe = (n(201), Object(v.a)(Qe, Ve, [], !1, null, "4eb4dc43", null));
    Xe.options.__file = "app/ui/cell_comp/pose.vue";
    var et = Xe.exports,
        tt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "wrap", class: { black: e.black } }, [null != e.feat[0] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[0]))]) : e._e(), e._v(" "), null != e.feat[1] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[1]))]) : e._e(), e._v(" "), null != e.feat[2] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[2]))]) : e._e(), e._v(" "), null != e.feat[3] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[3]))]) : e._e(), e._v(" "), null != e.feat[4] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[4]))]) : e._e(), e._v(" "), null != e.feat[5] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[5]))]) : e._e(), e._v(" "), null != e.feat[6] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[6]))]) : e._e(), e._v(" "), null != e.feat[7] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[7]))]) : e._e(), e._v(" "), null != e.feat[8] ? n("span", { staticClass: "feature" }, [n("span", { staticClass: "bullet" }, [e._v("â€¢")]), e._v(" " + e._s(e.feat[8]))]) : e._e()])
        };

    function nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    tt._withStripped = !0;
    var at = { "Arched Eyebrows": !1, Attractive: !1, "Bags Under Eyes": !1, Bald: !1, Bangs: !1, "Beard 5 O'Clock Shadow": !1, "Big Lips": !1, "Big Nose": !1, "Black Hair": !1, "Blond Hair": !1, "Brown Hair": !1, Chubby: !1, "Double Chin": !1, Earrings: !1, "Eyebrows Bushy": !1, Eyeglasses: !1, Goatee: !1, "Gray Hair": !1, Hat: !1, "Heavy Makeup": !1, "High Cheekbones": !1, Lipstick: !1, "Mouth Slightly Open": !1, Mustache: !1, "Narrow Eyes": !1, Necklace: !1, Necktie: !1, "No Beard": !1, "Oval Face": !1, "Pale Skin": !1, "Pointy Nose": !1, "Receding Hairline": !1, "Rosy Cheeks": !1, Sideburns: !1, "Straight Hair": !1, "Wavy Hair": !1, ARRAY: ["Arched Eyebrows", "Attractive", "Bags Under Eyes", "Bald", "Bangs", "Beard 5 O'Clock Shadow", "Big Lips", "Big Nose", "Black Hair", "Blond Hair", "Brown Hair", "Chubby", "Double Chin", "Earrings", "Eyebrows Bushy", "Eyeglasses", "Goatee", "Gray Hair", "Hat", "Heavy Makeup", "High Cheekbones", "Lipstick", "Mouth Slightly Open", "Mustache", "Narrow Eyes", "Necklace", "Necktie", "No Beard", "Oval Face", "Pale Skin", "Pointy Nose", "Receding Hairline", "Rosy Cheeks", "Sideburns", "Straight Hair", "Wavy Hair"] },
        it = function() {
            function e(t) { var n = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.enabledFeatures = {}, t.forEach(function(e, t) { 1 === e && (n.enabledFeatures[at.ARRAY[t]] = !0) }), this._stableFeatures = [], this._accFeatures = {}, this._lastGet = null }
            var t, n, a;
            return t = e, (n = [{
                key: "update",
                value: function(e) {
                    var t = this;
                    null == this._lastGet && (this._lastGet = Date.now()), Object.entries(e).filter(function(e) { return t.enabledFeatures[e[0]] }).filter(function(e) { return e[1] > .5 }).forEach(function(e) { t._accFeatures[e[0]] = (t._accFeatures[e[0]] || 0) + e[1] })
                }
            }, { key: "get", value: function() { var e = Date.now(); return e - this._lastGet < 1e3 ? this._stableFeatures : (this._lastGet = e, this._stableFeatures = Object.entries(this._accFeatures).sort(function(e, t) { return t[1] - e[1] }).slice(0, 9).map(function(e) { return e[0] }), this._accFeatures = {}, this._stableFeatures) } }, { key: "reset", value: function() { this._stableFeatures = [], this._accFeatures = {}, this._lastGet = null } }]) && nt(t.prototype, n), a && nt(t, a), e
        }(),
        rt = {
            props: ["black", "features"],
            mixins: [Oe, _],
            created: function() {
                var e = this;
                this._fSet = new it(this.features), window.addEventListener("CY_FACE_FEATURES_RESULT", function(t) { e.resetTimeout(), e._fSet.update(t.detail.output.features), e.feat = e._fSet.get() })
            },
            components: {},
            data: function() { return { feat: [] } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e._fSet.reset(), e.feat = e._fSet.get() }, 3e3)
                }
            }
        },
        st = (n(202), Object(v.a)(rt, tt, [], !1, null, "3af914ef", null));
    st.options.__file = "app/ui/cell_comp/features.vue";
    var ot = st.exports,
        dt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "wrapper", class: { black: e.black } }, [n("div", { staticClass: "centered" }, [n("div", { staticClass: "bar" }, [n("span", [e._v("Arousal")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "dot", style: { bottom: "calc(" + e.level.arousal + "% - 7px)" } })]), e._v(" "), e._m(0)]), e._v(" "), n("div", { staticClass: "bar" }, [n("span", [e._v("Valence")]), e._v(" "), n("div", { staticClass: "level" }, [n("div", { staticClass: "dot", style: { bottom: "calc(" + e.level.valence + "% - 7px)" } })]), e._v(" "), e._m(1)])])])
        };
    dt._withStripped = !0;
    var lt = {
            props: ["black"],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_AROUSAL_VALENCE_RESULT", function(t) {
                    e.resetTimeout();
                    var n = t.detail.output;
                    e.level.arousal = (n.arousal + 1) / 2 * 100, e.level.valence = (n.valence + 1) / 2 * 100
                })
            },
            mounted: function() {},
            components: {},
            data: function() { return { level: { arousal: 0, valence: 0 } } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.level.arousal = 0, e.level.valence = 0 }, 3e3)
                }
            }
        },
        ut = (n(203), Object(v.a)(lt, dt, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "label" }, [t("span", { staticClass: "top" }, [this._v("+1")]), this._v(" "), t("span", { staticClass: "mid" }, [this._v("0")]), this._v(" "), t("span", { staticClass: "bottom" }, [this._v("-1")])])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "label" }, [t("span", { staticClass: "top" }, [this._v("+1")]), this._v(" "), t("span", { staticClass: "mid" }, [this._v("0")]), this._v(" "), t("span", { staticClass: "bottom" }, [this._v("-1")])])
        }], !1, null, "41842fbc", null));
    ut.options.__file = "app/ui/cell_comp/affects.vue";
    var ct = ut.exports,
        mt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: function(t) { return e.$emit("mood_click") } } }, [e.active ? n("img", { attrs: { src: e.activeImg, alt: "mood" } }) : e._e(), e._v(" "), e.active ? e._e() : n("img", { attrs: { src: e.unactiveImg, alt: "mood" } })])
        };
    mt._withStripped = !0;
    var ht = { props: ["active", "black"], data: function() { return { activeImg: this.black ? n(204) : n(205), unactiveImg: this.black ? n(206) : n(207) } } },
        _t = (n(208), Object(v.a)(ht, mt, [], !1, null, "102fdba9", null));
    _t.options.__file = "app/ui/cell_comp/mood.vue";
    var ft = _t.exports,
        pt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: function(t) { return e.$emit("tracking_click") } } }, [e.active ? n("img", { attrs: { src: e.activeImg, alt: "tracking" } }) : e._e(), e._v(" "), e.active ? e._e() : n("img", { attrs: { src: e.unactiveImg, alt: "tracking" } })])
        };
    pt._withStripped = !0;
    var vt = { props: ["active", "black"], data: function() { return { activeImg: this.black ? n(209) : n(210), unactiveImg: this.black ? n(211) : n(212) } } },
        gt = (n(213), Object(v.a)(vt, pt, [], !1, null, "fcdefb2e", null));
    gt.options.__file = "app/ui/cell_comp/tracking.vue";
    var yt = gt.exports,
        Mt = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "wrap", class: { black: this.black } }, [t("div", { staticClass: "outer" }, [t("div", { staticClass: "inner" }, [t("div", { staticClass: "level", style: { height: this.attention + "%" } })])])])
        };
    Mt._withStripped = !0;
    var bt = {
            mixins: [],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_ATTENTION_RESULT", function(t) { e.attention = 100 * (1 - t.detail.output.attention) })
            },
            mounted: function() {},
            components: {},
            data: function() { return { attention: 100 } }
        },
        Lt = (n(214), Object(v.a)(bt, Mt, [], !1, null, "3dbcc35c", null));
    Lt.options.__file = "app/ui/cell_comp/attention.vue";
    var kt = Lt.exports,
        wt = function() { var e = this.$createElement; return (this._self._c || e)("div", { ref: "cell", staticClass: "wrap" }, [this._v("\n    " + this._s(this.age) + "\n")]) };
    wt._withStripped = !0;
    var Yt = {
            mixins: [],
            created: function() {
                var e = this;
                window.addEventListener("CY_FACE_AGE_RESULT", function(t) { e.resetTimeout(), e.age = t.detail.output.numericAge || "-" })
            },
            mounted: function() { this.$refs.cell.style.lineHeight = this.$refs.cell.clientHeight + "px" },
            components: {},
            data: function() { return { age: "" } },
            methods: {
                resetTimeout: function() {
                    var e = this;
                    clearTimeout(this.timeout), this.timeout = setTimeout(function() { e.age = "" }, 3e3)
                }
            }
        },
        Dt = (n(215), Object(v.a)(Yt, wt, [], !1, null, "776fb73d", null));
    Dt.options.__file = "app/ui/cell_comp/age.vue";
    var Tt = Dt.exports,
        xt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: function(t) { return e.$emit("tracking_click") } } }, [n("img", { staticClass: "icon", attrs: { src: e.activeImg }, on: { click: function(t) { return e.switchVideo() } } })])
        };
    xt._withStripped = !0;
    var St = {
            props: ["active", "black", "yt"],
            data: function() { return this.yt ? { activeImg: this.black ? n(170) : n(171), unactiveImg: this.black ? n(216) : n(217) } : { activeImg: this.black ? n(172) : n(173), unactiveImg: this.black ? n(218) : n(219) } },
            methods: {
                switchVideo: function() {
                    var e = "";
                    this.yt ? (e = location.href.replace("&sv=true", ""), e += "&sv=false") : (e = location.href.replace("&sv=false", ""), e += "&sv=true"), location.href = e
                }
            }
        },
        Ct = (n(220), Object(v.a)(St, xt, [], !1, null, "161ec352", null));
    Ct.options.__file = "app/ui/cell_comp/camera.vue";
    var Ht = Ct.exports,
        At = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: e.switchBalancer } }, [e.active ? n("img", { attrs: { src: e.activeImg, alt: "" } }) : e._e(), e._v(" "), e.active ? e._e() : n("img", { attrs: { src: e.unactiveImg, alt: "" } })])
        };
    At._withStripped = !0;
    var Ot = {
            props: ["active", "black"],
            data: function() { return { activeImg: this.black ? n(221) : n(222), unactiveImg: this.black ? n(223) : n(224) } },
            methods: {
                switchBalancer: function() {
                    var e = "";
                    this.active ? (e = location.href.replace("&emotionBalancer=true", ""), e += "&emotionBalancer=false") : (e = location.href.replace("&emotionBalancer=false", ""), e += "&emotionBalancer=true"), location.href = e
                }
            }
        },
        Pt = (n(225), Object(v.a)(Ot, At, [], !1, null, "55ff8948", null));
    Pt.options.__file = "app/ui/cell_comp/balancer.vue";
    var jt = Pt.exports,
        Et = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: function(t) { return e.$emit("wish_click") } } }, [e.active ? n("img", { attrs: { src: e.activeImg } }) : e._e(), e._v(" "), e.active ? e._e() : n("img", { attrs: { src: e.unactiveImg } })])
        };
    Et._withStripped = !0;
    var Ft = { props: ["active", "black"], data: function() { return { activeImg: this.black ? n(226) : n(227), unactiveImg: this.black ? n(228) : n(229) } } },
        It = (n(230), Object(v.a)(Ft, Et, [], !1, null, "2ebc0d4e", null));
    It.options.__file = "app/ui/cell_comp/wish.vue";
    var Wt = It.exports,
        Rt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { ref: "cell", staticClass: "wrap", on: { click: function(t) { return e.$emit("words_click") } } }, [e.active ? n("img", { attrs: { src: e.activeImg } }) : e._e(), e._v(" "), e.active ? e._e() : n("img", { attrs: { src: e.unactiveImg } })])
        };
    Rt._withStripped = !0;
    var zt = { props: ["active", "black"], data: function() { return { activeImg: this.black ? n(231) : n(232), unactiveImg: this.black ? n(233) : n(234) } } },
        Nt = (n(235), Object(v.a)(zt, Rt, [], !1, null, "62d64267", null));
    Nt.options.__file = "app/ui/cell_comp/words.vue";
    var Bt = { props: ["title", "active", "slot", "black", "emotions", "na", "features", "yt", "emotionBalancer"], components: { Emotions: He, Gender: Ee, VAge: Re, HAge: $e, Pose: et, Features: ot, Affects: ct, Mood: ft, Tracking: yt, Attention: kt, Age: Tt, SwitchCamera: Ht, Balancer: jt, Wish: Wt, Words: Nt.exports }, created: function() { console.log(this.title + " - " + this.active) }, mounted: function() { this.components[this.title] = !0, this.slot && (this.slots[this.slot] = !0) }, data: function() { return { components: { video: !1, "open camera": !1, emotions: !1, "likely gender": !1, "likely age": !1, pose: !1, features: !1, affects: !1, attention: !1, mood: !1, tracking: !1, balancer: !1, wish: !1, words: !1 }, slots: { vertical: !1, horizontal: !1 } } }, methods: { getTitle: function(e) { return (e = "tracking" == (e = "mood" == e ? "affect" : e) ? "emotion" : e).toUpperCase() } } },
        $t = (n(236), Object(v.a)(Bt, De, Te, !1, null, "1f679cc6", null));
    $t.options.__file = "app/ui/bar_cell.vue";
    var Vt = $t.exports,
        Ut = { mixins: [_], props: ["wish", "words", "mood", "tracking", "black", "emotions", "na", "features", "yt", "emotionBalancer"], created: function() {}, mounted: function() {}, components: { Cell: Vt }, data: function() { return { visible: !0 } } },
        Jt = (n(237), Object(v.a)(Ut, Ye, [], !1, null, "3cebf3a0", null));
    Jt.options.__file = "app/ui/features_bar.vue";
    var Gt = Jt.exports,
        qt = function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "wrap", class: { black: this.black } }, [t("div", { staticClass: "top" }, [t("a", { attrs: { target: "_blank", href: "https://www.morphcast.com/sdkgdpr/" } }, [t("img", { staticClass: "icon", attrs: { src: this.icon } })])]), this._v(" "), t("div", { staticClass: "bot" }, [t("Cell", { staticClass: "cell features", attrs: { features: this.features, black: this.black, title: "features" } }), this._v(" "), t("Cell", { staticClass: "cell attention", attrs: { black: this.black, title: "attention" } })], 1)])
        };
    qt._withStripped = !0;
    var Kt = { props: ["black", "features", "emotionBalancer"], components: { Cell: Vt }, created: function() {}, data: function() { return { icon: this.black ? n(238) : n(239) } }, methods: {} },
        Zt = (n(240), Object(v.a)(Kt, qt, [], !1, null, "8e51c61e", null));
    Zt.options.__file = "app/ui/right_bar.vue";
    var Qt = Zt.exports,
        Xt = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", { staticClass: "wrap", class: { black: e.black, nna: !e.na } }, [n("div", { staticClass: "bot" }, [n("Cell", { staticClass: "cell", attrs: { black: e.black, active: e.logo, title: "morphcast" } }), e._v(" "), n("Cell", { staticClass: "cell", attrs: { black: e.black, active: e.mood, title: "mood" }, on: { mood_click: function(t) { return e.$emit("mood_click") } } }), e._v(" "), n("Cell", { staticClass: "cell", attrs: { black: e.black, active: e.tracking, title: "tracking" }, on: { tracking_click: function(t) { return e.$emit("tracking_click") } } }), e._v(" "), n("Cell", { staticClass: "cell age", attrs: { slot: "vertical", na: e.na, black: e.black, title: "likely age" }, slot: "vertical" })], 1)])
        };
    Xt._withStripped = !0;
    var en = { props: ["wish", "words", "mood", "tracking", "black", "na", "yt", "switch_src"], components: { Cell: Vt }, created: function() {}, data: function() { return {} }, methods: {} },
        tn = (n(241), Object(v.a)(en, Xt, [], !1, null, "1359ce2c", null));
    tn.options.__file = "app/ui/left_bar.vue";
    var nn = tn.exports,
        an = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("br"), e._v(" "), e._m(6), e._v(" "), e._m(7), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), e._m(10), e._v(" "), n("div", { staticClass: "st-btn st-custom-button copy" }, [n("img", { attrs: { alt: "copy to clipboard button", src: e.copyIcon }, on: { click: e.copy } })])])
        };
    an._withStripped = !0;
    var rn = {
            props: [],
            created: function() {},
            mounted: function() {},
            destroyed: function() { this.unreg() },
            components: {},
            data: function() { return { copyIcon: n(242) } },
            methods: {
                copy: function() {
                    var e = document.createElement("input");
                    e.value = location.href, document.querySelector(".share_dialog").appendChild(e), e.focus(), e.select();
                    try { document.execCommand("copy") } catch (e) {!1 }
                    e.blur(), e.remove()
                }
            }
        },
        sn = (n(243), Object(v.a)(rn, an, [function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "facebook" } }, [t("img", { attrs: { alt: "facebook sharing button", src: "https://platform-cdn.sharethis.com/img/facebook.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "linkedin" } }, [t("img", { attrs: { alt: "linkedin sharing button", src: "https://platform-cdn.sharethis.com/img/linkedin.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "twitter" } }, [t("img", { attrs: { alt: "twitter sharing button", src: "https://platform-cdn.sharethis.com/img/twitter.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "reddit" } }, [t("img", { attrs: { alt: "reddit sharing button", src: "https://platform-cdn.sharethis.com/img/reddit.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "messenger" } }, [t("img", { attrs: { alt: "messenger sharing button", src: "https://platform-cdn.sharethis.com/img/messenger.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "whatsapp" } }, [t("img", { attrs: { alt: "whatsapp sharing button", src: "https://platform-cdn.sharethis.com/img/whatsapp.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "telegram" } }, [t("img", { attrs: { alt: "telegram sharing button", src: "https://platform-cdn.sharethis.com/img/telegram.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "line" } }, [t("img", { attrs: { alt: "line sharing button", src: "https://platform-cdn.sharethis.com/img/line.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "wechat" } }, [t("img", { attrs: { alt: "wechat sharing button", src: "https://platform-cdn.sharethis.com/img/wechat.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "gmail" } }, [t("img", { attrs: { alt: "gmail sharing button", src: "https://platform-cdn.sharethis.com/img/gmail.svg" } })])
        }, function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { staticClass: "st-btn st-custom-button", attrs: { "data-network": "email" } }, [t("img", { attrs: { alt: "email sharing button", src: "https://platform-cdn.sharethis.com/img/email.svg" } })])
        }], !1, null, "9530333e", null));
    sn.options.__file = "app/ui/overlay/share.vue";
    var on = {
            mixins: [{ data: function() { return { tracking: !1, mood: !1, yt: !1, wish: !1, words: !1 } }, methods: { toggleTracking: function() { this.tracking = !this.tracking, this.mood = !1, this.wish = !1, this.words = !1 }, toggleMood: function() { this.mood = !this.mood, this.tracking = !1, this.wish = !1, this.words = !1 }, toggleWish: function() { this.wish = !this.wish, this.mood = !1, this.tracking = !1, this.words = !1 }, toggleWords: function() { this.words = !this.words, this.mood = !1, this.tracking = !1, this.wish = !1 } } }, _],
            props: ["yt_id", "youtube_id", "sv", "sm", "st", "sw", "fSize", "switch_src", "black", "emotions", "na", "features", "emotionBalancer", "showFps"],
            created: function() {},
            mounted: function() { this.st && this.toggleTracking(), this.sm && this.toggleMood(), this.sw && this.toggleWords(), this.sv && (this.yt = !this.yt) },
            components: { FeaturesBar: Gt, CameraContainer: we, LeftBar: nn, RightBar: Qt, Share: sn.exports },
            data: function() { return { visible: !0, gdprIcon: this.black ? n(244) : n(245), cameraIcon: this.black ? n(170) : n(171), videoIcon: this.black ? n(172) : n(173), youtubeIcon: (this.black, n(174)), switchCameraIcon: this.black ? n(42) : n(246), playerMuteIcon: this.black ? n(247) : n(248), playerUnMuteIcon: this.black ? n(249) : n(250), shareIcon: this.black ? n(251) : n(252), openFileIcon: this.black ? n(253) : n(254), fullscreenIcon: this.black ? n(255) : n(256), buttonAiHtml5Sdk: n(257), started: !1, bc: !1 } },
            methods: {
                switchCamera: function() { f() ? window.changeStreamVideo() : this.openDialogSwitchCamera() },
                changeStreamVideo: function(e) { e != window.deviceVideoActive && window.changeStreamVideo(e), document.querySelector(".camera_switch_dialog").classList.add("hide") },
                openCamera: function(e) { var t = location.href; if ((this.yt || this.youtube_id) && (this.youtube_id && (t = t.replace("&youtube=" + this.youtube_id, "").replace("#youtube=" + this.youtube_id, "").replace("?youtube=" + this.youtube_id, "?")), -1 == (t = t.replace("&sv=true", "&sv=false").replace("?sv=true", "?sv=false")).indexOf("sv=false") && (t += "&sv=false"), e && (location.href = t)), !e) return t },
                openVideo: function(e, t) { var n = location.href; if (this.youtube_id && (n = n.replace("&youtube=" + this.youtube_id, "").replace("?youtube=" + this.youtube_id, "?")), -1 == (n = n.replace("&sv=false", "&sv=true").replace("?sv=false", "?sv=true")).indexOf("sv=true") && (n += "&sv=true"), void 0 !== t && "" != t ? (n = n.replace("?prueba.mp4&", "?").replace("&video=prueba.mp4", "").replace("&video=prueba.mp4", "").replace("&video=prueba.mp4", "").replace("&video=prueba.mp4", ""), n += "&video=" + t) : -1 == n.indexOf("video=") && (n += "&video=prueba.mp4"), e && (location.href = n), !e) return n },
                openVideoYoutube: function() {
                    var e = document.getElementById("youtube_url").value,
                        t = e.indexOf("v=") > 0 ? e.substring(e.indexOf("v=") + 2) : "";
                    if ("" != t) {
                        var n = this.openCamera(!1);
                        this.youtube_id && (n = n.replace("&youtube=" + this.youtube_id, "&youtube=" + t).replace("?youtube=" + this.youtube_id, "?youtube=" + t)), -1 == n.indexOf("youtube=") && (n += "&youtube=" + t), location.href = n
                    }
                },
                openDialogVideoYoutube: function() { this.openDialog("youtube_dialog") },
                openDialogVideo: function() { this.yt ? this.openDialog("video_dialog") : this.openVideo(!0) },
                openDialogShare: function() { this.openDialog("share_dialog") },
                openDialogSwitchCamera: function() {
                    if (!this.yt) {
                        for (var e = 0; e < window.deviceVideo.length; e++) document.querySelector(".switch_camera_" + e).classList.remove("hide"), document.querySelector(".switch_camera_" + e).classList.remove("selected");
                        document.querySelector(".switch_camera_" + window.deviceVideoActive).classList.add("selected"), this.openDialog("camera_switch_dialog")
                    }
                },
                openDialog: function(e) {
                    ["video_dialog", "youtube_dialog", "camera_switch_dialog", "share_dialog"].forEach(function(t, n) { t !== e && document.querySelector("." + t).classList.add("hide") }), document.querySelector("." + e).classList.toggle("hide")
                },
                share: function() { f() && navigator.canShare ? this.openNavigatorShare() : this.openDialogShare() },
                openNavigatorShare: function() { navigator.share({ url: location.href }) },
                pasteUrlVideoYoutube: function() { navigator.clipboard.readText().then(function(e) { return document.getElementById("youtube_url").value = e }) },
                openLocalFile: function() {
                    if (this.yt) {
                        document.getElementById("openFile").click();
                        document.getElementById("openFile").addEventListener("change", function() {
                            var e = this.files[0],
                                t = e.type,
                                n = URL.createObjectURL(e);
                            window.gotStreamVideo(n, t)
                        }, { capture: !1, once: !0 })
                    } else this.openVideo(!0)
                },
                mute: function() { document.querySelector(".mute").classList.remove("hide"), document.querySelector(".unmute").classList.add("hide"), this.youtube_id && window.youtube_player ? window.youtube_player.mute() : this.yt && (document.querySelector("#yt_player").muted = !0) },
                unMute: function() { document.querySelector(".unmute").classList.remove("hide"), document.querySelector(".mute").classList.add("hide"), this.youtube_id && window.youtube_player ? youtube_player.unMute() : this.yt && (document.querySelector("#yt_player").muted = !1) },
                fullscreen: function() {
                    var e = document.querySelector(".camera");
                    e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.requestFullscreen && e.requestFullscreen()
                }
            }
        },
        dn = (n(258), n(259), Object(v.a)(on, r, s, !1, null, "98fae124", null));
    dn.options.__file = "app/ui/home.vue";
    var ln = dn.exports,
        un = n(3);

    function cn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }
    var mn = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
        var t, n, a;
        return t = e, a = [{
            key: "get",
            value: function() {
                var e, t, n = (e = location.search.replace("?", "").split("&"), t = {}, e.forEach(function(e) {
                    var n = e.indexOf("=");
                    if (n > 0) {
                        var a = e.substring(0, n),
                            i = e.substring(n + 1);
                        t[a] = "true" === i || "false" === i ? "true" === i : i
                    } else t[e] = null
                }), t);
                return { black: null == n.black || n.black, emotions: null != n.emotions ? JSON.parse("[" + Object(un.a)(n.emotions) + "]") : [1, 1, 1, 1, 1, 1, 1], features: null != n.features ? JSON.parse("[" + Object(un.a)(n.features) + "]") : [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], yt_id: decodeURIComponent(n.video), youtube_id: null != n.youtube && decodeURIComponent(n.youtube), sv: null == n.sv || n.sv, sm: n.sm, sw: n.sw, st: null == n.st || n.st, na: null != n.na && n.na, fSize: n.fSize || 320, switch_src: null == n.switch || n.switch, emotionBalancer: null != n.emotionBalancer && n.emotionBalancer, showFps: null != n.showFps && n.showFps }
            }
        }], (n = null) && cn(t.prototype, n), a && cn(t, a), e
    }();
    l.loadAiSDK(), new i.a({ render: function(e) { return e(ln, { props: mn.get() }) } }).$mount(document.querySelector("#vue_root"))
}]);