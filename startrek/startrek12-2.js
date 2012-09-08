(function () {
    var d = void 0,
    f = !0,
    g = null,
    h = !1,
    j, k = this,
    aa = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    ba = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    },
    l = function (a, b, c) {
        l = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return l.apply(g, arguments)
    },
    ca = Date.now ||
    function () {
        return +new Date
    },
    n = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.B = b.prototype;
        a.prototype = new c
    };
    Function.prototype.bind = Function.prototype.bind ||
    function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return l.apply(g, c)
        }
        return l(this, a)
    };
    var da = function (a, b) {
        for (var c = 0, e = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), i = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), p = Math.max(e.length, i.length), m = 0; 0 == c && m < p; m++) {
            var s = e[m] || "",
            P = i[m] || "",
            xa = RegExp("(\\d*)(\\D*)", "g"),
            pb = RegExp("(\\d*)(\\D*)", "g");
            do {
                var D = xa.exec(s) || ["", "", ""],
                E = pb.exec(P) || ["", "", ""];
                if (0 == D[0].length && 0 == E[0].length) break;
                c = ((0 == D[1].length ? 0 : parseInt(D[1], 10)) < (0 == E[1].length ? 0 : parseInt(E[1], 10)) ? - 1 : (0 == D[1].length ? 0 : parseInt(D[1], 10)) > (0 == E[1].length ? 0 : parseInt(E[1], 10)) ? 1 : 0) || ((0 == D[2].length) < (0 == E[2].length) ? - 1 : (0 == D[2].length) > (0 == E[2].length) ? 1 : 0) || (D[2] < E[2] ? - 1 : D[2] > E[2] ? 1 : 0)
            } while (0 == c)
        }
        return c
    };
    var q, ea, fa, ga, ha = function () {
        return k.navigator ? k.navigator.userAgent : g
    };
    ga = fa = ea = q = h;
    var ia;
    if (ia = ha()) {
        var ja = k.navigator;
        q = 0 == ia.indexOf("Opera");
        ea = !q && - 1 != ia.indexOf("MSIE");
        fa = !q && - 1 != ia.indexOf("WebKit");
        ga = !q && !fa && "Gecko" == ja.product
    }
    var r = ea,
    ka = ga,
    la = fa,
    ma;
        a: {
            var na = "",
            oa;
            if (q && k.opera) var pa = k.opera.version,
                na = "function" == typeof pa ? pa() : pa;
            else if (ka ? oa = /rv\:([^\);]+)(\)|;)/ : r ? oa = /MSIE\s+([^\);]+)(\)|;)/ : la && (oa = /WebKit\/(\S+)/), oa) var qa = oa.exec(ha()),
                na = qa ? qa[1] : "";
            if (r) {
                var ra, sa = k.document;
                ra = sa ? sa.documentMode : d;
                if (ra > parseFloat(na)) {
                    ma = String(ra);
                    break a
                }
            }
            ma = na
        }
    var ta = ma,
    ua = {},
    va = {},
    wa = function () {
        return va[9] || (va[9] = r && !! document.documentMode && 9 <= document.documentMode)
    };
    !r || wa();
    if (ka || r) if (!r || !wa()) ka && (ua["1.9.1"] || (ua["1.9.1"] = 0 <= da(ta, "1.9.1")));
    r && (ua["9"] || (ua["9"] = 0 <= da(ta, "9")));
    var t = function (a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
    };
    var u = function (a, b) {
        this.Ac = a;
        this.Ba = b;
        this.Bc = g;
        this.vb = h;
        this.wb = []
    };
    u.prototype.getWidth = function (a) {
        return this.Ba[a][2]
    };
    u.prototype.getHeight = function (a) {
        return this.Ba[a][3]
    };
    var v = function (a, b) {
        if (a.Bc) b && (a.vb ? b() : a.wb.push(b));
        else {
            b && a.wb.push(b);
            var c = document.createElement("img");
            a.Bc = c;
            var e = l(function () {
                if (!this.vb) {
                    this.vb = f;
                    for (var a = 0, b; b = this.wb[a]; a++) b()
                }
            }, a);
            c.onload = e;
            c.src = a.Ac;
            (c.complete || "complete" == c.readyState) && e()
        }
    },
    w = function (a, b, c, e) {
        if (a = a.Ba[b]) return -(a[0] + (c || 0)) + "px " + - (a[1] + (e || 0)) + "px"
    },
    y = function (a, b) {
        var c = x(),
        e = a.Ba[b];
        c.style.width = e[2] + "px";
        c.style.height = e[3] + "px";
        e = a.Ba[b];
        c.style.background = "url(" + a.Ac + ") " + - (e[0] + 0) + "px " + - (e[1] + 0) + "px no-repeat";
        return c
    },
    x = function () {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.dg = "none";
        a.style.MozUserSelect = "none";
        a.style.webkitUserSelect = "none";
        a.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        a.unselectable = "on";
        return a
    };
    var z = h,
    A = "",
    ya = function (a) {
        a = a.match(/[\d]+/g);
        a.length = 3;
        return a.join(".")
    };
    if (navigator.plugins && navigator.plugins.length) {
        var za = navigator.plugins["Shockwave Flash"];
        za && (z = f, za.description && (A = ya(za.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (z = f, A = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var Aa = navigator.mimeTypes["application/x-shockwave-flash"];
        (z = Aa && Aa.enabledPlugin) && (A = ya(Aa.enabledPlugin.description))
    } else try {
        var Ba = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
        z = f,
        A = ya(Ba.GetVariable("$version"))
    } catch (Ca) {
        try {
            Ba =
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
            z = f,
            A = "6.0.21"
        } catch (Da) {
            try {
                Ba = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                z = f,
                A = ya(Ba.GetVariable("$version"))
            } catch (Ea) {}
        }
    }
    var Fa = z,
    Ga = A;
    var B, C, F, G, H = {},
    I = function (a, b, c, e, i, p, m) {
        if (B) {
            m = m || 0;
            try {
                var s = {
                    volume: c,
                    Pf: e,
                    Qf: a,
                    Of: i
                };
                H[b] = s;
                window.setTimeout(function () {
                    B && C && F.playTrack(a, b, c, e, 0, p)
                }, m);
                i && (s.rb = b + "__loop", s.ub = f, s.tb = window.setTimeout(function () {
                    Ha(b)
                }, i + m))
            } catch (P) {
                B = h
            }
        }
    },
    Ha = function (a) {
        if (B && C) {
            var b = H[a];
            if (b) try {
                var c = b.ub ? b.rb : a;
                b.ub = !b.ub;
                F.playTrack(b.Qf, c, b.volume, b.Pf, 0, h);
                H[a].tb = window.setTimeout(function () {
                    Ha(a)
                }, b.Of)
            } catch (e) {
                B = h
            }
        }
    },
    Ia = function (a) {
        if (B) {
            var b = H[a];
            if (b) {
                b.zb && window.clearInterval(b.zb);
                b.tb && window.clearTimeout(b.tb);
                try {
                    F.stopChannel(a);
                    var c = b.rb;
                    c && F.stopChannel(c)
                } catch (e) {
                    B = h
                }
            }
        }
    },
    Ja = function () {
        if (B) for (var a in H) Ia(a)
    },
    Ka = function (a, b) {
        if (B && C) {
            var c = H[5];
            c && (c.zb = window.setInterval(function () {
                if (B && C) {
                    var c = H[5];
                    if (c) {
                        var i = c.volume,
                        i = i + b;
                        i >= a && (i = a, window.clearInterval(c.zb));
                        c = i;
                        if (B && C && (i = H[5])) {
                            i.volume = c;
                            try {
                                F.setVolume(5, c);
                                var p = i.rb;
                                p && F.setVolume(p, c)
                            } catch (m) {
                                B = h
                            }
                        }
                    }
                }
            }, 100))
        }
    },
    Ma = function () {
        G && (La("hplogo-sound-player") || La("hplogo-sound-player-2"))
    },
    La = function (a) {
        return (a =
            G.getElementById(a)) && a.playTrack ? (F = a, B = f) : h
    };
    var J, K = f,
    L = [],
    Na = h,
    Oa = 0,
    Pa = 1,
    M = 0,
    N = 0,
    Qa = 1E3 / 60,
    O = Qa,
    Ra = {
        backgroundPositionX: "px",
        backgroundPositionY: "px",
        left: "px",
        top: "px",
        width: "px"
    };
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (a) {
        window.setTimeout(a, O)
    };
    var Q = function (a, b) {
        return Sa(a, Math.ceil(b / O))
    },
    Sa = function (a, b) {
        var c = Pa++;
        L.push({
            Ca: Oa + b,
            call: a,
            Dc: h,
            xb: c
        });
        Na = f;
        return c
    },
    Ta = function (a) {
        for (var b = 0; b < L.length; b++) if (L[b].xb == a) {
            L[b].Dc = f;
            break
        }
    },
    R = function (a, b, c, e) {
        var i = {},
        p = {},
        m;
        for (m in b) i[m] = parseFloat(a.style[m] || 0),
            p[m] = parseFloat(b[m]);
        for (var s = [], c = Math.ceil(c / O), P = 0; P <= c; P++) {
            var xa = Math.min(1, P / c);
            for (m in b) s.push(Sa(l(function (b) {
                b = (1 - b) * i[m] + b * p[m] + (Ra[m] || "");
                "opacity" == m ? t(a, b) : a.style[m] = b
            }, window, xa), P))
        }
        e && s.push(Sa(e, c));
        return s
    },
    S = function (a, b, c, e, i) {
        for (var p = [], m = 0; m < c.length; m++) p.push(w(b, c[m]));
        b = [];
        e = Math.ceil(e / O);
        for (c = 0; c <= e; c++) m = Math.min(1, c / e),
            b.push(Sa(l(function (b) {
                a.style.backgroundPosition = p[Math.min(p.length - 1, Math.floor(b * p.length))]
            }, window, m), c));
        i && b.push(Sa(i, e))
    },
    Ua = function () {
        window.requestAnimationFrame(function b() {
            if (!K) {
                var c = (new Date).getTime();
                30 < Oa && M && (c - M >= 1.05 * O ? N++ : N >>= 1, 20 < N && (O = Math.min(50, 1.2 * O), N = 0));
                M = c;
                Na && (L.sort(function (b, c) {
                    return b.Ca == c.Ca ? b.xb - c.xb : b.Ca - c.Ca
                }), Na =
                h);
                for (var e = c = 0, i; i = L[e]; e++) if (i.Ca <= Oa) i.Dc || i.call(),
                    c++;
                else break;
                L.splice(0, c);
                Oa++;
                window.requestAnimationFrame(b)
            }
        })
    },
    Va = function () {
        K = f;
        M = N = 0;
        L = [];
        Oa = 0;
        Na = h;
        Pa = 1;
        O = Qa;
        M = N = 0
    };
    var T = function (a, b) {
        this.uc = 2E3;
        this.vc = 400;
        this.ff = 4E3;
        this.oc = 45E3;
        this.Je = 1E3;
        this.a = a;
        this.pa = b;
        this.A = [];
        this.ib = g;
        this.lb = this.s = this.R = 0;
        this.T = [];
        this.Ja = {};
        this.qc = h;
        this.bc = []
    };
    T.prototype.F = function () {
        throw "buildMainContainer should only be called on a subclass.";
    };
    var U = function (a) {
        a.d || a.F();
        return a.d
    },
    X = function (a, b, c, e, i, p, m) {
        var s = y(b, c);
        t(s, 0);
        a.A.push(s);
        V(a.d, s, e, i);
        b = y(b, c);
        b.style.cursor = "pointer";
        t(b, 0);
        c = l(function (a) {
            this.Ja[p] = (this.Ja[p] || 0) + 1;
            m && m(a)
        }, a);
        b.style.position = "absolute";
        b.style.margin = i + "px 0 0 " + e + "px";
        b.style.zIndex = 2;
        b.onmousedown = c;
        a.d.appendChild(b);
        b.onmousemove = l(function () {
            this.ib = s;
            t(s, 0.8);
            this.R || W(this, this.Je)
        }, a);
        b.onmouseout = l(function () {
            this.ib = g;
            t(s, 0)
        }, a);
        e = {
            w: b,
            ma: s,
            La: f
        };
        a.bc.push(e);
        return e
    },
    Wa = function (a, b) {
        b.La && (b.La = h, U(a).removeChild(b.ma), U(a).removeChild(b.w))
    },
    Xa = function (a) {
        for (var b = 0, c; c = a.bc[b]; b++) Wa(a, c)
    };
    T.prototype.qb = function () {
        this.s && (Ta(this.s), this.s = 0);
        this.k() || (Ya(this), K = f, M = N = 0, Ja())
    };
    var W = function (a, b) {
        K && (K = h, Ua(), a.z());
        a.s && Ta(a.s);
        a.s = Q(l(a.qb, a), a.oc);
        Ya(a);
        a.R && 0 < b && Ta(a.R);
        if (0 < b || !a.R) a.R = Q(l(a.Ef, a), b)
    };
    j = T.prototype;
    j.Ef = function () {
        this.R = 0;
        this.pb()
    };
    j.pb = function () {
        0 < this.A.length && !this.k() && (this.lb = Q(l(this.Mf, this), this.ff), Za(this))
    };
    j.Mf = function () {
        for (var a = 0, b; b = this.A[a]; a++) {
            var c = 0 == a ? l(this.Tf, this) : d;
            this.T[a] = R(b, {
                opacity: "1.0"
            }, this.uc, c)
        }
    };
    j.Tf = function () {
        for (var a = 0, b; b = this.A[a]; a++) {
            var c = 0 == a ? l(this.Uf, this) : d;
            this.T[a] = R(b, {
                opacity: "0.5"
            }, this.vc, c)
        }
    };
    j.Uf = function () {
        for (var a = 0, b; b = this.A[a]; a++) {
            var c = 0 == a ? l(this.Vf, this) : d;
            this.T[a] = R(b, {
                opacity: "1.0"
            }, this.vc, c)
        }
    };
    j.Vf = function () {
        for (var a = 0, b; b = this.A[a]; a++) {
            var c = 0 == a ? l(this.pb, this) : d;
            this.T[a] = R(b, {
                opacity: "0"
            }, this.uc, c)
        }
    };
    var Za = function (a) {
        for (var b = 0, c; c = a.T[b]; b++) for (var e = 0, i = d; i = c[e]; e++) Ta(i);
        a.T = []
    },
    Ya = function (a) {
        Za(a);
        for (var b = 0, c; c = a.A[b]; b++) c != a.ib && t(c, 0);
        a.lb && Ta(a.lb)
    };
    j = T.prototype;
    j.z = function () {};
    j.start = function () {
        this.s = Q(l(this.qb, this), this.oc);
        this.pb();
        this.z()
    };
    j.k = function () {
        return this.qc
    };
    j.H = function () {};
    j.muted = function () {
        W(this, 0)
    };
    j.yb = function () {
        K || this.z();
        W(this, 0)
    };
    var $a = function () {
        this.Ec = this.Fc = ca()
    };
    $a.prototype.log = function (a, b) {
        if (window.google && window.google.log) {
            var c = ca(),
            e = c - this.Fc,
            i = c - this.Ec,
            p = "s:" + a + ",c:",
            m = [],
            s;
            for (s in b) m.push(s + b[s]);
            e = p + m.join("_") + ",t:" + i + ",g:" + e;
            this.Ec = c;
            window.google.log("doodle-startrek", e)
        }
    };
    var V = function (a, b, c, e) {
        var i = b.style;
        i.position = "absolute";
        i.left = c + "px";
        i.top = e + "px";
        a.appendChild(b)
    };
    var ab = function (a, b) {
        T.call(this, a, b);
        this.fe = -220;
        this.Ma = 1E3;
        this.pe = 278;
        this.qe = 72;
        this.re = 7;
        this.se = 70;
        this.P = 305;
        this.Q = 36;
        this.oa = 302 - this.P;
        this.ie = 34 - this.Q;
        this.ge = 336 - this.P;
        this.he = 35 - this.Q;
        this.kb = this.a.getWidth(62);
        this.a.getHeight(62);
        this.je = 19;
        this.ke = 66;
        this.Re = 4E3;
        this.Qe = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
        this.le = 208;
        this.ne = 60;
        this.kc = [42, 43, 44, 45, 46];
        this.jb = [49, 50, 51, 52, 53, 54, 55];
        this.Oe = 2E3;
        this.jc =
        500;
        this.Ne = 100;
        this.Pe = 2500;
        this.lc = 750;
        this.ra = this.D = h
    };
    n(ab, T);
    j = ab.prototype;
    j.F = function () {
        this.d = document.createElement("div");
        var a = this.d.style;
        a.width = 375;
        a.height = 220;
        var b = x(),
        a = b.style;
        a.left = 0;
        a.top = 0;
        a.width = "375px";
        a.height = "220px";
        a.background = "url(startrek/startrek12-hp.jpg) 0 " + this.fe + "px no-repeat";
        V(this.d, b, 0, 0);
        this.ic();
        b = x();
        a = b.style;
        a.left = this.P;
        a.top = this.Q;
        a.width = this.a.getWidth(63) + "px";
        a.height = this.a.getHeight(63) + "px";
        a.overflow = "hidden";
        V(this.d, b, this.P, this.Q);
        this.bb = y(this.a, 62);
        V(b, this.bb, this.oa, this.ie);
        this.cb = y(this.a, 64);
        V(b, this.cb, this.ge, this.he);
        a = y(this.a, 63);
        V(b, a, 0, 0);
        this.qa();
        this.Yb();
        this.ec = y(this.a, 2);
        V(this.d, this.ec, this.je, this.ke);
        this.dc();
        this.cc = y(this.a, 42);
        V(this.d, this.cc, this.le, this.ne);
        this.ac()
    };
    j.ic = function () {};
    j.qa = function () {
        this.tc = y(this.a, 65);
        V(this.d, this.tc, this.pe, this.qe);
        this.Oa = y(this.a, 49);
        V(this.d, this.Oa, this.re, this.se)
    };
    j.nc = function () {
        !this.D && !this.ra && (this.D = this.ra = f, R(this.bb, {
            left: this.oa - this.kb + "px"
        }, this.Ma, l(this.zc, this)), R(this.cb, {
            left: this.oa + 2 * this.kb + "px"
        }, this.Ma), I("7", 1, 0.5, 0.9, 0, h));
        return this.D
    };
    j.Ff = function () {
        this.D && !this.ra && (this.ra = f, this.D = h, R(this.bb, {
            left: this.oa + "px"
        }, this.Ma, l(this.zc, this)), R(this.cb, {
            left: this.oa + this.kb + "px"
        }, this.Ma), I("7", 1, 0.5, 0.9, 0, h));
        return this.D
    };
    j.zc = function () {
        this.ra = h;
        this.D && this.Cc()
    };
    j.Cc = function () {};
    j.Yb = function () {
        if (!this.k()) {
            var a = Math.random() * (this.Oe - this.jc) + this.jc;
            this.Oa.style.backgroundPosition = w(this.a, this.jb[Math.floor(Math.random() * (this.jb.length - 1)) + 1]);
            Q(l(function () {
                this.Oa.style.backgroundPosition = w(this.a, this.jb[0])
            }, this), this.Ne);
            Q(l(this.Yb, this), a)
        }
    };
    j.dc = function () {
        this.k() || S(this.ec, this.a, this.Qe, this.Re, l(this.dc, this))
    };
    j.ac = function () {
        if (!this.k()) {
            var a = Math.random() * (this.Pe - this.lc) + this.lc;
            this.cc.style.backgroundPosition = w(this.a, this.kc[Math.floor(Math.random() * this.kc.length)]);
            Q(l(this.ac, this), a)
        }
    };
    var Y = function (a, b, c) {
        ab.call(this, a, c);
        this.ze = -440;
        this.$a = b;
        this.De = 232;
        this.Ee = 22;
        this.Ge = 180;
        this.He = 135;
        this.eb = 4E3;
        this.Ae = 400;
        this.ue = 225;
        this.ve = 69;
        this.xe = 99;
        this.ye = 160;
        this.te = [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95];
        this.we = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
        this.$b = "2 3 4 13 14 25".split(" ");
        this.Zb = [59, 60, 56, 58];
        this.Ie = 500;
        this.hb = this.gb = 0;
        this.We = 303;
        this.Xe = 38;
        this.Ue = 91;
        this.Ve = 70;
        this.Se = 113;
        this.Te = 148;
        this.fb =
        2E3;
        this.Xb = 500;
        this.Fe = 1500;
        this.ab = 2E3;
        this.mb = h
    };
    n(Y, ab);
    Y.prototype.F = function () {
        Y.B.F.call(this);
        X(this, this.a, 75, this.Ue, this.Ve, "u", l(this.mf, this));
        X(this, this.a, 57, this.Se, this.Te, "c", l(this.lf, this))
    };
    Y.prototype.qa = function () {
        X(this, this.a, 61, this.We, this.Xe, "d", l(this.sf, this));
        Y.B.qa.call(this)
    };
    Y.prototype.sf = function () {
        Xa(this);
        W(this, this.ab);
        bb(this);
        I("15", 8, 0.5, 0, 0, h);
        var a = y(this.a, 66);
        V(this.d, a, this.De, this.Ee);
        Q(l(function () {
            this.d.removeChild(a);
            this.nc()
        }, this), this.Xb);
        I("15", 8, 0.5, 0, 0, h, this.fb);
        Q(l(function () {
            this.d.appendChild(a)
        }, this), this.fb);
        Q(l(function () {
            this.d.removeChild(a);
            Q(this.pa, this.Fe)
        }, this), this.fb + this.Xb)
    };
    Y.prototype.lf = function () {
        bb(this);
        W(this, this.ab);
        this.wa || (this.wa = y(this.a, 59), V(this.d, this.wa, this.Ge, this.He));
        t(this.wa, 1);
        this.gb >= this.Zb.length && (this.gb = 0);
        this.wa.style.backgroundPosition = w(this.a, this.Zb[this.gb++]);
        Q(l(function () {
            t(this.wa, 0)
        }, this), this.Ie);
        this.hb >= this.$b.length && (this.hb = 0);
        I(this.$b[this.hb++], 7, 0.5, 0, 0, h)
    };
    var bb = function (a) {
        v(a.$a);
        var b = document.getElementById("hplogo");
        b && b.setAttribute("title", "");
        a.mb || (a.mb = f, a.z())
    };
    Y.prototype.z = function () {
        this.mb && !this.k() && (I("8", 5, 0, 0, 11770, f), Ka(0.2, 0.02))
    };
    Y.prototype.mf = function () {
        W(this, this.ab);
        bb(this);
        this.va = x();
        var a = this.va.style;
        a.background = "url(startrek/startrek12-hp.jpg) 0 " + this.ze + "px no-repeat";
        a.width = "375px";
        a.height = "220px";
        a.zIndex = 10;
        V(this.d, this.va, 0, 0);
        I("11", 10, 0.5, 0, 0, h);
        a = y(this.a, 76);
        V(this.va, a, this.ue, this.ve);
        var b = y(this.a, 96);
        V(this.va, b, this.xe, this.ye);
        S(a, this.a, this.te, this.eb / 2);
        Q(l(function () {
            S(b, this.a, this.we, this.eb / 2)
        }, this), this.Ae);
        Q(l(this.ef, this), this.eb)
    };
    Y.prototype.ef = function () {
        this.d.removeChild(this.va)
    };
    var cb = function (a, b, c) {
        ab.call(this, a, c);
        this.C = b;
        this.ia = 2E3;
        this.xf = 1E3;
        this.wf = 250;
        this.ga = 5;
        this.ha = 25;
        this.yf = 15;
        this.zf = 95
    };
    n(cb, ab);
    j = cb.prototype;
    j.ic = function () {
        this.Qa = y(this.C, 187);
        V(this.d, this.Qa, this.P + this.ga, this.Q + this.ha)
    };
    j.start = function () {
        cb.B.start.call(this);
        Q(l(this.nc, this), this.ia);
        I("22", 16, 0.5, 0, 0, h)
    };
    j.z = function () {
        this.k() || (I("8", 5, 0, 0, 11770, h), Ka(0.25, 0.02))
    };
    j.qa = function () {
        cb.B.qa.call(this);
        var a = this.a.getWidth(65) - 48 + "px";
        this.tc.style.width = a;
        a = this.a.getWidth(49) - 48 + "px";
        this.Oa.style.width = a
    };
    j.Cc = function () {
        this.Qa.style.zIndex = 10;
        Q(l(this.Ff, this), this.wf);
        R(this.Qa, {
            top: this.Q + this.zf + "px"
        }, this.xf, l(this.Hf, this));
        R(this.Qa, {
            left: this.P + this.yf + "px"
        }, 200)
    };
    j.Hf = function () {
        Q(this.pa, this.ia)
    };
    var db = function (a, b) {
        this.a = a;
        this.O = y(this.a, 59);
        this.ka = y(this.a, 58);
        this.la = y(this.a, 0);
        this.za = 0;
        this.ya = -this.a.getHeight(58);
        this.xa = 0;
        this.Pa = 7;
        this.kf = b;
        this.duration = 1E3 / 24;
        this.O.style.display = "none";
        this.O.style.top = "20px";
        this.O.style.width = this.a.getWidth(59) / 51 + "px";
        this.ka.style.display = "none";
        this.ka.style.bottom = this.ya + "px";
        this.la.style.top = this.Pa + "px";
        this.la.style.left = this.xa + "px"
    };
    db.prototype.wc = function () {
        if (!this.kf()) {
            this.xa > - this.a.getWidth(0) && (this.xa -= 7, this.Pa -= 1.54, this.la.style.top = Math.floor(this.Pa) + "px", this.la.style.left = Math.floor(this.xa) + "px");
            var a = this.a.getHeight(58) / 163,
            a = Math.ceil(100 * a) / 100;
            this.ya += a;
            this.za++;
            if (0 >= this.ya) this.ka.style.bottom = Math.floor(this.ya) + "px",
                39 < this.za && (this.za = 9);
            else if (51 <= this.za) {
                Ia(4);
                return
            }
            a = this.a.getWidth(59) / 51;
            this.O.style.backgroundPosition = w(this.a, 59, this.za * a, 0);
            Q(l(this.wc, this), this.duration)
        }
    };
    var eb = function (a, b, c, e) {
        T.call(this, a, e);
        this.$a = c;
        this.g = b;
        this.Rd = 339;
        this.Sd = 192;
        this.Nd = 116;
        this.Od = 163;
        this.Ya = 173;
        this.Za = 129;
        this.ga = 118;
        this.Pd = this.ha = 117;
        this.Qd = 116;
        this.Vd = 0;
        this.Wd = 5;
        this.Td = 252;
        this.Ud = 140;
        this.Xd = 98;
        this.Yd = 102;
        this.Ka = "0.3";
        this.oe = 1500;
        this.Be = 417;
        this.i = 1500;
        this.Ce = 1E3;
        this.fc = "startrek/startrek12-transport.png";
        this.Ke = new u(this.fc, g);
        this.Ia = y(this.a, 42);
        this.v = y(this.a, 2);
        this.Ib = y(this.a, 1);
        this.L = x();
        this.p = y(this.a, 4);
        this.Jb = y(this.a, 3);
        this.M = x()
    };
    n(eb, T);
    var fb = function (a, b, c) {
        var e = b.style;
        e.height = a.a.getHeight(c) + "px";
        e.width = a.a.getWidth(c) + "px";
        e.background = "url(" + a.fc + ") repeat 0 0";
        t(b, 0)
    };
    j = eb.prototype;
    j.F = function () {
        this.d = y(this.a, 41);
        var a = y(this.a, 43);
        V(this.d, a, 264, 150);
        var b = [43, 44, 45, 46, 47],
        c = this.a,
        e = l(function () {
            this.k() || S(a, c, b, 1250, e)
        }, this);
        e();
        fb(this, this.L, 2);
        fb(this, this.M, 4);
        V(this.d, this.L, this.Ya, this.Za);
        V(this.d, this.M, this.ga, this.ha);
        V(this.d, this.Ib, this.Ya - 1, this.Za - 1);
        V(this.d, this.Jb, this.ga - 1, this.ha - 1);
        t(this.Ia, 0);
        V(this.d, this.Ia, this.Nd, this.Od);
        t(this.v, 1);
        t(this.p, 1);
        V(this.d, this.v, this.Ya, this.Za);
        V(this.d, this.p, this.ga, this.ha);
        this.Lb = X(this, this.g, 67, this.Pd, this.Qd, "r", l(this.ee, this));
        this.Kb = y(this.a, 48);
        V(this.d, this.Kb, this.Rd, this.Sd);
        X(this, this.g, 74, this.Td, this.Ud, "x", l(this.be, this));
        y(this.a, 59);
        y(this.a, 58);
        y(this.a, 0);
        var i = this.Vb = new db(this.a, l(this.k, this)),
        p = this.d;
        p.appendChild(i.O);
        p.appendChild(i.ka);
        p.appendChild(i.la);
        this.ae = X(this, this.g, 47, this.Vd, this.Wd, "t", l(this.ce, this));
        this.N = y(this.a, 5);
        this.N.style.display = "none";
        V(this.d, this.N, this.Xd, this.Yd)
    };
    j.ce = function () {
        W(this, 8E3);
        Wa(this, this.ae);
        var a = this.Vb;
        a.O.style.display = "block";
        a.ka.style.display = "block";
        Q(l(a.wc, a), a.duration);
        I("12", 4, 0.5, - 0.7, 8077, f)
    };
    j.ee = function () {
        W(this, 1500);
        this.p.style.display = "none";
        this.N.style.display = "block";
        Wa(this, this.Lb);
        S(this.N, this.a, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], this.oe, l(function () {
            this.N.style.display = "none";
            this.p.style.display = "block";
            var a = this.Lb;
            a.La || (a.La = f, U(this).appendChild(a.ma), U(this).appendChild(a.w))
        }, this));
        I("24", 11, 0.5, 0, 0, h)
    };
    j.be = function () {
        W(this, 3E3);
        Xa(this);
        this.N.style.display = "none";
        this.p.style.display = "block";
        R(this.M, {
            opacity: "0.8"
        }, 1);
        R(this.L, {
            opacity: "0.8"
        }, 1);
        R(this.M, {
            backgroundPositionY: "30px"
        }, 3 * this.i);
        R(this.L, {
            backgroundPositionY: "30px"
        }, 3 * this.i);
        R(this.Ia, {
            opacity: "0.8"
        }, this.i);
        R(this.v, {
            opacity: this.Ka
        }, this.i, l(this.jf, this));
        R(this.p, {
            opacity: this.Ka
        }, this.i);
        S(this.Kb, this.a, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57], this.Be);
        I("21", 2, 0.2, 0, 0, h);
        I("20", 3, 0.5, 0, 0, h, this.Ce)
    };
    j.jf = function () {
        R(this.v, {
            opacity: "0.0"
        }, this.i, l(this.Af, this));
        R(this.p, {
            opacity: "0.0"
        }, this.i);
        R(this.L, {
            opacity: this.Ka
        }, this.i);
        R(this.M, {
            opacity: this.Ka
        }, this.i);
        R(this.Ia, {
            opacity: "0.0"
        }, this.i)
    };
    j.Lf = function () {
        R(this.Jb, {
            opacity: "0.0"
        }, 100);
        R(this.Ib, {
            opacity: "0.0"
        }, 100)
    };
    j.Af = function () {
        R(this.L, {
            opacity: "0.0"
        }, this.i, l(this.Kf, this));
        R(this.M, {
            opacity: "0.0"
        }, this.i);
        Q(l(this.Lf, this), this.i)
    };
    j.start = function () {
        eb.B.start.call(this);
        v(this.Ke);
        v(this.$a)
    };
    j.z = function () {
        this.k() || (I("19", 5, 0.15, 0, 5958, h), Ka(0.15, 0.01))
    };
    j.Kf = function () {
        Q(this.pa, 1E3)
    };
    var gb = function (a, b, c) {
        T.call(this, a, c);
        this.g = b;
        this.Yc = 133;
        this.cd = 140;
        this.Ab = 307;
        this.Pc = 80;
        this.Mc = 86;
        this.fd = 192;
        this.gd = 97;
        this.hd = 249;
        this.jd = 135;
        this.kd = 93;
        this.ld = 181;
        this.ud = 277;
        this.vd = 128;
        this.wd = 51;
        this.xd = 107;
        this.Ic = 101;
        this.Jc = 52;
        this.Gc = 93;
        this.Hc = 49;
        this.Zc = 74;
        this.$c = 69;
        this.ad = 51;
        this.bd = 44;
        this.Wc = -1;
        this.Xc = 124;
        this.Uc = 0;
        this.Vc = 35;
        this.Qc = 72;
        this.Rc = 18;
        this.qd = 161;
        this.rd = 57;
        this.dd = 142;
        this.ed = 48;
        this.Nc = 208;
        this.Oc = 80;
        this.sd = 225;
        this.td = 153;
        this.od = 209;
        this.pd = 103;
        this.Sc =
        85;
        this.Tc = 23;
        this.Tb = [184, 185, 185, 186, 186, 186, 184];
        this.Wb = [108, 109, 109, 110, 110, 111, 111, 112, 112, 108];
        this.Ub = [82, 83, 84, 85, 86];
        this.Eb = [188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235];
        this.Fb = [290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330,
        331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362];
        this.Gb = [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182];
        this.Hb = [147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160];
        this.Ob = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        this.Rb = [241, 242, 243, 244, 245];
        this.Pb = [238, 239, 240];
        this.Qb = [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
        this.Sb = [87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107];
        this.Mb = [247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289];
        this.Nb = [114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144];
        this.Gd = this.Kd = 2E3;
        this.Ld = 6E3;
        this.md = 97;
        this.nd = 181;
        this.yd = 26;
        this.Kc = this.zd = 101;
        this.Lc = 52;
        this.Dd = 24;
        this.Ed = 33;
        this.Fd = 39;
        this.Hd = 10;
        this.Id = 40;
        this.Jd = 54;
        this.Md = 30;
        this.Me = 5;
        this.ia = 1500;
        this.Le = 200;
        this.$d = 18;
        this.Zd = 51
    };
    n(gb, T);
    gb.prototype.F = function () {
        this.d = y(this.a, 183);
        this.p = y(this.a, 184);
        V(this.d, this.p, this.fd, this.gd);
        this.ba = y(this.a, 108);
        t(this.ba, 0);
        V(this.d, this.ba, this.Ab, this.Pc);
        this.Ea = y(this.a, 82);
        V(this.d, this.Ea, 375, this.Mc);
        this.v = y(this.a, 145);
        V(this.d, this.v, this.Yc, this.cd);
        this.Cb = y(this.a, 364);
        V(this.d, this.Cb, this.wd, this.xd);
        this.Bb = y(this.a, 237);
        V(this.d, this.Bb, this.kd, this.ld);
        this.Db = y(this.a, 61);
        V(this.d, this.Db, this.Ic, this.Jc);
        this.I = X(this, this.g, 68, this.md, this.nd, "o", l(this.Bd, this));
        this.J = X(this, this.g, 71, this.yd, this.zd, "s", l(this.Cd, this));
        this.K = X(this, this.g, 48, this.Kc, this.Lc, "g", l(this.Ad, this));
        this.W = y(this.a, 188);
        t(this.W, 0);
        V(this.d, this.W, this.Zc, this.$c);
        this.Wa = y(this.a, 236);
        t(this.Wa, 0);
        V(this.d, this.Wa, this.hd, this.jd);
        this.X = y(this.a, 290);
        t(this.X, 0);
        V(this.d, this.X, this.ad, this.bd);
        this.Xa = y(this.a, 363);
        t(this.Xa, 0);
        V(this.d, this.Xa, this.ud, this.vd);
        this.Y = y(this.a, 161);
        t(this.Y, 0);
        V(this.d, this.Y, this.Wc, this.Xc);
        this.aa = y(this.a, 146);
        t(this.aa, 0);
        V(this.d, this.aa, this.Uc, this.Vc);
        this.$ = y(this.a, 0);
        t(this.$, 0);
        V(this.d, this.$, this.Qc, this.Rc);
        this.ea = y(this.a, 62);
        t(this.ea, 0);
        V(this.d, this.ea, this.dd, this.ed);
        this.Z = y(this.a, 241);
        t(this.Z, 0);
        V(this.d, this.Z, this.qd, this.rd);
        this.Ha = y(this.a, 87);
        t(this.Ha, 0);
        V(this.d, this.Ha, this.Nc, this.Oc);
        this.Fa = y(this.a, 114);
        t(this.Fa, 0);
        V(this.d, this.Fa, this.Sc, this.Tc);
        this.Va = y(this.a, 60);
        t(this.Va, 0);
        V(this.d, this.Va, this.Gc, this.Hc);
        this.Ga = y(this.a, 247);
        t(this.Ga, 0);
        V(this.d, this.Ga, this.sd, this.td);
        this.Da =
        y(this.a, 238);
        t(this.Da, 0);
        V(this.d, this.Da, this.od, this.pd)
    };
    var hb = function (a) {
        a.J && a.d.removeChild(a.J.w);
        a.K && a.d.removeChild(a.K.w);
        a.I && a.d.removeChild(a.I.w);
        t(a.v, 0)
    },
    ib = function (a) {
        a.J && a.d.appendChild(a.J.w);
        a.K && a.d.appendChild(a.K.w);
        a.I && a.d.appendChild(a.I.w);
        t(a.v, 1)
    };
    j = gb.prototype;
    j.Bd = function () {
        W(this, this.Gd);
        hb(this);
        this.d.removeChild(this.I.ma);
        this.I = g;
        t(this.Bb, 0);
        t(this.W, 1);
        S(this.W, this.a, this.Eb, 1E3 * this.Eb.length / 24, l(this.cf, this));
        Q(l(this.gc, this), 1E3 * this.Dd / 24);
        Q(l(this.hc, this), 1E3 * this.Ed / 24);
        Q(l(function () {
            I("16", 13, 0.5, 0, 0, h)
        }, this), 1E3 * this.Fd / 24)
    };
    j.gc = function () {
        I("9", 6, 0.5, 0, 0, h);
        I("18", 12, 0.5, 0, 0, h);
        S(this.ba, this.a, this.Wb, 1E3 * this.Wb.length / 24)
    };
    j.hc = function () {
        S(this.p, this.a, this.Tb, 1E3 * this.Tb.length / 24);
        I("18", 12, 0.2, 0, 0, h)
    };
    j.cf = function () {
        ib(this);
        t(this.W, 0);
        t(this.Wa, 1)
    };
    j.Cd = function () {
        W(this, this.Kd);
        hb(this);
        this.d.removeChild(this.J.ma);
        this.J = g;
        t(this.Cb, 0);
        t(this.X, 1);
        S(this.X, this.a, this.Fb, 1E3 * this.Fb.length / 24, l(this.df, this));
        Q(l(function () {
            I("1", 14, 0.5, 0, 0, h)
        }, this), 1E3 * this.Hd / 24);
        Q(l(this.gc, this), 1E3 * this.Id / 24);
        Q(l(this.hc, this), 1E3 * this.Jd / 24)
    };
    j.df = function () {
        ib(this);
        t(this.X, 0);
        t(this.Xa, 1)
    };
    j.Ad = function () {
        W(this, this.Ld);
        hb(this);
        this.d.removeChild(this.K.ma);
        this.K = g;
        t(this.Y, 1);
        S(this.Y, this.a, this.Gb, 1E3 * this.Gb.length / 24, l(this.gf, this))
    };
    j.gf = function () {
        Q(l(this.ag, this), 1E3 * this.Me / 24)
    };
    j.ag = function () {
        this.d.removeChild(this.Y);
        t(this.aa, 1);
        S(this.aa, this.a, this.Hb, 1E3 * this.Hb.length / 24, l(this.hf, this));
        Q(l(function () {
            I("6", 17, 0.5, 0, 0, h)
        }, this), 1E3 * this.Md / 24)
    };
    j.hf = function () {
        t(this.aa, 0);
        t(this.Db, 0);
        t(this.$, 1);
        S(this.$, this.a, this.Ob, 1E3 * this.Ob.length / 24, l(this.of, this));
        Q(l(this.qf, this), 1E3 * this.Zd / 24)
    };
    j.qf = function () {
        t(this.ea, 1);
        t(this.Z, 1);
        S(this.Z, this.a, this.Rb, 1E3 * this.Rb.length / 24);
        S(this.ea, this.a, this.Qb, 1E3 * this.Qb.length / 24, l(this.rf, this));
        I("5", 17, 0.5, 0, 0, h)
    };
    j.rf = function () {
        this.d.removeChild(this.ea)
    };
    j.of = function () {
        t(this.ba, 0);
        t(this.Ha, 1);
        S(this.Ha, this.a, this.Sb, 1E3 * this.Sb.length / 24, l(this.tf, this));
        I("10", 6, 0.5, 0, 0, h);
        Q(l(function () {
            I("18", 12, 0.5, 0, 0, h)
        }, this), 1E3 * this.$d / 24)
    };
    j.tf = function () {
        t(this.$, 0);
        t(this.Fa, 1);
        t(this.Va, 1);
        S(this.Fa, this.a, this.Nb, 1E3 * this.Nb.length / 24, l(this.nf, this));
        t(this.Ga, 1);
        S(this.Ga, this.a, this.Mb, 1E3 * this.Mb.length / 24)
    };
    j.nf = function () {
        t(this.Z, 0);
        t(this.Da, 1);
        S(this.Da, this.a, this.Pb, 1E3 * this.Pb.length / 24);
        Q(this.pa, this.ia)
    };
    j.start = function () {
        gb.B.start.call(this);
        Q(l(this.Wf, this), this.ia)
    };
    j.z = function () {
        this.k() || (I("0", 5, 0, 0, 6135, h), Ka(0.35, 0.02))
    };
    j.Wf = function () {
        R(this.Ea, {
            left: this.Ab + "px"
        }, this.Le, l(this.Yf, this))
    };
    j.Yf = function () {
        S(this.Ea, this.a, this.Ub, 1E3 * this.Ub.length / 24, l(this.vf, this))
    };
    j.vf = function () {
        t(this.ba, 1);
        t(this.Ea, 0)
    };
    var jb = function (a, b) {
        T.call(this, a, b);
        this.ua = y(this.a, 81);
        this.S = y(this.a, 80);
        this.Aa = this.a.getWidth(81);
        this.$e = this.a.getHeight(81);
        this.Na = (375 - this.Aa) / 2;
        this.Ze = this.a.getWidth(80);
        this.Ye = this.a.getHeight(80);
        this.bf = 1500
    };
    n(jb, T);
    j = jb.prototype;
    j.F = function () {
        this.d = y(this.a, 246)
    };
    j.start = function () {
        jb.B.start.call(this);
        var a = (220 - this.$e) / 2;
        this.ua.style.left = this.Na + "px";
        this.ua.style.top = a + "px";
        this.ua.style.width = "0";
        var a = -this.Ze,
        b = (220 - this.Ye) / 2;
        this.S.style.left = a + "px";
        this.S.style.top = b + "px";
        this.d.appendChild(this.ua);
        this.d.appendChild(this.S);
        I("17", 9, 0.5, 0, 0, h);
        Q(l(this.uf, this, a), this.bf)
    };
    j.uf = function (a) {
        var b = this.Na - 94;
        R(this.S, {
            left: b + "px"
        }, 1E3 * (b - a) / 250, l(this.Xf, this))
    };
    j.Xf = function () {
        var a = 1E3 * this.Aa / 250;
        R(this.S, {
            left: this.Na - 94 + this.Aa + "px"
        }, a, l(this.Nf, this));
        R(this.ua, {
            width: this.Aa + "px"
        }, a)
    };
    j.Nf = function () {
        R(this.S, {
            left: "375px"
        }, 1E3 * (375 - (this.Na + this.Aa - 94)) / 250, l(this.Sf, this))
    };
    j.Sf = function () {
        Q(this.pa, 4E3)
    };
    var kb = function (a, b, c, e) {
        this.g = a;
        this.nb = b;
        this.C = c;
        this.U = e;
        this.G = x();
        a = this.G.style;
        a.background = "url(startrek/startrek12-transition.png) repeat-y 0 0";
        a.zIndex = 90;
        a.height = "220px";
        a.display = "none";
        a.width = "1534px";
        this.U.appendChild(this.G);
        this.yc = 580;
        this.ob = 0;
        this.o = g;
        this.xc = new $a
    };
    kb.prototype.Zf = function (a, b, c) {
        U(b).style.left = 0;
        U(b).style.right = 0;
        U(b).style.position = "absolute";
        this.U.insertBefore(U(b), U(a));
        this.U.removeChild(U(a));
        a.qc = f;
        a.s && (Ta(a.s), a.s = 0);
        this.o = g;
        a = l(this.Gf, this, a, b);
        c ? v(c, a) : a()
    };
    kb.prototype.Gf = function (a, b) {
        Q(l(this.cg, this, a, b), 600)
    };
    kb.prototype.cg = function (a, b) {
        R(this.G, {
            backgroundPositionX: 2 * - this.yc + "px"
        }, 600, l(this.$f, this, a, b))
    };
    kb.prototype.$f = function (a, b) {
        this.G.style.display = "none";
        this.xc.log(this.ob, a.Ja);
        this.ob++;
        b.start();
        this.o = b
    };
    var lb = function (a, b, c, e) {
        Ja();
        I("23", 15, 0.5, 0, 0, h);
        a.G.style.backgroundPositionX = "0px";
        a.G.style.display = "block";
        R(a.G, {
            backgroundPositionX: - a.yc + "px"
        }, 600, l(a.Zf, a, b, c, e))
    },
    mb = function (a, b, c) {
        var b = y(a.g, b),
        e = b.style,
        i;
        for (i in c) e[c[i]] = "-1px";
        e.zIndex = 99;
        a.U.appendChild(b)
    };
    j = kb.prototype;
    j.Cf = function () {
        this.o && W(this.o, 0)
    };
    j.start = function () {
        mb(this, 72, ["top", "left"]);
        mb(this, 73, ["top", "right"]);
        mb(this, 0, ["bottom", "left"]);
        mb(this, 1, ["bottom", "right"]);
        this.V = new Y(this.g, this.nb, l(this.Bf, this));
        this.U.appendChild(U(this.V));
        this.V.start();
        this.o = this.V;
        this.U.onclick = l(this.Cf, this);
        K = h;
        Ua()
    };
    j.H = function () {
        Va();
        this.V && this.V.H();
        this.Ra && this.Ra.H();
        this.Sa && this.Sa.H();
        this.Ta && this.Ta.H();
        this.Ua && this.Ua.H()
    };
    j.Bf = function () {
        this.Ra = new eb(this.nb, this.g, this.C, l(this.Df, this));
        lb(this, this.V, this.Ra, this.nb)
    };
    j.Df = function () {
        this.Sa = new gb(this.C, this.g, l(this.If, this));
        lb(this, this.Ra, this.Sa, this.C)
    };
    j.If = function () {
        this.Ta = new cb(this.g, this.C, l(this.Jf, this));
        lb(this, this.Sa, this.Ta)
    };
    j.Jf = function () {
        this.Ua = new jb(this.C, l(this.Rf, this));
        lb(this, this.Ta, this.Ua)
    };
    j.Rf = function () {
        Va();
        this.xc.log(this.ob, this.Ua.Ja);
        google.nav && google.nav.go && google.nav.go(google.doodle.url || "/search?q=Star+Trek%3A+The+Original+Series&ct=startrek12&oi=ddle")
    };
    j.muted = function () {
        this.o && this.o.muted()
    };
    j.yb = function () {
        this.o && this.o.yb()
    };
    var nb = {
        ALL: ["Mute", "Unmute"],
        af: ["Demp", "Ontdemp"],
        am_ET: ["\u12f5\u121d\u1338 \u12a8\u120d \u12a0\u12f5\u122d\u130d", "\u12f5\u121d\u1338-\u12a8\u120d \u1240\u120d\u1265\u1235"],
        ar: ["\u0643\u062a\u0645 \u0627\u0644\u0635\u0648\u062a", "\u0639\u062f\u0645 \u0643\u062a\u0645 \u0627\u0644\u0635\u0648\u062a"],
        bg: ["\u0411\u0435\u0437 \u0437\u0432\u0443\u043a", "\u0421\u044a\u0441 \u0437\u0432\u0443\u043a"],
        bn: ["\u09a8\u09bf\u0983\u09b6\u09ac\u09cd\u09a6", "\u09b8\u09b6\u09ac\u09cd\u09a6"],
        bs: ["Isklju\u010di zvuk",
        "Uklju\u010di zvuk"],
        ca: ["Amb so", "Sense so"],
        cs: ["Vypnout zvuk", "Zapnout zvuk"],
        da: ["Sl\u00e5 lyden fra", "Sl\u00e5 lyden til"],
        de: ["Stumm schalten", "Stummschaltung aufheben"],
        el: ["\u03a3\u03af\u03b3\u03b1\u03c3\u03b7", "\u039a\u03b1\u03c4\u03ac\u03c1\u03b3\u03b7\u03c3\u03b7 \u03c3\u03af\u03b3\u03b1\u03c3\u03b7\u03c2"],
        es: ["Sin sonido", "Con sonido"],
        "es-419": ["Desactivar sonido", "Activar sonido"],
        et: ["Vaigista", "T\u00fchista vaigistus"],
        eu: ["Aktibatu audioa", "Desaktibatu audioa"],
        fi: ["Mykist\u00e4",
        "Poista mykistys"],
        fr: ["Couper le son", "Activer le son"],
        "fr-CA": ["Couper le son", "Activer le son"],
        gl: ["Sen son ", "Con son"],
        hr: ["Bez zvuka", "Sa zvukom"],
        hu: ["N\u00e9m\u00edt\u00e1s", "N\u00e9m\u00edt\u00e1s felold\u00e1sa"],
        id: ["Senyapkan", "Suarakan"],
        is: ["Sl\u00f6kkva \u00e1 hlj\u00f3\u00f0i", "Kveikja \u00e1 hlj\u00f3\u00f0i"],
        it: ["Disattiva audio", "Attiva audio"],
        iw: ["\u05d4\u05e9\u05ea\u05e7", "\u05d1\u05d8\u05dc \u05d4\u05e9\u05ea\u05e7\u05d4"],
        ja: ["\u30df\u30e5\u30fc\u30c8", "\u30df\u30e5\u30fc\u30c8\u89e3\u9664"],
        ko: ["\uc74c\uc18c\uac70", "\uc74c\uc18c\uac70 \ud574\uc81c"],
        lt: ["Be garso", "Su garsu"],
        lv: ["Bez ska\u0146as", "Ar ska\u0146u"],
        mk: [" \u0418\u0441\u043a\u043b\u0443\u0447\u0435\u0442\u0435 \u0437\u0432\u0443\u043a", "\u0412\u043a\u043b\u0443\u0447\u0435\u0442\u0435 \u0437\u0432\u0443\u043a"],
        mr: ["\u0928\u093f\u0903\u0936\u092c\u094d\u0926", "\u0938\u0936\u092c\u094d\u0926"],
        ms_my: ["Redam", "Nyahredam"],
        nl: ["Dempen", "Dempen ongedaan maken"],
        no: ["Sl\u00e5 av lyd", "Sl\u00e5 p\u00e5 lyd"],
        pl: ["Wy\u0142\u0105cz d\u017awi\u0119k",
        "W\u0142\u0105cz d\u017awi\u0119k"],
        "pt-BR": ["Desativar som", "Ativar som"],
        "pt-PT": ["Desativar som", "Ativar som"],
        ro: ["Activeaz\u0103 sunetul", "Dezactiveaz\u0103 sunetul"],
        ru: ["\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a", "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a"],
        sk: ["Vypn\u00fa\u0165 zvuk", "Zapn\u00fa\u0165 zvuk"],
        sl: ["Izklopi zvok", "Vklopi zvok"],
        sr: ["\u0418\u0441\u043a\u0459\u0443\u0447\u0438 \u0437\u0432\u0443\u043a", "\u0423\u043a\u0459\u0443\u0447\u0438 \u0437\u0432\u0443\u043a"],
        sq: ["Pa z\u00eb", "Me z\u00eb"],
        sv: ["St\u00e4ng av ljudet", "S\u00e4tt p\u00e5 ljudet"],
        sw: ["Nyamazisha", "Rejesha sauti"],
        ta: ["\u0b92\u0bb2\u0bbf\u0baf\u0b9f\u0b95\u0bcd\u0b95\u0bc1", "\u0b92\u0bb2\u0bbf\u0b87\u0baf\u0b95\u0bcd\u0b95\u0bc1"],
        th: ["\u0e1b\u0e34\u0e14\u0e40\u0e2a\u0e35\u0e22\u0e07 ", "\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e2a\u0e35\u0e22\u0e07"],
        tr: ["Sesi kapat", "Sesi a\u00e7"],
        uk: ["\u0412\u0438\u043c\u043a\u043d\u0443\u0442\u0438 \u0437\u0432\u0443\u043a", "\u0423\u0432\u0456\u043c\u043a\u043d\u0443\u0442\u0438 \u0437\u0432\u0443\u043a"],
        vi: ["T\u1eaft ti\u1ebfng", "B\u1eadt ti\u1ebfng"],
        "zh-CN": ["\u975c\u97f3", "\u53d6\u6d88\u9759\u97f3"],
        "zh-TW_HK": ["\u975c\u97f3", "\u53d6\u6d88\u975c\u97f3"],
        "zh-TW_tw": ["\u975c\u97f3", "\u53d6\u6d88\u975c\u97f3"],
        zu: ["Thulisa", "Susa ukuthula"],
        hi: ["\u092e\u094d\u092f\u0942\u091f", "\u0905\u0928\u092e\u094d\u092f\u0942\u091f"],
        fil: ["I-mute", "I-unmute"],
        fa: ["\u0628\u06cc\u200c\u0635\u062f\u0627 \u06a9\u0631\u062f\u0646", "\u0635\u062f\u0627\u062f\u0627\u0631 \u06a9\u0631\u062f\u0646"]
    },
    ob = function (a) {
        return google.kHL in nb && nb[google.kHL][a] || nb.ALL[a]
    };
    var qb = h,
    rb = g,
    sb = g,
    Z = g,
    $ = g,
    tb = new u("startrek/startrek12-hp-bridge.png", [[767, 149, 10, 9], [965, 552, 10, 9], [176, 456, 22, 18], [663, 447, 22, 18], [1010, 281, 22, 18], [0, 0, 22, 18], [511, 447, 22, 18], [0, 42, 22, 18], [285, 340, 22, 18], [865, 716, 22, 18], [812, 356, 22, 18], [1013, 40, 22, 18], [938, 239, 22, 18], [865, 588, 22, 18], [176, 376, 22, 18], [938, 260, 22, 18], [938, 281, 22, 18], [0, 523, 22, 18], [123, 672, 22, 18], [418, 447, 22, 18], [812, 335, 22, 18], [840, 377, 22, 18], [396, 589, 22, 18], [789, 0, 22, 18], [151, 376, 22, 18], [0, 319, 22, 18], [0, 63, 22, 18], [310, 340, 22,
        18], [1008, 239, 22, 18], [310, 361, 22, 18], [148, 672, 22, 18], [246, 319, 22, 18], [985, 281, 22, 18], [347, 456, 22, 18], [201, 319, 22, 18], [0, 21, 22, 18], [840, 589, 22, 18], [837, 356, 22, 18], [151, 456, 22, 18], [865, 250, 22, 18], [123, 717, 22, 18], [814, 0, 22, 18], [511, 468, 19, 15], [767, 0, 19, 15], [396, 447, 19, 15], [963, 281, 19, 15], [151, 477, 19, 15], [511, 487, 61, 60], [0, 469, 54, 27], [25, 523, 368, 146], [25, 0, 368, 146], [396, 298, 368, 146], [469, 589, 368, 146], [396, 149, 368, 146], [396, 0, 368, 146], [0, 149, 368, 146], [123, 693, 62, 21], [688, 447, 167, 72], [691, 522, 62, 21], [58,
        712, 62, 21], [865, 564, 62, 21], [865, 290, 67, 112], [938, 302, 35, 113], [443, 447, 65, 112], [581, 447, 34, 113], [865, 418, 97, 111], [938, 156, 79, 80], [151, 319, 47, 54], [246, 340, 36, 28], [0, 298, 18, 18], [418, 468, 18, 18], [865, 609, 70, 104], [839, 0, 10, 9], [45, 672, 10, 9], [25, 319, 123, 80], [865, 40, 72, 73], [396, 696, 42, 37], [98, 402, 42, 37], [421, 589, 42, 37], [865, 0, 42, 37], [767, 21, 42, 37], [767, 228, 42, 37], [938, 116, 42, 37], [334, 672, 42, 37], [201, 376, 42, 37], [963, 239, 42, 37], [618, 447, 42, 37], [983, 116, 42, 37], [890, 250, 42, 37], [767, 335, 42, 37], [0, 672, 42, 37], [536,
        447, 42, 37], [151, 416, 42, 37], [57, 469, 42, 37], [335, 340, 42, 37], [58, 672, 42, 37], [767, 268, 70, 64], [865, 116, 70, 64], [188, 672, 70, 64], [201, 456, 70, 64], [25, 402, 70, 64], [938, 609, 70, 64], [767, 161, 70, 64], [767, 377, 70, 64], [865, 183, 70, 64], [261, 672, 70, 64], [396, 629, 70, 64], [965, 485, 70, 64], [940, 40, 70, 64], [767, 61, 70, 64], [618, 522, 70, 64], [965, 418, 70, 64], [756, 522, 70, 64], [319, 382, 70, 64], [274, 456, 70, 64], [246, 382, 70, 64]]),
    ub = new u("startrek/startrek12-hp-transporter.png", [[438, 219, 62, 60], [279, 73, 65, 71], [1416, 0, 63, 69], [405, 0, 47,
        54], [7268, 219, 45, 52], [7268, 0, 90, 70], [7175, 180, 90, 70], [93, 219, 90, 70], [0, 0, 90, 70], [7175, 73, 90, 70], [548, 0, 90, 70], [1112, 146, 90, 70], [1019, 69, 90, 70], [0, 219, 90, 70], [93, 146, 90, 70], [93, 0, 90, 70], [1112, 219, 90, 70], [1019, 176, 90, 70], [455, 0, 90, 70], [0, 146, 90, 70], [1112, 73, 90, 70], [279, 147, 90, 70], [93, 73, 90, 70], [279, 220, 90, 70], [186, 73, 90, 70], [7175, 0, 90, 70], [1816, 0, 90, 70], [455, 73, 90, 70], [548, 146, 90, 70], [279, 0, 90, 70], [1112, 0, 90, 70], [7268, 146, 90, 70], [186, 0, 90, 70], [1575, 0, 90, 70], [438, 146, 90, 70], [0, 73, 90, 70], [7268, 73, 90,
        70], [186, 146, 90, 70], [1482, 0, 90, 70], [548, 73, 90, 70], [1323, 0, 90, 70], [641, 0, 375, 220], [1205, 0, 115, 41], [641, 223, 89, 66], [548, 219, 89, 66], [186, 219, 89, 66], [733, 223, 89, 66], [1019, 0, 89, 66], [7316, 219, 30, 31], [1019, 249, 30, 31], [372, 0, 30, 31], [7175, 253, 30, 31], [405, 57, 30, 31], [405, 146, 30, 31], [372, 146, 30, 31], [7175, 146, 30, 31], [7208, 146, 30, 31], [1019, 142, 30, 31], [1668, 0, 145, 80], [1205, 83, 5967, 209]]),
    vb = new u("startrek/startrek12-hp-anim.png", [[0, 26624, 118, 72], [0, 4743, 118, 72], [0, 18728, 118, 72], [242, 8140, 118, 72], [0, 7912, 118,
        72], [0, 18454, 118, 72], [202, 10433, 118, 72], [149, 13435, 118, 72], [0, 28884, 118, 72], [253, 19689, 118, 72], [121, 7912, 118, 72], [0, 17193, 118, 72], [160, 9732, 118, 72], [253, 17421, 118, 72], [0, 22902, 118, 72], [254, 25427, 118, 72], [121, 22902, 118, 72], [0, 24823, 118, 72], [0, 11825, 118, 72], [0, 14400, 118, 72], [0, 15555, 118, 72], [253, 12546, 118, 72], [207, 18E3, 118, 72], [0, 16877, 118, 72], [0, 7449, 118, 72], [0, 8944, 118, 72], [0, 4893, 118, 72], [121, 17193, 118, 72], [0, 24744, 118, 72], [0, 23829, 118, 72], [121, 24823, 118, 72], [28, 13435, 118, 72], [0, 9871, 118, 72], [0,
        5890, 118, 72], [242, 17193, 118, 72], [0, 6991, 118, 72], [0, 4818, 118, 72], [0, 13129, 118, 72], [253, 28517, 118, 72], [68, 19369, 118, 72], [0, 27288, 118, 72], [121, 8140, 118, 72], [0, 25352, 118, 72], [121, 25352, 118, 72], [0, 6635, 118, 72], [121, 27288, 118, 72], [0, 6504, 118, 72], [0, 28809, 118, 72], [207, 28059, 118, 72], [242, 7912, 118, 72], [0, 24898, 118, 72], [0, 10024, 118, 72], [253, 10155, 118, 72], [253, 15249, 118, 72], [246, 8688, 118, 72], [121, 4818, 118, 72], [242, 25352, 118, 72], [0, 12389, 118, 72], [0, 8140, 118, 72], [0, 15630, 118, 72], [235, 7246, 71, 38], [253, 19764, 53,
        27], [0, 23403, 243, 61], [0, 12125, 243, 61], [0, 21465, 243, 61], [121, 15555, 243, 61], [0, 7385, 243, 61], [52, 16813, 243, 61], [0, 12189, 243, 61], [0, 22977, 243, 61], [0, 28300, 243, 61], [52, 16749, 243, 61], [0, 17755, 243, 61], [42, 5826, 243, 61], [0, 19444, 243, 61], [42, 4248, 243, 61], [0, 8688, 243, 61], [0, 2540, 243, 61], [0, 3764, 243, 61], [0, 14336, 243, 61], [0, 12320, 239, 66], [0, 22689, 179, 57], [270, 13435, 66, 128], [246, 12189, 66, 128], [273, 18905, 66, 128], [52, 6118, 66, 128], [0, 14887, 66, 128], [0, 19689, 157, 136], [0, 9732, 157, 136], [75, 7246, 157, 136], [160, 16952, 157,
        136], [0, 181, 157, 136], [0, 28517, 157, 136], [105, 28161, 157, 136], [0, 27084, 157, 136], [0, 8549, 157, 136], [207, 7773, 157, 136], [0, 16952, 157, 136], [0, 15705, 157, 136], [0, 25427, 157, 136], [0, 4968, 157, 136], [42, 10433, 157, 136], [207, 11986, 157, 136], [0, 4312, 157, 136], [160, 8549, 157, 136], [121, 12389, 157, 136], [212, 4604, 157, 136], [0, 4604, 157, 136], [0, 13849, 72, 133], [0, 13566, 72, 133], [298, 23038, 72, 133], [298, 22902, 72, 133], [0, 7246, 72, 133], [273, 21465, 39, 53], [253, 20848, 39, 53], [328, 28059, 39, 53], [0, 14734, 39, 53], [242, 27288, 39, 53], [0, 4248, 39,
        53], [246, 7385, 39, 53], [0, 10252, 39, 53], [305, 1016, 39, 53], [320, 16952, 39, 53], [0, 6579, 39, 53], [0, 25069, 39, 53], [253, 10099, 39, 53], [0, 26699, 39, 53], [273, 19036, 39, 53], [0, 11900, 39, 53], [0, 5770, 39, 53], [0, 25250, 39, 53], [246, 14336, 39, 53], [52, 24688, 39, 53], [273, 15068, 39, 53], [94, 25250, 39, 53], [0, 1357, 39, 53], [273, 2604, 39, 53], [273, 11240, 39, 53], [0, 5826, 39, 53], [325, 10252, 39, 53], [121, 23829, 39, 53], [160, 25427, 39, 53], [273, 23904, 39, 53], [0, 22072, 39, 53], [273, 3914, 39, 53], [253, 9115, 69, 75], [0, 12862, 102, 83], [42, 11900, 102, 83], [0, 1169,
        102, 83], [273, 18102, 102, 83], [160, 4893, 102, 83], [273, 835, 102, 83], [0, 6810, 102, 83], [0, 3828, 102, 83], [0, 7524, 102, 83], [249, 26699, 102, 83], [249, 26785, 102, 83], [0, 28161, 102, 83], [253, 4451, 102, 83], [0, 7093, 102, 83], [265, 4893, 102, 83], [28, 3147, 204, 99], [0, 13747, 204, 99], [0, 7755, 204, 99], [0, 19267, 204, 99], [0, 5668, 204, 99], [42, 26801, 204, 99], [121, 6991, 204, 99], [0, 21363, 204, 99], [0, 18E3, 204, 99], [0, 17091, 204, 99], [0, 6402, 204, 99], [0, 1255, 204, 99], [42, 26699, 204, 99], [52, 18803, 204, 99], [52, 22072, 204, 99], [160, 27186, 204, 99], [0, 9449, 204,
        99], [160, 27084, 204, 99], [0, 11986, 204, 99], [136, 25250, 204, 99], [0, 28059, 204, 99], [147, 11825, 204, 99], [0, 24266, 375, 220], [42, 14734, 70, 62], [0, 22345, 70, 62], [0, 20667, 70, 62], [0, 19369, 65, 58], [0, 2025, 250, 150], [0, 6249, 250, 150], [0, 9115, 250, 150], [0, 26471, 250, 150], [42, 10572, 250, 150], [0, 27544, 250, 150], [0, 28656, 250, 150], [0, 1538, 250, 150], [0, 19981, 250, 150], [0, 8396, 250, 150], [121, 6657, 250, 150], [0, 10099, 250, 150], [0, 22749, 250, 150], [52, 682, 250, 150], [75, 13849, 250, 150], [121, 8944, 250, 150], [0, 4095, 250, 150], [0, 15249, 250, 150], [52,
        13282, 250, 150], [121, 24898, 250, 150], [121, 6504, 250, 150], [0, 19828, 250, 150], [0, 15402, 250, 150], [0, 12528, 250, 150], [0, 17421, 250, 150], [0, 5965, 250, 150], [0, 10906, 250, 150], [0, 20134, 250, 150], [0, 17268, 250, 150], [0, 28364, 250, 150], [121, 7602, 250, 150], [28, 3249, 250, 150], [105, 7093, 250, 150], [0, 4451, 250, 150], [0, 18102, 250, 150], [52, 1016, 250, 150], [0, 1691, 250, 150], [115, 14734, 250, 150], [121, 14400, 250, 150], [86, 14002, 250, 150], [121, 13129, 250, 150], [121, 24670, 250, 150], [0, 7987, 250, 150], [121, 28884, 250, 150], [0, 20848, 250, 150], [121, 9871,
        250, 150], [121, 7449, 250, 150], [52, 22174, 250, 150], [207, 5668, 31, 14], [273, 1844, 39, 31], [253, 5965, 36, 52], [325, 16206, 36, 52], [182, 22689, 36, 52], [273, 18188, 83, 94], [0, 14002, 83, 94], [160, 4312, 83, 94], [273, 15844, 83, 94], [0, 20468, 83, 94], [0, 11421, 375, 220], [273, 26903, 49, 15], [0, 1016, 49, 15], [0, 18436, 49, 15], [207, 28134, 49, 15], [207, 7755, 49, 15], [0, 13282, 49, 15], [0, 20649, 49, 15], [288, 5668, 49, 15], [0, 21182, 49, 15], [0, 18710, 49, 15], [315, 23904, 49, 15], [325, 24489, 49, 15], [28, 3402, 49, 15], [253, 22749, 49, 15], [273, 3583, 49, 15], [0, 22128, 49,
        15], [0, 18803, 49, 15], [121, 18746, 49, 15], [305, 13282, 49, 15], [273, 24489, 49, 15], [273, 22689, 49, 15], [0, 22327, 49, 15], [0, 682, 49, 15], [121, 18728, 49, 15], [221, 22689, 49, 15], [315, 3914, 49, 15], [246, 22902, 49, 15], [0, 24670, 49, 15], [0, 25051, 49, 15], [0, 20565, 49, 15], [0, 10725, 49, 15], [253, 12528, 49, 15], [160, 4604, 49, 15], [0, 16206, 49, 15], [0, 5288, 49, 15], [202, 25427, 49, 15], [315, 12189, 49, 15], [0, 9097, 49, 15], [42, 25250, 49, 15], [315, 1844, 49, 15], [273, 23403, 49, 15], [0, 6118, 49, 15], [52, 24670, 49, 15], [0, 5306, 270, 178], [0, 1844, 270, 178], [28, 2966,
        270, 178], [0, 15068, 270, 178], [0, 26290, 270, 178], [0, 21710, 270, 178], [0, 25747, 270, 178], [0, 18255, 270, 178], [0, 25928, 270, 178], [0, 835, 270, 178], [0, 23648, 270, 178], [0, 18905, 270, 178], [52, 21182, 270, 178], [0, 23467, 270, 178], [0, 16025, 270, 178], [52, 10725, 270, 178], [0, 3583, 270, 178], [0, 24489, 270, 178], [0, 27878, 270, 178], [0, 23222, 270, 178], [0, 23904, 270, 178], [0, 21001, 270, 178], [0, 9268, 270, 178], [0, 21891, 270, 178], [75, 13566, 270, 178], [0, 25566, 270, 178], [0, 27697, 270, 178], [0, 26109, 270, 178], [42, 10252, 270, 178], [0, 15844, 270, 178], [0, 2785,
        270, 178], [0, 19086, 270, 178], [52, 16206, 270, 178], [69, 14887, 270, 178], [0, 9551, 270, 178], [0, 12681, 270, 178], [0, 21529, 270, 178], [42, 1357, 270, 178], [0, 26903, 270, 178], [73, 22327, 270, 178], [0, 3914, 270, 178], [0, 8215, 270, 178], [0, 2178, 270, 178], [0, 501, 270, 178], [0, 5487, 270, 178], [0, 8763, 270, 178], [86, 20468, 270, 178], [0, 24085, 270, 178], [73, 20667, 270, 178], [80, 3402, 270, 178], [0, 23041, 270, 178], [0, 19508, 270, 178], [0, 2604, 270, 178], [0, 14155, 270, 178], [0, 0, 270, 178], [0, 14553, 270, 178], [0, 27363, 270, 178], [0, 320, 270, 178], [0, 11059, 270, 178],
        [0, 5107, 270, 178], [0, 18529, 270, 178], [0, 17819, 270, 178], [52, 16568, 270, 178], [0, 17574, 270, 178], [0, 11240, 270, 178], [0, 20287, 270, 178], [0, 2359, 270, 178], [105, 6810, 270, 178], [42, 25069, 270, 178], [52, 16387, 270, 178], [0, 11644, 270, 178], [0, 12948, 270, 178], [0, 22508, 270, 178], [0, 2966, 25, 15], [0, 13435, 25, 35]]),
    wb = new u("startrek/startrek12-transition.png", g),
    xb = function () {
        if (J) {
            var a = J;
            a.o && a.o.qb()
        }
    },
    yb = function (a) {
        t(a, 1)
    },
    zb = function (a) {
        t(a, 0.7)
    },
    Ab = function () {
        $.style.display = "none";
        Z.style.display = "block";
        C = f;
        J && J.yb()
    },
    Bb = function () {
        Z.style.display = "none";
        $.style.display = "block";
        C = h;
        Ja();
        J && J.muted()
    },
    Cb = function () {
        if (!qb && (rb = document.getElementById("hplogo_main"))) {
            rb.innerHTML = "";
            qb = f;
            v(tb, function () {
                J = new kb(tb, ub, vb, rb);
                sb = document.getElementById("hplogo_cnt");
                Z = y(tb, 70);
                Z.setAttribute("title", ob(0));
                var a = Z.style;
                a.bottom = "1px";
                a.left = "2px";
                a.display = "block";
                t(Z, 0.7);
                $ = y(tb, 69);
                $.setAttribute("title", ob(1));
                sb.appendChild(Z);
                Z.onmousedown = Bb;
                Z.onmousemove = l(yb, window, Z);
                Z.onmouseout = l(zb, window, Z);
                a = $.style;
                a.bottom = "1px";
                a.left = "2px";
                a.display = "none";
                t($, 0.7);
                sb.appendChild($);
                $.onmousedown = Ab;
                $.onmousemove = l(yb, window, $);
                $.onmouseout = l(zb, window, $);
                J.start()
            });
            v(wb);
            B = h;
            C = f;
            var a;
            if (a = Fa) a = 0 <= da(Ga, "9.0.0.0");
            if (a) {
                google.doodle || (google.doodle = {});
                google.doodle.flashLoaded = Ma;
                a = document.createElement("iframe");
                a.name = "doodle-sound";
                var b = a.style;
                b.position = "absolute";
                b.top = "-150px";
                b.border = 0;
                b.width = "50px";
                b.height = "50px";
                document.getElementById("hplogo").appendChild(a);
                G = a.contentDocument;
                if (G == d || G == g) G = a.contentWindow.document;
                G.open();
                G.write('<html><head></head><body><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="0" height="0" id="hplogo-sound-player" type="application/x-shockwave-flash"><param name="movie" value="startrek/startrek12.swf"><param name="allowScriptAccess" value="always"><object id="hplogo-sound-player-2" type="application/x-shockwave-flash" data="startrek/startrek12.swf" width="0" height="0"><param name="allowScriptAccess" value="always"></object></object></body></html>');
                G.close()
            }
            window.onblur = xb
        }
    },
    Db = function () {
        var a = window.google;
        if (a) {
            var b = a.msg,
            c = function () {
                var a = b && b.unlisten;
                a && a(67, c);
                qb = h;
                J && J.H();
                rb && (rb.innerHTML = "");
                C = h;
                Ja();
                var e = F;
                e && "OBJECT" == e.nodeName && (0 <= navigator.userAgent.indexOf("MSIE") ? (e.style.display = "none", function () {
                    if (e.readyState == 4) {
                        for (var a in e) typeof e[a] == "function" && (e[a] = g);
                        e.parentNode && e.parentNode.removeChild(e)
                    } else setTimeout(arguments.callee, 10)
                }()) : e.parentNode && e.parentNode.removeChild(e));
                return f
            };
            if (!a.doodle || !a.doodle.jesr) {
                var e = ["google", "doodle", "jesr"],
                i = k;
                !(e[0] in i) && i.execScript && i.execScript("var " + e[0]);
                for (var p; e.length && (p = e.shift());)!e.length ? i[p] = f : i = i[p] ? i[p] : i[p] = {};
                a.rein && a.dstr && (a.rein.push(Cb), a.dstr.push(c))
            }
            a = a.psy;
            e = b && b.listen;
            a && (a.q && e) && e(67, c)
        }
        Cb()
    },
    Eb = window.google;
    Eb && Eb.x ? Eb.x({
        id: "DOODLE"
    }, Db) : Db();
})();
