import {
    e as L,
    aF as O,
    p as Q,
    aG as W,
    C as j,
    v as $,
    m as D,
    o as P,
    h as b,
    l as B,
    P as K,
    k as g,
    U as M,
    V as ee,
    O as te,
    W as z,
} from './vue-Rh7pEvFB.js'
import { s as re } from './index-91XudTWA.js'
import { u as oe, s as ne } from './store-Crup8fJ_.js'
import { _ as ae } from './index-BfqXFxxp.js'
/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */ var k = function () {
    return (
        (k =
            Object.assign ||
            function (u) {
                for (var c, a = 1, h = arguments.length; a < h; a++) {
                    c = arguments[a]
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d])
                }
                return u
            }),
        k.apply(this, arguments)
    )
}
var N
;(function (l) {
    var u = (function () {
        function o(e, t, r, n) {
            if (
                ((this.version = e),
                (this.errorCorrectionLevel = t),
                (this.modules = []),
                (this.isFunction = []),
                e < o.MIN_VERSION || e > o.MAX_VERSION)
            )
                throw new RangeError('Version value out of range')
            if (n < -1 || n > 7) throw new RangeError('Mask value out of range')
            this.size = e * 4 + 17
            for (var i = [], s = 0; s < this.size; s++) i.push(!1)
            for (var s = 0; s < this.size; s++) this.modules.push(i.slice()), this.isFunction.push(i.slice())
            this.drawFunctionPatterns()
            var f = this.addEccAndInterleave(r)
            if ((this.drawCodewords(f), n == -1))
                for (var v = 1e9, s = 0; s < 8; s++) {
                    this.applyMask(s), this.drawFormatBits(s)
                    var E = this.getPenaltyScore()
                    E < v && ((n = s), (v = E)), this.applyMask(s)
                }
            h(0 <= n && n <= 7), (this.mask = n), this.applyMask(n), this.drawFormatBits(n), (this.isFunction = [])
        }
        return (
            (o.encodeText = function (e, t) {
                var r = l.QrSegment.makeSegments(e)
                return o.encodeSegments(r, t)
            }),
            (o.encodeBinary = function (e, t) {
                var r = l.QrSegment.makeBytes(e)
                return o.encodeSegments([r], t)
            }),
            (o.encodeSegments = function (e, t, r, n, i, s) {
                if (
                    (r === void 0 && (r = 1),
                    n === void 0 && (n = 40),
                    i === void 0 && (i = -1),
                    s === void 0 && (s = !0),
                    !(o.MIN_VERSION <= r && r <= n && n <= o.MAX_VERSION) || i < -1 || i > 7)
                )
                    throw new RangeError('Invalid value')
                var f, v
                for (f = r; ; f++) {
                    var E = o.getNumDataCodewords(f, t) * 8,
                        w = d.getTotalBits(e, f)
                    if (w <= E) {
                        v = w
                        break
                    }
                    if (f >= n) throw new RangeError('Data too long')
                }
                for (var p = 0, _ = [o.Ecc.MEDIUM, o.Ecc.QUARTILE, o.Ecc.HIGH]; p < _.length; p++) {
                    var C = _[p]
                    s && v <= o.getNumDataCodewords(f, C) * 8 && (t = C)
                }
                for (var m = [], R = 0, y = e; R < y.length; R++) {
                    var A = y[R]
                    c(A.mode.modeBits, 4, m), c(A.numChars, A.mode.numCharCountBits(f), m)
                    for (var S = 0, F = A.getData(); S < F.length; S++) {
                        var Z = F[S]
                        m.push(Z)
                    }
                }
                h(m.length == v)
                var U = o.getNumDataCodewords(f, t) * 8
                h(m.length <= U), c(0, Math.min(4, U - m.length), m), c(0, (8 - (m.length % 8)) % 8, m), h(m.length % 8 == 0)
                for (var Y = 236; m.length < U; Y ^= 253) c(Y, 8, m)
                for (var T = []; T.length * 8 < m.length; ) T.push(0)
                return (
                    m.forEach(function (x, G) {
                        return (T[G >>> 3] |= x << (7 - (G & 7)))
                    }),
                    new o(f, t, T, i)
                )
            }),
            (o.prototype.getModule = function (e, t) {
                return 0 <= e && e < this.size && 0 <= t && t < this.size && this.modules[t][e]
            }),
            (o.prototype.getModules = function () {
                return this.modules
            }),
            (o.prototype.drawFunctionPatterns = function () {
                for (var e = 0; e < this.size; e++) this.setFunctionModule(6, e, e % 2 == 0), this.setFunctionModule(e, 6, e % 2 == 0)
                this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4)
                for (var t = this.getAlignmentPatternPositions(), r = t.length, e = 0; e < r; e++)
                    for (var n = 0; n < r; n++)
                        (e == 0 && n == 0) || (e == 0 && n == r - 1) || (e == r - 1 && n == 0) || this.drawAlignmentPattern(t[e], t[n])
                this.drawFormatBits(0), this.drawVersion()
            }),
            (o.prototype.drawFormatBits = function (e) {
                for (var t = (this.errorCorrectionLevel.formatBits << 3) | e, r = t, n = 0; n < 10; n++) r = (r << 1) ^ ((r >>> 9) * 1335)
                var i = ((t << 10) | r) ^ 21522
                h(i >>> 15 == 0)
                for (var n = 0; n <= 5; n++) this.setFunctionModule(8, n, a(i, n))
                this.setFunctionModule(8, 7, a(i, 6)), this.setFunctionModule(8, 8, a(i, 7)), this.setFunctionModule(7, 8, a(i, 8))
                for (var n = 9; n < 15; n++) this.setFunctionModule(14 - n, 8, a(i, n))
                for (var n = 0; n < 8; n++) this.setFunctionModule(this.size - 1 - n, 8, a(i, n))
                for (var n = 8; n < 15; n++) this.setFunctionModule(8, this.size - 15 + n, a(i, n))
                this.setFunctionModule(8, this.size - 8, !0)
            }),
            (o.prototype.drawVersion = function () {
                if (!(this.version < 7)) {
                    for (var e = this.version, t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973)
                    var r = (this.version << 12) | e
                    h(r >>> 18 == 0)
                    for (var t = 0; t < 18; t++) {
                        var n = a(r, t),
                            i = this.size - 11 + (t % 3),
                            s = Math.floor(t / 3)
                        this.setFunctionModule(i, s, n), this.setFunctionModule(s, i, n)
                    }
                }
            }),
            (o.prototype.drawFinderPattern = function (e, t) {
                for (var r = -4; r <= 4; r++)
                    for (var n = -4; n <= 4; n++) {
                        var i = Math.max(Math.abs(n), Math.abs(r)),
                            s = e + n,
                            f = t + r
                        0 <= s && s < this.size && 0 <= f && f < this.size && this.setFunctionModule(s, f, i != 2 && i != 4)
                    }
            }),
            (o.prototype.drawAlignmentPattern = function (e, t) {
                for (var r = -2; r <= 2; r++)
                    for (var n = -2; n <= 2; n++) this.setFunctionModule(e + n, t + r, Math.max(Math.abs(n), Math.abs(r)) != 1)
            }),
            (o.prototype.setFunctionModule = function (e, t, r) {
                ;(this.modules[t][e] = r), (this.isFunction[t][e] = !0)
            }),
            (o.prototype.addEccAndInterleave = function (e) {
                var t = this.version,
                    r = this.errorCorrectionLevel
                if (e.length != o.getNumDataCodewords(t, r)) throw new RangeError('Invalid argument')
                for (
                    var n = o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],
                        i = o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],
                        s = Math.floor(o.getNumRawDataModules(t) / 8),
                        f = n - (s % n),
                        v = Math.floor(s / n),
                        E = [],
                        w = o.reedSolomonComputeDivisor(i),
                        p = 0,
                        _ = 0;
                    p < n;
                    p++
                ) {
                    var C = e.slice(_, _ + v - i + (p < f ? 0 : 1))
                    _ += C.length
                    var m = o.reedSolomonComputeRemainder(C, w)
                    p < f && C.push(0), E.push(C.concat(m))
                }
                for (
                    var R = [],
                        y = function (A) {
                            E.forEach(function (S, F) {
                                ;(A != v - i || F >= f) && R.push(S[A])
                            })
                        },
                        p = 0;
                    p < E[0].length;
                    p++
                )
                    y(p)
                return h(R.length == s), R
            }),
            (o.prototype.drawCodewords = function (e) {
                if (e.length != Math.floor(o.getNumRawDataModules(this.version) / 8)) throw new RangeError('Invalid argument')
                for (var t = 0, r = this.size - 1; r >= 1; r -= 2) {
                    r == 6 && (r = 5)
                    for (var n = 0; n < this.size; n++)
                        for (var i = 0; i < 2; i++) {
                            var s = r - i,
                                f = ((r + 1) & 2) == 0,
                                v = f ? this.size - 1 - n : n
                            !this.isFunction[v][s] && t < e.length * 8 && ((this.modules[v][s] = a(e[t >>> 3], 7 - (t & 7))), t++)
                        }
                }
                h(t == e.length * 8)
            }),
            (o.prototype.applyMask = function (e) {
                if (e < 0 || e > 7) throw new RangeError('Mask value out of range')
                for (var t = 0; t < this.size; t++)
                    for (var r = 0; r < this.size; r++) {
                        var n = void 0
                        switch (e) {
                            case 0:
                                n = (r + t) % 2 == 0
                                break
                            case 1:
                                n = t % 2 == 0
                                break
                            case 2:
                                n = r % 3 == 0
                                break
                            case 3:
                                n = (r + t) % 3 == 0
                                break
                            case 4:
                                n = (Math.floor(r / 3) + Math.floor(t / 2)) % 2 == 0
                                break
                            case 5:
                                n = ((r * t) % 2) + ((r * t) % 3) == 0
                                break
                            case 6:
                                n = (((r * t) % 2) + ((r * t) % 3)) % 2 == 0
                                break
                            case 7:
                                n = (((r + t) % 2) + ((r * t) % 3)) % 2 == 0
                                break
                            default:
                                throw new Error('Unreachable')
                        }
                        !this.isFunction[t][r] && n && (this.modules[t][r] = !this.modules[t][r])
                    }
            }),
            (o.prototype.getPenaltyScore = function () {
                for (var e = 0, t = 0; t < this.size; t++) {
                    for (var r = !1, n = 0, i = [0, 0, 0, 0, 0, 0, 0], s = 0; s < this.size; s++)
                        this.modules[t][s] == r
                            ? (n++, n == 5 ? (e += o.PENALTY_N1) : n > 5 && e++)
                            : (this.finderPenaltyAddHistory(n, i),
                              r || (e += this.finderPenaltyCountPatterns(i) * o.PENALTY_N3),
                              (r = this.modules[t][s]),
                              (n = 1))
                    e += this.finderPenaltyTerminateAndCount(r, n, i) * o.PENALTY_N3
                }
                for (var s = 0; s < this.size; s++) {
                    for (var r = !1, f = 0, i = [0, 0, 0, 0, 0, 0, 0], t = 0; t < this.size; t++)
                        this.modules[t][s] == r
                            ? (f++, f == 5 ? (e += o.PENALTY_N1) : f > 5 && e++)
                            : (this.finderPenaltyAddHistory(f, i),
                              r || (e += this.finderPenaltyCountPatterns(i) * o.PENALTY_N3),
                              (r = this.modules[t][s]),
                              (f = 1))
                    e += this.finderPenaltyTerminateAndCount(r, f, i) * o.PENALTY_N3
                }
                for (var t = 0; t < this.size - 1; t++)
                    for (var s = 0; s < this.size - 1; s++) {
                        var v = this.modules[t][s]
                        v == this.modules[t][s + 1] && v == this.modules[t + 1][s] && v == this.modules[t + 1][s + 1] && (e += o.PENALTY_N2)
                    }
                for (var E = 0, w = 0, p = this.modules; w < p.length; w++) {
                    var _ = p[w]
                    E = _.reduce(function (R, y) {
                        return R + (y ? 1 : 0)
                    }, E)
                }
                var C = this.size * this.size,
                    m = Math.ceil(Math.abs(E * 20 - C * 10) / C) - 1
                return h(0 <= m && m <= 9), (e += m * o.PENALTY_N4), h(0 <= e && e <= 2568888), e
            }),
            (o.prototype.getAlignmentPatternPositions = function () {
                if (this.version == 1) return []
                for (
                    var e = Math.floor(this.version / 7) + 2,
                        t = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) * 2,
                        r = [6],
                        n = this.size - 7;
                    r.length < e;
                    n -= t
                )
                    r.splice(1, 0, n)
                return r
            }),
            (o.getNumRawDataModules = function (e) {
                if (e < o.MIN_VERSION || e > o.MAX_VERSION) throw new RangeError('Version number out of range')
                var t = (16 * e + 128) * e + 64
                if (e >= 2) {
                    var r = Math.floor(e / 7) + 2
                    ;(t -= (25 * r - 10) * r - 55), e >= 7 && (t -= 36)
                }
                return h(208 <= t && t <= 29648), t
            }),
            (o.getNumDataCodewords = function (e, t) {
                return (
                    Math.floor(o.getNumRawDataModules(e) / 8) - o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e] * o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]
                )
            }),
            (o.reedSolomonComputeDivisor = function (e) {
                if (e < 1 || e > 255) throw new RangeError('Degree out of range')
                for (var t = [], r = 0; r < e - 1; r++) t.push(0)
                t.push(1)
                for (var n = 1, r = 0; r < e; r++) {
                    for (var i = 0; i < t.length; i++) (t[i] = o.reedSolomonMultiply(t[i], n)), i + 1 < t.length && (t[i] ^= t[i + 1])
                    n = o.reedSolomonMultiply(n, 2)
                }
                return t
            }),
            (o.reedSolomonComputeRemainder = function (e, t) {
                for (
                    var r = t.map(function (v) {
                            return 0
                        }),
                        n = function (v) {
                            var E = v ^ r.shift()
                            r.push(0),
                                t.forEach(function (w, p) {
                                    return (r[p] ^= o.reedSolomonMultiply(w, E))
                                })
                        },
                        i = 0,
                        s = e;
                    i < s.length;
                    i++
                ) {
                    var f = s[i]
                    n(f)
                }
                return r
            }),
            (o.reedSolomonMultiply = function (e, t) {
                if (e >>> 8 || t >>> 8) throw new RangeError('Byte out of range')
                for (var r = 0, n = 7; n >= 0; n--) (r = (r << 1) ^ ((r >>> 7) * 285)), (r ^= ((t >>> n) & 1) * e)
                return h(r >>> 8 == 0), r
            }),
            (o.prototype.finderPenaltyCountPatterns = function (e) {
                var t = e[1]
                h(t <= this.size * 3)
                var r = t > 0 && e[2] == t && e[3] == t * 3 && e[4] == t && e[5] == t
                return (r && e[0] >= t * 4 && e[6] >= t ? 1 : 0) + (r && e[6] >= t * 4 && e[0] >= t ? 1 : 0)
            }),
            (o.prototype.finderPenaltyTerminateAndCount = function (e, t, r) {
                return (
                    e && (this.finderPenaltyAddHistory(t, r), (t = 0)),
                    (t += this.size),
                    this.finderPenaltyAddHistory(t, r),
                    this.finderPenaltyCountPatterns(r)
                )
            }),
            (o.prototype.finderPenaltyAddHistory = function (e, t) {
                t[0] == 0 && (e += this.size), t.pop(), t.unshift(e)
            }),
            (o.MIN_VERSION = 1),
            (o.MAX_VERSION = 40),
            (o.PENALTY_N1 = 3),
            (o.PENALTY_N2 = 3),
            (o.PENALTY_N3 = 40),
            (o.PENALTY_N4 = 10),
            (o.ECC_CODEWORDS_PER_BLOCK = [
                [
                    -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30,
                    30, 30, 30, 30, 30, 30, 30, 30,
                ],
                [
                    -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                    28, 28, 28, 28, 28, 28, 28, 28, 28,
                ],
                [
                    -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
                    30, 30, 30, 30, 30, 30, 30, 30, 30,
                ],
                [
                    -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                    30, 30, 30, 30, 30, 30, 30, 30, 30,
                ],
            ]),
            (o.NUM_ERROR_CORRECTION_BLOCKS = [
                [
                    -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21,
                    22, 24, 25,
                ],
                [
                    -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38,
                    40, 43, 45, 47, 49,
                ],
                [
                    -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
                    53, 56, 59, 62, 65, 68,
                ],
                [
                    -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60,
                    63, 66, 70, 74, 77, 81,
                ],
            ]),
            o
        )
    })()
    l.QrCode = u
    function c(o, e, t) {
        if (e < 0 || e > 31 || o >>> e) throw new RangeError('Value out of range')
        for (var r = e - 1; r >= 0; r--) t.push((o >>> r) & 1)
    }
    function a(o, e) {
        return ((o >>> e) & 1) != 0
    }
    function h(o) {
        if (!o) throw new Error('Assertion error')
    }
    var d = (function () {
        function o(e, t, r) {
            if (((this.mode = e), (this.numChars = t), (this.bitData = r), t < 0)) throw new RangeError('Invalid argument')
            this.bitData = r.slice()
        }
        return (
            (o.makeBytes = function (e) {
                for (var t = [], r = 0, n = e; r < n.length; r++) {
                    var i = n[r]
                    c(i, 8, t)
                }
                return new o(o.Mode.BYTE, e.length, t)
            }),
            (o.makeNumeric = function (e) {
                if (!o.isNumeric(e)) throw new RangeError('String contains non-numeric characters')
                for (var t = [], r = 0; r < e.length; ) {
                    var n = Math.min(e.length - r, 3)
                    c(parseInt(e.substring(r, r + n), 10), n * 3 + 1, t), (r += n)
                }
                return new o(o.Mode.NUMERIC, e.length, t)
            }),
            (o.makeAlphanumeric = function (e) {
                if (!o.isAlphanumeric(e)) throw new RangeError('String contains unencodable characters in alphanumeric mode')
                var t = [],
                    r
                for (r = 0; r + 2 <= e.length; r += 2) {
                    var n = o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)) * 45
                    ;(n += o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r + 1))), c(n, 11, t)
                }
                return r < e.length && c(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)), 6, t), new o(o.Mode.ALPHANUMERIC, e.length, t)
            }),
            (o.makeSegments = function (e) {
                return e == ''
                    ? []
                    : o.isNumeric(e)
                      ? [o.makeNumeric(e)]
                      : o.isAlphanumeric(e)
                        ? [o.makeAlphanumeric(e)]
                        : [o.makeBytes(o.toUtf8ByteArray(e))]
            }),
            (o.makeEci = function (e) {
                var t = []
                if (e < 0) throw new RangeError('ECI assignment value out of range')
                if (e < 128) c(e, 8, t)
                else if (e < 16384) c(2, 2, t), c(e, 14, t)
                else if (e < 1e6) c(6, 3, t), c(e, 21, t)
                else throw new RangeError('ECI assignment value out of range')
                return new o(o.Mode.ECI, 0, t)
            }),
            (o.isNumeric = function (e) {
                return o.NUMERIC_REGEX.test(e)
            }),
            (o.isAlphanumeric = function (e) {
                return o.ALPHANUMERIC_REGEX.test(e)
            }),
            (o.prototype.getData = function () {
                return this.bitData.slice()
            }),
            (o.getTotalBits = function (e, t) {
                for (var r = 0, n = 0, i = e; n < i.length; n++) {
                    var s = i[n],
                        f = s.mode.numCharCountBits(t)
                    if (s.numChars >= 1 << f) return 1 / 0
                    r += 4 + f + s.bitData.length
                }
                return r
            }),
            (o.toUtf8ByteArray = function (e) {
                e = encodeURI(e)
                for (var t = [], r = 0; r < e.length; r++)
                    e.charAt(r) != '%' ? t.push(e.charCodeAt(r)) : (t.push(parseInt(e.substring(r + 1, r + 3), 16)), (r += 2))
                return t
            }),
            (o.NUMERIC_REGEX = /^[0-9]*$/),
            (o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
            (o.ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
            o
        )
    })()
    l.QrSegment = d
})(N || (N = {}))
;(function (l) {
    ;(function (u) {
        var c = (function () {
            function a(h, d) {
                ;(this.ordinal = h), (this.formatBits = d)
            }
            return (a.LOW = new a(0, 1)), (a.MEDIUM = new a(1, 0)), (a.QUARTILE = new a(2, 3)), (a.HIGH = new a(3, 2)), a
        })()
        u.Ecc = c
    })(l.QrCode || (l.QrCode = {}))
})(N || (N = {}))
;(function (l) {
    ;(function (u) {
        var c = (function () {
            function a(h, d) {
                ;(this.modeBits = h), (this.numBitsCharCount = d)
            }
            return (
                (a.prototype.numCharCountBits = function (h) {
                    return this.numBitsCharCount[Math.floor((h + 7) / 17)]
                }),
                (a.NUMERIC = new a(1, [10, 12, 14])),
                (a.ALPHANUMERIC = new a(2, [9, 11, 13])),
                (a.BYTE = new a(4, [8, 16, 16])),
                (a.KANJI = new a(8, [8, 10, 12])),
                (a.ECI = new a(7, [0, 0, 0])),
                a
            )
        })()
        u.Mode = c
    })(l.QrSegment || (l.QrSegment = {}))
})(N || (N = {}))
var I = N,
    X = 'H',
    H = { L: I.QrCode.Ecc.LOW, M: I.QrCode.Ecc.MEDIUM, Q: I.QrCode.Ecc.QUARTILE, H: I.QrCode.Ecc.HIGH },
    ie = (function () {
        try {
            new Path2D().addPath(new Path2D())
        } catch {
            return !1
        }
        return !0
    })()
function q(l) {
    return l in H
}
function J(l, u) {
    u === void 0 && (u = 0)
    var c = []
    return (
        l.forEach(function (a, h) {
            var d = null
            a.forEach(function (o, e) {
                if (!o && d !== null) {
                    c.push(
                        'M'
                            .concat(d + u, ' ')
                            .concat(h + u, 'h')
                            .concat(e - d, 'v1H')
                            .concat(d + u, 'z')
                    ),
                        (d = null)
                    return
                }
                if (e === a.length - 1) {
                    if (!o) return
                    d === null
                        ? c.push(
                              'M'
                                  .concat(e + u, ',')
                                  .concat(h + u, ' h1v1H')
                                  .concat(e + u, 'z')
                          )
                        : c.push(
                              'M'
                                  .concat(d + u, ',')
                                  .concat(h + u, ' h')
                                  .concat(e + 1 - d, 'v1H')
                                  .concat(d + u, 'z')
                          )
                    return
                }
                o && d === null && (d = e)
            })
        }),
        c.join('')
    )
}
var V = {
        value: { type: String, required: !0, default: '' },
        size: { type: Number, default: 100 },
        level: {
            type: String,
            default: X,
            validator: function (l) {
                return q(l)
            },
        },
        background: { type: String, default: '#fff' },
        foreground: { type: String, default: '#000' },
        margin: { type: Number, required: !1, default: 0 },
    },
    se = k(k({}, V), {
        renderAs: {
            type: String,
            required: !1,
            default: 'canvas',
            validator: function (l) {
                return ['canvas', 'svg'].indexOf(l) > -1
            },
        },
    }),
    le = L({
        name: 'QRCodeSvg',
        props: V,
        setup: function (l) {
            var u = Q(0),
                c = Q(''),
                a = function () {
                    var h = l.value,
                        d = l.level,
                        o = l.margin,
                        e = I.QrCode.encodeText(h, H[d]).getModules()
                    ;(u.value = e.length + o * 2), (c.value = J(e, o))
                }
            return (
                a(),
                W(a),
                function () {
                    return O(
                        'svg',
                        {
                            width: l.size,
                            height: l.size,
                            'shape-rendering': 'crispEdges',
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 '.concat(u.value, ' ').concat(u.value),
                        },
                        [
                            O('path', { fill: l.background, d: 'M0,0 h'.concat(u.value, 'v').concat(u.value, 'H0z') }),
                            O('path', { fill: l.foreground, d: c.value }),
                        ]
                    )
                }
            )
        },
    }),
    ce = L({
        name: 'QRCodeCanvas',
        props: V,
        setup: function (l) {
            var u = Q(null),
                c = function () {
                    var a = l.value,
                        h = l.level,
                        d = l.size,
                        o = l.margin,
                        e = l.background,
                        t = l.foreground,
                        r = u.value
                    if (r) {
                        var n = r.getContext('2d')
                        if (n) {
                            var i = I.QrCode.encodeText(a, H[h]).getModules(),
                                s = i.length + o * 2,
                                f = window.devicePixelRatio || 1,
                                v = (d / s) * f
                            ;(r.height = r.width = d * f),
                                n.scale(v, v),
                                (n.fillStyle = e),
                                n.fillRect(0, 0, s, s),
                                (n.fillStyle = t),
                                ie
                                    ? n.fill(new Path2D(J(i, o)))
                                    : i.forEach(function (E, w) {
                                          E.forEach(function (p, _) {
                                              p && n.fillRect(_ + o, w + o, 1, 1)
                                          })
                                      })
                        }
                    }
                }
            return (
                j(c),
                W(c),
                function () {
                    return O('canvas', { ref: u, style: { width: ''.concat(l.size, 'px'), height: ''.concat(l.size, 'px') } })
                }
            )
        },
    }),
    ue = L({
        name: 'Qrcode',
        render: function () {
            var l = this.$props,
                u = l.renderAs,
                c = l.value,
                a = l.size,
                h = l.margin,
                d = l.level,
                o = l.background,
                e = l.foreground,
                t = a >>> 0,
                r = h >>> 0,
                n = q(d) ? d : X
            return O(u === 'svg' ? le : ce, { value: c, size: t, margin: r, level: n, background: o, foreground: e })
        },
        props: se,
    })
const fe = L({
        __name: 'pay',
        setup(l, { expose: u }) {
            u()
            const { t: c } = $.useI18n(),
                a = oe(),
                h = {
                    t: c,
                    baAccount: a,
                    QrcodeVue: ue,
                    get specificUserName() {
                        return re
                    },
                    get state() {
                        return ne
                    },
                }
            return Object.defineProperty(h, '__isScriptSetup', { enumerable: !1, value: !0 }), h
        },
    }),
    he = { class: 'header-box' },
    de = ['src'],
    ve = { class: 'pay-box' },
    me = { class: 'left' },
    pe = { class: 'order-info' },
    ge = { class: 'order-info-items' },
    Ee = { class: 'order-info-items' },
    we = { class: 'order-info-items' },
    _e = { class: 'order-info-items' },
    Ce = { class: 'rmb-symbol' },
    Me = { class: 'amount' },
    Re = { class: 'pay_qr' },
    Ae = ['srcdoc'],
    Ne = { key: 2, class: 'pay-success' },
    ye = { class: 'qr-tips-content' },
    Pe = { key: 0 },
    Ie = { key: 1 },
    Se = { class: 'right' },
    be = ['src']
function ze(l, u, c, a, h, d) {
    const o = D('Icon'),
        e = D('el-alert'),
        t = D('el-dialog')
    return (
        P(),
        b('div', null, [
            B(
                t,
                {
                    modelValue: a.state.dialog.pay,
                    'onUpdate:modelValue': u[0] || (u[0] = (r) => (a.state.dialog.pay = r)),
                    'close-on-press-escape': !1,
                    'close-on-click-modal': !1,
                    'destroy-on-close': !0,
                    class: 'pay-dialog',
                    top: '20vh',
                    width: '680px',
                },
                {
                    default: K(() => [
                        g('div', null, [
                            g('div', he, [
                                g(
                                    'img',
                                    {
                                        class: 'pay-logo',
                                        src:
                                            'https://buildadmin.com/static/images/' +
                                            (a.state.common.payType == 'wx' ? 'wechat-pay.png' : 'alipay.png'),
                                        alt: '',
                                    },
                                    null,
                                    8,
                                    de
                                ),
                            ]),
                            g('div', ve, [
                                g('div', me, [
                                    g('div', pe, [
                                        g('div', ge, M(a.t('module.Order title')) + '：' + M(a.state.payInfo.info.title), 1),
                                        g('div', Ee, M(a.t('module.Order No')) + '：' + M(a.state.payInfo.info.sn), 1),
                                        g('div', we, M(a.t('module.Purchase user')) + '：' + M(a.specificUserName(a.baAccount)), 1),
                                        g('div', _e, [
                                            g('span', null, M(a.t('module.Order price')) + '：', 1),
                                            g('span', Ce, [ee(' ￥'), g('span', Me, M(a.state.payInfo.info.amount), 1)]),
                                        ]),
                                    ]),
                                    g('div', Re, [
                                        a.state.common.payType == 'wx'
                                            ? (P(),
                                              te(
                                                  a.QrcodeVue,
                                                  { key: 0, value: a.state.payInfo.pay.code_url, size: 220, margin: 0, level: 'H' },
                                                  null,
                                                  8,
                                                  ['value']
                                              ))
                                            : z('v-if', !0),
                                        a.state.common.payType == 'zfb'
                                            ? (P(),
                                              b(
                                                  'iframe',
                                                  {
                                                      key: 1,
                                                      srcdoc: a.state.payInfo.pay.code_url,
                                                      frameborder: 'no',
                                                      border: '0',
                                                      marginwidth: '0',
                                                      marginheight: '0',
                                                      scrolling: 'no',
                                                      width: '220',
                                                      height: '220',
                                                      style: { overflow: 'hidden' },
                                                  },
                                                  null,
                                                  8,
                                                  Ae
                                              ))
                                            : z('v-if', !0),
                                        a.state.payInfo.pay.status == 'success'
                                            ? (P(), b('div', Ne, [B(o, { name: 'fa fa-check', color: 'var(--el-color-success)', size: '30' })]))
                                            : z('v-if', !0),
                                    ]),
                                    B(
                                        e,
                                        { class: 'qr-tips', closable: !1, type: 'success', center: '' },
                                        {
                                            default: K(() => [
                                                g('div', ye, [
                                                    B(
                                                        o,
                                                        {
                                                            color: 'var(--el-color-success)',
                                                            name: a.state.common.payType == 'wx' ? 'fa fa-wechat' : 'fa fa-buysellads',
                                                        },
                                                        null,
                                                        8,
                                                        ['name']
                                                    ),
                                                    a.state.common.payType == 'wx'
                                                        ? (P(), b('span', Pe, M(a.t('module.Use WeChat to scan QR code for payment')), 1))
                                                        : z('v-if', !0),
                                                    a.state.common.payType == 'zfb'
                                                        ? (P(), b('span', Ie, M(a.t('module.Use Alipay to scan QR code for payment')), 1))
                                                        : z('v-if', !0),
                                                ]),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                g('div', Se, [
                                    g(
                                        'img',
                                        {
                                            class: 'pay-logo',
                                            src:
                                                'https://buildadmin.com/static/images/screenshot-' +
                                                (a.state.common.payType == 'wx' ? 'wechat.png' : 'alipay.png'),
                                            alt: '',
                                        },
                                        null,
                                        8,
                                        be
                                    ),
                                ]),
                            ]),
                        ]),
                    ]),
                    _: 1,
                },
                8,
                ['modelValue']
            ),
        ])
    )
}
const ke = ae(fe, [
    ['render', ze],
    ['__scopeId', 'data-v-99acd2fc'],
    ['__file', '/Users/hukaisheng/data/wwwroot/personal/javaScript/build-frontend/src/views/backend/module/components/pay.vue'],
])
export { ke as default }
