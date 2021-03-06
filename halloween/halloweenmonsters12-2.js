(function () {
    var j = void 0,
        k = !0,
        m = null,
        n = !1,
        r, t = this,
        aa = function (a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b;
    },
        da = function (a) {
        return a[ba] || (a[ba] = ++ca);
    },
        ba = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        ca = 0,
        ea = function (a, b, c) {
        return a.call.apply(a.bind, arguments);
    },
        fa = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    },
        w = function (a, b, c) {
        w = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return w.apply(m, arguments);
    },
        ga = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.La = b.prototype;
        a.prototype = new c;
    };
    Function.prototype.bind = Function.prototype.bind ||
    function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return w.apply(m, c);
        }
        return w(this, a);
    };
    var ha = function (a, b) {
        this.oa = a;
        this.pa = b;
        this.k = m;
        this.Q = n;
        this.ia = [];
    };
    var ia = ["Moz", "ms", "O", "webkit"],
        ja;
    a: {
        for (var ka = ["requestAnimationFrame", "mozRequestAnimationFrame", "msRequestAnimationFrame", "oRequestAnimationFrame", "webkitRequestAnimationFrame"], la = 0; la < ka.length; la++) {
            var ma = window[ka[la]];
            if (ma) {
                ja = ma;
                break a
            }
        }
        ja = function (a) {
            window.setTimeout(a, 17)
        }
    }
    var na = w(ja, window);
    var x = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, x) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    ga(x, Error);
    x.prototype.name = "CustomError";
    var oa = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    },
        pa = function (a, b) {
        for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var h = d[g] || "",
                l = e[g] || "",
                p = RegExp("(\\d*)(\\D*)", "g"),
                u = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = p.exec(h) || ["", "", ""],
                    s = u.exec(l) || ["", "", ""];
                if (0 == q[0].length && 0 == s[0].length) break;
                c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? - 1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == s[2].length) ? - 1 : (0 == q[2].length) > (0 == s[2].length) ? 1 : 0) || (q[2] < s[2] ? - 1 : q[2] > s[2] ? 1 : 0)
            } while (0 == c)
        }
        return c
    };
    var qa = function (a, b) {
        b.unshift(a);
        x.call(this, oa.apply(m, b));
        b.shift()
    };
    ga(qa, x);
    qa.prototype.name = "AssertionError";
    var ra = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (b) var e = e + (": " + b),
                f = d;
            throw new qa("" + e, f || []);
        }
    };
    var sa = Array.prototype,
        va = sa.indexOf ?
    function (a, b, c) {
        ra(a.length != m);
        return sa.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? - 1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    var y, wa, xa, ya, za = function () {
        return t.navigator ? t.navigator.userAgent : m
    };
    ya = xa = wa = y = n;
    var Aa;
    if (Aa = za()) {
        var Ba = t.navigator;
        y = 0 == Aa.indexOf("Opera");
        wa = !y && - 1 != Aa.indexOf("MSIE");
        xa = !y && - 1 != Aa.indexOf("WebKit");
        ya = !y && !xa && "Gecko" == Ba.product
    }
    var Ca = y,
        z = wa,
        A = ya,
        Da = xa,
        Ea = function () {
        var a = t.document;
        return a ? a.documentMode : j
    },
        Fa;
    a: {
        var Ga = "",
            Ha;
        if (Ca && t.opera) var Ia = t.opera.version,
            Ga = "function" == typeof Ia ? Ia() : Ia;
        else if (A ? Ha = /rv\:([^\);]+)(\)|;)/ : z ? Ha = /MSIE\s+([^\);]+)(\)|;)/ : Da && (Ha = /WebKit\/(\S+)/), Ha) var Ja = Ha.exec(za()),
            Ga = Ja ? Ja[1] : "";
        if (z) {
            var Ka = Ea();
            if (Ka > parseFloat(Ga)) {
                Fa = String(Ka);
                break a
            }
        }
        Fa = Ga
    }
    var La = Fa,
        Ma = {},
        B = function (a) {
        return Ma[a] || (Ma[a] = 0 <= pa(La, a))
    },
        Na = t.document,
        Oa = !Na || !z ? j : Ea() || ("CSS1Compat" == Na.compatMode ? parseInt(La, 10) : 5);
    !A && !z || z && z && 9 <= Oa || A && B("1.9.1");
    z && B("9");
    var C, D, Pa, Qa, Ra, Sa, Ta, Ua, E, Va;
    var Xa = function (a, b, c, d) {
        this.k = a;
        this.ua = b;
        this.p = c;
        this.O = c.slice();
        this.va = d;
        this.I = [1, 1];
        Wa(this)
    };
    r = Xa.prototype;
    r.h = function () {
        this.k.style.display = "none"
    };
    r.show = function () {
        this.k.style.display = "block"
    };
    r.opacity = function (a) {
        var b = this.k.style;
        "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")")
    };
    r.scale = function (a, b) {
        this.I = [a, b];
        Wa(this)
    };
    r.moveTo = function (a, b) {
        this.p = [a, b];
        Wa(this)
    };
    var Wa = function (a) {
        var b = a.k.style;
        b.left = a.p[0] - a.ua[0] * a.I[0] + "px";
        b.top = a.p[1] - a.ua[1] * a.I[1] + "px";
        b.width = a.va[0] * a.I[0] + "px";
        b.height = a.va[1] * a.I[1] + "px"
    },
        G = function () {
        this.a = [];
        this.fa = [];
        this.U = [];
        this.T = [];
        this.ea = []
    },
        H = function (a, b, c, d, e, f) {
        a.a.push(b);
        a.T.push(c);
        a.fa.push(d);
        a.U.push(e);
        a.ea.push(f);
        return a
    };
    G.prototype.show = function () {
        for (var a = 0; a < this.a.length; a++) {
            var b = this.a[a];
            this.U[a] != m && b.scale(this.U[a][0], this.U[a][1]);
            this.fa[a] != m && b.opacity(this.fa[a]);
            if (this.T[a] != m) {
                var c = b;
                c.p = [c.O[0] + this.T[a][0], c.O[1] + this.T[a][1]];
                Wa(c)
            }
            if (this.ea[a] != m) {
                var c = b.k,
                    d = this.ea[a],
                    e = "";
                d && (e += " rotate(" + d + "rad)");
                for (var d = 0, f = j; f = ia[d++];) c.style[f + "Transform"] = e
            }
            b.show()
        }
    };
    G.prototype.h = function () {
        for (var a = 0; a < this.a.length; a++) this.a[a].h()
    };
    var I = function (a, b, c) {
        this.g = b;
        this.N = a;
        this.end = this;
        this.Z = this.$ = this.aa = this.J = m;
        this.qa = c
    };
    I.prototype.frames = function () {
        return this.g.slice()
    };
    var Ya = function (a, b, c) {
        this.N = a;
        this.g = [];
        this.ha = c;
        this.ba = n;
        this.da = [];
        this.ca = m;
        J(this, b)
    },
        K = function (a, b) {
        J(a, a.ha[b])
    },
        J = function (a, b) {
        a.ca = b;
        Za(a)
    },
        Za = function (a) {
        var b = a.ca;
        if (b == m) return k;
        var c;
        a: {
            for (c = 0; c < b.qa.length; c++) if (!b.qa[c].Q) {
                c = n;
                break a
            }
            c = k
        }
        if (!c) return n;
        a.ca = m;
        a.g.length && a.g[0].h();
        c = a.d;
        a.d = b;
        a.g = b.frames();
        a.g.length && a.g[0].show();
        if (c != b) for (c = 0; c < a.da.length; c++) a.da[c](a.N, b.N);
        return k
    },
        L = function (a, b) {
        a.da.push(b)
    };
    Ya.prototype.click = function (a) {
        this.d && ("mousedown" == a ? (this.ba = k, this.d.J && J(this, this.d.J)) : "mouseup" == a ? this.ba = n : "mouseover" == a && this.d.$ ? J(this, this.d.$) : "mouseout" == a && this.d.Z && J(this, this.d.Z))
    };
    var M = {
        animations: [{
            initialState: "idle",
            name: "spider",
            states: {
                hold: {
                    end: "hold",
                    frames: [[{
                        ID: "0:42"}]],
                    up: "release"
                },
                idle: {
                    down: "pull",
                    end: "idle",
                    frames: [[{
                        ID: "0:36"}]]
                },
                pull: {
                    end: "hold",
                    frames: [[{
                        ID: "0:40"}], [{
                        ID: "0:41"}], [{
                        ID: "0:42"}]]
                },
                release: {
                    end: "idle",
                    frames: [[{
                        ID: "0:43"}], [{
                        ID: "0:44"}], [{
                        ID: "0:45"}], [{
                        ID: "0:46"}], [{
                        ID: "0:47"}], [{
                        ID: "0:37"}], [{
                        ID: "0:38"}], [{
                        ID: "0:39"}]]
                }
            }},{
            initialState: "idle",
            name: "skeleton",
            states: {
                dance1: {
                    end: "idle",
                    frames: [[{
                        ID: "1:0"}], [{
                        ID: "1:3"}], [{
                        ID: "1:4"}], [{
                        ID: "1:5"}], [{
                        ID: "1:6"}], [{
                        ID: "1:7"}], [{
                        ID: "1:8"}], [{
                        ID: "1:9"}], [{
                        ID: "1:10"}], [{
                        ID: "1:1"}], [{
                        ID: "1:2"}], [{
                        ID: "1:13"}], [{
                        ID: "1:14"}], [{
                        ID: "1:15"}], [{
                        ID: "1:16"}], [{
                        ID: "1:17"}], [{
                        ID: "1:18"}], [{
                        ID: "1:13"}], [{
                        ID: "1:14"}], [{
                        ID: "1:15"}], [{
                        ID: "1:16"}], [{
                        ID: "1:17"}], [{
                        ID: "1:18"}], [{
                        ID: "1:13"}], [{
                        ID: "1:14"}], [{
                        ID: "1:15"}], [{
                        ID: "1:16"}], [{
                        ID: "1:17"}], [{
                        ID: "1:18"}], [{
                        ID: "1:13"}], [{
                        ID: "1:14"}], [{
                        ID: "1:15"}], [{
                        ID: "1:16"}], [{
                        ID: "1:17"}], [{
                        ID: "1:18"}], [{
                        ID: "1:11"}], [{
                        ID: "1:12"}]]
                },
                dance2: {
                    end: "idle",
                    frames: [[{
                        ID: "3:106"}], [{
                        ID: "3:107"}], [{
                        ID: "3:108"}], [{
                        ID: "3:109"}], [{
                        ID: "3:127"}], [{
                        ID: "3:133"}], [{
                        ID: "3:134"}], [{
                        ID: "3:135"}], [{
                        ID: "3:136"}], [{
                        ID: "3:137"}], [{
                        ID: "3:138"}], [{
                        ID: "3:139"}], [{
                        ID: "3:140"}], [{
                        ID: "3:128"}], [{
                        ID: "3:129"}], [{
                        ID: "3:130"}], [{
                        ID: "3:131"}], [{
                        ID: "3:132"}], [{
                        ID: "3:127"}], [{
                        ID: "3:133"}], [{
                        ID: "3:134"}], [{
                        ID: "3:135"}], [{
                        ID: "3:136"}], [{
                        ID: "3:137"}], [{
                        ID: "3:138"}], [{
                        ID: "3:139"}], [{
                        ID: "3:140"}], [{
                        ID: "3:128"}], [{
                        ID: "3:129"}], [{
                        ID: "3:130"}], [{
                        ID: "3:131"}], [{
                        ID: "3:132"}], [{
                        ID: "3:117"}], [{
                        ID: "3:118"}], [{
                        ID: "3:119"}], [{
                        ID: "3:120"}], [{
                        ID: "3:121"}], [{
                        ID: "3:122"}], [{
                        ID: "3:123"}], [{
                        ID: "3:124"}]]
                },
                dance3: {
                    end: "idle",
                    frames: [[{
                        ID: "3:141"}], [{
                        ID: "3:141"}], [{
                        ID: "3:142"}], [{
                        ID: "3:142"}], [{
                        ID: "3:143"}], [{
                        ID: "3:143"}], [{
                        ID: "3:144"}], [{
                        ID: "3:144"}], [{
                        ID: "3:145"}], [{
                        ID: "3:145"}], [{
                        ID: "3:146"}], [{
                        ID: "3:146"}], [{
                        ID: "3:147"}], [{
                        ID: "3:147"}], [{
                        ID: "3:148"}], [{
                        ID: "3:148"}], [{
                        ID: "3:149"}], [{
                        ID: "3:149"}], [{
                        ID: "3:150"}], [{
                        ID: "3:150"}]]
                },
                dance4: {
                    end: "idle",
                    frames: [[{
                        ID: "3:110"}], [{
                        ID: "3:111"}], [{
                        ID: "3:112"}], [{
                        ID: "3:113"}], [{
                        ID: "3:114"}], [{
                        ID: "3:115"}], [{
                        ID: "3:116"}], [{
                        ID: "3:151"}], [{
                        ID: "3:152"}], [{
                        ID: "3:153"}], [{
                        ID: "3:154"}], [{
                        ID: "3:155"}], [{
                        ID: "3:156"}], [{
                        ID: "3:157"}], [{
                        ID: "3:158"}], [{
                        ID: "3:151"}], [{
                        ID: "3:152"}], [{
                        ID: "3:153"}], [{
                        ID: "3:154"}], [{
                        ID: "3:155"}], [{
                        ID: "3:156"}], [{
                        ID: "3:157"}], [{
                        ID: "3:158"}], [{
                        ID: "3:151"}], [{
                        ID: "3:152"}], [{
                        ID: "3:153"}], [{
                        ID: "3:154"}], [{
                        ID: "3:155"}], [{
                        ID: "3:156"}], [{
                        ID: "3:157"}], [{
                        ID: "3:158"}], [{
                        ID: "3:125"}], [{
                        ID: "3:126"}]]
                },
                idle: {
                    down: "dance1",
                    end: "idle",
                    frames: [[{
                        ID: "1:35"}]]
                },
                point: {
                    down: "dance1",
                    end: "idle",
                    frames: [[{
                        ID: "1:19"}], [{
                        ID: "1:27"}], [{
                        ID: "1:28"}], [{
                        ID: "1:29"}], [{
                        ID: "1:30"}], [{
                        ID: "1:31"}], [{
                        ID: "1:32"}], [{
                        ID: "1:33"}], [{
                        ID: "1:34"}], [{
                        ID: "1:20"}], [{
                        ID: "1:21"}], [{
                        ID: "1:22"}], [{
                        ID: "1:23"}], [{
                        ID: "1:24"}], [{
                        ID: "1:25"}], [{
                        ID: "1:26"}]]
                }
            }},{
            initialState: "door",
            name: "Big G",
            states: {
                door: {
                    down: "openDoor",
                    end: "door",
                    frames: [[{
                        ID: "0:9"}]],
                    over: "shake"
                },
                entry: {
                    end: "idle",
                    frames: [[{
                        ID: "3:1"}], [{
                        ID: "3:2"}], [{
                        ID: "3:3"}], [{
                        ID: "3:4"}], [{
                        ID: "3:5"}], [{
                        ID: "3:6"}], [{
                        ID: "3:7"}], [{
                        ID: "3:8"}], [{
                        ID: "3:9"}]]
                },
                exit: {
                    end: "entry",
                    frames: [[{
                        ID: "3:10"}], [{
                        ID: "3:11"}], [{
                        ID: "3:12"}], []]
                },
                idle: {
                    down: "squash",
                    end: "idle",
                    frames: [[{
                        ID: "3:13"}], [{
                        ID: "3:13"}], [{
                        ID: "3:13"}], [{
                        ID: "3:13"}], [{
                        ID: "3:14"}], [{
                        ID: "3:14"}], [{
                        ID: "3:15"}], [{
                        ID: "3:15"}], [{
                        ID: "3:15"}], [{
                        ID: "3:15"}], [{
                        ID: "3:14"}], [{
                        ID: "3:14"}]]
                },
                openDoor: {
                    end: "entry",
                    frames: [[{
                        ID: "0:10"}], [{
                        ID: "0:11"}], [{
                        ID: "0:12"}], [{
                        ID: "0:13"}], [{
                        ID: "0:14"}], [], [], [], [], []]
                },
                shake: {
                    down: "openDoor",
                    end: "shake",
                    frames: [[{
                        ID: "0:15"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:15"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:15"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}], [{
                        ID: "0:9"}]],
                    out: "door"
                },
                squash: {
                    end: "squash",
                    frames: [[{
                        ID: "3:0"}]],
                    up: "exit"
                }
            }},{
            initialState: "door",
            name: "Both Os",
            states: {
                blinkAll: {
                    end: "stare",
                    frames: [[{
                        ID: "3:102"},{
                        ID: "3:103"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:103"},{
                        ID: "3:160"},{
                        ID: "3:161"}], [{
                        ID: "3:102"},{
                        ID: "3:103"},{
                        ID: "3:160"},{
                        ID: "3:161"}], [{
                        ID: "3:102"},{
                        ID: "3:103"},{
                        ID: "3:160"},{
                        ID: "3:161"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:161"}]]
                },
                door: {
                    down: "openDoor",
                    end: "door",
                    frames: [[{
                        ID: "2:0"}]],
                    over: "shake"
                },
                fadeIn: {
                    end: "stare",
                    frames: [[{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 1}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.9}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.8}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.7}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.6}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.5}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.4}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.3}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.2}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0.1}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"},{
                        ID: "0:2",
                        opacity: 0}]]
                },
                openDoor: {
                    end: "fadeIn",
                    frames: [[{
                        ID: "2:1"}], [{
                        ID: "2:2"}], [{
                        ID: "2:3"}], [{
                        ID: "2:4"}], [{
                        ID: "2:5"}]]
                },
                shake: {
                    down: "openDoor",
                    end: "shake",
                    frames: [[{
                        ID: "2:6"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:6"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:6"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}], [{
                        ID: "2:0"}]],
                    out: "door"
                },
                stare: {
                    down: "blinkAll",
                    end: "blinkAll",
                    frames: [[{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}], [{
                        ID: "3:102"},{
                        ID: "3:104"},{
                        ID: "3:105"},{
                        ID: "3:160"},{
                        ID: "3:162"},{
                        ID: "3:163"}]]
                }
            }},{
            initialState: "door",
            name: "Little g",
            states: {
                click: {
                    end: "click",
                    frames: [[{
                        ID: "3:36"}]],
                    up: "exit"
                },
                door: {
                    down: "openDoor",
                    end: "door",
                    frames: [[{
                        ID: "0:16"}]],
                    over: "shake"
                },
                entry: {
                    end: "idle",
                    frames: [[{
                        ID: "3:44"}], [{
                        ID: "3:45"}], [{
                        ID: "3:46"}], [{
                        ID: "3:47"}], [{
                        ID: "3:48"}], [{
                        ID: "3:49"}], [{
                        ID: "3:50"}], [{
                        ID: "3:51"}]]
                },
                exit: {
                    end: "entry",
                    frames: [[{
                        ID: "3:37"}], [{
                        ID: "3:38"}], [{
                        ID: "3:39"}], [{
                        ID: "3:40"}], [{
                        ID: "3:41"}], [{
                        ID: "3:42"}], [{
                        ID: "3:43"}], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                },
                idle: {
                    down: "click",
                    end: "idle",
                    frames: [[{
                        ID: "3:52"}], [{
                        ID: "3:52"}], [{
                        ID: "3:52"}], [{
                        ID: "3:52"}], [{
                        ID: "3:52"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}], [{
                        ID: "3:54"}], [{
                        ID: "3:54"}], [{
                        ID: "3:54"}], [{
                        ID: "3:54"}], [{
                        ID: "3:54"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}], [{
                        ID: "3:53"}]]
                },
                openDoor: {
                    end: "entry",
                    frames: [[{
                        ID: "0:17"}], [{
                        ID: "0:18"}], [{
                        ID: "0:19"}], [{
                        ID: "0:20"}], [{
                        ID: "0:21"}]]
                },
                shake: {
                    down: "openDoor",
                    end: "shake",
                    frames: [[{
                        ID: "0:22"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:22"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:22"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}], [{
                        ID: "0:16"}]],
                    out: "door"
                }
            }},{
            initialState: "dark",
            name: "L",
            states: {
                appear: {
                    end: "idle",
                    frames: [[{
                        ID: "0:35",
                        opacity: 0.05}], [{
                        ID: "0:35",
                        opacity: 0.1}], [{
                        ID: "0:35",
                        opacity: 0.15}], [{
                        ID: "0:35",
                        opacity: 0.2}], [{
                        ID: "0:35",
                        opacity: 0.25}], [{
                        ID: "0:35",
                        opacity: 0.3}], [{
                        ID: "0:35",
                        opacity: 0.35}], [{
                        ID: "0:35",
                        opacity: 0.4}], [{
                        ID: "0:35",
                        opacity: 0.45}], [{
                        ID: "0:35",
                        opacity: 0.5}], [{
                        ID: "0:35",
                        opacity: 0.55}], [{
                        ID: "0:35",
                        opacity: 0.6}], [{
                        ID: "0:35",
                        opacity: 0.65}], [{
                        ID: "0:35",
                        opacity: 0.7}], [{
                        ID: "0:35",
                        opacity: 0.75}], [{
                        ID: "0:35",
                        opacity: 0.8}], [{
                        ID: "0:35",
                        opacity: 0.85}], [{
                        ID: "0:35",
                        opacity: 0.9}], [{
                        ID: "0:35",
                        opacity: 0.95}], [{
                        ID: "0:35",
                        opacity: 1}]]
                },
                dark: {
                    down: "appear",
                    end: "dark",
                    frames: []
                },
                disappear: {
                    end: "dark",
                    frames: [[{
                        ID: "0:35",
                        opacity: 0.95}], [{
                        ID: "0:35",
                        opacity: 0.9}], [{
                        ID: "0:35",
                        opacity: 0.85}], [{
                        ID: "0:35",
                        opacity: 0.8}], [{
                        ID: "0:35",
                        opacity: 0.75}], [{
                        ID: "0:35",
                        opacity: 0.7}], [{
                        ID: "0:35",
                        opacity: 0.65}], [{
                        ID: "0:35",
                        opacity: 0.6}], [{
                        ID: "0:35",
                        opacity: 0.55}], [{
                        ID: "0:35",
                        opacity: 0.5}], [{
                        ID: "0:35",
                        opacity: 0.45}], [{
                        ID: "0:35",
                        opacity: 0.4}], [{
                        ID: "0:35",
                        opacity: 0.35}], [{
                        ID: "0:35",
                        opacity: 0.3}], [{
                        ID: "0:35",
                        opacity: 0.25}], [{
                        ID: "0:35",
                        opacity: 0.2}], [{
                        ID: "0:35",
                        opacity: 0.15}], [{
                        ID: "0:35",
                        opacity: 0.1}], [{
                        ID: "0:35",
                        opacity: 0.05}], [{
                        ID: "0:35",
                        opacity: 0}]]
                },
                idle: {
                    down: "disappear",
                    end: "idle",
                    frames: [[{
                        ID: "0:35"}]]
                }
            }},
                        {
            initialState: "door",
            name: "E",
            states: {
                chomp: {
                    end: "idle",
                    frames: [[{
                        ID: "3:20"}], [{
                        ID: "3:21"}], [{
                        ID: "3:22"}], [{
                        ID: "3:23"}], [{
                        ID: "3:24"}]]
                },
                door: {
                    down: "openDoor",
                    end: "door",
                    frames: [[{
                        ID: "0:23"}]],
                    over: "shake"
                },
                hold: {
                    end: "hold",
                    frames: [[{
                        ID: "3:19"}]],
                    up: "chomp"
                },
                idle: {
                    down: "squeeze",
                    end: "idle",
                    frames: [[{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:34"}], [{
                        ID: "3:35"}], [{
                        ID: "3:35"}], [{
                        ID: "3:35"}], [{
                        ID: "3:35"}]]
                },
                openDoor: {
                    end: "smile",
                    frames: [[{
                        ID: "0:30"},{
                        ID: "0:24"}], [{
                        ID: "0:30"},{
                        ID: "0:25"}], [{
                        ID: "0:30"},{
                        ID: "0:26"}], [{
                        ID: "0:30"},{
                        ID: "0:27"}], [{
                        ID: "0:30"},{
                        ID: "0:28"}]]
                },
                shake: {
                    down: "openDoor",
                    end: "shake",
                    frames: [[{
                        ID: "0:29"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:29"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:29"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}], [{
                        ID: "0:23"}]],
                    out: "door"
                },
                smile: {
                    end: "idle",
                    frames: [[{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "0:30"}], [{
                        ID: "3:26"}], [{
                        ID: "3:27"}], [{
                        ID: "3:28"}], [{
                        ID: "3:29"}], [{
                        ID: "3:30"}], [{
                        ID: "3:31"}], [{
                        ID: "3:32"}], [{
                        ID: "3:33"}], [{
                        ID: "3:25"}]]
                },
                squeeze: {
                    end: "hold",
                    frames: [[{
                        ID: "3:16"}], [{
                        ID: "3:17"}], [{
                        ID: "3:18"}], [{
                        ID: "3:19"}], [{
                        ID: "3:19"}], [{
                        ID: "3:19"}], [{
                        ID: "3:19"}], [{
                        ID: "3:19"}]]
                }
            }},{
            initialState: "down",
            name: "cat",
            states: {
                down: {
                    down: "peek",
                    end: "down",
                    frames: [[{
                        ID: "0:32",
                        offset: [1, 16]},{
                        ID: "0:33",
                        offset: [1, 16]}]]
                },
                gone: {
                    end: "gone",
                    frames: []
                },
                meow: {
                    down: "run1",
                    end: "up",
                    frames: [[{
                        ID: "3:96"}], [{
                        ID: "3:97"}], [{
                        ID: "3:98"}], [{
                        ID: "3:99"}], [{
                        ID: "3:100"}], [{
                        ID: "3:101"}]]
                },
                peek: {
                    end: "down",
                    frames: [[{
                        ID: "0:32",
                        offset: [1, 15]},{
                        ID: "0:33",
                        offset: [1, 15]}], [{
                        ID: "0:32",
                        offset: [1, 14]},{
                        ID: "0:33",
                        offset: [1, 14]}], [{
                        ID: "0:32",
                        offset: [1, 13]},{
                        ID: "0:33",
                        offset: [1, 13]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 13]},{
                        ID: "0:33",
                        offset: [1, 13]}], [{
                        ID: "0:32",
                        offset: [1, 14]},{
                        ID: "0:33",
                        offset: [1, 14]}], [{
                        ID: "0:32",
                        offset: [1, 15]},{
                        ID: "0:33",
                        offset: [1, 15]}]]
                },
                riseUp: {
                    end: "up",
                    frames: [[{
                        ID: "0:32",
                        offset: [1, 16]},{
                        ID: "0:33",
                        offset: [1, 16]}], [{
                        ID: "0:32",
                        offset: [1, 14]},{
                        ID: "0:33",
                        offset: [1, 14]}], [{
                        ID: "0:32",
                        offset: [1, 12]},{
                        ID: "0:33",
                        offset: [1, 12]}], [{
                        ID: "0:32",
                        offset: [1, 10]},{
                        ID: "0:33",
                        offset: [1, 10]}], [{
                        ID: "0:32",
                        offset: [1, 8]},{
                        ID: "0:33",
                        offset: [1, 8]}], [{
                        ID: "0:32",
                        offset: [1, 6]},{
                        ID: "0:33",
                        offset: [1, 6]}], [{
                        ID: "0:32",
                        offset: [1, 4]},{
                        ID: "0:33",
                        offset: [1, 4]}], [{
                        ID: "0:32",
                        offset: [1, 2]},{
                        ID: "0:33",
                        offset: [1, 2]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}]]
                },
                run1: {
                    end: "run2",
                    frames: [[{
                        ID: "0:32"},{
                        ID: "0:33"}], [{
                        ID: "3:65"},{
                        ID: "3:88"}], [{
                        ID: "3:76"},{
                        ID: "3:89"}], [{
                        ID: "3:81"},{
                        ID: "3:90"}], [{
                        ID: "3:82"},{
                        ID: "3:91"}], [{
                        ID: "3:83"},{
                        ID: "3:92"}], [{
                        ID: "3:84"},{
                        ID: "3:93"}], [{
                        ID: "3:85"},{
                        ID: "3:94"}], [{
                        ID: "3:86"},{
                        ID: "3:95"}], [{
                        ID: "3:55"},{
                        ID: "3:87"}], [{
                        ID: "3:56"},{
                        ID: "3:87"}], [{
                        ID: "3:57"},{
                        ID: "3:87"}]]
                },
                run2: {
                    end: "run3",
                    frames: [[{
                        ID: "3:58"},{
                        ID: "3:87"}], [{
                        ID: "3:59"},{
                        ID: "3:87"}], [{
                        ID: "3:60"},{
                        ID: "3:87"}], [{
                        ID: "3:61"},{
                        ID: "3:87"}], [{
                        ID: "3:62"},{
                        ID: "3:87"}], [{
                        ID: "3:63"},{
                        ID: "3:87"}]]
                },
                run3: {
                    end: "run4",
                    frames: [[{
                        ID: "3:64"},{
                        ID: "3:87"}], [{
                        ID: "3:66"},{
                        ID: "3:87"}], [{
                        ID: "3:67"},{
                        ID: "3:87"}], [{
                        ID: "3:68"},{
                        ID: "3:87"}], [{
                        ID: "3:69"},{
                        ID: "3:87"}]]
                },
                run4: {
                    end: "run5",
                    frames: [[{
                        ID: "3:70"},{
                        ID: "3:87"}], [{
                        ID: "3:71"},{
                        ID: "3:87"}], [{
                        ID: "3:72"},{
                        ID: "3:87"}], [{
                        ID: "3:73"},{
                        ID: "3:87"}], [{
                        ID: "3:74"},{
                        ID: "3:87"}], [{
                        ID: "3:75"},{
                        ID: "3:87"}], [{
                        ID: "3:77"},{
                        ID: "3:87"}], [{
                        ID: "3:78"},{
                        ID: "3:87"}], [{
                        ID: "3:79"},{
                        ID: "3:87"}]]
                },
                run5: {
                    end: "gone",
                    frames: [[{
                        ID: "3:80"},{
                        ID: "3:87"}]]
                },
                up: {
                    down: "run1",
                    end: "meow",
                    frames: [[{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}], [{
                        ID: "0:32",
                        offset: [1, 0]},{
                        ID: "0:33",
                        offset: [1, 0]}]]
                }
            }},{
            initialState: "on",
            name: "sound",
            states: {
                off: {
                    down: "spin_on",
                    end: "off",
                    frames: [[{
                        ID: "2:27"}]],
                    over: "off_hover"
                },
                off_hover: {
                    down: "spin_on",
                    end: "off_hover",
                    frames: [[{
                        ID: "2:28"}]],
                    out: "off"
                },
                on: {
                    down: "spin_off",
                    end: "on",
                    frames: [[{
                        ID: "2:29"}]],
                    over: "on_hover"
                },
                on_hover: {
                    down: "spin_off",
                    end: "on_hover",
                    frames: [[{
                        ID: "2:30"}]],
                    out: "on"
                },
                spin_off: {
                    end: "off",
                    frames: [[{
                        ID: "2:26"}], [{
                        ID: "2:25"}], [{
                        ID: "2:24"}], [{
                        ID: "2:23"}], [{
                        ID: "2:22"}], [{
                        ID: "2:21"}], [{
                        ID: "2:20"}]]
                },
                spin_on: {
                    end: "on",
                    frames: [[{
                        ID: "2:20"}], [{
                        ID: "2:21"}], [{
                        ID: "2:22"}], [{
                        ID: "2:23"}], [{
                        ID: "2:24"}], [{
                        ID: "2:25"}], [{
                        ID: "2:26"}]]
                }
            }}],
        clickAreas: [{
            animation: "spider",
            name: "spider",
            x1: 416,
            x2: 478,
            y1: 0,
            y2: 61},{
            animation: "skeleton",
            name: "skeleton",
            x1: 354,
            x2: 386,
            y1: 39,
            y2: 120},{
            animation: "Big G",
            name: "Big G",
            x1: 83,
            x2: 161,
            y1: 42,
            y2: 152},{
            animation: "Both Os",
            name: "Both Os",
            x1: 177,
            x2: 263,
            y1: 12,
            y2: 153},{
            animation: "Little g",
            name: "Little g",
            x1: 277,
            x2: 363,
            y1: 32,
            y2: 168},{
            animation: "L",
            name: "L",
            x1: 367,
            x2: 463,
            y1: 32,
            y2: 168},{
            animation: "E",
            name: "E",
            x1: 467,
            x2: 563,
            y1: 32,
            y2: 168},{
            animation: "cat",
            name: "cat",
            x1: 15,
            x2: 80,
            y1: 135,
            y2: 220},
                        {
            animation: "sound",
            name: "sound",
            x1: 607,
            x2: 676,
            y1: 168,
            y2: 220},{
            animation: "cat",
            name: "cat",
            x1: 15,
            x2: 80,
            y1: 135,
            y2: 220}],
        images: [{
            ID: "0:31",
            anchor: [0, 0],
            dimensions: [46, 51],
            position: [29, 154]},{
            ID: "3:80",
            anchor: [0, 0],
            dimensions: [30, 19],
            position: [616, 188]},{
            ID: "3:79",
            anchor: [0, 0],
            dimensions: [56, 21],
            position: [590, 190]},{
            ID: "3:78",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [572, 194]},{
            ID: "3:77",
            anchor: [0, 0],
            dimensions: [52, 27],
            position: [548, 188]},{
            ID: "3:75",
            anchor: [0, 0],
            dimensions: [58, 21],
            position: [522, 190]},
                        {
            ID: "3:74",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [504, 194]},{
            ID: "3:73",
            anchor: [0, 0],
            dimensions: [53, 27],
            position: [479, 188]},{
            ID: "3:72",
            anchor: [0, 0],
            dimensions: [59, 21],
            position: [453, 190]},{
            ID: "3:71",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [435, 194]},{
            ID: "3:70",
            anchor: [0, 0],
            dimensions: [52, 27],
            position: [411, 188]},{
            ID: "3:69",
            anchor: [0, 0],
            dimensions: [59, 21],
            position: [385, 190]},{
            ID: "3:68",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [367, 194]},{
            ID: "3:67",
            anchor: [0, 0],
            dimensions: [52, 27],
            position: [343, 188]},
                        {
            ID: "3:66",
            anchor: [0, 0],
            dimensions: [59, 21],
            position: [316, 190]},{
            ID: "3:64",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [299, 194]},{
            ID: "3:63",
            anchor: [0, 0],
            dimensions: [52, 27],
            position: [274, 188]},{
            ID: "3:62",
            anchor: [0, 0],
            dimensions: [59, 21],
            position: [248, 190]},{
            ID: "3:61",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [230, 194]},{
            ID: "3:60",
            anchor: [0, 0],
            dimensions: [52, 27],
            position: [206, 188]},{
            ID: "3:59",
            anchor: [0, 0],
            dimensions: [59, 21],
            position: [180, 190]},{
            ID: "3:58",
            anchor: [0, 0],
            dimensions: [49, 24],
            position: [162, 194]},
                        {
            ID: "3:57",
            anchor: [0, 0],
            dimensions: [40, 51],
            position: [149, 160]},{
            ID: "3:56",
            anchor: [0, 0],
            dimensions: [64, 21],
            position: [104, 166]},{
            ID: "3:87",
            anchor: [0, 0],
            dimensions: [25, 21],
            position: [15, 182]},{
            ID: "3:55",
            anchor: [0, 0],
            dimensions: [62, 36],
            position: [78, 167]},{
            ID: "3:95",
            anchor: [0, 0],
            dimensions: [12, 30],
            position: [16, 175]},{
            ID: "3:86",
            anchor: [0, 0],
            dimensions: [37, 34],
            position: [74, 181]},{
            ID: "3:94",
            anchor: [0, 0],
            dimensions: [10, 29],
            position: [14, 176]},{
            ID: "3:85",
            anchor: [0, 0],
            dimensions: [29, 43],
            position: [74, 173]},{
            ID: "3:93",
            anchor: [0, 0],
            dimensions: [12, 29],
            position: [15, 152]},{
            ID: "3:84",
            anchor: [0, 0],
            dimensions: [29, 43],
            position: [74, 173]},{
            ID: "3:92",
            anchor: [0, 0],
            dimensions: [16, 27],
            position: [19, 121]},{
            ID: "3:83",
            anchor: [0, 0],
            dimensions: [32, 37],
            position: [74, 180]},{
            ID: "3:91",
            anchor: [0, 0],
            dimensions: [23, 22],
            position: [16, 101]},{
            ID: "3:82",
            anchor: [0, 0],
            dimensions: [24, 69],
            position: [75, 141]},{
            ID: "3:90",
            anchor: [0, 0],
            dimensions: [10, 29],
            position: [26, 96]},{
            ID: "3:81",
            anchor: [0, 0],
            dimensions: [48, 44],
            position: [46, 117]},{
            ID: "3:89",
            anchor: [0, 0],
            dimensions: [18, 26],
            position: [34, 104]},{
            ID: "3:76",
            anchor: [0, 0],
            dimensions: [41, 53],
            position: [34, 104]},{
            ID: "3:88",
            anchor: [0, 0],
            dimensions: [29, 12],
            position: [32, 142]},{
            ID: "3:65",
            anchor: [0, 0],
            dimensions: [22, 22],
            position: [34, 145]},{
            ID: "0:33",
            anchor: [0, 0],
            dimensions: [29, 10],
            position: [29, 135]},{
            ID: "0:32",
            anchor: [0, 0],
            dimensions: [24, 18],
            position: [32, 143]},{
            ID: "3:96",
            anchor: [0, 0],
            dimensions: [29, 29],
            position: [28, 135]},{
            ID: "3:97",
            anchor: [0, 0],
            dimensions: [29, 26],
            position: [28, 137]},{
            ID: "3:98",
            anchor: [0, 0],
            dimensions: [29, 29],
            position: [29, 138]},{
            ID: "3:99",
            anchor: [0, 0],
            dimensions: [29, 29],
            position: [29, 138]},{
            ID: "3:100",
            anchor: [0, 0],
            dimensions: [29, 29],
            position: [29, 138]},{
            ID: "3:101",
            anchor: [0, 0],
            dimensions: [29, 29],
            position: [28, 135]},{
            ID: "0:4",
            anchor: [17, 15],
            dimensions: [42, 18],
            position: [141, 17]},{
            ID: "0:3",
            anchor: [21, 15],
            dimensions: [42, 18],
            position: [145, 17]},{
            ID: "0:6",
            anchor: [17, 12],
            dimensions: [42, 15],
            position: [141, 17]},{
            ID: "0:5",
            anchor: [21, 12],
            dimensions: [42, 15],
            position: [145, 17]},{
            ID: "0:8",
            anchor: [17, 15],
            dimensions: [42, 18],
            position: [141, 17]},{
            ID: "0:7",
            anchor: [21, 15],
            dimensions: [42, 18],
            position: [145, 17]},{
            ID: "2:7",
            anchor: [0, 0],
            dimensions: [306, 21],
            position: [330, 197]},{
            ID: "1:35",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "1:19",
            anchor: [0, 0],
            dimensions: [26, 79],
            position: [357, 45]},{
            ID: "1:27",
            anchor: [0, 0],
            dimensions: [40, 78],
            position: [343, 46]},{
            ID: "1:28",
            anchor: [0, 0],
            dimensions: [51, 76],
            position: [334, 46]},{
            ID: "1:29",
            anchor: [0, 0],
            dimensions: [53, 76],
            position: [332, 46]},{
            ID: "1:30",
            anchor: [0, 0],
            dimensions: [53, 76],
            position: [332, 46]},{
            ID: "1:31",
            anchor: [0, 0],
            dimensions: [53, 75],
            position: [332, 47]},{
            ID: "1:32",
            anchor: [0, 0],
            dimensions: [53, 75],
            position: [332, 47]},{
            ID: "1:33",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [329, 47]},{
            ID: "1:34",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [329, 47]},{
            ID: "1:20",
            anchor: [0, 0],
            dimensions: [53, 75],
            position: [332, 47]},{
            ID: "1:21",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [329, 47]},{
            ID: "1:22",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [329, 47]},{
            ID: "1:23",
            anchor: [0, 0],
            dimensions: [53, 75],
            position: [332, 47]},{
            ID: "1:24",
            anchor: [0, 0],
            dimensions: [53, 75],
            position: [332, 47]},{
            ID: "1:25",
            anchor: [0, 0],
            dimensions: [49, 78],
            position: [334, 45]},{
            ID: "1:26",
            anchor: [0, 0],
            dimensions: [40, 79],
            position: [343, 44]},{
            ID: "1:0",
            anchor: [0, 0],
            dimensions: [32, 77],
            position: [355, 46]},{
            ID: "1:3",
            anchor: [0, 0],
            dimensions: [45, 75],
            position: [349, 47]},{
            ID: "1:4",
            anchor: [0, 0],
            dimensions: [64, 73],
            position: [338, 47]},{
            ID: "1:5",
            anchor: [0, 0],
            dimensions: [61, 69],
            position: [340, 49]},{
            ID: "1:6",
            anchor: [0, 0],
            dimensions: [61, 69],
            position: [340, 49]},{
            ID: "1:7",
            anchor: [0, 0],
            dimensions: [61, 69],
            position: [340, 49]},{
            ID: "1:8",
            anchor: [0, 0],
            dimensions: [64, 73],
            position: [338, 47]},{
            ID: "1:9",
            anchor: [0, 0],
            dimensions: [32, 77],
            position: [355, 47]},{
            ID: "1:10",
            anchor: [0, 0],
            dimensions: [32, 77],
            position: [355, 46]},{
            ID: "1:1",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "1:2",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "1:13",
            anchor: [0, 0],
            dimensions: [42, 76],
            position: [349, 46]},{
            ID: "1:14",
            anchor: [0, 0],
            dimensions: [44, 73],
            position: [348, 47]},{
            ID: "1:15",
            anchor: [0, 0],
            dimensions: [55, 66],
            position: [344, 48]},{
            ID: "1:16",
            anchor: [0, 0],
            dimensions: [49, 61],
            position: [347, 49]},{
            ID: "1:17",
            anchor: [0, 0],
            dimensions: [55, 66],
            position: [344, 48]},{
            ID: "1:18",
            anchor: [0, 0],
            dimensions: [44, 73],
            position: [348, 47]},{
            ID: "1:11",
            anchor: [0, 0],
            dimensions: [42, 78],
            position: [349, 46]},{
            ID: "1:12",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "3:106",
            anchor: [0, 0],
            dimensions: [41, 77],
            position: [350, 45]},{
            ID: "3:107",
            anchor: [0, 0],
            dimensions: [52, 72],
            position: [345, 46]},{
            ID: "3:108",
            anchor: [0, 0],
            dimensions: [54, 73],
            position: [342, 46]},{
            ID: "3:109",
            anchor: [0, 0],
            dimensions: [51, 74],
            position: [343, 46]},{
            ID: "3:127",
            anchor: [0, 0],
            dimensions: [44, 71],
            position: [349, 46]},{
            ID: "3:133",
            anchor: [0, 0],
            dimensions: [44, 67],
            position: [349, 45]},{
            ID: "3:134",
            anchor: [0, 0],
            dimensions: [50, 67],
            position: [349, 44]},{
            ID: "3:135",
            anchor: [0, 0],
            dimensions: [49, 68],
            position: [349, 45]},{
            ID: "3:136",
            anchor: [0, 0],
            dimensions: [44, 76],
            position: [349, 46]},{
            ID: "3:137",
            anchor: [0, 0],
            dimensions: [44, 75],
            position: [349, 47]},{
            ID: "3:138",
            anchor: [0, 0],
            dimensions: [44, 75],
            position: [349, 47]},{
            ID: "3:139",
            anchor: [0, 0],
            dimensions: [44, 72],
            position: [349, 47]},{
            ID: "3:140",
            anchor: [0, 0],
            dimensions: [45, 70],
            position: [349, 46]},{
            ID: "3:128",
            anchor: [0, 0],
            dimensions: [50, 67],
            position: [349, 45]},{
            ID: "3:129",
            anchor: [0, 0],
            dimensions: [48, 72],
            position: [349, 46]},{
            ID: "3:130",
            anchor: [0, 0],
            dimensions: [46, 76],
            position: [349, 47]},{
            ID: "3:131",
            anchor: [0, 0],
            dimensions: [46, 76],
            position: [349, 47]},{
            ID: "3:132",
            anchor: [0, 0],
            dimensions: [44, 74],
            position: [349, 48]},{
            ID: "3:117",
            anchor: [0, 0],
            dimensions: [50, 76],
            position: [345, 47]},{
            ID: "3:118",
            anchor: [0, 0],
            dimensions: [49, 74],
            position: [345, 47]},{
            ID: "3:119",
            anchor: [0, 0],
            dimensions: [46, 72],
            position: [348, 47]},{
            ID: "3:120",
            anchor: [0, 0],
            dimensions: [37, 79],
            position: [352, 44]},{
            ID: "3:121",
            anchor: [0, 0],
            dimensions: [42, 78],
            position: [349, 45]},{
            ID: "3:122",
            anchor: [0, 0],
            dimensions: [30, 78],
            position: [356, 45]},{
            ID: "3:123",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "3:124",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "3:141",
            anchor: [0, 0],
            dimensions: [58, 78],
            position: [344, 45]},{
            ID: "3:142",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [346, 46]},{
            ID: "3:143",
            anchor: [0, 0],
            dimensions: [58, 78],
            position: [344, 45]},{
            ID: "3:144",
            anchor: [0, 0],
            dimensions: [56, 75],
            position: [346, 46]},{
            ID: "3:145",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "3:146",
            anchor: [0, 0],
            dimensions: [56, 79],
            position: [343, 45]},{
            ID: "3:147",
            anchor: [0, 0],
            dimensions: [55, 75],
            position: [343, 46]},{
            ID: "3:148",
            anchor: [0, 0],
            dimensions: [56, 79],
            position: [343, 45]},{
            ID: "3:149",
            anchor: [0, 0],
            dimensions: [55, 75],
            position: [343, 46]},{
            ID: "3:150",
            anchor: [0, 0],
            dimensions: [56, 79],
            position: [343, 45]},{
            ID: "3:110",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "3:111",
            anchor: [0, 0],
            dimensions: [34, 79],
            position: [354, 45]},{
            ID: "3:112",
            anchor: [0, 0],
            dimensions: [41, 78],
            position: [350, 45]},{
            ID: "3:113",
            anchor: [0, 0],
            dimensions: [47, 75],
            position: [341, 45]},{
            ID: "3:114",
            anchor: [0, 0],
            dimensions: [46, 71],
            position: [345, 45]},{
            ID: "3:115",
            anchor: [0, 0],
            dimensions: [32, 75],
            position: [361, 45]},{
            ID: "3:116",
            anchor: [0, 0],
            dimensions: [40, 76],
            position: [360, 45]},{
            ID: "3:151",
            anchor: [0, 0],
            dimensions: [43, 73],
            position: [356, 45]},{
            ID: "3:152",
            anchor: [0, 0],
            dimensions: [50, 63],
            position: [355, 45]},{
            ID: "3:153",
            anchor: [0, 0],
            dimensions: [44, 78],
            position: [346, 45]},{
            ID: "3:154",
            anchor: [0, 0],
            dimensions: [47, 78],
            position: [336, 45]},{
            ID: "3:155",
            anchor: [0, 0],
            dimensions: [45, 75],
            position: [341, 45]},{
            ID: "3:156",
            anchor: [0, 0],
            dimensions: [50, 67],
            position: [341, 45]},{
            ID: "3:157",
            anchor: [0, 0],
            dimensions: [45, 76],
            position: [355, 45]},{
            ID: "3:158",
            anchor: [0, 0],
            dimensions: [40, 76],
            position: [360, 45]},{
            ID: "3:125",
            anchor: [0, 0],
            dimensions: [33, 78],
            position: [359, 45]},{
            ID: "3:126",
            anchor: [0, 0],
            dimensions: [23, 78],
            position: [360, 45]},{
            ID: "2:31",
            anchor: [5, 5],
            dimensions: [11, 11],
            position: [572, 86]},{
            ID: "2:32",
            anchor: [2, 6],
            dimensions: [5, 13],
            position: [581, 91]},{
            ID: "2:33",
            anchor: [7, 3],
            dimensions: [15, 7],
            position: [563, 105]},{
            ID: "2:34",
            anchor: [2, 5],
            dimensions: [5, 11],
            position: [595, 63]},{
            ID: "2:35",
            anchor: [5, 4],
            dimensions: [11, 9],
            position: [622, 84]},{
            ID: "2:36",
            anchor: [7, 5],
            dimensions: [15, 11],
            position: [612, 131]},{
            ID: "2:37",
            anchor: [0, 0],
            dimensions: [74, 153],
            position: [557, 58]},{
            ID: "0:15",
            anchor: [0, 0],
            dimensions: [57, 107],
            position: [93, 46]},{
            ID: "0:9",
            anchor: [0, 0],
            dimensions: [57, 107],
            position: [93, 46]},{
            ID: "0:10",
            anchor: [0, 0],
            dimensions: [44, 106],
            position: [106, 46]},{
            ID: "0:11",
            anchor: [0, 0],
            dimensions: [32, 106],
            position: [117, 46]},{
            ID: "0:12",
            anchor: [0, 0],
            dimensions: [21, 106],
            position: [128, 46]},{
            ID: "0:13",
            anchor: [0, 0],
            dimensions: [16, 106],
            position: [133, 46]},{
            ID: "0:14",
            anchor: [0, 0],
            dimensions: [12, 106],
            position: [137, 46]},{
            ID: "2:6",
            anchor: [0, 0],
            dimensions: [64, 129],
            position: [188, 17]},{
            ID: "2:0",
            anchor: [0, 0],
            dimensions: [64, 129],
            position: [188, 17]},{
            ID: "2:1",
            anchor: [0, 0],
            dimensions: [64, 128],
            position: [188, 18]},{
            ID: "2:2",
            anchor: [0, 0],
            dimensions: [64, 125],
            position: [188, 21]},{
            ID: "2:3",
            anchor: [0, 0],
            dimensions: [64, 117],
            position: [188, 29]},{
            ID: "2:4",
            anchor: [0, 0],
            dimensions: [64, 109],
            position: [188, 37]},{
            ID: "2:5",
            anchor: [0, 0],
            dimensions: [64, 99],
            position: [188, 47]},{
            ID: "0:22",
            anchor: [0, 0],
            dimensions: [55, 96],
            position: [294, 65]},{
            ID: "0:16",
            anchor: [0, 0],
            dimensions: [55, 95],
            position: [294, 66]},{
            ID: "0:17",
            anchor: [0, 0],
            dimensions: [42, 95],
            position: [294, 66]},{
            ID: "0:18",
            anchor: [0, 0],
            dimensions: [30, 95],
            position: [294, 66]},{
            ID: "0:19",
            anchor: [0, 0],
            dimensions: [18, 95],
            position: [294, 66]},{
            ID: "0:20",
            anchor: [0, 0],
            dimensions: [11, 95],
            position: [294, 66]},{
            ID: "0:21",
            anchor: [0, 0],
            dimensions: [8, 95],
            position: [294, 66]},{
            ID: "0:29",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "0:23",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},
                        {
            ID: "0:24",
            anchor: [0, 0],
            dimensions: [50, 101],
            position: [480, 55]},{
            ID: "0:25",
            anchor: [0, 0],
            dimensions: [34, 101],
            position: [480, 55]},{
            ID: "0:26",
            anchor: [0, 0],
            dimensions: [17, 101],
            position: [480, 55]},{
            ID: "0:27",
            anchor: [0, 0],
            dimensions: [12, 100],
            position: [480, 55]},{
            ID: "0:28",
            anchor: [0, 0],
            dimensions: [11, 100],
            position: [480, 55]},{
            ID: "0:34",
            anchor: [0, 0],
            dimensions: [106, 160],
            position: [364, 48]},{
            ID: "3:24",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:23",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},
                        {
            ID: "3:22",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:21",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:20",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:19",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:18",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:17",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:16",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:35",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},
                        {
            ID: "3:34",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:25",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:33",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:32",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:31",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:30",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:29",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:28",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},
                        {
            ID: "3:27",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "3:26",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "0:30",
            anchor: [0, 0],
            dimensions: [66, 102],
            position: [480, 55]},{
            ID: "0:35",
            anchor: [0, 0],
            dimensions: [17, 96],
            position: [405, 86]},{
            ID: "3:44",
            anchor: [0, 0],
            dimensions: [30, 7],
            position: [309, 172]},{
            ID: "3:45",
            anchor: [0, 0],
            dimensions: [40, 19],
            position: [299, 170]},{
            ID: "3:46",
            anchor: [0, 0],
            dimensions: [41, 18],
            position: [300, 162]},{
            ID: "3:47",
            anchor: [0, 0],
            dimensions: [51, 78],
            position: [296, 143]},
                        {
            ID: "3:48",
            anchor: [0, 0],
            dimensions: [60, 56],
            position: [293, 124]},{
            ID: "3:49",
            anchor: [0, 0],
            dimensions: [62, 78],
            position: [291, 104]},{
            ID: "3:50",
            anchor: [0, 0],
            dimensions: [62, 77],
            position: [291, 97]},{
            ID: "3:51",
            anchor: [0, 0],
            dimensions: [62, 78],
            position: [291, 89]},{
            ID: "3:52",
            anchor: [0, 0],
            dimensions: [62, 77],
            position: [291, 85]},{
            ID: "3:53",
            anchor: [0, 0],
            dimensions: [62, 78],
            position: [291, 81]},{
            ID: "3:54",
            anchor: [0, 0],
            dimensions: [62, 78],
            position: [291, 78]},{
            ID: "3:36",
            anchor: [0, 0],
            dimensions: [69, 86],
            position: [288, 75]},{
            ID: "3:37",
            anchor: [0, 0],
            dimensions: [60, 72],
            position: [292, 82]},{
            ID: "3:38",
            anchor: [0, 0],
            dimensions: [5, 6],
            position: [319, 111]},{
            ID: "3:39",
            anchor: [0, 0],
            dimensions: [20, 23],
            position: [312, 102]},{
            ID: "3:40",
            anchor: [0, 0],
            dimensions: [44, 42],
            position: [301, 92]},{
            ID: "3:41",
            anchor: [0, 0],
            dimensions: [59, 50],
            position: [291, 89]},{
            ID: "3:42",
            anchor: [0, 0],
            dimensions: [68, 59],
            position: [286, 85]},{
            ID: "3:43",
            anchor: [0, 0],
            dimensions: [76, 66],
            position: [284, 82]},{
            ID: "3:12",
            anchor: [0, 0],
            dimensions: [38, 56],
            position: [103, 45]},{
            ID: "3:11",
            anchor: [0, 0],
            dimensions: [66, 111],
            position: [89, 41]},{
            ID: "3:10",
            anchor: [0, 0],
            dimensions: [79, 108],
            position: [92, 44]},{
            ID: "3:0",
            anchor: [0, 0],
            dimensions: [79, 85],
            position: [93, 69]},{
            ID: "3:13",
            anchor: [0, 0],
            dimensions: [73, 89],
            position: [93, 64]},{
            ID: "3:14",
            anchor: [0, 0],
            dimensions: [72, 91],
            position: [93, 62]},{
            ID: "3:15",
            anchor: [0, 0],
            dimensions: [71, 92],
            position: [93, 61]},{
            ID: "3:9",
            anchor: [0, 0],
            dimensions: [72, 100],
            position: [93, 52]},{
            ID: "3:8",
            anchor: [0, 0],
            dimensions: [57, 102],
            position: [93, 50]},{
            ID: "3:7",
            anchor: [0, 0],
            dimensions: [57, 103],
            position: [93, 49]},{
            ID: "3:6",
            anchor: [0, 0],
            dimensions: [57, 102],
            position: [93, 50]},{
            ID: "3:5",
            anchor: [0, 0],
            dimensions: [57, 100],
            position: [93, 52]},{
            ID: "3:4",
            anchor: [0, 0],
            dimensions: [57, 98],
            position: [93, 54]},{
            ID: "3:3",
            anchor: [0, 0],
            dimensions: [57, 96],
            position: [93, 56]},{
            ID: "3:2",
            anchor: [0, 0],
            dimensions: [56, 54],
            position: [94, 98]},{
            ID: "3:1",
            anchor: [0, 0],
            dimensions: [21, 41],
            position: [129, 111]},{
            ID: "2:28",
            anchor: [0, 0],
            dimensions: [30, 32],
            position: [616, 176]},{
            ID: "2:30",
            anchor: [0, 0],
            dimensions: [30, 32],
            position: [616, 176]},{
            ID: "2:27",
            anchor: [0, 0],
            dimensions: [30, 32],
            position: [616, 176]},{
            ID: "2:20",
            anchor: [0, 0],
            dimensions: [24, 32],
            position: [619, 176]},{
            ID: "2:21",
            anchor: [0, 0],
            dimensions: [17, 32],
            position: [623, 176]},{
            ID: "2:22",
            anchor: [0, 0],
            dimensions: [10, 32],
            position: [626, 176]},{
            ID: "2:23",
            anchor: [0, 0],
            dimensions: [7, 32],
            position: [628, 176]},{
            ID: "2:24",
            anchor: [0, 0],
            dimensions: [10, 32],
            position: [626, 176]},{
            ID: "2:25",
            anchor: [0, 0],
            dimensions: [17, 32],
            position: [623, 176]},{
            ID: "2:26",
            anchor: [0, 0],
            dimensions: [24, 32],
            position: [619, 176]},{
            ID: "2:29",
            anchor: [0, 0],
            dimensions: [30, 32],
            position: [616, 176]},{
            ID: "0:36",
            anchor: [0, 0],
            dimensions: [20, 52],
            position: [440, 2]},{
            ID: "0:40",
            anchor: [0, 0],
            dimensions: [20, 54],
            position: [440, 2]},{
            ID: "0:41",
            anchor: [0, 0],
            dimensions: [16, 58],
            position: [441, 2]},{
            ID: "0:42",
            anchor: [0, 0],
            dimensions: [16, 60],
            position: [441, 2]},{
            ID: "0:43",
            anchor: [0, 0],
            dimensions: [18, 48],
            position: [439, 1]},{
            ID: "0:44",
            anchor: [0, 0],
            dimensions: [23, 38],
            position: [434, 2]},{
            ID: "0:45",
            anchor: [0, 0],
            dimensions: [29, 30],
            position: [431, 2]},{
            ID: "0:46",
            anchor: [0, 0],
            dimensions: [26, 34],
            position: [434, 2]},{
            ID: "0:47",
            anchor: [0, 0],
            dimensions: [18, 43],
            position: [439, 1]},{
            ID: "0:37",
            anchor: [0, 0],
            dimensions: [16, 59],
            position: [441, 2]},{
            ID: "0:38",
            anchor: [0, 0],
            dimensions: [20, 57],
            position: [440, 2]},{
            ID: "0:39",
            anchor: [0, 0],
            dimensions: [20, 52],
            position: [440, 2]},{
            ID: "2:10",
            anchor: [0, 0],
            dimensions: [20, 14],
            position: [75, 136]},{
            ID: "2:9",
            anchor: [0, 0],
            dimensions: [20, 14],
            position: [75, 136]},{
            ID: "2:8",
            anchor: [0, 0],
            dimensions: [20, 14],
            position: [75, 136]},{
            ID: "2:13",
            anchor: [0, 0],
            dimensions: [17, 13],
            position: [237, 166]},{
            ID: "2:12",
            anchor: [0, 0],
            dimensions: [17, 13],
            position: [237, 166]},{
            ID: "2:11",
            anchor: [0, 0],
            dimensions: [17, 13],
            position: [237, 166]},{
            ID: "2:16",
            anchor: [0, 0],
            dimensions: [28, 16],
            position: [374, 159]},{
            ID: "2:15",
            anchor: [0, 0],
            dimensions: [28, 16],
            position: [374, 159]},{
            ID: "2:14",
            anchor: [0, 0],
            dimensions: [28, 16],
            position: [374, 159]},{
            ID: "2:19",
            anchor: [0, 0],
            dimensions: [13, 7],
            position: [531, 174]},{
            ID: "2:18",
            anchor: [0, 0],
            dimensions: [13, 7],
            position: [531, 174]},{
            ID: "2:17",
            anchor: [0, 0],
            dimensions: [13, 7],
            position: [531, 174]},{
            ID: "0:0",
            anchor: [0, 0],
            dimensions: [617, 215],
            position: [10, - 1]},{
            ID: "0:2",
            anchor: [0, 0],
            dimensions: [68, 136],
            position: [186, 13]},{
            ID: "3:103",
            anchor: [0, 0],
            dimensions: [21, 20],
            position: [191, 94]},{
            ID: "3:105",
            anchor: [0, 0],
            dimensions: [11, 9],
            position: [196, 100]},{
            ID: "3:104",
            anchor: [0, 0],
            dimensions: [20, 19],
            position: [191, 94]},{
            ID: "3:102",
            anchor: [0, 0],
            dimensions: [37, 53],
            position: [186, 75]},{
            ID: "3:161",
            anchor: [0, 0],
            dimensions: [23, 22],
            position: [228, 83]},{
            ID: "3:163",
            anchor: [0, 0],
            dimensions: [10, 9],
            position: [235, 90]},{
            ID: "3:162",
            anchor: [0, 0],
            dimensions: [21, 19],
            position: [229, 85]},{
            ID: "3:160",
            anchor: [0, 0],
            dimensions: [48, 52],
            position: [208, 66]},{
            ID: "0:1",
            anchor: [0, 0],
            dimensions: [68, 136],
            position: [186, 13]}]
    };
    var $a = function (a, b) {
        var c;
        c = a || window.event;
        c = !c ? [0, 0] : [(c.clientX || c.targetTouches && c.targetTouches[0] && c.targetTouches[0].clientX || 0) + (document.body.scrollLeft || document.documentElement.scrollLeft || 0), (c.clientY || c.targetTouches && c.targetTouches[0] && c.targetTouches[0].clientY || 0) + (document.body.scrollTop || document.documentElement.scrollTop || 0)];
        var d;
        d = b;
        var e = 0,
            f = 0;
        if (d) {
            do e += d.offsetLeft,
            f += d.offsetTop;
            while (d = d.offsetParent)
        }
        d = [e, f];
        return [c[0] - d[0], c[1] - d[1]]
    };
    var bb = function () {
        var a = N;
        this.G = {};
        this.z = {};
        this.P = [];
        for (var b = 0; b < O.length; b++) this.P[b] = [];
        for (var b = [], c = 0, d; d = M.images[c++];) {
            var e = d.ID.split(":"),
                f = parseInt(e[0], 10),
                g;
            g = O[f];
            var e = e[1],
                h;
            h = document.createElement("div");
            h.style.position = "absolute";
            h.style.Ma = "none";
            h.style.MozUserSelect = "none";
            h.style.webkitUserSelect = "none";
            h.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
            h.unselectable = "on";
            var l = g.pa[e];
            h.style.width = l[2] + "px";
            h.style.height = l[3] + "px";
            e = g.pa[e];
            g = [h, "url(" + g.oa + ") " + - (e[0] + 0) + "px " + - (e[1] + 0) + "px no-repeat"];
            e = g[0];
            this.P[f].push(w(function (a, b) {
                a.style.background = b
            }, this, e, g[1]));
            b.push(e);
            f = new Xa(e, d.anchor, d.position, d.dimensions);
            f.h();
            this.G[d.ID] = f
        }
        for (c = b.length - 1; e = b[c--];) a.appendChild(e);
        for (b = 0; f = M.animations[b++];) {
            c = this.z;
            d = f.name;
            g = f.states;
            e = {};
            h = j;
            for (h in g) {
                for (var l = e, p = h, u = h, q = g[h], s = [], v = 0, ta = j; ta = q.frames[v++];) s.push(ab(this, ta));
                for (var vb = {}, v = 0; ta = q.frames[v++];) for (var Rb = 0, wb; wb = ta[Rb++];) {
                    var F = wb.ID.split(":")[0];
                    vb[F] = k
                }
                q = [];
                for (F in vb) q.push(O[F]);
                l[p] = new I(u, s, q)
            }
            for (h in g) l = g[h],
            l.end && (e[h].end = e[l.end]),
            l.down && (e[h].J = e[l.down]),
            l.up && (e[h].aa = e[l.up]),
            l.over && (e[h].$ = e[l.over]),
            l.out && (e[h].Z = e[l.out]);
            f = new Ya(f.name, e[f.initialState], e);
            c[d] = f
        }
        F = {};
        for (b = 0; c = M.animations[b++];) for (var ua in c.states) for (d = 0; f = c.states[ua].frames[d++];) for (g = 0; e = f[g++];) F[e.ID] = k;
        for (var U in this.G) F[U] || this.G[String(U)].show();
        ua = [];
        for (U = 0; U < M.clickAreas.length; U++) F = M.clickAreas[U],
        F.animation in this.z && ua.push(F);
        M.clickAreas = ua;
        this.S = [];
        this.Da =
        w(function (a, b, c) {
            for (var d = $a(c, b), e = d[0], d = d[1], f = n, g = 0; g < a.clickAreas.length; g++) {
                var h = a.clickAreas[g];
                e > h.x1 && e < h.x2 && d > h.y1 && d < h.y2 ? (f = k, this.S[g] || (this.S[g] = k, this.z[h.animation].click("mouseover"))) : this.S[g] && (this.S[g] = n, this.z[h.animation].click("mouseout"))
            }
            b.style.cursor = f ? "pointer" : "default";
            if ("mousedown" == c.type) for (g = 0; g < a.clickAreas.length; g++) {
                if (h = a.clickAreas[g], e > h.x1 && e < h.x2 && d > h.y1 && d < h.y2) {
                    this.R = this.z[h.animation];
                    this.R.click(c.type);
                    break
                }
            } else "mouseup" == c.type && this.R && (this.R.click(c.type), this.R = m)
        }, this, M, a)
    },
        O = [new ha("./halloween/halloweenmonsters-hp-initial.png", [[71, 230, 617, 215], [0, 299, 68, 136], [0, 109, 68, 136], [561, 110, 42, 18], [420, 0, 42, 18], [171, 0, 42, 15], [106, 0, 42, 15], [126, 137, 42, 18], [126, 116, 42, 18], [561, 0, 57, 107], [691, 210, 44, 106], [71, 0, 32, 106], [239, 0, 21, 106], [0, 0, 16, 106], [296, 0, 12, 106], [465, 117, 57, 107], [106, 18, 55, 95], [19, 0, 42, 95], [263, 0, 30, 95], [540, 0, 18, 95], [525, 0, 11, 95], [691, 319, 8, 95], [702, 319, 55, 96], [691, 0, 66, 102], [621, 126, 50, 101], [465,
                    0, 34, 101], [502, 0, 17, 101], [525, 98, 12, 100], [194, 109, 11, 100], [621, 21, 66, 102], [691, 105, 66, 102], [561, 131, 46, 51], [621, 0, 24, 18], [465, 104, 29, 10], [311, 0, 106, 160], [420, 62, 17, 96], [171, 155, 20, 52], [443, 62, 16, 59], [420, 161, 20, 57], [71, 116, 20, 52], [216, 0, 20, 54], [94, 116, 16, 58], [171, 18, 16, 60], [0, 248, 18, 48], [420, 21, 23, 38], [94, 177, 29, 30], [126, 158, 26, 34], [171, 109, 18, 43]]), new ha("./halloween/halloweenmonsters-hp-skeleton.png", [[29, 1935, 32, 77], [0, 1550, 23, 78], [0, 72, 23, 78], [0, 1857, 45, 75], [0, 701, 64, 73], [0,
                    1478, 61, 69], [0, 2171, 61, 69], [0, 0, 61, 69], [0, 469, 64, 73], [0, 153, 32, 77], [26, 1550, 32, 77], [26, 72, 42, 78], [43, 153, 23, 78], [26, 1630, 42, 76], [0, 393, 44, 73], [0, 1788, 55, 66], [0, 2243, 49, 61], [0, 855, 55, 66], [0, 2017, 44, 73], [0, 1935, 26, 79], [0, 2307, 53, 75], [0, 315, 56, 75], [0, 2093, 56, 75], [0, 545, 53, 75], [0, 924, 53, 75], [0, 1159, 49, 78], [0, 233, 40, 79], [0, 1240, 40, 78], [0, 1002, 51, 76], [0, 1709, 53, 76], [0, 1321, 53, 76], [0, 777, 53, 75], [0, 1400, 53, 75], [0, 1081, 56, 75], [0, 623, 56, 75], [43, 1240, 23, 78]]), new ha("./halloween/halloweenmonsters-hp-warm.png", [[242, 29, 64, 129], [85, 10, 64, 128], [0, 0, 64, 125], [309, 0, 64, 117], [376, 35, 64, 109], [309, 120, 64, 99], [443, 29, 64, 129], [0, 161, 306, 21], [258, 12, 20, 14], [376, 147, 20, 14], [144, 185, 20, 14], [443, 161, 17, 13], [0, 201, 17, 13], [0, 185, 17, 13], [443, 0, 28, 16], [376, 182, 28, 16], [181, 185, 28, 16], [443, 19, 13, 7], [242, 12, 13, 7], [20, 201, 13, 7], [63, 185, 24, 32], [399, 147, 17, 32], [152, 0, 10, 32], [427, 182, 7, 32], [90, 185, 10, 32], [407, 182, 17, 32], [36, 185, 24, 32], [437, 182, 30, 32], [212, 185, 30, 32], [376, 0, 30, 32], [103, 185, 30, 32], [167, 185, 11, 11], [85, 141, 5, 13], [85,
                    0, 15, 7], [136, 185, 5, 11], [242, 0, 11, 9], [67, 0, 15, 11], [165, 0, 74, 153]]), new ha("./halloween/halloweenmonsters-hp-deferred.png", [[95, 0, 79, 85], [1466, 287, 21, 41], [631, 0, 56, 54], [1077, 196, 57, 96], [620, 269, 57, 98], [680, 269, 57, 100], [252, 0, 57, 102], [1466, 356, 57, 103], [482, 267, 57, 102], [744, 294, 72, 100], [252, 105, 79, 108], [1350, 211, 66, 111], [252, 216, 38, 56], [544, 228, 73, 89], [164, 193, 72, 91], [888, 385, 71, 92], [1079, 0, 66, 102], [975, 385, 66, 102], [744, 397, 66, 102], [1419, 105, 66, 102], [1350, 325, 66, 102], [819, 0, 66, 102],
                    [994, 490, 66, 102], [0, 0, 66, 102], [95, 193, 66, 102], [164, 88, 66, 102], [1163, 0, 66, 102], [819, 210, 66, 102], [334, 231, 66, 102], [413, 241, 66, 102], [95, 88, 66, 102], [1071, 385, 66, 102], [946, 280, 66, 102], [1281, 81, 66, 102], [744, 111, 66, 102], [1281, 340, 66, 102], [544, 57, 69, 86], [1163, 520, 60, 72], [1419, 78, 5, 6], [776, 82, 20, 23], [95, 298, 44, 42], [1015, 220, 59, 50], [1336, 535, 68, 59], [334, 162, 76, 66], [1015, 186, 30, 7], [819, 315, 40, 19], [0, 401, 41, 18], [620, 179, 51, 78], [1163, 117, 60, 56], [1232, 0, 62, 78], [0, 262, 62, 77], [0, 422, 62, 78], [674, 159, 62, 77], [1059,
                    300, 62, 78], [334, 0, 62, 78], [1419, 24, 62, 36], [1336, 511, 64, 21], [1120, 490, 40, 51], [888, 358, 49, 24], [334, 346, 59, 21], [819, 472, 52, 27], [1350, 77, 49, 24], [95, 343, 59, 21], [674, 239, 52, 27], [744, 534, 49, 24], [1350, 0, 22, 22], [482, 162, 59, 21], [1350, 25, 52, 27], [1427, 78, 49, 24], [819, 367, 59, 21], [576, 0, 52, 27], [1015, 105, 49, 24], [819, 186, 59, 21], [0, 371, 53, 27], [1100, 129, 49, 24], [1100, 105, 58, 21], [1232, 81, 41, 53], [1466, 462, 52, 27], [1015, 273, 49, 24], [1419, 0, 56, 21], [1350, 55, 30, 19], [620, 57, 48, 44], [1044, 385, 24, 69], [938, 81, 32, 37], [1015, 0, 29, 43],
                    [1015, 132, 29, 43], [1350, 174, 37, 34], [1015, 196, 25, 21], [1419, 63, 29, 12], [0, 342, 18, 26], [962, 385, 10, 29], [936, 490, 23, 22], [819, 337, 16, 27], [979, 490, 12, 29], [239, 0, 10, 29], [334, 81, 12, 30], [1047, 0, 29, 29], [744, 82, 29, 26], [744, 502, 29, 29], [544, 0, 29, 29], [744, 561, 29, 29], [1163, 176, 29, 29], [938, 224, 37, 53], [1484, 24, 21, 20], [888, 240, 20, 19], [1163, 105, 11, 9], [1015, 300, 41, 77], [0, 105, 52, 72], [1063, 490, 54, 73], [434, 81, 51, 74], [862, 391, 23, 78], [1163, 290, 34, 79], [888, 81, 41, 78], [888, 162, 47, 75], [1232, 212, 46, 71], [978, 121, 32, 75], [936, 515, 40,
                    76], [1281, 261, 50, 76], [1284, 511, 49, 74], [620, 104, 46, 72], [1176, 208, 37, 79], [482, 186, 42, 78], [1067, 105, 30, 78], [938, 121, 23, 78], [1137, 196, 23, 78], [1419, 492, 33, 78], [408, 81, 23, 78], [1419, 210, 44, 71], [1350, 104, 50, 67], [1281, 186, 48, 72], [252, 275, 46, 76], [446, 0, 46, 76], [1466, 210, 44, 74], [0, 503, 44, 67], [1163, 372, 50, 67], [1232, 511, 49, 68], [413, 162, 44, 76], [888, 0, 44, 75], [399, 0, 44, 75], [1232, 137, 44, 72], [1350, 430, 45, 70], [1455, 492, 58, 78], [349, 81, 56, 75], [935, 0, 58, 78], [1163, 442, 56, 75], [69, 0, 23, 78], [544, 146, 56, 79], [888, 280, 55, 75],
                    [744, 0, 56, 79], [744, 216, 55, 75], [0, 180, 56, 79], [1419, 284, 43, 73], [1281, 445, 50, 63], [1232, 286, 44, 78], [819, 105, 47, 78], [495, 0, 45, 75], [819, 502, 50, 67], [888, 490, 45, 76], [819, 391, 40, 76], [95, 372, 646, 220], [674, 104, 48, 52], [1466, 331, 23, 22], [938, 202, 21, 19], [1163, 208, 10, 9]])],
        cb = function (a, b) {
        return !(b in a.G) ? m : a.G[String(b)]
    },
        db = function (a, b) {
        var c = O[b],
            d = w(function () {
            for (var a = 0; a < this.P[b].length; a++) this.P[b][a]()
        }, a);
        if (c.k) d && (c.Q ? d() : c.ia.push(d));
        else {
            d && c.ia.push(d);
            d = document.createElement("img");
            c.k = d;
            var e =
            w(function () {
                if (!this.Q) {
                    this.Q = k;
                    for (var a = 0, b; b = this.ia[a]; a++) b()
                }
            }, c);
            d.onload = e;
            d.src = c.oa;
            (d.complete || "complete" == d.readyState) && e()
        }
    },
        ab = function (a, b) {
        for (var c = new G, d = 0, e; e = b[d++];) H(c, cb(a, e.ID), "offset" in e ? e.offset : m, "opacity" in e ? e.opacity : m, "scale" in e ? e.scale : m);
        return c
    };
    var eb = {
        "2,1": [147, 17, 145, 15, 136, 13, 127, 16, 127, 17, 127, 17, 125, 16, 120, 14, 116, 16, 115, 17],
        "1,0": [114, 17, 111, 14, 107, 13, 103, 15, 103, 17, 103, 17, 100, 14, 96, 13, 89, 16, 89, 17, 89, 18, 89, 17, 85, 15, 81, 16, 78, 18],
        "0,1": [78, 18, 81, 14, 87, 14, 88, 16, 89, 17, 89, 17, 92, 15, 96, 14, 99, 17, 99, 19, 99, 19, 101, 17, 109, 15, 112, 15, 113, 16, 114, 17],
        "1,2": [114, 17, 116, 15, 121, 11, 127, 12, 130, 16, 130, 17, 130, 17, 131, 16, 142, 11, 145, 13, 147, 17]
    },
        fb = {
        "2,1,0": k,
        "2,1,8": k,
        "2,1,10": k,
        "2,1,18": k,
        "1,0,0": k,
        "1,0,8": k,
        "1,0,10": k,
        "1,0,20": k,
        "1,0,28": k,
        "0,1,0": k,
        "0,1,8": k,
        "0,1,10": k,
        "0,1,18": k,
        "0,1,20": k,
        "0,1,30": k,
        "1,2,0": k,
        "1,2,10": k,
        "1,2,18": k,
        "1,2,20": k
    },
        gb = [[572, 86, 0, 571, 88, 0, 570, 91, 0, 568, 96, 0, 565, 101, 0, 561, 106, 0, 556, 112, 0.2, 549, 116, 0.2, 545, 119, 0.5, 538, 122, 0.7, 534, 125, 0.9, 531, 126, 1, 530, 129, 1.2, 532, 131, 1.3, 535, 133, 1.5, 540, 136, 1.6, 545, 139, 1.6, 552, 144, 1.3, 560, 150, 1.2, 568, 158, 1, 577, 165, 1, 585, 170, 0.9, 594, 175, 0.9, 601, 177, 0.8, 606, 179, 0.6, 612, 181, 0.2, 617, 182, - 0.1, 620, 183, - 0.4, 621, 183, - 0.5, 621, 184, - 0.5, 620, 186, - 0.5, 618, 190, - 0.5, 617, 194, - 0.5, 614, 197, - 0.5, 612, 201, - 0.5, 611,
                204, - 0.5, 608, 208, - 0.5, 606, 209, - 0.6, 606, 209, - 0.6, 605, 210, - 0.6], [581, 92, 0, 581, 93, 0, 581, 95, 0, 580, 97, 0, 579, 99, 0, 578, 102, 0, 576, 106, 0, 573, 109, 0, 569, 114, 0, 565, 119, 0.1, 559, 124, 0.1, 553, 129, 0.1, 547, 132, 0.1, 538, 137, 0.3, 530, 140, 0.6, 520, 140, 0.8, 510, 140, 1.1, 504, 140, 1.3, 500, 138, 1.5, 499, 136, 1.8, 497, 133, 2, 496, 130, 2.2, 496, 129, 2.3, 496, 126, 2.5, 496, 125, 2.7, 497, 124, 3, 499, 124, 3.4, 499, 123, 3.7, 500, 122, 3.8, 501, 122, 3.9, 502, 121, 4, 503, 121, 4.2, 504, 121, 4.5, 505, 122, 4.7, 506, 122, - 1.5, 507, 125, - 1.4, 508, 127, - 1.2, 509, 129, - 1, 509, 130, - 0.9,
                509, 133, - 0.8, 509, 135, - 0.5, 509, 137, - 0.3, 509, 140, 0, 507, 142, 0.3, 505, 145, 0.6, 503, 150, 0.8, 500, 154, 0.9, 497, 160, 1, 493, 164, 1, 489, 168, 1.1, 480, 171, 1.1, 473, 176, 1.2, 465, 179, 1.2, 455, 182, 1.3, 447, 186, 1.3, 439, 189, 1.3, 432, 190, 1.4, 428, 191, 1.4, 426, 192, 1.4, 420, 193, 1.4, 419, 194, 1.4, 416, 196, 1.4, 414, 196, 1.4, 412, 197, 1.5, 409, 199, 1.5, 405, 200, 1.5, 403, 200, 1.5, 401, 201, 1.5, 400, 202, 1.4, 400, 202, 1.4, 400, 203, 1.4, 400, 204, 1.4, 398, 204, 1.4, 397, 206, 1.4, 396, 206, 1.4, 396, 207, 1.4, 394, 208, 1.4, 393, 208, 1.4, 393, 209, 1.4, 392, 209, 1.4], [563, 106, 0,
                563, 107, 0, 563, 108, 0, 564, 112, 0, 565, 116, 0, 568, 120, 0, 571, 124, 0, 575, 130, 0, 577, 134, 0, 580, 137, - 0.1, 585, 141, - 0.2, 592, 144, - 0.5, 598, 146, - 0.7, 604, 147, - 0.9, 608, 147, - 1.1, 610, 146, - 1.2, 612, 146, - 1.3, 612, 146, - 1.4, 612, 146, - 1.4, 612, 147, - 1.5, 612, 150, - 1.5, 610, 154, - 1.5, 608, 157, - 1.5, 606, 161, - 1.4, 604, 166, - 1.4, 599, 172, - 1.2, 593, 176, - 1.1, 588, 180, - 0.9, 581, 183, - 0.6, 576, 184, - 0.3, 571, 186, 0.2, 566, 186, 0.8, 562, 187, 1, 557, 188, 1.3, 556, 189, 1.5, 556, 189, 1.7, 557, 192, 1.8, 560, 193, 2, 565, 196, 2, 568, 198, 2.1, 574, 200, 2.1, 580, 202, 2.1, 586, 205, 2.2,
                592, 208, 2.3, 597, 209, 2.5, 600, 212, 2.5, 601, 212, 2.6, 602, 214, 2.7, 602, 215, 2.8], [596, 64, 0, 596, 65, 0, 596, 67, 0, 595, 69, 0, 594, 73, 0, 592, 80, 0.2, 592, 88, 0.5, 590, 94, 0.6, 589, 101, 0.8, 588, 109, 0.9, 585, 116, 1.1, 582, 123, 1.2, 580, 128, 1.3, 576, 135, 1.4, 568, 146, 1.5, 560, 154, 1.6, 556, 159, 1.7, 551, 160, 1.8, 547, 163, 1.8, 543, 163, 1.9, 538, 163, 2, 530, 163, 2, 525, 163, 2, 518, 161, 2.1, 512, 160, 2.1, 508, 156, 2.1, 507, 149, 2.1, 507, 148, 2.2, 507, 146, 2.3, 511, 144, 2.4, 513, 144, 2.5, 516, 144, 2.5, 520, 144, 2.6, 523, 147, 2.6, 525, 148, 2.6, 528, 149, 2.6, 532, 152, 2.6, 535, 155,
                2.6, 538, 158, 2.5, 540, 161, 2.3, 543, 165, 2.3, 545, 168, 2.2, 547, 173, 2.1, 549, 177, 2, 552, 182, 1.9, 554, 184, 1.9, 558, 189, 1.8, 562, 194, 1.7, 566, 198, 1.7, 569, 200, 1.7, 572, 203, 1.6, 574, 204, 1.6, 577, 206, 1.5, 580, 208, 1.5, 582, 208, 1.4, 583, 209, 1.4, 585, 210, 1.3, 587, 210, 1.3, 588, 210, 1.3, 588, 211, 1.3, 589, 211, 1.3, 590, 211, 1.3, 592, 212, 1.3, 594, 212, 1.3, 596, 212, 1.3, 597, 212, 1.3, 598, 212, 1.3], [623, 85, 0, 623, 86, 0, 622, 87, 0, 621, 90, 0, 620, 94, 0, 619, 99, 0, 616, 107, 0, 611, 117, 0, 605, 127, 0, 600, 136, 0.1, 595, 144, 0.4, 587, 152, 0.7, 577, 163, 1, 564, 172, 1.2, 553, 178,
                1.5, 543, 183, 1.9, 527, 189, 2.1, 513, 194, 2.3, 502, 194, 2.7, 495, 193, 3, 490, 188, 3.2, 486, 181, 3.4, 485, 172, 3.6, 487, 165, 3.9, 489, 160, 4.3, 492, 158, 4.7, 494, 156, - 1.3, 496, 156, - 0.8, 499, 157, - 0.4, 501, 158, 0.1, 503, 160, 0.3, 504, 162, 0.6, 504, 164, 0.8, 504, 167, 0.9, 504, 172, 1, 503, 175, 1.2, 501, 179, 1.3, 497, 183, 1.5, 493, 186, 1.7, 487, 192, 1.8, 476, 196, 1.9, 467, 200, 1.9, 457, 204, 2, 449, 206, 2, 441, 208, 2, 430, 210, 2, 424, 210, 2, 421, 210, 1.9, 419, 210, 1.8, 416, 212, 1.8, 413, 212, 1.7, 411, 212, 1.7, 409, 212, 1.7, 408, 212, 1.6, 406, 212, 1.6, 405, 212, 1.6], [613, 133, - 0.1, 613,
                134, - 0.1, 613, 135, - 0.1, 613, 137, - 0.1, 613, 140, - 0.1, 613, 141, - 0.1, 613, 145, - 0.1, 614, 148, - 0.1, 615, 152, - 0.2, 615, 156, - 0.2, 616, 165, - 0.2, 618, 171, - 0.2, 620, 174, - 0.3, 620, 179, - 0.3, 623, 181, - 0.4, 626, 184, - 0.5, 630, 188, - 0.6, 634, 189, - 0.6, 636, 189, - 0.7, 638, 189, - 0.7, 639, 188, - 0.7, 640, 188, - 0.8, 640, 188, - 0.8, 640, 188, - 0.8, 640, 188, - 0.8, 638, 189, - 0.8, 637, 190, - 0.8, 635, 193, - 0.8, 633, 196, - 0.7, 632, 199, - 0.6, 629, 201, - 0.5, 625, 206, - 0.4, 624, 207, - 0.3, 623, 208, 0, 620, 209, 0.1, 618, 210, 0.2, 618, 211, 0.3, 616, 212, 0.4, 615, 212, 0.4, 614, 212, 0.4, 611, 212,
                0.4, 609, 213, 0.4, 609, 213, 0.4, 609, 213, 0.4, 609, 213, 0.4, 608, 213, 0.4]];
    var hb = function (a, b, c) {
        this.W = c;
        this.Ba = b;
        this.X = eb;
        this.Ca = fb;
        this.o = 0;
        this.K = this.W * (5 + 5 * Math.random());
        this.w = 0;
        this.a = {};
        b = [7, 8, 5, 6, 3, 4];
        for (c = 0; c < b.length; c++) {
            var d = b[c];
            this.a[d] = cb(a, "0:" + d);
            this.a[d].h()
        }
        this.C = this.D = 2;
        this.B = k;
        this.v = 0;
        this.F = n;
        this.M = this.a[7];
        this.M.show();
        a = this.X["2,1"][0];
        b = this.X["2,1"][1];
        for (var e in this.a) this.a[e].moveTo(a, b)
    };
    hb.prototype.update = function () {
        if (0 < this.w) this.w--,
        2 != this.v && this.Ba.Y(),
        ib(this, 2);
        else if (0 < this.K) if (this.F) this.F = n,
        this.w += 8;
        else {
            if (this.K--, ib(this, 0), this.K <= this.W && this.C == this.D) {
                this.C = 1 == this.D ? 0.5 < Math.random() ? 0 : 2 : 1;
                var a = this.C < this.D;
                this.B != a && (this.B = a, ib(this, 1))
            }
        } else {
            var b = this.D + "," + this.C,
                a = this.X[b];
            ib(this, this.Ca[b + "," + this.o] ? 1 : 0);
            var b = a[this.o],
                c = a[this.o + 1],
                d;
            for (d in this.a) this.a[d].moveTo(b, c);
            this.o += 2;
            this.o >= a.length && (this.D = this.C, this.o = 0, this.K = this.W * (5 + 5 * Math.random()), this.F && (this.F = n, this.w += 8))
        }
    };
    hb.prototype.Y = function () {
        this.F = k
    };
    var ib = function (a, b) {
        if (a.v != b) {
            a.v = b;
            a.M.h();
            var c = 7;
            1 == a.v ? c = a.B ? 5 : 6 : 0 == a.v ? c = a.B ? 7 : 8 : 2 == a.v && (c = a.B ? 3 : 4);
            a.M = a.a[c];
            a.M.show()
        }
    };
    var jb = function (a, b, c, d) {
        var e = cb(C, "2:" + b);
        e.h();
        var f = function (a, b, c) {
            return H(new G, e, [a - e.p[0], b - e.p[1]], 1, [1, 1], c)
        };
        b = [];
        for (var g = 0; g < c.length - 3 + 1; g += 3) b.push(f(c[g], c[g + 1], c[g + 2]));
        for (var h = [], l = f(c[0], c[1], c[2]), g = 0; g < d; g++) h.push(l);
        d = c.length - 3;
        c = [f(c[d], c[d + 1], c[d + 2])];
        h = new I("start", h, [O[2]]);
        b = new I("fall", b, [O[2]]);
        c = new I("end", c, [O[2]]);
        h.end = b;
        b.end = c;
        return new Ya(a, h, {
            start: h,
            fall: b,
            end: c
        })
    };
    var P = n,
        Q = "",
        kb = function (a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
    };
    if (navigator.plugins && navigator.plugins.length) {
        var lb = navigator.plugins["Shockwave Flash"];
        lb && (P = k, lb.description && (Q = kb(lb.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (P = k, Q = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var mb = navigator.mimeTypes["application/x-shockwave-flash"];
        (P = mb && mb.enabledPlugin) && (Q = kb(mb.enabledPlugin.description))
    } else try {
        var nb = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            P = k,
            Q = kb(nb.GetVariable("$version"))
    } catch (ob) {
        try {
            nb =
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
            P = k,
            Q = "6.0.21"
        } catch (pb) {
            try {
                nb = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                P = k,
                Q = kb(nb.GetVariable("$version"))
            } catch (qb) {}
        }
    }
    var rb = P,
        sb = Q;
    var R, tb, S, T, ub = {},
        xb = function (a) {
        if (R && tb) {
            var b = ub[a];
            if (b) try {
                var c = b.la ? b.za : a;
                b.la = !b.la;
                S.playTrack(b.Ia, c, b.volume, b.Ha, 0, n);
                ub[a].ja = window.setTimeout(function () {
                    xb(a)
                }, b.Ga)
            } catch (d) {
                R = n
            }
        }
    },
        yb = function (a) {
        tb = a;
        if (!a && R) for (var b in ub) if (a = b, R) {
            var c = ub[a];
            if (c) {
                c.Ka && window.clearInterval(c.Ka);
                c.ja && window.clearTimeout(c.ja);
                try {
                    S.stopChannel(a);
                    var d = c.za;
                    d && S.stopChannel(d)
                } catch (e) {
                    R = n
                }
            }
        }
    },
        Ab = function () {
        T && (zb("hplogo-sound-player") || zb("hplogo-sound-player-2"))
    },
        Bb = function (a) {
        a.parentNode && a.parentNode.removeChild(a)
    },
        zb = function (a) {
        return (a = T.getElementById(a)) && a.playTrack ? (S = a, R = k) : n
    };
    var Cb = function (a) {
        Cb[" "](a);
        return a
    };
    Cb[" "] = function () {};
    var Db = !z || z && 9 <= Oa,
        Eb = z && !B("9");
    !Da || B("528");
    A && B("1.9b") || z && B("8") || Ca && B("9.5") || Da && B("528");
    A && !B("8") || z && B("9");
    var Fb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    Fb.prototype.ka = n;
    Fb.prototype.defaultPrevented = n;
    Fb.prototype.preventDefault = function () {
        this.defaultPrevented = k
    };
    var Gb = function (a, b) {
        a && this.init(a, b)
    };
    ga(Gb, Fb);
    r = Gb.prototype;
    r.target = m;
    r.relatedTarget = m;
    r.offsetX = 0;
    r.offsetY = 0;
    r.clientX = 0;
    r.clientY = 0;
    r.screenX = 0;
    r.screenY = 0;
    r.button = 0;
    r.keyCode = 0;
    r.charCode = 0;
    r.ctrlKey = n;
    r.altKey = n;
    r.shiftKey = n;
    r.metaKey = n;
    r.Aa = m;
    r.init = function (a, b) {
        var c = this.type = a.type;
        Fb.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (A) {
                var e;
                a: {
                    try {
                        Cb(d.nodeName);
                        e = k;
                        break a
                    } catch (f) {}
                    e = n
                }
                e || (d = m)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Da || a.offsetX !== j ? a.offsetX : a.layerX;
        this.offsetY = Da || a.offsetY !== j ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== j ? a.clientX : a.pageX;
        this.clientY = a.clientY !== j ? a.clientY : a.pageY;
        this.screenX =
        a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Aa = a;
        a.defaultPrevented && this.preventDefault();
        delete this.ka
    };
    r.preventDefault = function () {
        Gb.La.preventDefault.call(this);
        var a = this.Aa;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = n, Eb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Hb = function () {},
        Ib = 0;
    r = Hb.prototype;
    r.key = 0;
    r.A = n;
    r.ya = n;
    r.init = function (a, b, c, d, e, f) {
        if ("function" == aa(a)) this.xa = k;
        else if (a && a.handleEvent && "function" == aa(a.handleEvent)) this.xa = n;
        else throw Error("Invalid listener argument");
        this.H = a;
        this.ra = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.ga = f;
        this.ya = n;
        this.key = ++Ib;
        this.A = n
    };
    r.handleEvent = function (a) {
        return this.xa ? this.H.call(this.ga || this.src, a) : this.H.handleEvent.call(this.H, a)
    };
    var V = {},
        W = {},
        X = {},
        Y = {},
        Jb = function (a, b, c, d, e) {
        if (b) if ("array" == aa(b)) for (var f = 0; f < b.length; f++) Jb(a, b[f], c, d, e);
        else {
            d = !! d;
            var g = W;
            b in g || (g[b] = {
                i: 0,
                s: 0
            });
            g = g[b];
            d in g || (g[d] = {
                i: 0,
                s: 0
            }, g.i++);
            var g = g[d],
                h = da(a),
                l;
            g.s++;
            if (g[h]) {
                l = g[h];
                for (f = 0; f < l.length; f++) if (g = l[f], g.H == c && g.ga == e) {
                    if (g.A) break;
                    return
                }
            } else l = g[h] = [],
            g.i++;
            var p = Kb,
                u = Db ?
            function (a) {
                return p.call(u.src, u.key, a)
            } : function (a) {
                a = p.call(u.src, u.key, a);
                if (!a) return a
            },
                f = u;
            f.src = a;
            g = new Hb;
            g.init(c, f, a, b, d, e);
            c = g.key;
            f.key = c;
            l.push(g);
            V[c] = g;
            X[h] || (X[h] = []);
            X[h].push(g);
            a.addEventListener ? (a == t || !a.Ea) && a.addEventListener(b, f, d) : a.attachEvent(b in Y ? Y[b] : Y[b] = "on" + b, f)
        } else throw Error("Invalid event type");
    },
        Lb = function (a, b, c, d, e) {
        if ("array" == aa(b)) for (var f = 0; f < b.length; f++) Lb(a, b[f], c, d, e);
        else {
            d = !! d;
            a: {
                f = W;
                if (b in f && (f = f[b], d in f && (f = f[d], a = da(a), f[a]))) {
                    a = f[a];
                    break a
                }
                a = m
            }
            if (a) for (f = 0; f < a.length; f++) if (a[f].H == c && a[f].capture == d && a[f].ga == e) {
                Mb(a[f].key);
                break
            }
        }
    },
        Mb = function (a) {
        if (V[a]) {
            var b = V[a];
            if (!b.A) {
                var c = b.src,
                    d =
                b.type,
                    e = b.ra,
                    f = b.capture;
                c.removeEventListener ? (c == t || !c.Ea) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Y ? Y[d] : Y[d] = "on" + d, e);
                c = da(c);
                if (X[c]) {
                    var e = X[c],
                        g = va(e, b);
                    0 <= g && (ra(e.length != m), sa.splice.call(e, g, 1));
                    0 == e.length && delete X[c]
                }
                b.A = k;
                if (b = W[d][f][c]) b.wa = k,
                Nb(d, f, c, b);
                delete V[a]
            }
        }
    },
        Nb = function (a, b, c, d) {
        if (!d.V && d.wa) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].A ? d[e].ra.src = m : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.wa = n;
            0 == f && (delete W[a][b][c], W[a][b].i--, 0 == W[a][b].i && (delete W[a][b], W[a].i--), 0 == W[a].i && delete W[a])
        }
    },
        Pb = function (a, b, c, d, e) {
        var f = 1;
        b = da(b);
        if (a[b]) {
            a.s--;
            a = a[b];
            a.V ? a.V++ : a.V = 1;
            try {
                for (var g = a.length, h = 0; h < g; h++) {
                    var l = a[h];
                    l && !l.A && (f &= Ob(l, e) !== n)
                }
            } finally {
                a.V--,
                Nb(c, d, b, a)
            }
        }
        return Boolean(f)
    },
        Ob = function (a, b) {
        a.ya && Mb(a.key);
        return a.handleEvent(b)
    },
        Kb = function (a, b) {
        if (!V[a]) return k;
        var c = V[a],
            d = c.type,
            e = W;
        if (!(d in e)) return k;
        var e = e[d],
            f, g;
        if (!Db) {
            var h;
            if (!(h = b)) a: {
                h = ["window", "event"];
                for (var l = t; f = h.shift();) if (l[f] != m) l = l[f];
                else {
                    h = m;
                    break a
                }
                h = l
            }
            f =
            h;
            h = k in e;
            l = n in e;
            if (h) {
                if (0 > f.keyCode || f.returnValue != j) return k;
                a: {
                    var p = n;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (u) {
                        p = k
                    }
                    if (p || f.returnValue == j) f.returnValue = k
                }
            }
            p = new Gb;
            p.init(f, this);
            f = k;
            try {
                if (h) {
                    for (var q = [], s = p.currentTarget; s; s = s.parentNode) q.push(s);
                    g = e[k];
                    g.s = g.i;
                    for (var v = q.length - 1; !p.ka && 0 <= v && g.s; v--) p.currentTarget = q[v],
                    f &= Pb(g, q[v], d, k, p);
                    if (l) {
                        g = e[n];
                        g.s = g.i;
                        for (v = 0; !p.ka && v < q.length && g.s; v++) p.currentTarget = q[v],
                        f &= Pb(g, q[v], d, n, p)
                    }
                } else f = Ob(c, p)
            } finally {
                q && (q.length =
                0)
            }
            return f
        }
        d = new Gb(b, this);
        return f = Ob(c, d)
    };
    var Qb, Sb, Tb, Ub, Vb = {
        "Big G:idle": 0,
        "Big G:exit": 1,
        "Both Os:stare": 2,
        "Little g:idle": 3,
        "Little g:exit": 4,
        "L:idle": 5,
        "E:idle": 6,
        "E:chomp": 7,
        "cat:peek": 8,
        "cat:up": 9,
        "cat:run1": 10,
        "sound:off": 11,
        "skeleton:dance1": 12,
        "skeleton:dance2": 12,
        "skeleton:dance3": 12,
        "skeleton:dance4": 12,
        "spider:pull": 13
    },
        Z = function (a, b) {
        var c = Vb[a + ":" + b];
        if (!(c == j || Ub[c] || !window.google || !window.google.log)) {
            Ub[c] = k;
            c = "s:" + c + ",t:" + ((new Date).getTime() - Qb);
            Tb || (Tb = k, c += ",f:1");
            if ("cat" == a && "run1" == b) {
                var d = [],
                    e;
                for (e in Ub) d.push(e);
                d.sort(function (a, b) {
                    return a - b
                });
                c += ",a:" + d.join(".") + ",c:" + Sb
            }
            window.google.log("halloweenmonsters", c)
        }
    };
    var Wb = function () {
        this.ma = n;
        this.ta = k
    },
        Xb = {
        "Big G": {
            door: 1,
            shake: 5,
            openDoor: 4,
            entry: 2,
            squash: 0,
            exit: 3
        },
        "Both Os": {
            door: 17,
            shake: 19,
            openDoor: 18,
            fadeIn: 20,
            blinkAll: 16
        },
        "Little g": {
            door: 23,
            shake: 24,
            openDoor: 28,
            entry: 26,
            click: 25,
            exit: 27
        },
        L: {
            appear: 14,
            disappear: 15
        },
        E: {
            door: 11,
            shake: 13,
            openDoor: 12,
            squeeze: 9,
            chomp: 10
        },
        cat: {
            peek: 6,
            meow: 6,
            run1: 7
        },
        skeleton: {
            dance1: 29,
            dance2: 29,
            dance3: 29,
            dance4: 29
        },
        spider: {
            release: 21
        }
    },
        Zb = function (a) {
        a.ta || (yb(k), a.ma || (a.ma = k, Yb(22, 11E3)))
    };
    Wb.prototype.Ja = function (a, b) {
        if ("sound" == a) if ("on" == b || "on_hover" == b) Zb(this);
        else if ("off" == b || "off_hover" == b) this.ma = n,
        yb(n);
        a in Xb && b in Xb[a] && Yb(Xb[a][b], 0)
    };
    Wb.prototype.Y = function () {
        Yb(8, 0)
    };
    var Yb = function (a, b) {
        var c;
        if (R) {
            c = c || 0;
            try {
                var d = {
                    volume: 1,
                    Ha: 0,
                    Ia: a,
                    Ga: b
                };
                ub[a] = d;
                window.setTimeout(function () {
                    R && tb && S.playTrack(a, a, 1, 0, 0, k)
                }, c);
                b && (d.za = a + "__loop", d.la = k, d.ja = window.setTimeout(function () {
                    xb(a)
                }, b + c))
            } catch (e) {
                R = n
            }
        }
    };
    var N = m,
        $ = function (a) {
        Ua = 0;
        var b = $a(a, N),
            c = b[0],
            b = b[1];
        if ("mousemove" == a.type) for (var d = Ra, e = 0; e < d.a.length; e++) {
            var f = d.Fa[e],
                g = d.a[e],
                h = 15 * (Math.max(0, Math.min(1, c / 650)) - 0.5) * f,
                f = 15 * (Math.max(0, Math.min(1, b / 219)) - 0.5) * f;
            g.p = [g.O[0] + h, g.O[1] + f];
            Wa(g)
        }
        if ("mousedown" == a.type && !Sa) {
            Sa = k;
            N.setAttribute("title", "");
            for (d = 3; d < O.length; d++) db(C, d);
            d = Pa;
            d.ta = n;
            Zb(d)
        }
        "mousedown" == a.type && Sb++;
        d = C.Da;
        d(a);
        58 <= c && (171 >= c && 0 <= b && 28 >= b) && ("mousedown" == a.type && Qa.Y(), N.style.cursor = "pointer");
        E && (E = n, $b())
    },
        ac =

    function (a, b, c, d) {
        var e = function (a) {
            a = cb(C, "2:" + a);
            a.h();
            return a
        };
        b = H(new G, e(b), [0, 0], 1, [1, 1]);
        var f = H(new G, e(c), [0, 0], 1, [1, 1]),
            g = H(H(new G, e(c), [0, 0], 1, [1, 1]), e(d), [0, 0], 0.5, [1, 1]),
            h = H(new G, e(d), [0, 0], 1, [1, 1]);
        c = new I("flicker", [], [O[0]]);
        c.frames = function () {
            var a = [],
                b = 1E3 / 12;
            a.push(g);
            for (var c = 1 + 1E3 * Math.random() / b; 0 < c; c--) a.push(h);
            a.push(g);
            for (c = 1 + 200 * Math.random() / b; 0 < c; c--) a.push(f);
            return a
        };
        var l = new Ya(a, c, {
            flicker: c,
            off: new I("off", [b], [O[0]])
        }),
            p = k;
        L(D.spider, function (a, b) {
            "hold" == b && (p = !p, K(l, p ? "flicker" : "off"))
        });
        return l
    },
        bc = function () {
        var a = function (a) {
            return cb(C, "3:" + a)
        };
        this.a = [a(104), a(105), a(103), a(162), a(163), a(161)];
        this.Fa = [1, 1.2, 1, 1, 1.2, 1]
    },
        cc = function () {
        var a = D;
        L(a.cat, function (b, c) {
            "run2" == c && K(a["Big G"], "door");
            "run3" == c && (K(a["Both Os"], "door"), "idle" == a.L.d.N && K(a.L, "disappear"));
            "run4" == c && K(a["Little g"], "door");
            "run5" == c && K(a.E, "door")
        })
    },
        $b = function () {
        if (E || 360 < Ua) E = k;
        else {
            var a = (new Date).getTime();
            if (a - Va > 1E3 / 12) {
                Ua++;
                Va = a;
                for (var b in D) a = D[b],
                Za(a) && (2 < a.g.length ? (a.g[0].h(), a.g.shift(), a.g[0].show()) : !a.ba && a.d.aa ? J(a, a.d.aa) : J(a, a.d.end));
                Qa.update();
                Ta++;
                !Sa && 36 < Ta && (Ta = 0, K(D.skeleton, "point"))
            }
            na($b)
        }
    },
        dc = function () {
        if (N = document.getElementById("hplogo")) {
            Sa = n;
            Va = Ua = Ta = 0;
            E = n;
            if (document.getElementById("hplogo") && (R = n, tb = k, rb && 0 <= pa(sb, "9.0.0.0"))) {
                google.doodle || (google.doodle = {});
                google.doodle.flashLoaded = Ab;
                var a = document.createElement("iframe");
                a.name = a.id = "doodle-sound";
                var b = a.style;
                b.position = "fixed";
                b.top = "-150px";
                b.border = 0;
                b.width = "50px";
                b.height = "50px";
                document.body.appendChild(a);
                T = a.contentDocument;
                if (T == j || T == m) T = a.contentWindow ? a.contentWindow.document : m;
                T && (T.open(), T.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="hplogo-sound-player" type="application/x-shockwave-flash"><param name="movie" value="/logos/swf/halloween12.swf"><param name="allowScriptAccess" value="always"><object id="hplogo-sound-player-2" type="application/x-shockwave-flash" data="./halloween/halloween12.swf" width="0" height="0"><param name="allowScriptAccess" value="always"></object></object></body></html>'), T.close())
            }
            yb(n);
            a = C = new bb;
            db(a, 0);
            db(a, 1);
            db(a, 2);
            a = D = a.z;
            a.pumpkin_1 = ac("pumpkin_1", 10, 8, 9);
            a.pumpkin_2 = ac("pumpkin_2", 13, 11, 12);
            a.pumpkin_3 = ac("pumpkin_3", 16, 14, 15);
            a.pumpkin_4 = ac("pumpkin_4", 19, 17, 18);
            Pa = new Wb;
            var b = w(Pa.Ja, Pa),
                c;
            for (c in a) L(a[c], b);
            var d = D,
                e = {},
                f;
            for (f in d) e[f] = {};
            var g = k,
                h = n;
            c = function (a, b) {
                e[a][b] = k;
                g && (e["Big G"].idle && e["Both Os"].stare && e["Little g"].idle && e.L.idle && e.E.idle) && (g = n, K(d.cat, "riseUp"));
                !h && ("cat" == a && "run1" == b) && (h = k, window.setTimeout(cc, 0));
                "cat" == a && "gone" == b && google.nav && google.nav.go && google.nav.go(google.doodle.url)
            };
            L(d["Big G"], c);
            L(d["Both Os"], c);
            L(d["Little g"], c);
            L(d.L, c);
            L(d.E, c);
            L(d.cat, c);
            var l = 1,
                p = D.skeleton;
            L(p, function (a, b) {
                "idle" == b && (p.ha.idle.J = p.ha["dance" + l], 4 < ++l && (l = 1))
            });
            Ra = new bc;
            Qa = new hb(C, Pa, 12);
            c = [31, 32, 33, 34, 35, 36];
            f = 12;
            for (b = 0; b < c.length && b < gb.length; b++) {
                var u = "leaf" + (b + 1);
                a[u] = jb(u, c[b], gb[b], f);
                f += 12 * (5 + 5 * Math.random())
            }
            a = D;
            Qb = (new Date).getTime();
            Sb = 0;
            Tb = n;
            Ub = {};
            L(a["Big G"], Z);
            L(a["Both Os"], Z);
            L(a["Little g"], Z);
            L(a.L, Z);
            L(a.E, Z);
            L(a.cat, Z);
            L(a.skeleton, Z);
            L(a.spider, Z);
            L(a.sound, Z);
            Jb(N, "mousedown", $, n);
            Jb(document, "mouseup", $, n);
            Jb(document, "mousemove", $, n);
            $b()
        }
    },
        ec = function () {
        E = k;
        Lb(N, "mousedown", $, n);
        Lb(document, "mouseup", $, n);
        Lb(document, "mousemove", $, n);
        yb(n);
        var a = document.getElementById("doodle-sound");
        if (a) {
            var b = S;
            b && "OBJECT" == b.nodeName && (0 <= navigator.userAgent.indexOf("MSIE") ? (b.style.display = "none", function () {
                if (4 == b.readyState) {
                    for (var c in b)"function" == typeof b[c] && (b[c] = m);
                    Bb(b);
                    Bb(a)
                } else setTimeout(arguments.callee, 10)
            }()) : (Bb(b), Bb(a)))
        }
    },
        fc = function () {
        var a = window.google;
        if (a) {
            var b = a.msg,
                c = function () {
                var a = b && b.unlisten;
                a && a(67, c);
                ec();
                return k
            };
            if (!a.doodle || !a.doodle.jesr) {
                var d = ["google", "doodle", "jesr"],
                    e = t;
                !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
                for (var f; d.length && (f = d.shift());)!d.length ? e[f] = k : e = e[f] ? e[f] : e[f] = {};
                a.rein && a.dstr && (a.rein.push(dc), a.dstr.push(c))
            }
            a = a.psy;
            d = b && b.listen;
            a && (a.q && d) && d(67, c)
        }
        if ((a = window.google) && a.doodle) ec && (a.doodle.cpDestroy = ec),
        a.doodle.cpInit = function () {
            ec && ec();
            dc()
        };
        dc()
    },
        gc = window.google;
    gc && gc.x ? gc.x({
        id: "DOODLE"
    }, fc) : fc();
})();
