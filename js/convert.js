! function(n) {
    function e(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return n[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var t = {};
    e.m = n, e.c = t, e.d = function(n, t, i) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, e.p = "", e(e.s = 27)
}([function(n, e) {
    var t;
    t = function() {
        return this
    }();
    try {
        t = t || Function("return this")() || (0, eval)("this")
    } catch (n) {
        "object" == typeof window && (t = window)
    }
    n.exports = t
}, function(n, e) {
    function t() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(n) {
        if (d === setTimeout) return setTimeout(n, 0);
        if ((d === t || !d) && setTimeout) return d = setTimeout, setTimeout(n, 0);
        try {
            return d(n, 0)
        } catch (e) {
            try {
                return d.call(null, n, 0)
            } catch (e) {
                return d.call(this, n, 0)
            }
        }
    }

    function a(n) {
        if (f === clearTimeout) return clearTimeout(n);
        if ((f === i || !f) && clearTimeout) return f = clearTimeout, clearTimeout(n);
        try {
            return f(n)
        } catch (e) {
            try {
                return f.call(null, n)
            } catch (e) {
                return f.call(this, n)
            }
        }
    }

    function o() {
        g && h && (g = !1, h.length ? b = h.concat(b) : p = -1, b.length && s())
    }

    function s() {
        if (!g) {
            var n = r(o);
            g = !0;
            for (var e = b.length; e;) {
                for (h = b, b = []; ++p < e;) h && h[p].run();
                p = -1, e = b.length
            }
            h = null, g = !1, a(n)
        }
    }

    function l(n, e) {
        this.fun = n, this.array = e
    }

    function c() {}
    var d, f, u = n.exports = {};
    ! function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout : t
        } catch (n) {
            d = t
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (n) {
            f = i
        }
    }();
    var h, b = [],
        g = !1,
        p = -1;
    u.nextTick = function(n) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
        b.push(new l(n, e)), 1 !== b.length || g || r(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = c, u.addListener = c, u.once = c, u.off = c, u.removeListener = c, u.removeAllListeners = c, u.emit = c, u.prependListener = c, u.prependOnceListener = c, u.listeners = function(n) {
        return []
    }, u.binding = function(n) {
        throw new Error("process.binding is not supported")
    }, u.cwd = function() {
        return "/"
    }, u.chdir = function(n) {
        throw new Error("process.chdir is not supported")
    }, u.umask = function() {
        return 0
    }
}, function(n, e, t) {
    "use strict";

    function i(n) {
        if (!(this instanceof i)) return new i(n);
        c.call(this, n), d.call(this, n), n && !1 === n.readable && (this.readable = !1), n && !1 === n.writable && (this.writable = !1), this.allowHalfOpen = !0, n && !1 === n.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", r)
    }

    function r() {
        this.allowHalfOpen || this._writableState.ended || o.nextTick(a, this)
    }

    function a(n) {
        n.end()
    }
    var o = t(6),
        s = Object.keys || function(n) {
            var e = [];
            for (var t in n) e.push(t);
            return e
        };
    n.exports = i;
    var l = t(5);
    l.inherits = t(4);
    var c = t(17),
        d = t(11);
    l.inherits(i, c);
    for (var f = s(d.prototype), u = 0; u < f.length; u++) {
        var h = f[u];
        i.prototype[h] || (i.prototype[h] = d.prototype[h])
    }
    Object.defineProperty(i.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(i.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(n) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = n, this._writableState.destroyed = n)
        }
    }), i.prototype._destroy = function(n, e) {
        this.push(null), this.end(), o.nextTick(e, n)
    }
}, function(n, e, t) {
    "use strict";
    (function(n) {
        function i() {
            return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function r(n, e) {
            if (i() < e) throw new RangeError("Invalid typed array length");
            return a.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(e), n.__proto__ = a.prototype) : (null === n && (n = new a(e)), n.length = e), n
        }

        function a(n, e, t) {
            if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(n, e, t);
            if ("number" == typeof n) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, n)
            }
            return o(this, n, e, t)
        }

        function o(n, e, t, i) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? u(n, e, t, i) : "string" == typeof e ? d(n, e, t) : h(n, e)
        }

        function s(n) {
            if ("number" != typeof n) throw new TypeError('"size" argument must be a number');
            if (n < 0) throw new RangeError('"size" argument must not be negative')
        }

        function l(n, e, t, i) {
            return s(e), e <= 0 ? r(n, e) : void 0 !== t ? "string" == typeof i ? r(n, e).fill(t, i) : r(n, e).fill(t) : r(n, e)
        }

        function c(n, e) {
            if (s(e), n = r(n, e < 0 ? 0 : 0 | b(e)), !a.TYPED_ARRAY_SUPPORT)
                for (var t = 0; t < e; ++t) n[t] = 0;
            return n
        }

        function d(n, e, t) {
            if ("string" == typeof t && "" !== t || (t = "utf8"), !a.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
            var i = 0 | p(e, t);
            n = r(n, i);
            var o = n.write(e, t);
            return o !== i && (n = n.slice(0, o)), n
        }

        function f(n, e) {
            var t = e.length < 0 ? 0 : 0 | b(e.length);
            n = r(n, t);
            for (var i = 0; i < t; i += 1) n[i] = 255 & e[i];
            return n
        }

        function u(n, e, t, i) {
            if (e.byteLength, t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < t + (i || 0)) throw new RangeError("'length' is out of bounds");
            return e = void 0 === t && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, t) : new Uint8Array(e, t, i), a.TYPED_ARRAY_SUPPORT ? (n = e, n.__proto__ = a.prototype) : n = f(n, e), n
        }

        function h(n, e) {
            if (a.isBuffer(e)) {
                var t = 0 | b(e.length);
                return n = r(n, t), 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
            }
            if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || X(e.length) ? r(n, 0) : f(n, e);
                if ("Buffer" === e.type && J(e.data)) return f(n, e.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function b(n) {
            if (n >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
            return 0 | n
        }

        function g(n) {
            return +n != n && (n = 0), a.alloc(+n)
        }

        function p(n, e) {
            if (a.isBuffer(n)) return n.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(n) || n instanceof ArrayBuffer)) return n.byteLength;
            "string" != typeof n && (n = "" + n);
            var t = n.length;
            if (0 === t) return 0;
            for (var i = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return t;
                case "utf8":
                case "utf-8":
                case void 0:
                    return q(n).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * t;
                case "hex":
                    return t >>> 1;
                case "base64":
                    return Y(n).length;
                default:
                    if (i) return q(n).length;
                    e = ("" + e).toLowerCase(), i = !0
            }
        }

        function m(n, e, t) {
            var i = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === t || t > this.length) && (t = this.length), t <= 0) return "";
            if (t >>>= 0, e >>>= 0, t <= e) return "";
            for (n || (n = "utf8");;) switch (n) {
                case "hex":
                    return I(this, e, t);
                case "utf8":
                case "utf-8":
                    return A(this, e, t);
                case "ascii":
                    return T(this, e, t);
                case "latin1":
                case "binary":
                    return L(this, e, t);
                case "base64":
                    return R(this, e, t);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return B(this, e, t);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + n);
                    n = (n + "").toLowerCase(), i = !0
            }
        }

        function v(n, e, t) {
            var i = n[e];
            n[e] = n[t], n[t] = i
        }

        function _(n, e, t, i, r) {
            if (0 === n.length) return -1;
            if ("string" == typeof t ? (i = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = r ? 0 : n.length - 1), t < 0 && (t = n.length + t), t >= n.length) {
                if (r) return -1;
                t = n.length - 1
            } else if (t < 0) {
                if (!r) return -1;
                t = 0
            }
            if ("string" == typeof e && (e = a.from(e, i)), a.isBuffer(e)) return 0 === e.length ? -1 : w(n, e, t, i, r);
            if ("number" == typeof e) return e &= 255, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(n, e, t) : Uint8Array.prototype.lastIndexOf.call(n, e, t) : w(n, [e], t, i, r);
            throw new TypeError("val must be string, number or Buffer")
        }

        function w(n, e, t, i, r) {
            function a(n, e) {
                return 1 === o ? n[e] : n.readUInt16BE(e * o)
            }
            var o = 1,
                s = n.length,
                l = e.length;
            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                if (n.length < 2 || e.length < 2) return -1;
                o = 2, s /= 2, l /= 2, t /= 2
            }
            var c;
            if (r) {
                var d = -1;
                for (c = t; c < s; c++)
                    if (a(n, c) === a(e, -1 === d ? 0 : c - d)) {
                        if (-1 === d && (d = c), c - d + 1 === l) return d * o
                    } else - 1 !== d && (c -= c - d), d = -1
            } else
                for (t + l > s && (t = s - l), c = t; c >= 0; c--) {
                    for (var f = !0, u = 0; u < l; u++)
                        if (a(n, c + u) !== a(e, u)) {
                            f = !1;
                            break
                        } if (f) return c
                }
            return -1
        }

        function k(n, e, t, i) {
            t = Number(t) || 0;
            var r = n.length - t;
            i ? (i = Number(i)) > r && (i = r) : i = r;
            var a = e.length;
            if (a % 2 != 0) throw new TypeError("Invalid hex string");
            i > a / 2 && (i = a / 2);
            for (var o = 0; o < i; ++o) {
                var s = parseInt(e.substr(2 * o, 2), 16);
                if (isNaN(s)) return o;
                n[t + o] = s
            }
            return o
        }

        function y(n, e, t, i) {
            return Z(q(e, n.length - t), n, t, i)
        }

        function x(n, e, t, i) {
            return Z($(e), n, t, i)
        }

        function S(n, e, t, i) {
            return x(n, e, t, i)
        }

        function z(n, e, t, i) {
            return Z(Y(e), n, t, i)
        }

        function E(n, e, t, i) {
            return Z(F(e, n.length - t), n, t, i)
        }

        function R(n, e, t) {
            return 0 === e && t === n.length ? V.fromByteArray(n) : V.fromByteArray(n.slice(e, t))
        }

        function A(n, e, t) {
            t = Math.min(n.length, t);
            for (var i = [], r = e; r < t;) {
                var a = n[r],
                    o = null,
                    s = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
                if (r + s <= t) {
                    var l, c, d, f;
                    switch (s) {
                        case 1:
                            a < 128 && (o = a);
                            break;
                        case 2:
                            l = n[r + 1], 128 == (192 & l) && (f = (31 & a) << 6 | 63 & l) > 127 && (o = f);
                            break;
                        case 3:
                            l = n[r + 1], c = n[r + 2], 128 == (192 & l) && 128 == (192 & c) && (f = (15 & a) << 12 | (63 & l) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (o = f);
                            break;
                        case 4:
                            l = n[r + 1], c = n[r + 2], d = n[r + 3], 128 == (192 & l) && 128 == (192 & c) && 128 == (192 & d) && (f = (15 & a) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & d) > 65535 && f < 1114112 && (o = f)
                    }
                }
                null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), r += s
            }
            return C(i)
        }

        function C(n) {
            var e = n.length;
            if (e <= Q) return String.fromCharCode.apply(String, n);
            for (var t = "", i = 0; i < e;) t += String.fromCharCode.apply(String, n.slice(i, i += Q));
            return t
        }

        function T(n, e, t) {
            var i = "";
            t = Math.min(n.length, t);
            for (var r = e; r < t; ++r) i += String.fromCharCode(127 & n[r]);
            return i
        }

        function L(n, e, t) {
            var i = "";
            t = Math.min(n.length, t);
            for (var r = e; r < t; ++r) i += String.fromCharCode(n[r]);
            return i
        }

        function I(n, e, t) {
            var i = n.length;
            (!e || e < 0) && (e = 0), (!t || t < 0 || t > i) && (t = i);
            for (var r = "", a = e; a < t; ++a) r += W(n[a]);
            return r
        }

        function B(n, e, t) {
            for (var i = n.slice(e, t), r = "", a = 0; a < i.length; a += 2) r += String.fromCharCode(i[a] + 256 * i[a + 1]);
            return r
        }

        function M(n, e, t) {
            if (n % 1 != 0 || n < 0) throw new RangeError("offset is not uint");
            if (n + e > t) throw new RangeError("Trying to access beyond buffer length")
        }

        function D(n, e, t, i, r, o) {
            if (!a.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > r || e < o) throw new RangeError('"value" argument is out of bounds');
            if (t + i > n.length) throw new RangeError("Index out of range")
        }

        function O(n, e, t, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var r = 0, a = Math.min(n.length - t, 2); r < a; ++r) n[t + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
        }

        function P(n, e, t, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var r = 0, a = Math.min(n.length - t, 4); r < a; ++r) n[t + r] = e >>> 8 * (i ? r : 3 - r) & 255
        }

        function N(n, e, t, i, r, a) {
            if (t + i > n.length) throw new RangeError("Index out of range");
            if (t < 0) throw new RangeError("Index out of range")
        }

        function U(n, e, t, i, r) {
            return r || N(n, e, t, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(n, e, t, i, 23, 4), t + 4
        }

        function H(n, e, t, i, r) {
            return r || N(n, e, t, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(n, e, t, i, 52, 8), t + 8
        }

        function j(n) {
            if (n = G(n).replace(nn, ""), n.length < 2) return "";
            for (; n.length % 4 != 0;) n += "=";
            return n
        }

        function G(n) {
            return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
        }

        function W(n) {
            return n < 16 ? "0" + n.toString(16) : n.toString(16)
        }

        function q(n, e) {
            e = e || 1 / 0;
            for (var t, i = n.length, r = null, a = [], o = 0; o < i; ++o) {
                if ((t = n.charCodeAt(o)) > 55295 && t < 57344) {
                    if (!r) {
                        if (t > 56319) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === i) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        r = t;
                        continue
                    }
                    if (t < 56320) {
                        (e -= 3) > -1 && a.push(239, 191, 189), r = t;
                        continue
                    }
                    t = 65536 + (r - 55296 << 10 | t - 56320)
                } else r && (e -= 3) > -1 && a.push(239, 191, 189);
                if (r = null, t < 128) {
                    if ((e -= 1) < 0) break;
                    a.push(t)
                } else if (t < 2048) {
                    if ((e -= 2) < 0) break;
                    a.push(t >> 6 | 192, 63 & t | 128)
                } else if (t < 65536) {
                    if ((e -= 3) < 0) break;
                    a.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
                } else {
                    if (!(t < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    a.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
                }
            }
            return a
        }

        function $(n) {
            for (var e = [], t = 0; t < n.length; ++t) e.push(255 & n.charCodeAt(t));
            return e
        }

        function F(n, e) {
            for (var t, i, r, a = [], o = 0; o < n.length && !((e -= 2) < 0); ++o) t = n.charCodeAt(o), i = t >> 8, r = t % 256, a.push(r), a.push(i);
            return a
        }

        function Y(n) {
            return V.toByteArray(j(n))
        }

        function Z(n, e, t, i) {
            for (var r = 0; r < i && !(r + t >= e.length || r >= n.length); ++r) e[r + t] = n[r];
            return r
        }

        function X(n) {
            return n !== n
        }
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var V = t(37),
            K = t(38),
            J = t(16);
        e.Buffer = a, e.SlowBuffer = g, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : function() {
            try {
                var n = new Uint8Array(1);
                return n.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === n.foo() && "function" == typeof n.subarray && 0 === n.subarray(1, 1).byteLength
            } catch (n) {
                return !1
            }
        }(), e.kMaxLength = i(), a.poolSize = 8192, a._augment = function(n) {
            return n.__proto__ = a.prototype, n
        }, a.from = function(n, e, t) {
            return o(null, n, e, t)
        }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0
        })), a.alloc = function(n, e, t) {
            return l(null, n, e, t)
        }, a.allocUnsafe = function(n) {
            return c(null, n)
        }, a.allocUnsafeSlow = function(n) {
            return c(null, n)
        }, a.isBuffer = function(n) {
            return !(null == n || !n._isBuffer)
        }, a.compare = function(n, e) {
            if (!a.isBuffer(n) || !a.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (n === e) return 0;
            for (var t = n.length, i = e.length, r = 0, o = Math.min(t, i); r < o; ++r)
                if (n[r] !== e[r]) {
                    t = n[r], i = e[r];
                    break
                } return t < i ? -1 : i < t ? 1 : 0
        }, a.isEncoding = function(n) {
            switch (String(n).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, a.concat = function(n, e) {
            if (!J(n)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === n.length) return a.alloc(0);
            var t;
            if (void 0 === e)
                for (e = 0, t = 0; t < n.length; ++t) e += n[t].length;
            var i = a.allocUnsafe(e),
                r = 0;
            for (t = 0; t < n.length; ++t) {
                var o = n[t];
                if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(i, r), r += o.length
            }
            return i
        }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
            var n = this.length;
            if (n % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < n; e += 2) v(this, e, e + 1);
            return this
        }, a.prototype.swap32 = function() {
            var n = this.length;
            if (n % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < n; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
            return this
        }, a.prototype.swap64 = function() {
            var n = this.length;
            if (n % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < n; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
            return this
        }, a.prototype.toString = function() {
            var n = 0 | this.length;
            return 0 === n ? "" : 0 === arguments.length ? A(this, 0, n) : m.apply(this, arguments)
        }, a.prototype.equals = function(n) {
            if (!a.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
            return this === n || 0 === a.compare(this, n)
        }, a.prototype.inspect = function() {
            var n = "",
                t = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (n = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (n += " ... ")), "<Buffer " + n + ">"
        }, a.prototype.compare = function(n, e, t, i, r) {
            if (!a.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === t && (t = n ? n.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), e < 0 || t > n.length || i < 0 || r > this.length) throw new RangeError("out of range index");
            if (i >= r && e >= t) return 0;
            if (i >= r) return -1;
            if (e >= t) return 1;
            if (e >>>= 0, t >>>= 0, i >>>= 0, r >>>= 0, this === n) return 0;
            for (var o = r - i, s = t - e, l = Math.min(o, s), c = this.slice(i, r), d = n.slice(e, t), f = 0; f < l; ++f)
                if (c[f] !== d[f]) {
                    o = c[f], s = d[f];
                    break
                } return o < s ? -1 : s < o ? 1 : 0
        }, a.prototype.includes = function(n, e, t) {
            return -1 !== this.indexOf(n, e, t)
        }, a.prototype.indexOf = function(n, e, t) {
            return _(this, n, e, t, !0)
        }, a.prototype.lastIndexOf = function(n, e, t) {
            return _(this, n, e, t, !1)
        }, a.prototype.write = function(n, e, t, i) {
            if (void 0 === e) i = "utf8", t = this.length, e = 0;
            else if (void 0 === t && "string" == typeof e) i = e, t = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(t) ? (t |= 0, void 0 === i && (i = "utf8")) : (i = t, t = void 0)
            }
            var r = this.length - e;
            if ((void 0 === t || t > r) && (t = r), n.length > 0 && (t < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var a = !1;;) switch (i) {
                case "hex":
                    return k(this, n, e, t);
                case "utf8":
                case "utf-8":
                    return y(this, n, e, t);
                case "ascii":
                    return x(this, n, e, t);
                case "latin1":
                case "binary":
                    return S(this, n, e, t);
                case "base64":
                    return z(this, n, e, t);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, n, e, t);
                default:
                    if (a) throw new TypeError("Unknown encoding: " + i);
                    i = ("" + i).toLowerCase(), a = !0
            }
        }, a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var Q = 4096;
        a.prototype.slice = function(n, e) {
            var t = this.length;
            n = ~~n, e = void 0 === e ? t : ~~e, n < 0 ? (n += t) < 0 && (n = 0) : n > t && (n = t), e < 0 ? (e += t) < 0 && (e = 0) : e > t && (e = t), e < n && (e = n);
            var i;
            if (a.TYPED_ARRAY_SUPPORT) i = this.subarray(n, e), i.__proto__ = a.prototype;
            else {
                var r = e - n;
                i = new a(r, void 0);
                for (var o = 0; o < r; ++o) i[o] = this[o + n]
            }
            return i
        }, a.prototype.readUIntLE = function(n, e, t) {
            n |= 0, e |= 0, t || M(n, e, this.length);
            for (var i = this[n], r = 1, a = 0; ++a < e && (r *= 256);) i += this[n + a] * r;
            return i
        }, a.prototype.readUIntBE = function(n, e, t) {
            n |= 0, e |= 0, t || M(n, e, this.length);
            for (var i = this[n + --e], r = 1; e > 0 && (r *= 256);) i += this[n + --e] * r;
            return i
        }, a.prototype.readUInt8 = function(n, e) {
            return e || M(n, 1, this.length), this[n]
        }, a.prototype.readUInt16LE = function(n, e) {
            return e || M(n, 2, this.length), this[n] | this[n + 1] << 8
        }, a.prototype.readUInt16BE = function(n, e) {
            return e || M(n, 2, this.length), this[n] << 8 | this[n + 1]
        }, a.prototype.readUInt32LE = function(n, e) {
            return e || M(n, 4, this.length), (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + 16777216 * this[n + 3]
        }, a.prototype.readUInt32BE = function(n, e) {
            return e || M(n, 4, this.length), 16777216 * this[n] + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3])
        }, a.prototype.readIntLE = function(n, e, t) {
            n |= 0, e |= 0, t || M(n, e, this.length);
            for (var i = this[n], r = 1, a = 0; ++a < e && (r *= 256);) i += this[n + a] * r;
            return r *= 128, i >= r && (i -= Math.pow(2, 8 * e)), i
        }, a.prototype.readIntBE = function(n, e, t) {
            n |= 0, e |= 0, t || M(n, e, this.length);
            for (var i = e, r = 1, a = this[n + --i]; i > 0 && (r *= 256);) a += this[n + --i] * r;
            return r *= 128, a >= r && (a -= Math.pow(2, 8 * e)), a
        }, a.prototype.readInt8 = function(n, e) {
            return e || M(n, 1, this.length), 128 & this[n] ? -1 * (255 - this[n] + 1) : this[n]
        }, a.prototype.readInt16LE = function(n, e) {
            e || M(n, 2, this.length);
            var t = this[n] | this[n + 1] << 8;
            return 32768 & t ? 4294901760 | t : t
        }, a.prototype.readInt16BE = function(n, e) {
            e || M(n, 2, this.length);
            var t = this[n + 1] | this[n] << 8;
            return 32768 & t ? 4294901760 | t : t
        }, a.prototype.readInt32LE = function(n, e) {
            return e || M(n, 4, this.length), this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24
        }, a.prototype.readInt32BE = function(n, e) {
            return e || M(n, 4, this.length), this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]
        }, a.prototype.readFloatLE = function(n, e) {
            return e || M(n, 4, this.length), K.read(this, n, !0, 23, 4)
        }, a.prototype.readFloatBE = function(n, e) {
            return e || M(n, 4, this.length), K.read(this, n, !1, 23, 4)
        }, a.prototype.readDoubleLE = function(n, e) {
            return e || M(n, 8, this.length), K.read(this, n, !0, 52, 8)
        }, a.prototype.readDoubleBE = function(n, e) {
            return e || M(n, 8, this.length), K.read(this, n, !1, 52, 8)
        }, a.prototype.writeUIntLE = function(n, e, t, i) {
            if (n = +n, e |= 0, t |= 0, !i) {
                D(this, n, e, t, Math.pow(2, 8 * t) - 1, 0)
            }
            var r = 1,
                a = 0;
            for (this[e] = 255 & n; ++a < t && (r *= 256);) this[e + a] = n / r & 255;
            return e + t
        }, a.prototype.writeUIntBE = function(n, e, t, i) {
            if (n = +n, e |= 0, t |= 0, !i) {
                D(this, n, e, t, Math.pow(2, 8 * t) - 1, 0)
            }
            var r = t - 1,
                a = 1;
            for (this[e + r] = 255 & n; --r >= 0 && (a *= 256);) this[e + r] = n / a & 255;
            return e + t
        }, a.prototype.writeUInt8 = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), this[e] = 255 & n, e + 1
        }, a.prototype.writeUInt16LE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & n, this[e + 1] = n >>> 8) : O(this, n, e, !0), e + 2
        }, a.prototype.writeUInt16BE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = n >>> 8, this[e + 1] = 255 & n) : O(this, n, e, !1), e + 2
        }, a.prototype.writeUInt32LE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = n >>> 24, this[e + 2] = n >>> 16, this[e + 1] = n >>> 8, this[e] = 255 & n) : P(this, n, e, !0), e + 4
        }, a.prototype.writeUInt32BE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[e] = n >>> 24, this[e + 1] = n >>> 16, this[e + 2] = n >>> 8, this[e + 3] = 255 & n) : P(this, n, e, !1), e + 4
        }, a.prototype.writeIntLE = function(n, e, t, i) {
            if (n = +n, e |= 0, !i) {
                var r = Math.pow(2, 8 * t - 1);
                D(this, n, e, t, r - 1, -r)
            }
            var a = 0,
                o = 1,
                s = 0;
            for (this[e] = 255 & n; ++a < t && (o *= 256);) n < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1), this[e + a] = (n / o >> 0) - s & 255;
            return e + t
        }, a.prototype.writeIntBE = function(n, e, t, i) {
            if (n = +n, e |= 0, !i) {
                var r = Math.pow(2, 8 * t - 1);
                D(this, n, e, t, r - 1, -r)
            }
            var a = t - 1,
                o = 1,
                s = 0;
            for (this[e + a] = 255 & n; --a >= 0 && (o *= 256);) n < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1), this[e + a] = (n / o >> 0) - s & 255;
            return e + t
        }, a.prototype.writeInt8 = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (n = Math.floor(n)), n < 0 && (n = 255 + n + 1), this[e] = 255 & n, e + 1
        }, a.prototype.writeInt16LE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & n, this[e + 1] = n >>> 8) : O(this, n, e, !0), e + 2
        }, a.prototype.writeInt16BE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[e] = n >>> 8, this[e + 1] = 255 & n) : O(this, n, e, !1), e + 2
        }, a.prototype.writeInt32LE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & n, this[e + 1] = n >>> 8, this[e + 2] = n >>> 16, this[e + 3] = n >>> 24) : P(this, n, e, !0), e + 4
        }, a.prototype.writeInt32BE = function(n, e, t) {
            return n = +n, e |= 0, t || D(this, n, e, 4, 2147483647, -2147483648), n < 0 && (n = 4294967295 + n + 1), a.TYPED_ARRAY_SUPPORT ? (this[e] = n >>> 24, this[e + 1] = n >>> 16, this[e + 2] = n >>> 8, this[e + 3] = 255 & n) : P(this, n, e, !1), e + 4
        }, a.prototype.writeFloatLE = function(n, e, t) {
            return U(this, n, e, !0, t)
        }, a.prototype.writeFloatBE = function(n, e, t) {
            return U(this, n, e, !1, t)
        }, a.prototype.writeDoubleLE = function(n, e, t) {
            return H(this, n, e, !0, t)
        }, a.prototype.writeDoubleBE = function(n, e, t) {
            return H(this, n, e, !1, t)
        }, a.prototype.copy = function(n, e, t, i) {
            if (t || (t = 0), i || 0 === i || (i = this.length), e >= n.length && (e = n.length), e || (e = 0), i > 0 && i < t && (i = t), i === t) return 0;
            if (0 === n.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), n.length - e < i - t && (i = n.length - e + t);
            var r, o = i - t;
            if (this === n && t < e && e < i)
                for (r = o - 1; r >= 0; --r) n[r + e] = this[r + t];
            else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                for (r = 0; r < o; ++r) n[r + e] = this[r + t];
            else Uint8Array.prototype.set.call(n, this.subarray(t, t + o), e);
            return o
        }, a.prototype.fill = function(n, e, t, i) {
            if ("string" == typeof n) {
                if ("string" == typeof e ? (i = e, e = 0, t = this.length) : "string" == typeof t && (i = t, t = this.length), 1 === n.length) {
                    var r = n.charCodeAt(0);
                    r < 256 && (n = r)
                }
                if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                if ("string" == typeof i && !a.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
            } else "number" == typeof n && (n &= 255);
            if (e < 0 || this.length < e || this.length < t) throw new RangeError("Out of range index");
            if (t <= e) return this;
            e >>>= 0, t = void 0 === t ? this.length : t >>> 0, n || (n = 0);
            var o;
            if ("number" == typeof n)
                for (o = e; o < t; ++o) this[o] = n;
            else {
                var s = a.isBuffer(n) ? n : q(new a(n, i).toString()),
                    l = s.length;
                for (o = 0; o < t - e; ++o) this[o + e] = s[o % l]
            }
            return this
        };
        var nn = /[^+\/0-9A-Za-z-_]/g
    }).call(e, t(0))
}, function(n, e) {
    "function" == typeof Object.create ? n.exports = function(n, e) {
        e && (n.super_ = e, n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : n.exports = function(n, e) {
        if (e) {
            n.super_ = e;
            var t = function() {};
            t.prototype = e.prototype, n.prototype = new t, n.prototype.constructor = n
        }
    }
}, function(n, e, t) {
    (function(n) {
        function t(n) {
            return Array.isArray ? Array.isArray(n) : "[object Array]" === p(n)
        }

        function i(n) {
            return "boolean" == typeof n
        }

        function r(n) {
            return null === n
        }

        function a(n) {
            return null == n
        }

        function o(n) {
            return "number" == typeof n
        }

        function s(n) {
            return "string" == typeof n
        }

        function l(n) {
            return "symbol" == typeof n
        }

        function c(n) {
            return void 0 === n
        }

        function d(n) {
            return "[object RegExp]" === p(n)
        }

        function f(n) {
            return "object" == typeof n && null !== n
        }

        function u(n) {
            return "[object Date]" === p(n)
        }

        function h(n) {
            return "[object Error]" === p(n) || n instanceof Error
        }

        function b(n) {
            return "function" == typeof n
        }

        function g(n) {
            return null === n || "boolean" == typeof n || "number" == typeof n || "string" == typeof n || "symbol" == typeof n || void 0 === n
        }

        function p(n) {
            return Object.prototype.toString.call(n)
        }
        e.isArray = t, e.isBoolean = i, e.isNull = r, e.isNullOrUndefined = a, e.isNumber = o, e.isString = s, e.isSymbol = l, e.isUndefined = c, e.isRegExp = d, e.isObject = f, e.isDate = u, e.isError = h, e.isFunction = b, e.isPrimitive = g, e.isBuffer = n.isBuffer
    }).call(e, t(3).Buffer)
}, function(n, e, t) {
    "use strict";
    (function(e) {
        function t(n, t, i, r) {
            if ("function" != typeof n) throw new TypeError('"callback" argument must be a function');
            var a, o, s = arguments.length;
            switch (s) {
                case 0:
                case 1:
                    return e.nextTick(n);
                case 2:
                    return e.nextTick(function() {
                        n.call(null, t)
                    });
                case 3:
                    return e.nextTick(function() {
                        n.call(null, t, i)
                    });
                case 4:
                    return e.nextTick(function() {
                        n.call(null, t, i, r)
                    });
                default:
                    for (a = new Array(s - 1), o = 0; o < a.length;) a[o++] = arguments[o];
                    return e.nextTick(function() {
                        n.apply(null, a)
                    })
            }
        }
        void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? n.exports = {
            nextTick: t
        } : n.exports = e
    }).call(e, t(1))
}, function(n, e, t) {
    function i(n, e) {
        for (var t in n) e[t] = n[t]
    }

    function r(n, e, t) {
        return o(n, e, t)
    }
    var a = t(3),
        o = a.Buffer;
    o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? n.exports = a : (i(a, e), e.Buffer = r), i(o, r), r.from = function(n, e, t) {
        if ("number" == typeof n) throw new TypeError("Argument must not be a number");
        return o(n, e, t)
    }, r.alloc = function(n, e, t) {
        if ("number" != typeof n) throw new TypeError("Argument must be a number");
        var i = o(n);
        return void 0 !== e ? "string" == typeof t ? i.fill(e, t) : i.fill(e) : i.fill(0), i
    }, r.allocUnsafe = function(n) {
        if ("number" != typeof n) throw new TypeError("Argument must be a number");
        return o(n)
    }, r.allocUnsafeSlow = function(n) {
        if ("number" != typeof n) throw new TypeError("Argument must be a number");
        return a.SlowBuffer(n)
    }
}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }
    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    e.assign = function(n) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
            var t = e.shift();
            if (t) {
                if ("object" != typeof t) throw new TypeError(t + "must be non-object");
                for (var r in t) i(t, r) && (n[r] = t[r])
            }
        }
        return n
    }, e.shrinkBuf = function(n, e) {
        return n.length === e ? n : n.subarray ? n.subarray(0, e) : (n.length = e, n)
    };
    var a = {
            arraySet: function(n, e, t, i, r) {
                if (e.subarray && n.subarray) return void n.set(e.subarray(t, t + i), r);
                for (var a = 0; a < i; a++) n[r + a] = e[t + a]
            },
            flattenChunks: function(n) {
                var e, t, i, r, a, o;
                for (i = 0, e = 0, t = n.length; e < t; e++) i += n[e].length;
                for (o = new Uint8Array(i), r = 0, e = 0, t = n.length; e < t; e++) a = n[e], o.set(a, r), r += a.length;
                return o
            }
        },
        o = {
            arraySet: function(n, e, t, i, r) {
                for (var a = 0; a < i; a++) n[r + a] = e[t + a]
            },
            flattenChunks: function(n) {
                return [].concat.apply([], n)
            }
        };
    e.setTyped = function(n) {
        n ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, a)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, o))
    }, e.setTyped(r)
}, function(n, e, t) {
    "use strict";

    function i(n) {
        console && console.warn && console.warn(n)
    }

    function r() {
        r.init.call(this)
    }

    function a(n) {
        return void 0 === n._maxListeners ? r.defaultMaxListeners : n._maxListeners
    }

    function o(n, e, t, r) {
        var o, s, l;
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
        if (s = n._events, void 0 === s ? (s = n._events = Object.create(null), n._eventsCount = 0) : (void 0 !== s.newListener && (n.emit("newListener", e, t.listener ? t.listener : t), s = n._events), l = s[e]), void 0 === l) l = s[e] = t, ++n._eventsCount;
        else if ("function" == typeof l ? l = s[e] = r ? [t, l] : [l, t] : r ? l.unshift(t) : l.push(t), (o = a(n)) > 0 && l.length > o && !l.warned) {
            l.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            c.name = "MaxListenersExceededWarning", c.emitter = n, c.type = e, c.count = l.length, i(c)
        }
        return n
    }

    function s() {
        for (var n = [], e = 0; e < arguments.length; e++) n.push(arguments[e]);
        this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, p(this.listener, this.target, n))
    }

    function l(n, e, t) {
        var i = {
                fired: !1,
                wrapFn: void 0,
                target: n,
                type: e,
                listener: t
            },
            r = s.bind(i);
        return r.listener = t, i.wrapFn = r, r
    }

    function c(n, e, t) {
        var i = n._events;
        if (void 0 === i) return [];
        var r = i[e];
        return void 0 === r ? [] : "function" == typeof r ? t ? [r.listener || r] : [r] : t ? h(r) : f(r, r.length)
    }

    function d(n) {
        var e = this._events;
        if (void 0 !== e) {
            var t = e[n];
            if ("function" == typeof t) return 1;
            if (void 0 !== t) return t.length
        }
        return 0
    }

    function f(n, e) {
        for (var t = new Array(e), i = 0; i < e; ++i) t[i] = n[i];
        return t
    }

    function u(n, e) {
        for (; e + 1 < n.length; e++) n[e] = n[e + 1];
        n.pop()
    }

    function h(n) {
        for (var e = new Array(n.length), t = 0; t < e.length; ++t) e[t] = n[t].listener || n[t];
        return e
    }
    var b, g = "object" == typeof Reflect ? Reflect : null,
        p = g && "function" == typeof g.apply ? g.apply : function(n, e, t) {
            return Function.prototype.apply.call(n, e, t)
        };
    b = g && "function" == typeof g.ownKeys ? g.ownKeys : Object.getOwnPropertySymbols ? function(n) {
        return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))
    } : function(n) {
        return Object.getOwnPropertyNames(n)
    };
    var m = Number.isNaN || function(n) {
        return n !== n
    };
    n.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
    var v = 10;
    Object.defineProperty(r, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return v
        },
        set: function(n) {
            if ("number" != typeof n || n < 0 || m(n)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n + ".");
            v = n
        }
    }), r.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, r.prototype.setMaxListeners = function(n) {
        if ("number" != typeof n || n < 0 || m(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
        return this._maxListeners = n, this
    }, r.prototype.getMaxListeners = function() {
        return a(this)
    }, r.prototype.emit = function(n) {
        for (var e = [], t = 1; t < arguments.length; t++) e.push(arguments[t]);
        var i = "error" === n,
            r = this._events;
        if (void 0 !== r) i = i && void 0 === r.error;
        else if (!i) return !1;
        if (i) {
            var a;
            if (e.length > 0 && (a = e[0]), a instanceof Error) throw a;
            var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw o.context = a, o
        }
        var s = r[n];
        if (void 0 === s) return !1;
        if ("function" == typeof s) p(s, this, e);
        else
            for (var l = s.length, c = f(s, l), t = 0; t < l; ++t) p(c[t], this, e);
        return !0
    }, r.prototype.addListener = function(n, e) {
        return o(this, n, e, !1)
    }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(n, e) {
        return o(this, n, e, !0)
    }, r.prototype.once = function(n, e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        return this.on(n, l(this, n, e)), this
    }, r.prototype.prependOnceListener = function(n, e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        return this.prependListener(n, l(this, n, e)), this
    }, r.prototype.removeListener = function(n, e) {
        var t, i, r, a, o;
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        if (void 0 === (i = this._events)) return this;
        if (void 0 === (t = i[n])) return this;
        if (t === e || t.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[n], i.removeListener && this.emit("removeListener", n, t.listener || e));
        else if ("function" != typeof t) {
            for (r = -1, a = t.length - 1; a >= 0; a--)
                if (t[a] === e || t[a].listener === e) {
                    o = t[a].listener, r = a;
                    break
                } if (r < 0) return this;
            0 === r ? t.shift() : u(t, r), 1 === t.length && (i[n] = t[0]), void 0 !== i.removeListener && this.emit("removeListener", n, o || e)
        }
        return this
    }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(n) {
        var e, t, i;
        if (void 0 === (t = this._events)) return this;
        if (void 0 === t.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== t[n] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[n]), this;
        if (0 === arguments.length) {
            var r, a = Object.keys(t);
            for (i = 0; i < a.length; ++i) "removeListener" !== (r = a[i]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(e = t[n])) this.removeListener(n, e);
        else if (void 0 !== e)
            for (i = e.length - 1; i >= 0; i--) this.removeListener(n, e[i]);
        return this
    }, r.prototype.listeners = function(n) {
        return c(this, n, !0)
    }, r.prototype.rawListeners = function(n) {
        return c(this, n, !1)
    }, r.listenerCount = function(n, e) {
        return "function" == typeof n.listenerCount ? n.listenerCount(e) : d.call(n, e)
    }, r.prototype.listenerCount = d, r.prototype.eventNames = function() {
        return this._eventsCount > 0 ? b(this._events) : []
    }
}, function(n, e, t) {
    e = n.exports = t(17), e.Stream = e, e.Readable = e, e.Writable = t(11), e.Duplex = t(2), e.Transform = t(21), e.PassThrough = t(47)
}, function(n, e, t) {
    "use strict";
    (function(e, i, r) {
        function a(n) {
            var e = this;
            this.next = null, this.entry = null, this.finish = function() {
                R(e, n)
            }
        }

        function o(n) {
            return M.from(n)
        }

        function s(n) {
            return M.isBuffer(n) || n instanceof D
        }

        function l() {}

        function c(n, e) {
            C = C || t(2), n = n || {};
            var i = e instanceof C;
            this.objectMode = !!n.objectMode, i && (this.objectMode = this.objectMode || !!n.writableObjectMode);
            var r = n.highWaterMark,
                o = n.writableHighWaterMark,
                s = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : i && (o || 0 === o) ? o : s, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var l = !1 === n.decodeStrings;
            this.decodeStrings = !l, this.defaultEncoding = n.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(n) {
                v(e, n)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
        }

        function d(n) {
            if (C = C || t(2), !(P.call(d, this) || this instanceof C)) return new d(n);
            this._writableState = new c(n, this), this.writable = !0, n && ("function" == typeof n.write && (this._write = n.write), "function" == typeof n.writev && (this._writev = n.writev), "function" == typeof n.destroy && (this._destroy = n.destroy), "function" == typeof n.final && (this._final = n.final)), B.call(this)
        }

        function f(n, e) {
            var t = new Error("write after end");
            n.emit("error", t), A.nextTick(e, t)
        }

        function u(n, e, t, i) {
            var r = !0,
                a = !1;
            return null === t ? a = new TypeError("May not write null values to stream") : "string" == typeof t || void 0 === t || e.objectMode || (a = new TypeError("Invalid non-string/buffer chunk")), a && (n.emit("error", a), A.nextTick(i, a), r = !1), r
        }

        function h(n, e, t) {
            return n.objectMode || !1 === n.decodeStrings || "string" != typeof e || (e = M.from(e, t)), e
        }

        function b(n, e, t, i, r, a) {
            if (!t) {
                var o = h(e, i, r);
                i !== o && (t = !0, r = "buffer", i = o)
            }
            var s = e.objectMode ? 1 : i.length;
            e.length += s;
            var l = e.length < e.highWaterMark;
            if (l || (e.needDrain = !0), e.writing || e.corked) {
                var c = e.lastBufferedRequest;
                e.lastBufferedRequest = {
                    chunk: i,
                    encoding: r,
                    isBuf: t,
                    callback: a,
                    next: null
                }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
            } else g(n, e, !1, s, i, r, a);
            return l
        }

        function g(n, e, t, i, r, a, o) {
            e.writelen = i, e.writecb = o, e.writing = !0, e.sync = !0, t ? n._writev(r, e.onwrite) : n._write(r, a, e.onwrite), e.sync = !1
        }

        function p(n, e, t, i, r) {
            --e.pendingcb, t ? (A.nextTick(r, i), A.nextTick(z, n, e), n._writableState.errorEmitted = !0, n.emit("error", i)) : (r(i), n._writableState.errorEmitted = !0, n.emit("error", i), z(n, e))
        }

        function m(n) {
            n.writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0
        }

        function v(n, e) {
            var t = n._writableState,
                i = t.sync,
                r = t.writecb;
            if (m(t), e) p(n, t, i, e, r);
            else {
                var a = y(t);
                a || t.corked || t.bufferProcessing || !t.bufferedRequest || k(n, t), i ? T(_, n, t, a, r) : _(n, t, a, r)
            }
        }

        function _(n, e, t, i) {
            t || w(n, e), e.pendingcb--, i(), z(n, e)
        }

        function w(n, e) {
            0 === e.length && e.needDrain && (e.needDrain = !1, n.emit("drain"))
        }

        function k(n, e) {
            e.bufferProcessing = !0;
            var t = e.bufferedRequest;
            if (n._writev && t && t.next) {
                var i = e.bufferedRequestCount,
                    r = new Array(i),
                    o = e.corkedRequestsFree;
                o.entry = t;
                for (var s = 0, l = !0; t;) r[s] = t, t.isBuf || (l = !1), t = t.next, s += 1;
                r.allBuffers = l, g(n, e, !0, e.length, r, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new a(e), e.bufferedRequestCount = 0
            } else {
                for (; t;) {
                    var c = t.chunk,
                        d = t.encoding,
                        f = t.callback;
                    if (g(n, e, !1, e.objectMode ? 1 : c.length, c, d, f), t = t.next, e.bufferedRequestCount--, e.writing) break
                }
                null === t && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = t, e.bufferProcessing = !1
        }

        function y(n) {
            return n.ending && 0 === n.length && null === n.bufferedRequest && !n.finished && !n.writing
        }

        function x(n, e) {
            n._final(function(t) {
                e.pendingcb--, t && n.emit("error", t), e.prefinished = !0, n.emit("prefinish"), z(n, e)
            })
        }

        function S(n, e) {
            e.prefinished || e.finalCalled || ("function" == typeof n._final ? (e.pendingcb++, e.finalCalled = !0, A.nextTick(x, n, e)) : (e.prefinished = !0, n.emit("prefinish")))
        }

        function z(n, e) {
            var t = y(e);
            return t && (S(n, e), 0 === e.pendingcb && (e.finished = !0, n.emit("finish"))), t
        }

        function E(n, e, t) {
            e.ending = !0, z(n, e), t && (e.finished ? A.nextTick(t) : n.once("finish", t)), e.ended = !0, n.writable = !1
        }

        function R(n, e, t) {
            var i = n.entry;
            for (n.entry = null; i;) {
                var r = i.callback;
                e.pendingcb--, r(t), i = i.next
            }
            e.corkedRequestsFree ? e.corkedRequestsFree.next = n : e.corkedRequestsFree = n
        }
        var A = t(6);
        n.exports = d;
        var C, T = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? i : A.nextTick;
        d.WritableState = c;
        var L = t(5);
        L.inherits = t(4);
        var I = {
                deprecate: t(46)
            },
            B = t(18),
            M = t(7).Buffer,
            D = r.Uint8Array || function() {},
            O = t(19);
        L.inherits(d, B), c.prototype.getBuffer = function() {
                for (var n = this.bufferedRequest, e = []; n;) e.push(n), n = n.next;
                return e
            },
            function() {
                try {
                    Object.defineProperty(c.prototype, "buffer", {
                        get: I.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (n) {}
            }();
        var P;
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (P = Function.prototype[Symbol.hasInstance], Object.defineProperty(d, Symbol.hasInstance, {
            value: function(n) {
                return !!P.call(this, n) || this === d && (n && n._writableState instanceof c)
            }
        })) : P = function(n) {
            return n instanceof this
        }, d.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }, d.prototype.write = function(n, e, t) {
            var i = this._writableState,
                r = !1,
                a = !i.objectMode && s(n);
            return a && !M.isBuffer(n) && (n = o(n)), "function" == typeof e && (t = e, e = null), a ? e = "buffer" : e || (e = i.defaultEncoding), "function" != typeof t && (t = l), i.ended ? f(this, t) : (a || u(this, i, n, t)) && (i.pendingcb++, r = b(this, i, a, n, e, t)), r
        }, d.prototype.cork = function() {
            this._writableState.corked++
        }, d.prototype.uncork = function() {
            var n = this._writableState;
            n.corked && (n.corked--, n.writing || n.corked || n.finished || n.bufferProcessing || !n.bufferedRequest || k(this, n))
        }, d.prototype.setDefaultEncoding = function(n) {
            if ("string" == typeof n && (n = n.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((n + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + n);
            return this._writableState.defaultEncoding = n, this
        }, Object.defineProperty(d.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), d.prototype._write = function(n, e, t) {
            t(new Error("_write() is not implemented"))
        }, d.prototype._writev = null, d.prototype.end = function(n, e, t) {
            var i = this._writableState;
            "function" == typeof n ? (t = n, n = null, e = null) : "function" == typeof e && (t = e, e = null), null !== n && void 0 !== n && this.write(n, e), i.corked && (i.corked = 1, this.uncork()), i.ending || i.finished || E(this, i, t)
        }, Object.defineProperty(d.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(n) {
                this._writableState && (this._writableState.destroyed = n)
            }
        }), d.prototype.destroy = O.destroy, d.prototype._undestroy = O.undestroy, d.prototype._destroy = function(n, e) {
            this.end(), e(n)
        }
    }).call(e, t(1), t(44).setImmediate, t(0))
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/69d0497e5e4883debdb9ac9e83dbcaaf.png"
}, function(n, e) {
    function t(n, e) {
        var t = n[1] || "",
            r = n[3];
        if (!r) return t;
        if (e && "function" == typeof btoa) {
            var a = i(r);
            return [t].concat(r.sources.map(function(n) {
                return "/*# sourceURL=" + r.sourceRoot + n + " */"
            })).concat([a]).join("\n")
        }
        return [t].join("\n")
    }

    function i(n) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"
    }
    n.exports = function(n) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var i = t(e, n);
                return e[2] ? "@media " + e[2] + "{" + i + "}" : i
            }).join("")
        }, e.i = function(n, t) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                "number" == typeof a && (i[a] = !0)
            }
            for (r = 0; r < n.length; r++) {
                var o = n[r];
                "number" == typeof o[0] && i[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), e.push(o))
            }
        }, e
    }
}, function(n, e, t) {
    function i(n, e) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t],
                r = b[i.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) r.parts.push(d(i.parts[a], e))
            } else {
                for (var o = [], a = 0; a < i.parts.length; a++) o.push(d(i.parts[a], e));
                b[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }

    function r(n, e) {
        for (var t = [], i = {}, r = 0; r < n.length; r++) {
            var a = n[r],
                o = e.base ? a[0] + e.base : a[0],
                s = a[1],
                l = a[2],
                c = a[3],
                d = {
                    css: s,
                    media: l,
                    sourceMap: c
                };
            i[o] ? i[o].parts.push(d) : t.push(i[o] = {
                id: o,
                parts: [d]
            })
        }
        return t
    }

    function a(n, e) {
        var t = m(n.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = w[w.length - 1];
        if ("top" === n.insertAt) i ? i.nextSibling ? t.insertBefore(e, i.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), w.push(e);
        else if ("bottom" === n.insertAt) t.appendChild(e);
        else {
            if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = m(n.insertInto + " " + n.insertAt.before);
            t.insertBefore(e, r)
        }
    }

    function o(n) {
        if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n);
        var e = w.indexOf(n);
        e >= 0 && w.splice(e, 1)
    }

    function s(n) {
        var e = document.createElement("style");
        return n.attrs.type = "text/css", c(e, n.attrs), a(n, e), e
    }

    function l(n) {
        var e = document.createElement("link");
        return n.attrs.type = "text/css", n.attrs.rel = "stylesheet", c(e, n.attrs), a(n, e), e
    }

    function c(n, e) {
        Object.keys(e).forEach(function(t) {
            n.setAttribute(t, e[t])
        })
    }

    function d(n, e) {
        var t, i, r, a;
        if (e.transform && n.css) {
            if (!(a = e.transform(n.css))) return function() {};
            n.css = a
        }
        if (e.singleton) {
            var c = _++;
            t = v || (v = s(e)), i = f.bind(null, t, c, !1), r = f.bind(null, t, c, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = l(e), i = h.bind(null, t, e), r = function() {
            o(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = s(e), i = u.bind(null, t), r = function() {
            o(t)
        });
        return i(n),
            function(e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                    i(n = e)
                } else r()
            }
    }

    function f(n, e, t, i) {
        var r = t ? "" : i.css;
        if (n.styleSheet) n.styleSheet.cssText = y(e, r);
        else {
            var a = document.createTextNode(r),
                o = n.childNodes;
            o[e] && n.removeChild(o[e]), o.length ? n.insertBefore(a, o[e]) : n.appendChild(a)
        }
    }

    function u(n, e) {
        var t = e.css,
            i = e.media;
        if (i && n.setAttribute("media", i), n.styleSheet) n.styleSheet.cssText = t;
        else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t))
        }
    }

    function h(n, e, t) {
        var i = t.css,
            r = t.sourceMap,
            a = void 0 === e.convertToAbsoluteUrls && r;
        (e.convertToAbsoluteUrls || a) && (i = k(i)), r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var o = new Blob([i], {
                type: "text/css"
            }),
            s = n.href;
        n.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
    }
    var b = {},
        g = function(n) {
            var e;
            return function() {
                return void 0 === e && (e = n.apply(this, arguments)), e
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        p = function(n) {
            return document.querySelector(n)
        },
        m = function(n) {
            var e = {};
            return function(n) {
                if ("function" == typeof n) return n();
                if (void 0 === e[n]) {
                    var t = p.call(this, n);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (n) {
                        t = null
                    }
                    e[n] = t
                }
                return e[n]
            }
        }(),
        v = null,
        _ = 0,
        w = [],
        k = t(30);
    n.exports = function(n, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = g()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var t = r(n, e);
        return i(t, e),
            function(n) {
                for (var a = [], o = 0; o < t.length; o++) {
                    var s = t[o],
                        l = b[s.id];
                    l.refs--, a.push(l)
                }
                if (n) {
                    i(r(n, e), e)
                }
                for (var o = 0; o < a.length; o++) {
                    var l = a[o];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete b[l.id]
                    }
                }
            }
    };
    var y = function() {
        var n = [];
        return function(e, t) {
            return n[e] = t, n.filter(Boolean).join("\n")
        }
    }()
}, function(n, e, t) {
    "use strict";

    function i(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }

    function r() {
        var n = this;
        this.Zlib = o.default.Zlib, this.encode = function(e) {
            var t = new l.default.Writer;
            t.compound(e);
            var i = new Uint8Array(t.getData()),
                r = "Schematic",
                a = new Uint8Array(3 + r.length + i.byteLength);
            return a[0] = 10, a[2] = r.length, r.split("").forEach(function(n, e) {
                a[e + 3] = n.charCodeAt(0)
            }), a.set(i, 3 + r.length), new n.Zlib.Gzip(a).compress()
        }, this.decode = function(e, t) {
            new n.Zlib.Gunzip(e);
            l.default.parse(e, t)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = t(35),
        o = i(a),
        s = t(36),
        l = i(s);
    e.default = r
}, function(n, e) {
    var t = {}.toString;
    n.exports = Array.isArray || function(n) {
        return "[object Array]" == t.call(n)
    }
}, function(n, e, t) {
    "use strict";
    (function(e, i) {
        function r(n) {
            return P.from(n)
        }

        function a(n) {
            return P.isBuffer(n) || n instanceof N
        }

        function o(n, e, t) {
            if ("function" == typeof n.prependListener) return n.prependListener(e, t);
            n._events && n._events[e] ? M(n._events[e]) ? n._events[e].unshift(t) : n._events[e] = [t, n._events[e]] : n.on(e, t)
        }

        function s(n, e) {
            B = B || t(2), n = n || {};
            var i = e instanceof B;
            this.objectMode = !!n.objectMode, i && (this.objectMode = this.objectMode || !!n.readableObjectMode);
            var r = n.highWaterMark,
                a = n.readableHighWaterMark,
                o = this.objectMode ? 16 : 16384;
            this.highWaterMark = r || 0 === r ? r : i && (a || 0 === a) ? a : o, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new W, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = n.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, n.encoding && (G || (G = t(20).StringDecoder), this.decoder = new G(n.encoding), this.encoding = n.encoding)
        }

        function l(n) {
            if (B = B || t(2), !(this instanceof l)) return new l(n);
            this._readableState = new s(n, this), this.readable = !0, n && ("function" == typeof n.read && (this._read = n.read), "function" == typeof n.destroy && (this._destroy = n.destroy)), O.call(this)
        }

        function c(n, e, t, i, a) {
            var o = n._readableState;
            if (null === e) o.reading = !1, g(n, o);
            else {
                var s;
                a || (s = f(o, e)), s ? n.emit("error", s) : o.objectMode || e && e.length > 0 ? ("string" == typeof e || o.objectMode || Object.getPrototypeOf(e) === P.prototype || (e = r(e)), i ? o.endEmitted ? n.emit("error", new Error("stream.unshift() after end event")) : d(n, o, e, !0) : o.ended ? n.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !t ? (e = o.decoder.write(e), o.objectMode || 0 !== e.length ? d(n, o, e, !1) : v(n, o)) : d(n, o, e, !1))) : i || (o.reading = !1)
            }
            return u(o)
        }

        function d(n, e, t, i) {
            e.flowing && 0 === e.length && !e.sync ? (n.emit("data", t), n.read(0)) : (e.length += e.objectMode ? 1 : t.length, i ? e.buffer.unshift(t) : e.buffer.push(t), e.needReadable && p(n)), v(n, e)
        }

        function f(n, e) {
            var t;
            return a(e) || "string" == typeof e || void 0 === e || n.objectMode || (t = new TypeError("Invalid non-string/buffer chunk")), t
        }

        function u(n) {
            return !n.ended && (n.needReadable || n.length < n.highWaterMark || 0 === n.length)
        }

        function h(n) {
            return n >= F ? n = F : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n
        }

        function b(n, e) {
            return n <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : n !== n ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (n > e.highWaterMark && (e.highWaterMark = h(n)), n <= e.length ? n : e.ended ? e.length : (e.needReadable = !0, 0))
        }

        function g(n, e) {
            if (!e.ended) {
                if (e.decoder) {
                    var t = e.decoder.end();
                    t && t.length && (e.buffer.push(t), e.length += e.objectMode ? 1 : t.length)
                }
                e.ended = !0, p(n)
            }
        }

        function p(n) {
            var e = n._readableState;
            e.needReadable = !1, e.emittedReadable || (j("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? I.nextTick(m, n) : m(n))
        }

        function m(n) {
            j("emit readable"), n.emit("readable"), S(n)
        }

        function v(n, e) {
            e.readingMore || (e.readingMore = !0, I.nextTick(_, n, e))
        }

        function _(n, e) {
            for (var t = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (j("maybeReadMore read 0"), n.read(0), t !== e.length);) t = e.length;
            e.readingMore = !1
        }

        function w(n) {
            return function() {
                var e = n._readableState;
                j("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && D(n, "data") && (e.flowing = !0, S(n))
            }
        }

        function k(n) {
            j("readable nexttick read 0"), n.read(0)
        }

        function y(n, e) {
            e.resumeScheduled || (e.resumeScheduled = !0, I.nextTick(x, n, e))
        }

        function x(n, e) {
            e.reading || (j("resume read 0"), n.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, n.emit("resume"), S(n), e.flowing && !e.reading && n.read(0)
        }

        function S(n) {
            var e = n._readableState;
            for (j("flow", e.flowing); e.flowing && null !== n.read(););
        }

        function z(n, e) {
            if (0 === e.length) return null;
            var t;
            return e.objectMode ? t = e.buffer.shift() : !n || n >= e.length ? (t = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : t = E(n, e.buffer, e.decoder), t
        }

        function E(n, e, t) {
            var i;
            return n < e.head.data.length ? (i = e.head.data.slice(0, n), e.head.data = e.head.data.slice(n)) : i = n === e.head.data.length ? e.shift() : t ? R(n, e) : A(n, e), i
        }

        function R(n, e) {
            var t = e.head,
                i = 1,
                r = t.data;
            for (n -= r.length; t = t.next;) {
                var a = t.data,
                    o = n > a.length ? a.length : n;
                if (o === a.length ? r += a : r += a.slice(0, n), 0 === (n -= o)) {
                    o === a.length ? (++i, t.next ? e.head = t.next : e.head = e.tail = null) : (e.head = t, t.data = a.slice(o));
                    break
                }++i
            }
            return e.length -= i, r
        }

        function A(n, e) {
            var t = P.allocUnsafe(n),
                i = e.head,
                r = 1;
            for (i.data.copy(t), n -= i.data.length; i = i.next;) {
                var a = i.data,
                    o = n > a.length ? a.length : n;
                if (a.copy(t, t.length - n, 0, o), 0 === (n -= o)) {
                    o === a.length ? (++r, i.next ? e.head = i.next : e.head = e.tail = null) : (e.head = i, i.data = a.slice(o));
                    break
                }++r
            }
            return e.length -= r, t
        }

        function C(n) {
            var e = n._readableState;
            if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0, I.nextTick(T, e, n))
        }

        function T(n, e) {
            n.endEmitted || 0 !== n.length || (n.endEmitted = !0, e.readable = !1, e.emit("end"))
        }

        function L(n, e) {
            for (var t = 0, i = n.length; t < i; t++)
                if (n[t] === e) return t;
            return -1
        }
        var I = t(6);
        n.exports = l;
        var B, M = t(16);
        l.ReadableState = s;
        var D = (t(9).EventEmitter, function(n, e) {
                return n.listeners(e).length
            }),
            O = t(18),
            P = t(7).Buffer,
            N = e.Uint8Array || function() {},
            U = t(5);
        U.inherits = t(4);
        var H = t(41),
            j = void 0;
        j = H && H.debuglog ? H.debuglog("stream") : function() {};
        var G, W = t(42),
            q = t(19);
        U.inherits(l, O);
        var $ = ["error", "close", "destroy", "pause", "resume"];
        Object.defineProperty(l.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(n) {
                this._readableState && (this._readableState.destroyed = n)
            }
        }), l.prototype.destroy = q.destroy, l.prototype._undestroy = q.undestroy, l.prototype._destroy = function(n, e) {
            this.push(null), e(n)
        }, l.prototype.push = function(n, e) {
            var t, i = this._readableState;
            return i.objectMode ? t = !0 : "string" == typeof n && (e = e || i.defaultEncoding, e !== i.encoding && (n = P.from(n, e), e = ""), t = !0), c(this, n, e, !1, t)
        }, l.prototype.unshift = function(n) {
            return c(this, n, null, !0, !1)
        }, l.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }, l.prototype.setEncoding = function(n) {
            return G || (G = t(20).StringDecoder), this._readableState.decoder = new G(n), this._readableState.encoding = n, this
        };
        var F = 8388608;
        l.prototype.read = function(n) {
            j("read", n), n = parseInt(n, 10);
            var e = this._readableState,
                t = n;
            if (0 !== n && (e.emittedReadable = !1), 0 === n && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return j("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? C(this) : p(this), null;
            if (0 === (n = b(n, e)) && e.ended) return 0 === e.length && C(this), null;
            var i = e.needReadable;
            j("need readable", i), (0 === e.length || e.length - n < e.highWaterMark) && (i = !0, j("length less than watermark", i)), e.ended || e.reading ? (i = !1, j("reading or ended", i)) : i && (j("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (n = b(t, e)));
            var r;
            return r = n > 0 ? z(n, e) : null, null === r ? (e.needReadable = !0, n = 0) : e.length -= n, 0 === e.length && (e.ended || (e.needReadable = !0), t !== n && e.ended && C(this)), null !== r && this.emit("data", r), r
        }, l.prototype._read = function(n) {
            this.emit("error", new Error("_read() is not implemented"))
        }, l.prototype.pipe = function(n, e) {
            function t(n, e) {
                j("onunpipe"), n === u && e && !1 === e.hasUnpiped && (e.hasUnpiped = !0, a())
            }

            function r() {
                j("onend"), n.end()
            }

            function a() {
                j("cleanup"), n.removeListener("close", c), n.removeListener("finish", d), n.removeListener("drain", p), n.removeListener("error", l), n.removeListener("unpipe", t), u.removeListener("end", r), u.removeListener("end", f), u.removeListener("data", s), m = !0, !h.awaitDrain || n._writableState && !n._writableState.needDrain || p()
            }

            function s(e) {
                j("ondata"), v = !1, !1 !== n.write(e) || v || ((1 === h.pipesCount && h.pipes === n || h.pipesCount > 1 && -1 !== L(h.pipes, n)) && !m && (j("false write response, pause", u._readableState.awaitDrain), u._readableState.awaitDrain++, v = !0), u.pause())
            }

            function l(e) {
                j("onerror", e), f(), n.removeListener("error", l), 0 === D(n, "error") && n.emit("error", e)
            }

            function c() {
                n.removeListener("finish", d), f()
            }

            function d() {
                j("onfinish"), n.removeListener("close", c), f()
            }

            function f() {
                j("unpipe"), u.unpipe(n)
            }
            var u = this,
                h = this._readableState;
            switch (h.pipesCount) {
                case 0:
                    h.pipes = n;
                    break;
                case 1:
                    h.pipes = [h.pipes, n];
                    break;
                default:
                    h.pipes.push(n)
            }
            h.pipesCount += 1, j("pipe count=%d opts=%j", h.pipesCount, e);
            var b = (!e || !1 !== e.end) && n !== i.stdout && n !== i.stderr,
                g = b ? r : f;
            h.endEmitted ? I.nextTick(g) : u.once("end", g), n.on("unpipe", t);
            var p = w(u);
            n.on("drain", p);
            var m = !1,
                v = !1;
            return u.on("data", s), o(n, "error", l), n.once("close", c), n.once("finish", d), n.emit("pipe", u), h.flowing || (j("pipe resume"), u.resume()), n
        }, l.prototype.unpipe = function(n) {
            var e = this._readableState,
                t = {
                    hasUnpiped: !1
                };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount) return n && n !== e.pipes ? this : (n || (n = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, n && n.emit("unpipe", this, t), this);
            if (!n) {
                var i = e.pipes,
                    r = e.pipesCount;
                e.pipes = null, e.pipesCount = 0, e.flowing = !1;
                for (var a = 0; a < r; a++) i[a].emit("unpipe", this, t);
                return this
            }
            var o = L(e.pipes, n);
            return -1 === o ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), n.emit("unpipe", this, t), this)
        }, l.prototype.on = function(n, e) {
            var t = O.prototype.on.call(this, n, e);
            if ("data" === n) !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === n) {
                var i = this._readableState;
                i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.emittedReadable = !1, i.reading ? i.length && p(this) : I.nextTick(k, this))
            }
            return t
        }, l.prototype.addListener = l.prototype.on, l.prototype.resume = function() {
            var n = this._readableState;
            return n.flowing || (j("resume"), n.flowing = !0, y(this, n)), this
        }, l.prototype.pause = function() {
            return j("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (j("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, l.prototype.wrap = function(n) {
            var e = this,
                t = this._readableState,
                i = !1;
            n.on("end", function() {
                if (j("wrapped end"), t.decoder && !t.ended) {
                    var n = t.decoder.end();
                    n && n.length && e.push(n)
                }
                e.push(null)
            }), n.on("data", function(r) {
                if (j("wrapped data"), t.decoder && (r = t.decoder.write(r)), (!t.objectMode || null !== r && void 0 !== r) && (t.objectMode || r && r.length)) {
                    e.push(r) || (i = !0, n.pause())
                }
            });
            for (var r in n) void 0 === this[r] && "function" == typeof n[r] && (this[r] = function(e) {
                return function() {
                    return n[e].apply(n, arguments)
                }
            }(r));
            for (var a = 0; a < $.length; a++) n.on($[a], this.emit.bind(this, $[a]));
            return this._read = function(e) {
                j("wrapped _read", e), i && (i = !1, n.resume())
            }, this
        }, Object.defineProperty(l.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }), l._fromList = z
    }).call(e, t(0), t(1))
}, function(n, e, t) {
    n.exports = t(9).EventEmitter
}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        var t = this,
            i = this._readableState && this._readableState.destroyed,
            r = this._writableState && this._writableState.destroyed;
        return i || r ? (e ? e(n) : !n || this._writableState && this._writableState.errorEmitted || o.nextTick(a, this, n), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(n || null, function(n) {
            !e && n ? (o.nextTick(a, t, n), t._writableState && (t._writableState.errorEmitted = !0)) : e && e(n)
        }), this)
    }

    function r() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function a(n, e) {
        n.emit("error", e)
    }
    var o = t(6);
    n.exports = {
        destroy: i,
        undestroy: r
    }
}, function(n, e, t) {
    "use strict";

    function i(n) {
        if (!n) return "utf8";
        for (var e;;) switch (n) {
            case "utf8":
            case "utf-8":
                return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return "utf16le";
            case "latin1":
            case "binary":
                return "latin1";
            case "base64":
            case "ascii":
            case "hex":
                return n;
            default:
                if (e) return;
                n = ("" + n).toLowerCase(), e = !0
        }
    }

    function r(n) {
        var e = i(n);
        if ("string" != typeof e && (v.isEncoding === _ || !_(n))) throw new Error("Unknown encoding: " + n);
        return e || n
    }

    function a(n) {
        this.encoding = r(n);
        var e;
        switch (this.encoding) {
            case "utf16le":
                this.text = u, this.end = h, e = 4;
                break;
            case "utf8":
                this.fillLast = c, e = 4;
                break;
            case "base64":
                this.text = b, this.end = g, e = 3;
                break;
            default:
                return this.write = p, void(this.end = m)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = v.allocUnsafe(e)
    }

    function o(n) {
        return n <= 127 ? 0 : n >> 5 == 6 ? 2 : n >> 4 == 14 ? 3 : n >> 3 == 30 ? 4 : n >> 6 == 2 ? -1 : -2
    }

    function s(n, e, t) {
        var i = e.length - 1;
        if (i < t) return 0;
        var r = o(e[i]);
        return r >= 0 ? (r > 0 && (n.lastNeed = r - 1), r) : --i < t || -2 === r ? 0 : (r = o(e[i])) >= 0 ? (r > 0 && (n.lastNeed = r - 2), r) : --i < t || -2 === r ? 0 : (r = o(e[i]), r >= 0 ? (r > 0 && (2 === r ? r = 0 : n.lastNeed = r - 3), r) : 0)
    }

    function l(n, e, t) {
        if (128 != (192 & e[0])) return n.lastNeed = 0, "�";
        if (n.lastNeed > 1 && e.length > 1) {
            if (128 != (192 & e[1])) return n.lastNeed = 1, "�";
            if (n.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return n.lastNeed = 2, "�"
        }
    }

    function c(n) {
        var e = this.lastTotal - this.lastNeed,
            t = l(this, n, e);
        return void 0 !== t ? t : this.lastNeed <= n.length ? (n.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (n.copy(this.lastChar, e, 0, n.length), void(this.lastNeed -= n.length))
    }

    function d(n, e) {
        var t = s(this, n, e);
        if (!this.lastNeed) return n.toString("utf8", e);
        this.lastTotal = t;
        var i = n.length - (t - this.lastNeed);
        return n.copy(this.lastChar, 0, i), n.toString("utf8", e, i)
    }

    function f(n) {
        var e = n && n.length ? this.write(n) : "";
        return this.lastNeed ? e + "�" : e
    }

    function u(n, e) {
        if ((n.length - e) % 2 == 0) {
            var t = n.toString("utf16le", e);
            if (t) {
                var i = t.charCodeAt(t.length - 1);
                if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1], t.slice(0, -1)
            }
            return t
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = n[n.length - 1], n.toString("utf16le", e, n.length - 1)
    }

    function h(n) {
        var e = n && n.length ? this.write(n) : "";
        if (this.lastNeed) {
            var t = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, t)
        }
        return e
    }

    function b(n, e) {
        var t = (n.length - e) % 3;
        return 0 === t ? n.toString("base64", e) : (this.lastNeed = 3 - t, this.lastTotal = 3, 1 === t ? this.lastChar[0] = n[n.length - 1] : (this.lastChar[0] = n[n.length - 2], this.lastChar[1] = n[n.length - 1]), n.toString("base64", e, n.length - t))
    }

    function g(n) {
        var e = n && n.length ? this.write(n) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }

    function p(n) {
        return n.toString(this.encoding)
    }

    function m(n) {
        return n && n.length ? this.write(n) : ""
    }
    var v = t(7).Buffer,
        _ = v.isEncoding || function(n) {
            switch ((n = "" + n) && n.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        };
    e.StringDecoder = a, a.prototype.write = function(n) {
        if (0 === n.length) return "";
        var e, t;
        if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(n))) return "";
            t = this.lastNeed, this.lastNeed = 0
        } else t = 0;
        return t < n.length ? e ? e + this.text(n, t) : this.text(n, t) : e || ""
    }, a.prototype.end = f, a.prototype.text = d, a.prototype.fillLast = function(n) {
        if (this.lastNeed <= n.length) return n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        n.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, n.length), this.lastNeed -= n.length
    }
}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        var t = this._transformState;
        t.transforming = !1;
        var i = t.writecb;
        if (!i) return this.emit("error", new Error("write callback called multiple times"));
        t.writechunk = null, t.writecb = null, null != e && this.push(e), i(n);
        var r = this._readableState;
        r.reading = !1, (r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
    }

    function r(n) {
        if (!(this instanceof r)) return new r(n);
        s.call(this, n), this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, n && ("function" == typeof n.transform && (this._transform = n.transform), "function" == typeof n.flush && (this._flush = n.flush)), this.on("prefinish", a)
    }

    function a() {
        var n = this;
        "function" == typeof this._flush ? this._flush(function(e, t) {
            o(n, e, t)
        }) : o(this, null, null)
    }

    function o(n, e, t) {
        if (e) return n.emit("error", e);
        if (null != t && n.push(t), n._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (n._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return n.push(null)
    }
    n.exports = r;
    var s = t(2),
        l = t(5);
    l.inherits = t(4), l.inherits(r, s), r.prototype.push = function(n, e) {
        return this._transformState.needTransform = !1, s.prototype.push.call(this, n, e)
    }, r.prototype._transform = function(n, e, t) {
        throw new Error("_transform() is not implemented")
    }, r.prototype._write = function(n, e, t) {
        var i = this._transformState;
        if (i.writecb = t, i.writechunk = n, i.writeencoding = e, !i.transforming) {
            var r = this._readableState;
            (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
        }
    }, r.prototype._read = function(n) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }, r.prototype._destroy = function(n, e) {
        var t = this;
        s.prototype._destroy.call(this, n, function(n) {
            e(n), t.emit("close")
        })
    }
}, function(n, e, t) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        function i(n, e) {
            if (n === e) return 0;
            for (var t = n.length, i = e.length, r = 0, a = Math.min(t, i); r < a; ++r)
                if (n[r] !== e[r]) {
                    t = n[r], i = e[r];
                    break
                } return t < i ? -1 : i < t ? 1 : 0
        }

        function r(n) {
            return e.Buffer && "function" == typeof e.Buffer.isBuffer ? e.Buffer.isBuffer(n) : !(null == n || !n._isBuffer)
        }

        function a(n) {
            return Object.prototype.toString.call(n)
        }

        function o(n) {
            return !r(n) && ("function" == typeof e.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(n) : !!n && (n instanceof DataView || !!(n.buffer && n.buffer instanceof ArrayBuffer))))
        }

        function s(n) {
            if (y.isFunction(n)) {
                if (z) return n.name;
                var e = n.toString(),
                    t = e.match(R);
                return t && t[1]
            }
        }

        function l(n, e) {
            return "string" == typeof n ? n.length < e ? n : n.slice(0, e) : n
        }

        function c(n) {
            if (z || !y.isFunction(n)) return y.inspect(n);
            var e = s(n);
            return "[Function" + (e ? ": " + e : "") + "]"
        }

        function d(n) {
            return l(c(n.actual), 128) + " " + n.operator + " " + l(c(n.expected), 128)
        }

        function f(n, e, t, i, r) {
            throw new E.AssertionError({
                message: t,
                actual: n,
                expected: e,
                operator: i,
                stackStartFunction: r
            })
        }

        function u(n, e) {
            n || f(n, !0, e, "==", E.ok)
        }

        function h(n, e, t, s) {
            if (n === e) return !0;
            if (r(n) && r(e)) return 0 === i(n, e);
            if (y.isDate(n) && y.isDate(e)) return n.getTime() === e.getTime();
            if (y.isRegExp(n) && y.isRegExp(e)) return n.source === e.source && n.global === e.global && n.multiline === e.multiline && n.lastIndex === e.lastIndex && n.ignoreCase === e.ignoreCase;
            if (null !== n && "object" == typeof n || null !== e && "object" == typeof e) {
                if (o(n) && o(e) && a(n) === a(e) && !(n instanceof Float32Array || n instanceof Float64Array)) return 0 === i(new Uint8Array(n.buffer), new Uint8Array(e.buffer));
                if (r(n) !== r(e)) return !1;
                s = s || {
                    actual: [],
                    expected: []
                };
                var l = s.actual.indexOf(n);
                return -1 !== l && l === s.expected.indexOf(e) || (s.actual.push(n), s.expected.push(e), g(n, e, t, s))
            }
            return t ? n === e : n == e
        }

        function b(n) {
            return "[object Arguments]" == Object.prototype.toString.call(n)
        }

        function g(n, e, t, i) {
            if (null === n || void 0 === n || null === e || void 0 === e) return !1;
            if (y.isPrimitive(n) || y.isPrimitive(e)) return n === e;
            if (t && Object.getPrototypeOf(n) !== Object.getPrototypeOf(e)) return !1;
            var r = b(n),
                a = b(e);
            if (r && !a || !r && a) return !1;
            if (r) return n = S.call(n), e = S.call(e), h(n, e, t);
            var o, s, l = A(n),
                c = A(e);
            if (l.length !== c.length) return !1;
            for (l.sort(), c.sort(), s = l.length - 1; s >= 0; s--)
                if (l[s] !== c[s]) return !1;
            for (s = l.length - 1; s >= 0; s--)
                if (o = l[s], !h(n[o], e[o], t, i)) return !1;
            return !0
        }

        function p(n, e, t) {
            h(n, e, !0) && f(n, e, t, "notDeepStrictEqual", p)
        }

        function m(n, e) {
            if (!n || !e) return !1;
            if ("[object RegExp]" == Object.prototype.toString.call(e)) return e.test(n);
            try {
                if (n instanceof e) return !0
            } catch (n) {}
            return !Error.isPrototypeOf(e) && !0 === e.call({}, n)
        }

        function v(n) {
            var e;
            try {
                n()
            } catch (n) {
                e = n
            }
            return e
        }

        function _(n, e, t, i) {
            var r;
            if ("function" != typeof e) throw new TypeError('"block" argument must be a function');
            "string" == typeof t && (i = t, t = null), r = v(e), i = (t && t.name ? " (" + t.name + ")." : ".") + (i ? " " + i : "."), n && !r && f(r, t, "Missing expected exception" + i);
            var a = "string" == typeof i,
                o = !n && y.isError(r),
                s = !n && r && !t;
            if ((o && a && m(r, t) || s) && f(r, t, "Got unwanted exception" + i), n && r && t && !m(r, t) || !n && r) throw r
        }

        function w(n, e) {
            n || f(n, !0, e, "==", w)
        }
        var k = t(53),
            y = t(23),
            x = Object.prototype.hasOwnProperty,
            S = Array.prototype.slice,
            z = function() {
                return "foo" === function() {}.name
            }(),
            E = n.exports = u,
            R = /\s*function\s+([^\(\s]*)\s*/;
        E.AssertionError = function(n) {
            this.name = "AssertionError", this.actual = n.actual, this.expected = n.expected, this.operator = n.operator, n.message ? (this.message = n.message, this.generatedMessage = !1) : (this.message = d(this), this.generatedMessage = !0);
            var e = n.stackStartFunction || f;
            if (Error.captureStackTrace) Error.captureStackTrace(this, e);
            else {
                var t = new Error;
                if (t.stack) {
                    var i = t.stack,
                        r = s(e),
                        a = i.indexOf("\n" + r);
                    if (a >= 0) {
                        var o = i.indexOf("\n", a + 1);
                        i = i.substring(o + 1)
                    }
                    this.stack = i
                }
            }
        }, y.inherits(E.AssertionError, Error), E.fail = f, E.ok = u, E.equal = function(n, e, t) {
            n != e && f(n, e, t, "==", E.equal)
        }, E.notEqual = function(n, e, t) {
            n == e && f(n, e, t, "!=", E.notEqual)
        }, E.deepEqual = function(n, e, t) {
            h(n, e, !1) || f(n, e, t, "deepEqual", E.deepEqual)
        }, E.deepStrictEqual = function(n, e, t) {
            h(n, e, !0) || f(n, e, t, "deepStrictEqual", E.deepStrictEqual)
        }, E.notDeepEqual = function(n, e, t) {
            h(n, e, !1) && f(n, e, t, "notDeepEqual", E.notDeepEqual)
        }, E.notDeepStrictEqual = p, E.strictEqual = function(n, e, t) {
            n !== e && f(n, e, t, "===", E.strictEqual)
        }, E.notStrictEqual = function(n, e, t) {
            n === e && f(n, e, t, "!==", E.notStrictEqual)
        }, E.throws = function(n, e, t) {
            _(!0, n, e, t)
        }, E.doesNotThrow = function(n, e, t) {
            _(!1, n, e, t)
        }, E.ifError = function(n) {
            if (n) throw n
        }, E.strict = k(w, E, {
            equal: E.strictEqual,
            deepEqual: E.deepStrictEqual,
            notEqual: E.notStrictEqual,
            notDeepEqual: E.notDeepStrictEqual
        }), E.strict.strict = E.strict;
        var A = Object.keys || function(n) {
            var e = [];
            for (var t in n) x.call(n, t) && e.push(t);
            return e
        }
    }).call(e, t(0))
}, function(n, e, t) {
    (function(n) {
        function i(n, t) {
            var i = {
                seen: [],
                stylize: a
            };
            return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), b(t) ? i.showHidden = t : t && e._extend(i, t), w(i.showHidden) && (i.showHidden = !1), w(i.depth) && (i.depth = 2), w(i.colors) && (i.colors = !1), w(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = r), s(i, n, i.depth)
        }

        function r(n, e) {
            var t = i.styles[e];
            return t ? "[" + i.colors[t][0] + "m" + n + "[" + i.colors[t][1] + "m" : n
        }

        function a(n, e) {
            return n
        }

        function o(n) {
            var e = {};
            return n.forEach(function(n, t) {
                e[n] = !0
            }), e
        }

        function s(n, t, i) {
            if (n.customInspect && t && z(t.inspect) && t.inspect !== e.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                var r = t.inspect(i, n);
                return v(r) || (r = s(n, r, i)), r
            }
            var a = l(n, t);
            if (a) return a;
            var b = Object.keys(t),
                g = o(b);
            if (n.showHidden && (b = Object.getOwnPropertyNames(t)), S(t) && (b.indexOf("message") >= 0 || b.indexOf("description") >= 0)) return c(t);
            if (0 === b.length) {
                if (z(t)) {
                    var p = t.name ? ": " + t.name : "";
                    return n.stylize("[Function" + p + "]", "special")
                }
                if (k(t)) return n.stylize(RegExp.prototype.toString.call(t), "regexp");
                if (x(t)) return n.stylize(Date.prototype.toString.call(t), "date");
                if (S(t)) return c(t)
            }
            var m = "",
                _ = !1,
                w = ["{", "}"];
            if (h(t) && (_ = !0, w = ["[", "]"]), z(t)) {
                m = " [Function" + (t.name ? ": " + t.name : "") + "]"
            }
            if (k(t) && (m = " " + RegExp.prototype.toString.call(t)), x(t) && (m = " " + Date.prototype.toUTCString.call(t)), S(t) && (m = " " + c(t)), 0 === b.length && (!_ || 0 == t.length)) return w[0] + m + w[1];
            if (i < 0) return k(t) ? n.stylize(RegExp.prototype.toString.call(t), "regexp") : n.stylize("[Object]", "special");
            n.seen.push(t);
            var y;
            return y = _ ? d(n, t, i, g, b) : b.map(function(e) {
                return f(n, t, i, g, e, _)
            }), n.seen.pop(), u(y, m, w)
        }

        function l(n, e) {
            if (w(e)) return n.stylize("undefined", "undefined");
            if (v(e)) {
                var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return n.stylize(t, "string")
            }
            return m(e) ? n.stylize("" + e, "number") : b(e) ? n.stylize("" + e, "boolean") : g(e) ? n.stylize("null", "null") : void 0
        }

        function c(n) {
            return "[" + Error.prototype.toString.call(n) + "]"
        }

        function d(n, e, t, i, r) {
            for (var a = [], o = 0, s = e.length; o < s; ++o) T(e, String(o)) ? a.push(f(n, e, t, i, String(o), !0)) : a.push("");
            return r.forEach(function(r) {
                r.match(/^\d+$/) || a.push(f(n, e, t, i, r, !0))
            }), a
        }

        function f(n, e, t, i, r, a) {
            var o, l, c;
            if (c = Object.getOwnPropertyDescriptor(e, r) || {
                    value: e[r]
                }, c.get ? l = c.set ? n.stylize("[Getter/Setter]", "special") : n.stylize("[Getter]", "special") : c.set && (l = n.stylize("[Setter]", "special")), T(i, r) || (o = "[" + r + "]"), l || (n.seen.indexOf(c.value) < 0 ? (l = g(t) ? s(n, c.value, null) : s(n, c.value, t - 1), l.indexOf("\n") > -1 && (l = a ? l.split("\n").map(function(n) {
                    return "  " + n
                }).join("\n").substr(2) : "\n" + l.split("\n").map(function(n) {
                    return "   " + n
                }).join("\n"))) : l = n.stylize("[Circular]", "special")), w(o)) {
                if (a && r.match(/^\d+$/)) return l;
                o = JSON.stringify("" + r), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = n.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = n.stylize(o, "string"))
            }
            return o + ": " + l
        }

        function u(n, e, t) {
            var i = 0;
            return n.reduce(function(n, e) {
                return i++, e.indexOf("\n") >= 0 && i++, n + e.replace(/\u001b\[\d\d?m/g, "").length + 1
            }, 0) > 60 ? t[0] + ("" === e ? "" : e + "\n ") + " " + n.join(",\n  ") + " " + t[1] : t[0] + e + " " + n.join(", ") + " " + t[1]
        }

        function h(n) {
            return Array.isArray(n)
        }

        function b(n) {
            return "boolean" == typeof n
        }

        function g(n) {
            return null === n
        }

        function p(n) {
            return null == n
        }

        function m(n) {
            return "number" == typeof n
        }

        function v(n) {
            return "string" == typeof n
        }

        function _(n) {
            return "symbol" == typeof n
        }

        function w(n) {
            return void 0 === n
        }

        function k(n) {
            return y(n) && "[object RegExp]" === R(n)
        }

        function y(n) {
            return "object" == typeof n && null !== n
        }

        function x(n) {
            return y(n) && "[object Date]" === R(n)
        }

        function S(n) {
            return y(n) && ("[object Error]" === R(n) || n instanceof Error)
        }

        function z(n) {
            return "function" == typeof n
        }

        function E(n) {
            return null === n || "boolean" == typeof n || "number" == typeof n || "string" == typeof n || "symbol" == typeof n || void 0 === n
        }

        function R(n) {
            return Object.prototype.toString.call(n)
        }

        function A(n) {
            return n < 10 ? "0" + n.toString(10) : n.toString(10)
        }

        function C() {
            var n = new Date,
                e = [A(n.getHours()), A(n.getMinutes()), A(n.getSeconds())].join(":");
            return [n.getDate(), P[n.getMonth()], e].join(" ")
        }

        function T(n, e) {
            return Object.prototype.hasOwnProperty.call(n, e)
        }

        function L(n, e) {
            if (!n) {
                var t = new Error("Promise was rejected with a falsy value");
                t.reason = n, n = t
            }
            return e(n)
        }

        function I(e) {
            function t() {
                for (var t = [], i = 0; i < arguments.length; i++) t.push(arguments[i]);
                var r = t.pop();
                if ("function" != typeof r) throw new TypeError("The last argument must be of type Function");
                var a = this,
                    o = function() {
                        return r.apply(a, arguments)
                    };
                e.apply(this, t).then(function(e) {
                    n.nextTick(o, null, e)
                }, function(e) {
                    n.nextTick(L, e, o)
                })
            }
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, B(e)), t
        }
        var B = Object.getOwnPropertyDescriptors || function(n) {
                for (var e = Object.keys(n), t = {}, i = 0; i < e.length; i++) t[e[i]] = Object.getOwnPropertyDescriptor(n, e[i]);
                return t
            },
            M = /%[sdj%]/g;
        e.format = function(n) {
            if (!v(n)) {
                for (var e = [], t = 0; t < arguments.length; t++) e.push(i(arguments[t]));
                return e.join(" ")
            }
            for (var t = 1, r = arguments, a = r.length, o = String(n).replace(M, function(n) {
                    if ("%%" === n) return "%";
                    if (t >= a) return n;
                    switch (n) {
                        case "%s":
                            return String(r[t++]);
                        case "%d":
                            return Number(r[t++]);
                        case "%j":
                            try {
                                return JSON.stringify(r[t++])
                            } catch (n) {
                                return "[Circular]"
                            }
                        default:
                            return n
                    }
                }), s = r[t]; t < a; s = r[++t]) g(s) || !y(s) ? o += " " + s : o += " " + i(s);
            return o
        }, e.deprecate = function(t, i) {
            function r() {
                if (!a) {
                    if (n.throwDeprecation) throw new Error(i);
                    n.traceDeprecation ? console.trace(i) : console.error(i), a = !0
                }
                return t.apply(this, arguments)
            }
            if (void 0 !== n && !0 === n.noDeprecation) return t;
            if (void 0 === n) return function() {
                return e.deprecate(t, i).apply(this, arguments)
            };
            var a = !1;
            return r
        };
        var D, O = {};
        e.debuglog = function(t) {
            if (w(D) && (D = n.env.NODE_DEBUG || ""), t = t.toUpperCase(), !O[t])
                if (new RegExp("\\b" + t + "\\b", "i").test(D)) {
                    var i = n.pid;
                    O[t] = function() {
                        var n = e.format.apply(e, arguments);
                        console.error("%s %d: %s", t, i, n)
                    }
                } else O[t] = function() {};
            return O[t]
        }, e.inspect = i, i.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, i.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, e.isArray = h, e.isBoolean = b, e.isNull = g, e.isNullOrUndefined = p, e.isNumber = m, e.isString = v, e.isSymbol = _, e.isUndefined = w, e.isRegExp = k, e.isObject = y, e.isDate = x, e.isError = S, e.isFunction = z, e.isPrimitive = E, e.isBuffer = t(54);
        var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        e.log = function() {
            console.log("%s - %s", C(), e.format.apply(e, arguments))
        }, e.inherits = t(55), e._extend = function(n, e) {
            if (!e || !y(e)) return n;
            for (var t = Object.keys(e), i = t.length; i--;) n[t[i]] = e[t[i]];
            return n
        };
        var N = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        e.promisify = function(n) {
            function e() {
                for (var e, t, i = new Promise(function(n, i) {
                        e = n, t = i
                    }), r = [], a = 0; a < arguments.length; a++) r.push(arguments[a]);
                r.push(function(n, i) {
                    n ? t(n) : e(i)
                });
                try {
                    n.apply(this, r)
                } catch (n) {
                    t(n)
                }
                return i
            }
            if ("function" != typeof n) throw new TypeError('The "original" argument must be of type Function');
            if (N && n[N]) {
                var e = n[N];
                if ("function" != typeof e) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(e, N, {
                    value: e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }), e
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(n)), N && Object.defineProperty(e, N, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), Object.defineProperties(e, B(n))
        }, e.promisify.custom = N, e.callbackify = I
    }).call(e, t(1))
}, function(n, e, t) {
    "use strict";

    function i(n, e, t, i) {
        for (var r = 65535 & n | 0, a = n >>> 16 & 65535 | 0, o = 0; 0 !== t;) {
            o = t > 2e3 ? 2e3 : t, t -= o;
            do {
                r = r + e[i++] | 0, a = a + r | 0
            } while (--o);
            r %= 65521, a %= 65521
        }
        return r | a << 16 | 0
    }
    n.exports = i
}, function(n, e, t) {
    "use strict";

    function i(n, e, t, i) {
        var a = r,
            o = i + t;
        n ^= -1;
        for (var s = i; s < o; s++) n = n >>> 8 ^ a[255 & (n ^ e[s])];
        return -1 ^ n
    }
    var r = function() {
        for (var n, e = [], t = 0; t < 256; t++) {
            n = t;
            for (var i = 0; i < 8; i++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
            e[t] = n
        }
        return e
    }();
    n.exports = i
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/55d978faaaf2abd26a36a38abc6d42e6.png"
}, function(n, e, t) {
    "use strict";

    function i(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    t(28), t(31);
    var r = t(33),
        a = i(r),
        o = t(34),
        s = i(o),
        l = t(64);
    l.forEach(function(n) {
        n.src = t(65)("./" + n.texture_image), delete n.texture_image
    });
    var c = {
        isProd: !0,
        blocksDefault: l,
        convertWorker: new a.default,
        mineartCanvas: new s.default,
        canvasTemp: document.createElement("canvas"),
        localStorage: window.localStorage,
        uploadedType: null,
        uploadedImage: new Image,
        uploadedImageName: null,
        minecraftVersion: 12,
        waitForLoaded: {
            arr: null,
            width: null,
            height: null
        },
        isSaved: !0,
        leftClick: !1,
        findBlockById: function(n) {
            return this.blocksDefault.find(function(e) {
                if (e.id === n) return !0
            })
        },
        findBlockByGameId: function(n, e) {
            var t = [18, 99, 100, 202, 216, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                i = [17, 162];
            return this.blocksDefault.find(function(r) {
                if (i.indexOf(n) >= 0 && e >= 4) {
                    var a = e % 4;
                    if (r.block_id === n && r.data_id === a && r.axis) return !0
                } else if (t.indexOf(n) >= 0) {
                    if (r.block_id === n) return !0
                } else if (r.block_id === n && r.data_id === e && !r.axis) return !0
            })
        },
        showLoading: function() {
            document.querySelector(".loading-overlay").classList.add("is-active")
        },
        hideLoading: function() {
            document.querySelector(".loading-overlay").classList.remove("is-active")
        },
        startScreen: t(286).output,
        settingsScreen: t(287).output,
        editorScreen: t(289).output,
        convertScreen: t(290).output,
        modals: {
            items: {},
            $root: document.querySelector(".modal"),
            $closeBtn: document.querySelector(".modal-close"),
            init: function() {
                var n = this;
                document.querySelectorAll('div[id^="modal-"]').forEach(function(e) {
                    var t = e.id.match(/(modal\-)(.*)/)[2];
                    n.items[t] = e
                })
            },
            openModal: function(n) {
                this.$root.classList.add("is-active");
                for (var e in this.items) this.items[e].classList.add("hidden");
                this.items[n].classList.remove("hidden"), c.editorScreen.closeTopbarMenus()
            },
            closeModal: function() {
                this.$root.classList.remove("is-active");
                for (var n in this.items) {
                    var e = this.items[n].querySelector("iframe");
                    e && (e.src = e.src), this.items[n].classList.add("hidden")
                }
            }
        },
        errors: {
            items: {},
            init: function() {
                var n = this;
                document.querySelectorAll('div[id^="error-"]').forEach(function(e) {
                    var t = e.id.match(/(error\-)(.*)/)[2];
                    n.items[t] = e, e.classList.add("hidden")
                })
            },
            triggerError: function(n, e, t) {
                var i = this;
                this.items[n] ? (this.items[n].classList.contains("hidden") || (clearTimeout(this.items[n].timeout), this.items[n].timeout = null), this.items[n].querySelector(".warning-body").innerHTML = e, this.items[n].classList.remove("hidden"), this.items[n].timeout = setTimeout(function() {
                    i.items[n].classList.add("hidden"), i.items[n].timeout = null
                }, t)) : console.error("No error id!")
            },
            closeError: function(n) {
                if (this.items[n]) {
                    if (this.items[n].classList.contains("hidden")) return;
                    this.items[n].classList.add("hidden"), this.items[n].timeout && (clearTimeout(this.items[n].timeout), this.items[n].timeout = null)
                } else console.error("No error id!")
            }
        },
        setEventListeners: function() {
            var n = this;
            this.convertWorker.onmessage = function(e) {
                if ("complete" !== document.readyState) return c.waitForLoaded.arr = e.data, c.waitForLoaded.width = c.canvasTemp.width, void(c.waitForLoaded.height = c.canvasTemp.height);
                c.hideLoading(), n.settingsScreen.changeToEditorScreen(), n.mineartCanvas.init(c.editorScreen.$canvas), n.mineartCanvas.setImageSizes(c.canvasTemp.width, c.canvasTemp.height), n.mineartCanvas.open(e.data), c.editorScreen.setEyedrop(1), c.editorScreen.setBrushSize(3), c.editorScreen.resetScreen()
            }, this.modals.$closeBtn.onclick = function() {
                n.modals.closeModal()
            }, window.addEventListener("load", function(n) {
                null !== c.waitForLoaded.arr && (c.settingsScreen.changeToEditorScreen(), c.mineartCanvas.init(c.editorScreen.$canvas), c.mineartCanvas.setImageSizes(c.waitForLoaded.width, c.waitForLoaded.height), c.mineartCanvas.open(c.waitForLoaded.arr), c.waitForLoaded = null, c.hideLoading())
            }), document.addEventListener("DOMContentLoaded", function(n) {
                document.body.style.display = ""
            }), document.addEventListener("keydown", function(n) {
                if ("INPUT" !== document.activeElement.tagName && !document.querySelector("section.editor-screen").classList.contains("hidden") && !c.leftClick) switch (c.editorScreen.closeTopbarMenus(), n.which) {
                    case 17:
                        c.mineartCanvas.setTool("clicker"), c.mineartCanvas.render();
                        break;
                    case 80:
                        document.querySelector('.editor-tools input[value="pencil"]').click();
                        break;
                    case 66:
                        document.querySelector('.editor-tools input[value="brush"]').click();
                        break;
                    case 85:
                        document.querySelector('.editor-tools input[value="bucket"]').click();
                        break;
                    case 69:
                        document.querySelector('.editor-tools input[value="eyedropper"]').click();
                        break;
                    case 90:
                        n.ctrlKey ? c.editorScreen.undoOnce() : document.querySelector('.editor-tools input[value="zoom"]').click();
                        break;
                    case 89:
                        n.ctrlKey && c.editorScreen.redoOnce();
                        break;
                    case 71:
                        document.querySelector('.editor-tools input[value="grab"]').click();
                        break;
                    case 78:
                        c.editorScreen.$blockList.querySelector('div[title="No Block"]').click();
                        break;
                    case 79:
                        c.editorScreen.$settingsOriginal.click();
                        break;
                    case 37:
                        n.preventDefault(), c.mineartCanvas.moveOffset(2, 0);
                        break;
                    case 38:
                        n.preventDefault(), c.mineartCanvas.moveOffset(0, 2);
                        break;
                    case 39:
                        n.preventDefault(), c.mineartCanvas.moveOffset(-2, 0);
                        break;
                    case 40:
                        n.preventDefault(), c.mineartCanvas.moveOffset(0, -2);
                        break;
                    case 219:
                        "pencil" !== c.editorScreen.currentTool && "brush" !== c.editorScreen.currentTool || c.editorScreen.$brushMinus.click();
                        break;
                    case 221:
                        "pencil" !== c.editorScreen.currentTool && "brush" !== c.editorScreen.currentTool || c.editorScreen.$brushPlus.click()
                }
            }), document.addEventListener("keyup", function(n) {
                if ("INPUT" !== document.activeElement.tagName && !document.querySelector("section.editor-screen").classList.contains("hidden") && !c.leftClick) switch (n.which) {
                    case 17:
                        c.mineartCanvas.setTool(c.editorScreen.currentTool)
                }
            }), document.addEventListener("mousedown", function(n) {
                c.leftClick = !0
            }), document.addEventListener("mouseup", function(n) {
                c.leftClick = !1
            }), window.onbeforeunload = function() {
                if (c.isProd) return c.isSaved ? void 0 : "You currently have unsaved changes. Are you sure you want to exit without saving?"
            }
        }
    };
    c.mineartCanvas.setBlocks(l), l.sort(function(n, e) {
        return n.h - e.h + n.s - e.s + e.l - n.l
    }), c.startScreen.init(c), c.settingsScreen.init(c), c.editorScreen.init(c), c.convertScreen.init(c), c.errors.init(), c.modals.init(), c.setEventListeners(), c.editorScreen.fillBlockList()
}, function(n, e, t) {
    var i = t(29);
    "string" == typeof i && (i = [
        [n.i, i, ""]
    ]);
    var r = {
        hmr: !0
    };
    r.transform = void 0, r.insertInto = void 0;
    t(14)(i, r);
    i.locals && (n.exports = i.locals)
}, function(n, e, t) {
    e = n.exports = t(13)(!1), e.push([n.i, '', ""])
}, function(n, e) {
    n.exports = function(n) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!n || "string" != typeof n) return n;
        var t = e.protocol + "//" + e.host,
            i = t + e.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, e) {
            var r = e.trim().replace(/^"(.*)"$/, function(n, e) {
                return e
            }).replace(/^'(.*)'$/, function(n, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)) return n;
            var a;
            return a = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? t + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")"
        })
    }
}, function(n, e, t) {
    var i = t(32);
    "string" == typeof i && (i = [
        [n.i, i, ""]
    ]);
    var r = {
        hmr: !0
    };
    r.transform = void 0, r.insertInto = void 0;
    t(14)(i, r);
    i.locals && (n.exports = i.locals)
}, function(n, e, t) {
    e = n.exports = t(13)(!1), e.push([n.i, '', ""])
}, function(n, e, t) {
    n.exports = function() {
        var workerCode = `
          ! function(e) {
              function a(r) {
                  if (n[r]) return n[r].exports;
                  var i = n[r] = {
                      i: r,
                      l: !1,
                      exports: {}
                  };
                  return e[r].call(i.exports, i, i.exports, a), i.l = !0, i.exports
              }
              var n = {};
              a.m = e, a.c = n, a.d = function(e, n, r) {
                  a.o(e, n) || Object.defineProperty(e, n, {
                      configurable: !1,
                      enumerable: !0,
                      get: r
                  })
              }, a.n = function(e) {
                  var n = e && e.__esModule ? function() {
                      return e.default
                  } : function() {
                      return e
                  };
                  return a.d(n, "a", n), n
              }, a.o = function(e, a) {
                  return Object.prototype.hasOwnProperty.call(e, a)
              }, a.p = "", a(a.s = 0)
          }([function(e, a, n) {
              "use strict";
              var r = n(1);
              onmessage = function(e) {
                  var a = Object.assign({}, r);
                  e.data.exclude.forEach(function(e) {
                      delete a[e - 1]
                  });
                  var n = e.data.imgData;
                  if ("Uint8ClampedArray" != n.constructor.name) return void console.error("not uint8!!!");
                  for (var i = new Uint8ClampedArray(n.length / 4), t = 0; t < n.length; t += 4) {
                      var d = {
                          red: n[t],
                          green: n[t + 1],
                          blue: n[t + 2],
                          alpha: n[t + 3]
                      };
                      if (d.alpha > 70) {
                          var l = !1;
                          for (var _ in a) {
                              var c = a[_],
                                  o = Math.abs(d.red - c.red) + Math.abs(d.green - c.green) + Math.abs(d.blue - c.blue);
                              (!l || o < l.deviation) && (l = c, l.deviation = o)
                          }
                          i[t / 4] = l.id
                      } else i[t / 4] = 0
                  }
                  postMessage(i)
              }
          }, function(e, a) {
              e.exports = [{
                  name: "Stone",
                  texture_image: "stone.png",
                  game_id: "minecraft:stone",
                  game_id_13: "minecraft:stone",
                  block_id: 1,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 1,
                  red: 125,
                  green: 125,
                  blue: 125,
                  h: 0,
                  s: 0,
                  l: 49
              }, {
                  name: "Granite",
                  texture_image: "stone_granite.png",
                  game_id: "minecraft:stone 1",
                  game_id_13: "minecraft:granite",
                  block_id: 1,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 2,
                  red: 153,
                  green: 114,
                  blue: 99,
                  h: 17,
                  s: 21,
                  l: 49
              }, {
                  name: "Polished Granite",
                  texture_image: "stone_granite_smooth.png",
                  game_id: "minecraft:stone 2",
                  game_id_13: "minecraft:polished_granite",
                  block_id: 1,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 3,
                  red: 159,
                  green: 115,
                  blue: 98,
                  h: 17,
                  s: 24,
                  l: 50
              }, {
                  name: "Diorite",
                  texture_image: "stone_diorite.png",
                  game_id: "minecraft:stone 3",
                  game_id_13: "minecraft:diorite",
                  block_id: 1,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 4,
                  red: 180,
                  green: 180,
                  blue: 183,
                  h: 240,
                  s: 2,
                  l: 71
              }, {
                  name: "Polished Diorite",
                  texture_image: "stone_diorite_smooth.png",
                  game_id: "minecraft:stone 4",
                  game_id_13: "minecraft:polished_diorite",
                  block_id: 1,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 5,
                  red: 183,
                  green: 183,
                  blue: 186,
                  h: 240,
                  s: 2,
                  l: 72
              }, {
                  name: "Andesite",
                  texture_image: "stone_andesite.png",
                  game_id: "minecraft:stone 5",
                  game_id_13: "minecraft:andesite",
                  block_id: 1,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 6,
                  red: 131,
                  green: 131,
                  blue: 131,
                  h: 0,
                  s: 0,
                  l: 51
              }, {
                  name: "Polished Andesite",
                  texture_image: "stone_andesite_smooth.png",
                  game_id: "minecraft:stone 6",
                  game_id_13: "minecraft:polished_andesite",
                  block_id: 1,
                  data_id: 6,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 7,
                  red: 133,
                  green: 133,
                  blue: 135,
                  h: 240,
                  s: 1,
                  l: 53
              }, {
                  name: "Dirt",
                  texture_image: "dirt.png",
                  game_id: "minecraft:dirt",
                  game_id_13: "minecraft:dirt",
                  block_id: 3,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 8,
                  red: 134,
                  green: 96,
                  blue: 67,
                  h: 26,
                  s: 33,
                  l: 39
              }, {
                  name: "Cobblestone",
                  texture_image: "cobblestone.png",
                  game_id: "minecraft:cobblestone",
                  game_id_13: "minecraft:cobblestone",
                  block_id: 4,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 9,
                  red: 123,
                  green: 123,
                  blue: 123,
                  h: 0,
                  s: 0,
                  l: 48
              }, {
                  name: "Oak Wood Plank",
                  texture_image: "planks_oak.png",
                  game_id: "minecraft:planks",
                  game_id_13: "minecraft:oak_planks",
                  block_id: 5,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 10,
                  red: 157,
                  green: 128,
                  blue: 79,
                  h: 38,
                  s: 33,
                  l: 46
              }, {
                  name: "Spruce Wood Plank",
                  texture_image: "planks_spruce.png",
                  game_id: "minecraft:planks 1",
                  game_id_13: "minecraft:spruce_planks",
                  block_id: 5,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 11,
                  red: 104,
                  green: 78,
                  blue: 47,
                  h: 33,
                  s: 38,
                  l: 30
              }, {
                  name: "Birch Wood Plank",
                  texture_image: "planks_birch.png",
                  game_id: "minecraft:planks 2",
                  game_id_13: "minecraft:birch_planks",
                  block_id: 5,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 12,
                  red: 196,
                  green: 179,
                  blue: 123,
                  h: 46,
                  s: 38,
                  l: 63
              }, {
                  name: "Jungle Wood Plank",
                  texture_image: "planks_jungle.png",
                  game_id: "minecraft:planks 3",
                  game_id_13: "minecraft:jungle_planks",
                  block_id: 5,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 13,
                  red: 154,
                  green: 110,
                  blue: 77,
                  h: 26,
                  s: 33,
                  l: 45
              }, {
                  name: "Acacia Wood Plank",
                  texture_image: "planks_acacia.png",
                  game_id: "minecraft:planks 4",
                  game_id_13: "minecraft:acacia_planks",
                  block_id: 5,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 14,
                  red: 169,
                  green: 92,
                  blue: 51,
                  h: 21,
                  s: 54,
                  l: 43
              }, {
                  name: "Dark Oak Wood Plank",
                  texture_image: "planks_big_oak.png",
                  game_id: "minecraft:planks 5",
                  game_id_13: "minecraft:dark_oak_planks",
                  block_id: 5,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 15,
                  red: 61,
                  green: 40,
                  blue: 18,
                  h: 31,
                  s: 54,
                  l: 15
              }, {
                  name: "Bedrock",
                  texture_image: "bedrock.png",
                  game_id: "minecraft:bedrock",
                  game_id_13: "minecraft:bedrock",
                  block_id: 7,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 16,
                  red: 84,
                  green: 84,
                  blue: 84,
                  h: 0,
                  s: 0,
                  l: 33
              }, {
                  name: "Sand",
                  texture_image: "sand.png",
                  game_id: "minecraft:sand",
                  game_id_13: "minecraft:sand",
                  block_id: 12,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 17,
                  red: 219,
                  green: 211,
                  blue: 160,
                  h: 52,
                  s: 45,
                  l: 74
              }, {
                  name: "Red Sand",
                  texture_image: "red_sand.png",
                  game_id: "minecraft:sand 1",
                  game_id_13: "minecraft:red_sand",
                  block_id: 12,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 18,
                  red: 169,
                  green: 88,
                  blue: 33,
                  h: 24,
                  s: 67,
                  l: 40
              }, {
                  name: "Gravel",
                  texture_image: "gravel.png",
                  game_id: "minecraft:gravel",
                  game_id_13: "minecraft:gravel",
                  block_id: 13,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 19,
                  red: 127,
                  green: 124,
                  blue: 123,
                  h: 15,
                  s: 2,
                  l: 49
              }, {
                  name: "Gold Ore",
                  texture_image: "gold_ore.png",
                  game_id: "minecraft:gold_ore",
                  game_id_13: "minecraft:gold_ore",
                  block_id: 14,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 20,
                  red: 143,
                  green: 140,
                  blue: 125,
                  h: 50,
                  s: 7,
                  l: 53
              }, {
                  name: "Iron Ore",
                  texture_image: "iron_ore.png",
                  game_id: "minecraft:iron_ore",
                  game_id_13: "minecraft:iron_ore",
                  block_id: 15,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 21,
                  red: 136,
                  green: 130,
                  blue: 127,
                  h: 20,
                  s: 4,
                  l: 52
              }, {
                  name: "Coal Ore",
                  texture_image: "coal_ore.png",
                  game_id: "minecraft:coal_ore",
                  game_id_13: "minecraft:coal_ore",
                  block_id: 16,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 22,
                  red: 115,
                  green: 115,
                  blue: 115,
                  h: 0,
                  s: 0,
                  l: 45
              }, {
                  name: "Oak Wood",
                  texture_image: "log_oak.png",
                  game_id: "minecraft:log",
                  game_id_13: "minecraft:oak_log",
                  block_id: 17,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 23,
                  red: 102,
                  green: 81,
                  blue: 50,
                  h: 36,
                  s: 34,
                  l: 30
              }, {
                  name: "Oak Wood (Top)",
                  texture_image: "log_oak_top.png",
                  game_id: "minecraft:log 0",
                  game_id_13: "minecraft:oak_log",
                  block_id: 17,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 24,
                  red: 155,
                  green: 125,
                  blue: 77,
                  h: 37,
                  s: 34,
                  l: 45
              }, {
                  name: "Spruce Wood",
                  texture_image: "log_spruce.png",
                  game_id: "minecraft:log 1",
                  game_id_13: "minecraft:spruce_log",
                  block_id: 17,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 25,
                  red: 46,
                  green: 29,
                  blue: 12,
                  h: 30,
                  s: 59,
                  l: 11
              }, {
                  name: "Spruce Wood (Top)",
                  texture_image: "log_spruce_top.png",
                  game_id: "minecraft:log 1",
                  game_id_13: "minecraft:oak_log",
                  block_id: 17,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 26,
                  red: 105,
                  green: 81,
                  blue: 48,
                  h: 35,
                  s: 37,
                  l: 30
              }, {
                  name: "Birch Wood",
                  texture_image: "log_birch.png",
                  game_id: "minecraft:log 2",
                  game_id_13: "minecraft:birch_log",
                  block_id: 17,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 27,
                  red: 207,
                  green: 206,
                  blue: 201,
                  h: 50,
                  s: 6,
                  l: 80
              }, {
                  name: "Birch Wood (Top)",
                  texture_image: "log_birch_top.png",
                  game_id: "minecraft:log 2",
                  game_id_13: "minecraft:birch_log",
                  block_id: 17,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 28,
                  red: 184,
                  green: 166,
                  blue: 122,
                  h: 43,
                  s: 30,
                  l: 60
              }, {
                  name: "Jungle Wood",
                  texture_image: "log_jungle.png",
                  game_id: "minecraft:log 3",
                  game_id_13: "minecraft:jungle_log",
                  block_id: 17,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 29,
                  red: 87,
                  green: 68,
                  blue: 27,
                  h: 41,
                  s: 53,
                  l: 22
              }, {
                  name: "Jungle Wood (Top)",
                  texture_image: "log_jungle_top.png",
                  game_id: "minecraft:log 3",
                  game_id_13: "minecraft:jungle_log",
                  block_id: 17,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 30,
                  red: 154,
                  green: 119,
                  blue: 73,
                  h: 34,
                  s: 36,
                  l: 45
              }, {
                  name: "Leaves",
                  texture_image: "leaves.png",
                  game_id: "minecraft:leaves",
                  game_id_13: "minecraft:oak_leaves",
                  block_id: 18,
                  data_id: 0,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 31,
                  red: 53,
                  green: 83,
                  blue: 19,
                  h: 88,
                  s: 63,
                  l: 20
              }, {
                  name: "Sponge",
                  texture_image: "sponge.png",
                  game_id: "minecraft:sponge",
                  game_id_13: "minecraft:sponge",
                  block_id: 19,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 32,
                  red: 195,
                  green: 196,
                  blue: 85,
                  h: 61,
                  s: 48,
                  l: 55
              }, {
                  name: "Lapis Lazuli Ore",
                  texture_image: "lapis_ore.png",
                  game_id: "minecraft:lapis_ore",
                  game_id_13: "minecraft:lapis_ore",
                  block_id: 21,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 33,
                  red: 102,
                  green: 112,
                  blue: 135,
                  h: 222,
                  s: 14,
                  l: 46
              }, {
                  name: "Lapis Lazuli Block",
                  texture_image: "lapis_block.png",
                  game_id: "minecraft:lapis_block",
                  game_id_13: "minecraft:lapis_block",
                  block_id: 22,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 34,
                  red: 39,
                  green: 67,
                  blue: 138,
                  h: 223,
                  s: 56,
                  l: 35
              }, {
                  name: "Sandstone",
                  texture_image: "sandstone_normal.png",
                  game_id: "minecraft:sandstone",
                  game_id_13: "minecraft:sandstone",
                  block_id: 24,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 35,
                  red: 217,
                  green: 210,
                  blue: 157,
                  h: 53,
                  s: 44,
                  l: 73
              }, {
                  name: "Chiseled Sandstone",
                  texture_image: "sandstone_carved.png",
                  game_id: "minecraft:sandstone 1",
                  game_id_13: "minecraft:chiseled_sandstone",
                  block_id: 24,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 36,
                  red: 216,
                  green: 208,
                  blue: 155,
                  h: 52,
                  s: 44,
                  l: 73
              }, {
                  name: "Smooth Sandstone",
                  texture_image: "sandstone_smooth.png",
                  game_id: "minecraft:sandstone 2",
                  game_id_13: "minecraft:cut_sandstone",
                  block_id: 24,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 37,
                  red: 220,
                  green: 212,
                  blue: 162,
                  h: 52,
                  s: 45,
                  l: 75
              }, {
                  name: "Note Block",
                  texture_image: "noteblock.png",
                  game_id: "minecraft:noteblock",
                  game_id_13: "minecraft:note_block",
                  block_id: 25,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 38,
                  red: 101,
                  green: 68,
                  blue: 51,
                  h: 20,
                  s: 33,
                  l: 30
              }, {
                  name: "White Wool",
                  texture_image: "wool_colored_white.png",
                  game_id: "minecraft:wool",
                  game_id_13: "minecraft:white_wool",
                  block_id: 35,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 39,
                  red: 234,
                  green: 236,
                  blue: 237,
                  h: 200,
                  s: 8,
                  l: 92
              }, {
                  name: "Orange Wool",
                  texture_image: "wool_colored_orange.png",
                  game_id: "minecraft:wool 1",
                  game_id_13: "minecraft:orange_wool",
                  block_id: 35,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 40,
                  red: 241,
                  green: 118,
                  blue: 20,
                  h: 27,
                  s: 89,
                  l: 51
              }, {
                  name: "Magenta Wool",
                  texture_image: "wool_colored_magenta.png",
                  game_id: "minecraft:wool 2",
                  game_id_13: "minecraft:magenta_wool",
                  block_id: 35,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 41,
                  red: 190,
                  green: 69,
                  blue: 180,
                  h: 305,
                  s: 48,
                  l: 51
              }, {
                  name: "Light Blue Wool",
                  texture_image: "wool_colored_light_blue.png",
                  game_id: "minecraft:wool 3",
                  game_id_13: "minecraft:light_blue_wool",
                  block_id: 35,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 42,
                  red: 58,
                  green: 175,
                  blue: 217,
                  h: 196,
                  s: 68,
                  l: 54
              }, {
                  name: "Yellow Wool",
                  texture_image: "wool_colored_yellow.png",
                  game_id: "minecraft:wool 4",
                  game_id_13: "minecraft:yellow_wool",
                  block_id: 35,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 43,
                  red: 249,
                  green: 198,
                  blue: 40,
                  h: 45,
                  s: 95,
                  l: 57
              }, {
                  name: "Lime Wool",
                  texture_image: "wool_colored_lime.png",
                  game_id: "minecraft:wool 5",
                  game_id_13: "minecraft:lime_wool",
                  block_id: 35,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 44,
                  red: 112,
                  green: 185,
                  blue: 26,
                  h: 88,
                  s: 75,
                  l: 41
              }, {
                  name: "Pink Wool",
                  texture_image: "wool_colored_pink.png",
                  game_id: "minecraft:wool 6",
                  game_id_13: "minecraft:pink_wool",
                  block_id: 35,
                  data_id: 6,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 45,
                  red: 238,
                  green: 141,
                  blue: 172,
                  h: 341,
                  s: 74,
                  l: 74
              }, {
                  name: "Gray Wool",
                  texture_image: "wool_colored_gray.png",
                  game_id: "minecraft:wool 7",
                  game_id_13: "minecraft:gray_wool",
                  block_id: 35,
                  data_id: 7,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 46,
                  red: 63,
                  green: 68,
                  blue: 72,
                  h: 207,
                  s: 7,
                  l: 26
              }, {
                  name: "Light Gray Wool",
                  texture_image: "wool_colored_silver.png",
                  game_id: "minecraft:wool 8",
                  game_id_13: "minecraft:light_gray_wool",
                  block_id: 35,
                  data_id: 8,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 47,
                  red: 142,
                  green: 142,
                  blue: 135,
                  h: 60,
                  s: 3,
                  l: 54
              }, {
                  name: "Cyan Wool",
                  texture_image: "wool_colored_cyan.png",
                  game_id: "minecraft:wool 9",
                  game_id_13: "minecraft:cyan_wool",
                  block_id: 35,
                  data_id: 9,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 48,
                  red: 21,
                  green: 138,
                  blue: 145,
                  h: 183,
                  s: 75,
                  l: 33
              }, {
                  name: "Purple Wool",
                  texture_image: "wool_colored_purple.png",
                  game_id: "minecraft:wool 10",
                  game_id_13: "minecraft:purple_wool",
                  block_id: 35,
                  data_id: 10,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 49,
                  red: 122,
                  green: 42,
                  blue: 173,
                  h: 277,
                  s: 61,
                  l: 42
              }, {
                  name: "Blue Wool",
                  texture_image: "wool_colored_blue.png",
                  game_id: "minecraft:wool 11",
                  game_id_13: "minecraft:blue_wool",
                  block_id: 35,
                  data_id: 11,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 50,
                  red: 53,
                  green: 57,
                  blue: 157,
                  h: 238,
                  s: 50,
                  l: 41
              }, {
                  name: "Brown Wool",
                  texture_image: "wool_colored_brown.png",
                  game_id: "minecraft:wool 12",
                  game_id_13: "minecraft:brown_wool",
                  block_id: 35,
                  data_id: 12,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 51,
                  red: 114,
                  green: 72,
                  blue: 41,
                  h: 25,
                  s: 47,
                  l: 30
              }, {
                  name: "Green Wool",
                  texture_image: "wool_colored_green.png",
                  game_id: "minecraft:wool 13",
                  game_id_13: "minecraft:green_wool",
                  block_id: 35,
                  data_id: 13,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 52,
                  red: 85,
                  green: 110,
                  blue: 28,
                  h: 78,
                  s: 59,
                  l: 27
              }, {
                  name: "Red Wool",
                  texture_image: "wool_colored_red.png",
                  game_id: "minecraft:wool 14",
                  game_id_13: "minecraft:red_wool",
                  block_id: 35,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 53,
                  red: 161,
                  green: 39,
                  blue: 35,
                  h: 2,
                  s: 64,
                  l: 38
              }, {
                  name: "Black Wool",
                  texture_image: "wool_colored_black.png",
                  game_id: "minecraft:wool 15",
                  game_id_13: "minecraft:black_wool",
                  block_id: 35,
                  data_id: 15,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 54,
                  red: 21,
                  green: 21,
                  blue: 26,
                  h: 240,
                  s: 11,
                  l: 9
              }, {
                  name: "Gold Block",
                  texture_image: "gold_block.png",
                  game_id: "minecraft:gold_block",
                  game_id_13: "minecraft:gold_block",
                  block_id: 41,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 55,
                  red: 249,
                  green: 236,
                  blue: 79,
                  h: 55,
                  s: 93,
                  l: 64
              }, {
                  name: "Iron Block",
                  texture_image: "iron_block.png",
                  game_id: "minecraft:iron_block",
                  game_id_13: "minecraft:iron_block",
                  block_id: 42,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 56,
                  red: 219,
                  green: 219,
                  blue: 219,
                  h: 0,
                  s: 0,
                  l: 86
              }, {
                  name: "Bricks",
                  texture_image: "brick.png",
                  game_id: "minecraft:brick_block",
                  game_id_13: "minecraft:bricks",
                  block_id: 45,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 57,
                  red: 147,
                  green: 100,
                  blue: 87,
                  h: 13,
                  s: 26,
                  l: 46
              }, {
                  name: "TNT",
                  texture_image: "tnt_side.png",
                  game_id: "minecraft:tnt",
                  game_id_13: "minecraft:tnt",
                  block_id: 46,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !0,
                  survival: !0,
                  version: 9,
                  id: 58,
                  red: 170,
                  green: 93,
                  blue: 71,
                  h: 13,
                  s: 41,
                  l: 47
              }, {
                  name: "Bookshelf",
                  texture_image: "bookshelf.png",
                  game_id: "minecraft:bookshelf",
                  game_id_13: "minecraft:bookshelf",
                  block_id: 47,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 59,
                  red: 108,
                  green: 88,
                  blue: 58,
                  h: 36,
                  s: 30,
                  l: 33
              }, {
                  name: "Moss Stone",
                  texture_image: "cobblestone_mossy.png",
                  game_id: "minecraft:mossy_cobblestone",
                  game_id_13: "minecraft:mossy_cobblestone",
                  block_id: 48,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 60,
                  red: 104,
                  green: 121,
                  blue: 104,
                  h: 120,
                  s: 8,
                  l: 44
              }, {
                  name: "Obsidian",
                  texture_image: "obsidian.png",
                  game_id: "minecraft:obsidian",
                  game_id_13: "minecraft:obsidian",
                  block_id: 49,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 61,
                  red: 20,
                  green: 18,
                  blue: 30,
                  h: 250,
                  s: 25,
                  l: 9
              }, {
                  name: "Diamond Ore",
                  texture_image: "diamond_ore.png",
                  game_id: "minecraft:diamond_ore",
                  game_id_13: "minecraft:diamond_ore",
                  block_id: 56,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 62,
                  red: 129,
                  green: 140,
                  blue: 143,
                  h: 193,
                  s: 6,
                  l: 53
              }, {
                  name: "Diamond Block",
                  texture_image: "diamond_block.png",
                  game_id: "minecraft:diamond_block",
                  game_id_13: "minecraft:diamond_block",
                  block_id: 57,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 63,
                  red: 98,
                  green: 219,
                  blue: 214,
                  h: 178,
                  s: 63,
                  l: 62
              }, {
                  name: "Crafting Table",
                  texture_image: "crafting_table_side.png",
                  game_id: "minecraft:crafting_table",
                  game_id_13: "minecraft:crafting_table",
                  block_id: 58,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 64,
                  red: 119,
                  green: 96,
                  blue: 60,
                  h: 37,
                  s: 33,
                  l: 35
              }, {
                  name: "Redstone Ore",
                  texture_image: "redstone_ore.png",
                  game_id: "minecraft:redstone_ore",
                  game_id_13: "minecraft:redstone_ore",
                  block_id: 73,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 65,
                  red: 133,
                  green: 107,
                  blue: 107,
                  h: 0,
                  s: 11,
                  l: 47
              }, {
                  name: "Snow",
                  texture_image: "snow.png",
                  game_id: "minecraft:snow",
                  game_id_13: "minecraft:snow_block",
                  block_id: 80,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 66,
                  red: 240,
                  green: 251,
                  blue: 251,
                  h: 180,
                  s: 58,
                  l: 96
              }, {
                  name: "Ice",
                  texture_image: "ice.png",
                  game_id: "minecraft:ice",
                  game_id_13: "minecraft:ice",
                  block_id: 79,
                  data_id: 0,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 67,
                  red: 125,
                  green: 173,
                  blue: 255,
                  h: 218,
                  s: 100,
                  l: 75
              }, {
                  name: "Clay",
                  texture_image: "clay.png",
                  game_id: "minecraft:clay",
                  game_id_13: "minecraft:clay",
                  block_id: 82,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 68,
                  red: 159,
                  green: 164,
                  blue: 177,
                  h: 223,
                  s: 10,
                  l: 66
              }, {
                  name: "Netherrack",
                  texture_image: "netherrack.png",
                  game_id: "minecraft:netherrack",
                  game_id_13: "minecraft:netherrack",
                  block_id: 87,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 69,
                  red: 111,
                  green: 54,
                  blue: 53,
                  h: 1,
                  s: 35,
                  l: 32
              }, {
                  name: "Soul Sand",
                  texture_image: "soul_sand.png",
                  game_id: "minecraft:soul_sand",
                  game_id_13: "minecraft:soul_sand",
                  block_id: 88,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 70,
                  red: 85,
                  green: 64,
                  blue: 52,
                  h: 22,
                  s: 24,
                  l: 27
              }, {
                  name: "Glow Stone",
                  texture_image: "glowstone.png",
                  game_id: "minecraft:glowstone",
                  game_id_13: "minecraft:glowstone",
                  block_id: 89,
                  data_id: 0,
                  luminance: !0,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 71,
                  red: 144,
                  green: 118,
                  blue: 70,
                  h: 39,
                  s: 35,
                  l: 42
              }, {
                  name: "White Stained Glass",
                  texture_image: "glass_white.png",
                  game_id: "minecraft:stained_glass",
                  game_id_13: "minecraft:white_stained_glass",
                  block_id: 95,
                  data_id: 0,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 72,
                  red: 255,
                  green: 255,
                  blue: 255,
                  h: 0,
                  s: 0,
                  l: 100
              }, {
                  name: "Orange Stained Glass",
                  texture_image: "glass_orange.png",
                  game_id: "minecraft:stained_glass 1",
                  game_id_13: "minecraft:orange_stained_glass",
                  block_id: 95,
                  data_id: 1,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 73,
                  red: 216,
                  green: 127,
                  blue: 51,
                  h: 28,
                  s: 68,
                  l: 52
              }, {
                  name: "Magenta Stained Glass",
                  texture_image: "glass_magenta.png",
                  game_id: "minecraft:stained_glass 2",
                  game_id_13: "minecraft:magenta_stained_glass",
                  block_id: 95,
                  data_id: 2,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 74,
                  red: 178,
                  green: 76,
                  blue: 216,
                  h: 284,
                  s: 64,
                  l: 57
              }, {
                  name: "Light Blue Stained Glass",
                  texture_image: "glass_light_blue.png",
                  game_id: "minecraft:stained_glass 3",
                  game_id_13: "minecraft:light_blue_stained_glass",
                  block_id: 95,
                  data_id: 3,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 75,
                  red: 102,
                  green: 153,
                  blue: 216,
                  h: 213,
                  s: 59,
                  l: 62
              }, {
                  name: "Yellow Stained Glass",
                  texture_image: "glass_yellow.png",
                  game_id: "minecraft:stained_glass 4",
                  game_id_13: "minecraft:yellow_stained_glass",
                  block_id: 95,
                  data_id: 4,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 76,
                  red: 229,
                  green: 229,
                  blue: 51,
                  h: 60,
                  s: 77,
                  l: 55
              }, {
                  name: "Lime Stained Glass",
                  texture_image: "glass_lime.png",
                  game_id: "minecraft:stained_glass 5",
                  game_id_13: "minecraft:lime_stained_glass",
                  block_id: 95,
                  data_id: 5,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 77,
                  red: 127,
                  green: 204,
                  blue: 25,
                  h: 86,
                  s: 78,
                  l: 45
              }, {
                  name: "Pink Stained Glass",
                  texture_image: "glass_pink.png",
                  game_id: "minecraft:stained_glass 6",
                  game_id_13: "minecraft:pink_stained_glass",
                  block_id: 95,
                  data_id: 6,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 78,
                  red: 242,
                  green: 127,
                  blue: 165,
                  h: 340,
                  s: 82,
                  l: 72
              }, {
                  name: "Gray Stained Glass",
                  texture_image: "glass_gray.png",
                  game_id: "minecraft:stained_glass 7",
                  game_id_13: "minecraft:gray_stained_glass",
                  block_id: 95,
                  data_id: 7,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 79,
                  red: 76,
                  green: 76,
                  blue: 76,
                  h: 0,
                  s: 0,
                  l: 30
              }, {
                  name: "Light Gray Stained Glass",
                  texture_image: "glass_silver.png",
                  game_id: "minecraft:stained_glass 8",
                  game_id_13: "minecraft:light_gray_stained_glass",
                  block_id: 95,
                  data_id: 8,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 80,
                  red: 153,
                  green: 153,
                  blue: 153,
                  h: 0,
                  s: 0,
                  l: 60
              }, {
                  name: "Cyan Stained Glass",
                  texture_image: "glass_cyan.png",
                  game_id: "minecraft:stained_glass 9",
                  game_id_13: "minecraft:cyan_stained_glass",
                  block_id: 95,
                  data_id: 9,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 81,
                  red: 76,
                  green: 127,
                  blue: 153,
                  h: 200,
                  s: 34,
                  l: 45
              }, {
                  name: "Purple Stained Glass",
                  texture_image: "glass_purple.png",
                  game_id: "minecraft:stained_glass 10",
                  game_id_13: "minecraft:purple_stained_glass",
                  block_id: 95,
                  data_id: 10,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 82,
                  red: 127,
                  green: 63,
                  blue: 178,
                  h: 273,
                  s: 48,
                  l: 47
              }, {
                  name: "Blue Stained Glass",
                  texture_image: "glass_blue.png",
                  game_id: "minecraft:stained_glass 11",
                  game_id_13: "minecraft:blue_stained_glass",
                  block_id: 95,
                  data_id: 11,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 83,
                  red: 51,
                  green: 76,
                  blue: 178,
                  h: 228,
                  s: 55,
                  l: 45
              }, {
                  name: "Brown Stained Glass",
                  texture_image: "glass_brown.png",
                  game_id: "minecraft:stained_glass 12",
                  game_id_13: "minecraft:brown_stained_glass",
                  block_id: 95,
                  data_id: 12,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 84,
                  red: 102,
                  green: 76,
                  blue: 51,
                  h: 29,
                  s: 33,
                  l: 30
              }, {
                  name: "Green Stained Glass",
                  texture_image: "glass_green.png",
                  game_id: "minecraft:stained_glass 13",
                  game_id_13: "minecraft:green_stained_glass",
                  block_id: 95,
                  data_id: 13,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 85,
                  red: 102,
                  green: 127,
                  blue: 51,
                  h: 80,
                  s: 43,
                  l: 35
              }, {
                  name: "Red Stained Glass",
                  texture_image: "glass_red.png",
                  game_id: "minecraft:stained_glass 14",
                  game_id_13: "minecraft:red_stained_glass",
                  block_id: 95,
                  data_id: 14,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 86,
                  red: 153,
                  green: 51,
                  blue: 51,
                  h: 0,
                  s: 50,
                  l: 40
              }, {
                  name: "Black Stained Glass",
                  texture_image: "glass_black.png",
                  game_id: "minecraft:stained_glass 15",
                  game_id_13: "minecraft:black_stained_glass",
                  block_id: 95,
                  data_id: 15,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 87,
                  red: 25,
                  green: 25,
                  blue: 25,
                  h: 0,
                  s: 0,
                  l: 10
              }, {
                  name: "Stonebrick",
                  texture_image: "stonebrick.png",
                  game_id: "minecraft:stonebrick",
                  game_id_13: "minecraft:stone_bricks",
                  block_id: 98,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 88,
                  red: 122,
                  green: 122,
                  blue: 122,
                  h: 0,
                  s: 0,
                  l: 48
              }, {
                  name: "Mossy Stonebrick",
                  texture_image: "stonebrick_mossy.png",
                  game_id: "minecraft:stonebrick 1",
                  game_id_13: "minecraft:mossy_stone_bricks",
                  block_id: 98,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 89,
                  red: 115,
                  green: 119,
                  blue: 106,
                  h: 78,
                  s: 6,
                  l: 44
              }, {
                  name: "Cracked Stonebrick",
                  texture_image: "stonebrick_cracked.png",
                  game_id: "minecraft:stonebrick 2",
                  game_id_13: "minecraft:cracked_stone_bricks",
                  block_id: 98,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 90,
                  red: 119,
                  green: 119,
                  blue: 119,
                  h: 0,
                  s: 0,
                  l: 47
              }, {
                  name: "Chiseled Stonebrick",
                  texture_image: "stonebrick_carved.png",
                  game_id: "minecraft:stonebrick 3",
                  game_id_13: "minecraft:chiseled_stone_bricks",
                  block_id: 98,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 91,
                  red: 119,
                  green: 119,
                  blue: 119,
                  h: 0,
                  s: 0,
                  l: 47
              }, {
                  name: "Brown Mushroom Block",
                  texture_image: "mushroom_block_skin_brown.png",
                  game_id: "minecraft:brown_mushroom_block",
                  game_id_13: "minecraft:brown_mushroom_block",
                  block_id: 99,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 92,
                  red: 142,
                  green: 107,
                  blue: 83,
                  h: 24,
                  s: 26,
                  l: 44
              }, {
                  name: "Red Mushroom Block",
                  texture_image: "mushroom_block_skin_red.png",
                  game_id: "minecraft:red_mushroom_block",
                  game_id_13: "minecraft:red_mushroom_block",
                  block_id: 100,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 93,
                  red: 183,
                  green: 38,
                  blue: 36,
                  h: 1,
                  s: 67,
                  l: 43
              }, {
                  name: "Melon Block",
                  texture_image: "melon_side.png",
                  game_id: "minecraft:melon_block",
                  game_id_13: "minecraft:melon",
                  block_id: 103,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 94,
                  red: 141,
                  green: 146,
                  blue: 36,
                  h: 63,
                  s: 60,
                  l: 36
              }, {
                  name: "Nether Brick",
                  texture_image: "nether_brick.png",
                  game_id: "minecraft:nether_brick",
                  game_id_13: "minecraft:nether_bricks",
                  block_id: 112,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 95,
                  red: 45,
                  green: 23,
                  blue: 27,
                  h: 349,
                  s: 32,
                  l: 13
              }, {
                  name: "End Stone",
                  texture_image: "end_stone.png",
                  game_id: "minecraft:end_stone",
                  game_id_13: "minecraft:end_stone",
                  block_id: 121,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 96,
                  red: 221,
                  green: 224,
                  blue: 165,
                  h: 63,
                  s: 49,
                  l: 76
              }, {
                  name: "Redstone Lamp",
                  texture_image: "redstone_lamp_off.png",
                  game_id: "minecraft:redstone_lamp",
                  game_id_13: "minecraft:redstone_lamp",
                  block_id: 123,
                  data_id: 0,
                  luminance: !0,
                  transparency: !1,
                  falling: !1,
                  redstone: !0,
                  survival: !0,
                  version: 9,
                  id: 97,
                  red: 70,
                  green: 43,
                  blue: 27,
                  h: 22,
                  s: 44,
                  l: 19
              }, {
                  name: "Emerald Ore",
                  texture_image: "emerald_ore.png",
                  game_id: "minecraft:emerald_ore",
                  game_id_13: "minecraft:emerald_ore",
                  block_id: 129,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 98,
                  red: 110,
                  green: 129,
                  blue: 116,
                  h: 139,
                  s: 8,
                  l: 47
              }, {
                  name: "Emerald Block",
                  texture_image: "emerald_block.png",
                  game_id: "minecraft:emerald_block",
                  game_id_13: "minecraft:emerald_block",
                  block_id: 133,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 99,
                  red: 81,
                  green: 217,
                  blue: 117,
                  h: 136,
                  s: 64,
                  l: 58
              }, {
                  name: "Redstone Block",
                  texture_image: "redstone_block.png",
                  game_id: "minecraft:redstone_block",
                  game_id_13: "minecraft:redstone_block",
                  block_id: 152,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !0,
                  survival: !0,
                  version: 9,
                  id: 100,
                  red: 171,
                  green: 28,
                  blue: 9,
                  h: 7,
                  s: 90,
                  l: 35
              }, {
                  name: "Nether Quartz Ore",
                  texture_image: "quartz_ore.png",
                  game_id: "minecraft:quartz_ore",
                  game_id_13: "minecraft:nether_quartz_ore",
                  block_id: 153,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 101,
                  red: 125,
                  green: 85,
                  blue: 80,
                  h: 7,
                  s: 22,
                  l: 40
              }, {
                  name: "Quartz Block",
                  texture_image: "quartz_block_side.png",
                  game_id: "minecraft:quartz_block",
                  game_id_13: "minecraft:quartz_block",
                  block_id: 155,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 102,
                  red: 236,
                  green: 233,
                  blue: 226,
                  h: 42,
                  s: 21,
                  l: 91
              }, {
                  name: "Chiseled Quartz Block",
                  texture_image: "quartz_block_chiseled.png",
                  game_id: "minecraft:quartz_block 1",
                  game_id_13: "minecraft:chiseled_quartz_block",
                  block_id: 155,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 103,
                  red: 232,
                  green: 228,
                  blue: 220,
                  h: 40,
                  s: 21,
                  l: 89
              }, {
                  name: "Pillar Quartz Block",
                  texture_image: "quartz_block_lines.png",
                  game_id: "minecraft:quartz_block 2",
                  game_id_13: "minecraft:quartz_pillar",
                  block_id: 155,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 104,
                  red: 232,
                  green: 228,
                  blue: 220,
                  h: 40,
                  s: 21,
                  l: 89
              }, {
                  name: "White Hardened Clay",
                  texture_image: "hardened_clay_stained_white.png",
                  game_id: "minecraft:stained_hardened_clay",
                  game_id_13: "minecraft:white_terracotta",
                  block_id: 159,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 105,
                  red: 210,
                  green: 178,
                  blue: 161,
                  h: 21,
                  s: 35,
                  l: 73
              }, {
                  name: "Orange Hardened Clay",
                  texture_image: "hardened_clay_stained_orange.png",
                  game_id: "minecraft:stained_hardened_clay 1",
                  game_id_13: "minecraft:orange_terracotta",
                  block_id: 159,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 106,
                  red: 162,
                  green: 84,
                  blue: 38,
                  h: 22,
                  s: 62,
                  l: 39
              }, {
                  name: "Magenta Hardened Clay",
                  texture_image: "hardened_clay_stained_magenta.png",
                  game_id: "minecraft:stained_hardened_clay 2",
                  game_id_13: "minecraft:magenta_terracotta",
                  block_id: 159,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 107,
                  red: 150,
                  green: 88,
                  blue: 109,
                  h: 340,
                  s: 26,
                  l: 47
              }, {
                  name: "Light Blue Hardened Clay",
                  texture_image: "hardened_clay_stained_light_blue.png",
                  game_id: "minecraft:stained_hardened_clay 3",
                  game_id_13: "minecraft:light_blue_terracotta",
                  block_id: 159,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 108,
                  red: 113,
                  green: 109,
                  blue: 138,
                  h: 248,
                  s: 12,
                  l: 48
              }, {
                  name: "Yellow Hardened Clay",
                  texture_image: "hardened_clay_stained_yellow.png",
                  game_id: "minecraft:stained_hardened_clay 4",
                  game_id_13: "minecraft:yellow_terracotta",
                  block_id: 159,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 109,
                  red: 186,
                  green: 133,
                  blue: 35,
                  h: 39,
                  s: 68,
                  l: 43
              }, {
                  name: "Lime Hardened Clay",
                  texture_image: "hardened_clay_stained_lime.png",
                  game_id: "minecraft:stained_hardened_clay 5",
                  game_id_13: "minecraft:lime_terracotta",
                  block_id: 159,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 110,
                  red: 104,
                  green: 118,
                  blue: 53,
                  h: 73,
                  s: 38,
                  l: 34
              }, {
                  name: "Pink Hardened Clay",
                  texture_image: "hardened_clay_stained_pink.png",
                  game_id: "minecraft:stained_hardened_clay 6",
                  game_id_13: "minecraft:pink_terracotta",
                  block_id: 159,
                  data_id: 6,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 111,
                  red: 162,
                  green: 78,
                  blue: 79,
                  h: 359,
                  s: 35,
                  l: 47
              }, {
                  name: "Gray Hardened Clay",
                  texture_image: "hardened_clay_stained_gray.png",
                  game_id: "minecraft:stained_hardened_clay 7",
                  game_id_13: "minecraft:gray_terracotta",
                  block_id: 159,
                  data_id: 7,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 112,
                  red: 58,
                  green: 42,
                  blue: 36,
                  h: 16,
                  s: 23,
                  l: 18
              }, {
                  name: "Light Gray Hardened Clay",
                  texture_image: "hardened_clay_stained_silver.png",
                  game_id: "minecraft:stained_hardened_clay 8",
                  game_id_13: "minecraft:light_gray_terracotta",
                  block_id: 159,
                  data_id: 8,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 113,
                  red: 135,
                  green: 107,
                  blue: 98,
                  h: 15,
                  s: 16,
                  l: 46
              }, {
                  name: "Cyan Hardened Clay",
                  texture_image: "hardened_clay_stained_cyan.png",
                  game_id: "minecraft:stained_hardened_clay 9",
                  game_id_13: "minecraft:cyan_terracotta",
                  block_id: 159,
                  data_id: 9,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 114,
                  red: 87,
                  green: 91,
                  blue: 91,
                  h: 180,
                  s: 2,
                  l: 35
              }, {
                  name: "Purple Hardened Clay",
                  texture_image: "hardened_clay_stained_purple.png",
                  game_id: "minecraft:stained_hardened_clay 10",
                  game_id_13: "minecraft:purple_terracotta",
                  block_id: 159,
                  data_id: 10,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 115,
                  red: 118,
                  green: 70,
                  blue: 86,
                  h: 340,
                  s: 26,
                  l: 37
              }, {
                  name: "Blue Hardened Clay",
                  texture_image: "hardened_clay_stained_blue.png",
                  game_id: "minecraft:stained_hardened_clay 11",
                  game_id_13: "minecraft:blue_terracotta",
                  block_id: 159,
                  data_id: 11,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 116,
                  red: 74,
                  green: 60,
                  blue: 91,
                  h: 267,
                  s: 21,
                  l: 30
              }, {
                  name: "Brown Hardened Clay",
                  texture_image: "hardened_clay_stained_brown.png",
                  game_id: "minecraft:stained_hardened_clay 12",
                  game_id_13: "minecraft:brown_terracotta",
                  block_id: 159,
                  data_id: 12,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 117,
                  red: 77,
                  green: 51,
                  blue: 36,
                  h: 22,
                  s: 36,
                  l: 22
              }, {
                  name: "Green Hardened Clay",
                  texture_image: "hardened_clay_stained_green.png",
                  game_id: "minecraft:stained_hardened_clay 13",
                  game_id_13: "minecraft:green_terracotta",
                  block_id: 159,
                  data_id: 13,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 118,
                  red: 76,
                  green: 83,
                  blue: 42,
                  h: 70,
                  s: 33,
                  l: 25
              }, {
                  name: "Red Hardened Clay",
                  texture_image: "hardened_clay_stained_red.png",
                  game_id: "minecraft:stained_hardened_clay 14",
                  game_id_13: "minecraft:red_terracotta",
                  block_id: 159,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 119,
                  red: 143,
                  green: 61,
                  blue: 47,
                  h: 9,
                  s: 51,
                  l: 37
              }, {
                  name: "Black Hardened Clay",
                  texture_image: "hardened_clay_stained_black.png",
                  game_id: "minecraft:stained_hardened_clay 15",
                  game_id_13: "minecraft:black_terracotta",
                  block_id: 159,
                  data_id: 15,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 120,
                  red: 37,
                  green: 23,
                  blue: 16,
                  h: 20,
                  s: 40,
                  l: 10
              }, {
                  name: "Acacia Wood",
                  texture_image: "log_acacia.png",
                  game_id: "minecraft:log2",
                  game_id_13: "minecraft:acacia_log",
                  block_id: 162,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 121,
                  red: 105,
                  green: 99,
                  blue: 89,
                  h: 38,
                  s: 8,
                  l: 38
              }, {
                  name: "Acacia Wood (Top)",
                  texture_image: "log_acacia_top.png",
                  game_id: "minecraft:log2 0",
                  game_id_13: "minecraft:acacia_log",
                  block_id: 162,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 122,
                  red: 154,
                  green: 91,
                  blue: 64,
                  h: 18,
                  s: 41,
                  l: 43
              }, {
                  name: "Dark Oak Wood",
                  texture_image: "log_big_oak.png",
                  game_id: "minecraft:log2 1",
                  game_id_13: "minecraft:dark_oak_log",
                  block_id: 162,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 123,
                  red: 52,
                  green: 41,
                  blue: 23,
                  h: 37,
                  s: 39,
                  l: 15
              }, {
                  name: "Dark Oak Wood (Top)",
                  texture_image: "log_big_oak_top.png",
                  game_id: "minecraft:log2 1",
                  game_id_13: "minecraft:dark_oak_log",
                  block_id: 162,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  axis: !0,
                  id: 124,
                  red: 78,
                  green: 62,
                  blue: 41,
                  h: 34,
                  s: 31,
                  l: 23
              }, {
                  name: "Slime Block",
                  texture_image: "slime.png",
                  game_id: "minecraft:slime",
                  game_id_13: "minecraft:slime_block",
                  block_id: 165,
                  data_id: 0,
                  luminance: !1,
                  transparency: !0,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 125,
                  red: 121,
                  green: 200,
                  blue: 101,
                  h: 108,
                  s: 47,
                  l: 59
              }, {
                  name: "Prismarine",
                  texture_image: "prismarine.png",
                  game_id: "minecraft:prismarine",
                  game_id_13: "minecraft:prismarine",
                  block_id: 168,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 126,
                  red: 107,
                  green: 170,
                  blue: 151,
                  h: 162,
                  s: 27,
                  l: 54
              }, {
                  name: "Prismarine Bricks",
                  texture_image: "prismarine_bricks.png",
                  game_id: "minecraft:prismarine 1",
                  game_id_13: "minecraft:prismarine_bricks",
                  block_id: 168,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 127,
                  red: 100,
                  green: 160,
                  blue: 143,
                  h: 163,
                  s: 24,
                  l: 51
              }, {
                  name: "Dark Prismarine",
                  texture_image: "prismarine_dark.png",
                  game_id: "minecraft:prismarine 2",
                  game_id_13: "minecraft:dark_prismarine",
                  block_id: 168,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 128,
                  red: 60,
                  green: 88,
                  blue: 75,
                  h: 152,
                  s: 19,
                  l: 29
              }, {
                  name: "Sea Lantern",
                  texture_image: "sea_lantern.png",
                  game_id: "minecraft:sea_lantern",
                  game_id_13: "minecraft:sea_lantern",
                  block_id: 169,
                  data_id: 0,
                  luminance: !0,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 129,
                  red: 172,
                  green: 200,
                  blue: 191,
                  h: 161,
                  s: 20,
                  l: 73
              }, {
                  name: "Hay Bale",
                  texture_image: "hay_block_side.png",
                  game_id: "minecraft:hay_block",
                  game_id_13: "minecraft:hay_block",
                  block_id: 170,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 130,
                  red: 158,
                  green: 117,
                  blue: 18,
                  h: 42,
                  s: 80,
                  l: 35
              }, {
                  name: "Hardened Clay",
                  texture_image: "hardened_clay.png",
                  game_id: "minecraft:hardened_clay",
                  game_id_13: "minecraft:terracotta",
                  block_id: 172,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 131,
                  red: 151,
                  green: 93,
                  blue: 67,
                  h: 19,
                  s: 39,
                  l: 43
              }, {
                  name: "Block of Coal",
                  texture_image: "coal_block.png",
                  game_id: "minecraft:coal_block",
                  game_id_13: "minecraft:coal_block",
                  block_id: 173,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 132,
                  red: 19,
                  green: 19,
                  blue: 19,
                  h: 0,
                  s: 0,
                  l: 7
              }, {
                  name: "Packed Ice",
                  texture_image: "packed_ice.png",
                  game_id: "minecraft:packed_ice",
                  game_id_13: "minecraft:packed_ice",
                  block_id: 174,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 133,
                  red: 165,
                  green: 195,
                  blue: 245,
                  h: 218,
                  s: 80,
                  l: 80
              }, {
                  name: "Red Sandstone",
                  texture_image: "red_sandstone_normal.png",
                  game_id: "minecraft:red_sandstone",
                  game_id_13: "minecraft:red_sandstone",
                  block_id: 179,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 134,
                  red: 166,
                  green: 85,
                  blue: 30,
                  h: 24,
                  s: 69,
                  l: 38
              }, {
                  name: "Chiseled Red Sandstone",
                  texture_image: "red_sandstone_carved.png",
                  game_id: "minecraft:red_sandstone 1",
                  game_id_13: "minecraft:chiseled_red_sandstone",
                  block_id: 179,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 135,
                  red: 162,
                  green: 83,
                  blue: 28,
                  h: 25,
                  s: 71,
                  l: 37
              }, {
                  name: "Smooth Red Sandstone",
                  texture_image: "red_sandstone_smooth.png",
                  game_id: "minecraft:red_sandstone 2",
                  game_id_13: "minecraft:cut_red_sandstone",
                  block_id: 179,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 9,
                  id: 136,
                  red: 168,
                  green: 86,
                  blue: 31,
                  h: 24,
                  s: 69,
                  l: 39
              }, {
                  name: "Purpur Block",
                  texture_image: "purpur_block.png",
                  game_id: "minecraft:purpur_block",
                  game_id_13: "minecraft:purpur_block",
                  block_id: 201,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 137,
                  red: 166,
                  green: 122,
                  blue: 166,
                  h: 300,
                  s: 20,
                  l: 56
              }, {
                  name: "Purpur Pillar",
                  texture_image: "purpur_pillar.png",
                  game_id: "minecraft:purpur_pillar",
                  game_id_13: "minecraft:purpur_pillar",
                  block_id: 202,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 138,
                  red: 170,
                  green: 126,
                  blue: 170,
                  h: 300,
                  s: 21,
                  l: 58
              }, {
                  name: "End Stone Bricks",
                  texture_image: "end_bricks.png",
                  game_id: "minecraft:end_bricks",
                  game_id_13: "minecraft:end_stone_bricks",
                  block_id: 206,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !1,
                  version: 9,
                  id: 139,
                  red: 226,
                  green: 231,
                  blue: 171,
                  h: 65,
                  s: 56,
                  l: 79
              }, {
                  name: "Magma Block",
                  texture_image: "magma.png",
                  game_id: "minecraft:magma",
                  game_id_13: "minecraft:magma_block",
                  block_id: 213,
                  data_id: 0,
                  luminance: !0,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 10,
                  id: 140,
                  red: 135,
                  green: 65,
                  blue: 25,
                  h: 22,
                  s: 69,
                  l: 31
              }, {
                  name: "Nether Wart Block",
                  texture_image: "nether_wart_block.png",
                  game_id: "minecraft:nether_wart_block",
                  game_id_13: "minecraft:nether_wart_block",
                  block_id: 214,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 10,
                  id: 141,
                  red: 117,
                  green: 6,
                  blue: 7,
                  h: 359,
                  s: 90,
                  l: 24
              }, {
                  name: "Red Nether Brick",
                  texture_image: "red_nether_brick.png",
                  game_id: "minecraft:red_nether_brick",
                  game_id_13: "minecraft:red_nether_bricks",
                  block_id: 215,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 10,
                  id: 142,
                  red: 68,
                  green: 4,
                  blue: 7,
                  h: 357,
                  s: 89,
                  l: 14
              }, {
                  name: "Bone Block",
                  texture_image: "bone_block_side.png",
                  game_id: "minecraft:bone_block",
                  game_id_13: "minecraft:bone_block",
                  block_id: 216,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 10,
                  id: 143,
                  red: 225,
                  green: 221,
                  blue: 201,
                  h: 50,
                  s: 29,
                  l: 84
              }, {
                  name: "White Glazed Terracotta",
                  texture_image: "glazed_terracotta_white.png",
                  game_id: "minecraft:white_glazed_terracotta",
                  game_id_13: "minecraft:white_glazed_terracotta",
                  block_id: 235,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 144,
                  red: 189,
                  green: 212,
                  blue: 203,
                  h: 157,
                  s: 21,
                  l: 79
              }, {
                  name: "Orange Glazed Terracotta",
                  texture_image: "glazed_terracotta_orange.png",
                  game_id: "minecraft:orange_glazed_terracotta",
                  game_id_13: "minecraft:orange_glazed_terracotta",
                  block_id: 236,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 145,
                  red: 155,
                  green: 147,
                  blue: 92,
                  h: 52,
                  s: 26,
                  l: 48
              }, {
                  name: "Magenta Glazed Terracotta",
                  texture_image: "glazed_terracotta_magenta.png",
                  game_id: "minecraft:magenta_glazed_terracotta",
                  game_id_13: "minecraft:magenta_glazed_terracotta",
                  block_id: 237,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 146,
                  red: 208,
                  green: 100,
                  blue: 192,
                  h: 309,
                  s: 53,
                  l: 60
              }, {
                  name: "Light Blue Glazed Terracotta",
                  texture_image: "glazed_terracotta_light_blue.png",
                  game_id: "minecraft:light_blue_glazed_terracotta",
                  game_id_13: "minecraft:light_blue_glazed_terracotta",
                  block_id: 238,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 147,
                  red: 95,
                  green: 165,
                  blue: 209,
                  h: 203,
                  s: 55,
                  l: 60
              }, {
                  name: "Yellow Glazed Terracotta",
                  texture_image: "glazed_terracotta_yellow.png",
                  game_id: "minecraft:yellow_glazed_terracotta",
                  game_id_13: "minecraft:yellow_glazed_terracotta",
                  block_id: 239,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 148,
                  red: 234,
                  green: 192,
                  blue: 89,
                  h: 43,
                  s: 78,
                  l: 63
              }, {
                  name: "Lime Glazed Terracotta",
                  texture_image: "glazed_terracotta_lime.png",
                  game_id: "minecraft:lime_glazed_terracotta",
                  game_id_13: "minecraft:lime_glazed_terracotta",
                  block_id: 240,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 149,
                  red: 163,
                  green: 198,
                  blue: 55,
                  h: 75,
                  s: 57,
                  l: 50
              }, {
                  name: "Pink Glazed Terracotta",
                  texture_image: "glazed_terracotta_pink.png",
                  game_id: "minecraft:pink_glazed_terracotta",
                  game_id_13: "minecraft:pink_glazed_terracotta",
                  block_id: 241,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 150,
                  red: 235,
                  green: 155,
                  blue: 182,
                  h: 340,
                  s: 67,
                  l: 76
              }, {
                  name: "Gray Glazed Terracotta",
                  texture_image: "glazed_terracotta_gray.png",
                  game_id: "minecraft:gray_glazed_terracotta",
                  game_id_13: "minecraft:gray_glazed_terracotta",
                  block_id: 242,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 151,
                  red: 83,
                  green: 90,
                  blue: 94,
                  h: 202,
                  s: 6,
                  l: 35
              }, {
                  name: "Light Gray Glazed Terracotta",
                  texture_image: "glazed_terracotta_silver.png",
                  game_id: "minecraft:silver_glazed_terracotta",
                  game_id_13: "minecraft:light_gray_glazed_terracotta",
                  block_id: 243,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 152,
                  red: 144,
                  green: 166,
                  blue: 168,
                  h: 185,
                  s: 12,
                  l: 61
              }, {
                  name: "Cyan Glazed Terracotta",
                  texture_image: "glazed_terracotta_cyan.png",
                  game_id: "minecraft:cyan_glazed_terracotta",
                  game_id_13: "minecraft:cyan_glazed_terracotta",
                  block_id: 244,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 153,
                  red: 52,
                  green: 119,
                  blue: 125,
                  h: 185,
                  s: 41,
                  l: 35
              }, {
                  name: "Purple Glazed Terracotta",
                  texture_image: "glazed_terracotta_purple.png",
                  game_id: "minecraft:purple_glazed_terracotta",
                  game_id_13: "minecraft:purple_glazed_terracotta",
                  block_id: 245,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 154,
                  red: 110,
                  green: 48,
                  blue: 152,
                  h: 276,
                  s: 52,
                  l: 39
              }, {
                  name: "Blue Glazed Terracotta",
                  texture_image: "glazed_terracotta_blue.png",
                  game_id: "minecraft:blue_glazed_terracotta",
                  game_id_13: "minecraft:blue_glazed_terracotta",
                  block_id: 246,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 155,
                  red: 47,
                  green: 65,
                  blue: 139,
                  h: 228,
                  s: 49,
                  l: 36
              }, {
                  name: "Brown Glazed Terracotta",
                  texture_image: "glazed_terracotta_brown.png",
                  game_id: "minecraft:brown_glazed_terracotta",
                  game_id_13: "minecraft:brown_glazed_terracotta",
                  block_id: 247,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 156,
                  red: 120,
                  green: 106,
                  blue: 86,
                  h: 35,
                  s: 17,
                  l: 40
              }, {
                  name: "Green Glazed Terracotta",
                  texture_image: "glazed_terracotta_green.png",
                  game_id: "minecraft:green_glazed_terracotta",
                  game_id_13: "minecraft:green_glazed_terracotta",
                  block_id: 248,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 157,
                  red: 117,
                  green: 142,
                  blue: 67,
                  h: 80,
                  s: 36,
                  l: 41
              }, {
                  name: "Red Glazed Terracotta",
                  texture_image: "glazed_terracotta_red.png",
                  game_id: "minecraft:red_glazed_terracotta",
                  game_id_13: "minecraft:red_glazed_terracotta",
                  block_id: 249,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 158,
                  red: 182,
                  green: 60,
                  blue: 53,
                  h: 3,
                  s: 55,
                  l: 46
              }, {
                  name: "Black Glazed Terracotta",
                  texture_image: "glazed_terracotta_black.png",
                  game_id: "minecraft:black_glazed_terracotta",
                  game_id_13: "minecraft:black_glazed_terracotta",
                  block_id: 250,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 159,
                  red: 68,
                  green: 30,
                  blue: 32,
                  h: 357,
                  s: 39,
                  l: 19
              }, {
                  name: "White Concrete",
                  texture_image: "concrete_white.png",
                  game_id: "minecraft:concrete",
                  game_id_13: "minecraft:white_concrete",
                  block_id: 251,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 160,
                  red: 207,
                  green: 213,
                  blue: 214,
                  h: 189,
                  s: 8,
                  l: 83
              }, {
                  name: "Orange Concrete",
                  texture_image: "concrete_orange.png",
                  game_id: "minecraft:concrete 1",
                  game_id_13: "minecraft:orange_concrete",
                  block_id: 251,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 161,
                  red: 224,
                  green: 97,
                  blue: 1,
                  h: 26,
                  s: 99,
                  l: 44
              }, {
                  name: "Magenta Concrete",
                  texture_image: "concrete_magenta.png",
                  game_id: "minecraft:concrete 2",
                  game_id_13: "minecraft:magenta_concrete",
                  block_id: 251,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 162,
                  red: 169,
                  green: 48,
                  blue: 159,
                  h: 305,
                  s: 56,
                  l: 43
              }, {
                  name: "Light Blue Concrete",
                  texture_image: "concrete_light_blue.png",
                  game_id: "minecraft:concrete 3",
                  game_id_13: "minecraft:light_blue_concrete",
                  block_id: 251,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 163,
                  red: 36,
                  green: 137,
                  blue: 199,
                  h: 203,
                  s: 69,
                  l: 46
              }, {
                  name: "Yellow Concrete",
                  texture_image: "concrete_yellow.png",
                  game_id: "minecraft:concrete 4",
                  game_id_13: "minecraft:yellow_concrete",
                  block_id: 251,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 164,
                  red: 241,
                  green: 175,
                  blue: 21,
                  h: 42,
                  s: 89,
                  l: 51
              }, {
                  name: "Lime Concrete",
                  texture_image: "concrete_lime.png",
                  game_id: "minecraft:concrete 5",
                  game_id_13: "minecraft:lime_concrete",
                  block_id: 251,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 165,
                  red: 94,
                  green: 169,
                  blue: 25,
                  h: 91,
                  s: 74,
                  l: 38
              }, {
                  name: "Pink Concrete",
                  texture_image: "concrete_pink.png",
                  game_id: "minecraft:concrete 6",
                  game_id_13: "minecraft:pink_concrete",
                  block_id: 251,
                  data_id: 6,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 166,
                  red: 214,
                  green: 101,
                  blue: 143,
                  h: 338,
                  s: 58,
                  l: 62
              }, {
                  name: "Gray Concrete",
                  texture_image: "concrete_gray.png",
                  game_id: "minecraft:concrete 7",
                  game_id_13: "minecraft:gray_concrete",
                  block_id: 251,
                  data_id: 7,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 167,
                  red: 55,
                  green: 58,
                  blue: 62,
                  h: 214,
                  s: 6,
                  l: 23
              }, {
                  name: "Light Gray Concrete",
                  texture_image: "concrete_silver.png",
                  game_id: "minecraft:concrete 8",
                  game_id_13: "minecraft:light_gray_concrete",
                  block_id: 251,
                  data_id: 8,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 168,
                  red: 125,
                  green: 125,
                  blue: 115,
                  h: 60,
                  s: 4,
                  l: 47
              }, {
                  name: "Cyan Concrete",
                  texture_image: "concrete_cyan.png",
                  game_id: "minecraft:concrete 9",
                  game_id_13: "minecraft:cyan_concrete",
                  block_id: 251,
                  data_id: 9,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 169,
                  red: 21,
                  green: 119,
                  blue: 136,
                  h: 189,
                  s: 73,
                  l: 31
              }, {
                  name: "Purple Concrete",
                  texture_image: "concrete_purple.png",
                  game_id: "minecraft:concrete 10",
                  game_id_13: "minecraft:purple_concrete",
                  block_id: 251,
                  data_id: 10,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 170,
                  red: 100,
                  green: 32,
                  blue: 156,
                  h: 273,
                  s: 66,
                  l: 37
              }, {
                  name: "Blue Concrete",
                  texture_image: "concrete_blue.png",
                  game_id: "minecraft:concrete 11",
                  game_id_13: "minecraft:blue_concrete",
                  block_id: 251,
                  data_id: 11,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 171,
                  red: 45,
                  green: 47,
                  blue: 143,
                  h: 239,
                  s: 52,
                  l: 37
              }, {
                  name: "Brown Concrete",
                  texture_image: "concrete_brown.png",
                  game_id: "minecraft:concrete 12",
                  game_id_13: "minecraft:brown_concrete",
                  block_id: 251,
                  data_id: 12,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 172,
                  red: 96,
                  green: 60,
                  blue: 32,
                  h: 26,
                  s: 50,
                  l: 25
              }, {
                  name: "Green Concrete",
                  texture_image: "concrete_green.png",
                  game_id: "minecraft:concrete 13",
                  game_id_13: "minecraft:green_concrete",
                  block_id: 251,
                  data_id: 13,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 173,
                  red: 73,
                  green: 91,
                  blue: 36,
                  h: 80,
                  s: 43,
                  l: 25
              }, {
                  name: "Red Concrete",
                  texture_image: "concrete_red.png",
                  game_id: "minecraft:concrete 14",
                  game_id_13: "minecraft:red_concrete",
                  block_id: 251,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 174,
                  red: 142,
                  green: 33,
                  blue: 33,
                  h: 0,
                  s: 62,
                  l: 34
              }, {
                  name: "Black Concrete",
                  texture_image: "concrete_black.png",
                  game_id: "minecraft:concrete 15",
                  game_id_13: "minecraft:black_concrete",
                  block_id: 251,
                  data_id: 15,
                  luminance: !1,
                  transparency: !1,
                  falling: !1,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 175,
                  red: 8,
                  green: 10,
                  blue: 15,
                  h: 223,
                  s: 30,
                  l: 5
              }, {
                  name: "White Concrete Powder",
                  texture_image: "concrete_powder_white.png",
                  game_id: "minecraft:concrete_powder",
                  game_id_13: "minecraft:white_concrete_powder",
                  block_id: 252,
                  data_id: 0,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 176,
                  red: 226,
                  green: 227,
                  blue: 228,
                  h: 210,
                  s: 4,
                  l: 89
              }, {
                  name: "Orange Concrete Powder",
                  texture_image: "concrete_powder_orange.png",
                  game_id: "minecraft:concrete_powder 1",
                  game_id_13: "minecraft:orange_concrete_powder",
                  block_id: 252,
                  data_id: 1,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 177,
                  red: 227,
                  green: 132,
                  blue: 32,
                  h: 31,
                  s: 78,
                  l: 51
              }, {
                  name: "Magenta Concrete Powder",
                  texture_image: "concrete_powder_magenta.png",
                  game_id: "minecraft:concrete_powder 2",
                  game_id_13: "minecraft:magenta_concrete_powder",
                  block_id: 252,
                  data_id: 2,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 178,
                  red: 193,
                  green: 84,
                  blue: 185,
                  h: 304,
                  s: 47,
                  l: 54
              }, {
                  name: "Light Blue Concrete Powder",
                  texture_image: "concrete_powder_light_blue.png",
                  game_id: "minecraft:concrete_powder 3",
                  game_id_13: "minecraft:light_blue_concrete_powder",
                  block_id: 252,
                  data_id: 3,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 179,
                  red: 74,
                  green: 181,
                  blue: 213,
                  h: 194,
                  s: 62,
                  l: 56
              }, {
                  name: "Yellow Concrete Powder",
                  texture_image: "concrete_powder_yellow.png",
                  game_id: "minecraft:concrete_powder 4",
                  game_id_13: "minecraft:yellow_concrete_powder",
                  block_id: 252,
                  data_id: 4,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 180,
                  red: 233,
                  green: 199,
                  blue: 55,
                  h: 49,
                  s: 80,
                  l: 56
              }, {
                  name: "Lime Concrete Powder",
                  texture_image: "concrete_powder_lime.png",
                  game_id: "minecraft:concrete_powder 5",
                  game_id_13: "minecraft:lime_concrete_powder",
                  block_id: 252,
                  data_id: 5,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 181,
                  red: 125,
                  green: 189,
                  blue: 42,
                  h: 86,
                  s: 64,
                  l: 45
              }, {
                  name: "Pink Concrete Powder",
                  texture_image: "concrete_powder_pink.png",
                  game_id: "minecraft:concrete_powder 6",
                  game_id_13: "minecraft:pink_concrete_powder",
                  block_id: 252,
                  data_id: 6,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 182,
                  red: 229,
                  green: 153,
                  blue: 181,
                  h: 338,
                  s: 59,
                  l: 75
              }, {
                  name: "Gray Concrete Powder",
                  texture_image: "concrete_powder_gray.png",
                  game_id: "minecraft:concrete_powder 7",
                  game_id_13: "minecraft:gray_concrete_powder",
                  block_id: 252,
                  data_id: 7,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 183,
                  red: 77,
                  green: 81,
                  blue: 85,
                  h: 210,
                  s: 5,
                  l: 32
              }, {
                  name: "Light Gray Concrete Powder",
                  texture_image: "concrete_powder_silver.png",
                  game_id: "minecraft:concrete_powder 8",
                  game_id_13: "minecraft:light_gray_concrete_powder",
                  block_id: 252,
                  data_id: 8,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 184,
                  red: 155,
                  green: 155,
                  blue: 148,
                  h: 60,
                  s: 3,
                  l: 59
              }, {
                  name: "Cyan Concrete Powder",
                  texture_image: "concrete_powder_cyan.png",
                  game_id: "minecraft:concrete_powder 9",
                  game_id_13: "minecraft:cyan_concrete_powder",
                  block_id: 252,
                  data_id: 9,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 185,
                  red: 37,
                  green: 148,
                  blue: 157,
                  h: 185,
                  s: 62,
                  l: 38
              }, {
                  name: "Purple Concrete Powder",
                  texture_image: "concrete_powder_purple.png",
                  game_id: "minecraft:concrete_powder 10",
                  game_id_13: "minecraft:purple_concrete_powder",
                  block_id: 252,
                  data_id: 10,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 186,
                  red: 132,
                  green: 56,
                  blue: 178,
                  h: 277,
                  s: 52,
                  l: 46
              }, {
                  name: "Blue Concrete Powder",
                  texture_image: "concrete_powder_blue.png",
                  game_id: "minecraft:concrete_powder 11",
                  game_id_13: "minecraft:blue_concrete_powder",
                  block_id: 252,
                  data_id: 11,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 187,
                  red: 70,
                  green: 73,
                  blue: 167,
                  h: 238,
                  s: 41,
                  l: 46
              }, {
                  name: "Brown Concrete Powder",
                  texture_image: "concrete_powder_brown.png",
                  game_id: "minecraft:concrete_powder 12",
                  game_id_13: "minecraft:brown_concrete_powder",
                  block_id: 252,
                  data_id: 12,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 188,
                  red: 126,
                  green: 85,
                  blue: 54,
                  h: 26,
                  s: 40,
                  l: 35
              }, {
                  name: "Green Concrete Powder",
                  texture_image: "concrete_powder_green.png",
                  game_id: "minecraft:concrete_powder 13",
                  game_id_13: "minecraft:green_concrete_powder",
                  block_id: 252,
                  data_id: 13,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 189,
                  red: 97,
                  green: 119,
                  blue: 45,
                  h: 78,
                  s: 45,
                  l: 32
              }, {
                  name: "Red Concrete Powder",
                  texture_image: "concrete_powder_red.png",
                  game_id: "minecraft:concrete_powder 14",
                  game_id_13: "minecraft:red_concrete_powder",
                  block_id: 252,
                  data_id: 14,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 190,
                  red: 168,
                  green: 54,
                  blue: 51,
                  h: 2,
                  s: 53,
                  l: 43
              }, {
                  name: "Black Concrete Powder",
                  texture_image: "concrete_powder_black.png",
                  game_id: "minecraft:concrete_powder 15",
                  game_id_13: "minecraft:black_concrete_powder",
                  block_id: 252,
                  data_id: 15,
                  luminance: !1,
                  transparency: !1,
                  falling: !0,
                  redstone: !1,
                  survival: !0,
                  version: 12,
                  id: 191,
                  red: 25,
                  green: 27,
                  blue: 32,
                  h: 223,
                  s: 12,
                  l: 11
              }]
          }]);
        `;
        var blob = new Blob([workerCode], { type: 'application/javascript' });
        return new Worker(URL.createObjectURL(blob));
    }
}, function(n, e, t) {
    "use strict";

    function i() {
        var n, e = this,
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            r = document.createElement("canvas"),
            o = r.getContext("2d"),
            s = document.createElement("canvas"),
            l = s.getContext("2d"),
            c = document.createElement("canvas"),
            d = c.getContext("2d"),
            f = window.URL || window.webkitURL,
            u = this,
            h = {
                blocksDb: [],
                getBlockById: function(n) {
                    return 0 == n ? null : this.blocksDb[n - 1]
                },
                initFlag: !1,
                imageConvertedHex: null,
                imageConvertedHexBackup: null,
                imageWidth: null,
                imageHeight: null,
                canvasWidth: null,
                canvasHeight: null,
                baseCellSize: 16,
                boundingRect: null,
                originalImage: {
                    img: new Image,
                    x: null,
                    y: null,
                    width: null,
                    height: null
                },
                groups: null,
                offset: {
                    bounds: {
                        x: null,
                        y: null
                    },
                    x: 0,
                    y: 0,
                    translate: function(n, e) {
                        var t = h.imageWidth * h.baseCellSize * h.scale.current,
                            i = h.imageHeight * h.baseCellSize * h.scale.current;
                        n > this.bounds.x && (n = this.bounds.x), e > this.bounds.y && (e = this.bounds.y), n + t - h.canvasWidth < -this.bounds.x && (n = -t + h.canvasWidth - this.bounds.x), e + i - h.canvasHeight < -this.bounds.y && (e = -i + h.canvasHeight - this.bounds.y), this.x = Math.round(n), this.y = Math.round(e)
                    }
                },
                scale: {
                    current: .0625,
                    options: [.0625, .125, .25, .5, 1, 2, 4],
                    cacheFrom: 1,
                    scaleUp: function() {
                        var n = this.options.indexOf(this.current);
                        return n < this.options.length - 1 && (this.current = this.options[n + 1], !0)
                    },
                    scaleDown: function() {
                        var n = this.options.indexOf(this.current);
                        return n > 0 && (this.current = this.options[n - 1], !0)
                    }
                },
                history: {
                    log: [],
                    currentPos: -1,
                    lastMaxPos: -1,
                    maxStates: 100,
                    offset: 0
                },
                interface: {
                    eyedropCurrent: 1,
                    toolCurrent: "pencil",
                    brushSize: 9,
                    selection: {
                        start: null,
                        end: null
                    },
                    rulerSize: 25,
                    cursor: ""
                },
                events: {
                    cached: new CustomEvent("cached"),
                    history: new CustomEvent("history")
                },
                controls: {
                    mouse: {
                        localX: null,
                        localY: null,
                        grabbed: !1,
                        leftClick: !1,
                        startX: 0,
                        startY: 0,
                        oldOffsetX: null,
                        oldOffsetY: null,
                        lastMouseX: null,
                        lastMouseY: null
                    }
                },
                settings: {
                    maxBrushSize: 25,
                    showGrid: !1,
                    showRulers: !0,
                    showOriginal: !1,
                    showDebugDrawGroups: !1,
                    minecraftVersion: 12,
                    drawGroupsCurrent: 0,
                    gridColor: "#ff4778"
                },
                debug: {
                    showTempCanvas: !1,
                    renderAllPainted: !1,
                    renderTime: {
                        .0625: 0,
                        .125: 0,
                        .25: 0,
                        .5: 0,
                        1: 0,
                        2: 0,
                        4: 0
                    },
                    savedStartHistory: null,
                    drawGroups: []
                }
            };
        this._isEmptyObject = function(n) {
            for (var e in n) return !1;
            return !0
        }, this._setCursor = function(n) {
            r.setAttribute("data-cursor", n)
        }, this._checkIfReady = function() {
            return 0 !== h.blocksDb.length
        }, this._getPosFromInt = function(n) {
            return {
                x: n % h.imageWidth,
                y: Math.floor(n / h.imageWidth)
            }
        }, this._getIntFromPos = function(n, e) {
            return e * h.imageWidth + n
        }, this._getCornersOfVisible = function() {
            var n = Math.floor(-h.offset.x / h.baseCellSize / h.scale.current),
                e = Math.floor(-h.offset.y / h.baseCellSize / h.scale.current),
                t = Math.floor((h.canvasWidth - h.offset.x) / h.baseCellSize / h.scale.current) + 1,
                i = Math.floor((h.canvasHeight - h.offset.y) / h.baseCellSize / h.scale.current) + 1;
            return n < 0 && (n = 0), e < 0 && (e = 0), t < 0 && (t = 0), i < 0 && (i = 0), {
                topLeftX: n,
                topLeftY: e,
                bottomRightX: t,
                bottomRightY: i
            }
        }, this._getBlockIdByPosition = function(n, e) {
            return h.imageConvertedHex ? n < 0 || n >= h.imageWidth || e < 0 || e >= h.imageHeight ? null : -1 !== h.history.currentPos ? h.imageConvertedHex[e * h.imageWidth + n] : h.imageConvertedHexBackup[e * h.imageWidth + n] : null
        }, this._checkIfInSelection = function(n) {
            if (null === h.interface.selection.start || null === h.interface.selection.start) return !0;
            var e = void 0,
                t = void 0;
            if (h.interface.selection.start < h.interface.selection.end ? (e = h.interface.selection.start, t = h.interface.selection.end) : (e = h.interface.selection.end, t = h.interface.selection.start), n < e || n > t) return !1;
            var i = e % h.imageWidth,
                r = t % h.imageWidth,
                a = n % h.imageWidth;
            return !(a < i || a > r)
        }, this._createMainBlobImage = function(n) {
            for (var e = 0; e < h.imageConvertedHex.length; e++) {
                var t = e % h.imageWidth,
                    i = Math.floor(e / h.imageWidth);
                if (h.imageConvertedHex[e] > 0) {
                    var r = h.getBlockById(h.imageConvertedHex[e]).image;
                    l.drawImage(r, t * h.baseCellSize, i * h.baseCellSize, h.baseCellSize, h.baseCellSize), d.drawImage(r, t * h.baseCellSize, i * h.baseCellSize, h.baseCellSize, h.baseCellSize)
                }
            }
        }, this._fakePaint = function(n, e, t) {
            if (!(n < 0 || n >= h.imageWidth || e < 0 || e >= h.imageHeight))
                if (0 !== t) {
                    var r = h.getBlockById(t).image;
                    i.clearRect(n * h.baseCellSize * h.scale.current + h.offset.x, e * h.baseCellSize * h.scale.current + h.offset.y, h.scale.current * h.baseCellSize, h.scale.current * h.baseCellSize), i.drawImage(r, n * h.baseCellSize * h.scale.current + h.offset.x, e * h.baseCellSize * h.scale.current + h.offset.y, h.scale.current * h.baseCellSize, h.scale.current * h.baseCellSize), l.clearRect(n * h.baseCellSize, e * h.baseCellSize, h.baseCellSize, h.baseCellSize), l.drawImage(r, n * h.baseCellSize, e * h.baseCellSize, h.baseCellSize, h.baseCellSize)
                } else i.clearRect(n * h.baseCellSize * h.scale.current + h.offset.x, e * h.baseCellSize * h.scale.current + h.offset.y, h.scale.current * h.baseCellSize, h.scale.current * h.baseCellSize), l.clearRect(n * h.baseCellSize, e * h.baseCellSize, h.baseCellSize, h.baseCellSize)
        }, this._bucket = function(n, t, i) {
            if (!(n < 0 || t < 0 || n >= h.imageWidth || t >= h.imageHeight)) {
                var r = e._getIntFromPos(n, t);
                if (u._checkIfInSelection(r)) {
                    for (var a = h.imageConvertedHex[r], o = [r], s = {
                            current: {},
                            before: {}
                        }, l = 0; l < o.length; l++) ! function(n) {
                        var e = [{
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: h.imageWidth
                        }, {
                            x: 0,
                            y: -h.imageWidth
                        }];
                        o[n] % h.imageWidth != 0 && e.push({
                            x: -1,
                            y: 0
                        }), (o[n] + 1) % h.imageWidth != 0 && e.push({
                            x: 1,
                            y: 0
                        }), e.forEach(function(e) {
                            var t = o[n] + e.x + e.y;
                            if (h.imageConvertedHex[t] === a && void 0 === s.current[t] && u._checkIfInSelection(t)) {
                                s.current[t] = i, s.before[t] = h.imageConvertedHex[t], h.imageConvertedHex[t] = i;
                                var r = u._getPosFromInt(t);
                                u._fakePaint(r.x, r.y, i), o.push(t)
                            }
                        })
                    }(l);
                    u._addToHistory("bucket", s)
                }
            }
        }, this._addToHistory = function(e, t) {
            for (var i = h.history.currentPos; i < h.history.lastMaxPos; i++) h.history.log.pop(); - 1 === h.history.currentPos && (h.history.offset = 0), h.history.log.length === h.history.maxStates && (h.history.log.shift(), h.history.offset++), h.history.currentPos++, h.history.lastMaxPos = h.history.currentPos, h.history.log.push({
                type: e,
                data: t
            });
            var r = h.events.history;
            r.details = {
                pos: h.history.currentPos,
                type: e
            }, n.dispatchEvent(r)
        }, this._undoBack = function(n) {
            n += -h.history.offset;
            for (var t = {}, i = h.history.currentPos - h.history.offset; i > n; i--) {
                var r = h.history.log[i];
                for (var a in r.data.before) t[a] = r.data.before[a]
            }
            for (var o in t) {
                var s = o % h.imageWidth,
                    l = Math.floor(o / h.imageWidth);
                e._fakePaint(s, l, t[o]), h.imageConvertedHex[o] = t[o]
            }
        }, this._undoForward = function(n) {
            n += -h.history.offset;
            for (var t = {}, i = h.history.currentPos - h.history.offset; i <= n; i++)
                if (-1 !== i) {
                    var r = h.history.log[i];
                    for (var a in r.data.current) t[a] = r.data.current[a]
                } for (var o in t) {
                var s = o % h.imageWidth,
                    l = Math.floor(o / h.imageWidth);
                e._fakePaint(s, l, t[o]), h.imageConvertedHex[o] = t[o]
            }
        }, this._undoTo = function(n) {
            if ((n = parseInt(n)) !== h.history.currentPos) {
                if (-1 === n) return e._undoBack(h.history.offset), h.history.currentPos = n, void e.render(); - 1 === h.history.currentPos && (h.history.currentPos = h.history.offset, e.render()), h.history.currentPos - n > 0 ? e._undoBack(n) : e._undoForward(n), h.history.currentPos = n
            }
        }, this._convertToGroups = function() {
            var n = {},
                e = [],
                t = void 0;
            t = -1 === h.history.currentPos ? h.imageConvertedHexBackup : h.imageConvertedHex;
            for (var i = 0; i < t.length; i++) {
                var r = Math.floor((t.length - i - 1) / h.imageWidth) * h.imageWidth + i % h.imageWidth;
                if (!n[r]) {
                    n[r] = !0;
                    var a = t[r];
                    if (0 !== a) {
                        for (var o = 1, s = 1;;) {
                            var l = r + o;
                            if (t[l] !== a || n[l]) break;
                            if (n[l] = !0, o++, (r + o) % h.imageWidth == 0) break
                        }
                        for (;;) {
                            var c = r - s * h.imageWidth;
                            if (t[c] !== a || n[c]) break;
                            n[c] = !0, s++
                        }
                        if (1 !== o || 1 !== s)
                            for (var d = s, f = r, u = 0; u < o; u++)
                                for (var b = 0; b < d; b++) {
                                    var g = r - b * h.imageWidth + u + 1;
                                    if (t[g] !== a) {
                                        f === r + u + (d - 1) * h.imageWidth ? e.push([f]) : e.push([f, r + u - (d - 1) * h.imageWidth]), f = r + u + 1, d = b;
                                        break
                                    }
                                    n[g] = !0, u + 1 === o && b + 1 === d && (f === r + o - 1 + (d - 1) * h.imageWidth ? e.push([f]) : e.push([f, r + o - 1 - (d - 1) * h.imageWidth]))
                                } else e.push([r])
                    } else n[r] = !0
                }
            }
            h.groups = e
        }, this._convertPosToRelCoords = function(n, e, t) {
            var i = void 0,
                r = 0,
                a = 0,
                o = 0,
                s = n.x + 1,
                l = h.imageHeight - n.y - 1;
            switch (t && (r = t.x || 0, a = t.y || 0, o = t.z || 0), e) {
                case "east":
                    i = "~" + (s + r) + " ~" + (l + a) + " ~" + o;
                    break;
                case "south":
                    i = "~" + r + " ~" + (l + a) + " ~" + (s + o);
                    break;
                case "west":
                    i = "~" + (r - s) + " ~" + (l + a) + " ~" + o;
                    break;
                case "north":
                    i = "~" + r + " ~" + (l + a) + " ~" + (o - s)
            }
            return i.replace(new RegExp("~0", "g"), "~")
        }, this._convertGroupToCommand = function(n, t, i) {
            var r = h.getBlockById(h.imageConvertedHex[n[0]]),
                a = void 0;
            if (null === r && (r = {
                    game_id: "minecraft:air"
                }), a = 13 === h.settings.minecraftVersion ? r.game_id_13 : r.game_id, r.axis)
                if (h.settings.minecraftVersion < 13 && r.version < 13) {
                    var o = parseInt(a.match(/\d$/)[0]);
                    "west" === t || "east" === t ? a = a.replace(/\d$/, o + 8) : "north" !== t && "south" !== t || (a = a.replace(/\d$/, o + 4))
                } else "west" === t || "east" === t ? a += "[axis=z]" : "north" !== t && "south" !== t || (a += "[axis=x]");
            var s = [];
            return n.forEach(function(n) {
                var r = e._getPosFromInt(n);
                s.push(e._convertPosToRelCoords(r, t, i))
            }), 1 === s.length ? "setblock " + s[0] + " " + a : "fill " + s[0] + " " + s[1] + " " + a
        }, this._setPosOnOpen = function() {
            for (var n = h.canvasWidth + h.interface.rulerSize, e = h.canvasHeight - h.interface.rulerSize, t = h.scale.options.length - 1; t >= 0; t--)
                if (h.imageWidth * h.scale.options[t] * h.baseCellSize < n && h.imageHeight * h.scale.options[t] * h.baseCellSize < e) {
                    h.scale.current = h.scale.options[t];
                    break
                } h.offset.x = n / 2 - h.imageWidth / 2 * h.scale.current * h.baseCellSize, h.offset.y = e / 2 - h.imageHeight / 2 * h.scale.current * h.baseCellSize
        }, this._setEventListeners = function() {
            function n(n, e, t, i, r, a) {
                for (var o = Math.abs(t - n), s = Math.abs(i - e), l = n < t ? 1 : -1, c = e < i ? 1 : -1, d = o - s, f = 0;;) {
                    if (n == t && e == i) {
                        a(n, e);
                        break
                    }
                    var u = 2 * d;
                    u > -s && (d -= s, n += l), u < o && (d += o, e += c), f % r == 0 && a(n, e), f++
                }
            }

            function e(n, e) {
                for (var i = h.interface.brushSize % 2 == 0 ? h.interface.brushSize + 1 : h.interface.brushSize, r = Math.floor(i / 2), a = Math.pow(i, 2), o = n - r, s = e - r, l = 0; l < a; l++) {
                    var c = o + l % i,
                        d = s + Math.floor(l / i);
                    if (!(c < 0 || c >= h.imageWidth || d < 0 || d >= h.imageHeight) && (null === h.interface.selection.start || u._checkIfInSelection(u._getIntFromPos(c, d)))) {
                        if ("brush" === u.getTool()) {
                            var f = Math.ceil((l + 1) / i),
                                b = l % i + 1,
                                g = Math.abs(b - r - 1),
                                p = Math.abs(f - r - 1);
                            if (Math.sqrt(Math.pow(g, 2) + Math.pow(p, 2)) > r + .5) continue
                        }
                        u._fakePaint(c, d, u.getEyedrop()), t[d * h.imageWidth + c] = u.getEyedrop()
                    }
                }
            }
            var t = {};
            r.addEventListener("mousemove", function(t) {
                if (u._checkIfReady()) {
                    h.controls.mouse.localX = Math.round(t.clientX - h.boundingRect.x - h.controls.mouse.startX), h.controls.mouse.localY = Math.round(t.clientY - h.boundingRect.y - h.controls.mouse.startY);
                    var i = Math.floor((h.controls.mouse.localX - h.offset.x) / (h.baseCellSize * h.scale.current)),
                        r = Math.floor((h.controls.mouse.localY - h.offset.y) / (h.baseCellSize * h.scale.current));
                    if (h.controls.mouse.grabbed && (h.offset.translate(h.controls.mouse.localX + h.controls.mouse.oldOffsetX, h.controls.mouse.localY + h.controls.mouse.oldOffsetY), u._renderMainCanvas(), u._renderOverlayCanvas()), h.controls.mouse.leftClick && ("pencil" === u.getTool() || "brush" === u.getTool())) {
                        var a = Math.ceil(h.interface.brushSize / 2);
                        n(h.controls.mouse.lastMouseX, h.controls.mouse.lastMouseY, i, r, a, e), h.controls.mouse.lastMouseX = i, h.controls.mouse.lastMouseY = r
                    }
                    if (h.controls.mouse.leftClick && "selection" === u.getTool()) {
                        var o = i,
                            s = r;
                        i < 0 && (o = 0), r < 0 && (s = 0), i >= h.imageWidth && (o = h.imageWidth - 1), r >= h.imageHeight && (s = h.imageHeight - 1), h.interface.selection.end = u._getIntFromPos(o, s)
                    }
                    u._renderOverlayCanvas()
                }
            }), r.addEventListener("mousedown", function(t) {
                if (u._checkIfReady()) {
                    if (1 === t.which) {
                        var i = u.getTool(),
                            r = Math.floor((h.controls.mouse.localX - h.offset.x) / (h.baseCellSize * h.scale.current)),
                            a = Math.floor((h.controls.mouse.localY - h.offset.y) / (h.baseCellSize * h.scale.current));
                        if (h.controls.mouse.leftClick = !0, "brush" !== i && "pencil" !== i && "bucket" !== i || -1 === h.history.currentPos && (l.clearRect(0, 0, s.width, s.height), l.drawImage(c, 0, 0), h.imageConvertedHex.set(h.imageConvertedHexBackup, 0)), "brush" !== i && "pencil" !== i || (t.shiftKey ? n(h.controls.mouse.lastMouseX, h.controls.mouse.lastMouseY, r, a, 1, e) : e(r, a)), h.controls.mouse.lastMouseX = r, h.controls.mouse.lastMouseY = a, "eyedropper" === i) {
                            var o = u._getBlockIdByPosition(r, a);
                            u.setEyedrop(o)
                        }
                        if ("selection" === i) {
                            var d = r,
                                f = a;
                            r < 0 && (d = 0), a < 0 && (f = 0), r >= h.imageWidth && (d = h.imageWidth - 1), a >= h.imageHeight && (f = h.imageHeight - 1), h.interface.selection.start = u._getIntFromPos(d, f), h.interface.selection.end = u._getIntFromPos(d, f)
                        }
                        if ("zoom" === i && h.scale.scaleUp()) {
                            var b = Math.floor(h.controls.mouse.localX - h.offset.x),
                                g = Math.floor(h.controls.mouse.localY - h.offset.y);
                            h.offset.translate(h.offset.x - b, h.offset.y - g), u.render()
                        }
                        "grab" === i && (h.controls.mouse.grabbed = !0, h.controls.mouse.startX = t.clientX - h.boundingRect.x, h.controls.mouse.startY = t.clientY - h.boundingRect.y, h.controls.mouse.oldOffsetX = h.offset.x, h.controls.mouse.oldOffsetY = h.offset.y, u._setCursor("grabbing")), "bucket" === i && u._bucket(r, a, u.getEyedrop())
                    }
                    if (2 === t.which && (t.preventDefault(), h.controls.mouse.grabbed = !0, h.controls.mouse.startX = t.clientX - h.boundingRect.x, h.controls.mouse.startY = t.clientY - h.boundingRect.y, h.controls.mouse.oldOffsetX = h.offset.x, h.controls.mouse.oldOffsetY = h.offset.y, u._setCursor("grabbing")), 3 === t.which && "zoom" === u.getTool() && (t.preventDefault(), h.scale.scaleDown())) {
                        var p = Math.floor(h.controls.mouse.localX - h.offset.x),
                            m = Math.floor(h.controls.mouse.localY - h.offset.y);
                        h.offset.translate(h.offset.x + p / 2, h.offset.y + m / 2), u.render()
                    }
                }
            }), document.addEventListener("mouseup", function(n) {
                if (u._checkIfReady()) {
                    if (h.controls.mouse.grabbed = !1, h.controls.mouse.leftClick = !1, h.controls.mouse.startX = 0, h.controls.mouse.startY = 0, !u._isEmptyObject(t)) {
                        var e = {
                            current: {},
                            before: {}
                        };
                        for (var i in t) e.current[i] = t[i], e.before[i] = h.imageConvertedHex[i], h.imageConvertedHex[i] = t[i];
                        u._addToHistory(u.getTool(), e), t = {}
                    }
                    h.interface.selection.start === h.interface.selection.end && (h.interface.selection.start = null, h.interface.selection.end = null, u._renderOverlayCanvas()), u._setCursor(h.interface.cursor)
                }
            }), r.addEventListener("wheel", function(n) {
                if (u._checkIfReady() && !h.controls.mouse.leftClick && !h.controls.mouse.grabbed) {
                    if (n.preventDefault(), n.deltaY < 0 && h.scale.scaleUp()) {
                        var e = Math.floor(h.controls.mouse.localX - h.offset.x),
                            t = Math.floor(h.controls.mouse.localY - h.offset.y);
                        h.offset.translate(h.offset.x - e, h.offset.y - t)
                    }
                    if (n.deltaY > 0 && h.scale.scaleDown()) {
                        var i = Math.floor(h.controls.mouse.localX - h.offset.x),
                            r = Math.floor(h.controls.mouse.localY - h.offset.y);
                        h.offset.translate(h.offset.x + i / 2, h.offset.y + r / 2)
                    }
                    u._renderMainCanvas(), u._renderOverlayCanvas()
                }
            }), r.addEventListener("contextmenu", function(n) {
                n.preventDefault()
            }), window.addEventListener("resize", function(n) {
                u.setBoundingRect()
            }), window.addEventListener("scroll", function(n) {
                u.setBoundingRect()
            })
        }, this._renderOverlayCanvas = function() {
            function n() {
                var n = void 0;
                switch (h.scale.current) {
                    case 4:
                    case 2:
                    case 1:
                    case .5:
                        n = 10;
                        break;
                    case .25:
                    case .125:
                        n = 50;
                        break;
                    case .0625:
                        n = 100
                }
                h.imageHeight >= 1e3 && (h.interface.rulerSize = 36), o.beginPath(), o.globalAlpha = 1, o.fillStyle = "white", o.rect(0, h.canvasHeight - h.interface.rulerSize, h.canvasWidth, h.interface.rulerSize), o.fill(), o.rect(0, 0, h.interface.rulerSize, h.canvasHeight), o.fill(), o.font = "12px Helvetica", o.fillStyle = "black", o.strokeStyle = "black", o.lineWidth = 1;
                for (var e = Math.ceil(-h.offset.x / h.scale.current / 16 / n) * n; e <= Math.floor((-h.offset.x + h.canvasWidth) / h.scale.current / 16 / n) * n; e += n) o.beginPath(), o.moveTo(e * h.scale.current * 16 + h.offset.x + .5, h.canvasHeight), o.lineTo(e * h.scale.current * 16 + h.offset.x + .5, h.canvasHeight - h.interface.rulerSize), o.stroke(), o.fillText(e, e * h.scale.current * 16 + h.offset.x + 2, h.boundingRect.height - 10);
                for (var t = Math.floor((h.offset.y / 16 / h.scale.current + h.imageHeight) / n) * n; t >= Math.floor(((h.offset.y - h.canvasHeight) / 16 / h.scale.current + h.imageHeight) / n) * n; t -= n) o.beginPath(), o.moveTo(0, 16 * (h.imageHeight - t) * h.scale.current + h.offset.y + .5), o.lineTo(h.interface.rulerSize, 16 * (h.imageHeight - t) * h.scale.current + h.offset.y + .5), o.stroke(), o.fillText(t, 1, 16 * (h.imageHeight - t) * h.scale.current + h.offset.y - 3);
                o.rect(0, h.canvasHeight - h.interface.rulerSize, h.interface.rulerSize, h.interface.rulerSize), o.fill()
            }

            function t() {
                var n = 2,
                    e = 0,
                    t = h.settings.gridColor,
                    i = void 0;
                switch (h.scale.current) {
                    case 4:
                        n = 3, e = 1, i = 10;
                        break;
                    case 2:
                        n = 3, e = .75, i = 10;
                        break;
                    case 1:
                        e = .25, i = 10;
                        break;
                    case .5:
                        i = 10;
                        break;
                    case .25:
                    case .125:
                    case .0625:
                        i = 50
                }
                o.lineWidth = n, o.strokeStyle = t;
                var r = -h.offset.y >= 0 ? 0 : h.offset.y,
                    a = h.offset.y + 16 * h.imageHeight * h.scale.current,
                    s = h.offset.x < 0 ? 0 : h.offset.x,
                    l = h.offset.x + 16 * h.imageWidth * h.scale.current;
                a > h.canvasHeight && (a = h.canvasHeight), l > h.canvasWidth && (l = h.canvasWidth);
                var c = Math.ceil((h.offset.y - h.canvasHeight) / 16 / h.scale.current + h.imageHeight),
                    d = Math.floor(h.offset.y / 16 / h.scale.current + h.imageHeight),
                    f = Math.ceil(-h.offset.x / 16 / h.scale.current),
                    u = Math.floor((-h.offset.x + h.canvasWidth) / h.scale.current / 16);
                c <= 0 && (c = 0), d >= h.imageHeight && (d = h.imageHeight), f <= 0 && (f = 0), u >= h.imageWidth && (u = h.imageWidth);
                for (var b = c + 1; b <= d; b += 1) o.beginPath(), o.globalAlpha = 1, b % i == 0 && b !== h.imageHeight ? (o.lineWidth = n, o.moveTo(s, (h.imageHeight - b) * h.scale.current * 16 + h.offset.y), o.lineTo(l, (h.imageHeight - b) * h.scale.current * 16 + h.offset.y)) : e > 0 && (o.globalAlpha = e, o.lineWidth = 1, o.moveTo(s, (h.imageHeight - b) * h.scale.current * 16 + h.offset.y + .5), o.lineTo(l, (h.imageHeight - b) * h.scale.current * 16 + h.offset.y + .5)), o.stroke();
                for (var g = f + 1; g <= u; g += 1) o.beginPath(), o.globalAlpha = 1, g % i == 0 && g !== h.imageWidth ? (o.lineWidth = n, o.moveTo(g * h.scale.current * 16 + h.offset.x, r), o.lineTo(g * h.scale.current * 16 + h.offset.x, a)) : e > 0 && (o.globalAlpha = e, o.lineWidth = 1, o.moveTo(g * h.scale.current * 16 + h.offset.x, r + .5), o.lineTo(g * h.scale.current * 16 + h.offset.x, a + .5)), o.stroke()
            }

            function i() {
                var n = h.interface.brushSize % 2 == 0 ? h.interface.brushSize + 1 : h.interface.brushSize,
                    e = n * h.baseCellSize * h.scale.current;
                if (o.beginPath(), "pencil" === u.getTool()) {
                    var t = Math.floor((h.controls.mouse.localX - h.offset.x) / (h.baseCellSize * h.scale.current)),
                        i = Math.floor((h.controls.mouse.localY - h.offset.y) / (h.baseCellSize * h.scale.current));
                    o.rect((t - Math.floor(h.interface.brushSize / 2)) * h.baseCellSize * h.scale.current + h.offset.x, (i - Math.floor(h.interface.brushSize / 2)) * h.baseCellSize * h.scale.current + h.offset.y, e, e)
                }
                "brush" === u.getTool() && o.arc(h.controls.mouse.localX, h.controls.mouse.localY, e / 2, 0, 2 * Math.PI), o.globalAlpha = 1, o.strokeStyle = "white", o.lineWidth = 3, o.stroke(), o.stroke(), o.strokeStyle = "black", o.lineWidth = 1, o.stroke(), o.stroke()
            }

            function r() {
                if (null !== h.interface.selection.start && null !== h.interface.selection.end && h.interface.selection.start !== h.interface.selection.end) {
                    var n = u._getPosFromInt(h.interface.selection.start),
                        e = u._getPosFromInt(h.interface.selection.end),
                        t = {
                            x: n.x <= e.x ? n.x : e.x,
                            y: n.y <= e.y ? n.y : e.y
                        },
                        i = {
                            x: n.x > e.x ? n.x : e.x,
                            y: n.y > e.y ? n.y : e.y
                        };
                    o.beginPath(), o.rect(t.x * h.baseCellSize * h.scale.current + h.offset.x, t.y * h.baseCellSize * h.scale.current + h.offset.y, (i.x - t.x + 1) * h.baseCellSize * h.scale.current, (i.y - t.y + 1) * h.baseCellSize * h.scale.current), h.scale.current > .125 ? o.lineWidth = 3 : o.lineWidth = 2, o.strokeStyle = "white", o.stroke(), o.stroke(), o.setLineDash([7, 7]), o.strokeStyle = "black", o.stroke(), o.stroke()
                }
            }
            var a = {
                    RENDER_BRUSH: i,
                    RENDER_RULERS: n,
                    RENDER_SELECTION: r,
                    RENDER_GRID: t
                },
                s = ["RENDER_SELECTION"];
            h.settings.showGrid && s.push("RENDER_GRID"), "pencil" !== e.getTool() && "brush" !== e.getTool() || h.controls.mouse.grabbed || s.push("RENDER_BRUSH"), h.settings.showRulers && s.push("RENDER_RULERS"),
                function(n) {
                    o.globalAlpha = 1, o.save(), o.clearRect(0, 0, h.canvasWidth, h.canvasHeight), n.forEach(function(n) {
                        a[n] && (a[n](), o.restore())
                    })
                }(s)
        }, this._renderMainCanvas = function() {
            function n() {
                h.scale.current > h.scale.cacheFrom ? function() {
                    var n = u._getCornersOfVisible(),
                        e = n.topLeftX,
                        t = n.topLeftY,
                        r = n.bottomRightX,
                        a = n.bottomRightY,
                        o = void 0,
                        s = void 0;
                    s = -1 === h.history.currentPos ? h.imageConvertedHexBackup : h.imageConvertedHex;
                    for (var l = t; l <= a; l++)
                        for (var c = e; c <= r; c++)
                            if (c < h.imageWidth && l < h.imageHeight && (o = s[l * h.imageWidth + c]) > 0) {
                                var d = h.getBlockById(o).image;
                                i.drawImage(d, c * h.baseCellSize * h.scale.current + h.offset.x, l * h.baseCellSize * h.scale.current + h.offset.y, h.scale.current * h.baseCellSize, h.scale.current * h.baseCellSize)
                            }
                }() : function() {
                    var n = u._getCornersOfVisible(),
                        e = h.offset.x > 0 ? h.offset.x : h.offset.x % (16 * h.scale.current),
                        t = h.offset.y > 0 ? h.offset.y : h.offset.y % (16 * h.scale.current),
                        r = void 0;
                    r = -1 === h.history.currentPos ? c : s, i.drawImage(r, 16 * n.topLeftX, 16 * n.topLeftY, 16 * (n.bottomRightX - n.topLeftX), 16 * (n.bottomRightY - n.topLeftY), e, t, 16 * (n.bottomRightX - n.topLeftX) * h.scale.current, 16 * (n.bottomRightY - n.topLeftY) * h.scale.current)
                }()
            }

            function e() {
                i.drawImage(h.originalImage.img, h.originalImage.x, h.originalImage.y, h.originalImage.width, h.originalImage.height, h.offset.x, h.offset.y, h.imageWidth * h.baseCellSize * h.scale.current, h.imageHeight * h.baseCellSize * h.scale.current)
            }

            function t() {
                i.fillStyle = "rgba(100, 100, 100, 0.45)", i.fillRect(0, 0, h.canvasWidth, h.canvasHeight), i.clearRect(h.offset.x, h.offset.y, h.imageWidth * h.baseCellSize * h.scale.current, h.imageHeight * h.baseCellSize * h.scale.current)
            }

            function r() {
                if (void 0 !== h.debug.drawGroups[0]) {
                    h.debug.drawGroups[h.settings.drawGroupsCurrent].forEach(function(n) {
                        if (1 === n.length) {
                            var e = u._getPosFromInt(n[0]);
                            i.fillStyle = "red", i.fillRect(e.x * h.baseCellSize * h.scale.current + h.offset.x, e.y * h.baseCellSize * h.scale.current + h.offset.y, h.scale.current * h.baseCellSize, h.scale.current * h.baseCellSize)
                        } else {
                            var t = u._getPosFromInt(n[0]),
                                r = u._getPosFromInt(n[1]);
                            i.strokeRect(t.x * h.baseCellSize * h.scale.current + h.offset.x, r.y * h.baseCellSize * h.scale.current + h.offset.y, (r.x - t.x + 1) * h.scale.current * h.baseCellSize, (t.y - r.y + 1) * h.scale.current * h.baseCellSize)
                        }
                    })
                }
            }
            var a = {
                RENDER_MAIN: n,
                RENDER_ORIGINAL: e,
                RENDER_BACKGROUND: t,
                RENDER_GROUPS: r
            };
            performance.now();
            ! function(n) {
                i.clearRect(0, 0, h.canvasWidth, h.canvasHeight), i.save();
                for (var e in n) a[n[e]] && a[n[e]](), i.restore();
                i.globalAlpha = 1
            }(["RENDER_BACKGROUND", h.settings.showOriginal ? "RENDER_ORIGINAL" : "RENDER_MAIN", !!h.settings.showDebugDrawGroups && "RENDER_GROUPS"])
        }, this.debugRenderAllPainted = function() {
            return h.debug.renderAllPainted = !h.debug.renderAllPainted, h.debug.renderAllPainted
        }, this.getBlockInfoByMouseXY = function(n, t) {
            var i = Math.floor((n - h.boundingRect.x - h.offset.x) / (h.baseCellSize * h.scale.current)),
                r = Math.floor((t - h.boundingRect.y - h.offset.y) / (h.baseCellSize * h.scale.current));
            return h.interface.rulerSize > Math.floor(n - h.boundingRect.x) || h.canvasHeight - h.interface.rulerSize < Math.floor(t - h.boundingRect.y) ? {
                x: i + 1,
                y: h.imageHeight - r,
                info: null,
                blockPos: null
            } : {
                x: i + 1,
                y: h.imageHeight - r,
                info: h.getBlockById(e._getBlockIdByPosition(i, r)),
                blockPos: i + r * h.imageWidth
            }
        }, this.setImageSizes = function(n, e) {
            h.imageWidth = parseInt(n), h.imageHeight = parseInt(e), s.width = 16 * h.imageWidth, s.height = 16 * h.imageHeight, l.clearRect(0, 0, s.width, s.height), c.width = 16 * h.imageWidth, c.height = 16 * h.imageHeight, d.clearRect(0, 0, c.width, c.height)
        }, this.setBoundingRect = function() {
            h.boundingRect = n.getBoundingClientRect(), h.canvasWidth = h.boundingRect.width, h.canvasHeight = h.boundingRect.height, t.width = h.canvasWidth, t.height = h.canvasHeight, r.width = h.canvasWidth, r.height = h.canvasHeight, i.imageSmoothingEnabled = !1, e.render()
        }, this.setBounds = function() {
            h.offset.bounds.x = h.canvasWidth - h.imageWidth / 1.75, h.offset.bounds.y = h.canvasHeight - h.imageHeight / 1.75
        }, this.setTool = function(n) {
            switch (h.interface.toolCurrent = n, n) {
                case "selection":
                    h.interface.cursor = "crosshair", e._setCursor(h.interface.cursor);
                    break;
                case "zoom":
                    h.interface.cursor = "zoom", e._setCursor(h.interface.cursor);
                    break;
                case "grab":
                    h.interface.cursor = "grab", e._setCursor(h.interface.cursor);
                    break;
                case "bucket":
                    h.interface.cursor = "bucket", e._setCursor(h.interface.cursor);
                    break;
                case "eyedropper":
                case "clicker":
                    h.interface.cursor = "eyedropper", e._setCursor(h.interface.cursor);
                    break;
                case "brush":
                case "pencil":
                    h.interface.cursor = "", e._setCursor(h.interface.cursor)
            }
            e.render()
        }, this.getTool = function() {
            return h.interface.toolCurrent
        }, this.loadImageHex = function(n) {
            h.imageConvertedHex = n, h.imageConvertedHexBackup = new Uint8Array(n.length), h.imageConvertedHexBackup.set(n, 0), e._createMainBlobImage(n)
        }, this.setEyedrop = function(n) {
            h.interface.eyedropCurrent = n
        }, this.getEyedrop = function() {
            return h.interface.eyedropCurrent
        }, this.setBrushSize = function(n) {
            n < 1 ? h.interface.brushSize = 1 : n > h.settings.maxBrushSize ? h.interface.brushSize = h.settings.maxBrushSize : h.interface.brushSize = n, e._renderOverlayCanvas()
        }, this.undoOnce = function() {
            e._undoTo(h.history.currentPos - 1)
        }, this.undoTo = function(n) {
            e._undoTo(n)
        }, this.getCurrentHistoryPos = function() {
            return h.history.currentPos
        }, this.getCanvasLink = function() {
            return r
        }, this.setBlocks = function(n) {
            n.forEach(function(n) {
                var e = Object.assign({}, n);
                e.image = new Image, e.image.src = e.src, delete e.src, h.blocksDb.push(e)
            })
        }, this.replace = function(n, t) {
            var i = null === h.interface.selection.start ? 0 : h.interface.selection.start,
                r = null === h.interface.selection.end ? h.imageConvertedHex.length - 1 : h.interface.selection.end; - 1 === h.history.currentPos && (l.clearRect(0, 0, s.width, s.height), l.drawImage(c, 0, 0), h.imageConvertedHex.set(h.imageConvertedHexBackup, 0));
            for (var a = {
                    current: {},
                    before: {}
                }, o = i; o <= r; o++)
                if ((null === h.interface.selection.start || null === h.interface.selection.end || e._checkIfInSelection(o)) && h.imageConvertedHex[o] === n) {
                    var d = o % h.imageWidth,
                        f = Math.floor(o / h.imageWidth);
                    a.before[o] = h.imageConvertedHex[o], a.current[o] = t, h.imageConvertedHex[o] = t, u._fakePaint(d, f, t)
                } return e._addToHistory("replace", a), Object.keys(a.current).length
        }, this.setSettingsValue = function(n, e) {
            h.settings[n] = e
        }, this.reset = function() {
            h.imageConvertedHex = null, h.offset.x = 0, h.offset.y = 0, h.scale.current = .0625, h.history.log = [], h.history.currentPos = -1, h.history.lastMaxPos = -1, h.interface.eyedropCurrent = 1, h.interface.toolCurrent = "pencil", h.interface.brushSize = 9, h.interface.selection.start = null, h.interface.selection.end = null, h.settings.showRulers = !0, h.settings.showGrid = !1, h.settings.showOriginal = !1, h.settings.showDebugDrawGroups = !1, h.settings.gridColor = "#ff4778", e.resetGroups()
        }, this.open = function(n) {
            e.reset(), e._setPosOnOpen(), e.loadImageHex(n), e.render()
        }, this.save = function(n) {
            for (var t = new a.default, i = [], r = [], o = void 0, s = void 0, l = void 0, c = void 0, d = 0; d < h.imageConvertedHex.length; d++) {
                var u = void 0;
                "south" === n || "east" === n ? u = (h.imageHeight - Math.ceil((d + 1) / h.imageWidth)) * h.imageWidth + d % h.imageWidth : "north" !== n && "west" !== n || (u = h.imageConvertedHex.length - d - 1);
                var b = e._getPosFromInt(u),
                    g = h.getBlockById(e._getBlockIdByPosition(b.x, b.y));
                if (g) {
                    var p = g.data_id;
                    g.axis && ("west" === n || "east" === n ? p += 8 : "north" !== n && "south" !== n || (p += 4)), i.push(g.block_id), r.push(p)
                } else i.push(0), r.push(0)
            }
            switch (n) {
                case "south":
                    o = 1, s = h.imageWidth, c = 0, l = 1;
                    break;
                case "east":
                    o = h.imageWidth, s = 1, c = 1, l = 0;
                    break;
                case "north":
                    o = 1, s = h.imageWidth, c = 0, l = -h.imageWidth;
                    break;
                case "west":
                    o = h.imageWidth, s = 1, c = -h.imageWidth, l = 0
            }
            var m = {
                    Blocks: {
                        type: "byteArray",
                        value: i
                    },
                    Data: {
                        type: "byteArray",
                        value: r
                    },
                    Height: {
                        type: "short",
                        value: h.imageHeight
                    },
                    Length: {
                        type: "short",
                        value: s
                    },
                    Materials: {
                        type: "string",
                        value: "Alpha"
                    },
                    TileEntities: {
                        type: "list",
                        value: {
                            type: "compound",
                            value: []
                        }
                    },
                    WEOffsetX: {
                        type: "int",
                        value: c
                    },
                    WEOffsetY: {
                        type: "int",
                        value: 0
                    },
                    WEOffsetZ: {
                        type: "int",
                        value: l
                    },
                    WEOriginX: {
                        type: "int",
                        value: 0
                    },
                    WEOriginY: {
                        type: "int",
                        value: 0
                    },
                    WEOriginZ: {
                        type: "int",
                        value: 0
                    },
                    Width: {
                        type: "short",
                        value: o
                    }
                },
                v = new Blob([t.encode(m)], {
                    type: "text/plain"
                });
            return f.createObjectURL(v)
        }, this.resetGroups = function() {
            h.groups = null
        }, this.setOriginalImage = function(n) {
            h.originalImage.img.src = n.src, h.originalImage.x = n.x, h.originalImage.y = n.y, h.originalImage.width = n.width, h.originalImage.height = n.height
        }, this.convertAsRaw = function(n) {
            null === h.groups && e._convertToGroups();
            var t = [];
            return h.groups.forEach(function(i) {
                t.push("/" + e._convertGroupToCommand(i, n))
            }), t
        }, this.convertAsMcfunction = function(n) {
            null === h.groups && e._convertToGroups();
            var t = "";
            return h.groups.forEach(function(i) {
                t += e._convertGroupToCommand(i, n) + "\n"
            }), t
        }, this.convertAsCommandBlock = function(n) {
            null === h.groups && e._convertToGroups(), h.debug.drawGroups = [];
            var t = [],
                i = [],
                r = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                l = void 0,
                c = void 0;
            switch (h.settings.minecraftVersion) {
                case 9:
                case 10:
                    s = "FallingSand", o = "MinecartCommandBlock", l = "kill @e[type=" + o + ",r=2]";
                    break;
                case 11:
                case 12:
                    s = "falling_block", o = "commandblock_minecart", l = "kill @e[type=" + o + ",r=2]";
                    break;
                case 13:
                    s = "falling_block", o = "command_block_minecart", l = "kill @e[type=" + o + ",distance=..2]"
            }
            r = "summon " + s + " ~ ~1 ~ {Time:1,Passengers:[%passenger%]}", a = '\n        {\n            id: "' + o + '",\n            Command: "%command%",\n            Passengers: [%passenger%]\n        }\n        ', c = a.replace(/\n|\s/g, "");
            for (var d = 0; d <= h.groups.length; d++) d !== h.groups.length ? (c = c.replace("%command%", e._convertGroupToCommand(h.groups[d], n, {
                y: -1
            })).replace("%passenger%", a.replace(/\n|\s/g, "")), i.push(h.groups[d]), c.length > 31240 && (c = c.replace("%command%", l).replace(",Passengers:[%passenger%]", ""), t.push(r.replace("%passenger%", c)), c = a.replace(/\n|\s/g, ""), h.debug.drawGroups.push(i), i = [])) : (c = c.replace("%command%", l).replace(",Passengers:[%passenger%]", ""), t.push(r.replace("%passenger%", c)), h.debug.drawGroups.push(i), i = []);
            return t
        }, this.getQuantityOfBlocks = function() {
            var n = [],
                e = {};
            (-1 === h.history.currentPos ? h.imageConvertedHexBackup : h.imageConvertedHex).forEach(function(n) {
                n > 0 && (e[n] ? e[n]++ : e[n] = 1)
            });
            for (var t in e) n.push({
                id: t,
                quant: e[t]
            });
            return n.sort(function(n, e) {
                return e.quant - n.quant
            }), n
        }, this.getCommandToDelete = function(n) {
            for (var t = Math.ceil(h.imageWidth * h.imageHeight / 32768), i = [], r = t; r >= 1; r--) {
                var a = [(Math.ceil(r * (h.imageHeight / t)) - 1) * h.imageWidth, Math.floor((r - 1) * (h.imageHeight / t) + 1) * h.imageWidth - 1];
                i.push(e._convertGroupToCommand(a, n).replace(/minecraft\:.*/, "minecraft:air"))
            }
            return i
        }, this.moveOffset = function(n, t) {
            h.offset.translate(h.offset.x + n * h.scale.current * h.baseCellSize, h.offset.y + t * h.scale.current * h.baseCellSize), e.render()
        }, this.getDataUrl = function() {
            if (h.imageWidth > 256 || h.imageHeight > 256) {
                if (!confirm("Images with width/length more than 256 blocks may cause performance issues.\nContinue?")) return null
            }
            return s.toDataURL()
        }, this.render = function() {
            e._renderMainCanvas(), e._renderOverlayCanvas()
        }, this.init = function(e) {
            if (h.initFlag) return void this.reset();
            h.initFlag = !0, n = e, n.style.position = "relative", t.style.position = "absolute", r.style.position = "absolute", this.setBoundingRect(), this.setBounds(), n.appendChild(t), n.appendChild(r), i.imageSmoothingEnabled = !1, this._setEventListeners()
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = t(15),
        a = function(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }(r);
    e.default = i
}, function(n, e) {
    /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
    (function() {
        "use strict";

        function n(n) {
            throw n
        }

        function e(n, e) {
            var t = n.split("."),
                i = z;
            !(t[0] in i) && i.execScript && i.execScript("var " + t[0]);
            for (var r; t.length && (r = t.shift());) t.length || e === x ? i = i[r] ? i[r] : i[r] = {} : i[r] = e
        }

        function t(e, t) {
            this.index = "number" == typeof t ? t : 0, this.m = 0, this.buffer = e instanceof(E ? Uint8Array : Array) ? e : new(E ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && n(Error("invalid index")), this.buffer.length <= this.index && this.f()
        }

        function i(n, e, t) {
            var i, r = "number" == typeof e ? e : e = 0,
                a = "number" == typeof t ? t : n.length;
            for (i = -1, r = 7 & a; r--; ++e) i = i >>> 8 ^ M[255 & (i ^ n[e])];
            for (r = a >> 3; r--; e += 8) i = i >>> 8 ^ M[255 & (i ^ n[e])], i = i >>> 8 ^ M[255 & (i ^ n[e + 1])], i = i >>> 8 ^ M[255 & (i ^ n[e + 2])], i = i >>> 8 ^ M[255 & (i ^ n[e + 3])], i = i >>> 8 ^ M[255 & (i ^ n[e + 4])], i = i >>> 8 ^ M[255 & (i ^ n[e + 5])], i = i >>> 8 ^ M[255 & (i ^ n[e + 6])], i = i >>> 8 ^ M[255 & (i ^ n[e + 7])];
            return (4294967295 ^ i) >>> 0
        }

        function r() {}

        function a(n) {
            this.buffer = new(E ? Uint16Array : Array)(2 * n), this.length = 0
        }

        function o(n) {
            var e, t, i, r, a, o, s, l, c, d, f = n.length,
                u = 0,
                h = Number.POSITIVE_INFINITY;
            for (l = 0; l < f; ++l) n[l] > u && (u = n[l]), n[l] < h && (h = n[l]);
            for (e = 1 << u, t = new(E ? Uint32Array : Array)(e), i = 1, r = 0, a = 2; i <= u;) {
                for (l = 0; l < f; ++l)
                    if (n[l] === i) {
                        for (o = 0, s = r, c = 0; c < i; ++c) o = o << 1 | 1 & s, s >>= 1;
                        for (d = i << 16 | l, c = o; c < e; c += a) t[c] = d;
                        ++r
                    }++ i, r <<= 1, a <<= 1
            }
            return [t, u, h]
        }

        function s(n, e) {
            this.k = O, this.I = 0, this.input = E && n instanceof Array ? new Uint8Array(n) : n, this.b = 0, e && (e.lazy && (this.I = e.lazy), "number" == typeof e.compressionType && (this.k = e.compressionType), e.outputBuffer && (this.a = E && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.b = e.outputIndex)), this.a || (this.a = new(E ? Uint8Array : Array)(32768))
        }

        function l(n, e) {
            this.length = n, this.P = e
        }

        function c(e, t) {
            function i(e, t) {
                var i, r = e.P,
                    a = [],
                    o = 0;
                i = H[e.length], a[o++] = 65535 & i, a[o++] = i >> 16 & 255, a[o++] = i >> 24;
                var s;
                switch (S) {
                    case 1 === r:
                        s = [0, r - 1, 0];
                        break;
                    case 2 === r:
                        s = [1, r - 2, 0];
                        break;
                    case 3 === r:
                        s = [2, r - 3, 0];
                        break;
                    case 4 === r:
                        s = [3, r - 4, 0];
                        break;
                    case 6 >= r:
                        s = [4, r - 5, 1];
                        break;
                    case 8 >= r:
                        s = [5, r - 7, 1];
                        break;
                    case 12 >= r:
                        s = [6, r - 9, 2];
                        break;
                    case 16 >= r:
                        s = [7, r - 13, 2];
                        break;
                    case 24 >= r:
                        s = [8, r - 17, 3];
                        break;
                    case 32 >= r:
                        s = [9, r - 25, 3];
                        break;
                    case 48 >= r:
                        s = [10, r - 33, 4];
                        break;
                    case 64 >= r:
                        s = [11, r - 49, 4];
                        break;
                    case 96 >= r:
                        s = [12, r - 65, 5];
                        break;
                    case 128 >= r:
                        s = [13, r - 97, 5];
                        break;
                    case 192 >= r:
                        s = [14, r - 129, 6];
                        break;
                    case 256 >= r:
                        s = [15, r - 193, 6];
                        break;
                    case 384 >= r:
                        s = [16, r - 257, 7];
                        break;
                    case 512 >= r:
                        s = [17, r - 385, 7];
                        break;
                    case 768 >= r:
                        s = [18, r - 513, 8];
                        break;
                    case 1024 >= r:
                        s = [19, r - 769, 8];
                        break;
                    case 1536 >= r:
                        s = [20, r - 1025, 9];
                        break;
                    case 2048 >= r:
                        s = [21, r - 1537, 9];
                        break;
                    case 3072 >= r:
                        s = [22, r - 2049, 10];
                        break;
                    case 4096 >= r:
                        s = [23, r - 3073, 10];
                        break;
                    case 6144 >= r:
                        s = [24, r - 4097, 11];
                        break;
                    case 8192 >= r:
                        s = [25, r - 6145, 11];
                        break;
                    case 12288 >= r:
                        s = [26, r - 8193, 12];
                        break;
                    case 16384 >= r:
                        s = [27, r - 12289, 12];
                        break;
                    case 24576 >= r:
                        s = [28, r - 16385, 13];
                        break;
                    case 32768 >= r:
                        s = [29, r - 24577, 13];
                        break;
                    default:
                        n("invalid distance")
                }
                i = s, a[o++] = i[0], a[o++] = i[1], a[o++] = i[2];
                var l, c;
                for (l = 0, c = a.length; l < c; ++l) g[p++] = a[l];
                v[a[0]]++, _[a[3]]++, m = e.length + t - 1, u = null
            }
            var r, a, o, s, l, c, f, u, h, b = {},
                g = E ? new Uint16Array(2 * t.length) : [],
                p = 0,
                m = 0,
                v = new(E ? Uint32Array : Array)(286),
                _ = new(E ? Uint32Array : Array)(30),
                w = e.I;
            if (!E) {
                for (o = 0; 285 >= o;) v[o++] = 0;
                for (o = 0; 29 >= o;) _[o++] = 0
            }
            for (v[256] = 1, r = 0, a = t.length; r < a; ++r) {
                for (o = l = 0, s = 3; o < s && r + o !== a; ++o) l = l << 8 | t[r + o];
                if (b[l] === x && (b[l] = []), c = b[l], !(0 < m--)) {
                    for (; 0 < c.length && 32768 < r - c[0];) c.shift();
                    if (r + 3 >= a) {
                        for (u && i(u, -1), o = 0, s = a - r; o < s; ++o) h = t[r + o], g[p++] = h, ++v[h];
                        break
                    }
                    0 < c.length ? (f = d(t, r, c), u ? u.length < f.length ? (h = t[r - 1], g[p++] = h, ++v[h], i(f, 0)) : i(u, -1) : f.length < w ? u = f : i(f, 0)) : u ? i(u, -1) : (h = t[r], g[p++] = h, ++v[h])
                }
                c.push(r)
            }
            return g[p++] = 256, v[256]++, e.V = v, e.U = _, E ? g.subarray(0, p) : g
        }

        function d(n, e, t) {
            var i, r, a, o, s, c, d = 0,
                f = n.length;
            o = 0, c = t.length;
            n: for (; o < c; o++) {
                if (i = t[c - o - 1], a = 3, 3 < d) {
                    for (s = d; 3 < s; s--)
                        if (n[i + s - 1] !== n[e + s - 1]) continue n;
                    a = d
                }
                for (; 258 > a && e + a < f && n[i + a] === n[e + a];) ++a;
                if (a > d && (r = i, d = a), 258 === a) break
            }
            return new l(d, e - r)
        }

        function f(n, e) {
            var t, i, r, o, s, l = n.length,
                c = new a(572),
                d = new(E ? Uint8Array : Array)(l);
            if (!E)
                for (o = 0; o < l; o++) d[o] = 0;
            for (o = 0; o < l; ++o) 0 < n[o] && c.push(o, n[o]);
            if (t = Array(c.length / 2), i = new(E ? Uint32Array : Array)(c.length / 2), 1 === t.length) return d[c.pop().index] = 1, d;
            for (o = 0, s = c.length / 2; o < s; ++o) t[o] = c.pop(), i[o] = t[o].value;
            for (r = u(i, i.length, e), o = 0, s = t.length; o < s; ++o) d[t[o].index] = r[o];
            return d
        }

        function u(n, e, t) {
            function i(n) {
                var t = h[n][b[n]];
                t === e ? (i(n + 1), i(n + 1)) : --f[t], ++b[n]
            }
            var r, a, o, s, l, c = new(E ? Uint16Array : Array)(t),
                d = new(E ? Uint8Array : Array)(t),
                f = new(E ? Uint8Array : Array)(e),
                u = Array(t),
                h = Array(t),
                b = Array(t),
                g = (1 << t) - e,
                p = 1 << t - 1;
            for (c[t - 1] = e, a = 0; a < t; ++a) g < p ? d[a] = 0 : (d[a] = 1, g -= p), g <<= 1, c[t - 2 - a] = (c[t - 1 - a] / 2 | 0) + e;
            for (c[0] = d[0], u[0] = Array(c[0]), h[0] = Array(c[0]), a = 1; a < t; ++a) c[a] > 2 * c[a - 1] + d[a] && (c[a] = 2 * c[a - 1] + d[a]), u[a] = Array(c[a]), h[a] = Array(c[a]);
            for (r = 0; r < e; ++r) f[r] = t;
            for (o = 0; o < c[t - 1]; ++o) u[t - 1][o] = n[o], h[t - 1][o] = o;
            for (r = 0; r < t; ++r) b[r] = 0;
            for (1 === d[t - 1] && (--f[0], ++b[t - 1]), a = t - 2; 0 <= a; --a) {
                for (s = r = 0, l = b[a + 1], o = 0; o < c[a]; o++) s = u[a + 1][l] + u[a + 1][l + 1], s > n[r] ? (u[a][o] = s, h[a][o] = e, l += 2) : (u[a][o] = n[r], h[a][o] = r, ++r);
                b[a] = 0, 1 === d[a] && i(a)
            }
            return f
        }

        function h(n) {
            var e, t, i, r, a = new(E ? Uint16Array : Array)(n.length),
                o = [],
                s = [],
                l = 0;
            for (e = 0, t = n.length; e < t; e++) o[n[e]] = 1 + (0 | o[n[e]]);
            for (e = 1, t = 16; e <= t; e++) s[e] = l, l += 0 | o[e], l <<= 1;
            for (e = 0, t = n.length; e < t; e++)
                for (l = s[n[e]], s[n[e]] += 1, i = a[e] = 0, r = n[e]; i < r; i++) a[e] = a[e] << 1 | 1 & l, l >>>= 1;
            return a
        }

        function b(n, e) {
            this.input = n, this.b = this.c = 0, this.i = {}, e && (e.flags && (this.i = e.flags), "string" == typeof e.filename && (this.filename = e.filename), "string" == typeof e.comment && (this.A = e.comment), e.deflateOptions && (this.l = e.deflateOptions)), this.l || (this.l = {})
        }

        function g(e, t) {
            switch (this.p = [], this.q = 32768, this.e = this.j = this.c = this.u = 0, this.input = E ? new Uint8Array(e) : e, this.w = !1, this.r = F, this.L = !1, !t && (t = {}) || (t.index && (this.c = t.index), t.bufferSize && (this.q = t.bufferSize), t.bufferType && (this.r = t.bufferType), t.resize && (this.L = t.resize)), this.r) {
                case $:
                    this.b = 32768, this.a = new(E ? Uint8Array : Array)(32768 + this.q + 258);
                    break;
                case F:
                    this.b = 0, this.a = new(E ? Uint8Array : Array)(this.q), this.f = this.T, this.B = this.Q, this.s = this.S;
                    break;
                default:
                    n(Error("invalid inflate mode"))
            }
        }

        function p(e, t) {
            for (var i, r = e.j, a = e.e, o = e.input, s = e.c, l = o.length; a < t;) s >= l && n(Error("input buffer is broken")), r |= o[s++] << a, a += 8;
            return i = r & (1 << t) - 1, e.j = r >>> t, e.e = a - t, e.c = s, i
        }

        function m(e, t) {
            for (var i, r, a = e.j, o = e.e, s = e.input, l = e.c, c = s.length, d = t[0], f = t[1]; o < f && !(l >= c);) a |= s[l++] << o, o += 8;
            return i = d[a & (1 << f) - 1], r = i >>> 16, r > o && n(Error("invalid code length: " + r)), e.j = a >> r, e.e = o - r, e.c = l, 65535 & i
        }

        function v(n) {
            this.input = n, this.c = 0, this.t = [], this.D = !1
        }

        function _(n) {
            if ("string" == typeof n) {
                var e, t, i = n.split("");
                for (e = 0, t = i.length; e < t; e++) i[e] = (255 & i[e].charCodeAt(0)) >>> 0;
                n = i
            }
            for (var r, a = 1, o = 0, s = n.length, l = 0; 0 < s;) {
                r = 1024 < s ? 1024 : s, s -= r;
                do {
                    a += n[l++], o += a
                } while (--r);
                a %= 65521, o %= 65521
            }
            return (o << 16 | a) >>> 0
        }

        function w(e, t) {
            var i, r;
            switch (this.input = e, this.c = 0, !t && (t = {}) || (t.index && (this.c = t.index), t.verify && (this.Z = t.verify)), i = e[this.c++], r = e[this.c++], 15 & i) {
                case hn:
                    this.method = hn;
                    break;
                default:
                    n(Error("unsupported compression method"))
            }
            0 != ((i << 8) + r) % 31 && n(Error("invalid fcheck flag:" + ((i << 8) + r) % 31)), 32 & r && n(Error("fdict flag is not supported")), this.K = new g(e, {
                index: this.c,
                bufferSize: t.bufferSize,
                bufferType: t.bufferType,
                resize: t.resize
            })
        }

        function k(n, e) {
            this.input = n, this.a = new(E ? Uint8Array : Array)(32768), this.k = bn.o;
            var t, i = {};
            !e && (e = {}) || "number" != typeof e.compressionType || (this.k = e.compressionType);
            for (t in e) i[t] = e[t];
            i.outputBuffer = this.a, this.J = new s(this.input, i)
        }

        function y(n, t) {
            var i, r, a, o;
            if (Object.keys) i = Object.keys(t);
            else
                for (r in i = [], a = 0, t) i[a++] = r;
            for (a = 0, o = i.length; a < o; ++a) r = i[a], e(n + "." + r, t[r])
        }
        var x = void 0,
            S = !0,
            z = this,
            E = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;
        t.prototype.f = function() {
            var n, e = this.buffer,
                t = e.length,
                i = new(E ? Uint8Array : Array)(t << 1);
            if (E) i.set(e);
            else
                for (n = 0; n < t; ++n) i[n] = e[n];
            return this.buffer = i
        }, t.prototype.d = function(n, e, t) {
            var i, r = this.buffer,
                a = this.index,
                o = this.m,
                s = r[a];
            if (t && 1 < e && (n = 8 < e ? (I[255 & n] << 24 | I[n >>> 8 & 255] << 16 | I[n >>> 16 & 255] << 8 | I[n >>> 24 & 255]) >> 32 - e : I[n] >> 8 - e), 8 > e + o) s = s << e | n, o += e;
            else
                for (i = 0; i < e; ++i) s = s << 1 | n >> e - i - 1 & 1, 8 == ++o && (o = 0, r[a++] = I[s], s = 0, a === r.length && (r = this.f()));
            r[a] = s, this.buffer = r, this.m = o, this.index = a
        }, t.prototype.finish = function() {
            var n, e = this.buffer,
                t = this.index;
            return 0 < this.m && (e[t] <<= 8 - this.m, e[t] = I[e[t]], t++), E ? n = e.subarray(0, t) : (e.length = t, n = e), n
        };
        var R, A = new(E ? Uint8Array : Array)(256);
        for (R = 0; 256 > R; ++R) {
            for (var C = R, T = C, L = 7, C = C >>> 1; C; C >>>= 1) T <<= 1, T |= 1 & C, --L;
            A[R] = (T << L & 255) >>> 0
        }
        var I = A,
            B = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
            M = E ? new Uint32Array(B) : B;
        r.prototype.getName = function() {
            return this.name
        }, r.prototype.getData = function() {
            return this.data
        }, r.prototype.X = function() {
            return this.Y
        }, a.prototype.getParent = function(n) {
            return 2 * ((n - 2) / 4 | 0)
        }, a.prototype.push = function(n, e) {
            var t, i, r, a = this.buffer;
            for (t = this.length, a[this.length++] = e, a[this.length++] = n; 0 < t && (i = this.getParent(t), a[t] > a[i]);) r = a[t], a[t] = a[i], a[i] = r, r = a[t + 1], a[t + 1] = a[i + 1], a[i + 1] = r, t = i;
            return this.length
        }, a.prototype.pop = function() {
            var n, e, t, i, r, a = this.buffer;
            for (e = a[0], n = a[1], this.length -= 2, a[0] = a[this.length], a[1] = a[this.length + 1], r = 0; !((i = 2 * r + 2) >= this.length) && (i + 2 < this.length && a[i + 2] > a[i] && (i += 2), a[i] > a[r]);) t = a[r], a[r] = a[i], a[i] = t, t = a[r + 1], a[r + 1] = a[i + 1], a[i + 1] = t, r = i;
            return {
                index: n,
                value: e,
                length: this.length
            }
        };
        var D, O = 2,
            P = {
                NONE: 0,
                v: 1,
                o: O,
                aa: 3
            },
            N = [];
        for (D = 0; 288 > D; D++) switch (S) {
            case 143 >= D:
                N.push([D + 48, 8]);
                break;
            case 255 >= D:
                N.push([D - 144 + 400, 9]);
                break;
            case 279 >= D:
                N.push([D - 256 + 0, 7]);
                break;
            case 287 >= D:
                N.push([D - 280 + 192, 8]);
                break;
            default:
                n("invalid literal: " + D)
        }
        s.prototype.g = function() {
            var e, i, r, a, o = this.input;
            switch (this.k) {
                case 0:
                    for (r = 0, a = o.length; r < a;) {
                        i = E ? o.subarray(r, r + 65535) : o.slice(r, r + 65535), r += i.length;
                        var s = i,
                            l = r === a,
                            d = x,
                            u = x,
                            b = x,
                            g = x,
                            p = x,
                            m = this.a,
                            v = this.b;
                        if (E) {
                            for (m = new Uint8Array(this.a.buffer); m.length <= v + s.length + 5;) m = new Uint8Array(m.length << 1);
                            m.set(this.a)
                        }
                        if (d = l ? 1 : 0, m[v++] = 0 | d, u = s.length, b = 65536 + ~u & 65535, m[v++] = 255 & u, m[v++] = u >>> 8 & 255, m[v++] = 255 & b, m[v++] = b >>> 8 & 255, E) m.set(s, v), v += s.length, m = m.subarray(0, v);
                        else {
                            for (g = 0, p = s.length; g < p; ++g) m[v++] = s[g];
                            m.length = v
                        }
                        this.b = v, this.a = m
                    }
                    break;
                case 1:
                    var _ = new t(E ? new Uint8Array(this.a.buffer) : this.a, this.b);
                    _.d(1, 1, S), _.d(1, 2, S);
                    var w, k, y, z = c(this, o);
                    for (w = 0, k = z.length; w < k; w++)
                        if (y = z[w], t.prototype.d.apply(_, N[y]), 256 < y) _.d(z[++w], z[++w], S), _.d(z[++w], 5), _.d(z[++w], z[++w], S);
                        else if (256 === y) break;
                    this.a = _.finish(), this.b = this.a.length;
                    break;
                case O:
                    var R, A, C, T, L, I, B, M, D, P, U, H, j, G, W, q = new t(E ? new Uint8Array(this.a.buffer) : this.a, this.b),
                        $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                        F = Array(19);
                    for (R = O, q.d(1, 1, S), q.d(R, 2, S), A = c(this, o), I = f(this.V, 15), B = h(I), M = f(this.U, 7), D = h(M), C = 286; 257 < C && 0 === I[C - 1]; C--);
                    for (T = 30; 1 < T && 0 === M[T - 1]; T--);
                    var Y, Z, X, V, K, J, Q = C,
                        nn = T,
                        en = new(E ? Uint32Array : Array)(Q + nn),
                        tn = new(E ? Uint32Array : Array)(316),
                        rn = new(E ? Uint8Array : Array)(19);
                    for (Y = Z = 0; Y < Q; Y++) en[Z++] = I[Y];
                    for (Y = 0; Y < nn; Y++) en[Z++] = M[Y];
                    if (!E)
                        for (Y = 0, V = rn.length; Y < V; ++Y) rn[Y] = 0;
                    for (Y = K = 0, V = en.length; Y < V; Y += Z) {
                        for (Z = 1; Y + Z < V && en[Y + Z] === en[Y]; ++Z);
                        if (X = Z, 0 === en[Y])
                            if (3 > X)
                                for (; 0 < X--;) tn[K++] = 0, rn[0]++;
                            else
                                for (; 0 < X;) J = 138 > X ? X : 138, J > X - 3 && J < X && (J = X - 3), 10 >= J ? (tn[K++] = 17, tn[K++] = J - 3, rn[17]++) : (tn[K++] = 18, tn[K++] = J - 11, rn[18]++), X -= J;
                        else if (tn[K++] = en[Y], rn[en[Y]]++, 3 > --X)
                            for (; 0 < X--;) tn[K++] = en[Y], rn[en[Y]]++;
                        else
                            for (; 0 < X;) J = 6 > X ? X : 6, J > X - 3 && J < X && (J = X - 3), tn[K++] = 16, tn[K++] = J - 3, rn[16]++, X -= J
                    }
                    for (e = E ? tn.subarray(0, K) : tn.slice(0, K), P = f(rn, 7), G = 0; 19 > G; G++) F[G] = P[$[G]];
                    for (L = 19; 4 < L && 0 === F[L - 1]; L--);
                    for (U = h(P), q.d(C - 257, 5, S), q.d(T - 1, 5, S), q.d(L - 4, 4, S), G = 0; G < L; G++) q.d(F[G], 3, S);
                    for (G = 0, W = e.length; G < W; G++)
                        if (H = e[G], q.d(U[H], P[H], S), 16 <= H) {
                            switch (G++, H) {
                                case 16:
                                    j = 2;
                                    break;
                                case 17:
                                    j = 3;
                                    break;
                                case 18:
                                    j = 7;
                                    break;
                                default:
                                    n("invalid code: " + H)
                            }
                            q.d(e[G], j, S)
                        } var an, on, sn, ln, cn, dn, fn, un, hn = [B, I],
                        bn = [D, M];
                    for (cn = hn[0], dn = hn[1], fn = bn[0], un = bn[1], an = 0, on = A.length; an < on; ++an)
                        if (sn = A[an], q.d(cn[sn], dn[sn], S), 256 < sn) q.d(A[++an], A[++an], S), ln = A[++an], q.d(fn[ln], un[ln], S), q.d(A[++an], A[++an], S);
                        else if (256 === sn) break;
                    this.a = q.finish(), this.b = this.a.length;
                    break;
                default:
                    n("invalid compression type")
            }
            return this.a
        };
        var U = function() {
                var e, t, i = [];
                for (e = 3; 258 >= e; e++) t = function(e) {
                    switch (S) {
                        case 3 === e:
                            return [257, e - 3, 0];
                        case 4 === e:
                            return [258, e - 4, 0];
                        case 5 === e:
                            return [259, e - 5, 0];
                        case 6 === e:
                            return [260, e - 6, 0];
                        case 7 === e:
                            return [261, e - 7, 0];
                        case 8 === e:
                            return [262, e - 8, 0];
                        case 9 === e:
                            return [263, e - 9, 0];
                        case 10 === e:
                            return [264, e - 10, 0];
                        case 12 >= e:
                            return [265, e - 11, 1];
                        case 14 >= e:
                            return [266, e - 13, 1];
                        case 16 >= e:
                            return [267, e - 15, 1];
                        case 18 >= e:
                            return [268, e - 17, 1];
                        case 22 >= e:
                            return [269, e - 19, 2];
                        case 26 >= e:
                            return [270, e - 23, 2];
                        case 30 >= e:
                            return [271, e - 27, 2];
                        case 34 >= e:
                            return [272, e - 31, 2];
                        case 42 >= e:
                            return [273, e - 35, 3];
                        case 50 >= e:
                            return [274, e - 43, 3];
                        case 58 >= e:
                            return [275, e - 51, 3];
                        case 66 >= e:
                            return [276, e - 59, 3];
                        case 82 >= e:
                            return [277, e - 67, 4];
                        case 98 >= e:
                            return [278, e - 83, 4];
                        case 114 >= e:
                            return [279, e - 99, 4];
                        case 130 >= e:
                            return [280, e - 115, 4];
                        case 162 >= e:
                            return [281, e - 131, 5];
                        case 194 >= e:
                            return [282, e - 163, 5];
                        case 226 >= e:
                            return [283, e - 195, 5];
                        case 257 >= e:
                            return [284, e - 227, 5];
                        case 258 === e:
                            return [285, e - 258, 0];
                        default:
                            n("invalid length: " + e)
                    }
                }(e), i[e] = t[2] << 24 | t[1] << 16 | t[0];
                return i
            }(),
            H = E ? new Uint32Array(U) : U;
        b.prototype.g = function() {
            var n, e, t, r, a, o, l, c, d = new(E ? Uint8Array : Array)(32768),
                f = 0,
                u = this.input,
                h = this.c,
                b = this.filename,
                g = this.A;
            if (d[f++] = 31, d[f++] = 139, d[f++] = 8, n = 0, this.i.fname && (n |= W), this.i.fcomment && (n |= q), this.i.fhcrc && (n |= G), d[f++] = n, e = (Date.now ? Date.now() : +new Date) / 1e3 | 0, d[f++] = 255 & e, d[f++] = e >>> 8 & 255, d[f++] = e >>> 16 & 255, d[f++] = e >>> 24 & 255, d[f++] = 0, d[f++] = j, this.i.fname !== x) {
                for (l = 0, c = b.length; l < c; ++l) o = b.charCodeAt(l), 255 < o && (d[f++] = o >>> 8 & 255), d[f++] = 255 & o;
                d[f++] = 0
            }
            if (this.i.comment) {
                for (l = 0, c = g.length; l < c; ++l) o = g.charCodeAt(l), 255 < o && (d[f++] = o >>> 8 & 255), d[f++] = 255 & o;
                d[f++] = 0
            }
            return this.i.fhcrc && (t = 65535 & i(d, 0, f), d[f++] = 255 & t, d[f++] = t >>> 8 & 255), this.l.outputBuffer = d, this.l.outputIndex = f, a = new s(u, this.l), d = a.g(), f = a.b, E && (f + 8 > d.buffer.byteLength ? (this.a = new Uint8Array(f + 8), this.a.set(new Uint8Array(d.buffer)), d = this.a) : d = new Uint8Array(d.buffer)), r = i(u, x, x), d[f++] = 255 & r, d[f++] = r >>> 8 & 255, d[f++] = r >>> 16 & 255, d[f++] = r >>> 24 & 255, c = u.length, d[f++] = 255 & c, d[f++] = c >>> 8 & 255, d[f++] = c >>> 16 & 255, d[f++] = c >>> 24 & 255, this.c = h, E && f < d.length && (this.a = d = d.subarray(0, f)), d
        };
        var j = 255,
            G = 2,
            W = 8,
            q = 16,
            $ = 0,
            F = 1,
            Y = {
                N: $,
                M: F
            };
        g.prototype.h = function() {
            for (; !this.w;) {
                var e = p(this, 3);
                switch (1 & e && (this.w = S), e >>>= 1) {
                    case 0:
                        var t = this.input,
                            i = this.c,
                            r = this.a,
                            a = this.b,
                            s = t.length,
                            l = x,
                            c = x,
                            d = r.length,
                            f = x;
                        switch (this.e = this.j = 0, i + 1 >= s && n(Error("invalid uncompressed block header: LEN")), l = t[i++] | t[i++] << 8, i + 1 >= s && n(Error("invalid uncompressed block header: NLEN")), c = t[i++] | t[i++] << 8, l === ~c && n(Error("invalid uncompressed block header: length verify")), i + l > t.length && n(Error("input buffer is broken")), this.r) {
                            case $:
                                for (; a + l > r.length;) {
                                    if (f = d - a, l -= f, E) r.set(t.subarray(i, i + f), a), a += f, i += f;
                                    else
                                        for (; f--;) r[a++] = t[i++];
                                    this.b = a, r = this.f(), a = this.b
                                }
                                break;
                            case F:
                                for (; a + l > r.length;) r = this.f({
                                    F: 2
                                });
                                break;
                            default:
                                n(Error("invalid inflate mode"))
                        }
                        if (E) r.set(t.subarray(i, i + l), a), a += l, i += l;
                        else
                            for (; l--;) r[a++] = t[i++];
                        this.c = i, this.b = a, this.a = r;
                        break;
                    case 1:
                        this.s(dn, un);
                        break;
                    case 2:
                        for (var u = p(this, 5) + 257, h = p(this, 5) + 1, b = p(this, 4) + 4, g = new(E ? Uint8Array : Array)(K.length), v = x, _ = x, w = x, k = x, y = x, z = x, R = x, A = x, C = x, A = 0; A < b; ++A) g[K[A]] = p(this, 3);
                        if (!E)
                            for (A = b, b = g.length; A < b; ++A) g[K[A]] = 0;
                        for (v = o(g), k = new(E ? Uint8Array : Array)(u + h), A = 0, C = u + h; A < C;) switch (y = m(this, v)) {
                            case 16:
                                for (R = 3 + p(this, 2); R--;) k[A++] = z;
                                break;
                            case 17:
                                for (R = 3 + p(this, 3); R--;) k[A++] = 0;
                                z = 0;
                                break;
                            case 18:
                                for (R = 11 + p(this, 7); R--;) k[A++] = 0;
                                z = 0;
                                break;
                            default:
                                z = k[A++] = y
                        }
                        _ = o(E ? k.subarray(0, u) : k.slice(0, u)), w = o(E ? k.subarray(u) : k.slice(u)), this.s(_, w);
                        break;
                    default:
                        n(Error("unknown BTYPE: " + e))
                }
            }
            return this.B()
        };
        var Z, X, V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            K = E ? new Uint16Array(V) : V,
            J = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
            Q = E ? new Uint16Array(J) : J,
            nn = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
            en = E ? new Uint8Array(nn) : nn,
            tn = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            rn = E ? new Uint16Array(tn) : tn,
            an = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            on = E ? new Uint8Array(an) : an,
            sn = new(E ? Uint8Array : Array)(288);
        for (Z = 0, X = sn.length; Z < X; ++Z) sn[Z] = 143 >= Z ? 8 : 255 >= Z ? 9 : 279 >= Z ? 7 : 8;
        var ln, cn, dn = o(sn),
            fn = new(E ? Uint8Array : Array)(30);
        for (ln = 0, cn = fn.length; ln < cn; ++ln) fn[ln] = 5;
        var un = o(fn);
        g.prototype.s = function(n, e) {
            var t = this.a,
                i = this.b;
            this.C = n;
            for (var r, a, o, s, l = t.length - 258; 256 !== (r = m(this, n));)
                if (256 > r) i >= l && (this.b = i, t = this.f(), i = this.b), t[i++] = r;
                else
                    for (a = r - 257, s = Q[a], 0 < en[a] && (s += p(this, en[a])), r = m(this, e), o = rn[r], 0 < on[r] && (o += p(this, on[r])), i >= l && (this.b = i, t = this.f(), i = this.b); s--;) t[i] = t[i++ - o];
            for (; 8 <= this.e;) this.e -= 8, this.c--;
            this.b = i
        }, g.prototype.S = function(n, e) {
            var t = this.a,
                i = this.b;
            this.C = n;
            for (var r, a, o, s, l = t.length; 256 !== (r = m(this, n));)
                if (256 > r) i >= l && (t = this.f(), l = t.length), t[i++] = r;
                else
                    for (a = r - 257, s = Q[a], 0 < en[a] && (s += p(this, en[a])), r = m(this, e), o = rn[r], 0 < on[r] && (o += p(this, on[r])), i + s > l && (t = this.f(), l = t.length); s--;) t[i] = t[i++ - o];
            for (; 8 <= this.e;) this.e -= 8, this.c--;
            this.b = i
        }, g.prototype.f = function() {
            var n, e, t = new(E ? Uint8Array : Array)(this.b - 32768),
                i = this.b - 32768,
                r = this.a;
            if (E) t.set(r.subarray(32768, t.length));
            else
                for (n = 0, e = t.length; n < e; ++n) t[n] = r[n + 32768];
            if (this.p.push(t), this.u += t.length, E) r.set(r.subarray(i, i + 32768));
            else
                for (n = 0; 32768 > n; ++n) r[n] = r[i + n];
            return this.b = 32768, r
        }, g.prototype.T = function(n) {
            var e, t, i, r, a = this.input.length / this.c + 1 | 0,
                o = this.input,
                s = this.a;
            return n && ("number" == typeof n.F && (a = n.F), "number" == typeof n.O && (a += n.O)), 2 > a ? (t = (o.length - this.c) / this.C[2], r = t / 2 * 258 | 0, i = r < s.length ? s.length + r : s.length << 1) : i = s.length * a, E ? (e = new Uint8Array(i), e.set(s)) : e = s, this.a = e
        }, g.prototype.B = function() {
            var n, e, t, i, r, a = 0,
                o = this.a,
                s = this.p,
                l = new(E ? Uint8Array : Array)(this.u + (this.b - 32768));
            if (0 === s.length) return E ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
            for (e = 0, t = s.length; e < t; ++e)
                for (n = s[e], i = 0, r = n.length; i < r; ++i) l[a++] = n[i];
            for (e = 32768, t = this.b; e < t; ++e) l[a++] = o[e];
            return this.p = [], this.buffer = l
        }, g.prototype.Q = function() {
            var n, e = this.b;
            return E ? this.L ? (n = new Uint8Array(e), n.set(this.a.subarray(0, e))) : n = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), n = this.a), this.buffer = n
        }, v.prototype.W = function() {
            return this.D || this.h(), this.t.slice()
        }, v.prototype.h = function() {
            for (var e = this.input.length; this.c < e;) {
                var t = new r,
                    a = x,
                    o = x,
                    s = x,
                    l = x,
                    c = x,
                    d = x,
                    f = x,
                    u = x,
                    h = x,
                    b = this.input,
                    p = this.c;
                switch (t.G = b[p++], t.H = b[p++], (31 !== t.G || 139 !== t.H) && n(Error("invalid file signature:" + t.G + "," + t.H)), t.z = b[p++], t.z) {
                    case 8:
                        break;
                    default:
                        n(Error("unknown compression method: " + t.z))
                }
                if (t.n = b[p++], u = b[p++] | b[p++] << 8 | b[p++] << 16 | b[p++] << 24, t.Y = new Date(1e3 * u), t.ea = b[p++], t.da = b[p++], 0 < (4 & t.n) && (t.$ = b[p++] | b[p++] << 8, p += t.$), 0 < (t.n & W)) {
                    for (f = [], d = 0; 0 < (c = b[p++]);) f[d++] = String.fromCharCode(c);
                    t.name = f.join("")
                }
                if (0 < (t.n & q)) {
                    for (f = [], d = 0; 0 < (c = b[p++]);) f[d++] = String.fromCharCode(c);
                    t.A = f.join("")
                }
                0 < (t.n & G) && (t.R = 65535 & i(b, 0, p), t.R !== (b[p++] | b[p++] << 8) && n(Error("invalid header crc16"))), a = b[b.length - 4] | b[b.length - 3] << 8 | b[b.length - 2] << 16 | b[b.length - 1] << 24, b.length - p - 4 - 4 < 512 * a && (l = a), o = new g(b, {
                    index: p,
                    bufferSize: l
                }), t.data = s = o.h(), p = o.c, t.ba = h = (b[p++] | b[p++] << 8 | b[p++] << 16 | b[p++] << 24) >>> 0, i(s, x, x) !== h && n(Error("invalid CRC-32 checksum: 0x" + i(s, x, x).toString(16) + " / 0x" + h.toString(16))), t.ca = a = (b[p++] | b[p++] << 8 | b[p++] << 16 | b[p++] << 24) >>> 0, (4294967295 & s.length) !== a && n(Error("invalid input size: " + (4294967295 & s.length) + " / " + a)), this.t.push(t), this.c = p
            }
            this.D = S;
            var m, v, _, w = this.t,
                k = 0,
                y = 0;
            for (m = 0, v = w.length; m < v; ++m) y += w[m].data.length;
            if (E)
                for (_ = new Uint8Array(y), m = 0; m < v; ++m) _.set(w[m].data, k), k += w[m].data.length;
            else {
                for (_ = [], m = 0; m < v; ++m) _[m] = w[m].data;
                _ = Array.prototype.concat.apply([], _)
            }
            return _
        }, w.prototype.h = function() {
            var e, t = this.input;
            return e = this.K.h(), this.c = this.K.c, this.Z && (t[this.c++] << 24 | t[this.c++] << 16 | t[this.c++] << 8 | t[this.c++]) >>> 0 !== _(e) && n(Error("invalid adler-32 checksum")), e
        };
        var hn = 8,
            bn = P;
        k.prototype.g = function() {
            var e, t, i, r, a, o, s, l = 0;
            switch (s = this.a, e = hn) {
                case hn:
                    t = Math.LOG2E * Math.log(32768) - 8;
                    break;
                default:
                    n(Error("invalid compression method"))
            }
            switch (i = t << 4 | e, s[l++] = i, e) {
                case hn:
                    switch (this.k) {
                        case bn.NONE:
                            a = 0;
                            break;
                        case bn.v:
                            a = 1;
                            break;
                        case bn.o:
                            a = 2;
                            break;
                        default:
                            n(Error("unsupported compression type"))
                    }
                    break;
                default:
                    n(Error("invalid compression method"))
            }
            return r = a << 6 | 0, s[l++] = r | 31 - (256 * i + r) % 31, o = _(this.input), this.J.b = l, s = this.J.g(), l = s.length, E && (s = new Uint8Array(s.buffer), s.length <= l + 4 && (this.a = new Uint8Array(s.length + 4), this.a.set(s), s = this.a), s = s.subarray(0, l + 4)), s[l++] = o >> 24 & 255, s[l++] = o >> 16 & 255, s[l++] = o >> 8 & 255, s[l++] = 255 & o, s
        }, e("Zlib.Inflate", w), e("Zlib.Inflate.prototype.decompress", w.prototype.h), y("Zlib.Inflate.BufferType", {
            ADAPTIVE: Y.M,
            BLOCK: Y.N
        }), e("Zlib.Deflate", k), e("Zlib.Deflate.compress", function(n, e) {
            return new k(n, e).g()
        }), e("Zlib.Deflate.prototype.compress", k.prototype.g), y("Zlib.Deflate.CompressionType", {
            NONE: bn.NONE,
            FIXED: bn.v,
            DYNAMIC: bn.o
        }), e("Zlib.Gzip", b), e("Zlib.Gzip.prototype.compress", b.prototype.g), e("Zlib.Gunzip", v), e("Zlib.Gunzip.prototype.decompress", v.prototype.h), e("Zlib.Gunzip.prototype.getMembers", v.prototype.W), e("Zlib.GunzipMember", r), e("Zlib.GunzipMember.prototype.getName", r.prototype.getName), e("Zlib.GunzipMember.prototype.getData", r.prototype.getData), e("Zlib.GunzipMember.prototype.getMtime", r.prototype.X)
    }).call(this)
}, function(n, e, t) {
    (function(n) {
        (function() {
            "use strict";

            function e(n) {
                var e = new Uint8Array(n.slice(0, 2));
                return 2 === e.length && 31 === e[0] && 139 === e[1]
            }

            function i(n) {
                var e, t, i = [];
                for (e = 0; e < n.length; e++) t = n.charCodeAt(e), t < 128 ? i.push(t) : t < 2048 ? (i.push(192 | t >> 6), i.push(128 | 63 & t)) : t < 65536 ? (i.push(224 | t >> 12), i.push(128 | t >> 6 & 63), i.push(128 | 63 & t)) : (i.push(240 | t >> 18 & 7), i.push(128 | t >> 12 & 63), i.push(128 | t >> 6 & 63), i.push(128 | 63 & t));
                return i
            }

            function r(n) {
                var e, t = [];
                for (e = 0; e < n.length; e++) 0 == (128 & n[e]) ? t.push(127 & n[e]) : e + 1 < n.length && 192 == (224 & n[e]) && 128 == (192 & n[e + 1]) ? t.push((31 & n[e]) << 6 | 63 & n[e + 1]) : e + 2 < n.length && 224 == (240 & n[e]) && 128 == (192 & n[e + 1]) && 128 == (192 & n[e + 2]) ? t.push((15 & n[e]) << 12 | (63 & n[e + 1]) << 6 | 63 & n[e + 2]) : e + 3 < n.length && 240 == (248 & n[e]) && 128 == (192 & n[e + 1]) && 128 == (192 & n[e + 2]) && 128 == (192 & n[e + 3]) && t.push((7 & n[e]) << 18 | (63 & n[e + 1]) << 12 | (63 & n[e + 2]) << 6 | 63 & n[e + 3]);
                return String.fromCharCode.apply(null, t)
            }

            function a(n, e, t) {
                return "slice" in n ? n.slice(e, t) : new Uint8Array([].slice.call(n, e, t))
            }
            if ("undefined" == typeof ArrayBuffer) throw new Error("Missing required type ArrayBuffer");
            if ("undefined" == typeof DataView) throw new Error("Missing required type DataView");
            if ("undefined" == typeof Uint8Array) throw new Error("Missing required type Uint8Array");
            var o = this,
                s = t(39);
            o.tagTypes = {
                    end: 0,
                    byte: 1,
                    short: 2,
                    int: 3,
                    long: 4,
                    float: 5,
                    double: 6,
                    byteArray: 7,
                    string: 8,
                    list: 9,
                    compound: 10,
                    intArray: 11
                }, o.tagTypeNames = {},
                function() {
                    for (var n in o.tagTypes) o.tagTypes.hasOwnProperty(n) && (o.tagTypeNames[o.tagTypes[n]] = n)
                }(), o.Writer = function() {
                    function n(n) {
                        var e = t.offset + n;
                        if (!(r.byteLength >= e)) {
                            for (var i = r.byteLength; i < e;) i *= 2;
                            var o = new ArrayBuffer(i),
                                l = new Uint8Array(o);
                            l.set(s), t.offset > r.byteLength && l.fill(0, r.byteLength, t.offset), r = o, a = new DataView(o), s = l
                        }
                    }

                    function e(e, i, r) {
                        return n(i), a["set" + e](t.offset, r), t.offset += i, t
                    }
                    var t = this,
                        r = new ArrayBuffer(1024),
                        a = new DataView(r),
                        s = new Uint8Array(r);
                    this.offset = 0, this.getData = function() {
                        return n(0), r.slice(0, t.offset)
                    }, this[o.tagTypes.byte] = e.bind(this, "Int8", 1), this.ubyte = e.bind(this, "Uint8", 1), this[o.tagTypes.short] = e.bind(this, "Int16", 2), this[o.tagTypes.int] = e.bind(this, "Int32", 4), this[o.tagTypes.float] = e.bind(this, "Float32", 4), this[o.tagTypes.double] = e.bind(this, "Float64", 8), this[o.tagTypes.long] = function(n) {
                        return t.int(n[0]), t.int(n[1]), t
                    }, this[o.tagTypes.byteArray] = function(e) {
                        return this.int(e.length), n(e.length), s.set(e, this.offset), this.offset += e.length, this
                    }, this[o.tagTypes.intArray] = function(n) {
                        this.int(n.length);
                        var e;
                        for (e = 0; e < n.length; e++) this.int(n[e]);
                        return this
                    }, this[o.tagTypes.string] = function(e) {
                        var t = i(e);
                        return this.short(t.length), n(t.length), s.set(t, this.offset), this.offset += t.length, this
                    }, this[o.tagTypes.list] = function(n) {
                        this.byte(o.tagTypes[n.type]), this.int(n.value.length);
                        var e;
                        for (e = 0; e < n.value.length; e++) this[n.type](n.value[e]);
                        return this
                    }, this[o.tagTypes.compound] = function(n) {
                        var e = this;
                        return Object.keys(n).map(function(t) {
                            e.byte(o.tagTypes[n[t].type]), e.string(t), e[n[t].type](n[t].value)
                        }), this.byte(o.tagTypes.end), this
                    };
                    var l;
                    for (l in o.tagTypes) o.tagTypes.hasOwnProperty(l) && (this[l] = this[o.tagTypes[l]])
                }, o.Reader = function(n) {
                    function e(n, e) {
                        var i = s["get" + n](t.offset);
                        return t.offset += e, i
                    }
                    if (!n) throw new Error('Argument "buffer" is falsy');
                    var t = this;
                    this.offset = 0;
                    var i = new Uint8Array(n),
                        s = new DataView(i.buffer);
                    this[o.tagTypes.byte] = e.bind(this, "Int8", 1), this.ubyte = e.bind(this, "Uint8", 1), this[o.tagTypes.short] = e.bind(this, "Int16", 2), this[o.tagTypes.int] = e.bind(this, "Int32", 4), this[o.tagTypes.float] = e.bind(this, "Float32", 4), this[o.tagTypes.double] = e.bind(this, "Float64", 8), this[o.tagTypes.long] = function() {
                        return [this.int(), this.int()]
                    }, this[o.tagTypes.byteArray] = function() {
                        var n, e = this.int(),
                            t = [];
                        for (n = 0; n < e; n++) t.push(this.byte());
                        return t
                    }, this[o.tagTypes.intArray] = function() {
                        var n, e = this.int(),
                            t = [];
                        for (n = 0; n < e; n++) t.push(this.int());
                        return t
                    }, this[o.tagTypes.string] = function() {
                        var n = this.short(),
                            e = a(i, this.offset, this.offset + n);
                        return this.offset += n, r(e)
                    }, this[o.tagTypes.list] = function() {
                        var n, e = this.byte(),
                            t = this.int(),
                            i = [];
                        for (n = 0; n < t; n++) i.push(this[e]());
                        return {
                            type: o.tagTypeNames[e],
                            value: i
                        }
                    }, this[o.tagTypes.compound] = function() {
                        for (var n = {};;) {
                            var e = this.byte();
                            if (e === o.tagTypes.end) break;
                            var t = this.string(),
                                i = this[e]();
                            n[t] = {
                                type: o.tagTypeNames[e],
                                value: i
                            }
                        }
                        return n
                    };
                    var l;
                    for (l in o.tagTypes) o.tagTypes.hasOwnProperty(l) && (this[l] = this[o.tagTypes[l]])
                }, o.writeUncompressed = function(n) {
                    if (!n) throw new Error('Argument "value" is falsy');
                    var e = new o.Writer;
                    return e.byte(o.tagTypes.compound), e.string(n.name), e.compound(n.value), e.getData()
                }, o.parseUncompressed = function(n) {
                    if (!n) throw new Error('Argument "data" is falsy');
                    var e = new o.Reader(n);
                    if (e.byte() !== o.tagTypes.compound) throw new Error("Top tag should be a compound");
                    return {
                        name: e.string(),
                        value: e.compound()
                    }
                }, o.parse = function(t, i) {
                    if (!t) throw new Error('Argument "data" is falsy');
                    var r = this;
                    if (e(t))
                        if (s) {
                            var a;
                            a = t.length ? t : void 0 !== n ? new n(t) : new Uint8Array(t), s.gunzip(a, function(n, e) {
                                n ? i(n, null) : i(null, r.parseUncompressed(e))
                            })
                        } else i(new Error("NBT archive is compressed but zlib is not available"), null);
                    else i(null, r.parseUncompressed(t))
                }
        }).apply(e)
    }).call(e, t(3).Buffer)
}, function(n, e, t) {
    "use strict";

    function i(n) {
        var e = n.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = n.indexOf("=");
        return -1 === t && (t = e), [t, t === e ? 0 : 4 - t % 4]
    }

    function r(n) {
        var e = i(n),
            t = e[0],
            r = e[1];
        return 3 * (t + r) / 4 - r
    }

    function a(n, e, t) {
        return 3 * (e + t) / 4 - t
    }

    function o(n) {
        var e, t, r = i(n),
            o = r[0],
            s = r[1],
            l = new u(a(n, o, s)),
            c = 0,
            d = s > 0 ? o - 4 : o;
        for (t = 0; t < d; t += 4) e = f[n.charCodeAt(t)] << 18 | f[n.charCodeAt(t + 1)] << 12 | f[n.charCodeAt(t + 2)] << 6 | f[n.charCodeAt(t + 3)], l[c++] = e >> 16 & 255, l[c++] = e >> 8 & 255, l[c++] = 255 & e;
        return 2 === s && (e = f[n.charCodeAt(t)] << 2 | f[n.charCodeAt(t + 1)] >> 4, l[c++] = 255 & e), 1 === s && (e = f[n.charCodeAt(t)] << 10 | f[n.charCodeAt(t + 1)] << 4 | f[n.charCodeAt(t + 2)] >> 2, l[c++] = e >> 8 & 255, l[c++] = 255 & e), l
    }

    function s(n) {
        return d[n >> 18 & 63] + d[n >> 12 & 63] + d[n >> 6 & 63] + d[63 & n]
    }

    function l(n, e, t) {
        for (var i, r = [], a = e; a < t; a += 3) i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (255 & n[a + 2]), r.push(s(i));
        return r.join("")
    }

    function c(n) {
        for (var e, t = n.length, i = t % 3, r = [], a = 0, o = t - i; a < o; a += 16383) r.push(l(n, a, a + 16383 > o ? o : a + 16383));
        return 1 === i ? (e = n[t - 1], r.push(d[e >> 2] + d[e << 4 & 63] + "==")) : 2 === i && (e = (n[t - 2] << 8) + n[t - 1], r.push(d[e >> 10] + d[e >> 4 & 63] + d[e << 2 & 63] + "=")), r.join("")
    }
    e.byteLength = r, e.toByteArray = o, e.fromByteArray = c;
    for (var d = [], f = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = 0, g = h.length; b < g; ++b) d[b] = h[b], f[h.charCodeAt(b)] = b;
    f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
}, function(n, e) {
    e.read = function(n, e, t, i, r) {
        var a, o, s = 8 * r - i - 1,
            l = (1 << s) - 1,
            c = l >> 1,
            d = -7,
            f = t ? r - 1 : 0,
            u = t ? -1 : 1,
            h = n[e + f];
        for (f += u, a = h & (1 << -d) - 1, h >>= -d, d += s; d > 0; a = 256 * a + n[e + f], f += u, d -= 8);
        for (o = a & (1 << -d) - 1, a >>= -d, d += i; d > 0; o = 256 * o + n[e + f], f += u, d -= 8);
        if (0 === a) a = 1 - c;
        else {
            if (a === l) return o ? NaN : 1 / 0 * (h ? -1 : 1);
            o += Math.pow(2, i), a -= c
        }
        return (h ? -1 : 1) * o * Math.pow(2, a - i)
    }, e.write = function(n, e, t, i, r, a) {
        var o, s, l, c = 8 * a - r - 1,
            d = (1 << c) - 1,
            f = d >> 1,
            u = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = i ? 0 : a - 1,
            b = i ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = d) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), e += o + f >= 1 ? u / l : u * Math.pow(2, 1 - f), e * l >= 2 && (o++, l /= 2), o + f >= d ? (s = 0, o = d) : o + f >= 1 ? (s = (e * l - 1) * Math.pow(2, r), o += f) : (s = e * Math.pow(2, f - 1) * Math.pow(2, r), o = 0)); r >= 8; n[t + h] = 255 & s, h += b, s /= 256, r -= 8);
        for (o = o << r | s, c += r; c > 0; n[t + h] = 255 & o, h += b, o /= 256, c -= 8);
        n[t + h - b] |= 128 * g
    }
}, function(n, e, t) {
    "use strict";
    (function(n) {
        function i(n, e, t) {
            function i() {
                for (var e; null !== (e = n.read());) o.push(e), s += e.length;
                n.once("readable", i)
            }

            function r(e) {
                n.removeListener("end", a), n.removeListener("readable", i), t(e)
            }

            function a() {
                var e, i = null;
                s >= k ? i = new RangeError(y) : e = p.concat(o, s), o = [], n.close(), t(i, e)
            }
            var o = [],
                s = 0;
            n.on("error", r), n.on("end", a), n.end(e), i()
        }

        function r(n, e) {
            if ("string" == typeof e && (e = p.from(e)), !p.isBuffer(e)) throw new TypeError("Not a string or buffer");
            var t = n._finishFlushFlag;
            return n._processChunk(e, t)
        }

        function a(n) {
            if (!(this instanceof a)) return new a(n);
            h.call(this, n, v.DEFLATE)
        }

        function o(n) {
            if (!(this instanceof o)) return new o(n);
            h.call(this, n, v.INFLATE)
        }

        function s(n) {
            if (!(this instanceof s)) return new s(n);
            h.call(this, n, v.GZIP)
        }

        function l(n) {
            if (!(this instanceof l)) return new l(n);
            h.call(this, n, v.GUNZIP)
        }

        function c(n) {
            if (!(this instanceof c)) return new c(n);
            h.call(this, n, v.DEFLATERAW)
        }

        function d(n) {
            if (!(this instanceof d)) return new d(n);
            h.call(this, n, v.INFLATERAW)
        }

        function f(n) {
            if (!(this instanceof f)) return new f(n);
            h.call(this, n, v.UNZIP)
        }

        function u(n) {
            return n === v.Z_NO_FLUSH || n === v.Z_PARTIAL_FLUSH || n === v.Z_SYNC_FLUSH || n === v.Z_FULL_FLUSH || n === v.Z_FINISH || n === v.Z_BLOCK
        }

        function h(n, t) {
            var i = this;
            if (this._opts = n = n || {}, this._chunkSize = n.chunkSize || e.Z_DEFAULT_CHUNK, m.call(this, n), n.flush && !u(n.flush)) throw new Error("Invalid flush flag: " + n.flush);
            if (n.finishFlush && !u(n.finishFlush)) throw new Error("Invalid flush flag: " + n.finishFlush);
            if (this._flushFlag = n.flush || v.Z_NO_FLUSH, this._finishFlushFlag = void 0 !== n.finishFlush ? n.finishFlush : v.Z_FINISH, n.chunkSize && (n.chunkSize < e.Z_MIN_CHUNK || n.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + n.chunkSize);
            if (n.windowBits && (n.windowBits < e.Z_MIN_WINDOWBITS || n.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + n.windowBits);
            if (n.level && (n.level < e.Z_MIN_LEVEL || n.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + n.level);
            if (n.memLevel && (n.memLevel < e.Z_MIN_MEMLEVEL || n.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + n.memLevel);
            if (n.strategy && n.strategy != e.Z_FILTERED && n.strategy != e.Z_HUFFMAN_ONLY && n.strategy != e.Z_RLE && n.strategy != e.Z_FIXED && n.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + n.strategy);
            if (n.dictionary && !p.isBuffer(n.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
            this._handle = new v.Zlib(t);
            var r = this;
            this._hadError = !1, this._handle.onerror = function(n, t) {
                b(r), r._hadError = !0;
                var i = new Error(n);
                i.errno = t, i.code = e.codes[t], r.emit("error", i)
            };
            var a = e.Z_DEFAULT_COMPRESSION;
            "number" == typeof n.level && (a = n.level);
            var o = e.Z_DEFAULT_STRATEGY;
            "number" == typeof n.strategy && (o = n.strategy), this._handle.init(n.windowBits || e.Z_DEFAULT_WINDOWBITS, a, n.memLevel || e.Z_DEFAULT_MEMLEVEL, o, n.dictionary), this._buffer = p.allocUnsafe(this._chunkSize), this._offset = 0, this._level = a, this._strategy = o, this.once("end", this.close), Object.defineProperty(this, "_closed", {
                get: function() {
                    return !i._handle
                },
                configurable: !0,
                enumerable: !0
            })
        }

        function b(e, t) {
            t && n.nextTick(t), e._handle && (e._handle.close(), e._handle = null)
        }

        function g(n) {
            n.emit("close")
        }
        var p = t(3).Buffer,
            m = t(40).Transform,
            v = t(52),
            _ = t(23),
            w = t(22).ok,
            k = t(3).kMaxLength,
            y = "Cannot create final Buffer. It would be larger than 0x" + k.toString(16) + " bytes";
        v.Z_MIN_WINDOWBITS = 8, v.Z_MAX_WINDOWBITS = 15, v.Z_DEFAULT_WINDOWBITS = 15, v.Z_MIN_CHUNK = 64, v.Z_MAX_CHUNK = 1 / 0, v.Z_DEFAULT_CHUNK = 16384, v.Z_MIN_MEMLEVEL = 1, v.Z_MAX_MEMLEVEL = 9, v.Z_DEFAULT_MEMLEVEL = 8, v.Z_MIN_LEVEL = -1, v.Z_MAX_LEVEL = 9, v.Z_DEFAULT_LEVEL = v.Z_DEFAULT_COMPRESSION;
        for (var x = Object.keys(v), S = 0; S < x.length; S++) {
            var z = x[S];
            z.match(/^Z/) && Object.defineProperty(e, z, {
                enumerable: !0,
                value: v[z],
                writable: !1
            })
        }
        for (var E = {
                Z_OK: v.Z_OK,
                Z_STREAM_END: v.Z_STREAM_END,
                Z_NEED_DICT: v.Z_NEED_DICT,
                Z_ERRNO: v.Z_ERRNO,
                Z_STREAM_ERROR: v.Z_STREAM_ERROR,
                Z_DATA_ERROR: v.Z_DATA_ERROR,
                Z_MEM_ERROR: v.Z_MEM_ERROR,
                Z_BUF_ERROR: v.Z_BUF_ERROR,
                Z_VERSION_ERROR: v.Z_VERSION_ERROR
            }, R = Object.keys(E), A = 0; A < R.length; A++) {
            var C = R[A];
            E[E[C]] = C
        }
        Object.defineProperty(e, "codes", {
            enumerable: !0,
            value: Object.freeze(E),
            writable: !1
        }), e.Deflate = a, e.Inflate = o, e.Gzip = s, e.Gunzip = l, e.DeflateRaw = c, e.InflateRaw = d, e.Unzip = f, e.createDeflate = function(n) {
            return new a(n)
        }, e.createInflate = function(n) {
            return new o(n)
        }, e.createDeflateRaw = function(n) {
            return new c(n)
        }, e.createInflateRaw = function(n) {
            return new d(n)
        }, e.createGzip = function(n) {
            return new s(n)
        }, e.createGunzip = function(n) {
            return new l(n)
        }, e.createUnzip = function(n) {
            return new f(n)
        }, e.deflate = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new a(e), n, t)
        }, e.deflateSync = function(n, e) {
            return r(new a(e), n)
        }, e.gzip = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new s(e), n, t)
        }, e.gzipSync = function(n, e) {
            return r(new s(e), n)
        }, e.deflateRaw = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new c(e), n, t)
        }, e.deflateRawSync = function(n, e) {
            return r(new c(e), n)
        }, e.unzip = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new f(e), n, t)
        }, e.unzipSync = function(n, e) {
            return r(new f(e), n)
        }, e.inflate = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new o(e), n, t)
        }, e.inflateSync = function(n, e) {
            return r(new o(e), n)
        }, e.gunzip = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new l(e), n, t)
        }, e.gunzipSync = function(n, e) {
            return r(new l(e), n)
        }, e.inflateRaw = function(n, e, t) {
            return "function" == typeof e && (t = e, e = {}), i(new d(e), n, t)
        }, e.inflateRawSync = function(n, e) {
            return r(new d(e), n)
        }, _.inherits(h, m), h.prototype.params = function(t, i, r) {
            if (t < e.Z_MIN_LEVEL || t > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + t);
            if (i != e.Z_FILTERED && i != e.Z_HUFFMAN_ONLY && i != e.Z_RLE && i != e.Z_FIXED && i != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + i);
            if (this._level !== t || this._strategy !== i) {
                var a = this;
                this.flush(v.Z_SYNC_FLUSH, function() {
                    w(a._handle, "zlib binding closed"), a._handle.params(t, i), a._hadError || (a._level = t, a._strategy = i, r && r())
                })
            } else n.nextTick(r)
        }, h.prototype.reset = function() {
            return w(this._handle, "zlib binding closed"), this._handle.reset()
        }, h.prototype._flush = function(n) {
            this._transform(p.alloc(0), "", n)
        }, h.prototype.flush = function(e, t) {
            var i = this,
                r = this._writableState;
            ("function" == typeof e || void 0 === e && !t) && (t = e, e = v.Z_FULL_FLUSH), r.ended ? t && n.nextTick(t) : r.ending ? t && this.once("end", t) : r.needDrain ? t && this.once("drain", function() {
                return i.flush(e, t)
            }) : (this._flushFlag = e, this.write(p.alloc(0), "", t))
        }, h.prototype.close = function(e) {
            b(this, e), n.nextTick(g, this)
        }, h.prototype._transform = function(n, e, t) {
            var i, r = this._writableState,
                a = r.ending || r.ended,
                o = a && (!n || r.length === n.length);
            return null === n || p.isBuffer(n) ? this._handle ? (o ? i = this._finishFlushFlag : (i = this._flushFlag, n.length >= r.length && (this._flushFlag = this._opts.flush || v.Z_NO_FLUSH)), void this._processChunk(n, i, t)) : t(new Error("zlib binding closed")) : t(new Error("invalid input"))
        }, h.prototype._processChunk = function(n, e, t) {
            function i(c, u) {
                if (this && (this.buffer = null, this.callback = null), !s._hadError) {
                    var h = a - u;
                    if (w(h >= 0, "have should not go down"), h > 0) {
                        var b = s._buffer.slice(s._offset, s._offset + h);
                        s._offset += h, l ? s.push(b) : (d.push(b), f += b.length)
                    }
                    if ((0 === u || s._offset >= s._chunkSize) && (a = s._chunkSize, s._offset = 0, s._buffer = p.allocUnsafe(s._chunkSize)), 0 === u) {
                        if (o += r - c, r = c, !l) return !0;
                        var g = s._handle.write(e, n, o, r, s._buffer, s._offset, s._chunkSize);
                        return g.callback = i, void(g.buffer = n)
                    }
                    if (!l) return !1;
                    t()
                }
            }
            var r = n && n.length,
                a = this._chunkSize - this._offset,
                o = 0,
                s = this,
                l = "function" == typeof t;
            if (!l) {
                var c, d = [],
                    f = 0;
                this.on("error", function(n) {
                    c = n
                }), w(this._handle, "zlib binding closed");
                do {
                    var u = this._handle.writeSync(e, n, o, r, this._buffer, this._offset, a)
                } while (!this._hadError && i(u[0], u[1]));
                if (this._hadError) throw c;
                if (f >= k) throw b(this), new RangeError(y);
                var h = p.concat(d, f);
                return b(this), h
            }
            w(this._handle, "zlib binding closed");
            var g = this._handle.write(e, n, o, r, this._buffer, this._offset, a);
            g.buffer = n, g.callback = i
        }, _.inherits(a, h), _.inherits(o, h), _.inherits(s, h), _.inherits(l, h), _.inherits(c, h), _.inherits(d, h), _.inherits(f, h)
    }).call(e, t(1))
}, function(n, e, t) {
    function i() {
        r.call(this)
    }
    n.exports = i;
    var r = t(9).EventEmitter;
    t(4)(i, r), i.Readable = t(10), i.Writable = t(48), i.Duplex = t(49), i.Transform = t(50), i.PassThrough = t(51), i.Stream = i, i.prototype.pipe = function(n, e) {
        function t(e) {
            n.writable && !1 === n.write(e) && c.pause && c.pause()
        }

        function i() {
            c.readable && c.resume && c.resume()
        }

        function a() {
            d || (d = !0, n.end())
        }

        function o() {
            d || (d = !0, "function" == typeof n.destroy && n.destroy())
        }

        function s(n) {
            if (l(), 0 === r.listenerCount(this, "error")) throw n
        }

        function l() {
            c.removeListener("data", t), n.removeListener("drain", i), c.removeListener("end", a), c.removeListener("close", o), c.removeListener("error", s), n.removeListener("error", s), c.removeListener("end", l), c.removeListener("close", l), n.removeListener("close", l)
        }
        var c = this;
        c.on("data", t), n.on("drain", i), n._isStdio || e && !1 === e.end || (c.on("end", a), c.on("close", o));
        var d = !1;
        return c.on("error", s), n.on("error", s), c.on("end", l), c.on("close", l), n.on("close", l), n.emit("pipe", c), n
    }
}, function(n, e) {}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(n, e, t) {
        n.copy(e, t)
    }
    var a = t(7).Buffer,
        o = t(43);
    n.exports = function() {
        function n() {
            i(this, n), this.head = null, this.tail = null, this.length = 0
        }
        return n.prototype.push = function(n) {
            var e = {
                data: n,
                next: null
            };
            this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
        }, n.prototype.unshift = function(n) {
            var e = {
                data: n,
                next: this.head
            };
            0 === this.length && (this.tail = e), this.head = e, ++this.length
        }, n.prototype.shift = function() {
            if (0 !== this.length) {
                var n = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, n
            }
        }, n.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0
        }, n.prototype.join = function(n) {
            if (0 === this.length) return "";
            for (var e = this.head, t = "" + e.data; e = e.next;) t += n + e.data;
            return t
        }, n.prototype.concat = function(n) {
            if (0 === this.length) return a.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var e = a.allocUnsafe(n >>> 0), t = this.head, i = 0; t;) r(t.data, e, i), i += t.data.length, t = t.next;
            return e
        }, n
    }(), o && o.inspect && o.inspect.custom && (n.exports.prototype[o.inspect.custom] = function() {
        var n = o.inspect({
            length: this.length
        });
        return this.constructor.name + " " + n
    })
}, function(n, e) {}, function(n, e, t) {
    (function(n) {
        function i(n, e) {
            this._id = n, this._clearFn = e
        }
        var r = void 0 !== n && n || "undefined" != typeof self && self || window,
            a = Function.prototype.apply;
        e.setTimeout = function() {
            return new i(a.call(setTimeout, r, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new i(a.call(setInterval, r, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(n) {
            n && n.close()
        }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
            this._clearFn.call(r, this._id)
        }, e.enroll = function(n, e) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = e
        }, e.unenroll = function(n) {
            clearTimeout(n._idleTimeoutId), n._idleTimeout = -1
        }, e._unrefActive = e.active = function(n) {
            clearTimeout(n._idleTimeoutId);
            var e = n._idleTimeout;
            e >= 0 && (n._idleTimeoutId = setTimeout(function() {
                n._onTimeout && n._onTimeout()
            }, e))
        }, t(45), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== n && n.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== n && n.clearImmediate || this && this.clearImmediate
    }).call(e, t(0))
}, function(n, e, t) {
    (function(n, e) {
        ! function(n, t) {
            "use strict";

            function i(n) {
                "function" != typeof n && (n = new Function("" + n));
                for (var e = new Array(arguments.length - 1), t = 0; t < e.length; t++) e[t] = arguments[t + 1];
                var i = {
                    callback: n,
                    args: e
                };
                return c[l] = i, s(l), l++
            }

            function r(n) {
                delete c[n]
            }

            function a(n) {
                var e = n.callback,
                    i = n.args;
                switch (i.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(i[0]);
                        break;
                    case 2:
                        e(i[0], i[1]);
                        break;
                    case 3:
                        e(i[0], i[1], i[2]);
                        break;
                    default:
                        e.apply(t, i)
                }
            }

            function o(n) {
                if (d) setTimeout(o, 0, n);
                else {
                    var e = c[n];
                    if (e) {
                        d = !0;
                        try {
                            a(e)
                        } finally {
                            r(n), d = !1
                        }
                    }
                }
            }
            if (!n.setImmediate) {
                var s, l = 1,
                    c = {},
                    d = !1,
                    f = n.document,
                    u = Object.getPrototypeOf && Object.getPrototypeOf(n);
                u = u && u.setTimeout ? u : n, "[object process]" === {}.toString.call(n.process) ? function() {
                    s = function(n) {
                        e.nextTick(function() {
                            o(n)
                        })
                    }
                }() : function() {
                    if (n.postMessage && !n.importScripts) {
                        var e = !0,
                            t = n.onmessage;
                        return n.onmessage = function() {
                            e = !1
                        }, n.postMessage("", "*"), n.onmessage = t, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        t = function(t) {
                            t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(e) && o(+t.data.slice(e.length))
                        };
                    n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t), s = function(t) {
                        n.postMessage(e + t, "*")
                    }
                }() : n.MessageChannel ? function() {
                    var n = new MessageChannel;
                    n.port1.onmessage = function(n) {
                        o(n.data)
                    }, s = function(e) {
                        n.port2.postMessage(e)
                    }
                }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                    var n = f.documentElement;
                    s = function(e) {
                        var t = f.createElement("script");
                        t.onreadystatechange = function() {
                            o(e), t.onreadystatechange = null, n.removeChild(t), t = null
                        }, n.appendChild(t)
                    }
                }() : function() {
                    s = function(n) {
                        setTimeout(o, 0, n)
                    }
                }(), u.setImmediate = i, u.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === n ? this : n : self)
    }).call(e, t(0), t(1))
}, function(n, e, t) {
    (function(e) {
        function t(n, e) {
            function t() {
                if (!r) {
                    if (i("throwDeprecation")) throw new Error(e);
                    i("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
                }
                return n.apply(this, arguments)
            }
            if (i("noDeprecation")) return n;
            var r = !1;
            return t
        }

        function i(n) {
            try {
                if (!e.localStorage) return !1
            } catch (n) {
                return !1
            }
            var t = e.localStorage[n];
            return null != t && "true" === String(t).toLowerCase()
        }
        n.exports = t
    }).call(e, t(0))
}, function(n, e, t) {
    "use strict";

    function i(n) {
        if (!(this instanceof i)) return new i(n);
        r.call(this, n)
    }
    n.exports = i;
    var r = t(21),
        a = t(5);
    a.inherits = t(4), a.inherits(i, r), i.prototype._transform = function(n, e, t) {
        t(null, n)
    }
}, function(n, e, t) {
    n.exports = t(11)
}, function(n, e, t) {
    n.exports = t(2)
}, function(n, e, t) {
    n.exports = t(10).Transform
}, function(n, e, t) {
    n.exports = t(10).PassThrough
}, function(n, e, t) {
    "use strict";
    (function(n, i) {
        function r(n) {
            if ("number" != typeof n || n < e.DEFLATE || n > e.UNZIP) throw new TypeError("Bad argument");
            this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = n, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0
        }
        var a = t(22),
            o = t(56),
            s = t(57),
            l = t(60),
            c = t(63);
        for (var d in c) e[d] = c[d];
        e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7;
        r.prototype.close = function() {
            if (this.write_in_progress) return void(this.pending_close = !0);
            this.pending_close = !1, a(this.init_done, "close before init"), a(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? s.deflateEnd(this.strm) : this.mode !== e.INFLATE && this.mode !== e.GUNZIP && this.mode !== e.INFLATERAW && this.mode !== e.UNZIP || l.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null
        }, r.prototype.write = function(n, e, t, i, r, a, o) {
            return this._write(!0, n, e, t, i, r, a, o)
        }, r.prototype.writeSync = function(n, e, t, i, r, a, o) {
            return this._write(!1, n, e, t, i, r, a, o)
        }, r.prototype._write = function(t, r, o, s, l, c, d, f) {
            if (a.equal(arguments.length, 8), a(this.init_done, "write before init"), a(this.mode !== e.NONE, "already finalized"), a.equal(!1, this.write_in_progress, "write already in progress"), a.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, a.equal(!1, void 0 === r, "must provide flush value"), this.write_in_progress = !0, r !== e.Z_NO_FLUSH && r !== e.Z_PARTIAL_FLUSH && r !== e.Z_SYNC_FLUSH && r !== e.Z_FULL_FLUSH && r !== e.Z_FINISH && r !== e.Z_BLOCK) throw new Error("Invalid flush value");
            if (null == o && (o = n.alloc(0), l = 0, s = 0), this.strm.avail_in = l, this.strm.input = o, this.strm.next_in = s, this.strm.avail_out = f, this.strm.output = c, this.strm.next_out = d, this.flush = r, t) {
                var u = this;
                return i.nextTick(function() {
                    u._process(), u._after()
                }), this
            }
            if (this._process(), this._checkError()) return this._afterSync()
        }, r.prototype._afterSync = function() {
            var n = this.strm.avail_out,
                e = this.strm.avail_in;
            return this.write_in_progress = !1, [e, n]
        }, r.prototype._process = function() {
            var n = null;
            switch (this.mode) {
                case e.DEFLATE:
                case e.GZIP:
                case e.DEFLATERAW:
                    this.err = s.deflate(this.strm, this.flush);
                    break;
                case e.UNZIP:
                    switch (this.strm.avail_in > 0 && (n = this.strm.next_in), this.gzip_id_bytes_read) {
                        case 0:
                            if (null === n) break;
                            if (31 !== this.strm.input[n]) {
                                this.mode = e.INFLATE;
                                break
                            }
                            if (this.gzip_id_bytes_read = 1, n++, 1 === this.strm.avail_in) break;
                        case 1:
                            if (null === n) break;
                            139 === this.strm.input[n] ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;
                            break;
                        default:
                            throw new Error("invalid number of gzip magic number bytes read")
                    }
                case e.INFLATE:
                case e.GUNZIP:
                case e.INFLATERAW:
                    for (this.err = l.inflate(this.strm, this.flush), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = l.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = l.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = l.inflate(this.strm, this.flush);
                    break;
                default:
                    throw new Error("Unknown mode " + this.mode)
            }
        }, r.prototype._checkError = function() {
            switch (this.err) {
                case e.Z_OK:
                case e.Z_BUF_ERROR:
                    if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH) return this._error("unexpected end of file"), !1;
                    break;
                case e.Z_STREAM_END:
                    break;
                case e.Z_NEED_DICT:
                    return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;
                default:
                    return this._error("Zlib error"), !1
            }
            return !0
        }, r.prototype._after = function() {
            if (this._checkError()) {
                var n = this.strm.avail_out,
                    e = this.strm.avail_in;
                this.write_in_progress = !1, this.callback(e, n), this.pending_close && this.close()
            }
        }, r.prototype._error = function(n) {
            this.strm.msg && (n = this.strm.msg), this.onerror(n, this.err), this.write_in_progress = !1, this.pending_close && this.close()
        }, r.prototype.init = function(n, t, i, r, o) {
            a(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), a(n >= 8 && n <= 15, "invalid windowBits"), a(t >= -1 && t <= 9, "invalid compression level"), a(i >= 1 && i <= 9, "invalid memlevel"), a(r === e.Z_FILTERED || r === e.Z_HUFFMAN_ONLY || r === e.Z_RLE || r === e.Z_FIXED || r === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(t, n, i, r, o), this._setDictionary()
        }, r.prototype.params = function() {
            throw new Error("deflateParams Not supported")
        }, r.prototype.reset = function() {
            this._reset(), this._setDictionary()
        }, r.prototype._init = function(n, t, i, r, a) {
            switch (this.level = n, this.windowBits = t, this.memLevel = i, this.strategy = r, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, this.mode !== e.GZIP && this.mode !== e.GUNZIP || (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new o, this.mode) {
                case e.DEFLATE:
                case e.GZIP:
                case e.DEFLATERAW:
                    this.err = s.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                    break;
                case e.INFLATE:
                case e.GUNZIP:
                case e.INFLATERAW:
                case e.UNZIP:
                    this.err = l.inflateInit2(this.strm, this.windowBits);
                    break;
                default:
                    throw new Error("Unknown mode " + this.mode)
            }
            this.err !== e.Z_OK && this._error("Init error"), this.dictionary = a, this.write_in_progress = !1, this.init_done = !0
        }, r.prototype._setDictionary = function() {
            if (null != this.dictionary) {
                switch (this.err = e.Z_OK, this.mode) {
                    case e.DEFLATE:
                    case e.DEFLATERAW:
                        this.err = s.deflateSetDictionary(this.strm, this.dictionary)
                }
                this.err !== e.Z_OK && this._error("Failed to set dictionary")
            }
        }, r.prototype._reset = function() {
            switch (this.err = e.Z_OK, this.mode) {
                case e.DEFLATE:
                case e.DEFLATERAW:
                case e.GZIP:
                    this.err = s.deflateReset(this.strm);
                    break;
                case e.INFLATE:
                case e.INFLATERAW:
                case e.GUNZIP:
                    this.err = l.inflateReset(this.strm)
            }
            this.err !== e.Z_OK && this._error("Failed to reset stream")
        }, e.Zlib = r
    }).call(e, t(3).Buffer, t(1))
}, function(n, e, t) {
    "use strict";

    function i(n) {
        if (null === n || void 0 === n) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(n)
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    n.exports = function() {
        try {
            if (!Object.assign) return !1;
            var n = new String("abc");
            if (n[5] = "de", "5" === Object.getOwnPropertyNames(n)[0]) return !1;
            for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(n) {
                    return e[n]
                }).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(n) {
                i[n] = n
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (n) {
            return !1
        }
    }() ? Object.assign : function(n, e) {
        for (var t, s, l = i(n), c = 1; c < arguments.length; c++) {
            t = Object(arguments[c]);
            for (var d in t) a.call(t, d) && (l[d] = t[d]);
            if (r) {
                s = r(t);
                for (var f = 0; f < s.length; f++) o.call(t, s[f]) && (l[s[f]] = t[s[f]])
            }
        }
        return l
    }
}, function(n, e) {
    n.exports = function(n) {
        return n && "object" == typeof n && "function" == typeof n.copy && "function" == typeof n.fill && "function" == typeof n.readUInt8
    }
}, function(n, e) {
    "function" == typeof Object.create ? n.exports = function(n, e) {
        n.super_ = e, n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : n.exports = function(n, e) {
        n.super_ = e;
        var t = function() {};
        t.prototype = e.prototype, n.prototype = new t, n.prototype.constructor = n
    }
}, function(n, e, t) {
    "use strict";

    function i() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
    }
    n.exports = i
}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        return n.msg = M[e], e
    }

    function r(n) {
        return (n << 1) - (n > 4 ? 9 : 0)
    }

    function a(n) {
        for (var e = n.length; --e >= 0;) n[e] = 0
    }

    function o(n) {
        var e = n.state,
            t = e.pending;
        t > n.avail_out && (t = n.avail_out), 0 !== t && (T.arraySet(n.output, e.pending_buf, e.pending_out, t, n.next_out), n.next_out += t, e.pending_out += t, n.total_out += t, n.avail_out -= t, e.pending -= t, 0 === e.pending && (e.pending_out = 0))
    }

    function s(n, e) {
        L._tr_flush_block(n, n.block_start >= 0 ? n.block_start : -1, n.strstart - n.block_start, e), n.block_start = n.strstart, o(n.strm)
    }

    function l(n, e) {
        n.pending_buf[n.pending++] = e
    }

    function c(n, e) {
        n.pending_buf[n.pending++] = e >>> 8 & 255, n.pending_buf[n.pending++] = 255 & e
    }

    function d(n, e, t, i) {
        var r = n.avail_in;
        return r > i && (r = i), 0 === r ? 0 : (n.avail_in -= r, T.arraySet(e, n.input, n.next_in, r, t), 1 === n.state.wrap ? n.adler = I(n.adler, e, r, t) : 2 === n.state.wrap && (n.adler = B(n.adler, e, r, t)), n.next_in += r, n.total_in += r, r)
    }

    function f(n, e) {
        var t, i, r = n.max_chain_length,
            a = n.strstart,
            o = n.prev_length,
            s = n.nice_match,
            l = n.strstart > n.w_size - dn ? n.strstart - (n.w_size - dn) : 0,
            c = n.window,
            d = n.w_mask,
            f = n.prev,
            u = n.strstart + cn,
            h = c[a + o - 1],
            b = c[a + o];
        n.prev_length >= n.good_match && (r >>= 2), s > n.lookahead && (s = n.lookahead);
        do {
            if (t = e, c[t + o] === b && c[t + o - 1] === h && c[t] === c[a] && c[++t] === c[a + 1]) {
                a += 2, t++;
                do {} while (c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && c[++a] === c[++t] && a < u);
                if (i = cn - (u - a), a = u - cn, i > o) {
                    if (n.match_start = e, o = i, i >= s) break;
                    h = c[a + o - 1], b = c[a + o]
                }
            }
        } while ((e = f[e & d]) > l && 0 != --r);
        return o <= n.lookahead ? o : n.lookahead
    }

    function u(n) {
        var e, t, i, r, a, o = n.w_size;
        do {
            if (r = n.window_size - n.lookahead - n.strstart, n.strstart >= o + (o - dn)) {
                T.arraySet(n.window, n.window, o, o, 0), n.match_start -= o, n.strstart -= o, n.block_start -= o, t = n.hash_size, e = t;
                do {
                    i = n.head[--e], n.head[e] = i >= o ? i - o : 0
                } while (--t);
                t = o, e = t;
                do {
                    i = n.prev[--e], n.prev[e] = i >= o ? i - o : 0
                } while (--t);
                r += o
            }
            if (0 === n.strm.avail_in) break;
            if (t = d(n.strm, n.window, n.strstart + n.lookahead, r), n.lookahead += t, n.lookahead + n.insert >= ln)
                for (a = n.strstart - n.insert, n.ins_h = n.window[a], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[a + 1]) & n.hash_mask; n.insert && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[a + ln - 1]) & n.hash_mask, n.prev[a & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = a, a++, n.insert--, !(n.lookahead + n.insert < ln)););
        } while (n.lookahead < dn && 0 !== n.strm.avail_in)
    }

    function h(n, e) {
        var t = 65535;
        for (t > n.pending_buf_size - 5 && (t = n.pending_buf_size - 5);;) {
            if (n.lookahead <= 1) {
                if (u(n), 0 === n.lookahead && e === D) return _n;
                if (0 === n.lookahead) break
            }
            n.strstart += n.lookahead, n.lookahead = 0;
            var i = n.block_start + t;
            if ((0 === n.strstart || n.strstart >= i) && (n.lookahead = n.strstart - i, n.strstart = i, s(n, !1), 0 === n.strm.avail_out)) return _n;
            if (n.strstart - n.block_start >= n.w_size - dn && (s(n, !1), 0 === n.strm.avail_out)) return _n
        }
        return n.insert = 0, e === N ? (s(n, !0), 0 === n.strm.avail_out ? kn : yn) : (n.strstart > n.block_start && (s(n, !1), n.strm.avail_out), _n)
    }

    function b(n, e) {
        for (var t, i;;) {
            if (n.lookahead < dn) {
                if (u(n), n.lookahead < dn && e === D) return _n;
                if (0 === n.lookahead) break
            }
            if (t = 0, n.lookahead >= ln && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + ln - 1]) & n.hash_mask, t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), 0 !== t && n.strstart - t <= n.w_size - dn && (n.match_length = f(n, t)), n.match_length >= ln)
                if (i = L._tr_tally(n, n.strstart - n.match_start, n.match_length - ln), n.lookahead -= n.match_length, n.match_length <= n.max_lazy_match && n.lookahead >= ln) {
                    n.match_length--;
                    do {
                        n.strstart++, n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + ln - 1]) & n.hash_mask, t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart
                    } while (0 != --n.match_length);
                    n.strstart++
                } else n.strstart += n.match_length, n.match_length = 0, n.ins_h = n.window[n.strstart], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + 1]) & n.hash_mask;
            else i = L._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++;
            if (i && (s(n, !1), 0 === n.strm.avail_out)) return _n
        }
        return n.insert = n.strstart < ln - 1 ? n.strstart : ln - 1, e === N ? (s(n, !0), 0 === n.strm.avail_out ? kn : yn) : n.last_lit && (s(n, !1), 0 === n.strm.avail_out) ? _n : wn
    }

    function g(n, e) {
        for (var t, i, r;;) {
            if (n.lookahead < dn) {
                if (u(n), n.lookahead < dn && e === D) return _n;
                if (0 === n.lookahead) break
            }
            if (t = 0, n.lookahead >= ln && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + ln - 1]) & n.hash_mask, t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), n.prev_length = n.match_length, n.prev_match = n.match_start, n.match_length = ln - 1, 0 !== t && n.prev_length < n.max_lazy_match && n.strstart - t <= n.w_size - dn && (n.match_length = f(n, t), n.match_length <= 5 && (n.strategy === F || n.match_length === ln && n.strstart - n.match_start > 4096) && (n.match_length = ln - 1)), n.prev_length >= ln && n.match_length <= n.prev_length) {
                r = n.strstart + n.lookahead - ln, i = L._tr_tally(n, n.strstart - 1 - n.prev_match, n.prev_length - ln), n.lookahead -= n.prev_length - 1, n.prev_length -= 2;
                do {
                    ++n.strstart <= r && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + ln - 1]) & n.hash_mask, t = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart)
                } while (0 != --n.prev_length);
                if (n.match_available = 0, n.match_length = ln - 1, n.strstart++, i && (s(n, !1), 0 === n.strm.avail_out)) return _n
            } else if (n.match_available) {
                if (i = L._tr_tally(n, 0, n.window[n.strstart - 1]), i && s(n, !1), n.strstart++, n.lookahead--, 0 === n.strm.avail_out) return _n
            } else n.match_available = 1, n.strstart++, n.lookahead--
        }
        return n.match_available && (i = L._tr_tally(n, 0, n.window[n.strstart - 1]), n.match_available = 0), n.insert = n.strstart < ln - 1 ? n.strstart : ln - 1, e === N ? (s(n, !0), 0 === n.strm.avail_out ? kn : yn) : n.last_lit && (s(n, !1), 0 === n.strm.avail_out) ? _n : wn
    }

    function p(n, e) {
        for (var t, i, r, a, o = n.window;;) {
            if (n.lookahead <= cn) {
                if (u(n), n.lookahead <= cn && e === D) return _n;
                if (0 === n.lookahead) break
            }
            if (n.match_length = 0, n.lookahead >= ln && n.strstart > 0 && (r = n.strstart - 1, (i = o[r]) === o[++r] && i === o[++r] && i === o[++r])) {
                a = n.strstart + cn;
                do {} while (i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && i === o[++r] && r < a);
                n.match_length = cn - (a - r), n.match_length > n.lookahead && (n.match_length = n.lookahead)
            }
            if (n.match_length >= ln ? (t = L._tr_tally(n, 1, n.match_length - ln), n.lookahead -= n.match_length, n.strstart += n.match_length, n.match_length = 0) : (t = L._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++), t && (s(n, !1), 0 === n.strm.avail_out)) return _n
        }
        return n.insert = 0, e === N ? (s(n, !0), 0 === n.strm.avail_out ? kn : yn) : n.last_lit && (s(n, !1), 0 === n.strm.avail_out) ? _n : wn
    }

    function m(n, e) {
        for (var t;;) {
            if (0 === n.lookahead && (u(n), 0 === n.lookahead)) {
                if (e === D) return _n;
                break
            }
            if (n.match_length = 0, t = L._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++, t && (s(n, !1), 0 === n.strm.avail_out)) return _n
        }
        return n.insert = 0, e === N ? (s(n, !0), 0 === n.strm.avail_out ? kn : yn) : n.last_lit && (s(n, !1), 0 === n.strm.avail_out) ? _n : wn
    }

    function v(n, e, t, i, r) {
        this.good_length = n, this.max_lazy = e, this.nice_length = t, this.max_chain = i, this.func = r
    }

    function _(n) {
        n.window_size = 2 * n.w_size, a(n.head), n.max_lazy_match = C[n.level].max_lazy, n.good_match = C[n.level].good_length, n.nice_match = C[n.level].nice_length, n.max_chain_length = C[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = ln - 1, n.match_available = 0, n.ins_h = 0
    }

    function w() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = J, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new T.Buf16(2 * on), this.dyn_dtree = new T.Buf16(2 * (2 * rn + 1)), this.bl_tree = new T.Buf16(2 * (2 * an + 1)), a(this.dyn_ltree), a(this.dyn_dtree), a(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new T.Buf16(sn + 1), this.heap = new T.Buf16(2 * tn + 1), a(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new T.Buf16(2 * tn + 1), a(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }

    function k(n) {
        var e;
        return n && n.state ? (n.total_in = n.total_out = 0, n.data_type = K, e = n.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? un : mn, n.adler = 2 === e.wrap ? 0 : 1, e.last_flush = D, L._tr_init(e), H) : i(n, G)
    }

    function y(n) {
        var e = k(n);
        return e === H && _(n.state), e
    }

    function x(n, e) {
        return n && n.state ? 2 !== n.state.wrap ? G : (n.state.gzhead = e, H) : G
    }

    function S(n, e, t, r, a, o) {
        if (!n) return G;
        var s = 1;
        if (e === $ && (e = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), a < 1 || a > Q || t !== J || r < 8 || r > 15 || e < 0 || e > 9 || o < 0 || o > X) return i(n, G);
        8 === r && (r = 9);
        var l = new w;
        return n.state = l, l.strm = n, l.wrap = s, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = a + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + ln - 1) / ln), l.window = new T.Buf8(2 * l.w_size), l.head = new T.Buf16(l.hash_size), l.prev = new T.Buf16(l.w_size), l.lit_bufsize = 1 << a + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new T.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = e, l.strategy = o, l.method = t, y(n)
    }

    function z(n, e) {
        return S(n, e, J, nn, en, V)
    }

    function E(n, e) {
        var t, s, d, f;
        if (!n || !n.state || e > U || e < 0) return n ? i(n, G) : G;
        if (s = n.state, !n.output || !n.input && 0 !== n.avail_in || s.status === vn && e !== N) return i(n, 0 === n.avail_out ? q : G);
        if (s.strm = n, t = s.last_flush, s.last_flush = e, s.status === un)
            if (2 === s.wrap) n.adler = 0, l(s, 31), l(s, 139), l(s, 8), s.gzhead ? (l(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), l(s, 255 & s.gzhead.time), l(s, s.gzhead.time >> 8 & 255), l(s, s.gzhead.time >> 16 & 255), l(s, s.gzhead.time >> 24 & 255), l(s, 9 === s.level ? 2 : s.strategy >= Y || s.level < 2 ? 4 : 0), l(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (l(s, 255 & s.gzhead.extra.length), l(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (n.adler = B(n.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = hn) : (l(s, 0), l(s, 0), l(s, 0), l(s, 0), l(s, 0), l(s, 9 === s.level ? 2 : s.strategy >= Y || s.level < 2 ? 4 : 0), l(s, xn), s.status = mn);
            else {
                var u = J + (s.w_bits - 8 << 4) << 8,
                    h = -1;
                h = s.strategy >= Y || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3, u |= h << 6, 0 !== s.strstart && (u |= fn), u += 31 - u % 31, s.status = mn, c(s, u), 0 !== s.strstart && (c(s, n.adler >>> 16), c(s, 65535 & n.adler)), n.adler = 1
            } if (s.status === hn)
            if (s.gzhead.extra) {
                for (d = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), o(n), d = s.pending, s.pending !== s.pending_buf_size));) l(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = bn)
            } else s.status = bn;
        if (s.status === bn)
            if (s.gzhead.name) {
                d = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), o(n), d = s.pending, s.pending === s.pending_buf_size)) {
                        f = 1;
                        break
                    }
                    f = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, l(s, f)
                } while (0 !== f);
                s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), 0 === f && (s.gzindex = 0, s.status = gn)
            } else s.status = gn;
        if (s.status === gn)
            if (s.gzhead.comment) {
                d = s.pending;
                do {
                    if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), o(n), d = s.pending, s.pending === s.pending_buf_size)) {
                        f = 1;
                        break
                    }
                    f = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, l(s, f)
                } while (0 !== f);
                s.gzhead.hcrc && s.pending > d && (n.adler = B(n.adler, s.pending_buf, s.pending - d, d)), 0 === f && (s.status = pn)
            } else s.status = pn;
        if (s.status === pn && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && o(n), s.pending + 2 <= s.pending_buf_size && (l(s, 255 & n.adler), l(s, n.adler >> 8 & 255), n.adler = 0, s.status = mn)) : s.status = mn), 0 !== s.pending) {
            if (o(n), 0 === n.avail_out) return s.last_flush = -1, H
        } else if (0 === n.avail_in && r(e) <= r(t) && e !== N) return i(n, q);
        if (s.status === vn && 0 !== n.avail_in) return i(n, q);
        if (0 !== n.avail_in || 0 !== s.lookahead || e !== D && s.status !== vn) {
            var b = s.strategy === Y ? m(s, e) : s.strategy === Z ? p(s, e) : C[s.level].func(s, e);
            if (b !== kn && b !== yn || (s.status = vn), b === _n || b === kn) return 0 === n.avail_out && (s.last_flush = -1), H;
            if (b === wn && (e === O ? L._tr_align(s) : e !== U && (L._tr_stored_block(s, 0, 0, !1), e === P && (a(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), o(n), 0 === n.avail_out)) return s.last_flush = -1, H
        }
        return e !== N ? H : s.wrap <= 0 ? j : (2 === s.wrap ? (l(s, 255 & n.adler), l(s, n.adler >> 8 & 255), l(s, n.adler >> 16 & 255), l(s, n.adler >> 24 & 255), l(s, 255 & n.total_in), l(s, n.total_in >> 8 & 255), l(s, n.total_in >> 16 & 255), l(s, n.total_in >> 24 & 255)) : (c(s, n.adler >>> 16), c(s, 65535 & n.adler)), o(n), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? H : j)
    }

    function R(n) {
        var e;
        return n && n.state ? (e = n.state.status) !== un && e !== hn && e !== bn && e !== gn && e !== pn && e !== mn && e !== vn ? i(n, G) : (n.state = null, e === mn ? i(n, W) : H) : G
    }

    function A(n, e) {
        var t, i, r, o, s, l, c, d, f = e.length;
        if (!n || !n.state) return G;
        if (t = n.state, 2 === (o = t.wrap) || 1 === o && t.status !== un || t.lookahead) return G;
        for (1 === o && (n.adler = I(n.adler, e, f, 0)), t.wrap = 0, f >= t.w_size && (0 === o && (a(t.head), t.strstart = 0, t.block_start = 0, t.insert = 0), d = new T.Buf8(t.w_size), T.arraySet(d, e, f - t.w_size, t.w_size, 0), e = d, f = t.w_size), s = n.avail_in, l = n.next_in, c = n.input, n.avail_in = f, n.next_in = 0, n.input = e, u(t); t.lookahead >= ln;) {
            i = t.strstart, r = t.lookahead - (ln - 1);
            do {
                t.ins_h = (t.ins_h << t.hash_shift ^ t.window[i + ln - 1]) & t.hash_mask, t.prev[i & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = i, i++
            } while (--r);
            t.strstart = i, t.lookahead = ln - 1, u(t)
        }
        return t.strstart += t.lookahead, t.block_start = t.strstart, t.insert = t.lookahead, t.lookahead = 0, t.match_length = t.prev_length = ln - 1, t.match_available = 0, n.next_in = l, n.input = c, n.avail_in = s, t.wrap = o, H
    }
    var C, T = t(8),
        L = t(58),
        I = t(24),
        B = t(25),
        M = t(59),
        D = 0,
        O = 1,
        P = 3,
        N = 4,
        U = 5,
        H = 0,
        j = 1,
        G = -2,
        W = -3,
        q = -5,
        $ = -1,
        F = 1,
        Y = 2,
        Z = 3,
        X = 4,
        V = 0,
        K = 2,
        J = 8,
        Q = 9,
        nn = 15,
        en = 8,
        tn = 286,
        rn = 30,
        an = 19,
        on = 2 * tn + 1,
        sn = 15,
        ln = 3,
        cn = 258,
        dn = cn + ln + 1,
        fn = 32,
        un = 42,
        hn = 69,
        bn = 73,
        gn = 91,
        pn = 103,
        mn = 113,
        vn = 666,
        _n = 1,
        wn = 2,
        kn = 3,
        yn = 4,
        xn = 3;
    C = [new v(0, 0, 0, 0, h), new v(4, 4, 8, 4, b), new v(4, 5, 16, 8, b), new v(4, 6, 32, 32, b), new v(4, 4, 16, 16, g), new v(8, 16, 32, 32, g), new v(8, 16, 128, 128, g), new v(8, 32, 128, 256, g), new v(32, 128, 258, 1024, g), new v(32, 258, 258, 4096, g)], e.deflateInit = z, e.deflateInit2 = S, e.deflateReset = y, e.deflateResetKeep = k, e.deflateSetHeader = x, e.deflate = E, e.deflateEnd = R, e.deflateSetDictionary = A, e.deflateInfo = "pako deflate (from Nodeca project)"
}, function(n, e, t) {
    "use strict";

    function i(n) {
        for (var e = n.length; --e >= 0;) n[e] = 0
    }

    function r(n, e, t, i, r) {
        this.static_tree = n, this.extra_bits = e, this.extra_base = t, this.elems = i, this.max_length = r, this.has_stree = n && n.length
    }

    function a(n, e) {
        this.dyn_tree = n, this.max_code = 0, this.stat_desc = e
    }

    function o(n) {
        return n < 256 ? on[n] : on[256 + (n >>> 7)]
    }

    function s(n, e) {
        n.pending_buf[n.pending++] = 255 & e, n.pending_buf[n.pending++] = e >>> 8 & 255
    }

    function l(n, e, t) {
        n.bi_valid > Y - t ? (n.bi_buf |= e << n.bi_valid & 65535, s(n, n.bi_buf), n.bi_buf = e >> Y - n.bi_valid, n.bi_valid += t - Y) : (n.bi_buf |= e << n.bi_valid & 65535, n.bi_valid += t)
    }

    function c(n, e, t) {
        l(n, t[2 * e], t[2 * e + 1])
    }

    function d(n, e) {
        var t = 0;
        do {
            t |= 1 & n, n >>>= 1, t <<= 1
        } while (--e > 0);
        return t >>> 1
    }

    function f(n) {
        16 === n.bi_valid ? (s(n, n.bi_buf), n.bi_buf = 0, n.bi_valid = 0) : n.bi_valid >= 8 && (n.pending_buf[n.pending++] = 255 & n.bi_buf, n.bi_buf >>= 8, n.bi_valid -= 8)
    }

    function u(n, e) {
        var t, i, r, a, o, s, l = e.dyn_tree,
            c = e.max_code,
            d = e.stat_desc.static_tree,
            f = e.stat_desc.has_stree,
            u = e.stat_desc.extra_bits,
            h = e.stat_desc.extra_base,
            b = e.stat_desc.max_length,
            g = 0;
        for (a = 0; a <= F; a++) n.bl_count[a] = 0;
        for (l[2 * n.heap[n.heap_max] + 1] = 0, t = n.heap_max + 1; t < $; t++) i = n.heap[t], a = l[2 * l[2 * i + 1] + 1] + 1, a > b && (a = b, g++), l[2 * i + 1] = a, i > c || (n.bl_count[a]++, o = 0, i >= h && (o = u[i - h]), s = l[2 * i], n.opt_len += s * (a + o), f && (n.static_len += s * (d[2 * i + 1] + o)));
        if (0 !== g) {
            do {
                for (a = b - 1; 0 === n.bl_count[a];) a--;
                n.bl_count[a]--, n.bl_count[a + 1] += 2, n.bl_count[b]--, g -= 2
            } while (g > 0);
            for (a = b; 0 !== a; a--)
                for (i = n.bl_count[a]; 0 !== i;)(r = n.heap[--t]) > c || (l[2 * r + 1] !== a && (n.opt_len += (a - l[2 * r + 1]) * l[2 * r], l[2 * r + 1] = a), i--)
        }
    }

    function h(n, e, t) {
        var i, r, a = new Array(F + 1),
            o = 0;
        for (i = 1; i <= F; i++) a[i] = o = o + t[i - 1] << 1;
        for (r = 0; r <= e; r++) {
            var s = n[2 * r + 1];
            0 !== s && (n[2 * r] = d(a[s]++, s))
        }
    }

    function b() {
        var n, e, t, i, a, o = new Array(F + 1);
        for (t = 0, i = 0; i < H - 1; i++)
            for (ln[i] = t, n = 0; n < 1 << Q[i]; n++) sn[t++] = i;
        for (sn[t - 1] = i, a = 0, i = 0; i < 16; i++)
            for (cn[i] = a, n = 0; n < 1 << nn[i]; n++) on[a++] = i;
        for (a >>= 7; i < W; i++)
            for (cn[i] = a << 7, n = 0; n < 1 << nn[i] - 7; n++) on[256 + a++] = i;
        for (e = 0; e <= F; e++) o[e] = 0;
        for (n = 0; n <= 143;) rn[2 * n + 1] = 8, n++, o[8]++;
        for (; n <= 255;) rn[2 * n + 1] = 9, n++, o[9]++;
        for (; n <= 279;) rn[2 * n + 1] = 7, n++, o[7]++;
        for (; n <= 287;) rn[2 * n + 1] = 8, n++, o[8]++;
        for (h(rn, G + 1, o), n = 0; n < W; n++) an[2 * n + 1] = 5, an[2 * n] = d(n, 5);
        dn = new r(rn, Q, j + 1, G, F), fn = new r(an, nn, 0, W, F), un = new r(new Array(0), en, 0, q, Z)
    }

    function g(n) {
        var e;
        for (e = 0; e < G; e++) n.dyn_ltree[2 * e] = 0;
        for (e = 0; e < W; e++) n.dyn_dtree[2 * e] = 0;
        for (e = 0; e < q; e++) n.bl_tree[2 * e] = 0;
        n.dyn_ltree[2 * X] = 1, n.opt_len = n.static_len = 0, n.last_lit = n.matches = 0
    }

    function p(n) {
        n.bi_valid > 8 ? s(n, n.bi_buf) : n.bi_valid > 0 && (n.pending_buf[n.pending++] = n.bi_buf), n.bi_buf = 0, n.bi_valid = 0
    }

    function m(n, e, t, i) {
        p(n), i && (s(n, t), s(n, ~t)), I.arraySet(n.pending_buf, n.window, e, t, n.pending), n.pending += t
    }

    function v(n, e, t, i) {
        var r = 2 * e,
            a = 2 * t;
        return n[r] < n[a] || n[r] === n[a] && i[e] <= i[t]
    }

    function _(n, e, t) {
        for (var i = n.heap[t], r = t << 1; r <= n.heap_len && (r < n.heap_len && v(e, n.heap[r + 1], n.heap[r], n.depth) && r++, !v(e, i, n.heap[r], n.depth));) n.heap[t] = n.heap[r], t = r, r <<= 1;
        n.heap[t] = i
    }

    function w(n, e, t) {
        var i, r, a, s, d = 0;
        if (0 !== n.last_lit)
            do {
                i = n.pending_buf[n.d_buf + 2 * d] << 8 | n.pending_buf[n.d_buf + 2 * d + 1], r = n.pending_buf[n.l_buf + d], d++, 0 === i ? c(n, r, e) : (a = sn[r], c(n, a + j + 1, e), s = Q[a], 0 !== s && (r -= ln[a], l(n, r, s)), i--, a = o(i), c(n, a, t), 0 !== (s = nn[a]) && (i -= cn[a], l(n, i, s)))
            } while (d < n.last_lit);
        c(n, X, e)
    }

    function k(n, e) {
        var t, i, r, a = e.dyn_tree,
            o = e.stat_desc.static_tree,
            s = e.stat_desc.has_stree,
            l = e.stat_desc.elems,
            c = -1;
        for (n.heap_len = 0, n.heap_max = $, t = 0; t < l; t++) 0 !== a[2 * t] ? (n.heap[++n.heap_len] = c = t, n.depth[t] = 0) : a[2 * t + 1] = 0;
        for (; n.heap_len < 2;) r = n.heap[++n.heap_len] = c < 2 ? ++c : 0, a[2 * r] = 1, n.depth[r] = 0, n.opt_len--, s && (n.static_len -= o[2 * r + 1]);
        for (e.max_code = c, t = n.heap_len >> 1; t >= 1; t--) _(n, a, t);
        r = l;
        do {
            t = n.heap[1], n.heap[1] = n.heap[n.heap_len--], _(n, a, 1), i = n.heap[1], n.heap[--n.heap_max] = t, n.heap[--n.heap_max] = i, a[2 * r] = a[2 * t] + a[2 * i], n.depth[r] = (n.depth[t] >= n.depth[i] ? n.depth[t] : n.depth[i]) + 1, a[2 * t + 1] = a[2 * i + 1] = r, n.heap[1] = r++, _(n, a, 1)
        } while (n.heap_len >= 2);
        n.heap[--n.heap_max] = n.heap[1], u(n, e), h(a, c, n.bl_count)
    }

    function y(n, e, t) {
        var i, r, a = -1,
            o = e[1],
            s = 0,
            l = 7,
            c = 4;
        for (0 === o && (l = 138, c = 3), e[2 * (t + 1) + 1] = 65535, i = 0; i <= t; i++) r = o, o = e[2 * (i + 1) + 1], ++s < l && r === o || (s < c ? n.bl_tree[2 * r] += s : 0 !== r ? (r !== a && n.bl_tree[2 * r]++, n.bl_tree[2 * V]++) : s <= 10 ? n.bl_tree[2 * K]++ : n.bl_tree[2 * J]++, s = 0, a = r, 0 === o ? (l = 138, c = 3) : r === o ? (l = 6, c = 3) : (l = 7, c = 4))
    }

    function x(n, e, t) {
        var i, r, a = -1,
            o = e[1],
            s = 0,
            d = 7,
            f = 4;
        for (0 === o && (d = 138, f = 3), i = 0; i <= t; i++)
            if (r = o, o = e[2 * (i + 1) + 1], !(++s < d && r === o)) {
                if (s < f)
                    do {
                        c(n, r, n.bl_tree)
                    } while (0 != --s);
                else 0 !== r ? (r !== a && (c(n, r, n.bl_tree), s--), c(n, V, n.bl_tree), l(n, s - 3, 2)) : s <= 10 ? (c(n, K, n.bl_tree), l(n, s - 3, 3)) : (c(n, J, n.bl_tree), l(n, s - 11, 7));
                s = 0, a = r, 0 === o ? (d = 138, f = 3) : r === o ? (d = 6, f = 3) : (d = 7, f = 4)
            }
    }

    function S(n) {
        var e;
        for (y(n, n.dyn_ltree, n.l_desc.max_code), y(n, n.dyn_dtree, n.d_desc.max_code), k(n, n.bl_desc), e = q - 1; e >= 3 && 0 === n.bl_tree[2 * tn[e] + 1]; e--);
        return n.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
    }

    function z(n, e, t, i) {
        var r;
        for (l(n, e - 257, 5), l(n, t - 1, 5), l(n, i - 4, 4), r = 0; r < i; r++) l(n, n.bl_tree[2 * tn[r] + 1], 3);
        x(n, n.dyn_ltree, e - 1), x(n, n.dyn_dtree, t - 1)
    }

    function E(n) {
        var e, t = 4093624447;
        for (e = 0; e <= 31; e++, t >>>= 1)
            if (1 & t && 0 !== n.dyn_ltree[2 * e]) return M;
        if (0 !== n.dyn_ltree[18] || 0 !== n.dyn_ltree[20] || 0 !== n.dyn_ltree[26]) return D;
        for (e = 32; e < j; e++)
            if (0 !== n.dyn_ltree[2 * e]) return D;
        return M
    }

    function R(n) {
        hn || (b(), hn = !0), n.l_desc = new a(n.dyn_ltree, dn), n.d_desc = new a(n.dyn_dtree, fn), n.bl_desc = new a(n.bl_tree, un), n.bi_buf = 0, n.bi_valid = 0, g(n)
    }

    function A(n, e, t, i) {
        l(n, (P << 1) + (i ? 1 : 0), 3), m(n, e, t, !0)
    }

    function C(n) {
        l(n, N << 1, 3), c(n, X, rn), f(n)
    }

    function T(n, e, t, i) {
        var r, a, o = 0;
        n.level > 0 ? (n.strm.data_type === O && (n.strm.data_type = E(n)), k(n, n.l_desc), k(n, n.d_desc), o = S(n), r = n.opt_len + 3 + 7 >>> 3, (a = n.static_len + 3 + 7 >>> 3) <= r && (r = a)) : r = a = t + 5, t + 4 <= r && -1 !== e ? A(n, e, t, i) : n.strategy === B || a === r ? (l(n, (N << 1) + (i ? 1 : 0), 3), w(n, rn, an)) : (l(n, (U << 1) + (i ? 1 : 0), 3), z(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, o + 1), w(n, n.dyn_ltree, n.dyn_dtree)), g(n), i && p(n)
    }

    function L(n, e, t) {
        return n.pending_buf[n.d_buf + 2 * n.last_lit] = e >>> 8 & 255, n.pending_buf[n.d_buf + 2 * n.last_lit + 1] = 255 & e, n.pending_buf[n.l_buf + n.last_lit] = 255 & t, n.last_lit++, 0 === e ? n.dyn_ltree[2 * t]++ : (n.matches++, e--, n.dyn_ltree[2 * (sn[t] + j + 1)]++, n.dyn_dtree[2 * o(e)]++), n.last_lit === n.lit_bufsize - 1
    }
    var I = t(8),
        B = 4,
        M = 0,
        D = 1,
        O = 2,
        P = 0,
        N = 1,
        U = 2,
        H = 29,
        j = 256,
        G = j + 1 + H,
        W = 30,
        q = 19,
        $ = 2 * G + 1,
        F = 15,
        Y = 16,
        Z = 7,
        X = 256,
        V = 16,
        K = 17,
        J = 18,
        Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        nn = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        en = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        tn = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        rn = new Array(2 * (G + 2));
    i(rn);
    var an = new Array(2 * W);
    i(an);
    var on = new Array(512);
    i(on);
    var sn = new Array(256);
    i(sn);
    var ln = new Array(H);
    i(ln);
    var cn = new Array(W);
    i(cn);
    var dn, fn, un, hn = !1;
    e._tr_init = R, e._tr_stored_block = A, e._tr_flush_block = T, e._tr_tally = L, e._tr_align = C
}, function(n, e, t) {
    "use strict";
    n.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }
}, function(n, e, t) {
    "use strict";

    function i(n) {
        return (n >>> 24 & 255) + (n >>> 8 & 65280) + ((65280 & n) << 8) + ((255 & n) << 24)
    }

    function r() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new v.Buf16(320), this.work = new v.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }

    function a(n) {
        var e;
        return n && n.state ? (e = n.state, n.total_in = n.total_out = e.total = 0, n.msg = "", e.wrap && (n.adler = 1 & e.wrap), e.mode = P, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new v.Buf32(pn), e.distcode = e.distdyn = new v.Buf32(mn), e.sane = 1, e.back = -1, C) : I
    }

    function o(n) {
        var e;
        return n && n.state ? (e = n.state, e.wsize = 0, e.whave = 0, e.wnext = 0, a(n)) : I
    }

    function s(n, e) {
        var t, i;
        return n && n.state ? (i = n.state, e < 0 ? (t = 0, e = -e) : (t = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? I : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = t, i.wbits = e, o(n))) : I
    }

    function l(n, e) {
        var t, i;
        return n ? (i = new r, n.state = i, i.window = null, t = s(n, e), t !== C && (n.state = null), t) : I
    }

    function c(n) {
        return l(n, vn)
    }

    function d(n) {
        if (_n) {
            var e;
            for (p = new v.Buf32(512), m = new v.Buf32(32), e = 0; e < 144;) n.lens[e++] = 8;
            for (; e < 256;) n.lens[e++] = 9;
            for (; e < 280;) n.lens[e++] = 7;
            for (; e < 288;) n.lens[e++] = 8;
            for (y(S, n.lens, 0, 288, p, 0, n.work, {
                    bits: 9
                }), e = 0; e < 32;) n.lens[e++] = 5;
            y(z, n.lens, 0, 32, m, 0, n.work, {
                bits: 5
            }), _n = !1
        }
        n.lencode = p, n.lenbits = 9, n.distcode = m, n.distbits = 5
    }

    function f(n, e, t, i) {
        var r, a = n.state;
        return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new v.Buf8(a.wsize)), i >= a.wsize ? (v.arraySet(a.window, e, t - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (r = a.wsize - a.wnext, r > i && (r = i), v.arraySet(a.window, e, t - i, r, a.wnext), i -= r, i ? (v.arraySet(a.window, e, t - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += r, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += r))), 0
    }

    function u(n, e) {
        var t, r, a, o, s, l, c, u, h, b, g, p, m, pn, mn, vn, _n, wn, kn, yn, xn, Sn, zn, En, Rn = 0,
            An = new v.Buf8(4),
            Cn = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!n || !n.state || !n.output || !n.input && 0 !== n.avail_in) return I;
        t = n.state, t.mode === Z && (t.mode = X), s = n.next_out, a = n.output, c = n.avail_out, o = n.next_in, r = n.input, l = n.avail_in, u = t.hold, h = t.bits, b = l, g = c, Sn = C;
        n: for (;;) switch (t.mode) {
            case P:
                if (0 === t.wrap) {
                    t.mode = X;
                    break
                }
                for (; h < 16;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if (2 & t.wrap && 35615 === u) {
                    t.check = 0, An[0] = 255 & u, An[1] = u >>> 8 & 255, t.check = w(t.check, An, 2, 0), u = 0, h = 0, t.mode = N;
                    break
                }
                if (t.flags = 0, t.head && (t.head.done = !1), !(1 & t.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                    n.msg = "incorrect header check", t.mode = hn;
                    break
                }
                if ((15 & u) !== O) {
                    n.msg = "unknown compression method", t.mode = hn;
                    break
                }
                if (u >>>= 4, h -= 4, xn = 8 + (15 & u), 0 === t.wbits) t.wbits = xn;
                else if (xn > t.wbits) {
                    n.msg = "invalid window size", t.mode = hn;
                    break
                }
                t.dmax = 1 << xn, n.adler = t.check = 1, t.mode = 512 & u ? F : Z, u = 0, h = 0;
                break;
            case N:
                for (; h < 16;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if (t.flags = u, (255 & t.flags) !== O) {
                    n.msg = "unknown compression method", t.mode = hn;
                    break
                }
                if (57344 & t.flags) {
                    n.msg = "unknown header flags set", t.mode = hn;
                    break
                }
                t.head && (t.head.text = u >> 8 & 1), 512 & t.flags && (An[0] = 255 & u, An[1] = u >>> 8 & 255, t.check = w(t.check, An, 2, 0)), u = 0, h = 0, t.mode = U;
            case U:
                for (; h < 32;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                t.head && (t.head.time = u), 512 & t.flags && (An[0] = 255 & u, An[1] = u >>> 8 & 255, An[2] = u >>> 16 & 255, An[3] = u >>> 24 & 255, t.check = w(t.check, An, 4, 0)), u = 0, h = 0, t.mode = H;
            case H:
                for (; h < 16;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                t.head && (t.head.xflags = 255 & u, t.head.os = u >> 8), 512 & t.flags && (An[0] = 255 & u, An[1] = u >>> 8 & 255, t.check = w(t.check, An, 2, 0)), u = 0, h = 0, t.mode = j;
            case j:
                if (1024 & t.flags) {
                    for (; h < 16;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    t.length = u, t.head && (t.head.extra_len = u), 512 & t.flags && (An[0] = 255 & u, An[1] = u >>> 8 & 255, t.check = w(t.check, An, 2, 0)), u = 0, h = 0
                } else t.head && (t.head.extra = null);
                t.mode = G;
            case G:
                if (1024 & t.flags && (p = t.length, p > l && (p = l), p && (t.head && (xn = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Array(t.head.extra_len)), v.arraySet(t.head.extra, r, o, p, xn)), 512 & t.flags && (t.check = w(t.check, r, p, o)), l -= p, o += p, t.length -= p), t.length)) break n;
                t.length = 0, t.mode = W;
            case W:
                if (2048 & t.flags) {
                    if (0 === l) break n;
                    p = 0;
                    do {
                        xn = r[o + p++], t.head && xn && t.length < 65536 && (t.head.name += String.fromCharCode(xn))
                    } while (xn && p < l);
                    if (512 & t.flags && (t.check = w(t.check, r, p, o)), l -= p, o += p, xn) break n
                } else t.head && (t.head.name = null);
                t.length = 0, t.mode = q;
            case q:
                if (4096 & t.flags) {
                    if (0 === l) break n;
                    p = 0;
                    do {
                        xn = r[o + p++], t.head && xn && t.length < 65536 && (t.head.comment += String.fromCharCode(xn))
                    } while (xn && p < l);
                    if (512 & t.flags && (t.check = w(t.check, r, p, o)), l -= p, o += p, xn) break n
                } else t.head && (t.head.comment = null);
                t.mode = $;
            case $:
                if (512 & t.flags) {
                    for (; h < 16;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    if (u !== (65535 & t.check)) {
                        n.msg = "header crc mismatch", t.mode = hn;
                        break
                    }
                    u = 0, h = 0
                }
                t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), n.adler = t.check = 0, t.mode = Z;
                break;
            case F:
                for (; h < 32;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                n.adler = t.check = i(u), u = 0, h = 0, t.mode = Y;
            case Y:
                if (0 === t.havedict) return n.next_out = s, n.avail_out = c, n.next_in = o, n.avail_in = l, t.hold = u, t.bits = h, L;
                n.adler = t.check = 1, t.mode = Z;
            case Z:
                if (e === R || e === A) break n;
            case X:
                if (t.last) {
                    u >>>= 7 & h, h -= 7 & h, t.mode = dn;
                    break
                }
                for (; h < 3;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                switch (t.last = 1 & u, u >>>= 1, h -= 1, 3 & u) {
                    case 0:
                        t.mode = V;
                        break;
                    case 1:
                        if (d(t), t.mode = tn, e === A) {
                            u >>>= 2, h -= 2;
                            break n
                        }
                        break;
                    case 2:
                        t.mode = Q;
                        break;
                    case 3:
                        n.msg = "invalid block type", t.mode = hn
                }
                u >>>= 2, h -= 2;
                break;
            case V:
                for (u >>>= 7 & h, h -= 7 & h; h < 32;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if ((65535 & u) != (u >>> 16 ^ 65535)) {
                    n.msg = "invalid stored block lengths", t.mode = hn;
                    break
                }
                if (t.length = 65535 & u, u = 0, h = 0, t.mode = K, e === A) break n;
            case K:
                t.mode = J;
            case J:
                if (p = t.length) {
                    if (p > l && (p = l), p > c && (p = c), 0 === p) break n;
                    v.arraySet(a, r, o, p, s), l -= p, o += p, c -= p, s += p, t.length -= p;
                    break
                }
                t.mode = Z;
                break;
            case Q:
                for (; h < 14;) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if (t.nlen = 257 + (31 & u), u >>>= 5, h -= 5, t.ndist = 1 + (31 & u), u >>>= 5, h -= 5, t.ncode = 4 + (15 & u), u >>>= 4, h -= 4, t.nlen > 286 || t.ndist > 30) {
                    n.msg = "too many length or distance symbols", t.mode = hn;
                    break
                }
                t.have = 0, t.mode = nn;
            case nn:
                for (; t.have < t.ncode;) {
                    for (; h < 3;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    t.lens[Cn[t.have++]] = 7 & u, u >>>= 3, h -= 3
                }
                for (; t.have < 19;) t.lens[Cn[t.have++]] = 0;
                if (t.lencode = t.lendyn, t.lenbits = 7, zn = {
                        bits: t.lenbits
                    }, Sn = y(x, t.lens, 0, 19, t.lencode, 0, t.work, zn), t.lenbits = zn.bits, Sn) {
                    n.msg = "invalid code lengths set", t.mode = hn;
                    break
                }
                t.have = 0, t.mode = en;
            case en:
                for (; t.have < t.nlen + t.ndist;) {
                    for (; Rn = t.lencode[u & (1 << t.lenbits) - 1], mn = Rn >>> 24, vn = Rn >>> 16 & 255, _n = 65535 & Rn, !(mn <= h);) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    if (_n < 16) u >>>= mn, h -= mn, t.lens[t.have++] = _n;
                    else {
                        if (16 === _n) {
                            for (En = mn + 2; h < En;) {
                                if (0 === l) break n;
                                l--, u += r[o++] << h, h += 8
                            }
                            if (u >>>= mn, h -= mn, 0 === t.have) {
                                n.msg = "invalid bit length repeat", t.mode = hn;
                                break
                            }
                            xn = t.lens[t.have - 1], p = 3 + (3 & u), u >>>= 2, h -= 2
                        } else if (17 === _n) {
                            for (En = mn + 3; h < En;) {
                                if (0 === l) break n;
                                l--, u += r[o++] << h, h += 8
                            }
                            u >>>= mn, h -= mn, xn = 0, p = 3 + (7 & u), u >>>= 3, h -= 3
                        } else {
                            for (En = mn + 7; h < En;) {
                                if (0 === l) break n;
                                l--, u += r[o++] << h, h += 8
                            }
                            u >>>= mn, h -= mn, xn = 0, p = 11 + (127 & u), u >>>= 7, h -= 7
                        }
                        if (t.have + p > t.nlen + t.ndist) {
                            n.msg = "invalid bit length repeat", t.mode = hn;
                            break
                        }
                        for (; p--;) t.lens[t.have++] = xn
                    }
                }
                if (t.mode === hn) break;
                if (0 === t.lens[256]) {
                    n.msg = "invalid code -- missing end-of-block", t.mode = hn;
                    break
                }
                if (t.lenbits = 9, zn = {
                        bits: t.lenbits
                    }, Sn = y(S, t.lens, 0, t.nlen, t.lencode, 0, t.work, zn), t.lenbits = zn.bits, Sn) {
                    n.msg = "invalid literal/lengths set", t.mode = hn;
                    break
                }
                if (t.distbits = 6, t.distcode = t.distdyn, zn = {
                        bits: t.distbits
                    }, Sn = y(z, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, zn), t.distbits = zn.bits, Sn) {
                    n.msg = "invalid distances set", t.mode = hn;
                    break
                }
                if (t.mode = tn, e === A) break n;
            case tn:
                t.mode = rn;
            case rn:
                if (l >= 6 && c >= 258) {
                    n.next_out = s, n.avail_out = c, n.next_in = o, n.avail_in = l, t.hold = u, t.bits = h, k(n, g), s = n.next_out, a = n.output, c = n.avail_out, o = n.next_in, r = n.input, l = n.avail_in, u = t.hold, h = t.bits, t.mode === Z && (t.back = -1);
                    break
                }
                for (t.back = 0; Rn = t.lencode[u & (1 << t.lenbits) - 1], mn = Rn >>> 24, vn = Rn >>> 16 & 255, _n = 65535 & Rn, !(mn <= h);) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if (vn && 0 == (240 & vn)) {
                    for (wn = mn, kn = vn, yn = _n; Rn = t.lencode[yn + ((u & (1 << wn + kn) - 1) >> wn)], mn = Rn >>> 24, vn = Rn >>> 16 & 255, _n = 65535 & Rn, !(wn + mn <= h);) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    u >>>= wn, h -= wn, t.back += wn
                }
                if (u >>>= mn, h -= mn, t.back += mn, t.length = _n, 0 === vn) {
                    t.mode = cn;
                    break
                }
                if (32 & vn) {
                    t.back = -1, t.mode = Z;
                    break
                }
                if (64 & vn) {
                    n.msg = "invalid literal/length code", t.mode = hn;
                    break
                }
                t.extra = 15 & vn, t.mode = an;
            case an:
                if (t.extra) {
                    for (En = t.extra; h < En;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    t.length += u & (1 << t.extra) - 1, u >>>= t.extra, h -= t.extra, t.back += t.extra
                }
                t.was = t.length, t.mode = on;
            case on:
                for (; Rn = t.distcode[u & (1 << t.distbits) - 1], mn = Rn >>> 24, vn = Rn >>> 16 & 255, _n = 65535 & Rn, !(mn <= h);) {
                    if (0 === l) break n;
                    l--, u += r[o++] << h, h += 8
                }
                if (0 == (240 & vn)) {
                    for (wn = mn, kn = vn, yn = _n; Rn = t.distcode[yn + ((u & (1 << wn + kn) - 1) >> wn)], mn = Rn >>> 24, vn = Rn >>> 16 & 255, _n = 65535 & Rn, !(wn + mn <= h);) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    u >>>= wn, h -= wn, t.back += wn
                }
                if (u >>>= mn, h -= mn, t.back += mn, 64 & vn) {
                    n.msg = "invalid distance code", t.mode = hn;
                    break
                }
                t.offset = _n, t.extra = 15 & vn, t.mode = sn;
            case sn:
                if (t.extra) {
                    for (En = t.extra; h < En;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    t.offset += u & (1 << t.extra) - 1, u >>>= t.extra, h -= t.extra, t.back += t.extra
                }
                if (t.offset > t.dmax) {
                    n.msg = "invalid distance too far back", t.mode = hn;
                    break
                }
                t.mode = ln;
            case ln:
                if (0 === c) break n;
                if (p = g - c, t.offset > p) {
                    if ((p = t.offset - p) > t.whave && t.sane) {
                        n.msg = "invalid distance too far back", t.mode = hn;
                        break
                    }
                    p > t.wnext ? (p -= t.wnext, m = t.wsize - p) : m = t.wnext - p, p > t.length && (p = t.length), pn = t.window
                } else pn = a, m = s - t.offset, p = t.length;
                p > c && (p = c), c -= p, t.length -= p;
                do {
                    a[s++] = pn[m++]
                } while (--p);
                0 === t.length && (t.mode = rn);
                break;
            case cn:
                if (0 === c) break n;
                a[s++] = t.length, c--, t.mode = rn;
                break;
            case dn:
                if (t.wrap) {
                    for (; h < 32;) {
                        if (0 === l) break n;
                        l--, u |= r[o++] << h, h += 8
                    }
                    if (g -= c, n.total_out += g, t.total += g, g && (n.adler = t.check = t.flags ? w(t.check, a, g, s - g) : _(t.check, a, g, s - g)), g = c, (t.flags ? u : i(u)) !== t.check) {
                        n.msg = "incorrect data check", t.mode = hn;
                        break
                    }
                    u = 0, h = 0
                }
                t.mode = fn;
            case fn:
                if (t.wrap && t.flags) {
                    for (; h < 32;) {
                        if (0 === l) break n;
                        l--, u += r[o++] << h, h += 8
                    }
                    if (u !== (4294967295 & t.total)) {
                        n.msg = "incorrect length check", t.mode = hn;
                        break
                    }
                    u = 0, h = 0
                }
                t.mode = un;
            case un:
                Sn = T;
                break n;
            case hn:
                Sn = B;
                break n;
            case bn:
                return M;
            case gn:
            default:
                return I
        }
        return n.next_out = s, n.avail_out = c, n.next_in = o, n.avail_in = l, t.hold = u, t.bits = h, (t.wsize || g !== n.avail_out && t.mode < hn && (t.mode < dn || e !== E)) && f(n, n.output, n.next_out, g - n.avail_out) ? (t.mode = bn, M) : (b -= n.avail_in, g -= n.avail_out, n.total_in += b, n.total_out += g, t.total += g, t.wrap && g && (n.adler = t.check = t.flags ? w(t.check, a, g, n.next_out - g) : _(t.check, a, g, n.next_out - g)), n.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Z ? 128 : 0) + (t.mode === tn || t.mode === K ? 256 : 0), (0 === b && 0 === g || e === E) && Sn === C && (Sn = D), Sn)
    }

    function h(n) {
        if (!n || !n.state) return I;
        var e = n.state;
        return e.window && (e.window = null), n.state = null, C
    }

    function b(n, e) {
        var t;
        return n && n.state ? (t = n.state, 0 == (2 & t.wrap) ? I : (t.head = e, e.done = !1, C)) : I
    }

    function g(n, e) {
        var t, i, r = e.length;
        return n && n.state ? (t = n.state, 0 !== t.wrap && t.mode !== Y ? I : t.mode === Y && (i = 1, (i = _(i, e, r, 0)) !== t.check) ? B : f(n, e, r, r) ? (t.mode = bn, M) : (t.havedict = 1, C)) : I
    }
    var p, m, v = t(8),
        _ = t(24),
        w = t(25),
        k = t(61),
        y = t(62),
        x = 0,
        S = 1,
        z = 2,
        E = 4,
        R = 5,
        A = 6,
        C = 0,
        T = 1,
        L = 2,
        I = -2,
        B = -3,
        M = -4,
        D = -5,
        O = 8,
        P = 1,
        N = 2,
        U = 3,
        H = 4,
        j = 5,
        G = 6,
        W = 7,
        q = 8,
        $ = 9,
        F = 10,
        Y = 11,
        Z = 12,
        X = 13,
        V = 14,
        K = 15,
        J = 16,
        Q = 17,
        nn = 18,
        en = 19,
        tn = 20,
        rn = 21,
        an = 22,
        on = 23,
        sn = 24,
        ln = 25,
        cn = 26,
        dn = 27,
        fn = 28,
        un = 29,
        hn = 30,
        bn = 31,
        gn = 32,
        pn = 852,
        mn = 592,
        vn = 15,
        _n = !0;
    e.inflateReset = o, e.inflateReset2 = s, e.inflateResetKeep = a, e.inflateInit = c, e.inflateInit2 = l, e.inflate = u, e.inflateEnd = h, e.inflateGetHeader = b, e.inflateSetDictionary = g, e.inflateInfo = "pako inflate (from Nodeca project)"
}, function(n, e, t) {
    "use strict";
    n.exports = function(n, e) {
        var t, i, r, a, o, s, l, c, d, f, u, h, b, g, p, m, v, _, w, k, y, x, S, z, E;
        t = n.state, i = n.next_in, z = n.input, r = i + (n.avail_in - 5), a = n.next_out, E = n.output, o = a - (e - n.avail_out), s = a + (n.avail_out - 257), l = t.dmax, c = t.wsize, d = t.whave, f = t.wnext, u = t.window, h = t.hold, b = t.bits, g = t.lencode, p = t.distcode, m = (1 << t.lenbits) - 1, v = (1 << t.distbits) - 1;
        n: do {
            b < 15 && (h += z[i++] << b, b += 8, h += z[i++] << b, b += 8), _ = g[h & m];
            e: for (;;) {
                if (w = _ >>> 24, h >>>= w, b -= w, 0 === (w = _ >>> 16 & 255)) E[a++] = 65535 & _;
                else {
                    if (!(16 & w)) {
                        if (0 == (64 & w)) {
                            _ = g[(65535 & _) + (h & (1 << w) - 1)];
                            continue e
                        }
                        if (32 & w) {
                            t.mode = 12;
                            break n
                        }
                        n.msg = "invalid literal/length code", t.mode = 30;
                        break n
                    }
                    k = 65535 & _, w &= 15, w && (b < w && (h += z[i++] << b, b += 8), k += h & (1 << w) - 1, h >>>= w, b -= w), b < 15 && (h += z[i++] << b, b += 8, h += z[i++] << b, b += 8), _ = p[h & v];
                    t: for (;;) {
                        if (w = _ >>> 24, h >>>= w, b -= w, !(16 & (w = _ >>> 16 & 255))) {
                            if (0 == (64 & w)) {
                                _ = p[(65535 & _) + (h & (1 << w) - 1)];
                                continue t
                            }
                            n.msg = "invalid distance code", t.mode = 30;
                            break n
                        }
                        if (y = 65535 & _, w &= 15, b < w && (h += z[i++] << b, (b += 8) < w && (h += z[i++] << b, b += 8)), (y += h & (1 << w) - 1) > l) {
                            n.msg = "invalid distance too far back", t.mode = 30;
                            break n
                        }
                        if (h >>>= w, b -= w, w = a - o, y > w) {
                            if ((w = y - w) > d && t.sane) {
                                n.msg = "invalid distance too far back", t.mode = 30;
                                break n
                            }
                            if (x = 0, S = u, 0 === f) {
                                if (x += c - w, w < k) {
                                    k -= w;
                                    do {
                                        E[a++] = u[x++]
                                    } while (--w);
                                    x = a - y, S = E
                                }
                            } else if (f < w) {
                                if (x += c + f - w, (w -= f) < k) {
                                    k -= w;
                                    do {
                                        E[a++] = u[x++]
                                    } while (--w);
                                    if (x = 0, f < k) {
                                        w = f, k -= w;
                                        do {
                                            E[a++] = u[x++]
                                        } while (--w);
                                        x = a - y, S = E
                                    }
                                }
                            } else if (x += f - w, w < k) {
                                k -= w;
                                do {
                                    E[a++] = u[x++]
                                } while (--w);
                                x = a - y, S = E
                            }
                            for (; k > 2;) E[a++] = S[x++], E[a++] = S[x++], E[a++] = S[x++], k -= 3;
                            k && (E[a++] = S[x++], k > 1 && (E[a++] = S[x++]))
                        } else {
                            x = a - y;
                            do {
                                E[a++] = E[x++], E[a++] = E[x++], E[a++] = E[x++], k -= 3
                            } while (k > 2);
                            k && (E[a++] = E[x++], k > 1 && (E[a++] = E[x++]))
                        }
                        break
                    }
                }
                break
            }
        } while (i < r && a < s);
        k = b >> 3, i -= k, b -= k << 3, h &= (1 << b) - 1, n.next_in = i, n.next_out = a, n.avail_in = i < r ? r - i + 5 : 5 - (i - r), n.avail_out = a < s ? s - a + 257 : 257 - (a - s), t.hold = h, t.bits = b
    }
}, function(n, e, t) {
    "use strict";
    var i = t(8),
        r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
    n.exports = function(n, e, t, l, c, d, f, u) {
        var h, b, g, p, m, v, _, w, k, y = u.bits,
            x = 0,
            S = 0,
            z = 0,
            E = 0,
            R = 0,
            A = 0,
            C = 0,
            T = 0,
            L = 0,
            I = 0,
            B = null,
            M = 0,
            D = new i.Buf16(16),
            O = new i.Buf16(16),
            P = null,
            N = 0;
        for (x = 0; x <= 15; x++) D[x] = 0;
        for (S = 0; S < l; S++) D[e[t + S]]++;
        for (R = y, E = 15; E >= 1 && 0 === D[E]; E--);
        if (R > E && (R = E), 0 === E) return c[d++] = 20971520, c[d++] = 20971520, u.bits = 1, 0;
        for (z = 1; z < E && 0 === D[z]; z++);
        for (R < z && (R = z), T = 1, x = 1; x <= 15; x++)
            if (T <<= 1, (T -= D[x]) < 0) return -1;
        if (T > 0 && (0 === n || 1 !== E)) return -1;
        for (O[1] = 0, x = 1; x < 15; x++) O[x + 1] = O[x] + D[x];
        for (S = 0; S < l; S++) 0 !== e[t + S] && (f[O[e[t + S]]++] = S);
        if (0 === n ? (B = P = f, v = 19) : 1 === n ? (B = r, M -= 257, P = a, N -= 257, v = 256) : (B = o, P = s, v = -1), I = 0, S = 0, x = z, m = d, A = R, C = 0, g = -1, L = 1 << R, p = L - 1, 1 === n && L > 852 || 2 === n && L > 592) return 1;
        for (;;) {
            _ = x - C, f[S] < v ? (w = 0, k = f[S]) : f[S] > v ? (w = P[N + f[S]], k = B[M + f[S]]) : (w = 96, k = 0), h = 1 << x - C, b = 1 << A, z = b;
            do {
                b -= h, c[m + (I >> C) + b] = _ << 24 | w << 16 | k | 0
            } while (0 !== b);
            for (h = 1 << x - 1; I & h;) h >>= 1;
            if (0 !== h ? (I &= h - 1, I += h) : I = 0, S++, 0 == --D[x]) {
                if (x === E) break;
                x = e[t + f[S]]
            }
            if (x > R && (I & p) !== g) {
                for (0 === C && (C = R), m += z, A = x - C, T = 1 << A; A + C < E && !((T -= D[A + C]) <= 0);) A++, T <<= 1;
                if (L += 1 << A, 1 === n && L > 852 || 2 === n && L > 592) return 1;
                g = I & p, c[g] = R << 24 | A << 16 | m - d | 0
            }
        }
        return 0 !== I && (c[m + I] = x - C << 24 | 64 << 16 | 0), u.bits = R, 0
    }
}, function(n, e, t) {
    "use strict";
    n.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    }
}, function(n, e) {
    n.exports = [{
        name: "Stone",
        texture_image: "stone.png",
        game_id: "minecraft:stone",
        game_id_13: "minecraft:stone",
        block_id: 1,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 1,
        red: 125,
        green: 125,
        blue: 125,
        h: 0,
        s: 0,
        l: 49
    }, {
        name: "Granite",
        texture_image: "stone_granite.png",
        game_id: "minecraft:stone 1",
        game_id_13: "minecraft:granite",
        block_id: 1,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 2,
        red: 153,
        green: 114,
        blue: 99,
        h: 17,
        s: 21,
        l: 49
    }, {
        name: "Polished Granite",
        texture_image: "stone_granite_smooth.png",
        game_id: "minecraft:stone 2",
        game_id_13: "minecraft:polished_granite",
        block_id: 1,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 3,
        red: 159,
        green: 115,
        blue: 98,
        h: 17,
        s: 24,
        l: 50
    }, {
        name: "Diorite",
        texture_image: "stone_diorite.png",
        game_id: "minecraft:stone 3",
        game_id_13: "minecraft:diorite",
        block_id: 1,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 4,
        red: 180,
        green: 180,
        blue: 183,
        h: 240,
        s: 2,
        l: 71
    }, {
        name: "Polished Diorite",
        texture_image: "stone_diorite_smooth.png",
        game_id: "minecraft:stone 4",
        game_id_13: "minecraft:polished_diorite",
        block_id: 1,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 5,
        red: 183,
        green: 183,
        blue: 186,
        h: 240,
        s: 2,
        l: 72
    }, {
        name: "Andesite",
        texture_image: "stone_andesite.png",
        game_id: "minecraft:stone 5",
        game_id_13: "minecraft:andesite",
        block_id: 1,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 6,
        red: 131,
        green: 131,
        blue: 131,
        h: 0,
        s: 0,
        l: 51
    }, {
        name: "Polished Andesite",
        texture_image: "stone_andesite_smooth.png",
        game_id: "minecraft:stone 6",
        game_id_13: "minecraft:polished_andesite",
        block_id: 1,
        data_id: 6,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 7,
        red: 133,
        green: 133,
        blue: 135,
        h: 240,
        s: 1,
        l: 53
    }, {
        name: "Dirt",
        texture_image: "dirt.png",
        game_id: "minecraft:dirt",
        game_id_13: "minecraft:dirt",
        block_id: 3,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 8,
        red: 134,
        green: 96,
        blue: 67,
        h: 26,
        s: 33,
        l: 39
    }, {
        name: "Cobblestone",
        texture_image: "cobblestone.png",
        game_id: "minecraft:cobblestone",
        game_id_13: "minecraft:cobblestone",
        block_id: 4,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 9,
        red: 123,
        green: 123,
        blue: 123,
        h: 0,
        s: 0,
        l: 48
    }, {
        name: "Oak Wood Plank",
        texture_image: "planks_oak.png",
        game_id: "minecraft:planks",
        game_id_13: "minecraft:oak_planks",
        block_id: 5,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 10,
        red: 157,
        green: 128,
        blue: 79,
        h: 38,
        s: 33,
        l: 46
    }, {
        name: "Spruce Wood Plank",
        texture_image: "planks_spruce.png",
        game_id: "minecraft:planks 1",
        game_id_13: "minecraft:spruce_planks",
        block_id: 5,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 11,
        red: 104,
        green: 78,
        blue: 47,
        h: 33,
        s: 38,
        l: 30
    }, {
        name: "Birch Wood Plank",
        texture_image: "planks_birch.png",
        game_id: "minecraft:planks 2",
        game_id_13: "minecraft:birch_planks",
        block_id: 5,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 12,
        red: 196,
        green: 179,
        blue: 123,
        h: 46,
        s: 38,
        l: 63
    }, {
        name: "Jungle Wood Plank",
        texture_image: "planks_jungle.png",
        game_id: "minecraft:planks 3",
        game_id_13: "minecraft:jungle_planks",
        block_id: 5,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 13,
        red: 154,
        green: 110,
        blue: 77,
        h: 26,
        s: 33,
        l: 45
    }, {
        name: "Acacia Wood Plank",
        texture_image: "planks_acacia.png",
        game_id: "minecraft:planks 4",
        game_id_13: "minecraft:acacia_planks",
        block_id: 5,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 14,
        red: 169,
        green: 92,
        blue: 51,
        h: 21,
        s: 54,
        l: 43
    }, {
        name: "Dark Oak Wood Plank",
        texture_image: "planks_big_oak.png",
        game_id: "minecraft:planks 5",
        game_id_13: "minecraft:dark_oak_planks",
        block_id: 5,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 15,
        red: 61,
        green: 40,
        blue: 18,
        h: 31,
        s: 54,
        l: 15
    }, {
        name: "Bedrock",
        texture_image: "bedrock.png",
        game_id: "minecraft:bedrock",
        game_id_13: "minecraft:bedrock",
        block_id: 7,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 16,
        red: 84,
        green: 84,
        blue: 84,
        h: 0,
        s: 0,
        l: 33
    }, {
        name: "Sand",
        texture_image: "sand.png",
        game_id: "minecraft:sand",
        game_id_13: "minecraft:sand",
        block_id: 12,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 17,
        red: 219,
        green: 211,
        blue: 160,
        h: 52,
        s: 45,
        l: 74
    }, {
        name: "Red Sand",
        texture_image: "red_sand.png",
        game_id: "minecraft:sand 1",
        game_id_13: "minecraft:red_sand",
        block_id: 12,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 18,
        red: 169,
        green: 88,
        blue: 33,
        h: 24,
        s: 67,
        l: 40
    }, {
        name: "Gravel",
        texture_image: "gravel.png",
        game_id: "minecraft:gravel",
        game_id_13: "minecraft:gravel",
        block_id: 13,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 19,
        red: 127,
        green: 124,
        blue: 123,
        h: 15,
        s: 2,
        l: 49
    }, {
        name: "Gold Ore",
        texture_image: "gold_ore.png",
        game_id: "minecraft:gold_ore",
        game_id_13: "minecraft:gold_ore",
        block_id: 14,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 20,
        red: 143,
        green: 140,
        blue: 125,
        h: 50,
        s: 7,
        l: 53
    }, {
        name: "Iron Ore",
        texture_image: "iron_ore.png",
        game_id: "minecraft:iron_ore",
        game_id_13: "minecraft:iron_ore",
        block_id: 15,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 21,
        red: 136,
        green: 130,
        blue: 127,
        h: 20,
        s: 4,
        l: 52
    }, {
        name: "Coal Ore",
        texture_image: "coal_ore.png",
        game_id: "minecraft:coal_ore",
        game_id_13: "minecraft:coal_ore",
        block_id: 16,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 22,
        red: 115,
        green: 115,
        blue: 115,
        h: 0,
        s: 0,
        l: 45
    }, {
        name: "Oak Wood",
        texture_image: "log_oak.png",
        game_id: "minecraft:log",
        game_id_13: "minecraft:oak_log",
        block_id: 17,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 23,
        red: 102,
        green: 81,
        blue: 50,
        h: 36,
        s: 34,
        l: 30
    }, {
        name: "Oak Wood (Top)",
        texture_image: "log_oak_top.png",
        game_id: "minecraft:log 0",
        game_id_13: "minecraft:oak_log",
        block_id: 17,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 24,
        red: 155,
        green: 125,
        blue: 77,
        h: 37,
        s: 34,
        l: 45
    }, {
        name: "Spruce Wood",
        texture_image: "log_spruce.png",
        game_id: "minecraft:log 1",
        game_id_13: "minecraft:spruce_log",
        block_id: 17,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 25,
        red: 46,
        green: 29,
        blue: 12,
        h: 30,
        s: 59,
        l: 11
    }, {
        name: "Spruce Wood (Top)",
        texture_image: "log_spruce_top.png",
        game_id: "minecraft:log 1",
        game_id_13: "minecraft:oak_log",
        block_id: 17,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 26,
        red: 105,
        green: 81,
        blue: 48,
        h: 35,
        s: 37,
        l: 30
    }, {
        name: "Birch Wood",
        texture_image: "log_birch.png",
        game_id: "minecraft:log 2",
        game_id_13: "minecraft:birch_log",
        block_id: 17,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 27,
        red: 207,
        green: 206,
        blue: 201,
        h: 50,
        s: 6,
        l: 80
    }, {
        name: "Birch Wood (Top)",
        texture_image: "log_birch_top.png",
        game_id: "minecraft:log 2",
        game_id_13: "minecraft:birch_log",
        block_id: 17,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 28,
        red: 184,
        green: 166,
        blue: 122,
        h: 43,
        s: 30,
        l: 60
    }, {
        name: "Jungle Wood",
        texture_image: "log_jungle.png",
        game_id: "minecraft:log 3",
        game_id_13: "minecraft:jungle_log",
        block_id: 17,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 29,
        red: 87,
        green: 68,
        blue: 27,
        h: 41,
        s: 53,
        l: 22
    }, {
        name: "Jungle Wood (Top)",
        texture_image: "log_jungle_top.png",
        game_id: "minecraft:log 3",
        game_id_13: "minecraft:jungle_log",
        block_id: 17,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 30,
        red: 154,
        green: 119,
        blue: 73,
        h: 34,
        s: 36,
        l: 45
    }, {
        name: "Leaves",
        texture_image: "leaves.png",
        game_id: "minecraft:leaves",
        game_id_13: "minecraft:oak_leaves",
        block_id: 18,
        data_id: 0,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 31,
        red: 53,
        green: 83,
        blue: 19,
        h: 88,
        s: 63,
        l: 20
    }, {
        name: "Sponge",
        texture_image: "sponge.png",
        game_id: "minecraft:sponge",
        game_id_13: "minecraft:sponge",
        block_id: 19,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 32,
        red: 195,
        green: 196,
        blue: 85,
        h: 61,
        s: 48,
        l: 55
    }, {
        name: "Lapis Lazuli Ore",
        texture_image: "lapis_ore.png",
        game_id: "minecraft:lapis_ore",
        game_id_13: "minecraft:lapis_ore",
        block_id: 21,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 33,
        red: 102,
        green: 112,
        blue: 135,
        h: 222,
        s: 14,
        l: 46
    }, {
        name: "Lapis Lazuli Block",
        texture_image: "lapis_block.png",
        game_id: "minecraft:lapis_block",
        game_id_13: "minecraft:lapis_block",
        block_id: 22,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 34,
        red: 39,
        green: 67,
        blue: 138,
        h: 223,
        s: 56,
        l: 35
    }, {
        name: "Sandstone",
        texture_image: "sandstone_normal.png",
        game_id: "minecraft:sandstone",
        game_id_13: "minecraft:sandstone",
        block_id: 24,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 35,
        red: 217,
        green: 210,
        blue: 157,
        h: 53,
        s: 44,
        l: 73
    }, {
        name: "Chiseled Sandstone",
        texture_image: "sandstone_carved.png",
        game_id: "minecraft:sandstone 1",
        game_id_13: "minecraft:chiseled_sandstone",
        block_id: 24,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 36,
        red: 216,
        green: 208,
        blue: 155,
        h: 52,
        s: 44,
        l: 73
    }, {
        name: "Smooth Sandstone",
        texture_image: "sandstone_smooth.png",
        game_id: "minecraft:sandstone 2",
        game_id_13: "minecraft:cut_sandstone",
        block_id: 24,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 37,
        red: 220,
        green: 212,
        blue: 162,
        h: 52,
        s: 45,
        l: 75
    }, {
        name: "Note Block",
        texture_image: "noteblock.png",
        game_id: "minecraft:noteblock",
        game_id_13: "minecraft:note_block",
        block_id: 25,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 38,
        red: 101,
        green: 68,
        blue: 51,
        h: 20,
        s: 33,
        l: 30
    }, {
        name: "White Wool",
        texture_image: "wool_colored_white.png",
        game_id: "minecraft:wool",
        game_id_13: "minecraft:white_wool",
        block_id: 35,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 39,
        red: 234,
        green: 236,
        blue: 237,
        h: 200,
        s: 8,
        l: 92
    }, {
        name: "Orange Wool",
        texture_image: "wool_colored_orange.png",
        game_id: "minecraft:wool 1",
        game_id_13: "minecraft:orange_wool",
        block_id: 35,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 40,
        red: 241,
        green: 118,
        blue: 20,
        h: 27,
        s: 89,
        l: 51
    }, {
        name: "Magenta Wool",
        texture_image: "wool_colored_magenta.png",
        game_id: "minecraft:wool 2",
        game_id_13: "minecraft:magenta_wool",
        block_id: 35,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 41,
        red: 190,
        green: 69,
        blue: 180,
        h: 305,
        s: 48,
        l: 51
    }, {
        name: "Light Blue Wool",
        texture_image: "wool_colored_light_blue.png",
        game_id: "minecraft:wool 3",
        game_id_13: "minecraft:light_blue_wool",
        block_id: 35,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 42,
        red: 58,
        green: 175,
        blue: 217,
        h: 196,
        s: 68,
        l: 54
    }, {
        name: "Yellow Wool",
        texture_image: "wool_colored_yellow.png",
        game_id: "minecraft:wool 4",
        game_id_13: "minecraft:yellow_wool",
        block_id: 35,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 43,
        red: 249,
        green: 198,
        blue: 40,
        h: 45,
        s: 95,
        l: 57
    }, {
        name: "Lime Wool",
        texture_image: "wool_colored_lime.png",
        game_id: "minecraft:wool 5",
        game_id_13: "minecraft:lime_wool",
        block_id: 35,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 44,
        red: 112,
        green: 185,
        blue: 26,
        h: 88,
        s: 75,
        l: 41
    }, {
        name: "Pink Wool",
        texture_image: "wool_colored_pink.png",
        game_id: "minecraft:wool 6",
        game_id_13: "minecraft:pink_wool",
        block_id: 35,
        data_id: 6,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 45,
        red: 238,
        green: 141,
        blue: 172,
        h: 341,
        s: 74,
        l: 74
    }, {
        name: "Gray Wool",
        texture_image: "wool_colored_gray.png",
        game_id: "minecraft:wool 7",
        game_id_13: "minecraft:gray_wool",
        block_id: 35,
        data_id: 7,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 46,
        red: 63,
        green: 68,
        blue: 72,
        h: 207,
        s: 7,
        l: 26
    }, {
        name: "Light Gray Wool",
        texture_image: "wool_colored_silver.png",
        game_id: "minecraft:wool 8",
        game_id_13: "minecraft:light_gray_wool",
        block_id: 35,
        data_id: 8,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 47,
        red: 142,
        green: 142,
        blue: 135,
        h: 60,
        s: 3,
        l: 54
    }, {
        name: "Cyan Wool",
        texture_image: "wool_colored_cyan.png",
        game_id: "minecraft:wool 9",
        game_id_13: "minecraft:cyan_wool",
        block_id: 35,
        data_id: 9,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 48,
        red: 21,
        green: 138,
        blue: 145,
        h: 183,
        s: 75,
        l: 33
    }, {
        name: "Purple Wool",
        texture_image: "wool_colored_purple.png",
        game_id: "minecraft:wool 10",
        game_id_13: "minecraft:purple_wool",
        block_id: 35,
        data_id: 10,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 49,
        red: 122,
        green: 42,
        blue: 173,
        h: 277,
        s: 61,
        l: 42
    }, {
        name: "Blue Wool",
        texture_image: "wool_colored_blue.png",
        game_id: "minecraft:wool 11",
        game_id_13: "minecraft:blue_wool",
        block_id: 35,
        data_id: 11,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 50,
        red: 53,
        green: 57,
        blue: 157,
        h: 238,
        s: 50,
        l: 41
    }, {
        name: "Brown Wool",
        texture_image: "wool_colored_brown.png",
        game_id: "minecraft:wool 12",
        game_id_13: "minecraft:brown_wool",
        block_id: 35,
        data_id: 12,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 51,
        red: 114,
        green: 72,
        blue: 41,
        h: 25,
        s: 47,
        l: 30
    }, {
        name: "Green Wool",
        texture_image: "wool_colored_green.png",
        game_id: "minecraft:wool 13",
        game_id_13: "minecraft:green_wool",
        block_id: 35,
        data_id: 13,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 52,
        red: 85,
        green: 110,
        blue: 28,
        h: 78,
        s: 59,
        l: 27
    }, {
        name: "Red Wool",
        texture_image: "wool_colored_red.png",
        game_id: "minecraft:wool 14",
        game_id_13: "minecraft:red_wool",
        block_id: 35,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 53,
        red: 161,
        green: 39,
        blue: 35,
        h: 2,
        s: 64,
        l: 38
    }, {
        name: "Black Wool",
        texture_image: "wool_colored_black.png",
        game_id: "minecraft:wool 15",
        game_id_13: "minecraft:black_wool",
        block_id: 35,
        data_id: 15,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 54,
        red: 21,
        green: 21,
        blue: 26,
        h: 240,
        s: 11,
        l: 9
    }, {
        name: "Gold Block",
        texture_image: "gold_block.png",
        game_id: "minecraft:gold_block",
        game_id_13: "minecraft:gold_block",
        block_id: 41,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 55,
        red: 249,
        green: 236,
        blue: 79,
        h: 55,
        s: 93,
        l: 64
    }, {
        name: "Iron Block",
        texture_image: "iron_block.png",
        game_id: "minecraft:iron_block",
        game_id_13: "minecraft:iron_block",
        block_id: 42,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 56,
        red: 219,
        green: 219,
        blue: 219,
        h: 0,
        s: 0,
        l: 86
    }, {
        name: "Bricks",
        texture_image: "brick.png",
        game_id: "minecraft:brick_block",
        game_id_13: "minecraft:bricks",
        block_id: 45,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 57,
        red: 147,
        green: 100,
        blue: 87,
        h: 13,
        s: 26,
        l: 46
    }, {
        name: "TNT",
        texture_image: "tnt_side.png",
        game_id: "minecraft:tnt",
        game_id_13: "minecraft:tnt",
        block_id: 46,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !0,
        survival: !0,
        version: 9,
        id: 58,
        red: 170,
        green: 93,
        blue: 71,
        h: 13,
        s: 41,
        l: 47
    }, {
        name: "Bookshelf",
        texture_image: "bookshelf.png",
        game_id: "minecraft:bookshelf",
        game_id_13: "minecraft:bookshelf",
        block_id: 47,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 59,
        red: 108,
        green: 88,
        blue: 58,
        h: 36,
        s: 30,
        l: 33
    }, {
        name: "Moss Stone",
        texture_image: "cobblestone_mossy.png",
        game_id: "minecraft:mossy_cobblestone",
        game_id_13: "minecraft:mossy_cobblestone",
        block_id: 48,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 60,
        red: 104,
        green: 121,
        blue: 104,
        h: 120,
        s: 8,
        l: 44
    }, {
        name: "Obsidian",
        texture_image: "obsidian.png",
        game_id: "minecraft:obsidian",
        game_id_13: "minecraft:obsidian",
        block_id: 49,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 61,
        red: 20,
        green: 18,
        blue: 30,
        h: 250,
        s: 25,
        l: 9
    }, {
        name: "Diamond Ore",
        texture_image: "diamond_ore.png",
        game_id: "minecraft:diamond_ore",
        game_id_13: "minecraft:diamond_ore",
        block_id: 56,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 62,
        red: 129,
        green: 140,
        blue: 143,
        h: 193,
        s: 6,
        l: 53
    }, {
        name: "Diamond Block",
        texture_image: "diamond_block.png",
        game_id: "minecraft:diamond_block",
        game_id_13: "minecraft:diamond_block",
        block_id: 57,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 63,
        red: 98,
        green: 219,
        blue: 214,
        h: 178,
        s: 63,
        l: 62
    }, {
        name: "Crafting Table",
        texture_image: "crafting_table_side.png",
        game_id: "minecraft:crafting_table",
        game_id_13: "minecraft:crafting_table",
        block_id: 58,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 64,
        red: 119,
        green: 96,
        blue: 60,
        h: 37,
        s: 33,
        l: 35
    }, {
        name: "Redstone Ore",
        texture_image: "redstone_ore.png",
        game_id: "minecraft:redstone_ore",
        game_id_13: "minecraft:redstone_ore",
        block_id: 73,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 65,
        red: 133,
        green: 107,
        blue: 107,
        h: 0,
        s: 11,
        l: 47
    }, {
        name: "Snow",
        texture_image: "snow.png",
        game_id: "minecraft:snow",
        game_id_13: "minecraft:snow_block",
        block_id: 80,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 66,
        red: 240,
        green: 251,
        blue: 251,
        h: 180,
        s: 58,
        l: 96
    }, {
        name: "Ice",
        texture_image: "ice.png",
        game_id: "minecraft:ice",
        game_id_13: "minecraft:ice",
        block_id: 79,
        data_id: 0,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 67,
        red: 125,
        green: 173,
        blue: 255,
        h: 218,
        s: 100,
        l: 75
    }, {
        name: "Clay",
        texture_image: "clay.png",
        game_id: "minecraft:clay",
        game_id_13: "minecraft:clay",
        block_id: 82,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 68,
        red: 159,
        green: 164,
        blue: 177,
        h: 223,
        s: 10,
        l: 66
    }, {
        name: "Netherrack",
        texture_image: "netherrack.png",
        game_id: "minecraft:netherrack",
        game_id_13: "minecraft:netherrack",
        block_id: 87,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 69,
        red: 111,
        green: 54,
        blue: 53,
        h: 1,
        s: 35,
        l: 32
    }, {
        name: "Soul Sand",
        texture_image: "soul_sand.png",
        game_id: "minecraft:soul_sand",
        game_id_13: "minecraft:soul_sand",
        block_id: 88,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 70,
        red: 85,
        green: 64,
        blue: 52,
        h: 22,
        s: 24,
        l: 27
    }, {
        name: "Glow Stone",
        texture_image: "glowstone.png",
        game_id: "minecraft:glowstone",
        game_id_13: "minecraft:glowstone",
        block_id: 89,
        data_id: 0,
        luminance: !0,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 71,
        red: 144,
        green: 118,
        blue: 70,
        h: 39,
        s: 35,
        l: 42
    }, {
        name: "White Stained Glass",
        texture_image: "glass_white.png",
        game_id: "minecraft:stained_glass",
        game_id_13: "minecraft:white_stained_glass",
        block_id: 95,
        data_id: 0,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 72,
        red: 255,
        green: 255,
        blue: 255,
        h: 0,
        s: 0,
        l: 100
    }, {
        name: "Orange Stained Glass",
        texture_image: "glass_orange.png",
        game_id: "minecraft:stained_glass 1",
        game_id_13: "minecraft:orange_stained_glass",
        block_id: 95,
        data_id: 1,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 73,
        red: 216,
        green: 127,
        blue: 51,
        h: 28,
        s: 68,
        l: 52
    }, {
        name: "Magenta Stained Glass",
        texture_image: "glass_magenta.png",
        game_id: "minecraft:stained_glass 2",
        game_id_13: "minecraft:magenta_stained_glass",
        block_id: 95,
        data_id: 2,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 74,
        red: 178,
        green: 76,
        blue: 216,
        h: 284,
        s: 64,
        l: 57
    }, {
        name: "Light Blue Stained Glass",
        texture_image: "glass_light_blue.png",
        game_id: "minecraft:stained_glass 3",
        game_id_13: "minecraft:light_blue_stained_glass",
        block_id: 95,
        data_id: 3,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 75,
        red: 102,
        green: 153,
        blue: 216,
        h: 213,
        s: 59,
        l: 62
    }, {
        name: "Yellow Stained Glass",
        texture_image: "glass_yellow.png",
        game_id: "minecraft:stained_glass 4",
        game_id_13: "minecraft:yellow_stained_glass",
        block_id: 95,
        data_id: 4,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 76,
        red: 229,
        green: 229,
        blue: 51,
        h: 60,
        s: 77,
        l: 55
    }, {
        name: "Lime Stained Glass",
        texture_image: "glass_lime.png",
        game_id: "minecraft:stained_glass 5",
        game_id_13: "minecraft:lime_stained_glass",
        block_id: 95,
        data_id: 5,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 77,
        red: 127,
        green: 204,
        blue: 25,
        h: 86,
        s: 78,
        l: 45
    }, {
        name: "Pink Stained Glass",
        texture_image: "glass_pink.png",
        game_id: "minecraft:stained_glass 6",
        game_id_13: "minecraft:pink_stained_glass",
        block_id: 95,
        data_id: 6,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 78,
        red: 242,
        green: 127,
        blue: 165,
        h: 340,
        s: 82,
        l: 72
    }, {
        name: "Gray Stained Glass",
        texture_image: "glass_gray.png",
        game_id: "minecraft:stained_glass 7",
        game_id_13: "minecraft:gray_stained_glass",
        block_id: 95,
        data_id: 7,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 79,
        red: 76,
        green: 76,
        blue: 76,
        h: 0,
        s: 0,
        l: 30
    }, {
        name: "Light Gray Stained Glass",
        texture_image: "glass_silver.png",
        game_id: "minecraft:stained_glass 8",
        game_id_13: "minecraft:light_gray_stained_glass",
        block_id: 95,
        data_id: 8,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 80,
        red: 153,
        green: 153,
        blue: 153,
        h: 0,
        s: 0,
        l: 60
    }, {
        name: "Cyan Stained Glass",
        texture_image: "glass_cyan.png",
        game_id: "minecraft:stained_glass 9",
        game_id_13: "minecraft:cyan_stained_glass",
        block_id: 95,
        data_id: 9,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 81,
        red: 76,
        green: 127,
        blue: 153,
        h: 200,
        s: 34,
        l: 45
    }, {
        name: "Purple Stained Glass",
        texture_image: "glass_purple.png",
        game_id: "minecraft:stained_glass 10",
        game_id_13: "minecraft:purple_stained_glass",
        block_id: 95,
        data_id: 10,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 82,
        red: 127,
        green: 63,
        blue: 178,
        h: 273,
        s: 48,
        l: 47
    }, {
        name: "Blue Stained Glass",
        texture_image: "glass_blue.png",
        game_id: "minecraft:stained_glass 11",
        game_id_13: "minecraft:blue_stained_glass",
        block_id: 95,
        data_id: 11,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 83,
        red: 51,
        green: 76,
        blue: 178,
        h: 228,
        s: 55,
        l: 45
    }, {
        name: "Brown Stained Glass",
        texture_image: "glass_brown.png",
        game_id: "minecraft:stained_glass 12",
        game_id_13: "minecraft:brown_stained_glass",
        block_id: 95,
        data_id: 12,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 84,
        red: 102,
        green: 76,
        blue: 51,
        h: 29,
        s: 33,
        l: 30
    }, {
        name: "Green Stained Glass",
        texture_image: "glass_green.png",
        game_id: "minecraft:stained_glass 13",
        game_id_13: "minecraft:green_stained_glass",
        block_id: 95,
        data_id: 13,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 85,
        red: 102,
        green: 127,
        blue: 51,
        h: 80,
        s: 43,
        l: 35
    }, {
        name: "Red Stained Glass",
        texture_image: "glass_red.png",
        game_id: "minecraft:stained_glass 14",
        game_id_13: "minecraft:red_stained_glass",
        block_id: 95,
        data_id: 14,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 86,
        red: 153,
        green: 51,
        blue: 51,
        h: 0,
        s: 50,
        l: 40
    }, {
        name: "Black Stained Glass",
        texture_image: "glass_black.png",
        game_id: "minecraft:stained_glass 15",
        game_id_13: "minecraft:black_stained_glass",
        block_id: 95,
        data_id: 15,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 87,
        red: 25,
        green: 25,
        blue: 25,
        h: 0,
        s: 0,
        l: 10
    }, {
        name: "Stonebrick",
        texture_image: "stonebrick.png",
        game_id: "minecraft:stonebrick",
        game_id_13: "minecraft:stone_bricks",
        block_id: 98,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 88,
        red: 122,
        green: 122,
        blue: 122,
        h: 0,
        s: 0,
        l: 48
    }, {
        name: "Mossy Stonebrick",
        texture_image: "stonebrick_mossy.png",
        game_id: "minecraft:stonebrick 1",
        game_id_13: "minecraft:mossy_stone_bricks",
        block_id: 98,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 89,
        red: 115,
        green: 119,
        blue: 106,
        h: 78,
        s: 6,
        l: 44
    }, {
        name: "Cracked Stonebrick",
        texture_image: "stonebrick_cracked.png",
        game_id: "minecraft:stonebrick 2",
        game_id_13: "minecraft:cracked_stone_bricks",
        block_id: 98,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 90,
        red: 119,
        green: 119,
        blue: 119,
        h: 0,
        s: 0,
        l: 47
    }, {
        name: "Chiseled Stonebrick",
        texture_image: "stonebrick_carved.png",
        game_id: "minecraft:stonebrick 3",
        game_id_13: "minecraft:chiseled_stone_bricks",
        block_id: 98,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 91,
        red: 119,
        green: 119,
        blue: 119,
        h: 0,
        s: 0,
        l: 47
    }, {
        name: "Brown Mushroom Block",
        texture_image: "mushroom_block_skin_brown.png",
        game_id: "minecraft:brown_mushroom_block",
        game_id_13: "minecraft:brown_mushroom_block",
        block_id: 99,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 92,
        red: 142,
        green: 107,
        blue: 83,
        h: 24,
        s: 26,
        l: 44
    }, {
        name: "Red Mushroom Block",
        texture_image: "mushroom_block_skin_red.png",
        game_id: "minecraft:red_mushroom_block",
        game_id_13: "minecraft:red_mushroom_block",
        block_id: 100,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 93,
        red: 183,
        green: 38,
        blue: 36,
        h: 1,
        s: 67,
        l: 43
    }, {
        name: "Melon Block",
        texture_image: "melon_side.png",
        game_id: "minecraft:melon_block",
        game_id_13: "minecraft:melon",
        block_id: 103,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 94,
        red: 141,
        green: 146,
        blue: 36,
        h: 63,
        s: 60,
        l: 36
    }, {
        name: "Nether Brick",
        texture_image: "nether_brick.png",
        game_id: "minecraft:nether_brick",
        game_id_13: "minecraft:nether_bricks",
        block_id: 112,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 95,
        red: 45,
        green: 23,
        blue: 27,
        h: 349,
        s: 32,
        l: 13
    }, {
        name: "End Stone",
        texture_image: "end_stone.png",
        game_id: "minecraft:end_stone",
        game_id_13: "minecraft:end_stone",
        block_id: 121,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 96,
        red: 221,
        green: 224,
        blue: 165,
        h: 63,
        s: 49,
        l: 76
    }, {
        name: "Redstone Lamp",
        texture_image: "redstone_lamp_off.png",
        game_id: "minecraft:redstone_lamp",
        game_id_13: "minecraft:redstone_lamp",
        block_id: 123,
        data_id: 0,
        luminance: !0,
        transparency: !1,
        falling: !1,
        redstone: !0,
        survival: !0,
        version: 9,
        id: 97,
        red: 70,
        green: 43,
        blue: 27,
        h: 22,
        s: 44,
        l: 19
    }, {
        name: "Emerald Ore",
        texture_image: "emerald_ore.png",
        game_id: "minecraft:emerald_ore",
        game_id_13: "minecraft:emerald_ore",
        block_id: 129,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 98,
        red: 110,
        green: 129,
        blue: 116,
        h: 139,
        s: 8,
        l: 47
    }, {
        name: "Emerald Block",
        texture_image: "emerald_block.png",
        game_id: "minecraft:emerald_block",
        game_id_13: "minecraft:emerald_block",
        block_id: 133,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 99,
        red: 81,
        green: 217,
        blue: 117,
        h: 136,
        s: 64,
        l: 58
    }, {
        name: "Redstone Block",
        texture_image: "redstone_block.png",
        game_id: "minecraft:redstone_block",
        game_id_13: "minecraft:redstone_block",
        block_id: 152,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !0,
        survival: !0,
        version: 9,
        id: 100,
        red: 171,
        green: 28,
        blue: 9,
        h: 7,
        s: 90,
        l: 35
    }, {
        name: "Nether Quartz Ore",
        texture_image: "quartz_ore.png",
        game_id: "minecraft:quartz_ore",
        game_id_13: "minecraft:nether_quartz_ore",
        block_id: 153,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 101,
        red: 125,
        green: 85,
        blue: 80,
        h: 7,
        s: 22,
        l: 40
    }, {
        name: "Quartz Block",
        texture_image: "quartz_block_side.png",
        game_id: "minecraft:quartz_block",
        game_id_13: "minecraft:quartz_block",
        block_id: 155,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 102,
        red: 236,
        green: 233,
        blue: 226,
        h: 42,
        s: 21,
        l: 91
    }, {
        name: "Chiseled Quartz Block",
        texture_image: "quartz_block_chiseled.png",
        game_id: "minecraft:quartz_block 1",
        game_id_13: "minecraft:chiseled_quartz_block",
        block_id: 155,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 103,
        red: 232,
        green: 228,
        blue: 220,
        h: 40,
        s: 21,
        l: 89
    }, {
        name: "Pillar Quartz Block",
        texture_image: "quartz_block_lines.png",
        game_id: "minecraft:quartz_block 2",
        game_id_13: "minecraft:quartz_pillar",
        block_id: 155,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 104,
        red: 232,
        green: 228,
        blue: 220,
        h: 40,
        s: 21,
        l: 89
    }, {
        name: "White Hardened Clay",
        texture_image: "hardened_clay_stained_white.png",
        game_id: "minecraft:stained_hardened_clay",
        game_id_13: "minecraft:white_terracotta",
        block_id: 159,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 105,
        red: 210,
        green: 178,
        blue: 161,
        h: 21,
        s: 35,
        l: 73
    }, {
        name: "Orange Hardened Clay",
        texture_image: "hardened_clay_stained_orange.png",
        game_id: "minecraft:stained_hardened_clay 1",
        game_id_13: "minecraft:orange_terracotta",
        block_id: 159,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 106,
        red: 162,
        green: 84,
        blue: 38,
        h: 22,
        s: 62,
        l: 39
    }, {
        name: "Magenta Hardened Clay",
        texture_image: "hardened_clay_stained_magenta.png",
        game_id: "minecraft:stained_hardened_clay 2",
        game_id_13: "minecraft:magenta_terracotta",
        block_id: 159,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 107,
        red: 150,
        green: 88,
        blue: 109,
        h: 340,
        s: 26,
        l: 47
    }, {
        name: "Light Blue Hardened Clay",
        texture_image: "hardened_clay_stained_light_blue.png",
        game_id: "minecraft:stained_hardened_clay 3",
        game_id_13: "minecraft:light_blue_terracotta",
        block_id: 159,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 108,
        red: 113,
        green: 109,
        blue: 138,
        h: 248,
        s: 12,
        l: 48
    }, {
        name: "Yellow Hardened Clay",
        texture_image: "hardened_clay_stained_yellow.png",
        game_id: "minecraft:stained_hardened_clay 4",
        game_id_13: "minecraft:yellow_terracotta",
        block_id: 159,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 109,
        red: 186,
        green: 133,
        blue: 35,
        h: 39,
        s: 68,
        l: 43
    }, {
        name: "Lime Hardened Clay",
        texture_image: "hardened_clay_stained_lime.png",
        game_id: "minecraft:stained_hardened_clay 5",
        game_id_13: "minecraft:lime_terracotta",
        block_id: 159,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 110,
        red: 104,
        green: 118,
        blue: 53,
        h: 73,
        s: 38,
        l: 34
    }, {
        name: "Pink Hardened Clay",
        texture_image: "hardened_clay_stained_pink.png",
        game_id: "minecraft:stained_hardened_clay 6",
        game_id_13: "minecraft:pink_terracotta",
        block_id: 159,
        data_id: 6,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 111,
        red: 162,
        green: 78,
        blue: 79,
        h: 359,
        s: 35,
        l: 47
    }, {
        name: "Gray Hardened Clay",
        texture_image: "hardened_clay_stained_gray.png",
        game_id: "minecraft:stained_hardened_clay 7",
        game_id_13: "minecraft:gray_terracotta",
        block_id: 159,
        data_id: 7,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 112,
        red: 58,
        green: 42,
        blue: 36,
        h: 16,
        s: 23,
        l: 18
    }, {
        name: "Light Gray Hardened Clay",
        texture_image: "hardened_clay_stained_silver.png",
        game_id: "minecraft:stained_hardened_clay 8",
        game_id_13: "minecraft:light_gray_terracotta",
        block_id: 159,
        data_id: 8,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 113,
        red: 135,
        green: 107,
        blue: 98,
        h: 15,
        s: 16,
        l: 46
    }, {
        name: "Cyan Hardened Clay",
        texture_image: "hardened_clay_stained_cyan.png",
        game_id: "minecraft:stained_hardened_clay 9",
        game_id_13: "minecraft:cyan_terracotta",
        block_id: 159,
        data_id: 9,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 114,
        red: 87,
        green: 91,
        blue: 91,
        h: 180,
        s: 2,
        l: 35
    }, {
        name: "Purple Hardened Clay",
        texture_image: "hardened_clay_stained_purple.png",
        game_id: "minecraft:stained_hardened_clay 10",
        game_id_13: "minecraft:purple_terracotta",
        block_id: 159,
        data_id: 10,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 115,
        red: 118,
        green: 70,
        blue: 86,
        h: 340,
        s: 26,
        l: 37
    }, {
        name: "Blue Hardened Clay",
        texture_image: "hardened_clay_stained_blue.png",
        game_id: "minecraft:stained_hardened_clay 11",
        game_id_13: "minecraft:blue_terracotta",
        block_id: 159,
        data_id: 11,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 116,
        red: 74,
        green: 60,
        blue: 91,
        h: 267,
        s: 21,
        l: 30
    }, {
        name: "Brown Hardened Clay",
        texture_image: "hardened_clay_stained_brown.png",
        game_id: "minecraft:stained_hardened_clay 12",
        game_id_13: "minecraft:brown_terracotta",
        block_id: 159,
        data_id: 12,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 117,
        red: 77,
        green: 51,
        blue: 36,
        h: 22,
        s: 36,
        l: 22
    }, {
        name: "Green Hardened Clay",
        texture_image: "hardened_clay_stained_green.png",
        game_id: "minecraft:stained_hardened_clay 13",
        game_id_13: "minecraft:green_terracotta",
        block_id: 159,
        data_id: 13,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 118,
        red: 76,
        green: 83,
        blue: 42,
        h: 70,
        s: 33,
        l: 25
    }, {
        name: "Red Hardened Clay",
        texture_image: "hardened_clay_stained_red.png",
        game_id: "minecraft:stained_hardened_clay 14",
        game_id_13: "minecraft:red_terracotta",
        block_id: 159,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 119,
        red: 143,
        green: 61,
        blue: 47,
        h: 9,
        s: 51,
        l: 37
    }, {
        name: "Black Hardened Clay",
        texture_image: "hardened_clay_stained_black.png",
        game_id: "minecraft:stained_hardened_clay 15",
        game_id_13: "minecraft:black_terracotta",
        block_id: 159,
        data_id: 15,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 120,
        red: 37,
        green: 23,
        blue: 16,
        h: 20,
        s: 40,
        l: 10
    }, {
        name: "Acacia Wood",
        texture_image: "log_acacia.png",
        game_id: "minecraft:log2",
        game_id_13: "minecraft:acacia_log",
        block_id: 162,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 121,
        red: 105,
        green: 99,
        blue: 89,
        h: 38,
        s: 8,
        l: 38
    }, {
        name: "Acacia Wood (Top)",
        texture_image: "log_acacia_top.png",
        game_id: "minecraft:log2 0",
        game_id_13: "minecraft:acacia_log",
        block_id: 162,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 122,
        red: 154,
        green: 91,
        blue: 64,
        h: 18,
        s: 41,
        l: 43
    }, {
        name: "Dark Oak Wood",
        texture_image: "log_big_oak.png",
        game_id: "minecraft:log2 1",
        game_id_13: "minecraft:dark_oak_log",
        block_id: 162,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 123,
        red: 52,
        green: 41,
        blue: 23,
        h: 37,
        s: 39,
        l: 15
    }, {
        name: "Dark Oak Wood (Top)",
        texture_image: "log_big_oak_top.png",
        game_id: "minecraft:log2 1",
        game_id_13: "minecraft:dark_oak_log",
        block_id: 162,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        axis: !0,
        id: 124,
        red: 78,
        green: 62,
        blue: 41,
        h: 34,
        s: 31,
        l: 23
    }, {
        name: "Slime Block",
        texture_image: "slime.png",
        game_id: "minecraft:slime",
        game_id_13: "minecraft:slime_block",
        block_id: 165,
        data_id: 0,
        luminance: !1,
        transparency: !0,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 125,
        red: 121,
        green: 200,
        blue: 101,
        h: 108,
        s: 47,
        l: 59
    }, {
        name: "Prismarine",
        texture_image: "prismarine.png",
        game_id: "minecraft:prismarine",
        game_id_13: "minecraft:prismarine",
        block_id: 168,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 126,
        red: 107,
        green: 170,
        blue: 151,
        h: 162,
        s: 27,
        l: 54
    }, {
        name: "Prismarine Bricks",
        texture_image: "prismarine_bricks.png",
        game_id: "minecraft:prismarine 1",
        game_id_13: "minecraft:prismarine_bricks",
        block_id: 168,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 127,
        red: 100,
        green: 160,
        blue: 143,
        h: 163,
        s: 24,
        l: 51
    }, {
        name: "Dark Prismarine",
        texture_image: "prismarine_dark.png",
        game_id: "minecraft:prismarine 2",
        game_id_13: "minecraft:dark_prismarine",
        block_id: 168,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 128,
        red: 60,
        green: 88,
        blue: 75,
        h: 152,
        s: 19,
        l: 29
    }, {
        name: "Sea Lantern",
        texture_image: "sea_lantern.png",
        game_id: "minecraft:sea_lantern",
        game_id_13: "minecraft:sea_lantern",
        block_id: 169,
        data_id: 0,
        luminance: !0,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 129,
        red: 172,
        green: 200,
        blue: 191,
        h: 161,
        s: 20,
        l: 73
    }, {
        name: "Hay Bale",
        texture_image: "hay_block_side.png",
        game_id: "minecraft:hay_block",
        game_id_13: "minecraft:hay_block",
        block_id: 170,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 130,
        red: 158,
        green: 117,
        blue: 18,
        h: 42,
        s: 80,
        l: 35
    }, {
        name: "Hardened Clay",
        texture_image: "hardened_clay.png",
        game_id: "minecraft:hardened_clay",
        game_id_13: "minecraft:terracotta",
        block_id: 172,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 131,
        red: 151,
        green: 93,
        blue: 67,
        h: 19,
        s: 39,
        l: 43
    }, {
        name: "Block of Coal",
        texture_image: "coal_block.png",
        game_id: "minecraft:coal_block",
        game_id_13: "minecraft:coal_block",
        block_id: 173,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 132,
        red: 19,
        green: 19,
        blue: 19,
        h: 0,
        s: 0,
        l: 7
    }, {
        name: "Packed Ice",
        texture_image: "packed_ice.png",
        game_id: "minecraft:packed_ice",
        game_id_13: "minecraft:packed_ice",
        block_id: 174,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 133,
        red: 165,
        green: 195,
        blue: 245,
        h: 218,
        s: 80,
        l: 80
    }, {
        name: "Red Sandstone",
        texture_image: "red_sandstone_normal.png",
        game_id: "minecraft:red_sandstone",
        game_id_13: "minecraft:red_sandstone",
        block_id: 179,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 134,
        red: 166,
        green: 85,
        blue: 30,
        h: 24,
        s: 69,
        l: 38
    }, {
        name: "Chiseled Red Sandstone",
        texture_image: "red_sandstone_carved.png",
        game_id: "minecraft:red_sandstone 1",
        game_id_13: "minecraft:chiseled_red_sandstone",
        block_id: 179,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 135,
        red: 162,
        green: 83,
        blue: 28,
        h: 25,
        s: 71,
        l: 37
    }, {
        name: "Smooth Red Sandstone",
        texture_image: "red_sandstone_smooth.png",
        game_id: "minecraft:red_sandstone 2",
        game_id_13: "minecraft:cut_red_sandstone",
        block_id: 179,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 9,
        id: 136,
        red: 168,
        green: 86,
        blue: 31,
        h: 24,
        s: 69,
        l: 39
    }, {
        name: "Purpur Block",
        texture_image: "purpur_block.png",
        game_id: "minecraft:purpur_block",
        game_id_13: "minecraft:purpur_block",
        block_id: 201,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 137,
        red: 166,
        green: 122,
        blue: 166,
        h: 300,
        s: 20,
        l: 56
    }, {
        name: "Purpur Pillar",
        texture_image: "purpur_pillar.png",
        game_id: "minecraft:purpur_pillar",
        game_id_13: "minecraft:purpur_pillar",
        block_id: 202,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 138,
        red: 170,
        green: 126,
        blue: 170,
        h: 300,
        s: 21,
        l: 58
    }, {
        name: "End Stone Bricks",
        texture_image: "end_bricks.png",
        game_id: "minecraft:end_bricks",
        game_id_13: "minecraft:end_stone_bricks",
        block_id: 206,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !1,
        version: 9,
        id: 139,
        red: 226,
        green: 231,
        blue: 171,
        h: 65,
        s: 56,
        l: 79
    }, {
        name: "Magma Block",
        texture_image: "magma.png",
        game_id: "minecraft:magma",
        game_id_13: "minecraft:magma_block",
        block_id: 213,
        data_id: 0,
        luminance: !0,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 10,
        id: 140,
        red: 135,
        green: 65,
        blue: 25,
        h: 22,
        s: 69,
        l: 31
    }, {
        name: "Nether Wart Block",
        texture_image: "nether_wart_block.png",
        game_id: "minecraft:nether_wart_block",
        game_id_13: "minecraft:nether_wart_block",
        block_id: 214,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 10,
        id: 141,
        red: 117,
        green: 6,
        blue: 7,
        h: 359,
        s: 90,
        l: 24
    }, {
        name: "Red Nether Brick",
        texture_image: "red_nether_brick.png",
        game_id: "minecraft:red_nether_brick",
        game_id_13: "minecraft:red_nether_bricks",
        block_id: 215,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 10,
        id: 142,
        red: 68,
        green: 4,
        blue: 7,
        h: 357,
        s: 89,
        l: 14
    }, {
        name: "Bone Block",
        texture_image: "bone_block_side.png",
        game_id: "minecraft:bone_block",
        game_id_13: "minecraft:bone_block",
        block_id: 216,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 10,
        id: 143,
        red: 225,
        green: 221,
        blue: 201,
        h: 50,
        s: 29,
        l: 84
    }, {
        name: "White Glazed Terracotta",
        texture_image: "glazed_terracotta_white.png",
        game_id: "minecraft:white_glazed_terracotta",
        game_id_13: "minecraft:white_glazed_terracotta",
        block_id: 235,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 144,
        red: 189,
        green: 212,
        blue: 203,
        h: 157,
        s: 21,
        l: 79
    }, {
        name: "Orange Glazed Terracotta",
        texture_image: "glazed_terracotta_orange.png",
        game_id: "minecraft:orange_glazed_terracotta",
        game_id_13: "minecraft:orange_glazed_terracotta",
        block_id: 236,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 145,
        red: 155,
        green: 147,
        blue: 92,
        h: 52,
        s: 26,
        l: 48
    }, {
        name: "Magenta Glazed Terracotta",
        texture_image: "glazed_terracotta_magenta.png",
        game_id: "minecraft:magenta_glazed_terracotta",
        game_id_13: "minecraft:magenta_glazed_terracotta",
        block_id: 237,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 146,
        red: 208,
        green: 100,
        blue: 192,
        h: 309,
        s: 53,
        l: 60
    }, {
        name: "Light Blue Glazed Terracotta",
        texture_image: "glazed_terracotta_light_blue.png",
        game_id: "minecraft:light_blue_glazed_terracotta",
        game_id_13: "minecraft:light_blue_glazed_terracotta",
        block_id: 238,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 147,
        red: 95,
        green: 165,
        blue: 209,
        h: 203,
        s: 55,
        l: 60
    }, {
        name: "Yellow Glazed Terracotta",
        texture_image: "glazed_terracotta_yellow.png",
        game_id: "minecraft:yellow_glazed_terracotta",
        game_id_13: "minecraft:yellow_glazed_terracotta",
        block_id: 239,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 148,
        red: 234,
        green: 192,
        blue: 89,
        h: 43,
        s: 78,
        l: 63
    }, {
        name: "Lime Glazed Terracotta",
        texture_image: "glazed_terracotta_lime.png",
        game_id: "minecraft:lime_glazed_terracotta",
        game_id_13: "minecraft:lime_glazed_terracotta",
        block_id: 240,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 149,
        red: 163,
        green: 198,
        blue: 55,
        h: 75,
        s: 57,
        l: 50
    }, {
        name: "Pink Glazed Terracotta",
        texture_image: "glazed_terracotta_pink.png",
        game_id: "minecraft:pink_glazed_terracotta",
        game_id_13: "minecraft:pink_glazed_terracotta",
        block_id: 241,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 150,
        red: 235,
        green: 155,
        blue: 182,
        h: 340,
        s: 67,
        l: 76
    }, {
        name: "Gray Glazed Terracotta",
        texture_image: "glazed_terracotta_gray.png",
        game_id: "minecraft:gray_glazed_terracotta",
        game_id_13: "minecraft:gray_glazed_terracotta",
        block_id: 242,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 151,
        red: 83,
        green: 90,
        blue: 94,
        h: 202,
        s: 6,
        l: 35
    }, {
        name: "Light Gray Glazed Terracotta",
        texture_image: "glazed_terracotta_silver.png",
        game_id: "minecraft:silver_glazed_terracotta",
        game_id_13: "minecraft:light_gray_glazed_terracotta",
        block_id: 243,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 152,
        red: 144,
        green: 166,
        blue: 168,
        h: 185,
        s: 12,
        l: 61
    }, {
        name: "Cyan Glazed Terracotta",
        texture_image: "glazed_terracotta_cyan.png",
        game_id: "minecraft:cyan_glazed_terracotta",
        game_id_13: "minecraft:cyan_glazed_terracotta",
        block_id: 244,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 153,
        red: 52,
        green: 119,
        blue: 125,
        h: 185,
        s: 41,
        l: 35
    }, {
        name: "Purple Glazed Terracotta",
        texture_image: "glazed_terracotta_purple.png",
        game_id: "minecraft:purple_glazed_terracotta",
        game_id_13: "minecraft:purple_glazed_terracotta",
        block_id: 245,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 154,
        red: 110,
        green: 48,
        blue: 152,
        h: 276,
        s: 52,
        l: 39
    }, {
        name: "Blue Glazed Terracotta",
        texture_image: "glazed_terracotta_blue.png",
        game_id: "minecraft:blue_glazed_terracotta",
        game_id_13: "minecraft:blue_glazed_terracotta",
        block_id: 246,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 155,
        red: 47,
        green: 65,
        blue: 139,
        h: 228,
        s: 49,
        l: 36
    }, {
        name: "Brown Glazed Terracotta",
        texture_image: "glazed_terracotta_brown.png",
        game_id: "minecraft:brown_glazed_terracotta",
        game_id_13: "minecraft:brown_glazed_terracotta",
        block_id: 247,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 156,
        red: 120,
        green: 106,
        blue: 86,
        h: 35,
        s: 17,
        l: 40
    }, {
        name: "Green Glazed Terracotta",
        texture_image: "glazed_terracotta_green.png",
        game_id: "minecraft:green_glazed_terracotta",
        game_id_13: "minecraft:green_glazed_terracotta",
        block_id: 248,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 157,
        red: 117,
        green: 142,
        blue: 67,
        h: 80,
        s: 36,
        l: 41
    }, {
        name: "Red Glazed Terracotta",
        texture_image: "glazed_terracotta_red.png",
        game_id: "minecraft:red_glazed_terracotta",
        game_id_13: "minecraft:red_glazed_terracotta",
        block_id: 249,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 158,
        red: 182,
        green: 60,
        blue: 53,
        h: 3,
        s: 55,
        l: 46
    }, {
        name: "Black Glazed Terracotta",
        texture_image: "glazed_terracotta_black.png",
        game_id: "minecraft:black_glazed_terracotta",
        game_id_13: "minecraft:black_glazed_terracotta",
        block_id: 250,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 159,
        red: 68,
        green: 30,
        blue: 32,
        h: 357,
        s: 39,
        l: 19
    }, {
        name: "White Concrete",
        texture_image: "concrete_white.png",
        game_id: "minecraft:concrete",
        game_id_13: "minecraft:white_concrete",
        block_id: 251,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 160,
        red: 207,
        green: 213,
        blue: 214,
        h: 189,
        s: 8,
        l: 83
    }, {
        name: "Orange Concrete",
        texture_image: "concrete_orange.png",
        game_id: "minecraft:concrete 1",
        game_id_13: "minecraft:orange_concrete",
        block_id: 251,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 161,
        red: 224,
        green: 97,
        blue: 1,
        h: 26,
        s: 99,
        l: 44
    }, {
        name: "Magenta Concrete",
        texture_image: "concrete_magenta.png",
        game_id: "minecraft:concrete 2",
        game_id_13: "minecraft:magenta_concrete",
        block_id: 251,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 162,
        red: 169,
        green: 48,
        blue: 159,
        h: 305,
        s: 56,
        l: 43
    }, {
        name: "Light Blue Concrete",
        texture_image: "concrete_light_blue.png",
        game_id: "minecraft:concrete 3",
        game_id_13: "minecraft:light_blue_concrete",
        block_id: 251,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 163,
        red: 36,
        green: 137,
        blue: 199,
        h: 203,
        s: 69,
        l: 46
    }, {
        name: "Yellow Concrete",
        texture_image: "concrete_yellow.png",
        game_id: "minecraft:concrete 4",
        game_id_13: "minecraft:yellow_concrete",
        block_id: 251,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 164,
        red: 241,
        green: 175,
        blue: 21,
        h: 42,
        s: 89,
        l: 51
    }, {
        name: "Lime Concrete",
        texture_image: "concrete_lime.png",
        game_id: "minecraft:concrete 5",
        game_id_13: "minecraft:lime_concrete",
        block_id: 251,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 165,
        red: 94,
        green: 169,
        blue: 25,
        h: 91,
        s: 74,
        l: 38
    }, {
        name: "Pink Concrete",
        texture_image: "concrete_pink.png",
        game_id: "minecraft:concrete 6",
        game_id_13: "minecraft:pink_concrete",
        block_id: 251,
        data_id: 6,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 166,
        red: 214,
        green: 101,
        blue: 143,
        h: 338,
        s: 58,
        l: 62
    }, {
        name: "Gray Concrete",
        texture_image: "concrete_gray.png",
        game_id: "minecraft:concrete 7",
        game_id_13: "minecraft:gray_concrete",
        block_id: 251,
        data_id: 7,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 167,
        red: 55,
        green: 58,
        blue: 62,
        h: 214,
        s: 6,
        l: 23
    }, {
        name: "Light Gray Concrete",
        texture_image: "concrete_silver.png",
        game_id: "minecraft:concrete 8",
        game_id_13: "minecraft:light_gray_concrete",
        block_id: 251,
        data_id: 8,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 168,
        red: 125,
        green: 125,
        blue: 115,
        h: 60,
        s: 4,
        l: 47
    }, {
        name: "Cyan Concrete",
        texture_image: "concrete_cyan.png",
        game_id: "minecraft:concrete 9",
        game_id_13: "minecraft:cyan_concrete",
        block_id: 251,
        data_id: 9,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 169,
        red: 21,
        green: 119,
        blue: 136,
        h: 189,
        s: 73,
        l: 31
    }, {
        name: "Purple Concrete",
        texture_image: "concrete_purple.png",
        game_id: "minecraft:concrete 10",
        game_id_13: "minecraft:purple_concrete",
        block_id: 251,
        data_id: 10,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 170,
        red: 100,
        green: 32,
        blue: 156,
        h: 273,
        s: 66,
        l: 37
    }, {
        name: "Blue Concrete",
        texture_image: "concrete_blue.png",
        game_id: "minecraft:concrete 11",
        game_id_13: "minecraft:blue_concrete",
        block_id: 251,
        data_id: 11,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 171,
        red: 45,
        green: 47,
        blue: 143,
        h: 239,
        s: 52,
        l: 37
    }, {
        name: "Brown Concrete",
        texture_image: "concrete_brown.png",
        game_id: "minecraft:concrete 12",
        game_id_13: "minecraft:brown_concrete",
        block_id: 251,
        data_id: 12,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 172,
        red: 96,
        green: 60,
        blue: 32,
        h: 26,
        s: 50,
        l: 25
    }, {
        name: "Green Concrete",
        texture_image: "concrete_green.png",
        game_id: "minecraft:concrete 13",
        game_id_13: "minecraft:green_concrete",
        block_id: 251,
        data_id: 13,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 173,
        red: 73,
        green: 91,
        blue: 36,
        h: 80,
        s: 43,
        l: 25
    }, {
        name: "Red Concrete",
        texture_image: "concrete_red.png",
        game_id: "minecraft:concrete 14",
        game_id_13: "minecraft:red_concrete",
        block_id: 251,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 174,
        red: 142,
        green: 33,
        blue: 33,
        h: 0,
        s: 62,
        l: 34
    }, {
        name: "Black Concrete",
        texture_image: "concrete_black.png",
        game_id: "minecraft:concrete 15",
        game_id_13: "minecraft:black_concrete",
        block_id: 251,
        data_id: 15,
        luminance: !1,
        transparency: !1,
        falling: !1,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 175,
        red: 8,
        green: 10,
        blue: 15,
        h: 223,
        s: 30,
        l: 5
    }, {
        name: "White Concrete Powder",
        texture_image: "concrete_powder_white.png",
        game_id: "minecraft:concrete_powder",
        game_id_13: "minecraft:white_concrete_powder",
        block_id: 252,
        data_id: 0,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 176,
        red: 226,
        green: 227,
        blue: 228,
        h: 210,
        s: 4,
        l: 89
    }, {
        name: "Orange Concrete Powder",
        texture_image: "concrete_powder_orange.png",
        game_id: "minecraft:concrete_powder 1",
        game_id_13: "minecraft:orange_concrete_powder",
        block_id: 252,
        data_id: 1,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 177,
        red: 227,
        green: 132,
        blue: 32,
        h: 31,
        s: 78,
        l: 51
    }, {
        name: "Magenta Concrete Powder",
        texture_image: "concrete_powder_magenta.png",
        game_id: "minecraft:concrete_powder 2",
        game_id_13: "minecraft:magenta_concrete_powder",
        block_id: 252,
        data_id: 2,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 178,
        red: 193,
        green: 84,
        blue: 185,
        h: 304,
        s: 47,
        l: 54
    }, {
        name: "Light Blue Concrete Powder",
        texture_image: "concrete_powder_light_blue.png",
        game_id: "minecraft:concrete_powder 3",
        game_id_13: "minecraft:light_blue_concrete_powder",
        block_id: 252,
        data_id: 3,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 179,
        red: 74,
        green: 181,
        blue: 213,
        h: 194,
        s: 62,
        l: 56
    }, {
        name: "Yellow Concrete Powder",
        texture_image: "concrete_powder_yellow.png",
        game_id: "minecraft:concrete_powder 4",
        game_id_13: "minecraft:yellow_concrete_powder",
        block_id: 252,
        data_id: 4,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 180,
        red: 233,
        green: 199,
        blue: 55,
        h: 49,
        s: 80,
        l: 56
    }, {
        name: "Lime Concrete Powder",
        texture_image: "concrete_powder_lime.png",
        game_id: "minecraft:concrete_powder 5",
        game_id_13: "minecraft:lime_concrete_powder",
        block_id: 252,
        data_id: 5,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 181,
        red: 125,
        green: 189,
        blue: 42,
        h: 86,
        s: 64,
        l: 45
    }, {
        name: "Pink Concrete Powder",
        texture_image: "concrete_powder_pink.png",
        game_id: "minecraft:concrete_powder 6",
        game_id_13: "minecraft:pink_concrete_powder",
        block_id: 252,
        data_id: 6,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 182,
        red: 229,
        green: 153,
        blue: 181,
        h: 338,
        s: 59,
        l: 75
    }, {
        name: "Gray Concrete Powder",
        texture_image: "concrete_powder_gray.png",
        game_id: "minecraft:concrete_powder 7",
        game_id_13: "minecraft:gray_concrete_powder",
        block_id: 252,
        data_id: 7,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 183,
        red: 77,
        green: 81,
        blue: 85,
        h: 210,
        s: 5,
        l: 32
    }, {
        name: "Light Gray Concrete Powder",
        texture_image: "concrete_powder_silver.png",
        game_id: "minecraft:concrete_powder 8",
        game_id_13: "minecraft:light_gray_concrete_powder",
        block_id: 252,
        data_id: 8,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 184,
        red: 155,
        green: 155,
        blue: 148,
        h: 60,
        s: 3,
        l: 59
    }, {
        name: "Cyan Concrete Powder",
        texture_image: "concrete_powder_cyan.png",
        game_id: "minecraft:concrete_powder 9",
        game_id_13: "minecraft:cyan_concrete_powder",
        block_id: 252,
        data_id: 9,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 185,
        red: 37,
        green: 148,
        blue: 157,
        h: 185,
        s: 62,
        l: 38
    }, {
        name: "Purple Concrete Powder",
        texture_image: "concrete_powder_purple.png",
        game_id: "minecraft:concrete_powder 10",
        game_id_13: "minecraft:purple_concrete_powder",
        block_id: 252,
        data_id: 10,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 186,
        red: 132,
        green: 56,
        blue: 178,
        h: 277,
        s: 52,
        l: 46
    }, {
        name: "Blue Concrete Powder",
        texture_image: "concrete_powder_blue.png",
        game_id: "minecraft:concrete_powder 11",
        game_id_13: "minecraft:blue_concrete_powder",
        block_id: 252,
        data_id: 11,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 187,
        red: 70,
        green: 73,
        blue: 167,
        h: 238,
        s: 41,
        l: 46
    }, {
        name: "Brown Concrete Powder",
        texture_image: "concrete_powder_brown.png",
        game_id: "minecraft:concrete_powder 12",
        game_id_13: "minecraft:brown_concrete_powder",
        block_id: 252,
        data_id: 12,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 188,
        red: 126,
        green: 85,
        blue: 54,
        h: 26,
        s: 40,
        l: 35
    }, {
        name: "Green Concrete Powder",
        texture_image: "concrete_powder_green.png",
        game_id: "minecraft:concrete_powder 13",
        game_id_13: "minecraft:green_concrete_powder",
        block_id: 252,
        data_id: 13,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 189,
        red: 97,
        green: 119,
        blue: 45,
        h: 78,
        s: 45,
        l: 32
    }, {
        name: "Red Concrete Powder",
        texture_image: "concrete_powder_red.png",
        game_id: "minecraft:concrete_powder 14",
        game_id_13: "minecraft:red_concrete_powder",
        block_id: 252,
        data_id: 14,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 190,
        red: 168,
        green: 54,
        blue: 51,
        h: 2,
        s: 53,
        l: 43
    }, {
        name: "Black Concrete Powder",
        texture_image: "concrete_powder_black.png",
        game_id: "minecraft:concrete_powder 15",
        game_id_13: "minecraft:black_concrete_powder",
        block_id: 252,
        data_id: 15,
        luminance: !1,
        transparency: !1,
        falling: !0,
        redstone: !1,
        survival: !0,
        version: 12,
        id: 191,
        red: 25,
        green: 27,
        blue: 32,
        h: 223,
        s: 12,
        l: 11
    }]
}, function(n, e, t) {
    function i(n) {
        return t(r(n))
    }

    function r(n) {
        var e = a[n];
        if (!(e + 1)) throw new Error("Cannot find module '" + n + "'.");
        return e
    }
    var a = {
        "./bedrock.png": 66,
        "./blue_ice.png": 67,
        "./bone_block_side.png": 68,
        "./bookshelf.png": 69,
        "./brain_coral_block.png": 70,
        "./brick.png": 71,
        "./bubble_coral_block.png": 72,
        "./chorus_flower.png": 73,
        "./chorus_plant.png": 74,
        "./clay.png": 75,
        "./coal_block.png": 76,
        "./coal_ore.png": 77,
        "./cobblestone.png": 78,
        "./cobblestone_mossy.png": 79,
        "./concrete_black.png": 80,
        "./concrete_blue.png": 81,
        "./concrete_brown.png": 82,
        "./concrete_cyan.png": 83,
        "./concrete_gray.png": 84,
        "./concrete_green.png": 85,
        "./concrete_light_blue.png": 86,
        "./concrete_lime.png": 87,
        "./concrete_magenta.png": 88,
        "./concrete_orange.png": 89,
        "./concrete_pink.png": 90,
        "./concrete_powder_black.png": 91,
        "./concrete_powder_blue.png": 92,
        "./concrete_powder_brown.png": 93,
        "./concrete_powder_cyan.png": 94,
        "./concrete_powder_gray.png": 95,
        "./concrete_powder_green.png": 96,
        "./concrete_powder_light_blue.png": 97,
        "./concrete_powder_lime.png": 98,
        "./concrete_powder_magenta.png": 99,
        "./concrete_powder_orange.png": 100,
        "./concrete_powder_pink.png": 101,
        "./concrete_powder_purple.png": 102,
        "./concrete_powder_red.png": 103,
        "./concrete_powder_silver.png": 104,
        "./concrete_powder_white.png": 105,
        "./concrete_powder_yellow.png": 106,
        "./concrete_purple.png": 107,
        "./concrete_red.png": 108,
        "./concrete_silver.png": 109,
        "./concrete_white.png": 110,
        "./concrete_yellow.png": 111,
        "./crafting_table_side.png": 112,
        "./dead_brain_coral_block.png": 113,
        "./dead_bubble_coral_block.png": 114,
        "./dead_fire_coral_block.png": 115,
        "./dead_horn_coral_block.png": 116,
        "./dead_tube_coral_block.png": 117,
        "./diamond_block.png": 118,
        "./diamond_ore.png": 119,
        "./dirt.png": 120,
        "./dried_kelp_side.png": 121,
        "./emerald_block.png": 122,
        "./emerald_ore.png": 123,
        "./end_bricks.png": 124,
        "./end_stone.png": 125,
        "./fire_coral_block.png": 126,
        "./glass_black.png": 127,
        "./glass_blue.png": 128,
        "./glass_brown.png": 129,
        "./glass_cyan.png": 130,
        "./glass_gray.png": 131,
        "./glass_green.png": 132,
        "./glass_light_blue.png": 133,
        "./glass_lime.png": 134,
        "./glass_magenta.png": 135,
        "./glass_orange.png": 136,
        "./glass_pink.png": 137,
        "./glass_purple.png": 138,
        "./glass_red.png": 139,
        "./glass_silver.png": 140,
        "./glass_white.png": 141,
        "./glass_yellow.png": 142,
        "./glazed_terracotta_black.png": 143,
        "./glazed_terracotta_blue.png": 144,
        "./glazed_terracotta_brown.png": 145,
        "./glazed_terracotta_cyan.png": 146,
        "./glazed_terracotta_gray.png": 147,
        "./glazed_terracotta_green.png": 148,
        "./glazed_terracotta_light_blue.png": 149,
        "./glazed_terracotta_lime.png": 150,
        "./glazed_terracotta_magenta.png": 151,
        "./glazed_terracotta_orange.png": 152,
        "./glazed_terracotta_pink.png": 153,
        "./glazed_terracotta_purple.png": 154,
        "./glazed_terracotta_red.png": 155,
        "./glazed_terracotta_silver.png": 156,
        "./glazed_terracotta_white.png": 157,
        "./glazed_terracotta_yellow.png": 158,
        "./glowstone.png": 159,
        "./gold_block.png": 160,
        "./gold_ore.png": 161,
        "./grass_side.png": 162,
        "./gravel.png": 163,
        "./hardened_clay.png": 164,
        "./hardened_clay_stained_black.png": 165,
        "./hardened_clay_stained_blue.png": 166,
        "./hardened_clay_stained_brown.png": 167,
        "./hardened_clay_stained_cyan.png": 168,
        "./hardened_clay_stained_gray.png": 169,
        "./hardened_clay_stained_green.png": 170,
        "./hardened_clay_stained_light_blue.png": 171,
        "./hardened_clay_stained_lime.png": 172,
        "./hardened_clay_stained_magenta.png": 173,
        "./hardened_clay_stained_orange.png": 174,
        "./hardened_clay_stained_pink.png": 175,
        "./hardened_clay_stained_purple.png": 176,
        "./hardened_clay_stained_red.png": 177,
        "./hardened_clay_stained_silver.png": 178,
        "./hardened_clay_stained_white.png": 179,
        "./hardened_clay_stained_yellow.png": 180,
        "./hay_block_side.png": 181,
        "./horn_coral_block.png": 182,
        "./ice.png": 183,
        "./iron_block.png": 184,
        "./iron_ore.png": 185,
        "./lapis_block.png": 186,
        "./lapis_ore.png": 187,
        "./leaves.png": 188,
        "./log_acacia.png": 189,
        "./log_acacia_top.png": 190,
        "./log_big_oak.png": 191,
        "./log_big_oak_top.png": 192,
        "./log_birch.png": 193,
        "./log_birch_top.png": 194,
        "./log_jungle.png": 195,
        "./log_jungle_top.png": 196,
        "./log_oak.png": 197,
        "./log_oak_top.png": 198,
        "./log_spruce.png": 199,
        "./log_spruce_top.png": 200,
        "./magma.png": 201,
        "./melon_side.png": 202,
        "./mushroom_block_skin_brown.png": 203,
        "./mushroom_block_skin_red.png": 204,
        "./mycelium_side.png": 205,
        "./nether_brick.png": 206,
        "./nether_wart_block.png": 207,
        "./netherrack.png": 208,
        "./no_block.png": 26,
        "./noteblock.png": 209,
        "./obsidian.png": 210,
        "./packed_ice.png": 211,
        "./planks_acacia.png": 212,
        "./planks_big_oak.png": 213,
        "./planks_birch.png": 214,
        "./planks_jungle.png": 215,
        "./planks_oak.png": 216,
        "./planks_spruce.png": 217,
        "./prismarine.png": 218,
        "./prismarine_bricks.png": 219,
        "./prismarine_dark.png": 220,
        "./purpur_block.png": 221,
        "./purpur_pillar.png": 222,
        "./quartz_block_chiseled.png": 223,
        "./quartz_block_lines.png": 224,
        "./quartz_block_side.png": 225,
        "./quartz_ore.png": 226,
        "./red_nether_brick.png": 227,
        "./red_sand.png": 228,
        "./red_sandstone_carved.png": 229,
        "./red_sandstone_normal.png": 230,
        "./red_sandstone_smooth.png": 231,
        "./redstone_block.png": 232,
        "./redstone_lamp_off.png": 233,
        "./redstone_lamp_on.png": 234,
        "./redstone_ore.png": 235,
        "./sand.png": 236,
        "./sandstone_carved.png": 237,
        "./sandstone_normal.png": 238,
        "./sandstone_smooth.png": 239,
        "./sea_lantern.png": 240,
        "./slime.png": 241,
        "./snow.png": 242,
        "./soul_sand.png": 243,
        "./sponge.png": 244,
        "./stone.png": 245,
        "./stone_andesite.png": 246,
        "./stone_andesite_smooth.png": 247,
        "./stone_diorite.png": 248,
        "./stone_diorite_smooth.png": 249,
        "./stone_granite.png": 250,
        "./stone_granite_smooth.png": 251,
        "./stonebrick.png": 252,
        "./stonebrick_carved.png": 253,
        "./stonebrick_cracked.png": 254,
        "./stonebrick_mossy.png": 255,
        "./stripped_acacia_log.png": 256,
        "./stripped_acacia_log_top.png": 257,
        "./stripped_birch_log.png": 258,
        "./stripped_birch_log_top.png": 259,
        "./stripped_dark_oak_log.png": 260,
        "./stripped_dark_oak_log_top.png": 261,
        "./stripped_jungle_log.png": 262,
        "./stripped_jungle_log_top.png": 263,
        "./stripped_oak_log.png": 264,
        "./stripped_oak_log_top.png": 265,
        "./stripped_spruce_log.png": 266,
        "./stripped_spruce_log_top.png": 267,
        "./tnt_side.png": 268,
        "./transparent.png": 12,
        "./tube_coral_block.png": 269,
        "./wool_colored_black.png": 270,
        "./wool_colored_blue.png": 271,
        "./wool_colored_brown.png": 272,
        "./wool_colored_cyan.png": 273,
        "./wool_colored_gray.png": 274,
        "./wool_colored_green.png": 275,
        "./wool_colored_light_blue.png": 276,
        "./wool_colored_lime.png": 277,
        "./wool_colored_magenta.png": 278,
        "./wool_colored_orange.png": 279,
        "./wool_colored_pink.png": 280,
        "./wool_colored_purple.png": 281,
        "./wool_colored_red.png": 282,
        "./wool_colored_silver.png": 283,
        "./wool_colored_white.png": 284,
        "./wool_colored_yellow.png": 285
    };
    i.keys = function() {
        return Object.keys(a)
    }, i.resolve = r, n.exports = i, i.id = 65
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9ebbfa6e4faf8d79f41185260b02a181.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/abd0620f8bcefc0079e18a7603d85d21.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/61347100e44d7182bdf3aed32960cb13.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d4e4a71274acdb325c6d0e4c7c5eac98.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/70dc34504addb67e5359bce5d7366b33.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/34717d4262fc9f21b2c1ed6d8b3b25f2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5ad79567c7e86aba76677a672254f80a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/054c46ec211ad5804783561216d6e901.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9984251035eff966971f701b410d6a18.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c8ba09daf8327003a002acebde6f6d80.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/b95c68ff19c5d55df70a09ae10a8359a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a49699e6700b2cee3c05eee81fa8c2ac.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3ca8f631ba1471623c0077e1aa2db3f0.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/41a2db40aa6962e79fafb16b524c923e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f1e09e711391eacb8131c73873a25fa7.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9df2b7553aafe35919d9177d89fbdbf4.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/79ac51197882ef6f0b2ff45b2a14883a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1f2e4f41b933b3937d33789ef5bdda45.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/b54ce460a855a691caadfc9d3831773d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9e5a7b6366c4e2d40f976361825e2e74.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5009281133f5b454f504de636f2147d7.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/b731426fcbc0d2fdbc1dc9c0addbe9a1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/0334284e9339173549f678163c06a23e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5c10976c00fb4a5ee2de59b2fe69de18.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/75b02d57d9a1e6737cf1c63baf1674ea.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5864a999232f4c5370d0034af48b77e2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cdc7e96a2b35ef5bc9d15b7ab3fa0ba8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/09893c81c036c5df1162e10ca2522d09.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5fc63d93d1878451b59e92bde75e65e2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/544b0cf7dcbcce12370252730048366b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/73d5da4eeff57c492e36009657006f75.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/4f338894e5741f5d3430bf819727b92a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/8d9391bcf496235200ea11bef30d838b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/aaf62286b469aa0ec3655a587cb73424.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c20249a8c17d811d38d91d6714ac28a7.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/7fc225aa621dda51ff054c023b78045e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/736391ae7fa26b739224a45193a17605.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9316376e9048d77eb0403c6238992ccf.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/560d293d7520dbee9560c430df272ca6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f389e2f2af9d8e0f307710385e2cdd72.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f14b099112e9d2fae646e644ac596fe5.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/879fd87ce2a055eef099c4a536005a1f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d14e186fc5d6c81f2f9530f18230afb8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/21016e396a509f92b452c1df7881ac88.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cb2638e8c9795f0b6fd5a858a8e58100.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e74e8d407f1ff237520e622e7ef4724c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c29383412109393af4baeea4ad1a33e0.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/50c640a8bf8978304f09496bd76c81ed.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e5353ea6db4b0c40479d2f4d8e1d467f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cffdac6eec786d4146232a404f78871f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/49daa878d92558d65ca946fdfdcb50ee.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f4bc0d28ab5221012d768be972a8fbea.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/840a41273c5f5de3fba9427a0bd7e928.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/beb457dba62df494fc4054a5057eba80.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f73260a4acf91df3ec2c28532af39251.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/50a734f94db84db7927bcc627a0a142c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1c95ec723da9da1680da221b99696258.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/856e1aea0e7c1b08884ecc63b68797f3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/71f7b799b638422f44f5ef60608d32ff.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/39d0a2dfba056aa230c68a3251e2092a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/53ee0d951392a78ece2364a51d26d4d3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/77f842ae3d615afda0f26d3cf0fac694.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f2afbdae50e290def88858b0fd9ca99c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/ad29b2961fc05beb1e0bc25657acf186.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/18e663a5841741c0777570843cb2b2fe.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/320406ec869cda211d27a4c0d33b0197.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3dc083faaddd7d86d94738470b304ae9.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1c67ba01aa63c22f803d703e79817099.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6bd01f52e7bc3ad4990b107da310e292.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/0073847097a2d419992e2cf7b03ec17f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/b7ade50346bfdeb4f56dda3f1841ff59.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/96055f8a0ab137e17010f61a6a1f43c3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5698551b11b78441793c04034ef6e385.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/8e773e56499f219d131edfa627331b20.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/514c86e2ccd08d993ae8b2059d308bed.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fd3d4dc6b52f06295f17d93b557949e6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cf50139bb8c265ce694089aa71e43016.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/92f90092632cd0f19d84de375841c9b9.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e35fa9c6ccec6ad5399fd34a3d6668f6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a12c1494405c9f3a1c3505aad9e85454.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3347a55095d2f0e14109205952d5c8be.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/333aa434ef600a33bfb861c9894b4cfe.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/80f9edd6c61d5ea3d06e84ec2a2bf791.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6c5c75029f85829f99c89380c0144d6c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/efef3f80b58d254637c5eb2750cafae9.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/8e2df4ec0e69c2a8231cf36345ed5a38.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fe7be00a77c1025a9a1da6b8b120ce3d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/69ded9599037f4ae82c3299154cdbc8a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a1599dca0e7dad46604e4804e0f1cbde.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/0e150d4013a02fe5a77fe1772f3f9c25.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f2c03fc95366db62eb4fa525376365fc.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/97a50bf54d1fd02e42a5fe9a7cef5d1d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/38b06cf85ccbfd995bc10bb4f37f9504.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/eb0ecc34c7c1596ce56aea61e8a9079f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/14f4b5050f913f94faeea2bbc1f4ebb1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a57be7125b2030dbc219e38eaecf0fca.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/794fef6b08ffcd2b6e1b2a70f5cc56fb.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cca22ea5b7363ea10aa46f02e999e208.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d1a47a4e709503d7185dc0d499bf7183.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/74ba815863e5384293dbdd5a366b1f4c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/39e149adb4bac6a0567db8ee410c30e8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5e0ebfb6858952aab4a117a4e1a4fa70.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9cbbdcae56e6c9b05f4a8ebddd50d0f3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/bdbf9c6b67d1ec67b634af0428881cb1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/557d613a819374642491ba77c85af277.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d7a94cf6889632c7b442c2d15e4ce6be.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d5877fd1072899036073401e9c9cd02d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/63317a9106324719a3ecc565ad644e37.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5d1a40e8e0b93202e2fcc838c3bd0a0d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/7f6f3aacca6173c5808a12212cc979b6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/85711e36c4c6d24ef2d1e088be5df69f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1b71d8e796f6363e1db1f69e0dac02d4.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/67de5e6e4c11233b8a6033e878b77742.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f8514a227f649bd5de4713abd8523995.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/deaea4d292d88bc713e541faba4f42ba.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6ddf711e84906862a153e3099fe13050.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/0eca2b2c086d58134c86177b87331d8b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/71ff14b2a583e0526307c23c7b1b57cf.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/062737e2ff2591fc4acd4ab19d3c0f7b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/441765576007e849cdd41337e0a5f0de.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/11e6462737c7fd43e3d375d448d5f67c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/28bd18b9191049287bfad2e2be7c2f02.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/7458e5ed972f311e61b512f4aac40b8d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/4558aebe3f915826831fb743636a1ad8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c758e5930a292cd72e7ba598fa224fa4.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e4c547ae1a7bfd8dce74f7bc6cb769c3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/2bbb90541ea61383b6d13c94be5e781c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fed188395310623af8cbb5ad7f406c7c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d974dc95a6866fda65399f59e96bc669.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/dc1867ec77cdc4de4f2ab93ffc17188f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/109a1198ccdf16f02f28ec5fd6cae0c8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1a89eda24db7d3f343e7da6d8d17fb84.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9869d5582834fcb3233fcae57f2f5b07.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1bd07e37b9b075d013a5bcad0305e7ec.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fc5e518610babbaf0ec64b7d5a36540c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3d8a9fdc1b1af5b086c2245cac3f98b2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/7573279e1bbebbec797c45e97d41fee8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/83f366550cc2a64c89929771ab50fef7.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5303200ce426512238c615c2f8c21f3d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c320aeef516a5b6534c7a374302cb656.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cb29ddf3cb77fabb7f987550cb30b44d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/c8ed53e6ab1bbcf69e0fbbb1d06b4ab3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f21a9e515d6a95a12292815b0f313e02.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/bf9c7ec218618b2ff4c85d1f42dcdf3f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/2ac89059ecc00c4402e92e303a29ba2e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a7334b9c47aa75056f3363370a72a300.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f08220cde06f3954b9a118f5193b4f17.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d1dd17e84924b854bbedf8ccfa1cdb85.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/77a0fcb2792ae52bafb5d86c24734b0b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/de8941520a060ad0929bbdd9e80c4439.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/12ff120790477f0fdb4909b81f99d1e4.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3d29f22f06fff73b417191b9f5de2c8f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/9d59bbd0ab61f61f2457d90e7ced81ef.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f12ff4ab62eb9ffcfbd4dcc2c98de395.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e4147c10cf0d873c4dff4772a277f451.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/7ab5e1e61905181d881372d61e8d4eeb.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/aa9a289345124636beaafabc225cd937.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d0792723ec134ebe140b78df379d6c24.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/2c5df81a50b1ad66a8094870e7e07693.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6384d5cc60945f04049ac73a7714a463.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/ba589d4377f2710fe8dba58bff1aaaff.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6b044e47f62e1d731adab65abc8eeecb.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/07ac069c4cc6a13a2361f020c6dc36f6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/556a6543a52a1f537ec1de9007a444c2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/751702495a3dcf7ba6f12fed76ea302c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/326cd63e4489d44067622535948a458b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/22fe98529e0af7310ab70a0221b57a23.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5e502148a5d84a04f756bdc8415edbd1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/2051f56fb8a557ebe009a4ef3b8159c4.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/03a0edf1b53d57628a1c0db27fb9386c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/56898a7595c5b4d98a2ea09ce6e63e26.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/71cd6d2b4af069d5a004802cdf6b9976.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/597dfa72776d7fc30bfdf5c7208a2254.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/14e7fff03a10455290c3d0b71cef0231.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fd944f805a903f4f10fc35182e327bf6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f1aa6c318947982000938d869bd5063e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/b44020f4be02610a7246821851c39ed2.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/970c08a7a20f4232beefe6c4b97d26fa.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/85262c8f07a5af8900c942ddca2ada59.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fbc9e4f4fd2efef29ef20e1e1fad9356.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e5b560eb4e90b1b1b16bd2b8b660f964.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/0c8cbe128fa97e0fcf20dab90089e466.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/828a557a1f15622783c3d89f2cee9732.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/821a88bf6639ff2e9bccbd617f2a10bf.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/cac433945a12d38cbaefbbb8095cfd56.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/416f76d57498ae42333a17bf01d0f3ce.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a51b8d35b0868aa1dfe52b9c6e60642d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/97903383583ab104c35ba9b170b951f7.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/f661722b5500be6bf5f92c1a296fbc08.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/fd7a8add7de6df8f9d9e5fb98a3c3fa3.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/5d79da33cadf77709bf2f694f1cda4ba.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/e1a3d61d4d92e67d6edeb8dd4f3f26a8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/3ef08eeba672cc5e4027605909375e9d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d3c72d7fe5ed5c95403001b3eeb38818.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/65e72506f65f8e1be11d5b43e5a5ed62.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/dcedb65f3ad5efd3609ab0ab08f55335.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/328eb42e269a54caea8ade2c416ce3a6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/bd70f64ffba95961a32976ff045cad54.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/bd38e243e53e053817dba5e54a06d91f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a3911b008b735898e19c064ae8f26920.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1597d22efa1f715ed9883adf31ace943.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/1bf0b57f8798f378fb58d3f60a075299.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/da7d3e08250f79b054f6e7ecb645bde8.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d088a9583e51d67c092cf8227a8f713b.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/999333fd3cb557598d96a373a0e3ef6c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/6050eb3c8bb40ecc8c62275d0bd1334d.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/015946a166675a4a523c065dc38f2db1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/49e015e01d4d4675d1bfbe5d97ff4776.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/677adcbf83a5b833246243a7506b6f5c.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/8f88923f18791d5533bd024e4786f95f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/dce953fddcea59b59a03756ac5ebb7ed.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/d062ecc8535b14c9d434c63bb3950f8e.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/a37c26be8120463f091db83a78e202c5.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/10b8199f065692f28625d6c3234753e6.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/39c48596077fb9382588d1c546f277aa.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/77b5aa8b2526c930ded50ddea727d62f.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/74befb5b08cbc45b397eedd15499d3aa.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/50b9c64d03028c703f29f7d7dcf4955a.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/133a4f765148ec42056e61b842a422c1.png"
}, function(n, e, t) {
    n.exports = "https://static.0bm.com/img/art/22f62e2f1a8be426d4e77e4540a74898.png"
}, function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.output = void 0;
    var i = t(15),
        r = function(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }(i),
        a = window.URL || window.webkitURL,
        o = {
            parent: null,
            init: function(n) {
                var e = this;
                this.parent = n;
                document.querySelectorAll('*[id^="start-"]').forEach(function(n) {
                    var t = "$";
                    n.id.split("-").forEach(function(n, e) {
                        e > 1 ? t += n.charAt(0).toUpperCase() + n.slice(1) : e > 0 && (t += n)
                    }), e[t] = n
                });
                this.setEventListeners()
            },
            changeToSettingsScreen: function() {
                o.parent.settingsScreen.resetScreen(), document.querySelector("section.start-screen").classList.add("hidden"), document.querySelector("section.settings-screen").classList.remove("hidden")
            },
            changeToEditorScreen: function() {
                "schem" === o.parent.uploadedType ? (o.parent.editorScreen.$settingsOriginal.parentNode.setAttribute("disabled", ""), o.parent.editorScreen.$settingsOriginal.disabled = !0) : (o.parent.editorScreen.$settingsOriginal.parentNode.removeAttribute("disabled"), o.parent.editorScreen.$settingsOriginal.disabled = !1), document.querySelector("section.start-screen").classList.add("hidden"), document.querySelector("section.editor-screen").classList.remove("hidden"), o.parent.editorScreen.resetScreen(), o.parent.convertScreen.resetScreen()
            },
            setNameFile: function(n) {
                o.parent.uploadedImageName = n, o.parent.editorScreen.$saveInput.value = n, o.parent.convertScreen.$inputMcfunction.value = n
            },
            uploadImage: function(n) {
                var e = this;
                o.parent.uploadedType = "image", o.parent.uploadedImage.src = n, o.parent.uploadedImage.onload = function() {
                    o.parent.settingsScreen.$imgPresentation.src = n, o.parent.settingsScreen.$inputWidth.value = o.parent.uploadedImage.width, o.parent.settingsScreen.$inputHeight.value = o.parent.uploadedImage.height, o.parent.settingsScreen.aspectRatio = o.parent.uploadedImage.width / o.parent.uploadedImage.height, o.parent.settingsScreen.setImageSizesString(o.parent.uploadedImage.naturalWidth, o.parent.uploadedImage.naturalHeight), o.parent.settingsScreen.setEqualsString(), e.changeToSettingsScreen(), o.parent.settingsScreen.fillTable(), o.parent.settingsScreen.svgCroppy.init(o.parent.settingsScreen.$imgPresentation), o.parent.settingsScreen.svgCroppy.hide(), o.parent.uploadedImage.naturalWidth < 100 || o.parent.uploadedImage.naturalHeight < 100 ? (o.parent.settingsScreen.$checkCrop.disabled = !0, o.parent.settingsScreen.$checkCrop.parentNode.setAttribute("disabled", "")) : (o.parent.settingsScreen.$checkCrop.disabled = !1, o.parent.settingsScreen.$checkCrop.parentNode.removeAttribute("disabled"))
                }
            },
            uploadSchematic: function(n) {
                o.parent.showLoading();
                var e = function(n, e) {
                        o.parent.errors.triggerError("start-screen", n, 7200), o.parent.errors.triggerError("editor-screen", n, 7200), o.parent.hideLoading()
                    },
                    t = new r.default,
                    i = new FileReader;
                i.readAsArrayBuffer(n), i.onload = function(n) {
                    try {
                        t.decode(new Uint8Array(n.target.result), function(n, t) {
                            try {
                                if (n && "Z_DATA_ERROR" === n.code) return void e("There is something wrong with this .schematic file..<br>(File decompression error.)");
                                if (n) return void e("There is something wrong with this .schematic file..<br>(Unknown error.)");
                                var i = new Uint8Array(t.value.Blocks.value),
                                    r = new Uint8Array(t.value.Data.value),
                                    a = new Uint8Array(i.length),
                                    s = t.value.Height.value,
                                    l = void 0,
                                    c = void 0;
                                if (t.value.WEOffsetX && t.value.WEOffsetY && t.value.WEOffsetZ)
                                    if (1 === t.value.Width.value) l = t.value.Length.value, c = t.value.WEOffsetZ.value > 0 ? "south" : "north";
                                    else if (1 === t.value.Length.value) l = t.value.Width.value, c = t.value.WEOffsetX.value > 0 ? "east" : "west";
                                else {
                                    if (1 !== t.value.Width.value || 1 !== t.value.Length.value) return void e("There is something wrong with this .schematic file..<br>(Width or length of the schematic must equal 1.)");
                                    l = t.value.Width.value, c = "north"
                                } else if (1 === t.value.Width.value) l = t.value.Length.value, c = "north";
                                else if (1 === t.value.Length.value) l = t.value.Width.value, c = "west";
                                else {
                                    if (1 !== t.value.Width.value || 1 !== t.value.Length.value) return void e("There is something wrong with this .schematic file..<br>(Width or length of the schematic must equal 1.)");
                                    l = t.value.Width.value, c = "north"
                                }
                                for (var d = 0; d < a.length; d++) {
                                    var f = void 0;
                                    "south" === c || "east" === c ? f = (s - Math.ceil((d + 1) / l)) * l + d % l : "north" !== c && "west" !== c || (f = a.length - d - 1);
                                    var u = o.parent.findBlockByGameId(i[f], r[f]);
                                    u && (a[d] = u.id)
                                }
                                o.parent.errors.closeError("start-screen"), o.parent.errors.closeError("editor-screen"), o.parent.uploadedType = "schem", o.parent.editorScreen.$footbarRight.innerHTML = "Width: <b>" + l + " bl.</b> | Height: <b>" + s + " bl.</b>", o.changeToEditorScreen(), o.parent.mineartCanvas.init(o.parent.editorScreen.$canvas), o.parent.mineartCanvas.setImageSizes(l, s), o.parent.mineartCanvas.open(a), o.parent.editorScreen.resetScreen(), o.parent.editorScreen.setBrushSize(3), o.parent.hideLoading()
                            } catch (n) {
                                return console.error(n), void e("There is something wrong with this .schematic file..<br>(File structure error.)")
                            }
                        })
                    } catch (n) {
                        return console.error(n), void e("There is something wrong with this .schematic file..<br>(File structure error.)")
                    }
                }
            },
            setEventListeners: function() {
                var n = this;
                this.$dropzone.ondragover = function(n) {
                    n.preventDefault()
                }, this.$dropzone.ondrop = function(e) {
                    if (e.preventDefault(), e.dataTransfer.files.length > 1) return void o.parent.errors.triggerError("start-screen", "Please, choose only one file.", 5e3);
                    if (!(e.dataTransfer.files.length < 1)) {
                        var t = /(.*)\.([^.]*)/,
                            i = e.dataTransfer.files[0].name.match(t),
                            r = void 0,
                            s = void 0;
                        if (!i) return void o.parent.errors.triggerError("start-screen", "Wrong file type. Try image (jpg, png, bmp) or .schematic file.", 5e3);
                        r = e.dataTransfer.files[0].name.match(t)[2], s = e.dataTransfer.files[0].name.match(t)[1], r.match(/(jpeg|jpg|png|bmp)/i) ? (n.setNameFile(s), n.uploadImage(a.createObjectURL(e.dataTransfer.files[0]))) : r.match(/(schematic)/i) ? (n.setNameFile(s), n.uploadSchematic(e.dataTransfer.files[0])) : o.parent.errors.triggerError("start-screen", "Wrong file type. Try image (jpg, png, bmp) or .schematic file.", 5e3)
                    }
                }, this.$fileInput.onclick = function(n) {
                    n.target.value = null
                }, this.$fileInput.onchange = function(e) {
                    var t = /(.*)\.([^.]*)/,
                        i = e.target.files[0].name.match(t),
                        r = void 0,
                        s = void 0;
                    if (!i) return e.target.value = null, void o.parent.errors.triggerError("start-screen", "Wrong file type. Try image (jpg, png, bmp) or .schematic file.", 5e3);
                    r = e.target.files[0].name.match(t)[2], s = e.target.files[0].name.match(t)[1], r.match(/(jpeg|jpg|png|bmp)/i) ? (n.setNameFile(s), n.uploadImage(a.createObjectURL(e.target.files[0]))) : r.match(/(schematic)/i) ? (n.setNameFile(s), n.uploadSchematic(e.target.files[0])) : (e.target.value = null, o.parent.errors.triggerError("start-screen", "Wrong file type. Try image (jpg, png, bmp) or .schematic file.", 5e3))
                }
            }
        };
    e.output = o
}, function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.output = void 0;
    var i = t(288),
        r = function(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }(i),
        a = (window.URL || window.webkitURL, {
            svgCroppy: new r.default,
            parent: null,
            aspectRatio: null,
            ctxTemp: null,
            ignoreRatio: !1,
            init: function(n) {
                var e = this;
                this.parent = n;
                document.querySelectorAll('*[id^="settings-"]').forEach(function(n) {
                    var t = "$";
                    n.id.split("-").forEach(function(n, e) {
                        e > 1 ? t += n.charAt(0).toUpperCase() + n.slice(1) : e > 0 && (t += n)
                    }), e[t] = n
                });
                this.ctxTemp = a.parent.canvasTemp.getContext("2d"), this.setEventListeners(), a.parent.localStorage.getItem("minecraftVersion") && (this.$version.value = a.parent.localStorage.getItem("minecraftVersion"));
                var t = window.innerHeight,
                    i = document.querySelector(".img-background");
                t >= 820 ? (this.$imgPresentation.style.maxHeight = "620px", i.style.width = "620px", i.style.height = "620px") : t >= 770 ? (this.$imgPresentation.style.maxHeight = "570px", i.style.width = "570px", i.style.height = "570px") : t >= 700 ? (this.$imgPresentation.style.maxHeight = "500px", i.style.width = "500px", i.style.height = "500px") : (this.$imgPresentation.style.maxHeight = "450px", i.style.width = "450px", i.style.height = "450px")
            },
            fillTable: function() {
                var n = this,
                    e = this.$tableBlocks.querySelector("tbody");
                a.parent.blocksDefault.forEach(function(t) {
                    var i = document.createElement("tr");
                    i.classList.add("visible"), i.innerHTML = '\n                <td><input type="checkbox" data-block-id="' + t.id + '" checked></td>\n                <td><img src="' + t.src + '" class="img-pixelated"></td>\n                <td>' + t.name + "</td>\n            ", i.querySelector("input").oninput = function(e) {
                        n.setTableCounter()
                    }, i.onclick = function(n) {
                        a.parent.errors.closeError("settings-screen"), "input" !== n.target.localName && i.querySelector("input").click()
                    }, e.appendChild(i)
                }), this.setTableCounter()
            },
            filterTable: function(n) {
                var e = this,
                    t = new RegExp(n, "i");
                a.parent.blocksDefault.forEach(function(n) {
                    var i = e.$tableBlocks.querySelector("input[data-block-id='" + n.id + "']").parentNode.parentNode;
                    n.name.search(t) < 0 ? i.classList.add("hidden") : i.classList.remove("hidden")
                })
            },
            setImageSizesString: function(n, e, t) {
                this.$imgSizes.innerHTML = "Image size" + (t ? " (cropped)" : "") + ": " + n + "x" + e
            },
            setEqualsString: function() {
                var n = parseInt(this.$inputWidth.value),
                    e = parseInt(this.$inputHeight.value);
                if (n * e > 0) {
                    var t = n * e,
                        i = "",
                        r = t.toString().split("");
                    r.forEach(function(n, e) {
                        i += n, (r.length - e - 1) % 3 == 0 && r.length - e != 1 && (i += ",")
                    }), this.$equalsBlocks.innerHTML = i + " blocks"
                } else this.$equalsBlocks.innerHTML = "??? blocks"
            },
            setTableCounter: function() {
                var n = this.$tableBlocks.querySelectorAll("tr.visible").length,
                    e = this.$tableBlocks.querySelectorAll("tr.visible td input:checked").length;
                0 === e ? this.$tableCheckbox.checked = !1 : e === n ? (this.$tableCheckbox.indeterminate = !1, this.$tableCheckbox.checked = !0) : (this.$tableCheckbox.indeterminate = !0, this.$tableCheckbox.checked = !0), this.$tableCounter.innerHTML = e + "/" + n + " selected"
            },
            selectBoxGroup: function(n) {
                switch (this.$groupSurvival.classList.remove("box-selected"), this.$groupAll.classList.remove("box-selected"), this.$groupCustom.classList.remove("box-selected"), document.querySelector(".table-blocks-container").classList.add("hidden"), document.getElementById("settings-checkboxes-include").classList.remove("hidden"), n) {
                    case "survival":
                        this.$groupSurvival.classList.add("box-selected"), this.$groupSurvival.querySelector("input[type=radio]").checked = !0;
                        break;
                    case "all":
                        this.$groupAll.classList.add("box-selected"), this.$groupAll.querySelector("input[type=radio]").checked = !0;
                        break;
                    case "custom":
                        this.$groupCustom.classList.add("box-selected"), this.$groupCustom.querySelector("input[type=radio]").checked = !0, document.querySelector(".table-blocks-container").classList.remove("hidden"), document.getElementById("settings-checkboxes-include").classList.add("hidden")
                }
            },
            drawToCanvas: function() {
                this.ctxTemp.imageSmoothingEnabled = !0;
                var n = parseInt(this.$inputWidth.value),
                    e = parseInt(this.$inputHeight.value);
                if (a.parent.canvasTemp.width = n, a.parent.canvasTemp.height = e, this.$checkCrop.checked) {
                    var t = this.svgCroppy.getCropInfo();
                    a.parent.uploadedImage.naturalHeight > parseInt(document.querySelector(".img-background").style.width) && (t.height = a.parent.uploadedImage.naturalHeight / a.$imgPresentation.height * t.height, t.width = a.parent.uploadedImage.naturalWidth / a.$imgPresentation.width * t.width, t.offsetY = a.parent.uploadedImage.naturalHeight / a.$imgPresentation.height * t.offsetY, t.offsetX = a.parent.uploadedImage.naturalWidth / a.$imgPresentation.width * t.offsetX), a.parent.mineartCanvas.setOriginalImage({
                        src: a.parent.uploadedImage.src,
                        x: t.offsetX,
                        y: t.offsetY,
                        width: t.width,
                        height: t.height
                    });
                    var i = n / t.width,
                        r = e / t.height;
                    this.ctxTemp.drawImage(a.parent.uploadedImage, -t.offsetX * i, -t.offsetY * r, a.parent.uploadedImage.naturalWidth * i, a.parent.uploadedImage.naturalHeight * r)
                } else this.ctxTemp.drawImage(a.parent.uploadedImage, 0, 0, a.parent.canvasTemp.width, a.parent.canvasTemp.height), a.parent.mineartCanvas.setOriginalImage({
                    src: a.parent.uploadedImage.src,
                    x: 0,
                    y: 0,
                    width: a.parent.uploadedImage.width,
                    height: a.parent.uploadedImage.height
                })
            },
            changeToEditorScreen: function() {
                document.querySelector("section.settings-screen").classList.add("hidden"), document.querySelector("section.editor-screen").classList.remove("hidden"), "schem" === a.parent.uploadedType ? a.parent.editorScreen.$settingsOriginal.disabled = !0 : a.parent.editorScreen.$settingsOriginal.disabled = !1
            },
            resetScreen: function() {
                this.$groupAll.click(), this.$checkCrop.checked = !1, this.$checkIgnoreRatio.checked = !1, this.$ignoreHeightLimit.checked = !1, this.$inputFilter.value = "", this.ignoreRatio = !1, document.querySelector(".size-inputs i").style.opacity = 1, document.querySelectorAll("#settings-checkboxes-include input").forEach(function(n) {
                    n.checked = !1
                }), document.querySelector('#settings-checkboxes-include input[name="include-falling"]').checked = !0, this.$tableBlocks.querySelectorAll("tbody tr").forEach(function(n) {
                    n.remove()
                })
            },
            setEventListeners: function() {
                var n = this;
                this.$inputWidth.oninput = function(e) {
                    e.target.value = e.target.value.replace(/\D/gi, ""), n.ignoreRatio || (n.$inputHeight.value = Math.round(n.$inputWidth.value / n.aspectRatio)), n.setEqualsString()
                }, this.$inputHeight.oninput = function(e) {
                    e.target.value = e.target.value.replace(/\D/gi, ""), n.ignoreRatio || (n.$inputWidth.value = Math.round(n.$inputHeight.value * n.aspectRatio)), n.setEqualsString()
                }, this.$checkCrop.onchange = function(e) {
                    if (e.target.checked) {
                        n.svgCroppy.unhide();
                        var t = n.svgCroppy.getCropInfo();
                        a.parent.uploadedImage.naturalHeight > 500 && (t.width = Math.round(a.parent.uploadedImage.naturalWidth / a.$imgPresentation.width * t.width), t.height = Math.round(a.parent.uploadedImage.naturalHeight / a.$imgPresentation.height * t.height)), n.setImageSizesString(t.width, t.height, !0), n.aspectRatio = t.width / t.height
                    } else n.svgCroppy.hide(), n.setImageSizesString(a.parent.uploadedImage.naturalWidth, a.parent.uploadedImage.naturalHeight), n.aspectRatio = a.parent.uploadedImage.width / a.parent.uploadedImage.height, n.$inputWidth.value = a.parent.uploadedImage.width, n.$inputHeight.value = a.parent.uploadedImage.height;
                    n.setEqualsString()
                }, this.$checkIgnoreRatio.onchange = function(e) {
                    n.ignoreRatio = e.target.checked;
                    var t = document.querySelector(".size-inputs i");
                    !1 === e.target.checked ? (n.$inputHeight.value = Math.round(n.$inputWidth.value / n.aspectRatio), n.$inputWidth.value = Math.round(n.$inputHeight.value * n.aspectRatio), n.setEqualsString(), t.style.opacity = 1) : t.style.opacity = .3
                }, this.$groupSurvival.onclick = function(e) {
                    n.selectBoxGroup("survival")
                }, this.$groupAll.onclick = function(e) {
                    n.selectBoxGroup("all")
                }, this.$groupCustom.onclick = function(e) {
                    n.selectBoxGroup("custom")
                }, this.$inputFilter.oninput = function(e) {
                    n.filterTable(n.$inputFilter.value)
                }, this.$tableCheckbox.oninput = function(e) {
                    var t = n.$tableBlocks.querySelectorAll("tbody input");
                    e.target.checked ? (t.forEach(function(n) {
                        n.checked = !0
                    }), n.tableCounter = n.parent.blocksDefault.length) : (t.forEach(function(n) {
                        n.checked = !1
                    }), n.tableCounter = 0), n.setTableCounter()
                }, this.$version.onchange = function(e) {
                    a.parent.blocksDefault.forEach(function(t) {
                        var i = n.$tableBlocks.querySelector("input[data-block-id='" + t.id + "']").parentNode.parentNode;
                        t.version > parseInt(e.target.value) ? i.classList.remove("visible") : i.classList.add("visible")
                    }), n.setTableCounter()
                }, this.$imgPresentation.addEventListener("croppytransformed", function(e) {
                    var t = n.svgCroppy.getCropInfo();
                    a.parent.uploadedImage.naturalWidth > 500 && (t.width = Math.round(a.parent.uploadedImage.naturalWidth / a.$imgPresentation.width * t.width), t.height = Math.round(a.parent.uploadedImage.naturalHeight / a.$imgPresentation.height * t.height)), n.setImageSizesString(t.width, t.height, !0), n.aspectRatio = t.width / t.height, n.ignoreRatio || (n.$inputHeight.value = Math.round(n.$inputWidth.value / n.aspectRatio), n.$inputWidth.value = Math.round(n.$inputHeight.value * n.aspectRatio)), n.setEqualsString()
                }), this.$submit.onclick = function(e) {
                    var t = [],
                        i = document.querySelector("input[name=block-groups]:checked").value;
                    if (n.$inputHeight.value > 256 && !1 === n.$ignoreHeightLimit.checked) return void a.parent.errors.triggerError("settings-screen", "In-game height limit is 256 blocks.", 7e3);
                    if (n.$inputHeight.value > 1024) return void a.parent.errors.triggerError("settings-screen", "Maximum convert height is 1024.", 7e3);
                    if (n.$inputWidth.value > 1024) return void a.parent.errors.triggerError("settings-screen", "Maximum convert width is 1024.", 7e3);
                    if (n.$inputWidth.value <= 0 || n.$inputHeight.value <= 0) return void a.parent.errors.triggerError("settings-screen", "Width and height must be more than 0.", 7e3);
                    switch (i) {
                        case "all":
                            break;
                        case "survival":
                            a.parent.blocksDefault.forEach(function(n) {
                                !0 !== n.survival && t.push(n.id)
                            });
                            break;
                        case "custom":
                            var r = n.$tableBlocks.querySelectorAll("tr.visible").length,
                                o = 0;
                            if (n.$tableBlocks.querySelectorAll("tr.visible td input").forEach(function(n) {
                                    !1 === n.checked && (t.push(parseInt(n.dataset.blockId)), o++)
                                }), o >= r - 1) return void a.parent.errors.triggerError("settings-screen", "Please select at least 2 blocks.", 7e3)
                    }
                    "all" !== i && "survival" !== i || (!1 === document.querySelector("input[name=include-transparent]").checked && a.parent.blocksDefault.forEach(function(n) {
                        !0 === n.transparency && t.push(n.id)
                    }), !1 === document.querySelector("input[name=include-falling]").checked && a.parent.blocksDefault.forEach(function(n) {
                        !0 === n.falling && t.push(n.id)
                    }), !1 === document.querySelector("input[name=include-redstone]").checked && a.parent.blocksDefault.forEach(function(n) {
                        !0 === n.redstone && t.push(n.id)
                    }), !1 === document.querySelector("input[name=include-luminance]").checked && a.parent.blocksDefault.forEach(function(n) {
                        !0 === n.luminance && t.push(n.id)
                    }));
                    var s = parseInt(n.$version.value);
                    s < 13 ? a.parent.blocksDefault.forEach(function(n) {
                        n.version > s && t.push(n.id)
                    }) : a.parent.blocksDefault.forEach(function(n) {
                        "minecraft:dried_kelp_block" === n.game_id && t.push(n.id)
                    }), a.parent.editorScreen.resetScreen(), a.parent.convertScreen.resetScreen(), a.parent.mineartCanvas.setSettingsValue("minecraftVersion", s), a.parent.convertScreen.$selectVersion.value = s, a.parent.localStorage.setItem("minecraftVersion", s), n.drawToCanvas(), a.parent.editorScreen.$footbarRight.innerHTML = "Width: <b>" + a.parent.canvasTemp.width + " bl.</b> | Height: <b>" + a.parent.canvasTemp.height + " bl.</b>", a.parent.showLoading(), a.parent.convertWorker.postMessage({
                        imgData: n.ctxTemp.getImageData(0, 0, a.parent.canvasTemp.width, a.parent.canvasTemp.height).data,
                        exclude: t
                    })
                }
            }
        });
    e.output = a
}, function(n, e, t) {
    "use strict";

    function i() {
        function n(n, e) {
            for (var t in e) n.setAttribute(t, e[t])
        }
        var e = this,
            t = {
                style: {
                    cornerWidth: 20,
                    cornerHeight: 20
                },
                posData: {
                    boundingRect: null,
                    selectRect: {
                        width: 50,
                        height: 50,
                        offsetX: 0,
                        offsetY: 0,
                        minWidth: 10,
                        minHeight: 10
                    }
                },
                nodes: {
                    root: null,
                    wrapper: null,
                    svg: null
                },
                svgNodes: {
                    backgroundRect: null,
                    selectRect: null,
                    selectRectMask: null,
                    cornerLeftTop: null,
                    cornerRightTop: null,
                    cornerLeftBottom: null,
                    cornerRightBottom: null,
                    barTop: null,
                    barLeft: null,
                    barRight: null,
                    barBottom: null
                },
                events: {
                    transformed: new Event("croppytransformed")
                }
            },
            i = !1;
        this._storeSetNode = function(n, e) {
            if (void 0 === t.nodes[n]) throw new Error("[SvgCroppy] Unknown key in store.nodes");
            return t.nodes[n] = e, e
        }, this._storeGetNode = function(n) {
            return t.nodes[n]
        }, this._storeSetSvgNode = function(n, e) {
            if (void 0 === t.svgNodes[n]) throw new Error("[SvgCroppy] Unknown key in store.svgNodes");
            return t.svgNodes[n] = e, e
        }, this._storeGetSvgNode = function(n) {
            return t.svgNodes[n]
        }, this._setPosDataSelectRect = function(n, e) {
            switch (n) {
                case "width":
                    e <= t.posData.selectRect.minWidth ? t.posData.selectRect.width = t.posData.selectRect.minWidth : e >= t.posData.boundingRect.width - t.posData.selectRect.offsetX ? t.posData.selectRect.width = t.posData.boundingRect.width - t.posData.selectRect.offsetX : t.posData.selectRect.width = e;
                    break;
                case "height":
                    e <= t.posData.selectRect.minHeight ? t.posData.selectRect.height = t.posData.selectRect.minHeight : e >= t.posData.boundingRect.height - t.posData.selectRect.offsetY ? t.posData.selectRect.height = t.posData.boundingRect.height - t.posData.selectRect.offsetY : t.posData.selectRect.height = e;
                    break;
                case "offsetX":
                    e <= 0 ? t.posData.selectRect.offsetX = 0 : e >= t.posData.boundingRect.width - t.posData.selectRect.width ? t.posData.selectRect.offsetX = t.posData.boundingRect.width - t.posData.selectRect.width : t.posData.selectRect.offsetX = e;
                    break;
                case "offsetY":
                    e <= 0 ? t.posData.selectRect.offsetY = 0 : e >= t.posData.boundingRect.height - t.posData.selectRect.height ? t.posData.selectRect.offsetY = t.posData.boundingRect.height - t.posData.selectRect.height : t.posData.selectRect.offsetY = e
            }
        }, this._setEventListeners = function() {
            var n = e._storeGetNode("root"),
                i = (e._storeGetNode("svg"), e._storeGetSvgNode("selectRect")),
                r = e._storeGetSvgNode("cornerLeftTop"),
                a = e._storeGetSvgNode("cornerRightTop"),
                o = e._storeGetSvgNode("cornerLeftBottom"),
                s = e._storeGetSvgNode("cornerRightBottom"),
                l = e._storeGetSvgNode("barTop"),
                c = e._storeGetSvgNode("barLeft"),
                d = e._storeGetSvgNode("barRight"),
                f = e._storeGetSvgNode("barBottom"),
                u = {
                    "croppy-svg-corner-left-top": "CORNER_LEFT_TOP",
                    "croppy-svg-corner-right-top": "CORNER_RIGHT_TOP",
                    "croppy-svg-corner-left-bottom": "CORNER_LEFT_BOTTOM",
                    "croppy-svg-corner-right-bottom": "CORNER_RIGHT_BOTTOM",
                    "croppy-svg-bar-top": "BAR_TOP",
                    "croppy-svg-bar-left": "BAR_LEFT",
                    "croppy-svg-bar-right": "BAR_RIGHT",
                    "croppy-svg-bar-bottom": "BAR_BOTTOM",
                    "croppy-svg-select": "SELECT_RECT"
                },
                h = {
                    el: null,
                    startX: null,
                    startY: null,
                    oldWidth: null,
                    oldHeight: null
                },
                b = [r, a, o, s, l, c, d, f, i];
            for (var g in b) b[g].addEventListener("mousedown", function(n) {
                var e = {
                    x: n.pageX - t.posData.boundingRect.x,
                    y: n.pageY - t.posData.boundingRect.y
                };
                if (h.el = u[n.target.classList[1]] || u[n.target.classList[0]], void 0 === h.el) throw new Error("[SvgCroppy] Selected node is not defined in aliases");
                h.startX = e.x, h.startY = e.y, h.oldWidth = t.posData.selectRect.width, h.oldHeight = t.posData.selectRect.height, h.oldOffsetX = t.posData.selectRect.offsetX, h.oldOffsetY = t.posData.selectRect.offsetY, h.oldEndX = t.posData.selectRect.offsetX + t.posData.selectRect.width, h.oldEndY = t.posData.selectRect.offsetY + t.posData.selectRect.height
            });
            document.addEventListener("mousemove", function(i) {
                if (("HTMLHtmlElement" === i.target.constructor.name || "croppy-svg" === i.target.parentNode.getAttribute("class") || h.el) && h.el) {
                    var r = {
                        x: i.pageX - t.posData.boundingRect.x - h.startX,
                        y: i.pageY - t.posData.boundingRect.y - h.startY
                    };
                    switch (h.el) {
                        case "CORNER_LEFT_TOP":
                            h.oldOffsetX + r.x > 0 && h.oldEndX >= h.oldOffsetX + r.x + t.posData.selectRect.minWidth ? (e._setPosDataSelectRect("offsetX", h.oldOffsetX + r.x), e._setPosDataSelectRect("width", h.oldWidth - r.x)) : h.oldOffsetX + r.x <= 0 ? (e._setPosDataSelectRect("offsetX", 0), e._setPosDataSelectRect("width", h.oldEndX)) : (e._setPosDataSelectRect("offsetX", h.oldEndX - t.posData.selectRect.minWidth), e._setPosDataSelectRect("width", t.posData.selectRect.minWidth)), h.oldOffsetY + r.y <= 0 ? (e._setPosDataSelectRect("offsetY", 0), e._setPosDataSelectRect("height", h.oldEndY)) : h.oldEndY >= h.oldOffsetY + r.y + t.posData.selectRect.minHeight ? (e._setPosDataSelectRect("offsetY", h.oldOffsetY + r.y), e._setPosDataSelectRect("height", h.oldHeight - r.y)) : (e._setPosDataSelectRect("offsetY", h.oldEndY - t.posData.selectRect.minHeight), e._setPosDataSelectRect("height", t.posData.selectRect.minHeight));
                            break;
                        case "CORNER_RIGHT_TOP":
                            h.oldOffsetY + r.y <= 0 ? (e._setPosDataSelectRect("offsetY", 0), e._setPosDataSelectRect("height", h.oldEndY)) : h.oldEndY >= h.oldOffsetY + r.y + t.posData.selectRect.minHeight ? (e._setPosDataSelectRect("offsetY", h.oldOffsetY + r.y), e._setPosDataSelectRect("height", h.oldHeight - r.y)) : (e._setPosDataSelectRect("offsetY", h.oldEndY - t.posData.selectRect.minHeight), e._setPosDataSelectRect("height", t.posData.selectRect.minHeight)), e._setPosDataSelectRect("width", h.oldWidth + r.x);
                            break;
                        case "CORNER_LEFT_BOTTOM":
                            h.oldOffsetX + r.x > 0 && h.oldEndX >= h.oldOffsetX + r.x + t.posData.selectRect.minWidth ? (e._setPosDataSelectRect("offsetX", h.oldOffsetX + r.x), e._setPosDataSelectRect("width", h.oldWidth - r.x)) : h.oldOffsetX + r.x <= 0 ? (e._setPosDataSelectRect("offsetX", 0), e._setPosDataSelectRect("width", h.oldEndX)) : (e._setPosDataSelectRect("offsetX", h.oldEndX - t.posData.selectRect.minWidth), e._setPosDataSelectRect("width", t.posData.selectRect.minWidth)), e._setPosDataSelectRect("height", h.oldHeight + r.y);
                            break;
                        case "CORNER_RIGHT_BOTTOM":
                            e._setPosDataSelectRect("width", h.oldWidth + r.x), e._setPosDataSelectRect("height", h.oldHeight + r.y);
                            break;
                        case "BAR_TOP":
                            h.oldOffsetY + r.y <= 0 ? (e._setPosDataSelectRect("offsetY", 0), e._setPosDataSelectRect("height", h.oldEndY)) : h.oldEndY >= h.oldOffsetY + r.y + t.posData.selectRect.minHeight ? (e._setPosDataSelectRect("offsetY", h.oldOffsetY + r.y), e._setPosDataSelectRect("height", h.oldHeight - r.y)) : (e._setPosDataSelectRect("offsetY", h.oldEndY - t.posData.selectRect.minHeight), e._setPosDataSelectRect("height", t.posData.selectRect.minHeight));
                            break;
                        case "BAR_LEFT":
                            h.oldOffsetX + r.x > 0 && h.oldEndX >= h.oldOffsetX + r.x + t.posData.selectRect.minWidth ? (e._setPosDataSelectRect("offsetX", h.oldOffsetX + r.x), e._setPosDataSelectRect("width", h.oldWidth - r.x)) : h.oldOffsetX + r.x <= 0 ? (e._setPosDataSelectRect("offsetX", 0), e._setPosDataSelectRect("width", h.oldEndX)) : (e._setPosDataSelectRect("offsetX", h.oldEndX - t.posData.selectRect.minWidth), e._setPosDataSelectRect("width", t.posData.selectRect.minWidth));
                            break;
                        case "BAR_RIGHT":
                            e._setPosDataSelectRect("width", h.oldWidth + r.x);
                            break;
                        case "BAR_BOTTOM":
                            e._setPosDataSelectRect("height", h.oldHeight + r.y);
                            break;
                        case "SELECT_RECT":
                            e._setPosDataSelectRect("offsetX", h.oldOffsetX + r.x), e._setPosDataSelectRect("offsetY", h.oldOffsetY + r.y)
                    }
                    e.render(), n.dispatchEvent(t.events.transformed)
                }
            }), document.addEventListener("mouseup", function(n) {
                h.el = null, h.startX = null, h.startY = null, h.oldWidth = null, h.oldHeight = null, h.oldOffsetX = null, h.oldOffsetY = null, h.oldEndX = null, h.oldEndY = null
            })
        }, this.render = function() {
            var i = e._storeGetSvgNode("selectRect"),
                r = e._storeGetSvgNode("selectRectMask"),
                a = e._storeGetSvgNode("cornerLeftTop"),
                o = e._storeGetSvgNode("cornerRightTop"),
                s = e._storeGetSvgNode("cornerLeftBottom"),
                l = e._storeGetSvgNode("cornerRightBottom"),
                c = e._storeGetSvgNode("barTop"),
                d = e._storeGetSvgNode("barLeft"),
                f = e._storeGetSvgNode("barRight"),
                u = e._storeGetSvgNode("barBottom");
            n(r, {
                x: t.posData.selectRect.offsetX,
                y: t.posData.selectRect.offsetY,
                width: t.posData.selectRect.width,
                height: t.posData.selectRect.height
            }), n(i, {
                x: t.posData.selectRect.offsetX,
                y: t.posData.selectRect.offsetY,
                width: t.posData.selectRect.width,
                height: t.posData.selectRect.height
            }), n(a, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2),
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2)
            }), n(o, {
                x: t.posData.selectRect.offsetX + t.posData.selectRect.width - Math.round(t.style.cornerWidth / 2),
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2)
            }), n(s, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2),
                y: t.posData.selectRect.offsetY + t.posData.selectRect.height - Math.round(t.style.cornerHeight / 2)
            }), n(l, {
                x: t.posData.selectRect.offsetX + t.posData.selectRect.width - Math.round(t.style.cornerWidth / 2),
                y: t.posData.selectRect.offsetY + t.posData.selectRect.height - Math.round(t.style.cornerHeight / 2)
            }), n(c, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2) + t.style.cornerWidth,
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2),
                width: t.posData.selectRect.width - t.style.cornerHeight >= 0 ? t.posData.selectRect.width - t.style.cornerHeight : 0,
                height: t.style.cornerHeight
            }), n(d, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2),
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2) + t.style.cornerHeight,
                width: t.style.cornerWidth,
                height: t.posData.selectRect.height - t.style.cornerHeight >= 0 ? t.posData.selectRect.height - t.style.cornerHeight : 0
            }), n(f, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2) + t.posData.selectRect.width,
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2) + t.style.cornerHeight,
                width: t.style.cornerWidth,
                height: t.posData.selectRect.height - t.style.cornerHeight >= 0 ? t.posData.selectRect.height - t.style.cornerHeight : 0
            }), n(u, {
                x: t.posData.selectRect.offsetX - Math.round(t.style.cornerWidth / 2) + t.style.cornerWidth,
                y: t.posData.selectRect.offsetY - Math.round(t.style.cornerHeight / 2) + t.posData.selectRect.height,
                width: t.posData.selectRect.width - t.style.cornerHeight >= 0 ? t.posData.selectRect.width - t.style.cornerHeight : 0,
                height: t.style.cornerHeight
            })
        }, this.getCropInfo = function() {
            return {
                offsetX: t.posData.selectRect.offsetX,
                offsetY: t.posData.selectRect.offsetY,
                width: t.posData.selectRect.width,
                height: t.posData.selectRect.height,
                boundWidth: t.posData.boundingRect.width,
                boundHeight: t.posData.boundingRect.height
            }
        }, this.hide = function() {
            t.nodes.svg && t.nodes.svg.classList.add("croppy-hidden")
        }, this.unhide = function() {
            t.nodes.svg && t.nodes.svg.classList.remove("croppy-hidden"), e._storeGetNode("root").dispatchEvent(t.events.transformed)
        }, this.setSizes = function() {
            var n = (e._storeGetNode("svg"), e._storeGetSvgNode("selectRect"), e._storeGetNode("wrapper")),
                i = e._storeGetNode("root");
            n.style.height = i.clientHeight + "px", t.posData.selectRect.width = Math.round(.8 * i.width), t.posData.selectRect.height = Math.round(.8 * i.height), t.posData.selectRect.offsetX = Math.round(.1 * i.width), t.posData.selectRect.offsetY = Math.round(.1 * i.height), t.posData.boundingRect = n.getBoundingClientRect(), e.render()
        }, this.init = function(n) {
            var r = null;
            if (null === (r = "String" === n.constructor.name ? document.querySelector(n) : n)) throw new Error("[SvgCroppy] rootNode is null");
            if (e._storeSetNode("root", r), i) return void e.setSizes();
            i = !0;
            var a = '\n            <style>\n                .croppy-hidden {\n                    display: none;\n                }\n\n                .croppy-wrapper {\n                    display: inline-block;\n                    position: relative;\n                    margin: 0;\n                    padding: 0;\n                    user-drag: none; \n                    user-select: none;\n                    -moz-user-select: none;\n                    -webkit-user-drag: none;\n                    -webkit-user-select: none;\n                    -ms-user-select: none;\n                }\n\n                .croppy-svg {\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                }\n\n                .croppy-svg-select {\n                    fill-opacity: 0;\n                    stroke: white;\n                    stroke-dasharray: 5 5;\n                    stroke-width: 2px;\n                    cursor: move;\n                }\n\n                .croppy-svg-background {\n                    opacity: 0.75;\n                    height: 100%;\n                    width: 100%;\n                }\n\n                .croppy-svg-corner {\n                    opacity: 0;\n                }\n\n                .croppy-svg-corner-left-top, .croppy-svg-corner-right-bottom {\n                    cursor: nwse-resize;\n                }\n\n                .croppy-svg-corner-left-bottom, .croppy-svg-corner-right-top {\n                    cursor: nesw-resize;\n                }\n\n                .croppy-svg-bar {\n                    opacity: 0;\n                }\n\n                .croppy-svg-bar-top, .croppy-svg-bar-bottom {\n                    cursor: ns-resize;\n                }\n\n                .croppy-svg-bar-left, .croppy-svg-bar-right {\n                    cursor: ew-resize;\n                }\n            </style>\n            <svg class="croppy-svg">\n                <defs>\n                    <mask id="mymask" x="0" y="0" width="100%" height="100%">\n                        <rect fill="white" width="100%" height="100%"/>\n                        <rect class="croppy-svg-mask" fill="black"/>\n                    <mask/>\n                </defs>\n                <rect class="croppy-svg-background" width="100%" height="100%" style="mask: url(\'#mymask\');"/>\n                <rect class="croppy-svg-select"/>\n\n                <rect class="croppy-svg-corner croppy-svg-corner-left-top" width="' + t.style.cornerWidth + 'px" height="' + t.style.cornerHeight + 'px"/>\n                <rect class="croppy-svg-corner croppy-svg-corner-right-top" width="' + t.style.cornerWidth + 'px" height="' + t.style.cornerHeight + 'px"/>\n                <rect class="croppy-svg-corner croppy-svg-corner-left-bottom" width="' + t.style.cornerWidth + 'px" height="' + t.style.cornerHeight + 'px"/>\n                <rect class="croppy-svg-corner croppy-svg-corner-right-bottom" width="' + t.style.cornerWidth + 'px" height="' + t.style.cornerHeight + 'px"/>\n\n                <rect class="croppy-svg-bar croppy-svg-bar-top"/>\n                <rect class="croppy-svg-bar croppy-svg-bar-left"/>\n                <rect class="croppy-svg-bar croppy-svg-bar-right"/>\n                <rect class="croppy-svg-bar croppy-svg-bar-bottom"/>\n\n            </svg>\n        ',
                o = document.createElement("div");
            o.className = "croppy-wrapper", e._storeSetNode("wrapper", o), r.parentNode.insertBefore(o, r), o.innerHTML = a, o.append(r);
            var s = e._storeSetNode("svg", o.querySelector("svg"));
            e._storeSetSvgNode("backgroundRect", s.querySelector(".croppy-svg-background")), e._storeSetSvgNode("selectRect", s.querySelector(".croppy-svg-select"));
            e._storeSetSvgNode("selectRectMask", s.querySelector(".croppy-svg-mask")), e._storeSetSvgNode("cornerLeftTop", s.querySelector(".croppy-svg-corner-left-top")), e._storeSetSvgNode("cornerRightTop", s.querySelector(".croppy-svg-corner-right-top")), e._storeSetSvgNode("cornerLeftBottom", s.querySelector(".croppy-svg-corner-left-bottom")), e._storeSetSvgNode("cornerRightBottom", s.querySelector(".croppy-svg-corner-right-bottom")), e._storeSetSvgNode("barTop", s.querySelector(".croppy-svg-bar-top")), e._storeSetSvgNode("barLeft", s.querySelector(".croppy-svg-bar-left")), e._storeSetSvgNode("barRight", s.querySelector(".croppy-svg-bar-right")), e._storeSetSvgNode("barBottom", s.querySelector(".croppy-svg-bar-bottom")), e.setSizes(), e._setEventListeners()
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i
}, function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = window.URL || window.webkitURL,
        r = {
            parent: null,
            eyedropListener: null,
            mainEyedrop: null,
            currentHistoryPos: -1,
            noBlockImg: new Image,
            currentTool: "pencil",
            brushSize: 3,
            pencilSize: 3,
            maxHistory: 100,
            tempEyedrop: !1,
            $topbarBtns: document.querySelectorAll(".topbar-btn"),
            init: function(n) {
                var e = this;
                this.parent = n;
                document.querySelectorAll('*[id^="editor-"]').forEach(function(n) {
                    var t = "$";
                    n.id.split("-").forEach(function(n, e) {
                        e > 1 ? t += n.charAt(0).toUpperCase() + n.slice(1) : e > 0 && (t += n)
                    }), e[t] = n
                });
                this.setEventListeners()
            },
            setEyedropListener: function(n) {
                this.eyedropListener = n, n.classList.add("active"), r.parent.mineartCanvas.setTool("clicker")
            },
            removeEyedropListener: function() {
                this.eyedropListener && (this.eyedropListener.classList.remove("active"), this.eyedropListener = null, r.parent.mineartCanvas.setTool(this.currentTool))
            },
            fillBlockList: function() {
                var n = this;
                this.noBlockImg.src = t(26);
                var e = document.createElement("div");
                e.onclick = function() {
                    n.setEyedrop(0)
                }, e.title = "No Block", e.appendChild(this.noBlockImg), e.classList.add("info-panels-blocks-img-wrapper"), r.$blockList.appendChild(e), r.parent.blocksDefault.forEach(function(e) {
                    var t = document.createElement("div"),
                        i = new Image;
                    i.src = e.src, i.classList.add("img-pixelated"), i.setAttribute("data-block-id", e.id), t.title = e.name, t.onclick = function() {
                        if (r.eyedropListener) {
                            r.eyedropListener.setAttribute("data-block-id", e.id), r.eyedropListener.src = e.src;
                            var t = r.eyedropListener.parentNode.querySelector("span");
                            t && (t.innerHTML = e.name), r.removeEyedropListener()
                        } else n.setEyedrop(e.id)
                    }, t.appendChild(i), t.classList.add("info-panels-blocks-img-wrapper"), r.$blockList.appendChild(t)
                })
            },
            changeToSettingsScreen: function() {
                document.querySelector("section.editor-screen").classList.add("hidden"), document.querySelector("section.convert-screen").classList.add("hidden"), document.querySelector("section.settings-screen").classList.remove("hidden"), r.parent.settingsScreen.resetScreen()
            },
            removeHistory: function() {
                document.querySelectorAll(".info-panels-history-action").forEach(function(n) {
                    n.remove()
                })
            },
            setEyedrop: function(n) {
                if (0 != n) {
                    var e = r.parent.findBlockById(n);
                    this.$mainEyedrop.src = e.src, this.$mainEyedrop.title = e.name
                } else this.$mainEyedrop.src = this.noBlockImg.src, this.$mainEyedrop.title = "No Block";
                this.mainEyedrop = n, r.parent.mineartCanvas.setEyedrop(n)
            },
            filterBlockList: function(n) {
                var e = this;
                r.parent.blocksDefault.forEach(function(t) {
                    var i = new RegExp(n, "i");
                    t.name.match(i) ? e.$blockList.querySelector('img[data-block-id="' + t.id + '"]').parentNode.classList.remove("hidden") : e.$blockList.querySelector('img[data-block-id="' + t.id + '"]').parentNode.classList.add("hidden")
                })
            },
            setBrushSize: function(n) {
                var e = void 0;
                e = n > 25 ? 25 : n < 1 ? 1 : n;
                var t = e < 3 ? 3 : e;
                this.$brushShape.style.width = (t % 2 ? t : t - 1) + "px", this.$brushShape.style.height = (t % 2 ? t : t - 1) + "px", this.$brushString.innerHTML = e + " bl.", "pencil" === this.currentTool ? this.pencilSize = e : "brush" === this.currentTool ? this.brushSize = e : (this.pencilSize = e, this.brushSize = e), r.parent.mineartCanvas.setBrushSize(e)
            },
            resetScreen: function() {
                this.currentTool = "pencil", this.brushSize = 3, this.pencilSize = 3, this.closeTopbarMenus(), this.$settingsRulers.checked = !0, this.$settingsGrid.checked = !1, this.$settingsOriginal.checked = !1, this.$settingsGridColor.value = "#ff4778", this.setEyedrop(1), this.removeEyedropListener(), this.$replaceReplacement.src = t(12), this.$replaceTarget.src = t(12), this.$replaceReplacement.parentNode.querySelector("span").innerHTML = "...", this.$replaceTarget.parentNode.querySelector("span").innerHTML = "...", this.$replaceInfo.classList.add("hidden"), this.$firstAction.classList.add("info-panels-history-action-current"), document.querySelector('.editor-tools input[value="pencil"]').checked = !0, this.$brushShape.classList.remove("circle"), this.$brushContainer.classList.remove("hidden"), r.parent.localStorage.getItem("gridColor") && (this.$settingsGridColor.value = r.parent.localStorage.getItem("gridColor"), r.parent.mineartCanvas.setSettingsValue("gridColor", this.$settingsGridColor.value)), r.parent.isSaved = !1
            },
            closeTopbarMenus: function() {
                document.querySelectorAll(".topbar-menu").forEach(function(n) {
                    n.classList.add("hidden")
                }), this.$replaceInfo.classList.add("hidden"), this.removeEyedropListener()
            },
            undoOnce: function() {
                var n = r.currentHistoryPos - 1,
                    e = document.querySelector('.info-panels-history-action[data-action-pos="' + n + '"]');
                n < -1 || (-1 === n || null === e ? this.$firstAction.click() : e.click())
            },
            redoOnce: function() {
                var n = r.currentHistoryPos + 1,
                    e = document.querySelector('.info-panels-history-action[data-action-pos="' + n + '"]');
                e ? e.click() : 0 === n && document.querySelector(".info-panels-history-action").click()
            },
            setEventListeners: function() {
                var n = this;
                this.$topbarBtns.forEach(function(e) {
                    e.onclick = function(t) {
                        var i = e.querySelector(".topbar-menu");
                        t.target === e && (i.classList.contains("hidden") ? (n.closeTopbarMenus(), i.classList.remove("hidden")) : n.closeTopbarMenus())
                    }
                }), this.$replaceTarget.onclick = function(e) {
                    n.removeEyedropListener(), n.setEyedropListener(e.target)
                }, this.$replaceReplacement.onclick = function(e) {
                    n.removeEyedropListener(), n.setEyedropListener(e.target)
                }, this.$replaceBtn.onclick = function(e) {
                    var t = parseInt(n.$replaceTarget.dataset.blockId),
                        i = parseInt(n.$replaceReplacement.dataset.blockId);
                    if (!t || !i) return void n.$replaceBtn.classList.add("border-danger");
                    n.$replaceBtn.classList.remove("border-danger");
                    var a = r.parent.mineartCanvas.replace(t, i);
                    n.$replaceInfo.classList.remove("hidden"), n.$replaceInfo.innerHTML = a + " block(s) replaced."
                }, this.$canvas.onmousedown = function(e) {
                    1 === e.which && !0 === n.$settingsOriginal.checked && (r.parent.mineartCanvas.setSettingsValue("showOriginal", !1), n.$settingsOriginal.checked = !1, r.parent.mineartCanvas.render())
                }, this.$canvas.onclick = function(e) {
                    r.parent.mineartCanvas.render();
                    var t = r.parent.mineartCanvas.getBlockInfoByMouseXY(e.x, e.y).info;
                    if (t) {
                        if (n.eyedropListener) {
                            n.eyedropListener.setAttribute("data-block-id", t.id), n.eyedropListener.src = t.image.src;
                            var i = n.eyedropListener.parentNode.querySelector("span");
                            i && (i.innerHTML = t.name), n.removeEyedropListener()
                        }
                        "eyedropper" !== n.currentTool && "clicker" !== r.parent.mineartCanvas.getTool() || n.setEyedrop(t.id), "clicker" === r.parent.mineartCanvas.getTool() && !1 === e.ctrlKey && r.parent.mineartCanvas.setTool(n.currentTool)
                    }
                }, this.$canvas.onmousemove = function(e) {
                    var t = r.parent.mineartCanvas.getBlockInfoByMouseXY(e.x, e.y);
                    t && t.info ? n.$footbarLeft.innerHTML = "\n                    X: <b>" + t.x + "</b>, Y: <b>" + t.y + "</b>, Name: <b>" + t.info.name + "</b>, Game ID: <b>" + t.info.game_id + "</b>\n                " : n.$footbarLeft.innerHTML = t ? "\n                    X: <b>" + t.x + "</b>, Y: <b>" + t.y + "</b>, Name: <b>-</b>\n                " : "..."
                }, this.$canvas.addEventListener("history", function(e) {
                    r.parent.convertScreen.wasChanged = !0, r.parent.convertScreen.$notifyChanged.classList.remove("hidden"), r.parent.isSaved = !1, n.currentHistoryPos = e.details.pos;
                    var t = 0;
                    (n.$history.querySelectorAll(".info-panels-history-action").forEach(function(e) {
                        e.classList.remove("info-panels-history-action-current"), parseInt(e.dataset.actionPos) >= parseInt(n.currentHistoryPos) ? (e.remove(), t--) : t++
                    }), t === n.maxHistory) && n.$history.querySelector(".info-panels-history-action").remove();
                    var i = document.createElement("div");
                    i.classList.add("info-panels-history-action"), i.classList.add("info-panels-history-action-current"), i.classList.add("info-panels-history-action-" + e.details.type), i.setAttribute("data-action-pos", e.details.pos), i.innerHTML = e.details.type.charAt(0).toUpperCase() + e.details.type.slice(1), i.onclick = function() {
                        !0 === n.$settingsOriginal.checked && (r.parent.mineartCanvas.setSettingsValue("showOriginal", !1), r.parent.mineartCanvas.render(), n.$settingsOriginal.checked = !1), n.$firstAction.classList.remove("info-panels-history-action-current"), n.$history.querySelectorAll(".info-panels-history-action").forEach(function(n) {
                            n.classList.remove("info-panels-history-action-current"), parseInt(n.dataset.actionPos) > parseInt(i.dataset.actionPos) ? n.classList.add("info-panels-history-action-returned") : n.classList.remove("info-panels-history-action-returned")
                        }), i.classList.add("info-panels-history-action-current"), r.parent.mineartCanvas.undoTo(parseInt(i.dataset.actionPos)), n.currentHistoryPos !== parseInt(i.dataset.actionPos) && (r.parent.convertScreen.$notifyChanged.classList.remove("hidden"), r.parent.isSaved = !1), n.currentHistoryPos = parseInt(i.dataset.actionPos), r.parent.convertScreen.wasChanged = !0
                    }, n.$firstAction.classList.remove("info-panels-history-action-current"), n.$history.appendChild(i), n.$history.scrollTop = n.$history.scrollHeight
                }), this.$firstAction.onclick = function(e) {
                    e.target.classList.add("info-panels-history-action-current"), n.$history.querySelectorAll(".info-panels-history-action").forEach(function(n) {
                        n.classList.remove("info-panels-history-action-current"), n.classList.add("info-panels-history-action-returned")
                    }), r.parent.mineartCanvas.undoTo(-1), -1 !== n.currentHistoryPos && (r.parent.convertScreen.$notifyChanged.classList.remove("hidden"), r.parent.isSaved = !1), n.currentHistoryPos = -1, r.parent.convertScreen.wasChanged = !0, !0 === n.$settingsOriginal.checked && (r.parent.mineartCanvas.setSettingsValue("showOriginal", !1), r.parent.mineartCanvas.render(), n.$settingsOriginal.checked = !1)
                }, this.$btnConvert.onclick = function() {
                    var n = document.querySelector("section.convert-screen");
                    n.classList.remove("hidden"), r.parent.convertScreen.convert(), setTimeout(function() {
                        n.scrollIntoView({
                            behavior: "smooth"
                        })
                    }, 100)
                }, this.$saveBtn.onclick = function() {
                    if (!n.$saveInput.value) return void n.$saveBtn.classList.add("border-danger");
                    n.$saveBtn.classList.remove("border-danger"), n.$saveBtn.download = n.$saveInput.value + ".schematic";
                    var e = r.parent.mineartCanvas.save(n.$settingsWeDirection.value);
                    n.$saveBtn.href = e, r.parent.isSaved = !0
                }, this.$fileInputImage.onclick = function(n) {
                    n.target.value = null
                }, this.$fileInputImage.oninput = function(e) {
                    if (1 !== e.target.files.length) return void r.parent.errors.triggerError("editor-screen", "Please, choose only one file.", 5e3);
                    var t = /(.*)\.([^.]*)/,
                        a = e.target.files[0].name.match(t),
                        o = void 0,
                        s = void 0;
                    return a ? (o = e.target.files[0].name.match(t)[2], s = e.target.files[0].name.match(t)[1], o.match(/(jpeg|jpg|png|bmp)/i) ? (r.parent.startScreen.setNameFile(s), r.parent.startScreen.uploadImage(i.createObjectURL(e.target.files[0])), r.parent.startScreen.uploadImage(i.createObjectURL(e.target.files[0])), r.parent.startScreen.setNameFile(s), n.changeToSettingsScreen(), void n.removeHistory()) : void r.parent.errors.triggerError("editor-screen", "Wrong file type. Try image file (jpg, png, bmp).", 5e3)) : void r.parent.errors.triggerError("editor-screen", "Wrong file type. Try image file (jpg, png, bmp).", 5e3)
                }, this.$fileInputData.onclick = function(n) {
                    n.target.value = null
                }, this.$fileInputData.oninput = function(e) {
                    if (1 !== e.target.files.length) return void r.parent.errors.triggerError("editor-screen", "Please, choose only one file.", 5e3);
                    var t = /(.*)\.([^.]*)/,
                        a = e.target.files[0].name.match(t),
                        o = void 0,
                        s = void 0;
                    return a ? (o = e.target.files[0].name.match(t)[2], s = e.target.files[0].name.match(t)[1], o.match(/(schematic)/i) ? (r.parent.startScreen.setNameFile(s), r.parent.startScreen.uploadImage(i.createObjectURL(e.target.files[0])), r.parent.startScreen.uploadSchematic(e.target.files[0]), r.parent.startScreen.setNameFile(s), void n.removeHistory()) : void r.parent.errors.triggerError("editor-screen", "Wrong file type. Try .schematic file.", 5e3)) : void r.parent.errors.triggerError("editor-screen", "Wrong file type. Try .schematic file.", 5e3)
                }, this.$inputFilter.oninput = function(e) {
                    n.filterBlockList(e.target.value)
                }, document.querySelectorAll('input[name="tool"]').forEach(function(e) {
                    e.addEventListener("click", function(e) {
                        var t = e.target.value;
                        r.parent.mineartCanvas.setTool(t), n.currentTool = t, "pencil" === t ? (n.setBrushSize(n.pencilSize), n.$brushShape.classList.remove("circle"), n.$brushContainer.classList.remove("hidden")) : "brush" === t ? (n.setBrushSize(n.brushSize), n.$brushShape.classList.add("circle"), n.$brushContainer.classList.remove("hidden")) : n.$brushContainer.classList.add("hidden")
                    })
                }), this.$brushMinus.onclick = function() {
                    "pencil" === n.currentTool ? n.setBrushSize(n.pencilSize - 2) : "brush" === n.currentTool && n.setBrushSize(n.brushSize - 2)
                }, this.$brushPlus.onclick = function() {
                    "pencil" === n.currentTool ? n.setBrushSize(n.pencilSize + 2) : "brush" === n.currentTool && n.setBrushSize(n.brushSize + 2)
                }, this.$settingsGrid.onchange = function(n) {
                    r.parent.mineartCanvas.setSettingsValue("showGrid", n.target.checked), r.parent.mineartCanvas.render()
                }, this.$settingsRulers.onchange = function(n) {
                    r.parent.mineartCanvas.setSettingsValue("showRulers", n.target.checked), r.parent.mineartCanvas.render()
                }, this.$settingsOriginal.onchange = function(n) {
                    r.parent.mineartCanvas.setSettingsValue("showOriginal", n.target.checked), r.parent.mineartCanvas.render()
                }, this.$settingsGridColor.onchange = function(n) {
                    r.parent.mineartCanvas.setSettingsValue("gridColor", n.target.value), r.parent.localStorage.setItem("gridColor", n.target.value), r.parent.mineartCanvas.render()
                }, this.$helpFaq.onclick = function() {
                    r.parent.modals.openModal("faq")
                }, this.$helpControls.onclick = function() {
                    r.parent.modals.openModal("controls")
                }, this.$btnSavePng.onclick = function() {
                    var n = new Image,
                        e = r.parent.mineartCanvas.getDataUrl();
                    if (null !== e) {
                        n.src = e;
                        window.open("").document.write(n.outerHTML)
                    }
                }
            }
        };
    e.output = r
}, function(n, e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.output = void 0;
    var i = t(291),
        r = function(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }(i),
        a = window.URL || window.webkitURL,
        o = {
            parent: null,
            wasChanged: !1,
            commBlockStrings: null,
            mcfunctionBlob: null,
            rawCommands: null,
            quantityOfBlocks: null,
            counterCommblock: new r.default,
            counterRaw: new r.default,
            counterManual: new r.default,
            init: function(n) {
                var e = this;
                this.parent = n;
                document.querySelectorAll('*[id^="convert-"]').forEach(function(n) {
                    var t = "$";
                    n.id.split("-").forEach(function(n, e) {
                        e > 1 ? t += n.charAt(0).toUpperCase() + n.slice(1) : e > 0 && (t += n)
                    }), e[t] = n
                });
                this.setEventListeners()
            },
            convert: function() {
                var n = this;
                this.wasChanged && (o.parent.mineartCanvas.resetGroups(), this.wasChanged = !1), this.commBlockStrings = o.parent.mineartCanvas.convertAsCommandBlock(this.$selectFacing.value), this.mcfunctionBlob = new Blob([o.parent.mineartCanvas.convertAsMcfunction(this.$selectFacing.value)], {
                    type: "text/plain"
                }), this.rawCommands = o.parent.mineartCanvas.convertAsRaw(this.$selectFacing.value), this.$btnMcfunction.href = a.createObjectURL(this.mcfunctionBlob), this.quantityOfBlocks = o.parent.mineartCanvas.getQuantityOfBlocks(), this.$stringCommands.innerHTML = "Total commands: " + this.rawCommands.length, this.counterCommblock.init(this.$counterCommblock), this.counterCommblock.setMax(this.commBlockStrings.length), this.counterCommblock.setCallback(function(e) {
                    n.$commblockTextarea.value = n.commBlockStrings[e - 1], o.parent.mineartCanvas.setSettingsValue("drawGroupsCurrent", e - 1), o.parent.mineartCanvas.render()
                }), this.counterCommblock.setValue(1), this.counterRaw.init(this.$counterRaw);
                this.counterRaw.setMax(Math.ceil(this.rawCommands.length / 1e3)), this.counterRaw.setCallback(function(e) {
                    var t = n.rawCommands.slice(1e3 * (e - 1), 1e3 * e),
                        i = "";
                    t.forEach(function(n) {
                        i += "<span>" + n + "</span>\n"
                    }), n.$preRaw.style.counterIncrement = "line " + 1e3 * (e - 1), n.$preRaw.innerHTML = i
                }), this.counterRaw.setValue(1);
                var e = this.$tableManual.querySelector("tbody");
                this.counterManual.init(this.$counterManual), this.counterManual.setMax(Math.ceil(this.quantityOfBlocks.length / 10)), this.counterManual.setCallback(function(t) {
                    e.innerHTML = "", n.quantityOfBlocks.slice(10 * (t - 1), 10 * t).forEach(function(n) {
                        var t = document.createElement("tr"),
                            i = o.parent.findBlockById(parseInt(n.id)),
                            r = "";
                        n.quant > 63 ? (r += Math.floor(n.quant / 64) + " stacks", n.quant % 64 != 0 && (r += " + " + n.quant % 64 + " blocks")) : r += n.quant + " blocks", t.innerHTML = '<td><img class="img-pixelated" src="' + i.src + '"></td><td>' + i.name + "</td><td>" + r + "</td>", e.appendChild(t)
                    })
                }), this.counterManual.setValue(1), this.$stringDelete.innerHTML = o.parent.mineartCanvas.getCommandToDelete(this.$selectFacing.value).join("<br>"), this.$notifyChanged.classList.add("hidden")
            },
            resetScreen: function() {
                this.$selectVersion.value = 12, this.$selectMethod.value = "commblock", this.$selectFacing.value = "north", document.querySelector("section.convert-screen").classList.add("hidden"), this.$outputCommblock.classList.remove("hidden"), this.$outputMcfunction.classList.add("hidden"), this.$outputRaw.classList.add("hidden"), this.$outputManual.classList.add("hidden")
            },
            setEventListeners: function() {
                var n = this;
                this.$selectMethod.onchange = function(e) {
                    switch (n.$outputCommblock.classList.add("hidden"), n.$outputMcfunction.classList.add("hidden"), n.$outputRaw.classList.add("hidden"), n.$outputManual.classList.add("hidden"), e.target.value) {
                        case "commblock":
                            n.$outputCommblock.classList.remove("hidden");
                            break;
                        case "mcfunction":
                            n.$outputMcfunction.classList.remove("hidden");
                            break;
                        case "raw":
                            n.$outputRaw.classList.remove("hidden");
                            break;
                        case "manual":
                            n.$outputManual.classList.remove("hidden")
                    }
                }, this.$selectFacing.onchange = function(e) {
                    o.parent.editorScreen.$settingsWeDirection.value = e.target.value, n.convert()
                }, this.$btnMcfunction.onclick = function(e) {
                    if (!n.$inputMcfunction.value) return n.$btnMcfunction.classList.add("border-danger"), void e.preventDefault();
                    n.$btnMcfunction.classList.remove("border-danger"), n.$btnMcfunction.download = n.$inputMcfunction.value + ".mcfunction"
                }, this.$copyClipboard.onclick = function(e) {
                    e.preventDefault(), n.$commblockTextarea.select(), document.execCommand("copy")
                }, this.$notifyLink.onclick = function(e) {
                    e.preventDefault(), n.convert(), n.$notifyChanged.classList.add("hidden")
                }, this.$selectVersion.onchange = function(e) {
                    o.parent.mineartCanvas.setSettingsValue("minecraftVersion", parseInt(e.target.value)), n.convert()
                }, this.$howtoCommand.onclick = function(n) {
                    n.preventDefault(), o.parent.modals.openModal("howto-command")
                }
            }
        };
    e.output = o
}, function(n, e, t) {
    "use strict";

    function i(n) {
        var e = this,
            t = !1,
            i = void 0,
            r = 1,
            a = 1,
            o = null,
            s = {
                doubleLeft: null,
                left: null,
                input: null,
                span: null,
                right: null,
                doubleRight: null
            };
        this._setSpan = function() {
            s.span.innerHTML = "out of " + a
        }, this._setEventListeners = function() {
            s.doubleLeft.onclick = function() {
                e.setValue(1)
            }, s.left.onclick = function() {
                e.setValue(r - 1)
            }, s.input.onchange = function() {
                e.setValue(s.input.value)
            }, s.right.onclick = function() {
                e.setValue(r + 1)
            }, s.doubleRight.onclick = function() {
                e.setValue(a)
            }
        }, this.setValue = function(n) {
            r = n, n < 1 && (r = 1), n > a && (r = a), s.input.value = r, o && o(r)
        }, this.setMax = function(n) {
            a = n, r > a && e.setValue(n), e._setSpan()
        }, this.setCallback = function(n) {
            o = n
        }, this.init = function(n) {
            !0 !== t && (t = !0, i = n, i.innerHTML = '\n\t\t<i class="fas fa-2x fa-angle-double-left"></i><i class="fas fa-2x fa-angle-left"></i>\n        <input class="input"><span class="counter-span"></span>\n        <i class="fas fa-2x fa-angle-right"></i><i class="fas fa-2x fa-angle-double-right"></i>\n\t', s.doubleLeft = i.querySelector("i.fa-angle-double-left"), s.left = i.querySelector("i.fa-angle-left"), s.input = i.querySelector("input.input"), s.span = i.querySelector("span.counter-span"), s.right = i.querySelector("i.fa-angle-right"), s.doubleRight = i.querySelector("i.fa-angle-double-right"), e._setEventListeners())
        }, n && this.init(n)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i
}]);
