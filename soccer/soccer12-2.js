(function(){
    var h=void 0,i=!0,j=null,k=!1,m,o=this,aa=function(a,b){
        var c=a.split("."),e=o;
        !(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);
        for(var f;c.length&&(f=c.shift());)!c.length&&b!==h?e[f]=b:e=e[f]?e[f]:e[f]={}
    },ba=function(a){
        var b=typeof a;
        if("object"==b)if(a){
            if(a instanceof Array)return"array";
            if(a instanceof Object)return b;
            var c=Object.prototype.toString.call(a);
            if("[object Window]"==c)return"object";
            if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
                typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
            if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"
        }else return"null";
        else if("function"==b&&"undefined"==typeof a.call)return"object";
        return b
    },ca="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),da=0,ea=function(a,b,c){
        return a.call.apply(a.bind,arguments)
    },fa=function(a,b,c){
        if(!a)throw Error();
        if(2<arguments.length){
            var e=
            Array.prototype.slice.call(arguments,2);
            return function(){
                var c=Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c,e);
                return a.apply(b,c)
            }
        }
        return function(){
            return a.apply(b,arguments)
        }
    },p=function(a,b,c){
        p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;
        return p.apply(j,arguments)
    },ga=function(a,b){
        function c(){}
        c.prototype=b.prototype;
        a.xa=b.prototype;
        a.prototype=new c
    };
    Function.prototype.bind=Function.prototype.bind||function(a,b){
        if(1<arguments.length){
            var c=Array.prototype.slice.call(arguments,1);
            c.unshift(this,a);
            return p.apply(j,c)
        }
        return p(this,a)
    };

    var ha,ia=0<=navigator.userAgent.indexOf("MSIE"),ka=function(a){
        for(var b=ja,c=0,e;e=b[c++];)if(a==e)return i;return k
    },r=function(a,b,c){
        a=document.createElement(a);
        b&&(a.id=b);
        c&&(a.className=c);
        return a
    },la=function(){
        return(new Date).getTime()
    },ma=function(a,b,c){
        return b+Math.min(1,Math.max(0,a))*(c-b)
    },na=function(a){
        return eval(a+String.fromCharCode(37)+10)
    },oa=function(a){
        window.localStorage&&window.localStorage.setItem("doodle-soccer-tooltip",a)
    };

    var t=function(){
        this.R=this.P=this.v=0;
        this.C=[]
    };

    t.prototype.play=function(){
        ha||(this.stop(),this.P=0,this.R=la(),this.v=window.setInterval(p(this.ka,this),16),this.ka())
    };

    var v=function(a,b,c){
        a.C.push({
            duration:c||0,
            M:b
        })
    };

    t.prototype.stop=function(){
        if(this.v){
            for(var a;a=this.C[this.P++];)a.M(1);
            window.clearInterval(this.v);
            this.v=0
        }
    };

    var pa=function(a,b){
        v(a,function(){},b)
    };
    t.prototype.ka=function(){
        var a=la();
        if(!ha)for(var b;b=this.C[this.P];this.P++){
            var c=a-this.R;
            if(c<b.duration){
                b.M(c/b.duration);
                return
            }
            b.M(1);
            0<b.duration&&(this.R+=b.duration)
        }
        this.stop()
    };

    var qa=function(a,b,c,e,f,d,g,l){
        this.reset=function(){
            this.B=this.frame=this.J=this.A=0;
            this.offsetX=g||0;
            this.offsetY=l||0;
            this.k=this.d=this.opacity=1;
            this.X=c||0;
            this.Y=e||0;
            this.y=this.x=0;
            this.T=a;
            this.p=a.getContext("2d");
            this.F=j;
            this.K=d;
            this.g=b;
            this.L=f
        };

        this.reset()
    },ra=function(a,b,c){
        for(var e=new t,c=c/b,f=function(a,b){
            return function(){
                a.frame=b
            }
        },d=0;d<b;d++)v(e,f(a,d),c);
        return e
    };
    qa.prototype.a=function(){
        if(this.opacity){
            var a=this.getWidth(),b=this.getHeight(),c=a/2,e=b/2,f=Math.abs(this.offsetX),d=Math.abs(this.offsetY);
            if(0<this.x+a+c+f&&0<this.y+b+e+d&&this.x-f<this.T.width&&this.y-d<this.T.height){
                this.p.save();
                this.p.globalAlpha=this.opacity;
                f=this.x+c;
                d=this.y+e;
                this.B&&(f+=this.B*(Math.random()-0.5),d+=this.B*(Math.random()-0.5));
                this.p.translate(f,d);
                f=this.A;
                this.J&&(f+=this.J*(Math.random()-0.5));
                f&&this.p.rotate(f);
                (1!=this.d||1!=this.k)&&this.p.scale(this.d,
                    this.k);
                try{
                    this.p.drawImage(this.g,this.X+this.frame*a,this.Y,a,b,this.offsetX-c,this.offsetY-e,a,b)
                }catch(g){}
                this.p.restore()
            }
        }
    };

    var sa=function(a,b,c){
        var e;
        e==h&&(e=a.opacity);
        a.F&&a.F.stop();
        a.F=new t;
        var f=a.F,d=e;
        e=p(function(a){
            this.opacity=ma(a,d,c)
        },a);
        v(f,e,b);
        a.F.play()
    };

    qa.prototype.getHeight=function(){
        this.K||(this.K=this.g.height);
        return this.K
    };

    qa.prototype.getWidth=function(){
        this.L||(this.L=this.g.width);
        return this.L
    };

    var ta={},ua={
        Aa:0,
        Ca:1,
        Ea:2,
        za:3,
        Ba:4,
        Da:5,
        ya:6
    };

    ta.S=j;
    var va=[],w={},wa=0,xa=j,ya=j,za=k,x=function(a,b){
        return a.buttons[b]&&0.5<a.buttons[b]
    },y=function(a,b,c){
        return"undefined"==typeof a.axes[b]?k:c?-0.75>a.axes[b]:0.75<a.axes[b]
    },Ba=function(a){
        ta.S=a.gamepad;
        za||(za=i,Aa())
    },Ca=function(){
        delete ta.S;
        za=k
    },Aa=function(){
        var a;
        if(ta.S)a=ta.S;
        else{
            var b=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads;
            a=b&&(b[3]||b[2]||b[1]||b[0])||j
        }
        if(a&&!(a.timestamp&&a.timestamp==wa)){
            wa=a.timestamp;
            b=[];
            b[0]=x(a,14)||y(a,0,
                i)||y(a,2,i);
            b[1]=x(a,15)||y(a,0,k)||y(a,2,k);
            b[2]=x(a,12)||y(a,1,i)||y(a,3,i);
            b[3]=x(a,13)||y(a,1,k)||y(a,3,k);
            b[4]=x(a,0)||x(a,4)||x(a,6)||x(a,8)||x(a,9)||x(a,10);
            b[5]=x(a,1)||x(a,5)||x(a,7)||x(a,11);
            b[6]=x(a,2)||x(a,3);
            if(va.length)for(var c in ua){
                a=ua[c];
                var e=b[a];
                if("undefined"!=typeof e&&e!=va[a]&&w[a]){
                    ya&&ya();
                    var f=document.createEvent("Event");
                    f.initEvent(e?"keydown":"keyup",i,i);
                    f.keyCode=w[a];
                    xa.dispatchEvent(f)
                }
            }
            va=b
        }
        za&&(window.requestAnimationFrame?window.requestAnimationFrame(Aa):
            window.oRequestAnimationFrame?window.oRequestAnimationFrame(Aa):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(Aa):window.msRequestAnimationFrame?window.msRequestAnimationFrame(Aa):window.webkitRequestAnimationFrame&&window.webkitRequestAnimationFrame(Aa))
    };

    var Da=function(a){
        Error.captureStackTrace?Error.captureStackTrace(this,Da):this.stack=Error().stack||"";
        a&&(this.message=String(a))
    };

    ga(Da,Error);
    var Ea=function(a,b){
        for(var c=1;c<arguments.length;c++)var e=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,e);
        return a
    };

    var Fa=function(a,b){
        b.unshift(a);
        Da.call(this,Ea.apply(j,b));
        b.shift()
    };

    ga(Fa,Da);
    var Ga=function(a,b,c){
        if(!a){
            var e=Array.prototype.slice.call(arguments,2),f="Assertion failed";
            if(b)var f=f+(": "+b),d=e;
            throw new Fa(""+f,d||[]);
        }
    };

    var Ha=Array.prototype,Ia=Ha.indexOf?function(a,b,c){
        Ga(a.length!=j);
        return Ha.indexOf.call(a,b,c)
    }:function(a,b,c){
        c=c==j?0:0>c?Math.max(0,a.length+c):c;
        if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,c);
        for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
    };

    var Ja=function(){};

    var Ka,La,Ma,Na,Oa=function(){
        return o.navigator?o.navigator.userAgent:j
    };

    Na=Ma=La=Ka=k;
    var Pa;
    if(Pa=Oa()){
        var Qa=o.navigator;
        Ka=0==Pa.indexOf("Opera");
        La=!Ka&&-1!=Pa.indexOf("MSIE");
        Ma=!Ka&&-1!=Pa.indexOf("WebKit");
        Na=!Ka&&!Ma&&"Gecko"==Qa.product
    }
    var Ra=Ka,z=La,Sa=Na,Ta=Ma,Ua;
        a:{
            var Va="",Wa;
            if(Ra&&o.opera)var Xa=o.opera.version,Va="function"==typeof Xa?Xa():Xa;
            else if(Sa?Wa=/rv\:([^\);]+)(\)|;)/:z?Wa=/MSIE\s+([^\);]+)(\)|;)/:Ta&&(Wa=/WebKit\/(\S+)/),Wa)var Ya=Wa.exec(Oa()),Va=Ya?Ya[1]:"";
            if(z){
                var Za,$a=o.document;
                Za=$a?$a.documentMode:h;
                if(Za>parseFloat(Va)){
                    Ua=String(Za);
                    break a
                }
            }
            Ua=Va
        }
    var ab=Ua,cb={},A=function(a){
        var b;
        if(!(b=cb[a])){
            b=0;
            for(var c=String(ab).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,e.length),d=0;0==b&&d<f;d++){
                var g=c[d]||"",l=e[d]||"",n=RegExp("(\\d*)(\\D*)","g"),s=RegExp("(\\d*)(\\D*)","g");
                do{
                    var u=n.exec(g)||["","",""],q=s.exec(l)||["","",""];
                    if(0==u[0].length&&0==q[0].length)break;
                    b=((0==u[1].length?0:parseInt(u[1],10))<(0==q[1].length?0:parseInt(q[1],10))?-1:(0==u[1].length?
                        0:parseInt(u[1],10))>(0==q[1].length?0:parseInt(q[1],10))?1:0)||((0==u[2].length)<(0==q[2].length)?-1:(0==u[2].length)>(0==q[2].length)?1:0)||(u[2]<q[2]?-1:u[2]>q[2]?1:0)
                }while(0==b)
            }
            b=cb[a]=0<=b
        }
        return b
    },db={},eb=function(){
        return db[9]||(db[9]=z&&!!document.documentMode&&9<=document.documentMode)
    };

    var fb=function(a){
        fb[" "](a);
        return a
    };

    fb[" "]=function(){};
    !z||eb();
    var gb=!z||eb(),hb=z&&!A("8");
    !Ta||A("528");
    Sa&&A("1.9b")||z&&A("8")||Ra&&A("9.5")||Ta&&A("528");
    Sa&&!A("8")||z&&A("9");
    var ib=function(a,b){
        this.type=a;
        this.currentTarget=this.target=b
    };

    ib.prototype.U=k;
    ib.prototype.defaultPrevented=k;
    ib.prototype.preventDefault=function(){
        this.defaultPrevented=i
    };

    var jb=function(a,b){
        a&&this.init(a,b)
    };

    ga(jb,ib);
    m=jb.prototype;
    m.target=j;
    m.relatedTarget=j;
    m.offsetX=0;
    m.offsetY=0;
    m.clientX=0;
    m.clientY=0;
    m.screenX=0;
    m.screenY=0;
    m.button=0;
    m.keyCode=0;
    m.charCode=0;
    m.ctrlKey=k;
    m.altKey=k;
    m.shiftKey=k;
    m.metaKey=k;
    m.ma=j;
    m.init=function(a,b){
        var c=this.type=a.type;
        ib.call(this,c);
        this.target=a.target||a.srcElement;
        this.currentTarget=b;
        var e=a.relatedTarget;
        if(e){
            if(Sa){
                var f;
                    a:{
                        try{
                            fb(e.nodeName);
                            f=i;
                            break a
                        }catch(d){}
                        f=k
                    }
                f||(e=j)
            }
        }else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);
        this.relatedTarget=e;
        this.offsetX=Ta||a.offsetX!==h?a.offsetX:a.layerX;
        this.offsetY=Ta||a.offsetY!==h?a.offsetY:a.layerY;
        this.clientX=a.clientX!==h?a.clientX:a.pageX;
        this.clientY=a.clientY!==h?a.clientY:a.pageY;
        this.screenX=
        a.screenX||0;
        this.screenY=a.screenY||0;
        this.button=a.button;
        this.keyCode=a.keyCode||0;
        this.charCode=a.charCode||("keypress"==c?a.keyCode:0);
        this.ctrlKey=a.ctrlKey;
        this.altKey=a.altKey;
        this.shiftKey=a.shiftKey;
        this.metaKey=a.metaKey;
        this.state=a.state;
        this.ma=a;
        a.defaultPrevented&&this.preventDefault();
        delete this.U
    };
    m.preventDefault=function(){
        jb.xa.preventDefault.call(this);
        var a=this.ma;
        if(a.preventDefault)a.preventDefault();
        else if(a.returnValue=k,hb)try{
            if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1
        }catch(b){}
    };

    var kb=function(){},lb=0;
    m=kb.prototype;
    m.key=0;
    m.z=k;
    m.ba=k;
    m.init=function(a,b,c,e,f,d){
        if("function"==ba(a))this.ea=i;
        else if(a&&a.handleEvent&&"function"==ba(a.handleEvent))this.ea=k;else throw Error("Invalid listener argument");
        this.N=a;
        this.Z=b;
        this.src=c;
        this.type=e;
        this.capture=!!f;
        this.$=d;
        this.ba=k;
        this.key=++lb;
        this.z=k
    };

    m.handleEvent=function(a){
        return this.ea?this.N.call(this.$||this.src,a):this.N.handleEvent.call(this.N,a)
    };

    var mb={},B={},nb={},ob={},pb=function(a,b,c,e,f){
        if(b){
            if("array"==ba(b)){
                for(var d=0;d<b.length;d++)pb(a,b[d],c,e,f);
                return j
            }
            var e=!!e,g=B;
            b in g||(g[b]={
                i:0,
                s:0
            });
            g=g[b];
            e in g||(g[e]={
                i:0,
                s:0
            },g.i++);
            var g=g[e],l=a[ca]||(a[ca]=++da),n;
            g.s++;
            if(g[l]){
                n=g[l];
                for(d=0;d<n.length;d++)if(g=n[d],g.N==c&&g.$==f){
                    if(g.z)break;
                    return n[d].key
                }
            }else n=g[l]=[],g.i++;
            var s=qb,u=gb?function(a){
                return s.call(u.src,u.key,a)
            }:function(a){
                a=s.call(u.src,u.key,a);
                if(!a)return a
            },d=u;
            d.src=a;
            g=new kb;
            g.init(c,d,
                a,b,e,f);
            c=g.key;
            d.key=c;
            n.push(g);
            mb[c]=g;
            nb[l]||(nb[l]=[]);
            nb[l].push(g);
            a.addEventListener?(a==o||!a.pa)&&a.addEventListener(b,d,e):a.attachEvent(b in ob?ob[b]:ob[b]="on"+b,d);
            return c
        }
        throw Error("Invalid event type");
    },rb=function(a,b,c,e){
        if(!e.Q&&e.aa){
            for(var f=0,d=0;f<e.length;f++)e[f].z?e[f].Z.src=j:(f!=d&&(e[d]=e[f]),d++);
            e.length=d;
            e.aa=k;
            0==d&&(delete B[a][b][c],B[a][b].i--,0==B[a][b].i&&(delete B[a][b],B[a].i--),0==B[a].i&&delete B[a])
        }
    },tb=function(a,b,c,e,f){
        var d=1,b=b[ca]||(b[ca]=
            ++da);
        if(a[b]){
            a.s--;
            a=a[b];
            a.Q?a.Q++:a.Q=1;
            try{
                for(var g=a.length,l=0;l<g;l++){
                    var n=a[l];
                    n&&!n.z&&(d&=sb(n,f)!==k)
                }
            }finally{
                a.Q--,rb(c,e,b,a)
            }
        }
        return Boolean(d)
    },sb=function(a,b){
        if(a.ba){
            var c=a.key;
            if(mb[c]){
                var e=mb[c];
                if(!e.z){
                    var f=e.src,d=e.type,g=e.Z,l=e.capture;
                    f.removeEventListener?(f==o||!f.pa)&&f.removeEventListener(d,g,l):f.detachEvent&&f.detachEvent(d in ob?ob[d]:ob[d]="on"+d,g);
                    f=f[ca]||(f[ca]=++da);
                    if(nb[f]){
                        var g=nb[f],n=Ia(g,e);
                        0<=n&&(Ga(g.length!=j),Ha.splice.call(g,n,1));
                        0==g.length&&
                        delete nb[f]
                    }
                    e.z=i;
                    if(e=B[d][l][f])e.aa=i,rb(d,l,f,e);
                    delete mb[c]
                }
            }
        }
        return a.handleEvent(b)
    },qb=function(a,b){
        if(!mb[a])return i;
        var c=mb[a],e=c.type,f=B;
        if(!(e in f))return i;
        var f=f[e],d,g;
        if(!gb){
            var l;
            if(!(l=b))a:{
                l=["window","event"];
                for(var n=o;d=l.shift();)if(n[d]!=j)n=n[d];
                    else{
                        l=j;
                        break a
                    }
                l=n
            }
            d=l;
            l=i in f;
            n=k in f;
            if(l){
                if(0>d.keyCode||d.returnValue!=h)return i;
                    a:{
                        var s=k;
                        if(0==d.keyCode)try{
                            d.keyCode=-1;
                            break a
                        }catch(u){
                            s=i
                        }
                        if(s||d.returnValue==h)d.returnValue=i
                    }
            }
            s=new jb;
            s.init(d,this);
            d=i;
            try{
                if(l){
                    for(var q=[],bb=s.currentTarget;bb;bb=bb.parentNode)q.push(bb);
                    g=f[i];
                    g.s=g.i;
                    for(var N=q.length-1;!s.U&&0<=N&&g.s;N--)s.currentTarget=q[N],d&=tb(g,q[N],e,i,s);
                    if(n){
                        g=f[k];
                        g.s=g.i;
                        for(N=0;!s.U&&N<q.length&&g.s;N++)s.currentTarget=q[N],d&=tb(g,q[N],e,k,s)
                    }
                }else d=sb(c,s)
            }finally{
                q&&(q.length=0)
            }
            return d
        }
        e=new jb(b,this);
        return d=sb(c,e)
    };

    var ub=function(a){
        this.va=a;
        this.wa=[]
    };

    ga(ub,Ja);
    var vb=[];
    ub.prototype.listen=function(a,b,c,e,f){
        "array"!=ba(b)&&(vb[0]=b,b=vb);
        for(var d=0;d<b.length;d++){
            var g=pb(a,b[d],c||this,e||k,f||this.va||this);
            this.wa.push(g)
        }
        return this
    };

    ub.prototype.handleEvent=function(){
        throw Error("EventHandler.handleEvent not implemented");
    };

    var wb=function(a,b,c,e,f){
        ub.call(this);
        this.ra=a;
        this.qa=b;
        this.ia=c;
        this.ha=e;
        this.ta=f;
        this.listen(this.ta,"click",this.ua)
    };

    ga(wb,ub);
    wb.prototype.ua=function(){
        window.gapi&&window.gbar&&window.gbar.asmc?window.gapi.load("share",p(this.la,this)):window.open("about:blank").location="https://plus.google.com"
    };
    wb.prototype.la=function(){
        if(window.gapi&&window.gapi.share){
            var a={
                items:[{
                    type:"http://schema.org/WebPage",
                    id:location.protocol+"//"+location.host,
                    properties:{
                        description:[this.ia],
                        url:[this.ra],
                        name:[this.qa],
                        image:[this.ha]
                    }
                }]
            },b=window.location.toString().match(/[?&]authuser=(\d+)/);
            window.gapi.share.lightbox(a,{
                isLoggedInForGooglePlus:!(!window.gbar||!window.gbar.asmc)||!!window.google.doodle.sf,
                onLoginPopupBlocked:function(){
                    window.google.log&&window.google.log("DOODLE","popupblocked")
                },
                sessionIndex:b&&
                b[1]||"",
                sourceForLogging:"doodle",
                onLoginStateChanged:p(function(){
                    aa("google.doodle.sf",i);
                    this.la()
                },this)
            })
        }
    };

    var xb,yb,C,zb,Ab,Bb,D,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,E,F,G,H,Nb,I,Ob,J,ja=[32,13],Pb=[],Qb=0,Rb=k,Sb=0,Tb=[],Ub=i,Wb=function(a,b,c){
        for(var e=new t,f=0;2>=f;f++)v(e,Vb(a,b+f)),pa(e,16);
        if(c){
            pa(e,64);
            for(f=2;0<=f;f--)v(e,Vb(a,b+f)),pa(e,16);
            v(e,Vb(a,a.className))
        }
        return e
    },Zb=function(a){
        var b=r("img");
        b.src=""+a;
        Hb&&(!b.complete&&"complete"!=b.readyState?(b.onload=Xb,Qb++):Ib||(Ib=window.setTimeout(Yb,10)));
        return b
    },K=function(){
        var a=la(),b=a-Db;
        Rb?(Pb.push(b),30<Pb.length&&Pb.shift()):
        Pb=[];
        b=Math.min(40,b);
        G||Eb&&18E4<a-Eb?Rb=k:!Ub&&zb(a,b)?(window.requestAnimationFrame?window.requestAnimationFrame(K,C):window.oRequestAnimationFrame?window.oRequestAnimationFrame(K):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(K):window.msRequestAnimationFrame?window.msRequestAnimationFrame(K):window.webkitRequestAnimationFrame?window.webkitRequestAnimationFrame(K,C):window.setTimeout(K,16),Db=a,Rb=i):Rb=k
    },$b=function(a,b,c){
        window.google&&window.google.log&&window.google.log("doodle-soccer",
            "p:"+a+",s:"+("undefined"!=typeof b?b:"_")+",nc:"+("undefined"!=typeof c?c:"_")+",d:"+Sb+",")
    },Vb=function(a,b){
        return function(){
            a.className=b
        }
    },ac=function(){
        Eb=la();
        !Ub&&(!Rb&&!G)&&K()
    },bc=function(a){
        ac();
        (37==a.keyCode||39==a.keyCode||38==a.keyCode||40==a.keyCode||ka(a.keyCode))&&a.preventDefault();
        G&&(ka(a.keyCode)&&!F.v)&&F.play();
        Gb&&Gb(a)
    },cc=function(a){
        ka(a.keyCode)&&a.preventDefault()
    },Xb=function(){
        --Qb||Hb()
    },Yb=function(){
        Qb||Hb();
        Ib=j
    },dc=function(a){
        Jb=i;
        ac();
        document.activeElement==
        C&&!G&&a.preventDefault();
        Kb&&Kb(a)
    },ec=function(a){
        Jb&&Lb&&(Jb=k,Lb(a))
    },fc=function(a){
        ac();
        Mb&&Mb(a)
    },gc=function(){
        window.getSelection().selectAllChildren(Fb)
    },hc=function(a,b,c){
        a.style.margin=c+"px 0 0 "+b+"px"
    };

    var ic={
        ALL:["Play again","Search","Share on Google+"],
        af:["Speel weer","Soek","Deel op Google+"],
        "am_ET(Amharic/ALL)":["\u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275","\u1348\u120d\u130d","Google+ \u120b\u12ed \u12a0\u130b\u122b"],
        ar:["\u0627\u0644\u0644\u0639\u0628 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629","\u0628\u062d\u062b","\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 +Google"],
        az:["Yen\u0259 oyna","Axtar","Google+'da b\u00f6l\u00fc\u015f"],
        be:["\u042f\u0448\u0447\u044d \u0440\u0430\u0437",
        "\u0428\u0443\u043a\u0430\u0446\u044c","\u041f\u0430\u0434\u0437\u044f\u043b\u0456\u0446\u0446\u0430 \u043d\u0430 Google+"],
        bg:["\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435","\u0422\u044a\u0440\u0441\u0435\u043d\u0435","\u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435 \u0432 Google+"],
        bn:["\u0986\u09ac\u09be\u09b0 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8","\u0985\u09a8\u09c1\u09b8\u09a8\u09cd\u09a7\u09be\u09a8 \u0995\u09b0\u09c1\u09a8",
        "Google+ \u098f \u09ad\u09be\u0997 \u0995\u09b0\u09c1\u09a8"],
        bs:["Igraj ponovno","Tra\u017ei","Podijeli na Google+"],
        ca:["Juga una altra vegada","Cerca ","Comparteix a Google+"],
        cs:["Hr\u00e1t znovu","Hledat","Sd\u00edlet na Google+"],
        da:["Spil igen","S\u00f8g","Del p\u00e5 Google+"],
        de:["Nochmal ansehen","Suchen","Auf Google+ teilen"],
        el:["\u03a0\u03b1\u03af\u03be\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac","\u0391\u03bd\u03b1\u03b6\u03b7\u03c4\u03ae\u03c3\u03c4\u03b5","\u039c\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03bf Google+"],
        en_us:["Play again","Search","Share on Google+"],
        "en-GB":["Play again","Search","Share on Google+"],
        es:["Jugar de nuevo","Buscar","Compartir en Google+"],
        "es-419":["Jugar de nuevo","Buscar","Compartir en Google+"],
        et:["M\u00e4ngi uuesti","Otsi","Jaga teenuses Google+"],
        eu:["Jolastu berriro","Bilatu","Partekatu Google+en"],
        fi:["Toista uudelleen","Hae","Jaa Google+ -palvelussa"],
        fr:["Revoir","Rechercher","Partager sur Google+"],
        ga:["Seinn ar\u00eds \u00e9","Cuardaigh","Roinn ar Google+"],
        gl:["Xogar de novo",
        "Buscar","Compartir en Google+"],
        hr:["Ponovi","Pretra\u017ei","Dijeli na Google+"],
        hu:["Lej\u00e1tsz\u00e1s ism\u00e9t","Keres\u00e9s","Megoszt\u00e1s a Google+-on"],
        id:["Main lagi","Telusuri","Bagikan di Google+"],
        is:["Spila aftur","Leita","Deila \u00e1 Google+"],
        it:["Gioca di nuovo","Cerca","Condividi su Google+"],
        iw:["\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1","\u05d7\u05e4\u05e9","\u05e9\u05ea\u05e3 \u05d1-Google+"],
        ja:["\u3082\u3046\u4e00\u5ea6\u898b\u308b","\u691c\u7d22","Google+ \u3067\u5171\u6709"],
        ko:["\ub2e4\uc2dc\ud558\uae30","\uac80\uc0c9","Google+\uc5d0\uc11c \uacf5\uc720"],
        lt:["Rodyti dar kart\u0105","Ie\u0161koti","Dalytis \u201eGoogle+\u201c"],
        lv:["Atska\u0146ot v\u0113lreiz","Mekl\u0113t","Kop\u012bgot Google+"],
        mk:["\u0418\u0433\u0440\u0430\u0458 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e","\u041f\u0440\u0435\u0431\u0430\u0440\u0430\u0458","\u0421\u043f\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 Google+"],
        mr:["\u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u0932\u0947 \u0915\u0930\u093e",
        "\u0936\u094b\u0927\u093e","Google+ \u0935\u0930 \u0938\u093e\u092e\u093e\u092f\u093f\u0915 \u0915\u0930\u093e"],
        ms_my:["Main semula","Cari","Kongsi di Google+"],
        nl:["Opnieuw afspelen","Zoeken","Delen op Google+"],
        no:["Spill av p\u00e5 nytt","S\u00f8k","Del p\u00e5 Google+"],
        pl:["Odtw\u00f3rz ponownie","Szukaj","Udost\u0119pnij w Google+"],
        "pt-BR":["Jogar novamente","Pesquisar","Compartilhar no Google+"],
        "pt-PT":["Jogar novamente","Pesquisar","Partilhar no Google+"],
        ro:["Reda\u0163i din nou","C\u0103uta\u0163i",
        "Distribui\u0163i \u00een Google+"],
        ru:["\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437","\u0418\u0441\u043a\u0430\u0442\u044c","\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 Google+"],
        sk:["Hra\u0165 znova","H\u013eada\u0165","Zdie\u013ea\u0165 v Google+"],
        sl:["Ponovno predvajaj","I\u0161\u010di","Deli v storitvi Google+"],
        sr:["\u0418\u0433\u0440\u0430\u0458 \u043e\u043f\u0435\u0442","\u041f\u0440\u0435\u0442\u0440\u0430\u0436\u0438","\u0414\u0435\u043b\u0438 \u043d\u0430 Google+"],
        sv:["Spela igen","S\u00f6k","Dela p\u00e5 Google+"],
        sw:["Cheza tena","Tafuta","Shiriki kwenye Google+"],
        th_All:["\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ","\u0e04\u0e49\u0e19\u0e2b\u0e32","\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e1a\u0e19 Google+"],
        tr:["Tekrar oyna","Ara","Google+'da payla\u015f"],
        uk:["\u0413\u0440\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437","\u0428\u0443\u043a\u0430\u0442\u0438","\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0443 Google+"],
        vi:["Ph\u00e1t l\u1ea1i","T\u00ecm ki\u1ebfm","Chia s\u1ebb tr\u00ean Google+"],
        "zh-CN":["\u518d\u73a9\u4e00\u6b21","\u641c\u7d22","\u901a\u8fc7 Google+ \u5206\u4eab"],
        "zh-TW_HK":["\u518d\u64ad\u4e00\u6b21","\u641c\u5c0b","\u900f\u904e Google+ \u5206\u4eab"],
        "zh-TW_tw":["\u518d\u770b\u4e00\u6b21","\u641c\u5c0b","\u900f\u904e Google+ \u5206\u4eab"],
        zu:["Dlala futhi","Sesha ","Yabelana ku-Google+"],
        hi:["\u092b\u093c\u093f\u0930 \u0916\u0947\u0932\u0947\u0902","\u0916\u094b\u091c\u0947\u0902","Google+ \u092a\u0930 \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902"],
        fil:["I-play muli","Maghanap","Ibahagi sa Google+"],
        fa:["\u0628\u0627\u0632\u067e\u062e\u0634","\u062c\u0633\u062a\u062c\u0648","\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 +Google"]
    },jc=function(a){
        return google.kHL in ic&&ic[google.kHL][a]||ic.ALL[a]
    };

    var kc=function(a,b){
        this.oa=a;
        this.O=b;
        this.g=j;
        this.G=k
    };

    kc.prototype.getWidth=function(a){
        return this.O[a][2]
    };

    kc.prototype.getHeight=function(a){
        return this.O[a][3]
    };
    kc.prototype.a=function(a,b,c,e){
        if(!this.g||!this.G)c=p(this.a,this,a,b,c,e),this.g?this.G&&c&&c():(this.g=b=document.createElement("img"),c=p(function(a){
            this.G||(this.G=i,a&&a())
        },this,c),b.onload=c,b.src=this.oa,(b.complete||"complete"==b.readyState)&&c());
        else{
            var a=this.O[a],f=a[2],d=a[3];
            b.drawImage(this.g,a[0],a[1],f,d,c,e,f,d)
        }
    };

    var lc=[[640,107,304,144],[3382,266,71,70],[3145,0,71,70],[23,266,530,207],[556,266,530,207],[1089,369,2260,112],[1254,107,2268,156],[0,0,3072,104],[1089,266,1230,100],[0,107,637,44],[0,184,470,44],[0,154,275,27],[3352,266,27,26],[3075,0,67,69],[947,107,304,144],[0,266,20,23],[3525,0,16,16]];
    var mc,L,M,nc,oc,pc,O,qc,rc,sc,tc,uc,vc,wc,xc,P,Q,yc,R,S,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,T,U,Hc=function(a,b,c,e,f){
        this.w=e;
        this.D=f;
        this.w.opacity=0;
        this.height=c;
        this.o=0;
        this.V=8E-4;
        this.x=a;
        this.y=b;
        this.H=a;
        this.I=b;
        this.state=0
    };
    Hc.prototype.a=function(){
        var a=this.w;
        a.d=(-16.18+this.y*(0.18-0.4))/-151;
        a.k=a.d;
        a.x=this.x-a.getWidth()/2;
        a.y=this.y-this.height-(1+a.k)*a.getHeight()/2;
        a.A=a.x/10;
        var b=(50+40*Math.max(0,Math.min(1,(50-this.height)/50)))*a.d;
        Ic(this.x,this.y,b,0.5*b,"rgba(0,0,0,"+0.2*a.opacity+")");
        a.a();
        this.D.x=a.x;
        this.D.y=a.y;
        this.D.d=a.d;
        this.D.k=a.k;
        this.D.a()
    };

    Hc.prototype.moveTo=function(a,b,c){
        this.H=a;
        this.I=b;
        this.o=c
    };
    Hc.prototype.update=function(a){
        this.w.opacity=Math.min(1,this.w.opacity+0.001*a);
        this.w.opacity=1;
        this.height+=this.o*a;
        var b=0.2;
        2==this.state&&(b=0.015*Math.sqrt(Math.abs(this.I-this.y)+Math.abs(this.H-this.x)));
        var c=a*b,e=Math.atan2(this.I-this.y,this.H-this.x),e=e-Math.PI/2,b=-Math.sin(e)*c,c=Math.cos(e)*c;
        Math.abs(b)>Math.abs(this.x-this.H)&&(b=this.H-this.x);
        Math.abs(c)>Math.abs(this.y-this.I)&&(c=this.I-this.y);
        this.x+=b;
        this.y+=c;
        0>this.height?(this.height=0,this.o=0.1>Math.abs(this.o)?
            0:this.o=0.6*-this.o):0<this.height&&(this.o-=this.V*a)
    };

    var Jc,Kc,Lc,Mc,Nc,Oc,V,Pc,Qc,Rc=function(){
        for(var a=[],b=0,c;c=oc[b++];)0==c.state&&a.push(c);
        Oc=a.length?a[Math.floor(Math.random()*a.length)]:j;
        Oc!=j&&(a=Oc.x,Mc=Jc,Nc=a,Kc.play())
    };

    var W,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,ad,X,bd,Y,cd,dd=function(){
        Y&&(Y.stop(),Y=j)
    },ed=function(){
        Y==j&&(2==L?(W=Vc,Y=Uc):5==L?0<M?(W=Zc,Y=Yc):(W=ad,Y=$c):cd?(W=Tc,Y=Sc):O[2]&&150<=X?(W=Vc,Y=Uc):(O[2]&&150<=X?0:O[3]&&390>=X)?(W=Xc,Y=Wc):(W=Vc,W.frame=0),Y&&Y.play())
    };

    var fd={
        ALL:["Score","Football","I played football! #GoogleDoodle"],
        af:["Hoogste telling","Voetbal","Ek het voetbal gespeel #GoogleDoodle"],
        "am_ET(Amharic/ALL)":["\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275","\u12a5\u130d\u122d \u12b3\u1235","\u12a5\u130d\u122d \u12b3\u1235 \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle"],
        ar:["\u0627\u0644\u0646\u062a\u064a\u062c\u0629","\u0643\u0631\u0629 \u0627\u0644\u0642\u062f\u0645","\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0643\u0631\u0629 \u0627\u0644\u0642\u062f\u0645 GoogleDoodle#"],
        az:["\u018fn y\u00fcks\u0259k bal","Futbol","M\u0259n futbol oynad\u0131m! #GoogleDoodle"],
        be:["\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a","\u0424\u0443\u0442\u0431\u043e\u043b","\u042f \u0433\u0443\u043b\u044f\u045e \u0443 \u0444\u0443\u0442\u0431\u043e\u043b #GoogleDoodle"],
        bg:["\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u0424\u0443\u0442\u0431\u043e\u043b","\u0418\u0433\u0440\u0430\u0445 \u0444\u0443\u0442\u0431\u043e\u043b #GoogleDoodle"],
        bn:["\u09b8\u09cd\u0995\u09cb\u09b0","\u09ab\u09c1\u099f\u09ac\u09b2","\u0986\u09ae\u09bf \u09ab\u09c1\u099f\u09ac\u09b2 \u0996\u09c7\u09b2\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2"],
        bs:["Rezultat","Nogomet","Igrao sam nogomet #GoogleDoodle"],
        ca:["R\u00e8cord","Futbol ","He jugat a futbol #GoogleDoodle"],
        cs:["Nejvy\u0161\u0161\u00ed sk\u00f3re","Fotbal","Zahrajte si fotbal #GoogleDoodle"],
        da:["Top score","Fodbold","Jeg spillede fodbold #GoogleDoodle"],
        de:["Rekord","Fu\u00dfball",
        "Ich habe Fu\u00dfball gespielt #GoogleDoodle"],
        el:["\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2","\u03a0\u03bf\u03b4\u03cc\u03c3\u03c6\u03b1\u03b9\u03c1\u03bf","\u0388\u03c0\u03b1\u03b9\u03be\u03b1 \u03c0\u03bf\u03b4\u03cc\u03c3\u03c6\u03b1\u03b9\u03c1\u03bf #GoogleDoodle"],
        en_us:["Score","Soccer","I played soccer! #GoogleDoodle"],
        "en-GB":["Score","Football","I played football! #GoogleDoodle"],
        es:["R\u00e9cord","F\u00fatbol",
        "He jugado al f\u00fatbol #GoogleDoodle"],
        "es-419":["Resultado","F\u00fatbol","He jugado f\u00fatbol #GoogleDoodle"],
        et:["Rekordtulemus","Jalgpall","M\u00e4ngisin jalgpalli #GoogleDoodle"],
        eu:["Emaitza","Futbola","Futbolean jokatu dut #GoogleDoodle"],
        fi:["K\u00e4rkitulos","Jalkapallo","Pelasin jalkapalloa #GoogleDoodle"],
        fr:["R\u00e9sultat","Football","J'ai jou\u00e9 au football #GoogleDoodle"],
        ga:["Sc\u00f3r is fearr","Sacar","D'imir m\u00e9 sacar #GoogleDoodle"],
        gl:["Record","F\u00fatbol","Xoguei \u00f3 f\u00fatbol #GoogleDoodle"],
        hr:["Rezultat","Nogomet","Igrao sam nogomet #GoogleDoodle"],
        is:["Flest stig","F\u00f3tbolti","\u00c9g f\u00f3r \u00ed f\u00f3tbolta #GoogleDoodle"],
        it:["Miglior punteggio","Calcio","Ho giocato a calcio #GoogleDoodle"],
        iw:["\u05e0\u05d9\u05e7\u05d5\u05d3","\u05db\u05d3\u05d5\u05e8\u05d2\u05dc","\u05e9\u05d9\u05d7\u05e7\u05ea\u05d9 \u05db\u05d3\u05d5\u05e8\u05d2\u05dc  #GoogleDoodle "],
        hu:["Legjobb eredm\u00e9ny","Labdar\u00fag\u00e1s","Fociztam #GoogleDoodle"],
        ja:["\u30b9\u30b3\u30a2","\u30b5\u30c3\u30ab\u30fc",
        "\u300c\u30b5\u30c3\u30ab\u30fc\u300d\u3092\u3084\u3063\u305f! #GoogleDoodle"],
        ko:["\uae30\ub85d","\ucd95\uad6c","\ucd95\uad6c\ub97c \ud588\uc5b4\uc694! #GoogleDoodle "],
        lt:["Rezultatas","Futbolas","A\u0161 \u017eaid\u017eiau Google futbol\u0105!"],
        lv:["Lab\u0101kais rezult\u0101ts","Futbols","Es sp\u0113l\u0113ju futbolu #GoogleDoodle"],
        mk:["\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u0424\u0443\u0442\u0431\u0430\u043b","\u0418\u0433\u0440\u0430\u0432 \u0444\u0443\u0442\u0431\u0430\u043b #GoogleDoodle"],
        mo:["Scor de top","Fotbal","Am jucat fotbal #GoogleDoodle"],
        mr:["\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923","\u092b\u0942\u091f\u092c\u0949\u0932","\u092e\u0940 \u092b\u0942\u091f\u092c\u0949\u0932 \u0916\u0947\u0933\u0932\u094b #GoogleDoodle"],
        ms_my:["Skor tertinggi","Bola Sepak","Saya bermain bola sepak #GoogleDoodle"],
        nl:["Topscore","Voetbal","Ik heb gevoetbald #GoogleDoodle"],
        no:["Resultat","Fotball","Jeg spilte fotball!  #GoogleDoodle"],
        pl:["Najlepszy wynik","Pi\u0142ka no\u017cna",
        "Gram w pi\u0142k\u0119 no\u017cn\u0105 #GoogleDoodle"],
        "pt-BR":["Pontua\u00e7\u00e3o","Futebol","Eu joguei Futebol #GoogleDoodle"],
        "pt-PT":["Pontua\u00e7\u00e3o","Futebol","Eu joguei Futebol #GoogleDoodle"],
        ro:["Scor de top","Fotbal","Am jucat fotbal #GoogleDoodle"],
        ru:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0424\u0443\u0442\u0431\u043e\u043b","\u0424\u0443\u0442\u0431\u043e\u043b #GoogleDoodle"],
        sk:["Najlep\u0161ie sk\u00f3re","Futbal","Zahrajte si futbal #GoogleDoodle"],
        sl:["Najbolj\u0161i rezultat",
        "Nogomet","Igral sem nogomet #GoogleDoodle"],
        sr:["\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u0424\u0443\u0434\u0431\u0430\u043b","\u0418\u0433\u0440\u0430\u043c \u0444\u0443\u0434\u0431\u0430\u043b #GoogleDoodle"],
        sv:["Resultat","Fotboll","Jag spelade fotboll #GoogleDoodle"],
        sw:["Alama za Juu","Soka","Nilicheza Soka #GoogleDoodle"],
        th_All:["\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14","\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25 ",
        "\u0e09\u0e31\u0e19\u0e40\u0e15\u0e30\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25\u0e1a\u0e19 Google Doodle!"],
        tr:["En y\u00fcksek puan","Futbol","Futbol oynad\u0131m! #GoogleDoodle"],
        uk:["\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0424\u0443\u0442\u0431\u043e\u043b","\u0424\u0443\u0442\u0431\u043e\u043b #GoogleDoodle"],
        "zh-CN":["\u6700\u9ad8\u5f97\u5206","\u8db3\u7403","#Google\u6d82\u9e26#\u6211\u8e22\u4e86\u8db3\u7403"],
        "zh-TW_HK":["\u6700\u9ad8\u5f97\u5206",
        "\u8db3\u7403","\u6211\u8e22\u4e86\u5834\u8db3\u7403\uff01 #GoogleDoodle"],
        "zh-TW_tw":["\u6700\u9ad8\u5f97\u5206","\u8db3\u7403","\u6211\u8e22\u4e86\u5834\u8db3\u7403\uff01 #GoogleDoodle"]
    },gd=function(a){
        return google.kHL in fd&&fd[google.kHL][a]||fd.ALL[a]
    };

    var Z=[],$=function(a,b,c,e,f,d,g){
        var l=Gc.O[a];
        return new qa(wc,Fc,l[0]+(b||0),l[1]+(c||0),e||Gc.getWidth(a),f||Gc.getHeight(a),d||0,g||0)
    },hd=function(a){
        R.x=a;
        R.y=93;
        S.x=R.x+R.getWidth()/2-S.getWidth()/2;
        S.y=R.y+R.getHeight()/2-S.getHeight()/2-2
    },kd=function(a,b){
        4==L&&10>mc&&(mc+=1.5E-5*b);
        var c=b*mc;
        3==L&&xc&&(2==xc?qc=i:3==xc&&(rc=i));
        3==L&&3==Ac&&id(4);
        1==Ac&&(qc&&rc)&&jd(2);
        Ec+=b;
        4==L&&(2E3<Ec&&3>nc)&&(Ec=0,Oc?(V=Pc,Qc.play()):Rc());
        O[2]&&150<=X?X-=5:(O[2]&&150<=X?0:O[3]&&390>=X)&&(X+=5);
        ed();
        for(var e=X,f=0,d;d=oc[f++];)if(d.update(c),2==d.state&&50>=d.y&&(d.state=0),1==d.state&&191<=d.y)d.w.getHeight(),50<Math.abs(d.x-e)||d.W&&!cd||!d.W&&cd?(d.state=3,nc++):(d.state=2,M++,d.moveTo(200+200*Math.random(),50,0));3<=nc&&id(5);
        c=wc;
        c.getContext("2d").clearRect(0,0,c.width,c.height);
        tc.a();
        V.x=Jc;
        V.a();
        c=[];
        for(e=0;f=oc[e++];)c.push(f);
        c.sort(function(a,b){
            return a.y-b.y
        });
        for(e=0;f=c[e++];)191>f.y&&f.a();
        Ic(R.x+R.getWidth()/2,R.y+R.getHeight()-5,60,18,"rgba(0,0,0,0.2)");
        R.a();
        S.a();
        W.x=X-W.getWidth()/2;
        W.y=bd;
        e=30+30*(Math.cos(3.14*(0.5+(1+Tc.frame)/18))+1);
        Ic(X,bd,e,0.3*e,"rgba(0,0,0,0.2)");
        W.a();
        for(e=0;f=c[e++];)191<=f.y&&201>f.y&&f.a();
        vc.a();
        for(e=0;f=c[e++];)201<=f.y&&f.a();
        c=yc.getWidth();
        for(e=0;e<nc;e++)yc.x=e*c+6*e+39,yc.y=10,yc.a();
        c=na(Math.floor(M/1));
        e=na(Math.floor(M/10));
        f=na(Math.floor(M/100));
        d=-(Z[0].getWidth()+5);
        Z[c].x=465;
        Z[c].y=10;
        Z[c].a();
        Z[e].x=465+d;
        Z[e].y=10;
        Z[e].a();
        Z[f].x=465+2*d;
        Z[f].y=10;
        Z[f].a();
        P.frame=a/1E3&1;
        P.x=X+40;
        P.y=11;
        P.a();
        T.x=P.x-15;
        T.y=P.y+70;
        T.opacity=P.opacity;
        T.a();
        U.x=P.x-30;
        U.y=P.y+90;
        U.opacity=P.opacity;
        U.a();
        Q.frame=a/1E3&1;
        Q.x=X-190;
        Q.y=11;
        Q.a();
        T.x=Q.x+150;
        T.y=Q.y+70;
        T.opacity=Q.opacity;
        T.a();
        U.x=Q.x+170;
        U.y=Q.y+90;
        U.opacity=Q.opacity;
        U.a();
        uc.a();
        return i
    },ld=function(){
        2==Ac&&jd(3);
        if((3==L||4==L)&&!cd)cd=i,dd(),ed()
    },md=function(){
        var a=0;
        44<M?a=3:9<M?a=2:0<M&&(a=1);
        $b(1,M,a);
        var b,c=String(M);
        Bb.ia=Ob+c;
        b||(b=Ab);
        Bb.ha=""+b+"12-hp-share"+a+".png";
        xb.textContent=c;
        for(b=0;3>b;b++)Tb[b].className=
            b<a?"hplogo_smg":"hplogo_smh";
        I.style.display="";
        J.play()
    },Ic=function(a,b,c,e,f){
        var a=a-c/2,b=b-e/2,d=pc;
        d.save();
        d.beginPath();
        d.translate(a,b);
        d.scale(c,e);
        d.arc(0.5,0.5,0.5,0,2*Math.PI,i);
        d.fillStyle=f;
        d.fill();
        d.restore()
    },nd=function(a){
        return 37==a.keyCode?2:39==a.keyCode?3:38==a.keyCode||ka(a.keyCode)?1:0
    },od=function(a){
        2!=Sb&&(Sb=0);
        var b=nd(a);
        O[b]=i;
        b&&(a.preventDefault(),xc=b,1==b&&ld())
    },pd=function(a){
        O[nd(a)]=k;
        nd(a)==xc&&(a.preventDefault(),xc=0)
    },sd=function(){
        Gc.G=i;
        var a=qd,b=
        rd;
        Lb=j;
        C.onmouseout=ec;
        C.onmouseup=ec;
        pd&&(C.onkeyup=pd);
        Kb=a;
        C.onmousedown=dc;
        Mb=b;
        C.onmousemove=fc;
        Gb=od;
        C.onkeydown=bc;
        C.style.cursor="pointer";
        -1!=navigator.userAgent.indexOf("Opera")&&(C.onkeypress=cc);
        id(1);
        K()
    },qd=function(){
        2!=Sb&&(Sb=1);
        ld()
    },rd=function(a){
        if(wc!=j){
            var a=a||window.event,a=!a?[0,0]:[(a.clientX||a.targetTouches&&a.targetTouches[0]&&a.targetTouches[0].clientX||0)+(document.body.scrollLeft||document.documentElement.scrollLeft||0),(a.clientY||a.targetTouches&&a.targetTouches[0]&&
                a.targetTouches[0].clientY||0)+(document.body.scrollTop||document.documentElement.scrollTop||0)],b=wc,c=0;
            if(b){
                do c+=b.offsetLeft;while(b=b.offsetParent)
            }
            a=a[0]-c;
            3==L&&(sc==j?sc=a:75<Math.abs(sc-a)&&(qc=rc=i));
            if(3==L||4==L)X=Math.min(390,Math.max(150,a))
        }
    },td=function(){
        Dc.play();
        //if(!window.WebFontConfig){
        //    aa("WebFontConfig.google.families",["Fredoka+One::latin"]);
        //    var a=document.createElement("script");
        //    a.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
        //    a.type="text/javascript";
        //    a.async="true";
        //    (document.getElementById("xjsc")||document.body).appendChild(a)
        //}
        w[0]=37;
        w[1]=39;
        w[2]=ja[0];
        w[4]=ja[0];
        w[5]=ja[0];
        w[6]=ja[0];
        xa=C;
        ya=function(){
            2!=Sb&&(Sb=2)
        }||j;
        window.addEventListener("MozGamepadConnected",Ba,k);
        window.addEventListener("MozGamepadDisconnected",Ca,k);
        if((navigator.webkitGamepads||navigator.webkitGetGamepads)&&!za)za=i,Aa();
        $b(0)
    },id=function(a){
        if(L!=a)switch(L=a,a){
            case 1:
                Bc.play();
                break;
            case 3:
                nc=M=0;
                mc=0.6;
                sc=j;
                qc=rc=k;
                jd(1);
                break;
            case 4:
                for(var a=
                    [],b=0;5>b;b++){
                    var c=$(1),e=$(2);
                    a.push(new Hc(235+20*b,50,50+15*Math.random(),c,e))
                }
                oc=a;
                Ec=0;
                break;
            case 5:
                1>=M&&(oa(0),Ac=0)
        }
    },jd=function(a){
        for(;Ac<a;)switch(++Ac){
            case 1:
                sa(P,200,1);
                break;
            case 2:
                sa(P,100,0);
                sa(Q,200,1);
                break;
            case 3:
                sa(Q,100,0),oa(1)
        }
    },ud=function(){
        id(0);
        oc=[];
        xc=0;
        O={};

        var a;
        Ac=(a=window.localStorage&&window.localStorage.getItem("doodle-soccer-tooltip")||j)&&parseFloat(a)?3:0;
        mc=nc=M=0;
        ha=k;
        Ub=!kd;
        zb=kd;
        Db=la();
        Hb=sd;
        (C=document.getElementById("hplogo"))?(google.doodle&&google.doodle.alt&&
            C.setAttribute("aria-label",google.doodle.alt),C.innerHTML="",a=i):a=k;
        if(a){
            Fc=Zb("soccer/soccer12-hp-sprite.png");
            Gc=new kc("soccer12-hp-sprite.png",lc);
            if(a=r("canvas",h)){
                a.style.position="absolute";
                a.height=207;
                a.width=530;
                C.appendChild(a);
                var b=a.getContext("2d");
                b&&b.fillRect(0,0,1,1)
            }
            wc=a;
            pc=wc.getContext("2d");
            var c=r("div","hplogo_pc");
            a=r("div","hplogo_pb");
            var e=Wb(a,"hplogo_pbd");
            v(e,td);
            hc(a,230,90);
            c.appendChild(a);
            c.onmousedown=function(){
                c.onmousedown=j;
                e.play()
            };

            c.style.display=
            "none";
            C.appendChild(c);
            Cc=c;
            a=gd(1);
            b=gd(2)+" \u2014 "+gd(0)+": ";
            Ab="soccer";
            var f=window.location.protocol+"//www.google.com/doodles/soccer-2012";
            Zb("Resources/olympics12-hp-sprite.png");
            I=r("div","hplogo_sc");
            yb=r("div","hplogo_sb");
            xb=r("span","hplogo_sbt","hplogo_sse");
            yb.appendChild(xb);
            for(var d=0;3>d;d++)Tb[d]=r("div","hplogo_sm"),yb.appendChild(Tb[d]);
            I.appendChild(yb);
            d=function(a){
                a=r("div",a);
                I.appendChild(a);
                return a
            };

            E=d("hplogo_sr");
            H=d("hplogo_ss");
            D=d("hplogo_sg");
            E.title=jc(0);
            H.title=jc(1);
            D.title=jc(2);
            I.style.display="none";
            Fb=r("div","hplogo_sle");
            Fb.onmouseup=gc;
            d=r("span","","hplogo_sse");
            d.textContent=f;
            Fb.appendChild(d);
            I.appendChild(Fb);
            C.appendChild(I);
            J=new t;
            v(J,function(){
                I.style.display="";
                yb.style.opacity=0;
                E.style.opacity=0;
                H.style.opacity=0;
                D.style.opacity=0;
                Fb.style.opacity=0;
                E.className="";
                H.className="";
                D.className="";
                ia||gc()
            });
            v(J,function(a){
                I.style.opacity=a
            },500);
            pa(J,200);
            v(J,function(a){
                hc(yb,55,ma(a,6,30));
                yb.style.opacity=a
            },200);
            pa(J,200);
            v(J,function(a){
                var b=
                a=a*2;
                hc(E,8,ma(b,12,0));
                E.style.opacity=b;
                b=a-0.5;
                hc(H,8,ma(b,12,0));
                H.style.opacity=b;
                a=a-1;
                hc(D,8,ma(a,12,0));
                D.style.opacity=a
            },500);
            v(J,function(a){
                Fb.style.opacity=a
            },500);
            v(J,function(){
                G=i
            });
            F=Wb(E,"hplogo_srd");
            v(F,function(){
                G=k;
                !Ub&&!Rb&&K();
                $b(2);
                dd();
                Oc=j;
                id(3)
            });
            v(F,function(a){
                I.style.opacity=1-a
            },200);
            v(F,function(){
                I.style.display="none"
            });
            E.onmousedown=function(){
                G&&!F.v&&F.play()
            };

            Nb=Wb(H,"hplogo_ssd");
            v(Nb,function(){
                google.nav.go(google.doodle.url)
            });
            H.onmousedown=function(){
                Nb.play()
            };
            Cb=Wb(D,"hplogo_sgd",i);
            D.onmousedown=function(){
                $b(4);
                Cb.play()
            };

            Bb=new wb(f,a,b,"",D);
            Ob=b;
            for(a=0;9>=a;a++)Z[a]=$(11,25*a,0,25,27);
            yc=$(11,250,0,25,27);
            R=$(13,0,0,67,69);
            S=$(12,0,0,27,26,3,0);
            R.opacity=0;
            S.opacity=0;
            hd(230);
            P=$(0,0,0,152,144);
            P.opacity=0;
            Q=$(14,0,0,152,144);
            Q.opacity=0;
            T=$(15,0,0,0,0);
            T.opacity=0;
            U=$(16,0,0,0,0);
            U.opacity=0;
            zc=new t;
            v(zc,function(a){
                hd(230-a*(230+R.getWidth()));
                S.A=-13*a
            },2E3);
            Dc=new t;
            v(Dc,function(){
                R.opacity=1;
                S.opacity=1;
                Cc.style.display="none";
                zc.play();
                id(2)
            });
            v(Dc,function(a){
                bd=270+-79*a
            },500);
            v(Dc,function(){
                id(3)
            });
            tc=new qa(wc,Zb("soccer/soccer12-hp-bg.png"));
            uc=$(4);
            vc=$(3);
            Bc=new t;
            v(Bc,function(){
                Cc.style.display=""
            });
            v(Bc,function(a){
                Cc.style.opacity=a
            },600);
            d=$(8,0,0,123,100,-5,-80);
            f=$(6,0,0,126,156,2,-145);
            a=$(5,0,0,113,112,5,-96);
            b=$(7,0,0,128,104,-2,-90);
            X=278;
            bd=270;
            dd();
            cd=k;
            Vc=d;
            Uc=ra(Vc,10,150);
            v(Uc,function(){
                X=X-5;
                Y=j
            });
            var d=Vc,g=new qa(d.T,d.g,d.X,d.Y,d.L,d.K,d.offsetX,d.offsetY);
            g.J=d.J;
            g.A=d.A;
            g.frame=d.frame;
            g.B=d.B;
            g.opacity=d.opacity;
            g.d=d.d;
            g.k=d.k;
            g.x=d.x;
            g.y=d.y;
            Xc=g;
            Xc.d=-1;
            Wc=ra(Xc,10,150);
            v(Wc,function(){
                X=X+5;
                Y=j
            });
            Tc=f;
            f=700/26;
            Sc=ra(Tc,18,18*f);
            for(d=6;13>=d;d++)Sc.C[d].duration=2*f;
            v(Sc,function(){
                cd=k;
                Y=j
            });
            Tc.frame=17;
            Zc=a;
            Yc=ra(Zc,20,1500);
            pa(Yc,600);
            v(Yc,md);
            ad=b;
            $c=ra(ad,20,1500);
            pa($c,600);
            v($c,md);
            W=Vc;
            a=$(10,0,0,47,44,-22,7);
            b=$(9,0,0,49,44,-22,4);
            Nc=Mc=Jc=260;
            Oc=j;
            Lc=a;
            Lc.y=40-Lc.getHeight();
            Kc=new t;
            v(Kc,function(a){
                V=Lc;
                Jc=ma(a,Mc,Nc);
                V.frame=na(Math.floor(Jc/3))
            },1E3);
            v(Kc,function(){
                Jc=Nc;
                V.frame=0
            });
            Pc=
            b;
            Pc.y=40-Pc.getHeight();
            Qc=ra(Pc,13,900);
            Qc.C.splice(9,0,{
                duration:0,
                M:function(){
                    var a=Oc,b=92+Math.random()*351,c=Math.random()>0.5;
                    a.state=1;
                    a.W=c;
                    a.V=7E-4;
                    a.moveTo(b,404,c?0.38:0.05)
                }
            });
            v(Qc,function(){
                V=Lc;
                V.frame=0;
                Rc()
            });
            V=Lc
        }
    },vd=function(){
        return document.activeElement!=C
    },wd=function(){
        var a=window.google;
        if(a){
            var b=a.msg,c=function(){
                var a=b&&b.unlisten;
                a&&(a(67,c),vd&&a(94,vd));
                Ub=ha=i;
                C&&(C.innerHTML="");
                G=k;
                return i
            };

            if(!a.doodle||!a.doodle.jesr)aa("google.doodle.jesr",i),a.rein&&
                a.dstr&&(a.rein.push(ud),a.dstr.push(c));
            var a=a.psy,e=b&&b.listen;
            a&&(a.q&&e)&&(e(67,c),vd&&e(94,vd))
        }
        ud()
    },xd=window.google;
    xd&&xd.x?xd.x({
        id:"DOODLE"
    },wd):wd();
})();
