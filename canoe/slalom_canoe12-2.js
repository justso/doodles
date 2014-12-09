(function(){
    var h=void 0,j=!0,k=null,l=!1,n,o=this,aa=function(a,b){
        var c=a.split("."),d=o;
        !(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);
        for(var e;c.length&&(e=c.shift());)!c.length&&b!==h?d[e]=b:d=d[e]?d[e]:d[e]={}
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
            var d=
            Array.prototype.slice.call(arguments,2);
            return function(){
                var c=Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c,d);
                return a.apply(b,c)
            }
        }
        return function(){
            return a.apply(b,arguments)
        }
    },p=function(a,b,c){
        p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;
        return p.apply(k,arguments)
    },ga=function(a,b){
        function c(){}
        c.prototype=b.prototype;
        a.ta=b.prototype;
        a.prototype=new c
    };
    Function.prototype.bind=Function.prototype.bind||function(a,b){
        if(1<arguments.length){
            var c=Array.prototype.slice.call(arguments,1);
            c.unshift(this,a);
            return p.apply(k,c)
        }
        return p(this,a)
    };

    var ha,ia=/Firefox[\s\/][0-3]\./.test(navigator.userAgent),ja=0<=navigator.userAgent.indexOf("MSIE"),ka={},ma=function(a){
        for(var b=la,c=0,d;d=b[c++];)if(a==d)return j;return l
    },q=function(a,b,c){
        a=document.createElement(a);
        b&&(a.id=b);
        c&&(a.className=c);
        return a
    },na=function(a,b,c,d,e,f){
        a.save();
        a.beginPath();
        a.translate(b,c);
        a.scale(d,e);
        a.arc(0.5,0.5,0.5,0,2*Math.PI,j);
        a.fillStyle=f;
        a.fill();
        a.restore()
    },oa=function(a,b){
        b=b||r();
        if(a in ka){
            var c=ka[a];
            return b-a>c?(ka[a]=b,j):c==b
        }
        ka[a]=b;
        return j
    },
    r=function(){
        return(new Date).getTime()
    },s=function(a,b,c){
        return b+Math.min(1,Math.max(0,a))*(c-b)
    },pa=function(a){
        return eval(a+String.fromCharCode(37)+2650)
    };

    var t=function(){
        this.S=this.Q=this.v=0;
        this.Y=[]
    };

    t.prototype.play=function(){
        ha||(this.stop(),this.Q=0,this.S=r(),this.v=window.setInterval(p(this.qa,this),16),this.qa())
    };

    var u=function(a,b,c){
        a.Y.push({
            duration:c||0,
            Z:b
        })
    };

    t.prototype.stop=function(){
        if(this.v){
            for(var a;a=this.Y[this.Q++];)a.Z(1);
            window.clearInterval(this.v);
            this.v=0
        }
    };

    var v=function(a,b){
        u(a,function(){},b)
    };
    t.prototype.qa=function(){
        var a=r();
        if(!ha)for(var b;b=this.Y[this.Q];this.Q++){
            var c=a-this.S;
            if(c<b.duration){
                b.Z(c/b.duration);
                return
            }
            b.Z(1);
            0<b.duration&&(this.S+=b.duration)
        }
        this.stop()
    };

    var x=function(a,b,c,d,e,f,g,i){
        this.reset=function(){
            this.B=this.frame=this.o=this.p=0;
            this.offsetX=g||0;
            this.offsetY=i||0;
            this.G=this.F=this.opacity=1;
            this.$=c||0;
            this.aa=d||0;
            this.y=this.x=0;
            this.V=a;
            this.s=a.getContext("2d");
            this.K=k;
            this.i=f;
            this.O=b;
            this.d=e
        };

        this.reset()
    },qa=function(a){
        var b=new x(a.V,a.O,a.$,a.aa,a.d,a.i,a.offsetX,a.offsetY);
        b.o=a.o;
        b.p=a.p;
        b.frame=a.frame;
        b.B=a.B;
        b.opacity=a.opacity;
        b.F=a.F;
        b.G=a.G;
        b.x=a.x;
        b.y=a.y;
        return b
    },ra=function(a,b,c){
        for(var d=new t,c=c/b,e=function(a,
            b){
            return function(){
                a.frame=b
            }
        },f=0;f<b;f++)u(d,e(a,f),c);
        return d
    };
    x.prototype.a=function(){
        if(this.opacity){
            var a=this.getWidth(),b=this.getHeight(),c=a/2,d=b/2,e=Math.abs(this.offsetX),f=Math.abs(this.offsetY);
            if(0<this.x+a+c+e&&0<this.y+b+d+f&&this.x-e<this.V.width&&this.y-f<this.V.height){
                this.s.save();
                this.s.globalAlpha=this.opacity;
                e=this.x+c;
                f=this.y+d;
                this.B&&(e+=this.B*(Math.random()-0.5),f+=this.B*(Math.random()-0.5));
                this.s.translate(e,f);
                e=this.p;
                this.o&&(e+=this.o*(Math.random()-0.5));
                e&&this.s.rotate(e);
                (1!=this.F||1!=this.G)&&this.s.scale(this.F,this.G);
                try{
                    this.s.drawImage(this.O,this.$+this.frame*a,this.aa,a,b,this.offsetX-c,this.offsetY-d,a,b)
                }catch(g){}
                this.s.restore()
            }
        }
    };

    var ta=function(a,b){
        var c,d=sa;
        c==h&&(c=d.opacity);
        d.K&&d.K.stop();
        d.K=new t;
        var e=d.K,f=c;
        c=p(function(a){
            this.opacity=s(a,f,b)
        },d);
        u(e,c,a);
        d.K.play()
    };

    x.prototype.getHeight=function(){
        this.i||(this.i=this.O.height);
        return this.i
    };

    x.prototype.getWidth=function(){
        this.d||(this.d=this.O.width);
        return this.d
    };

    var ua={},va={
        Ha:0,
        Ja:1,
        La:2,
        Ga:3,
        Ia:4,
        Ka:5,
        Fa:6
    };

    ua.U=k;
    var wa=[],xa={},ya=0,za=k,Aa=k,Ba=l,y=function(a,b){
        return a.buttons[b]&&0.5<a.buttons[b]
    },Ca=function(a,b,c){
        return"undefined"==typeof a.axes[b]?l:c?-0.75>a.axes[b]:0.75<a.axes[b]
    },Ea=function(a){
        ua.U=a.gamepad;
        Ba||(Ba=j,Da())
    },Fa=function(){
        delete ua.U;
        Ba=l
    },Da=function(){
        var a;
        if(ua.U)a=ua.U;
        else{
            var b=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads;
            a=b&&(b[3]||b[2]||b[1]||b[0])||k
        }
        if(a&&!(a.timestamp&&a.timestamp==ya)){
            ya=a.timestamp;
            b=[];
            b[0]=y(a,14)||Ca(a,
                0,j)||Ca(a,2,j);
            b[1]=y(a,15)||Ca(a,0,l)||Ca(a,2,l);
            b[2]=y(a,12)||Ca(a,1,j)||Ca(a,3,j);
            b[3]=y(a,13)||Ca(a,1,l)||Ca(a,3,l);
            b[4]=y(a,0)||y(a,4)||y(a,6)||y(a,8)||y(a,9)||y(a,10);
            b[5]=y(a,1)||y(a,5)||y(a,7)||y(a,11);
            b[6]=y(a,2)||y(a,3);
            if(wa.length)for(var c in va){
                a=va[c];
                var d=b[a];
                if("undefined"!=typeof d&&d!=wa[a]&&xa[a]){
                    Aa&&Aa();
                    var e=document.createEvent("Event");
                    e.initEvent(d?"keydown":"keyup",j,j);
                    e.keyCode=xa[a];
                    za.dispatchEvent(e)
                }
            }
            wa=b
        }
        Ba&&(window.requestAnimationFrame?window.requestAnimationFrame(Da):
            window.oRequestAnimationFrame?window.oRequestAnimationFrame(Da):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(Da):window.msRequestAnimationFrame?window.msRequestAnimationFrame(Da):window.webkitRequestAnimationFrame&&window.webkitRequestAnimationFrame(Da))
    };

    var Ga=function(a){
        Error.captureStackTrace?Error.captureStackTrace(this,Ga):this.stack=Error().stack||"";
        a&&(this.message=String(a))
    };

    ga(Ga,Error);
    var Ha=function(a,b){
        for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);
        return a
    };

    var Ia=function(a,b){
        b.unshift(a);
        Ga.call(this,Ha.apply(k,b));
        b.shift()
    };

    ga(Ia,Ga);
    var Ja=function(a,b,c){
        if(!a){
            var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";
            if(b)var e=e+(": "+b),f=d;
            throw new Ia(""+e,f||[]);
        }
    };

    var Ka=Array.prototype,La=Ka.indexOf?function(a,b,c){
        Ja(a.length!=k);
        return Ka.indexOf.call(a,b,c)
    }:function(a,b,c){
        c=c==k?0:0>c?Math.max(0,a.length+c):c;
        if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,c);
        for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
    };

    var Ma=function(){};

    var Na,Oa,Pa,Qa,Ra=function(){
        return o.navigator?o.navigator.userAgent:k
    };

    Qa=Pa=Oa=Na=l;
    var Sa;
    if(Sa=Ra()){
        var Ta=o.navigator;
        Na=0==Sa.indexOf("Opera");
        Oa=!Na&&-1!=Sa.indexOf("MSIE");
        Pa=!Na&&-1!=Sa.indexOf("WebKit");
        Qa=!Na&&!Pa&&"Gecko"==Ta.product
    }
    var Ua=Na,Va=Oa,Wa=Qa,Xa=Pa,Ya;
        a:{
            var Za="",$a;
            if(Ua&&o.opera)var ab=o.opera.version,Za="function"==typeof ab?ab():ab;
            else if(Wa?$a=/rv\:([^\);]+)(\)|;)/:Va?$a=/MSIE\s+([^\);]+)(\)|;)/:Xa&&($a=/WebKit\/(\S+)/),$a)var bb=$a.exec(Ra()),Za=bb?bb[1]:"";
            if(Va){
                var cb,db=o.document;
                cb=db?db.documentMode:h;
                if(cb>parseFloat(Za)){
                    Ya=String(cb);
                    break a
                }
            }
            Ya=Za
        }
    var eb=Ya,fb={},gb=function(a){
        var b;
        if(!(b=fb[a])){
            b=0;
            for(var c=String(eb).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){
                var g=c[f]||"",i=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),z=RegExp("(\\d*)(\\D*)","g");
                do{
                    var B=m.exec(g)||["","",""],w=z.exec(i)||["","",""];
                    if(0==B[0].length&&0==w[0].length)break;
                    b=((0==B[1].length?0:parseInt(B[1],10))<(0==w[1].length?0:parseInt(w[1],10))?-1:(0==B[1].length?
                        0:parseInt(B[1],10))>(0==w[1].length?0:parseInt(w[1],10))?1:0)||((0==B[2].length)<(0==w[2].length)?-1:(0==B[2].length)>(0==w[2].length)?1:0)||(B[2]<w[2]?-1:B[2]>w[2]?1:0)
                }while(0==b)
            }
            b=fb[a]=0<=b
        }
        return b
    },hb={},jb=function(){
        return hb[9]||(hb[9]=Va&&!!document.documentMode&&9<=document.documentMode)
    };

    var kb=function(a){
        kb[" "](a);
        return a
    };

    kb[" "]=function(){};
    !Va||jb();
    var lb=!Va||jb(),mb=Va&&!gb("8");
    !Xa||gb("528");
    Wa&&gb("1.9b")||Va&&gb("8")||Ua&&gb("9.5")||Xa&&gb("528");
    Wa&&!gb("8")||Va&&gb("9");
    var nb=function(a,b){
        this.type=a;
        this.currentTarget=this.target=b
    };

    nb.prototype.T=l;
    nb.prototype.defaultPrevented=l;
    nb.prototype.stopPropagation=function(){
        this.T=j
    };

    nb.prototype.preventDefault=function(){
        this.defaultPrevented=j
    };

    var ob=function(a,b){
        a&&this.init(a,b)
    };

    ga(ob,nb);
    n=ob.prototype;
    n.target=k;
    n.relatedTarget=k;
    n.offsetX=0;
    n.offsetY=0;
    n.clientX=0;
    n.clientY=0;
    n.screenX=0;
    n.screenY=0;
    n.button=0;
    n.keyCode=0;
    n.charCode=0;
    n.ctrlKey=l;
    n.altKey=l;
    n.shiftKey=l;
    n.metaKey=l;
    n.M=k;
    n.init=function(a,b){
        var c=this.type=a.type;
        nb.call(this,c);
        this.target=a.target||a.srcElement;
        this.currentTarget=b;
        var d=a.relatedTarget;
        if(d){
            if(Wa){
                var e;
                    a:{
                        try{
                            kb(d.nodeName);
                            e=j;
                            break a
                        }catch(f){}
                        e=l
                    }
                e||(d=k)
            }
        }else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);
        this.relatedTarget=d;
        this.offsetX=Xa||a.offsetX!==h?a.offsetX:a.layerX;
        this.offsetY=Xa||a.offsetY!==h?a.offsetY:a.layerY;
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
        this.M=a;
        a.defaultPrevented&&this.preventDefault();
        delete this.T
    };

    n.stopPropagation=function(){
        ob.ta.stopPropagation.call(this);
        this.M.stopPropagation?this.M.stopPropagation():this.M.cancelBubble=j
    };
    n.preventDefault=function(){
        ob.ta.preventDefault.call(this);
        var a=this.M;
        if(a.preventDefault)a.preventDefault();
        else if(a.returnValue=l,mb)try{
            if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1
        }catch(b){}
    };

    var pb=function(){},qb=0;
    n=pb.prototype;
    n.key=0;
    n.I=l;
    n.la=l;
    n.init=function(a,b,c,d,e,f){
        if("function"==ba(a))this.ma=j;
        else if(a&&a.handleEvent&&"function"==ba(a.handleEvent))this.ma=l;else throw Error("Invalid listener argument");
        this.P=a;
        this.ea=b;
        this.src=c;
        this.type=d;
        this.capture=!!e;
        this.ha=f;
        this.la=l;
        this.key=++qb;
        this.I=l
    };

    n.handleEvent=function(a){
        return this.ma?this.P.call(this.ha||this.src,a):this.P.handleEvent.call(this.P,a)
    };

    var rb={},A={},sb={},tb={},ub=function(a,b,c,d,e){
        if(b){
            if("array"==ba(b)){
                for(var f=0;f<b.length;f++)ub(a,b[f],c,d,e);
                return k
            }
            var d=!!d,g=A;
            b in g||(g[b]={
                w:0,
                D:0
            });
            g=g[b];
            d in g||(g[d]={
                w:0,
                D:0
            },g.w++);
            var g=g[d],i=a[ca]||(a[ca]=++da),m;
            g.D++;
            if(g[i]){
                m=g[i];
                for(f=0;f<m.length;f++)if(g=m[f],g.P==c&&g.ha==e){
                    if(g.I)break;
                    return m[f].key
                }
            }else m=g[i]=[],g.w++;
            var z=vb,B=lb?function(a){
                return z.call(B.src,B.key,a)
            }:function(a){
                a=z.call(B.src,B.key,a);
                if(!a)return a
            },f=B;
            f.src=a;
            g=new pb;
            g.init(c,
                f,a,b,d,e);
            c=g.key;
            f.key=c;
            m.push(g);
            rb[c]=g;
            sb[i]||(sb[i]=[]);
            sb[i].push(g);
            a.addEventListener?(a==o||!a.va)&&a.addEventListener(b,f,d):a.attachEvent(b in tb?tb[b]:tb[b]="on"+b,f);
            return c
        }
        throw Error("Invalid event type");
    },wb=function(a,b,c,d){
        if(!d.R&&d.ia){
            for(var e=0,f=0;e<d.length;e++)d[e].I?d[e].ea.src=k:(e!=f&&(d[f]=d[e]),f++);
            d.length=f;
            d.ia=l;
            0==f&&(delete A[a][b][c],A[a][b].w--,0==A[a][b].w&&(delete A[a][b],A[a].w--),0==A[a].w&&delete A[a])
        }
    },yb=function(a,b,c,d,e){
        var f=1,b=b[ca]||(b[ca]=
            ++da);
        if(a[b]){
            a.D--;
            a=a[b];
            a.R?a.R++:a.R=1;
            try{
                for(var g=a.length,i=0;i<g;i++){
                    var m=a[i];
                    m&&!m.I&&(f&=xb(m,e)!==l)
                }
            }finally{
                a.R--,wb(c,d,b,a)
            }
        }
        return Boolean(f)
    },xb=function(a,b){
        if(a.la){
            var c=a.key;
            if(rb[c]){
                var d=rb[c];
                if(!d.I){
                    var e=d.src,f=d.type,g=d.ea,i=d.capture;
                    e.removeEventListener?(e==o||!e.va)&&e.removeEventListener(f,g,i):e.detachEvent&&e.detachEvent(f in tb?tb[f]:tb[f]="on"+f,g);
                    e=e[ca]||(e[ca]=++da);
                    if(sb[e]){
                        var g=sb[e],m=La(g,d);
                        0<=m&&(Ja(g.length!=k),Ka.splice.call(g,m,1));
                        0==
                        g.length&&delete sb[e]
                    }
                    d.I=j;
                    if(d=A[f][i][e])d.ia=j,wb(f,i,e,d);
                    delete rb[c]
                }
            }
        }
        return a.handleEvent(b)
    },vb=function(a,b){
        if(!rb[a])return j;
        var c=rb[a],d=c.type,e=A;
        if(!(d in e))return j;
        var e=e[d],f,g;
        if(!lb){
            var i;
            if(!(i=b))a:{
                i=["window","event"];
                for(var m=o;f=i.shift();)if(m[f]!=k)m=m[f];
                    else{
                        i=k;
                        break a
                    }
                i=m
            }
            f=i;
            i=j in e;
            m=l in e;
            if(i){
                if(0>f.keyCode||f.returnValue!=h)return j;
                    a:{
                        var z=l;
                        if(0==f.keyCode)try{
                            f.keyCode=-1;
                            break a
                        }catch(B){
                            z=j
                        }
                        if(z||f.returnValue==h)f.returnValue=j
                    }
            }
            z=new ob;
            z.init(f,
                this);
            f=j;
            try{
                if(i){
                    for(var w=[],ib=z.currentTarget;ib;ib=ib.parentNode)w.push(ib);
                    g=e[j];
                    g.D=g.w;
                    for(var W=w.length-1;!z.T&&0<=W&&g.D;W--)z.currentTarget=w[W],f&=yb(g,w[W],d,j,z);
                    if(m){
                        g=e[l];
                        g.D=g.w;
                        for(W=0;!z.T&&W<w.length&&g.D;W++)z.currentTarget=w[W],f&=yb(g,w[W],d,l,z)
                    }
                }else f=xb(c,z)
            }finally{
                w&&(w.length=0)
            }
            return f
        }
        d=new ob(b,this);
        return f=xb(c,d)
    };

    var zb=function(a){
        this.Ba=a;
        this.Ca=[]
    };

    ga(zb,Ma);
    var Ab=[];
    zb.prototype.listen=function(a,b,c,d,e){
        "array"!=ba(b)&&(Ab[0]=b,b=Ab);
        for(var f=0;f<b.length;f++){
            var g=ub(a,b[f],c||this,d||l,e||this.Ba||this);
            this.Ca.push(g)
        }
        return this
    };

    zb.prototype.handleEvent=function(){
        throw Error("EventHandler.handleEvent not implemented");
    };

    var Bb=function(a,b,c,d,e){
        zb.call(this);
        this.xa=a;
        this.wa=b;
        this.pa=c;
        this.oa=d;
        this.ya=e;
        this.listen(this.ya,"click",this.za)
    };

    ga(Bb,zb);
    Bb.prototype.za=function(){
        window.gapi&&window.gbar&&window.gbar.asmc?window.gapi.load("share",p(this.ra,this)):window.open("about:blank").location="https://plus.google.com"
    };
    Bb.prototype.ra=function(){
        if(window.gapi&&window.gapi.share){
            var a={
                items:[{
                    type:"http://schema.org/WebPage",
                    id:location.protocol+"//"+location.host,
                    properties:{
                        description:[this.pa],
                        url:[this.xa],
                        name:[this.wa],
                        image:[this.oa]
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
                    aa("google.doodle.sf",j);
                    this.ra()
                },this)
            })
        }
    };

    var Cb,Db,C,Eb,Fb,Gb,D,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Wb,E,Xb,F,la=[32,13],Yb=[],Zb=0,$b=l,ac=0,bc=[],cc=j,dc=function(){
        var a=q("canvas",h);
        if(a){
            a.style.position="absolute";
            a.height=207;
            a.width=530;
            C.appendChild(a);
            var b=a.getContext("2d");
            b&&b.fillRect(0,0,1,1)
        }
        return a
    },fc=function(a,b,c){
        for(var d=new t,e=0;2>=e;e++)u(d,ec(a,b+e)),v(d,16);
        if(c){
            v(d,64);
            for(e=2;0<=e;e--)u(d,ec(a,b+e)),v(d,16);
            u(d,ec(a,a.className))
        }
        return d
    },ic=function(a){
        var b=q("img");
        b.src=""+a;
        Mb&&
        (!b.complete&&"complete"!=b.readyState?(b.onload=gc,Zb++):Nb||(Nb=window.setTimeout(hc,10)));
        return b
    },G=function(){
        var a=r(),b=a-Ib;
        $b?(Yb.push(b),30<Yb.length&&Yb.shift()):Yb=[];
        b=Math.min(40,b);
        Ub||Jb&&18E4<a-Jb?$b=l:!cc&&Eb(a,b)?(window.requestAnimationFrame?window.requestAnimationFrame(G,C):window.oRequestAnimationFrame?window.oRequestAnimationFrame(G):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(G):window.msRequestAnimationFrame?window.msRequestAnimationFrame(G):window.webkitRequestAnimationFrame?
            window.webkitRequestAnimationFrame(G,C):window.setTimeout(G,16),Ib=a,$b=j):$b=l
    },jc=function(a,b,c){
        window.google&&window.google.log&&window.google.log("doodle-slalom-canoe","p:"+a+",s:"+("undefined"!=typeof b?b:"_")+",nc:"+("undefined"!=typeof c?c:"_")+",d:"+ac+",")
    },kc=function(a,b){
        return a-b
    },ec=function(a,b){
        return function(){
            a.className=b
        }
    },lc=function(){
        Jb=r();
        !cc&&(!$b&&!Ub)&&G()
    },mc=function(a){
        lc();
        (37==a.keyCode||39==a.keyCode||38==a.keyCode||40==a.keyCode||ma(a.keyCode))&&a.preventDefault();
        Ub&&(ma(a.keyCode)&&!Tb.v)&&Tb.play();
        Lb&&Lb(a)
    },nc=function(a){
        ma(a.keyCode)&&a.preventDefault()
    },gc=function(){
        --Zb||Mb()
    },hc=function(){
        Zb||Mb();
        Nb=k
    },oc=function(a){
        Ob=j;
        lc();
        document.activeElement==C&&!Ub&&a.preventDefault();
        Pb&&Pb(a)
    },pc=function(a){
        Ob&&Qb&&(Ob=l,Qb(a))
    },qc=function(a){
        lc();
        Rb&&Rb(a)
    },rc=function(){
        window.getSelection().selectAllChildren(Kb)
    },sc=function(a,b,c){
        a.style.margin=c+"px 0 0 "+b+"px"
    };

    var tc={
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
    },uc=function(a){
        return google.kHL in tc&&tc[google.kHL][a]||tc.ALL[a]
    };

    var H,vc,wc,I,J,K,xc,L,yc,zc,Ac,Bc,Cc,Dc,M,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc,N,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,O,Wc,Xc,Yc,Zc,$c,ad,bd,cd,dd,ed,fd,gd,hd,P,id,jd,kd,Q,ld,md,sa,R,S,T,U,nd,od,pd,qd=function(a,b,c,d,e,f){
        this.s=a;
        this.N=l;
        this.d=Math.floor(b);
        this.i=Math.floor(c);
        this.A=a.createImageData(this.d,this.i);
        this.X=e;
        this.W=f;
        this.ua=d;
        this.clear()
    };

    n=qd.prototype;
    n.clear=function(){
        this.L=0;
        this.g=[];
        this.C=[];
        for(var a=0;a<this.i+2;a++){
            this.g[a]=[];
            this.C[a]=[];
            for(var b=0;b<this.d+2;b++)this.g[a][b]=0,this.C[a][b]=0
        }
    };

    n.disable=function(){
        this.N=j;
        this.clear=this.disable=this.step=this.a=this.k=this.J=this.ba=function(){}
    };

    n.step=function(){
        for(var a=this.g,b=this.C,c=this.ua,d=this.i,e=this.d,f=1;f<=d;f++)for(var g=b[f],i=1;i<=e;i++)g[i]=((a[f][i-1]+a[f][i+1]+a[f-1][i]+a[f+1][i])/2-b[f][i])*c;
        this.g=b;
        this.C=a
    };
    n.a=function(a,b){
        for(var c=1;c<=this.i;c++)for(var d=1;d<=this.d;d++){
            var e=(this.g[c+1][d+1]-this.g[c-1][d-1])/2+this.g[c+1][d]+this.g[c][d+1]-this.g[c][d-1]-this.g[c-1][d],f=4*((c-1)*this.d+d-1),g=0;
            0<e?(g=Math.min(1,e),this.A.data[f]=this.X[0],this.A.data[f+1]=this.X[1],this.A.data[f+2]=this.X[2]):0>e&&(g=Math.min(1,-e),this.A.data[f]=this.W[0],this.A.data[f+1]=this.W[1],this.A.data[f+2]=this.W[2]);
            this.A.data[f+3]=255*g
        }
        this.s.putImageData(this.A,a,b)
    };
    n.k=function(a,b,c){
        0<=a&&(a<this.d&&0<b&&b<this.i)&&(this.g[Math.floor(b)+1][Math.floor(a)+1]=c)
    };

    n.J=function(a,b,c,d,e){
        for(var a=Math.max(0,Math.min(this.d-1,a)),b=Math.max(0,Math.min(this.i-1,b)),c=Math.max(0,Math.min(this.d-1,c)),d=Math.max(0,Math.min(this.i-1,d)),f=c-a,g=d-b,f=Math.sqrt(f*f+g*g),g=0;g<f;g++){
            var i=g/f;
            this.g[Math.floor(b+(d-b)*i+1)][Math.floor(a+(c-a)*i+1)]=e
        }
    };
    n.ba=function(a){
        this.L-=a;
        a=Math.ceil(this.L);
        if(0>a){
            this.L-=a;
            for(var b=this.d+Math.min(0,a),c=1;c<=this.i;c++){
                for(var d=1;d<=b;d++)this.g[c][d]=this.g[c][d-a],this.C[c][d]=this.C[c][d-a];
                for(d=b+1;d<=this.d;d++)this.C[c][d]=this.g[c][d]=0
            }
        }
    };

    var rd={
        ALL:["Score","Slalom Canoe","I slalom canoed! #GoogleDoodle"],
        af:["Hoogste telling","Witwater-kano","Ek het witwater-kano gery #GoogleDoodle"],
        "am_ET(Amharic/ALL)":["\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275","\u12e8\u1263\u1205\u122d \u120b\u12ed \u1240\u12d8\u134b","\u12e8\u1263\u1205\u122d \u120b\u12ed \u1240\u12d8\u134b  \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle"],
        ar:["\u0627\u0644\u0646\u062a\u064a\u062c\u0629","\u0627\u0644\u062a\u062c\u062f\u064a\u0641","\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0627\u0644\u062a\u062c\u062f\u064a\u0641 GoogleDoodle#"],
        az:["\u018fn y\u00fcks\u0259k bal","Avar\u00e7\u0259km\u0259","M\u0259n avar\u00e7\u0259km\u0259d\u0259 i\u015ftirak etdim! #GoogleDoodle"],
        be:["\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a","\u0412\u0435\u0441\u043b\u0430\u0432\u0430\u043d\u043d\u0435","\u042f \u045e\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u0447\u0430\u045e \u0443 \u0441\u043f\u0430\u0431\u043e\u0440\u043d\u0456\u0446\u0442\u0432\u0430\u0445 \u043f\u0430 \u0432\u0435\u0441\u043b\u0430\u0432\u0430\u043d\u043d\u0456 #GoogleDoodle"],
        bg:["\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c","\u0418\u0433\u0440\u0430\u0445 \u043a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"],
        bn:["\u09b8\u09cd\u0995\u09cb\u09b0","\u09b8\u09cd\u09b2\u09be\u09b2\u09cb\u09ae \u0995\u09cd\u09af\u09be\u09a8\u09cb","\u0986\u09ae\u09bf \u09b8\u09cd\u09b2\u09be\u09b2\u09cb\u09ae \u0995\u09cd\u09af\u09be\u09a8\u09cb \u09ac\u09c7\u09df\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2"],
        bs:["Rezultat","Kanu slalom","Igrao sam kanu slalom #GoogleDoodle"],
        ca:["R\u00e8cord","Pirag\u00fcisme d'esl\u00e0lom","He fet pirag\u00fcisme d'esl\u00e0lom #GoogleDoodle"],
        cs:["Nejvy\u0161\u0161\u00ed sk\u00f3re","Vodn\u00ed slalom","Tr\u00e9nujte vodn\u00ed slalom #GoogleDoodle"],
        da:["Top score","Kano slalom","Jeg slalomede min kano #GoogleDoodle"],
        de:["Rekord","Kanuslalom","Ich bin Kanuslalom gefahren #GoogleDoodle"],
        el:["\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2",
        "\u039a\u03b1\u03bd\u03cc","\u0388\u03ba\u03b1\u03bd\u03b1 \u03ba\u03b1\u03bd\u03cc #GoogleDoodle"],
        en_us:["Score","Slalom Canoe","I slalom canoed! #GoogleDoodle"],
        "en-GB":["Score","Slalom Canoe","I slalom canoed! #GoogleDoodle"],
        es:["R\u00e9cord","Pirag\u00fcismo en eslalon","He hecho pirag\u00fcismo en eslalon #GoogleDoodle"],
        "es-419":["Resultado","Canotaje en slalom","Particip\u00e9 en canotaje en slalom #GoogleDoodle"],
        et:["Rekordtulemus","S\u00fcsta- ja kanuuslaalom","S\u00f5itsin s\u00fcsta- ja kanuuslaalomit #GoogleDoodle"],
        eu:["Emaitza","Piraguismoa","Piraguismoa egin dut #GoogleDoodle"],
        fi:["K\u00e4rkitulos","Koskipujottelu","Koskipujottelin #GoogleDoodle"],
        fr:["R\u00e9sultat","Cano\u00eb slalom","J'ai fait du slalom en cano\u00eb #GoogleDoodle"],
        ga:["Sc\u00f3r is fearr","Slalom Curach","D'imir m\u00e9 cluiche slal\u00f3m curach #GoogleDoodle"],
        gl:["Record","Pirag\u00fcismo","Fixen pirag\u00fcismo #GoogleDoodle"],
        hr:["Rezultat","Kanu slalom","Igrao sam kanu slalom #GoogleDoodle"],
        is:["Flest stig","Kan\u00f3svig","\u00c9g f\u00f3r \u00ed kan\u00f3svig #GoogleDoodle"],
        it:["Miglior punteggio","Canoa slalom","Ho giocato a canoa slalom #GoogleDoodle"],
        iw:["\u05e0\u05d9\u05e7\u05d5\u05d3","\u05e1\u05dc\u05d0\u05dc\u05d5\u05dd \u05e7\u05d0\u05e0\u05d5","\u05e2\u05e9\u05d9\u05ea\u05d9 \u05e1\u05dc\u05d0\u05dc\u05d5\u05dd \u05e7\u05d0\u05e0\u05d5  #GoogleDoodle"],
        hu:["Legjobb eredm\u00e9ny","Szlalom kenu","Szlalom kenuztam #GoogleDoodle"],
        ja:["\u30b9\u30b3\u30a2","\u30ab\u30cc\u30fc \u30b9\u30e9\u30ed\u30fc\u30e0","\u300c\u30ab\u30cc\u30fc \u30b9\u30e9\u30ed\u30fc\u30e0\u300d\u3092\u3084\u3063\u305f! #GoogleDoodle"],
        ko:["\uae30\ub85d","\uce74\ub204","\uce74\ub204\ub97c \ud588\uc5b4\uc694! #GoogleDoodle "],
        lt:["Rezultatas","Irklavimas","A\u0161 dalyvavau Google irklavimo rungtyje!"],
        lv:["Lab\u0101kais rezult\u0101ts","Air\u0113\u0161ana","Es air\u0113ju kanoe #GoogleDoodle"],
        mk:["\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c ","\u0412\u043e\u0437\u0435\u0432 \u043a\u0430\u043d\u0443 #GoogleDoodle"],
        mo:["Scor de top",
        "Canoe Slalom","Am concurat la canoe slalom #GoogleDoodle"],
        mr:["\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923","\u0938\u094d\u0932\u093e\u0932\u094b\u092e \u0915\u0928\u0942\u0907\u0902\u0917","\u092e\u0940 \u0938\u094d\u0932\u093e\u0932\u094b\u092e \u0915\u0928\u0942\u0907\u0902\u0917 \u0915\u0947\u0932\u0947 #GoogleDoodle"],
        ms_my:["Skor tertinggi","Kanu Slalom","Saya bermain kanu slalom #GoogleDoodle"],
        nl:["Topscore","Kano slalom","Ik heb met een kano geslalomd #GoogleDoodle"],
        no:["Resultat","Slalomkajakk","Jeg padlet slalomkajakk!  #GoogleDoodle"],
        pl:["Najlepszy wynik","Kajakarstwo g\u00f3rskie","\u0106wicz\u0119 kajakarstwo g\u00f3rskie #GoogleDoodle"],
        "pt-BR":["Pontua\u00e7\u00e3o","Canoagem Slalom","Eu fiz Canoagem Slalom #GoogleDoodle"],
        "pt-PT":["Pontua\u00e7\u00e3o","Canoagem Slalom","Eu fiz Canoagem Slalom #GoogleDoodle"],
        ro:["Scor de top","Canoe Slalom","Am concurat la canoe slalom #GoogleDoodle"],
        ru:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0413\u0440\u0435\u0431\u043d\u043e\u0439 \u0441\u043b\u0430\u043b\u043e\u043c",
        "\u0413\u0440\u0435\u0431\u043b\u044f #GoogleDoodle"],
        sk:["Najlep\u0161ie sk\u00f3re","Vodn\u00fd slalom","Potr\u00e9nujte vodn\u00fd slalom #GoogleDoodle"],
        sl:["Najbolj\u0161i rezultat","Kanu slalom","Vozil sem kanu slalom #GoogleDoodle"],
        sr:["\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c","\u0418\u0433\u0440\u0430\u043c \u043a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"],
        sv:["Resultat","Kajak","Jag paddlade kajak #GoogleDoodle"],
        sw:["Alama za Juu","Mbio za Mtumbwi","Nilishiriki Mbio za Mtumbwi #GoogleDoodle"],
        th_All:["\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14","\u0e41\u0e04\u0e19\u0e39\u0e2a\u0e25\u0e32\u0e25\u0e21","\u0e09\u0e31\u0e19\u0e1e\u0e32\u0e22\u0e40\u0e23\u0e37\u0e2d\u0e41\u0e04\u0e19\u0e39\u0e2a\u0e25\u0e32\u0e25\u0e21\u0e1a\u0e19 Google Doodle!"],
        tr:["En y\u00fcksek puan","Kano Slalom","Kano slalom yapt\u0131m! #GoogleDoodle"],
        uk:["\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0413\u0440\u0435\u0431\u043d\u0438\u0439 \u0441\u043b\u0430\u043b\u043e\u043c","\u0413\u0440\u0435\u0431\u043d\u0438\u0439 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"],
        "zh-CN":["\u6700\u9ad8\u5f97\u5206","\u6fc0\u6d41\u56de\u65cb\u76ae\u5212\u8247","#Google\u6d82\u9e26#\u6211\u73a9\u4e86\u6fc0\u6d41\u56de\u65cb\u76ae\u5212\u8247"],
        "zh-TW_HK":["\u6700\u9ad8\u5f97\u5206","\u6fc0\u6d41\u8f15\u8247",
        "\u6211\u5212\u4e86\u6fc0\u6d41\u8f15\u8247\uff01 #GoogleDoodle"],
        "zh-TW_tw":["\u6700\u9ad8\u5f97\u5206","\u6fc0\u6d41\u8f15\u8247","\u6211\u5212\u4e86\u6fc0\u6d41\u8f15\u8247\uff01 #GoogleDoodle"]
    },sd=function(a){
        return google.kHL in rd&&rd[google.kHL][a]||rd.ALL[a]
    };

    var V=[88,-8,80,17],td=Math.PI/4,X=[{
        x:0,
        top:29,
        bottom:184
    },{
        x:127,
        top:42,
        bottom:192
    },{
        x:328,
        top:24,
        bottom:192
    },{
        x:500,
        top:27,
        bottom:182
    },{
        x:628,
        top:41,
        bottom:189
    },{
        x:628,
        top:41,
        bottom:189
    },{
        x:720,
        top:71,
        bottom:207
    },{
        x:835,
        top:61,
        bottom:207
    },{
        x:912,
        top:44,
        bottom:207
    },{
        x:978,
        top:29,
        bottom:188
    },{
        x:1088,
        top:30,
        bottom:183
    },{
        x:1162,
        top:15,
        bottom:181
    },{
        x:1200,
        top:0,
        bottom:170
    },{
        x:1250,
        top:0,
        bottom:160
    },{
        x:1327,
        top:0,
        bottom:170
    },{
        x:1400,
        top:26,
        bottom:188
    },{
        x:1512,
        top:22,
        bottom:178
    },{
        x:1663,
        top:26,
        bottom:181
    },
    {
        x:1738,
        top:0,
        bottom:172
    },{
        x:1805,
        top:0,
        bottom:152
    },{
        x:1915,
        top:0,
        bottom:160
    },{
        x:1983,
        top:0,
        bottom:162
    },{
        x:2093,
        top:30,
        bottom:182
    },{
        x:2227,
        top:47,
        bottom:187
    },{
        x:2312,
        top:71,
        bottom:207
    },{
        x:2422,
        top:61,
        bottom:207
    },{
        x:2484,
        top:43,
        bottom:207
    },{
        x:2553,
        top:32,
        bottom:188
    },{
        x:2579,
        top:23,
        bottom:189
    },{
        x:2649,
        top:29,
        bottom:184
    }],ud=[[28,11],[27,16],[34,14],[33,32],[47,26],[43,35],[30,24]],vd=[],Y=[],Z=0,wd=0,xd=!(!window.localStorage||!window.localStorage.getItem("doodle-kayak-tooltip")),zd=function(){
        var a=
        yd(L+V[0]+V[2]/2),b=a.top-V[1],c=a.bottom-V[1]-V[3];
        return T<=b?(T=b,a.Da):T>=c?(T=c,a.Aa):k
    },Ad=function(a,b){
        var c=a.x-L;
        if(-30<c&&600>c){
            var d=[];
            if(!b)if(1==a.type)a.H?d.push(Y[3]):(Y[0].opacity=Math.max(0,(75-Math.abs(c-500))/75),Y[1].opacity=Math.max(0,(75-Math.abs(c-425))/75),Y[2].opacity=Math.min(1,Math.max(0,(c-400)/-100)),d.push(Y[0]),d.push(Y[1]),d.push(Y[2]));
                else if(2==a.type){
                    d.push(bd[a.ka]);
                    var e=ad[a.ka];
                    e&&d.push(e)
                }
            if(0==a.type&&(T>a.y!=b&&(Mc.frame=a.H?1:0,d.push(Lc),d.push(Mc)),
                T>a.y+a.z[1]!=b))Xc.frame=a.H?1:0,d.push(Wc),d.push(Xc);
            for(var e=0,f;f=d[e++];)f.x=c,f.y=a.y,f.a()
        }
    },Fd=function(a,b){
        if(1==Q&&!Nc.v&&!vc.v&&!oa(128,a))return j;
        var c;
        if(c=!O.N)30==Yb.length?(c=Yb.slice(0).sort(kc),c=40<c[Math.floor(c.length/2)]):c=l;
        c&&O.disable();
        if(2==Q&&xd&&!sa.opacity&&5E3<a-Uc)md||jc(3),Bd();
        else if(4==Q||3==Q){
            if(4==Q&&(c=a-Sc,R+=Qc*b,Qc*=Math.max(0,1-0.003*b),Rc?Cd(Pc,0.001*b):50<c&&(H+=0.0015*Z*b,c=Math.min(1,Math.max(0,(L-7950)/-200))*td,H=Math.min(c,H),H=Math.max(-c,H)),
                Gc&&50<=a-Gc))$(3),Gc=k;
            Cd(0,2.5E-4*b);
            c=zd();
            c!=k&&Cd(c,0.001*b);
            var d;
                a:{
                    d=0;
                    for(var e;e=vd[d++];){
                        var f=e.x-L-V[0];
                        if(f<V[2]&&0<f+e.z[0]&&e.y<T+V[3]/2&&e.y+e.z[1]>T-V[3]/2){
                            d=e;
                            break a
                        }
                    }
                    d=k
                }
            d&&(0==d.type?(d.H||(R=0.05+1.4*R,Bc.play(),Dc.play(),d.H=j),d=k):d.H=j);
            if(c||d)xc=Math.min(3E3,xc+b),R*=Math.max(0,1-0.003*b),Ac=3;
            5E3<a-Sc?(md||jc(3),Bd()):Dd();
            c=R*b*Math.cos(H);
            d=1-b*(0.0015+3E-7*xc);
            L+=c;
            T+=R*b*Math.sin(H);
            R=Math.max(0.1,R*d);
            Ac*=Math.max(0,1-0.015*b);
            if(!O.N&&(O.ba(c),4==Q&&(e=32*Z,d=
                S-Math.sin(H)*e+70,e=T+Math.cos(H)*e,Ed(L+d,e)?Hc&&Ic?O.J(Hc-c,Ic,d,e,1.5):O.k(d,e,1.5):d=e=k,Hc=d,Ic=e),e=V[2]/2,d=V[0]+e+Math.cos(H)*e,e=T+Math.sin(H)*e,Ed(L+d,e)?Jc&&Kc?O.J(Jc-c,Kc,d,e,1.5):O.k(d,e,1.5):d=e=k,Jc=d,Kc=e,oa(200,a)))for(c=0;d=vd[c++];)0==d.type?(O.k(d.x+d.z[0]-L+18,d.y-10,5),O.k(d.x+d.z[0]-L+18,d.y+d.z[1]+10,5)):O.k(d.x+d.z[0]/2-L,d.y+d.z[1]/2,5);
            Z!=wd&&(0!=wd?-1==wd?(P=nd,gd.play()):(P=pd,ed.play()):(-1==Z?(P=U,hd.play()):(P=od,fd.play()),wd=Z));
            7950<=L&&$(5)
        }
        if((1!=Q||vc.v)&&oa(64,
            a))if(O.step(),0<L){
            c=pa(L);
            for(d=0;d<X.length-1;d++){
                e=X[d];
                var f=X[d+1],g=e.x-c,i=f.x-c;
                0>i&&(g+=2650,i+=2650);
                i>g&&(530>g&&0<i)&&(O.J(g,e.top,i,f.top,0),O.J(g,e.bottom,i,f.bottom,0))
            }
        }
        c=pa(L);
        Yc.x=-c;
        Yc.a();
        Yc.x=2650-c;
        Yc.a();
        $c.x=-L;
        $c.a();
        Zc.x=7950-L;
        Zc.a();
        O.N?(c=J,c.getContext("2d").clearRect(0,0,c.width,c.height)):O.a(0,0);
        if(1==Q){
            c=2*Math.cos(5E-4*a)*N;
            d=2*Math.sin(5E-4*a)*N;
            e=0.1*Math.sin(5E-4*a)*N;
            f=Tc;
            g="";
            if(c||d)g+="translate("+c+"px,"+d+"px)";
            e&&(g+=" rotate("+e+"rad)");
            f.style.MozTransform=
            g;
            f.style.msTransform=g;
            f.style.Ea=g;
            f.style.webkitTransform=g;
            for(c=0;d=Oc[c++];)e=0.2*a*c,d.offsetX=2*Math.cos(5E-4*e)*N,d.offsetY=2*Math.sin(5E-4*e)*N,d.p=0.1*Math.sin(5E-4*e)*N,d.a()
        }
        c=173-L;
        if(0<c){
            d=[];
            e=[];
            K.beginPath();
            K.moveTo(c+2.5,0);
            for(f=0;15>f;f++){
                var g=a+1E3*f,m=c+2*Math.cos(5E-4*g)*N,g=13.8*(f+0.5)+2*Math.sin(5E-4*g)*N;
                d.push(m);
                e.push(g);
                K.lineTo(m+2.5,g)
            }
            K.lineTo(m+2.5,207);
            K.strokeStyle="rgba(0,0,0,0.2)";
            K.lineWidth=1;
            K.stroke();
            for(f=0;15>f;f++)na(K,d[f],e[f],5,5,"#739eaa"),na(K,
                d[f],e[f],4,4,"rgba(255,255,255,"+s(N,1,0.8+0.2*Math.sin(5E-4*a))+")")
        }
        for(m=0;c=vd[m++];)Ad(c,l);
        Fc.p=Ec.p=P.p=H;
        Fc.x=Ec.x=S+5;
        Fc.y=Ec.y=T+-10;
        Fc.a();
        Cc.p=H;
        Cc.x=S+45;
        Cc.y=T+-13;
        Cc.a();
        M.p=H;
        M.x=S+35;
        M.offsetX=15*-M.frame-15;
        M.y=T+-16;
        M.a();
        P.o=Ec.o=0.05*Ac;
        P.B=Ec.B=Ac;
        Ec.frame=Math.floor(xc/1E3);
        Ec.a();
        P.x=S+35;
        P.y=T+-44;
        P.a();
        for(m=0;c=vd[m++];)Ad(c,j);
        sa.frame=a/300&1;
        sa.a();
        m=0.2*Math.sin(a/1E3)*N;
        I.offsetX=I.getWidth()/2;
        I.x=-I.offsetX;
        I.F=1+m;
        I.a();
        I.F=-1+m;
        I.x=530-I.offsetX;
        I.a();
        yc.x=7950-
        L;
        yc.a();
        return j
    },yd=function(a){
        for(var b=pa(a),a=0;;a++){
            var c=X[a].x,d=X[a+1].x;
            if(c<=b&&d>b||a>=X.length-2)return b=(b-c)/(d-c),{
                top:s(b,X[a].top,X[a+1].top),
                bottom:s(b,X[a].bottom,X[a+1].bottom),
                Da:Math.atan2(X[a+1].top-X[a].top,X[a+1].x-X[a].x),
                Aa:Math.atan2(X[a+1].bottom-X[a].bottom,X[a+1].x-X[a].x)
            }
        }
    },Dd=function(){
        md&&(md=l,ta(100,0),ld.style.display="none")
    },Ed=function(a,b){
        var c=yd(a);
        return b>c.top&&b<c.bottom
    },Gd=function(a){
        2!=ac&&(ac=0);
        if(3==Q||4==Q||2==Q)if((a=37==a.keyCode||38==
            a.keyCode?-1:39==a.keyCode||40==a.keyCode?1:0)&&a!=Z)4==Q&&$(3),Z=a,Rc=l,$(4)
    },Hd=function(a){
        4==Q&&(37==a.keyCode||38==a.keyCode?-1:39==a.keyCode||40==a.keyCode?1:0)==Z&&(Gc=r())
    },Kd=function(){
        var a=Id;
        Qb=Jd;
        C.onmouseout=pc;
        C.onmouseup=pc;
        Hd&&(C.onkeyup=Hd);
        Pb=a;
        C.onmousedown=oc;
        Rb=k;
        C.onmousemove=qc;
        Lb=Gd;
        C.onkeydown=mc;
        C.style.cursor="pointer";
        -1!=navigator.userAgent.indexOf("Opera")&&(C.onkeypress=nc);
        $(1);
        G()
    },Id=function(a){
        2!=ac&&(ac=1);
        if(3==Q||2==Q){
            var b,c;
            a.offsetX?(b=a.offsetX,c=a.offsetY):
            a.layerX&&(b=a.layerX,c=a.layerY);
            b&&c&&(a=b+10,Ed(a+L,c)&&O.k(a,c,5),Z=c<T?-1:1,Rc=j,b>S&&(Pc=Math.atan2(c-T,b-S)),$(4))
        }
    },Jd=function(){
        4==Q&&(Rc=l,$(3))
    },Ld=function(){
        Nc.stop();
        vc.play();
        //        if(!window.WebFontConfig){
        //            aa("WebFontConfig.google.families",["Fredoka+One::latin"]);
        //            var a=document.createElement("script");
        //            a.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
        //            a.type="text/javascript";
        //            a.async="true";
        //            (document.getElementById("xjsc")||
        //                document.body).appendChild(a)
        //        }
        xa[0]=37;
        xa[1]=39;
        xa[2]=37;
        xa[3]=39;
        xa[4]=la[0];
        xa[5]=la[0];
        za=C;
        Aa=function(){
            2!=ac&&(ac=2)
        }||k;
        window.addEventListener("MozGamepadConnected",Ea,l);
        window.addEventListener("MozGamepadDisconnected",Fa,l);
        if((navigator.webkitGamepads||navigator.webkitGetGamepads)&&!Ba)Ba=j,Da();
        jc(0)
    },Md=function(a){
        a.stopPropagation()
    },Cd=function(a,b){
        var c=Math.min(1,Math.max(0,(L-7950)/-200))*td,a=Math.min(c,Math.max(-c,a));
        H<a?H=Math.min(a,H+b):H>a&&(H=Math.max(a,H-b))
    },$=function(a){
        var b=
        Q;
        if(b!=a)if(Q=a,1==a)H=xc=L=Ac=0,Nc.play(),Tc.style.display="",S=-120,T=103.5;
            else if(2==a)xd||Bd(),Jc=Kc=0,Uc=r();
            else if(3==a)Z=0;
            else if(4==a){
                if(Hc=Ic=0,a=r(),Qc=8E-4,Sc=a,Gc=k,2==b){
                    kd=a;
                    vd=[];
                    R=0.1;
                    for(var a=b=0,c;17>a;a++){
                        c=850+400*a+300*Math.random();
                        if(Math.random()>(10-b)/(17-a)){
                            var d=1+Math.floor(8*Math.random());
                            1==d?c=Nd(c,1,[62,30]):(d-=2,c=Nd(c,2,ud[d]),c.ka=d)
                        }else b++,c=Nd(c,0,[8,38],24);
                        vd.push(c)
                    }
                }
            }else 5==a&&(Ac=0,zc=r(),Dd(),hd.stop(),gd.stop(),fd.stop(),ed.stop(),6E4>zc-kd?
                (P=jd,id.play()):(P=dd,cd.play()))
    },Od=function(){
        var a=zc-kd,b=0;
        17E3>a?b=3:3E4>a?b=2:6E4>a&&(b=1);
        jc(1,a,b);
        var a=a?(a/1E3).toFixed(1)+" s":"",c="slalom_canoe";
        Gb.pa=Xb+a;
        c||(c=Fb);
        Gb.oa="https://www.google.com/logos/2012/"+c+"12-hp-share"+b+".png";
        Cb.textContent=a;
        for(a=0;3>a;a++)bc[a].className=a<b?"hplogo_smg":"hplogo_smh";
        E.style.display="";
        F.play()
    },Bd=function(){
        md||(md=j,ta(200,1),ld.style.display="",xd=j,window.localStorage&&window.localStorage.setItem("doodle-kayak-tooltip",j))
    },Nd=function(a,
        b,c,d){
        var d=d||0,e=yd(a);
        return{
            x:a,
            y:e.top+d+Math.random()*(e.bottom-e.top-c[1]-2*d),
            H:l,
            z:c,
            type:b
        }
    },Pd=function(){
        $(0);
        var a;
        ha=l;
        cc=!Fd;
        Eb=Fd;
        Ib=r();
        Mb=Kd;
        (C=document.getElementById("hplogo"))?(google.doodle&&google.doodle.alt&&C.setAttribute("aria-label",google.doodle.alt),C.innerHTML="",a=j):a=l;
        if(a&&(wc=dc(),J=dc(),wc&&J&&J.getContext)){
            wc.getContext("2d");
            K=J.getContext("2d");
            a=sd(1);
            var b=sd(2)+" \u2013 "+sd(0)+": ";
            Fb="slalom-canoe";
            var c=window.location.protocol+"//www.google.com/doodles/slalom-canoe-2012";
            ic("../Resources/olympics12-hp-sprite.png");
            E=q("div","hplogo_sc");
            Db=q("div","hplogo_sb");
            Cb=q("span","hplogo_sbt","hplogo_sse");
            Db.appendChild(Cb);
            for(var d=0;3>d;d++)bc[d]=q("div","hplogo_sm"),Db.appendChild(bc[d]);
            E.appendChild(Db);
            d=function(a){
                a=q("div",a);
                E.appendChild(a);
                return a
            };

            Sb=d("hplogo_sr");
            Vb=d("hplogo_ss");
            D=d("hplogo_sg");
            Sb.title=uc(0);
            Vb.title=uc(1);
            D.title=uc(2);
            E.style.display="none";
            Kb=q("div","hplogo_sle");
            Kb.onmouseup=rc;
            d=q("span","","hplogo_sse");
            d.textContent=c;
            Kb.appendChild(d);
            E.appendChild(Kb);
            C.appendChild(E);
            F=new t;
            u(F,function(){
                E.style.display="";
                Db.style.opacity=0;
                Sb.style.opacity=0;
                Vb.style.opacity=0;
                D.style.opacity=0;
                Kb.style.opacity=0;
                Sb.className="";
                Vb.className="";
                D.className="";
                ja||rc()
            });
            u(F,function(a){
                E.style.opacity=a
            },500);
            v(F,200);
            u(F,function(a){
                sc(Db,55,s(a,6,30));
                Db.style.opacity=a
            },200);
            v(F,200);
            u(F,function(a){
                var b=a=a*2;
                sc(Sb,8,s(b,12,0));
                Sb.style.opacity=b;
                b=a-0.5;
                sc(Vb,8,s(b,12,0));
                Vb.style.opacity=b;
                a=a-1;
                sc(D,8,s(a,12,0));
                D.style.opacity=a
            },500);
            u(F,function(a){
                Kb.style.opacity=
                a
            },500);
            u(F,function(){
                Ub=j
            });
            Tb=fc(Sb,"hplogo_srd");
            u(Tb,function(){
                Ub=l;
                !cc&&!$b&&G();
                jc(2);
                xc=H=0;
                S=-120;
                T=103.5;
                Z=0;
                Vc.play()
            });
            u(Tb,function(a){
                E.style.opacity=1-a
            },200);
            u(Tb,function(){
                E.style.display="none"
            });
            Sb.onmousedown=function(){
                var a;
                if(a=Ub)a=!Tb.v;
                a&&Tb.play()
            };

            Wb=fc(Vb,"hplogo_ssd");
            u(Wb,function(){
                google.nav.go(google.doodle.url)
            });
            Vb.onmousedown=function(){
                Wb.play()
            };

            Hb=fc(D,"hplogo_sgd",j);
            D.onmousedown=function(){
                jc(4);
                Hb.play()
            };

            Gb=new Bb(c,a,b,"",D);
            Xb=b;
            var e=q("div","hplogo_pc");
            a=q("div","hplogo_pb");
            var f=fc(a,"hplogo_pbd");
            u(f,Ld);
            sc(a,225,70);
            e.appendChild(a);
            e.onmousedown=function(){
                e.onmousedown=k;
                f.play()
            };

            e.style.display="none";
            C.appendChild(e);
            Tc=e;
            var g=ic("./slalom_canoe12-hp-sprite.png");
            Ec=new x(J,g,588,364,118,21);
            Fc=new x(J,g,588,388,22,-4,-4);
            Cc=new x(J,g,600,326,30,28,50,0);
            Cc.o=0.2;
            Bc=ra(Cc,4,250);
            Cc.frame=3;
            M=new x(J,g,55,0,50,35);
            M.o=0.2;
            Dc=ra(M,9,500);
            U=new x(J,g,650,235,69,88,7);
            hd=ra(U,3,32);
            nd=new x(J,g,860,235,69,88,7);
            gd=new t;
            u(gd,function(){
                P=nd
            });
            v(gd,32);
            u(gd,function(){
                P=U;
                wd=P.frame=0
            });
            P=U;
            od=qa(U);
            od.G=-1;
            pd=qa(nd);
            pd.G=-1;
            fd=ra(od,3,32);
            ed=new t;
            u(ed,function(){
                P=pd
            });
            v(ed,32);
            u(ed,function(){
                P=U;
                wd=P.frame=0
            });
            dd=new x(J,g,983,235,20,74,25,6);
            cd=new t;
            v(cd,1E3);
            u(cd,Od);
            jd=new x(J,g,55,38,31,103,25,-6);
            id=ra(jd,5,400);
            v(id,600);
            u(id,Od);
            Lc=new x(J,g,1006,235,43,42,0,-48);
            Mc=new x(J,g,1092,326,12,15,37,-59);
            Wc=qa(Lc);
            Wc.offsetY=10;
            Xc=qa(Mc);
            Xc.offsetY=-1;
            bd=[new x(J,g,533,235,28,11),new x(J,g,564,235,27,16),new x(J,g,1006,280,34,14),
            new x(J,g,564,326,33,32),new x(J,g,1052,235,47,26),new x(J,g,779,326,43,35),new x(J,g,948,274,30,24)];
            a=function(a,b,c){
                a=new x(J,g,a,b,13,29,0,c);
                a.o=0.5;
                return a
            };

            ad=[a(533,249,-10),k,a(932,235,-7),a(825,326,0),k,k,a(723,326,0)];
            Y=[];
            for(a=0;4>a;a++)Y.push(new x(J,g,841+62*a,326,62,35));
            Y[3].o=0.2;
            Yc=new x(wc,ic("./slalom_canoe12-hp-bg.png"));
            Zc=new x(wc,g,611,0,530,207);
            $c=new x(wc,g,0,235,530,207);
            yc=new x(J,g,213,38,24,194,60,-13);
            I=new x(J,g,0,0,52,207);
            Vc=new t;
            u(Vc,function(){
                P=U;
                P.frame=0;
                O.clear()
            });
            u(Vc,function(a){
                L=s(a,7950,0)
            },500);
            u(Vc,function(a){
                a=Math.pow(a,0.5);
                S=s(a,-120,64);
                O.k(S+V[2],T,1.5)
            },1E3);
            u(Vc,function(){
                $(2)
            });
            vc=new t;
            u(vc,function(){
                G();
                P=U;
                P.frame=0
            });
            u(vc,function(a){
                for(var b=1-a,c=0;c<Oc.length;c++){
                    var d=Oc[c];
                    oa(200)&&O.k(d.x+Math.random()*d.getWidth(),d.y+Math.random()*d.getHeight(),5*b);
                    d.opacity=b
                }
                oa(200)&&O.k(225+Math.random()*67,70+Math.random()*73,5*b);
                Tc.style.opacity=b;
                S=s(a,-120,64);
                O.k(S+V[2],T,1.5)
            },2E3);
            u(vc,function(){
                Tc.style.display="none";
                $(2)
            });
            Oc=[];
            a=function(a,b,c,d,e,f){
                a=new x(wc,g,a,b,c,d);
                a.x=e;
                a.y=f;
                Oc.push(a)
            };

            a(594,235,53,54,120,72);
            a(739,326,37,35,180,90);
            a(1102,235,35,54,295,90);
            a(564,364,21,52,337,72);
            a(948,235,32,36,365,90);
            sa=new x(J,g,240,38,184,134,200,40);
            sa.opacity=0;
            a=q("div");
            a.style.position="absolute";
            a.style.height="130px";
            a.style.margin="50px 0 0 300px";
            a.style.width="130px";
            a.style.zIndex=1;
            a.onmousedown=Md;
            C.appendChild(a);
            ld=a;
            ld.style.display="none";
            ld.style.cursor="default";
            Nc=new t;
            u(Nc,function(a){
                N=
                a;
                Tc.style.opacity=0.2+0.8*a
            },1E3);
            O=new qd(K,530,207,0.97,[71,204,238],[0,161,204]);
            (ja||ia)&&O.disable()
        }
    },Qd=function(){
        return document.activeElement!=C
    },Rd=function(){
        var a=window.google;
        if(a){
            var b=a.msg,c=function(){
                var a=b&&b.unlisten;
                a&&(a(67,c),Qd&&a(94,Qd));
                cc=ha=j;
                C&&(C.innerHTML="");
                Ub=l;
                return j
            };

            if(!a.doodle||!a.doodle.jesr)aa("google.doodle.jesr",j),a.rein&&a.dstr&&(a.rein.push(Pd),a.dstr.push(c));
            var a=a.psy,d=b&&b.listen;
            a&&(a.q&&d)&&(d(67,c),Qd&&d(94,Qd))
        }
        Pd()
    },Sd=window.google;
    Sd&&Sd.x?Sd.x({
        id:"DOODLE"
    },Rd):Rd();
})();
