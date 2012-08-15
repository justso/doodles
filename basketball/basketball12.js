(function(){
    var f=void 0,i=!0,j=null,k=!1,n,o=this,aa=function(a,b){
        var c=a.split("."),d=o;
        !(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);
        for(var e;c.length&&(e=c.shift());)!c.length&&b!==f?d[e]=b:d=d[e]?d[e]:d[e]={}
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
    },r="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),ca=0,da=function(a,b,c){
        return a.call.apply(a.bind,arguments)
    },ea=function(a,b,c){
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
    },s=function(a,b,c){
        s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;
        return s.apply(j,arguments)
    },u=function(a,b){
        function c(){}
        c.prototype=b.prototype;
        a.Ab=b.prototype;
        a.prototype=new c
    };
    Function.prototype.bind=Function.prototype.bind||function(a,b){
        if(1<arguments.length){
            var c=Array.prototype.slice.call(arguments,1);
            c.unshift(this,a);
            return s.apply(j,c)
        }
        return s(this,a)
    };

    var fa=function(a,b){
        this.vb=a;
        this.Fa=b;
        this.qa=j;
        this.pa=k
    };

    fa.prototype.getWidth=function(a){
        return this.Fa[a][2]
    };

    var ga=function(a,b){
        var c=a.Fa[b];
        return{
            width:c[2],
            height:c[3]
        }
    },ha=function(a,b){
        if(a.qa)a.pa&&b&&b();
        else{
            var c=document.createElement("img");
            a.qa=c;
            var d=s(function(a){
                this.pa||(this.pa=i,a&&a())
            },a,b);
            c.onload=d;
            c.src=a.vb;
            (c.complete||"complete"==c.readyState)&&d()
        }
    };
    fa.prototype.k=function(a,b,c,d){
        if(!this.qa||!this.pa)ha(this,s(this.k,this,a,b,c,d));
        else{
            var a=this.Fa[a],e=a[2],g=a[3];
            b.drawImage(this.qa,a[0],a[1],e,g,c,d,e,g)
        }
    };

    var ia,ja={},ka={
        Db:0,
        Fb:1,
        Hb:2,
        Cb:3,
        Eb:4,
        Gb:5,
        Bb:6
    };

    ja.va=j;
    var la=[],ma={},na=0,oa=j,pa=j,qa=k,v=function(a,b){
        return a.buttons[b]&&0.5<a.buttons[b]
    },w=function(a,b,c){
        return"undefined"==typeof a.axes[b]?k:c?-0.75>a.axes[b]:0.75<a.axes[b]
    },ra=function(a){
        ja.va=a.gamepad;
        qa||(qa=i,x())
    },sa=function(){
        delete ja.va;
        qa=k
    },x=function(){
        var a;
        if(ja.va)a=ja.va;
        else{
            var b=navigator.webkitGetGamepads&&navigator.webkitGetGamepads()||navigator.webkitGamepads;
            a=b&&(b[3]||b[2]||b[1]||b[0])||j
        }
        if(a&&!(a.timestamp&&a.timestamp==na)){
            na=a.timestamp;
            b=[];
            b[0]=v(a,14)||w(a,
                0,i)||w(a,2,i);
            b[1]=v(a,15)||w(a,0,k)||w(a,2,k);
            b[2]=v(a,12)||w(a,1,i)||w(a,3,i);
            b[3]=v(a,13)||w(a,1,k)||w(a,3,k);
            b[4]=v(a,0)||v(a,4)||v(a,6)||v(a,8)||v(a,9)||v(a,10);
            b[5]=v(a,1)||v(a,5)||v(a,7)||v(a,11);
            b[6]=v(a,2)||v(a,3);
            if(la.length)for(var c in ka){
                a=ka[c];
                var d=b[a];
                if("undefined"!=typeof d&&d!=la[a]&&ma[a]){
                    pa&&pa();
                    var e=document.createEvent("Event");
                    e.initEvent(d?"keydown":"keyup",i,i);
                    e.keyCode=ma[a];
                    oa.dispatchEvent(e)
                }
            }
            la=b
        }
        qa&&(window.requestAnimationFrame?window.requestAnimationFrame(x):
            window.oRequestAnimationFrame?window.oRequestAnimationFrame(x):window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(x):window.msRequestAnimationFrame?window.msRequestAnimationFrame(x):window.webkitRequestAnimationFrame&&window.webkitRequestAnimationFrame(x))
    };

    var ta=0<=navigator.userAgent.indexOf("MSIE"),va=function(a){
        for(var b=ua,c=0,d;d=b[c++];)if(a==d)return i;return k
    },y=function(a,b,c){
        a=document.createElement(a);
        b&&(a.id=b);
        c&&(a.className=c);
        return a
    },z=function(){
        return(new Date).getTime()
    },wa=function(a,b,c){
        return b+Math.min(1,Math.max(0,a))*(c-b)
    };

    var xa=function(){
        this.ua=this.ta=this.U=0;
        this.Ga=[]
    };

    xa.prototype.play=function(){
        ia||(this.stop(),this.ta=0,this.ua=z(),this.U=window.setInterval(s(this.cb,this),16),this.cb())
    };

    var A=function(a,b,c){
        a.Ga.push({
            duration:c||0,
            Ha:b
        })
    };

    xa.prototype.stop=function(){
        if(this.U){
            for(var a;a=this.Ga[this.ta++];)a.Ha(1);
            window.clearInterval(this.U);
            this.U=0
        }
    };

    var ya=function(a,b){
        A(a,function(){},b)
    };
    xa.prototype.cb=function(){
        var a=z();
        if(!ia)for(var b;b=this.Ga[this.ta];this.ta++){
            var c=a-this.ua;
            if(c<b.duration){
                b.Ha(c/b.duration);
                return
            }
            b.Ha(1);
            0<b.duration&&(this.ua+=b.duration)
        }
        this.stop()
    };

    var za=function(a){
        Error.captureStackTrace?Error.captureStackTrace(this,za):this.stack=Error().stack||"";
        a&&(this.message=String(a))
    };

    u(za,Error);
    var Aa=function(a,b){
        for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);
        return a
    };

    var Ba=function(a,b){
        b.unshift(a);
        za.call(this,Aa.apply(j,b));
        b.shift()
    };

    u(Ba,za);
    var Ca=function(a,b,c){
        if(!a){
            var d=Array.prototype.slice.call(arguments,2),e="Assertion failed";
            if(b)var e=e+(": "+b),g=d;
            throw new Ba(""+e,g||[]);
        }
    };

    var Da=Array.prototype,Ea=Da.indexOf?function(a,b,c){
        Ca(a.length!=j);
        return Da.indexOf.call(a,b,c)
    }:function(a,b,c){
        c=c==j?0:0>c?Math.max(0,a.length+c):c;
        if("string"==typeof a)return"string"!=typeof b||1!=b.length?-1:a.indexOf(b,c);
        for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1
    };

    var Ga=function(){};

    var Ha,Ia,Ja,Ka,La=function(){
        return o.navigator?o.navigator.userAgent:j
    };

    Ka=Ja=Ia=Ha=k;
    var Ma;
    if(Ma=La()){
        var Na=o.navigator;
        Ha=0==Ma.indexOf("Opera");
        Ia=!Ha&&-1!=Ma.indexOf("MSIE");
        Ja=!Ha&&-1!=Ma.indexOf("WebKit");
        Ka=!Ha&&!Ja&&"Gecko"==Na.product
    }
    var Oa=Ha,B=Ia,Pa=Ka,Qa=Ja,Ra;
        a:{
            var Sa="",Ta;
            if(Oa&&o.opera)var Ua=o.opera.version,Sa="function"==typeof Ua?Ua():Ua;
            else if(Pa?Ta=/rv\:([^\);]+)(\)|;)/:B?Ta=/MSIE\s+([^\);]+)(\)|;)/:Qa&&(Ta=/WebKit\/(\S+)/),Ta)var Va=Ta.exec(La()),Sa=Va?Va[1]:"";
            if(B){
                var Wa,Xa=o.document;
                Wa=Xa?Xa.documentMode:f;
                if(Wa>parseFloat(Sa)){
                    Ra=String(Wa);
                    break a
                }
            }
            Ra=Sa
        }
    var Ya=Ra,Za={},C=function(a){
        var b;
        if(!(b=Za[a])){
            b=0;
            for(var c=String(Ya).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){
                var h=c[g]||"",l=d[g]||"",m=RegExp("(\\d*)(\\D*)","g"),q=RegExp("(\\d*)(\\D*)","g");
                do{
                    var t=m.exec(h)||["","",""],p=q.exec(l)||["","",""];
                    if(0==t[0].length&&0==p[0].length)break;
                    b=((0==t[1].length?0:parseInt(t[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==t[1].length?
                        0:parseInt(t[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==t[2].length)<(0==p[2].length)?-1:(0==t[2].length)>(0==p[2].length)?1:0)||(t[2]<p[2]?-1:t[2]>p[2]?1:0)
                }while(0==b)
            }
            b=Za[a]=0<=b
        }
        return b
    },$a={},ab=function(){
        return $a[9]||($a[9]=B&&!!document.documentMode&&9<=document.documentMode)
    };

    var bb=function(a){
        bb[" "](a);
        return a
    };

    bb[" "]=function(){};
    !B||ab();
    var cb=!B||ab(),db=B&&!C("8");
    !Qa||C("528");
    Pa&&C("1.9b")||B&&C("8")||Oa&&C("9.5")||Qa&&C("528");
    Pa&&!C("8")||B&&C("9");
    var eb=function(a,b){
        this.type=a;
        this.currentTarget=this.target=b
    };

    eb.prototype.Ia=k;
    eb.prototype.defaultPrevented=k;
    eb.prototype.preventDefault=function(){
        this.defaultPrevented=i
    };

    var fb=function(a,b){
        a&&this.init(a,b)
    };

    u(fb,eb);
    n=fb.prototype;
    n.target=j;
    n.relatedTarget=j;
    n.offsetX=0;
    n.offsetY=0;
    n.clientX=0;
    n.clientY=0;
    n.screenX=0;
    n.screenY=0;
    n.button=0;
    n.keyCode=0;
    n.charCode=0;
    n.ctrlKey=k;
    n.altKey=k;
    n.shiftKey=k;
    n.metaKey=k;
    n.fb=j;
    n.init=function(a,b){
        var c=this.type=a.type;
        eb.call(this,c);
        this.target=a.target||a.srcElement;
        this.currentTarget=b;
        var d=a.relatedTarget;
        if(d){
            if(Pa){
                var e;
                    a:{
                        try{
                            bb(d.nodeName);
                            e=i;
                            break a
                        }catch(g){}
                        e=k
                    }
                e||(d=j)
            }
        }else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);
        this.relatedTarget=d;
        this.offsetX=Qa||a.offsetX!==f?a.offsetX:a.layerX;
        this.offsetY=Qa||a.offsetY!==f?a.offsetY:a.layerY;
        this.clientX=a.clientX!==f?a.clientX:a.pageX;
        this.clientY=a.clientY!==f?a.clientY:a.pageY;
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
        this.fb=a;
        a.defaultPrevented&&this.preventDefault();
        delete this.Ia
    };
    n.preventDefault=function(){
        fb.Ab.preventDefault.call(this);
        var a=this.fb;
        if(a.preventDefault)a.preventDefault();
        else if(a.returnValue=k,db)try{
            if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1
        }catch(b){}
    };

    var gb=function(){},hb=0;
    n=gb.prototype;
    n.key=0;
    n.W=k;
    n.ab=k;
    n.init=function(a,b,c,d,e,g){
        if("function"==ba(a))this.bb=i;
        else if(a&&a.handleEvent&&"function"==ba(a.handleEvent))this.bb=k;else throw Error("Invalid listener argument");
        this.oa=a;
        this.Ya=b;
        this.src=c;
        this.type=d;
        this.capture=!!e;
        this.Za=g;
        this.ab=k;
        this.key=++hb;
        this.W=k
    };

    n.handleEvent=function(a){
        return this.bb?this.oa.call(this.Za||this.src,a):this.oa.handleEvent.call(this.oa,a)
    };

    var ib={},D={},jb={},kb={},lb=function(a,b,c,d,e){
        if(b){
            if("array"==ba(b)){
                for(var g=0;g<b.length;g++)lb(a,b[g],c,d,e);
                return j
            }
            var d=!!d,h=D;
            b in h||(h[b]={
                H:0,
                M:0
            });
            h=h[b];
            d in h||(h[d]={
                H:0,
                M:0
            },h.H++);
            var h=h[d],l=a[r]||(a[r]=++ca),m;
            h.M++;
            if(h[l]){
                m=h[l];
                for(g=0;g<m.length;g++)if(h=m[g],h.oa==c&&h.Za==e){
                    if(h.W)break;
                    return m[g].key
                }
            }else m=h[l]=[],h.H++;
            var q=mb,t=cb?function(a){
                return q.call(t.src,t.key,a)
            }:function(a){
                a=q.call(t.src,t.key,a);
                if(!a)return a
            },g=t;
            g.src=a;
            h=new gb;
            h.init(c,g,
                a,b,d,e);
            c=h.key;
            g.key=c;
            m.push(h);
            ib[c]=h;
            jb[l]||(jb[l]=[]);
            jb[l].push(h);
            a.addEventListener?(a==o||!a.rb)&&a.addEventListener(b,g,d):a.attachEvent(b in kb?kb[b]:kb[b]="on"+b,g);
            return c
        }
        throw Error("Invalid event type");
    },nb=function(a,b,c,d){
        if(!d.ra&&d.$a){
            for(var e=0,g=0;e<d.length;e++)d[e].W?d[e].Ya.src=j:(e!=g&&(d[g]=d[e]),g++);
            d.length=g;
            d.$a=k;
            0==g&&(delete D[a][b][c],D[a][b].H--,0==D[a][b].H&&(delete D[a][b],D[a].H--),0==D[a].H&&delete D[a])
        }
    },pb=function(a,b,c,d,e){
        var g=1,b=b[r]||(b[r]=
            ++ca);
        if(a[b]){
            a.M--;
            a=a[b];
            a.ra?a.ra++:a.ra=1;
            try{
                for(var h=a.length,l=0;l<h;l++){
                    var m=a[l];
                    m&&!m.W&&(g&=ob(m,e)!==k)
                }
            }finally{
                a.ra--,nb(c,d,b,a)
            }
        }
        return Boolean(g)
    },ob=function(a,b){
        if(a.ab){
            var c=a.key;
            if(ib[c]){
                var d=ib[c];
                if(!d.W){
                    var e=d.src,g=d.type,h=d.Ya,l=d.capture;
                    e.removeEventListener?(e==o||!e.rb)&&e.removeEventListener(g,h,l):e.detachEvent&&e.detachEvent(g in kb?kb[g]:kb[g]="on"+g,h);
                    e=e[r]||(e[r]=++ca);
                    if(jb[e]){
                        var h=jb[e],m=Ea(h,d);
                        0<=m&&(Ca(h.length!=j),Da.splice.call(h,m,1));
                        0==
                        h.length&&delete jb[e]
                    }
                    d.W=i;
                    if(d=D[g][l][e])d.$a=i,nb(g,l,e,d);
                    delete ib[c]
                }
            }
        }
        return a.handleEvent(b)
    },mb=function(a,b){
        if(!ib[a])return i;
        var c=ib[a],d=c.type,e=D;
        if(!(d in e))return i;
        var e=e[d],g,h;
        if(!cb){
            var l;
            if(!(l=b))a:{
                l=["window","event"];
                for(var m=o;g=l.shift();)if(m[g]!=j)m=m[g];
                    else{
                        l=j;
                        break a
                    }
                l=m
            }
            g=l;
            l=i in e;
            m=k in e;
            if(l){
                if(0>g.keyCode||g.returnValue!=f)return i;
                    a:{
                        var q=k;
                        if(0==g.keyCode)try{
                            g.keyCode=-1;
                            break a
                        }catch(t){
                            q=i
                        }
                        if(q||g.returnValue==f)g.returnValue=i
                    }
            }
            q=new fb;
            q.init(g,
                this);
            g=i;
            try{
                if(l){
                    for(var p=[],Fa=q.currentTarget;Fa;Fa=Fa.parentNode)p.push(Fa);
                    h=e[i];
                    h.M=h.H;
                    for(var E=p.length-1;!q.Ia&&0<=E&&h.M;E--)q.currentTarget=p[E],g&=pb(h,p[E],d,i,q);
                    if(m){
                        h=e[k];
                        h.M=h.H;
                        for(E=0;!q.Ia&&E<p.length&&h.M;E++)q.currentTarget=p[E],g&=pb(h,p[E],d,k,q)
                    }
                }else g=ob(c,q)
            }finally{
                p&&(p.length=0)
            }
            return g
        }
        d=new fb(b,this);
        return g=ob(c,d)
    };

    var qb=function(a){
        this.yb=a;
        this.zb=[]
    };

    u(qb,Ga);
    var rb=[];
    qb.prototype.listen=function(a,b,c,d,e){
        "array"!=ba(b)&&(rb[0]=b,b=rb);
        for(var g=0;g<b.length;g++){
            var h=lb(a,b[g],c||this,d||k,e||this.yb||this);
            this.zb.push(h)
        }
        return this
    };

    qb.prototype.handleEvent=function(){
        throw Error("EventHandler.handleEvent not implemented");
    };

    var sb=function(a,b,c,d,e){
        qb.call(this);
        this.ub=a;
        this.tb=b;
        this.Xa=c;
        this.Wa=d;
        this.wb=e;
        this.listen(this.wb,"click",this.xb)
    };

    u(sb,qb);
    sb.prototype.xb=function(){
        window.gapi&&window.gbar&&window.gbar.asmc?window.gapi.load("share",s(this.eb,this)):window.open("about:blank").location="https://plus.google.com"
    };
    sb.prototype.eb=function(){
        if(window.gapi&&window.gapi.share){
            var a={
                items:[{
                    type:"http://schema.org/WebPage",
                    id:location.protocol+"//"+location.host,
                    properties:{
                        description:[this.Xa],
                        url:[this.ub],
                        name:[this.tb],
                        image:[this.Wa]
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
                onLoginStateChanged:s(function(){
                    aa("google.doodle.sf",i);
                    this.eb()
                },this)
            })
        }
    };

    var tb,F,G,ub,vb,H,wb,xb,yb,I,zb,Ab,Bb,Cb,Db,J,K,L,M,Eb,N,Fb,O,ua=[32,13],Gb=[],Hb=k,P=0,Ib=[],Jb=i,Lb=function(a,b,c){
        for(var d=new xa,e=0;2>=e;e++)A(d,Kb(a,b+e)),ya(d,16);
        if(c){
            ya(d,64);
            for(e=2;0<=e;e--)A(d,Kb(a,b+e)),ya(d,16);
            A(d,Kb(a,a.className))
        }
        return d
    },Q=function(){
        var a=z(),b=a-xb;
        Gb.push(b);
        30<Gb.length&&Gb.shift();
        b=Math.min(40,b);
        L||yb&&18E4<a-yb?Hb=k:!Jb&&f(a,b)?(window.requestAnimationFrame?window.requestAnimationFrame(Q,G):window.oRequestAnimationFrame?window.oRequestAnimationFrame(Q):
            window.mozRequestAnimationFrame?window.mozRequestAnimationFrame(Q):window.msRequestAnimationFrame?window.msRequestAnimationFrame(Q):window.webkitRequestAnimationFrame?window.webkitRequestAnimationFrame(Q,G):window.setTimeout(Q,16),xb=a,Hb=i):Hb=k
    },Mb=function(a,b,c){
        window.google&&window.google.log&&window.google.log("doodle-basketball","p:"+a+",s:"+("undefined"!=typeof b?b:"_")+",nc:"+("undefined"!=typeof c?c:"_")+",d:"+P+",")
    },Kb=function(a,b){
        return function(){
            a.className=b
        }
    },Nb=function(){
        yb=
        z();
        !Jb&&(!Hb&&!L)&&Q()
    },Ob=function(a){
        Nb();
        (37==a.keyCode||39==a.keyCode||38==a.keyCode||40==a.keyCode||va(a.keyCode))&&a.preventDefault();
        L&&(va(a.keyCode)&&!K.U)&&K.play();
        zb&&zb(a)
    },Pb=function(a){
        va(a.keyCode)&&a.preventDefault()
    },Qb=function(a){
        Ab=i;
        Nb();
        document.activeElement==G&&!L&&a.preventDefault();
        Bb&&Bb(a)
    },Rb=function(a){
        Ab&&Cb&&(Ab=k,Cb(a))
    },Sb=function(a){
        Nb();
        Db&&Db(a)
    },Tb=function(){
        window.getSelection().selectAllChildren(I)
    },Ub=function(a,b,c){
        a.style.margin=c+"px 0 0 "+b+"px"
    };

    var Vb={
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
    },Wb=function(a){
        return google.kHL in Vb&&Vb[google.kHL][a]||Vb.ALL[a]
    };

    var R=function(a,b){
        this.x=a;
        this.y=b
    },Xb=function(a,b){
        return new R(a.x-b.x,a.y-b.y)
    },Yb=function(a,b){
        return a.x*b.x+a.y*b.y
    };

    R.prototype.length=function(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    };

    var S=function(a,b,c,d){
        this.start=new R(a,b);
        this.end=new R(c,d)
    };
    S.prototype.ba=function(a){
        if(!(a instanceof S))return j;
        var b=(this.end.x-this.start.x)*(a.end.y-a.start.y)-(this.end.y-this.start.y)*(a.end.x-a.start.x);
        if(0==b)return j;
        var c=((this.start.y-a.start.y)*(a.end.x-a.start.x)-(this.start.x-a.start.x)*(a.end.y-a.start.y))/b,a=((this.start.y-a.start.y)*(this.end.x-this.start.x)-(this.start.x-a.start.x)*(this.end.y-this.start.y))/b;
        return 0<=c&&1>=c&&0<=a&&1>=a?new R(this.start.x+c*(this.end.x-this.start.x),this.start.y+c*(this.end.y-this.start.y)):j
    };
    var Zb=function(a,b,c){
        this.x=a;
        this.y=b;
        this.r=c
    };

    u(Zb,R);
    Zb.prototype.ba=function(a){
        if(a instanceof S)var b=Xb(a.end,a.start),c=Yb(Xb(this,a.start),b)/Yb(b,b),c=Math.min(1,Math.max(0,c)),a=new R(a.start.x+(new R(b.x*c,b.y*c)).x,a.start.y+(new R(b.x*c,b.y*c)).y);
        b=Xb(a,this);
        return Yb(b,b)<=this.r*this.r?a:j
    };

    var $b=function(a){
        this.d=a;
        this.y=this.x=0;
        a=ga(a,3);
        this.r=a.width/2;
        this.Va=a.width;
        this.h=a.height;
        this.g=new R(0,0);
        this.la=this.L=0;
        this.Ma=k;
        this.V=Math.floor(20*Math.random())
    };

    u($b,Zb);
    $b.prototype.update=function(a){
        this.x+=this.g.x*a;
        this.y+=this.g.y*a;
        this.L+=2*((this.xa?1:-1)*this.g.x/95)*Math.PI*a;
        190>this.y&&(this.g.y+=294*a);
        this.la=Math.max(this.la-1*a,0)
    };
    $b.prototype.w=function(){
        var a=T;
        a.save();
        a.translate(this.x,this.y);
        a.rotate(this.L);
        this.d.k(3,a,-this.Va/2,-this.h/2);
        a.globalAlpha=this.la;
        this.d.k(29,a,-this.Va/2,-this.h/2);
        a.restore()
    };

    $b.prototype.ka=function(){
        var a=Math.max(0.5,1-(180-this.y)/180),b=a-0.25,c=T;
        c.save();
        c.translate(this.x,195-(this.xa?this.V:0));
        c.scale(a,b);
        c.beginPath();
        c.arc(0,0,15,0,2*Math.PI,k);
        c.closePath();
        c.restore();
        c.fillStyle="rgba(0,0,0,0.1)";
        c.fill()
    };
    var ac=function(a,b){
        var c=new R(a.x+a.g.x*b,a.y+a.g.y*b);
        return new Zb(c.x,c.y,a.r)
    };

    var bc=function(a,b,c){
        this.d=a;
        this.a=b;
        this.i=c;
        a=new $b(a);
        a.x=this.a+a.r;
        a.y=this.i+5;
        this.B=a
    };

    n=bc.prototype;
    n.Z=function(){
        return this.a
    };

    n.T=function(a){
        this.a=a
    };

    n.update=function(a){
        var b=this.B.g;
        this.B.x-this.B.r<=this.a&&(this.B.x=this.a+this.B.r,b.x=0.25*-b.x);
        var c=this.B,b=Math.max(b.x-100*a,-150);
        c.g.x=b;
        c.g.y=0;
        this.B.update(a)
    };

    n.w=function(){
        this.d.k(1,T,this.a,this.i+5);
        this.B.w();
        this.d.k(2,T,this.a,this.i)
    };
    n.ma=function(){
        if(!this.B){
            var a=new $b(this.d);
            a.x=530;
            a.y=this.i+5;
            a.g.x=-150;
            a.g.y=0;
            this.B=a
        }
    };

    var cc=function(a){
        var b=a.B;
        a.B=j;
        a.ma();
        return b
    };

    var dc=function(a,b,c,d){
        this.d=a;
        this.N=b;
        this.a=c;
        this.i=d;
        this.p=[];
        this.Ea=[80,81,82,83,84,85,86,87]
    };
    dc.prototype.w=function(){
        if(this.p.length){
            for(var a=ga(this.d,11),b=j,c=this.p.length-1,d;d=this.p[c];c--)if(d.x+d.r<this.a||d.x-d.r>this.a+a.width||d.y-d.r>this.i+a.height)this.p.splice(c,1);
                else if(!b||d.y>b.y)b=d;b&&(a=b.y+b.r<this.i?0:Math.min(Math.floor((b.y+b.r-this.i)/(a.height+b.r)*this.Ea.length),this.Ea.length-1),this.N.k(this.Ea[a],T,this.a,this.i))
        }
        this.p.length||this.d.k(11,T,this.a,this.i)
    };

    var ec=[[0,5,7,k,10,80]],fc=[[50,5,0,i],[50,5,1,i],[50,5,2,i],[50,5,3,k,55,85],[50,5,4,k,40,90]],gc=[[50,25,52,k,15,75],[50,26,53,k,15,75],[50,27,54,k,17,77],[50,28,55,k,17,77],[50,29,56,k,19,79],[50,30,57,k,19,79],[50,31,58,k,17,73],[50,32,59,k,17,73],[50,33,60,k,17,73]],hc=[[50,34,61,k,14,60],[50,35,62,k,14,58],[50,36,63,k,20,50],[50,37,64,k,23,45],[50,38,65,k,23,41],[50,39,66,k,19,41],[50,40,67,k,22,30],[50,41,68,k,25,20],[50,42,69,k,26,13],[50,43,70,k,29,-2],[50,44,71,k,29,-7],[50,45,72,k],[50,
    46,73,k],[50,47,74,k],[50,48,75,k],[50,49,76,k],[50,50,77,k],[50,51,78,k]],ic=[[50,5,j],[50,6,j],[50,7,j],[50,8,j],[50,9,j],[50,10,j],[50,11,j],[50,12,j],[50,13,j]],jc=[[50,14,j],[50,15,j],[50,16,j],[50,17,j],[50,18,j],[50,19,j],[50,20,j],[50,21,j],[50,22,j],[50,23,j],[50,24,j],[50,21,j],[50,22,j],[50,23,j],[50,24,j],[50,21,j],[50,22,j],[50,23,j],[50,24,j]],U=function(a,b,c,d,e){
        this.d=a;
        this.N=b;
        this.C=c;
        this.s=j;
        this.a=d;
        this.i=e;
        this.Ca=this.A=0;
        this.za=5;
        this.ha=7;
        this.Sa=k;
        this.Ba=this.Aa=0;
        this.Qa=1.25*Math.PI;
        this.ya=0;
        this.Na=j
    };

    U.prototype.Z=function(){
        return this.a
    };

    U.prototype.T=function(a){
        this.a=a
    };

    var W=function(a,b){
        a.D=V();
        a.A=b;
        kc(a)
    };

    U.prototype.update=function(){
        if(this.F&&2==this.A){
            var a=V()-this.F,b=1;
            1E3<a?(this.Aa=Math.round(4*Math.random()-2),this.Ba=Math.round(4*Math.random()-2)):b=a/1E3;
            this.s.la=b
        }else this.Aa=this.Ba=0;
        kc(this)
    };
    var kc=function(a){
        switch(a.A){
            case 0:
                lc(a,ec[ec.length-1].slice(1));
                break;
            case 1:
                var b=mc(V()-a.D,fc);
                b?2==b.ia&&a.F?(a.F=0,nc(a,i)):(b.ia==Math.ceil(fc.length/2)&&(a.s=cc(a.C)),lc(a,b)):W(a,0);
                break;
            case 2:
                oc(a,gc);
                break;
            case 3:
                if(b=mc(V()-a.D,hc)){
                    if(10<=b.ia&&a.s){
                        var c=a.s;
                        a.s=j;
                        var d=200+150*a.ob,e=Math.sin(a.Qa)*d;
                        c.g.x=Math.cos(a.Qa)*d;
                        c.g.y=e;
                        a.Na(c)
                    }
                    lc(a,b)
                }else W(a,0),a.nb();
                break;
            case 4:
                oc(a,ic);
                break;
            case 5:
                oc(a,jc)
        }
    };
    U.prototype.ka=function(){
        var a=this.d.getWidth(5),b=T;
        b.save();
        var c=0.3;
        if(3==this.A&&7<=this.Ca)var d=Math.min((this.Ca-7)/(hc.length-7-4),1),c=c*(Math.cos((0.5+d)*Math.PI)+1);
        b.translate(this.a+a/2,200);
        b.scale(1,0.25);
        b.beginPath();
        b.arc(0,0,20,0,2*Math.PI,k);
        b.closePath();
        b.restore();
        b.fillStyle="rgba(0,0,0,"+c+")";
        b.fill()
    };

    U.prototype.w=function(){
        0==this.A||1==this.A?this.d.k(this.za,T,this.a,this.i):this.N.k(this.za,T,this.a,this.i);
        this.Sa?(pc(this),qc(this)):(qc(this),pc(this))
    };
    var qc=function(a){
        if(a=a.s)a.ka(),a.w()
    },pc=function(a){
        a.ha!==j&&(0==a.A?a.d.k(a.ha,T,a.a,a.i):a.N.k(a.ha,T,a.a,a.i))
    },oc=function(a,b){
        var c=mc(V()-a.D,b);
        c||(c=b[b.length-1].slice(1));
        lc(a,c)
    },mc=function(a,b){
        for(var c=0,d=0,e;e=b[d];d++){
            if(a<c+e[0])return e=e.slice(1),e.ia=d,e;
            c+=e[0]
        }
        return j
    },lc=function(a,b){
        a.za=b[0];
        a.ha=b[1];
        a.Sa=b[2];
        a.Ca=b.ia;
        a.s&&(b[3]&&b[4])&&(a.s.x=a.a+b[3]+a.Aa,a.s.y=a.i+b[4]+a.Ba)
    },rc=function(a,b){
        b?a.s=cc(a.C):W(a,1)
    },nc=function(a,b){
        a.F||(3!=a.A&&(a.s||rc(a,
            i),W(a,2)),a.F=V()-(b?200:0))
    };

    var sc=[27,28,26,24],tc=function(a,b,c){
        this.d=a;
        this.a=b;
        this.i=c;
        this.D=this.L=0;
        this.Da=k;
        this.z=0;
        a=ga(this.d,24);
        this.Ta=a.width/2;
        this.Ua=a.height/2
    };

    tc.prototype.Y=function(){
        return 1<=this.z
    };

    tc.prototype.animate=function(){
        this.D=z()
    };

    tc.prototype.update=function(a){
        this.z=Math.min(this.z+2*a,1);
        if(this.D&&!(200>z()-this.D)){
            this.a+=150*a;
            var b=this.d.getWidth(23)*Math.PI;
            this.L+=2*(150*a/b)*Math.PI
        }
    };
    tc.prototype.w=function(){
        var a=T;
        a.globalAlpha=this.z;
        a.save();
        a.translate(this.a+30,this.i+65);
        a.scale(1,0.25);
        a.beginPath();
        a.arc(0,0,40,0,2*Math.PI,k);
        a.closePath();
        a.restore();
        a.fillStyle="rgba(0,0,0,0.1)";
        a.fill();
        var b;
        if(this.Da&&!this.D)b=25;
        else if(this.D){
            b=z()-this.D;
            var c=200/sc.length;
            b=200<=b?24:sc[Math.min(Math.floor(b/c),sc.length-1)]
        }else b=28;
        this.d.k(b,T,this.a,this.i);
        24==b&&(b=ga(this.d,22),a.save(),a.translate(this.a+this.Ta,this.i+this.Ua),a.rotate(this.L),this.d.k(22,T,-b.width/
            2-(this.Ta-36),-b.height/2-(this.Ua-36)),a.restore());
        a.globalAlpha=1
    };

    var uc=function(a,b,c){
        this.d=a;
        this.a=b;
        this.i=c;
        this.J=this.z=0
    };

    n=uc.prototype;
    n.Z=function(){
        return this.a
    };

    n.T=function(a){
        this.a=a
    };

    n.Y=function(){
        return 1==this.J
    };

    n.show=function(){
        this.J=1
    };

    n.update=function(a){
        if(this.z!=this.J){
            var b=this.J-this.z;
            this.z=Math.min(1,Math.max(0,this.z+b/Math.abs(b)*(1E3/(this.z<this.J?200:100))*a))
        }
    };
    n.w=function(){
        var a=T,b=vc(z(),2300),c=1300>b;
        a.save();
        a.globalAlpha=this.z;
        this.d.k(c?8:10,a,this.a,this.i);
        this.d.k(31,a,this.a+135,this.i+105);
        this.d.k(32,a,this.a+155,this.i+115);
        c&&1==this.z&&(a.globalAlpha=Math.min(b/1E3,1),this.d.k(9,a,this.a,this.i));
        a.restore()
    };

    var wc={
        ALL:["Score","Basketball","I played basketball! #GoogleDoodle"],
        af:["Hoogste telling","Basketbal","Ek het basketbal gespeel #GoogleDoodle"],
        "am_ET(Amharic/ALL)":["\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275","\u1245\u122d\u132b\u1275 \u12b3\u1235","\u1245\u122d\u132b\u1275 \u12b3\u1235 \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle"],
        ar:["\u0627\u0644\u0646\u062a\u064a\u062c\u0629","\u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629","\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0643\u0631\u0629 \u0627\u0644\u0633\u0644\u0629 GoogleDoodle#"],
        az:["\u018fn y\u00fcks\u0259k bal","Basketbol","M\u0259n basketbol oynad\u0131m  #GoogleDoodle"],
        be:["\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b","\u042f \u0433\u0443\u043b\u044f\u045e \u0443 \u0431\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle"],
        bg:["\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b",
        "\u0418\u0433\u0440\u0430\u0445 \u0431\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle"],
        bn:["\u09b8\u09cd\u0995\u09cb\u09b0","\u09ac\u09be\u09b8\u09cd\u0995\u09c7\u099f\u09ac\u09b2","\u0986\u09ae\u09bf \u09ac\u09be\u09b8\u09cd\u0995\u09c7\u099f\u09ac\u09b2 \u0996\u09c7\u09b2\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2"],
        bs:["Rezultat","Ko\u0161arka","Igrao sam ko\u0161arku #GoogleDoodle"],
        ca:["R\u00e8cord","Basquetbol","He jugat a basquetbol #GoogleDoodle"],
        cs:["Nejvy\u0161\u0161\u00ed sk\u00f3re","Basketbal","Zahrajte si basketbal #GoogleDoodle"],
        da:["Top score","Basketball","Jeg spillede basketball #GoogleDoodle"],
        de:["Rekord","Basketball","Ich habe Basketball gespielt #GoogleDoodle"],
        el:["\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2","\u039c\u03c0\u03ac\u03c3\u03ba\u03b5\u03c4","\u0388\u03c0\u03b1\u03b9\u03be\u03b1 \u03bc\u03c0\u03ac\u03c3\u03ba\u03b5\u03c4 #GoogleDoodle"],
        en_us:["Score","Basketball","I played basketball! #GoogleDoodle"],
        "en-GB":["Score","Basketball","I played basketball! #GoogleDoodle"],
        es:["R\u00e9cord","Baloncesto","He jugado al baloncesto #GoogleDoodle"],
        "es-419":["Resultado","B\u00e1squetbol","He jugado b\u00e1squetbol #GoogleDoodle"],
        et:["Rekordtulemus","Korvpall","M\u00e4ngisin korvpalli #GoogleDoodle"],
        eu:["Emaitza","Saskibaloia","Saskibaloian jokatu dut #GoogleDoodle"],
        fi:["K\u00e4rkitulos","Koripallo","Pelasin koripalloa #GoogleDoodle"],
        fr:["R\u00e9sultat",
        "Basketball","J'ai jou\u00e9 au basketball #GoogleDoodle"],
        ga:["Sc\u00f3r is fearr","Cispheil","D'imir m\u00e9 cispheil #GoogleDoodle"],
        gl:["Record","Baloncesto","Xoguei \u00f3 baloncesto #GoogleDoodle"],
        hr:["Rezultat","Ko\u0161arka","Igrao sam ko\u0161arku #GoogleDoodle"],
        is:["Flest stig","K\u00f6rfubolti","\u00c9g spila\u00f0i k\u00f6rfubolta #GoogleDoodle"],
        it:["Miglior punteggio","Pallacanestro","Ho giocato a pallacanestro #GoogleDoodle"],
        iw:["\u05e0\u05d9\u05e7\u05d5\u05d3","\u05db\u05d3\u05d5\u05e8\u05e1\u05dc",
        "\u05e9\u05d9\u05d7\u05e7\u05ea\u05d9 \u05db\u05d3\u05d5\u05e8\u05e1\u05dc  #GoogleDoodle"],
        hu:["Legjobb eredm\u00e9ny","Kos\u00e1rlabda","Kos\u00e1rlabd\u00e1ztam #GoogleDoodle"],
        ja:["\u30b9\u30b3\u30a2","\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb","\u300c\u30d0\u30b9\u30b1\u30c3\u30c8\u30dc\u30fc\u30eb\u300d\u3092\u3084\u3063\u305f! #GoogleDoodle"],
        ko:["\uae30\ub85d","\ub18d\uad6c","\ub18d\uad6c\ub97c \ud588\uc5b4\uc694! #GoogleDoodle "],
        lt:["Rezultatas","Krep\u0161inis","A\u0161 \u017eaid\u017eiau Google krep\u0161in\u012f!"],
        lv:["Lab\u0101kais rezult\u0101ts","Basketbols","Es sp\u0113l\u0113ju basketbolu #GoogleDoodle"],
        mk:["\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442","\u041a\u043e\u0448\u0430\u0440\u043a\u0430","\u0418\u0433\u0440\u0430\u0432 \u043a\u043e\u0448\u0430\u0440\u043a\u0430 #GoogleDoodle"],
        mo:["Scor de top","Baschet","Am jucat baschet #GoogleDoodle"],
        mr:["\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923","\u092c\u093e\u0938\u094d\u0915\u0947\u091f\u092c\u0949\u0932",
        "\u092e\u0940 \u092c\u093e\u0938\u094d\u0915\u0947\u091f\u092c\u0949\u0932 \u0916\u0947\u0933\u0932\u094b #GoogleDoodle"],
        ms_my:["Skor tertinggi","Bola Keranjang","Saya bermain bola keranjang #GoogleDoodle"],
        nl:["Topscore","Basketbal","Ik heb basketbal gespeeld #GoogleDoodle"],
        pl:["Najlepszy wynik","Koszyk\u00f3wka","Gram w koszyk\u00f3wk\u0119 #GoogleDoodle"],
        "pt-BR":["Pontua\u00e7\u00e3o","Basquete","Eu joguei Basquete #GoogleDoodle"],
        "pt-PT":["Pontua\u00e7\u00e3o","Basquetebol","Eu joguei Basquetebol #GoogleDoodle"],
        ro:["Scor de top","Baschet","Am jucat baschet #GoogleDoodle"],
        ru:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle"],
        sk:["Najlep\u0161ie sk\u00f3re","Basketbal","Zahrajte si basketbal #GoogleDoodle"],
        sl:["Najbolj\u0161i rezultat","Ko\u0161arka","Igral sem ko\u0161arko #GoogleDoodle"],
        sr:["\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
        "\u041a\u043e\u0448\u0430\u0440\u043a\u0430","\u0418\u0433\u0440\u0430\u043c \u043a\u043e\u0448\u0430\u0440\u043a\u0443 #GoogleDoodle"],
        sv:["Resultat","Basket","Jag spelade basket #GoogleDoodle"],
        sw:["Alama za Juu","Mpira wa Kikapu","Nilicheza Mpira wa Kikapu #GoogleDoodle"],
        th_All:["\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14","\u0e1a\u0e32\u0e2a\u0e40\u0e01\u0e47\u0e15\u0e1a\u0e2d\u0e25 ","\u0e09\u0e31\u0e19\u0e40\u0e25\u0e48\u0e19\u0e1a\u0e32\u0e2a\u0e40\u0e01\u0e47\u0e15\u0e1a\u0e2d\u0e25\u0e1a\u0e19 Google Doodle!"],
        tr:["En y\u00fcksek puan","Basketbol","Basketbol oynad\u0131m! #GoogleDoodle"],
        uk:["\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b","\u0411\u0430\u0441\u043a\u0435\u0442\u0431\u043e\u043b #GoogleDoodle"],
        "zh-CN":["\u6700\u9ad8\u5f97\u5206","\u7bee\u7403","#Google\u6d82\u9e26#\u6211\u6253\u4e86\u7bee\u7403"],
        "zh-TW_HK":["\u6700\u9ad8\u5f97\u5206","\u7c43\u7403","\u6211\u6253\u4e86\u5834\u7c43\u7403\uff01 #GoogleDoodle"],
        "zh-TW_tw":["\u6700\u9ad8\u5f97\u5206","\u7c43\u7403","\u6211\u6253\u4e86\u5834\u7c43\u7403\uff01 #GoogleDoodle"]
    },xc=function(a){
        return google.kHL in wc&&wc[google.kHL][a]||wc.ALL[a]
    };

    var yc=1/30,X=1/60,zc=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){
        window.setTimeout(a,1E3*yc)
    },vc=eval("(function(a,n){return a"+String.fromCharCode(37)+"n;})"),Z=function(a,b){
        this.d=a;
        this.N=b;
        this.C=new bc(a,325,155);
        this.o=new U(a,b,this.C,265,75);
        this.Ja=new dc(a,b,85,62);
        this.O=new tc(a,240,80);
        this.v=new uc(a,115,0);
        this.p=[];
        this.hb=[new S(80,10,80,70),new R(132,
            62)];
        this.La=new S(90,64,110,64);
        this.ea=new S(-50,207,580,207);
        this.X=0;
        this.aa=k;
        this.$=this.G=0;
        this.I=k;
        this.K=this.R=this.P=this.Q=0;
        this.Ka=this.wa=k;
        this.Pa=[12,13,14,15,16,17,18,19,20,21];
        var c=s(this.ib,this),d=s(this.jb,this),e=s(this.kb,this);
        Cb=s(this.lb,this);
        G.onmouseout=Rb;
        G.onmouseup=Rb;
        d&&(G.onkeyup=d);
        Bb=e;
        G.onmousedown=Qb;
        Db=j;
        G.onmousemove=Sb;
        zb=c;
        G.onkeydown=Ob;
        G.style.cursor="pointer";
        -1!=navigator.userAgent.indexOf("Opera")&&(G.onkeypress=Pb);
        Y.onmouseover=s(this.Ra,this,i);
        Y.onmouseout=s(this.Ra,this,k);
        var g=s(this.mb,this),c=xc(1),d=xc(2)+" "+xc(0)+": ";
        ub="basketball";
        e=window.location.protocol+"//www.google.com/doodles/basketball-2012";
        y("img").src="Resources/olympics12-hp-sprite.png";
        N=y("div","hplogo_sc");
        F=y("div","hplogo_sb");
        tb=y("span","hplogo_sbt","hplogo_sse");
        F.appendChild(tb);
        for(var h=0;3>h;h++)Ib[h]=y("div","hplogo_sm"),F.appendChild(Ib[h]);
        N.appendChild(F);
        h=function(a){
            a=y("div",a);
            N.appendChild(a);
            return a
        };

        J=h("hplogo_sr");
        M=h("hplogo_ss");
        H=h("hplogo_sg");
        J.title=Wb(0);
        M.title=Wb(1);
        H.title=Wb(2);
        N.style.display="none";
        I=y("div","hplogo_sle");
        I.onmouseup=Tb;
        h=y("span","","hplogo_sse");
        h.textContent=e;
        I.appendChild(h);
        N.appendChild(I);
        G.appendChild(N);
        O=new xa;
        A(O,function(){
            N.style.display="";
            F.style.opacity=0;
            J.style.opacity=0;
            M.style.opacity=0;
            H.style.opacity=0;
            I.style.opacity=0;
            J.className="";
            M.className="";
            H.className="";
            ta||Tb()
        });
        A(O,function(a){
            N.style.opacity=a
        },500);
        ya(O,200);
        A(O,function(a){
            Ub(F,55,wa(a,6,30));
            F.style.opacity=a
        },200);
        ya(O,
            200);
        A(O,function(a){
            var b=a=a*2;
            Ub(J,8,wa(b,12,0));
            J.style.opacity=b;
            b=a-0.5;
            Ub(M,8,wa(b,12,0));
            M.style.opacity=b;
            a=a-1;
            Ub(H,8,wa(a,12,0));
            H.style.opacity=a
        },500);
        A(O,function(a){
            I.style.opacity=a
        },500);
        A(O,function(){
            L=i
        });
        K=Lb(J,"hplogo_srd");
        A(K,function(){
            L=k;
            !Jb&&!Hb&&Q();
            g()
        });
        A(K,function(a){
            N.style.opacity=1-a
        },200);
        A(K,function(){
            N.style.display="none"
        });
        J.onmousedown=function(){
            L&&!K.U&&K.play()
        };

        Eb=Lb(M,"hplogo_ssd");
        A(Eb,function(){
            google.nav.go(google.doodle.url)
        });
        M.onmousedown=function(){
            Eb.play()
        };
        wb=Lb(H,"hplogo_sgd",i);
        H.onmousedown=function(){
            Mb(4);
            wb.play()
        };

        vb=new sb(e,c,d,"",H);
        Fb=d
    },Bc=function(a){
        T.clearRect(0,0,530,207);
        a.d.k(0,T,0,0);
        Ac(a,a.G,340);
        5<=$(a)||0==$(a)?Ac(a,$(a),431):1==vc(Math.round($(a)/0.25),2)&&Ac(a,$(a),431);
        a.O.w();
        a.o.ka();
        var b,c;
        for(b=0;c=a.p[b];b++)c.ka();
        for(b=0;(c=a.p[b])&&!(4>c.V);b++)c.w();
        a.o.w();
        for(a.C.w();c=a.p[b];b++)c.w();
        a.d.k(30,T,80,60);
        a.Ja.w();
        a.v.w();
        a.d.k(6,T,0,0)
    },Ac=function(a,b,c){
        var d=vc(Math.floor(b/10),10),b=Math.floor(vc(b,10));
        a.d.k(a.Pa[d],
            T,c+(1==d?7:0),10);
        a.d.k(a.Pa[b],T,c+28+(1==b?7:0),10)
    },Cc=function(a){
        a.aa||(a.aa=i,a.Oa())
    };
    Z.prototype.Oa=function(){
        if(this.aa){
            0==this.X&&(this.X=V());
            var a=(V()-this.X)/1E3;
            if(!(a<X)){
                for(a>yc&&(a=yc);a>=X;){
                    if(this.O.Y()&&!this.I)this.stop();
                    else{
                        !this.S&&(this.P&&1E4<V()-this.P)&&(this.S=V());
                        if($(this)){
                            if(0<this.R&&this.o.s==j){
                                var b=Math.min(this.R,200*X);
                                this.o.T(this.o.Z()+b);
                                this.v.T(this.v.Z()+b);
                                this.R-=b
                            }
                            if(0<this.K&&this.o.s==j||this.o.s!=j&&3==this.o.A||50>this.K)b=Math.min(this.K,200*X),this.C.T(this.C.Z()+b),this.K-=b
                        }
                        this.O.update(X);
                        this.v.update(X);
                        this.o.update(X);
                        this.C.update(X);
                        for(var b=this.p.length-1,c=f;this.p[b];b--){
                            var d=c=this.p[b],e=X,g=ac(d,e),h=new R(d.x+d.g.x*e,d.y+d.g.y*e),l=Dc(this,d,new S(d.x,d.y,h.x,h.y));
                            l&&(e=0.9*Xb(l,d).length()/Xb(g,d).length()*e,g=ac(d,e),d.xa=i);
                            if(l=Dc(this,d,g))h=d,g=Xb(l,g),l=g.length(),g=new R(g.x/l,g.y/l),l=Math.abs(Yb(g,h.g)),h.g.x-=2*g.x*l,h.g.y-=2*g.y*l,h.g.x*=0.6,h.g.y*=0.6,15>Math.abs(h.g.y)&&(h.g.y=0),0>Math.abs(h.g.x)&&(h.g.x=0),d.xa=i;
                            d.update(e);
                            0<d.g.y&&(!d.Ma&&d.ba(this.La))&&(this.Ja.p.push(d),d.Ma=
                                i,this.G+=3<=Math.floor(this.$/3)?3:2,this.$++,0==vc(this.$,4)&&(this.R=this.K=50));
                            (0>c.x+c.r||530<c.x-c.r)&&this.p.splice(b,1)
                        }
                        this.I&&(5E3<(new Date).getTime()-this.P&&!this.v.Y())&&(this.Ka||Mb(3),this.Ka=i,this.v.show());
                        if(0>=$(this)){
                            this.v.Y()&&(this.v.J=0,this.wa=i);
                                a:{
                                    b=0;
                                    for(c=f;c=this.p[b];b++)if(c.y<this.La.start.y){
                                        b=i;
                                        break a
                                    }
                                    b=k
                                }
                            2==this.o.A||3==this.o.A?Ec(this,i):b&&this.Q?(clearTimeout(this.Q),this.Q=0):!b&&!this.Q&&(this.Q=setTimeout(s(this.gb,this),500))
                        }
                    }
                    a-=X
                }
                this.X=Math.floor(V()-
                    1E3*a)
            }
            Bc(this);
            zc(s(this.Oa,this))
        }
    };

    Z.prototype.stop=function(){
        this.aa=k
    };

    var $=function(a){
        return!a.S?24:Math.max(24-(V()-a.S)/1E3,0)
    },Dc=function(a,b,c){
        for(var d=0,e;e=a.hb[d];d++)if(e=c.ba(e))return e;return c.ba(new S(a.ea.start.x,a.ea.start.y-b.V,a.ea.end.x,a.ea.end.y-b.V))
    };

    n=Z.prototype;
    n.gb=function(){
        var a=0;
        36<=this.G?a=3:21<=this.G?a=2:8<=this.G&&(a=1);
        var b=this.o,c=b.s;
        b.s=j;
        c&&this.ma(c);
        0==a?W(this.o,5):W(this.o,4);
        setTimeout(s(function(){
            this.Q=0;
            Mb(1,this.G,a);
            var b=this.G.toString(),c=a,g;
            vb.Xa=Fb+b;
            g||(g=ub);
            vb.Wa="https://www.google.com/logos/2012/"+g+"12-hp-share"+c+".png";
            tb.textContent=b;
            for(b=0;3>b;b++)Ib[b].className=b<c?"hplogo_smg":"hplogo_smh";
            N.style.display="";
            O.play();
            this.stop()
        },this),1500)
    };
    n.mb=function(){
        Mb(2);
        this.C=new bc(this.d,325,155);
        this.o=new U(this.d,this.N,this.C,265,75);
        this.v.T(115);
        this.p=[];
        this.$=this.G=this.S=this.X=0;
        this.P=(new Date).getTime();
        rc(this.o,k);
        this.R=this.K=0;
        this.wa&&(this.v.show(),this.wa=k);
        Cc(this)
    };
    n.kb=function(a){
        if(this.I&&Y){
            var b,a=a||window.event;
            b=!a?[0,0]:[(a.clientX||a.targetTouches&&a.targetTouches[0]&&a.targetTouches[0].clientX||0)+(document.body.scrollLeft||document.documentElement.scrollLeft||0),(a.clientY||a.targetTouches&&a.targetTouches[0]&&a.targetTouches[0].clientY||0)+(document.body.scrollTop||document.documentElement.scrollTop||0)];
            var c,a=Y,d=c=0;
            if(a){
                do c+=a.offsetLeft,d+=a.offsetTop;while(a=a.offsetParent)
            }
            c=[c,d];
            a=b[0]-c[0];
            b=b[1]-c[1];
            if(!(c=!this.v.Y()))c=this.v,
                d=ga(c.d,8),c=!(a>=c.a&&b>=c.i&&a<=c.a+d.width&&b<=c.i+d.height);
            c&&Fc(this)
        }
    };
    n.lb=function(){
        2!=P&&(P=1);
        if(this.I)Ec(this,k);
        else{
            this.O.animate();
            rc(this.o,k);
            this.I=i;
            Mb(0);
            this.P=(new Date).getTime();
            var a=window.localStorage&&window.localStorage.getItem("doodle-basketball-tooltip")||j;
            if(!a||!parseFloat(a))window.localStorage&&window.localStorage.setItem("doodle-basketball-tooltip",1),this.v.show();
            Cc(this);
            //    window.WebFontConfig||(aa("WebFontConfig.google.families",["Fredoka+One::latin"]),a=document.createElement("script"),a.src=("https:"==document.location.protocol?"https":
            //        "http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",a.type="text/javascript",a.async="true",(document.getElementById("xjsc")||document.body).appendChild(a));
            if(Gc&&(Gc=i,ma[2]=ua[0],ma[4]=ua[0],ma[5]=ua[0],ma[6]=ua[0],oa=G,pa=function(){
                P!=2&&(P=2)
            }||j,window.addEventListener("MozGamepadConnected",ra,k),window.addEventListener("MozGamepadDisconnected",sa,k),(navigator.webkitGamepads||navigator.webkitGetGamepads)&&!qa))qa=i,x()
        }
    };

    n.Ra=function(a){
        !this.I&&this.O.Da!=a&&(this.O.Da=a,Bc(this))
    };
    n.jb=function(a){
        2!=P&&(P=0);
        32==a.keyCode&&Ec(this,k)
    };

    n.ib=function(a){
        32==a.keyCode&&Fc(this)
    };

    var Fc=function(a){
        a.I&&!(0>=$(a))&&(a.P=(new Date).getTime(),nc(a.o,k))
    },Ec=function(a,b){
        if(b||a.I&&!(0>=$(a))){
            a.v&&(a.v.J=0);
            var c=a.o,d=s(a.qb,a),e=s(a.pb,a);
            if(c.F&&2!=c.A)c.F=0;
            else{
                var g=V()-c.F;
                c.ya++;
                c.F&&!(200>g&&2>c.ya)&&(c.ya=0,c.ob=Math.min(g/1E3,1),c.F=0,W(c,3),c.Na=d,c.nb=e)
            }
        }
    };

    Z.prototype.qb=function(a){
        this.S||(this.S=V());
        this.ma(a)
    };
    Z.prototype.ma=function(a){
        for(var b=0,c;c=this.p[b];b++)if(a.V>=c.V){
            this.p.splice(b,0,a);
            return
        }
        this.p.push(a)
    };

    Z.prototype.pb=function(){
        0>=$(this)||rc(this.o,k)
    };

    var Hc=k,Ic=j,Y=j,T=j,Jc=new fa("basketball/basketball12-hp-init.png",[[0,725,530,207],[0,710,236,12],[71,565,236,52],[94,454,30,30],[0,210,530,207],[0,420,68,129],[0,0,530,207],[0,565,68,129],[163,420,150,142],[316,420,150,142],[373,565,150,142],[533,0,45,38],[533,41,20,31],[310,565,4,31],[533,75,20,31],[141,488,19,31],[533,710,20,31],[71,454,20,31],[533,439,20,31],[533,473,19,31],[533,507,19,31],[71,420,20,31],[310,606,27,26],[533,541,67,69],[533,135,67,73],[533,211,67,73],[533,363,67,73],[71,
        488,67,73],[533,287,67,73],[340,606,30,29],[310,599,54,4],[533,109,20,23],[556,710,16,16]]),Kc=new fa("basketball/basketball12-hp-anim.png",[[0,1756,68,129],[0,1888,68,129],[0,3724,68,129],[0,8820,68,129],[0,9612,68,129],[0,7196,68,129],[0,3380,68,129],[0,4384,68,129],[0,3856,68,129],[0,5744,68,129],[0,832,73,129],[0,3116,73,129],[0,9956,73,129],[0,8120,73,129],[0,6008,68,129],[0,8252,68,129],[0,7988,68,129],[0,10220,68,129],[0,10088,68,129],[0,7460,68,129],[0,8384,68,129],[0,2284,68,129],[0,3592,
        68,129],[0,4120,68,129],[0,2152,68,129],[0,264,68,129],[0,2812,68,129],[0,132,68,129],[0,6140,68,129],[0,4648,68,129],[0,4780,68,129],[0,4952,68,129],[0,10484,68,129],[0,7328,68,129],[0,9824,68,129],[0,10616,68,129],[0,2020,68,129],[0,8648,68,129],[0,1492,68,129],[0,3248,68,129],[0,4252,68,129],[0,5876,68,129],[0,8952,68,129],[0,5084,68,129],[0,2548,68,129],[0,7856,68,129],[0,7592,68,129],[0,528,68,129],[0,5348,68,129],[0,2944,68,129],[0,7724,68,129],[0,700,68,129],[0,8516,68,129],[0,9216,68,129],
        [0,4516,68,129],[0,9348,68,129],[0,6272,68,129],[0,2416,68,129],[0,9480,68,129],[0,6800,68,129],[0,5216,68,129],[0,7064,68,129],[0,2680,68,129],[0,6404,68,129],[0,10352,68,129],[0,10748,68,129],[0,3988,68,129],[0,1228,68,129],[0,1624,68,129],[0,0,68,129],[0,6932,68,129],[0,964,68,129],[0,1096,68,129],[0,5480,68,129],[0,1360,68,129],[0,396,68,129],[0,5612,68,129],[0,9084,68,129],[0,6536,68,129],[0,6668,68,129],[0,8780,45,37],[0,4912,45,37],[0,9784,45,37],[0,9744,45,37],[0,3512,45,37],[0,3076,45,37],
        [0,660,45,37],[0,3552,45,37]]),Lc=j,Gc=k,V=function(){
        return(new Date).getTime()
    },Mc=function(){
        if(!Hc&&(ia=k,Ic=document.getElementById("hplogo")))if((Y=document.getElementById("hplogo-c"))&&Y.getContext)if(T=Y.getContext("2d"))Hc=i,Gc=k,G=Ic,google.doodle&&google.doodle.alt&&Ic.setAttribute("aria-label",google.doodle.alt),ha(Jc,function(){
            Lc=new Z(Jc,Kc);
            Cc(Lc);
            ha(Kc,function(){})
        })
    },Nc=function(){
        return document.activeElement!=G
    },Oc=function(){
        var a=window.google;
        if(a){
            var b=a.msg,c=function(){
                var a=
                b&&b.unlisten;
                a&&(a(67,c),Nc&&a(94,Nc));
                Lc&&Lc.stop();
                Hc=k;
                Jb=ia=i;
                G&&(G.innerHTML="");
                L=k;
                return i
            };

            if(!a.doodle||!a.doodle.jesr)aa("google.doodle.jesr",i),a.rein&&a.dstr&&(a.rein.push(Mc),a.dstr.push(c));
            var a=a.psy,d=b&&b.listen;
            a&&(a.q&&d)&&(d(67,c),Nc&&d(94,Nc))
        }
        Mc()
    },Pc=window.google;
    Pc&&Pc.x?Pc.x({
        id:"DOODLE"
    },Oc):Oc();
})();
