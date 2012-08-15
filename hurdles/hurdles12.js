(function () {
    var h = void 0,
        i = !0,
        j = null,
        l = !1,
        m, n = this,
        aa = function (a, b) {
        var c = a.split("."),
            d = n;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)!c.length && b !== h ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    },
        ba = function (a) {
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
        return b
    },
        ca = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
        da = 0,
        ea = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
        fa = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d =
            Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    },
        p = function (a, b, c) {
        p = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return p.apply(j, arguments)
    },
        ga = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Y = b.prototype;
        a.prototype = new c
    };
    Function.prototype.bind = Function.prototype.bind ||
    function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return p.apply(j, c)
        }
        return p(this, a)
    };
    var ha, ia = 0 <= navigator.userAgent.indexOf("MSIE"),
        ka = function (a) {
        for (var b = ja, c = 0, d; d = b[c++];) if (a == d) return i;
        return l
    },
        r = function (a, b, c) {
        a = document.createElement(a);
        b && (a.id = b);
        c && (a.className = c);
        return a
    },
        u = function () {
        return (new Date).getTime()
    },
        v = function (a, b, c) {
        return b + Math.min(1, Math.max(0, a)) * (c - b)
    },
        la = function (a, b) {
        return eval(a + String.fromCharCode(37) + b)
    };
    var w = function () {
        this.C = this.A = this.a = 0;
        this.K = []
    };
    w.prototype.play = function () {
        ha || (this.stop(), this.A = 0, this.C = u(), this.a = window.setInterval(p(this.W, this), 16), this.W())
    };
    var x = function (a, b, c) {
        a.K.push({
            duration: c || 0,
            L: b
        })
    };
    w.prototype.stop = function () {
        if (this.a) {
            for (var a; a = this.K[this.A++];) a.L(1);
            window.clearInterval(this.a);
            this.a = 0
        }
    };
    var ma = function (a, b) {
        x(a, function () {}, b)
    };
    w.prototype.W = function () {
        var a = u();
        if (!ha) for (var b; b = this.K[this.A]; this.A++) {
            var c = a - this.C;
            if (c < b.duration) {
                b.L(c / b.duration);
                return
            }
            b.L(1);
            0 < b.duration && (this.C += b.duration)
        }
        this.stop()
    };
    var y = function (a, b, c, d, e, f, g, k) {
        this.reset = function () {
            this.g = this.frame = this.M = this.o = 0;
            this.offsetX = g || 0;
            this.offsetY = k || 0;
            this.O = this.p = this.opacity = 1;
            this.Z = c || 0;
            this.$ = d || 0;
            this.y = this.x = 0;
            this.N = a;
            this.i = a.getContext("2d");
            this.v = j;
            this.H = f;
            this.G = b;
            this.I = e
        };
        this.reset()
    },
        na = function (a, b, c) {
        for (var d = new w, c = c / b, e = function (a, b) {
            return function () {
                a.frame = b
            }
        }, f = 0; f < b; f++) x(d, e(a, f), c);
        return d
    },
        z = function (a) {
        if (a.opacity) {
            var b = a.getWidth(),
                c = a.getHeight(),
                d = b / 2,
                e = c / 2,
                f = Math.abs(a.offsetX),
                g =
            Math.abs(a.offsetY);
            if (0 < a.x + b + d + f && 0 < a.y + c + e + g && a.x - f < a.N.width && a.y - g < a.N.height) {
                a.i.save();
                a.i.globalAlpha = a.opacity;
                f = a.x + d;
                g = a.y + e;
                a.g && (f += a.g * (Math.random() - 0.5), g += a.g * (Math.random() - 0.5));
                a.i.translate(f, g);
                f = a.o;
                a.M && (f += a.M * (Math.random() - 0.5));
                f && a.i.rotate(f);
                (1 != a.p || 1 != a.O) && a.i.scale(a.p, a.O);
                try {
                    a.i.drawImage(a.G, a.Z + a.frame * b, a.$, b, c, a.offsetX - d, a.offsetY - e, b, c)
                } catch (k) {}
                a.i.restore()
            }
        }
    },
        oa = function (a, b, c) {
        var d;
        d == h && (d = a.opacity);
        a.v && a.v.stop();
        a.v = new w;
        var e = a.v,
            f = d;
        d = p(function (a) {
            this.opacity =
            v(a, f, c)
        }, a);
        x(e, d, b);
        a.v.play()
    };
    y.prototype.getHeight = function () {
        this.H || (this.H = this.G.height);
        return this.H
    };
    y.prototype.getWidth = function () {
        this.I || (this.I = this.G.width);
        return this.I
    };
    var pa = {},
        qa = {
        pa: 0,
        ra: 1,
        ua: 2,
        oa: 3,
        qa: 4,
        ta: 5,
        ma: 6
    };
    pa.F = j;
    var ra = [],
        A = {},
        sa = 0,
        ta = j,
        ua = j,
        va = l,
        B = function (a, b) {
        return a.buttons[b] && 0.5 < a.buttons[b]
    },
        C = function (a, b, c) {
        return "undefined" == typeof a.axes[b] ? l : c ? - 0.75 > a.axes[b] : 0.75 < a.axes[b]
    },
        xa = function (a) {
        pa.F = a.gamepad;
        va || (va = i, wa())
    },
        ya = function () {
        delete pa.F;
        va = l
    },
        wa = function () {
        var a;
        if (pa.F) a = pa.F;
        else {
            var b = navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads;
            a = b && (b[3] || b[2] || b[1] || b[0]) || j
        }
        if (a && !(a.timestamp && a.timestamp == sa)) {
            sa = a.timestamp;
            b = [];
            b[0] = B(a, 14) || C(a, 0, i) || C(a, 2, i);
            b[1] = B(a, 15) || C(a, 0, l) || C(a, 2, l);
            b[2] = B(a, 12) || C(a, 1, i) || C(a, 3, i);
            b[3] = B(a, 13) || C(a, 1, l) || C(a, 3, l);
            b[4] = B(a, 0) || B(a, 4) || B(a, 6) || B(a, 8) || B(a, 9) || B(a, 10);
            b[5] = B(a, 1) || B(a, 5) || B(a, 7) || B(a, 11);
            b[6] = B(a, 2) || B(a, 3);
            if (ra.length) for (var c in qa) {
                a = qa[c];
                var d = b[a];
                if ("undefined" != typeof d && d != ra[a] && A[a]) {
                    ua && ua();
                    var e = document.createEvent("Event");
                    e.initEvent(d ? "keydown" : "keyup", i, i);
                    e.keyCode = A[a];
                    ta.dispatchEvent(e)
                }
            }
            ra = b
        }
        va && (window.requestAnimationFrame ? window.requestAnimationFrame(wa) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(wa) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(wa) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(wa) : window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(wa))
    };
    var za = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, za) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };
    ga(za, Error);
    var Aa = function (a, b) {
        for (var c = 1; c < arguments.length; c++) var d = String(arguments[c]).replace(/\$/g, "$$$$"),
            a = a.replace(/\%s/, d);
        return a
    };
    var Ba = function (a, b) {
        b.unshift(a);
        za.call(this, Aa.apply(j, b));
        b.shift()
    };
    ga(Ba, za);
    var Ca = function (a, b, c) {
        if (!a) {
            var d = Array.prototype.slice.call(arguments, 2),
                e = "Assertion failed";
            if (b) var e = e + (": " + b),
                f = d;
            throw new Ba("" + e, f || []);
        }
    };
    var Da = Array.prototype,
        Ea = Da.indexOf ?
    function (a, b, c) {
        Ca(a.length != j);
        return Da.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == j ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if ("string" == typeof a) return "string" != typeof b || 1 != b.length ? - 1 : a.indexOf(b, c);
        for (; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    var Fa = function () {};
    var Ga, Ha, Ia, Ja, Ka = function () {
        return n.navigator ? n.navigator.userAgent : j
    };
    Ja = Ia = Ha = Ga = l;
    var La;
    if (La = Ka()) {
        var Ma = n.navigator;
        Ga = 0 == La.indexOf("Opera");
        Ha = !Ga && - 1 != La.indexOf("MSIE");
        Ia = !Ga && - 1 != La.indexOf("WebKit");
        Ja = !Ga && !Ia && "Gecko" == Ma.product
    }
    var Na = Ga,
        D = Ha,
        Oa = Ja,
        Pa = Ia,
        Qa;
    a: {
        var Sa = "",
            Ta;
        if (Na && n.opera) var Ua = n.opera.version,
            Sa = "function" == typeof Ua ? Ua() : Ua;
        else if (Oa ? Ta = /rv\:([^\);]+)(\)|;)/ : D ? Ta = /MSIE\s+([^\);]+)(\)|;)/ : Pa && (Ta = /WebKit\/(\S+)/), Ta) var Va = Ta.exec(Ka()),
            Sa = Va ? Va[1] : "";
        if (D) {
            var Wa, Xa = n.document;
            Wa = Xa ? Xa.documentMode : h;
            if (Wa > parseFloat(Sa)) {
                Qa = String(Wa);
                break a
            }
        }
        Qa = Sa
    }
    var Ya = Qa,
        Za = {},
        E = function (a) {
        var b;
        if (!(b = Za[a])) {
            b = 0;
            for (var c = String(Ya).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    k = d[f] || "",
                    o = RegExp("(\\d*)(\\D*)", "g"),
                    s = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var t = o.exec(g) || ["", "", ""],
                        q = s.exec(k) || ["", "", ""];
                    if (0 == t[0].length && 0 == q[0].length) break;
                    b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? - 1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == q[2].length) ? - 1 : (0 == t[2].length) > (0 == q[2].length) ? 1 : 0) || (t[2] < q[2] ? - 1 : t[2] > q[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Za[a] = 0 <= b
        }
        return b
    },
        $a = {},
        ab = function () {
        return $a[9] || ($a[9] = D && !! document.documentMode && 9 <= document.documentMode)
    };
    var bb = function (a) {
        bb[" "](a);
        return a
    };
    bb[" "] = function () {};
    !D || ab();
    var cb = !D || ab(),
        db = D && !E("8");
    !Pa || E("528");
    Oa && E("1.9b") || D && E("8") || Na && E("9.5") || Pa && E("528");
    Oa && !E("8") || D && E("9");
    var eb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    };
    eb.prototype.D = l;
    eb.prototype.defaultPrevented = l;
    eb.prototype.stopPropagation = function () {
        this.D = i
    };
    eb.prototype.preventDefault = function () {
        this.defaultPrevented = i
    };
    var fb = function (a, b) {
        a && this.init(a, b)
    };
    ga(fb, eb);
    m = fb.prototype;
    m.target = j;
    m.relatedTarget = j;
    m.offsetX = 0;
    m.offsetY = 0;
    m.clientX = 0;
    m.clientY = 0;
    m.screenX = 0;
    m.screenY = 0;
    m.button = 0;
    m.keyCode = 0;
    m.charCode = 0;
    m.ctrlKey = l;
    m.altKey = l;
    m.shiftKey = l;
    m.metaKey = l;
    m.w = j;
    m.init = function (a, b) {
        var c = this.type = a.type;
        eb.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (Oa) {
                var e;
                a: {
                    try {
                        bb(d.nodeName);
                        e = i;
                        break a
                    } catch (f) {}
                    e = l
                }
                e || (d = j)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = Pa || a.offsetX !== h ? a.offsetX : a.layerX;
        this.offsetY = Pa || a.offsetY !== h ? a.offsetY : a.layerY;
        this.clientX = a.clientX !== h ? a.clientX : a.pageX;
        this.clientY = a.clientY !== h ? a.clientY : a.pageY;
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
        this.w = a;
        a.defaultPrevented && this.preventDefault();
        delete this.D
    };
    m.stopPropagation = function () {
        fb.Y.stopPropagation.call(this);
        this.w.stopPropagation ? this.w.stopPropagation() : this.w.cancelBubble = i
    };
    m.preventDefault = function () {
        fb.Y.preventDefault.call(this);
        var a = this.w;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = l, db) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var gb = function () {},
        hb = 0;
    m = gb.prototype;
    m.key = 0;
    m.s = l;
    m.S = l;
    m.init = function (a, b, c, d, e, f) {
        if ("function" == ba(a)) this.T = i;
        else if (a && a.handleEvent && "function" == ba(a.handleEvent)) this.T = l;
        else throw Error("Invalid listener argument");
        this.z = a;
        this.P = b;
        this.src = c;
        this.type = d;
        this.capture = !! e;
        this.Q = f;
        this.S = l;
        this.key = ++hb;
        this.s = l
    };
    m.handleEvent = function (a) {
        return this.T ? this.z.call(this.Q || this.src, a) : this.z.handleEvent.call(this.z, a)
    };
    var ib = {},
        F = {},
        jb = {},
        kb = {},
        lb = function (a, b, c, d, e) {
        if (b) {
            if ("array" == ba(b)) {
                for (var f = 0; f < b.length; f++) lb(a, b[f], c, d, e);
                return j
            }
            var d = !! d,
                g = F;
            b in g || (g[b] = {
                d: 0,
                k: 0
            });
            g = g[b];
            d in g || (g[d] = {
                d: 0,
                k: 0
            }, g.d++);
            var g = g[d],
                k = a[ca] || (a[ca] = ++da),
                o;
            g.k++;
            if (g[k]) {
                o = g[k];
                for (f = 0; f < o.length; f++) if (g = o[f], g.z == c && g.Q == e) {
                    if (g.s) break;
                    return o[f].key
                }
            } else o = g[k] = [],
            g.d++;
            var s = mb,
                t = cb ?
            function (a) {
                return s.call(t.src, t.key, a)
            } : function (a) {
                a = s.call(t.src, t.key, a);
                if (!a) return a
            },
                f = t;
            f.src = a;
            g = new gb;
            g.init(c, f, a, b, d, e);
            c = g.key;
            f.key = c;
            o.push(g);
            ib[c] = g;
            jb[k] || (jb[k] = []);
            jb[k].push(g);
            a.addEventListener ? (a == n || !a.aa) && a.addEventListener(b, f, d) : a.attachEvent(b in kb ? kb[b] : kb[b] = "on" + b, f);
            return c
        }
        throw Error("Invalid event type");
    },
        nb = function (a, b, c, d) {
        if (!d.B && d.R) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].s ? d[e].P.src = j : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.R = l;
            0 == f && (delete F[a][b][c], F[a][b].d--, 0 == F[a][b].d && (delete F[a][b], F[a].d--), 0 == F[a].d && delete F[a])
        }
    },
        pb = function (a, b, c, d, e) {
        var f = 1,
            b = b[ca] || (b[ca] = ++da);
        if (a[b]) {
            a.k--;
            a = a[b];
            a.B ? a.B++ : a.B = 1;
            try {
                for (var g = a.length, k = 0; k < g; k++) {
                    var o = a[k];
                    o && !o.s && (f &= ob(o, e) !== l)
                }
            } finally {
                a.B--,
                nb(c, d, b, a)
            }
        }
        return Boolean(f)
    },
        ob = function (a, b) {
        if (a.S) {
            var c = a.key;
            if (ib[c]) {
                var d = ib[c];
                if (!d.s) {
                    var e = d.src,
                        f = d.type,
                        g = d.P,
                        k = d.capture;
                    e.removeEventListener ? (e == n || !e.aa) && e.removeEventListener(f, g, k) : e.detachEvent && e.detachEvent(f in kb ? kb[f] : kb[f] = "on" + f, g);
                    e = e[ca] || (e[ca] = ++da);
                    if (jb[e]) {
                        var g = jb[e],
                            o = Ea(g, d);
                        0 <= o && (Ca(g.length != j), Da.splice.call(g, o, 1));
                        0 == g.length && delete jb[e]
                    }
                    d.s = i;
                    if (d = F[f][k][e]) d.R = i,
                    nb(f, k, e, d);
                    delete ib[c]
                }
            }
        }
        return a.handleEvent(b)
    },
        mb = function (a, b) {
        if (!ib[a]) return i;
        var c = ib[a],
            d = c.type,
            e = F;
        if (!(d in e)) return i;
        var e = e[d],
            f, g;
        if (!cb) {
            var k;
            if (!(k = b)) a: {
                k = ["window", "event"];
                for (var o = n; f = k.shift();) if (o[f] != j) o = o[f];
                else {
                    k = j;
                    break a
                }
                k = o
            }
            f = k;
            k = i in e;
            o = l in e;
            if (k) {
                if (0 > f.keyCode || f.returnValue != h) return i;
                a: {
                    var s = l;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (t) {
                        s = i
                    }
                    if (s || f.returnValue == h) f.returnValue = i
                }
            }
            s = new fb;
            s.init(f, this);
            f = i;
            try {
                if (k) {
                    for (var q = [], Ra = s.currentTarget; Ra; Ra = Ra.parentNode) q.push(Ra);
                    g = e[i];
                    g.k = g.d;
                    for (var O = q.length - 1; !s.D && 0 <= O && g.k; O--) s.currentTarget = q[O],
                    f &= pb(g, q[O], d, i, s);
                    if (o) {
                        g = e[l];
                        g.k = g.d;
                        for (O = 0; !s.D && O < q.length && g.k; O++) s.currentTarget = q[O],
                        f &= pb(g, q[O], d, l, s)
                    }
                } else f = ob(c, s)
            } finally {
                q && (q.length = 0)
            }
            return f
        }
        d = new fb(b, this);
        return f = ob(c, d)
    };
    var qb = function (a) {
        this.ka = a;
        this.la = []
    };
    ga(qb, Fa);
    var rb = [];
    qb.prototype.listen = function (a, b, c, d, e) {
        "array" != ba(b) && (rb[0] = b, b = rb);
        for (var f = 0; f < b.length; f++) {
            var g = lb(a, b[f], c || this, d || l, e || this.ka || this);
            this.la.push(g)
        }
        return this
    };
    qb.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var sb = function (a, b, c, d, e) {
        qb.call(this);
        this.ea = a;
        this.ba = b;
        this.V = c;
        this.U = d;
        this.ha = e;
        this.listen(this.ha, "click", this.ia)
    };
    ga(sb, qb);
    sb.prototype.ia = function () {
        window.gapi && window.gbar && window.gbar.asmc ? window.gapi.load("share", p(this.X, this)) : window.open("about:blank").location = "https://plus.google.com"
    };
    sb.prototype.X = function () {
        if (window.gapi && window.gapi.share) {
            var a = {
                items: [{
                    type: "http://schema.org/WebPage",
                    id: location.protocol + "//" + location.host,
                    properties: {
                        description: [this.V],
                        url: this.ea,
                        name: [this.ba],
                        image: [this.U]
                    }}]
            },
                b = window.location.toString().match(/[?&]authuser=(\d+)/);
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: !(!window.gbar || !window.gbar.asmc) || !! window.google.doodle.sf,
                onLoginPopupBlocked: function () {
                    window.google.log && window.google.log("DOODLE", "popupblocked")
                },
                sessionIndex: b && b[1] || "",
                sourceForLogging: "doodle",
                onLoginStateChanged: p(function () {
                    aa("google.doodle.sf", i);
                    this.X()
                }, this)
            })
        }
    };
    var tb, ub, G, vb, wb, xb, H, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, I, J, K, Hb, Ib, L, Jb, M, ja = [32, 13],
        Kb = [],
        Lb = 0,
        Mb = l,
        Nb = 0,
        Ob = [],
        Pb = i,
        Rb = function (a, b, c) {
        for (var d = new w, e = 0; 2 >= e; e++) x(d, Qb(a, b + e)),
        ma(d, 16);
        if (c) {
            ma(d, 64);
            for (e = 2; 0 <= e; e--) x(d, Qb(a, b + e)),
            ma(d, 16);
            x(d, Qb(a, a.className))
        }
        return d
    },
        Ub = function (a) {
        var b = r("img");
        b.src = "" + a;
        Db && (!b.complete && "complete" != b.readyState ? (b.onload = Sb, Lb++) : Eb || (Eb = window.setTimeout(Tb, 10)));
        return b
    },
        N = function () {
        var a = u(),
            b = a - zb;
        Kb.push(b);
        30 < Kb.length && Kb.shift();
        b =
        Math.min(40, b);
        K || Ab && 18E4 < a - Ab ? Mb = l : !Pb && vb(a, b) ? (window.requestAnimationFrame ? window.requestAnimationFrame(N, G) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(N) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(N) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(N) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(N, G) : window.setTimeout(N, 16), zb = a, Mb = i) : Mb = l
    },
        Vb = function (a, b, c) {
        window.google && window.google.log && window.google.log("doodle-hurdles", "p:" + a + ",s:" + ("undefined" != typeof b ? b : "_") + ",nc:" + ("undefined" != typeof c ? c : "_") + ",d:" + Nb + ",")
    },
        Qb = function (a, b) {
        return function () {
            a.className = b
        }
    },
        Wb = function () {
        Ab = u();
        !Pb && (!Mb && !K) && N()
    },
        Xb = function (a) {
        Wb();
        (37 == a.keyCode || 39 == a.keyCode || 38 == a.keyCode || 40 == a.keyCode || ka(a.keyCode)) && a.preventDefault();
        K && (ka(a.keyCode) && !J.a) && J.play();
        Cb && Cb(a)
    },
        Yb = function (a) {
        ka(a.keyCode) && a.preventDefault()
    },
        Sb = function () {
        --Lb || Db()
    },
        Tb = function () {
        Lb || Db();
        Eb = j
    },
        Zb = function (a) {
        Wb();
        document.activeElement == G && !K && a.preventDefault();
        Fb && Fb(a)
    },
        $b = function (a) {
        Wb();
        Gb && Gb(a)
    },
        ac = function () {
        window.getSelection().selectAllChildren(Bb)
    },
        bc = function (a, b, c) {
        a.style.margin = c + "px 0 0 " + b + "px"
    };
    var cc = {
        ALL: ["Play again", "Search", "Share on Google+"],
        af: ["Speel weer", "Soek", "Deel op Google+"],
        "am_ET(Amharic/ALL)": ["\u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275", "\u1348\u120d\u130d", "Google+ \u120b\u12ed \u12a0\u130b\u122b"],
        ar: ["\u0627\u0644\u0644\u0639\u0628 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629", "\u0628\u062d\u062b", "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 +Google"],
        az: ["Yen\u0259 oyna", "Axtar", "Google+'da b\u00f6l\u00fc\u015f"],
        be: ["\u042f\u0448\u0447\u044d \u0440\u0430\u0437",
            "\u0428\u0443\u043a\u0430\u0446\u044c", "\u041f\u0430\u0434\u0437\u044f\u043b\u0456\u0446\u0446\u0430 \u043d\u0430 Google+"],
        bg: ["\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435", "\u0422\u044a\u0440\u0441\u0435\u043d\u0435", "\u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435 \u0432 Google+"],
        bn: ["\u0986\u09ac\u09be\u09b0 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8", "\u0985\u09a8\u09c1\u09b8\u09a8\u09cd\u09a7\u09be\u09a8 \u0995\u09b0\u09c1\u09a8",
            "Google+ \u098f \u09ad\u09be\u0997 \u0995\u09b0\u09c1\u09a8"],
        bs: ["Igraj ponovno", "Tra\u017ei", "Podijeli na Google+"],
        ca: ["Juga una altra vegada", "Cerca ", "Comparteix a Google+"],
        cs: ["Hr\u00e1t znovu", "Hledat", "Sd\u00edlet na Google+"],
        da: ["Spil igen", "S\u00f8g", "Del p\u00e5 Google+"],
        de: ["Nochmal ansehen", "Suchen", "Auf Google+ teilen"],
        el: ["\u03a0\u03b1\u03af\u03be\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac", "\u0391\u03bd\u03b1\u03b6\u03b7\u03c4\u03ae\u03c3\u03c4\u03b5", "\u039c\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03bf Google+"],
        en_us: ["Play again", "Search", "Share on Google+"],
        "en-GB": ["Play again", "Search", "Share on Google+"],
        es: ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
        "es-419": ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
        et: ["M\u00e4ngi uuesti", "Otsi", "Jaga teenuses Google+"],
        eu: ["Jolastu berriro", "Bilatu", "Partekatu Google+en"],
        fi: ["Toista uudelleen", "Hae", "Jaa Google+ -palvelussa"],
        fr: ["Revoir", "Rechercher", "Partager sur Google+"],
        ga: ["Seinn ar\u00eds \u00e9", "Cuardaigh", "Roinn ar Google+"],
        gl: ["Xogar de novo",
            "Buscar", "Compartir en Google+"],
        hr: ["Ponovi", "Pretra\u017ei", "Dijeli na Google+"],
        hu: ["Lej\u00e1tsz\u00e1s ism\u00e9t", "Keres\u00e9s", "Megoszt\u00e1s a Google+-on"],
        id: ["Main lagi", "Telusuri", "Bagikan di Google+"],
        is: ["Spila aftur", "Leita", "Deila \u00e1 Google+"],
        it: ["Gioca di nuovo", "Cerca", "Condividi su Google+"],
        iw: ["\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1", "\u05d7\u05e4\u05e9", "\u05e9\u05ea\u05e3 \u05d1-Google+"],
        ja: ["\u3082\u3046\u4e00\u5ea6\u898b\u308b", "\u691c\u7d22", "Google+ \u3067\u5171\u6709"],
        ko: ["\ub2e4\uc2dc\ud558\uae30", "\uac80\uc0c9", "Google+\uc5d0\uc11c \uacf5\uc720"],
        lt: ["Rodyti dar kart\u0105", "Ie\u0161koti", "Dalytis \u201eGoogle+\u201c"],
        lv: ["Atska\u0146ot v\u0113lreiz", "Mekl\u0113t", "Kop\u012bgot Google+"],
        mk: ["\u0418\u0433\u0440\u0430\u0458 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e", "\u041f\u0440\u0435\u0431\u0430\u0440\u0430\u0458", "\u0421\u043f\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 Google+"],
        mr: ["\u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u0932\u0947 \u0915\u0930\u093e",
            "\u0936\u094b\u0927\u093e", "Google+ \u0935\u0930 \u0938\u093e\u092e\u093e\u092f\u093f\u0915 \u0915\u0930\u093e"],
        ms_my: ["Main semula", "Cari", "Kongsi di Google+"],
        nl: ["Opnieuw afspelen", "Zoeken", "Delen op Google+"],
        no: ["Spill av p\u00e5 nytt", "S\u00f8k", "Del p\u00e5 Google+"],
        pl: ["Odtw\u00f3rz ponownie", "Szukaj", "Udost\u0119pnij w Google+"],
        "pt-BR": ["Jogar novamente", "Pesquisar", "Compartilhar no Google+"],
        "pt-PT": ["Jogar novamente", "Pesquisar", "Partilhar no Google+"],
        ro: ["Reda\u0163i din nou", "C\u0103uta\u0163i",
            "Distribui\u0163i \u00een Google+"],
        ru: ["\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437", "\u0418\u0441\u043a\u0430\u0442\u044c", "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 Google+"],
        sk: ["Hra\u0165 znova", "H\u013eada\u0165", "Zdie\u013ea\u0165 v Google+"],
        sl: ["Ponovno predvajaj", "I\u0161\u010di", "Deli v storitvi Google+"],
        sr: ["\u0418\u0433\u0440\u0430\u0458 \u043e\u043f\u0435\u0442", "\u041f\u0440\u0435\u0442\u0440\u0430\u0436\u0438", "\u0414\u0435\u043b\u0438 \u043d\u0430 Google+"],
        sv: ["Spela igen", "S\u00f6k", "Dela p\u00e5 Google+"],
        sw: ["Cheza tena", "Tafuta", "Shiriki kwenye Google+"],
        th_All: ["\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e04\u0e49\u0e19\u0e2b\u0e32", "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e1a\u0e19 Google+"],
        tr: ["Tekrar oyna", "Ara", "Google+'da payla\u015f"],
        uk: ["\u0413\u0440\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437", "\u0428\u0443\u043a\u0430\u0442\u0438", "\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0443 Google+"],
        vi: ["Ph\u00e1t l\u1ea1i", "T\u00ecm ki\u1ebfm", "Chia s\u1ebb tr\u00ean Google+"],
        "zh-CN": ["\u518d\u73a9\u4e00\u6b21", "\u641c\u7d22", "\u901a\u8fc7 Google+ \u5206\u4eab"],
        "zh-TW_HK": ["\u518d\u64ad\u4e00\u6b21", "\u641c\u5c0b", "\u900f\u904e Google+ \u5206\u4eab"],
        "zh-TW_tw": ["\u518d\u770b\u4e00\u6b21", "\u641c\u5c0b", "\u900f\u904e Google+ \u5206\u4eab"],
        zu: ["Dlala futhi", "Sesha ", "Yabelana ku-Google+"],
        hi: ["\u092b\u093c\u093f\u0930 \u0916\u0947\u0932\u0947\u0902", "\u0916\u094b\u091c\u0947\u0902", "Google+ \u092a\u0930 \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902"],
        fil: ["I-play muli", "Maghanap", "Ibahagi sa Google+"],
        fa: ["\u0628\u0627\u0632\u067e\u062e\u0634", "\u062c\u0633\u062a\u062c\u0648", "\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 +Google"]
    },
        dc = function (a) {
        return google.kHL in cc && cc[google.kHL][a] || cc.ALL[a]
    };
    var ec, fc, P, Q, R, gc, hc, ic, jc, kc, S, lc, mc, nc, T, U, oc, pc, qc, rc, sc, tc, uc, vc, wc, V, xc, yc, zc, Ac, Bc, Cc, W, X, Dc, Ec, Y, Fc, Gc, Hc, Ic = {
        ALL: ["Score", "Hurdles", "I jumped hurdles #GoogleDoodle"],
        af: ["Hoogste telling", "Hekkies", "Ek het hekkies gehardloop #GoogleDoodle"],
        "am_ET(Amharic/ALL)": ["\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275", "\u12e8\u1218\u1230\u1293\u12ad\u120d \u1229\u132b", "\u12e8\u1218\u1230\u1293\u12ad\u120d \u1229\u132b \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle"],
        ar: ["\u0627\u0644\u0646\u062a\u064a\u062c\u0629",
            "\u0633\u0628\u0627\u0642 \u0627\u0644\u062d\u0648\u0627\u062c\u0632", "\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0633\u0628\u0627\u0642 \u0627\u0644\u062d\u0648\u0627\u062c\u0632 GoogleDoodle#"],
        az: ["\u018fn y\u00fcks\u0259k bal", "Mane\u0259l\u0259r il\u0259 qa\u00e7\u0131\u015f", "M\u0259n mane\u0259l\u0259r il\u0259 qa\u00e7\u0131\u015fda i\u015ftirak etdim #GoogleDoodle"],
        be: ["\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a", "\u0411\u0435\u0433 \u0437 \u0431\u0430\u0440'\u0435\u0440\u0430\u043c\u0456",
            "\u042f \u045e\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u0447\u0430\u045e \u0443 \u0431\u0435\u0433\u0443 \u0437 \u0431\u0430\u0440'\u0435\u0440\u0430\u043c\u0456 #GoogleDoodle"],
        bg: ["\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442", "\u0411\u044f\u0433\u0430\u043d\u0435 \u0441 \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0438\u044f", "\u0418\u0433\u0440\u0430\u0445 \u0431\u044f\u0433\u0430\u043d\u0435 \u0441 \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0438\u044f #GoogleDoodle"],
        bn: ["\u09b8\u09cd\u0995\u09cb\u09b0", "\u09b9\u09be\u09b0\u09cd\u09a1\u09b2\u09b0\u09c7\u09b8", "\u0986\u09ae\u09bf \u09b9\u09be\u09b0\u09cd\u09a1\u09b2\u09b0\u09c7\u09b8\u09c7 \u09a6\u09cc\u09dc\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2"],
        bs: ["Najbolji rezultat", "Tr\u010danje s preponama", "Igrao sam tr\u010danje s preponama #GoogleDoodle"],
        ca: ["R\u00e8cord", "Cursa de tanques", "He competit en una cursa de tanques #GoogleDoodle"],
        cs: ["Nejvy\u0161\u0161\u00ed sk\u00f3re", "P\u0159ek\u00e1\u017ekov\u00fd b\u011bh",
            "Zab\u011bhejte si p\u0159es p\u0159ek\u00e1\u017eky #GoogleDoodle"],
        da: ["Top score", "H\u00e6kkel\u00f8b", "Jeg hoppede h\u00e6k #GoogleDoodle"],
        de: ["Rekord", "H\u00fcrdenlauf", "Ich bin \u00fcber die H\u00fcrden gesprungen #GoogleDoodle"],
        el: ["\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2", "\u0395\u03bc\u03c0\u03cc\u03b4\u03b9\u03b1", "\u03a0\u03ae\u03b4\u03b7\u03be\u03b1 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03b1 #GoogleDoodle"],
        en_us: ["Score", "Hurdles", "I jumped hurdles #GoogleDoodle"],
        "en-GB": ["Score", "Hurdles", "I jumped hurdles #GoogleDoodle"],
        es: ["R\u00e9cord", "Carrera de vallas", "He hecho una carrera de vallas #GoogleDoodle"],
        "es-419": ["Resultado", "Carrera de vallas", "Particip\u00e9 en una carrera de vallas #GoogleDoodle"],
        et: ["Rekordtulemus", "T\u00f5kkejooks", "Jooksin t\u00f5kkeid #GoogleDoodle"],
        eu: ["Errekorra", "Hesi-lasterketa", "Hesi-lasterketan aritu naiz #GoogleDoodle"],
        fi: ["K\u00e4rkitulos", "Aitajuoksu", "Juoksin aitajuoksun #GoogleDoodle"],
        fr: ["Meilleur r\u00e9sultat", "Course de haies", "J'ai fait une course de haies #GoogleDoodle"],
        ga: ["Sc\u00f3r is fearr", "Cliathr\u00e1s", "Rith m\u00e9 cliathr\u00e1s #GoogleDoodle"],
        gl: ["Record", "Carreira de obst\u00e1culos", "Saltei os valos #GoogleDoodle"],
        hr: ["Najbolji rezultat", "Tr\u010danje s preponama", "Igrao sam tr\u010danje s preponama #GoogleDoodle"],
        is: ["Flest stig", "Grindahlaup", "\u00c9g f\u00f3r \u00ed grindahlaup #GoogleDoodle"],
        it: ["Miglior punteggio", "Corsa a ostacoli", "Ho giocato alla corsa a ostacoli #GoogleDoodle"],
        iw: ["\u05e0\u05d9\u05e7\u05d5\u05d3", "\u05de\u05e9\u05d5\u05db\u05d5\u05ea", "\u05e8\u05e6\u05ea\u05d9 \u05e8\u05d9\u05e6\u05ea \u05de\u05e9\u05d5\u05db\u05d5\u05ea  #GoogleDoodle "],
        hu: ["Legjobb eredm\u00e9ny", "G\u00e1tfut\u00e1s", "G\u00e1tfutottam #GoogleDoodle"],
        ja: ["\u30b9\u30b3\u30a2", "\u30cf\u30fc\u30c9\u30eb", "\u300c\u30cf\u30fc\u30c9\u30eb\u300d\u3092\u98db\u3093\u3060! #GoogleDoodle"],
        ko: ["\uae30\ub85d", "\ud5c8\ub4e4", "\ud5c8\ub4e4\uc744 \ud588\uc5b4\uc694! #GoogleDoodle "],
        lv: ["Lab\u0101kais rezult\u0101ts",
            "Barjerskrie\u0161ana", "Es piedal\u012bjos barjerskrie\u0161an\u0101 #GoogleDoodle"],
        mk: ["\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442", "\u0422\u0440\u0447\u0430\u045a\u0435 \u0441\u043e \u043f\u0440\u0435\u043f\u0440\u0435\u043a\u0438", "\u0422\u0440\u0447\u0430\u0432 \u043f\u0440\u0435\u043a\u0443 \u043f\u0440\u0435\u043f\u0440\u0435\u043a\u0438 #GoogleDoodle"],
        mo: ["Scor de top", "Atletism garduri", "Am concurat la atletism garduri #GoogleDoodle"],
        mr: ["\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923",
            "\u0905\u0921\u0925\u0933\u0947", "\u092e\u0940 \u0905\u0921\u0925\u0933\u094d\u092f\u093e\u0902\u091a\u0940 \u0936\u0930\u094d\u092f\u0924 \u0916\u0947\u0933\u0932\u094b #GoogleDoodle"],
        ms_my: ["Skor tertinggi", "Lompat Pagar", "Saya melompat pagar #GoogleDoodle"],
        nl: ["Topscore", "Hordelopen", "Ik heb horden gelopen #GoogleDoodle"],
        pl: ["Najlepszy wynik", "Bieg przez p\u0142otki", "\u0106wicz\u0119 bieg przez p\u0142otki #GoogleDoodle"],
        "pt-BR": ["Pontua\u00e7\u00e3o", "Corrida com Obst\u00e1culos", "Eu competi Corrida com Obst\u00e1culos #GoogleDoodle"],
        "pt-PT": ["Pontua\u00e7\u00e3o", "Barreiras", "Eu saltei Barreiras #GoogleDoodle"],
        ro: ["Scor de top", "Atletism garduri", "Am concurat la atletism garduri #GoogleDoodle"],
        ru: ["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442", "\u0411\u0435\u0433 \u0441 \u0431\u0430\u0440\u044c\u0435\u0440\u0430\u043c\u0438", "\u0411\u0435\u0433 \u0441 \u0431\u0430\u0440\u044c\u0435\u0440\u0430\u043c\u0438 #GoogleDoodle"],
        sk: ["Najlep\u0161ie sk\u00f3re", "Beh cez prek\u00e1\u017eky", "Zabehajte si cez prek\u00e1\u017eky #GoogleDoodle"],
        sl: ["Najbolj\u0161i rezultat", "Tek \u010dez ovire", "Tekel sem \u010dez ovire #GoogleDoodle"],
        sr: ["\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442", "\u0422\u0440\u0447\u0430\u045a\u0435 \u043f\u0440\u0435\u043a\u043e \u043f\u0440\u0435\u043f\u043e\u043d\u0430", "\u0418\u0433\u0440\u0430\u043c \u0442\u0440\u0447\u0430\u045a\u0435 \u043f\u0440\u0435\u043a\u043e \u043f\u0440\u0435\u043f\u043e\u043d\u0430 #GoogleDoodle"],
        sv: ["Resultat", "H\u00e4ckl\u00f6pning",
            "Jag hoppade h\u00e4ck #GoogleDoodle"],
        sw: ["Alama za Juu", "Mbio za Kuruka Viunzi", "Niliruka Viunzi #GoogleDoodle"],
        th_All: ["\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14", "\u0e27\u0e34\u0e48\u0e07\u0e02\u0e49\u0e32\u0e21\u0e23\u0e31\u0e49\u0e27 ", "\u0e09\u0e31\u0e19\u0e27\u0e34\u0e48\u0e07\u0e02\u0e49\u0e32\u0e21\u0e23\u0e31\u0e49\u0e27\u0e1a\u0e19 Google Doodle!"],
        tr: ["En y\u00fcksek puan", "Engelli Ko\u015fu", "Engelli atlad\u0131m! #GoogleDoodle"],
        uk: ["\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
            "\u0411\u0456\u0433 \u0456\u0437 \u043f\u0435\u0440\u0435\u0448\u043a\u043e\u0434\u0430\u043c\u0438", "\u0411\u0456\u0433 \u0456\u0437 \u043f\u0435\u0440\u0435\u0448\u043a\u043e\u0434\u0430\u043c\u0438 #GoogleDoodle"],
        "zh-CN": ["\u6700\u9ad8\u5f97\u5206", "\u8de8\u680f", "#Google\u6d82\u9e26#\u6211\u73a9\u4e86\u8de8\u680f"],
        "zh-TW_HK": ["\u6700\u9ad8\u5f97\u5206", "\u8de8\u6b04", "\u6211\u8dd1\u4e86\u5834\u8de8\u6b04\uff01 #GoogleDoodle"],
        "zh-TW_tw": ["\u6700\u9ad8\u5f97\u5206", "\u8de8\u6b04", "\u6211\u8dd1\u4e86\u5834\u8de8\u6b04\uff01 #GoogleDoodle"]
    },
        Jc = function (a) {
        return google.kHL in Ic && Ic[google.kHL][a] || Ic.ALL[a]
    };
    var Kc = [0, 0.05, 0.1, 0.15, 0.5, 0.7, 0.7, 1, 1.1],
        Lc = 530 / 482,
        Z = [],
        Mc = window.localStorage && window.localStorage.getItem("doodle-hurdles-tooltip") ? 4 : 0,
        Nc = function (a, b, c) {
        a -= R;
        if (-38 <= a && 533 > a) {
            var d = Math.cos(b),
                e = Math.sin(b),
                b = a + 24,
                f = b + 35 * e,
                g = 168 - 35 * d,
                k = b - 10 * d,
                o = 168 - 10 * e,
                s = a * Lc,
                t = s + 35 * e,
                q = 193 - 35 * d,
                d = s - 11 * d,
                e = 193 - 11 * e;
            P.lineCap = "round";
            c ? (P.lineWidth = 4, P.beginPath(), P.strokeStyle = "rgba(0,0,0,0.1)", P.moveTo(k, 170), P.lineTo(f, 170), P.lineTo(t, 195), P.lineTo(d, 195), P.stroke(), P.lineWidth = 6, P.beginPath(), P.strokeStyle = "#ccc", P.moveTo(k, o), P.lineTo(b, 168), P.lineTo(f, g), P.stroke(), P.beginPath(), P.fillStyle = "#999", P.arc(k, o, 3, 0, 2 * Math.PI, l)) : (P.lineWidth = 6, P.beginPath(), P.strokeStyle = "#ccc", P.moveTo(d, e), P.lineTo(s, 193), P.lineTo(t, q), P.stroke(), P.beginPath(), P.fillStyle = "#999", P.arc(d, e, 3, 0, 2 * Math.PI, l));
            P.fill();
            155 <= a != c && (P.beginPath(), P.strokeStyle = "#fafbf7", P.moveTo(f, g), P.lineTo(t, q), P.stroke())
        }
    },
        Oc = function (a) {
        a -= R;
        if (-3 <= a && 527 > a) {
            var b = a + 24,
                a = a * Lc;
            P.beginPath();
            P.moveTo(b, 169);
            P.lineTo(a, 194);
            P.strokeStyle = "#f8eaf7";
            P.lineCap = "square";
            P.lineWidth = 6;
            P.stroke()
        }
    },
        Sc = function (a, b) {
        if (1 == Y && !U.a && !zc.a) return l;
        if (2 == Y && 5E3 < a - sc) Pc();
        else if (3 == Y || 4 == Y) {
            3 == Y && (Fc && 150 <= a - Fc) && ($(4), kc -= 50);
            var c, d = 0;
            4 == Y ? (d = Qc(a), d || ($(3), jc = a), c = 0.998) : 3 == Y && (c = 0.995);
            c = Math.max(0.1, X * c);
            R += (X + c) * b / 2;
            X = c;
            for (c = 0; c < Z.length; c++) {
                var e = Z[c];
                if (e.J) e.o = Math.min(Math.PI / 2, e.o + 0.03 * b);
                else {
                    var f;
                    if (f = 15 > d) f = e.x - R - 110,
                    f = !e.J && 0 <= f && 45 >= f;
                    f && (X = Math.max(0.1, 0.5 * X), V.g = 20, gc++, e.J = i)
                }
            }
            5E3 <= a - mc ? Pc() : 300 < R && Rc(3);
            4800 <= R && $(5)
        }
        for (d =
        0; d < Kc.length; d++) c = ec[d],
        e = la(R * Kc[d], 530),
        c.x = -e,
        z(ec[d]),
        c.x = 530 - e - 1,
        z(ec[d]);
        oc.x = -R;
        z(oc);
        U.a || (qc.x = -R, z(qc));
        fc.x = 0;
        fc.p = 1;
        z(fc);
        fc.p = -1;
        fc.x = 530 - fc.getWidth();
        z(fc);
        Oc(185);
        Oc(4910);
        for (d = 0; d < Z.length; d++) Nc(Z[d].x, Z[d].o, i);
        W && (V.frame = la(Math.floor((R + V.x + 530) / 7), 16), d = Qc(u()), c = "rgba(0,0,0," + 0.2 / (1 + 0.2 * d) + ")", e = P, f = W.x + 125, e.save(), e.beginPath(), e.translate(f, 175), e.scale(70, 15), e.arc(0.5, 0.5, 0.5, 0, 2 * Math.PI, i), e.fillStyle = c, e.fill(), e.restore(), W.y = -d, z(W));
        for (d = 0; d < Z.length; d++) Nc(Z[d].x, Z[d].o, l);
        T.frame = a / 150 & 1;
        z(T);
        Dc.frame = a / 500 & 1;
        z(Dc);
        W.g *= Math.max(0, 1 - 0.015 * b);
        hc.x = 0;
        hc.p = 1;
        z(hc);
        hc.p = -1;
        hc.x = 530 - hc.getWidth();
        z(hc);
        return i
    },
        Qc = function (a) {
        if (!kc) return 0;
        var b = a - kc,
            c = b;
        S && S <= a ? c = S - kc : 200 < c && (c = 200, S = kc + c);
        return Math.max(0, 1 - 2E-4 * b * b + (3E-4 * c + 0.09) * b)
    },
        Tc = function (a) {
        var b = u(),
            c = 37 == a.keyCode ? - 1 : 39 == a.keyCode ? 1 : j;
        if (2 == Y && c) lc ? lc != c ? (mc = b, $(3)) : W.g = 3 : lc = c;
        else if (3 == Y && (!Gc || 100 < b - Gc)) if (c) {
            if (c == lc) {
                W.g = 3;
                return
            }
            X = Math.max(0.1, X + 0.02);
            lc = c;
            mc = b;
            Rc(2)
        } else(38 == a.keyCode || ka(a.keyCode)) && 50 < b - jc && $(4);
        Hc = b
    },
        Uc = function (a) {
        2 != Nb && (Nb = 0);
        if (4 == Y && !S && (38 == a.keyCode || ka(a.keyCode))) S = Math.max(u(), kc + 100)
    },
        Xc = function () {
        var a = Vc,
            b = Wc;
        b && (G.onmouseout = G.onmouseup = b);
        Uc && (G.onkeyup = Uc);
        Fb = a;
        G.onmousedown = Zb;
        Gb = j;
        G.onmousemove = $b;
        Cb = Tc;
        G.onkeydown = Xb;
        G.style.cursor = "pointer"; - 1 != navigator.userAgent.indexOf("Opera") && (G.onkeypress = Yb);
        $(1);
        N()
    },
        Vc = function () {
        var a = u();
        2 == Y && $(3);
        if (3 == Y && (Rc(4), !Fc && (!Hc || 100 < a - Hc))) mc = Fc = a;
        Gc = a
    },
        Wc = function () {
        2 != Nb && (Nb = 1);
        3 == Y && Fc && 150 > u() - Fc ? X = Math.max(0.1, X + 0.03) : 4 == Y && !S && (S = u());
        Fc = j
    },
        Yc = function () {
        U.stop();
        z(qc);
        pc.style.display = "none";
        $(2);
        Vb(0);
        // if (!window.WebFontConfig) {
        //     aa("WebFontConfig.google.families", ["Fredoka+One::latin"]);
        //     var a = document.createElement("script");
        //     a.src = "../Resources/webfont.js";
        //     a.type = "text/javascript";
        //     a.async = "true";
        //     (document.getElementById("xjsc") || document.body).appendChild(a)
        // }
        A[0] = 37;
        A[1] = 39;
        A[2] = ja[0];
        A[4] = 37;
        A[5] =
        39;
        A[6] = ja[0];
        ta = G;
        ua = function () {
            2 != Nb && (Nb = 2)
        } || j;
        window.addEventListener("MozGamepadConnected", xa, l);
        window.addEventListener("MozGamepadDisconnected", ya, l);
        if ((navigator.webkitGamepads || navigator.webkitGetGamepads) && !va) va = i,
        wa();
        N()
    },
        Zc = function (a) {
        a.stopPropagation()
    },
        Pc = function () {
        4 == Mc && (Mc = 0, Vb(3), Rc(1))
    },
        $ = function (a) {
        var b = Y;
        if (b != a) if (Y = a, 1 == a) jc = R = 0,
        U.play();
        else if (2 == a) {
            sc = u();
            lc = j;
            gc = 0;
            Rc(1);
            Z = [];
            for (a = 0; 10 > a; a++) Z.push({
                x: 800 + 400 * a + 100 * Math.random(),
                o: 0,
                J: l
            })
        } else 3 == a ? 2 == b ? (Ec = u(), X = 0.1, W = yc, xc.play()) : W = V : 4 == a ? (Rc(4), kc = u(), S = j, W = wc, vc.play()) : 5 == a && (R = 4800, ic = u(), Rc(4), 10 == gc ? (W = uc, tc.play()) : (W = Cc, Bc.play()))
    },
        $c = function () {
        var a = ic - Ec,
            b = 0;
        12E3 > a && !gc ? b = 3 : 18E3 > a ? b = 2 : 10 > gc && (b = 1);
        Vb(1, a, b);
        var a = a ? (a / 1E3).toFixed(1) + " s" : "",
            c;
        xb.V = Jb + a;
        c || (c = wb);
        xb.U = "https://www.google.com/" + c + "12-hp-share" + b + ".png";
        tb.textContent = a;
        for (c = 0; 3 > c; c++) Ob[c].className = c < b ? "hplogo_smg" : "hplogo_smh";
        L.style.display = "";
        M.play()
    },
        Rc = function (a) {
        for (; Mc < a;) switch (++Mc) {
        case 1:
            2 == Y ? (T.offsetX =
            250, T.offsetY = 50) : (T.offsetX = 210, T.offsetY = 5);
            oa(T, 200, 1);
            nc.style.display = "";
            break;
        case 2:
            oa(T, 100, 0);
            nc.style.display = "none";
            break;
        case 3:
            oa(Dc, 200, 1);
            break;
        case 4:
            oa(Dc, 100, 0),
            window.localStorage && window.localStorage.setItem("doodle-hurdles-tooltip", i)
        }
    },
        ad = function () {
        $(0);
        var a;
        ha = l;
        Pb = !Sc;
        vb = Sc;
        zb = u();
        Db = Xc;
        (G = document.getElementById("hplogo")) ? (google.doodle && google.doodle.alt && G.setAttribute("aria-label", google.doodle.alt), G.innerHTML = "", a = i) : a = l;
        if (a) {
            if (a = r("canvas", h)) a.style.position = "absolute",
            a.height = 207,
            a.width = 530,
            G.appendChild(a);
            if ((Q = a) && Q.getContext) {
                P = Q.getContext("2d");
                a = Jc(1);
                var b = Jc(2) + " \u2014 " + Jc(0) + ": ";
                wb = "hurdles";
                var c = window.location.protocol + "//www.google.com/doodles/hurdles-2012";
                Ub("Resources/olympics12-hp-sprite.png");
                L = r("div", "hplogo_sc");
                ub = r("div", "hplogo_sb");
                tb = r("span", "hplogo_sbt", "hplogo_sse");
                ub.appendChild(tb);
                for (var d = 0; 3 > d; d++) Ob[d] = r("div", "hplogo_sm"),
                ub.appendChild(Ob[d]);
                L.appendChild(ub);
                d = function (a) {
                    a = r("div", a);
                    L.appendChild(a);
                    return a
                };
                I = d("hplogo_sr");
                Hb = d("hplogo_ss");
                H = d("hplogo_sg");
                I.title = dc(0);
                Hb.title = dc(1);
                H.title = dc(2);
                L.style.display = "none";
                Bb = r("div", "hplogo_sle");
                Bb.onmouseup = ac;
                d = r("span", "", "hplogo_sse");
                d.textContent = c;
                Bb.appendChild(d);
                L.appendChild(Bb);
                G.appendChild(L);
                M = new w;
                x(M, function () {
                    L.style.display = "";
                    ub.style.opacity = 0;
                    I.style.opacity = 0;
                    Hb.style.opacity = 0;
                    H.style.opacity = 0;
                    Bb.style.opacity = 0;
                    I.className = "";
                    Hb.className = "";
                    H.className = "";
                    ia || ac()
                });
                x(M, function (a) {
                    L.style.opacity = a
                }, 500);
                ma(M, 200);
                x(M, function (a) {
                    bc(ub, 55, v(a, 6, 30));
                    ub.style.opacity = a
                }, 200);
                ma(M, 200);
                x(M, function (a) {
                    var b = a = a * 2;
                    bc(I, 8, v(b, 12, 0));
                    I.style.opacity = b;
                    b = a - 0.5;
                    bc(Hb, 8, v(b, 12, 0));
                    Hb.style.opacity = b;
                    a = a - 1;
                    bc(H, 8, v(a, 12, 0));
                    H.style.opacity = a
                }, 500);
                x(M, function (a) {
                    Bb.style.opacity = a
                }, 500);
                x(M, function () {
                    K = i
                });
                J = Rb(I, "hplogo_srd");
                x(J, function () {
                    K = l;
                    !Pb && !Mb && N();
                    W = V;
                    W.x = -250;
                    Vb(2);
                    rc.play()
                });
                x(J, function (a) {
                    L.style.opacity = 1 - a
                }, 200);
                x(J, function () {
                    L.style.display = "none"
                });
                I.onmousedown = function () {
                    K && !J.a && J.play()
                };
                Ib = Rb(Hb, "hplogo_ssd");
                x(Ib, function () {
                    google.nav.go(google.doodle.url)
                });
                Hb.onmousedown = function () {
                    Ib.play()
                };
                yb = Rb(H, "hplogo_sgd", i);
                H.onmousedown = function () {
                    Vb(4);
                    yb.play()
                };
                xb = new sb(c, a, b, "", H);
                Jb = b;
                var e = r("div", "hplogo_pc");
                a = r("div", "hplogo_pr");
                var f = Rb(a, "hplogo_prd");
                x(f, Yc);
                bc(a, 232, 65);
                e.appendChild(a);
                e.onmousedown = function () {
                    e.onmousedown = j;
                    f.play()
                };
                e.style.display = "none";
                G.appendChild(e);
                pc = e;
                var g = Ub("hurdles/hurdles12-hp-bg.png");
                a = function (a, b, c) {
                    return new y(Q, g, 0, b, 530, c, 0, a)
                };
                ec = [a(0, 1, 125), a(6, 127, 85), a(83, 215, 59), a(83, 275, 60), a(96, 337, 56), a(124, 395, 84), a(95, 481, 45), a(164, 529, 35), a(192, 565, 9)];
                a = Ub("hurdles/hurdles12-hp-sprite.png");
                hc = new y(Q, a, 3245, 0, 30, 207);
                wc = new y(Q, a, 0, 298, 120, 152, 110, 32);
                vc = na(wc, 11, 800);
                V = new y(Q, a, 1323, 298, 120, 155, 110, 32);
                fc = new y(Q, a, 0, 0, 63, 207);
                oc = new y(Q, a, 66, 137, 388, 109, 99, 51);
                W = V;
                W.x = -250;
                T = new y(Q, a, 2743, 0, 184, 134);
                T.opacity = 0;
                Dc = new y(Q, a, 66, 0, 184, 134, 210, 5);
                Dc.opacity = 0;
                b = r("div");
                b.style.position = "absolute";
                b.style.height = "130px";
                b.style.margin = "50px 0 0 300px";
                b.style.width = "130px";
                b.style.zIndex = 1;
                b.onmousedown = Zc;
                G.appendChild(b);
                nc = b;
                nc.style.display = "none";
                nc.style.cursor = "default";
                yc = new y(Q, a, 1300, 158, 136, 137, 110, 50);
                xc = na(yc, 9, 300);
                x(xc, function () {
                    W = V
                });
                Ac = new y(Q, a, 457, 158, 119, 129, 110, 58);
                zc = na(Ac, 7, 200);
                uc = new y(Q, a, 1300, 0, 120, 155, 110, 32);
                tc = na(uc, 12, 400);
                ma(tc, 600);
                x(tc, $c);
                Cc = new y(Q, a, 457, 0, 120, 155, 110, 32);
                Bc = na(Cc, 7, 300);
                ma(Bc, 600);
                x(Bc, $c);
                a = Ub("Resources/olympics12-hp-sprite.png");
                qc = new y(Q, a, 316, 0, 67, 73, 232, 65);
                U = new w;
                x(U, function () {
                    W = V
                });
                x(U, function (a) {
                    W.x =
                    v(a, - 250, 0)
                }, 2E3);
                x(U, function () {
                    pc.style.display = "";
                    W = Ac;
                    zc.play()
                });
                x(U, function (a) {
                    pc.style.opacity = a
                }, 600);
                rc = new w;
                x(rc, function (a) {
                    R = v(a, 4800, 0)
                }, 1E3);
                x(rc, function () {
                    W = V
                });
                x(rc, function (a) {
                    W.x = v(a, - 250, 0)
                }, 2E3);
                x(rc, function () {
                    W = Ac;
                    zc.play();
                    $(2)
                })
            }
        }
    },
        bd = function () {
        return document.activeElement != G
    },
        cd = function () {
        var a = window.google;
        if (a) {
            var b = a.msg,
                c = function () {
                var a = b && b.unlisten;
                a && (a(67, c), bd && a(94, bd));
                Pb = ha = i;
                G && (G.innerHTML = "");
                K = l;
                return i
            };
            if (!a.doodle || !a.doodle.jesr) aa("google.doodle.jesr", i),
            a.rein && a.dstr && (a.rein.push(ad), a.dstr.push(c));
            var a = a.psy,
                d = b && b.listen;
            a && (a.q && d) && (d(67, c), bd && d(94, bd))
        }
        ad()
    },
        dd = window.google;
    dd && dd.x ? dd.x({
        id: "DOODLE"
    }, cd) : cd();
})();
