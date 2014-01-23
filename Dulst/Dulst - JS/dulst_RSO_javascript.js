//Here we go...

function flashMessage( e ) {
  $( document ).one( "mousemove" , function( t ) {
    $( "#jquery-notify-elem" ).remove();
    var n = $( "<div />", {
      id     : "jquery-notify-elem",
      "class": "notification-message flashMessage ui-tooltip"
    });

    n.html('<div class="ui-tooltip-content">
            <div class="main-message">' + e + '</div>
            <div class="dismiss-message">(Click on this box to dismiss)</div>
            </div>'),

    n.css( {
      left: t.pageX,
      top : t.pageY
    }).click( function() {
      n.remove()
    }).appendTo( "body" ).show()
  })
}

!function( e, t ) {
  function n( e ) {
    var t = pt[ e ] = {};
    return K.each( e.split( tt ),
    function( e , n ) {
      t[ n ] =! 0
    }),
    t
  }

  function i( e, n, i) {
    if ( i === t && 1 === e.nodeType) {
      var o = "data-" + n.replace( gt, "-$1").toLowerCase();
      if ( i = e.getAttribute( o ) , "string" == typeof i) {
        try {
          i = "true" === i? 
            !0               : "false" === i?
            !1               : "null" === i?
            null             : + i + "" === i?
            + i              : mt.test( i )?
            K.parseJSON( i ) : i
        } catch( r ) {} K.data( e, n, i)
      } else 
        i = t
    }
    return i
  }

  function o( e ) {
    var t;
    for (t in e)
      if(( "data" !== t || !K.isEmptyObject( e[ t ] )) && "toJSON" !== t)
        return !1;
    return !0
  }

  function r() {
    return !1
  }

  function s() {
    return !0
  }

  function a( e ) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType
  }

  function l( e, t ) {
    do e = e[ t ];
    while ( e && 1 !== e.nodeType );
    return e
  }

  function c( e, t, n ) {
    if ( t = t || 0, K.isFunction( t ))
      return K.grep( e, function( e, i ) {
        var o =!! t.call( e, i, e );
        return o === n
      });

    if( t.nodeType )
      return K.grep( e, function( e ) {
        return e === t === n
      });

    if("string"==typeof t) {
      var i=K.grep(e,function(e) {
        return 1===e.nodeType
      });

      if ( Lt.test( t ))
        return K.filter( t, i, !n );
      t = K.filter( t, i )
    }

    return K.grep( e, function( e ) {
      return K.inArray( e ,t ) >= 0 === n
    })
  }

  function d( e ) {
    var t = Bt.split("|"), n = e.createDocumentFragment();
    if ( n.createElement ) 
      for (; t.length;)
        n.createElement( t.pop() );
    return n
  }

  function u( e, t ) {
    return e.getElementsByTagName( t )[0] || e.appendChild(e.ownerDocument.createElement(t))
  }

  function h( e, t ) {
    if ( 1 === t.nodeType && K.hasData(e)) {
      var n, i, o, r = K._data(e), s = K._data(t ,r ), a = r.events;
      if ( a ) {
        delete s.handle,s.events = {};
        for ( n in a )
          for ( i = 0, o = a[ n ].length;  o > i; i++)
            K.event.add( t, n, a[ n ][ i ])
      }
      s.data && ( s.data = K.extend( {},s.data))
    }
  }
  //Done till here, katon please continue after me. .-.
  function f(e,t) {
    var n;
    1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),K.support.html5Clone&&e.innerHTML&&!K.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Yt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(K.expando))
  }
  function p(e) {
    return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]
  }
  function m(e) {
    Yt.test(e.type)&&(e.defaultChecked=e.checked)
  }
  function g(e,t) {
    if(t in e)return t;
    for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,o=vn.length; o--;)if(t=vn[o]+n,t in e)return t;
    return i
  }
  function y(e,t) {
    return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)
  }
  function v(e,t) {
    for(var n,i,o=[],r=0,s=e.length; s>r; r++)n=e[r],n.style&&(o[r]=K._data(n,"olddisplay"),t?(o[r]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&y(n)&&(o[r]=K._data(n,"olddisplay",x(n.nodeName)))):(i=nn(n,"display"),o[r]||"none"===i||K._data(n,"olddisplay",i)));
    for(r=0; s>r; r++)n=e[r],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?o[r]||"":"none"));
    return e
  }
  function b(e,t,n) {
    var i=un.exec(t);
    return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t
  }
  function w(e,t,n,i) {
    for(var o=n===(i?"border":"content")?4:"width"===t?1:0,r=0; 4>o; o+=2)"margin"===n&&(r+=K.css(e,n+yn[o],!0)),i?("content"===n&&(r-=parseFloat(nn(e,"padding"+yn[o]))||0),"margin"!==n&&(r-=parseFloat(nn(e,"border"+yn[o]+"Width"))||0)):(r+=parseFloat(nn(e,"padding"+yn[o]))||0,"padding"!==n&&(r+=parseFloat(nn(e,"border"+yn[o]+"Width"))||0));
    return r
  }
  function C(e,t,n) {
    var i="width"===t?e.offsetWidth:e.offsetHeight,o=!0,r=K.support.boxSizing&&"border-box"===K.css(e,"boxSizing");
    if(0>=i||null==i) {
      if(i=nn(e,t),(0>i||null==i)&&(i=e.style[t]),hn.test(i))return i;
      o=r&&(K.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
    }
        return i+w(e,t,n||(r?"border":"content"),o)+"px"
  }
  function x(e) {
    if(pn[e])return pn[e];
    var t=K("<"+e+">").appendTo(z.body),n=t.css("display");
    return t.remove(),("none"===n||""===n)&&(on=z.body.appendChild(on||K.extend(z.createElement("iframe"), {frameBorder:0,width:0,height:0})),rn&&on.createElement||(rn=(on.contentWindow||on.contentDocument).document,rn.write("<!doctype html><html><body>"),rn.close()),t=rn.body.appendChild(rn.createElement(e)),n=nn(t,"display"),z.body.removeChild(on)),pn[e]=n,n
  }
  function _(e,t,n,i) {
    var o;
    if(K.isArray(t))K.each(t,function(t,o) {
      n||Cn.test(e)?i(e,o):_(e+"["+("object"==typeof o?t:"")+"]",o,n,i)
    });
    else if(n||"object"!==K.type(t))i(e,t);
    else for(o in t)_(e+"["+o+"]",t[o],n,i)
      }
  function k(e) {
    return function(t,n) {"string"!=typeof t&&(n=t,t="*");
      var i,o,r,s=t.toLowerCase().split(tt),a=0,l=s.length;
      if(K.isFunction(n))for(; l>a; a++)i=s[a],r=/^\+/.test(i),r&&(i=i.substr(1)||"*"),o=e[i]=e[i]||[],o[r?"unshift":"push"](n)
        }
  }
  function T(e,n,i,o,r,s) {
    r=r||n.dataTypes[0],s=s|| {},s[r]=!0;
    for(var a,l=e[r],c=0,d=l?l.length:0,u=e===Rn; d>c&&(u||!a); c++)a=l[c](n,i,o),"string"==typeof a&&(!u||s[a]?a=t:(n.dataTypes.unshift(a),a=T(e,n,i,o,a,s)));
    return!u&&a||s["*"]||(a=T(e,n,i,o,"*",s)),a
  }
  function S(e,n) {
    var i,o,r=K.ajaxSettings.flatOptions|| {};
    for(i in n)n[i]!==t&&((r[i]?e:o||(o= {}))[i]=n[i]);
    o&&K.extend(!0,e,o)
  }
  function E(e,n,i) {
    var o,r,s,a,l=e.contents,c=e.dataTypes,d=e.responseFields;
    for(r in d)r in i&&(n[d[r]]=i[r]);
    for(; "*"===c[0];)c.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("content-type"));
    if(o)for(r in l)if(l[r]&&l[r].test(o)) {
          c.unshift(r);
          break
        }
    if(c[0]in i)s=c[0];
    else {
      for(r in i) {
        if(!c[0]||e.converters[r+" "+c[0]]) {
          s=r;
          break
        }
        a||(a=r)
      }
      s=s||a
    }
      return s?(s!==c[0]&&c.unshift(s),i[s]):void 0
  }
  function I(e,t) {
    var n,i,o,r,s=e.dataTypes.slice(), a = s[0], l = {} , c = 0;
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1]) for (n in e.converters)l[n.toLowerCase()]=e.converters[n];
    for(; o=s[++c];)if("*"!==o) {
        if("*"!==a&&a!==o) {
          if(n = l[a+" "+o] || l["* "+o], !n) 
            for(i in l)
              if(r=i.split(" ") , r[1] === o && (n = l[a+" "+r[0]] || l["* " + r[0]])) {
                n === !0? n = l[i]:l[i] !==! 0 && (o = r[0], s.splice(c--,0,o));
                break
              }
          if (n !==! 0)
            if ( n && e["throws"])
              t = n(t);
            else try {
              t = n(t)
            } catch(d) {
              return {
                state:"parsererror"
                , error: n?d:"No conversion from "+a+" to "+o
              }
            }
        }
      a = o
    }
    return {
      state:"success",
      data: t
    }
  }
  function N() {
    try {
      return new e.XMLHttpRequest
    } catch(t) {}
  } function D() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch(t) {}
  } function $() {
    return setTimeout(function() {
      Xn=t
    },0),Xn=K.now()
  }
  function P(e,t) {
    K.each(t,function(t,n) {
      for(var i=(ei[t]||[]).concat(ei["*"]),o=0,r=i.length; r>o; o++)if(i[o].call(e,t,n))return
        })
  }
  function A(e,t,n) {
    var i,o=0,r=Zn.length,s=K.Deferred().always(function() {
      delete a.elem
}),a=function() {for(var t=Xn||$(),n=Math.max(0,l.startTime+l.duration-t),i=1-(n/l.duration||0),o=0,r=l.tweens.length; r>o; o++)l.tweens[o].run(i); return s.notifyWith(e,[l,i,n]),1>i&&r?n:(s.resolveWith(e,[l]),!1)},l=s.promise( {elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||$(),duration:n.duration,tweens:[],createTween:function(t,n) {
      var i=K.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);
      return l.tweens.push(i),i
},stop:function(t) {
      for(var n=0,i=t?l.tweens.length:0; i>n; n++)l.tweens[n].run(1);
      return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this
    }
                                                                                                                                                                                                                                        }),c=l.props;
    for(O(c,l.opts.specialEasing); r>o; o++)if(i=Zn[o].call(l,e,c,l.opts))return i;
return P(l,c),K.isFunction(l.opts.start)&&l.opts.start.call(e,l),K.fx.timer(K.extend(a, {anim:l,queue:l.opts.queue,elem:e})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }
  function O(e,t) {
    var n,i,o,r,s;
    for(n in e)if(i=K.camelCase(n),o=t[i],r=e[n],K.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=K.cssHooks[i],s&&"expand"in s) {
        r=s.expand(r),delete e[i];
        for(n in r)n in e||(e[n]=r[n],t[n]=o)
        } else t[i]=o
      }
  function M(e,t,n) {
    var i,o,r,s,a,l,c,d,u=this,h=e.style,f= {},p=[],m=e.nodeType&&y(e);
    n.queue||(c=K._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,d=c.empty.fire,c.empty.fire=function() {
      c.unqueued||d()
    }),c.unqueued++,u.always(function() {
      u.always(function() {
        c.unqueued--,K.queue(e,"fx").length||c.empty.fire()
      })
    })),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===K.css(e,"display")&&"none"===K.css(e,"float")&&(K.support.inlineBlockNeedsLayout&&"inline"!==x(e.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",K.support.shrinkWrapBlocks||u.done(function() {
      h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]
    }));
    for(i in t)if(r=t[i],Jn.exec(r)) {
        if(delete t[i],r===(m?"hide":"show"))continue;
        p.push(i)
      }
    if(s=p.length)for(a=K._data(e,"fxshow")||K._data(e,"fxshow", {}),m?K(e).show():u.done(function() {
      K(e).hide()
      }),u.done(function() {
      var t;
      K.removeData(e,"fxshow",!0);
      for(t in f)K.style(e,t,f[t])
      }),i=0; s>i; i++)o=p[i],l=u.createTween(o,m?a[o]:0),f[o]=a[o]||K.style(e,o),o in a||(a[o]=l.start,m&&(l.end=l.start,l.start="width"===o||"height"===o?1:0))
  }
  function L(e,t,n,i,o) {
    return new L.prototype.init(e,t,n,i,o)
  }
  function R(e,t) {
var n,i= {height:
              e
             },o=0;
    for(t=t?1:0; 4>o; o+=2-t)n=yn[o],i["margin"+n]=i["padding"+n]=e;
    return t&&(i.opacity=i.width=e),i
  }
  function j(e) {
    return K.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
  }
var B,H,z=e.document,F=e.location,q=e.navigator,W=e.jQuery,V=e.$,U=Array.prototype.push,G=Array.prototype.slice,X=Array.prototype.indexOf,Y=Object.prototype.toString,J=Object.prototype.hasOwnProperty,Q=String.prototype.trim,K=function(e,t) {return new K.fn.init(e,t,B)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,et=/\S/,tt=/\s+/,nt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,it=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,ot=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rt=/^[\],:{}\s]*$/,st=/(?:^|:|,)(?:\s*\[)+/g,at=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,lt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ct=/^-ms-/,dt=/-([\da-z])/gi,ut=function(e,t){return(t+"").toUpperCase()},ht=function(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",ht,!1),K.ready()):"complete"===z.readyState&&(z.detachEvent("onreadystatechange",ht),K.ready())},ft={};K.fn=K.prototype={constructor:K,init:function(e,n,i){var o,r,s;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("string"==typeof e){if(o="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:it.exec(e),!o||!o[1]&&n)return!n||n.jquery?(n||i).find(e):this.constructor(n).find(e);if(o[1])return n=n instanceof K?n[0]:n,s=n&&n.nodeType?n.ownerDocument||n:z,e=K.parseHTML(o[1],s,!0),ot.test(o[1])&&K.isPlainObject(n)&&this.attr.call(e,n,!0),K.merge(this,e);if(r=z.getElementById(o[2]),r&&r.parentNode){if(r.id!==o[2])return i.find(e);this.length=1,this[0]=r}return this.context=z,this.selector=e,this}return K.isFunction(e)?i.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return G.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e,t,n){var i=K.merge(this.constructor(),e);return i.prevObject=this,i.context=this.context,"find"===t?i.selector=this.selector+(this.selector?" ":"")+n:t&&(i.selector=this.selector+"."+t+"("+n+")"),i},each:function(e,t){return K.each(this,e,t)},ready:function(e){return K.ready.promise().done(e),this},eq:function(e){return e=+e,-1===e?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:[].sort,splice:[].splice},K.fn.init.prototype=K.fn,K.extend=K.fn.extend=function(){var e,n,i,o,r,s,a=arguments[0]||{},l=1,c=arguments.length,d=!1;for("boolean"==typeof a&&(d=a,a=arguments[1]||{},l=2),"object"==typeof a||K.isFunction(a)||(a={}),c===l&&(a=this,--l);c>l;l++)if(null!=(e=arguments[l]))for(n in e)i=a[n],o=e[n],a!==o&&(d&&o&&(K.isPlainObject(o)||(r=K.isArray(o)))?(r?(r=!1,s=i&&K.isArray(i)?i:[]):s=i&&K.isPlainObject(i)?i:{},a[n]=K.extend(d,s,o)):o!==t&&(a[n]=o));return a},K.extend({noConflict:function(t){return e.$===K&&(e.$=V),t&&e.jQuery===K&&(e.jQuery=W),K},isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){if(e===!0?!--K.readyWait:!K.isReady){if(!z.body)return setTimeout(K.ready,1);K.isReady=!0,e!==!0&&--K.readyWait>0||(H.resolveWith(z,[K]),K.fn.trigger&&K(z).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray||function(e){return"array"===K.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):ft[Y.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==K.type(e)||e.nodeType||K.isWindow(e))return!1;try{if(e.constructor&&!J.call(e,"constructor")&&!J.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var i;for(i in e);return i===t||J.call(e,i)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var i;return e&&"string"==typeof e?("boolean"==typeof t&&(n=t,t=0),t=t||z,(i=ot.exec(e))?[t.createElement(i[1])]:(i=K.buildFragment([e],t,n?null:[]),K.merge([],(i.cacheable?K.clone(i.fragment):i.fragment).childNodes))):null},parseJSON:function(t){return t&&"string"==typeof t?(t=K.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):rt.test(t.replace(at,"@").replace(lt,"]").replace(st,""))?new Function("return "+t)():(K.error("Invalid JSON: "+t),void 0)):null},parseXML:function(n){var i,o;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(o=new DOMParser,i=o.parseFromString(n,"text/xml")):(i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n))}catch(r){i=t}return i&&i.documentElement&&!i.getElementsByTagName("parsererror").length||K.error("Invalid XML: "+n),i},noop:function(){},globalEval:function(t){t&&et.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ct,"ms-").replace(dt,ut)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,i){var o,r=0,s=e.length,a=s===t||K.isFunction(e);if(i)if(a){for(o in e)if(n.apply(e[o],i)===!1)break}else for(;s>r&&n.apply(e[r++],i)!==!1;);else if(a){for(o in e)if(n.call(e[o],o,e[o])===!1)break}else for(;s>r&&n.call(e[r],r,e[r++])!==!1;);return e},trim:Q&&!Q.call("﻿� ")?function(e){return null==e?"":Q.call(e)}:function(e){return null==e?"":(e+"").replace(nt,"")},makeArray:function(e,t){var n,i=t||[];return null!=e&&(n=K.type(e),null==e.length||"string"===n||"function"===n||"regexp"===n||K.isWindow(e)?U.call(i,e):K.merge(i,e)),i},inArray:function(e,t,n){var i;if(t){if(X)return X.call(t,e,n);for(i=t.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var i=n.length,o=e.length,r=0;if("number"==typeof i)for(;i>r;r++)e[o++]=n[r];else for(;n[r]!==t;)e[o++]=n[r++];return e.length=o,e},grep:function(e,t,n){var i,o=[],r=0,s=e.length;for(n=!!n;s>r;r++)i=!!t(e[r],r),n!==i&&o.push(e[r]);return o},map:function(e,n,i){var o,r,s=[],a=0,l=e.length,c=e instanceof K||l!==t&&"number"==typeof l&&(l>0&&e[0]&&e[l-1]||0===l||K.isArray(e));if(c)for(;l>a;a++)o=n(e[a],a,i),null!=o&&(s[s.length]=o);else for(r in e)o=n(e[r],r,i),null!=o&&(s[s.length]=o);return s.concat.apply([],s)},guid:1,proxy:function(e,n){var i,o,r;return"string"==typeof n&&(i=e[n],n=e,e=i),K.isFunction(e)?(o=G.call(arguments,2),r=function(){return e.apply(n,o.concat(G.call(arguments)))},r.guid=e.guid=e.guid||K.guid++,r):t},access:function(e,n,i,o,r,s,a){var l,c=null==i,d=0,u=e.length;if(i&&"object"==typeof i){for(d in i)K.access(e,n,d,i[d],1,s,o);r=1}else if(o!==t){if(l=a===t&&K.isFunction(o),c&&(l?(l=n,n=function(e,t,n){return l.call(K(e),n)}):(n.call(e,o),n=null)),n)for(;u>d;d++)n(e[d],i,l?o.call(e[d],d,n(e[d],i)):o,a);r=1}return r?e:c?n.call(e):u?n(e[0],i):s},now:function(){return(new Date).getTime()}}),K.ready.promise=function(t){if(!H)if(H=K.Deferred(),"complete"===z.readyState)setTimeout(K.ready,1);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",ht,!1),e.addEventListener("load",K.ready,!1);else{z.attachEvent("onreadystatechange",ht),e.attachEvent("onload",K.ready);var n=!1;try{n=null==e.frameElement&&z.documentElement}catch(i){}n&&n.doScroll&&!function o(){if(!K.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}K.ready()}}()}return H.promise(t)},K.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){ft["[object "+t+"]"]=t.toLowerCase()}),B=K(z);var pt={};K.Callbacks=function(e){e="string"==typeof e?pt[e]||n(e):K.extend({},e);var i,o,r,s,a,l,c=[],d=!e.once&&[],u=function(t){for(i=e.memory&&t,o=!0,l=s||0,s=0,a=c.length,r=!0;c&&a>l;l++)if(c[l].apply(t[0],t[1])===!1&&e.stopOnFalse){i=!1;break}r=!1,c&&(d?d.length&&u(d.shift()):i?c=[]:h.disable())},h={add:function(){if(c){var t=c.length;
        !function n(t) {
          K.each(t,function(t,i) {
            var o=K.type(i); "function"
            !==o||e.unique&&h.has(i)?i&&i.length&&"string"!==o&&n(i):c.push(i)
          })
        }(arguments),r?a=c.length:i&&(s=t,u(i))
      }
                       return this
},remove:
    function() {
      return c&&K.each(arguments,function(e,t) {
        for(var n; (n=K.inArray(t,c,n))>-1;)c.splice(n,1),r&&(a>=n&&a--,l>=n&&l--)
        }),this
},has:
function(e) {return K.inArray(e,c)>-1},empty:
function() {return c=[],this},disable:
function() {return c=d=i=t,this},disabled:
function() {return!c},lock:
function() {return d=t,i||h.disable(),this},locked:
function() {return!d},fireWith:
function(e,t) {return t=t||[],t=[e,t.slice?t.slice():t],!c||o&&!d||(r?d.push(t):u(t)),this},fire:
function() {return h.fireWith(this,arguments),this},fired:
    function() {
      return!!o
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             };
    return h
},K.extend( {Deferred:function(e) {
var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i= {state:
function(){return n},always:
function(){return o.done(arguments).fail(arguments),this},then:
    function() {
      var e=arguments;
      return K.Deferred(function(n) {
        K.each(t,function(t,i) {
          var r=i[0],s=e[t];
          o[i[1]](K.isFunction(s)?function() {
            var e=s.apply(this,arguments);
            e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r+"With"](this===o?n:this,[e])
}:n[r])
        }),e=null
      }).promise()
},promise:
    function(e) {
      return null!=e?K.extend(e,i):i
    }
                                                                                                                                                                                        },o= {};
    return i.pipe=i.then,K.each(t,function(e,r) {
      var s=r[2],a=r[3];
      i[r[1]]=s.add,a&&s.add(function() {
        n=a
      },t[1^e][2].disable,t[2][2].lock),o[r[0]]=s.fire,o[r[0]+"With"]=s.fireWith
    }),i.promise(o),e&&e.call(o,o),o
},when:function(e) {
    var t,n,i,o=0,r=G.call(arguments),s=r.length,a=1!==s||e&&K.isFunction(e.promise)?s:0,l=1===a?e:K.Deferred(),c=function(e,n,i) {
      return function(o) {
        n[e]=this,i[e]=arguments.length>1?G.call(arguments):o,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)
      }
    };
    if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s); s>o; o++)r[o]&&K.isFunction(r[o].promise)?r[o].promise().done(c(o,i,r)).fail(l.reject).progress(c(o,n,t)):--a;
    return a||l.resolveWith(i,r),l.promise()
  }
  }),K.support=function() {
    var t,n,i,o,r,s,a,l,c,d,u,h=z.createElement("div");
    if(h.setAttribute("className","t"),h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=h.getElementsByTagName("*"),i=h.getElementsByTagName("a")[0],i.style.cssText="top:1px;float:left;opacity:.5",!n||!n.length)return {};
o=z.createElement("select"),r=o.appendChild(z.createElement("option")),s=h.getElementsByTagName("input")[0],t= {leadingWhitespace:3===h.firstChild.nodeType,tbody:
                              !h.getElementsByTagName("tbody").length,htmlSerialize:
                              !!h.getElementsByTagName("link").length,style:
                              /top/.test(i.getAttribute("style")),hrefNormalized:"/a"
                              ===i.getAttribute("href"),opacity:
                              /^0.5/.test(i.style.opacity),cssFloat:
                              !!i.style.cssFloat,checkOn:"on"
                              ===s.value,optSelected:
                              r.selected,getSetAttribute:"t"
                              !==h.className,enctype:
                              !!z.createElement("form").enctype,html5Clone:"<:nav></:nav>"
                              !==z.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"
                              ===z.compatMode,submitBubbles:
                              !0,changeBubbles:
                              !0,focusinBubbles:
                              !1,deleteExpando:
                              !0,noCloneEvent:
                              !0,inlineBlockNeedsLayout:
                              !1,shrinkWrapBlocks:
                              !1,reliableMarginRight:
                              !0,boxSizingReliable:
                              !0,pixelPosition:
                                  !1
                                                                                                                   },s.checked=!0,t.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!r.disabled;
    try {
      delete h.test
    } catch(f) {
      t.deleteExpando=!1
    }
    if(!h.addEventListener&&h.attachEvent&&h.fireEvent&&(h.attachEvent("onclick",u=function() {
    t.noCloneEvent=!1
  }),h.cloneNode(!0).fireEvent("onclick"),h.detachEvent("onclick",u)),s=z.createElement("input"),s.value="t",s.setAttribute("type","radio"),t.radioValue="t"===s.value,s.setAttribute("checked","checked"),s.setAttribute("name","t"),h.appendChild(s),a=z.createDocumentFragment(),a.appendChild(h.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=s.checked,a.removeChild(s),a.appendChild(h),h.attachEvent)for(c in {submit:!0,change:!0,focusin:!0})l="on"+c,d=l in h,d||(h.setAttribute(l,"return;"),d="function"==typeof h[l]),t[c+"Bubbles"]=d;
    return K(function() {
      var n,i,o,r,s="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=z.getElementsByTagName("body")[0];
a&&(n=z.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),i=z.createElement("div"),n.appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=i.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=d&&0===o[0].offsetHeight,i.innerHTML="",i.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===i.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)|| {}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)|| {width:"4px"}).width,r=z.createElement("div"),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",i.appendChild(r),t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)|| {}).marginRight)),"undefined"!=typeof i.style.zoom&&(i.innerHTML="",i.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===i.offsetWidth,i.style.display="block",i.style.overflow="visible",i.innerHTML="<div></div>",i.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==i.offsetWidth,n.style.zoom=1),a.removeChild(n),n=i=o=r=null)
    }),a.removeChild(h),n=i=o=r=s=a=h=null,t
  }();
      var mt=/(?:\ {[\s\S]*\
                   }|\[[\s\S]*\])$/,gt=/([A-Z])/g;
K.extend( {cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(K.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e) {
    return e=e.nodeType?K.cache[e[K.expando]]:e[K.expando],!!e&&!o(e)
},data:function(e,n,i,o) {
    if(K.acceptData(e)) {
      var r,s,a=K.expando,l="string"==typeof n,c=e.nodeType,d=c?K.cache:e,u=c?e[a]:e[a]&&a;
      if(u&&d[u]&&(o||d[u].data)||!l||i!==t)return u||(c?e[a]=u=K.deletedIds.pop()||K.guid++:u=a),d[u]||(d[u]= {},c||(d[u].toJSON=K.noop)),("object"==typeof n||"function"==typeof n)&&(o?d[u]=K.extend(d[u],n):d[u].data=K.extend(d[u].data,n)),r=d[u],o||(r.data||(r.data= {}),r=r.data),i!==t&&(r[K.camelCase(n)]=i),l?(s=r[n],null==s&&(s=r[K.camelCase(n)])):s=r,s
      }
},removeData:function(e,t,n) {
    if(K.acceptData(e)) {
      var i,r,s,a=e.nodeType,l=a?K.cache:e,c=a?e[K.expando]:K.expando;
      if(l[c]) {
        if(t&&(i=n?l[c]:l[c].data)) {
          K.isArray(t)||(t in i?t=[t]:(t=K.camelCase(t),t=t in i?[t]:t.split(" ")));
          for(r=0,s=t.length; s>r; r++)delete i[t[r]];
          if(!(n?o:K.isEmptyObject)(i))return
          }(n||(delete l[c].data,o(l[c])))&&(a?K.cleanData([e],!0):K.support.deleteExpando||l!=l.window?delete l[c]:l[c]=null)
      }
    }
},_data:function(e,t,n) {
    return K.data(e,t,n,!0)
},acceptData:function(e) {
    var t=e.nodeName&&K.noData[e.nodeName.toLowerCase()];
    return!t||t!==!0&&e.getAttribute("classid")===t
  }
}),K.fn.extend( {data:function(e,n) {
    var o,r,s,a,l,c=this[0],d=0,u=null;
    if(e===t) {
      if(this.length&&(u=K.data(c),1===c.nodeType&&!K._data(c,"parsedAttrs"))) {
        for(s=c.attributes,l=s.length; l>d; d++)a=s[d].name,a.indexOf("data-")||(a=K.camelCase(a.substring(5)),i(c,a,u[a]));
        K._data(c,"parsedAttrs",!0)
      }
      return u
    }
    return"object"==typeof e?this.each(function() {
      K.data(this,e)
    }):(o=e.split(".",2),o[1]=o[1]?"."+o[1]:"",r=o[1]+"!",K.access(this,function(n) {
      return n===t?(u=this.triggerHandler("getData"+r,[o[0]]),u===t&&c&&(u=K.data(c,e),u=i(c,e,u)),u===t&&o[1]?this.data(o[0]):u):(o[1]=n,this.each(function() {
        var t=K(this);
        t.triggerHandler("setData"+r,o),K.data(this,e,n),t.triggerHandler("changeData"+r,o)
      }),void 0)
    },null,n,arguments.length>1,null,!1))
},removeData:function(e) {
    return this.each(function() {
      K.removeData(this,e)
    })
  }
}),K.extend( {queue:function(e,t,n) {
    var i;
    return e?(t=(t||"fx")+"queue",i=K._data(e,t),n&&(!i||K.isArray(n)?i=K._data(e,t,K.makeArray(n)):i.push(n)),i||[]):void 0
},dequeue:function(e,t) {
    t=t||"fx";
    var n=K.queue(e,t),i=n.length,o=n.shift(),r=K._queueHooks(e,t),s=function() {
      K.dequeue(e,t)
    }; "inprogress"
    ===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()
},_queueHooks:function(e,t) {
    var n=t+"queueHooks";
return K._data(e,n)||K._data(e,n, {empty:K.Callbacks("once memory").add(function() {
      K.removeData(e,t+"queue",!0),K.removeData(e,n,!0)
    })
                                      })
  }
}),K.fn.extend( {queue:function(e,n) {
    var i=2;
    return"string"!=typeof e&&(n=e,e="fx",i--),arguments.length<i?K.queue(this[0],e):n===t?this:this.each(function() {
      var t=K.queue(this,e,n);
      K._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&K.dequeue(this,e)
    })
},dequeue:function(e) {
    return this.each(function() {
      K.dequeue(this,e)
    })
},delay:function(e,t) {
    return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n) {
      var i=setTimeout(t,e);
      n.stop=function() {
        clearTimeout(i)
      }
    })
},clearQueue:function(e) {
    return this.queue(e||"fx",[])
},promise:function(e,n) {
    var i,o=1,r=K.Deferred(),s=this,a=this.length,l=function() {
      --o||r.resolveWith(s,[s])
    };
    for("string"!=typeof e&&(n=e,e=t),e=e||"fx"; a--;)i=K._data(s[a],e+"queueHooks"),i&&i.empty&&(o++,i.empty.add(l));
    return l(),r.promise(n)
  }
                                                             });
      var yt,vt,bt,wt=/[\t\r\n]/g,Ct=/\r/g,xt=/^(?:button|input)$/i,_t=/^(?:button|input|object|select|textarea)$/i,kt=/^a(?:rea|)$/i,Tt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,St=K.support.getSetAttribute;
K.fn.extend( {attr:function(e,t) {
    return K.access(this,K.attr,e,t,arguments.length>1)
},removeAttr:function(e) {
    return this.each(function() {
      K.removeAttr(this,e)
    })
},prop:function(e,t) {
    return K.access(this,K.prop,e,t,arguments.length>1)
},removeProp:function(e) {
    return e=K.propFix[e]||e,this.each(function() {
      try {
        this[e]=t,delete this[e]
      } catch(n) {}
    })
},addClass:function(e) {
    var t,n,i,o,r,s,a;
    if(K.isFunction(e))return this.each(function(t) {
      K(this).addClass(e.call(this,t,this.className))
    });
    if(e&&"string"==typeof e)for(t=e.split(tt),n=0,i=this.length; i>n; n++)if(o=this[n],1===o.nodeType)if(o.className||1!==t.length) {
            for(r=" "+o.className+" ",s=0,a=t.length; a>s; s++)r.indexOf(" "+t[s]+" ")<0&&(r+=t[s]+" ");
            o.className=K.trim(r)
          } else o.className=e;
    return this
},removeClass:function(e) {
    var n,i,o,r,s,a,l;
    if(K.isFunction(e))return this.each(function(t) {
      K(this).removeClass(e.call(this,t,this.className))
    });
    if(e&&"string"==typeof e||e===t)for(n=(e||"").split(tt),a=0,l=this.length; l>a; a++)if(o=this[a],1===o.nodeType&&o.className) {
          for(i=(" "+o.className+" ").replace(wt," "),r=0,s=n.length; s>r; r++)for(; i.indexOf(" "+n[r]+" ")>=0;)i=i.replace(" "+n[r]+" "," ");
          o.className=e?K.trim(i):""
        }
                return this
},toggleClass:function(e,t) {
    var n=typeof e,i="boolean"==typeof t;
    return K.isFunction(e)?this.each(function(n) {
      K(this).toggleClass(e.call(this,n,this.className,t),t)
    }):this.each(function() {
      if("string"===n)for(var o,r=0,s=K(this),a=t,l=e.split(tt); o=l[r++];)a=i?a:!s.hasClass(o),s[a?"addClass":"removeClass"](o);
      else("undefined"===n||"boolean"===n)&&(this.className&&K._data(this,"__className__",this.className),this.className=this.className||e===!1?"":K._data(this,"__className__")||"")
      })
},hasClass:function(e) {
    for(var t=" "+e+" ",n=0,i=this.length; i>n; n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(wt," ").indexOf(t)>=0)return!0;
    return!1
},val:function(e) {
    var n,i,o,r=this[0];
    {
      if(arguments.length)return o=K.isFunction(e),this.each(function(i) {
        var r,s=K(this);
        1===this.nodeType&&(r=o?e.call(this,i,s.val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,function(e) {
          return null==e?"":e+""
        })),n=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,r,"value")!==t||(this.value=r))
      });
      if(r)return n=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()],n&&"get"in n&&(i=n.get(r,"value"))!==t?i:(i=r.value,"string"==typeof i?i.replace(Ct,""):null==i?"":i)
      }
  }
}),K.extend( {valHooks:{option:{get:function(e) {
        var t=e.attributes.value;
        return!t||t.specified?e.value:e.text
      }
},select:{get:function(e) {
        var t,n,i,o,r=e.selectedIndex,s=[],a=e.options,l="select-one"===e.type;
        if(0>r)return null;
        for(n=l?r:0,i=l?r+1:a.length; i>n; n++)if(o=a[n],!(!o.selected||(K.support.optDisabled?o.disabled:null!==o.getAttribute("disabled"))||o.parentNode.disabled&&K.nodeName(o.parentNode,"optgroup"))) {
            if(t=K(o).val(),l)return t;
            s.push(t)
          }
        return l&&!s.length&&a.length?K(a[r]).val():s
},set:function(e,t) {
        var n=K.makeArray(t);
        return K(e).find("option").each(function() {
          this.selected=K.inArray(K(this).val(),n)>=0
        }),n.length||(e.selectedIndex=-1),n
      }
    }
},attrFn:{},attr:function(e,n,i,o) {
    var r,s,a,l=e.nodeType;
    if(e&&3!==l&&8!==l&&2!==l)return o&&K.isFunction(K.fn[n])?K(e)[n](i):"undefined"==typeof e.getAttribute?K.prop(e,n,i):(a=1!==l||!K.isXMLDoc(e),a&&(n=n.toLowerCase(),s=K.attrHooks[n]||(Tt.test(n)?vt:yt)),i!==t?null===i?(K.removeAttr(e,n),void 0):s&&"set"in s&&a&&(r=s.set(e,i,n))!==t?r:(e.setAttribute(n,i+""),i):s&&"get"in s&&a&&null!==(r=s.get(e,n))?r:(r=e.getAttribute(n),null===r?t:r))
},removeAttr:function(e,t) {
    var n,i,o,r,s=0;
    if(t&&1===e.nodeType)for(i=t.split(tt); s<i.length; s++)o=i[s],o&&(n=K.propFix[o]||o,r=Tt.test(o),r||K.attr(e,o,""),e.removeAttribute(St?o:n),r&&n in e&&(e[n]=!1))
},attrHooks:{type:{set:function(e,t) {
        if(xt.test(e.nodeName)&&e.parentNode)K.error("type property can't be changed");
        else if(!K.support.radioValue&&"radio"===t&&K.nodeName(e,"input")) {
          var n=e.value;
          return e.setAttribute("type",t),n&&(e.value=n),t
        }
      }
},value:{get:function(e,t) {
        return yt&&K.nodeName(e,"button")?yt.get(e,t):t in e?e.value:null
},set:function(e,t,n) {
        return yt&&K.nodeName(e,"button")?yt.set(e,t,n):(e.value=t,void 0)
      }
    }
},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,i) {
    var o,r,s,a=e.nodeType;
if(e&&3!==a&&8!==a&&2!==a)return s=1!==a||!K.isXMLDoc(e),s&&(n=K.propFix[n]||n,r=K.propHooks[n]),i!==t?r&&"set"in r&&(o=r.set(e,i,n))!==t?o:e[n]=i:r&&"get"in r&&null!==(o=r.get(e,n))?o:e[n]
},propHooks:{tabIndex:{get:function(e) {
        var n=e.getAttributeNode("tabindex");
        return n&&n.specified?parseInt(n.value,10):_t.test(e.nodeName)||kt.test(e.nodeName)&&e.href?0:t
      }
    }
  }
                              }),vt= {get:
function(e,n){var i,o=K.prop(e,n); return o===!0||"boolean"!=typeof o&&(i=e.getAttributeNode(n))&&i.nodeValue!==!1?n.toLowerCase():t},set:
  function(e,t,n) {
    var i;
    return t===!1?K.removeAttr(e,n):(i=K.propFix[n]||n,i in e&&(e[i]=!0),e.setAttribute(n,n.toLowerCase())),n
  }
},St||(bt= {name:!0,id:!0,coords:!0},yt=K.valHooks.button= {get:function(e,n) {
    var i;
    return i=e.getAttributeNode(n),i&&(bt[n]?""!==i.value:i.specified)?i.value:t
},set:function(e,t,n) {
    var i=e.getAttributeNode(n);
    return i||(i=z.createAttribute(n),e.setAttributeNode(i)),i.value=t+""
  }
  },K.each(["width","height"],function(e,t) {
K.attrHooks[t]=K.extend(K.attrHooks[t], {set:function(e,n) {
      return""===n?(e.setAttribute(t,"auto"),n):void 0
    }
                                            })
}),K.attrHooks.contenteditable= {get:yt.get,set:function(e,t,n) {""===t&&(t="false"),yt.set(e,t,n)
  }
  }),K.support.hrefNormalized||K.each(["href","src","width","height"],function(e,n) {
K.attrHooks[n]=K.extend(K.attrHooks[n], {get:function(e) {
      var i=e.getAttribute(n,2);
      return null===i?t:i
    }
                                            })
}),K.support.style||(K.attrHooks.style= {get:function(e) {
    return e.style.cssText.toLowerCase()||t
},set:function(e,t) {
    return e.style.cssText=t+""
  }
}),K.support.optSelected||(K.propHooks.selected=K.extend(K.propHooks.selected, {get:function(e) {
    var t=e.parentNode;
    return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
  }
  })),K.support.enctype||(K.propFix.enctype="encoding"),K.support.checkOn||K.each(["radio","checkbox"],function() {
K.valHooks[this]= {get:
    function(e) {
      return null===e.getAttribute("value")?"on":e.value
    }
                      }
  }),K.each(["radio","checkbox"],function() {
K.valHooks[this]=K.extend(K.valHooks[this], {set:function(e,t) {
      return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0
    }
                                                })
  });
  var Et=/^(?:textarea|input|select)$/i,It=/^([^\.]*|)(?:\.(.+)|)$/,Nt=/(?:^|\s)hover(\.\S+|)\b/,Dt=/^key/,$t=/^(?:mouse|contextmenu)|click/,Pt=/^(?:focusinfocus|focusoutblur)$/,At=function(e) {
    return K.event.special.hover?e:e.replace(Nt,"mouseenter$1 mouseleave$1")
  };
    K.event= {add:
  function(e,n,i,o,r) {
    var s,a,l,c,d,u,h,f,p,m,g;
    if(3!==e.nodeType&&8!==e.nodeType&&n&&i&&(s=K._data(e))) {
      for(i.handler&&(p=i,i=p.handler,r=p.selector),i.guid||(i.guid=K.guid++),l=s.events,l||(s.events=l= {}),a=s.handle,a||(s.handle=a=function(e) {
      return"undefined"==typeof K||e&&K.event.triggered===e.type?t:K.event.dispatch.apply(a.elem,arguments)
},a.elem=e),n=K.trim(At(n)).split(" "),c=0; c<n.length; c++)d=It.exec(n[c])||[],u=d[1],h=(d[2]||"").split(".").sort(),g=K.event.special[u]|| {},u=(r?g.delegateType:g.bindType)||u,g=K.event.special[u]|| {},f=K.extend( {type:u,origType:d[1],data:o,handler:i,guid:i.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:h.join(".")},p),m=l[u],m||(m=l[u]=[],m.delegateCount=0,g.setup&&g.setup.call(e,o,h,a)!==!1||(e.addEventListener?e.addEventListener(u,a,!1):e.attachEvent&&e.attachEvent("on"+u,a))),g.add&&(g.add.call(e,f),f.handler.guid||(f.handler.guid=i.guid)),r?m.splice(m.delegateCount++,0,f):m.push(f),K.event.global[u]=!0;
      e=null
    }
},global:
  {},remove:
  function(e,t,n,i,o) {
    var r,s,a,l,c,d,u,h,f,p,m,g=K.hasData(e)&&K._data(e);
    if(g&&(h=g.events)) {
      for(t=K.trim(At(t||"")).split(" "),r=0; r<t.length; r++)if(s=It.exec(t[r])||[],a=l=s[1],c=s[2],a) {
          for(f=K.event.special[a]|| {},a=(i?f.delegateType:f.bindType)||a,p=h[a]||[],d=p.length,c=c?new RegExp("(^|\\.)"+c.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u=0; u<p.length; u++)m=p[u],!o&&l!==m.origType||n&&n.guid!==m.guid||c&&!c.test(m.namespace)||i&&i!==m.selector&&("**"!==i||!m.selector)||(p.splice(u--,1),m.selector&&p.delegateCount--,f.remove&&f.remove.call(e,m));
          0===p.length&&d!==p.length&&(f.teardown&&f.teardown.call(e,c,g.handle)!==!1||K.removeEvent(e,a,g.handle),delete h[a])
        } else for(a in h)K.event.remove(e,a+t[r],n,i,!0);
      K.isEmptyObject(h)&&(delete g.handle,K.removeData(e,"events",!0))
    }
},customEvent:
  {
getData:
!0,setData:
!0,changeData:
    !0
},trigger:
  function(n,i,o,r) {
    if(!o||3!==o.nodeType&&8!==o.nodeType) {
      var s,a,l,c,d,u,h,f,p,m,g=n.type||n,y=[];
      if(!Pt.test(g+K.event.triggered)&&(g.indexOf("!")>=0&&(g=g.slice(0,-1),a=!0),g.indexOf(".")>=0&&(y=g.split("."),g=y.shift(),y.sort()),o&&!K.event.customEvent[g]||K.event.global[g]))if(n="object"==typeof n?n[K.expando]?n:new K.Event(g,n):new K.Event(g),n.type=g,n.isTrigger=!0,n.exclusive=a,n.namespace=y.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u=g.indexOf(":")<0?"on"+g:"",o) {
          if(n.result=t,n.target||(n.target=o),i=null!=i?K.makeArray(i):[],i.unshift(n),h=K.event.special[g]|| {},!h.trigger||h.trigger.apply(o,i)!==!1) {
            if(p=[[o,h.bindType||g]],!r&&!h.noBubble&&!K.isWindow(o)) {
              for(m=h.delegateType||g,c=Pt.test(m+g)?o:o.parentNode,d=o; c; c=c.parentNode)p.push([c,m]),d=c;
              d===(o.ownerDocument||z)&&p.push([d.defaultView||d.parentWindow||e,m])
            }
                for(l=0; l<p.length&&!n.isPropagationStopped(); l++)c=p[l][0],n.type=p[l][1],f=(K._data(c,"events")|| {})[n.type]&&K._data(c,"handle"),f&&f.apply(c,i),f=u&&c[u],f&&K.acceptData(c)&&f.apply&&f.apply(c,i)===!1&&n.preventDefault();
            return n.type=g,r||n.isDefaultPrevented()||h._default&&h._default.apply(o.ownerDocument,i)!==!1||"click"===g&&K.nodeName(o,"a")||!K.acceptData(o)||u&&o[g]&&("focus"!==g&&"blur"!==g||0!==n.target.offsetWidth)&&!K.isWindow(o)&&(d=o[u],d&&(o[u]=null),K.event.triggered=g,o[g](),K.event.triggered=t,d&&(o[u]=d)),n.result
          }
        } else {
          s=K.cache;
          for(l in s)s[l].events&&s[l].events[g]&&K.event.trigger(n,i,s[l].handle.elem,!0)
          }
    }
},dispatch:
  function(n) {
    n=K.event.fix(n||e.event);
    var i,o,r,s,a,l,c,d,u,h=(K._data(this,"events")|| {})[n.type]||[],f=h.delegateCount,p=G.call(arguments),m=!n.exclusive&&!n.namespace,g=K.event.special[n.type]|| {},y=[];
    if(p[0]=n,n.delegateTarget=this,!g.preDispatch||g.preDispatch.call(this,n)!==!1) {
      if(f&&(!n.button||"click"!==n.type))for(r=n.target; r!=this; r=r.parentNode||this)if(r.disabled!==!0||"click"!==n.type) {
            for(a= {},c=[],i=0; f>i; i++)d=h[i],u=d.selector,a[u]===t&&(a[u]=d.needsContext?K(u,this).index(r)>=0:K.find(u,this,null,[r]).length),a[u]&&c.push(d);
c.length&&y.push( {elem:r,matches:c})
          }
      for(h.length>f&&y.push( {elem:this,matches:h.slice(f)}),i=0; i<y.length&&!n.isPropagationStopped(); i++)for(l=y[i],n.currentTarget=l.elem,o=0; o<l.matches.length&&!n.isImmediatePropagationStopped(); o++)d=l.matches[o],(m||!n.namespace&&!d.namespace||n.namespace_re&&n.namespace_re.test(d.namespace))&&(n.data=d.data,n.handleObj=d,s=((K.event.special[d.origType]|| {}).handle||d.handler).apply(l.elem,p),s!==t&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())));
      return g.postDispatch&&g.postDispatch.call(this,n),n.result
    }
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
.split(" "),fixHooks:
  {},keyHooks:
  {
props:"char charCode key keyCode"
.split(" "),filter:
    function(e,t) {
      return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
    }
},mouseHooks:
  {
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
.split(" "),filter:
    function(e,n) {
      var i,o,r,s=n.button,a=n.fromElement;
      return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||z,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
    }
},fix:
function(e){if(e[K.expando])return e; var t,n,i=e,o=K.event.fixHooks[e.type]||{},r=o.props?this.props.concat(o.props):this.props; for(e=K.Event(i),t=r.length; t;)n=r[--t],e[n]=i[n]; return e.target||(e.target=i.srcElement||z),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,i):e},special:
  {
load:
    {
noBubble:
      !0
},focus:
    {
delegateType:"focusin"
},blur:
    {
delegateType:"focusout"
},beforeunload:
    {
setup:
function(e,t,n){K.isWindow(this)&&(this.onbeforeunload=n)},teardown:
      function(e,t) {
        this.onbeforeunload===t&&(this.onbeforeunload=null)
      }
    }
},simulate:
  function(e,t,n,i) {
var o=K.extend(new K.Event,n, {type:e,isSimulated:!0,originalEvent:{}});
    i?K.event.trigger(o,null,t):K.event.dispatch.call(t,o),o.isDefaultPrevented()&&n.preventDefault()
  }
  },K.event.handle=K.event.dispatch,K.removeEvent=z.removeEventListener?function(e,t,n) {
    e.removeEventListener&&e.removeEventListener(t,n,!1)
}:
function(e,t,n) {var i="on"+t; e.detachEvent&&("undefined"==typeof e[i]&&(e[i]=null),e.detachEvent(i,n))},K.Event=function(e,t) {return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?s:r):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),this[K.expando]=!0,void 0):new K.Event(e,t)},K.Event.prototype= {preventDefault:
function(){this.isDefaultPrevented=s; var e=this.originalEvent; e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:
function(){this.isPropagationStopped=s; var e=this.originalEvent; e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:
function(){this.isImmediatePropagationStopped=s,this.stopPropagation()},isDefaultPrevented:
r,isPropagationStopped:
r,isImmediatePropagationStopped:
  r
},K.each( {mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t) {
K.event.special[e]= {delegateType:
                     t,bindType:
                     t,handle:
    function(e) {{
        var n,i=this,o=e.relatedTarget,r=e.handleObj;
        r.selector
      }
      return(!o||o!==i&&!K.contains(i,o))&&(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n
    }
                        }
}),K.support.submitBubbles||(K.event.special.submit= {setup:function() {
    return K.nodeName(this,"form")?!1:(K.event.add(this,"click._submit keypress._submit",function(e) {
      var n=e.target,i=K.nodeName(n,"input")||K.nodeName(n,"button")?n.form:t;
      i&&!K._data(i,"_submit_attached")&&(K.event.add(i,"submit._submit",function(e) {
        e._submit_bubble=!0
      }),K._data(i,"_submit_attached",!0))
    }),void 0)
},postDispatch:function(e) {
    e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&K.event.simulate("submit",this.parentNode,e,!0))
},teardown:function() {
    return K.nodeName(this,"form")?!1:(K.event.remove(this,"._submit"),void 0)
  }
}),K.support.changeBubbles||(K.event.special.change= {setup:function() {
    return Et.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(K.event.add(this,"propertychange._change",function(e) {"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
    }),K.event.add(this,"click._change",function(e) {
      this._just_changed&&!e.isTrigger&&(this._just_changed=!1),K.event.simulate("change",this,e,!0)
    })),!1):(K.event.add(this,"beforeactivate._change",function(e) {
      var t=e.target;
      Et.test(t.nodeName)&&!K._data(t,"_change_attached")&&(K.event.add(t,"change._change",function(e) {
        !this.parentNode||e.isSimulated||e.isTrigger||K.event.simulate("change",this.parentNode,e,!0)
      }),K._data(t,"_change_attached",!0))
    }),void 0)
},handle:function(e) {
    var t=e.target;
    return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0
},teardown:function() {
    return K.event.remove(this,"._change"),!Et.test(this.nodeName)
  }
}),K.support.focusinBubbles||K.each( {focus:"focusin",blur:"focusout"},function(e,t) {
    var n=0,i=function(e) {
      K.event.simulate(t,e.target,K.event.fix(e),!0)
    };
K.event.special[t]= {setup:
function(){0===n++&&z.addEventListener(e,i,!0)},teardown:
    function() {
      0===--n&&z.removeEventListener(e,i,!0)
    }
                        }
}),K.fn.extend( {on:function(e,n,i,o,s) {
    var a,l;
    if("object"==typeof e) {"string"!=typeof n&&(i=i||n,n=t);
      for(l in e)this.on(l,n,i,e[l],s);
      return this
    }
           if(null==i&&null==o?(o=n,i=n=t):null==o&&("string"==typeof n?(o=i,i=t):(o=i,i=n,n=t)),o===!1)o=r;
    else if(!o)return this;
    return 1===s&&(a=o,o=function(e) {
      return K().off(e),a.apply(this,arguments)
    },o.guid=a.guid||(a.guid=K.guid++)),this.each(function() {
      K.event.add(this,e,o,i,n)
    })
},one:function(e,t,n,i) {
    return this.on(e,t,n,i,1)
},off:function(e,n,i) {
    var o,s;
    if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,K(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;
    if("object"==typeof e) {
      for(s in e)this.off(s,n,e[s]);
      return this
    }
    return(n===!1||"function"==typeof n)&&(i=n,n=t),i===!1&&(i=r),this.each(function() {
      K.event.remove(this,e,i,n)
    })
},bind:function(e,t,n) {
    return this.on(e,null,t,n)
},unbind:function(e,t) {
    return this.off(e,null,t)
},live:function(e,t,n) {
    return K(this.context).on(e,this.selector,t,n),this
},die:function(e,t) {
    return K(this.context).off(e,this.selector||"**",t),this
},delegate:function(e,t,n,i) {
    return this.on(t,e,n,i)
},undelegate:function(e,t,n) {
    return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
},trigger:function(e,t) {
    return this.each(function() {
      K.event.trigger(e,t,this)
    })
},triggerHandler:function(e,t) {
    return this[0]?K.event.trigger(e,t,this[0],!0):void 0
},toggle:function(e) {
    var t=arguments,n=e.guid||K.guid++,i=0,o=function(n) {
      var o=(K._data(this,"lastToggle"+e.guid)||0)%i;
      return K._data(this,"lastToggle"+e.guid,o+1),n.preventDefault(),t[o].apply(this,arguments)||!1
    };
    for(o.guid=n; i<t.length;)t[i++].guid=n;
    return this.click(o)
},hover:function(e,t) {
    return this.mouseenter(e).mouseleave(t||e)
  }
  }),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t) {
    K.fn[t]=function(e,n) {return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Dt.test(t)&&(K.event.fixHooks[t]=K.event.keyHooks),$t.test(t)&&(K.event.fixHooks[t]=K.event.mouseHooks)
  }),function(e,t) {
    function n(e,t,n,i) {
      n=n||[],t=t||$;
      var o,r,s,a,l=t.nodeType;
      if(!e||"string"!=typeof e)return n;
      if(1!==l&&9!==l)return[];
      if(s=C(t),!s&&!i&&(o=nt.exec(e)))if(a=o[1]) {
          if(9===l) {
            if(r=t.getElementById(a),!r||!r.parentNode)return n;
            if(r.id===a)return n.push(r),n
            } else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(a))&&x(t,r)&&r.id===a)return n.push(r),n
          } else {
          if(o[2])return L.apply(n,R.call(t.getElementsByTagName(e),0)),n;
          if((a=o[3])&&ht&&t.getElementsByClassName)return L.apply(n,R.call(t.getElementsByClassName(a),0)),n
          }
          return m(e.replace(Q,"$1"),t,n,i,s)
    }
    function i(e) {
      return function(t) {
        var n=t.nodeName.toLowerCase();
        return"input"===n&&t.type===e
      }
    }
    function o(e) {
      return function(t) {
        var n=t.nodeName.toLowerCase();
        return("input"===n||"button"===n)&&t.type===e
      }
    }
    function r(e) {
      return B(function(t) {
        return t=+t,B(function(n,i) {
          for(var o,r=e([],n.length,t),s=r.length; s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))
          })
      })
    }
    function s(e,t,n) {
      if(e===t)return n;
      for(var i=e.nextSibling; i;) {
        if(i===t)return-1;
        i=i.nextSibling
      }
        return 1
    }
    function a(e,t) {
      var i,o,r,s,a,l,c,d=F[N][e];
      if(d)return t?0:d.slice(0);
      for(a=e,l=[],c=b.preFilter; a;) {
        (!i||(o=Z.exec(a)))&&(o&&(a=a.slice(o[0].length)),l.push(r=[])),i=!1,(o=et.exec(a))&&(r.push(i=new D(o.shift())),a=a.slice(i.length),i.type=o[0].replace(Q," "));
        for(s in b.filter)!(o=at[s].exec(a))||c[s]&&!(o=c[s](o,$,!0))||(r.push(i=new D(o.shift())),a=a.slice(i.length),i.type=s,i.matches=o);
        if(!i)break
        }
      return t?a.length:a?n.error(e):F(e,l).slice(0)
    }
    function l(e,t,n) {
      var i=t.dir,o=n&&"parentNode"===t.dir,r=O++;
      return t.first?function(t,n,r) {
        for(; t=t[i];)if(o||1===t.nodeType)return e(t,n,r)
}:
      function(t,n,s) {
        if(s) {
          for(; t=t[i];)if((o||1===t.nodeType)&&e(t,n,s))return t
            } else for(var a,l=A+" "+r+" ",c=l+y; t=t[i];)if(o||1===t.nodeType) {
              if((a=t[N])===c)return t.sizset;
              if("string"==typeof a&&0===a.indexOf(l)) {
                if(t.sizset)return t
                } else {
                if(t[N]=c,e(t,n,s))return t.sizset=!0,t;
                t.sizset=!1
              }
            }
      }
    }
    function c(e) {
      return e.length>1?function(t,n,i) {
        for(var o=e.length; o--;)if(!e[o](t,n,i))return!1;
        return!0
}:
            e[0]
    }
    function d(e,t,n,i,o) {
      for(var r,s=[],a=0,l=e.length,c=null!=t; l>a; a++)(r=e[a])&&(!n||n(r,i,o))&&(s.push(r),c&&t.push(a));
      return s
    }
    function u(e,t,n,i,o,r) {
      return i&&!i[N]&&(i=u(i)),o&&!o[N]&&(o=u(o,r)),B(function(r,s,a,l) {
        if(!r||!o) {
var c,u,h,f=[],m=[],g=s.length,y=r||p(t||"*",a.nodeType?[a]:a,[],r),v=!e||!r&&t?y:d(y,f,e,a,l),b=n?o||(r?e:g||i)?[]:s:v;
          if(n&&n(v,b,a,l),i)for(h=d(b,m),i(h,[],a,l),c=h.length; c--;)(u=h[c])&&(b[m[c]]=!(v[m[c]]=u));
          if(r)for(c=e&&b.length; c--;)(u=b[c])&&(r[f[c]]=!(s[f[c]]=u));
          else b=d(b===s?b.splice(g,b.length):b),o?o(null,s,b,l):L.apply(s,b)
          }
      })
    }
    function h(e) {
      for(var t,n,i,o=e.length,r=b.relative[e[0].type],s=r||b.relative[" "],a=r?1:0,d=l(function(e) {
      return e===t
    },s,!0),f=l(function(e) {
      return j.call(t,e)>-1
      },s,!0),p=[function(e,n,i) {
        return!r&&(i||n!==S)||((t=n).nodeType?d(e,n,i):f(e,n,i))
      }]; o>a; a++)if(n=b.relative[e[a].type])p=[l(c(p),n)];
      else {
        if(n=b.filter[e[a].type].apply(null,e[a].matches),n[N]) {
          for(i=++a; o>i&&!b.relative[e[i].type]; i++);
          return u(a>1&&c(p),a>1&&e.slice(0,a-1).join("").replace(Q,"$1"),n,i>a&&h(e.slice(a,i)),o>i&&h(e=e.slice(i)),o>i&&e.join(""))
        }
               p.push(n)
      }
             return c(p)
    }
    function f(e,t) {
      var i=t.length>0,o=e.length>0,r=function(s,a,l,c,u) {
        var h,f,p,m=[],g=0,v="0",w=s&&[],C=null!=u,x=S,_=s||o&&b.find.TAG("*",u&&a.parentNode||a),k=A+=null==x?1:Math.E;
        for(C&&(S=a!==$&&a,y=r.el); null!=(h=_[v]); v++) {
          if(o&&h) {
            for(f=0; p=e[f]; f++)if(p(h,a,l)) {
                c.push(h);
                break
              }
            C&&(A=k,y=++r.el)
          }
          i&&((h=!p&&h)&&g--,s&&w.push(h))
        }
        if(g+=v,i&&v!==g) {
          for(f=0; p=t[f]; f++)p(w,m,a,l);
          if(s) {
            if(g>0)for(; v--;)w[v]||m[v]||(m[v]=M.call(c));
            m=d(m)
          }
            L.apply(c,m),C&&!s&&m.length>0&&g+t.length>1&&n.uniqueSort(c)
        }
          return C&&(A=k,S=x),w
      };
      return r.el=0,i?B(r):r
    }
    function p(e,t,i,o) {
      for(var r=0,s=t.length; s>r; r++)n(e,t[r],i,o);
      return i
    }
    function m(e,t,n,i,o) {{
        var r,s,l,c,d,u=a(e);
        u.length
      }
      if(!i&&1===u.length) {
        if(s=u[0]=u[0].slice(0),s.length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&!o&&b.relative[s[1].type]) {
          if(t=b.find.ID(l.matches[0].replace(st,""),t,o)[0],!t)return n;
          e=e.slice(s.shift().length)
        }
        for(r=at.POS.test(e)?-1:s.length-1; r>=0&&(l=s[r],!b.relative[c=l.type]); r--)if((d=b.find[c])&&(i=d(l.matches[0].replace(st,""),it.test(s[0].type)&&t.parentNode||t,o))) {
            if(s.splice(r,1),e=i.length&&s.join(""),!e)return L.apply(n,R.call(i,0)),n;
            break
          }
      }
      return _(e,u)(i,t,o,n,it.test(e)),n
    }
    function g() {} var y,v,b,w,C,x,_,k,T,S,E=!0,I="undefined",N=("sizcache"+Math.random()).replace(".",""),D=String,$=e.document,P=$.documentElement,A=0,O=0,M=[].pop,L=[].push,R=[].slice,j=[].indexOf||function(e) {for(var t=0,n=this.length; n>t; t++)if(this[t]===e)return t; return-1},B=function(e,t) {return e[N]=null==t||t,e},H=function() {
      var e= {},t=[];
      return B(function(n,i) {
        return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n]=i
      },e)
},z=H(),F=H(),q=H(),W="[\\x20\\t\\r\\n\\f]",V="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",U=V.replace("w","w#"),G="([*^$|!~]?=)",X="\\["+W+"*("+V+")"+W+"*(?:"+G+W+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+U+")|)|)"+W+"*\\]",Y=":("+V+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+X+")|[^:]|\\\\.)*|.*))\\)|)",J=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)",Q=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),Z=new RegExp("^"+W+"*,"+W+"*"),et=new RegExp("^"+W+"*([\\x20\\t\\r\\n\\f>+~])"+W+"*"),tt=new RegExp(Y),nt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,it=/[\x20\t\r\n\f]*[+~]/,ot=/h\d/i,rt=/input|select|textarea|button/i,st=/\\(?!\\)/g,at={ID:new RegExp("^#("+V+")"),CLASS:new RegExp("^\\.("+V+")"),NAME:new RegExp("^\\[name=['\"]?("+V+")['\"]?\\]"),TAG:new RegExp("^("+V.replace("w","w*")+")"),ATTR:new RegExp("^"+X),PSEUDO:new RegExp("^"+Y),POS:new RegExp(J,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),needsContext:new RegExp("^"+W+"*[>+~]|"+J,"i")},lt=function(e){var t=$.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},ct=lt(function(e){return e.appendChild($.createComment("")),!e.getElementsByTagName("*").length}),dt=lt(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==I&&"#"===e.firstChild.getAttribute("href")}),ut=lt(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),ht=lt(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),ft=lt(function(e){e.id=N+0,e.innerHTML="<a name='"+N+"'></a><div name='"+N+"'></div>",P.insertBefore(e,P.firstChild);var t=$.getElementsByName&&$.getElementsByName(N).length===2+$.getElementsByName(N+0).length;return v=!$.getElementById(N),P.removeChild(e),t});try{R.call(P.childNodes,0)[0].nodeType}catch(pt){R=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},w=n.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i];i++)n+=w(t);return n},C=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},x=n.contains=P.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!!(i&&1===i.nodeType&&n.contains&&n.contains(i))}:P.compareDocumentPosition?function(e,t){return t&&!!(16&e.compareDocumentPosition(t))}:function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},n.attr=function(e,t){var n,i=C(e);return i||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):i||ut?e.getAttribute(t):(n=e.getAttributeNode(t),n?"boolean"==typeof e[t]?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:B,match:at,attrHandle:dt?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:v?function(e,t,n){if(typeof t.getElementById!==I&&!n){var i=t.getElementById(e);return i&&i.parentNode?[i]:[]}}:function(e,n,i){if(typeof n.getElementById!==I&&!i){var o=n.getElementById(e);return o?o.id===e||typeof o.getAttributeNode!==I&&o.getAttributeNode("id").value===e?[o]:t:[]}},TAG:ct?function(e,t){return typeof t.getElementsByTagName!==I?t.getElementsByTagName(e):void 0}:function(e,t){var n=t.getElementsByTagName(e);if("*"===e){for(var i,o=[],r=0;i=n[r];r++)1===i.nodeType&&o.push(i);return o}return n},NAME:ft&&function(e,t){return typeof t.getElementsByName!==I?t.getElementsByName(name):void 0},CLASS:ht&&function(e,t,n){return typeof t.getElementsByClassName===I||n?void 0:t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(st,""),e[3]=(e[4]||e[5]||"").replace(st,""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1]?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*("even"===e[2]||"odd"===e[2])),e[4]=+(e[6]+e[7]||"odd"===e[2])):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;return at.CHILD.test(e[0])?null:(e[3]?e[2]=e[3]:(t=e[4])&&(tt.test(t)&&(n=a(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t),e.slice(0,3))}},filter:{ID:v?function(e){return e=e.replace(st,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(st,""),function(t){var n=typeof t.getAttributeNode!==I&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(st,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[N][e];return t||(t=z(e,new RegExp("(^|"+W+")"+e+"("+W+"|$)"))),function(e){return t.test(e.className||typeof e.getAttribute!==I&&e.getAttribute("class")||"")}},ATTR:function(e,t,i){return function(o){var r=n.attr(o,e);return null==r?"!="===t:t?(r+="","="===t?r===i:"!="===t?r!==i:"^="===t?i&&0===r.indexOf(i):"*="===t?i&&r.indexOf(i)>-1:"$="===t?i&&r.substr(r.length-i.length)===i:"~="===t?(" "+r+" ").indexOf(i)>-1:"|="===t?r===i||r.substr(0,i.length+1)===i+"-":!1):!0}},CHILD:function(e,t,n,i){return"nth"===e?function(e){var t,o,r=e.parentNode;if(1===n&&0===i)return!0;if(r)for(o=0,t=r.firstChild;t&&(1!==t.nodeType||(o++,e!==t));t=t.nextSibling);return o-=i,o===n||o%n===0&&o/n>=0}:function(t){var n=t;switch(e){case"only":case"first":for(;n=n.previousSibling;)if(1===n.nodeType)return!1;if("first"===e)return!0;n=t;case"last":for(;n=n.nextSibling;)if(1===n.nodeType)return!1;return!0}}},PSEUDO:function(e,t){var i,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return o[N]?o(t):o.length>1?(i=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?B(function(e,n){for(var i,r=o(e,t),s=r.length;s--;)i=j.call(e,r[s]),e[i]=!(n[i]=r[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:B(function(e){var t=[],n=[],i=_(e.replace(Q,"$1"));return i[N]?B(function(e,t,n,o){for(var r,s=i(e,null,o,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,o,r){return t[0]=e,i(t,null,r,n),!n.pop()}}),has:B(function(e){return function(t){return n(e,t).length>0}}),contains:B(function(e){return function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;for(e=e.firstChild;e;){if(e.nodeName>"@"||3===(t=e.nodeType)||4===t)return!1;e=e.nextSibling}return!0},header:function(e){return ot.test(e.nodeName)},text:function(e){var t,n;return"input"===e.nodeName.toLowerCase()&&"text"===(t=e.type)&&(null==(n=e.getAttribute("type"))||n.toLowerCase()===t)},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:o("submit"),reset:o("reset"),button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return rt.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return!(e!==t.activeElement||t.hasFocus&&!t.hasFocus()||!e.type&&!e.href)},active:function(e){return e===e.ownerDocument.activeElement},first:r(function(){return[0]}),last:r(function(e,t){return[t-1]}),eq:r(function(e,t,n){return[0>n?n+t:n]}),even:r(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:r(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:r(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:r(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},k=P.compareDocumentPosition?function(e,t){return e===t?(T=!0,0):(e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t):e.compareDocumentPosition)?-1:1}:function(e,t){if(e===t)return T=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,i,o=[],r=[],a=e.parentNode,l=t.parentNode,c=a;if(a===l)return s(e,t);if(!a)return-1;if(!l)return 1;for(;c;)o.unshift(c),c=c.parentNode;for(c=l;c;)r.unshift(c),c=c.parentNode;n=o.length,i=r.length;for(var d=0;n>d&&i>d;d++)if(o[d]!==r[d])return s(o[d],r[d]);return d===n?s(e,r[d],-1):s(o[d],t,1)},[0,0].sort(k),E=!T,n.uniqueSort=function(e){var t,n=1;if(T=E,e.sort(k),T)for(;t=e[n];n++)t===e[n-1]&&e.splice(n--,1);return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},_=n.compile=function(e,t){var n,i=[],o=[],r=q[N][e];if(!r){for(t||(t=a(e)),n=t.length;n--;)r=h(t[n]),r[N]?i.push(r):o.push(r);r=q(e,f(o,i))}return r},$.querySelectorAll&&!function(){var e,t=m,i=/'|\\/g,o=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,r=[":focus"],s=[":active",":focus"],l=P.matchesSelector||P.mozMatchesSelector||P.webkitMatchesSelector||P.oMatchesSelector||P.msMatchesSelector;lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||r.push("\\["+W+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||r.push(":checked")}),lt(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&r.push("[*^$]="+W+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||r.push(":enabled",":disabled")}),r=new RegExp(r.join("|")),m=function(e,n,o,s,l){if(!(s||l||r&&r.test(e))){var c,d,u=!0,h=N,f=n,p=9===n.nodeType&&e;if(1===n.nodeType&&"object"!==n.nodeName.toLowerCase()){for(c=a(e),(u=n.getAttribute("id"))?h=u.replace(i,"\\$&"):n.setAttribute("id",h),h="[id='"+h+"'] ",d=c.length;d--;)c[d]=h+c[d].join("");f=it.test(e)&&n.parentNode||n,p=c.join(",")}if(p)try{return L.apply(o,R.call(f.querySelectorAll(p),0)),o}catch(m){}finally{u||n.removeAttribute("id")}}return t(e,n,o,s,l)},l&&(lt(function(t){e=l.call(t,"div");try{l.call(t,"[test!='']:sizzle"),s.push("!=",Y)}catch(n){}}),s=new RegExp(s.join("|")),n.matchesSelector=function(t,i){if(i=i.replace(o,"='$1']"),!(C(t)||s.test(i)||r&&r.test(i)))try{var a=l.call(t,i);if(a||e||t.document&&11!==t.document.nodeType)return a}catch(c){}return n(i,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=g.prototype=b.pseudos,b.setFilters=new g,n.attr=K.attr,K.find=n,K.expr=n.selectors,K.expr[":"]=K.expr.pseudos,K.unique=n.uniqueSort,K.text=n.getText,K.isXMLDoc=n.isXML,K.contains=n.contains}(e);var Ot=/Until$/,Mt=/^(?:parents|prev(?:Until|All))/,Lt=/^.[^:#\[\.,]*$/,Rt=K.expr.match.needsContext,jt={children:!0,contents:!0,next:!0,prev:!0};K.fn.extend({find:function(e){var t,n,i,o,r,s,a=this;if("string"!=typeof e)return K(e).filter(function(){for(t=0,n=a.length;n>t;t++)if(K.contains(a[t],this))return!0});for(s=this.pushStack("","find",e),t=0,n=this.length;n>t;t++)if(i=s.length,K.find(e,this[t],s),t>0)for(o=i;o<s.length;o++)for(r=0;i>r;r++)if(s[r]===s[o]){s.splice(o--,1);break}return s},has:function(e){var t,n=K(e,this),i=n.length;return this.filter(function(){for(t=0;i>t;t++)if(K.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(c(this,e,!1),"not",e)},filter:function(e){return this.pushStack(c(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?Rt.test(e)?K(e,this.context).index(this[0])>=0:K.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,i=0,o=this.length,r=[],s=Rt.test(e)||"string"!=typeof e?K(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(s?s.index(n)>-1:K.find.matchesSelector(n,e)){r.push(n);break}n=n.parentNode}return r=r.length>1?K.unique(r):r,this.pushStack(r,"closest",e)},index:function(e){return e?"string"==typeof e?K.inArray(this[0],K(e)):K.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?K(e,t):K.makeArray(e&&e.nodeType?[e]:e),i=K.merge(this.get(),n);return this.pushStack(a(n[0])||a(i[0])?i:K.unique(i))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.fn.andSelf=K.fn.addBack,K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return K.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,i){var o=K.map(this,t,n);return Ot.test(e)||(i=n),i&&"string"==typeof i&&(o=K.filter(i,o)),o=this.length>1&&!jt[e]?K.unique(o):o,this.length>1&&Mt.test(e)&&(o=o.reverse()),this.pushStack(o,e,G.call(arguments).join(","))}}),K.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?K.find.matchesSelector(t[0],e)?[t[0]]:[]:K.find.matches(e,t)},dir:function(e,n,i){for(var o=[],r=e[n];r&&9!==r.nodeType&&(i===t||1!==r.nodeType||!K(r).is(i));)1===r.nodeType&&o.push(r),r=r[n];
  return o
},sibling:
function(e,t) {
  for(var n=[]; e; e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
  return n
}
}); var Bt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Ht=/ jQuery\d+="(?:null|\d+)"/g,zt=/^\s+/,Ft=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,qt=/<([\w:]+)/,Wt=/<tbody/i,Vt=/<|&#?\w+;/,Ut=/<(?:script|style|link)/i,Gt=/<(?:script|object|embed|option|style)/i,Xt=new RegExp("<(?:"+Bt+")[\\s/>]","i"),Yt=/^(?:checkbox|radio)$/,Jt=/checked\s*(?:[^=]|=\s*.checked.)/i,Qt=/\/(java|ecma)script/i,Kt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Zt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},en=d(z),tn=en.appendChild(z.createElement("div"));Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td,K.support.htmlSerialize||(Zt._default=[1,"X<div>","</div>"]),K.fn.extend({text:function(e){return K.access(this,function(e){return e===t?K.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(K.isFunction(e))return this.each(function(t){K(this).wrapAll(e.call(this,t))});if(this[0]){var t=K(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return K.isFunction(e)?this.each(function(t){K(this).wrapInner(e.call(this,t))}):this.each(function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!a(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(e,this),"before",this.selector)}},after:function(){if(!a(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(this,e),"after",this.selector)}},remove:function(e,t){for(var n,i=0;null!=(n=this[i]);i++)(!e||K.filter(e,[n]).length)&&(t||1!==n.nodeType||(K.cleanData(n.getElementsByTagName("*")),K.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&K.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return K.access(this,function(e){var n=this[0]||{},i=0,o=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Ht,""):t;if(!("string"!=typeof e||Ut.test(e)||!K.support.htmlSerialize&&Xt.test(e)||!K.support.leadingWhitespace&&zt.test(e)||Zt[(qt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Ft,"<$1></$2>");try{for(;o>i;i++)n=this[i]||{},1===n.nodeType&&(K.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(r){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return a(this[0])?this.length?this.pushStack(K(K.isFunction(e)?e():e),"replaceWith",e):this:K.isFunction(e)?this.each(function(t){var n=K(this),i=n.html();n.replaceWith(e.call(this,t,i))}):("string"!=typeof e&&(e=K(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;K(this).remove(),t?K(t).before(e):K(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,i){e=[].concat.apply([],e);var o,r,s,a,l=0,c=e[0],d=[],h=this.length;if(!K.support.checkClone&&h>1&&"string"==typeof c&&Jt.test(c))return this.each(function(){K(this).domManip(e,n,i)});if(K.isFunction(c))return this.each(function(o){var r=K(this);e[0]=c.call(this,o,n?r.html():t),r.domManip(e,n,i)});if(this[0]){if(o=K.buildFragment(e,this,d),s=o.fragment,r=s.firstChild,1===s.childNodes.length&&(s=r),r)for(n=n&&K.nodeName(r,"tr"),a=o.cacheable||h-1;h>l;l++)i.call(n&&K.nodeName(this[l],"table")?u(this[l],"tbody"):this[l],l===a?s:K.clone(s,!0,!0));s=r=null,d.length&&K.each(d,function(e,t){t.src?K.ajax?K.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):K.error("no ajax"):K.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Kt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),K.buildFragment=function(e,n,i){var o,r,s,a=e[0];return n=n||z,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,!(1===e.length&&"string"==typeof a&&a.length<512&&n===z&&"<"===a.charAt(0))||Gt.test(a)||!K.support.checkClone&&Jt.test(a)||!K.support.html5Clone&&Xt.test(a)||(r=!0,o=K.fragments[a],s=o!==t),o||(o=n.createDocumentFragment(),K.clean(e,n,o,i),r&&(K.fragments[a]=s&&o)),{fragment:o,cacheable:r}},K.fragments={},K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(n){var i,o=0,r=[],s=K(n),a=s.length,l=1===this.length&&this[0].parentNode;if((null==l||l&&11===l.nodeType&&1===l.childNodes.length)&&1===a)return s[t](this[0]),this;for(;a>o;o++)i=(o>0?this.clone(!0):this).get(),K(s[o])[t](i),r=r.concat(i);return this.pushStack(r,e,s.selector)}}),K.extend({clone:function(e,t,n){var i,o,r,s;if(K.support.html5Clone||K.isXMLDoc(e)||!Xt.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(tn.innerHTML=e.outerHTML,tn.removeChild(s=tn.firstChild)),!(K.support.noCloneEvent&&K.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(f(e,s),i=p(e),o=p(s),r=0;i[r];++r)o[r]&&f(i[r],o[r]);if(t&&(h(e,s),n))for(i=p(e),o=p(s),r=0;i[r];++r)h(i[r],o[r]);return i=o=null,s},clean:function(e,t,n,i){var o,r,s,a,l,c,u,h,f,p,g,y=t===z&&en,v=[];for(t&&"undefined"!=typeof t.createDocumentFragment||(t=z),o=0;null!=(s=e[o]);o++)if("number"==typeof s&&(s+=""),s){if("string"==typeof s)if(Vt.test(s)){for(y=y||d(t),u=t.createElement("div"),y.appendChild(u),s=s.replace(Ft,"<$1></$2>"),a=(qt.exec(s)||["",""])[1].toLowerCase(),l=Zt[a]||Zt._default,c=l[0],u.innerHTML=l[1]+s+l[2];c--;)u=u.lastChild;if(!K.support.tbody)for(h=Wt.test(s),f="table"!==a||h?"<table>"!==l[1]||h?[]:u.childNodes:u.firstChild&&u.firstChild.childNodes,r=f.length-1;r>=0;--r)K.nodeName(f[r],"tbody")&&!f[r].childNodes.length&&f[r].parentNode.removeChild(f[r]);!K.support.leadingWhitespace&&zt.test(s)&&u.insertBefore(t.createTextNode(zt.exec(s)[0]),u.firstChild),s=u.childNodes,u.parentNode.removeChild(u)}else s=t.createTextNode(s);s.nodeType?v.push(s):K.merge(v,s)}if(u&&(s=u=y=null),!K.support.appendChecked)for(o=0;null!=(s=v[o]);o++)K.nodeName(s,"input")?m(s):"undefined"!=typeof s.getElementsByTagName&&K.grep(s.getElementsByTagName("input"),m);if(n)for(p=function(e){return!e.type||Qt.test(e.type)?i?i.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e):void 0},o=0;null!=(s=v[o]);o++)K.nodeName(s,"script")&&p(s)||(n.appendChild(s),"undefined"!=typeof s.getElementsByTagName&&(g=K.grep(K.merge([],s.getElementsByTagName("script")),p),v.splice.apply(v,[o+1,0].concat(g)),o+=g.length));return v},cleanData:function(e,t){for(var n,i,o,r,s=0,a=K.expando,l=K.cache,c=K.support.deleteExpando,d=K.event.special;null!=(o=e[s]);s++)if((t||K.acceptData(o))&&(i=o[a],n=i&&l[i])){if(n.events)for(r in n.events)d[r]?K.event.remove(o,r):K.removeEvent(o,r,n.handle);l[i]&&(delete l[i],c?delete o[a]:o.removeAttribute?o.removeAttribute(a):o[a]=null,K.deletedIds.push(i))}}}),function(){var e,t;K.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=K.uaMatch(q.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),K.browser=t,K.sub=function(){function e(t,n){
      return new e.fn.init(t,n)
    } K.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,i) {
      return i&&i instanceof K&&!(i instanceof e)&&(i=e(i)),K.fn.init.call(this,n,i,t)
    },e.fn.init.prototype=e.fn; var t=e(z); return e
  }
}(); var nn,on,rn,sn=/alpha\([^)]*\)/i,an=/opacity=([^)]*)/,ln=/^(top|right|bottom|left)$/,cn=/^(none|table(?!-c[ea]).+)/,dn=/^margin/,un=new RegExp("^("+Z+")(.*)$","i"),hn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),fn=new RegExp("^([-+])=("+Z+")","i"),pn= {},mn= {position:"absolute",visibility:"hidden",display:"block"},gn= {letterSpacing:0,fontWeight:400},yn=["Top","Right","Bottom","Left"],vn=["Webkit","O","Moz","ms"],bn=K.fn.toggle; K.fn.extend( {css:function(e,n) {
  return K.access(this,function(e,n,i) {
    return i!==t?K.style(e,n,i):K.css(e,n)
  },e,n,arguments.length>1)
},show:function() {
  return v(this,!0)
},hide:function() {
  return v(this)
},toggle:function(e,t) {
  var n="boolean"==typeof e;
  return K.isFunction(e)&&K.isFunction(t)?bn.apply(this,arguments):this.each(function() {
    (n?e:y(this))?K(this).show():K(this).hide()
  })
}
}),K.extend( {cssHooks:{opacity:{get:function(e,t) {
      if(t) {
        var n=nn(e,"opacity");
        return""===n?"1":n
      }
    }
  }
},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":K.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,i,o) {
  if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style) {
    var r,s,a,l=K.camelCase(n),c=e.style;
    if(n=K.cssProps[l]||(K.cssProps[l]=g(c,l)),a=K.cssHooks[n]||K.cssHooks[l],i===t)return a&&"get"in a&&(r=a.get(e,!1,o))!==t?r:c[n];
    if(s=typeof i,"string"===s&&(r=fn.exec(i))&&(i=(r[1]+1)*r[2]+parseFloat(K.css(e,n)),s="number"),!(null==i||"number"===s&&isNaN(i)||("number"!==s||K.cssNumber[l]||(i+="px"),a&&"set"in a&&(i=a.set(e,i,o))===t)))try {
        c[n]=i
      } catch(d) {}
  }
},css:function(e,n,i,o) {
  var r,s,a,l=K.camelCase(n);
  return n=K.cssProps[l]||(K.cssProps[l]=g(e.style,l)),a=K.cssHooks[n]||K.cssHooks[l],a&&"get"in a&&(r=a.get(e,!0,o)),r===t&&(r=nn(e,n)),"normal"===r&&n in gn&&(r=gn[n]),i||o!==t?(s=parseFloat(r),i||K.isNumeric(s)?s||0:r):r
},swap:function(e,t,n) {
  var i,o,r= {};
  for(o in t)r[o]=e.style[o],e.style[o]=t[o];
  i=n.call(e);
  for(o in t)e.style[o]=r[o];
  return i
}
}),e.getComputedStyle?nn=function(t,n) {
  var i,o,r,s,a=e.getComputedStyle(t,null),l=t.style;
  return a&&(i=a[n],""!==i||K.contains(t.ownerDocument,t)||(i=K.style(t,n)),hn.test(i)&&dn.test(n)&&(o=l.width,r=l.minWidth,s=l.maxWidth,l.minWidth=l.maxWidth=l.width=i,i=a.width,l.width=o,l.minWidth=r,l.maxWidth=s)),i
}:z.documentElement.currentStyle&&(nn=function(e,t) {
  var n,i,o=e.currentStyle&&e.currentStyle[t],r=e.style;
  return null==o&&r&&r[t]&&(o=r[t]),hn.test(o)&&!ln.test(t)&&(n=r.left,i=e.runtimeStyle&&e.runtimeStyle.left,i&&(e.runtimeStyle.left=e.currentStyle.left),r.left="fontSize"===t?"1em":o,o=r.pixelLeft+"px",r.left=n,i&&(e.runtimeStyle.left=i)),""===o?"auto":o
}),K.each(["height","width"],function(e,t) {
K.cssHooks[t]= {get:
  function(e,n,i) {
    return n?0===e.offsetWidth&&cn.test(nn(e,"display"))?K.swap(e,mn,function() {
      return C(e,t,i)
    }):C(e,t,i):void 0
},set:
  function(e,n,i) {
    return b(e,n,i?w(e,t,i,K.support.boxSizing&&"border-box"===K.css(e,"boxSizing")):0)
  }
                 }
}),K.support.opacity||(K.cssHooks.opacity= {get:function(e,t) {
  return an.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t) {
  var n=e.style,i=e.currentStyle,o=K.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=i&&i.filter||n.filter||"";
  n.zoom=1,t>=1&&""===K.trim(r.replace(sn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),i&&!i.filter)||(n.filter=sn.test(r)?r.replace(sn,o):r+" "+o)
}
}),K(function() {
K.support.reliableMarginRight||(K.cssHooks.marginRight= {get:function(e,t) {
return K.swap(e, {display:"inline-block"},function() {
      return t?nn(e,"marginRight"):void 0
    })
  }
  }),!K.support.pixelPosition&&K.fn.position&&K.each(["top","left"],function(e,t) {
K.cssHooks[t]= {get:
    function(e,n) {
      if(n) {
        var i=nn(e,t);
        return hn.test(i)?K(e).position()[t]+"px":i
      }
    }
                   }
  })
}),K.expr&&K.expr.filters&&(K.expr.filters.hidden=function(e) {
  return 0===e.offsetWidth&&0===e.offsetHeight||!K.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||nn(e,"display"))
},K.expr.filters.visible=function(e) {
  return!K.expr.filters.hidden(e)
}),K.each( {margin:"",padding:"",border:"Width"},function(e,t) {
K.cssHooks[e+t]= {expand:
  function(n) {
    var i,o="string"==typeof n?n.split(" "):[n],r= {};
    for(i=0; 4>i; i++)r[e+yn[i]+t]=o[i]||o[i-2]||o[0];
    return r
  }
                   },dn.test(e)||(K.cssHooks[e+t].set=b)
}); var wn=/%20/g,Cn=/\[\]$/,xn=/\r?\n/g,_n=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,kn=/^(?:select|textarea)/i; K.fn.extend( {serialize:function() {
  return K.param(this.serializeArray())
},serializeArray:function() {
  return this.map(function() {
    return this.elements?K.makeArray(this.elements):this
  }).filter(function() {
    return this.name&&!this.disabled&&(this.checked||kn.test(this.nodeName)||_n.test(this.type))
  }).map(function(e,t) {
    var n=K(this).val();
    return null==n?null:K.isArray(n)?K.map(n,function(e) {
return {name:t.name,value:e.replace(xn,"\r\n")}
    }): {
name:
t.name,value:
      n.replace(xn,"\r\n")
    }
  }).get()
}
}),K.param=function(e,n) {
  var i,o=[],r=function(e,t) {
    t=K.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
  };
  if(n===t&&(n=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function() {
    r(this.name,this.value)
  });
  else for(i in e)_(i,e[i],n,r);
  return o.join("&").replace(wn,"+")
}; var Tn,Sn,En=/#.*$/,In=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Dn=/^(?:GET|HEAD)$/,$n=/^\/\ //,Pn=/\?/,An=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,On=/([?&])_=[^&]*/,Mn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ln=K.fn.load,Rn={},jn={},Bn=["*/"]+["*"];try{Sn=F.href}catch(Hn){Sn=z.createElement("a"),Sn.href="",Sn=Sn.href}Tn=Mn.exec(Sn.toLowerCase())||[],K.fn.load=function(e,n,i){if("string"!=typeof e&&Ln)return Ln.apply(this,arguments);if(!this.length)return this;var o,r,s,a=this,l=e.indexOf(" ");return l>=0&&(o=e.slice(l,e.length),e=e.slice(0,l)),K.isFunction(n)?(i=n,n=t):n&&"object"==typeof n&&(r="POST"),K.ajax({url:e,type:r,dataType:"html",data:n,complete:function(e,t){i&&a.each(i,s||[e.responseText,t,e])}}).done(function(e){s=arguments,a.html(o?K("<div>").append(e.replace(An,"")).find(o):e)}),this},K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.each(["get","post"],function(e,n){K[n]=function(e,i,o,r){return K.isFunction(i)&&(r=r||o,o=i,i=t),K.ajax({type:n,url:e,data:i,success:o,dataType:r})}}),K.extend({getScript:function(e,n){return K.get(e,t,n,"script")},getJSON:function(e,t,n){return K.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?S(e,K.ajaxSettings):(t=e,e=K.ajaxSettings),S(e,t),e},ajaxSettings:{url:Sn,isLocal:Nn.test(Tn[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Bn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:k(Rn),ajaxTransport:k(jn),ajax:function(e,n){function i(e,n,i,s){var c,u,v,b,C,_=n;2!==w&&(w=2,l&&clearTimeout(l),a=t,r=s||"",x.readyState=e>0?4:0,i&&(b=E(h,x,i)),e>=200&&300>e||304===e?(h.ifModified&&(C=x.getResponseHeader("Last-Modified"),C&&(K.lastModified[o]=C),C=x.getResponseHeader("Etag"),C&&(K.etag[o]=C)),304===e?(_="notmodified",c=!0):(c=I(h,b),_=c.state,u=c.data,v=c.error,c=!v)):(v=_,(!_||e)&&(_="error",0>e&&(e=0))),x.status=e,x.statusText=(n||_)+"",c?m.resolveWith(f,[u,_,x]):m.rejectWith(f,[x,_,v]),x.statusCode(y),y=t,d&&p.trigger("ajax"+(c?"Success":"Error"),[x,h,c?u:v]),g.fireWith(f,[x,_]),d&&(p.trigger("ajaxComplete",[x,h]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var o,r,s,a,l,c,d,u,h=K.ajaxSetup({},n),f=h.context||h,p=f!==h&&(f.nodeType||f instanceof K)?K(f):K.event,m=K.Deferred(),g=K.Callbacks("once memory"),y=h.statusCode||{},v={},b={},w=0,C="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!w){var n=e.toLowerCase();e=b[n]=b[n]||e,v[e]=t}return this},getAllResponseHeaders:function(){return 2===w?r:null},getResponseHeader:function(e){var n;if(2===w){if(!s)for(s={};n=In.exec(r);)s[n[1].toLowerCase()]=n[2];n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return w||(h.mimeType=e),this},abort:function(e){return e=e||C,a&&a.abort(e),i(0,e),this}};if(m.promise(x),x.success=x.done,x.error=x.fail,x.complete=g.add,x.statusCode=function(e){if(e){var t;if(2>w)for(t in e)y[t]=[y[t],e[t]];else t=e[x.status],x.always(t)}return this},h.url=((e||h.url)+"").replace(En,"").replace($n,Tn[1]+"//"),h.dataTypes=K.trim(h.dataType||"*").toLowerCase().split(tt),null==h.crossDomain&&(c=Mn.exec(h.url.toLowerCase())||!1,h.crossDomain=c&&c.join(":")+(c[3]?"":"http:"===c[1]?80:443)!==Tn.join(":")+(Tn[3]?"":"http:"===Tn[1]?80:443)),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=K.param(h.data,h.traditional)),T(Rn,h,n,x),2===w)return x;if(d=h.global,h.type=h.type.toUpperCase(),h.hasContent=!Dn.test(h.type),d&&0===K.active++&&K.event.trigger("ajaxStart"),!h.hasContent&&(h.data&&(h.url+=(Pn.test(h.url)?"&":"?")+h.data,delete h.data),o=h.url,h.cache===!1)){var _=K.now(),k=h.url.replace(On,"$1_="+_);h.url=k+(k===h.url?(Pn.test(h.url)?"&":"?")+"_="+_:"")}(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",h.contentType),h.ifModified&&(o=o||h.url,K.lastModified[o]&&x.setRequestHeader("If-Modified-Since",K.lastModified[o]),K.etag[o]&&x.setRequestHeader("If-None-Match",K.etag[o])),x.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Bn+"; q=0.01":""):h.accepts["*"]);for(u in h.headers)x.setRequestHeader(u,h.headers[u]);if(h.beforeSend&&(h.beforeSend.call(f,x,h)===!1||2===w))return x.abort();C="abort";for(u in{success:1,error:1,complete:1})x[u](h[u]);if(a=T(jn,h,n,x)){x.readyState=1,d&&p.trigger("ajaxSend",[x,h]),h.async&&h.timeout>0&&(l=setTimeout(function(){x.abort("timeout")},h.timeout));try{w=1,a.send(v,i)}catch(S){if(!(2>w))throw S;i(-1,S)}}else i(-1,"No Transport");return x},active:0,lastModified:{},etag:{}});var zn=[],Fn=/\?/,qn=/(=)\?(?=&|$)|\?\?/,Wn=K.now();K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zn.pop()||K.expando+"_"+Wn++;
                             return this[e]=!0,e
}
}),K.ajaxPrefilter("json jsonp",function(n,i,o) {
  var r,s,a,l=n.data,c=n.url,d=n.jsonp!==!1,u=d&&qn.test(c),h=d&&!u&&"string"==typeof l&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&qn.test(l);
  return"jsonp"===n.dataTypes[0]||u||h?(r=n.jsonpCallback=K.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,s=e[r],u?n.url=c.replace(qn,"$1"+r):h?n.data=l.replace(qn,"$1"+r):d&&(n.url+=(Fn.test(c)?"&":"?")+n.jsonp+"="+r),n.converters["script json"]=function() {
    return a||K.error(r+" was not called"),a[0]
  },n.dataTypes[0]="json",e[r]=function() {
    a=arguments
  },o.always(function() {
    e[r]=s,n[r]&&(n.jsonpCallback=i.jsonpCallback,zn.push(r)),a&&K.isFunction(s)&&s(a[0]),a=s=t
  }),"script"):void 0
}),K.ajaxSetup( {accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e) {
    return K.globalEval(e),e
  }
}
}),K.ajaxPrefilter("script",function(e) {
  e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),K.ajaxTransport("script",function(e) {
  if(e.crossDomain) {
    var n,i=z.head||z.getElementsByTagName("head")[0]||z.documentElement;
return {send:
function(o,r){n=z.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),n=t,o||r(200,"success"))},i.insertBefore(n,i.firstChild)},abort:
    function() {
      n&&n.onload(0,1)
    }
           }
  }
}); var Vn,Un=e.ActiveXObject?function() {
  for(var e in Vn)Vn[e](0,1)
}:!1,Gn=0; K.ajaxSettings.xhr=e.ActiveXObject?function() {
  return!this.isLocal&&N()||D()
}:N,function(e) {
K.extend(K.support, {ajax:!!e,cors:!!e&&"withCredentials"in e})
}(K.ajaxSettings.xhr()),K.support.ajax&&K.ajaxTransport(function(n) {
  if(!n.crossDomain||K.support.cors) {
    var i;
return {send:
    function(o,r) {
      var s,a,l=n.xhr();
      if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(a in n.xhrFields)l[a]=n.xhrFields[a];
      n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");
      try {
        for(a in o)l.setRequestHeader(a,o[a])
        } catch(c) {} l.send(n.hasContent&&n.data||null),i=function(e,o) {
        var a,c,d,u,h;
        try {
          if(i&&(o||4===l.readyState))if(i=t,s&&(l.onreadystatechange=K.noop,Un&&delete Vn[s]),o)4!==l.readyState&&l.abort();
            else {
              a=l.status,d=l.getAllResponseHeaders(),u= {},h=l.responseXML,h&&h.documentElement&&(u.xml=h);
              try {
                u.text=l.responseText
              } catch(e) {} try {
                c=l.statusText
              } catch(f) {
                c=""
              }
                a||!n.isLocal||n.crossDomain?1223===a&&(a=204):a=u.text?200:404
            }
        } catch(p) {
          o||r(-1,p)
        }
        u&&r(a,c,u,d)
      },n.async?4===l.readyState?setTimeout(i,0):(s=++Gn,Un&&(Vn||(Vn= {},K(e).unload(Un)),Vn[s]=i),l.onreadystatechange=i):i()
},abort:
    function() {
      i&&i(0,1)
    }
           }
  }
}); var Xn,Yn,Jn=/^(?:toggle|show|hide)$/,Qn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Kn=/queueHooks$/,Zn=[M],ei= {"*":[function(e,t) {
  var n,i,o=this.createTween(e,t),r=Qn.exec(t),s=o.cur(),a=+s||0,l=1,c=20;
  if(r) {
    if(n=+r[2],i=r[3]||(K.cssNumber[e]?"":"px"),"px"!==i&&a) {
      a=K.css(o.elem,e,!0)||n||1;
      do l=l||".5",a/=l,K.style(o.elem,e,a+i);
      while(l!==(l=o.cur()/s)&&1!==l&&--c)
      }
    o.unit=i,o.start=a,o.end=r[1]?a+(r[1]+1)*n:n
  }
                           return o
}]
}; K.Animation=K.extend(A, {tweener:function(e,t) {
  K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
  for(var n,i=0,o=e.length; o>i; i++)n=e[i],ei[n]=ei[n]||[],ei[n].unshift(t)
},prefilter:function(e,t) {
  t?Zn.unshift(e):Zn.push(e)
}
}),K.Tween=L,L.prototype= {constructor:L,init:function(e,t,n,i,o,r) {
  this.elem=e,this.prop=n,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(K.cssNumber[n]?"":"px")
},cur:function() {
  var e=L.propHooks[this.prop];
  return e&&e.get?e.get(this):L.propHooks._default.get(this)
},run:function(e) {
  var t,n=L.propHooks[this.prop];
  return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):L.propHooks._default.set(this),this
}
},L.prototype.init.prototype=L.prototype,L.propHooks= {_default:{get:function(e) {
    var t;
    return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,!1,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e) {
    K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
  }
}
},L.propHooks.scrollTop=L.propHooks.scrollLeft= {set:function(e) {
  e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}
},K.each(["toggle","show","hide"],function(e,t) {
  var n=K.fn[t];
  K.fn[t]=function(i,o,r) {
    return null==i||"boolean"==typeof i||!e&&K.isFunction(i)&&K.isFunction(o)?n.apply(this,arguments):this.animate(R(t,!0),i,o,r)
  }
}),K.fn.extend( {fadeTo:function(e,t,n,i) {
return this.filter(y).css("opacity",0).show().end().animate( {opacity:t},e,n,i)
},animate:function(e,t,n,i) {
  var o=K.isEmptyObject(e),r=K.speed(t,n,i),s=function() {
    var t=A(this,K.extend( {},e),r);
    o&&t.stop(!0)
  };
  return o||r.queue===!1?this.each(s):this.queue(r.queue,s)
},stop:function(e,n,i) {
  var o=function(e) {
    var t=e.stop;
    delete e.stop,t(i)
  };
  return"string"!=typeof e&&(i=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function() {
    var t=!0,n=null!=e&&e+"queueHooks",r=K.timers,s=K._data(this);
    if(n)s[n]&&s[n].stop&&o(s[n]);
    else for(n in s)s[n]&&s[n].stop&&Kn.test(n)&&o(s[n]);
    for(n=r.length; n--;)r[n].elem!==this||null!=e&&r[n].queue!==e||(r[n].anim.stop(i),t=!1,r.splice(n,1));
    (t||!i)&&K.dequeue(this,e)
  })
}
}),K.each( {slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t) {
  K.fn[e]=function(e,n,i) {
    return this.animate(t,e,n,i)
  }
}),K.speed=function(e,t,n) {
  var i=e&&"object"==typeof e?K.extend( {},e): {
        complete:
        n||!n&&t||K.isFunction(e)&&e,duration:
        e,easing:
          n&&t||t&&!K.isFunction(t)&&t
        };
  return i.duration=K.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in K.fx.speeds?K.fx.speeds[i.duration]:K.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function() {K.isFunction(i.old)&&i.old.call(this),i.queue&&K.dequeue(this,i.queue)},i
},K.easing= {linear:function(e) {
  return e
},swing:function(e) {
  return.5-Math.cos(e*Math.PI)/2
}
},K.timers=[],K.fx=L.prototype.init,K.fx.tick=function() {
  for(var e,t=K.timers,n=0; n<t.length; n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);
  t.length||K.fx.stop()
},K.fx.timer=function(e) {
  e()&&K.timers.push(e)&&!Yn&&(Yn=setInterval(K.fx.tick,K.fx.interval))
},K.fx.interval=13,K.fx.stop=function() {
  clearInterval(Yn),Yn=null
},K.fx.speeds= {slow:600,fast:200,_default:400},K.fx.step= {},K.expr&&K.expr.filters&&(K.expr.filters.animated=function(e) {
  return K.grep(K.timers,function(t) {
    return e===t.elem
  }).length
}); var ti=/^(?:body|html)$/i; K.fn.offset=function(e) {
  if(arguments.length)return e===t?this:this.each(function(t) {
    K.offset.setOffset(this,e,t)
  });
  var n,i,o,r,s,a,l,c= {top:0,left:0},d=this[0],u=d&&d.ownerDocument;
if(u)return(i=u.body)===d?K.offset.bodyOffset(d):(n=u.documentElement,K.contains(n,d)?("undefined"!=typeof d.getBoundingClientRect&&(c=d.getBoundingClientRect()),o=j(u),r=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,a=o.pageYOffset||n.scrollTop,l=o.pageXOffset||n.scrollLeft, {top:c.top+a-r,left:c.left+l-s}):c)
},K.offset= {bodyOffset:function(e) {
  var t=e.offsetTop,n=e.offsetLeft;
return K.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(K.css(e,"marginTop"))||0,n+=parseFloat(K.css(e,"marginLeft"))||0), {top:
       t,left:
         n
                                                                                                                                       }
},setOffset:function(e,t,n) {
  var i=K.css(e,"position"); "static"
  ===i&&(e.style.position="relative");
  var o,r,s=K(e),a=s.offset(),l=K.css(e,"top"),c=K.css(e,"left"),d=("absolute"===i||"fixed"===i)&&K.inArray("auto",[l,c])>-1,u= {},h= {};
  d?(h=s.position(),o=h.top,r=h.left):(o=parseFloat(l)||0,r=parseFloat(c)||0),K.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(u.top=t.top-a.top+o),null!=t.left&&(u.left=t.left-a.left+r),"using"in t?t.using.call(e,u):s.css(u)
}
},K.fn.extend( {position:function() {
  if(this[0]) {
var e=this[0],t=this.offsetParent(),n=this.offset(),i=ti.test(t[0].nodeName)? {top:0,left:0}:
                                          t.offset();
return n.top-=parseFloat(K.css(e,"marginTop"))||0,n.left-=parseFloat(K.css(e,"marginLeft"))||0,i.top+=parseFloat(K.css(t[0],"borderTopWidth"))||0,i.left+=parseFloat(K.css(t[0],"borderLeftWidth"))||0, {top:
              n.top-i.top,left:
                  n.left-i.left
                                                                                                                                                                                                            }
  }
},offsetParent:function() {
  return this.map(function() {
    for(var e=this.offsetParent||z.body; e&&!ti.test(e.nodeName)&&"static"===K.css(e,"position");)e=e.offsetParent;
    return e||z.body
  })
}
}),K.each( {scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n) {
  var i=/Y/.test(n);
  K.fn[e]=function(o) {
    return K.access(this,function(e,o,r) {
      var s=j(e);
return r===t?s?n in s?s[n]:s.document.documentElement[o]:e[o]:(s?s.scrollTo(i?K(s).scrollLeft():r,i?r:K(s).scrollTop()):e[o]=r,void 0)
      },e,o,arguments.length,null)
  }
}),K.each( {Height:"height",Width:"width"},function(e,n) {
K.each( {padding:"inner"+e,content:n,"":"outer"+e},function(i,o) {
    K.fn[o]=function(o,r) {
      var s=arguments.length&&(i||"boolean"!=typeof o),a=i||(o===!0||r===!0?"margin":"border");
      return K.access(this,function(n,i,o) {
        var r;
        return K.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(r=n.documentElement,Math.max(n.body["scroll"+e],r["scroll"+e],n.body["offset"+e],r["offset"+e],r["client"+e])):o===t?K.css(n,i,o,a):K.style(n,i,o,a)
      },n,s?o:t,s,null)
    }
  })
}),e.jQuery=e.$=K,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function() {
  return K
})
}(window),function() {
  function e(t,n,i) {
    if(t===n)return 0!==t||1/t==1/n;
    if(null==t||null==n)return t===n;
    if(t._chain&&(t=t._wrapped),n._chain&&(n=n._wrapped),t.isEqual&&_.isFunction(t.isEqual))return t.isEqual(n);
    if(n.isEqual&&_.isFunction(n.isEqual))return n.isEqual(t);
    var o=c.call(t);
    if(o!=c.call(n))return!1;
    switch(o) {
    case"[object String]":
      return t==String(n);
    case"[object Number]":
      return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;
    case"[object Date]":
    case"[object Boolean]":
      return+t==+n;
    case"[object RegExp]":
      return t.source==n.source&&t.global==n.global&&t.multiline==n.multiline&&t.ignoreCase==n.ignoreCase
    }
           if("object"!=typeof t||"object"!=typeof n)return!1;
    for(var r=i.length; r--;)if(i[r]==t)return!0;
    i.push(t);
    var s=0,a=!0;
    if("[object Array]"==o) {
      if(s=t.length,a=s==n.length)for(; s--&&(a=s in t==s in n&&e(t[s],n[s],i)););
    } else {
      if("constructor"in t!="constructor"in n||t.constructor!=n.constructor)return!1;
      for(var l in t)if(_.has(t,l)&&(s++,!(a=_.has(n,l)&&e(t[l],n[l],i))))break;
      if(a) {
        for(l in n)if(_.has(n,l)&&!s--)break;
        a=!s
      }
    }
      return i.pop(),a
  }
  var t=this,n=t._,i= {},o=Array.prototype,r=Object.prototype,s=Function.prototype,a=o.slice,l=o.unshift,c=r.toString,d=r.hasOwnProperty,u=o.forEach,h=o.map,f=o.reduce,p=o.reduceRight,m=o.filter,g=o.every,y=o.some,v=o.indexOf,b=o.lastIndexOf,w=Array.isArray,C=Object.keys,x=s.bind,_=function(e) {
    return new D(e)
  }; "undefined"
  !=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=_),exports._=_):t._=_,_.VERSION="1.3.1";
  var k=_.each=_.forEach=function(e,t,n) {
    if(null!=e)if(u&&e.forEach===u)e.forEach(t,n);
      else if(e.length===+e.length) {
        for(var o=0,r=e.length; r>o; o++)if(o in e&&t.call(n,e[o],o,e)===i)return
          } else for(var s in e)if(_.has(e,s)&&t.call(n,e[s],s,e)===i)return
          };
  _.map=_.collect=function(e,t,n) {
    var i=[];
    return null==e?i:h&&e.map===h?e.map(t,n):(k(e,function(e,o,r) {
      i[i.length]=t.call(n,e,o,r)
    }),e.length===+e.length&&(i.length=e.length),i)
  },_.reduce=_.foldl=_.inject=function(e,t,n,i) {
    var o=arguments.length>2;
    if(null==e&&(e=[]),f&&e.reduce===f)return i&&(t=_.bind(t,i)),o?e.reduce(t,n):e.reduce(t);
    if(k(e,function(e,r,s) {
    o?n=t.call(i,n,e,r,s):(n=e,o=!0)
    }),!o)throw new TypeError("Reduce of empty array with no initial value");
    return n
  },_.reduceRight=_.foldr=function(e,t,n,i) {var o=arguments.length>2; if(null==e&&(e=[]),p&&e.reduceRight===p)return i&&(t=_.bind(t,i)),o?e.reduceRight(t,n):e.reduceRight(t); var r=_.toArray(e).reverse(); return i&&!o&&(t=_.bind(t,i)),o?_.reduce(r,t,n,i):_.reduce(r,t)},_.find=_.detect=function(e,t,n) {
    var i;
    return T(e,function(e,o,r) {
      return t.call(n,e,o,r)?(i=e,!0):void 0
    }),i
  },_.filter=_.select=function(e,t,n) {
    var i=[];
    return null==e?i:m&&e.filter===m?e.filter(t,n):(k(e,function(e,o,r) {
      t.call(n,e,o,r)&&(i[i.length]=e)
    }),i)
  },_.reject=function(e,t,n) {
    var i=[];
    return null==e?i:(k(e,function(e,o,r) {
      t.call(n,e,o,r)||(i[i.length]=e)
    }),i)
  },_.every=_.all=function(e,t,n) {
    var o=!0;
    return null==e?o:g&&e.every===g?e.every(t,n):(k(e,function(e,r,s) {
      return(o=o&&t.call(n,e,r,s))?void 0:i
    }),o)
  };
  var T=_.some=_.any=function(e,t,n) {
    t||(t=_.identity);
    var o=!1;
    return null==e?o:y&&e.some===y?e.some(t,n):(k(e,function(e,r,s) {
      return o||(o=t.call(n,e,r,s))?i:void 0
    }),!!o)
  };
  _.include=_.contains=function(e,t) {
    var n=!1;
    return null==e?n:v&&e.indexOf===v?-1!=e.indexOf(t):n=T(e,function(e) {
      return e===t
    })
  },_.invoke=function(e,t) {
    var n=a.call(arguments,2);
    return _.map(e,function(e) {
      return(_.isFunction(t)?t||e:e[t]).apply(e,n)
    })
  },_.pluck=function(e,t) {
    return _.map(e,function(e) {
      return e[t]
    })
  },_.max=function(e,t,n) {
    if(!t&&_.isArray(e))return Math.max.apply(Math,e);
    if(!t&&_.isEmpty(e))return-1/0;
var i= {computed:
            -1/0
           };
    return k(e,function(e,o,r) {
      var s=t?t.call(n,e,o,r):e;
s>=i.computed&&(i= {value:e,computed:s})
    }),i.value
  },_.min=function(e,t,n) {
    if(!t&&_.isArray(e))return Math.min.apply(Math,e);
    if(!t&&_.isEmpty(e))return 1/0;
    var i= {computed:1/0};
    return k(e,function(e,o,r) {
      var s=t?t.call(n,e,o,r):e;
s<i.computed&&(i= {value:e,computed:s})
    }),i.value
  },_.shuffle=function(e) {
    var t,n=[];
    return k(e,function(e,i) {
      0==i?n[0]=e:(t=Math.floor(Math.random()*(i+1)),n[i]=n[t],n[t]=e)
    }),n
  },_.sortBy=function(e,t,n) {
    return _.pluck(_.map(e,function(e,i,o) {
return {value:
        e,criteria:
              t.call(n,e,i,o)
             }
    }).sort(function(e,t) {
      var n=e.criteria,i=t.criteria;
      return i>n?-1:n>i?1:0
    }),"value")
  },_.groupBy=function(e,t) {
    var n= {},i=_.isFunction(t)?t:function(e) {
      return e[t]
    };
    return k(e,function(e,t) {
      var o=i(e,t);
      (n[o]||(n[o]=[])).push(e)
    }),n
  },_.sortedIndex=function(e,t,n) {
    n||(n=_.identity);
    for(var i=0,o=e.length; o>i;) {
      var r=i+o>>1;
      n(e[r])<n(t)?i=r+1:o=r
    }
                         return i
  },_.toArray=function(e) {
    return e?e.toArray?e.toArray():_.isArray(e)?a.call(e):_.isArguments(e)?a.call(e):_.values(e):[]
    },_.size=function(e) {
    return _.toArray(e).length
  },_.first=_.head=function(e,t,n) {
    return null==t||n?e[0]:a.call(e,0,t)
  },_.initial=function(e,t,n) {
    return a.call(e,0,e.length-(null==t||n?1:t))
  },_.last=function(e,t,n) {
    return null==t||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))
  },_.rest=_.tail=function(e,t,n) {
    return a.call(e,null==t||n?1:t)
  },_.compact=function(e) {
    return _.filter(e,function(e) {
      return!!e
    })
  },_.flatten=function(e,t) {
    return _.reduce(e,function(e,n) {
      return _.isArray(n)?e.concat(t?n:_.flatten(n)):(e[e.length]=n,e)
      },[])
  },_.without=function(e) {
    return _.difference(e,a.call(arguments,1))
  },_.uniq=_.unique=function(e,t,n) {
    var i=n?_.map(e,n):e,o=[];
    return _.reduce(i,function(n,i,r) {
      return 0!=r&&(t===!0?_.last(n)==i:_.include(n,i))||(n[n.length]=i,o[o.length]=e[r]),n
    },[]),o
  },_.union=function() {
    return _.uniq(_.flatten(arguments,!0))
  },_.intersection=_.intersect=function(e) {
    var t=a.call(arguments,1);
    return _.filter(_.uniq(e),function(e) {
      return _.every(t,function(t) {
        return _.indexOf(t,e)>=0
      })
    })
  },_.difference=function(e) {
    var t=_.flatten(a.call(arguments,1));
    return _.filter(e,function(e) {
      return!_.include(t,e)
    })
  },_.zip=function() {
    for(var e=a.call(arguments),t=_.max(_.pluck(e,"length")),n=new Array(t),i=0; t>i; i++)n[i]=_.pluck(e,""+i);
    return n
  },_.indexOf=function(e,t,n) {
    if(null==e)return-1;
    var i,o;
    if(n)return i=_.sortedIndex(e,t),e[i]===t?i:-1;
    if(v&&e.indexOf===v)return e.indexOf(t);
    for(i=0,o=e.length; o>i; i++)if(i in e&&e[i]===t)return i;
    return-1
  },_.lastIndexOf=function(e,t) {
    if(null==e)return-1;
    if(b&&e.lastIndexOf===b)return e.lastIndexOf(t);
    for(var n=e.length; n--;)if(n in e&&e[n]===t)return n;
    return-1
  },_.range=function(e,t,n) {
    arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;
    for(var i=Math.max(Math.ceil((t-e)/n),0),o=0,r=new Array(i); i>o;)r[o++]=e,e+=n;
    return r
  };
  var S=function() {};
  _.bind=function(e,t) {
    var n,i;
    if(e.bind===x&&x)return x.apply(e,a.call(arguments,1));
    if(!_.isFunction(e))throw new TypeError;
    return i=a.call(arguments,2),n=function() {
      if(!(this instanceof n))return e.apply(t,i.concat(a.call(arguments)));
      S.prototype=e.prototype;
      var o=new S,r=e.apply(o,i.concat(a.call(arguments)));
      return Object(r)===r?r:o
    }
  },_.bindAll=function(e) {
    var t=a.call(arguments,1);
    return 0==t.length&&(t=_.functions(e)),k(t,function(t) {
      e[t]=_.bind(e[t],e)
    }),e
  },_.memoize=function(e,t) {
    var n= {};
    return t||(t=_.identity),function() {
      var i=t.apply(this,arguments);
      return _.has(n,i)?n[i]:n[i]=e.apply(this,arguments)
    }
  },_.delay=function(e,t) {
    var n=a.call(arguments,2);
    return setTimeout(function() {
      return e.apply(e,n)
    },t)
  },_.defer=function(e) {
    return _.delay.apply(_,[e,1].concat(a.call(arguments,1)))
  },_.throttle=function(e,t) {
    var n,i,o,r,s,a=_.debounce(function() {
      s=r=!1
    },t);
    return function() {
      n=this,i=arguments;
      var l=function() {
        o=null,s&&e.apply(n,i),a()
      };
      o||(o=setTimeout(l,t)),r?s=!0:e.apply(n,i),a(),r=!0
    }
  },_.debounce=function(e,t) {
    var n;
    return function() {
      var i=this,o=arguments,r=function() {
        n=null,e.apply(i,o)
      };
      clearTimeout(n),n=setTimeout(r,t)
    }
  },_.once=function(e) {
    var t,n=!1;
    return function() {
      return n?t:(n=!0,t=e.apply(this,arguments))
    }
  },_.wrap=function(e,t) {
    return function() {
      var n=[e].concat(a.call(arguments,0));
      return t.apply(this,n)
    }
  },_.compose=function() {
    var e=arguments;
    return function() {
      for(var t=arguments,n=e.length-1; n>=0; n--)t=[e[n].apply(this,t)];
      return t[0]
    }
  },_.after=function(e,t) {
    return 0>=e?t():function() {
      return--e<1?t.apply(this,arguments):void 0
    }
  },_.keys=C||function(e) {
    if(e!==Object(e))throw new TypeError("Invalid object");
    var t=[];
    for(var n in e)_.has(e,n)&&(t[t.length]=n);
    return t
  },_.values=function(e) {
    return _.map(e,_.identity)
  },_.functions=_.methods=function(e) {
    var t=[];
    for(var n in e)_.isFunction(e[n])&&t.push(n);
    return t.sort()
  },_.extend=function(e) {
    return k(a.call(arguments,1),function(t) {
      for(var n in t)e[n]=t[n]
      }),e
  },_.defaults=function(e) {
    return k(a.call(arguments,1),function(t) {
      for(var n in t)null==e[n]&&(e[n]=t[n])
      }),e
  },_.clone=function(e) {
    return _.isObject(e)?_.isArray(e)?e.slice():_.extend( {},e):e
    },_.tap=function(e,t) {
    return t(e),e
  },_.isEqual=function(t,n) {
    return e(t,n,[])
  },_.isEmpty=function(e) {
    if(_.isArray(e)||_.isString(e))return 0===e.length;
    for(var t in e)if(_.has(e,t))return!1;
    return!0
  },_.isElement=function(e) {
    return!(!e||1!=e.nodeType)
  },_.isArray=w||function(e) {
    return"[object Array]"==c.call(e)
  },_.isObject=function(e) {
    return e===Object(e)
  },_.isArguments=function(e) {
    return"[object Arguments]"==c.call(e)
  },_.isArguments(arguments)||(_.isArguments=function(e) {
    return!(!e||!_.has(e,"callee"))
  }),_.isFunction=function(e) {
    return"[object Function]"==c.call(e)
  },_.isString=function(e) {
    return"[object String]"==c.call(e)
  },_.isNumber=function(e) {
    return"[object Number]"==c.call(e)
  },_.isNaN=function(e) {
    return e!==e
  },_.isBoolean=function(e) {
    return e===!0||e===!1||"[object Boolean]"==c.call(e)
  },_.isDate=function(e) {
    return"[object Date]"==c.call(e)
  },_.isRegExp=function(e) {
    return"[object RegExp]"==c.call(e)
  },_.isNull=function(e) {
    return null===e
  },_.isUndefined=function(e) {
    return void 0===e
  },_.has=function(e,t) {
    return d.call(e,t)
  },_.noConflict=function() {
    return t._=n,this
  },_.identity=function(e) {
    return e
  },_.times=function(e,t,n) {
    for(var i=0; e>i; i++)t.call(n,i)
    },_.escape=function(e) {
return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot; ").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},_.mixin=function(e){k(_.functions(e),function(t){P(t,_[t]=e[t])})};var E=0;_.uniqueId=function(e){var t=E++;return e?e+t:t},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/.^/,N=function(e){return e.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};_.template=function(e,t){var n=_.templateSettings,i="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(n.escape||I,function(e,t){return"',_.escape("+N(t)+"),'"}).replace(n.interpolate||I,function(e,t){return"',"+N(t)+",'"}).replace(n.evaluate||I,function(e,t){return"');"+N(t).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",o=new Function("obj","_",i);return t?o(t,_):function(e){return o.call(this,e,_)}},_.chain=function(e){return _(e).chain()};var D=function(e){this._wrapped=e};_.prototype=D.prototype;var $=function(e,t){return t?_(e).chain():e},P=function(e,t){D.prototype[e]=function(){var e=a.call(arguments);return l.call(e,this._wrapped),$(t.apply(_,e),this._chain)}};_.mixin(_),k(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];D.prototype[e]=function(){var n=this._wrapped;t.apply(n,arguments);var i=n.length;return"shift"!=e&&"splice"!=e||0!==i||delete n[0],$(n,this._chain)}}),k(["concat","join","slice"],function(e){var t=o[e];D.prototype[e]=function(){return $(t.apply(this._wrapped,arguments),this._chain)}}),D.prototype.chain=function(){return this._chain=!0,this},D.prototype.value=function(){return this._wrapped}}.call(this),function(){var e,t=this,n=t.Backbone,i=Array.prototype.slice,o=Array.prototype.splice;e="undefined"!=typeof exports?exports:t.Backbone={},e.VERSION="0.9.2";var r=t._;r||"undefined"==typeof require||(r=require("underscore"));var s=t.jQuery||t.Zepto||t.ender;e.setDomLibrary=function(e){s=e},e.noConflict=function(){return t.Backbone=n,this},e.emulateHTTP=!1,e.emulateJSON=!1;var a=/\s+/,l=e.Events={on:function(e,t,n){var i,o,r,s,l;if(!t)return this;for(e=e.split(a),i=this._callbacks||(this._callbacks={});o=e.shift();)l=i[o],r=l?l.tail:{},r.next=s={},r.context=n,r.callback=t,i[o]={tail:s,next:l?l.next:r};return this},off:function(e,t,n){var i,o,s,l,c,d;if(o=this._callbacks){if(!(e||t||n))return delete this._callbacks,this;for(e=e?e.split(a):r.keys(o);i=e.shift();)if(s=o[i],delete o[i],s&&(t||n))for(l=s.tail;(s=s.next)!==l;)c=s.callback,d=s.context,(t&&c!==t||n&&d!==n)&&this.on(i,c,d);return this}},trigger:function(e){var t,n,o,r,s,l,c;if(!(o=this._callbacks))return this;for(l=o.all,e=e.split(a),c=i.call(arguments,1);t=e.shift();){if(n=o[t])for(r=n.tail;(n=n.next)!==r;)n.callback.apply(n.context||this,c);if(n=l)for(r=n.tail,s=[t].concat(c);(n=n.next)!==r;)n.callback.apply(n.context||this,s)}return this}};l.bind=l.on,l.unbind=l.off;var c=e.Model=function(e,t){var n;e||(e={}),t&&t.parse&&(e=this.parse(e)),(n=S(this,"defaults"))&&(e=r.extend({},n,e)),t&&t.collection&&(this.collection=t.collection),this.attributes={},this._escapedAttributes={},this.cid=r.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(e,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=r.clone(this.attributes),this.initialize.apply(this,arguments)};r.extend(c.prototype,l,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return r.clone(this.attributes)},get:function(e){return this.attributes[e]},escape:function(e){var t;if(t=this._escapedAttributes[e])return t;var n=this.get(e);return this._escapedAttributes[e]=r.escape(null==n?"":""+n)},has:function(e){return null!=this.get(e)},set:function(e,t,n){var i,o,s;if(r.isObject(e)||null==e?(i=e,n=t):(i={},i[e]=t),n||(n={}),!i)return this;if(i instanceof c&&(i=i.attributes),n.unset)for(o in i)i[o]=void 0;if(!this._validate(i,n))return!1;this.idAttribute in i&&(this.id=i[this.idAttribute]);var a=n.changes={},l=this.attributes,d=this._escapedAttributes,u=this._previousAttributes||{};for(o in i)s=i[o],(!r.isEqual(l[o],s)||n.unset&&r.has(l,o))&&(delete d[o],(n.silent?this._silent:a)[o]=!0),n.unset?delete l[o]:l[o]=s,r.isEqual(u[o],s)&&r.has(l,o)==r.has(u,o)?(delete this.changed[o],delete this._pending[o]):(this.changed[o]=s,n.silent||(this._pending[o]=!0));return n.silent||this.change(n),this},unset:function(e,t){return(t||(t={})).unset=!0,this.set(e,null,t)},clear:function(e){return(e||(e={})).unset=!0,this.set(r.clone(this.attributes),e)},fetch:function(t){t=t?r.clone(t):{};var n=this,i=t.success;return t.success=function(e,o,r){return n.set(n.parse(e,r),t)?(i&&i(n,e),void 0):!1},t.error=e.wrapError(t.error,n,t),(this.sync||e.sync).call(this,"read",this,t)},save:function(t,n,i){var o,s;if(r.isObject(t)||null==t?(o=t,i=n):(o={},o[t]=n),i=i?r.clone(i):{},i.wait){if(!this._validate(o,i))return!1;s=r.clone(this.attributes)}var a=r.extend({},i,{silent:!0});if(o&&!this.set(o,i.wait?a:i))return!1;var l=this,c=i.success;i.success=function(e,t,n){var s=l.parse(e,n);return i.wait&&(delete i.wait,s=r.extend(o||{},s)),l.set(s,i)?(c?c(l,e):l.trigger("sync",l,e,i),void 0):!1},i.error=e.wrapError(i.error,l,i);var d=this.isNew()?"create":"update",u=(this.sync||e.sync).call(this,d,this,i);return i.wait&&this.set(s,a),u},destroy:function(t){t=t?r.clone(t):{};var n=this,i=t.success,o=function(){n.trigger("destroy",n,n.collection,t)};if(this.isNew())return o(),!1;t.success=function(e){t.wait&&o(),i?i(n,e):n.trigger("sync",n,e,t)},t.error=e.wrapError(t.error,n,t);var s=(this.sync||e.sync).call(this,"delete",this,t);return t.wait||o(),s},url:function(){var e=S(this,"urlRoot")||S(this.collection,"url")||E();return this.isNew()?e:e+("/"==e.charAt(e.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(e){e||(e={});var t=this._changing;this._changing=!0;for(var n in this._silent)this._pending[n]=!0;var i=r.extend({},e.changes,this._silent);this._silent={};for(var n in i)this.trigger("change:"+n,this,this.get(n),e);if(t)return this;for(;!r.isEmpty(this._pending);){this._pending={},this.trigger("change",this,e);for(var n in this.changed)this._pending[n]||this._silent[n]||delete this.changed[n];this._previousAttributes=r.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(e){return arguments.length?r.has(this.changed,e):!r.isEmpty(this.changed)},changedAttributes:function(e){if(!e)return this.hasChanged()?r.clone(this.changed):!1;var t,n=!1,i=this._previousAttributes;for(var o in e)r.isEqual(i[o],t=e[o])||((n||(n={}))[o]=t);return n},previous:function(e){return arguments.length&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return r.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(e,t){if(t.silent||!this.validate)return!0;e=r.extend({},this.attributes,e);var n=this.validate(e,t);return n?(t&&t.error?t.error(this,n,t):this.trigger("error",this,n,t),!1):!0}});var d=e.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,{silent:!0,parse:t.parse})};r.extend(d.prototype,l,{model:c,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},add:function(e,t){var n,i,s,a,l,c,d={},u={},h=[];for(t||(t={}),e=r.isArray(e)?e.slice():[e],n=0,s=e.length;s>n;n++){if(!(a=e[n]=this._prepareModel(e[n],t)))throw new Error("Can't add an invalid model to a collection");
  l=a.cid,c=a.id,d[l]||this._byCid[l]||null!=c&&(u[c]||this._byId[c])?h.push(n):d[l]=u[c]=a}for(n=h.length;n--;)e.splice(h[n],1);for(n=0,s=e.length;s>n;n++)(a=e[n]).on("all",this._onModelEvent,this),this._byCid[a.cid]=a,null!=a.id&&(this._byId[a.id]=a);if(this.length+=s,i=null!=t.at?t.at:this.models.length,o.apply(this.models,[i,0].concat(e)),this.comparator&&this.sort({silent:!0}),t.silent)return this;for(n=0,s=this.models.length;s>n;n++)d[(a=this.models[n]).cid]&&(t.index=n,a.trigger("add",a,this,t));return this},remove:function(e,t){var n,i,o,s;for(t||(t={}),e=r.isArray(e)?e.slice():[e],n=0,i=e.length;i>n;n++)s=this.getByCid(e[n])||this.get(e[n]),s&&(delete this._byId[s.id],delete this._byCid[s.cid],o=this.indexOf(s),this.models.splice(o,1),this.length--,t.silent||(t.index=o,s.trigger("remove",s,this,t)),this._removeReference(s));return this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,t),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,r.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},get:function(e){return null==e?void 0:this._byId[null!=e.id?e.id:e]},getByCid:function(e){return e&&this._byCid[e.cid||e]},at:function(e){return this.models[e]},where:function(e){return r.isEmpty(e)?[]:this.filter(function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},sort:function(e){if(e||(e={}),!this.comparator)throw new Error("Cannot sort a set without a comparator");var t=r.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(t):this.models.sort(t),e.silent||this.trigger("reset",this,e),this},pluck:function(e){return r.map(this.models,function(t){return t.get(e)})},reset:function(e,t){e||(e=[]),t||(t={});for(var n=0,i=this.models.length;i>n;n++)this._removeReference(this.models[n]);return this._reset(),this.add(e,r.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},fetch:function(t){t=t?r.clone(t):{},void 0===t.parse&&(t.parse=!0);var n=this,i=t.success;return t.success=function(e,o,r){n[t.add?"add":"reset"](n.parse(e,r),t),i&&i(n,e)},t.error=e.wrapError(t.error,n,t),(this.sync||e.sync).call(this,"read",this,t)},create:function(e,t){var n=this;if(t=t?r.clone(t):{},e=this._prepareModel(e,t),!e)return!1;t.wait||n.add(e,t);var i=t.success;return t.success=function(o,r){t.wait&&n.add(o,t),i?i(o,r):o.trigger("sync",e,r,t)},e.save(null,t),e},parse:function(e){return e},chain:function(){return r(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(e,t){if(t||(t={}),e instanceof c)e.collection||(e.collection=this);else{var n=e;t.collection=this,e=new this.model(n,t),e._validate(e.attributes,t)||(e=!1)}return e},_removeReference:function(e){this==e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,i){("add"!=e&&"remove"!=e||n==this)&&("destroy"==e&&this.remove(t,i),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],this._byId[t.id]=t),this.trigger.apply(this,arguments))}});var u=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];r.each(u,function(e){d.prototype[e]=function(){return r[e].apply(r,[this.models].concat(r.toArray(arguments)))}});var h=e.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},f=/:\w+/g,p=/\*\w+/g,m=/[-[\]{}()+?.,\\^$|#\s]/g;r.extend(h.prototype,l,{initialize:function(){},route:function(t,n,i){return e.history||(e.history=new g),r.isRegExp(t)||(t=this._routeToRegExp(t)),i||(i=this[n]),e.history.route(t,r.bind(function(o){var r=this._extractParameters(t,o);i&&i.apply(this,r),this.trigger.apply(this,["route:"+n].concat(r)),e.history.trigger("route",this,n,r)},this)),this},navigate:function(t,n){e.history.navigate(t,n)},_bindRoutes:function(){if(this.routes){var e=[];for(var t in this.routes)e.unshift([t,this.routes[t]]);for(var n=0,i=e.length;i>n;n++)this.route(e[n][0],e[n][1],this[e[n][1]])}},_routeToRegExp:function(e){return e=e.replace(m,"\\$&").replace(f,"([^/]+)").replace(p,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){return e.exec(t).slice(1)}});var g=e.History=function(){this.handlers=[],r.bindAll(this,"checkUrl")},y=/^[#\/]/,v=/msie [\w.]+/;g.started=!1,r.extend(g.prototype,l,{interval:50,getHash:function(e){var t=e?e.location:window.location,n=t.href.match(/#(.*)$/);return n?n[1]:""},getFragment:function(e,t){if(null==e)if(this._hasPushState||t){e=window.location.pathname;var n=window.location.search;n&&(e+=n)}else e=this.getHash();return e.indexOf(this.options.root)||(e=e.substr(this.options.root.length)),e.replace(y,"")},start:function(e){if(g.started)throw new Error("Backbone.history has already been started");g.started=!0,this.options=r.extend({},{root:"/"},this.options,e),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var t=this.getFragment(),n=document.documentMode,i=v.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);i&&(this.iframe=s('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?s(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?s(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t;var o=window.location,a=o.pathname==this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&o.hash&&(this.fragment=this.getHash().replace(y,""),window.history.replaceState({},document.title,o.protocol+"//"+o.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){s(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),g.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(){var e=this.getFragment();return e==this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e==this.fragment?!1:(this.iframe&&this.navigate(e),this.loadUrl()||this.loadUrl(this.getHash()),void 0)},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=r.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0});return n},navigate:function(e,t){if(!g.started)return!1;t&&t!==!0||(t={trigger:t});var n=(e||"").replace(y,"");this.fragment!=n&&(this._hasPushState?(0!=n.indexOf(this.options.root)&&(n=this.options.root+n),this.fragment=n,window.history[t.replace?"replaceState":"pushState"]({},document.title,n)):this._wantsHashChange?(this.fragment=n,this._updateHash(window.location,n,t.replace),this.iframe&&n!=this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,n,t.replace))):window.location.assign(this.options.root+e),t.trigger&&this.loadUrl(e))},_updateHash:function(e,t,n){n?e.replace(e.toString().replace(/(javascript:|#).*$/,"")+"#"+t):e.hash=t}});var b=e.View=function(e){this.cid=r.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},w=/^(\S+)\s*(.*)$/,C=["model","collection","el","id","attributes","className","tagName"];r.extend(b.prototype,l,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(e,t,n){var i=document.createElement(e);return t&&s(i).attr(t),null!=n&&s(i).html(n),i},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof s?e:s(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(e||(e=S(this,"events"))){this.undelegateEvents();for(var t in e){var n=e[t];if(r.isFunction(n)||(n=this[e[t]]),!n)throw new Error('Method "'+e[t]+'" does not exist');var i=t.match(w),o=i[1],s=i[2];n=r.bind(n,this),o+=".delegateEvents"+this.cid,""===s?this.$el.bind(o,n):this.$el.delegate(s,o,n)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(e){this.options&&(e=r.extend({},this.options,e));for(var t=0,n=C.length;n>t;t++){var i=C[t];e[i]&&(this[i]=e[i])}this.options=e},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var e=S(this,"attributes")||{};this.id&&(e.id=this.id),this.className&&(e["class"]=this.className),this.setElement(this.make(this.tagName,e),!1)}}});var x=function(e,t){var n=T(this,e,t);return n.extend=this.extend,n};c.extend=d.extend=h.extend=b.extend=x;var _={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(t,n,i){var o=_[t];i||(i={});var a={type:o,dataType:"json"};
      return i.url||(a.url=S(n,"url")||E()),i.data||!n||"create"!=t&&"update"!=t||(a.contentType="application/json",a.data=JSON.stringify(n.toJSON())),e.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),e.emulateHTTP&&("PUT"===o||"DELETE"===o)&&(e.emulateJSON&&(a.data._method=o),a.type="POST",a.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",o)}),"GET"===a.type||e.emulateJSON||(a.processData=!1),s.ajax(r.extend(a,i))},e.wrapError=function(e,t,n){return function(i,o){o=i===t?o:i,e?e(t,o,n):t.trigger("error",t,o,n)}};var k=function(){},T=function(e,t,n){var i;return i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){e.apply(this,arguments)},r.extend(i,e),k.prototype=e.prototype,i.prototype=new k,t&&r.extend(i.prototype,t),n&&r.extend(i,n),i.prototype.constructor=i,i.__super__=e.prototype,i},S=function(e,t){return e&&e[t]?r.isFunction(e[t])?e[t]():e[t]:null},E=function(){throw new Error('A "url" property or function must be specified')}}.call(this),function(){var e="undefined"!=typeof template?template:void 0,t=window,n=Object.prototype.toString,i=function(e,t){var n=r[e](t);return"undefined"!=typeof jQuery?jQuery(n):n},o={t:i},r=i._={};i.noConflict=function(){return t.template=e,i};var s=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},a=Array.isArray||function(e){return"[object Array]"==n.call(e)};i.$e=function(e){return String(e)},i.$a=function(e){var t=[],n=e.terse;delete e.terse;var i=s(e),r=i.length;if(r){t.push("");for(var l=0;r>l;++l){var c=i[l],d=e[c];"boolean"==typeof d||null==d?d&&(n?t.push(c):t.push(c+'="'+c+'"')):"class"==c&&a(d)?t.push(c+'="'+o.t.$e(d.join(" "))+'"'):t.push(c+'="'+o.t.$e(d)+'"')}}return t.join(" ")},t.template||(t.template=i)}(),ty.region={},Backbone.Router.prototype.route=function(e,t,n){return Backbone.history||(Backbone.history=new Backbone.History),_.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[t]),Backbone.history.route(e,_.bind(function(i){var o=this._extractParameters(e,i);n&&n.apply(this,o);for(var r=t.split(" "),s=r.length-1;s>=0;s--)this.trigger.apply(this,["route:"+r[s]].concat(o));Backbone.history.trigger("route",this,t,o)},this)),this},tyController=Backbone.Router.extend({routes:{"":"index"},initialize:function(){return this},index:function(){}}),ty.View=Backbone.View.extend({region:function(e){ty.layout[e]},destroy:function(){this.undelegateEvents(),this.unbind(),this.remove();for(var e in this.modelBind)this.modelBind.hasOwnProperty(e)&&this.model.unbind(e,this[this.modelBind[e]]);$(this.el).removeData().unbind(),this.onClose&&this.onClose(),delete this},form:function(e,t){var n=this,i={template:e,view:n};return t=_.extend(i,t),new ty.Form(t)},nodeEdit:function(e,t){return ty.node.edit(this.model,e,t),this},element:function(e,t,n){var i,o=$.extend({lite:!1,replace:!0},n);this.model&&(i=this.model.toJSON()),t&&(i=i?_.extend(i,t):t),i||(i={});var r=ty.t(e,i);return this.oldEl=this.el,this.setElement(r),this.el=$(this.el),this.el.data("tydai",{view:this}),o.replace&&this.oldEl.jquery&&this.oldEl.replaceWith(this.el),o.lite||ty.fieldsRun(this.el,i.nid),this.el}}),ty.Model=Backbone.Model.extend({url:function(){return this.address?"/api/"+this.address():void 0},setDeep:function(e,t){for(var e=e.split("."),n=this.attributes,i=0;i<e.length-1;i+=1)n[e[i]]||(n[e[i]]={}),n=n[e[i]];return n[e[e.length-1]]=t,this.set(n),this}});var NodeModel=ty.Model.extend({idAttribute:"nid",address:function(){return"node/"+this.id}});ty.router=new tyController,ty.route=function(e,t){function n(){ty.route.currentSection&&$.each(ty.route.currentSection,function(e,t){-1==o.indexOf(t)&&$(document).trigger(t+":sectionClose")}),ty.route.currentSection=o}function i(){ty.router.route(e,t,function(){n(),r.apply(this,arguments)}),ty.router.route(e+"/",t,function(){n(),r.apply(this,arguments)})}var o=t.split(" "),r=arguments[arguments.length-1];"string"==typeof arguments[2]?window.location.host.match(/\./gi).length>1&&i():i()},ty.route.bind=function(e,t,n){var e=e.split(" ");_.each(e,function(e){ty.router.bind("route:"+e,function(){t.apply(this,arguments)})}),n&&t.apply(this,arguments)},ty.route.sectionAdd=function(e){ty.route.currentSection=ty.route.currentSection?$.merge(ty.route.currentSection,e.split(" ")):e.split(" ")},ty.route.sectionClose=function(e,t){$(document).one(e+":sectionClose",function(){t&&t(e)})},$("a").live("click",function(e){var t=$(this).attr("href");!t||"mailto:"==t.substring(0,7)||"http"==t.substring(0,4)||$(this).attr("target")||"#"==t||"#"==t[0]||$(this).hasClass("preventDefault")||$(this).parent().hasClass("preventDefault")||(e.preventDefault(),"/"==t.charAt(0)&&(t=t.substr(1)),ty.router.navigate(t,!0))}),ty.template={},ty.load=function(e,t){function n(){$.get("/tmpl/"+e,function(e){var n=$(e);n.filter("script").each(function(){$.globalEval(this.text||this.textContent||this.innerHTML||"")}),ty.template[i]&&ty.template[i].length>0?ty.template[i][o]||(ty.template[i][o]=!0,ty.template[i].append(n)):(ty.template[i]=$("<div/>",{"class":"loaded-template",html:n}),ty.template[i][o]=!0),ty.tmpl=ty.template[i],t&&t(ty.template[i])},"text")}var i=e.split("/")[0],o=e.split("/")[1];ty.template[i]?ty.template[i]&&!ty.template[i][o]?n():(ty.tmpl=ty.template[i],t&&t(ty.template[i])):n()},ty.t=function(e,t){return"object"==typeof t?template(e,t):0!=t?ty.template[e.split("/")[0]].find("#"+e.split("/")[1]).clone():ty.template[e.split("/")[0]].find("#"+e.split("/")[1])},ty.t.mixin={},ty.load("tydai/mixins",function(){ty.t("mixins",{})}),ty.get=function(e,t){$.getJSON("/api/"+e,function(e){t&&t(e)})},ty.formatTime=function(e,t){var n=new Date(e),i=n.getDate(),o=n.getHours(),r=n.getFullYear(),s=n.getMinutes(),a="AM",l=[];return l[0]="Jan",l[1]="Feb",l[2]="Mar",l[3]="Apr",l[4]="May",l[5]="June",l[6]="July",l[7]="Aug",l[8]="Sept",l[9]="Oct",l[10]="Nov",l[11]="Dec",o>12&&(o-=12,a="PM"),10>s&&(s="0"+s),t?o+":"+s+" "+a:l[n.getMonth()]+"  "+i+",  "+r+" "+o+":"+s+" "+a},ty.post=function(e,t,n){var n=arguments[arguments.length-1];$.post("/api/"+e,t,function(e){"function"==typeof n&&n(e)},"json")},ty.put=function(e,t){var n=arguments[arguments.length-1];$.ajax({url:"/api/"+e,type:"PUT",data:t,dataType:"JSON",success:function(){"function"==typeof n&&n(arguments)}})},ty.del=function(e,t){var n=arguments[arguments.length-1];$.ajax({url:"/api/"+e,type:"DELETE",data:t,dataType:"JSON",success:function(){"function"==typeof n&&n(arguments[0])}})},ty.redirect=function(e){"/"==e[0]&&(e=e.slice(1)),ty.router.navigate(e,!0)},ty.handler=function(e,t,n,i){i?$(document).one(e,function(){t&&"function"==typeof t&&t(arguments[1])}):$(document).bind(e,function(){t&&"function"==typeof t&&t(arguments[1])}),n&&t&&"function"==typeof t&&t()},ty.url=function(e){return e?escape(e.replace(/[\/\s']/gi,"-")):void 0
  },document.onkeydown=function(e) {return e.stopPropagation(),8!=e.keyCode&&13!=e.keyCode||"TEXTAREA"==e.target.tagName||e.target.className.match(/\bcontentEditable\b/gi)||"INPUT"==e.target.tagName?void 0:!1},$(function() {
Backbone.history.start( {pushState:!0})
}),window.analytics||(window.analytics=[]),window.analytics.methods=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group","on","once","off"],window.analytics.factory=function(e) {
  return function() {
    var t=Array.prototype.slice.call(arguments);
    return t.unshift(e),window.analytics.push(t),window.analytics
  }
};
for(var i=0; i<window.analytics.methods.length; i++) {
var method=window.analytics.methods[i];
  window.analytics[method]=window.analytics.factory(method)
}
window.analytics.load=function(e) {var t=document.createElement("script"); t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://":"http://")+"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+e+"/analytics.min.js"; var n=document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t,n)},window.analytics.SNIPPET_VERSION="2.0.6",analytics.load(ty.settings.modules.analytics.account),ty.Form=function(e) {
  var t=this,n=$(e.view.el);
  t.model=e.view.model;
  var i= {};
  return t.model&&(i=t.model.toJSON()),n.html(ty.t(e.template,i)),e.schema?e.schema:(n.delegate(".formUpdateThis","change",function() {
    var i= {};
    n.find(".formUpdateThis").each(function() {
      var e=$(this).attr("name"),t=$(this).val();
      if("checkbox"==$(this).attr("type")&&(t=$(this).is(":checked")?1:0),"radio"!=$(this).attr("type")) {
        if(($(this).hasClass("fieldTags")||$(this).parent().hasClass("fieldMultiple"))&&(i[e]&&_.isArray(i[e])?(i[e].push(t),t=i[e]):t=t.split(",")),$(this).closest(".formGroup").length>0) {
          var n=$(this).closest(".formGroup").attr("data-formGroup");
          n&&(i[n]||(i[n]= {}),i[n][e]=t,t=i[n])
        }"number"==$(this).attr("type")&&(t=parseFloat(t)),i[e]="object"!=typeof t&&/^field/g.test(e)?[t]:t
      } else $(this).is(":checked")&&(i[e]=t)
      }),0!=e.autoSave?t.model.save(i, {error:function() {
      alert("saving failed")
},success:function() {}
                                     }):e.autoSet&&t.model.set(i),e.onChange&&e.onChange(i)
    }),ty.fieldsRun(n,i.nid)),t.el=n,t
};
var guiders=function(e) {
  var t= {};
t.version="1.2.7",t._defaultSettings= {attachTo:
                                       null,autoFocus:
                                       !1,buttons:
                                       [{name:"Close"}],buttonCustomHTML:""
                                       ,classString:
                                       null,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                       ,highlight:
                                       null,isHashable:
                                       !0,offset:
  {
top:
null,left:
    null
},onShow:
null,onHide:
null,overlay:
!1,position:0,title:"Sample title goes here"
,width:400,xButton:
  !1
  },t._htmlSkeleton=["<div class='guider'>","  <div class='guider_content'>","    <h1 class='guider_title'></h1>","    <div class='guider_close'></div>","    <p class='guider_description'></p>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join(""),t._arrowSize=42,t._buttonElement="<a></a>",t._buttonAttributes= {
href:"javascript:void(0);"
  },t._closeButtonTitle="Close",t._currentGuiderID=null,t._guiders= {},t._lastCreatedGuiderID=null,t._nextButtonTitle="Next",t._offsetNameMapping= {topLeft:11,top:12,topRight:1,rightTop:2,right:3,rightBottom:4,bottomRight:5,bottom:6,bottomLeft:7,leftBottom:8,left:9,leftTop:10},t._windowHeight=0,t._addButtons=function(n) {
    var i=n.elem.find(".guider_buttons");
    if(null===n.buttons||0===n.buttons.length)return i.remove(),void 0;
    for(var o=n.buttons.length-1; o>=0; o--) {
var r=n.buttons[o],s=e(t._buttonElement,e.extend( {"class":"guider_button",html:r.name},t._buttonAttributes,r.html|| {})); "undefined"
      !=typeof r.classString&&null!==r.classString&&s.addClass(r.classString),i.append(s),r.onclick?s.bind("click",r.onclick):r.onclick||r.name.toLowerCase()!==t._closeButtonTitle.toLowerCase()?r.onclick||r.name.toLowerCase()!==t._nextButtonTitle.toLowerCase()||s.bind("click",function() {
        !n.elem.data("locked")&&t.next()
      }):s.bind("click",function() {
        t.hideAll()
      })
    }
    if(""!==n.buttonCustomHTML) {
      var a=e(n.buttonCustomHTML);
      n.elem.find(".guider_buttons").append(a)
    }
    0===n.buttons.length&&i.remove()
  },t._addXButton=function(n) {
var i=n.elem.find(".guider_close"),o=e("<div></div>", {"class":"x_button",role:"button"});
    i.append(o),o.click(function() {
      t.hideAll()
    })
  },t._attach=function(n) {
    if("object"==typeof n) {
      var i=e(n.attachTo),o=n.elem.innerHeight(),r=n.elem.innerWidth();
      if(0===n.position||0===i.length)return n.elem.css("position","fixed"),n.elem.css("top",(e(window).height()-o)/3+"px"),n.elem.css("left",(e(window).width()-r)/2+"px"),void 0;
      var s=i.offset(),a=s.top,l=s.left,c=e("body").outerHeight(!0)-e("body").outerHeight(!1);
      a-=c,t._offsetNameMapping[n.position]&&(n.position=t._offsetNameMapping[n.position]);
var d=i.innerHeight(),u=i.innerWidth(),h=.9*t._arrowSize,f= {1:
                        [-h-o,u-r],2:
                        [0,h+u],3:
                        [d/2-o/2,h+u],4:
                        [d-o,h+u],5:
                        [h+d,u-r],6:
                        [h+d,u/2-r/2],7:
                        [h+d,0],8:
                        [d-o,-r-h],9:
                        [d/2-o/2,-r-h],10:
                        [0,-r-h],11:
                        [-h-o,0],12:
                              [-h-o,u/2-r/2]
                                                                  },p=f[n.position];
      a+=p[0],l+=p[1];
      var m="absolute";
return"fixed"==i.css("position")&&(m="fixed",a-=e(window).scrollTop(),l-=e(window).scrollLeft()),null!==n.offset.top&&(a+=n.offset.top),null!==n.offset.left&&(l+=n.offset.left),n.elem.css( {position:m,top:a,left:l})
    }
  },t._guiderById=function(e) {if("undefined"==typeof t._guiders[e])throw"Cannot find guider with id "+e; return t._guiders[e]},t._showOverlay=function() {
    e("#guider_overlay").fadeIn("fast",function() {
      this.style.removeAttribute&&this.style.removeAttribute("filter")
    })
  },t._highlightElement=function(t) {e(t).addClass("guider_highlight")},t._dehighlightElement=function(t) {e(t).removeClass("guider_highlight")},t._hideOverlay=function() {e("#guider_overlay").fadeOut("fast")},t._initializeOverlay=function() {0===e("#guider_overlay").length&&e('<div id="guider_overlay"></div>').hide().appendTo("body")},t._styleArrow=function(n) {
    var i=n.position||0;
    if(i) {
var o=e(n.elem.find(".guider_arrow")),r= {1:"guider_arrow_down"
      ,2:"guider_arrow_left"
      ,3:"guider_arrow_left"
      ,4:"guider_arrow_left"
      ,5:"guider_arrow_up"
      ,6:"guider_arrow_up"
      ,7:"guider_arrow_up"
      ,8:"guider_arrow_right"
      ,9:"guider_arrow_right"
      ,10:"guider_arrow_right"
      ,11:"guider_arrow_down"
      ,12:"guider_arrow_down"
                                               };
      o.addClass(r[i]);
var s=n.elem.innerHeight(),a=n.elem.innerWidth(),l=t._arrowSize/2,c= {1:
                             ["right",l],2:
                             ["top",l],3:
                             ["top",s/2-l],4:
                             ["bottom",l],5:
                             ["right",l],6:
                             ["left",a/2-l],7:
                             ["left",l],8:
                             ["bottom",l],9:
                             ["top",s/2-l],10:
                             ["top",l],11:
                             ["left",l],12:
                                   ["left",a/2-l]
                                                                           },i=c[n.position];
      o.css(i[0],i[1]+"px")
    }
  },t._showIfHashed=function(e) {
    var n="guider=",i=window.location.hash.indexOf(n);
    if(-1!==i) {
      var o=window.location.hash.substr(i+n.length);
      e.id.toLowerCase()===o.toLowerCase()&&t.show(e.id)
    }
  },t.reposition=function() {var e=t._guiders[t._currentGuiderID]; t._attach(e)},t.next=function() {
    var e=t._guiders[t._currentGuiderID];
    if("undefined"!=typeof e) {
      e.elem.data("locked",!0);
      var n=e.next||null;
      if(null!==n&&""!==n) {
        var i=t._guiderById(n),o=i.overlay?!0:!1;
        t.hideAll(o,!0),e&&e.highlight&&t._dehighlightElement(e.highlight),t.show(n)
      }
    }
  },t.createGuider=function(n) {(null===n||void 0===n)&&(n={}),myGuider=e.extend({},t._defaultSettings,n),myGuider.id=myGuider.id||String(Math.floor(1e3*Math.random())); var i=e(t._htmlSkeleton); myGuider.elem=i,"undefined"!=typeof myGuider.classString&&null!==myGuider.classString&&myGuider.elem.addClass(myGuider.classString),myGuider.elem.css("width",myGuider.width+"px"); var o=i.find(".guider_title"); return o.html(myGuider.title),i.find(".guider_description").html(myGuider.description),t._addButtons(myGuider),myGuider.xButton&&t._addXButton(myGuider),i.hide(),i.appendTo("body"),i.attr("id",myGuider.id),"undefined"!=typeof myGuider.attachTo&&null!==myGuider&&t._attach(myGuider)&&t._styleArrow(myGuider),t._initializeOverlay(),t._guiders[myGuider.id]=myGuider,t._lastCreatedGuiderID=myGuider.id,myGuider.isHashable&&t._showIfHashed(myGuider),t},t.hideAll=function(n,i) {
    i=i||!1,e(".guider:visible").each(function(n,o) {
      var r=t._guiderById(e(o).attr("id"));
      r.onHide&&r.onHide(r,i)
    }),e(".guider").fadeOut("fast");
    var o=t._guiders[t._currentGuiderID];
    return o&&o.highlight&&t._dehighlightElement(o.highlight),"undefined"!=typeof n&&n===!0||t._hideOverlay(),t
  },t.show=function(n) {!n&&t._lastCreatedGuiderID&&(n=t._lastCreatedGuiderID); var i=t._guiderById(n); i.overlay&&(t._showOverlay(),i.highlight&&t._highlightElement(i.highlight)),i.onShow&&i.onShow(i),t._attach(i),i.elem.fadeIn("fast").data("locked",!1),t._currentGuiderID=n; var o=t._windowHeight=e(window).height(),r=e(window).scrollTop(),s=i.elem.offset(),a=i.elem.height(),l=r+o<s.top+a,c=s.top<r; return i.autoFocus&&(l||c)&&setTimeout(t.scrollToCurrent,10),e(i.elem).trigger("guiders.show"),t},t.scrollToCurrent=function() {
    var n=t._guiders[t._currentGuiderID];
    if("undefined"!=typeof n) {
      var i=t._windowHeight,o=(e(window).scrollTop(),n.elem.offset()),r=n.elem.height(),s=Math.round(Math.max(o.top+r/2-i/2,0));
      window.scrollTo(0,s)
    }
  };
  var n=void 0;
  return e(window).resize(function() {"undefined"!=typeof n&&clearTimeout(n),n=setTimeout(function() {
      n=void 0,"undefined"!=typeof t&&t.reposition()
    },20)
  }),t
} .call(this,jQuery),io="undefined"==typeof module? {}:
                        module.exports;
!function() {
  if(function(e,t) {
  var n=e;
  n.version="0.9.8",n.protocol=1,n.transports=[],n.j=[],n.sockets= {},n.connect=function(e,i) {
      var o,r,s=n.util.parseUri(e);
      t&&t.location&&(s.protocol=s.protocol||t.location.protocol.slice(0,-1),s.host=s.host||(t.document?t.document.domain:t.location.hostname),s.port=s.port||t.location.port),o=n.util.uniqueUri(s);
var a= {host:
        s.host,secure:"https"
        ==s.protocol,port:
        s.port||("https"==s.protocol?443:80),query:s.query||""
             };
      return n.util.merge(a,i),(a["force new connection"]||!n.sockets[o])&&(r=new n.Socket(a)),!a["force new connection"]&&r&&(n.sockets[o]=r),r=r||n.sockets[o],r.of(s.path.length>1?s.path:"")
    }
  }("object"==typeof module?module.exports:this.io= {},this),function(e,t) {
var n=e.util= {},i=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];n.parseUri=function(e){for(var t=i.exec(e||""),n={},r=14;r--;)n[o[r]]=t[r]||"";return n},n.uniqueUri=function(e){var n=e.protocol,i=e.host,o=e.port;return"document"in t?(i=i||document.domain,o=o||("https"==n&&"https:"!==document.location.protocol?443:document.location.port)):(i=i||"localhost",o||"https"!=n||(o=443)),(n||"http")+"://"+i+":"+(o||80)},n.query=function(e,t){var i=n.chunkQuery(e||""),o=[];n.merge(i,n.chunkQuery(t||""));for(var r in i)i.hasOwnProperty(r)&&o.push(r+"="+i[r]);return o.length?"?"+o.join("&"):""},n.chunkQuery=function(e){for(var t,n={},i=e.split("&"),o=0,r=i.length;r>o;++o)t=i[o].split("="),t[0]&&(n[t[0]]=t[1]);return n};var r=!1;n.load=function(e){return"document"in t&&"complete"===document.readyState||r?e():(n.on(t,"load",e,!1),void 0)},n.on=function(e,t,n,i){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener&&e.addEventListener(t,n,i)},n.request=function(e){if(e&&"undefined"!=typeof XDomainRequest)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!e||n.ua.hasCORS))return new XMLHttpRequest;if(!e)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}return null},"undefined"!=typeof window&&n.load(function(){r=!0}),n.defer=function(e){return n.ua.webkit&&"undefined"==typeof importScripts?(n.load(function(){setTimeout(e,100)}),void 0):e()},n.merge=function(e,t,i,o){var r,s=o||[],a="undefined"==typeof i?2:i;for(r in t)t.hasOwnProperty(r)&&n.indexOf(s,r)<0&&("object"==typeof e[r]&&a?n.merge(e[r],t[r],a-1,s):(e[r]=t[r],s.push(t[r])));return e},n.mixin=function(e,t){n.merge(e.prototype,t.prototype)},n.inherit=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.intersect=function(e,t){for(var i=[],o=e.length>t.length?e:t,r=e.length>t.length?t:e,s=0,a=r.length;a>s;s++)~n.indexOf(o,r[s])&&i.push(r[s]);return i},n.indexOf=function(e,t,n){for(var i=e.length,n=0>n?0>n+i?0:n+i:n||0;i>n&&e[n]!==t;n++);return n>=i?-1:n},n.toArray=function(e){for(var t=[],n=0,i=e.length;i>n;n++)t.push(e[n]);return t},n.ua={},n.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var e=new XMLHttpRequest}catch(t){return!1}return void 0!=e.withCredentials}(),n.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),n.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(e,t){function n(){}e.EventEmitter=n,n.prototype.on=function(e,n){return this.$events||(this.$events={}),this.$events[e]?t.util.isArray(this.$events[e])?this.$events[e].push(n):this.$events[e]=[this.$events[e],n]:this.$events[e]=n,this},n.prototype.addListener=n.prototype.on,n.prototype.once=function(e,t){function n(){i.removeListener(e,n),t.apply(this,arguments)}var i=this;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,n){if(this.$events&&this.$events[e]){var i=this.$events[e];if(t.util.isArray(i)){for(var o=-1,r=0,s=i.length;s>r;r++)if(i[r]===n||i[r].listener&&i[r].listener===n){o=r;break}if(0>o)return this;i.splice(o,1),i.length||delete this.$events[e]}else(i===n||i.listener&&i.listener===n)&&delete this.$events[e]}return this},n.prototype.removeAllListeners=function(e){return this.$events&&this.$events[e]&&(this.$events[e]=null),this},n.prototype.listeners=function(e){return this.$events||(this.$events={}),this.$events[e]||(this.$events[e]=[]),t.util.isArray(this.$events[e])||(this.$events[e]=[this.$events[e]]),this.$events[e]},n.prototype.emit=function(e){if(!this.$events)return!1;var n=this.$events[e];if(!n)return!1;var i=Array.prototype.slice.call(arguments,1);if("function"==typeof n)n.apply(this,i);else{if(!t.util.isArray(n))return!1;for(var o=n.slice(),r=0,s=o.length;s>r;r++)o[r].apply(this,i)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){"use strict";function f(e){return 10>e?"0"+e:e}function date(e){return isFinite(e.valueOf())?e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"Z":null}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,o,r,s,a=gap,l=t[e];switch(l instanceof Date&&(l=date(e)),"function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(l)){for(r=l.length,n=0;r>n;n+=1)s[n]=str(n,l)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(r=rep.length,n=0;r>n;n+=1)"string"==typeof rep[n]&&(i=rep[n],o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));else for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,o}}if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})},JSON.parse=function(text,reviver){function walk(e,t){var n,i,o=e[t];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i=walk(o,n),void 0!==i?o[n]=i:delete o[n]);return reviver.call(e,t,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof JSON?JSON:void 0),function(e,t){var n=e.parser={},i=n.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],o=n.reasons=["transport not supported","client not handshaken","unauthorized"],r=n.advice=["reconnect"],s=t.JSON,a=t.util.indexOf;n.encodePacket=function(e){var t=a(i,e.type),n=e.id||"",l=e.endpoint||"",c=e.ack,d=null;switch(e.type){case"error":var u=e.reason?a(o,e.reason):"",h=e.advice?a(r,e.advice):"";(""!==u||""!==h)&&(d=u+(""!==h?"+"+h:""));break;case"message":""!==e.data&&(d=e.data);break;case"event":var f={name:e.name};e.args&&e.args.length&&(f.args=e.args),d=s.stringify(f);break;case"json":d=s.stringify(e.data);break;case"connect":e.qs&&(d=e.qs);break;case"ack":d=e.ackId+(e.args&&e.args.length?"+"+s.stringify(e.args):"")}var p=[t,n+("data"==c?"+":""),l];return null!==d&&void 0!==d&&p.push(d),p.join(":")},n.encodePayload=function(e){var t="";if(1==e.length)return e[0];for(var n=0,i=e.length;i>n;n++){var o=e[n];t+="�"+o.length+"�"+e[n]}return t};var l=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;n.decodePacket=function(e){var t=e.match(l);if(!t)return{};var n=t[2]||"",e=t[5]||"",a={type:i[t[1]],endpoint:t[4]||""};switch(n&&(a.id=n,a.ack=t[3]?"data":!0),a.type){case"error":var t=e.split("+");a.reason=o[t[0]]||"",a.advice=r[t[1]]||"";break;case"message":a.data=e||"";break;case"event":try{var c=s.parse(e);a.name=c.name,a.args=c.args}catch(d){}a.args=a.args||[];break;case"json":try{a.data=s.parse(e)}catch(d){}break;case"connect":a.qs=e||"";break;case"ack":var t=e.match(/^([0-9]+)(\+)?(.*)/);if(t&&(a.ackId=t[1],a.args=[],t[3]))try{a.args=t[3]?s.parse(t[3]):[]}catch(d){}break;case"disconnect":case"heartbeat":}return a},n.decodePayload=function(e){if("�"==e.charAt(0)){for(var t=[],i=1,o="";i<e.length;i++)"�"==e.charAt(i)?(t.push(n.decodePacket(e.substr(i+1).substr(0,o))),i+=Number(o)+1,o=""):o+=e.charAt(i);return t}return[n.decodePacket(e)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t){function n(e,t){this.socket=e,this.sessid=t}e.Transport=n,t.util.mixin(n,t.EventEmitter),n.prototype.onData=function(e){if(this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout(),""!==e){var n=t.parser.decodePayload(e);if(n&&n.length)for(var i=0,o=n.length;o>i;i++)this.onPacket(n[i])}return this},n.prototype.onPacket=function(e){return this.socket.setHeartbeatTimeout(),"heartbeat"==e.type?this.onHeartbeat():("connect"==e.type&&""==e.endpoint&&this.onConnect(),"error"==e.type&&"reconnect"==e.advice&&(this.isOpen=!1),this.socket.onPacket(e),this)},n.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var e=this;this.closeTimeout=setTimeout(function(){
e.onDisconnect()},this.socket.closeTimeout)}},n.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},n.prototype.onConnect=function(){return this.socket.onConnect(),this},n.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},n.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},n.prototype.packet=function(e){this.send(t.parser.encodePacket(e))},n.prototype.onHeartbeat=function(){this.packet({type:"heartbeat"})},n.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},n.prototype.onClose=function(){this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},n.prototype.prepareUrl=function(){var e=this.socket.options;return this.scheme()+": //"+e.host+":"+e.port+"/"+e.resource+"/"+t.protocol+"/"+this.name+"/"+this.sessid},n.prototype.ready=function(e,t){t.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function i(e){if(this.options={port:80,secure:!1,document:"document"in n?document:!1,resource:"socket.io",transports:t.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":1/0,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!0,"auto connect":!0,"flash policy port":10843,manualFlush:!1},t.util.merge(this.options,e),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1,this.options["sync disconnect on unload"]&&(!this.isXDomain()||t.util.ua.hasCORS)){var i=this;t.util.on(n,"unload",function(){i.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function o(){}e.Socket=i,t.util.mixin(i,t.EventEmitter),i.prototype.of=function(e){return this.namespaces[e]||(this.namespaces[e]=new t.SocketNamespace(this,e),""!==e&&this.namespaces[e].packet({type:"connect"})),this.namespaces[e]},i.prototype.publish=function(){this.emit.apply(this,arguments);var e;for(var t in this.namespaces)this.namespaces.hasOwnProperty(t)&&(e=this.of(t),e.$emit.apply(e,arguments))},i.prototype.handshake=function(e){function n(t){t instanceof Error?(i.connecting=!1,i.onError(t.message)):e.apply(null,t.split(":"))}var i=this,r=this.options,s=["http"+(r.secure?"s":"")+":/",r.host+":"+r.port,r.resource,t.protocol,t.util.query(this.options.query,"t="+ +new Date)].join("/");if(this.isXDomain()&&!t.util.ua.hasCORS){var a=document.getElementsByTagName("script")[0],l=document.createElement("script");l.src=s+"&jsonp="+t.j.length,a.parentNode.insertBefore(l,a),t.j.push(function(e){n(e),l.parentNode.removeChild(l)})}else{var c=t.util.request();c.open("GET",s,!0),c.withCredentials=!0,c.onreadystatechange=function(){4==c.readyState&&(c.onreadystatechange=o,200==c.status?n(c.responseText):(i.connecting=!1,!i.reconnecting&&i.onError(c.responseText)))},c.send(null)}},i.prototype.getTransport=function(e){for(var n,i=e||this.transports,o=0;n=i[o];o++)if(t.Transport[n]&&t.Transport[n].check(this)&&(!this.isXDomain()||t.Transport[n].xdomainCheck(this)))return new t.Transport[n](this,this.sessionid);return null},i.prototype.connect=function(e){if(this.connecting)return this;var n=this;return n.connecting=!0,this.handshake(function(i,o,r,s){function a(e){return n.transport&&n.transport.clearTimeouts(),n.transport=n.getTransport(e),n.transport?(n.transport.ready(n,function(){n.connecting=!0,n.publish("connecting",n.transport.name),n.transport.open(),n.options["connect timeout"]&&(n.connectTimeoutTimer=setTimeout(function(){if(!n.connected&&(n.connecting=!1,n.options["try multiple transports"])){n.remainingTransports||(n.remainingTransports=n.transports.slice(0));for(var e=n.remainingTransports;e.length>0&&e.splice(0,1)[0]!=n.transport.name;);e.length?a(e):n.publish("connect_failed")}},n.options["connect timeout"]))}),void 0):n.publish("connect_failed")}n.sessionid=i,n.closeTimeout=1e3*r,n.heartbeatTimeout=1e3*o,n.transports=s?t.util.intersect(s.split(","),n.options.transports):n.options.transports,n.setHeartbeatTimeout(),a(n.transports),n.once("connect",function(){clearTimeout(n.connectTimeoutTimer),e&&"function"==typeof e&&e()})}),this},i.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);var e=this;this.heartbeatTimeoutTimer=setTimeout(function(){e.transport.onClose()},this.heartbeatTimeout)},i.prototype.packet=function(e){return this.connected&&!this.doBuffer?this.transport.packet(e):this.buffer.push(e),this},i.prototype.setBuffer=function(e){this.doBuffer=e,!e&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},i.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},i.prototype.disconnect=function(){return(this.connected||this.connecting)&&(this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted")),this},i.prototype.disconnectSync=function(){var e=t.util.request(),n=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,t.protocol,this.sessionid].join("/");e.open("GET",n,!0),e.send(null),this.onDisconnect("booted")},i.prototype.isXDomain=function(){var e=n.location.port||("https:"==n.location.protocol?443:80);return this.options.host!==n.location.hostname||this.options.port!=e},i.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},i.prototype.onOpen=function(){this.open=!0},i.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},i.prototype.onPacket=function(e){this.of(e.endpoint).onPacket(e)},i.prototype.onError=function(e){e&&e.advice&&"reconnect"===e.advice&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",e&&e.reason?e.reason:e)},i.prototype.onDisconnect=function(e){var t=this.connected,n=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1,(t||n)&&(this.transport.close(),this.transport.clearTimeouts(),t&&(this.publish("disconnect",e),"booted"!=e&&this.options.reconnect&&!this.reconnecting&&this.reconnect()))},i.prototype.reconnect=function(){function e(){if(n.connected){for(var e in n.namespaces)n.namespaces.hasOwnProperty(e)&&""!==e&&n.namespaces[e].packet({type:"connect"});n.publish("reconnect",n.transport.name,n.reconnectionAttempts)}clearTimeout(n.reconnectionTimer),n.removeListener("connect_failed",t),n.removeListener("connect",t),n.reconnecting=!1,delete n.reconnectionAttempts,delete n.reconnectionDelay,delete n.reconnectionTimer,delete n.redoTransports,n.options["try multiple transports"]=o}function t(){return n.reconnecting?n.connected?e():n.connecting&&n.reconnecting?n.reconnectionTimer=setTimeout(t,1e3):(n.reconnectionAttempts++>=i?n.redoTransports?(n.publish("reconnect_failed"),e()):(n.on("connect_failed",t),n.options["try multiple transports"]=!0,n.transport=n.getTransport(),n.redoTransports=!0,n.connect()):(n.reconnectionDelay<r&&(n.reconnectionDelay*=2),n.connect(),n.publish("reconnecting",n.reconnectionDelay,n.reconnectionAttempts),n.reconnectionTimer=setTimeout(t,n.reconnectionDelay)),void 0):void 0}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var n=this,i=this.options["max reconnection attempts"],o=this.options["try multiple transports"],r=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(t,this.reconnectionDelay),this.on("connect",t)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(e,t){this.socket=e,this.name=t||"",this.flags={},this.json=new i(this,"json"),this.ackPackets=0,this.acks={}}function i(e,t){this.namespace=e,this.name=t}e.SocketNamespace=n,t.util.mixin(n,t.EventEmitter),n.prototype.$emit=t.EventEmitter.prototype.emit,n.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},n.prototype.packet=function(e){return e.endpoint=this.name,this.socket.packet(e),this.flags={},this},n.prototype.send=function(e,t){var n={type:this.flags.json?"json":"message",data:e};return"function"==typeof t&&(n.id=++this.ackPackets,n.ack=!0,this.acks[n.id]=t),this.packet(n)},n.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments,1),n=t[t.length-1],i={type:"event",name:e};return"function"==typeof n&&(i.id=++this.ackPackets,i.ack="data",this.acks[i.id]=n,t=t.slice(0,t.length-1)),i.args=t,this.packet(i)},n.prototype.disconnect=function(){return""===this.name?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},n.prototype.onPacket=function(e){function n(){i.packet({type:"ack",args:t.util.toArray(arguments),ackId:e.id})}var i=this;switch(e.type){case"connect":this.$emit("connect");break;case"disconnect":""===this.name?this.socket.onDisconnect(e.reason||"booted"):this.$emit("disconnect",e.reason);break;case"message":case"json":var o=["message",e.data];"data"==e.ack?o.push(n):e.ack&&this.packet({type:"ack",ackId:e.id}),this.$emit.apply(this,o);break;case"event":var o=[e.name].concat(e.args);"data"==e.ack&&o.push(n),this.$emit.apply(this,o);break;case"ack":this.acks[e.ackId]&&(this.acks[e.ackId].apply(this,e.args),delete this.acks[e.ackId]);break;case"error":e.advice?this.socket.onError(e):"unauthorized"==e.reason?this.$emit("connect_failed",e.reason):this.$emit("error",e.reason)}},i.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},i.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function i(){t.Transport.apply(this,arguments)}e.websocket=i,t.util.inherit(i,t.Transport),i.prototype.name="websocket",i.prototype.open=function(){var e,i=t.util.query(this.socket.options.query),o=this;return e||(e=n.MozWebSocket||n.WebSocket),this.websocket=new e(this.prepareUrl()+i),this.websocket.onopen=function(){o.onOpen(),o.socket.setBuffer(!1)},this.websocket.onmessage=function(e){o.onData(e.data)},this.websocket.onclose=function(){o.onClose(),o.socket.setBuffer(!0)},this.websocket.onerror=function(e){o.onError(e)},this},i.prototype.send=t.util.ua.iDevice?function(e){var t=this;return setTimeout(function(){t.websocket.send(e)},0),this}:function(e){return this.websocket.send(e),this},i.prototype.payload=function(e){for(var t=0,n=e.length;n>t;t++)this.packet(e[t]);return this},i.prototype.close=function(){return this.websocket.close(),this},i.prototype.onError=function(e){this.socket.onError(e)},i.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},i.check=function(){return"WebSocket"in n&&!("__addTask"in WebSocket)||"MozWebSocket"in n},i.xdomainCheck=function(){return!0},t.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(){t.Transport.websocket.apply(this,arguments)}e.flashsocket=n,t.util.inherit(n,t.Transport.websocket),n.prototype.name="flashsocket",n.prototype.open=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.open.apply(e,n)}),this},n.prototype.send=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.send.apply(e,n)}),this},n.prototype.close=function(){return WebSocket.__tasks.length=0,t.Transport.websocket.prototype.close.call(this),this},n.prototype.ready=function(e,i){function o(){var t=e.options,o=t["flash policy port"],s=["http"+(t.secure?"s":"")+":/",t.host+":"+t.port,t.resource,"static/flashsocket","WebSocketMain"+(e.isXDomain()?"Insecure":"")+".swf"];n.loaded||("undefined"==typeof WEB_SOCKET_SWF_LOCATION&&(WEB_SOCKET_SWF_LOCATION=s.join("/")),843!==o&&WebSocket.loadFlashPolicyFile("xmlsocket://"+t.host+":"+o),WebSocket.__initialize(),n.loaded=!0),i.call(r)}var r=this;return document.body?o():(t.util.load(o),void 0)},n.check=function(){return"undefined"!=typeof WebSocket&&"__initialize"in WebSocket&&swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},n.xdomainCheck=function(){return!0},"undefined"!=typeof window&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),t.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),"undefined"!=typeof window)var swfobject=function(){function e(){if(!q){try{var e=L.getElementsByTagName("body")[0].appendChild(g("span"));e.parentNode.removeChild(e)}catch(t){return}q=!0;for(var n=B.length,i=0;n>i;i++)B[i]()}}function t(e){q?e():B[B.length]=e}function n(e){if(typeof M.addEventListener!=I)M.addEventListener("load",e,!1);else if(typeof L.addEventListener!=I)L.addEventListener("load",e,!1);else if(typeof M.attachEvent!=I)y(M,"onload",e);else if("function"==typeof M.onload){var t=M.onload;M.onload=function(){t(),e()}}else M.onload=e
  }
  function i() {
    j?o():r()
  }
  function o() {
    var e=L.getElementsByTagName("body")[0],t=g(N);
    t.setAttribute("type",P);
    var n=e.appendChild(t);
    if(n) {
      var i=0;
      !function() {
        if(typeof n.GetVariable!=I) {
          var o=n.GetVariable("$version");
          o&&(o=o.split(" ")[1].split(","),U.pv=[parseInt(o[0],10),parseInt(o[1],10),parseInt(o[2],10)])
        } else if(10>i)return i++,setTimeout(arguments.callee,10),void 0;
        e.removeChild(t),n=null,r()
      }()
    } else r()
    }
  function r() {
    var e=H.length;
    if(e>0)for(var t=0; e>t; t++) {
var n=H[t].id,i=H[t].callbackFn,o= {success:
                                    !1,id:
                                            n
                                           };
        if(U.pv[0]>0) {
          var r=m(n);
          if(r)if(!v(H[t].swfVersion)||U.wk&&U.wk<312)if(H[t].expressInstall&&a()) {
                var d= {};
                d.data=H[t].expressInstall,d.width=r.getAttribute("width")||"0",d.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(d.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(d.align=r.getAttribute("align"));
                for(var u= {},h=r.getElementsByTagName("param"),f=h.length,p=0; f>p; p++)"movie"!=h[p].getAttribute("name").toLowerCase()&&(u[h[p].getAttribute("name")]=h[p].getAttribute("value"));
                l(d,u,n,i)
              } else c(r),i&&i(o);
            else w(n,!0),i&&(o.success=!0,o.ref=s(n),i(o))
            } else if(w(n,!0),i) {
          var g=s(n);
          g&&typeof g.SetVariable!=I&&(o.success=!0,o.ref=g),i(o)
        }
      }
  }
  function s(e) {
    var t=null,n=m(e);
    if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=I)t=n;
      else {
        var i=n.getElementsByTagName(N)[0];
        i&&(t=i)
      }
    return t
  }
  function a() {
    return!W&&v("6.0.65")&&(U.win||U.mac)&&!(U.wk&&U.wk<312)
  }
  function l(e,t,n,i) {
W=!0,k=i||null,T= {success:
                   !1,id:
                       n
                      };
    var o=m(n);
    if(o) {"OBJECT"==o.nodeName?(x=d(o),_=null):(x=o,_=n),e.id=A,(typeof e.width==I||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==I||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),L.title=L.title.slice(0,47)+" - Flash Player Installation";
      var r=U.ie&&U.win?["Active"].concat("").join("X"):"PlugIn",s="MMredirectURL="+M.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+L.title;
      if(typeof t.flashvars!=I?t.flashvars+="&"+s:t.flashvars=s,U.ie&&U.win&&4!=o.readyState) {
        var a=g("div");
        n+="SWFObjectNew",a.setAttribute("id",n),o.parentNode.insertBefore(a,o),o.style.display="none",function() {
          4==o.readyState?o.parentNode.removeChild(o):setTimeout(arguments.callee,10)
        }()
      }
      u(e,t,n)
    }
  }
  function c(e) {
    if(U.ie&&U.win&&4!=e.readyState) {
      var t=g("div");
      e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(d(e),t),e.style.display="none",function() {
        4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)
      }()
    } else e.parentNode.replaceChild(d(e),e)
    }
  function d(e) {
    var t=g("div");
    if(U.win&&U.ie)t.innerHTML=e.innerHTML;
    else {
      var n=e.getElementsByTagName(N)[0];
      if(n) {
        var i=n.childNodes;
        if(i)for(var o=i.length,r=0; o>r; r++)1==i[r].nodeType&&"PARAM"==i[r].nodeName||8==i[r].nodeType||t.appendChild(i[r].cloneNode(!0))
          }
    }
    return t
  }
  function u(e,t,n) {
    var i,o=m(n);
    if(U.wk&&U.wk<312)return i;
    if(o)if(typeof e.id==I&&(e.id=n),U.ie&&U.win) {
        var r="";
        for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));
        var a="";
        for(var l in t)t[l]!=Object.prototype[l]&&(a+='<param name="'+l+'" value="'+t[l]+'" />');
        o.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+a+"</object>",z[z.length]=e.id,i=m(e.id)
      } else {
        var c=g(N);
        c.setAttribute("type",P);
        for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?c.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&c.setAttribute(d,e[d]));
        for(var u in t)t[u]!=Object.prototype[u]&&"movie"!=u.toLowerCase()&&h(c,u,t[u]);
        o.parentNode.replaceChild(c,o),i=c
      }
                                     return i
  }
  function h(e,t,n) {
    var i=g("param");
    i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)
  }
  function f(e) {
    var t=m(e);
    t&&"OBJECT"==t.nodeName&&(U.ie&&U.win?(t.style.display="none",function() {
      4==t.readyState?p(e):setTimeout(arguments.callee,10)
    }()):t.parentNode.removeChild(t))
    }
  function p(e) {
    var t=m(e);
    if(t) {
      for(var n in t)"function"==typeof t[n]&&(t[n]=null);
      t.parentNode.removeChild(t)
    }
  }
  function m(e) {
    var t=null;
    try {
      t=L.getElementById(e)
    } catch(n) {} return t
  }
  function g(e) {
    return L.createElement(e)
  }
  function y(e,t,n) {
    e.attachEvent(t,n),F[F.length]=[e,t,n]
  }
  function v(e) {
    var t=U.pv,n=e.split(".");
    return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1
  }
  function b(e,t,n,i) {
    if(!U.ie||!U.mac) {
      var o=L.getElementsByTagName("head")[0];
      if(o) {
        var r=n&&"string"==typeof n?n:"screen";
        if(i&&(S=null,E=null),!S||E!=r) {
          var s=g("style");
          s.setAttribute("type","text/css"),s.setAttribute("media",r),S=o.appendChild(s),U.ie&&U.win&&typeof L.styleSheets!=I&&L.styleSheets.length>0&&(S=L.styleSheets[L.styleSheets.length-1]),E=r
        }
            U.ie&&U.win?S&&typeof S.addRule==N&&S.addRule(e,t):S&&typeof L.createTextNode!=I&&S.appendChild(L.createTextNode(e+" {"+t+"}"))
      }
    }
  }
  function w(e,t) {
    if(V) {
      var n=t?"visible":"hidden";
      q&&m(e)?m(e).style.visibility=n:b("#"+e,"visibility:"+n)
    }
  }
  function C(e) {
var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=I?encodeURIComponent(e):e}{var x,_,k,T,S,E,I="undefined",N="object",D="Shockwave Flash",$="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",A="SWFObjectExprInst",O="onreadystatechange",M=window,L=document,R=navigator,j=!1,B=[i],H=[],z=[],F=[],q=!1,W=!1,V=!0,U=function(){var e=typeof L.getElementById!=I&&typeof L.getElementsByTagName!=I&&typeof L.createElement!=I,t=R.userAgent.toLowerCase(),n=R.platform.toLowerCase(),i=n?/win/.test(n):/win/.test(t),o=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,a=[0,0,0],l=null;if(typeof R.plugins!=I&&typeof R.plugins[D]==N)l=R.plugins[D].description,!l||typeof R.mimeTypes!=I&&R.mimeTypes[P]&&!R.mimeTypes[P].enabledPlugin||(j=!0,s=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),a[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),a[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),a[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof M[["Active"].concat("Object").join("X")]!=I)try{var c=new(window[["Active"].concat("Object").join("X")])($);c&&(l=c.GetVariable("$version"),l&&(s=!0,l=l.split(" ")[1].split(","),a=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(d){}return{w3:e,pv:a,wk:r,ie:s,win:i,mac:o}}();!function(){U.w3&&((typeof L.readyState!=I&&"complete"==L.readyState||typeof L.readyState==I&&(L.getElementsByTagName("body")[0]||L.body))&&e(),q||(typeof L.addEventListener!=I&&L.addEventListener("DOMContentLoaded",e,!1),U.ie&&U.win&&(L.attachEvent(O,function(){"complete"==L.readyState&&(L.detachEvent(O,arguments.callee),e())}),M==top&&!function(){if(!q){try{L.documentElement.doScroll("left")}catch(t){return setTimeout(arguments.callee,0),void 0}e()}}()),U.wk&&!function(){return q?void 0:/loaded|complete/.test(L.readyState)?(e(),void 0):(setTimeout(arguments.callee,0),void 0)}(),n(e)))}(),function(){U.ie&&U.win&&window.attachEvent("onunload",function(){for(var e=F.length,t=0;e>t;t++)F[t][0].detachEvent(F[t][1],F[t][2]);for(var n=z.length,i=0;n>i;i++)f(z[i]);for(var o in U)U[o]=null;U=null;for(var r in swfobject)swfobject[r]=null;swfobject=null})}()}return{registerObject:function(e,t,n,i){if(U.w3&&e&&t){var o={};o.id=e,o.swfVersion=t,o.expressInstall=n,o.callbackFn=i,H[H.length]=o,w(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){return U.w3?s(e):void 0},embedSWF:function(e,n,i,o,r,s,c,d,h,f){var p={success:!1,id:n};U.w3&&!(U.wk&&U.wk<312)&&e&&n&&i&&o&&r?(w(n,!1),t(function(){i+="",o+="";var t={};if(h&&typeof h===N)for(var m in h)t[m]=h[m];t.data=e,t.width=i,t.height=o;var g={};if(d&&typeof d===N)for(var y in d)g[y]=d[y];if(c&&typeof c===N)for(var b in c)typeof g.flashvars!=I?g.flashvars+="&"+b+"="+c[b]:g.flashvars=b+"="+c[b];if(v(r)){var C=u(t,g,n);t.id==n&&w(n,!0),p.success=!0,p.ref=C}else{if(s&&a())return t.data=s,l(t,g,n,f),void 0;w(n,!0)}f&&f(p)})):f&&f(p)},switchOffAutoHideShow:function(){V=!1},ua:U,getFlashPlayerVersion:function(){return{major:U.pv[0],minor:U.pv[1],release:U.pv[2]}},hasFlashPlayerVersion:v,createSWF:function(e,t,n){return U.w3?u(e,t,n):void 0},showExpressInstall:function(e,t,n,i){U.w3&&a()&&l(e,t,n,i)},removeSWF:function(e){U.w3&&f(e)},createCSS:function(e,t,n,i){U.w3&&b(e,t,n,i)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=L.location.search||L.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return C(t);for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i].substring(0,n[i].indexOf("="))==e)return C(n[i].substring(n[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(W){var e=m(A);e&&x&&(e.parentNode.replaceChild(x,e),_&&(w(_,!0),U.ie&&U.win&&(x.style.display="block")),k&&k(T)),W=!1}}}}();!function(){if("undefined"!=typeof window&&!window.WebSocket){var e=window.console;if(e&&e.log&&e.error||(e={log:function(){},error:function(){}}),!swfobject.hasFlashPlayerVersion("10.0.0"))return e.error("Flash Player >= 10.0.0 is required."),void 0;"file:"==location.protocol&&e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(e,t,n,i,o){var r=this;r.__id=WebSocket.__nextId++,WebSocket.__instances[r.__id]=r,r.readyState=WebSocket.CONNECTING,r.bufferedAmount=0,r.__events={},t?"string"==typeof t&&(t=[t]):t=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(r.__id,e,t,n||null,i||0,o||null)})},0)},WebSocket.prototype.send=function(e){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var t=WebSocket.__flash.send(this.__id,encodeURIComponent(e));return 0>t?!0:(this.bufferedAmount+=t,!1)},WebSocket.prototype.close=function(){this.readyState!=WebSocket.CLOSED&&this.readyState!=WebSocket.CLOSING&&(this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id))},WebSocket.prototype.addEventListener=function(e,t){e in this.__events||(this.__events[e]=[]),this.__events[e].push(t)},WebSocket.prototype.removeEventListener=function(e,t){if(e in this.__events)for(var n=this.__events[e],i=n.length-1;i>=0;--i)if(n[i]===t){n.splice(i,1);break}},WebSocket.prototype.dispatchEvent=function(e){for(var t=this.__events[e.type]||[],n=0;n<t.length;++n)t[n](e);var i=this["on"+e.type];i&&i(e)},WebSocket.prototype.__handleEvent=function(e){"readyState"in e&&(this.readyState=e.readyState),"protocol"in e&&(this.protocol=e.protocol);var t;if("open"==e.type||"error"==e.type)t=this.__createSimpleEvent(e.type);else if("close"==e.type)t=this.__createSimpleEvent("close");else{if("message"!=e.type)throw"unknown event type: "+e.type;var n=decodeURIComponent(e.message);t=this.__createMessageEvent("message",n)}this.dispatchEvent(t)},WebSocket.prototype.__createSimpleEvent=function(e){if(document.createEvent&&window.Event){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}return{type:e,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(e,t){if(document.createEvent&&window.MessageEvent&&!window.opera){var n=document.createEvent("MessageEvent");return n.initMessageEvent("message",!1,!1,t,null,null,window,null),n}return{type:e,data:t,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(e){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(e)})},WebSocket.__initialize=function(){if(!WebSocket.__flash){if(WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation),!window.WEB_SOCKET_SWF_LOCATION)return e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf"),void 0;
    var t=document.createElement("div");t.id="webSocketContainer",t.style.position="absolute",WebSocket.__isFlashLite()?(t.style.left="0px",t.style.top="0px"):(t.style.left="-100px",t.style.top="-100px");var n=document.createElement("div");n.id="webSocketFlash",t.appendChild(n),document.body.appendChild(t),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(t){t.success||e.error("[WebSocket] swfobject.embedSWF failed")})}},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var e=0;e<WebSocket.__tasks.length;++e)WebSocket.__tasks[e]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{for(var t=WebSocket.__flash.receiveEvents(),n=0;n<t.length;++n)WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])}catch(i){e.error(i)}},0),!0},WebSocket.__log=function(t){e.log(decodeURIComponent(t))},WebSocket.__error=function(t){e.error(decodeURIComponent(t))},WebSocket.__addTask=function(e){WebSocket.__flash?e():WebSocket.__tasks.push(e)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var e=window.navigator.mimeTypes["application/x-shockwave-flash"];return e&&e.enabledPlugin&&e.enabledPlugin.filename?e.enabledPlugin.filename.match(/flashlite/i)?!0:!1:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))}}(),function(e,t,n){function i(e){e&&(t.Transport.apply(this,arguments),this.sendBuffer=[])}function o(){}e.XHR=i,t.util.inherit(i,t.Transport),i.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},i.prototype.payload=function(e){for(var n=[],i=0,o=e.length;o>i;i++)n.push(t.parser.encodePacket(e[i]));this.send(t.parser.encodePayload(n))},i.prototype.send=function(e){return this.post(e),this},i.prototype.post=function(e){function t(){4==this.readyState&&(this.onreadystatechange=o,r.posting=!1,200==this.status?r.socket.setBuffer(!1):r.onClose())}function i(){this.onload=o,r.socket.setBuffer(!1)}var r=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),n.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=i:this.sendXHR.onreadystatechange=t,this.sendXHR.send(e)},i.prototype.close=function(){return this.onClose(),this},i.prototype.request=function(e){var n=t.util.request(this.socket.isXDomain()),i=t.util.query(this.socket.options.query,"t="+ +new Date);if(n.open(e||"GET",this.prepareUrl()+i,!0),"POST"==e)try{n.setRequestHeader?n.setRequestHeader("Content-type","text/plain;charset=UTF-8"):n.contentType="text/plain"}catch(o){}return n},i.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},i.check=function(e,i){try{var o=t.util.request(i),r=n.XDomainRequest&&o instanceof XDomainRequest,s=e&&e.options&&e.options.secure?"https:":"http:",a=s!=n.location.protocol;if(o&&(!r||!a))return!0}catch(l){}return!1},i.xdomainCheck=function(e){return i.check(e,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(){t.Transport.XHR.apply(this,arguments)}e.htmlfile=n,t.util.inherit(n,t.Transport.XHR),n.prototype.name="htmlfile",n.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var e=this.doc.createElement("div");e.className="socketio",this.doc.body.appendChild(e),this.iframe=this.doc.createElement("iframe"),e.appendChild(this.iframe);var n=this,i=t.util.query(this.socket.options.query,"t="+ +new Date);this.iframe.src=this.prepareUrl()+i,t.util.on(window,"unload",function(){n.destroy()})},n.prototype._=function(e,t){this.onData(e);try{var n=t.getElementsByTagName("script")[0];n.parentNode.removeChild(n)}catch(i){}},n.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(e){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},n.prototype.close=function(){return this.destroy(),t.Transport.XHR.prototype.close.call(this)},n.check=function(e){if("undefined"!=typeof window&&["Active"].concat("Object").join("X")in window)try{var n=new(window[["Active"].concat("Object").join("X")])("htmlfile");return n&&t.Transport.XHR.check(e)}catch(i){}return!1},n.xdomainCheck=function(){return!1},t.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function i(){t.Transport.XHR.apply(this,arguments)}function o(){}e["xhr-polling"]=i,t.util.inherit(i,t.Transport.XHR),t.util.merge(i,t.Transport.XHR),i.prototype.name="xhr-polling",i.prototype.open=function(){var e=this;return t.Transport.XHR.prototype.open.call(e),!1},i.prototype.get=function(){function e(){4==this.readyState&&(this.onreadystatechange=o,200==this.status?(r.onData(this.responseText),r.get()):r.onClose())}function t(){this.onload=o,this.onerror=o,r.onData(this.responseText),r.get()}function i(){r.onClose()}if(this.isOpen){var r=this;this.xhr=this.request(),n.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=t,this.xhr.onerror=i):this.xhr.onreadystatechange=e,this.xhr.send(null)}},i.prototype.onClose=function(){if(t.Transport.XHR.prototype.onClose.call(this),this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=o;try{this.xhr.abort()}catch(e){}this.xhr=null}},i.prototype.ready=function(e,n){var i=this;t.util.defer(function(){n.call(i)})},t.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t,n){function i(){t.Transport["xhr-polling"].apply(this,arguments),this.index=t.j.length;var e=this;t.j.push(function(t){e._(t)})}var o=n.document&&"MozAppearance"in n.document.documentElement.style;e["jsonp-polling"]=i,t.util.inherit(i,t.Transport["xhr-polling"]),i.prototype.name="jsonp-polling",i.prototype.post=function(e){function n(){i(),o.socket.setBuffer(!1)}function i(){o.iframe&&o.form.removeChild(o.iframe);try{s=document.createElement('<iframe name="'+o.iframeId+'">')}catch(e){s=document.createElement("iframe"),s.name=o.iframeId}s.id=o.iframeId,o.form.appendChild(s),o.iframe=s}var o=this,r=t.util.query(this.socket.options.query,"t="+ +new Date+"&i="+this.index);if(!this.form){var s,a=document.createElement("form"),l=document.createElement("textarea"),c=this.iframeId="socketio_iframe_"+this.index;a.className="socketio",a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.display="none",a.target=c,a.method="POST",a.setAttribute("accept-charset","utf-8"),l.name="d",a.appendChild(l),document.body.appendChild(a),this.form=a,this.area=l}this.form.action=this.prepareUrl()+r,i(),this.area.value=t.JSON.stringify(e);try{this.form.submit()}catch(d){}this.iframe.attachEvent?s.onreadystatechange=function(){"complete"==o.iframe.readyState&&n()}:this.iframe.onload=n,this.socket.setBuffer(!0)},i.prototype.get=function(){var e=this,n=document.createElement("script"),i=t.util.query(this.socket.options.query,"t="+ +new Date+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),n.async=!0,n.src=this.prepareUrl()+i,n.onerror=function(){e.onClose()};var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r),this.script=n,o&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},i.prototype._=function(e){return this.onData(e),this.isOpen&&this.get(),this},i.prototype.ready=function(e,n){var i=this;return o?(t.util.load(function(){n.call(i)}),void 0):n.call(this)},i.check=function(){return"document"in n},i.xdomainCheck=function(){return!0},t.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this)}(),!function(e,t){"use strict";var n=t.prototype.trim,i=t.prototype.trimRight,o=t.prototype.trimLeft,r=function(e){return 1*e||0},s=function(e,t){if(1>t)return"";for(var n="";t>0;)1&t&&(n+=e),t>>=1,e+=e;return n},a=[].slice,l=function(e){return null==e?"\\s":e.source?e.source:"["+f.escapeRegExp(e)+"]"},c={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},d={};for(var u in c)d[c[u]]=u;var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=s,i=function(){return i.cache.hasOwnProperty(arguments[0])||(i.cache[arguments[0]]=i.parse(arguments[0])),i.format.call(null,i.cache[arguments[0]],arguments)};return i.format=function(i,o){var r,s,a,l,c,d,u,f=1,p=i.length,m="",g=[];for(s=0;p>s;s++)if(m=e(i[s]),"string"===m)g.push(i[s]);else if("array"===m){if(l=i[s],l[2])for(r=o[f],a=0;a<l[2].length;a++){if(!r.hasOwnProperty(l[2][a]))throw new Error(h('[_.sprintf] property "%s" does not exist',l[2][a]));r=r[l[2][a]]}else r=l[1]?o[l[1]]:o[f++];if(/[^s]/.test(l[8])&&"number"!=e(r))throw new Error(h("[_.sprintf] expecting number but found %s",e(r)));switch(l[8]){case"b":r=r.toString(2);break;case"c":r=t.fromCharCode(r);break;case"d":r=parseInt(r,10);break;case"e":r=l[7]?r.toExponential(l[7]):r.toExponential();break;case"f":r=l[7]?parseFloat(r).toFixed(l[7]):parseFloat(r);break;case"o":r=r.toString(8);break;case"s":r=(r=t(r))&&l[7]?r.substring(0,l[7]):r;break;case"u":r=Math.abs(r);break;case"x":r=r.toString(16);break;case"X":r=r.toString(16).toUpperCase()}r=/[def]/.test(l[8])&&l[3]&&r>=0?"+"+r:r,d=l[4]?"0"==l[4]?"0":l[4].charAt(1):" ",u=l[6]-t(r).length,c=l[6]?n(d,u):"",g.push(l[5]?r+c:c+r)}return g.join("")},i.cache={},i.parse=function(e){for(var t=e,n=[],i=[],o=0;t;){if(null!==(n=/^[^\x25]+/.exec(t)))i.push(n[0]);else if(null!==(n=/^\x25{2}/.exec(t)))i.push("%");else{if(null===(n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t)))throw new Error("[_.sprintf] huh?"); if(n[2]) {
    o|=1;
    var r=[],s=n[2],a=[];
      if(null===(a=/^([a-z_][a-z_\d]*)/i.exec(s)))throw new Error("[_.sprintf] huh?");
      for(r.push(a[1]); ""!==(s=s.substring(a[0].length));)if(null!==(a=/^\.([a-z_][a-z_\d]*)/i.exec(s)))r.push(a[1]);
        else {
          if(null===(a=/^\[(\d+)\]/.exec(s)))throw new Error("[_.sprintf] huh?");
          r.push(a[1])
        }
      n[2]=r
    } else o|=2; if(3===o)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported"); i.push(n)
  }
          t=t.substring(n[0].length)
}
            return i
},i
}(),f= {VERSION:"2.3.0",isBlank:function(e) {
  return null==e&&(e=""),/^\s*$/.test(e)
},stripTags:function(e) {
  return null==e?"":t(e).replace(/<\/?[^>]+>/g,"")
},capitalize:function(e) {
  return e=null==e?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)
},chop:function(e,n) {
  return null==e?[]:(e=t(e),n=~~n,n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e])
},clean:function(e) {
  return f.strip(e).replace(/\s+/g," ")
},count:function(e,n) {
  return null==e||null==n?0:t(e).split(n).length-1
},chars:function(e) {
  return null==e?[]:t(e).split("")
},swapCase:function(e) {
  return null==e?"":t(e).replace(/\S/g,function(e) {
    return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()
  })
},escapeHTML:function(e) {
  return null==e?"":t(e).replace(/[&<>"']/g,function(e){return"&"+d[e]+"; "})},unescapeHTML:function(e){return null==e?"":t(e).replace(/\&([^;]+);/g,function(e,n){var i;return n in c?c[n]:(i=n.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(i[1],16)):(i=n.match(/^#(\d+)$/))?t.fromCharCode(~~i[1]):e})},escapeRegExp:function(e){return null==e?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,i){var o=f.chars(e);return o.splice(~~t,~~n,i),o.join("")},insert:function(e,t,n){return f.splice(e,t,0,n)},include:function(e,n){return""===n?!0:null==e?!1:-1!==t(e).indexOf(n)},join:function(){var e=a.call(arguments),t=e.shift();return null==t&&(t=""),e.join(t)},lines:function(e){return null==e?[]:t(e).split("\n")},reverse:function(e){return f.chars(e).reverse().join("")},startsWith:function(e,n){return""===n?!0:null==e||null==n?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(0,n.length)===n)},endsWith:function(e,n){return""===n?!0:null==e||null==n?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(e.length-n.length)===n)},succ:function(e){return null==e?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return f.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return f.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return f.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return f.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return f.capitalize(f.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,i){return null==e?"":!i&&n?n.call(e):(i=l(i),t(e).replace(new RegExp("^"+i+"+|"+i+"+$","g"),""))},ltrim:function(e,n){return null==e?"":!n&&o?o.call(e):(n=l(n),t(e).replace(new RegExp("^"+n+"+"),""))},rtrim:function(e,n){return null==e?"":!n&&i?i.call(e):(n=l(n),t(e).replace(new RegExp(n+"+$"),""))},truncate:function(e,n,i){return null==e?"":(e=t(e),i=i||"...",n=~~n,e.length>n?e.slice(0,n)+i:e)},prune:function(e,n,i){if(null==e)return"";if(e=t(e),n=~~n,i=null!=i?t(i):"...",e.length<=n)return e;var o=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},r=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,o);return r=r.slice(r.length-2).match(/\w\w/)?r.replace(/\s*\S+$/,""):f.rtrim(r.slice(0,r.length-1)),(r+i).length>e.length?e:e.slice(0,r.length)+i},words:function(e,t){return f.isBlank(e)?[]:f.trim(e,t).split(t||/\s+/)},pad:function(e,n,i,o){e=null==e?"":t(e),n=~~n;var r=0;switch(i?i.length>1&&(i=i.charAt(0)):i=" ",o){case"right":return r=n-e.length,e+s(i,r);case"both":return r=n-e.length,s(i,Math.ceil(r/2))+e+s(i,Math.floor(r/2));default:return r=n-e.length,s(i,r)+e}},lpad:function(e,t,n){return f.pad(e,t,n)},rpad:function(e,t,n){return f.pad(e,t,n,"right")},lrpad:function(e,t,n){return f.pad(e,t,n,"both")},sprintf:h,vsprintf:function(e,t){return t.unshift(e),h.apply(null,t)},toNumber:function(e,n){if(null==e||""==e)return 0;e=t(e);var i=r(r(e).toFixed(~~n));return 0!==i||e.match(/^0+$/)?i:Number.NaN},numberFormat:function(e,t,n,i){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),i=i||",";var o=e.split("."),r=o[0],s=o[1]?(n||".")+o[1]:"";return r.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+i)+s},strRight:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var i=n?e.indexOf(n):-1;return~i?e.slice(i+n.length,e.length):e},strRightBack:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var i=n?e.lastIndexOf(n):-1;return~i?e.slice(i+n.length,e.length):e},strLeft:function(e,n){if(null==e)return"";e=t(e),n=null!=n?t(n):n;var i=n?e.indexOf(n):-1;return~i?e.slice(0,i):e},strLeftBack:function(e,t){if(null==e)return"";e+="",t=null!=t?""+t:t;var n=e.lastIndexOf(t);return~n?e.slice(0,n):e},toSentence:function(e,t,n,i){t=t||", ",n=n||" and ";var o=e.slice(),r=o.pop();return e.length>2&&i&&(n=f.rtrim(t)+n),o.length?o.join(t)+n+r:r},toSentenceSerial:function(){var e=a.call(arguments);return e[3]=!0,f.toSentence.apply(f,e)},slugify:function(e){if(null==e)return"";var n="Ä…Ã Ã¡Ã¤Ã¢Ã£Ã¥Ã¦Ä‡Ä™Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®Å‚Å„Ã²Ã³Ã¶Ã´ÃµÃ¸Ã¹ÃºÃ¼Ã»Ã±Ã§Å¼Åº",i="aaaaaaaaceeeeeiiiilnoooooouuuunczz",o=new RegExp(l(n),"g");return e=t(e).toLowerCase().replace(o,function(e){var t=n.indexOf(e);return i.charAt(t)||"-"}),f.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return f.surround(e,'"')},exports:function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse)$/)&&(e[t]=this[t]);return e},repeat:function(e,n,i){if(null==e)return"";if(n=~~n,null==i)return s(t(e),n);for(var o=[];n>0;o[--n]=e);return o.join(i)},levenshtein:function(e,n){if(null==e&&null==n)return 0;if(null==e)return t(n).length;if(null==n)return t(e).length;e=t(e),n=t(n);for(var i,o,r=[],s=0;s<=n.length;s++)for(var a=0;a<=e.length;a++)o=s&&a?e.charAt(a-1)===n.charAt(s-1)?i:Math.min(r[a],r[a-1],i)+1:s+a,i=r[a],r[a]=o;return r.pop()}};f.strip=f.trim,f.lstrip=f.ltrim,f.rstrip=f.rtrim,f.center=f.lrpad,f.rjust=f.lpad,f.ljust=f.rpad,f.contains=f.include,f.q=f.quote,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(module.exports=f),exports._s=f):"function"==typeof define&&define.amd?define("underscore.string",[],function(){return f}):(e._=e._||{},e._.string=e._.str=f)}(this,String),function(e,t){function n(t,n){var o=t.nodeName.toLowerCase();if("area"===o){var r,s=t.parentNode,a=s.name;return t.href&&a&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+a+"]")[0],!!r&&i(r)):!1}return(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"==o?t.href||n:n)&&i(t)}function i(t){return!e(t).parents().andSelf().filter(function(){return"hidden"===e.curCSS(this,"visibility")||e.expr.filters.hidden(this)}).length}e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.8.23",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),e.fn.extend({propAttr:e.fn.prop||e.fn.attr,_focus:e.fn.focus,focus:function(t,n){return"number"==typeof t?this.each(function(){var i=this;setTimeout(function(){e(i).focus(),n&&n.call(i)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length)for(var i,o,r=e(this[0]);r.length&&r[0]!==document;){if(i=r.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(o=parseInt(r.css("zIndex"),10),!isNaN(o)&&0!==o))return o;r=r.parent()}return 0},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,i){function o(t,n,i,o){return e.each(r,function(){n-=parseFloat(e.curCSS(t,"padding"+this,!0))||0,i&&(n-=parseFloat(e.curCSS(t,"border"+this+"Width",!0))||0),o&&(n-=parseFloat(e.curCSS(t,"margin"+this,!0))||0)}),n}var r="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),a={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(n){return n===t?a["inner"+i].call(this):this.each(function(){e(this).css(s,o(this,n)+"px")})},e.fn["outer"+i]=function(t,n){
                                   return"number"!=typeof t?a["outer"+i].call(this,t):this.each(function(){e(this).css(s,o(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(t){return n(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var i=e.attr(t,"tabindex"),o=isNaN(i);return(o||i>=0)&&n(t,!o)
                                 }}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===n.offsetHeight,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e.curCSS||(e.curCSS=e.css),e.extend(e.ui,{plugin:{add:function(t,n,i){var o=e.ui[t].prototype;for(var r in i)o.plugins[r]=o.plugins[r]||[],o.plugins[r].push([n,i[r]])},call:function(e,t,n){var i=e.plugins[t];if(i&&e.element[0].parentNode)for(var o=0;o<i.length;o++)e.options[i[o][0]]&&i[o][1].apply(e.element,n)}},contains:function(e,t){return document.compareDocumentPosition?16&e.compareDocumentPosition(t):e!==t&&e.contains(t)},hasScroll:function(t,n){if("hidden"===e(t).css("overflow"))return!1;var i=n&&"left"===n?"scrollLeft":"scrollTop",o=!1;return t[i]>0?!0:(t[i]=1,o=t[i]>0,t[i]=0,o)},isOverAxis:function(e,t,n){return e>t&&t+n>e},isOver:function(t,n,i,o,r,s){return e.ui.isOverAxis(t,i,r)&&e.ui.isOverAxis(n,o,s)}}))}(jQuery),function(e,t){if(e.cleanData){var n=e.cleanData;e.cleanData=function(t){for(var i,o=0;null!=(i=t[o]);o++)try{e(i).triggerHandler("remove")}catch(r){}n(t)}}else{var i=e.fn.remove;e.fn.remove=function(t,n){return this.each(function(){return n||(!t||e.filter(t,[this]).length)&&e("*",this).add([this]).each(function(){try{e(this).triggerHandler("remove")}catch(t){}}),i.call(e(this),t,n)})}}e.widget=function(t,n,i){var o,r=t.split(".")[0];t=t.split(".")[1],o=r+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][o]=function(n){return!!e.data(n,t)},e[r]=e[r]||{},e[r][t]=function(e,t){arguments.length&&this._createWidget(e,t)};var s=new n;s.options=e.extend(!0,{},s.options),e[r][t].prototype=e.extend(!0,s,{namespace:r,widgetName:t,widgetEventPrefix:e[r][t].prototype.widgetEventPrefix||t,widgetBaseClass:o},i),e.widget.bridge(t,e[r][t])},e.widget.bridge=function(n,i){e.fn[n]=function(o){var r="string"==typeof o,s=Array.prototype.slice.call(arguments,1),a=this;return o=!r&&s.length?e.extend.apply(null,[!0,o].concat(s)):o,r&&"_"===o.charAt(0)?a:(r?this.each(function(){var i=e.data(this,n),r=i&&e.isFunction(i[o])?i[o].apply(i,s):i;return r!==i&&r!==t?(a=r,!1):void 0}):this.each(function(){var t=e.data(this,n);t?t.option(o||{})._init():e.data(this,n,new i(o,this))}),a)}},e.Widget=function(e,t){arguments.length&&this._createWidget(e,t)},e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(t,n){e.data(n,this.widgetName,this),this.element=e(n),this.options=e.extend(!0,{},this.options,this._getCreateOptions(),t);var i=this;this.element.bind("remove."+this.widgetName,function(){i.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(n,i){var o=n;if(0===arguments.length)return e.extend({},this.options);if("string"==typeof n){if(i===t)return this.options[n];o={},o[n]=i}return this._setOptions(o),this},_setOptions:function(t){var n=this;return e.each(t,function(e,t){n._setOption(e,t)}),this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",t),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(t,n,i){var o,r,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],r=n.originalEvent)for(o in r)o in n||(n[o]=r[o]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.call(this.element[0],n,i)===!1||n.isDefaultPrevented())}}}(jQuery),function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){return!0===e.data(n.target,t.widgetName+".preventClickEvent")?(e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(!t){this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var i=this,o=1==n.which,r="string"==typeof this.options.cancel&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;return o&&!r&&this._mouseCapture(n)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(n)&&this._mouseDelayMet(n)&&(this._mouseStarted=this._mouseStart(n)!==!1,!this._mouseStarted)?(n.preventDefault(),!0):(!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return!e.browser.msie||document.documentMode>=9||t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target==this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(e){e.ui=e.ui||{};var t=/left|center|right/,n=/top|center|bottom/,i="center",o={},r=e.fn.position,s=e.fn.offset;e.fn.position=function(s){if(!s||!s.of)return r.apply(this,arguments);s=e.extend({},s);var a,l,c,d=e(s.of),u=d[0],h=(s.collision||"flip").split(" "),f=s.offset?s.offset.split(" "):[0,0];return 9===u.nodeType?(a=d.width(),l=d.height(),c={top:0,left:0}):u.setTimeout?(a=d.width(),l=d.height(),c={top:d.scrollTop(),left:d.scrollLeft()}):u.preventDefault?(s.at="left top",a=l=0,c={top:s.of.pageY,left:s.of.pageX}):(a=d.outerWidth(),l=d.outerHeight(),c=d.offset()),e.each(["my","at"],function(){var e=(s[this]||"").split(" ");1===e.length&&(e=t.test(e[0])?e.concat([i]):n.test(e[0])?[i].concat(e):[i,i]),e[0]=t.test(e[0])?e[0]:i,e[1]=n.test(e[1])?e[1]:i,s[this]=e}),1===h.length&&(h[1]=h[0]),f[0]=parseInt(f[0],10)||0,1===f.length&&(f[1]=f[0]),f[1]=parseInt(f[1],10)||0,"right"===s.at[0]?c.left+=a:s.at[0]===i&&(c.left+=a/2),"bottom"===s.at[1]?c.top+=l:s.at[1]===i&&(c.top+=l/2),c.left+=f[0],c.top+=f[1],this.each(function(){var t,n=e(this),r=n.outerWidth(),d=n.outerHeight(),u=parseInt(e.curCSS(this,"marginLeft",!0))||0,p=parseInt(e.curCSS(this,"marginTop",!0))||0,m=r+u+(parseInt(e.curCSS(this,"marginRight",!0))||0),g=d+p+(parseInt(e.curCSS(this,"marginBottom",!0))||0),y=e.extend({},c);"right"===s.my[0]?y.left-=r:s.my[0]===i&&(y.left-=r/2),"bottom"===s.my[1]?y.top-=d:s.my[1]===i&&(y.top-=d/2),o.fractions||(y.left=Math.round(y.left),y.top=Math.round(y.top)),t={left:y.left-u,top:y.top-p},e.each(["left","top"],function(n,i){e.ui.position[h[n]]&&e.ui.position[h[n]][i](y,{targetWidth:a,targetHeight:l,elemWidth:r,elemHeight:d,collisionPosition:t,collisionWidth:m,collisionHeight:g,offset:f,my:s.my,at:s.at})}),e.fn.bgiframe&&n.bgiframe(),n.offset(e.extend(y,{using:s.using}))})},e.ui.position={fit:{left:function(t,n){var i=e(window),o=n.collisionPosition.left+n.collisionWidth-i.width()-i.scrollLeft();t.left=o>0?t.left-o:Math.max(t.left-n.collisionPosition.left,t.left)},top:function(t,n){var i=e(window),o=n.collisionPosition.top+n.collisionHeight-i.height()-i.scrollTop();t.top=o>0?t.top-o:Math.max(t.top-n.collisionPosition.top,t.top)}},flip:{left:function(t,n){if(n.at[0]!==i){var o=e(window),r=n.collisionPosition.left+n.collisionWidth-o.width()-o.scrollLeft(),s="left"===n.my[0]?-n.elemWidth:"right"===n.my[0]?n.elemWidth:0,a="left"===n.at[0]?n.targetWidth:-n.targetWidth,l=-2*n.offset[0];t.left+=n.collisionPosition.left<0?s+a+l:r>0?s+a+l:0}},top:function(t,n){if(n.at[1]!==i){var o=e(window),r=n.collisionPosition.top+n.collisionHeight-o.height()-o.scrollTop(),s="top"===n.my[1]?-n.elemHeight:"bottom"===n.my[1]?n.elemHeight:0,a="top"===n.at[1]?n.targetHeight:-n.targetHeight,l=-2*n.offset[1];t.top+=n.collisionPosition.top<0?s+a+l:r>0?s+a+l:0}}}},e.offset.setOffset||(e.offset.setOffset=function(t,n){/static/.test(e.curCSS(t,"position"))&&(t.style.position="relative");var i=e(t),o=i.offset(),r=parseInt(e.curCSS(t,"top",!0),10)||0,s=parseInt(e.curCSS(t,"left",!0),10)||0,a={top:n.top-o.top+r,left:n.left-o.left+s};
                                 "using"in n?n.using.call(t,a):i.css(a)},e.fn.offset=function(t){var n=this[0];return n&&n.ownerDocument?t?e.isFunction(t)?this.each(function(n){e(this).offset(t.call(this,n,e(this).offset()))}):this.each(function(){e.offset.setOffset(this,t)}):s.call(this):null}),e.curCSS||(e.curCSS=e.css),function(){var t,n,i,r,s,a=document.getElementsByTagName("body")[0],l=document.createElement("div");t=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(var c in i)t.style[c]=i[c];t.appendChild(l),n=a||document.documentElement,n.insertBefore(t,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",r=e(l).offset(function(e,t){return t}).offset(),t.innerHTML="",n.removeChild(t),s=r.top+r.left+(a?2e3:0),o.fractions=s>21&&22>s}()}(jQuery),function(t,n,i,o){function r(e,n){this.element=e,this.options=t.extend(!0,{},l,n),this.options.share=n.share,this._defaults=l,this._name=a,this.init()}var a="sharrre",l={className:"sharrre",share:{googlePlus:!1,facebook:!1,twitter:!1,digg:!1,delicious:!1,stumbleupon:!1,linkedin:!1,pinterest:!1},shareTotal:0,template:"",title:"",url:i.location.href,text:i.title,urlCurl:"sharrre.php",count:{},total:0,shorterTotal:!0,enableHover:!0,enableCounter:!0,enableTracking:!1,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{url:"",urlCount:!1,size:"medium",lang:"en-US",annotation:""},facebook:{url:"",urlCount:!1,action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{url:"",urlCount:!1,count:"horizontal",hashtags:"",via:"",related:"",lang:"en"},digg:{url:"",urlCount:!1,type:"DiggCompact"},delicious:{url:"",urlCount:!1,size:"medium"},stumbleupon:{url:"",urlCount:!1,layout:"1"},linkedin:{url:"",urlCount:!1,counter:""},pinterest:{url:"",media:"",description:"",layout:"horizontal"}}},c={googlePlus:"",facebook:"http://graph.facebook.com/?id={url}&callback=?",twitter:"http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",stumbleupon:"",linkedin:"http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",pinterest:""},d={googlePlus:function(e){var o=e.options.buttons.googlePlus;t(e.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+o.size+'" data-href="'+(""!==o.url?o.url:e.options.url)+'" data-annotation="'+o.annotation+'"></div></div>'),n.___gcfg={lang:e.options.buttons.googlePlus.lang};var r=0;"undefined"==typeof gapi&&0==r?(r=1,function(){var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="//apis.google.com/js/plusone.js";var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()):gapi.plusone.go()},facebook:function(e){var n=e.options.buttons.facebook;t(e.element).find(".buttons").append('<div id="fb-root"></div><div class="button facebook"><div class="fb-like" data-href="'+(""!==n.url?n.url:e.options.url)+'" data-send="'+n.send+'" data-layout="'+n.layout+'" data-width="'+n.width+'" data-show-faces="'+n.faces+'" data-action="'+n.action+'" data-colorscheme="'+n.colorscheme+'" data-font="'+n.font+'" data-via="'+n.via+'"></div></div>');var o=0;"undefined"==typeof FB&&0==o?(o=1,function(e,t,i){var o,r=e.getElementsByTagName(t)[0];e.getElementById(i)||(o=e.createElement(t),o.id=i,o.src="//connect.facebook.net/"+n.lang+"/all.js#xfbml=1",r.parentNode.insertBefore(o,r))}(i,"script","facebook-jssdk")):FB.XFBML.parse()},twitter:function(e){var n=e.options.buttons.twitter;t(e.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+(""!==n.url?n.url:e.options.url)+'" data-count="'+n.count+'" data-text="'+e.options.text+'" data-via="'+n.via+'" data-hashtags="'+n.hashtags+'" data-related="'+n.related+'" data-lang="'+n.lang+'">Tweet</a></div>');var o=0;"undefined"==typeof twttr&&0==o?(o=1,function(){var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="//platform.twitter.com/widgets.js";var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()):t.ajax({url:"//platform.twitter.com/widgets.js",dataType:"script",cache:!0})},digg:function(e){var n=e.options.buttons.digg;t(e.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+n.type+'" rel="nofollow external" href="http://digg.com/submit?url='+encodeURIComponent(""!==n.url?n.url:e.options.url)+'"></a></div>');var o=0;"undefined"==typeof __DBW&&0==o&&(o=1,function(){var e=i.createElement("SCRIPT"),t=i.getElementsByTagName("SCRIPT")[0];e.type="text/javascript",e.async=!0,e.src="//widgets.digg.com/buttons.js",t.parentNode.insertBefore(e,t)}())},delicious:function(e){if("tall"==e.options.buttons.delicious.size)var n="width:50px;",i="height:35px;width:50px;font-size:15px;line-height:35px;",o="height:18px;line-height:18px;margin-top:3px;";else var n="width:93px;",i="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",o="float:left;height:20px;line-height:20px;";var r=e.shorterTotal(e.options.count.delicious);"undefined"==typeof r&&(r=0),t(e.element).find(".buttons").append('<div class="button delicious"><div style="'+n+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+i+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+r+'</div><div style="'+o+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'),t(e.element).find(".delicious").on("click",function(){e.openPopup("delicious")})},stumbleupon:function(e){var o=e.options.buttons.stumbleupon;t(e.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+o.layout+'" location="'+(""!==o.url?o.url:e.options.url)+'"></su:badge></div>');var r=0;"undefined"==typeof STMBLPN&&0==r?(r=1,function(){var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="//platform.stumbleupon.com/1/widgets.js";var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),s=n.setTimeout(function(){"undefined"!=typeof STMBLPN&&(STMBLPN.processWidgets(),clearInterval(s))},500)):STMBLPN.processWidgets()},linkedin:function(e){var o=e.options.buttons.linkedin;t(e.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="'+(""!==o.url?o.url:e.options.url)+'" data-counter="'+o.counter+'"></script></div>');var r=0;"undefined"==typeof n.IN&&0==r?(r=1,function(){var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="//platform.linkedin.com/in.js";var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()):n.IN.init()},pinterest:function(e){var n=e.options.buttons.pinterest;t(e.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url='+(""!==n.url?n.url:e.options.url)+"&media="+n.media+"&description="+n.description+'" class="pin-it-button" count-layout="'+n.layout+'">Pin It</a></div>'),function(){var e=i.createElement("script");e.type="text/javascript",e.async=!0,e.src="//assets.pinterest.com/js/pinit.js";var t=i.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}},u={googlePlus:function(){},facebook:function(){fb=n.setInterval(function(){"undefined"!=typeof FB&&(FB.Event.subscribe("edge.create",function(e){_gaq.push(["_trackSocial","facebook","like",e])}),FB.Event.subscribe("edge.remove",function(e){_gaq.push(["_trackSocial","facebook","unlike",e])}),FB.Event.subscribe("message.send",function(e){_gaq.push(["_trackSocial","facebook","send",e])}),clearInterval(fb))},1e3)},twitter:function(){tw=n.setInterval(function(){"undefined"!=typeof twttr&&(twttr.events.bind("tweet",function(e){e&&_gaq.push(["_trackSocial","twitter","tweet"])}),clearInterval(tw))},1e3)},digg:function(){},delicious:function(){},stumbleupon:function(){},linkedin:function(){},pinterest:function(){}},h={googlePlus:function(e){n.open("https://plusone.google.com/_/+1/confirm?hl="+e.buttons.googlePlus.lang+"&url="+encodeURIComponent(""!==e.buttons.googlePlus.url?e.buttons.googlePlus.url:e.url),"","toolbar=0, status=0, width=900, height=500")},facebook:function(e){n.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(""!==e.buttons.facebook.url?e.buttons.facebook.url:e.url)+"&t="+e.text,"","toolbar=0, status=0, width=900, height=500")},twitter:function(e){n.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e.text)+"&url="+encodeURIComponent(""!==e.buttons.twitter.url?e.buttons.twitter.url:e.url)+(""!==e.buttons.twitter.via?"&via="+e.buttons.twitter.via:""),"","toolbar=0, status=0, width=650, height=360")},digg:function(e){n.open("http://digg.com/tools/diggthis/submit?url="+encodeURIComponent(""!==e.buttons.digg.url?e.buttons.digg.url:e.url)+"&title="+e.text+"&related=true&style=true","","toolbar=0, status=0, width=650, height=360")},delicious:function(e){n.open("http://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(""!==e.buttons.delicious.url?e.buttons.delicious.url:e.url)+"&title="+e.text,"delicious","toolbar=no,width=550,height=550")}
                                     ,stumbleupon:function(e){n.open("http://www.stumbleupon.com/badge/?url="+encodeURIComponent(""!==e.buttons.delicious.url?e.buttons.delicious.url:e.url),"stumbleupon","toolbar=no,width=550,height=550")},linkedin:function(e){n.open("https://www.linkedin.com/cws/share?url="+encodeURIComponent(""!==e.buttons.delicious.url?e.buttons.delicious.url:e.url)+"&token=&isFramed=true","linkedin","toolbar=no,width=550,height=550")},pinterest:function(e){n.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent(""!==e.buttons.pinterest.url?e.buttons.pinterest.url:e.url)+"&media="+encodeURIComponent(e.buttons.pinterest.media)+"&description="+e.buttons.pinterest.description,"pinterest","toolbar=no,width=700,height=300")}};r.prototype.init=function(){var e=this;""!==this.options.urlCurl&&(c.googlePlus=this.options.urlCurl+"?url={url}&type=googlePlus",c.stumbleupon=this.options.urlCurl+"?url={url}&type=stumbleupon",c.pinterest=this.options.urlCurl+"?url={url}&type=pinterest"),t(this.element).addClass(this.options.className),"undefined"!=typeof t(this.element).data("title")&&(this.options.title=t(this.element).attr("data-title")),"undefined"!=typeof t(this.element).data("url")&&(this.options.url=t(this.element).data("url")),"undefined"!=typeof t(this.element).data("text")&&(this.options.text=t(this.element).data("text")),t.each(this.options.share,function(t,n){n===!0&&e.options.shareTotal++}),e.options.enableCounter===!0?t.each(this.options.share,function(t,n){if(n===!0)try{e.getSocialJson(t)}catch(i){}}):(this.loadButtons(),this.options.render(this,this.options)),t(this.element).hover(function(){0===t(this).find(".buttons").length&&e.options.enableHover===!0&&e.loadButtons(),e.options.hover(e,e.options)},function(){e.options.hide(e,e.options)}),t(this.element).click(function(){return e.options.click(e,e.options),!1})},r.prototype.loadButtons=function(){var e=this;t(this.element).append('<div class="buttons"></div>'),t.each(e.options.share,function(t,n){1==n&&(d[t](e),e.options.enableTracking===!0&&u[t]())})},r.prototype.getSocialJson=function(e){var n=this,i=0,o=c[e].replace("{url}",encodeURIComponent(this.options.url));this.options.buttons[e].urlCount===!0&&""!==this.options.buttons[e].url&&(o=c[e].replace("{url}",this.options.buttons[e].url)),""!=o?t.getJSON(o,function(t){if("undefined"!=typeof t.count){var o=t.count+"";o=o.replace("Â� ",""),i+=parseInt(o,10)}else"undefined"!=typeof t.likes?i+=parseInt(t.likes,10):"undefined"!=typeof t.shares?i+=parseInt(t.shares,10):"undefined"!=typeof t[0]?i+=parseInt(t[0].total_posts,10):"undefined"!=typeof t[0];n.options.count[e]=i,n.options.total+=i,n.renderer(),n.rendererPerso()}).error(function(){n.options.count[e]=0,n.rendererPerso()}):(n.renderer(),n.options.count[e]=0,n.rendererPerso())},r.prototype.rendererPerso=function(){var t=0;for(e in this.options.count)t++;t===this.options.shareTotal&&this.options.render(this,this.options)},r.prototype.renderer=function(){var e=this.options.total,n=this.options.template;this.options.shorterTotal===!0&&(e=this.shorterTotal(e)),""!==n?(n=n.replace("{total}",e),t(this.element).html(n)):t(this.element).html('<div class="box"><a class="count" href="#">'+e+"</a>"+(""!==this.options.title?'<a class="share" href="#">'+this.options.title+"</a>":"")+"</div>")},r.prototype.shorterTotal=function(e){return e>=1e6?e=(e/1e6).toFixed(2)+"M":e>=1e3&&(e=(e/1e3).toFixed(1)+"k"),e},r.prototype.openPopup=function(e){if(h[e](this.options),this.options.enableTracking===!0){var t={googlePlus:{site:"Google",action:"+1"},facebook:{site:"facebook",action:"like"},twitter:{site:"twitter",action:"tweet"},digg:{site:"digg",action:"add"},delicious:{site:"delicious",action:"add"},stumbleupon:{site:"stumbleupon",action:"add"},linkedin:{site:"linkedin",action:"share"},pinterest:{site:"pinterest",action:"pin"}};_gaq.push(["_trackSocial",t[e].site,t[e].action])}},r.prototype.simulateClick=function(){var e=t(this.element).html();t(this.element).html(e.replace(this.options.total,this.options.total+1))},r.prototype.update=function(e,t){""!==e&&(this.options.url=e),""!==t&&(this.options.text=t)},t.fn[a]=function(e){var n=arguments;return e===o||"object"==typeof e?this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new r(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var i=t.data(this,"plugin_"+a);i instanceof r&&"function"==typeof i[e]&&i[e].apply(i,Array.prototype.slice.call(n,1))}):void 0}}(jQuery,window,document),jQuery.cookie=function(e,t,n){if(arguments.length>1&&"[object Object]"!==String(t)){if(n=jQuery.extend({},n),(null===t||void 0===t)&&(n.expires=-1),"number"==typeof n.expires){var i=n.expires,o=n.expires=new Date;o.setDate(o.getDate()+i)}return t=String(t),document.cookie=[encodeURIComponent(e),"=",n.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}n=t||{};var r,s=n.raw?function(e){return e}:decodeURIComponent;return(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?s(r[1]):null},function(e){function t(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}e.fn.ajaxSubmit=function(n){function i(){function i(){var t=h.attr("target"),n=h.attr("action");r.setAttribute("target",a),"POST"!=r.getAttribute("method")&&r.setAttribute("method","POST"),r.getAttribute("action")!=s.url&&r.setAttribute("action",s.url),s.skipEncodingOverride||h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),s.timeout&&setTimeout(function(){f=!0,o()},s.timeout);var i=[];try{if(s.extraData)for(var d in s.extraData)i.push(e('<input type="hidden" name="'+d+'" value="'+s.extraData[d]+'" />').appendTo(r)[0]);l.appendTo("body"),c.attachEvent?c.attachEvent("onload",o):c.addEventListener("load",o,!1),r.submit()}finally{r.setAttribute("action",n),t?r.setAttribute("target",t):h.removeAttr("target"),e(i).remove()}}function o(){if(!d.aborted){var n=c.contentWindow?c.contentWindow.document:c.contentDocument?c.contentDocument:c.document;if(n&&n.location.href!=s.iframeSrc){c.detachEvent?c.detachEvent("onload",o):c.removeEventListener("load",o,!1);var i=!0;try{if(f)throw"timeout";var r="xml"==s.dataType||n.XMLDocument||e.isXMLDoc(n);if(t("isXml="+r),!r&&window.opera&&(null==n.body||""==n.body.innerHTML)&&--y)return t("requeing onLoad callback, DOM not available"),setTimeout(o,250),void 0;d.responseText=n.body?n.body.innerHTML:n.documentElement?n.documentElement.innerHTML:null,d.responseXML=n.XMLDocument?n.XMLDocument:n,d.getResponseHeader=function(e){var t={"content-type":s.dataType};return t[e]};var a=/(json|script)/.test(s.dataType);if(a||s.textarea){var h=n.getElementsByTagName("textarea")[0];if(h)d.responseText=h.value;else if(a){var p=n.getElementsByTagName("pre")[0],m=n.getElementsByTagName("body")[0];p?d.responseText=p.textContent:m&&(d.responseText=m.innerHTML)}}else"xml"!=s.dataType||d.responseXML||null==d.responseText||(d.responseXML=v(d.responseText));g=w(d,s.dataType,s)}catch(b){t("error caught:",b),i=!1,d.error=b,s.error&&s.error.call(s.context,d,"error",b),u&&e.event.trigger("ajaxError",[d,s,b])}d.aborted&&(t("upload aborted"),i=!1),i&&(s.success&&s.success.call(s.context,g,"success",d),u&&e.event.trigger("ajaxSuccess",[d,s])),u&&e.event.trigger("ajaxComplete",[d,s]),u&&!--e.active&&e.event.trigger("ajaxStop"),s.complete&&s.complete.call(s.context,d,i?"success":"error"),setTimeout(function(){l.removeData("form-plugin-onload"),l.remove(),d.responseXML=null},100)}}}var r=h[0];if(e(":input[name=submit],:input[id=submit]",r).length)return alert('Error: Form elements must not have name or id of "submit".'),void 0;var s=e.extend(!0,{},e.ajaxSettings,n);s.context=s.context||s;var a="jqFormIO"+(new Date).getTime(),l=e('<iframe id="'+a+'" name="'+a+'" src="'+s.iframeSrc+'" />'),c=l[0];l.css({position:"absolute",top:"-1000px",left:"-1000px"});var d={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){t("aborting upload...");var n="aborted";this.aborted=1,l.attr("src",s.iframeSrc),d.error=n,s.error&&s.error.call(s.context,d,"error",n),u&&e.event.trigger("ajaxError",[d,s,n]),s.complete&&s.complete.call(s.context,d,"error")}},u=s.global;if(u&&!e.active++&&e.event.trigger("ajaxStart"),u&&e.event.trigger("ajaxSend",[d,s]),s.beforeSend&&s.beforeSend.call(s.context,d,s)===!1)return s.global&&e.active--,void 0;if(!d.aborted){var f=0,p=r.clk;if(p){var m=p.name;m&&!p.disabled&&(s.extraData=s.extraData||{},s.extraData[m]=p.value,"image"==p.type&&(s.extraData[m+".x"]=r.clk_x,s.extraData[m+".y"]=r.clk_y))}s.forceSync?i():setTimeout(i,10);var g,y=50,v=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},b=e.parseJSON||function(e){return window.eval("("+e+")")},w=function(t,n,i){var o=t.getResponseHeader("content-type")||"",r="xml"===n||!n&&o.indexOf("xml")>=0,s=r?t.responseXML:t.responseText;return r&&"parsererror"===s.documentElement.nodeName&&e.error&&e.error("parsererror"),i&&i.dataFilter&&(s=i.dataFilter(s,n)),"string"==typeof s&&("json"===n||!n&&o.indexOf("json")>=0?s=b(s):("script"===n||!n&&o.indexOf("javascript")>=0)&&e.globalEval(s)),s}}}if(!this.length)return t("ajaxSubmit: skipping submit process - no element selected"),this;"function"==typeof n&&(n={success:n});var o=this.attr("action"),r="string"==typeof o?e.trim(o):"";r&&(r=(r.match(/^([^#]+)/)||[])[1]),r=r||window.location.href||"",n=e.extend(!0,{url:r,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},n);var s={};if(this.trigger("form-pre-serialize",[this,n,s]),s.veto)return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(n.beforeSerialize&&n.beforeSerialize(this,n)===!1)return t("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var a,l,c=this.formToArray(n.semantic);if(n.data){n.extraData=n.data;for(a in n.data)if(n.data[a]instanceof Array)for(var d in n.data[a])c.push({name:a,value:n.data[a][d]});else l=n.data[a],l=e.isFunction(l)?l():l,c.push({name:a,value:l})}if(n.beforeSubmit&&n.beforeSubmit(c,this,n)===!1)return t("ajaxSubmit: submit aborted via beforeSubmit callback"),this;
                                           if(this.trigger("form-submit-validate",[c,this,n,s]),s.veto)return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var u=e.param(c);"GET"==n.type.toUpperCase()?(n.url+=(n.url.indexOf("?")>=0?"&":"?")+u,n.data=null):n.data=u;var h=this,f=[];if(n.resetForm&&f.push(function(){h.resetForm()}),n.clearForm&&f.push(function(){h.clearForm()}),!n.dataType&&n.target){var p=n.success||function(){};f.push(function(t){var i=n.replaceTarget?"replaceWith":"html";e(n.target)[i](t).each(p,arguments)})}else n.success&&f.push(n.success);n.success=function(e,t,i){for(var o=n.context||n,r=0,s=f.length;s>r;r++)f[r].apply(o,[e,t,i||h,h])};var m=e("input:file",this).length>0,g="multipart/form-data",y=h.attr("enctype")==g||h.attr("encoding")==g;return n.iframe!==!1&&(m||n.iframe||y)?n.closeKeepAlive?e.get(n.closeKeepAlive,i):i():e.ajax(n),this.trigger("form-submit-notify",[this,n]),this},e.fn.ajaxForm=function(n){if(0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(t("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(t("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return this.ajaxFormUnbind().bind("submit.form-plugin",function(t){t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(n))}).bind("click.form-plugin",function(t){var n=t.target,i=e(n);if(!i.is(":submit,input:image")){var o=i.closest(":submit");if(0==o.length)return;n=o[0]}var r=this;if(r.clk=n,"image"==n.type)if(void 0!=t.offsetX)r.clk_x=t.offsetX,r.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var s=i.offset();r.clk_x=t.pageX-s.left,r.clk_y=t.pageY-s.top}else r.clk_x=t.pageX-n.offsetLeft,r.clk_y=t.pageY-n.offsetTop;setTimeout(function(){r.clk=r.clk_x=r.clk_y=null},100)})},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")
                                         },e.fn.formToArray=function(t){var n=[];if(0===this.length)return n;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return n;var r,s,a,l,c,d,u;for(r=0,d=o.length;d>r;r++)if(c=o[r],a=c.name)if(t&&i.clk&&"image"==c.type)c.disabled||i.clk!=c||(n.push({name:a,value:e(c).val()}),n.push({name:a+".x",value:i.clk_x},{name:a+".y",value:i.clk_y}));else if(l=e.fieldValue(c,!0),l&&l.constructor==Array)for(s=0,u=l.length;u>s;s++)n.push({name:a,value:l[s]});else null!==l&&"undefined"!=typeof l&&n.push({name:a,value:l});if(!t&&i.clk){var h=e(i.clk),f=h[0];a=f.name,a&&!f.disabled&&"image"==f.type&&(n.push({name:a,value:h.val()}),n.push({name:a+".x",value:i.clk_x},{name:a+".y",value:i.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var n=[];return this.each(function(){var i=this.name;if(i){var o=e.fieldValue(this,t);if(o&&o.constructor==Array)for(var r=0,s=o.length;s>r;r++)n.push({name:i,value:o[r]});else null!==o&&"undefined"!=typeof o&&n.push({name:this.name,value:o})}}),e.param(n)},e.fn.fieldValue=function(t){for(var n=[],i=0,o=this.length;o>i;i++){var r=this[i],s=e.fieldValue(r,t);null===s||"undefined"==typeof s||s.constructor==Array&&!s.length||(s.constructor==Array?e.merge(n,s):n.push(s))}return n},e.fieldValue=function(t,n){var i=t.name,o=t.type,r=t.tagName.toLowerCase();if(void 0===n&&(n=!0),n&&(!i||t.disabled||"reset"==o||"button"==o||("checkbox"==o||"radio"==o)&&!t.checked||("submit"==o||"image"==o)&&t.form&&t.form.clk!=t||"select"==r&&-1==t.selectedIndex))return null;if("select"==r){var s=t.selectedIndex;if(0>s)return null;for(var a=[],l=t.options,c="select-one"==o,d=c?s+1:l.length,u=c?s:0;d>u;u++){var h=l[u];if(h.selected){var f=h.value;if(f||(f=h.attributes&&h.attributes.value&&!h.attributes.value.specified?h.text:h.value),c)return f;a.push(f)}}return a}return e(t).val()},e.fn.clearForm=function(){return this.each(function(){e("input,select,textarea",this).clearFields()})},e.fn.clearFields=e.fn.clearInputs=function(){return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();"text"==e||"password"==e||"textarea"==t?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==t&&(this.selectedIndex=-1)})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var n=this.type;if("checkbox"==n||"radio"==n)this.checked=t;else if("option"==this.tagName.toLowerCase()){var i=e(this).parent("select");t&&i[0]&&"select-one"==i[0].type&&i.find("option").selected(!1),this.selected=t}})}}(jQuery),jQuery.effects||function(e,t){function n(t){var n;return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?c.transparent:c[e.trim(t).toLowerCase()]}function i(t,i){var o;do{if(o=e.curCSS(t,i),""!=o&&"transparent"!=o||e.nodeName(t,"body"))break;i="backgroundColor"}while(t=t.parentNode);return n(o)}function o(){var e,t,n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,i={};if(n&&n.length&&n[0]&&n[n[0]])for(var o=n.length;o--;)e=n[o],"string"==typeof n[e]&&(t=e.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),i[t]=n[e]);else for(e in n)"string"==typeof n[e]&&(i[e]=n[e]);return i}function r(t){var n,i;for(n in t)i=t[n],(null==i||e.isFunction(i)||n in u||/scrollbar/.test(n)||!/color/i.test(n)&&isNaN(parseFloat(i)))&&delete t[n];return t}function s(e,t){var n,i={_:0};for(n in t)e[n]!=t[n]&&(i[n]=t[n]);return i}function a(t,n,i,o){return"object"==typeof t&&(o=n,i=null,n=t,t=n.effect),e.isFunction(n)&&(o=n,i=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(o=i,i=n,n={}),e.isFunction(i)&&(o=i,i=null),n=n||{},i=i||n.duration,i=e.fx.off?0:"number"==typeof i?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default,o=o||n.complete,[t,n,i,o]}function l(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects[t]?!1:!0}e.effects={},e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(t,o){e.fx.step[o]=function(e){e.colorInit||(e.start=i(e.elem,o),e.end=n(e.end),e.colorInit=!0),e.elem.style[o]="rgb("+Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0],10),255),0)+","+Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1],10),255),0)+","+Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2],10),255),0)+")"}});var c={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},d=["add","remove","toggle"],u={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.effects.animateClass=function(t,n,i,a){return e.isFunction(i)&&(a=i,i=null),this.queue(function(){var l,c=e(this),u=c.attr("style")||" ",h=r(o.call(this)),f=c.attr("class")||"";e.each(d,function(e,n){t[n]&&c[n+"Class"](t[n])}),l=r(o.call(this)),c.attr("class",f),c.animate(s(h,l),{queue:!1,duration:n,easing:i,complete:function(){e.each(d,function(e,n){t[n]&&c[n+"Class"](t[n])}),"object"==typeof c.attr("style")?(c.attr("style").cssText="",c.attr("style").cssText=u):c.attr("style",u),a&&a.apply(this,arguments),e.dequeue(this)}})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,i,o){return n?e.effects.animateClass.apply(this,[{add:t},n,i,o]):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,i,o){return n?e.effects.animateClass.apply(this,[{remove:t},n,i,o]):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,i,o,r,s){return"boolean"==typeof i||i===t?o?e.effects.animateClass.apply(this,[i?{add:n}:{remove:n},o,r,s]):this._toggleClass(n,i):e.effects.animateClass.apply(this,[{toggle:n},i,o,r])},switchClass:function(t,n,i,o,r){return e.effects.animateClass.apply(this,[{add:n,remove:t},i,o,r])}}),e.extend(e.effects,{version:"1.8.20",save:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.data("ec.storage."+t[n],e[0].style[t[n]])},restore:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.css(t[n],e.data("ec.storage."+t[n]))},setMode:function(e,t){return"toggle"==t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,i;switch(e[0]){
                                           case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=e[1]/t.width}return{x:i,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o=document.activeElement;return t.wrap(i),(t[0]===o||e.contains(t[0],o))&&e(o).focus(),i=t.parent(),"static"==t.css("position")?(i.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,i){n[i]=t.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(n).show()},removeWrapper:function(t){var n,i=document.activeElement;return t.parent().is(".ui-effects-wrapper")?(n=t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus(),n):t},setTransition:function(t,n,i,o){return o=o||{},e.each(n,function(e,n){var r=t.cssUnit(n);r[0]>0&&(o[n]=r[0]*i+r[1])}),o}}),e.fn.extend({effect:function(t){var n=a.apply(this,arguments),i={options:n[1],duration:n[2],callback:n[3]},o=i.options.mode,r=e.effects[t];return e.fx.off||!r?o?this[o](i.duration,i.callback):this.each(function(){i.callback&&i.callback.call(this)}):r.call(this,i)},_show:e.fn.show,show:function(e){if(l(e))return this._show.apply(this,arguments);var t=a.apply(this,arguments);return t[1].mode="show",this.effect.apply(this,t)},_hide:e.fn.hide,hide:function(e){if(l(e))return this._hide.apply(this,arguments);var t=a.apply(this,arguments);return t[1].mode="hide",this.effect.apply(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(l(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=a.apply(this,arguments);return n[1].mode="toggle",this.effect.apply(this,n)},cssUnit:function(t){var n=this.css(t),i=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(i=[parseFloat(n),t])}),i}}),e.easing.jswing=e.easing.swing,e.extend(e.easing,{def:"easeOutQuad",swing:function(t,n,i,o,r){
                                           return e.easing[e.easing.def](t,n,i,o,r)},easeInQuad:function(e,t,n,i,o){return i*(t/=o)*t+n},easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n},easeInOutQuad:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,o){return i*(t/=o)*t*t+n},easeOutCubic:function(e,t,n,i,o){return i*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,o){return i*(t/=o)*t*t*t+n},easeOutQuart:function(e,t,n,i,o){return-i*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,o){return i*(t/=o)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,o){return i*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,o){return-i*Math.cos(t/o*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,o){return i*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,o){return-i/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(e,t,n,i,o){return 0==t?n:i*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(e,t,n,i,o){return t==o?n+i:i*(-Math.pow(2,-10*t/o)+1)+n},easeInOutExpo:function(e,t,n,i,o){return 0==t?n:t==o?n+i:(t/=o/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,i,o){return-i*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(e,t,n,i,o){return i*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(e,t,n,i,o){return(t/=o/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(1==(t/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin(2*(t*o-r)*Math.PI/s))+n},easeOutElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(1==(t/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*t)*Math.sin(2*(t*o-r)*Math.PI/s)+i+n},easeInOutElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(2==(t/=o/2))return n+i;if(s||(s=.3*o*1.5),a<Math.abs(i)){a=i;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(i/a);return 1>t?-.5*a*Math.pow(2,10*(t-=1))*Math.sin(2*(t*o-r)*Math.PI/s)+n:a*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*o-r)*Math.PI/s)*.5+i+n},easeInBack:function(e,n,i,o,r,s){return s==t&&(s=1.70158),o*(n/=r)*n*((s+1)*n-s)+i},easeOutBack:function(e,n,i,o,r,s){return s==t&&(s=1.70158),o*((n=n/r-1)*n*((s+1)*n+s)+1)+i},easeInOutBack:function(e,n,i,o,r,s){return s==t&&(s=1.70158),(n/=r/2)<1?o/2*n*n*(((s*=1.525)+1)*n-s)+i:o/2*((n-=2)*n*(((s*=1.525)+1)*n+s)+2)+i},easeInBounce:function(t,n,i,o,r){return o-e.easing.easeOutBounce(t,r-n,0,o,r)+i},easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?7.5625*i*t*t+n:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,i,o,r){return r/2>n?.5*e.easing.easeInBounce(t,2*n,0,o,r)+i:.5*e.easing.easeOutBounce(t,2*n-r,0,o,r)+.5*o+i}})}(jQuery),function(){globalstylesheet=new function(){function e(){return t.cssRules?t.cssRules:t.rules}if(!document.styleSheets)return alert("document.Stylesheets not found"),!1;var t=null,n=Array(),i=document.createElement("style");i.type="text/css",i.rel="stylesheet",i.media="screen",i.title="globalStyleSheet",document.getElementsByTagName("head")[0].appendChild(i);for(var o=0;o<document.styleSheets.length;o++)"globalStyleSheet"==document.styleSheets[o].title&&(t=document.styleSheets[o]);this.setRule=function(e,i){return void 0!=n[e]?n[e]:(t.insertRule(e+"{"+i+"}",0),n[e]=this.getRule(e),n[e])},this.getRule=function(t){if(void 0!=n[t])return n[t];for(var i=e(),o=0;o<i.length;o++)if(i[o].selectorText==t)return i[o];return!1},this.print=function(){for(var t="",n=e(),i=0;i<n.length;i++)t+=n[i].cssText+"\n";return t},this.css=function(e,t,n){rule=this.setRule(e.selector,t+":"+n+";"),jQuery(rule).css(t,n)}},jQuery.fn.extend({globalcss:function(e,t){return globalstylesheet.css(this,e,t),this}})}(jQuery),$.fn.notify=function(e,t){return this.each(function(){$(this).qtip({overwrite:!0,content:{text:'<div class="main-message">'+e+'</div><div class="dismiss-message">(Click on this box to dismiss)</div>'},position:{viewport:$(window),adjust:{screen:!0,mouse:!1},adjust:{x:30},my:"center center",at:"center center"},style:{classes:"notification-message",tip:!1},show:{effect:function(){var e=$(this);e.show()},event:"click"},hide:!1,events:{render:function(e,n){n.elements.tooltip.click(function(){t&&t(),n.destroy()})}}}),$(this).qtip("show")})},$(function(){$(".flashMessage").live("click",function(){$(this).attr("data-flashMessage")&&""!=$(this).attr("data-flashMessage")&&("#"!=$(this).attr("data-flashMessage").charAt(0)?flashMessage($(this).attr("data-flashMessage")):flashMessage($($(this).attr("data-flashMessage")).html()))})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)}(function(e){"use strict";function t(){if(t.history=t.history||[],t.history.push(arguments),"object"==typeof console){var e,n=console[console.warn?"warn":"log"],i=Array.prototype.slice.call(arguments);"string"==typeof arguments[0]&&(i[0]="qTip2: "+i[0]),e=n.apply?n.apply(console,i):n(i)}}function n(t){var n;return t&&"object"==typeof t?((t.metadata===y||"object"!=typeof t.metadata)&&(t.metadata={type:t.metadata}),"content"in t&&((t.content===y||"object"!=typeof t.content||t.content.jquery)&&(t.content={text:t.content}),n=t.content.text||g,!e.isFunction(n)&&(!n&&!n.attr||n.length<1||"object"==typeof n&&!n.jquery)&&(t.content.text=g),"title"in t.content&&((t.content.title===y||"object"!=typeof t.content.title)&&(t.content.title={text:t.content.title}),n=t.content.title.text||g,!e.isFunction(n)&&(!n&&!n.attr||n.length<1||"object"==typeof n&&!n.jquery)&&(t.content.title.text=g))),"position"in t&&(t.position===y||"object"!=typeof t.position)&&(t.position={my:t.position,at:t.position}),"show"in t&&(t.show===y||"object"!=typeof t.show)&&(t.show=t.show.jquery?{target:t.show}:{event:t.show}),"hide"in t&&(t.hide===y||"object"!=typeof t.hide)&&(t.hide=t.hide.jquery?{target:t.hide}:{event:t.hide}),"style"in t&&(t.style===y||"object"!=typeof t.style)&&(t.style={classes:t.style}),e.each(h,function(){this.sanitize&&this.sanitize(t)}),t):g}function i(t,i,o,r){function s(e){for(var t,n=0,o=i,r=e.split(".");o=o[r[n++]];)n<r.length&&(t=o);return[t||i,r.pop()]}function a(){var e=i.style.widget;G.toggleClass($,e).toggleClass(O,i.style.def&&!e),z.content.toggleClass($+"-content",e),z.titlebar&&z.titlebar.toggleClass($+"-header",e),z.button&&z.button.toggleClass(D+"-icon",!e)}function l(e){z.title&&(z.titlebar.remove(),z.titlebar=z.title=z.button=y,e!==g&&q.reposition())}function c(){var t=i.content.title.button,n="string"==typeof t,o=n?t:"Close tooltip";z.button&&z.button.remove(),z.button=t.jquery?t:e("<a />",{"class":"ui-state-default ui-tooltip-close "+(i.style.widget?"":D+"-icon"),title:o,"aria-label":o}).prepend(e("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),z.button.appendTo(z.titlebar).attr("role","button").click(function(e){return G.hasClass(P)||q.hide(e),g}),q.redraw()}function v(){var t=W+"-title";z.titlebar&&l(),z.titlebar=e("<div />",{"class":D+"-titlebar "+(i.style.widget?"ui-widget-header":"")}).append(z.title=e("<div />",{id:t,"class":D+"-title","aria-atomic":m})).insertBefore(z.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(t){e(this).toggleClass("ui-state-active ui-state-focus","down"===t.type.substr(-4))}).delegate(".ui-tooltip-close","mouseover mouseout",function(t){e(this).toggleClass("ui-state-hover","mouseover"===t.type)}),i.content.title.button?c():q.rendered&&q.redraw()}function b(e){var t=z.button,n=z.title;
                                               return q.rendered?(e?(n||v(),c()):t.remove(),void 0):g}function E(n,i){var o=z.title;return q.rendered&&n?(e.isFunction(n)&&(n=n.call(t,F.event,q)),n===g||!n&&""!==n?l(g):(n.jquery&&n.length>0?o.empty().append(n.css({display:"block"})):o.html(n),q.redraw(),i!==g&&q.rendered&&G[0].offsetWidth>0&&q.reposition(F.event),void 0)):g}function I(n,i){function o(t){function n(n){n&&(delete s[n.src],clearTimeout(q.timers.img[n.src]),e(n).unbind(X)),e.isEmptyObject(s)&&(q.redraw(),i!==g&&q.reposition(F.event),t())}var o,s={};
                                             return 0===(o=r.find("img[src]:not([height]):not([width])")).length?n():(o.each(function(t,i){if(s[i.src]===d){var o=0,r=3;!function a(){return i.height||i.width||o>r?n(i):(o+=1,q.timers.img[i.src]=setTimeout(a,700),void 0)}(),e(i).bind("error"+X+" load"+X,function(){n(this)}),s[i.src]=i}}),void 0)}var r=z.content;return q.rendered&&n?(e.isFunction(n)&&(n=n.call(t,F.event,q)||""),n.jquery&&n.length>0?r.empty().append(n.css({display:"block"})):r.html(n),q.rendered<0?G.queue("fx",o):(U=0,o(e.noop)),q):g}function j(){function n(e){if(G.hasClass(P))return g;clearTimeout(q.timers.show),clearTimeout(q.timers.hide);var t=function(){q.toggle(m,e)};i.show.delay>0?q.timers.show=setTimeout(t,i.show.delay):t()}function r(t){if(G.hasClass(P)||V||U)return g;var n=e(t.relatedTarget||t.target),o=n.closest(A)[0]===G[0],r=n[0]===c.show[0];if(clearTimeout(q.timers.show),clearTimeout(q.timers.hide),"mouse"===l.target&&o||i.hide.fixed&&/mouse(out|leave|move)/.test(t.type)&&(o||r))try{t.preventDefault(),t.stopImmediatePropagation()}catch(s){}else i.hide.delay>0?q.timers.hide=setTimeout(function(){q.hide(t)},i.hide.delay):q.hide(t)}function s(e){return G.hasClass(P)?g:(clearTimeout(q.timers.inactive),q.timers.inactive=setTimeout(function(){q.hide(e)},i.hide.inactive),void 0)}function a(e){q.rendered&&G[0].offsetWidth>0&&q.reposition(e)}var l=i.position,c={show:i.show.target,hide:i.hide.target,viewport:e(l.viewport),document:e(document),body:e(document.body),window:e(window)},d={show:e.trim(""+i.show.event).split(" "),hide:e.trim(""+i.hide.event).split(" ")},h=e.browser.msie&&6===parseInt(e.browser.version,10);G.bind("mouseenter"+X+" mouseleave"+X,function(e){var t="mouseenter"===e.type;t&&q.focus(e),G.toggleClass(L,t)}),/mouse(out|leave)/i.test(i.hide.event)&&"window"===i.hide.leave&&c.window.bind("mouseleave"+X+" blur"+X,function(e){/select|option/.test(e.target.nodeName)||e.relatedTarget||q.hide(e)}),i.hide.fixed?(c.hide=c.hide.add(G),G.bind("mouseover"+X,function(){G.hasClass(P)||clearTimeout(q.timers.hide)})):/mouse(over|enter)/i.test(i.show.event)&&c.hide.bind("mouseleave"+X,function(){clearTimeout(q.timers.show)}),(""+i.hide.event).indexOf("unfocus")>-1&&l.container.closest("html").bind("mousedown"+X,function(n){var i=e(n.target),o=(q.rendered&&!G.hasClass(P)&&G[0].offsetWidth>0,i.parents(A).filter(G[0]).length>0);i[0]===t[0]||i[0]===G[0]||o||t.has(i[0]).length||i.attr("disabled")||q.hide(n)}),"number"==typeof i.hide.inactive&&(c.show.bind("qtip-"+o+"-inactive",s),e.each(u.inactiveEvents,function(e,t){c.hide.add(z.tooltip).bind(t+X+"-inactive",s)})),e.each(d.hide,function(t,i){var o=e.inArray(i,d.show),s=e(c.hide);o>-1&&s.add(c.show).length===s.length||"unfocus"===i?(c.show.bind(i+X,function(e){G[0].offsetWidth>0?r(e):n(e)}),delete d.show[o]):c.hide.bind(i+X,r)}),e.each(d.show,function(e,t){c.show.bind(t+X,n)}),"number"==typeof i.hide.distance&&c.show.add(G).bind("mousemove"+X,function(e){var t=F.origin||{},n=i.hide.distance,o=Math.abs;(o(e.pageX-t.pageX)>=n||o(e.pageY-t.pageY)>=n)&&q.hide(e)}),"mouse"===l.target&&(c.show.bind("mousemove"+X,function(e){f={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),l.adjust.mouse&&(i.hide.event&&(G.bind("mouseleave"+X,function(e){(e.relatedTarget||e.target)!==c.show[0]&&q.hide(e)}),z.target.bind("mouseenter"+X+" mouseleave"+X,function(e){F.onTarget="mouseenter"===e.type})),c.document.bind("mousemove"+X,function(e){q.rendered&&F.onTarget&&!G.hasClass(P)&&G[0].offsetWidth>0&&q.reposition(e||f)}))),(l.adjust.resize||c.viewport.length)&&(e.event.special.resize?c.viewport:c.window).bind("resize"+X,a),(c.viewport.length||h&&"fixed"===G.css("position"))&&c.viewport.bind("scroll"+X,a)}function H(){var t=[i.show.target[0],i.hide.target[0],q.rendered&&z.tooltip[0],i.position.container[0],i.position.viewport[0],window,document];q.rendered?e([]).pushStack(e.grep(t,function(e){return"object"==typeof e})).unbind(X):i.show.target.unbind(X+"-create")}var z,F,q=this,W=(document.body,D+"-"+o),V=0,U=0,G=e(),X=".qtip-"+o;q.id=o,q.rendered=g,q.destroyed=g,q.elements=z={target:t},q.timers={img:{}},q.options=i,q.checks={},q.plugins={},q.cache=F={event:{},target:e(),disabled:g,attr:r,onTarget:g,lastClass:""},q.checks.builtin={"^id$":function(t,n,i){var o=i===m?u.nextid:i,r=D+"-"+o;o!==g&&o.length>0&&!e("#"+r).length&&(G[0].id=r,z.content[0].id=r+"-content",z.title[0].id=r+"-title")},"^content.text$":function(e,t,n){I(n)},"^content.title.text$":function(e,t,n){return n?(!z.title&&n&&v(),E(n),void 0):l()},"^content.title.button$":function(e,t,n){b(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new h.Corner(n))},"^position.container$":function(e,t,n){q.rendered&&G.appendTo(n)},"^show.ready$":function(){q.rendered?q.toggle(m):q.render(1)},"^style.classes$":function(e,t,n){G.attr("class",D+" qtip ui-helper-reset "+n)},"^style.widget|content.title":a,"^events.(render|show|move|hide|focus|blur)$":function(t,n,i){G[(e.isFunction(i)?"":"un")+"bind"]("tooltip"+n,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=i.position;G.attr("tracking","mouse"===e.target&&e.adjust.mouse),H(),j()}},e.extend(q,{render:function(n){if(q.rendered)return q;var o=i.content.text,r=i.content.title.text,s=i.position,l=e.Event("tooltiprender");return e.attr(t[0],"aria-describedby",W),G=z.tooltip=e("<div/>",{id:W,"class":D+" qtip ui-helper-reset "+O+" "+i.style.classes+" "+D+"-pos-"+i.position.my.abbrev(),width:i.style.width||"",height:i.style.height||"",tracking:"mouse"===s.target&&s.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":g,"aria-describedby":W+"-content","aria-hidden":m}).toggleClass(P,F.disabled).data("qtip",q).appendTo(i.position.container).append(z.content=e("<div />",{"class":D+"-content",id:W+"-content","aria-atomic":m})),q.rendered=-1,U=1,V=1,r&&(v(),e.isFunction(r)||E(r,g)),e.isFunction(o)||I(o,g),q.rendered=m,a(),e.each(i.events,function(t,n){e.isFunction(n)&&G.bind("toggle"===t?"tooltipshow tooltiphide":"tooltip"+t,n)}),e.each(h,function(){"render"===this.initialize&&this(q)}),j(),G.queue("fx",function(e){l.originalEvent=F.event,G.trigger(l,[q]),U=0,V=0,q.redraw(),(i.show.ready||n)&&q.toggle(m,F.event,g),e()}),q},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:G.outerHeight(),width:G.outerWidth()};break;case"offset":t=h.offset(G,i.position.container);break;default:n=s(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(t,o){function r(e,t){var n,i,o;for(n in h)for(i in h[n])(o=new RegExp(i,"i").exec(e))&&(t.push(o),h[n][i].apply(q,t))}var a,l=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,c=/^content\.(title|attr)|style/i,d=g,u=g,h=q.checks;return"string"==typeof t?(a=t,t={},t[a]=o):t=e.extend(m,{},t),e.each(t,function(n,i){var o,r=s(n.toLowerCase());o=r[0][r[1]],r[0][r[1]]="object"==typeof i&&i.nodeType?e(i):i,t[n]=[r[0],r[1],i,o],d=l.test(n)||d,u=c.test(n)||u}),n(i),V=U=1,e.each(t,r),V=U=0,q.rendered&&G[0].offsetWidth>0&&(d&&q.reposition("mouse"===i.position.target?y:F.event),u&&q.redraw()),q},toggle:function(t,n){function r(){t?(e.browser.msie&&G[0].style.removeAttribute("filter"),G.css("overflow",""),"string"==typeof l.autofocus&&e(l.autofocus,G).focus(),l.target.trigger("qtip-"+o+"-inactive")):G.css({display:"",visibility:"",opacity:"",left:"",top:""}),s=e.Event("tooltip"+(t?"visible":"hidden")),s.originalEvent=n?F.event:y,G.trigger(s,[q])}if(!q.rendered)return t?q.render(1):q;var s,a=t?"show":"hide",l=i[a],c=(i[t?"hide":"show"],i.position),d=i.content,u=G[0].offsetWidth>0,h=t||1===l.target.length,v=!n||l.target.length<2||F.target[0]===n.target;if((typeof t).search("boolean|number")&&(t=!u),!G.is(":animated")&&u===t&&v)return q;if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(F.event.type)&&i.show.target.add(n.target).length===i.show.target.length&&G.has(n.relatedTarget).length)return q;F.event=e.extend({},n)}return s=e.Event("tooltip"+a),s.originalEvent=n?F.event:y,G.trigger(s,[q,90]),s.isDefaultPrevented()?q:(e.attr(G[0],"aria-hidden",!t),t?(F.origin=e.extend({},f),q.focus(n),e.isFunction(d.text)&&I(d.text,g),e.isFunction(d.title.text)&&E(d.title.text,g),!p&&"mouse"===c.target&&c.adjust.mouse&&(e(document).bind("mousemove.qtip",function(e){f={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),p=m),q.reposition(n,arguments[2]),(s.solo=!!l.solo)&&e(A,l.solo).not(G).qtip("hide",s)):(clearTimeout(q.timers.show),delete F.origin,p&&!e(A+'[tracking="true"]:visible',l.solo).not(G).length&&(e(document).unbind("mousemove.qtip"),p=g),q.blur(n)),l.effect===g||h===g?(G[a](),r.call(G)):e.isFunction(l.effect)?(G.stop(1,1),l.effect.call(G,q),G.queue("fx",function(e){r(),e()})):G.fadeTo(90,t?1:0,r),t&&l.target.trigger("qtip-"+o+"-inactive"),q)},show:function(e){return q.toggle(m,e)},hide:function(e){return q.toggle(g,e)},focus:function(t){if(!q.rendered)return q;var n,i=e(A),o=parseInt(G[0].style.zIndex,10),r=u.zindex+i.length,s=e.extend({},t);
                                               return G.hasClass(M)||(n=e.Event("tooltipfocus"),n.originalEvent=s,G.trigger(n,[q,r]),n.isDefaultPrevented()||(o!==r&&(i.each(function(){this.style.zIndex>o&&(this.style.zIndex=this.style.zIndex-1)}),i.filter("."+M).qtip("blur",s)),G.addClass(M)[0].style.zIndex=r)),q},blur:function(t){var n,i=e.extend({},t);return G.removeClass(M),n=e.Event("tooltipblur"),n.originalEvent=i,G.trigger(n,[q]),q},reposition:function(t,n){if(!q.rendered||V)return q;V=1;var o,r,s,a=i.position.target,l=i.position,c=l.my,d=l.at,u=l.adjust,p=u.method.split(" "),m=G.outerWidth(),y=G.outerHeight(),v=0,b=0,w=e.Event("tooltipmove"),C="fixed"===G.css("position"),E=l.viewport,I={left:0,top:0},N=l.container,D=G[0].offsetWidth>0;if(e.isArray(a)&&2===a.length)d={x:_,y:x},I={left:a[0],top:a[1]};else if("mouse"===a&&(t&&t.pageX||F.event.pageX))d={x:_,y:x},t=(!t||"resize"!==t.type&&"scroll"!==t.type?t&&t.pageX&&"mousemove"===t.type?t:!f||!f.pageX||!u.mouse&&t&&t.pageX?!u.mouse&&F.origin&&F.origin.pageX&&i.show.distance?F.origin:t:{pageX:f.pageX,pageY:f.pageY}:F.event)||t||F.event||f||{},I={top:t.pageY,left:t.pageX};else{if("event"===a&&t&&t.target&&"scroll"!==t.type&&"resize"!==t.type?F.target=e(t.target):"event"!==a&&(F.target=e(a.jquery?a:z.target)),a=F.target,a=e(a).eq(0),0===a.length)return q;
                                               a[0]===document||a[0]===window?(v=h.iOS?window.innerWidth:a.width(),b=h.iOS?window.innerHeight:a.height(),a[0]===window&&(I={top:(E||a).scrollTop(),left:(E||a).scrollLeft()})):h.imagemap&&a.is("area")?o=h.imagemap(q,a,d,h.viewport?p:g):h.svg&&"string"==typeof a[0].xmlbase?o=h.svg(q,a,d,h.viewport?p:g):(v=a.outerWidth(),b=a.outerHeight(),I=h.offset(a,N)),o&&(v=o.width,b=o.height,r=o.offset,I=o.position),(h.iOS>3.1&&h.iOS<4.1||h.iOS>=4.3&&h.iOS<4.33||!h.iOS&&C)&&(s=e(window),I.left-=s.scrollLeft(),I.top-=s.scrollTop()),I.left+=d.x===T?v:d.x===S?v/2:0,I.top+=d.y===k?b:d.y===S?b/2:0}return I.left+=u.x+(c.x===T?-m:c.x===S?-m/2:0),I.top+=u.y+(c.y===k?-y:c.y===S?-y/2:0),h.viewport?(I.adjusted=h.viewport(q,I,l,v,b,m,y),r&&I.adjusted.left&&(I.left+=r.left),r&&I.adjusted.top&&(I.top+=r.top)):I.adjusted={left:0,top:0},w.originalEvent=e.extend({},t),G.trigger(w,[q,I,E.elem||E]),w.isDefaultPrevented()?q:(delete I.adjusted,n===g||!D||isNaN(I.left)||isNaN(I.top)||"mouse"===a||!e.isFunction(l.effect)?G.css(I):e.isFunction(l.effect)&&(l.effect.call(G,q,e.extend({},I)),G.queue(function(t){e(this).css({opacity:"",height:""}),e.browser.msie&&this.style.removeAttribute("filter"),t()})),V=0,q)},redraw:function(){if(q.rendered<1||U)return q;var e,t,n,o,r=i.position.container;return U=1,i.style.height&&G.css(C,i.style.height),i.style.width?G.css(w,i.style.width):(G.css(w,"").addClass(R),t=G.width()+1,n=G.css("max-width")||"",o=G.css("min-width")||"",e=(n+o).indexOf("%")>-1?r.width()/100:0,n=(n.indexOf("%")>-1?e:1)*parseInt(n,10)||t,o=(o.indexOf("%")>-1?e:1)*parseInt(o,10)||0,t=n+o?Math.min(Math.max(t,o),n):t,G.css(w,Math.round(t)).removeClass(R)),U=0,q},disable:function(t){return"boolean"!=typeof t&&(t=!(G.hasClass(P)||F.disabled)),q.rendered?(G.toggleClass(P,t),e.attr(G[0],"aria-disabled",t)):F.disabled=!!t,q},enable:function(){return q.disable(g)},destroy:function(){var n=t[0],r=e.attr(n,B),s=t.data("qtip");return q.destroyed=m,q.rendered&&(G.stop(1,0).remove(),e.each(q.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(q.timers.show),clearTimeout(q.timers.hide),H(),s&&q!==s||(e.removeData(n,"qtip"),i.suppress&&r&&(e.attr(n,"title",r),t.removeAttr(B)),t.removeAttr("aria-describedby")),t.unbind(".qtip-"+o),delete N[q.id],t}})}function o(o,r){var s,a,l,c,d,f=e(this),p=e(document.body),v=this===document?p:f,b=f.metadata?f.metadata(r.metadata):y,w="html5"===r.metadata.type&&b?b[r.metadata.name]:y,C=f.data(r.metadata.name||"qtipopts");try{C="string"==typeof C?new Function("return "+C)():C}catch(x){t("Unable to parse HTML5 attribute data: "+C)}if(c=e.extend(m,{},u.defaults,r,"object"==typeof C?n(C):y,n(w||b)),a=c.position,c.id=o,"boolean"==typeof c.content.text){if(l=f.attr(c.content.attr),c.content.attr===g||!l)return t("Unable to locate content for tooltip! Aborting render of tooltip on element: ",f),g;c.content.text=l}if(a.container.length||(a.container=p),a.target===g&&(a.target=v),c.show.target===g&&(c.show.target=v),c.show.solo===m&&(c.show.solo=a.container.closest("body")),c.hide.target===g&&(c.hide.target=v),c.position.viewport===m&&(c.position.viewport=a.container),a.container=a.container.eq(0),a.at=new h.Corner(a.at),a.my=new h.Corner(a.my),e.data(this,"qtip"))if(c.overwrite)f.qtip("destroy");
                                             else if(c.overwrite===g)return g;return c.suppress&&(d=e.attr(this,"title"))&&e(this).removeAttr("title").attr(B,d).attr("title",""),s=new i(f,c,o,!!l),e.data(this,"qtip",s),f.bind("remove.qtip-"+o+" removeqtip.qtip-"+o,function(){s.destroy()}),s}function r(t){var n,i=this,o=t.elements.tooltip,r=t.options.content.ajax,s=u.defaults.content.ajax,a=".qtip-ajax",l=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,c=m,d=g;t.checks.ajax={"^content.ajax":function(e,t,n){"ajax"===t&&(r=n),"once"===t?i.init():r&&r.url?i.load():o.unbind(a)}},e.extend(i,{init:function(){return r&&r.url&&o.unbind(a)[r.once?"one":"bind"]("tooltipshow"+a,i.load),i},load:function(o){function a(){var n;t.destroyed||(c=g,v&&(d=m,t.show(o.originalEvent)),(n=s.complete||r.complete)&&e.isFunction(n)&&n.apply(r.context||t,arguments))}function u(n,i,o){var a;t.destroyed||(f&&(n=e("<div/>").append(n.replace(l,"")).find(f)),(a=s.success||r.success)&&e.isFunction(a)?a.call(r.context||t,n,i,o):t.set("content.text",n))}function h(e,n,i){t.destroyed||0===e.status||t.set("content.text",n+": "+i)}if(d)return d=g,void 0;var f,p=r.url.indexOf(" "),y=r.url,v=!r.loading&&c;if(v)try{o.preventDefault()}catch(b){}else if(o&&o.isDefaultPrevented())return i;n&&n.abort&&n.abort(),p>-1&&(f=y.substr(p),y=y.substr(0,p)),n=e.ajax(e.extend({error:s.error||h,context:t},r,{url:y,success:u,complete:a}))},destroy:function(){n&&n.abort&&n.abort(),t.destroyed=m}}),i.init()}function s(t){var n=this,i=t.elements,o=i.tooltip,r=".bgiframe-"+t.id;e.extend(n,{init:function(){i.bgiframe=e('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),i.bgiframe.appendTo(o),o.bind("tooltipmove"+r,n.adjust)},adjust:function(){var e,n,r=t.get("dimensions"),s=t.plugins.tip,a=i.tip;n=parseInt(o.css("border-left-width"),10)||0,n={left:-n,top:-n},s&&a&&(e="x"===s.corner.precedance?["width","left"]:["height","top"],n[e[1]]-=a[e[0]]()),i.bgiframe.css(n).css(r)},destroy:function(){i.bgiframe.remove(),o.unbind(r)}}),n.init()}function a(t){function n(){b=e(v,c).not("[disabled]").map(function(){return"function"==typeof this.focus?this:null})}function i(e){b.length<1&&e.length?e.not("body").blur():b.first().focus()}function o(t){var n,o=e(t.target),r=o.closest(".qtip");n=r.length<1?g:parseInt(r[0].style.zIndex,10)>parseInt(c[0].style.zIndex,10),n||e(t.target).closest(A)[0]===c[0]||i(o)}var r,s=this,a=t.options.show.modal,l=t.elements,c=l.tooltip,d="#qtip-overlay",u=".qtipmodal",f=u+t.id,p="is-modal-qtip",y=e(document.body),v=h.modal.focusable.join(","),b={};t.checks.modal={"^show.modal.(on|blur)$":function(){s.init(),l.overlay.toggle(c.is(":visible"))},"^content.text$":n},e.extend(s,{init:function(){return a.on?(r=s.create(),c.attr(p,m).css("z-index",h.modal.zindex+e(A+"["+p+"]").length).unbind(u).unbind(f).bind("tooltipshow"+u+" tooltiphide"+u,function(t,n,i){var o=t.originalEvent;if(t.target===c[0])if(o&&"tooltiphide"===t.type&&/mouse(leave|enter)/.test(o.type)&&e(o.relatedTarget).closest(r[0]).length)try{t.preventDefault()}catch(a){}else(!o||o&&!o.solo)&&s[t.type.replace("tooltip","")](t,i)}).bind("tooltipfocus"+u,function(t){if(!t.isDefaultPrevented()&&t.target===c[0]){var n=e(A).filter("["+p+"]"),i=h.modal.zindex+n.length,o=parseInt(c[0].style.zIndex,10);r[0].style.zIndex=i-2,n.each(function(){this.style.zIndex>o&&(this.style.zIndex-=1)}),n.end().filter("."+M).qtip("blur",t.originalEvent),c.addClass(M)[0].style.zIndex=i;try{t.preventDefault()}catch(s){}}}).bind("tooltiphide"+u,function(t){t.target===c[0]&&e("["+p+"]").filter(":visible").not(c).last().qtip("focus",t)}),a.escape&&e(document).unbind(f).bind("keydown"+f,function(e){27===e.keyCode&&c.hasClass(M)&&t.hide(e)}),a.blur&&l.overlay.unbind(f).bind("click"+f,function(e){c.hasClass(M)&&t.hide(e)}),n(),s):s},create:function(){function t(){r.css({height:e(window).height(),width:e(window).width()})}var n=e(d);return n.length?l.overlay=n.insertAfter(e(A).last()):(r=l.overlay=e("<div />",{id:d.substr(1),html:"<div></div>",mousedown:function(){return g}}).hide().insertAfter(e(A).last()),e(window).unbind(u).bind("resize"+u,t),t(),r)},toggle:function(t,n,l){if(t&&t.isDefaultPrevented())return s;var d=a.effect,u=n?"show":"hide",h=r.is(":visible"),v=e("["+p+"]").filter(":visible").not(c);return r||(r=s.create()),r.is(":animated")&&h===n||!n&&v.length?s:(n?(r.css({left:0,top:0}),r.toggleClass("blurs",a.blur),a.stealfocus!==g&&(y.bind("focusin"+f,o),i(e("body *")))):y.unbind("focusin"+f),r.stop(m,g),e.isFunction(d)?d.call(r,n):d===g?r[u]():r.fadeTo(parseInt(l,10)||90,n?1:0,function(){n||e(this).hide()}),n||r.queue(function(e){r.css({left:"",top:""}),e()}),s)},show:function(e,t){return s.toggle(e,m,t)},hide:function(e,t){return s.toggle(e,g,t)},destroy:function(){var n=r;return n&&(n=e("["+p+"]").not(c).length<1,n?(l.overlay.remove(),e(document).unbind(u)):l.overlay.unbind(u+t.id),y.undelegate("*","focusin"+f)),c.removeAttr(p).unbind(u)}}),s.init()}function l(e,t,n){var i=Math.ceil(t/2),o=Math.ceil(n/2),r={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[i,0],[t,n]],bottomcenter:[[0,0],[t,0],[i,n]],rightcenter:[[0,0],[t,o],[0,n]],leftcenter:[[t,0],[t,n],[0,o]]};return r.lefttop=r.bottomright,r.righttop=r.bottomleft,r.leftbottom=r.topright,r.rightbottom=r.topleft,r[e.string()]}function c(t){function n(){N.width=u.height,N.height=u.width}function i(){N.width=u.width,N.height=u.height}function o(e,n,i){if(f.tip){var o,s,a=c.corner.clone(),l=i.adjusted,h=t.options.position.adjust.method.split(" "),p=h[0],y=h[1]||h[0],w={left:g,top:g,x:0,y:0},C={};c.corner.fixed!==m&&(p===I&&a.precedance===v&&l.left&&a.y!==S?a.precedance=a.precedance===v?b:v:p!==I&&l.left&&(a.x=a.x===S?l.left>0?_:T:a.x===_?T:_),y===I&&a.precedance===b&&l.top&&a.x!==S?a.precedance=a.precedance===b?v:b:y!==I&&l.top&&(a.y=a.y===S?l.top>0?x:k:a.y===x?k:x),a.string()===E.corner.string()||E.top===l.top&&E.left===l.left||c.update(a,g)),o=c.position(a,l),o[a.x]+=r(a,a.x,m),o[a.y]+=r(a,a.y,m),o.right!==d&&(o.left=-o.right),o.bottom!==d&&(o.top=-o.bottom),o.user=Math.max(0,u.offset),(w.left=p===I&&!!l.left)&&(a.x===S?C["margin-left"]=w.x=o["margin-left"]-l.left:(s=o.right!==d?[l.left,-o.left]:[-l.left,o.left],(w.x=Math.max(s[0],s[1]))>s[0]&&(i.left-=l.left,w.left=g),C[o.right!==d?T:_]=w.x)),(w.top=y===I&&!!l.top)&&(a.y===S?C["margin-top"]=w.y=o["margin-top"]-l.top:(s=o.bottom!==d?[l.top,-o.top]:[-l.top,o.top],(w.y=Math.max(s[0],s[1]))>s[0]&&(i.top-=l.top,w.top=g),C[o.bottom!==d?k:x]=w.y)),f.tip.css(C).toggle(!(w.x&&w.y||a.x===S&&w.y||a.y===S&&w.x)),i.left-=o.left.charAt?o.user:p!==I||w.top||!w.left&&!w.top?o.left:0,i.top-=o.top.charAt?o.user:y!==I||w.left||!w.left&&!w.top?o.top:0,E.left=l.left,E.top=l.top,E.corner=a.clone()}}function r(e,t,n){t=t?t:e[e.precedance];
                                                 var i,o=p.hasClass(R),r=f.titlebar&&e.y===x,s=r?f.titlebar:f.tooltip,a="border-"+t+"-width";return p.addClass(R),i=parseInt(s.css(a),10),i=(n?i||parseInt(p.css(a),10):i)||0,p.toggleClass(R,o),i}function s(t){var n=f.titlebar&&t.y===x,i=n?f.titlebar:f.content,o=e.browser.mozilla,r=o?"-moz-":e.browser.webkit?"-webkit-":"",s=t.y+(o?"":"-")+t.x,a=r+(o?"border-radius-"+s:"border-"+s+"-radius");return parseInt(i.css(a),10)||parseInt(p.css(a),10)||0}function a(e){var t,n,i,o=e.precedance===b,r=N[o?w:C],s=N[o?C:w],a=e.string().indexOf(S)>-1,l=r*(a?.5:1),c=Math.pow,d=Math.round,u=Math.sqrt(c(l,2)+c(s,2)),h=[$/l*u,$/s*u];return h[2]=Math.sqrt(c(h[0],2)-c($,2)),h[3]=Math.sqrt(c(h[1],2)-c($,2)),t=u+h[2]+h[3]+(a?0:h[0]),n=t/u,i=[d(n*s),d(n*r)],{height:i[o?0:1],width:i[o?1:0]}}var c=this,u=t.options.style.tip,f=t.elements,p=f.tooltip,E={top:0,left:0},N={width:u.width,height:u.height},D={},$=u.border||0,P=".qtip-tip",A=!!(e("<canvas />")[0]||{}).getContext;c.corner=y,c.mimic=y,c.border=$,c.offset=u.offset,c.size=N,t.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){c.init()||c.destroy(),t.reposition()},"^style.tip.(height|width)$":function(){N={width:u.width,height:u.height},c.create(),c.update(),t.reposition()},"^content.title.text|style.(classes|widget)$":function(){f.tip&&f.tip.length&&c.update()}},e.extend(c,{init:function(){var t=c.detectCorner()&&(A||e.browser.msie);return t&&(c.create(),c.update(),p.unbind(P).bind("tooltipmove"+P,o)),t},detectCorner:function(){var e=u.corner,n=t.options.position,i=n.at,o=n.my.string?n.my.string():n.my;return e===g||o===g&&i===g?g:(e===m?c.corner=new h.Corner(o):e.string||(c.corner=new h.Corner(e),c.corner.fixed=m),E.corner=new h.Corner(c.corner.string()),"centercenter"!==c.corner.string())},detectColours:function(t){var n,i,o=f.tip.css("cssText",""),r=t||c.corner,s=r[r.precedance],a="border-"+s+"-color",l="border"+s.charAt(0)+s.substr(1)+"Color",d=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,h="background-color",m="transparent",g=" !important",y=f.titlebar&&(r.y===x||r.y===S&&o.position().top+N.height/2+u.offset<f.titlebar.outerHeight(1)),v=y?f.titlebar:f.tooltip;p.addClass(R),D.fill=n=o.css(h),D.border=i=o[0].style[l]||o.css(a)||p.css(a),(!n||d.test(n))&&(D.fill=v.css(h)||m,d.test(D.fill)&&(D.fill=p.css(h)||n)),(!i||d.test(i)||i===e(document.body).css("color"))&&(D.border=v.css(a)||m,(d.test(D.border)||D.border===v.css("color"))&&(D.border=p.css(a)||p.css(l)||i)),e("*",o).add(o).css("cssText",h+":"+m+g+";border:0"+g+";"),p.removeClass(R)},create:function(){var t,n=N.width,i=N.height;f.tip&&f.tip.remove(),f.tip=e("<div />",{"class":"ui-tooltip-tip"}).css({width:n,height:i}).prependTo(p),A?e("<canvas />").appendTo(f.tip)[0].getContext("2d").save():(t='<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>',f.tip.html(t+t),e("*",f.tip).bind("click mousedown",function(e){e.stopPropagation()}))},update:function(t,o){
                                                     var s,d,w,C,I,P=f.tip,O=P.children(),M=N.width,L=N.height,R=u.mimic,j=Math.round;t||(t=E.corner||c.corner),R===g?R=t:(R=new h.Corner(R),R.precedance=t.precedance,"inherit"===R.x?R.x=t.x:"inherit"===R.y?R.y=t.y:R.x===R.y&&(R[t.precedance]=t[t.precedance])),s=R.precedance,t.precedance===v?n():i(),f.tip.css({width:M=N.width,height:L=N.height}),c.detectColours(t),"transparent"!==D.border?($=r(t,y,m),0===u.border&&$>0&&(D.fill=D.border),c.border=$=u.border!==m?u.border:$):c.border=$=0,w=l(R,M,L),c.size=I=a(t),P.css(I),C=t.precedance===b?[j(R.x===_?$:R.x===T?I.width-M-$:(I.width-M)/2),j(R.y===x?I.height-L:0)]:[j(R.x===_?I.width-M:0),j(R.y===x?$:R.y===k?I.height-L-$:(I.height-L)/2)],A?(O.attr(I),d=O[0].getContext("2d"),d.restore(),d.save(),d.clearRect(0,0,3e3,3e3),d.fillStyle=D.fill,d.strokeStyle=D.border,d.lineWidth=2*$,d.lineJoin="miter",d.miterLimit=100,d.translate(C[0],C[1]),d.beginPath(),d.moveTo(w[0][0],w[0][1]),d.lineTo(w[1][0],w[1][1]),d.lineTo(w[2][0],w[2][1]),d.closePath(),$&&("border-box"===p.css("background-clip")&&(d.strokeStyle=D.fill,d.stroke()),d.strokeStyle=D.border,d.stroke()),d.fill()):(w="m"+w[0][0]+","+w[0][1]+" l"+w[1][0]+","+w[1][1]+" "+w[2][0]+","+w[2][1]+" xe",C[2]=$&&/^(r|b)/i.test(t.string())?8===parseFloat(e.browser.version,10)?2:1:0,O.css({antialias:""+(R.string().indexOf(S)>-1),left:C[0]-C[2]*Number(s===v),top:C[1]-C[2]*Number(s===b),width:M+$,height:L+$}).each(function(t){var n=e(this);n[n.prop?"prop":"attr"]({coordsize:M+$+" "+(L+$),path:w,fillcolor:D.fill,filled:!!t,stroked:!t}).css({display:$||t?"block":"none"}),t||""!==n.html()||n.html('<vml:stroke weight="'+2*$+'px" color="'+D.border+'" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')})),o!==g&&c.position(t)},position:function(t){var n,i,o,l=f.tip,d={},h=Math.max(0,u.offset);return u.corner!==g&&l?(t=t||c.corner,n=t.precedance,i=a(t),o=[t.x,t.y],n===v&&o.reverse(),e.each(o,function(e,o){var a,l;o===S?(a=n===b?_:x,d[a]="50%",d["margin-"+a]=-Math.round(i[n===b?w:C]/2)+h):(a=r(t,o),l=s(t),d[o]=e?0:h+(l>a?l:-a))}),d[t[n]]-=i[n===v?w:C],l.css({top:"",bottom:"",left:"",right:"",margin:""}).css(d),d):g},destroy:function(){f.tip&&f.tip.remove(),f.tip=!1,p.unbind(P)}}),c.init()}var d,u,h,f,p,m=!0,g=!1,y=null,v="x",b="y",w="width",C="height",x="top",_="left",k="bottom",T="right",S="center",E="flipinvert",I="shift",N={},D="ui-tooltip",$="ui-widget",P="ui-state-disabled",A="div.qtip."+D,O=D+"-default",M=D+"-focus",L=D+"-hover",R=D+"-fluid",j="_replacedByqTip",B="oldtitle";u=e.fn.qtip=function(t,i,o){var r=(""+t).toLowerCase(),s=y,a=e.makeArray(arguments).slice(1),l=a[a.length-1],c=this[0]?e.data(this[0],"qtip"):y;return!arguments.length&&c||"api"===r?c:"string"==typeof t?(this.each(function(){var t=e.data(this,"qtip");if(!t)return m;if(l&&l.timeStamp&&(t.cache.event=l),"option"!==r&&"options"!==r||!i)t[r]&&t[r].apply(t[r],a);else{if(!e.isPlainObject(i)&&o===d)return s=t.get(i),g;t.set(i,o)}}),s!==y?s:this):"object"!=typeof t&&arguments.length?void 0:(c=n(e.extend(m,{},t)),u.bind.call(this,c,l))},u.bind=function(t,n){return this.each(function(i){function r(t){function n(){p.render("object"==typeof t||s.show.ready),a.show.add(a.hide).unbind(c)}return p.cache.disabled?g:(p.cache.event=e.extend({},t),p.cache.target=t?e(t.target):[d],s.show.delay>0?(clearTimeout(p.timers.show),p.timers.show=setTimeout(n,s.show.delay),l.show!==l.hide&&a.hide.bind(l.hide,function(){clearTimeout(p.timers.show)})):n(),void 0)}var s,a,l,c,p,y;return y=e.isArray(t.id)?t.id[i]:t.id,y=!y||y===g||y.length<1||N[y]?u.nextid++:N[y]=y,c=".qtip-"+y+"-create",p=o.call(this,y,t),p===g?m:(s=p.options,e.each(h,function(){"initialize"===this.initialize&&this(p)}),a={show:s.show.target,hide:s.hide.target},l={show:e.trim(""+s.show.event).replace(/ /g,c+" ")+c,hide:e.trim(""+s.hide.event).replace(/ /g,c+" ")+c},/mouse(over|enter)/i.test(l.show)&&!/mouse(out|leave)/i.test(l.hide)&&(l.hide+=" mouseleave"+c),a.show.bind("mousemove"+c,function(e){f={pageX:e.pageX,pageY:e.pageY,type:"mousemove"},p.cache.onTarget=m}),a.show.bind(l.show,r),(s.show.ready||s.prerender)&&r(n),void 0)})},h=u.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,S).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance="t"===t||"b"===t?b:v,this.string=function(){return this.precedance===b?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===b?t+e:e+t},this.invertx=function(e){this.x=this.x===_?T:this.x===T?_:e||this.x},this.inverty=function(e){this.y=this.y===x?k:this.y===k?x:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(t,n){function i(e,t){a.left+=t*e.scrollLeft(),a.top+=t*e.scrollTop()}var o,r,s,a=t.offset(),l=t.closest("body")[0],c=n;if(c){do"static"!==c.css("position")&&(r=c.position(),a.left-=r.left+(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("marginLeft"),10)||0),a.top-=r.top+(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("marginTop"),10)||0),o||"hidden"===(s=c.css("overflow"))||"visible"===s||(o=c));while((c=e(c[0].offsetParent)).length);o&&o[0]!==l&&i(o,1)}return a},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||g,fn:{attr:function(t,n){if(this.length){var i=this[0],o="title",r=e.data(i,"qtip");if(t===o&&r&&"object"==typeof r&&r.options.suppress)return arguments.length<2?e.attr(i,B):(r&&r.options.content.attr===o&&r.cache.attr&&r.set("content.text",n),this.attr(B,n))}return e.fn["attr"+j].apply(this,arguments)},clone:function(t){var n=(e([]),e.fn["clone"+j].apply(this,arguments));return t||n.filter("["+B+"]").attr("title",function(){return e.attr(this,B)}).removeAttr(B),n}}},e.each(h.fn,function(t,n){if(!n||e.fn[t+j])return m;var i=e.fn[t+j]=e.fn[t];e.fn[t]=function(){return n.apply(this,arguments)||i.apply(this,arguments)}}),e.ui||(e["cleanData"+j]=e.cleanData,e.cleanData=function(t){for(var n,i=0;(n=t[i])!==d;i++)try{e(n).triggerHandler("removeqtip")}catch(o){}e["cleanData"+j](t)}),u.version="2.0.0pre",u.nextid=0,u.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),u.zindex=15e3,u.defaults={prerender:g,id:g,overwrite:m,suppress:m,content:{text:m,attr:"title",title:{text:g,button:g}},position:{my:"top left",at:"bottom right",target:g,container:g,viewport:g,adjust:{x:0,y:0,mouse:m,resize:m,method:"flip flip"},effect:function(t,n){e(this).animate(n,{duration:200,queue:g})}},show:{target:g,event:"mouseenter",effect:m,delay:90,solo:g,ready:g,autofocus:g},hide:{target:g,event:"mouseleave",effect:m,delay:0,fixed:g,inactive:g,leave:"window",distance:g},style:{classes:"",widget:g,width:g,height:g,def:m},events:{render:y,move:y,show:y,hide:y,toggle:y,visible:y,hidden:y,focus:y,blur:y}},h.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new r(e)},h.ajax.initialize="render",h.ajax.sanitize=function(e){var t,n=e.content;n&&"ajax"in n&&(t=n.ajax,"object"!=typeof t&&(t=e.content.ajax={url:t}),"boolean"!=typeof t.once&&t.once&&(t.once=!!t.once))},e.extend(m,u.defaults,{content:{ajax:{loading:m,once:m}}}),h.bgiframe=function(t){var n=e.browser,i=t.plugins.bgiframe;
                                                           return e("select, object").length<1||!n.msie||"6"!==(""+n.version).charAt(0)?g:"object"==typeof i?i:t.plugins.bgiframe=new s(t)},h.bgiframe.initialize="render",h.imagemap=function(t,n,i,o){function r(e,t,n){for(var i=0,o=1,r=1,s=0,a=0,l=e.width,c=e.height;l>0&&c>0&&o>0&&r>0;)for(l=Math.floor(l/2),c=Math.floor(c/2),n.x===_?o=l:n.x===T?o=e.width-l:o+=Math.floor(l/2),n.y===x?r=c:n.y===k?r=e.height-c:r+=Math.floor(c/2),i=t.length;i--&&!(t.length<2);)s=t[i][0]-e.position.left,a=t[i][1]-e.position.top,(n.x===_&&s>=o||n.x===T&&o>=s||n.x===S&&(o>s||s>e.width-o)||n.y===x&&a>=r||n.y===k&&r>=a||n.y===S&&(r>a||a>e.height-r))&&t.splice(i,1);return{left:t[0][0],top:t[0][1]}}n.jquery||(n=e(n));var s=t.cache.areas={},a=(n[0].shape||n.attr("shape")).toLowerCase(),l=n[0].coords||n.attr("coords"),c=l.split(","),d=[],u=e('img[usemap="#'+n.parent("map").attr("name")+'"]'),h=u.offset(),f={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},p=0,m=0;if(h.left+=Math.ceil((u.outerWidth()-u.width())/2),h.top+=Math.ceil((u.outerHeight()-u.height())/2),"poly"===a)for(p=c.length;p--;)m=[parseInt(c[--p],10),parseInt(c[p+1],10)],m[0]>f.position.right&&(f.position.right=m[0]),m[0]<f.position.left&&(f.position.left=m[0]),m[1]>f.position.bottom&&(f.position.bottom=m[1]),m[1]<f.position.top&&(f.position.top=m[1]),d.push(m);else for(p=-1;p++<c.length;)d.push(parseInt(c[p],10));switch(a){case"rect":f={width:Math.abs(d[2]-d[0]),height:Math.abs(d[3]-d[1]),position:{left:Math.min(d[0],d[2]),top:Math.min(d[1],d[3])}};break;case"circle":f={width:d[2]+2,height:d[2]+2,position:{left:d[0],top:d[1]}};break;case"poly":f.width=Math.abs(f.position.right-f.position.left),f.height=Math.abs(f.position.bottom-f.position.top),"c"===i.abbrev()?f.position={left:f.position.left+f.width/2,top:f.position.top+f.height/2}:(s[i+l]||(f.position=r(f,d.slice(),i),!o||"flip"!==o[0]&&"flip"!==o[1]||(f.offset=r(f,d.slice(),{x:i.x===_?T:i.x===T?_:S,y:i.y===x?k:i.y===k?x:S}),f.offset.left-=f.position.left,f.offset.top-=f.position.top),s[i+l]=f),f=s[i+l]),f.width=f.height=0}return f.position.left+=h.left,f.position.top+=h.top,f},h.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new a(e)},h.modal.initialize="render",h.modal.sanitize=function(e){e.show&&("object"!=typeof e.show.modal?e.show.modal={on:!!e.show.modal}:"undefined"==typeof e.show.modal.on&&(e.show.modal.on=m))},h.modal.zindex=u.zindex+1e3,h.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],e.extend(m,u.defaults,{show:{modal:{on:g,effect:m,blur:m,stealfocus:m,escape:m}}}),h.svg=function(t,n){for(var i,o,r,s,a,l=e(document),c=n[0],d={width:0,height:0,position:{top:1e10,left:1e10}};!c.getBBox;)c=c.parentNode;if(c.getBBox&&c.parentNode){if(i=c.getBBox(),o=c.getScreenCTM(),r=c.farthestViewportElement||c,!r.createSVGPoint)return d;s=r.createSVGPoint(),s.x=i.x,s.y=i.y,a=s.matrixTransform(o),d.position.left=a.x,d.position.top=a.y,s.x+=i.width,s.y+=i.height,a=s.matrixTransform(o),d.width=a.x-d.position.left,d.height=a.y-d.position.top,d.position.left+=l.scrollLeft(),d.position.top+=l.scrollTop()}return d},h.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new c(e)},h.tip.initialize="render",h.tip.sanitize=function(e){var t,n=e.style;n&&"tip"in n&&(t=e.style.tip,"object"!=typeof t&&(e.style.tip={corner:t}),/string|boolean/i.test(typeof t.corner)||(t.corner=m),"number"!=typeof t.width&&delete t.width,"number"!=typeof t.height&&delete t.height,"number"!=typeof t.border&&t.border!==m&&delete t.border,"number"!=typeof t.offset&&delete t.offset)},e.extend(m,u.defaults,{style:{tip:{corner:m,mimic:g,width:6,height:6,border:m,offset:0}}}),h.viewport=function(e,t,n,i,o,r,s){
                                                           function a(e,n,i,o,r,s,a,l,u){var h=t[r],f=p[e],g=m[e],y=i===I,v=-A.offset[r]+P.offset[r]+P["scroll"+r],b=f===r?u:f===s?-u:-u/2,w=g===r?l:g===s?-l:-l/2,C=M&&M.size?M.size[a]||0:0,x=M&&M.corner&&M.corner.precedance===e&&!y?C:0,_=v-h+x,k=h+u-P[a]-v+x,T=b-(p.precedance===e||f===p[n]?w:0)-(g===S?l/2:0);return y?(x=M&&M.corner&&M.corner.precedance===n?C:0,T=(f===r?1:-1)*b-x,t[r]+=_>0?_:k>0?-k:0,t[r]=Math.max(-A.offset[r]+P.offset[r]+(x&&M.corner[e]===S?M.offset:0),h-T,Math.min(Math.max(-A.offset[r]+P.offset[r]+P[a],h+T),t[r]))):(o*=i===E?2:0,_>0&&(f!==r||k>0)?(t[r]-=T+o,c["invert"+e](r)):k>0&&(f!==s||_>0)&&(t[r]-=(f===S?-T:T)+o,c["invert"+e](s)),t[r]<v&&-t[r]>k&&(t[r]=h,c=d)),t[r]-h}var l,c,u,h=n.target,f=e.elements.tooltip,p=n.my,m=n.at,g=n.adjust,y=g.method.split(" "),N=y[0],$=y[1]||y[0],P=n.viewport,A=n.container,O=e.cache,M=e.plugins.tip,L={left:0,top:0};return P.jquery&&h[0]!==window&&h[0]!==document.body&&"none"!==g.method?(l="fixed"===f.css("position"),P={elem:P,height:P[(P[0]===window?"h":"outerH")+"eight"](),width:P[(P[0]===window?"w":"outerW")+"idth"](),scrollleft:l?0:P.scrollLeft(),scrolltop:l?0:P.scrollTop(),offset:P.offset()||{left:0,top:0}},A={elem:A,scrollLeft:A.scrollLeft(),scrollTop:A.scrollTop(),offset:A.offset()||{left:0,top:0}},("shift"!==N||"shift"!==$)&&(c=p.clone()),L={left:"none"!==N?a(v,b,N,g.x,_,T,w,i,r):0,top:"none"!==$?a(b,v,$,g.y,x,k,C,o,s):0},c&&O.lastClass!==(u=D+"-pos-"+c.abbrev())&&f.removeClass(e.cache.lastClass).addClass(e.cache.lastClass=u),L):L}}),function(e){var t=document.createElement("div"),n=t.style,i=e.support;i.transform=""===n.MozTransform?"MozTransform":""===n.MsTransform?"MsTransform":""===n.WebkitTransform?"WebkitTransform":""===n.OTransform?"OTransform":""===n.transform?"transform":!1,i.matrixFilter=!i.transform&&""===n.filter,t=null,e.cssNumber.scale=!0,e.cssHooks.scale={set:function(t,n){var o,r,s=i,a=s.transform;e.data(t,"transform",{scale:o=n.toString().split(",")}),a?t.style[a]="scale("+n+")":s.matrixFilter&&(t.style.filter=["progid:DXImageTransform.Microsoft.Matrix(","M11="+o[0]+",","M12=0,","M21=0,","M22="+o[1]+",","SizingMethod='auto expand'",")"].join(""),(r=e.scale.centerOrigin)&&(t.style["margin"==r?"marginLeft":"left"]=-(t.offsetWidth/2)+t.clientWidth/2+"px",t.style["margin"==r?"marginTop":"top"]=-(t.offsetHeight/2)+t.clientHeight/2+"px"))},get:function(t){var n=e.data(t,"transform");return n&&n.scale?n.scale:0}},e.fx.step.scale=function(t){e.isArray(t.start)||(t.start=e.data(t.elem,"transform").scale);var n=t.start,i=t.end.toString().split(",");(2==n.length||2==i.length)&&(n[1]||(n[1]=n[0]),i[1]||(i[1]=i[0]),t.now=+(+n[0]+t.pos*(+i[0]-n[0]))+","+ +(+n[1]+t.pos*(+i[1]-n[1]))),e.cssHooks.scale.set(t.elem,t.now)},e.scale={centerOrigin:"margin"}}(jQuery),function(e){e.fn.simpleautogrow=function(){return this.each(function(){new e.simpleautogrow(this)})},e.simpleautogrow=function(t){var n=this,i=this.textarea=e(t).css({overflow:"hidden",display:"block"}).bind("focus init keydown keypress",function(){this.timer=n.checkExpand()});this.border=i.outerHeight()-i.innerHeight(),this.clone=i.clone().css({position:"absolute",visibility:"hidden"}).attr("name",""),i.height(t.scrollHeight+this.border).after(this.clone),this.checkExpand(),e(t).trigger("init")},e.simpleautogrow.prototype.checkExpand=function(){var e=this.clone[0].scrollHeight+this.border+18;this.textarea.outerHeight()!=e&&this.textarea.height(e+"px"),this.clone.val(this.textarea.val()).height(0)}}(jQuery),function(e){e.fn.tagit=function(){return this.each(function(){function t(t){var i=!0;return u.parents("ul").children(".tagit-choice").each(function(){n=e(this).children("input").val(),t==n&&(i=!1)}),i}function i(t){var n="";n='<li data-value="'+t+'" class="tagit-choice">\n',n+=t+"\n",n+='<a class="close">x</a>\n',n+="</li>\n";var i=u.parent();e(n).insertBefore(i),u.val("")}function o(){var t="";s.find(".tagit-choice").each(function(n){t=0===n?e(this).attr("data-value"):t+","+e(this).attr("data-value")}),r.val(t).trigger("change")}var r=e(this);r.hide();var s=e("<ul></ul>");r.after(s);var a=8,l=13,c=44;s.addClass("tagit");var d='<li class="tagit-new"><input class="tagit-input fieldText" type="text" /></li>\n';s.html(d);var u=s.children(".tagit-new").children(".tagit-input"),h=r.val();h&&(e.each(h.split(","),function(e,t){i(t)}),s.sortable({items:"li.tagit-choice",cursor:"move",containment:"parent",stop:function(){o()}})),s.click(function(t){"A"==t.target.tagName&&(e(t.target).parent().remove(),o()),u.focus()}),u.keypress(function(n){if(n.which==a)""==u.val()&&e(s).children(".tagit-choice:last").remove();else if(n.which==c||n.which==l){n.preventDefault();var r=u.val();r=r.replace(/,+$/,""),r=jQuery.trim(r),""!=r&&(t(r)&&i(r),u.val(""),o(),u.focus())}}),r.hasClass("ui-autocomplete-input")&&r.hasClass("formSuggestions")&&(r.attr("data-formSuggestions-source")&&"undefined"!=typeof r.attr("data-formSuggestions-source")?u.autocomplete({source:function(t,n){var i=r.attr("data-formSuggestions-object");i?ty.get(r.attr("data-formSuggestions-source")+t.term,function(t){n(e.map(t,function(e){return{label:e[i],value:e[i]}}))}):ty.get(r.attr("data-formSuggestions-source")+t.term,function(t){n(e.map(t,function(e){return{label:e,value:e}}))})}}):u.autocomplete({source:function(t,n){var i=r.attr("data-formSuggestions").split(","),o=_.filter(i,function(e){return e.toLowerCase().indexOf(t.term.toLowerCase())>-1});n(e.map(o,function(e){return{label:e,value:e}}))}}))})}}(jQuery),function(e){function t(){var t=n(this);return isNaN(t.datetime)||e(this).text(i(t.datetime)),this}function n(t){if(t=e(t),!t.data("timeago")){t.data("timeago",{datetime:r.datetime(t)});var n=e.trim(t.text());n.length>0&&t.attr("title",n)}return t.data("timeago")}function i(e){return r.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){return t instanceof Date?i(t):"string"==typeof t?i(e.timeago.parse(t)):i(e.timeago.datetime(t))};var r=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowFuture:!1,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"a minute",minutes:"%d minutes",hour:"an hour",hours:"%d hours",day:"a day",days:"%d days",month:"a month",months:"%d months",year:"a year",years:"%d years",numbers:[]}},inWords:function(t){function n(n,o){var r=e.isFunction(n)?n(o,t):n,s=i.numbers&&i.numbers[o]||o;return r.replace(/%d/i,s)}var i=this.settings.strings,o=i.prefixAgo,r=i.suffixAgo;this.settings.allowFuture&&0>t&&(o=i.prefixFromNow,r=i.suffixFromNow);var s=Math.abs(t)/1e3,a=s/60,l=a/60,c=l/24,d=c/365,u=45>s&&n(i.seconds,Math.round(s))||90>s&&n(i.minute,1)||45>a&&n(i.minutes,Math.round(a))||90>a&&n(i.hour,1)||24>l&&n(i.hours,Math.round(l))||48>l&&n(i.day,1)||30>c&&n(i.days,Math.floor(c))||60>c&&n(i.month,1)||365>c&&n(i.months,Math.floor(c/30))||2>d&&n(i.year,1)||n(i.years,Math.floor(d));return e.trim([o,u,r].join(" "))},parse:function(t){var n=e.trim(t);return n=n.replace(/\.\d\d\d+/,""),n=n.replace(/-/,"/").replace(/-/,"/"),n=n.replace(/T/," ").replace(/Z/," UTC"),n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(n)},datetime:function(t){var n="time"===e(t).get(0).tagName.toLowerCase(),i=n?e(t).attr("datetime"):e(t).attr("title");return r.parse(i)}}),e.fn.timeago=function(){var e=this;e.each(t);var n=r.settings;return n.refreshMillis>0&&setInterval(function(){e.each(t)},n.refreshMillis),e},document.createElement("abbr"),document.createElement("time")}(jQuery),ty.tooltip={tooltipAt:function(e){return e.attr("data-tooltip-at")?e.attr("data-tooltip-at"):"top"==e.attr("data-tooltip-position")?"top center":"bottom"==e.attr("data-tooltip-position")?"bottom center":"left"==e.attr("data-tooltip-position")?"center left":"right"==e.attr("data-tooltip-position")?"center right":"center right"},tooltipMy:function(e){return e.attr("data-tooltip-my")?e.attr("data-tooltip-my"):"top"==e.attr("data-tooltip-position")?"bottom center":"bottom"==e.attr("data-tooltip-position")?"top center":"left"==e.attr("data-tooltip-position")?"center right":"right"==e.attr("data-tooltip-position")?"center left":"center left"}},$(function(){$("body").delegate(".tooltip","mouseover",function(e){$(this).qtip({content:{text:function(){return $(this).attr("data-tooltip")?($(this).attr("data-tooltip-js")&&ty.tooltip[$(this).attr("data-tooltip-js")]($(this)),"!next"==$(this).attr("data-tooltip")?$($(this).next().clone()):"!first"==$(this).attr("data-tooltip")?$($(this).children(":first").clone()):"#"!=$(this).attr("data-tooltip").charAt(0)?$(this).attr("data-tooltip"):$($(this).attr("data-tooltip"))):void 0}},position:{adjust:{screen:!0},my:ty.tooltip.tooltipMy($(this)),at:ty.tooltip.tooltipAt($(this))},show:{event:e.type,ready:!0},hide:{fixed:!0,delay:150},events:{hide:function(e,t){t.destroy()}}})})}),$.fn.ty={},function(e,t){var n="ui-dialog ui-widget ui-widget-content ui-corner-all ",i={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},o={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(t){var n=e(this).css(t).offset().top;0>n&&e(this).css("top",t.top-n)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),"string"!=typeof this.originalTitle&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;{var t=this,i=t.options,o=i.title||"&#160;",r=e.ui.dialog.getTitleId(t.element),s=(t.uiDialog=e("<div></div>")).appendTo(document.body).hide().addClass(n+i.dialogClass).css({zIndex:i.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){i.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}).attr({role:"dialog","aria-labelledby":r}).mousedown(function(e){t.moveToTop(!1,e)}),a=(t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s),(t.uiDialogTitlebar=e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s)),l=e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){l.addClass("ui-state-hover")},function(){l.removeClass("ui-state-hover")}).focus(function(){l.addClass("ui-state-focus")}).blur(function(){l.removeClass("ui-state-focus")}).click(function(e){return t.close(e),!1}).appendTo(a);(t.uiDialogTitlebarCloseText=e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(i.closeText).appendTo(l),e("<span></span>").addClass("ui-dialog-title").attr("id",r).html(o).prependTo(a)
                                                             }e.isFunction(i.beforeclose)&&!e.isFunction(i.beforeClose)&&(i.beforeClose=i.beforeclose),a.find("*").add(a).disableSelection(),i.draggable&&e.fn.draggable&&t._makeDraggable(),i.resizable&&e.fn.resizable&&t._makeResizable(),t._createButtons(i.buttons),t._isOpen=!1,e.fn.bgiframe&&s.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var e=this;return e.overlay&&e.overlay.destroy(),e.uiDialog.hide(),e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),e.uiDialog.remove(),e.originalTitle&&e.element.attr("title",e.originalTitle),e},widget:function(){return this.uiDialog},close:function(t){var n,i,o=this;if(!1!==o._trigger("beforeClose",t))return o.overlay&&o.overlay.destroy(),o.uiDialog.unbind("keypress.ui-dialog"),o._isOpen=!1,o.options.hide?o.uiDialog.hide(o.options.hide,function(){o._trigger("close",t)}):(o.uiDialog.hide(),o._trigger("close",t)),e.ui.dialog.overlay.resize(),o.options.modal&&(n=0,e(".ui-dialog").each(function(){this!==o.uiDialog[0]&&(i=e(this).css("z-index"),isNaN(i)||(n=Math.max(n,i)))}),e.ui.dialog.maxZ=n),o},isOpen:function(){return this._isOpen},moveToTop:function(t,n){var i,o=this,r=o.options;return r.modal&&!t||!r.stack&&!r.modal?o._trigger("focus",n):(r.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=r.zIndex),o.overlay&&(e.ui.dialog.maxZ+=1,o.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ)),i={scrollTop:o.element.scrollTop(),scrollLeft:o.element.scrollLeft()},e.ui.dialog.maxZ+=1,o.uiDialog.css("z-index",e.ui.dialog.maxZ),o.element.attr(i),o._trigger("focus",n),o)},open:function(){if(!this._isOpen){var t=this,n=t.options,i=t.uiDialog;return t.overlay=n.modal?new e.ui.dialog.overlay(t):null,t._size(),t._position(n.position),i.show(n.show),t.moveToTop(!0),n.modal&&i.bind("keydown.ui-dialog",function(t){if(t.keyCode===e.ui.keyCode.TAB){var n=e(":tabbable",this),i=n.filter(":first"),o=n.filter(":last");return t.target!==o[0]||t.shiftKey?t.target===i[0]&&t.shiftKey?(o.focus(1),!1):void 0:(i.focus(1),!1)}}),e(t.element.find(":tabbable").get().concat(i.find(".ui-dialog-buttonpane :tabbable").get().concat(i.get()))).eq(0).focus(),t._isOpen=!0,t._trigger("open"),t}},_createButtons:function(t){var n=this,i=!1,o=e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),r=e("<div></div>").addClass("ui-dialog-buttonset").appendTo(o);n.uiDialog.find(".ui-dialog-buttonpane").remove(),"object"==typeof t&&null!==t&&e.each(t,function(){return!(i=!0)}),i&&(e.each(t,function(t,i){i=e.isFunction(i)?{click:i,text:t}:i;var o=e('<button type="button"></button>').click(function(){i.click.apply(n.element[0],arguments)}).appendTo(r);e.each(i,function(e,t){"click"!==e&&(e in o?o[e](t):o.attr(e,t))}),e.fn.button&&o.button()}),o.appendTo(n.uiDialog))},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var n,i=this,o=i.options,r=e(document);i.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,s){n="auto"===o.height?"auto":e(this).height(),e(this).height(e(this).height()).addClass("ui-dialog-dragging"),i._trigger("dragStart",r,t(s))},drag:function(e,n){i._trigger("drag",e,t(n))},stop:function(s,a){o.position=[a.position.left-r.scrollLeft(),a.position.top-r.scrollTop()],e(this).removeClass("ui-dialog-dragging").height(n),i._trigger("dragStop",s,t(a)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(n){function i(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}n=n===t?this.options.resizable:n;var o=this,r=o.options,s=o.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";o.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:o.element,maxWidth:r.maxWidth,maxHeight:r.maxHeight,minWidth:r.minWidth,minHeight:o._minHeight(),handles:a,start:function(t,n){e(this).addClass("ui-dialog-resizing"),o._trigger("resizeStart",t,i(n))},resize:function(e,t){o._trigger("resize",e,i(t))},stop:function(t,n){e(this).removeClass("ui-dialog-resizing"),r.height=e(this).height(),r.width=e(this).width(),o._trigger("resizeStop",t,i(n)),e.ui.dialog.overlay.resize()}}).css("position",s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var n,i=[],o=[0,0];t?(("string"==typeof t||"object"==typeof t&&"0"in t)&&(i=t.split?t.split(" "):[t[0],t[1]],1===i.length&&(i[1]=i[0]),e.each(["left","top"],function(e,t){+i[e]===i[e]&&(o[e]=i[e],i[e]=t)}),t={my:i.join(" "),at:i.join(" "),offset:o.join(" ")}),t=e.extend({},e.ui.dialog.prototype.options.position,t)):t=e.ui.dialog.prototype.options.position,n=this.uiDialog.is(":visible"),n||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(e.extend({of:window},t)),n||this.uiDialog.hide()},_setOptions:function(t){var n=this,r={},s=!1;e.each(t,function(e,t){n._setOption(e,t),e in i&&(s=!0),e in o&&(r[e]=t)}),s&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(t,i){var o=this,r=o.uiDialog;switch(t){case"beforeclose":t="beforeClose";break;case"buttons":o._createButtons(i);break;case"closeText":o.uiDialogTitlebarCloseText.text(""+i);break;case"dialogClass":r.removeClass(o.options.dialogClass).addClass(n+i);break;case"disabled":i?r.addClass("ui-dialog-disabled"):r.removeClass("ui-dialog-disabled");break;case"draggable":var s=r.is(":data(draggable)");s&&!i&&r.draggable("destroy"),!s&&i&&o._makeDraggable();break;case"position":o._position(i);break;case"resizable":var a=r.is(":data(resizable)");a&&!i&&r.resizable("destroy"),a&&"string"==typeof i&&r.resizable("option","handles",i),a||i===!1||o._makeResizable(i);break;case"title":e(".ui-dialog-title",o.uiDialogTitlebar).html(""+(i||"&#160;"))}e.Widget.prototype._setOption.apply(o,arguments)},_size:function(){var t,n,i=this.options,o=this.uiDialog.is(":visible");if(this.element.show().css({width:"auto",minHeight:0,height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).height(),n=Math.max(0,i.minHeight-t),"auto"===i.height)if(e.support.minHeight)this.element.css({minHeight:n,height:"auto"});else{this.uiDialog.show();var r=this.element.css("height","auto").height();o||this.uiDialog.hide(),this.element.height(Math.max(r,n))}else this.element.height(Math.max(i.height-t,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{version:"1.8.23",uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(t){0===this.instances.length&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(t){return e(t.target).zIndex()<e.ui.dialog.overlay.maxZ?!1:void 0})},1),e(document).bind("keydown.dialog-overlay",function(n){t.options.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===e.ui.keyCode.ESCAPE&&(t.close(n),n.preventDefault())}),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var n=(this.oldInstances.pop()||e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
                                                                   return e.fn.bgiframe&&n.bgiframe(),this.instances.push(n),n},destroy:function(t){var n=e.inArray(t,this.instances);-1!=n&&this.oldInstances.push(this.instances.splice(n,1)[0]),0===this.instances.length&&e([document,window]).unbind(".dialog-overlay"),t.remove();var i=0;e.each(this.instances,function(){i=Math.max(i,this.css("z-index"))}),this.maxZ=i},height:function(){var t,n;return e.browser.msie&&e.browser.version<7?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),n=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),n>t?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,n;return e.browser.msie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),n=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),n>t?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})}(jQuery),function(e){e.widget("ui.draggable",e.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){"original"!=this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){return this.element.data("draggable")?(this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this):void 0},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(n.iframeFix&&e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!n){var i=this._uiHash();if(this._trigger("drag",t,i)===!1)return this._mouseUp({}),!1;this.position=i.position}return this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);for(var i=this.element[0],o=!1;i&&(i=i.parentNode);)i==document&&(o=!0);if(!o&&"original"===this.options.helper)return!1;if("invalid"==this.options.revert&&!n||"valid"==this.options.revert&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var r=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return this.options.iframeFix===!0&&e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=this.options.handle&&e(this.options.handle,this.element).length?!1:!0;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,i=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):"clone"==n.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"==n.appendTo?this.element[0].parentNode:n.appendTo),i[0]==this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&e.browser.msie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;if("parent"==t.containment&&(t.containment=this.helper[0].parentNode),("document"==t.containment||"window"==t.containment)&&(this.containment=["document"==t.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"==t.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"==t.containment?0:e(window).scrollLeft())+e("document"==t.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"==t.containment?0:e(window).scrollTop())+(e("document"==t.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(t.containment)||t.containment.constructor==Array)t.containment.constructor==Array&&(this.containment=t.containment);else{var n=e(t.containment),i=n[0];if(!i)return;var o=(n.offset(),"hidden"!=e(i).css("overflow"));this.containment=[(parseInt(e(i).css("borderLeftWidth"),10)||0)+(parseInt(e(i).css("paddingLeft"),10)||0),(parseInt(e(i).css("borderTopWidth"),10)||0)+(parseInt(e(i).css("paddingTop"),10)||0),(o?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e(i).css("borderLeftWidth"),10)||0)-(parseInt(e(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(o?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e(i).css("borderTopWidth"),10)||0)-(parseInt(e(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}},_convertPositionTo:function(t,n){n||(n=this.position);var i="absolute"==t?1:-1,o=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),r=/(html|body)/i.test(o[0].tagName);return{top:n.top+this.offset.relative.top*i+this.offset.parent.top*i-(e.browser.safari&&e.browser.version<526&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollTop():r?0:o.scrollTop())*i),left:n.left+this.offset.relative.left*i+this.offset.parent.left*i-(e.browser.safari&&e.browser.version<526&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():r?0:o.scrollLeft())*i)}},_generatePosition:function(t){var n=this.options,i="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(i[0].tagName),r=t.pageX,s=t.pageY;if(this.originalPosition){var a;if(this.containment){
                                                                       if(this.relative_container){var l=this.relative_container.offset();a=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]}else a=this.containment;t.pageX-this.offset.click.left<a[0]&&(r=a[0]+this.offset.click.left),t.pageY-this.offset.click.top<a[1]&&(s=a[1]+this.offset.click.top),t.pageX-this.offset.click.left>a[2]&&(r=a[2]+this.offset.click.left),t.pageY-this.offset.click.top>a[3]&&(s=a[3]+this.offset.click.top)}if(n.grid){var c=n.grid[1]?this.originalPageY+Math.round((s-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;s=a?c-this.offset.click.top<a[1]||c-this.offset.click.top>a[3]?c-this.offset.click.top<a[1]?c+n.grid[1]:c-n.grid[1]:c:c;var d=n.grid[0]?this.originalPageX+Math.round((r-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;r=a?d-this.offset.click.left<a[0]||d-this.offset.click.left>a[2]?d-this.offset.click.left<a[0]?d+n.grid[0]:d-n.grid[0]:d:d}}return{top:s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(e.browser.safari&&e.browser.version<526&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollTop():o?0:i.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(e.browser.safari&&e.browser.version<526&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollLeft():o?0:i.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]==this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,i){return i=i||this._uiHash(),e.ui.plugin.call(this,t,[n,i]),"drag"==t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.extend(e.ui.draggable,{version:"1.8.23"}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var i=e(this).data("draggable"),o=i.options,r=e.extend({},n,{item:i.element});i.sortables=[],e(o.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(i.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,r))})},stop:function(t,n){var i=e(this).data("draggable"),o=e.extend({},n,{item:i.element});e.each(i.sortables,function(){this.instance.isOver?(this.instance.isOver=0,i.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"==i.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,o))})},drag:function(t,n){var i=e(this).data("draggable"),o=this;e.each(i.sortables,function(){this.instance.positionAbs=i.positionAbs,this.instance.helperProportions=i.helperProportions,this.instance.offset.click=i.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(o).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=i.offset.click.top,this.instance.offset.click.left=i.offset.click.left,this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top,i._trigger("toSortable",t),i.dropped=this.instance.element,i.currentItem=i.element,this.instance.fromOutside=i),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),i._trigger("fromSortable",t),i.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var i=e(n.helper),o=e(this).data("draggable").options;i.css("opacity")&&(o._opacity=i.css("opacity")),i.css("opacity",o.opacity)},stop:function(t,n){var i=e(this).data("draggable").options;i._opacity&&e(n.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("draggable");t.scrollParent[0]!=document&&"HTML"!=t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("draggable"),i=n.options,o=!1;n.scrollParent[0]!=document&&"HTML"!=n.scrollParent[0].tagName?(i.axis&&"x"==i.axis||(n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?n.scrollParent[0].scrollTop=o=n.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-n.overflowOffset.top<i.scrollSensitivity&&(n.scrollParent[0].scrollTop=o=n.scrollParent[0].scrollTop-i.scrollSpeed)),i.axis&&"y"==i.axis||(n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?n.scrollParent[0].scrollLeft=o=n.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-n.overflowOffset.left<i.scrollSensitivity&&(n.scrollParent[0].scrollLeft=o=n.scrollParent[0].scrollLeft-i.scrollSpeed))):(i.axis&&"x"==i.axis||(t.pageY-e(document).scrollTop()<i.scrollSensitivity?o=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(o=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed))),i.axis&&"y"==i.axis||(t.pageX-e(document).scrollLeft()<i.scrollSensitivity?o=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(o=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed)))),o!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!=String?n.snap.items||":data(draggable)":n.snap).each(function(){var n=e(this),i=n.offset();this!=t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:i.top,left:i.left})})},drag:function(t,n){for(var i=e(this).data("draggable"),o=i.options,r=o.snapTolerance,s=n.offset.left,a=s+i.helperProportions.width,l=n.offset.top,c=l+i.helperProportions.height,d=i.snapElements.length-1;d>=0;d--){var u=i.snapElements[d].left,h=u+i.snapElements[d].width,f=i.snapElements[d].top,p=f+i.snapElements[d].height;if(s>u-r&&h+r>s&&l>f-r&&p+r>l||s>u-r&&h+r>s&&c>f-r&&p+r>c||a>u-r&&h+r>a&&l>f-r&&p+r>l||a>u-r&&h+r>a&&c>f-r&&p+r>c){if("inner"!=o.snapMode){var m=Math.abs(f-c)<=r,g=Math.abs(p-l)<=r,y=Math.abs(u-a)<=r,v=Math.abs(h-s)<=r;m&&(n.position.top=i._convertPositionTo("relative",{top:f-i.helperProportions.height,left:0}).top-i.margins.top),g&&(n.position.top=i._convertPositionTo("relative",{top:p,left:0}).top-i.margins.top),y&&(n.position.left=i._convertPositionTo("relative",{top:0,left:u-i.helperProportions.width}).left-i.margins.left),v&&(n.position.left=i._convertPositionTo("relative",{top:0,left:h}).left-i.margins.left)}var b=m||g||y||v;if("outer"!=o.snapMode){var m=Math.abs(f-l)<=r,g=Math.abs(p-c)<=r,y=Math.abs(u-s)<=r,v=Math.abs(h-a)<=r;m&&(n.position.top=i._convertPositionTo("relative",{top:f,left:0}).top-i.margins.top),g&&(n.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top-i.margins.top),y&&(n.position.left=i._convertPositionTo("relative",{top:0,left:u}).left-i.margins.left),v&&(n.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left-i.margins.left)}!i.snapElements[d].snapping&&(m||g||y||v||b)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=m||g||y||v||b}else i.snapElements[d].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=!1}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t=e(this).data("draggable").options,n=e.makeArray(e(t.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(n.length){var i=parseInt(n[0].style.zIndex)||0;e(n).each(function(e){this.style.zIndex=i+e}),this[0].style.zIndex=i+n.length}}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var i=e(n.helper),o=e(this).data("draggable").options;i.css("zIndex")&&(o._zIndex=i.css("zIndex")),i.css("zIndex",o.zIndex)},stop:function(t,n){var i=e(this).data("draggable").options;i._zIndex&&e(n.helper).css("zIndex",i._zIndex)}})}(jQuery),function(e){e.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,n=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var t=e.ui.ddmanager.droppables[this.options.scope],n=0;n<t.length;n++)t[n]==this&&t.splice(n,1);
                                                                       return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(t,n){"accept"==t&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;n&&(n.currentItem||n.element)[0]!=this.element[0]&&this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;n&&(n.currentItem||n.element)[0]!=this.element[0]&&this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var i=n||e.ui.ddmanager.current;if(!i||(i.currentItem||i.element)[0]==this.element[0])return!1;var o=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope==i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&e.ui.intersect(i,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(o=!0,!1):void 0}),o?!1:this.accept.call(this.element[0],i.currentItem||i.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(i)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.extend(e.ui.droppable,{version:"1.8.23"}),e.ui.intersect=function(t,n,i){if(!n.offset)return!1;var o=(t.positionAbs||t.position.absolute).left,r=o+t.helperProportions.width,s=(t.positionAbs||t.position.absolute).top,a=s+t.helperProportions.height,l=n.offset.left,c=l+n.proportions.width,d=n.offset.top,u=d+n.proportions.height;switch(i){case"fit":return o>=l&&c>=r&&s>=d&&u>=a;case"intersect":return l<o+t.helperProportions.width/2&&r-t.helperProportions.width/2<c&&d<s+t.helperProportions.height/2&&a-t.helperProportions.height/2<u;case"pointer":var h=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,f=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,p=e.ui.isOver(f,h,d,l,n.proportions.height,n.proportions.width);return p;case"touch":return(s>=d&&u>=s||a>=d&&u>=a||d>s&&a>u)&&(o>=l&&c>=o||r>=l&&c>=r||l>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var i=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,r=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var s=0;s<i.length;s++)if(!(i[s].options.disabled||t&&!i[s].accept.call(i[s].element[0],t.currentItem||t.element))){for(var a=0;a<r.length;a++)if(r[a]==i[s].element[0]){i[s].proportions.height=0;continue e}i[s].visible="none"!=i[s].element.css("display"),i[s].visible&&("mousedown"==o&&i[s]._activate.call(i[s],n),i[s].offset=i[s].element.offset(),i[s].proportions={width:i[s].element[0].offsetWidth,height:i[s].element[0].offsetHeight})}},drop:function(t,n){var i=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(i=this._drop.call(this,n)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,n)))}),i},dragStart:function(t,n){t.element.parents(":not(body,html)").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)
                                                                     })},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var i=e.ui.intersect(t,this,this.options.tolerance),o=i||1!=this.isover?i&&0==this.isover?"isover":null:"isout";if(o){var r;if(this.options.greedy){var s=this.element.parents(":data(droppable):eq(0)");s.length&&(r=e.data(s[0],"droppable"),r.greedyChild="isover"==o?1:0)}r&&"isover"==o&&(r.isover=0,r.isout=1,r._out.call(r,n)),this[o]=1,this["isout"==o?"isover":"isout"]=0,this["isover"==o?"_over":"_out"].call(this,n),r&&"isout"==o&&(r.isout=0,r.isover=1,r._over.call(r,n))}}})},dragStop:function(t,n){t.element.parents(":not(body,html)").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}}(jQuery),function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,n=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!n.aspectRatio,aspectRatio:n.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:n.helper||n.ghost||n.animate?n.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=n.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor==String){"all"==this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw");var i=this.handles.split(",");this.handles={};for(var o=0;o<i.length;o++){var r=e.trim(i[o]),s="ui-resizable-"+r,a=e('<div class="ui-resizable-handle '+s+'"></div>');a.css({zIndex:n.zIndex}),"se"==r&&a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(a)}}this._renderAxis=function(t){t=t||this.element;for(var n in this.handles){if(this.handles[n].constructor==String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var i=e(this.handles[n],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(n)?i.outerHeight():i.outerWidth();var r=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");t.css(r,o),this._proportionallyResize()}e(this.handles[n]).length}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),n.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").hover(function(){n.disabled||(e(this).removeClass("ui-resizable-autohide"),t._handles.show())},function(){n.disabled||t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var n=this.element;n.after(this.originalElement.css({position:n.css("position"),width:n.outerWidth(),height:n.outerHeight(),top:n.css("top"),left:n.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var n=!1;for(var i in this.handles)e(this.handles[i])[0]==t.target&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(n){var i=this.options,o=this.element.position(),r=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(r.is(".ui-draggable")||/absolute/.test(r.css("position")))&&r.css({position:"absolute",top:o.top,left:o.left}),this._renderProxy();var s=t(this.helper.css("left")),a=t(this.helper.css("top"));i.containment&&(s+=e(i.containment).scrollLeft()||0,a+=e(i.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:a},this.size=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()},this.originalSize=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()},this.originalPosition={left:s,top:a},this.sizeDiff={width:r.outerWidth()-r.width(),height:r.outerHeight()-r.height()},this.originalMousePosition={left:n.pageX,top:n.pageY},this.aspectRatio="number"==typeof i.aspectRatio?i.aspectRatio:this.originalSize.width/this.originalSize.height||1;var l=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor","auto"==l?this.axis+"-resize":l),r.addClass("ui-resizable-resizing"),this._propagate("start",n),!0},_mouseDrag:function(t){var n=this.helper,i=(this.options,this.originalMousePosition),o=this.axis,r=t.pageX-i.left||0,s=t.pageY-i.top||0,a=this._change[o];if(!a)return!1;{var l=a.apply(this,[t,r,s]);e.browser.msie&&e.browser.version<7,this.sizeDiff}return this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(l=this._updateRatio(l,t)),l=this._respectSize(l,t),this._propagate("resize",t),n.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n=this.options,i=this;if(this._helper){var o=this._proportionallyResizeElements,r=o.length&&/textarea/i.test(o[0].nodeName),s=r&&e.ui.hasScroll(o[0],"left")?0:i.sizeDiff.height,a=r?0:i.sizeDiff.width,l={width:i.helper.width()-a,height:i.helper.height()-s},c=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,d=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;n.animate||this.element.css(e.extend(l,{top:d,left:c})),i.helper.height(i.size.height),i.helper.width(i.size.width),this._helper&&!n.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,i,o,r,s,a=this.options;s={minWidth:n(a.minWidth)?a.minWidth:0,maxWidth:n(a.maxWidth)?a.maxWidth:1/0,minHeight:n(a.minHeight)?a.minHeight:0,maxHeight:n(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||e)&&(t=s.minHeight*this.aspectRatio,o=s.minWidth/this.aspectRatio,i=s.maxHeight*this.aspectRatio,r=s.maxWidth/this.aspectRatio,t>s.minWidth&&(s.minWidth=t),o>s.minHeight&&(s.minHeight=o),i<s.maxWidth&&(s.maxWidth=i),r<s.maxHeight&&(s.maxHeight=r)),this._vBoundaries=s},_updateCache:function(e){this.options;this.offset=this.helper.offset(),n(e.left)&&(this.position.left=e.left),n(e.top)&&(this.position.top=e.top),n(e.height)&&(this.size.height=e.height),n(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=(this.options,this.position),i=this.size,o=this.axis;return n(e.height)?e.width=e.height*this.aspectRatio:n(e.width)&&(e.height=e.width/this.aspectRatio),"sw"==o&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"==o&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e,t){var i=(this.helper,this._vBoundaries),o=(this._aspectRatio||t.shiftKey,this.axis),r=n(e.width)&&i.maxWidth&&i.maxWidth<e.width,s=n(e.height)&&i.maxHeight&&i.maxHeight<e.height,a=n(e.width)&&i.minWidth&&i.minWidth>e.width,l=n(e.height)&&i.minHeight&&i.minHeight>e.height;a&&(e.width=i.minWidth),l&&(e.height=i.minHeight),r&&(e.width=i.maxWidth),s&&(e.height=i.maxHeight);var c=this.originalPosition.left+this.originalSize.width,d=this.position.top+this.size.height,u=/sw|nw|w/.test(o),h=/nw|ne|n/.test(o);a&&u&&(e.left=c-i.minWidth),r&&u&&(e.left=c-i.maxWidth),l&&h&&(e.top=d-i.minHeight),s&&h&&(e.top=d-i.maxHeight);var f=!e.width&&!e.height;return f&&!e.left&&e.top?e.top=null:f&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){this.options;if(this._proportionallyResizeElements.length)for(var t=this.helper||this.element,n=0;n<this._proportionallyResizeElements.length;n++){var i=this._proportionallyResizeElements[n];if(!this.borderDif){var o=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];
                                                                           this.borderDif=e.map(o,function(e,t){var n=parseInt(e,10)||0,i=parseInt(r[t],10)||0;return n+i})}e.browser.msie&&(e(t).is(":hidden")||e(t).parents(":hidden").length)||i.css({height:t.height()-this.borderDif[0]-this.borderDif[2]||0,width:t.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;if(this.elementOffset=t.offset(),this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var i=e.browser.msie&&e.browser.version<7,o=i?1:0,r=i?2:-1;
                                                                               this.helper.addClass(this._helper).css({width:this.element.outerWidth()+r,height:this.element.outerHeight()+r,position:"absolute",left:this.elementOffset.left-o+"px",top:this.elementOffset.top-o+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=(this.options,this.originalSize),i=this.originalPosition;return{left:i.left+t,width:n.width-t}},n:function(e,t,n){var i=(this.options,this.originalSize),o=this.originalPosition;return{top:o.top+n,height:i.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,i){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,i]))},sw:function(t,n,i){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,i]))},ne:function(t,n,i){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,i]))},nw:function(t,n,i){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,i]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),"resize"!=t&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.extend(e.ui.resizable,{version:"1.8.23"}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("resizable"),n=t.options,i=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof n.alsoResize||n.alsoResize.parentNode?i(n.alsoResize):n.alsoResize.length?(n.alsoResize=n.alsoResize[0],i(n.alsoResize)):e.each(n.alsoResize,function(e){i(e)})},resize:function(t,n){var i=e(this).data("resizable"),o=i.options,r=i.originalSize,s=i.originalPosition,a={height:i.size.height-r.height||0,width:i.size.width-r.width||0,top:i.position.top-s.top||0,left:i.position.left-s.left||0},l=function(t,i){e(t).each(function(){var t=e(this),o=e(this).data("resizable-alsoresize"),r={},s=i&&i.length?i:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(s,function(e,t){var n=(o[t]||0)+(a[t]||0);n&&n>=0&&(r[t]=n||null)}),t.css(r)})};"object"!=typeof o.alsoResize||o.alsoResize.nodeType?l(o.alsoResize):e.each(o.alsoResize,function(e,t){l(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("resizable"),i=n.options,o=n._proportionallyResizeElements,r=o.length&&/textarea/i.test(o[0].nodeName),s=r&&e.ui.hasScroll(o[0],"left")?0:n.sizeDiff.height,a=r?0:n.sizeDiff.width,l={width:n.size.width-a,height:n.size.height-s},c=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,d=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(l,d&&c?{top:d,left:c}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var i={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};o&&o.length&&e(o[0]).css({width:i.width,height:i.height}),n._updateCache(i),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var n=e(this).data("resizable"),i=n.options,o=n.element,r=i.containment,s=r instanceof e?r.get(0):/parent/.test(r)?o.parent().get(0):r;if(s)if(n.containerElement=e(s),/document/.test(r)||r==document)n.containerOffset={left:0,top:0},n.containerPosition={left:0,top:0},n.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var a=e(s),l=[];e(["Top","Right","Left","Bottom"]).each(function(e,n){l[e]=t(a.css("padding"+n))}),n.containerOffset=a.offset(),n.containerPosition=a.position(),n.containerSize={height:a.innerHeight()-l[3],width:a.innerWidth()-l[1]};var c=n.containerOffset,d=n.containerSize.height,u=n.containerSize.width,h=e.ui.hasScroll(s,"left")?s.scrollWidth:u,f=e.ui.hasScroll(s)?s.scrollHeight:d;n.parentData={element:s,left:c.left,top:c.top,width:h,height:f}}},resize:function(t){var n=e(this).data("resizable"),i=n.options,o=(n.containerSize,n.containerOffset),r=(n.size,n.position),s=n._aspectRatio||t.shiftKey,a={top:0,left:0},l=n.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(a=o),r.left<(n._helper?o.left:0)&&(n.size.width=n.size.width+(n._helper?n.position.left-o.left:n.position.left-a.left),s&&(n.size.height=n.size.width/n.aspectRatio),n.position.left=i.helper?o.left:0),r.top<(n._helper?o.top:0)&&(n.size.height=n.size.height+(n._helper?n.position.top-o.top:n.position.top),s&&(n.size.width=n.size.height*n.aspectRatio),n.position.top=n._helper?o.top:0),n.offset.left=n.parentData.left+n.position.left,n.offset.top=n.parentData.top+n.position.top;var c=Math.abs((n._helper?n.offset.left-a.left:n.offset.left-a.left)+n.sizeDiff.width),d=Math.abs((n._helper?n.offset.top-a.top:n.offset.top-o.top)+n.sizeDiff.height),u=n.containerElement.get(0)==n.element.parent().get(0),h=/relative|absolute/.test(n.containerElement.css("position"));u&&h&&(c-=n.parentData.left),c+n.size.width>=n.parentData.width&&(n.size.width=n.parentData.width-c,s&&(n.size.height=n.size.width/n.aspectRatio)),d+n.size.height>=n.parentData.height&&(n.size.height=n.parentData.height-d,s&&(n.size.width=n.size.height*n.aspectRatio))},stop:function(){var t=e(this).data("resizable"),n=t.options,i=(t.position,t.containerOffset),o=t.containerPosition,r=t.containerElement,s=e(t.helper),a=s.offset(),l=s.outerWidth()-t.sizeDiff.width,c=s.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(r.css("position"))&&e(this).css({left:a.left-o.left-i.left,width:l,height:c}),t._helper&&!n.animate&&/static/.test(r.css("position"))&&e(this).css({left:a.left-o.left-i.left,width:l,height:c})}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("resizable"),n=t.options,i=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof n.ghost?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){{var t=e(this).data("resizable");t.options}t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){{var t=e(this).data("resizable");t.options}t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t){{var n=e(this).data("resizable"),i=n.options,o=n.size,r=n.originalSize,s=n.originalPosition,a=n.axis;i._aspectRatio||t.shiftKey}i.grid="number"==typeof i.grid?[i.grid,i.grid]:i.grid;var l=Math.round((o.width-r.width)/(i.grid[0]||1))*(i.grid[0]||1),c=Math.round((o.height-r.height)/(i.grid[1]||1))*(i.grid[1]||1);/^(se|s|e)$/.test(a)?(n.size.width=r.width+l,n.size.height=r.height+c):/^(ne)$/.test(a)?(n.size.width=r.width+l,n.size.height=r.height+c,n.position.top=s.top-c):/^(sw)$/.test(a)?(n.size.width=r.width+l,n.size.height=r.height+c,n.position.left=s.left-l):(n.size.width=r.width+l,n.size.height=r.height+c,n.position.top=s.top-c,n.position.left=s.left-l)}});var t=function(e){return parseInt(e,10)||0},n=function(e){return!isNaN(parseInt(e,10))}}(jQuery),function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var n;this.refresh=function(){n=e(t.options.filter,t.element[0]),n.addClass("ui-selectee"),n.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=n.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(t){var n=this;if(this.opos=[t.pageX,t.pageY],!this.options.disabled){var i=this.options;this.selectees=e(i.filter,this.element[0]),this._trigger("start",t),e(i.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),i.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var i=e.data(this,"selectable-item");
                                                                               i.startselected=!0,t.metaKey||t.ctrlKey||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",t,{unselecting:i.element}))}),e(t.target).parents().andSelf().each(function(){var i=e.data(this,"selectable-item");if(i){var o=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected");return i.$element.removeClass(o?"ui-unselecting":"ui-selected").addClass(o?"ui-selecting":"ui-unselecting"),i.unselecting=!o,i.selecting=o,i.selected=o,o?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1}})}},_mouseDrag:function(t){var n=this;if(this.dragged=!0,!this.options.disabled){var i=this.options,o=this.opos[0],r=this.opos[1],s=t.pageX,a=t.pageY;if(o>s){var l=s;s=o,o=l}if(r>a){var l=a;a=r,r=l}return this.helper.css({left:o,top:r,width:s-o,height:a-r}),this.selectees.each(function(){var l=e.data(this,"selectable-item");if(l&&l.element!=n.element[0]){var c=!1;"touch"==i.tolerance?c=!(l.left>s||l.right<o||l.top>a||l.bottom<r):"fit"==i.tolerance&&(c=l.left>o&&l.right<s&&l.top>r&&l.bottom<a),c?(l.selected&&(l.$element.removeClass("ui-selected"),l.selected=!1),l.unselecting&&(l.$element.removeClass("ui-unselecting"),l.unselecting=!1),l.selecting||(l.$element.addClass("ui-selecting"),l.selecting=!0,n._trigger("selecting",t,{selecting:l.element}))):(l.selecting&&((t.metaKey||t.ctrlKey)&&l.startselected?(l.$element.removeClass("ui-selecting"),l.selecting=!1,l.$element.addClass("ui-selected"),l.selected=!0):(l.$element.removeClass("ui-selecting"),l.selecting=!1,l.startselected&&(l.$element.addClass("ui-unselecting"),l.unselecting=!0),n._trigger("unselecting",t,{unselecting:l.element}))),l.selected&&(t.metaKey||t.ctrlKey||l.startselected||(l.$element.removeClass("ui-selected"),l.selected=!1,l.$element.addClass("ui-unselecting"),l.unselecting=!0,n._trigger("unselecting",t,{unselecting:l.element}))))}}),!1}},_mouseStop:function(t){var n=this;this.dragged=!1;this.options;return e(".ui-unselecting",this.element[0]).each(function(){var i=e.data(this,"selectable-item");i.$element.removeClass("ui-unselecting"),i.unselecting=!1,i.startselected=!1,n._trigger("unselected",t,{unselected:i.element})}),e(".ui-selecting",this.element[0]).each(function(){var i=e.data(this,"selectable-item");i.$element.removeClass("ui-selecting").addClass("ui-selected"),i.selecting=!1,i.selected=!0,i.startselected=!0,n._trigger("selected",t,{selected:i.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.extend(e.ui.selectable,{version:"1.8.23"})}(jQuery),function(e){e.widget("ui.sortable",e.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){e.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){"disabled"===t?(this.options[t]=n,this.widget()[n?"addClass":"removeClass"]("ui-sortable-disabled")):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var i=this;if(this.reverting)return!1;if(this.options.disabled||"static"==this.options.type)return!1;this._refreshItems(t);{var o=null,r=this;e(t.target).parents().each(function(){return e.data(this,i.widgetName+"-item")==r?(o=e(this),!1):void 0})}if(e.data(t.target,i.widgetName+"-item")==r&&(o=e(t.target)),!o)return!1;if(this.options.handle&&!n){var s=!1;if(e(this.options.handle,o).find("*").andSelf().each(function(){this==t.target&&(s=!0)}),!s)return!1}return this.currentItem=o,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,i){var o=this.options,r=this;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",o.cursor)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(var s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,r._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var n=this.options,i=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),i!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}
                                                                               this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var o=this.items.length-1;o>=0;o--){var r=this.items[o],s=r.item[0],a=this._intersectsWithPointer(r);if(a&&s!=this.currentItem[0]&&this.placeholder[1==a?"next":"prev"]()[0]!=s&&!e.ui.contains(this.placeholder[0],s)&&("semi-dynamic"==this.options.type?!e.ui.contains(this.element[0],s):!0)){if(this.direction=1==a?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var i=this,o=i.placeholder.offset();i.reverting=!0,e(this.helper).animate({left:o.left-this.offset.parent.left-i.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:o.top-this.offset.parent.top-i.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){i._clear(t)})}else this._clear(t,n);return!1}},cancel:function(){var t=this;if(this.dragging){this._mouseUp({target:null}),"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("deactivate",null,t._uiHash(this)),this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",null,t._uiHash(this)),this.containers[n].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);n&&i.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!i.length&&t.key&&i.push(t.key+"="),i.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},n.each(function(){i.push(e(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,i=this.positionAbs.top,o=i+this.helperProportions.height,r=e.left,s=r+e.width,a=e.top,l=a+e.height,c=this.offset.click.top,d=this.offset.click.left,u=i+c>a&&l>i+c&&t+d>r&&s>t+d;return"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?u:r<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<s&&a<i+this.helperProportions.height/2&&o-this.helperProportions.height/2<l},_intersectsWithPointer:function(t){var n="x"===this.options.axis||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),i="y"===this.options.axis||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=n&&i,r=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return o?this.floating?s&&"right"==s||"down"==r?2:1:r&&("down"==r?2:1):!1},_intersectsWithSides:function(t){var n=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),o=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return this.floating&&r?"right"==r&&i||"left"==r&&!i:o&&("down"==o&&n||"up"==o&&!n)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!=e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!=e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n=[],i=[],o=this._connectWith();if(o&&t)for(var r=o.length-1;r>=0;r--)for(var s=e(o[r]),a=s.length-1;a>=0;a--){var l=e.data(s[a],this.widgetName);l&&l!=this&&!l.options.disabled&&i.push([e.isFunction(l.options.items)?l.options.items.call(l.element):e(l.options.items,l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),l])
                                                                             }i.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var r=i.length-1;r>=0;r--)i[r][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){for(var e=this.currentItem.find(":data("+this.widgetName+"-item)"),t=0;t<this.items.length;t++)for(var n=0;n<e.length;n++)e[n]==this.items[t].item[0]&&this.items.splice(t,1)},_refreshItems:function(t){this.items=[],this.containers=[this];var n=this.items,i=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],o=this._connectWith();if(o&&this.ready)for(var r=o.length-1;r>=0;r--)for(var s=e(o[r]),a=s.length-1;a>=0;a--){var l=e.data(s[a],this.widgetName);l&&l!=this&&!l.options.disabled&&(i.push([e.isFunction(l.options.items)?l.options.items.call(l.element[0],t,{item:this.currentItem}):e(l.options.items,l.element),l]),this.containers.push(l))}for(var r=i.length-1;r>=0;r--)for(var c=i[r][1],d=i[r][0],a=0,u=d.length;u>a;a++){var h=e(d[a]);h.data(this.widgetName+"-item",c),n.push({item:h,instance:c,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var n=this.items.length-1;n>=0;n--){var i=this.items[n];if(i.instance==this.currentContainer||!this.currentContainer||i.item[0]==this.currentItem[0]){var o=this.options.toleranceElement?e(this.options.toleranceElement,i.item):i.item;t||(i.width=o.outerWidth(),i.height=o.outerHeight());var r=o.offset();i.left=r.left,i.top=r.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var n=this.containers.length-1;n>=0;n--){var r=this.containers[n].element.offset();this.containers[n].containerCache.left=r.left,this.containers[n].containerCache.top=r.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()}return this},_createPlaceholder:function(t){var n=t||this,i=n.options;if(!i.placeholder||i.placeholder.constructor==String){var o=i.placeholder;i.placeholder={element:function(){var t=e(document.createElement(n.currentItem[0].nodeName)).addClass(o||n.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return o||(t.style.visibility="hidden"),t},update:function(e,t){(!o||i.forcePlaceholderSize)&&(t.height()||t.height(n.currentItem.innerHeight()-parseInt(n.currentItem.css("paddingTop")||0,10)-parseInt(n.currentItem.css("paddingBottom")||0,10)),t.width()||t.width(n.currentItem.innerWidth()-parseInt(n.currentItem.css("paddingLeft")||0,10)-parseInt(n.currentItem.css("paddingRight")||0,10)))}}}n.placeholder=e(i.placeholder.element.call(n.element,n.currentItem)),n.currentItem.after(n.placeholder),i.placeholder.update(n,n.placeholder)},_contactContainers:function(t){for(var n=null,i=null,o=this.containers.length-1;o>=0;o--)if(!e.ui.contains(this.currentItem[0],this.containers[o].element[0]))if(this._intersectsWith(this.containers[o].containerCache)){if(n&&e.ui.contains(this.containers[o].element[0],n.element[0]))continue;n=this.containers[o],i=o}else this.containers[o].containerCache.over&&(this.containers[o]._trigger("out",t,this._uiHash(this)),this.containers[o].containerCache.over=0);if(n)if(1===this.containers.length)this.containers[i]._trigger("over",t,this._uiHash(this)),this.containers[i].containerCache.over=1;else if(this.currentContainer!=this.containers[i]){for(var r=1e4,s=null,a=this.positionAbs[this.containers[i].floating?"left":"top"],l=this.items.length-1;l>=0;l--)if(e.ui.contains(this.containers[i].element[0],this.items[l].item[0])){var c=this.containers[i].floating?this.items[l].item.offset().left:this.items[l].item.offset().top;Math.abs(c-a)<r&&(r=Math.abs(c-a),s=this.items[l],this.direction=c-a>0?"down":"up")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[i],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[i].element,!0),this._trigger("change",t,this._uiHash()),this.containers[i]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[i]._trigger("over",t,this._uiHash(this)),this.containers[i].containerCache.over=1}},_createHelper:function(t){var n=this.options,i=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):"clone"==n.helper?this.currentItem.clone():this.currentItem;return i.parents("body").length||e("parent"!=n.appendTo?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(""==i[0].style.width||n.forceHelperSize)&&i.width(this.currentItem.width()),(""==i[0].style.height||n.forceHelperSize)&&i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&e.browser.msie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;if("parent"==t.containment&&(t.containment=this.helper[0].parentNode),("document"==t.containment||"window"==t.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"==t.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"==t.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),!/^(document|window|parent)$/.test(t.containment)){var n=e(t.containment)[0],i=e(t.containment).offset(),o="hidden"!=e(n).css("overflow");this.containment=[i.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0)-this.margins.top,i.left+(o?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(o?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,n){n||(n=this.position);var i="absolute"==t?1:-1,o=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),r=/(html|body)/i.test(o[0].tagName);return{top:n.top+this.offset.relative.top*i+this.offset.parent.top*i-(e.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollTop():r?0:o.scrollTop())*i),left:n.left+this.offset.relative.left*i+this.offset.parent.left*i-(e.browser.safari&&"fixed"==this.cssPosition?0:("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():r?0:o.scrollLeft())*i)}},_generatePosition:function(t){var n=this.options,i="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(i[0].tagName);"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset());var r=t.pageX,s=t.pageY;if(this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(s=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(s=this.containment[3]+this.offset.click.top)),n.grid)){var a=this.originalPageY+Math.round((s-this.originalPageY)/n.grid[1])*n.grid[1];
                                                                               s=this.containment?a-this.offset.click.top<this.containment[1]||a-this.offset.click.top>this.containment[3]?a-this.offset.click.top<this.containment[1]?a+n.grid[1]:a-n.grid[1]:a:a;var l=this.originalPageX+Math.round((r-this.originalPageX)/n.grid[0])*n.grid[0];r=this.containment?l-this.offset.click.left<this.containment[0]||l-this.offset.click.left>this.containment[2]?l-this.offset.click.left<this.containment[0]?l+n.grid[0]:l-n.grid[0]:l:l}return{top:s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(e.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollTop():o?0:i.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(e.browser.safari&&"fixed"==this.cssPosition?0:"fixed"==this.cssPosition?-this.scrollParent.scrollLeft():o?0:i.scrollLeft())}},_rearrange:function(e,t,n,i){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var o=this,r=this.counter;window.setTimeout(function(){r==o.counter&&o.refreshPositions(!i)},0)},_clear:function(t,n){this.reverting=!1;var i=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]==this.currentItem[0]){for(var o in this._storedCSS)("auto"==this._storedCSS[o]||"static"==this._storedCSS[o])&&(this._storedCSS[o]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();if(this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||n||i.push(function(e){this._trigger("update",e,this._uiHash())}),!e.ui.contains(this.element[0],this.currentItem[0])){n||i.push(function(e){this._trigger("remove",e,this._uiHash())});for(var o=this.containers.length-1;o>=0;o--)e.ui.contains(this.containers[o].element[0],this.currentItem[0])&&!n&&(i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.containers[o])),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.containers[o])))}for(var o=this.containers.length-1;o>=0;o--)n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[o])),this.containers[o].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[o])),this.containers[o].containerCache.over=0);if(this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(var o=0;o<i.length;o++)i[o].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null,!n){for(var o=0;o<i.length;o++)i[o].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}}),e.extend(e.ui.sortable,{version:"1.8.23"})}(jQuery),function(e,t){function n(){return++o}function i(){return++r}var o=0,r=0;e.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(e,t){if("selected"==e){if(this.options.collapsible&&t==this.options.selected)return;this.select(t)}else this.options[e]=t,this._tabify()},_tabId:function(e){return e.title&&e.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+n()},_sanitizeSelector:function(e){return e.replace(/:/g,"\\:")},_cookie:function(){var t=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+i());return e.cookie.apply(null,[t].concat(e.makeArray(arguments)))},_ui:function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var t=e(this);t.html(t.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){function i(t,n){t.css("display",""),!e.support.opacity&&n.opacity&&t[0].style.removeAttribute("filter")}var o=this,r=this.options,s=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=e(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return e("a",this)[0]}),this.panels=e([]),this.anchors.each(function(t,n){var i,a=e(n).attr("href"),l=a.split("#")[0];if(l&&(l===location.toString().split("#")[0]||(i=e("base")[0])&&l===i.href)&&(a=n.hash,n.href=a),s.test(a))o.panels=o.panels.add(o.element.find(o._sanitizeSelector(a)));else if(a&&"#"!==a){e.data(n,"href.tabs",a),e.data(n,"load.tabs",a.replace(/#.*$/,""));var c=o._tabId(n);n.href="#"+c;var d=o.element.find("#"+c);d.length||(d=e(r.panelTemplate).attr("id",c).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(o.panels[t-1]||o.list),d.data("destroy.tabs",!0)),o.panels=o.panels.add(d)}else r.disabled.push(t)}),n?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),r.selected===t?(location.hash&&this.anchors.each(function(e,t){return t.hash==location.hash?(r.selected=e,!1):void 0}),"number"!=typeof r.selected&&r.cookie&&(r.selected=parseInt(o._cookie(),10)),"number"!=typeof r.selected&&this.lis.filter(".ui-tabs-selected").length&&(r.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),r.selected=r.selected||(this.lis.length?0:-1)):null===r.selected&&(r.selected=-1),r.selected=r.selected>=0&&this.anchors[r.selected]||r.selected<0?r.selected:0,r.disabled=e.unique(r.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"),function(e){return o.lis.index(e)}))).sort(),-1!=e.inArray(r.selected,r.disabled)&&r.disabled.splice(e.inArray(r.selected,r.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),r.selected>=0&&this.anchors.length&&(o.element.find(o._sanitizeSelector(o.anchors[r.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(r.selected).addClass("ui-tabs-selected ui-state-active"),o.element.queue("tabs",function(){o._trigger("show",null,o._ui(o.anchors[r.selected],o.element.find(o._sanitizeSelector(o.anchors[r.selected].hash))[0]))}),this.load(r.selected)),e(window).bind("unload",function(){o.lis.add(o.anchors).unbind(".tabs"),o.lis=o.anchors=o.panels=null})):r.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[r.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),r.cookie&&this._cookie(r.selected,r.cookie);for(var a,l=0;a=this.lis[l];l++)e(a)[-1==e.inArray(l,r.disabled)||e(a).hasClass("ui-tabs-selected")?"removeClass":"addClass"]("ui-state-disabled");if(r.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs"),"mouseover"!==r.event){var c=function(e,t){t.is(":not(.ui-state-disabled)")&&t.addClass("ui-state-"+e)},d=function(e,t){t.removeClass("ui-state-"+e)};this.lis.bind("mouseover.tabs",function(){c("hover",e(this))}),this.lis.bind("mouseout.tabs",function(){d("hover",e(this))}),this.anchors.bind("focus.tabs",function(){c("focus",e(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){d("focus",e(this).closest("li"))})}var u,h;r.fx&&(e.isArray(r.fx)?(u=r.fx[0],h=r.fx[1]):u=h=r.fx);var f=h?function(t,n){e(t).closest("li").addClass("ui-tabs-selected ui-state-active"),n.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){i(n,h),o._trigger("show",null,o._ui(t,n[0]))})}:function(t,n){e(t).closest("li").addClass("ui-tabs-selected ui-state-active"),n.removeClass("ui-tabs-hide"),o._trigger("show",null,o._ui(t,n[0]))},p=u?function(e,t){t.animate(u,u.duration||"normal",function(){o.lis.removeClass("ui-tabs-selected ui-state-active"),t.addClass("ui-tabs-hide"),i(t,u),o.element.dequeue("tabs")})}:function(e,t){o.lis.removeClass("ui-tabs-selected ui-state-active"),t.addClass("ui-tabs-hide"),o.element.dequeue("tabs")};this.anchors.bind(r.event+".tabs",function(){var t=this,n=e(t).closest("li"),i=o.panels.filter(":not(.ui-tabs-hide)"),s=o.element.find(o._sanitizeSelector(t.hash));if(n.hasClass("ui-tabs-selected")&&!r.collapsible||n.hasClass("ui-state-disabled")||n.hasClass("ui-state-processing")||o.panels.filter(":animated").length||o._trigger("select",null,o._ui(this,s[0]))===!1)return this.blur(),!1;if(r.selected=o.anchors.index(this),o.abort(),r.collapsible){if(n.hasClass("ui-tabs-selected"))return r.selected=-1,r.cookie&&o._cookie(r.selected,r.cookie),o.element.queue("tabs",function(){p(t,i)}).dequeue("tabs"),this.blur(),!1;if(!i.length)return r.cookie&&o._cookie(r.selected,r.cookie),o.element.queue("tabs",function(){f(t,s)}),o.load(o.anchors.index(this)),this.blur(),!1}
                                                                               if(r.cookie&&o._cookie(r.selected,r.cookie),!s.length)throw"jQuery UI Tabs: Mismatching fragment identifier.";i.length&&o.element.queue("tabs",function(){p(t,i)}),o.element.queue("tabs",function(){f(t,s)}),o.load(o.anchors.index(this)),e.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},destroy:function(){var t=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var t=e.data(this,"href.tabs");t&&(this.href=t);var n=e(this).unbind(".tabs");e.each(["href","load","cache"],function(e,t){n.removeData(t+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){e.data(this,"destroy.tabs")?e(this).remove():e(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),t.cookie&&this._cookie(null,t.cookie),this},add:function(n,i,o){o===t&&(o=this.anchors.length);var r=this,s=this.options,a=e(s.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,i)),l=n.indexOf("#")?this._tabId(e("a",a)[0]):n.replace("#","");a.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var c=r.element.find("#"+l);return c.length||(c=e(s.panelTemplate).attr("id",l).data("destroy.tabs",!0)),c.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),o>=this.lis.length?(a.appendTo(this.list),c.appendTo(this.list[0].parentNode)):(a.insertBefore(this.lis[o]),c.insertBefore(this.panels[o])),s.disabled=e.map(s.disabled,function(e){return e>=o?++e:e}),this._tabify(),1==this.anchors.length&&(s.selected=0,a.addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){r._trigger("show",null,r._ui(r.anchors[0],r.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[o],this.panels[o])),this},remove:function(t){t=this._getIndex(t);var n=this.options,i=this.lis.eq(t).remove(),o=this.panels.eq(t).remove();return i.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(t+(t+1<this.anchors.length?1:-1)),n.disabled=e.map(e.grep(n.disabled,function(e){return e!=t}),function(e){return e>=t?--e:e}),this._tabify(),this._trigger("remove",null,this._ui(i.find("a")[0],o[0])),this},enable:function(t){t=this._getIndex(t);var n=this.options;if(-1!=e.inArray(t,n.disabled))return this.lis.eq(t).removeClass("ui-state-disabled"),n.disabled=e.grep(n.disabled,function(e){return e!=t}),this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t])),this},disable:function(e){e=this._getIndex(e);var t=this.options;return e!=t.selected&&(this.lis.eq(e).addClass("ui-state-disabled"),t.disabled.push(e),t.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[e],this.panels[e]))),this},select:function(e){if(e=this._getIndex(e),-1==e){if(!this.options.collapsible||-1==this.options.selected)return this;e=this.options.selected}return this.anchors.eq(e).trigger(this.options.event+".tabs"),this},load:function(t){t=this._getIndex(t);var n=this,i=this.options,o=this.anchors.eq(t)[0],r=e.data(o,"load.tabs");if(this.abort(),!r||0!==this.element.queue("tabs").length&&e.data(o,"cache.tabs"))return this.element.dequeue("tabs"),void 0;if(this.lis.eq(t).addClass("ui-state-processing"),i.spinner){var s=e("span",o);s.data("label.tabs",s.html()).html(i.spinner)}return this.xhr=e.ajax(e.extend({},i.ajaxOptions,{url:r,success:function(r,s){n.element.find(n._sanitizeSelector(o.hash)).html(r),n._cleanup(),i.cache&&e.data(o,"cache.tabs",!0),n._trigger("load",null,n._ui(n.anchors[t],n.panels[t]));try{i.ajaxOptions.success(r,s)}catch(a){}},error:function(e,r){n._cleanup(),n._trigger("load",null,n._ui(n.anchors[t],n.panels[t]));try{i.ajaxOptions.error(e,r,t,o)}catch(s){}}})),n.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(e,t){return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs",t),this},length:function(){return this.anchors.length}}),e.extend(e.ui.tabs,{version:"1.8.20"}),e.extend(e.ui.tabs.prototype,{rotation:null,rotate:function(e,t){var n=this,i=this.options,o=n._rotate||(n._rotate=function(t){clearTimeout(n.rotation),n.rotation=setTimeout(function(){var e=i.selected;n.select(++e<n.anchors.length?e:0)},e),t&&t.stopPropagation()}),r=n._unrotate||(n._unrotate=t?function(){o()}:function(e){e.clientX&&n.rotate(null)});return e?(this.element.bind("tabsshow",o),this.anchors.bind(i.event+".tabs",r),o()):(clearTimeout(n.rotation),this.element.unbind("tabsshow",o),this.anchors.unbind(i.event+".tabs",r),delete this._rotate,delete this._unrotate),this}})}(jQuery),function(e){function t(){this.callbacks={}}var n=getComputedStyle||currentStyle,i={top:"px",bottom:"px",left:"px",right:"px",width:"px",height:"px","font-size":"px",margin:"px","margin-top":"px","margin-bottom":"px","margin-left":"px","margin-right":"px",padding:"px","padding-top":"px","padding-bottom":"px","padding-left":"px","padding-right":"px"};e.move=function(e){return new Move(move.select(e))},e.move.version="0.0.3",move.defaults={duration:500},move.ease={"in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"},move.select=function(e){return"string"!=typeof e?e:document.getElementById(e)||document.querySelectorAll(e)[0]},t.prototype.on=function(e,t){return(this.callbacks[e]=this.callbacks[e]||[]).push(t),this},t.prototype.emit=function(e){var t,n=Array.prototype.slice.call(arguments,1),i=this.callbacks[e];if(i){t=i.length;for(var o=0;t>o;++o)i[o].apply(this,n)}return this},e.Move=function o(e){return this instanceof o?(t.call(this),this.el=e,this._props={},this._rotate=0,this._transitionProps=[],this._transforms=[],this.duration(move.defaults.duration),void 0):new o(e)},Move.prototype=new t,Move.prototype.constructor=Move,Move.prototype.transform=function(e){return this._transforms.push(e),this},Move.prototype.skew=function(e,t){return t=t||0,this.transform("skew("+e+"deg, "+t+"deg)")},Move.prototype.skewX=function(e){return this.transform("skewX("+e+"deg)")},Move.prototype.skewY=function(e){return this.transform("skewY("+e+"deg)")},Move.prototype.translate=Move.prototype.to=function(e,t){return t=t||0,this.transform("translate("+e+"px, "+t+"px)")},Move.prototype.translateX=Move.prototype.x=function(e){return this.transform("translateX("+e+"px)")},Move.prototype.translateY=Move.prototype.y=function(e){return this.transform("translateY("+e+"px)")},Move.prototype.scale=function(e,t){return t=null==t?e:t,this.transform("scale("+e+", "+t+")")},Move.prototype.scaleX=function(e){return this.transform("scaleX("+e+")")},Move.prototype.scaleY=function(e){return this.transform("scaleY("+e+")")},Move.prototype.rotate=function(e){return this.transform("rotate("+e+"deg)")},Move.prototype.ease=function(e){return e=move.ease[e]||e||"ease",this.setVendorProperty("transition-timing-function",e)},Move.prototype.duration=function(e){return e=this._duration="string"==typeof e?1e3*parseFloat(e):e,this.setVendorProperty("transition-duration",e+"ms")},Move.prototype.delay=function(e){return e="string"==typeof e?1e3*parseFloat(e):e,this.setVendorProperty("transition-delay",e+"ms")},Move.prototype.setProperty=function(e,t){return this._props[e]=t,this},Move.prototype.setVendorProperty=function(e,t){return this.setProperty("-webkit-"+e,t),this.setProperty("-moz-"+e,t),this.setProperty("-ms-"+e,t),this.setProperty("-o-"+e,t),this},Move.prototype.set=function(e,t){return this.transition(e),"number"==typeof t&&i[e]&&(t+=i[e]),this._props[e]=t,this},Move.prototype.add=function(e,t){var n=this;return this.on("start",function(){var i=parseInt(n.current(e),10);n.set(e,i+t+"px")})},Move.prototype.sub=function(e,t){var n=this;return this.on("start",function(){var i=parseInt(n.current(e),10);n.set(e,i-t+"px")})},Move.prototype.current=function(e){return n(this.el).getPropertyValue(e)},Move.prototype.transition=function(e){return this._transitionProps.indexOf(e)?(this._transitionProps.push(e),this):this},Move.prototype.applyProperties=function(){var e=this._props,t=this.el;for(var n in e)e.hasOwnProperty(n)&&t.style.setProperty(n,e[n],"");return this},Move.prototype.move=Move.prototype.select=function(e){return this.el=move.select(e),this},Move.prototype.then=function(e){if(e instanceof Move)this.on("end",function(){e.end()});else{if("function"!=typeof e){var t=new Move(this.el);return t._transforms=this._transforms.slice(0),this.then(t),t.parent=this,t}this.on("end",e)}return this},Move.prototype.pop=function(){return this.parent},Move.prototype.end=function(e){var t=this;return this.emit("start"),this._transforms.length&&this.setVendorProperty("transform",this._transforms.join(" ")),this.setVendorProperty("transition-properties",this._transitionProps.join(", ")),this.applyProperties(),e&&this.then(e),setTimeout(function(){t.emit("end")},this._duration),this}}(this),function(e){function t(t){t=t.split(")");for(var n,i,r,s,a,l,c,d,u,h=e.trim,f=t.length-1,p=1,m=0,g=0,y=1,v=0,b=0;f--;){switch(n=t[f].split("("),i=h(n[0]),r=n[1],s=a=l=c=0,i){case"translateX":v+=parseInt(r,10);continue;case"translateY":b+=parseInt(r,10);continue;case"translate":r=r.split(","),v+=parseInt(r[0],10),b+=parseInt(r[1]||0,10);continue;case"rotate":r=o(r),s=Math.cos(r),a=Math.sin(r),l=-Math.sin(r),c=Math.cos(r);break;case"scaleX":s=r,c=1;break;case"scaleY":s=1,c=r;break;case"scale":r=r.split(","),s=r[0],c=r.length>1?r[1]:r[0];break;case"skewX":s=c=1,l=Math.tan(o(r));
                                                                               break;case"skewY":s=c=1,a=Math.tan(o(r));break;case"skew":s=c=1,r=r.split(","),l=Math.tan(o(r[0])),a=Math.tan(o(r[1]||0));break;case"matrix":r=r.split(","),s=+r[0],a=+r[1],l=+r[2],c=+r[3],v+=parseInt(r[4],10),b+=parseInt(r[5],10)}d=p*s+m*l,m=p*a+m*c,u=g*s+y*l,y=g*a+y*c,p=d,g=u}return[p,m,g,y,v,b]}function n(e){var t,n,i,o=e[0],r=e[1],s=e[2],a=e[3];return o*a-r*s?(t=Math.sqrt(o*o+r*r),o/=t,r/=t,i=o*s+r*a,s-=o*i,a-=r*i,n=Math.sqrt(s*s+a*a),s/=n,a/=n,i/=n,r*s>o*a&&(o=-o,r=-r,i=-i,t=-t)):r=o=t=n=i=0,{translate:[+e[4],+e[5]],rotate:Math.atan2(r,o),scale:[t,n],skew:[i,0]}}function i(t){t=t.split(")");for(var n,i,r=[0,0],s=0,a=[1,1],l=[0,0],c=t.length-1,d=e.trim;c--;)switch(n=t[c].split("("),i=n[1],d(n[0])){case"translateX":r[0]+=parseInt(i,10);break;case"translateY":r[1]+=parseInt(i,10);break;case"translate":i=i.split(","),r[0]+=parseInt(i[0],10),r[1]+=parseInt(i[1]||0,10);break;case"rotate":s+=o(i);break;case"scaleX":a[0]*=i;case"scaleY":a[1]*=i;case"scale":i=i.split(","),a[0]*=i[0],a[1]*=i.length>1?i[1]:i[0];break;case"skewX":l[0]+=o(i);break;case"skewY":l[1]+=o(i);break;case"skew":i=i.split(","),l[0]+=o(i[0]),l[1]+=o(i[1]||"0")}return{translate:r,rotate:s,scale:a,skew:l}}function o(e){return~e.indexOf("deg")?parseInt(e,10)*(2*Math.PI/360):~e.indexOf("grad")?parseInt(e,10)*(Math.PI/200):parseFloat(e)}function r(e){return e=/\(([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(e),[e[1],e[2],e[3],e[4],e[5],e[6]]}for(var s,a,l,c,d=document.createElement("div"),u=d.style,h="transform",f="Transform",p=["O"+f,"ms"+f,"Webkit"+f,"Moz"+f,h],m=p.length,g=/Matrix([^)]*)/;m--;)p[m]in u&&(e.support[h]=s=p[m]);s||(e.support.matrixFilter=a=""===u.filter),d=u=null,e.cssNumber[h]=!0,s&&s!=h?(e.cssProps[h]=s,s=="Moz"+f?l={get:function(t,n){return n?e.css(t,s).split("px").join(""):t.style[s]},set:function(e,t){e.style[s]=/matrix\([^)p]*\)/.test(t)?t.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,"matrix$1$2px,$3px"):t}}:/^1\.[0-5](?:\.|$)/.test(e.fn.jquery)&&(l={get:function(t,n){return n?e.css(t,s.replace(/^ms/,"Ms")):t.style[s]}})):a&&(l={get:function(e,t){var n,i=t&&e.currentStyle?e.currentStyle:e.style;return i&&g.test(i.filter)?(n=RegExp.$1.split(","),n=[n[0].split("=")[1],n[2].split("=")[1],n[1].split("=")[1],n[3].split("=")[1]]):n=[1,0,0,1],n[4]=i?i.left:0,n[5]=i?i.top:0,"matrix("+n+")"
                                                                             },set:function(n,i,o){var r,s,a,l,c=n.style;o||(c.zoom=1),i=t(i),(!o||o.M)&&(s=["Matrix(M11="+i[0],"M12="+i[2],"M21="+i[1],"M22="+i[3],"SizingMethod='auto expand'"].join(),a=(r=n.currentStyle)&&r.filter||c.filter||"",c.filter=g.test(a)?a.replace(g,s):a+" progid:DXImageTransform.Microsoft."+s+")",(l=e.transform.centerOrigin)&&(c["margin"==l?"marginLeft":"left"]=-(n.offsetWidth/2)+n.clientWidth/2+"px",c["margin"==l?"marginTop":"top"]=-(n.offsetHeight/2)+n.clientHeight/2+"px")),(!o||o.T)&&(c.left=i[4]+"px",c.top=i[5]+"px")}}),l&&(e.cssHooks[h]=l),c=l&&l.get||e.css,e.fx.step.transform=function(e){var o,d,u,h,f,p,m,g=e.elem,y=e.start,v=e.end,b=e.pos,w=!1,C=!1;if(u=h=f=p="",!y||"string"==typeof y){y||(y=c(g,s)),a&&(g.style.zoom=1),o=v.split(y),2==o.length&&(v=o.join(""),e.origin=y,y="none"),e.start=y="none"==y?{translate:[0,0],rotate:0,scale:[1,1],skew:[0,0]}:n(r(y)),e.end=v=~v.indexOf("matrix")?n(t(v)):i(v);for(m in y)("rotate"==m?y[m]==v[m]:y[m][0]==v[m][0]&&y[m][1]==v[m][1])&&delete y[m]}y.translate&&(u=" translate("+(y.translate[0]+(v.translate[0]-y.translate[0])*b+.5|0)+"px,"+(y.translate[1]+(v.translate[1]-y.translate[1])*b+.5|0)+"px)",w=!0),void 0!=y.rotate&&(h=" rotate("+(y.rotate+(v.rotate-y.rotate)*b)+"rad)",C=!0),y.scale&&(f=" scale("+(y.scale[0]+(v.scale[0]-y.scale[0])*b)+","+(y.scale[1]+(v.scale[1]-y.scale[1])*b)+")",C=!0),y.skew&&(p=" skew("+(y.skew[0]+(v.skew[0]-y.skew[0])*b)+"rad,"+(y.skew[1]+(v.skew[1]-y.skew[1])*b)+"rad)",C=!0),d=e.origin?e.origin+u+p+f+h:u+h+f+p,l&&l.set?l.set(g,d,{M:C,T:w}):g.style[s]=d},e.transform={centerOrigin:"margin"}}(jQuery),ty.fields={},ty.fieldsRun=function(e,t){for(var n in ty.fields)ty.fields.hasOwnProperty(n)&&"function"==typeof ty.fields[n]&&ty.fields[n](e,t)},ty.onboarding={init:function(e){guiders.createGuider(e).show()},show:function(e){var t=guiders._guiders[guiders._currentGuiderID];t&&t.highlight&&guiders._dehighlightElement(t.highlight),void 0!=guiders._guiders[e]?guiders.show(e):(ty.onboarding.boxes[e].id=e,guiders.createGuider(ty.onboarding.boxes[e]).show())},next:function(){var e=guiders._guiders[guiders._currentGuiderID];if("undefined"!=typeof e){var t=e.next||null;void 0==guiders._guiders[t]&&(ty.onboarding.boxes[t].id=t,guiders.createGuider(ty.onboarding.boxes[t])),guiders.next()}},destroyAll:function(){guiders.hideAll(),guiders._guiders={},$(".guider").remove(),$("#guider_transparent_overlay").remove(),$("#guider_overlay").remove(),$(".onboarding_circle").remove()},autoShow:function(){var e=this;this.afterShow&&this.afterShow(this),void 0!=this.nextTimeout&&setTimeout(function(){ty.onboarding.show(e.next)},this.nextTimeout)},circles:{},circle:function(e){var t=$('<div class="onboarding_circle"></div>');t.appendTo("body");var n=$(e.attachTo).outerWidth();$(e.attachTo).outerHeight()>n&&(n=$(e.attachTo).outerHeight()),n+=25,e.size&&(n=n*parseFloat(e.size)/100);var i="0";return e.offset&&(i=e.offset),t.height(n).width(n),t.position({at:"center center",my:"center center",offset:i,of:e.attachTo}),e.el=t,e.afterShow&&e.afterShow(e),t}},guiders._defaultSettings={attachTo:null,autoFocus:!0,buttons:[],buttonCustomHTML:"",classString:"",highlight:null,isHashable:!0,offset:{top:null,left:null},onShow:ty.onboarding.autoShow,onHide:null,overlay:!1,position:0,title:"Sample title goes here",width:300,xButton:!1},guiders._buttonElement="<span></span>",guiders._htmlSkeleton=["<div class='guider onboarding'>","  <div class='guider_content'>","    <h1 class='guider_title'></h1>","    <div class='guider_close'></div>","    <p class='guider_description'></p>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join(""),function(e){e.fn.uploadToInput=function(t){return this.each(function(){var n=e(this),i=Math.floor(999999999*Math.random());n.attr("dir","rtl").focus(function(){n.attr("dir","ltr")}).blur(function(){n.attr("dir","rtl")});var o=e('<form id="upload-'+t+i+'" action="/api/upload/'+t+'" enctype="multipart/form-data" method="post"><input type="file" class="upload noUpdate file" name="upload" multiple="multiple"><input type="submit" value="Upload" class="upload noUpdate" style="display:none;"></form>'),r=function(){var r=e('<iframe id="upload_target-'+t+i+'" name="upload_target-'+t+i+'" style="width:0;height:0;border:0px solid #fff;"></iframe>');o.append(r),o.find("iframe").load(function(){var t=e(this).contents().find("#url").text();null!=t&&""!=t&&n.val(t).trigger("change")})};o.insertAfter(n),o.bind("submit",function(){document.getElementById("upload-"+t+i).target="upload_target-"+t+i}),o.find("input.file").change(function(){""!=e(this).val()&&(0==e("#upload_target-"+t+i).length&&r(),e("#upload-"+t+i).submit())})})}}(jQuery),function(e){var t={init:function(t,n){return this.each(function(){function i(e){if(e&&e.length>1){var t=e.length,n=_.without(e,"anon"),i=t-n.length;e=_.uniq(e),a.text(e.length+i+" active users")}else a.text("1 active user")}function o(t){var n=e("<div></div>").addClass("user");msginfo=e("<div></div>").addClass("chat-msginfo").appendTo(n),t.user&&e("<span></span>").addClass("chat-nick").text(t).appendTo(msginfo),n.appendTo(c)}var r=e("<div/>",{"class":"field field-chatroom chat",id:"chatroom-"+t});e(this).append(r);var s=e("<div/>",{"class":"chatLog"}),a=(e("<div/>",{"class":"chatUsers"}),e("<div/>",{"class":"usersCount"})),l=e('<div class="formItem"><input class="fieldText" /></div>'),c=e("<div/>",{"class":"userLog"});r.append(s),r.prepend(a),r.append(l);var d=r.height();r.parent().css("overflow","hidden !important"),s.css("height",d-94),ty.realtime.join(t,"chat"),ty.get("chat/message/"+t,function(t){i(t.users),t.users&&e.each(t.users,function(e,t){o(t)}),e.each(t.messages,function(e,t){r.chat("render",t)}),s.scrollTop(s[0].scrollHeight)}),ty.chat={chat:function(t){e("#chatroom-"+t.channel).chat("render",t.message),ty.notification&&t.message&&ty.notification.send("chat",t.message.user,t.message.body)},joinChannel:function(t){t.body=t.message+" joins the channel",i(t.users),e("#chatroom-"+t.channel).chat("render",t)},leaveChannel:function(t){t.body=t.message+" leaves the channel",i(t.users),e("#chatroom-"+t.channel).chat("render",t)},disconnect:function(t){t.body=t.message+" leaves the channel",i(t.users),e("#chatroom-"+t.channel).chat("render",t)}};var u=0;l.find("input").bind("keydown",function(i){if(13==i.which){i.preventDefault();var o=e(this).val();if(o.length>1){var s=!0;n&&(s=!1);var a=localStorage.chat_typed||"";a=a.split("-|_|||_|"),storedTypedCount=a.length,storedTypedCount>=15&&a.pop(),a.unshift(o),localStorage.chat_typed=a.join("-|_|||_|");var l;"/w "==o.substring(0,3)&&(l=_.trim(o.replace("/w ",""))),message={message:{body:o},channel:t,db:s,toUser:l,handler:"chat.chat"},ty.realtime.send(message),r.trigger("newMessage",[message.message]),e(this).val(""),u=0}}else if(38==i.which){var a=localStorage.chat_typed||"";a=a.split("-|_|||_|"),e(this).val(a[u]),u++,u>14&&(u=14)}else if(40==i.which){var a=localStorage.chat_typed||"";a=a.split("-|_|||_|"),e(this).val(a[u]),u--,u>14?u=14:0>u&&(u=0)}})})},close:function(t){this.removeAttr("style"),ty.realtime.leave(t,"chat"),e(this).children(".chat").remove()},render:function(t){function n(e){var t=new Date(e),n=t.getHours(),i=t.getMinutes(),o="AM";return n>12&&(n-=12,o="PM"),10>i&&(i="0"+i),n+":"+i+" "+o}var i=e(this),o=i.children(".chatLog"),r=e("<div></div>").addClass("chatMsg");if(msginfo=e("<div></div>").addClass("chatMsgInfo").appendTo(r),"anon"!=t.user?t.user&&e("<a></a>").addClass("chatNick").attr("href","/user/"+t.user).text(t.user).appendTo(msginfo):e("<span></span>").addClass("chatNick").text(t.user).appendTo(msginfo),t.ct){var s=n(parseInt(t.ct,10));e("<time></time>").addClass("chatTime").text(s).appendTo(msginfo)}var a=e("<span/>",{"class":"chatText",text:t.body});a.appendTo(r),r.appendTo(o),o.scrollTop(o[0].scrollHeight),i.trigger("renderMessage",[t])}};e.fn.chat=function(e){return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)}}(jQuery),ty.UserChat=function(){this.openChats=this.openChats||[]},ty.UserChat.prototype.run=function(e,t){var n=this,i=_.sortBy([ty.user.current.user,e],function(e){return e}),o=i[0],r=i[1];o==r||t||(message={message:e,inviter:ty.user.current.user,channel:"userChat-"+o+"-vsUser-"+r,handler:"chat.invite"},ty.realtime.send(message)),n.openChats.push(e);var s=ty.t("chat/chatDialogTemplate").removeAttr("id");s.dialog({dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:400,width:300,title:"Talking to "+e,open:function(){s.dialog("widget").find(".field").chat("userChat-"+o+"-vsUser-"+r)},close:function(){s.dialog("widget").find(".field").chat("close","userChat-"+o+"-vsUser-"+r),s.dialog("destroy").remove(),n.openChats=_.without(n.openChats,e),delete n}})},ty.UserChat.prototype.init=function(e){-1==this.openChats.indexOf(e)&&this.run(e)},ty.UserChat.prototype.invite=function(e){-1==this.openChats.indexOf(e.inviter)&&this.run(e.inviter,!0)},ty.load("chat/chat",function(){ty.userChat=new ty.UserChat}),ty.dulst={},function(e,t){e.fn.jPlayer=function(n){var i="string"==typeof n,o=Array.prototype.slice.call(arguments,1),r=this;return n=!i&&o.length?e.extend.apply(null,[!0,n].concat(o)):n,i&&"_"===n.charAt(0)?r:(i?this.each(function(){var i=e.data(this,"jPlayer"),s=i&&e.isFunction(i[n])?i[n].apply(i,o):i;return s!==i&&s!==t?(r=s,!1):void 0}):this.each(function(){var t=e.data(this,"jPlayer");t?(t.option(n||{})._init(),t.option(n||{})):e.data(this,"jPlayer",new e.jPlayer(n,this))}),r)},e.jPlayer=function(t,n){if(arguments.length){this.element=e(n),this.options=e.extend(!0,{},this.options,t);var i=this;this.element.bind("remove.jPlayer",function(){i.destroy()}),this._init()}},e.jPlayer.event={ready:"jPlayer_ready",resize:"jPlayer_resize",error:"jPlayer_error",warning:"jPlayer_warning",loadstart:"jPlayer_loadstart",progress:"jPlayer_progress",suspend:"jPlayer_suspend",abort:"jPlayer_abort",emptied:"jPlayer_emptied",stalled:"jPlayer_stalled",play:"jPlayer_play",pause:"jPlayer_pause",loadedmetadata:"jPlayer_loadedmetadata",loadeddata:"jPlayer_loadeddata",waiting:"jPlayer_waiting",playing:"jPlayer_playing",canplay:"jPlayer_canplay",canplaythrough:"jPlayer_canplaythrough",seeking:"jPlayer_seeking",seeked:"jPlayer_seeked",timeupdate:"jPlayer_timeupdate",ended:"jPlayer_ended",ratechange:"jPlayer_ratechange",durationchange:"jPlayer_durationchange",volumechange:"jPlayer_volumechange"},e.jPlayer.htmlEvent=["loadstart","abort","emptied","stalled","loadedmetadata","loadeddata","canplaythrough","ratechange"],e.jPlayer.pause=function(){e.each(e.jPlayer.prototype.instances,function(e,t){
                                                                                 t.data("jPlayer").status.srcSet&&t.jPlayer("pause")})},e.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""},e.jPlayer.convertTime=function(t){t=new Date(1e3*t);var n=t.getUTCHours(),i=t.getUTCMinutes();return t=t.getUTCSeconds(),n=e.jPlayer.timeFormat.padHour&&10>n?"0"+n:n,i=e.jPlayer.timeFormat.padMin&&10>i?"0"+i:i,t=e.jPlayer.timeFormat.padSec&&10>t?"0"+t:t,(e.jPlayer.timeFormat.showHour?n+e.jPlayer.timeFormat.sepHour:"")+(e.jPlayer.timeFormat.showMin?i+e.jPlayer.timeFormat.sepMin:"")+(e.jPlayer.timeFormat.showSec?t+e.jPlayer.timeFormat.sepSec:"")},e.jPlayer.uaMatch=function(e){e=e.toLowerCase();var t=/(opera)(?:.*version)?[ \/]([\w.]+)/,n=/(msie) ([\w.]+)/,i=/(mozilla)(?:.*? rv:([\w.]+))?/;return e=/(webkit)[ \/]([\w.]+)/.exec(e)||t.exec(e)||n.exec(e)||e.indexOf("compatible")<0&&i.exec(e)||[],{browser:e[1]||"",version:e[2]||"0"}},e.jPlayer.browser={};var n=e.jPlayer.uaMatch(navigator.userAgent);n.browser&&(e.jPlayer.browser[n.browser]=!0,e.jPlayer.browser.version=n.version),e.jPlayer.prototype={count:0,version:{script:"2.0.0",needFlash:"2.0.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",preload:"metadata",volume:.8,muted:!1,backgroundColor:"#000000",cssSelectorAncestor:"#jp_interface_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",currentTime:".jp-current-time",duration:".jp-duration"},idPrefix:"jp",errorAlerts:!1,warningAlerts:!1},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0},_status:{volume:t,muted:!1,width:0,height:0},internal:{ready:!1,instance:t,htmlDlyCmdId:t},solution:{html:!0,flash:!0},format:{mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis"',flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"}},_init:function(){var n=this;if(this.element.empty(),this.status=e.extend({},this.status,this._status),this.internal=e.extend({},this.internal),this.formats=[],this.solutions=[],this.require={},this.htmlElement={},this.html={},this.html.audio={},this.html.video={},this.flash={},this.css={},this.css.cs={},this.css.jq={},this.status.volume=this._limitValue(this.options.volume,0,1),this.status.muted=this.options.muted,this.status.width=this.element.css("width"),this.status.height=this.element.css("height"),this.element.css({"background-color":this.options.backgroundColor}),e.each(this.options.supplied.toLowerCase().split(","),function(t,i){var o=i.replace(/^\s+|\s+$/g,"");if(n.format[o]){var r=!1;e.each(n.formats,function(e,t){return o===t?(r=!0,!1):void 0}),r||n.formats.push(o)}}),e.each(this.options.solution.toLowerCase().split(","),function(t,i){var o=i.replace(/^\s+|\s+$/g,"");if(n.solution[o]){var r=!1;e.each(n.solutions,function(e,t){return o===t?(r=!0,!1):void 0}),r||n.solutions.push(o)}}),this.internal.instance="jp_"+this.count,this.instances[this.internal.instance]=this.element,""===this.element.attr("id")&&this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count),this.internal.self=e.extend({},{id:this.element.attr("id"),jq:this.element}),this.internal.audio=e.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:t}),this.internal.video=e.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:t}),this.internal.flash=e.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:t,swf:this.options.swfPath+(""!==this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"Jplayer.swf"}),this.internal.poster=e.extend({},{id:this.options.idPrefix+"_poster_"+this.count,jq:t}),e.each(e.jPlayer.event,function(e,i){n.options[e]!==t&&(n.element.bind(i+".jPlayer",n.options[e]),n.options[e]=t)}),this.htmlElement.poster=document.createElement("img"),this.htmlElement.poster.id=this.internal.poster.id,this.htmlElement.poster.onload=function(){(!n.status.video||n.status.waitForPlay)&&n.internal.poster.jq.show()},this.element.append(this.htmlElement.poster),this.internal.poster.jq=e("#"+this.internal.poster.id),this.internal.poster.jq.css({width:this.status.width,height:this.status.height}),this.internal.poster.jq.hide(),this.require.audio=!1,this.require.video=!1,e.each(this.formats,function(e,t){n.require[n.format[t].media]=!0}),this.html.audio.available=!1,this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType),this.html.video.available=!1,this.require.video&&(this.htmlElement.video=document.createElement("video"),this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType),this.flash.available=this._checkForFlash(10),this.html.canPlay={},this.flash.canPlay={},e.each(this.formats,function(e,t){n.html.canPlay[t]=n.html[n.format[t].media].available&&""!==n.htmlElement[n.format[t].media].canPlayType(n.format[t].codec),n.flash.canPlay[t]=n.format[t].flashCanPlay&&n.flash.available}),this.html.desired=!1,this.flash.desired=!1,e.each(this.solutions,function(t,i){if(0===t)n[i].desired=!0;else{var o=!1,r=!1;e.each(n.formats,function(e,t){n[n.solutions[0]].canPlay[t]&&("video"===n.format[t].media?r=!0:o=!0)}),n[i].desired=n.require.audio&&!o||n.require.video&&!r}}),this.html.support={},this.flash.support={},e.each(this.formats,function(e,t){n.html.support[t]=n.html.canPlay[t]&&n.html.desired,n.flash.support[t]=n.flash.canPlay[t]&&n.flash.desired}),this.html.used=!1,this.flash.used=!1,e.each(this.solutions,function(t,i){e.each(n.formats,function(e,t){return n[i].support[t]?(n[i].used=!0,!1):void 0})}),this.html.used||this.flash.used||this._error({type:e.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:e.jPlayer.errorMsg.NO_SOLUTION,hint:e.jPlayer.errorHint.NO_SOLUTION}),this.html.active=!1,this.html.audio.gate=!1,this.html.video.gate=!1,this.flash.active=!1,this.flash.gate=!1,this.flash.used){var i="id="+escape(this.internal.self.id)+"&vol="+this.status.volume+"&muted="+this.status.muted;if(e.browser.msie&&Number(e.browser.version)<=8){var o='<object id="'+this.internal.flash.id+'"';o+=' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"',o+=' codebase="'+document.URL.substring(0,document.URL.indexOf(":"))+'://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',o+=' type="application/x-shockwave-flash"',o+=' width="0" height="0">',o+="</object>";var r=[];for(r[0]='<param name="movie" value="'+this.internal.flash.swf+'" />',r[1]='<param name="quality" value="high" />',r[2]='<param name="FlashVars" value="'+i+'" />',r[3]='<param name="allowScriptAccess" value="always" />',r[4]='<param name="bgcolor" value="'+this.options.backgroundColor+'" />',i=document.createElement(o),o=0;o<r.length;o++)i.appendChild(document.createElement(r[o]));this.element.append(i)}else r='<embed name="'+this.internal.flash.id+'" id="'+this.internal.flash.id+'" src="'+this.internal.flash.swf+'"',r+=' width="0" height="0" bgcolor="'+this.options.backgroundColor+'"',r+=' quality="high" FlashVars="'+i+'"',r+=' allowScriptAccess="always"',r+=' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />',this.element.append(r);this.internal.flash.jq=e("#"+this.internal.flash.id),this.internal.flash.jq.css({width:"0px",height:"0px"})}this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=e("#"+this.internal.audio.id)),this.html.video.available&&(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=e("#"+this.internal.video.id),this.internal.video.jq.css({width:"0px",height:"0px"}))),this.html.used&&!this.flash.used&&window.setTimeout(function(){n.internal.ready=!0,n.version.flash="n/a",n._trigger(e.jPlayer.event.ready)},100),e.each(this.options.cssSelector,function(e,t){n._cssSelector(e,t)}),this._updateInterface(),this._updateButtons(!1),this._updateVolume(this.status.volume),this._updateMute(this.status.muted),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),e.jPlayer.prototype.count++},destroy:function(){this._resetStatus(),this._updateInterface(),this._seeked(),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(""),this.css.jq.duration.length&&this.css.jq.duration.text(""),this.status.srcSet&&this.pause(),e.each(this.css.jq,function(e,t){t.unbind(".jPlayer")}),this.element.removeData("jPlayer"),this.element.unbind(".jPlayer"),this.element.empty(),this.instances[this.internal.instance]=t},enable:function(){},disable:function(){},_addHtmlEventListeners:function(t,n){var i=this;t.preload=this.options.preload,t.muted=this.options.muted,t.addEventListener("progress",function(){n.gate&&!i.status.waitForLoad&&(i._getHtmlStatus(t),i._updateInterface(),i._trigger(e.jPlayer.event.progress))},!1),t.addEventListener("timeupdate",function(){n.gate&&!i.status.waitForLoad&&(i._getHtmlStatus(t),i._updateInterface(),i._trigger(e.jPlayer.event.timeupdate))},!1),t.addEventListener("durationchange",function(){
                                                                                       n.gate&&!i.status.waitForLoad&&(i.status.duration=this.duration,i._getHtmlStatus(t),i._updateInterface(),i._trigger(e.jPlayer.event.durationchange))},!1),t.addEventListener("play",function(){n.gate&&!i.status.waitForLoad&&(i._updateButtons(!0),i._trigger(e.jPlayer.event.play))},!1),t.addEventListener("playing",function(){n.gate&&!i.status.waitForLoad&&(i._updateButtons(!0),i._seeked(),i._trigger(e.jPlayer.event.playing))},!1),t.addEventListener("pause",function(){n.gate&&!i.status.waitForLoad&&(i._updateButtons(!1),i._trigger(e.jPlayer.event.pause))},!1),t.addEventListener("waiting",function(){n.gate&&!i.status.waitForLoad&&(i._seeking(),i._trigger(e.jPlayer.event.waiting))},!1),t.addEventListener("canplay",function(){n.gate&&!i.status.waitForLoad&&(t.volume=i._volumeFix(i.status.volume),i._trigger(e.jPlayer.event.canplay))},!1),t.addEventListener("seeking",function(){n.gate&&!i.status.waitForLoad&&(i._seeking(),i._trigger(e.jPlayer.event.seeking))},!1),t.addEventListener("seeked",function(){n.gate&&!i.status.waitForLoad&&(i._seeked(),i._trigger(e.jPlayer.event.seeked))},!1),t.addEventListener("suspend",function(){n.gate&&!i.status.waitForLoad&&(i._seeked(),i._trigger(e.jPlayer.event.suspend))},!1),t.addEventListener("ended",function(){n.gate&&!i.status.waitForLoad&&(e.jPlayer.browser.webkit||(i.htmlElement.media.currentTime=0),i.htmlElement.media.pause(),i._updateButtons(!1),i._getHtmlStatus(t,!0),i._updateInterface(),i._trigger(e.jPlayer.event.ended))},!1),t.addEventListener("error",function(){n.gate&&!i.status.waitForLoad&&(i._updateButtons(!1),i._seeked(),i.status.srcSet&&(i.status.waitForLoad=!0,i.status.waitForPlay=!0,i.status.video&&i.internal.video.jq.css({width:"0px",height:"0px"}),i._validString(i.status.media.poster)&&i.internal.poster.jq.show(),i.css.jq.videoPlay.length&&i.css.jq.videoPlay.show(),i._error({type:e.jPlayer.error.URL,context:i.status.src,message:e.jPlayer.errorMsg.URL,hint:e.jPlayer.errorHint.URL})))},!1),e.each(e.jPlayer.htmlEvent,function(o,r){t.addEventListener(this,function(){n.gate&&!i.status.waitForLoad&&i._trigger(e.jPlayer.event[r])},!1)})},_getHtmlStatus:function(e,t){var n=0,i=0,o=0,r=0;n=e.currentTime,i=this.status.duration>0?100*n/this.status.duration:0,"object"==typeof e.seekable&&e.seekable.length>0?(o=this.status.duration>0?100*e.seekable.end(e.seekable.length-1)/this.status.duration:100,r=100*e.currentTime/e.seekable.end(e.seekable.length-1)):(o=100,r=i),t&&(i=r=n=0),this.status.seekPercent=o,this.status.currentPercentRelative=r,this.status.currentPercentAbsolute=i,this.status.currentTime=n},_resetStatus:function(){this.status=e.extend({},this.status,e.jPlayer.prototype.status)},_trigger:function(t,n,i){t=e.Event(t),t.jPlayer={},t.jPlayer.version=e.extend({},this.version),t.jPlayer.status=e.extend(!0,{},this.status),t.jPlayer.html=e.extend(!0,{},this.html),t.jPlayer.flash=e.extend(!0,{},this.flash),n&&(t.jPlayer.error=e.extend({},n)),i&&(t.jPlayer.warning=e.extend({},i)),this.element.trigger(t)},jPlayerFlashEvent:function(t,n){if(t!==e.jPlayer.event.ready||this.internal.ready||(this.internal.ready=!0,this.version.flash=n.version,this.version.needFlash!==this.version.flash&&this._error({type:e.jPlayer.error.VERSION,context:this.version.flash,message:e.jPlayer.errorMsg.VERSION+this.version.flash,hint:e.jPlayer.errorHint.VERSION}),this._trigger(t)),this.flash.gate)switch(t){case e.jPlayer.event.progress:this._getFlashStatus(n),this._updateInterface(),this._trigger(t);break;case e.jPlayer.event.timeupdate:this._getFlashStatus(n),this._updateInterface(),this._trigger(t);break;case e.jPlayer.event.play:this._seeked(),this._updateButtons(!0),this._trigger(t);break;case e.jPlayer.event.pause:this._updateButtons(!1),this._trigger(t);break;case e.jPlayer.event.ended:this._updateButtons(!1),this._trigger(t);break;case e.jPlayer.event.error:this.status.waitForLoad=!0,this.status.waitForPlay=!0,this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._validString(this.status.media.poster)&&this.internal.poster.jq.show(),this.css.jq.videoPlay.length&&this.css.jq.videoPlay.show(),this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media),this._error({type:e.jPlayer.error.URL,context:n.src,message:e.jPlayer.errorMsg.URL,hint:e.jPlayer.errorHint.URL});break;case e.jPlayer.event.seeking:this._seeking(),this._trigger(t);break;case e.jPlayer.event.seeked:this._seeked(),this._trigger(t);break;default:this._trigger(t)}return!1},_getFlashStatus:function(e){this.status.seekPercent=e.seekPercent,this.status.currentPercentRelative=e.currentPercentRelative,this.status.currentPercentAbsolute=e.currentPercentAbsolute,this.status.currentTime=e.currentTime,this.status.duration=e.duration},_updateButtons:function(e){this.status.paused=!e,this.css.jq.play.length&&this.css.jq.pause.length&&(e?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%"),this.css.jq.playBar.length&&this.css.jq.playBar.width(this.status.currentPercentRelative+"%"),this.css.jq.currentTime.length&&this.css.jq.currentTime.text(e.jPlayer.convertTime(this.status.currentTime)),this.css.jq.duration.length&&this.css.jq.duration.text(e.jPlayer.convertTime(this.status.duration))},_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg")},setMedia:function(t){var n=this;this._seeked(),clearTimeout(this.internal.htmlDlyCmdId);var i=this.html.audio.gate,o=this.html.video.gate,r=!1;e.each(this.formats,function(s,a){var l="video"===n.format[a].media;return e.each(n.solutions,function(e,s){if(n[s].support[a]&&n._validString(t[a])){var c="html"===s;return l?c?(n.html.audio.gate=!1,n.html.video.gate=!0,n.flash.gate=!1):(n.html.audio.gate=!1,n.html.video.gate=!1,n.flash.gate=!0):c?(n.html.audio.gate=!0,n.html.video.gate=!1,n.flash.gate=!1):(n.html.audio.gate=!1,n.html.video.gate=!1,n.flash.gate=!0),n.flash.active||n.html.active&&n.flash.gate||i===n.html.audio.gate&&o===n.html.video.gate?n.clearMedia():i!==n.html.audio.gate&&o!==n.html.video.gate&&(n._html_pause(),n.status.video&&n.internal.video.jq.css({width:"0px",height:"0px"}),n._resetStatus()),l?(c?(n._html_setVideo(t),n.html.active=!0,n.flash.active=!1):(n._flash_setVideo(t),n.html.active=!1,n.flash.active=!0),n.css.jq.videoPlay.length&&n.css.jq.videoPlay.show(),n.status.video=!0):(c?(n._html_setAudio(t),n.html.active=!0,n.flash.active=!1):(n._flash_setAudio(t),n.html.active=!1,n.flash.active=!0),n.css.jq.videoPlay.length&&n.css.jq.videoPlay.hide(),n.status.video=!1),r=!0,!1}}),r?!1:void 0}),r?(this._validString(t.poster)?this.htmlElement.poster.src!==t.poster?this.htmlElement.poster.src=t.poster:this.internal.poster.jq.show():this.internal.poster.jq.hide(),this.status.srcSet=!0,this.status.media=e.extend({},t),this._updateButtons(!1),this._updateInterface()):(this.status.srcSet&&!this.status.waitForPlay&&this.pause(),this.html.audio.gate=!1,this.html.video.gate=!1,this.flash.gate=!1,this.html.active=!1,this.flash.active=!1,this._resetStatus(),this._updateInterface(),this._updateButtons(!1),this.internal.poster.jq.hide(),this.html.used&&this.require.video&&this.internal.video.jq.css({width:"0px",height:"0px"}),this.flash.used&&this.internal.flash.jq.css({width:"0px",height:"0px"}),this._error({type:e.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:e.jPlayer.errorMsg.NO_SUPPORT,hint:e.jPlayer.errorHint.NO_SUPPORT}))},clearMedia:function(){this._resetStatus(),this._updateButtons(!1),this.internal.poster.jq.hide(),clearTimeout(this.internal.htmlDlyCmdId),this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},play:function(e){e="number"==typeof e?e:0/0,this.status.srcSet?this.html.active?this._html_play(e):this.flash.active&&this._flash_play(e):this._urlNotSetError("play")},videoPlay:function(){this.play()},pause:function(e){e="number"==typeof e?e:0/0,this.status.srcSet?this.html.active?this._html_pause(e):this.flash.active&&this._flash_pause(e):this._urlNotSetError("pause")},pauseOthers:function(){var t=this;e.each(this.instances,function(e,n){t.element!==n&&n.data("jPlayer").status.srcSet&&n.jPlayer("pause")})},stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(e){e=this._limitValue(e,0,100),this.status.srcSet?this.html.active?this._html_playHead(e):this.flash.active&&this._flash_playHead(e):this._urlNotSetError("playHead")},mute:function(){this.status.muted=!0,this.html.used&&this._html_mute(!0),this.flash.used&&this._flash_mute(!0),this._updateMute(!0),this._updateVolume(0),this._trigger(e.jPlayer.event.volumechange)},unmute:function(){this.status.muted=!1,this.html.used&&this._html_mute(!1),this.flash.used&&this._flash_mute(!1),this._updateMute(!1),this._updateVolume(this.status.volume),this._trigger(e.jPlayer.event.volumechange)},_updateMute:function(e){this.css.jq.mute.length&&this.css.jq.unmute.length&&(e?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(t){t=this._limitValue(t,0,1),this.status.volume=t,this.html.used&&this._html_volume(t),this.flash.used&&this._flash_volume(t),this.status.muted||this._updateVolume(t),this._trigger(e.jPlayer.event.volumechange)},volumeBar:function(e){if(!this.status.muted&&this.css.jq.volumeBar){var t=this.css.jq.volumeBar.offset();e=e.pageX-t.left,t=this.css.jq.volumeBar.width(),this.volume(e/t)}},volumeBarValue:function(e){this.volumeBar(e)},_updateVolume:function(e){this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.width(100*e+"%")},_volumeFix:function(e){var t=.001*Math.random();return e+(.5>e?t:-t)},_cssSelectorAncestor:function(t,n){this.options.cssSelectorAncestor=t,n&&e.each(this.options.cssSelector,function(e,t){self._cssSelector(e,t)})},_cssSelector:function(t,n){var i=this;"string"==typeof n?e.jPlayer.prototype.options.cssSelector[t]?(this.css.jq[t]&&this.css.jq[t].length&&this.css.jq[t].unbind(".jPlayer"),this.options.cssSelector[t]=n,this.css.cs[t]=this.options.cssSelectorAncestor+" "+n,this.css.jq[t]=n?e(this.css.cs[t]):[],this.css.jq[t].length&&this.css.jq[t].bind("click.jPlayer",function(n){return i[t](n),e(this).blur(),!1}),n&&1!==this.css.jq[t].length&&this._warning({type:e.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[t],message:e.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[t].length+" found for "+t+" method.",hint:e.jPlayer.warningHint.CSS_SELECTOR_COUNT})):this._warning({type:e.jPlayer.warning.CSS_SELECTOR_METHOD,context:t,message:e.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:e.jPlayer.warningHint.CSS_SELECTOR_METHOD}):this._warning({type:e.jPlayer.warning.CSS_SELECTOR_STRING,context:n,message:e.jPlayer.warningMsg.CSS_SELECTOR_STRING,hint:e.jPlayer.warningHint.CSS_SELECTOR_STRING})},seekBar:function(e){if(this.css.jq.seekBar){var t=this.css.jq.seekBar.offset();e=e.pageX-t.left,t=this.css.jq.seekBar.width(),this.playHead(100*e/t)}},playBar:function(e){this.seekBar(e)},currentTime:function(){},duration:function(){},option:function(n,i){var o=n;
                                                                                       if(0===arguments.length)return e.extend(!0,{},this.options);if("string"==typeof n){var r=n.split(".");if(i===t){for(var s=e.extend(!0,{},this.options),a=0;a<r.length;a++){if(s[r[a]]===t)return this._warning({type:e.jPlayer.warning.OPTION_KEY,context:n,message:e.jPlayer.warningMsg.OPTION_KEY,hint:e.jPlayer.warningHint.OPTION_KEY}),t;s=s[r[a]]}return s}for(s=o={},a=0;a<r.length;a++)a<r.length-1?(s[r[a]]={},s=s[r[a]]):s[r[a]]=i}return this._setOptions(o),this},_setOptions:function(t){var n=this;return e.each(t,function(e,t){n._setOption(e,t)}),this},_setOption:function(t,n){var i=this;switch(t){case"cssSelectorAncestor":this.options[t]=n,e.each(i.options.cssSelector,function(e,t){i._cssSelector(e,t)});break;case"cssSelector":e.each(n,function(e,t){i._cssSelector(e,t)})}return this},resize:function(t){this.html.active&&this._resizeHtml(t),this.flash.active&&this._resizeFlash(t),this._trigger(e.jPlayer.event.resize)},_resizePoster:function(){},_resizeHtml:function(){},_resizeFlash:function(e){this.internal.flash.jq.css({width:e.width,height:e.height})},_html_initMedia:function(){this.status.srcSet&&!this.status.waitForPlay&&this.htmlElement.media.pause(),"none"!==this.options.preload&&this._html_load(),this._trigger(e.jPlayer.event.timeupdate)},_html_setAudio:function(t){var n=this;e.each(this.formats,function(e,i){return n.html.support[i]&&t[i]?(n.status.src=t[i],n.status.format[i]=!0,n.status.formatType=i,!1):void 0}),this.htmlElement.media=this.htmlElement.audio,this._html_initMedia()},_html_setVideo:function(t){var n=this;e.each(this.formats,function(e,i){return n.html.support[i]&&t[i]?(n.status.src=t[i],n.status.format[i]=!0,n.status.formatType=i,!1):void 0}),this.htmlElement.media=this.htmlElement.video,this._html_initMedia()},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.id===this.internal.video.id&&this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause(),this.htmlElement.media.src="",e.browser.msie&&Number(e.browser.version)>=9||this.htmlElement.media.load())},_html_load:function(){if(this.status.waitForLoad){this.status.waitForLoad=!1,this.htmlElement.media.src=this.status.src;try{this.htmlElement.media.load()}catch(e){}}clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(e){var t=this;if(this._html_load(),this.htmlElement.media.play(),!isNaN(e))try{this.htmlElement.media.currentTime=e}catch(n){return this.internal.htmlDlyCmdId=setTimeout(function(){t.play(e)},100),void 0}this._html_checkWaitForPlay()},_html_pause:function(e){var t=this;if(e>0?this._html_load():clearTimeout(this.internal.htmlDlyCmdId),this.htmlElement.media.pause(),!isNaN(e))try{this.htmlElement.media.currentTime=e}catch(n){return this.internal.htmlDlyCmdId=setTimeout(function(){t.pause(e)},100),void 0}e>0&&this._html_checkWaitForPlay()},_html_playHead:function(e){var t=this;this._html_load();try{if("object"==typeof this.htmlElement.media.seekable&&this.htmlElement.media.seekable.length>0)this.htmlElement.media.currentTime=e*this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length-1)/100;else{if(!(this.htmlElement.media.duration>0)||isNaN(this.htmlElement.media.duration))throw"e";this.htmlElement.media.currentTime=e*this.htmlElement.media.duration/100}}catch(n){return this.internal.htmlDlyCmdId=setTimeout(function(){t.playHead(e)},100),void 0}this.status.waitForLoad||this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_volume:function(e){this.html.audio.available&&(this.htmlElement.audio.volume=e),this.html.video.available&&(this.htmlElement.video.volume=e)},_html_mute:function(e){this.html.audio.available&&(this.htmlElement.audio.muted=e),this.html.video.available&&(this.htmlElement.video.muted=e)},_flash_setAudio:function(t){var n=this;try{e.each(this.formats,function(e,i){if(n.flash.support[i]&&t[i]){switch(i){case"m4a":n._getMovie().fl_setAudio_m4a(t[i]);break;case"mp3":n._getMovie().fl_setAudio_mp3(t[i])}return n.status.src=t[i],n.status.format[i]=!0,n.status.formatType=i,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(i){this._flashError(i)}},_flash_setVideo:function(t){var n=this;try{e.each(this.formats,function(e,i){if(n.flash.support[i]&&t[i]){switch(i){case"m4v":n._getMovie().fl_setVideo_m4v(t[i])}return n.status.src=t[i],n.status.format[i]=!0,n.status.formatType=i,!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(i){this._flashError(i)}},_flash_clearMedia:function(){this.internal.flash.jq.css({width:"0px",height:"0px"});try{this._getMovie().fl_clearMedia()}catch(e){this._flashError(e)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(e){this._flashError(e)}this.status.waitForLoad=!1},_flash_play:function(e){try{this._getMovie().fl_play(e)}catch(t){this._flashError(t)}this.status.waitForLoad=!1,this._flash_checkWaitForPlay()},_flash_pause:function(e){try{this._getMovie().fl_pause(e)}catch(t){this._flashError(t)}e>0&&(this.status.waitForLoad=!1,this._flash_checkWaitForPlay())},_flash_playHead:function(e){try{this._getMovie().fl_play_head(e)}catch(t){this._flashError(t)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(e){try{this._getMovie().fl_volume(e)}catch(t){this._flashError(t)}},_flash_mute:function(e){try{this._getMovie().fl_mute(e)}catch(t){this._flashError(t)}},_getMovie:function(){return document[this.internal.flash.id]},_checkForFlash:function(t){var n,i=!1;if(window.ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t),i=!0}catch(o){}else navigator.plugins&&navigator.mimeTypes.length>0&&(n=navigator.plugins["Shockwave Flash"])&&navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")>=t&&(i=!0);return e.browser.msie&&Number(e.browser.version)>=9?!1:i},_validString:function(e){return e&&"string"==typeof e},_limitValue:function(e,t,n){return t>e?t:e>n?n:e},_urlNotSetError:function(t){this._error({type:e.jPlayer.error.URL_NOT_SET,context:t,message:e.jPlayer.errorMsg.URL_NOT_SET,hint:e.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(t){this._error({type:e.jPlayer.error.FLASH,context:this.internal.flash.swf,message:e.jPlayer.errorMsg.FLASH+t.message,hint:e.jPlayer.errorHint.FLASH})},_error:function(t){this._trigger(e.jPlayer.event.error,t),this.options.errorAlerts&&this._alert("Error!"+(t.message?"\n\n"+t.message:"")+(t.hint?"\n\n"+t.hint:"")+"\n\nContext: "+t.context)},_warning:function(n){this._trigger(e.jPlayer.event.warning,t,n),this.options.errorAlerts&&this._alert("Warning!"+(n.message?"\n\n"+n.message:"")+(n.hint?"\n\n"+n.hint:"")+"\n\nContext: "+n.context)},_alert:function(e){alert("jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+e)}},e.jPlayer.error={FLASH:"e_flash",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",VERSION:"e_version"}
                                                                                     ,e.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+e.jPlayer.prototype.version.script+" needs Jplayer.swf version "+e.jPlayer.prototype.version.needFlash+" but found "},e.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."},e.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"},e.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of methodCssSelectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",OPTION_KEY:"The option requested in jPlayer('option') is undefined."},e.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}}(jQuery);var NodeView=ty.View.extend({initialize:function(){_.bindAll(this,"render"),this.model.bind("change",this.render),this.model.view=this},render:function(){var e=this,t=e.model.toJSON();return e.model.hasChanged()||_.each(t,function(){}),e}}),NodeEditView=ty.View.extend({initialize:function(){},render:function(e,t){var n=this,i={title:n.model.get("title")},o=_.extend(i,e);n.editor=n.form(n.model.get("ntype")+"NodeEdit").el.dialog({dialogClass:"dialogForm nodeEdit",closeOnEscape:!0,autoOpen:!0,width:546,height:600,title:"Edit "+o.title.substring(0,38),close:function(){n.editor.dialog("destroy").remove()},open:function(){t&&t(n)}})}}),NodeCreateView=ty.View.extend({initialize:function(e){this.render(e)},render:function(){var e=this;e.editor=e.form("postNodeCreate").el,$("#content").html(e.editor)}});ty.route("node/create","node",function(){ty.load("node/node",function(){new NodeCreateView({model:new NodeModel})})}),ty.load("node/node"),ty.node={Model:ty.Model.extend({idAttribute:"nid",address:function(){return"node/"+this.id}}),load:function(e,t){("number"==typeof e||"string"==typeof e)&&ty.get("node/"+e,function(e){t&&t(e)})},create:function(e,t){ty.post("node",e,function(e){t&&t(e)})},remove:function(){$.ajax({url:"/api/node",type:"DELETE",success:function(){}})},edit:function(e,t,n){if("string"==typeof e||"number"==typeof e)ty.get("node/"+e,function(e){var n=new NodeEditView({model:new NodeModel(e)}),i=arguments[arguments.length-1];"function"!=typeof i&&(i=void 0),n.render(t,i)});else{var i=new NodeEditView({model:e}),n=arguments[arguments.length-1];"function"!=typeof n&&(n=void 0),i.render(t,n)}},render:function(e,t,n){ty.load("node/node",function(){t.viewCallback||(t.viewCallback=n);var i="edit"==e.viewType&&t.edit&&t.edit.pageTemplate?e.edit.pageTemplate:"nodePageEditTemplate",o=t.pageTemplate?t.pageTemplate:"nodePageTemplate",r="edit"==e.viewType?i:o,s=ty.t(r,e);"edit"==e.viewType?s.find("header .admin .view").click(function(){e.viewType="view",ty.node.render(e,t,function(e){t.viewCallback&&t.viewCallback(e)})}):s.bind("edit",function(){e.viewType="edit",ty.node.render(e,t,function(n){n.delegate(".formUpdateThis","change",function(){if(t.edit&&t.edit.saveNode)t.edit.saveNode();else{var i={};n.find(".formUpdateThis").each(function(){var e=$(this).attr("name"),t=$(this).val();($(this).hasClass("fieldTags")||$(this).hasClass("fieldMultiple"))&&(i[e]&&_.isArray(i[e])?(i[e].push(t),t=i[e]):t=t.split(",")),"number"==$(this).attr("type")&&(t=parseFloat(t)),i[e]=t}),ty.put("node/"+e.nid,i),_.extend(e,i)}}),n.save=function(t){_.extend(e,t),ty.put("node/"+e.nid,t)},t&&t.edit&&t.edit.callback&&t.edit.callback(n)})}),templateName="string"==typeof t?t:"edit"==e.viewType&&t.edit&&t.edit.template?t.edit.template:t.template?t.template:"default","default"==templateName||s.find(".content").html(ty.t(templateName,e));for(var a in ty.fields)ty.fields.hasOwnProperty(a)&&"function"==typeof ty.fields[a]&&ty.fields[a](s,e.nid);return n&&"function"==typeof n&&n(s),s})},newNode:function(e){ty.realtime.parseUpdates(e.channel,"newNode",e)},update:function(e){ty.realtime.parseUpdates(e.channel,"update",e)}},function(e){e.PaginationCalculator=function(e,t){this.maxentries=e,this.opts=t},e.extend(e.PaginationCalculator.prototype,{numPages:function(){return Math.ceil(this.maxentries/this.opts.items_per_page)},getInterval:function(e){var t=Math.floor(this.opts.num_display_entries/2),n=this.numPages(),i=n-this.opts.num_display_entries,o=e>t?Math.max(Math.min(e-t,i),1):1,r=e>t?Math.min(e+t+this.opts.num_display_entries%2,n):Math.min(this.opts.num_display_entries,n);return{start:o,end:r}}}),e.PaginationRenderers={},e.PaginationRenderers.defaultRenderer=function(t,n){this.maxentries=t,this.opts=n,this.pc=new e.PaginationCalculator(t,n)},e.extend(e.PaginationRenderers.defaultRenderer.prototype,{createLink:function(t,n,i){var o,r=this.pc.numPages();if(t=0>t?1:r>t?t:r-1,i=e.extend({text:t,classes:""},i||{}),t==n)o=e("<span class='current'>"+i.text+"</span>");else{var s=location.pathname.split("/");s.pop(),s=s.join("/");pagingUrl=this.opts.isPaging?1==t?s:s+"/"+t:location.pathname+"/"+t,o=e("<a>"+i.text+"</a>").attr("href",pagingUrl)}return i.classes&&o.addClass(i.classes),o.data("page_id",t),o},appendRange:function(e,t,n,i,o){var r;for(r=n;i>r;r++)this.createLink(r,t,o).appendTo(e)},getLinks:function(t,n){var i,o,r=this.pc.getInterval(t),s=this.pc.numPages(),a=e("<div class='pagination'></div>");return this.opts.prev_text&&(t>1||this.opts.prev_show_always)&&a.append(this.createLink(t-1,t,{text:this.opts.prev_text,classes:"prev"})),r.start>0&&this.opts.num_edge_entries>0&&(o=Math.min(this.opts.num_edge_entries,r.start),this.appendRange(a,t,1,1,{classes:"sp"}),this.opts.num_edge_entries<r.start&&this.opts.ellipse_text&&(a.append(this.createLink(1,t,{text:1})),e("<span>"+this.opts.ellipse_text+"</span>").appendTo(a))),this.appendRange(a,t,r.start,r.end),r.end<s&&this.opts.num_edge_entries>0&&(s-this.opts.num_edge_entries>r.end&&this.opts.ellipse_text&&e("<span>"+this.opts.ellipse_text+"</span>").appendTo(a),i=Math.max(s-this.opts.num_edge_entries,r.end),this.appendRange(a,t,i,s,{classes:"ep"})),this.opts.next_text&&(s-1>t||this.opts.next_show_always)&&a.append(this.createLink(t+1,t,{text:this.opts.next_text,classes:"next"})),e("a",a).click(n),a}}),e.fn.pagination=function(t,n){function i(){}function o(e){l.data("current_page",e),s=r.getLinks(e,i),l.empty(),s.appendTo(l);var t=n.callback(e,l);return t}0==n.current_page&&(n.current_page=1),n=e.extend({items_per_page:20,num_display_entries:6,current_page:1,isPaging:!1,num_edge_entries:1,link_to:"#",prev_text:"Prev",next_text:"Next",ellipse_text:"...",prev_show_always:!1,next_show_always:!1,renderer:"defaultRenderer",show_if_single_page:!1,load_first_page:!1,callback:function(){}},n||{});var r,s,a,l=this;if(a=parseInt(n.current_page),l.data("current_page",a),t=!t||0>t?1:t,n.items_per_page=!n.items_per_page||n.items_per_page<0?1:n.items_per_page,!e.PaginationRenderers[n.renderer])throw new ReferenceError("Pagination renderer '"+n.renderer+"' was not found in jQuery.PaginationRenderers object.");r=new e.PaginationRenderers[n.renderer](t,n);var c=new e.PaginationCalculator(t,n),d=c.numPages();l.bind("setPage",{numPages:d},function(e,t){t>=0&&t<e.data.numPages&&o(t)}),l.bind("prevPage",function(){var t=e(this).data("current_page");t>0&&o(t-1)}),l.bind("nextPage",{numPages:d},function(t){var n=e(this).data("current_page");n<t.data.numPages-1&&o(n+1)}),s=r.getLinks(a,i),l.empty(),(d>1||n.show_if_single_page)&&s.appendTo(l),n.load_first_page&&n.callback(a,l)}}(jQuery),ty.realtime="production"==ty.settings.env?io.connect("https://"+ty.settings.domain):io.connect(),ty.realtime.lookup=function(){var e={};return function(t,n){var i=null,o=[],r="";return"string"==typeof t&&(e[t]?(o=e[t].chain,i=e[t].check):(t.split(/\./).forEach(function(e){if(i){if("object"==typeof i||"function"==typeof i){if(e in i)o.push(i=i[e]),r=e;else if(!n)throw new TypeError('cannot resolve "'+e+'" in '+r)}else if(!n)throw new TypeError('"'+i+'"  does not seem to be an object')}
                                       else r=e,o.push(i=ty[e])
}),i&&(e[t]={chain:o,check:i}))),{execute:function() {
  return"function"==typeof i?i.apply(o[o.length-2],arguments):null
},get:function() {
  return i
}
                                 }
                   }
}(),ty.realtime.channels= {},ty.realtime.join=function(e,t,n) {
req= {message:
      e,handler:"realtime.joinChannel"
      ,data:
      n,notify:
        t+".joinChannel"
       },ty.realtime.emit("message",req),ty.realtime.channels[e]=ty.realtime.channels[e]||[],ty.realtime.channels[e].push(t)
},ty.realtime.parseUpdates=function(e,t,n) {
  _.each(ty.realtime.channels[e],function(e) {
    ty.realtime.lookup(e+"."+t,!0).execute(n)
  })
},ty.realtime.leave=function(e,t) {
req= {message:
      e,handler:"realtime.leaveChannel"
      ,notify:
        t+".leaveChannel"
       },ty.realtime.emit("message",req),ty.realtime.channels=_.without(ty.realtime.channels,e)
},ty.realtime.on("message",function(e) {
  e.handler&&ty.realtime.lookup(e.handler,!0).execute(e)
}),ty.realtime.on("disconnect",function() {
  flashMessage("You disconnected from the Server. Please refresh your browser.")
}),ty.realtime.send=function(e) {
  ty.realtime.emit("message",e)
},ty.realtime.updateName=function() {
req= {handler:"realtime.updateName"
       },ty.realtime.emit("message",req)
},ty.handler("user:login",ty.realtime.updateName),function(e) {
  e.fn.mailcheck=function(e,t) {
    var n=["yahoo.com","google.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","comcast.net","googlemail.com","msn.com","hotmail.co.uk","yahoo.co.uk","facebook.com","verizon.net","sbcglobal.net","att.net","gmx.com","mail.com"],i=["co.uk","com","net","org","info","edu","gov","mil"];
    if("object"==typeof e&&void 0===t)e.domains=e.domains||n;
    else {
      var o=e;
      e=t,e.domains=o||n
    }
                  e.topLevelDomains=e.topLevelDomains||i,e.distanceFunction=Kicksend.sift3Distance;
    var r=Kicksend.mailcheck.suggest(encodeURI(this.val()),e.domains,e.topLevelDomains,e.distanceFunction);
    r?e.suggested&&e.suggested(this,r):e.empty&&e.empty(this)
  }
}(jQuery); var Kicksend= {mailcheck:{threshold:3,suggest:function(e,t,n,i) {
    e=e.toLowerCase();
    var o=this.splitEmail(e),r=this.findClosestDomain(o.domain,t,i);
    if(r) {
if(r!=o.domain)return {address:
                       o.address,domain:
                       r,full:
                               o.address+"@"+r
                              }
      } else {
      var s=this.findClosestDomain(o.topLevelDomain,n);
      if(o.domain&&s&&s!=o.topLevelDomain) {
        var a=o.domain;
return r=a.substring(0,a.lastIndexOf(o.topLevelDomain))+s, {address:
         o.address,domain:
         r,full:
                 o.address+"@"+r
                                                                   }
      }
    }
             return!1
},findClosestDomain:function(e,t,n) {
    var i,o=99,r=null;
    if(!e||!t)return!1;
    n||(n=this.sift3Distance);
    for(var s=0; s<t.length; s++) {
      if(e===t[s])return e;
      i=n(e,t[s]),o>i&&(o=i,r=t[s])
    }
      return o<=this.threshold&&null!==r?r:!1
},sift3Distance:function(e,t) {
    if(null==e||0===e.length)return null==t||0===t.length?0:t.length;
    if(null==t||0===t.length)return e.length;
    for(var n=0,i=0,o=0,r=0,s=5; n+i<e.length&&n+o<t.length;) {
      if(e.charAt(n+i)==t.charAt(n+o))r++;
      else {
        i=0,o=0;
        for(var a=0; s>a; a++) {
          if(n+a<e.length&&e.charAt(n+a)==t.charAt(n)) {
            i=a;
            break
          }
          if(n+a<t.length&&e.charAt(n)==t.charAt(n+a)) {
            o=a;
            break
          }
        }
      }
      n++
    }
    return(e.length+t.length)/2-r
},splitEmail:function(e) {
    var t=e.split("@");
    if(t.length<2)return!1;
    for(var n=0; n<t.length; n++)if(""===t[n])return!1;
    var i=t.pop(),o=i.split("."),r="";
    if(0==o.length)return!1;
    if(1==o.length)r=o[0];
    else {
      for(var n=1; n<o.length; n++)r+=o[n]+".";
      o.length>=2&&(r=r.substring(0,r.length-1))
    }
return {topLevelDomain:
        r,domain:
        i,address:
            t.join("@")
           }
  }
}
}; !function(e) {
  var t=0;
e.widget("ui.autocomplete", {options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function() {
    var t,n=this,i=this.element[0].ownerDocument;
this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr( {role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(i) {
      if(!n.options.disabled&&!n.element.propAttr("readOnly")) {
        t=!1;
        var o=e.ui.keyCode;
        switch(i.keyCode) {
        case o.PAGE_UP:
          n._move("previousPage",i);
          break;
        case o.PAGE_DOWN:
          n._move("nextPage",i);
          break;
        case o.UP:
          n._keyEvent("previous",i);
          break;
        case o.DOWN:
          n._keyEvent("next",i);
          break;
        case o.ENTER:
        case o.NUMPAD_ENTER:
          n.menu.active&&(t=!0,i.preventDefault());
        case o.TAB:
          if(!n.menu.active)return;
          n.menu.select(i);
          break;
        case o.ESCAPE:
          n.element.val(n.term),n.close(i);
          break;
        default:
          clearTimeout(n.searching),n.searching=setTimeout(function() {
            n.term!=n.element.val()&&(n.selectedItem=null,n.search(null,i))
          },n.options.delay)
        }
      }
    }).bind("keypress.autocomplete",function(e) {
      t&&(t=!1,e.preventDefault())
    }).bind("focus.autocomplete",function() {
      n.options.disabled||(n.selectedItem=null,n.previous=n.element.val())
    }).bind("blur.autocomplete",function(e) {
      n.options.disabled||(clearTimeout(n.searching),n.closing=setTimeout(function() {
        n.close(e),n._change(e)
      },150))
    }),this._initSource(),this.menu=e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo||"body",i)[0]).mousedown(function(t) {
      var i=n.menu.element[0];
      e(t.target).closest(".ui-menu-item").length||setTimeout(function() {
        e(document).one("mousedown",function(t) {
          t.target===n.element[0]||t.target===i||e.ui.contains(i,t.target)||n.close()
        })
      },1),setTimeout(function() {
        clearTimeout(n.closing)
      },13)
}).menu( {focus:function(e,t) {
      var i=t.item.data("item.autocomplete");
!1!==n._trigger("focus",e, {item:i})&&/^key/.test(e.originalEvent.type)&&n.element.val(i.value)
},selected:function(e,t) {
      var o=t.item.data("item.autocomplete"),r=n.previous;
      n.element[0]!==i.activeElement&&(n.element.focus(),n.previous=r,setTimeout(function() {
        n.previous=r,n.selectedItem=o
},1)),!1!==n._trigger("select",e, {item:o})&&n.element.val(o.value),n.term=n.element.val(),n.close(e),n.selectedItem=o
},blur:function() {
      n.menu.element.is(":visible")&&n.element.val()!==n.term&&n.element.val(n.term)
    }
    }).zIndex(this.element.zIndex()+1).css( {top:0,left:0}).hide().data("menu"),e.fn.bgiframe&&this.menu.element.bgiframe(),n.beforeunloadHandler=function() {n.element.removeAttr("autocomplete")},e(window).bind("beforeunload",n.beforeunloadHandler)
},destroy:function() {
    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),e(window).unbind("beforeunload",this.beforeunloadHandler),e.Widget.prototype.destroy.call(this)
},_setOption:function(t,n) {
    e.Widget.prototype._setOption.apply(this,arguments),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(e(n||"body",this.element[0].ownerDocument)[0]),"disabled"===t&&n&&this.xhr&&this.xhr.abort()
},_initSource:function() {
    var t,n,i=this;
    e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,i) {
      i(e.ui.autocomplete.filter(t,n.term))
    }):"string"==typeof this.options.source?(n=this.options.source,this.source=function(t,o) {
i.xhr&&i.xhr.abort(),i.xhr=e.ajax( {url:n,data:t,dataType:"json",success:function(e) {
        o(e)
},error:function() {
        o([])
      }
                                         })
    }):this.source=this.options.source
},search:function(e,t) {
    return e=null!=e?e:this.element.val(),this.term=this.element.val(),e.length<this.options.minLength?this.close(t):(clearTimeout(this.closing),this._trigger("search",t)!==!1?this._search(e):void 0)
},_search:function(e) {
this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source( {term:e},this._response())
},_response:function() {
    var e=this,n=++t;
    return function(i) {
      n===t&&e.__response(i),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")
    }
},__response:function(e) {
    !this.options.disabled&&e&&e.length?(e=this._normalize(e),this._suggest(e),this._trigger("open")):this.close()
},close:function(e) {
    clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",e))
},_change:function(e) {
this.previous!==this.element.val()&&this._trigger("change",e, {item:this.selectedItem})
},_normalize:function(t) {
    return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t) {
return"string"==typeof t? {label:t,value:t}:
      e.extend( {label:t.label||t.value,value:t.value||t.label},t)
    })
},_suggest:function(t) {
    var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(n,t),this.menu.deactivate(),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend( {of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new e.Event("mouseover"))
},_resizeMenu:function() {
    var e=this.menu.element;
    e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(t,n) {
    var i=this;
    e.each(n,function(e,n) {
      i._renderItem(t,n)
    })
},_renderItem:function(t,n) {
    return e("<li></li>").data("item.autocomplete",n).append(e("<a></a>").text(n.label)).appendTo(t)
},_move:function(e,t) {
    return this.menu.element.is(":visible")?this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)?(this.element.val(this.term),this.menu.deactivate(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)
},widget:function() {
    return this.menu.element
},_keyEvent:function(e,t) {
    (!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())
  }
}),e.extend(e.ui.autocomplete, {escapeRegex:function(e) {
return e.replace(/[-[\] {}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(t,n){var i=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");
    return e.grep(t,function(e) {
      return i.test(e.label||e.value||e)
    })
  }
                                                             })
}(jQuery),function(e) {
e.widget("ui.menu", {_create:function() {
    var t=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr( {role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(n) {
      e(n.target).closest(".ui-menu-item a").length&&(n.preventDefault(),t.select(n))
    }),this.refresh()
},refresh:function() {
    var t=this,n=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
    n.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(n) {
      t.activate(n,e(this).parent())
    }).mouseleave(function() {
      t.deactivate()
    })
},activate:function(e,t) {
    if(this.deactivate(),this.hasScroll()) {
      var n=t.offset().top-this.element.offset().top,i=this.element.scrollTop(),o=this.element.height();
      0>n?this.element.scrollTop(i+n):n>=o&&this.element.scrollTop(i+n-o+t.height())
    }
this.active=t.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",e, {item:t})
},deactivate:function() {
    this.active&&(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)
},next:function(e) {
    this.move("next",".ui-menu-item:first",e)
},previous:function(e) {
    this.move("prev",".ui-menu-item:last",e)
},first:function() {
    return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function() {
    return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(e,t,n) {
    if(!this.active)return this.activate(n,this.element.children(t)),void 0;
    var i=this.active[e+"All"](".ui-menu-item").eq(0);
    i.length?this.activate(n,i):this.activate(n,this.element.children(t))
},nextPage:function(t) {
    if(this.hasScroll()) {
      if(!this.active||this.last())return this.activate(t,this.element.children(".ui-menu-item:first")),void 0;
      var n=this.active.offset().top,i=this.element.height(),o=this.element.children(".ui-menu-item").filter(function() {
        var t=e(this).offset().top-n-i+e(this).height();
        return 10>t&&t>-10
      });
      o.length||(o=this.element.children(".ui-menu-item:last")),this.activate(t,o)
    } else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
},previousPage:function(t) {
    if(this.hasScroll()) {
      if(!this.active||this.first())return this.activate(t,this.element.children(".ui-menu-item:last")),void 0;
      var n=this.active.offset().top,i=this.element.height(),o=this.element.children(".ui-menu-item").filter(function() {
        var t=e(this).offset().top-n+i-e(this).height();
        return 10>t&&t>-10
      });
      o.length||(o=this.element.children(".ui-menu-item:first")),this.activate(t,o)
    } else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
},hasScroll:function() {
    return this.element.height()<this.element[e.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(e) {
this._trigger("selected",e, {item:this.active})
  }
                      })
}(jQuery),function() {
  function e() {
    Array.forEach(document.querySelectorAll("input[type=range]"),i),document.addEventListener("DOMNodeInserted",t,!0)
  }
  function t(e) {
    n(e.target),e.target.querySelectorAll&&Array.forEach(e.target.querySelectorAll("input"),n)
  }
  function n(e,t) {"input"!=e.localName||"range"==e.type||("range"==e.getAttribute("type")?i(e):t||setTimeout(n,0,e,!0))
  }
  function i(e) {
    function t(e) {
      if(C=!0,setTimeout(function() {
      C=!1
    },0),!e.button&&I) {
        var t=parseFloat(getComputedStyle(this,0).width),o=(t-c.width)/I;
        if(o) {
          var r=e.clientX-this.getBoundingClientRect().left-c.width/2-(N-T)*o;
          Math.abs(r)>c.radius&&(w=!0,this.value-=-r/o),_=N,k=e.clientX,this.addEventListener("mousemove",n,!0),this.addEventListener("mouseup",i,!0)
        }
      }
    }
    function n(e) {
      var t=parseFloat(getComputedStyle(this,0).width),n=(t-c.width)/I;
      n&&(_+=(e.clientX-k)/n,k=e.clientX,w=!0,this.value=_)
    }
    function i() {
      this.removeEventListener("mousemove",n,!0),this.removeEventListener("mouseup",i,!0)
    }
    function r(e) {
      e.keyCode>36&&e.keyCode<41&&(s.call(this),w=!0,this.value=N+(38==e.keyCode||39==e.keyCode?E:-E))
    }
    function s() {
      C||(this.style.boxShadow=l?"0 0 2px 1px -moz-mac-focusring, inset 0 0 1px -moz-mac-focusring":"0 0 0 2px #fb0")
    }
    function f() {
      this.style.boxShadow=""
    }
    function p(e) {
      return!isNaN(e)&&+e==parseFloat(e)
    }
    function m() {
      T=p(e.min)?+e.min:0,S=p(e.max)?+e.max:100,T>S&&(S=T>100?T:100),E=p(e.step)&&e.step>0?+e.step:1,I=S-T,y(!0)
    }
    function g() {
      v||b||(N=e.getAttribute("value")),p(N)||(N=(T+S)/2),N=Math.round((N-T)/E)*E+T,T>N?N=T:N>S&&(N=T+~~(I/E)*E)
    }
    function y(t) {
      if(g(),w&&N!=x&&e.dispatchEvent(h),w=!1,t||N!=x) {
        x=N;
        var n=I?(N-T)/I*100:0,i="-moz-element(#__sliderthumb__) "+n+"% no-repeat, ";
o(e, {background:i+d})
      }
    }
    var v,b,w,C,x,_,k,T,S,E,I,N=e.value;
a||(a=document.body.appendChild(document.createElement("hr")),o(a, {"-moz-appearance":l?"scale-horizontal":"scalethumb-horizontal",display:"block",visibility:"visible",opacity:1,position:"fixed",top:"-999999px"}),document.mozSetImageElement("__sliderthumb__",a));
    var D=function() {return""+N},$=function P(t) {
      N=""+t,v=!0,y(),delete e.value,e.value=N,e.__defineGetter__("value",D),e.__defineSetter__("value",P)
    };
    e.__defineGetter__("value",D),e.__defineSetter__("value",$),e.__defineGetter__("type",function() {
      return"range"
    }),["min","max","step"].forEach(function(t) {
      e.hasAttribute(t)&&(b=!0),e.__defineGetter__(t,function() {
        return this.hasAttribute(t)?this.getAttribute(t):""
      }),e.__defineSetter__(t,function(e) {
        null===e?this.removeAttribute(t):this.setAttribute(t,e)
      })
    }),e.readOnly=!0,o(e,u),m(),e.addEventListener("DOMAttrModified",function(e) {"value"!=e.attrName||v?~["min","max","step"].indexOf(e.attrName)&&(m(),b=!0):(N=e.newValue,y())
    },!0),e.addEventListener("mousedown",t,!0),e.addEventListener("keydown",r,!0),e.addEventListener("focus",s,!0),e.addEventListener("blur",f,!0)
  }
  function o(e,t) {
    for(var n in t)e.style.setProperty(n,t[n],"important")
    }
  var r=document.createElement("input");
  try {
    if(r.type="range","range"==r.type)return
    } catch(s) {
    return
  }
  if(document.mozSetImageElement&&"MozAppearance"in r.style) {
var a,l="MacIntel"==navigator.platform,c= {radius:
        l?9:6,width:l?22:12,height:l?16:20
                                          },d="-moz-linear-gradient(top, transparent "+(l?"6px, #999 6px, #999 7px, #ccc 9px, #bbb 11px, #bbb 12px, transparent 12px":"9px, #999 9px, #bbb 10px, #fff 11px, transparent 11px")+", transparent)",u= {"min-width":c.width+"px","min-height":c.height+"px","max-height":c.height+"px",padding:0,border:0,"border-radius":0,cursor:"default","text-indent":"-999999px"},h=document.createEvent("HTMLEvents");
    h.initEvent("change",!0,!1),"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e,!0):e()
  }
}(),function(e) {
var t= {height:
  function(t) {
    return this.each(function() {
      var n=e(this),i=n.clone();
i.css( {visibility:"hidden",display:"block",height:"auto",position:"absolute"}),i.insertBefore(n),t&&t(i.height()),i.remove()
    })
},width:
  function(t) {
    return this.each(function() {
      var n=e(this),i=n.clone();
i.css( {visibility:"hidden",display:"block",height:"auto",position:"absolute"}),i.insertBefore(n),t&&t(i.width()),i.remove()
    })
  }
         };
  e.fn.animateAuto=function(e) {
    return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)
  }
}(jQuery),$(function() {
  $("body").delegate(".formSuggestions","focus",function() {
    var e=$(this);
    e.hasClass("ui-autocomplete-input")?e.autocomplete( {source:function(t,n) {
      var i=e.attr("data-formSuggestions").split(","),o=_.filter(i,function(e) {
        return e.toLowerCase().indexOf(t.term.toLowerCase())>-1
      });
      n($.map(o,function(e) {
return {label:
        e,value:
                e
               }
      }))
},select:function() {
      e.trigger("change")
},change:function() {
      e.trigger("change")
    }
}):"undefined"!=typeof e.attr("data-formSuggestions-source")&&e.attr("data-formSuggestions-source")!==!1&&e.autocomplete( {source:function(t,n) {
        ty.get(e.attr("data-formSuggestions-source")+t.term,function(e) {
          n($.map(e,function(e) {
return {label:
        e,value:
                    e
                   }
          }))
        })
},select:function() {
        e.trigger("change")
},change:function() {
        e.trigger("change")
      }
    })
  })
}),ty.dialog= {},ty.dialog.confirm=function(e,t) {
  var n=$("<div>"+e+"</div>");
n.dialog( {resizable:!1,height:200,modal:!0,title:"Confirm",closeText:"X",close:function() {
    n.dialog("destroy").remove()
},buttons:{Yes:function() {
      t&&t(),$(this).dialog("close")
    }
  }
            })
},ty.dialog.choice=function(e,t,n) {
  var i=$("<div>"+e+"</div>"),o=[];
  o=_.map(t.choices,function(e) {
return {text:
        e,click:
    function() {
      n&&n(e),$(this).dialog("close")
    }
           }
}),i.dialog( {resizable:!1,height:"auto",modal:!0,title:"Confirm",closeText:"X",close:function() {
    i.dialog("destroy").remove()
},buttons:o
               })
},ty.dialog.dialog=function(e,t) {
var n= {height:200,width:300,modal:
          !0
         },n=$.extend(n,t);
return e.dialog( {resizable:!1,height:n.height,width:n.width,modal:n.modal,title:n.title,closeText:"X",close:function() {
    e.dialog("destroy").remove()
  }
                   }),e.dialog("widget")
},ty.dialog.information=function(e) {
  var t=$('<div class="dismiss-message">(Click on this box to dismiss)</div>');
  return e.click(function() {
    e.dialog("destroy").remove()
  }),t.click(function() {
    e.dialog("destroy").remove()
}),e.dialog( {height:"auto",dialogClass:"ui-dialog-information",close:function() {
    e.dialog("destroy").remove()
  }
               }),e.after(t),e.dialog("widget")
},ty.dialog.prompt=function(e,t,n) {
  ty.load("ui/dialog",function() {
    t.query=e,t.height||(t.height=250),t.value||(t.value="");
    var i=ty.t("ui-dialog",t);
i.dialog( {resizable:!1,height:t.height,modal:!0,title:t.title,closeText:"X",dialogClass:"ui-dialog-prompt",close:function() {
      i.dialog("destroy").remove()
},buttons:{Submit:function() {
        n&&n(i.find("input.fieldText").val()),i.dialog("close")
      }
    }
              })
  })
},function(e) {
  e.fn.hasScrollBar=function() {return this.get(0).scrollHeight>this.height()},e.fn.lionbars=function(t) {
    function n(n) {
      var a=e(n);
      (M||O)&&a.find(".lb-wrap").on("scroll",function() {
if(a.find(".lb-v-scrollbar-slider").css( {top:-e(this).scrollTop()/a.attr("vratio")}),a.find(".lb-h-scrollbar-slider").css( {left:-e(this).scrollLeft()/a.attr("hratio")}),a.find(".lb-v-scrollbar").height()==parseInt(a.find(".lb-v-scrollbar-slider").css("top"))+a.find(".lb-v-scrollbar-slider").height()&&"function"==typeof t.reachedBottom&&!I) {
          I=!0;
          var n=e(this);
          t.reachedBottom.apply(e(this).children(".lb-content"),[function() {
y(e(n).parent(), {height:e(n).children(".lb-content").get(0).scrollHeight,width:e(n).children(".lb-content").get(0).scrollWidth}),s(e(n).parent()),o(e(n).parent()),i(e(n).parent()),r(),I=!1
          }])
        }
        if(a.find(".lb-h-scrollbar").width()==parseInt(a.find(".lb-h-scrollbar-slider").css("left"))+a.find(".lb-h-scrollbar-slider").width()&&"function"==typeof t.reachedRight&&!N) {
          N=!0;
          var n=e(this);
          t.reachedRight.apply(e(this).children(".lb-content"),[function() {
y(e(n).parent(), {height:e(n).children(".lb-content").get(0).scrollHeight,width:e(n).children(".lb-content").get(0).scrollWidth}),s(e(n).parent()),o(e(n).parent()),i(e(n).parent()),r(),N=!1
          }])
        }
      }),M&&(a.find(".lb-v-scrollbar-slider").mousedown(function(t) {
        return b=t.pageY,T=!0,S=e(this),E=a.find(".lb-wrap"),x=E.parent().attr("vratio"),_=S.position().top,!1
      }),a.find(".lb-v-scrollbar").mousedown(function(t) {
        return e(t.target).hasClass("lb-v-scrollbar-slider")||a.find(".lb-wrap").scrollTop((t.pageY-e(this).offset().top)*Math.abs(a.attr("vratio"))-e(this).find(".lb-v-scrollbar-slider").height()/2),!1
      })),O&&(a.find(".lb-h-scrollbar-slider").mousedown(function(t) {
        return v=t.pageX,k=!0,S=e(this),E=a.find(".lb-wrap"),x=E.parent().attr("hratio"),_=S.position().left,!1
      }),a.find(".lb-h-scrollbar").mousedown(function(t) {
        return e(t.target).hasClass("lb-h-scrollbar-slider")||a.find(".lb-wrap").scrollLeft((t.pageX-e(this).offset().left)*Math.abs(a.attr("hratio"))-e(this).find(".lb-h-scrollbar-slider").width()/2),!1
      })),(M||O)&&autohide&&(a.find(".lb-v-scrollbar, .lb-h-scrollbar").hide(),a.hover(function() {
        e(this).data("hover",!0),a.find(".lb-v-scrollbar, .lb-h-scrollbar").fadeIn(150)
      },function() {
        e(this).data("hover",!1),a.find(".lb-v-scrollbar, .lb-h-scrollbar").fadeOut(150)
      }))
    }
    function i(t) {
      J=(G-e(t).find(".lb-wrap").get(0).scrollHeight-H-F)/(et-K),Q=(U-e(t).find(".lb-wrap").get(0).scrollWidth-q-z)/(tt-Z);
      var n=e(t);
      n.attr("vratio",J),n.attr("hratio",Q)
    }
    function o(t) {
      var n,i,o,r=e(t);
0!=r.find(".lb-v-scrollbar").length&&(n=20,o=G-r.find(".lb-v-scrollbar").height(),i=G-o-n,K=Math.round(G*i/W),K=n>K?n:K),0!=r.find(".lb-h-scrollbar").length&&(n=20,o=U-r.find(".lb-h-scrollbar").width(),i=U-o-n,Z=Math.round(U*i/V),Z=n>Z?n:Z),r.find(".lb-v-scrollbar-slider").css( {height:K}),r.find(".lb-h-scrollbar-slider").css( {width:Z})
    }
    function r() {
      P=0,A=0,O=!1,M=!1,L=0,R=0,j=0,B=0,H=0,q=0,F=0,z=0,W=0,V=0,U=0,G=0,X=0,Y=0,K=0,Z=0,et=0,tt=0
    }
    function s(t) {
      var n=e(t);
M&&O?(et=n.height()-12,tt=n.width()-12,n.find(".lb-v-scrollbar").css( {height:et}),n.find(".lb-h-scrollbar").css( {width:tt})):(et=n.height()-4,tt=n.width()-4,n.find(".lb-v-scrollbar").css( {height:et}),n.find(".lb-h-scrollbar").css( {width:tt}))
    }
    function a(t,n,i) {
      var o=e(t);
(n||i)&&(o.css( {overflow:"hidden"}),c(o,o.find(".lb-wrap")),l(o),d(o,o.find(".lb-wrap")))
    }
    function l(t) {
      var n=e(t);
n.css( {width:n.width()+R+B,height:n.height()+L+j})
    }
    function c(t,n) {
      var i=e(t),o=e(n);
i.css( {padding:0}),o.css( {"padding-top":L+"px","padding-left":R+"px","padding-bottom":j+"px","padding-right":B+"px"})
    }
    function d(t,n) {
      var i=e(t),o=e(n);
i.css( {position:"relative"}),o.css( {width:i.width()+P-R-B,height:i.height()+A-L-j})
    }
    function u(t) {
      var n=e(t);
n.css( {overflow:"auto"}),P=U-X-q-z,n.css( {overflow:"hidden"})
    }
    function h(t) {
      var n=e(t);
n.css( {overflow:"auto"}),A=G-Y-H-F,n.css( {overflow:"hidden"})
    }
    function f(t,n,i) {
      var o=e(t),r=o.attr("id"),s=0;
      void 0!==r?(o.wrapInner('<div class="lb-wrap" id="lb-wrap-'+$+"-"+r+'"></div>'),s=e("#lb-wrap-"+$+"-"+r)):(o.wrapInner('<div class="lb-wrap" id="lb-wrap-'+$+'"></div>'),s=e("#lb-wrap-"+$)),s.wrapInner('<div class="lb-content"></div>'),n&&(o.prepend('<div class="lb-v-scrollbar"></div>'),o.find(".lb-v-scrollbar").append('<div class="lb-v-scrollbar-slider"></div>')),i&&(o.prepend('<div class="lb-h-scrollbar"></div>'),o.find(".lb-h-scrollbar").append('<div class="lb-h-scrollbar-slider"></div>')),$+=1
    }
    function p(t) {
      var n=e(t);
      if(M=!1,O=!1,n.find(".lb-v-scrollbar-slider").length)return!1;
      m(n),g(n);
      var i=n.css("overflow-y"),o=n.css("overflow-x");
return n.css( {overflow:"hidden"}),"hidden"!=i&&n.get(0).scrollHeight>n.get(0).clientHeight&&(M=!0),"hidden"!=o&&n.get(0).scrollWidth>n.get(0).clientWidth&&(O=!0),n.css( {overflow:"auto"}),M||O?!0:void 0
    }
    function m(t) {
      var n=e(t);
      L=parseInt(n.css("padding-top").replace("px","")),R=parseInt(n.css("padding-left").replace("px","")),j=parseInt(n.css("padding-bottom").replace("px","")),B=parseInt(n.css("padding-right").replace("px",""))
    }
    function g(t) {
      var n=e(t);
      H=parseInt(n.css("border-top-width").replace("px","")),z=parseInt(n.css("border-right-width").replace("px","")),F=parseInt(n.css("border-bottom-width").replace("px","")),q=parseInt(n.css("border-left-width").replace("px",""))
    }
    function y(t,n,i) {
      var o=e(t).get(0);
      i&&(o=e(o).find(".lb-wrap").get(0)),W="undefined"!=typeof n&&0!=n?n.height:o.scrollHeight,V="undefined"!=typeof n&&0!=n?n.width:o.scrollWidth,Y=o.clientHeight,X=o.clientWidth,G=o.offsetHeight,U=o.offsetWidth,u(e(t)),h(e(t))
    }
                                          t=t|| {},autohide=t.autohide;
    var v,b,w,C,x,_,k=!1,T=!1,S=0,E=0,I=!1,N=!1,D=e(this),$=0,P=0,A=0,O=!1,M=!1,L=0,R=0,j=0,B=0,H=0,z=0,F=0,q=0,W=0,V=0,U=0,G=0,X=0,Y=0,J=0,Q=0,K=0,Z=0,et=0,tt=0;
    return this.mainLoop=function() {for(var t=0; void 0!==D[t]; t++)p(D[t])&&!e(D[t]).hasClass("nolionbars")&&(target=D[t],y(target),f(target,M,O),a(target,M,O),s(target),o(target),i(target),n(target),r())},this.mainLoop(),this.Update=function() {for(var t=0; void 0!==D[t]; t++)p(D[t])&&!e(D[t]).hasClass("nolionbars")&&(target=D[t],y(target,!1,!0),a(target,M,O),s(target),o(target),i(target),n(target),r())},this.scrollToBottom=function() {
      for(var t=0; void 0!==D[t]; t++)if(p(D[t])&&!e(D[t]).hasClass("nolionbars")) {
          target=D[t],y(target,!1,!0);
          var n=e(target).find(".lb-wrap"),i=n.parent().attr("vratio"),o=(W-Y)*Math.abs(i);
          n.scrollTop(o)
        }
    },e(document).mousemove(function(e) {
      (k||T)&&(E.parent().find(".lb-v-scrollbar, .lb-h-scrollbar").show(),T&&(C=e.pageY,E.scrollTop((_+C-b)*Math.abs(x))),k&&(w=e.pageX,E.scrollLeft((_+w-v)*Math.abs(x))))
    }),e(document).mouseup(function() {
      (k||T)&&(E.parent().find(".lb-v-scrollbar, .lb-h-scrollbar").fadeOut(150),T&&(T=!1),k&&(k=!1))
    }),this.each(function() {})
  }
}(jQuery),$.fn.scrollbars=function(e) {
  return this.each(function() {
    var t=$(this);
    $.browser.webkit||t.lionbars(e)
  })
},ty.textareaControl=function(e) {
  e.textareaControl||(e.textareaControl=!0,$(e).simpleautogrow(),$(e).siblings("button").show(),$(e).postBox())
},ty.User=function() {
this.UserDisplayModel=Backbone.Model.extend( {idAttribute:"nid",defaults:{},url:function() {
    return"/api/node/"+this.id
  }
}),this.UserDisplayView=ty.View.extend( {initialize:function() {
    _.bindAll(this),this.model.bind("change",this.update),this.model.view=this,this.render()
},events:{"click .edit":"edit"},edit:function() {
this.nodeEdit( {title:this.model.get("user")}),analytics.track("Edit User Profile", {user:user,module:"user"})
},update:function() {
    this.element("userMainTemplate"),this.el.find("#wallContainer>.content").comment(this.model.id).postBox(this.model.id)
},render:function() {
    var e=this;
    return e.element("userMainTemplate"),$("#content").html(e.el),ty.load("dulst/userStats",function() {
      ty.get("dulst/games/user/"+e.model.get("user"),function(e) {
        if(e) {
          var t=e.adminGames.concat(e.playingGames);
          if(t&&t.length>0) {
            var n=ty.t("dulst_userDisplayGames",t);
            $("#authorPane").append(n)
          }
        }
      })
    }),e.el.find("#wallContainer>.content").comment(this.model.id).postBox(this.model.id),this
  }
                                                                                       })
},ty.User.prototype.display=function(e,t) {
  var n=this;
  ty.load("user/display",function() {
    ty.get("user/"+e,function(e) {
n.userDisplay=new n.UserDisplayView( {model:new n.UserDisplayModel(e)}),t&&t()
    })
  })
},ty.user=new ty.User,ty.route("user/:user","user",function(e) {
  ty.user.display(e)
}),ty.route("user/:user/edit","user",function(e) {
  ty.user.display(e,function() {
    ty.user.userDisplay.edit()
  })
}),ty.notification= {},ty.notification.send=function() {},window.webkitNotifications&&(ty.notification=window.webkitNotifications,ty.notification.send=function(e,t,n) {
  var i=ty.settings.modules.desktopNotification.img;
  if(document.hidden&&0==window.webkitNotifications.checkPermission()) {
    var o=webkitNotifications.createNotification(i,t,n);
    o.show(),o.ondisplay=function() {
      setTimeout(function() {
        o.cancel()
      },5e3)
    }
  }
}),ty.dulst.CardHoverPreview=function() {
  var e=this;
  _.bindAll(this),ty.load("dulst/cardsInterface",function() {
e.el=ty.t("dulst/cardFullInfo").dialog( {dialogClass:"deckInfoContainer visible",position:["center","center"],closeOnEscape:!1,minHeight:0,autoOpen:!0,draggable:!1}),e.widget=e.el.dialog("widget"),e.widget.draggable()
  })
},ty.dulst.CardHoverPreview.prototype.on=function(e) {
  var t=this;
  e=e|| {},t.widget.show(),this.widget.addClass("visible"),this.selector=$("#gameDashboard .card-list-container .card, #card-list-container .card, #deck-container .card"),this.selector.off("mouseover").on("mouseover",function() {
    function n() {
      var e=i.data("json");
      i.data("json")!=$("#cardFullInfo").data("json")&&$("#cardFullInfo").html(ty.t("CardPreviewTemplate",e)).data("json",i.data("json"))
    }
    var i=$(this);
    0!=e.hoverIntent?(i.data("hoverIntent",!0),setTimeout(function() {
      i.data("hoverIntent")&&n()
    },200)):n(),t.widget.show(),t.widget.addClass("visible")
    }),this.selector.off("mouseout").on("mouseout",function() {
    var n=$(this);
    n.removeData("hoverIntent"),e.autohide&&(t.widget.removeClass("visible"),t.widget.hide())
  })
},ty.dulst.CardHoverPreview.prototype.destroy=function() {
  this.widget.hide(),this.widget.removeClass("visible"),this.selector&&this.selector.off("mouseover").off("mouseout")
},ty.dulst.hoverPreview=new ty.dulst.CardHoverPreview,ty.dulst=ty.dulst|| {},ty.dulst.boardID=0,ty.dulst.boadEditorInit=function(e) {
  function t() {
    function e() {
      return b%g==0?g:b%g
    }
    function t(e) {
      for(var t=[],n=p-1; n>=0; n--)t.push( {number:"gridSpace-"+e*n,row:e,col:n});
      v.push(t)
    }$("body").addClass("dulstPlay");
    var a=$("#content");
    contentHeight=a.height();
    var m=ty.t("dulst/boardEditor");
    a.html(m),s=a.width()>contentHeight?contentHeight:a.width();
    var g=6,y=40,v=[];
    if(h&&"grid"==h.type) {
      g=12,y=0;
      for(var b=1; g*g+1>b; b++)v.push( {number:"gridSpace-"+b,row:Math.ceil(b/g),col:e()})
      }
    var w=(s-y)/g;
    r=w*g+y;
    for(var b=f-1; b>=0; b--)t(b);
    a.width()-r<300&&(r-=300-(a.width()-r),w=(r-y)/g),contentHeight>r&&(l=(contentHeight-r)/2),i=w*(g-2)+y,$("#board").css("height",i).css("width",i).css("margin-top",w);
    var C=20;
    h&&"grid"==h.type&&(C=2),c=w-C;
    var x=.8;
    if(n=c*x,$("#board").css("margin-left",n+20+"px"),o=n+y+n+i,ty.dulst.game.get("stats")&&$.each(ty.dulst.game.get("stats"),function(e,t) {
ty.t("dulstPlayStat-opponent", {stat:t}).css("bottom",44*e).appendTo("#opponent-stats"),ty.t("dulstPlayStat-me", {stat:t}).css("top",44*e).appendTo("#me-stats")
}),$("#playContainer").css( {width:o,height:r,"margin-top":l}),$("#dulstBoardEditorGridContainer").append(ty.t("dulstBoardGrid",v)),h&&"grid"==h.type) {
      $("#playContainer").append(ty.t("dulstPlayGrid",v));
      var _=o;
o>r&&(_=r),w=_/(g+2),c=w-C,n=c*x,$("#dulstPlayGrid .gridSpace").globalcss("height",w).css("width",w),$("#dulstPlayGrid").css( {height:w*g,"padding-top":(r-w*g)/2,"padding-left":(o-w*g)/2,width:w*g})
    }$("#playContainer .card").globalcss("height",c),$("#playContainer #board .row, #playContainer .side-spot").globalcss("height",w),$("#playContainer .side-spot").globalcss("width",n+20),$("#playContainer .stats .count").globalcss("width",n-8),h?$("#opponent-avatar").remove():($("#opponent-avatar").height(c).width(n),$("#opponent-avatar .avatar").height(n).width(n),$("#opponent-avatar .name").css("line-height",c-n-14+"px"),$("#opponent-avatar .name").css("font-size",c-n-14+"px")),$("#board-left").css("top",w),$("#board-right").css("top",0),$("#board-right").css("left",i+n+20),$("#me-hand, #opponent-hand").css("height",w).css("left",n+20),$("#opponent-hand").css("top",0),$("#me-hand").css("top",i+w);
    var k=a.width()-o,T=0;
k>302&&(T=(k-302)/2-5,$("#playContainer").css("margin-right",T),$("#cardShowArea").css( {"margin-left":T,"margin-top":l}),k=302),$("#cardShowArea").css("width",k);
    var S,E,I=190,N=380;
    S=$("#playContainer").position().left+$("#playContainer").width()/2-N/2,E=$("#playContainer").position().top+$("#playContainer").height()/2-I/2;
    var D=$('<div id="matchChat" />');
    $("#cardShowArea").append(D);
    D.find(".chatLog").css("height","6em");
    var P=Math.floor($("#dulstBoardEditorGridContainer").width()/f),A=Math.floor($("#dulstBoardEditorGridContainer").height()/p);
    $("#dulstBoardEditorGridContainer, #playContainer").css("width",P*f),$("#dulstBoardEditorGridContainer, #playContainer").css("height",A*p),$("#cardShowArea").html(ty.t("dulstBoardAreaEditor", {})),d=$("#dulstBoardEditorGridContainer td").height(),u=$("#dulstBoardEditorGridContainer td").prop("clientWidth")
  }
      var n,i,o,r,s,a=this,l=0;
  ty.dulst.boardID=e;
var c,d,u,h=ty.dulst.game.get("layout"),f=64,p=64,m=Backbone.Model.extend( {parse:function() {
    var e= {};
    return e
},defaults:{title:"new board element",x:0,y:0,height:5,width:5,type:"stack"},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/boards/"+this.id
  }
                                                                             });
a.ElementsList=Backbone.Collection.extend( {model:m}),a.ElementsListView=ty.View.extend( {initialize:function() {
    var e=this;
    a.collection.bind("add",e.addOne),a.collection.bind("reset",e.render),_.bindAll(this,"addOne","addAll","render"),e.render(),e.addAll()
},events:{"click #createSetButton":"addNew"},render:function() {},addNew:function() {
new SetEditView( {model:a.collection.create()})
},addOne:function(e) {
new a.ElementListItemView( {model:e})
},addAll:function() {
    a.collection.each(this.addOne),a.rendered=!0
  }
}),a.BoardAreaEditView=ty.View.extend( {initialize:function() {
    var e=this;
    this.render(),this.model.bind("change",function() {
      e.render()
    })
},events:{"click .save":"save","click .add":"add"},add:function() {
    function e(e,t) {
      return Math.floor(Math.random()*(t-e+1)+e)
    }
           var t="hsl("+e(1,359)+",100%,"+e(40,60)+"%)";
a.collection.add( {color:t})
},save:function() {
a.boards.main.elements=a.collection.toJSON(),ty.dulst.game.save( {boards:a.boards})
},render:function() {
    var e=this;
return $("#cardShowArea").html(e.form("dulstBoardAreaEditor", {autoSave:!1,autoSet:!0}).el),this.delegateEvents(),e
  }
}),a.ElementListItemView=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render");
    var e=this;
    this.model.bind("change",function() {
      e.render()
    }),this.model.view=this,this.render(),this.edit()
},events:{"mousedown .element":"edit"},edit:function() {
    var e=this;
new a.BoardAreaEditView( {model:e.model}),$("#dulstBoardElementContainer>div").removeClass("active"),this.$el.addClass("active")
},drag:function() {
    var e=this,t=e.model.toJSON(),n=u*e.model.get("x"),i=d*e.model.get("y"),o= {};
o.heightpx=d*t.height,o.widthpx=u*t.width,mirrorLeft=u*(p-t.x)-o.widthpx,mirrorTop=d*(f-t.y)-o.heightpx,e.el.find(".elementOriginal").css( {top:i,left:n}),e.el.find(".elementMirror").css( {top:mirrorTop,left:mirrorLeft})
},render:function() {
    var e=this,t=e.model.toJSON(),n= {};
return n.heightpx=d*t.height,n.widthpx=u*t.width,n.left=u*t.x,n.top=d*t.y,n.mirrorLeft=u*(p-t.x)-n.widthpx,n.mirrorTop=d*(f-t.y)-n.heightpx,e.element("boardElementItemTemplate",n),e.el.appendTo("#dulstBoardElementContainer").addClass("active"),e.el.find(".elementOriginal").draggable( {snap:!0,containment:"#playContainer",cursor:"move",stop:function(t,n) {
      var i=n.position.top,o=n.position.left,r=0,s=0,a=o/u;
      r=o%u>u/2?Math.ceil(a):Math.floor(a);
      var l=i/d;
s=i%d>d/2?Math.ceil(l):Math.floor(l),e.model.set( {y:s,x:r})
    }
                                                                                                                                                                                                                                                                                                 }),e
  }
  }),ty.load("dulst/boardEditor",function() {
    ty.get("dulst/"+ty.dulst.gameID+"/boards",function(e) {
t(),a.boards=e,a.collection=new a.ElementsList(e.main.elements),a.elementsListView=new a.ElementsListView( {collection:a.collection})
    })
  });
  ty.route.sectionClose("dulstPlay",function() {
    $("body").removeClass("dulstPlay"),$("#dulstPlayCSS").remove(),$("style[id=dulstPlayCSS]").remove()
  })
},ty.dulst.buildDeckView=function(e,t,n,i) {
  var o=1;
  i&&(o=i),n&&(e.find("."+t+" .card-list-container").prepend(n),n.hasClass("same-card")&&(i||(o=n.children(".card").length)));
  var r=e.find(".cardStats"),s=r.find("li ."+t),a=s.html();
  isNaN(a)?s.html("1"):(a=parseInt(a,10),s.html(a+o));
  var l=r.find(".total").html();
  isNaN(l)?r.find(".total").html("1"):(l=parseInt(l,10),r.find(".total").html(l+o))
},ty.dulst.cardIdeasInterface=function() {
var e=this,t=ty.dulst.gameID,n=Backbone.Model.extend( {idAttribute:"nid",defaults:{title:"New Card Idea",ntype:"cardIdea",cards:[]},url:function() {
    return"/api/dulst/"+t+"/cardIdea/"+this.id
  }
}),i=Backbone.Collection.extend( {model:n,comparator:function(e) {
    return e.get("level")
},url:function() {
    return"/api/dulst/"+t+"/cardIdea"
  }
}),o=ty.View.extend( {tagName:"li",className:"cardIdea dulstRow",initialize:function() {
    _.bindAll(this,"render","discuss","open"),this.model.bind("change",this.render),this.model.view=this
},events:{"click .edit":"edit","click .title":"open","click .accept":"accept","click .discuss":"discuss","click .needsRevision":"needsRevision","click .active":"active","click .deny":"deny"},discuss:function() {
var e=this,t=$("<div />", {"class":"fieldComment"}).dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:600,width:600,title:"Discuss "+e.model.get("title"),close:function() {
      t.dialog("destroy").remove(),ty.realtime.leave(e.model.get("nid"))
},buttons:[{text:"Close",click:function() {
      $(this).dialog("close")
    }
               }]
                                                            }),n=$("<div />", {"class":"comments"});
t.append(n),t.css( {overflow:"auto"}),n.comment(e.model.get("nid")),t.postBox(e.model.get("nid"))
},edit:function() {
    var e=this;
new r( {model:e.model})
},open:function() {
    var e=this;
    if($(e.el).hasClass("open"))$(e.el).find(".rowInner").css( {height:25}),setTimeout(function() {
      $(e.el).removeClass("open"),$(e.el).find(".card-list-container").empty()
    },500);
    else {
      var t=e.model.get("cards");
t.length>0&&ty.post("dulst/cards", {cards:t},function(t) {
        $(e.el).find(".card-list-container").empty(),_.each(t,function(t) {
          t.url="/game-"+t.gameID+"/cards/"+t.nid+"/"+ty.url(t.title),$(e.el).find(".card-list-container").prepend(ty.t("cardListItemTemplate",t))
        })
      }),$(e.el).addClass("open").find(".rowInner").animateAuto("height",function(t) {
$(e.el).find(".rowInner").css( {height:t})
      })
    }
},needsRevision:function() {
    var e=this;
e.model.save( {cardIdeaStatus:"needsRevision"})
},active:function() {
    var e=this;
e.model.save( {cardIdeaStatus:"active"})
},accept:function() {
    var e=this,t=e.model.get("user");
ty.dialog.prompt("How many points should be awarded to "+t+" per card?", {title:"Points Reward",value:750},function(n) {
ty.dialog.prompt("How many coins should be awarded to "+t+" per card?", {title:"Coins Reward",value:15e3},function(i) {
ty.post("dulst/"+ty.dulst.gameID+"/cardIdea/"+e.model.get("nid")+"/accept", {coins:i,points:n},function() {
e.model.fetch( {error:function() {
            e.el.notify("error")
},success:function() {
ty.node.create( {fieldBody:"I accept this offer with sincere thanks to "+t+". "+t+" will receive "+i+" coins and "+n+" points per card as appreciation for the contribution.",title:'Offer "'+e.model.get("title")+'" Accepted',fieldReference:e.model.get("nid")})
          }
                         })
}),analytics.track("Accept Card Idea", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
      })
    })
},deny:function() {
    var e=this;
e.model.save( {cardIdeaStatus:"denied"}),analytics.track("Deny Card Idea", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
},render:function() {
    var e=this,t=e.model.toJSON(),n=ty.t("cardIdeaRowTemplate",t);
    return"needsRevision"==t.cardIdeaStatus?$(e.el).removeClass("open").html(n).appendTo("#needsRevisionOffers"):"accepted"==t.cardIdeaStatus?$(e.el).removeClass("open").html(n).appendTo("#acceptedOffers"):"denied"==t.cardIdeaStatus?$(e.el).removeClass("open").html(n).appendTo("#deniedOffers"):$(e.el).removeClass("open").html(n).appendTo("#activeOffers"),e
  }
}),r=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render","addCard","update","removeCard"),this.model.view=this,this.render(),this.model.bind("change",this.update)
},events:{"click .offerCurrentCard":"addCard","click .close":"removeCard"},removeCard:function(e) {
    var t=this,n=$(e.target).parent().attr("data-cardid"),i=_.without(t.model.toJSON().cards,n);
t.model.save( {cards:i})
},addCard:function() {
    var e=this,t=e.model.toJSON(),n=ty.dulst.cardsInterface.cardID;
t.cards.push(n),e.model.save( {cards:_.uniq(t.cards)}),e.update()
},update:function() {
    var e=this,t=e.model.get("cards");
t.length>0&&ty.post("dulst/cards", {cards:t},function(t) {
      $(e.el).find(".cards").empty(),_.each(t,function(t) {
        $(e.el).find(".cards").prepend(ty.t("cardInOfferTemplate",t))
      })
    })
},render:function() {
    var t=this;
e.cardIdeaEditor&&e.cardIdeaEditor.dialog("close"),e.cardIdeaEditor=t.form("createCardIdeaTemplate").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:548,width:364,title:"Edit Card Offer",close:function() {
      t.model.save(),$(t.el).dialog("destroy").remove(),delete e.cardIdeaEditor
},buttons:[{text:"Offer Another Set of Cards",click:function() {
      e.cardIdeas.offerCard()
    }
},{text:"Close",click:function() {
      $(this).dialog("close")
    }
                 }]
                                                                                                                    });
    var n=t.model.get("cards");
return n.length>0&&ty.post("dulst/cards", {cards:n},function(e) {
      _.each(e,function(e) {
        $(t.el).find(".cards").prepend(ty.t("cardInOfferTemplate",e))
      })
    }),t
  }
}),s=ty.View.extend( {id:"content",initialize:function() {
    var t=this;
    return e.collection.bind("add",t.addOne),e.collection.bind("reset",t.addAll),_.bindAll(t,"addOne","addAll","render"),$("#dulstMenu li").removeClass("active"),$("#dulstMenu .cardIdeas").addClass("active"),t.render(),this
},render:function() {
    var e=this;
    return ty.load("dulst/cardsInterface",function() {
      $(e.el).html(ty.t("cardIdeasContainerJade", {})),$("#content").replaceWith(e.el),e.addAll()
    }),this
},events:{"click #createCardIdeaButton":"offerCard","click #forkGame":"forkGame","click .viewAccepted":"viewAccepted"},viewAccepted:function() {
    ty.dulst.cardIdeas.copyContainer.dialog("open")
},forkGame:function() {
ty.dialog.choice("Do you want to create a default new game (recommended for use as a sandbox to experiment with new ideas) or start a new game using the cards of this game as template?", {choices:["Default New Game","Copy/Fork This Game"]},function(e) {"Blank New Game"==e?(ty.get("dulst/102394/cardIdeas/fork",function(e) {
        ty.redirect("game-"+e)
}),analytics.track("Fork Blank New Game", {user:user,gameID:ty.dulst.gameID,module:"dulst"})):(flashMessage("Forking... Forking can take a while... Please be patient."),ty.get("dulst/"+ty.dulst.gameID+"/cardIdeas/fork",function(e) {
        ty.redirect("game-"+e)
}),analytics.track("Fork Existing Game", {user:user,gameID:ty.dulst.gameID,module:"dulst"}))
    })
},offerCard:function() {
analytics.track("Offer Card", {user:user,gameID:ty.dulst.gameID,module:"dulst"}),new r( {model:e.collection.create()})
},addOne:function(e) {
var t=new o( {model:e});
    t.render()
},addAll:function() {
    e.collection.each(this.addOne)
  }
                                                                                                                                                        });
return e.collection=new i,e.collection.fetch( {success:function() {
e.cardIdeas=new s( {collection:e.collection})
},error:function() {
    $("body").notify("error")
  }
                                                }),this
},ty.dulst.decks=function() {
  function e(e,n,i) {
    function o(e,n) {
t.library=new l(e),t.library._view=new h( {model:t.library}),t.library._view.render(),_.isUndefined(t.deckCollection)&&(t.deckCollection=new d(n),t.deckCollection._view=new f( {model:t.deckCollection})),ty.dulst.hoverPreview.on(),ty.route.sectionClose("deck",function() {
        t= {},$("#main").html('<div id="content"></div>'),$("#card-list-container .card, #deck-container .card").die("mouseover"),$("#card-list-container .card, #deck-container .card").die("mouseout"),ty.dulst.hoverPreview.destroy()
      }),i&&i(n)
    }
var r=e,s=ty.dulst.gameTitle,a=ty.dulst.gameID,l=Backbone.Model.extend( {idAttribute:"cardID",url:function() {
      return"/api/dulst/"+t.gameID+"/library/"+r
    }
}),c=Backbone.Model.extend( {idAttribute:"nid",url:function() {
      return"/api/dulst/"+t.gameID+"/deck/"+this.id
    }
}),d=Backbone.Collection.extend( {model:c,comparator:function(e) {
      return e.get("title")
},url:function() {
      return"/api/dulst/"+t.gameID+"/deck/"+r
    }
}),u=ty.View.extend( {initialize:function() {
      _.bindAll(this,"render","create"),this.model.bind("change",this.create),this.model.view=this,this.create(),this.render()
},create:function() {
      this.element("deckListItemTemplate")
},render:function() {
      var e=this;
      return $("#decksList").append(e.el),this
    }
}),h=ty.View.extend( {initialize:function() {
      _.bindAll(this,"render"),this.model.bind("change",this.render),this.model.view=this
},events:{"click #allCardsButton":"allCards","change .filterByClass":"filterByClass"},filterByClass:function(e) {
      var t=$(e.currentTarget).val();
      if(t.length>0) {
        t=t.toLowerCase(),$("#dulstCreateFilterCss").remove(),$("style[id=dulstCreateFilterCss]").remove();
        var n=$('<style id="dulstCreateFilterCss"></style>');
        n.appendTo(this.el),n.html('#card-list-container .card-list-container .card[data-class*="'+t+'"] {display: block; } #card-list-container .card-list-container .card {display: none; } ')
      } else $("#dulstCreateFilterCss").remove(),$("style[id=dulstCreateFilterCss]").remove()
},allCards:function() {
      $("#card-list-container").find(".card-list-container").empty(),ty.dulst.cardsInterface.listCards(a,s)
},render:function() {
      var e=this;
      e.element("dulstPlayerCollection"),r==user?e.el.find("h2").text("My Cards"):e.el.find("h2").text(r+"'s Cards"),e.el.find(".filterByClass").css("display","block");
      var t=$("#main").width()/2-6;
      ty.dulst.setCardWidth(t),$("#content").html(e.el);
      var n=_.sortBy(e.model.toJSON(),function(e) {
        return e.card.title?String.fromCharCode.apply(String,_.map(e.card.title.split(""),function(e) {
          return 65535-e.charCodeAt()
        })):void 0
        });
      return $.each(n,function(e,t) {
        if(t.card&&t.card.gameID==a&&t.count>0) {
          t.card.count=t.count;
          var n=ty.t("deckItemViewTemplate",t.card).data("json",t.card);
          cardClass=t.card["class"],_.isArray(cardClass)&&(cardClass=cardClass.join().toLowerCase());
          var i=n;
          i.attr("data-class",cardClass),ty.dulst.buildDeckView($("#card-list-container"),n.attr("data-type"),i,t.count)
        }
      }),this
    }
                                                                                                                                                                                   });
t.deckView=ty.View.extend( {tagName:"div",initialize:function() {
      this.render()
},render:function() {
      function e() {
        var e,t,n= {};
        $("#deck-container .same-card").each(function() {
          e=$(this).attr("data-cardID"),t=$(this).children().length,n[e]=t
}),i.model.save( {cards:n})
      }
      var i=this;
      n=i.model.get("nid"),user!=r&&$("#content-right header.deck").addClass("notUser"),i.element("deckView");
      var o=ty.t("cardListContainer", {});
      if(o.attr("id","deck-container"),i.el.find("header.deck").after(o),$("#content-right").html(i.el),user==i.model.get("user")) {
        var s=t.deckCollection.find(function(e) {
          return"useDeck"==e.get("useDeck")
        });
s&&s.id!=i.model.id?(s.unset("useDeck").save(),t.deckCollection.get(i.model.id).set( {useDeck:"useDeck"}).save()):t.deckCollection.get(i.model.id).set( {useDeck:"useDeck"}).save(),$("#card-list-container").undelegate("click").delegate(".card-preview","click",function() {
          var t=$(this),n=t.attr("data-cardID"),o=ty.dulst.game.get("maxCardsPerDeck"),r=t.data("json");
          if(r) {
            if(r.max&&(o=parseInt(r.max)),0==o)return t.notify("This card cannot be put into a deck."),void 0;
            if(i.model.attributes.cards&&i.model.attributes.cards[n]>=o)return 1==o?t.notify("Only 1 copy of this card may be put into a deck."):t.notify("Only "+o+" copies of this card may be put into a deck."),void 0
            }
          if(ty.dulst.game.get("deckSizeMax")) {
            var s=parseInt(ty.dulst.game.get("deckSizeMax"),10);
            if(parseInt($("#deck-container .cardStats .totalcards span").text(),10)>=s)return $(this).notify("You can't put more than "+s+" cards into a deck."),void 0
            }
          var a=ty.dulst.game.get("cardTypes"),l=_.find(a,function(e) {
            return e.name==r.type
          }),c=parseInt($("#deck-container .cardStats ."+r.type+" span").text(),10);
          if(c>=l.maxCopies)return $(this).notify("You may only put up to "+l.maxCopies+" "+r.type+" cards into a deck."),void 0;
          var d,u,h=t.offset(),f=t.clone().addClass("clonedAnimation").appendTo("body").css(h);
          if(parseInt($(this).find(".count").text(),10)>0) {
            var p=$(this).clone(!0);
            if(p.find(".count").remove(),p.addClass("moving"),1!=$("#deck-container").find('.same-card[data-cardID="'+n+'"]').length) {
              var m=$("<div class='same-card' data-cardID='"+n+"'></div>").append(p);
              ty.dulst.buildDeckView($("#deck-container"),$(this).attr("data-type"),m)
            } else ty.dulst.buildDeckView($("#deck-container"),$(this).attr("data-type")),$("#deck-container").find('.same-card[data-cardID="'+n+'"]').append(p);
            d=p.offset(),t=p;
            var g=parseInt($(this).find(".count").text(),10)-1;
            $(this).find(".count").text(g),0==g?$(this).addClass("countzero"):$(this).removeClass("countzero")
          } else f.remove(),u=!0;
u||(d.width=t.outerWidth(),f.css("width",d.width),f.find("img").css( {height:t.find("img").height(),width:t.find("img").width()}),f.css(d),setTimeout(function() {
            t.removeClass("moving"),f.remove()
          },400)),e()
        }),o.delegate(".card-preview","click",function() {
          var t=$(this),n=t.offset(),i=t.clone().addClass("clonedAnimation").appendTo("body").css(n);
          t.addClass("moving");
          var o,r,s=$(this).attr("data-cardID");
$(this).remove(),r=$("#libraryCards").find('.card[data-cardID="'+s+'"]'),r.removeClass("countzero").find(".count").text(Math.round(r.find(".count").text())+1),o=r.offset(),o.width=r.outerWidth(),i.css("width",o.width),i.find("img").css( {height:r.find("img").height(),width:r.find("img").width()}),i.css(o),setTimeout(function() {
            t.removeClass("moving"),i.remove()
          },400);
          var a=$(this).attr("data-type"),l=$("#deck-container").find(".cardStats"),c=l.find("li ."+a),d=parseInt(c.html(),10);
          isNaN(d)?c.html("0"):c.html(d-1);
          var u=parseInt(l.find(".total").html(),10);
          isNaN(u)?l.find(".total").html("1"):l.find(".total").html(u-1),e()
        }),$("#content-right").find(".fieldText.name").die("change").live("change",function() {
          var e=$(this).val();
t.deckCollection.get(i.model.id).set( {title:e}),t.deckCollection.get(i.model.id).save()
        })
      }
      t.deckCollection._view.render();
      o.find(".cardStats");
      if(i.model.toJSON().cards) {
        var a=t.library.attributes;
        $.each(i.model.toJSON().cards,function(e,t) {
          var n,i,t=parseInt(t,10),e=parseInt(e,10),r=$("<div class='same-card' data-cardID='"+e+"'></div>"),s=+a[e];
          t>s&&(t=s),i=$("#card-list-container .card-preview."+e).first();
          for(var l=0; t>l; l++)n=i.clone(!0),n.find(".count").remove(),r.append(n);
          var c=parseInt(i.find(".count").text(),10)-t;
          i.find(".count").text(c),0==c?i.addClass("countzero"):i.removeClass("count"),n&&n.length>0&&ty.dulst.buildDeckView(o,n.attr("data-type"),r,t)
        })
      }
      return this
    }
                               });
var f=ty.View.extend( {initialize:function() {
      var e=this;
      _.bindAll(e,"addOne","addAll","render"),t.deckCollection.bind("add",e.addOne),t.deckCollection.bind("reset",e.addAll),t.deckCollection.bind("all",e.render)
},render:function() {
      var e=this;
      $("#decksList").empty(),$("#newDeckButton").unbind("click").bind("click",function() {
        e.createOnClick()
      }),e.addAll()
},addOne:function(e) {
new u( {model:e})
},addAll:function() {
      t.deckCollection.each(this.addOne)
},createOnClick:function() {
t.deckCollection.create( {title:"new deck",ntype:"deck",gameID:t.gameID,user:user}, {success:function(e) {
ty.redirect(ty.dulst.subdomain+"/"+user+"/decks/"+e.attributes.nid+"/"+ty.url(e.attributes.title)),analytics.track("Create New Deck", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
      }
                                                                                          })
    }
                          });
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .decks").addClass("active"),(_.isUndefined(t.gameID)||t.gameID!=a)&&($("#main").html('<div id="content" class="half"></div><div id="content-right"></div>'),t.gameID=a,t.gameTitle=s),ty.get("dulst/"+a+"/library/"+r,function(e) {
      if(e&&"failed"!=e.status) {
        var t=e.pop();
        t&&$.event.trigger("dulst:newPlayerJoinGame"),ty.get("dulst/"+a+"/deck/"+r,function(t) {
          0==t.length?$("#main").notify(r+" is choosing to keep his or her cards private."):o(e,t)
        })
      } else ty.dulst.staff?$("#main").notify("You cannot manage your personal decks yet, the game is incomplete. It needs a starter deck with at least 40 cards in it. To manage the Starter Deck, select Starter Collection from the Admin Menu, make sure you have cards in there, and then go to the Starter Deck.",function() {
        $("#main").notify("Let us go to the Starter Collection. The Starter Collection is the collection of cards new players will be given upon joining the game. You need to put some cards in it, and from those cards you can put some into the starter deck.",function() {
          ty.redirect(ty.dulst.subdomain+"/starterCollection")
        })
      }):$("#main").notify("You cannot manage your decks yet, the game is incomplete. It needs a starter deck with at least 30 cards in it. Please ask the admin of your game to fill out the starter deck and the starter collection.")
      })
  }
  var t= {};
return {decksList:
  function(t) {"anon"!=t?e(t,void 0,function(e) {
      var n=_.find(e,function(e) {
        return"useDeck"==e.useDeck
      });
      n||(n=e[0]);
      var i=ty.dulst.subdomain+"/"+t+"/decks/"+n.nid+"/"+ty.url(n.title);
      ty.redirect(i)
    }):$("#content").notify("Please login first")
},showDeck:
  function(n,i) {
    e(n,i,function() {
t.deckView._view=new t.deckView( {model:t.deckCollection.get(i)})
    })
  }
         }
}(),ty.dulst.effectBuilderPrepare=function(e) {
  ty.dulst.ebc&&ty.dulst.ebc.gameID==ty.dulst.gameID?e&&e():ty.load("dulst/effectbuilder",function() {
var t= {undoEvents:{},events:
    {},cardProperties:
    {},passing:
    {}
           },n=[];
    ty.dulst.game.get("cardTypes")&&(_(ty.dulst.game.get("cardTypes")).each(function(e) {
      n=n.concat(e.properties).concat(e.secondaryProperties)
    }),n=_.uniq(n)),ty.dulst.cardsInterface.cardCollection.each(function(e) {
      var i,o=e.get("effects");
      o&&o.length>0&&o.forEach(function(e) {
        if(e) {
          if(e.action) {
            if(e.action.undo&&e.action.undo.event) {
              i=i|| {},i.undoEvents=i.undoEvents|| {};
              var t=e.action.undo.event; "string"
              ==typeof t&&(t=t.split(","));
              for(var o=0; o<t.length; o++)i.undoEvents[$.trim(t[o])]=1
              }
            if(e.action.event&&e.action.event.primary) {
              i=i|| {},i.events=i.events|| {};
              var t=e.action.event.primary,r=""; "string"
              ==typeof t&&(t=t.split(","));
              for(var o=0; o<t.length; o++)r=$.trim(t[o]),"removeFromBoard"!=r&&"pre-moveCard"!=r&&"post-moveCard"!=r&&"useEffect"!=r&&"post-statIncrease"!=r&&"pre-invoke"!=r&&(i.events[r]=1)
              }
          }
          if(e.target) {
            if(e.target.criteria&&e.target.criteria.passing) {
              i=i|| {},i.passing=i.passing|| {};
              var s=e.target.criteria.passing; "string"
              ==typeof s&&(s=s.split(",")),s.forEach(function(e) {
                e=$.trim(e.replace("effect ","")),isNaN(e)&&"this card"!=e&&"invoked unit"!=e&&"attacker"!=e&&"chained card"!=e&&"attack target"!=e&&"give effect target"!=e&&"effect target"!=e&&"effect"!=e&&(i.passing[e]=1)
              })
            }
            if(e.target.cardProperty) {
              i=i|| {},i.cardProperties=i.cardProperties|| {};
              var a=e.target.cardProperty; "string"
              ==typeof a&&(a=a.split(",")),a.forEach(function(e) {
                e=$.trim(e),-1==n.indexOf(e)&&-1!=a.indexOf(e)&&"name"!=e&&"playerNumber"!=e&&"count"!=e&&"position"!=e&&(i.cardProperties[e]=1)
              })
            }
          }
        }
      }),_.each(i,function(n,o) {
        _.each(i[o],function(n,i) {
          t[o][i]?t[o][i].push(e.get("nid")):t[o][i]=[e.get("nid")]
        })
      })
    }),_.each(t,function(e,n) {
      e=_(e).map(function(e,t) {
return {length:
        e.length,name:
                t
               }
      }),e=_.sortBy(e,function(e) {
        return e.length
      }),e.reverse(),t[n]=_.compact(_.map(e,function(e) {
        return e.length>1?e.name:void 0
      }))
    }),t.cardProperties=n.concat(t.cardProperties.slice(0,10)),ty.dulst.ebc=ty.t("effectBuilder",t),ty.dulst.ebc.gameID=ty.dulst.gameID,ty.dulst.eb=ty.dulst.ebc.find("#effect-builder"),ty.dulst.ebc.find("header .edit").click(function() {
      if(!$(this).prev("input").is(":visible")) {
        var e=$(this).parent().children("span.name").text();
        /^effect /.test(e)&&(e=""),$(this).prev("input").css("display","inline").val(e).focus(),$(this).parent().children("span.name").hide()
      }
    }),ty.dulst.eb.delegate("label","click",function() {{
        var e=$(this);
        e.parent()
      }
      if(e.parent().hasClass("showing"))e.parent().removeClass("showing").addClass("hiding"),e.parent().children(".option,input,.category").hide();
      else {
        e.parent().removeClass("hiding").addClass("showing"),e.parent().children(".option,.primary").show().removeClass("hiding").addClass("showing");
        var t=e.parent().children(".primary").find(".selected");
        if(e.parent().hasClass("effect-category")&&e.parent().children(".primary").children(".option:not(.radio)").show().removeClass("hiding").addClass("showing"),t.hasClass("inputNext")&&t.next().show(),t.length>0) {
          var n=[];
          t.parent().find(".selected").each(function() {
            $(this).attr("data-category")&&$(this).attr("data-category").split(",").forEach(function(e) {
              n.push(e)
            })
          }),e.parent().find("div.category:not(.primary)").each(function() {
            -1!=n.indexOf($(this).attr("name"))?$(this).show().addClass("showing").removeClass("hiding"):($(this).hide().addClass("hiding").removeClass("showing"),$(this).find(".selected").removeClass("selected"))
          })
        }
      }
    });
    var i=.8*$(window).width();
    i>900&&(i=900);
    var o=.8*$(window).height();
o>660&&(o=660),ty.dulst.ebc.dialog( {dialogClass:"effect-builder",title:"Effects Builder",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,resizable:!0,width:i,height:o,open:function() {
      clearTimeout(ty.dulst.ebc.timeOut),$("#content-right .cardPropertiesEdit").addClass("stay-editMode")
},close:function() {
      clearTimeout(ty.dulst.ebc.timeOut),ty.dulst.ebc.timeOut=setTimeout(function() {
        $("#content-right .cardPropertiesEdit").removeClass("stay-editMode")
      },2e3)
},buttons:[{text:"Previous Line",click:function() {
      var e=ty.dulst.eb.data("buildIndex")-1;
      $(this).dialog("close"),$("#effects-display>.effect-item").get(e)&&$($("#effects-display>.effect-item").get(e)).trigger("click")
    }
},{text:"Next Line",click:function() {
      var e=ty.dulst.eb.data("buildIndex")+1;
      $(this).dialog("close"),$("#effects-display>.effect-item").get(e)&&$($("#effects-display>.effect-item").get(e)).trigger("click")
    }
},{text:"Code View",click:function() {
      ty.dulst.eb.advancedCodeView(),$(this).dialog("close")
    }
},{text:"Duplicate Effect",click:function() {
      ty.dulst.eb.duplicateEffect(),$(this).dialog("close")
    }
},{text:"Delete Effect",click:function() {
      ty.dulst.eb.deleteEffect(),$(this).dialog("close")
    }
},{text:"Close",click:function() {
      $(this).dialog("close")
    }
                         }]
}),ty.dulst.ebac=$("<textarea>", {id:"advancedCodeView","class":"fieldText"}),ty.dulst.ebac.dialog( {dialogClass:"effect-builder",title:"Effects Builder Code View",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,minWidth:382,height:500,close:function() {
      try {
        var e=ty.dulst.cardsInterface,t=e.cardCollection.get($(this).data("backboneID"));
t.set( {effects:$.parseJSON($(this).val())}),t.save(),e.currentCard_view.populateEffectsDisplay()
      } catch(n) {
        console.log(n.stack),$("body").notify("Invalid Code")
      }
},buttons:[{text:"Close",click:function() {
      $(this).dialog("close")
    }
               }]
                                                                                                                                            }),e&&e()
  })
},ty.dulst.forums=function(e,t,n) {
var i=Backbone.Model.extend( {idAttribute:"nid"}),o=Backbone.Collection.extend( {model:i,comparator:function(e) {
    return e.get("rt")?e.get("rt"):e.get("ut")?e.get("ut"):e.get("ct")
  }
}),r=ty.View.extend( {initialize:function() {
    _.bindAll(this)
},render:function(e) {
    this.form("forumUserOptions").el.appendTo(e)
  }
}),s=ty.View.extend( {tagName:"li",className:"topic",initialize:function() {
    _.bindAll(this),this.model.bind("change",this.render),this.model.view=this
},render:function() {
var e=this,t=e.model.toJSON(),n= {url:"/"
                                      +ty.dulst.subdomain+"/forums/topic/"+t.nid+"/"+ty.url(t.title)
                                     };
    return t.posts||(n.posts=0),n.lr=t.lr|| {},n.lr.ct||n.ut?n.lr.ct||(n.lr.ct=t.ut):n.lr.ct=t.ct,n.lr.user||(n.lr.user=t.user),n.lr.ct&&(n.lr.ct=ty.formatTime(n.lr.ct)),e.element("forumTopicItem",n),e
  }
}),a=ty.View.extend( {initialize:function() {
    _.bindAll(this),this.model.bind("change",this.render),this.model.view=this
},render:function() {
var e=this,t=e.model.toJSON(),n= {url:"/"
                                      +ty.dulst.subdomain+"/forums/topic/"+t.nid+"/"+ty.url(t.title)
                                     };
    if(t.posts||(n.posts=0),n.lr=t.lr|| {},n.lr.ct||n.ut?n.lr.ct||(n.lr.ct=t.ut):n.lr.ct=t.ct,n.lr.user||(n.lr.user=t.user),n.lr.ct&&(n.lr.ct=ty.formatTime(n.lr.ct)),e.element("issueTopicItem",n),t.fieldStatus&&t.fieldStatus.issue) {
      var i=["Fixed","Duplicate","Resolved"];
      t.fieldStatus.issue=_.str.capitalize(t.fieldStatus.issue),-1!=i.indexOf(t.fieldStatus.issue)&&e.el.addClass("resolved"),e.el.attr("data-issue",t.fieldStatus.issue)
    }
                        return e
  }
  }),l=function() {
    function i(e,t) {
      if("undefined"!=typeof e)for(var n=0; n<e.length; n++) {
          if(e[n].title==t)return[e[n].nid];
          var o=i(e[n].sub,t);
          if(null!=o)return o.unshift(e[n].nid),o
          }
                        return null
    }
    if("forum"==e) {
      var o=ty.forum[ty.dulst.gameID].structure,r=i(o,t);
      r?(t=r[r.length-1],-1==r.indexOf(ty.dulst.gameID)&&r.unshift(ty.dulst.gameID),$("#content .postBoxContainer").postBox(r,function(e) {
        e.find("textarea").attr("placeholder","What's on your mind?")
      })):$("#content .postBoxContainer").postBox([t],function(e) {
        e.find("textarea").attr("placeholder","What's on your mind?")
      }),ty.realtime.leave(ty.dulst.forums.current);
      var s=["1005","14658","8858","14656","14657"],a="hide";
ty.user.current.profile&&ty.user.current.profile.attributes&&(a=ty.user.current.profile.attributes.showClosed),-1==s.indexOf(t)?ty.realtime.join(t,"ty.dulst.forums", {page:n,showClosed:a,gameID:ty.dulst.gameID}):ty.realtime.join(t,"ty.dulst.forums", {showClosed:a,page:n}),ty.dulst.forums.current=t
    } else"post"==e&&(ty.node.load(t,function(e) {
ty.realtime.leave(ty.dulst.node.current),ty.dulst.node.current=t,ty.node.render(e, {template:"forumTopicTemplate"},function(e) {
        $("#content").find(".topics").hide().find("#topicsList").empty(),$("#content").find(".nodeView").show().html(e)
      })
    }),ty.route.sectionClose("nodeView",function() {
      ty.realtime.leave(t)
    }))
  };
  ty.forum.active?l():($("#dulstMenu li").removeClass("active"),$("#dulstMenu .forums").addClass("active"),ty.load("dulst/cardsInterface",function() {
    var e=ty.t("dulst/forumsContainer");
    $("#content").html(e),ty.get("forum/forums/"+ty.dulst.gameID,function(t) {
t=t|| {structure:
             []
},ty.forum[ty.dulst.gameID]=1005!=ty.dulst.gameID? {structure:[{nid:ty.dulst.gameID,title:ty.dulst.gameTitle,sub:t.structure},{nid:"1005",title:"Dulst",sub:[{title:"Blog",nid:"14658",sub:""},{title:"Effect-Building",nid:"8858",sub:""},{title:"Dulst-Suggestions",nid:"14656",sub:""},{title:"Dulst-Bug-Reports",nid:"14657",sub:""}]}]}: {
structure:
[ {nid:ty.dulst.gameID,title:ty.dulst.gameTitle,sub:t.structure}]
      },t=ty.forum[ty.dulst.gameID];
      var n=function() {
        var e=function(t,n) {
var i=ty.t("forumForumItem", {title:n.title,url:"/"+ty.dulst.subdomain+"/forums/"+n.title}).appendTo(t).find(".subforumsContainer");
          n.sub&&n.sub.forEach(function(t) {
            e(i,t)
          })
        };
        $("#forums").empty(),ty.forum[ty.dulst.gameID].structure.forEach(function(t) {
          e($("#forums"),t)
        })
      };
      n(),ty.forum.active=!0,l(),e.find(".forums .admin a").click(function() {
        var e=ty.t("dulst/forumSettings"),i=e.find(".forumAdmin"),o=function(e,t) {
var n=ty.t("forumAdminStructureForumItem", {title:t.title,nid:t.nid}).appendTo(e).find(".subforumsContainer");
          t.sub&&t.sub.forEach(function(e) {
            o(n,e)
          })
        };
        t.structure&&t.structure[0]&&t.structure[0].sub&&t.structure[0].sub.forEach(function(e) {
          o(i.children("ul.forums"),e)
        }),i.delegate(".info","click",function() {
          i.find(".selected").removeClass("selected"),$(this).addClass("selected")
        }),i.find("ul.admin li").click(function() {
          var e=i.find(".selected"),t=e.parent(".forum"),n=$(this);
          n.is(".up")?t.prev().is(".forum")&&t.insertBefore(t.prev()):n.is(".down")?t.next().is(".forum")&&t.insertAfter(t.next()):n.is(".in")?t.prev().is(".forum")&&t.appendTo(t.prev().children(".subforumsContainer")):n.is(".out")?t.parent().is(".subforumsContainer")&&t.insertAfter(t.parent().parent()):n.is(".add")?i.find(".formItem").toggle():n.is(".remove")?0==t.children(".subforumsContainer").length?t.remove():ty.dialog.confirm("This forum has subforums. Are you sure you want to remove this forum and all of its subforums from the forums tree?",function() {
            t.remove(),s(i.children("ul.forums"),[])
          }):n.is(".rename")&&i.find(".formItem").toggle(),n.is(".add")||n.is(".remove")||s(i.children("ul.forums"),[])
          });
        var s=function(e,t) {
          var i=function(e,t) {
            e.children("li.forum").each(function(e,n) {
var o= {title:
        $(n).children(".info").find(".title").text(),nid:
        $(n).children(".info").find(".nid").attr("data-nid"),sub:
                      []
                     };
              $(n).children(".subforumsContainer").length>0&&i($(n).children(".subforumsContainer"),o.sub),t.push(o)
            })
          };
i(e,t),ty.forum[ty.dulst.gameID].structure[0].sub=t,ty.put("dulst/"+ty.dulst.gameID+"/forum", {forums:t},function() {
            n()
          })
        };
i.find("input").autocomplete( {source:function(e,t) {
          ty.get("dulst/"+ty.dulst.gameID+"/forum/"+e.term,function(e) {
            t($.map(e,function(e) {
return {label:
        e.title+" (id:"+e.nid+")",nid:
                      e.nid
                     }
            }))
          })
        }
        }),i.find(".addNewForum").click(function() {
          var e=i.find("input").val();
ty.post("dulst/"+ty.dulst.gameID+"/forum", {forum:e},function(e) {
            e&&(o(i.children("ul.forums"),e),s(i.children("ul.forums"),[]))
          })
}),new r( {model:ty.user.current.profile}).render(e),ty.dulst.admin&&(e.tabs(),e.children("ul.tabs").css("display","block")),e.dialog( {autoOpen:!0,height:600,width:364,title:"Organize Forums",close:function() {
          e.dialog("destroy")
        }
                                                                                                                                               })
      })
    })
  }),ty.route.sectionClose("forums",function() {
    ty.forum.active=!1,ty.realtime.leave(ty.dulst.forums.current),delete ty.dulst.forums.current
  })),ty.dulst.forums.joinChannel=function(e) {
    ty.dulst.forums.topics=new o(e.topics),$("#forumsContainer .mainContent").find(".topics").show(),$("#forumsContainer .mainContent").find(".nodeView").hide();
    var t=$('<ul id="topicsList" />'),i=["8768","871","39333","8769","8858","14656","14657"];
    -1==i.indexOf(e.message)?(ty.dulst.forums.topics.each(function(e) {
      var n=new s( {model:e});
      t.prepend(n.render().el)
    }),ty.dulst.forums.topics.bind("add",function(e) {
var t=new s( {model:e});
      $("#topicsList").prepend(t.render().el)
    })):(ty.dulst.forums.topics.each(function(e) {
var n=new a( {model:e});
      t.prepend(n.render().el)
    }),ty.dulst.forums.topics.bind("add",function(e) {
var t=new a( {model:e});
      $("#topicsList").prepend(t.render().el)
    })),$("#topicsList").replaceWith(t);
    var r;
e.data&&e.data.page&&(r=!0,n=parseInt(e.data.page,10)),$("#forumsContainer footer.section").pagination(e.count, {current_page:n,pages:e.pages,count:e.count,link_to:"__id__",items_per_page:20,isPaging:r}),$(".postBox .formItem span.text").text("Post New Topic ")
  }
},ty.dulst.node= {update:function(e) {
  $("#node-"+e.message.nid).find(".nodeCenter>.nodeContent").html(ty.t("nodeContent",e.message))
}
},ty.dulst.forums.newNode=function(e) {
  ty.dulst.forums.topics.add(e.message)
},ty.dulst.forums.update=function(e) {
  ty.dulst.forums.topics.get(e.message.nid)?ty.dulst.forums.topics.get(e.message.nid).set(e.message):ty.dulst.forums.topics.add(e.message)
},ty.dulst.forums.topicsRemove=function(e) {
  ty.dulst.forums.topics.get(e.node.nid)&&ty.dulst.forums.topics.remove(e.node.nid)
},ty.dulst.frontPage=function() {
var e= {},t=ty.View.extend( {initialize:function() {
    this.render()
},el:"#content",events:{"click .create-new-game":"createNewGame"},createNewGame:function() {"anon"==user?ty.user.register.dialog("open"):ty.get("dulst/102394/cardIdeas/fork",function(e) {
      ty.redirect("game-"+e)
    })
},render:function() {
    $("#main").html(this.el),$(this.el).html(ty.t("dulst/frontPage"))
  }
                              });
e.gamesPreviewModel=ty.Model.extend( {address:function() {
    return"dulst/frontPage"
  }
}),e.gamesPreview=ty.View.extend( {initialize:function() {
    this.model.bind("change",this.render),this.render()
},el:"#frontPage section.games",events:{"click .marker":"marker","click .arrowRight":"moveRight","click .arrowLeft":"moveLeft"},scrollEnd:function() {
    e.scrolling=!1
},marker:function(e) {
    var t=$(e.currentTarget);
    t.is(".active")||(t.next().is(".active")?this.moveLeft():t.prev().is(".active")?this.moveRight():t.prev().prev().is(".active")?(this.moveRight(),this.moveRight(),console.log("moveRight twice")):t.prev().prev().prev().is(".active")?(this.moveLeft(),this.moveLeft()):t.prev().prev().prev().prev().is(".active")?this.moveLeft():t.next().next().is(".active")?(this.moveLeft(),this.moveLeft()):t.next().next().next().is(".active")?(this.moveRight(),this.moveRight(),this.moveRight()):t.next().next().next().next().is(".active")&&this.moveRight())
},moveRight:function() {
    var t=$("#frontPage article.games").find(".container"),n=t.width(),i=3200,o=this;
    if(!e.scrolling) {
      var r=$("#frontPage article.games .active");
      r.removeClass("active"),e.scrolling=!0,o.currentPosition++,r.is(":last-child")?$("#frontPage article.games .marker").first().addClass("active"):r.next().addClass("active"),t.scrollLeft()>=i-1200?t.scrollLeft((1200-n)/2).animate( {scrollLeft:(1200-n)/2+400},400,function() {
        o.scrollEnd()
}):t.animate( {scrollLeft:"+=400"},400,function() {
        o.scrollEnd()
      })
    }
},moveLeft:function() {
    var t=$("#frontPage article.games").find(".container"),n=t.width(),i=3200,o=this,r=$("#frontPage article.games .active");
    e.scrolling||(e.scrolling=!0,o.currentPosition++,r.removeClass("active"),r.is(":first-child")?$("#frontPage article.games .marker").last().addClass("active"):r.prev().addClass("active"),t.scrollLeft()<=400?t.scrollLeft(i-(1200-(1200-n)/2)).animate( {scrollLeft:i-(1200-(1200-n)/2)-400},400,function() {
      o.scrollEnd()
}):t.animate( {scrollLeft:"-=400"},400,function() {
      o.scrollEnd()
    }))
},render:function() {
    var e=this,t=$("#frontPage article.games"),n=t.find(".container");
    $("#frontPage section.games").find("footer").replaceWith(ty.t("frontPageGamesFooter",e.model.attributes));
    var i=e.model.get("games"),o=[i.smt,i.rso,i.nasuverse,i.nasuversepro,i.example,_.clone(i.smt),_.clone(i.rso),_.clone(i.nasuverse)];
    _.each(o,function(e) {
      var t=e.shift();
n.append(ty.t("frontPageGameItem", {game:t,cards:e}))
    });
    {
      var r=n.width();
      400*_.size(o)
    }
    n.scrollLeft((1200-r)/2),e.currentPosition=4;
    setTimeout(function() {
      $("#content .video").append($('<iframe src="http://www.youtube.com/embed/YOq6uOnogss" height="100%" width="100%" frameborder="0" />'))
    },200),$.event.trigger("socialLinks")
  }
  }),ty.load("dulst/frontPage",function() {
new t,e.model=new e.gamesPreviewModel,e.model.fetch( {success:function() {
e.matches=new e.gamesPreview( {model:e.model})
},error:function() {
      flashMessage("error")
    }
                                                         })
  })
},ty.route.bind("dulstFront",function() {
  $("body, #header, #wrapper").addClass("dulstFront"),ty.route.sectionClose("dulstFront",function() {
    $("body, #header, #wrapper").removeClass("dulstFront")
  })
}),ty.route("","dulst dulstFront",function() {
  ty.dulst.frontPage()
}),ty.dulst.gameDashboard=function() {
var e=Backbone.Model.extend( {idAttribute:"nid",url:function() {
    return"/api/dulst/"+this.id+"/game"
  }
}),t=ty.View.extend( {initialize:function(e) {
    _.bindAll(this,"render");
    var t=this;
    this.model.view=this,this.render(e.previewCards),this.model.bind("change",function() {
      t.render(e.previewCards)
    })
},events:{"click .thumb":"switchThumb","click .edit":"edit"},edit:function() {
    this.nodeEdit( {},function(e) {
      var t=e,n=$(e.el);
      n.find("#name-field").bind("change",function() {
        $("#section-title .title").text($(this).val()).trigger("change"),ty.dulst.gameTitle=$(this).val()
      }),n.find("#setSubdomainLink").click(function() {
ty.dialog.prompt("What short-name do you want this game to use?", {title:"Choose Game Short-Name",value:ty.dulst.subdomain},function(e) {
ty.post("dulst/"+ty.dulst.gameID+"/subdomain", {subdomain:e},function(e) {"success"==e.status?(t.model.save( {subdomain:e.subdomain}),n.find("#setSubdomainLink").notify("Your new subdomain is "+e.subdomain+". We shall head there now.",function() {
              ty.redirect(e.subdomain)
            })):"no change"!=e.status||n.find("#setSubdomainLink").notify("Sorry this short-name name is already taken, please choose a different short-name.")
            })
        })
      })
    })
},switchThumb:function(e) {{
      var t=$(e.currentTarget);
      t.parent().children().index(e.currentTarget)
    }
    if($(e.currentTarget).hasClass("video"))$("#gallery .galleryStage").html('<iframe src="http://www.youtube.com/embed/'+t.attr("data-videoID")+'", height="100%", width="100%", frameborder="0", allowfullscreen></iframe>');
    else {
var n=$("<a />", {href:t.children().attr("src"),target:"_blank"}).append(t.children().clone());
      $("#gallery .galleryStage").html(n)
    }
    t.addClass("selected"),t.siblings().removeClass("selected")
},render:function(e) {
    var t=this;
    if(t.element("gameDashboardTemplate"),ty.get("dulst/"+ty.dulst.gameID+"/news",function(e) {
    if(e&&e.length>0) {
        var n=ty.t("dashboardNewsTemplate",e);
        t.el.find(".activePlayers").before(n)
      }
    }),e) {
      var n=t.el.find(".card-list-container");
      _.each(e,function(e) {
        e.url="/"+ty.dulst.subdomain+"/cards/"+e.nid+"/"+ty.url(e.title),ty.t("dashboardCard",e).data("json",e).appendTo(n)
      })
    }
    return $("#main").html('<div id="content"></div>'),$("#content").html(t.el).scrollbars(),ty.get("dulst/"+ty.dulst.gameID+"/matchesCount",function(e) {
      t.el.find(".matches .count").text(e.count)
}),t.el.find(".cover.wiki").width(t.el.find(".mediaGallery").width()),t.el.find(".cover.fullList").css("left",t.el.find(".mediaGallery").width()+6),ty.dulst.hoverPreview.on( {autohide:!0,hoverIntent:!1}),ty.dulst.hoverPreview.widget.position( {my:"right top",at:"right top",offset:"-13 13",of:".mediaGallery"}),ty.route.sectionClose("gameDashboard",function() {
      ty.dulst.hoverPreview.destroy()
    }),this.delegateEvents(),this
  }
                                                    });
  ty.load("dulst/cardsInterface",function() {
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .home").addClass("active"),ty.get("dulst/"+ty.dulst.gameID+"/gameDashboard",function(n) {
      var i=function() {
new t( {model:new e(n.game),previewCards:n.cards})
      };
      1005!=ty.dulst.gameID&&ty.handler("user:login",i,!0)
    })
  })
},ty.dulst.Games=function() {
  var e=this;
  _.bindAll(this);
var t=Backbone.Model.extend( {idAttribute:"nid",url:function() {
    return"/api/dulst/"+this.id
  }
                               });
return e.Games=Backbone.Collection.extend( {model:t,comparator:function(e) {
    return e.get("players")
},url:function() {
    return"/api/dulst/games"
  }
}),this.GameListItemView=ty.View.extend( {tagName:"li",className:"gamePreview",initialize:function() {
    this.model.bind("change",this.render),this.render()
},events:{"click span.link.loggedIn":"joinMatch"},joinMatch:function() {
    if(!ty.dulst.inQueue) {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,handler:"dulst.joinMatch"
             };
      ty.realtime.send(e)
    }
},render:function() {
    var t=this;
    t.model.get("dulstGamesListRecent")?t.element("GamesPreviewTemplate").prependTo(e.view.el.find(".recent .content>ul")):t.element("GamesPreviewTemplate").prependTo(e.view.el.find(".popular .content>ul"))
  }
}),this.GamesView=ty.View.extend( {initialize:function() {
    var e=this;
    ty.load("dulst/games",function() {
      e.render()
    })
},events:{"click #viewUnreleased":"scrollTo"},scrollTo:function(t) {
    var n=326;
$("#content").animate( {scrollTop:$("#games-"+t).position().top-$("#content").innerHeight()/2+n/2},500),e.collection.get(t).view.open()
},render:function() {
    var e=this;
    $("#content").html(e.element("dulstGames")),e.addAll()
},addOne:function(t) {
new e.GameListItemView( {model:t})
},addAll:function() {
    e.collection.each(this.addOne)
  }
                                                                                                                        }),this
},ty.dulst.Games.prototype.display=function() {
  var e=this;
return e.collection?e.view.render():(e.collection=new e.Games,e.collection.fetch( {success:function() {
e.gamesView=new e.GamesView( {model:e.collection}),e.view=e.gamesView
},error:function() {
    flashMessage("error")
  }
                                                                                    })),this
},ty.dulst.joinMatch=function(e) {"waiting"==e.message?($(".playAMatch").notify("You've created a new match. We're currently matching you with other players. You may browse around the site while waiting."),$(".playAMatch").text("Matching..."),ty.dulst.inQueue=!0):"joinMatch"==e.message?(e.custom?(ty.dulst.customGame=e.matchID,ty.redirect(ty.dulst.subdomain+"/play/custom/"+e.matchID)):ty.redirect(ty.dulst.subdomain+"/play/"+e.matchID),$(".playAMatch").text("Play a match!"),delete ty.dulst.inQueue):"tutorial"==e.message?(ty.dulst.customGame=e.matchID,$(".playAMatch").text("Play a match!"),delete ty.dulst.inQueue):"pushedOutByAnotherWindow"==e.message?(delete ty.dulst.inQueue,$(".playAMatch").text("Play a match!"),$(".playAMatch").notify("You began searching for a match on another browser window. This one is dropped from the queue.")):"nameConflict"==e.message?$(".playAMatch").notify("A custom match with that name already exists, please restart your match with a different name."):"alreadyinqueue"==e.message?$(".playAMatch").notify("You are already in a queue to play. To remove yourself from the queue refresh your browser."):"gameIncomplete"==e.message?$(".playAMatch").notify("The game is incomplete. Make sure the game has a starter deck with at least 30 cards."):"tooManyCards"==e.message?$(".playAMatch").notify("You have too many cards in your current deck. You can have at most "+e.count+" cards in a deck."):"notEnoughCards"==e.message&&$(".playAMatch").notify("You have too few cards in your current deck. You need to have at least "+e.count+" cards in a deck.")
  },ty.dulst.spectate=function(e) {
  if("Deny"==e.message)$("#matchesContainer").notify("You may not spectate this player for this match.");
  else if("Block this user"==e.message)$("#matchesContainer").notify("You are blocked from spectating this player in any matches.");
  else if(-1!=e.message.indexOf("allow")||-1!=e.message.indexOf("Allow")) {
    ty.dulst.customGame=e.matchID,ty.redirect(ty.dulst.subdomain+"/spectate/"+e.matchID),$(".playAMatch").text("Play a match!"),delete ty.dulst.inQueue;
    for(var t=e.replay,n=0; n<t.length; n++)ty.dulst.play(t[n])
    }
},ty.dulst=ty.dulst|| {},ty.dulst.CardsList=function(e,t) {
  var n=this,i=this;
  this.gameID=e;
  var o=this;
  this.sortOrder="title",_.bindAll(this);
var r=Backbone.Model.extend( {idAttribute:"nid",defaults:{title:"new card",ntype:"card",user:user,rarity:20,type:"Unit"},url:function() {
    return"/api/dulst/"+e+"/game/"+this.id
  }
                               });
o.defaultDeckModel=Backbone.Model.extend( {idAttribute:"gameID",url:function() {
    return"/api/dulst/"+e+"/defaultDeck"
  }
}),o.defaultCardLibraryModel=Backbone.Model.extend( {idAttribute:"gameID",url:function() {
    return"/api/dulst/"+e+"/defaultCardLibrary"
  }
}),i.TypeEditor=ty.View.extend( {initialize:function(e) {
    this.typeIndex=e.typeIndex,this.render()
},events:{"click .newType":"newType","change .name":"editTypeName","change .color":"editTypeColor","click .deleteType":"deleteType"},refreshCardStats:function() {
    var e=this;
    e.el.find(".cardsListSort .sortBy li").removeClass("on");
    var t=_.pluck(ty.dulst.game.get("cardTypes"),"name");
    this.el.find("#card-list-container .cardStats .total").text(n.cardCollection.releasedCards().length);
    for(var i=t.length-1; i>=0; i--)this.el.find("#card-list-container .cardStats li ."+t[i]).text(n.cardCollection.filterByType(t[i]).length)
},newType:function() {
    var e=$(i.cardsList.el.find(".list-container")[this.typeIndex]),t=e.clone(),n=this.model.get("name");
    t.removeClass(n).addClass("newType"),t.attr("data-cardType","newType"),t.find("span.name").text("newType"),t.find(".card-list-container").empty(),e.after(t);
    var o=$(i.cardsList.el.find(".cardStats ul li")[this.typeIndex+1]),r=o.clone();
    r.attr("class","newType"),r.find("span").attr("class","newType").text("0"),r.find("label").text("newType"),o.after(r);
var s=ty.dulst.game.get("cardTypes")||[],a= {name:"newType"
      ,color:""
                                                };
s.splice(this.typeIndex+1,0,a),ty.dulst.game.save( {cardTypes:s}),t.find("h5").trigger("click")
},editTypeName:function(e) {
    var t=ty.dulst.game.get("cardTypes")||[],o=t[this.typeIndex].name,r=$(i.cardsList.el.find(".list-container")[this.typeIndex]).find("h5"),s=$.trim($(e.currentTarget).val()).replace(/\s/g,"-");
    if($(e.currentTarget).val(s),s&&s.length>0) {
      var a=$(i.cardsList.el.find(".list-container")[this.typeIndex]);
      r.text(s),a.removeClass(o).attr("data-cardType",s).addClass(s),n[s+"Container"]=a.find(".card-list-container");
      var l=n.cardCollection.filter(function(e) {
        return e.get("type")==o
      }),c=$($("#card-list-container .cardStats li")[this.typeIndex+1]);
      c.removeClass(o).addClass(s),c.find("label").text(s),c.find("span").removeClass(o).addClass(s),ty.dulst.game.setDeep("cardTypes."+this.typeIndex+".name",s).save(),ty.dulst.colors(),_.each(l,function(e) {
e.save( {type:s})
      })
    }
},editTypeColor:function(e) {
    var t=$.trim($(e.currentTarget).val()).replace(/\s/g,"-");
    $(e.currentTarget).val(t),t&&t.length>0&&(ty.dulst.game.setDeep("cardTypes."+this.typeIndex+".color",t).save(),ty.dulst.colors())
},deleteType:function() {
    var e=$(i.cardsList.el.find(".list-container")[this.typeIndex]);
    if(e.find(".card-list-container a").length>0)flashMessage("You have cards in this type. Please first move the cards out of the type before deleting it.");
    else {
      $($("#card-list-container .cardStats li")[this.typeIndex+1]).remove(),e.remove(),this.destroy();
      var t=ty.dulst.game.get("cardTypes")||[];
t.splice(this.typeIndex,1),ty.dulst.game.save( {cardTypes:t})
    }
},render:function() {
    var e=this;
$("#content-right").html(e.form("dulstEditType", {autoSave:!1,onChange:function(t) {
      _.each(t,function(t,n) {
        ty.dulst.game.setDeep("cardTypes."+e.typeIndex+"."+n,t).save()
      })
    }
                                                     }).el),$("#card-list-container").find(".current").removeClass("current");
    var t=$(i.cardsList.el.find(".list-container")[this.typeIndex]).find("h5");
    t.addClass("current"),i.currentCard_view&&i.currentCard_view.destroy(),delete i.currentCard_view,delete i.cardID
  }
}),i.TypeModel=ty.Model.extend(),o.CardList=Backbone.Collection.extend( {model:r,comparator:function(e) {
    if("title"==n.sortOrder)return e.get("title");
    if("have"!=n.sortOrder) {
      if("updated"==n.sortOrder)return e.get("ut")?-e.get("ut"):-e.get("ct");
      var t=n.sortOrder;
      return""==e.get(t)||void 0==e.get(t)?0:parseFloat(e.get(t))
    }
          return ty.dulst.library&&"object"==typeof ty.dulst.library.get("cards")?ty.dulst.library.get("cards")[e.get("nid")]?0+e.get("title"):e.get("rarity")>=100||e.get("rarity")<=0?0+e.get("title"):e.get("title"):void 0
},releasedCards:function() {
    return this.filter(function(e) {
      var t=e.get("version");
      return"rc"!=t&&"alpha"!=t&&"beta"!=t?e.get("type"):void 0
    })
},filterByType:function(e) {
    return this.filter(function(t) {
      if(t.get("type")==e) {
        var n=t.get("version");
        if("rc"!=n&&"alpha"!=n&&"beta"!=n)return t.get("type")
        }
    })
},url:function() {
    return"/api/dulst/"+e+"/cards"
  }
                                                                                                                                                                                                        });
var s=ty.View.extend( {tagName:"a",initialize:function() {
    _.bindAll(this,"render"),this.model.bind("change",this.render),this.model.view=this,this.render()
},render:function() {
    var e=this,t=e.model.toJSON();
    if(!e.model.hasChanged()||e.model.changedAttributes().nid||e.model.changedAttributes().type||void 0!=e.model.changedAttributes().version||void 0!=e.model.changedAttributes().title||e.model.changedAttributes()["class"]||void 0!=e.model.changedAttributes().imageGenerated||void 0!=e.model.changedAttributes().image) {
      var o=e.model.get("class");
_.isArray(o)&&(o=o.join().toLowerCase()),e.element("cardListItemTemplate", {url:"/"+ty.dulst.subdomain+"/cards/"+e.model.get("nid")+"/"+ty.url(e.model.get("title")),"class":o,cardWidth:i.cardImageWidth,cardHeight:i.cardImageHeight}, {lite:!0,replace:!1}),n.cardID==t.nid&&e.el.addClass("current");
      var r=e.model.get("type");
      if(e.model.hasChanged()) {
        if(this.oldEl.replaceWith(this.el),e.model.changedAttributes().type)if("Rule"!=r)n[r+"Container"].prepend(e.el);
          else if(t["class"]&&t["class"][0]) {
            var s=t["class"][0].replace(/[^a-z0-9]+/gi,""),a=n.rulesContainer.find(".ruleCardCategory."+s);
0==a.length&&(a=ty.t("dulst_ruleCardCategory", {name:t["class"][0],editedClass:s}),n.rulesContainer.prepend(a)),a.find(".category").append(e.el)
          } else n.rulesContainer.prepend(e.el);
        else if(e.model.changedAttributes()["class"]&&"Rule"==e.model.get("type"))if(t["class"]&&t["class"][0]) {
            var s=t["class"][0].replace(/[^a-z0-9]+/gi,""),a=n.rulesContainer.find(".ruleCardCategory."+s);
0==a.length&&(a=ty.t("dulst_ruleCardCategory", {name:t["class"][0],editedClass:s}),n.rulesContainer.prepend(a)),a.find(".category").append(e.el)
          } else n.rulesContainer.prepend(e.el)
          } else if("Rule"!=r)n[r+"Container"]||(e.model.set("type",ty.dulst.game.get("cardTypes")[0].name).save(),r=ty.dulst.game.get("cardTypes")[0].name),"new card"!=e.model.get("title")?n[r+"Container"].append(e.el):n[r+"Container"].prepend(e.el);
      else if(t["class"]&&t["class"][0]) {
        var s=t["class"][0].replace(/[^a-z0-9]+/gi,""),a=n.rulesContainer.find(".ruleCardCategory."+s);
0==a.length&&(a=ty.t("dulst_ruleCardCategory", {name:t["class"][0],editedClass:s}),n.rulesContainer.append(a)),a.find(".category").append(e.el)
      } else n.rulesContainer.append(e.el)
      }
    return e
  }
                        });
o.DefaultDeckViewLibraryView=ty.View.extend( {initialize:function() {
    this.element("libraryCards");
    this.el.html(ty.t("cardListContainer", {}));
    var e=ty.t("dulst/defaultCardLibraryHeader");
    e.find("h2").text(ty.dulst.gameTitle+"'s Starter Collection"),this.el.prepend(e),this.render()
},events:{"click .card-list-container .card-preview":"addToDeck"},addToDeck:function(e) {
    var t=this,o=$(e.currentTarget).attr("data-cardID"),r=(n.cardCollection.get(o).toJSON(),$(e.currentTarget)),s=r.offset(),a=r.clone().addClass("clonedAnimation").appendTo("body").css(s);
    if(r.addClass("moving"),1!=$("#deck-container").find('.same-card[data-cardID="'+o+'"]').length) {
      var l=$("<div class='same-card' data-cardID='"+o+"'></div>").append($(e.currentTarget));
      ty.dulst.buildDeckView($("#deck-container"),$(e.currentTarget).attr("data-type"),l)
    } else ty.dulst.buildDeckView($("#deck-container"),$(e.currentTarget).attr("data-type")),$("#deck-container").find('.same-card[data-cardID="'+o+'"]').append($(e.currentTarget));
    var c=r.offset();
c.width=r.outerWidth(),a.css("width",c.width),a.find("img").css( {height:r.find("img").height(),width:r.find("img").width()}),a.css(c),setTimeout(function() {
      r.removeClass("moving"),a.remove()
    },400);
    var d=t.model.get("decks")[this.model.deckID].cards[o],u=t.model.get("decks")[this.model.deckID].cards;
    u[o]=_.isUndefined(d)?1:parseInt(d)+1;
    var h=t.model.get("decks");
return h[this.model.deckID].cards=u,i.defaultDeck.save( {decks:h}),!1
},render:function() {
    var e=this,t=$("#main").width()/2-6;
    ty.dulst.setCardWidth(t),$("#content").html(this.el);
    var o,r=i.defaultDeckData.cards;
    for(var s in r)if(r.hasOwnProperty(s)) {
        o=r[s];
        var a=ty.t("deckItemViewTemplate",o).data("json",o),l=$("<div class='same-card' data-cardID='"+o.nid+"'></div>");
        if(l.append(a.clone(!0)),n.defaultDeckData.defaultCardLibrary.cards[s])for(var c=1; c<parseInt(n.defaultDeckData.defaultCardLibrary.cards[s],10); c++)l.append(a.clone(!0));
        ty.dulst.buildDeckView(e.el.find("#card-list-container"),a.attr("data-type"),l)
      }
  }
}),o.DefaultDeckView=ty.View.extend( {tagName:"div",initialize:function() {
    $("#main").html('<div id="content" class="half"></div><div id="content-right"></div>')
},events:{"click #newDeckButton":"newDeck","click #decksList li":"changeDeck","click .card-preview":"removeFromDeck","change .fieldText.name":"updateName"},changeDeck:function(e) {
    this.el.find(".card-preview").each(function() {
      $(this).prependTo($("#libraryCards").find('.same-card[data-cardID="'+$(this).attr("data-cardID")+'"]'))
    });
    var t=$(e.currentTarget).index();
    this.model.deckID=t,this.renderDeck(t)
},updateName:function(e) {
    var t=this.model.get("decks");
t[this.model.deckID].name=$(e.currentTarget).val(),this.decksList(),this.model.save( {decks:t})
},removeFromDeck:function(e) {
    var t=this,i=$(e.currentTarget).attr("data-cardID"),o=t.model.toJSON(),r=o.decks[this.model.deckID].cards[i];
    1==r?delete o.decks[this.model.deckID].cards[i]:null==r?delete o.decks[this.model.deckID].cards[i]:o.decks[this.model.deckID].cards[i]=parseInt(r)-1,n.defaultDeck.save(o);
    var s=$(e.currentTarget),a=s.offset(),l=s.clone().addClass("clonedAnimation").appendTo("body").css(a);
    s.addClass("moving"),$(e.currentTarget).prependTo($("#libraryCards").find('.same-card[data-cardID="'+i+'"]'));
    var c=s.offset();
c.width=s.outerWidth(),l.css("width",c.width),l.find("img").css( {height:s.find("img").height(),width:s.find("img").width()}),l.css(c),setTimeout(function() {
      s.removeClass("moving"),l.remove()
    },400);
    var d=$(e.currentTarget).attr("data-type"),u=$("#deck-container").find(".cardStats"),h=u.find("li ."+d),f=parseInt(h.html(),10);
    isNaN(f)?h.html("0"):h.html(f-1);
    var p=parseInt(u.find(".total").html(),10);
    isNaN(p)?u.find(".total").html("1"):u.find(".total").html(p-1)
},newDeck:function() {
this.model.get("decks").push( {name:"new starter deck",cards:{}}),this.model.save(),this.decksList(),this.el.find("#decksList li:last-child").trigger("click")
},renderDeck:function(e) {
    var t=this;
this.element("cardListContainer").attr("id","deck-container").addClass("page defaultDeckView"),$("#content-right").html(t.el),this.model.get("decks")||this.model.set("decks",[ {cards:{},name:"First Deck"}, {cards:{},name:"Second Deck"}]),t.el.prepend(ty.t("deckView", {title:t.model.get("decks")[e].name})),t.decksList();
    var n=this.model.get("decks")[e].cards,t=this;
    $.each(n,function(e,n) {
      n=parseInt(n,10);
      var o=i.cardCollection.get(e);
      if(o) {
        for(var r,s=$("<div class='same-card' data-cardID='"+e+"'></div>"),a=0; n>a; a++)r=i.defaultDeckViewLibraryView.el.find('.same-card[data-cardID="'+e+'"] .card-preview')[0],s.append(r);
        ty.dulst.buildDeckView(t.el,o.toJSON().type,s)
      }
    }),this.delegateEvents(),ty.dulst.hoverPreview.on()
},decksList:function() {
    var e=this;
    e.el.find("#decksList").empty(),e.model.get("decks").forEach(function(t) {
      e.el.find("#decksList").append(ty.t("defaultDeckListItem",t))
    })
},render:function() {
    var e=this;
return i.defaultDeckViewLibraryView=new i.DefaultDeckViewLibraryView( {model:e.model}),this.renderDeck(0),this.model.deckID=0,this
  }
}),o.DefaultLibraryView=ty.View.extend( {tagName:"div",initialize:function() {
    $("#content-right, #content").removeAttr("style")
},render:function() {
    var t=this,o=$("#main").width()/2-6;
    ty.dulst.setCardWidth(o),i.cardsList.el.addClass("cardslist-starterCollection"),i.cardsList.el.find("#card-list-container .card-list-container").addClass("preventDefault"),i.cardsList.el.find("#card-list-container a.card").on("click",function(e) {
      e.preventDefault();
      var i=$(this).attr("data-cardID"),o=n.cardCollection.get(i).toJSON(),r=ty.t("deckItemViewTemplate",o).data("json",o),s=$(this).offset(),a=r.clone().addClass("clonedAnimation").appendTo("body").css(s);
      if(r.addClass("moving"),_.isUndefined(n.defaultCardLibrary.get("cards")[i])) {
        var l=$("<div class='same-card' data-cardID='"+i+"'></div>").append(r),c=n.cardCollection.get(i).get("type");
        $("#deck-container ."+c+" .card-list-container").prepend(l)
      } else $("#deck-container").find('.same-card[data-cardID="'+i+'"]').first().append(r);
      var d=r.offset(),u=$(this);
d.width=u.outerWidth(),a.css("width",d.width),a.find("img").css( {height:u.find("img").height(),width:u.find("img").width()}),a.css(d),setTimeout(function() {
        r.removeClass("moving"),a.remove()
      },400);
      var h=$(this).attr("data-type"),f=$("#deck-container").find(".cardStats"),p=f.find("li ."+h),m=parseInt(p.html(),10);
      isNaN(m)?p.html("1"):p.html(m+1);
      var g=parseInt(f.find(".total").html(),10);
      isNaN(g)?f.find(".total").html("1"):f.find(".total").html(g+1);
      var y=t.model.toJSON().cards[i],v=t.model.toJSON();
      v.cards[i]=_.isUndefined(y)?1:parseInt(y)+1,n.defaultCardLibrary.save(v)
    }),$("#card-list-container .rule.list-container").hide();
var r=ty.t("cardListContainer", {editType:"no"}).attr("id","deck-container").addClass("page").prepend(template("defaultDeckHeader", {gameID:e,gameTitle:ty.dulst.gameTitle}));
    $("#content-right").removeClass("cardView").html(r).find("header.section h2").text("Starter Collection"),$("#defaultDeckHeader header").after(ty.t("dulst/defaultCardLibraryHelp")),$("#deck-container .card-preview").die("click").live("click",function() {
      var e=$(this).attr("data-cardID"),i=t.model.toJSON().cards[e],o=t.model.toJSON(),r=$(this).attr("data-type"),s=$("#deck-container").find(".cardStats"),a=s.find("li ."+r),l=parseInt(a.html(),10);
      isNaN(l)?a.html("0"):a.html(l-1);
      var c=parseInt(s.find(".total").html(),10);
      isNaN(c)?s.find(".total").html("0"):s.find(".total").html(c-1),1==i?delete t.model.toJSON().cards[e]:null==i?delete t.model.toJSON().cards[e]:o.cards[e]=parseInt(i)-1,n.defaultCardLibrary.save(o);
      var d=$(this);
      d.addClass("remove"),setTimeout(function() {
        d.remove()
      },200)
    }),$.each(t.model.get("cards"),function(e,n) {
      n=parseInt(n,10);
      var o=i.cardCollection.get(e);
      if(o) {
        for(var r=ty.t("deckItemViewTemplate",o.toJSON()).data("json",o.toJSON()),s=$("<div class='same-card' data-cardID='"+e+"'></div>"),a=0; n>a; a++)s.append(r.clone(!0));
        ty.dulst.buildDeckView($("#deck-container"),o.toJSON().type,s)
      } else {
        var l=t.model.get("cards");
        delete l[e],t.model.set("cards",l)
      }
    }),$("#card-list-container .card-list-container a.card img, #card-list-container .card-list-container a.card video").globalcss("width","100%").globalcss("height","auto"),i.cardCollection.each(function(e) {
      var t=e.attributes;
      e.view.el.data("json",t)
    }),ty.route.sectionClose("defaultCardLibrary",function() {
      $("#deck-container .card-preview").die("click");
      var e=a-334;
      ty.dulst.setCardWidth(e);
      var t=i.cardsList.el;
      t.removeClass("cardslist-starterCollection"),t.find("#card-list-container .card-list-container").removeClass("preventDefault"),t.find("#card-list-container a").off("click"),t.find("#card-list-container .rule.list-container").show()
    }),ty.dulst.hoverPreview.on()
  }
}),i.cleanEffectBuilder=function(e) {var t=ty.dulst.eb; t.children("div").show(),t.children(".RuleEffect").hide(),t.children(".TrapEffect").hide(),t.children(".UnitEffect").hide(),t.find("input, textarea").val(""),ty.dulst.ebc.find("header input").hide().val(""),ty.dulst.ebc.find("header span.name").css("display","inline").text("effect "+t.data("buildIndex")),"0"!=t.data("buildIndex")&&t.data("buildIndex")||("Trap"!=e&&"Rule"!=e?t.children(".UnitEffect").show():"Trap"==e?t.children(".TrapEffect").show():"Rule"==e&&t.children(".RuleEffect").show()),t.find(".option").show(),t.find(".option").removeClass("selected"),t.find("input").hide(),t.find(".category:not(.effect-category,.primary)").removeClass("showing").addClass("hiding").hide()},o.CardView=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render","updateCard","newEffect","effectEdit","deleteEffect","populateEffectsDisplay"),this.model.view=this,this.model.bind("otherUserChange",this.otherUserChange),this.model.bind("change",this.checkifchangetype),this.render()
},modelBind:{otherUserChange:"otherUserChange",change:"checkifchangetype"},events:{"click #effects-display .effect-item":"effectEdit","click #edit-effects-button":"newEffect","click #delete-effect-button":"deleteEffect","click .generate":"generateCard","click .edit-generated-image":"repositionCard","click .optionalProperties legend":"optionalProperties","click .color-selector div":"changeColor","change .imageSizeSlider":"resizeImage","click .addCredit":"showCredit","click .giveCreditSubmit":"giveCredit","change .formUpdateThis":"updateCard"},otherUserChange:function() {
    this.hasChanged()&&this.view.render()
},checkifchangetype:function() {
    this.hasChanged("type")&&this.view.render()
},showCredit:function(e) {
    $(e.currentTarget).hide().next(".giveCredit").show()
},giveCredit:function(t) {
var n=this,i=$(t.currentTarget).closest(".giveCredit"),o= {user:
             i.find(".user").val(),reason:
             i.find(".reason").val(),coins:
             i.find(".coins").val(),points:
                 i.find(".points").val()
                                                              },r=n.model.toJSON().credit||[];
r.push(o),$.post("/api/dulst/"+e+"/pointReward",o,function(e) {"success"==e.status&&(n.model.set( {credit:r}),n.updateCard(),n.render())
    })
},effectEdit:function(e) {
    var t=this;
    this.effectBuilder(function() {
      var n=t.model.get("effects"),o=parseInt($(e.target).attr("data-effectIndex"),10);
      ty.dulst.eb.data("buildIndex",o).data("buildType","edit"),ty.dulst.ebc.dialog("open");
      var r=t.model.get("type");
      i.cleanEffectBuilder(r);
      var s=function(e,t) {
        $.each(e,function(e,n) {
          function i(n) {
            function i(n) {
              o=t.children('div.category[name="'+e+'"]').children(".option").filter(function() {
                return $(this).attr("name")==n
              }),o.addClass("selected").parents(".category").show().addClass("showing").removeClass("hiding"),o.show().siblings(".option:not(.selected, .fieldText)").hide(),r=t.children('div.category[name="'+e+'"]'),0==o.length&&r.find(".inputNext")&&(r.find(".inputNext").addClass("selected").show().parents(".category").show().addClass("showing").removeClass("hiding"),r.find(".inputNext").next().val()?r.find(".inputNext").next().val(r.find(".inputNext").next().val()+","+n):r.find(".inputNext").next().val(n),r.find(".inputNext").next().show())
            }$.isArray(n)?$.each(n,function(e,t) {
              i(t)
            }):i(n)
            }
              if($.isPlainObject(n))s(n,t.children('.category[name="'+e+'"]'));
          else {
            var o,r,a=[];
            t.find(".fieldText").closest(".category").each(function() {
              a.push($(this).attr("name"))
            }),i(n);
            var l=o.parent().parent(),c=o.attr("data-category");
            void 0!=c&&(c=c.split(","),l.find("div.category:not(.primary)").each(function() {
              -1!=c.indexOf($(this).attr("name"))?$(this).show():($(this).hide(),$(this).find(".selected").removeClass("selected"))
            }))
          }
        })
      };
      n[o].effectName?ty.dulst.ebc.find("header .name").text(n[o].effectName):ty.dulst.ebc.find("header .name").text("effect "+o),$.each(n[o],function(e,t) {
        s(t,ty.dulst.eb.children('div.category[name="'+e+'"]'))
      })
    })
},newEffect:function() {
    var e=this;
    this.effectBuilder(function() {
      var t=parseInt($("#effects-display").find(".effect-item:last-child").attr("data-effectIndex"));
      isNaN(t)?t=0:t+=1,ty.dulst.eb.data("buildType","new").data("buildIndex",t),ty.dulst.ebc.dialog("open");
      var n=e.model.get("type");
      i.cleanEffectBuilder(n)
    })
},deleteEffect:function() {
    var e=this.model.get("effects")||[];
e.splice(-1,1),$("#effects-display").find(".effect-item").eq(-1).remove(),this.model.save( {effects:e}),this.populateEffectsDisplay()
},generateCard:function() {
var e=this,t= {srcImg:
               $("#card-preview .image img").attr("src"),scale:
               $("#card-preview .image img").css("scale"),left:
               $("#card-preview .image img").css("left"),top:
                   $("#card-preview .image img").css("top")
                  },n=e.el.find(".generate");
    n.attr("disabled","disabled").removeClass("generate").val("Generating please wait..."),$.post("/api/dulst/generateCard",t,function(t) {"fail"==t?n.notify("Image generation failed. Make sure this is a valid image file. If the file is linked from a remote server you can try uploading the file to dulst.",function() {
        e.render()
      }):"invalid extension"==t?n.notify("Image generation failed. Only png/gif/jpg images are allowed. Make sure the image is one of those.",function() {
        e.render()
      }):(e.model&&e.model.get("image")&&-1==e.model.get("image").indexOf(ty.settings.domain)&&$("#imgUpload").val(t.replace("generatedImage","cardSrcImage")),$("#card-preview .imageGenerated").val(t).trigger("change"),e.render())
      })
},repositionCard:function() {
    $("#card-preview .imageGenerated").val("").trigger("change"),$("#card-preview .edit-generated-image").attr("disabled","disabled").removeClass("edit-generated-image").val("Reloading please wait..."),this.render()
},changeColor:function(e) {
    $("#card-preview").find(".cardbg").attr("data-color",$(e.target).attr("class")).attr("src","/sites/all/modules/cards/cardTemplates/cardbg-"+$(e.target).attr("class")+".png")
},updateCard:function(e) {
    var t= {},i=this;
    i.el.find(".formUpdateThis").each(function() {
      var e=$(this).attr("name"),o=$(this).val();
      if("image"==e&&o.split(",").length>1) {
        var r=o.split(",");
        $(this).val(r[0]),o=r[0],r.shift();
        for(var s=r.length-1; s>=0; s--)n.cardCollection.create( {version:i.model.get("version"),type:i.model.get("type"),image:r[s]})
        }
      if("number"==$(this).attr("type")&&(o=parseFloat(o)),$(this).hasClass("multiple"))if($(this).hasClass("fieldTags"))t[e]=o.split(",");
        else if("multiGroupKey"==$(this).attr("name")||"multiGroupValue"==$(this).attr("name")) {
          if("multiGroupKey"==$(this).attr("name")) {
            var a,o;
            a=$(this).val(),o=$(this).closest(".formMultiGroup").find('input[name="multiGroupValue"]').val();
            var l= {};
            l[a]=o,e=$(this).closest(".formMultiGroup").attr("name"),a&&a.length>0&&o&&o.length>0&&(t[e]&&_.isArray(t[e])?t[e].push(l):t[e]=[l])
          }
        } else t[e]&&_.isArray(t[e])?t[e].push(o):t[e]=[o];
      else t[e]=o
      }),t.customCardProperties||(t.customCardProperties=[]),t.effects=this.model.get("effects"),this.model.save(t),e&&$(e.target).hasClass("image")&&this.render(),this.renderPreview()
},renderPreview:function() {
    var e=this;
e.el.find(".page.viewMode").replaceWith(ty.t("cardView",$.extend( {editPreview:!0},e.model.attributes)))
},populateEffectsDisplay:function() {
    var e=this,t=e.model.get("effects");
    $("#effects-display").empty(),void 0!=t&&""!=t&&$.each(t,function(e,n) {
      var i="effect";
      if(n&&n.action&&n.action.primary) {{
          n.action.primary
        }
        i=n.action.primary
      }
        var o=e+" "+i;
      n.effectName&&(o=n.effectName);
      var r=$('<div class="effect-item"></div>');
      ty.dulst.staff&&(o+='<span class="arrow">↕</span>'),r.attr("data-effectIndex",e).append(o).appendTo($("#effects-display")),(n.effectComplete&&"trigger next effect"!=n.effectComplete.primary||!n.effectComplete)&&(n.action&&"request trap"!=n.action.primary&&"chance"!=n.action.primary&&"trigger on event"!=n.action.primary&&"each"!=n.action.primary&&"future turn"!=n.action.primary&&"verify target"!=n.action.primary&&e!=t.length-1?$("#effects-display").append('<div class="separator"></div>'):n.action&&"verify target"==n.action.primary&&n.action.verifyTrue&&$("#effects-display").append('<div class="separator"></div>'))
}),ty.dulst.staff&&!$("#effects-display").hasClass("ui-sortable")&&$("#effects-display").sortable( {items:".effect-item",update:function() {
      var t=[],n=e.model.toJSON().effects||[];
      $("#effects-display .effect-item").each(function() {
        var e=$(this).index(".effect-item"),i=$(this).attr("data-effectIndex");
        t[e]=n[i]
}),e.model.save( {effects:t}),e.populateEffectsDisplay()
    }
                                                                                                       })
},optionalProperties:function() {
    this.el.find(".optionalProperties").hasClass("closed")?localStorage.setItem("ty.dulst.cardView.optionalProperties","open"):localStorage.setItem("ty.dulst.cardView.optionalProperties","closed"),this.el.find(".optionalProperties").toggleClass("closed")
},ensureImageSizePosition:function(e) {
    var t=this.el.find(".image.reposition img");
    if(t.length>0) {
      e&&1/0!=e||(e=1);
      var n,i=Math.floor(t.outerWidth()*e),o=Math.floor(t.outerHeight()*e);
      300>i&&(n=300/i),375>o&&(!n||375/o>n)&&(n=375/o),n&&(e*=n),1!=e&&(e+=e/1e4),t.css("scale",e),i=Math.floor(t.outerWidth()*e),o=Math.floor(t.outerHeight()*e);
      var r=Math.ceil((o-t.outerHeight())/2),s=Math.ceil((i-t.outerWidth())/2);
t.position().top>0&&t.css( {top:r}),t.position().left>0&&t.css( {left:s}),t.position().top<375-o&&t.css( {top:r-(o-375)}),t.position().left<300-i&&t.css( {left:s-(i-300)})
    }
},resizeImage:function(e) {
    var t=($("#card-preview .image.reposition img"),parseFloat($(e.target).val())),n=Math.pow(2,t);
    this.ensureImageSizePosition(n)
},effectBuilder:function(e) {
    var t=this;
    ty.dulst.effectBuilderPrepare(function() {
      ty.dulst.eb.duplicateEffect=function() {
        if("new"!=ty.dulst.eb.data("buildType")) {
          var e=parseInt(ty.dulst.eb.data("buildIndex"),10),n=t.model.get("effects")||[],i=_.clone(n[e]);
delete i.effectName,n.splice(e+1,0,i),t.model.save( {effects:n}),t.populateEffectsDisplay()
        }
      },ty.dulst.eb.advancedCodeView=function() {var e=t.model.toJSON().effects||[]; ty.dulst.ebac.dialog("open"),ty.dulst.ebac.data("backboneID",t.model.id),ty.dulst.ebac.val(JSON.stringify(e,null,"  "))},ty.dulst.eb.deleteEffect=function() {
        if("new"!=ty.dulst.eb.data("buildType")) {{
            var e=parseInt(ty.dulst.eb.data("buildIndex"),10),n=t.model.toJSON().effects||[];
            n[e]
          }
n.splice(e,1),t.model.save( {effects:n}),t.populateEffectsDisplay()
        }
      },ty.dulst.eb.undelegate(".option","click").undelegate(".primary .option","click"),ty.dulst.eb.delegate(".option","click",function() {
        var e=$(this);
        e.hasClass("radio")?e.siblings(".radio").removeClass("selected").toggle():e.siblings().show(),e.hasClass("inputNext")?e.hasClass("selected")?e.next().hide():e.next().show():e.siblings("input").prev().hasClass("selected")||e.siblings("input").hide(),e.toggleClass("selected")
        }),ty.dulst.eb.delegate(".primary .option","click",function() {
        var e=$(this).parent().parent(),t=[];
        $(this).parent().find(".selected").each(function() {
          $(this).attr("data-category")&&$(this).attr("data-category").split(",").forEach(function(e) {
            t.push(e)
          })
        }),e.find("div.category:not(.primary)").each(function() {
          -1!=t.indexOf($(this).attr("name"))?$(this).show():($(this).hide(),$(this).find(".selected").removeClass("selected"))
        })
      }),ty.dulst.eb.undelegate(".option, .fieldText","click change").delegate(".option, .fieldText","click change",function() {
        function e(e) {
          e.find(".option:not(.selected)").remove(),e.find(".category, .category").each(function() {
            $(this).children(".category").length<1&&$(this).children(".option").length<1&&$(this).remove()
          });
          var t=function(e,n) {
            var i=e.children(".option"),o=e.attr("name");
            return i.length>0&&(i.hasClass("inputNext")&&1==i.length?(n[o]=i.next().val(),i.next().is("textarea")&&(n[o]=$("#"+i.next().attr("id")).val())):i.length>1?(n[o]=[],i.each(function() {
              $(this).hasClass("inputNext")?i.next().is("textarea")?n[o].push($("#"+$(this).next().attr("id")).val()):_.each($(this).next().val().split(","),function(e) {
                n[o].push(e)
              }):n[o].push($(this).attr("name"))
              })):n[o]=i.attr("name")),e.children(".category").length>0?(n[o]= {},e.children(".category").each(function() {
              t($(this),n[o])
            }),void 0):n
            },n= {};
          return e.children(".category").each(function() {
            t($(this),n)
          }),n
        }
               var n=e(ty.dulst.eb.clone()),i=t.model.toJSON().effects||[];
        if(/effect \d+/.test(ty.dulst.ebc.find("header span.name").text())?delete n.effectName:n.effectName=ty.dulst.ebc.find("header span.name").text(),"new"==ty.dulst.eb.data("buildType")) {
          i.push(n),ty.dulst.eb.data("buildIndex",i.length-1).data("buildType","edit");
          var o="effect";
          n&&n.action&&n.action.primary&&(o=n.action.primary),$('<div class="effect-item"></div>').attr("data-effectIndex",i.length-1).append(ty.dulst.eb.data("buildIndex")+" "+o).appendTo($("#effects-display"))
        } else i[parseInt(ty.dulst.eb.data("buildIndex"),10)]=n,t.populateEffectsDisplay();
t.model.save( {effects:i})
      }),ty.dulst.ebc.find("header input.name").unbind("blur").bind("blur",function() {
        $(this).hide(),$(this).prev().css("display","inline")
      }),ty.dulst.ebc.find("header input.name").unbind("change").bind("change",function() {
        var e=parseInt(ty.dulst.eb.data("buildIndex"),10),n=$(this).val().replace(/[^a-z0-9 _]+/gi,""),i=t.model.get("effects")||[]; ""
!=n&&" "!=n?($(this).prev().text(n),i[e].effectName=n):($(this).prev().text("effect "+e),delete i[e].effectName),t.model.set( {effects:i}),t.updateCard(),t.populateEffectsDisplay()
      }),e&&e()
    })
},render:function() {
    var e=this;
ty.dulst.staff&&"Rule"==e.model.get("type")?e.element("cardNodeEditRule", {}, {replace:!1}):ty.dulst.staff?(e.element("cardViewEdit", {}, {replace:!1}),e.el.prepend(ty.t("cardView",$.extend( {editPreview:!0},e.model.attributes)))):e.element("cardView");
    var t=e.el;
if($("#content-right").addClass("cardView").html(t).scrollbars( {forceScroll:!0}),ty.dulst.staff) {
      $.event.trigger("dulst:cardView:"+ty.url(e.model.get("title"))),$("#card-type-select").val(e.model.get("type"));
      var n=e.el.find(".image.reposition img");
n.draggable( {cursor:"move",stop:function() {
        var t=parseFloat(n.css("scale"));
        e.ensureImageSizePosition(t)
      }
                   }),e.ensureImageSizePosition()
    }
    e.populateEffectsDisplay(),$("#card-list-container").find(".current").removeClass("current"),$("#card-list-container").find('a[data-cardid="'+e.model.id+'"]').addClass("current");
    e.model.get("nid");
    return this.delegateEvents(),this
  }
}),o.CardListView=ty.View.extend( {initialize:function() {
    var e=this;
    _.bindAll(e,"addOne","addAll","render"),n.cardCollection.bind("add",e.addOne),n.cardCollection.bind("reset",e.addAll),n.classesUsedInGame=[],this.createList()
},events:{"click .create-new-card":"createOnClick","click #wishlist-link":"wishlist","click .giveCard":"giveCardButton","click .regiveLibrary":"regiveLibrary","click .copyCard":"copyCards","click .unreleased":"unreleased","click .betaCard":"betaCard","click .ruleCardVisibility legend":"ruleCardVisibility","click .cardsListSort .sortBy li":"sort","click .list-container h5":"editType","change .cardsListSort input.class":"filterByClass"},filterByClass:function(e) {
    if($(e.currentTarget).val().length>0) {
      $("#dulstCreateFilterCss").remove(),$("style[id=dulstCreateFilterCss]").remove();
      var t=$('<style id="dulstCreateFilterCss"></style>');
      t.appendTo("#cardsList"),t.html('#card-list-container .card-list-container a[data-class*="'+$(e.currentTarget).val().toLowerCase()+'"] {display: block; } #card-list-container .card-list-container a {display: none; } ')
    } else $("#dulstCreateFilterCss").remove(),$("style[id=dulstCreateFilterCss]").remove()
},sort:function(e) {
    var t=this;
    t.el.find(".cardsListSort .sortBy li").removeClass("on"),$(e.currentTarget).addClass("on"),n.sortOrder=$(e.currentTarget).attr("data-sortBy"),$("#card-list-container .card-list-container").empty(),n.cardCollection.sort()
},editType:function(e) {
    if(ty.dulst.staff) {
      var t=this.el.find(".list-container").index($(e.currentTarget).closest(".list-container")),n=ty.dulst.game.get("cardTypes")[t];
i.typeEditor=new i.TypeEditor( {model:new i.TypeModel(n),typeIndex:t})
    }
},createList:function() {
    this.element("mainCardsList"),ty.dulst.staff&&(this.el.find("li.admin").css("display","block"),n.currentCard_view&&n.currentCard_view.render(),ty.realtime.join(ty.dulst.gameID,"ty.dulst.cardsInterface"),this.adminContainers());
    var e=_.pluck(ty.dulst.game.get("cardTypes"),"name");
    this.el.find("#card-list-container .cardStats .total").text(n.cardCollection.releasedCards().length);
    for(var t=e.length-1; t>=0; t--)this.el.find("#card-list-container .cardStats li ."+e[t]).text(n.cardCollection.filterByType(e[t]).length);
    this.addAll(),this.el.find(".filterByClass").find("input").addClass("formSuggestions").attr("data-formSuggestions",n.classesUsedInGame),ty.fieldsRun(this.el.find(".filterByClass"))
},render:function() {
$("#main").html('<div id="content-right" style="width:334px;"></div><div id="content" class="half" style="width:'+l+'px;"></div>'),this.delegateEvents(),$("#content").html(this.el).scrollbars( {forceScroll:!0}),this.el.find(".cardStats ul")[0].scrollWidth>this.el.find("#card-list-container").width()&&this.el.find(".cardStats ul").kinetic(),n.on=!0,ty.route.sectionClose("cardsInterface",function() {
      $("#main").html('<div id="content"></div>'),o.on=!1
    })
},betaCard:function(e) {"View Beta Cards"==$(e.currentTarget).text()?this.loadUnreleased?($("#card-list-container a.card.beta, #card-list-container a.card.rc").globalcss("display","block"),$("#card-list-container a.card").globalcss("display","none"),$(e.currentTarget).text("View Released Cards")):(this.loadUnreleased=!0,ty.get("dulst/"+ty.dulst.gameID+"/betaCard",function(t) {
      $("#card-list-container a.card.beta, #card-list-container a.card.rc").globalcss("display","block"),$("#card-list-container a.card").globalcss("display","none"),$(e.currentTarget).text("View Released Cards"),ty.dulst.cardsInterface.cardCollection.add(t)
    })):($("#card-list-container a.card.beta, #card-list-container a.card.rc").globalcss("display","none"),$("#card-list-container a.card").globalcss("display","block"),$(e.currentTarget).text("View Beta Cards"))
},unreleased:function(e) {"Unreleased"==$(e.currentTarget).text()?this.loadUnreleased?($("#card-list-container a.card.beta, #card-list-container a.card.alpha, #card-list-container a.card.rc").globalcss("display","block"),$("#card-list-container a.card").globalcss("display","none"),$(e.currentTarget).text("Released")):(this.loadUnreleased=!0,ty.get("dulst/"+ty.dulst.gameID+"/unreleased",function(t) {
      $("#card-list-container a.card.beta, #card-list-container a.card.alpha, #card-list-container a.card.rc").globalcss("display","block"),$("#card-list-container a.card").globalcss("display","none"),$(e.currentTarget).text("Released"),ty.dulst.cardsInterface.cardCollection.add(t)
    })):($("#card-list-container a.card.beta, #card-list-container a.card.alpha, #card-list-container a.card.rc").globalcss("display","none"),$("#card-list-container a.card").globalcss("display","block"),$(e.currentTarget).text("Unreleased"))
},ruleCardVisibility:function() {
    var e=this;
    this.loadRuleCards?this.el.find(".ruleCardVisibility").toggleClass("closed"):(this.loadRuleCards=!0,ty.get("dulst/"+ty.dulst.gameID+"/ruleCards",function(t) {
      e.el.find(".ruleCardVisibility").toggleClass("closed"),ty.dulst.cardsInterface.cardCollection.add(t)
    }))
},regiveLibrary:function() {
    ty.dialog.confirm("Do you want to restart the entire game. This entails deleting the collection of all players. This function should only be used during testing.",function() {
      ty.get("dulst/"+e+"/restartCollections/",function() {
        $("body").notify("Complete restarting collection.")
      })
    })
},giveCardButton:function() {
    ty.dulst.giveCardContainer.dialog("open")
},copyCardsContainer:function(e,t) {
var n=ty.t("dulst/copyContainer").dialog( {title:"Copy Button",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,width:160,height:180,open:function() {
      var i=n.dialog("widget");
      i.find(".copyButton").click(function() {
        $(this).hasClass("off")||(i.find(".copyButton").removeClass("tooltip").addClass("off").find(".text").text("Copying card..."),ty.post("dulst/"+e+"/cardIdeas/copy/"+ty.dulst.cardsInterface.cardID,function(e) {
          i.find(".copyButton").notify(e.title+" has been copied.",function() {
            i.find(".copyButton").addClass("tooltip").removeClass("off").find(".text").text("Copy to "+t)
          })
        }))
      }).find(".text").text("Copy to "+t)
},close:function() {
      localStorage.removeItem("ty.dulst.copyContainer"),n.dialog("destroy")
    }
                                              });
    n.dialog("open")
},copyCards:function(e,t) {
    var n=ty.dulst.gameID,i=ty.dulst.gameTitle;
t&&(i=t.gameTitle,n=t.gameID),localStorage.setItem("ty.dulst.copyContainer",JSON.stringify( {gameID:n,gameTitle:i})),this.copyCardsContainer(n,i)
},wishlist:function() {
    ty.dulst.wishlist(ty.dulst.gameID,ty.dulst.gameTitle)
},addOne:function(e) {
    if(_.isArray(e.get("class")))for(var t=e.get("class").length-1; t>=0; t--)-1==n.classesUsedInGame.indexOf(e.get("class")[t])&&n.classesUsedInGame.push(e.get("class")[t]);
new s( {model:e})
},addAll:function() {
    for(var e=this,t=ty.dulst.game.get("cardTypes"),i=t.length-1; i>=0; i--)n[t[i].name+"Container"]=$("<div />", {"class":"card-list-container"});
n.rulesContainer=$("<div />", {"class":"card-list-container"}),n.cardCollection.models.forEach(this.addOne),$(ty.dulst.cardsInterface).trigger("complete");
    for(var i=t.length-1; i>=0; i--)this.el.find("#card-list-container ."+t[i].name+".list-container .card-list-container").replaceWith(n[t[i].name+"Container"]);
    this.el.find("#card-list-container .rule.list-container .card-list-container").replaceWith(n.rulesContainer);
    var o=localStorage.getItem("ty.dulst.copyContainer");
    o&&(o=JSON.parse(o),this.copyCards(null,o)),$(window).bind("storage",function(t) {
      if("ty.dulst.copyContainer"==t.originalEvent.key) {
        var n=t.originalEvent.newValue;
        n&&(n=JSON.parse(n),e.copyCards(null,n))
      }
    })
},adminContainers:function() {
    var t,n=ty.t("dulst/giveCardContainer",!1);
ty.dulst.giveCardContainer=n.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!1,height:390,width:400,title:"Give Card to Everyone",buttons:[{text:"Give Card",click:function() {
      ty.get("dulst/"+e+"/giveCard/"+t,function() {
        flashMessage("Give Card Success")
      }),$(this).dialog("close")
    }
                                                                                                                                                            }]
}),n.find(".cardName").autocomplete( {source:function(t,n) {
      ty.get("dulst/"+e+"/market/card/"+t.term,function(e) {
        n($.map(e,function(e) {
return {label:
        e.title,nid:
        e.nid,image:
                  e.imageGenerated
                 }
        }))
      })
},select:function(e,t) {
      i(t.item)
},change:function(e,t) {
      i(t.item)
    }
                                                                              });
    var i=function(e) {
      t=e.nid,n.find("img").attr("src",e.image)
    }
},createOnClick:function() {
    if(1==ty.dulst.staff) {
      var e=ty.dulst.game.get("cardTypes")[0].name; "Released"
==this.el.find(".unreleased").text()?n.cardCollection.create( {version:"alpha",type:e}, {success:function(e) {
        ty.redirect(ty.dulst.subdomain+"/cards/"+e.attributes.nid+"/"+ty.url(e.attributes.title))
      }
}):n.cardCollection.create( {type:e}, {success:function(e) {
        ty.redirect(ty.dulst.subdomain+"/cards/"+e.attributes.nid+"/"+ty.url(e.attributes.title))
      }
                                      }),analytics.track("Create New Card", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
} else flashMessage("You need to be a moderator to add new cards. Apply by contacting the moderators for this game."),analytics.track("Create New Card: Not admin", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }),$("#main").html('<div id="content" class="ui-icon-loading"></div>');
  var a=$("#main").width(),l=a-334;
  ty.get("dulst/"+e+"/cardsListPreview",function(n) {
o.cardCollection=new o.CardList(n),o.cardsList=new o.CardListView( {collection:o.cardCollection}),t&&t(),ty.get("dulst/"+e+"/game",function(e) {
      o.cardsList.loadUnreleased||(o.cardCollection.reset(e),o.fullLoad=!0)
    })
  }),o.init=function(e) {
    o.on||(ty.dulst.setCardWidth(l),o.cardsList.render(),$("#dulstMenu li").removeClass("active"),$("#dulstMenu .home").addClass("active"),$.event.trigger("dulst:renderCardList")),e()
  }
},ty.dulst.CardsList.prototype.newNode=function() {},ty.dulst.CardsList.prototype.update=function(e) {
  var t=ty.dulst.cardsInterface;
  ty.dulst.cardsInterface.cardCollection.get(e.message.nid)&&"card"==e.message.ntype?(ty.dulst.cardsInterface.cardCollection.get(e.message.nid).set(e.message),t.cardID==e.message.nid&&t.currentCard_view.model.trigger("otherUserChange")):"card"==e.message.ntype&&ty.dulst.cardsInterface.cardCollection.add(e.message)
},ty.dulst.CardsList.prototype.listCards=function(e) {
  this.init(function() {
    e&&e()
  })
},ty.dulst.CardsList.prototype.defaultCardLibraryInit=function() {
  var e=ty.dulst.gameID,t=this,n=this;
  ty.get("dulst/"+e+"/defaultCardLibrary",function(i) {
n.defaultCardLibraryData=i,_.isNull(i)?(n.defaultCardLibrary=new t.defaultCardLibraryModel( {cards:{},gameID:e}),n.defaultCardLibrary.save()):n.defaultCardLibrary=new t.defaultCardLibraryModel(i),_.isUndefined(n.defaultCardLibrary._view)&&(n.defaultCardLibrary._view=new t.DefaultLibraryView( {model:n.defaultCardLibrary})),n.defaultCardLibrary._view.render()
  })
},ty.dulst.CardsList.prototype.defaultDeckInit=function() {
  var e=ty.dulst.gameID,t=this,n=this;
  ty.get("dulst/"+e+"/defaultDeck",function(i) {
n.defaultDeckData=i,_.isNull(i.defaultDeck)?(n.defaultDeck=new t.defaultDeckModel( {decks:[{cards:{},name:"First Deck"},{cards:{},name:"Second Deck"}],gameID:e}),n.defaultDeck.save()):n.defaultDeck=new t.defaultDeckModel(i.defaultDeck),_.isUndefined(n.defaultDeck._view)&&(n.defaultDeck._view=new t.DefaultDeckView( {model:n.defaultDeck})),n.defaultDeck._view.render()
  })
},ty.dulst.CardsList.prototype.cardsInterfaceCard=function(e) {
  var t=this;
  t.init(function() {
    function n() {
t.cardID=e,t.currentCard_view&&t.currentCard_view.destroy(),t.currentCard_view=new t.CardView( {model:i})
    }
    var i=t.cardCollection.get(e);
    i&&t.fullLoad?n():ty.node.load(e,function(o) {
      i?i.set(o):(t.cardCollection.create(o),i=t.cardCollection.get(e)),n(),"Rule"!=o.type||t.cardsList.loadRuleCards||t.cardsList.ruleCardVisibility()
    })
  })
},ty.dulst=ty.dulst|| {},ty.dulst.Market=function() {
  var e=ty.dulst.gameID;
  _.bindAll(this);
  var t=this,n= {};
this.MarketApp=ty.View.extend( {initialize:function() {
    var e=this;
this.element("marketContainer"),this.booster=ty.t("dulst/boosterResultContainer",!1),this.boosterDialog=this.booster.dialog( {dialogClass:"boosterResultContainer dialogForm",closeOnEscape:!0,autoOpen:!1,height:330,width:472,title:"What You Bought"}),this.sellCardContainer=ty.t("dulst/sellCardContainer",!1).dialog( {dialogClass:"sellCardContainer",closeOnEscape:!0,autoOpen:!1,height:258,width:220,title:"Sell Card",buttons:[{text:"Sell Card",click:function() {
      var t=e.sellCardContainer.dialog("widget").find(".yourPrice").val();
      if(parseInt(t)>1) {
var i=ty.Model.extend( {idAttribute:"nid",url:function() {
          return"/api/dulst/"+ty.dulst.gameID+"/market/sellOrder/"+this.id
        }
                               }),o=new i(n);
$(this).dialog("close"),o.save( {price:e.sellCardContainer.dialog("widget").find(".yourPrice").val()}, {error:function(e,t) {
          flashMessage(t.responseText)
},success:function() {
          flashMessage("Sell Order Created.")
        }
                                                                                                               })
      } else $(this).notify("Price must be greater than 10.")
      }
                                                                                                                                                                                                                                                                                                                                                                                                                                              }]
                                                                                                                                                                                                                                                                                                                                })
},events:{"click .sellCard":"sellCard","click .setup":"setup","click #libraryCards .card":"sellThisCard","click .buyBooster .price":"buyBooster"},setup:function() {
    var e=this,n=e.form("createCardIdeaTemplate");
n.el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:548,width:364,title:"Edit Card Offer",close:function() {
      e.model.save(),$(e.el).dialog("destroy").remove(),delete t.cardIdeaEditor
},buttons:[{text:"Close",click:function() {
      $(this).dialog("close")
    }
               }]
    }),n.el.on("change",function() {
      var t=e.model.get("cards");
ty.post("dulst/cards", {cards:t},function(t) {
        $(e.el).find(".cards").empty(),_.each(t,function(t) {
          $(e.el).find(".cards").prepend(ty.t("cardInOfferTemplate",t))
        })
      })
    })
},sellCard:function() {
    var e=this;
    user&&"anon"!=user?ty.get("dulst/"+ty.dulst.gameID+"/library/"+user,function(t) {
      e.showLibrary(t)
    }):flashMessage("Please login first.")
},buyBooster:function(e) {
    var t=this;
user&&"anon"!=user?(analytics.track("Buy Booster", {user:user,gameID:ty.dulst.gameID,module:"dulst"}),ty.get("dulst/"+ty.dulst.gameID+"/market/booster/buy/"+$(e.currentTarget).parent().attr("data-rarity"),function(e) {"failed"!=e.status?(t.booster.find(".cards").empty(),t.booster.find(".price").text(e.price+" "),$.each(e.cards,function(e,n) {
        n.url="/"+ty.dulst.subdomain+"/cards/"+n.nid+"/"+ty.url(n.title),ty.t("cardListItemTemplate",n).appendTo(t.booster.find(".cards"))
      }),t.boosterDialog.dialog("open")):flashMessage("You cannot afford this.")
      })):flashMessage("Please login first.")
},showLibrary:function(e) {
    var t=ty.t("dulst/deckLibraryHeader");
    t.find("h2").text("Your Cards: Select One to Sell");
    var n=ty.t("cardListContainer", {}),i=$("#main").width()/2-6;
    ty.dulst.setCardWidth(i),$("#market-right").html(n).prepend(t).wrapInner("<div id='libraryCards' class='page market'></div>"),$("#libraryCards .cardStats").remove();
    var o=e;
    o=_.sortBy(o,function(e) {
      return e?String.fromCharCode.apply(String,_.map(e.card.title.split(""),function(e) {
        return 65535-e.charCodeAt()
      })):void 0
      }),$.each(o,function(e,t) {
      if(t&&t.card) {
        t.card.count=t.count;
        var i=ty.t("deckItemViewTemplate",t.card).data("json",t.card),o=$("<div class='same-card' data-cardID='"+t.card.nid+"'></div>");
        o.append(i),ty.dulst.buildDeckView(n,i.attr("data-type"),o,t.count)
      }
}),$("#market-right").scrollbars( {forceScroll:!0}),ty.dulst.hoverPreview.on()
},sellThisCard:function(e) {
this.sellCardContainer.dialog("open"),n= {cardID:
    $(e.currentTarget).attr("data-cardID"),cardName:
    $(e.currentTarget).find(".name").text(),cardImage:
    $(e.currentTarget).find("img").attr("src"),cardType:
        $(e.currentTarget).attr("data-type")
                                             },this.sellCardContainer.dialog("widget").find(".cardName").text($(e.currentTarget).find(".name").text())
},close:function() {},render:function() {
    var t=this;
    $("#main").html(t.el);
    var n=t.el.find("#buySell");
    n.empty(),ty.get("dulst/"+ty.dulst.gameID+"/market/sellOrder",function(e) {
      e=_.sortBy(e,function(e) {
        return-e.price
      }),$.each(e,function(e,t) {
        ty.t("cardSaleTemplate",t).prependTo(n)
}),$("#market-left").scrollbars( {forceScroll:!0})
    }),$("#market-right").html(ty.t("dulst/marketSoldOrdersContainer")),ty.get("dulst/"+ty.dulst.gameID+"/market/soldOrder/0",function(e) {
      _.each(e,function(e) {
        var t=ty.t("soldOrderTemplate",e);
        t.appendTo("#soldOrders")
}),$("#market-right").scrollbars( {forceScroll:!0})
    }),ty.route.sectionClose("market",function() {
      ty.dulst.market.view.rendered=!1,ty.realtime.leave("market-"+e),ty.dulst.hoverPreview.destroy(),$("#main").html('<div id="content"></div>')
    }),$("#dulstMenu li").removeClass("active"),$("#dulstMenu .market").addClass("active"),t.rendered=!0,this.delegateEvents()
  }
                                 });
var i=ty.Model.extend( {idAttribute:"nid",defaults:{},address:function() {
    return"moduleName/"+this.id
  }
                         });
this.currentCard=new i,this.CardSales=ty.View.extend( {initialize:function() {
    this.element("cardOrdersTemplate"),this.render()
},events:{"click .buy":"buyCard","change .fieldText":"saveSellOrders","click .sell":"sellCard"},sellCard:function() {
    var e=this,t=_.filter(e.model.attributes.sellOrders,function(e) {
      return e.user==user
    });
0==t.length?this.el.find(".sellBox").html(ty.t("sellBox", {price:1e3,count:0})):this.el.find(".sellBox").html(ty.t("sellBox", {price:t[0].price,count:t.length}))
},saveSellOrders:function() {
var e= {gameID:
        ty.dulst.gameID,cardID:
        this.model.get("cardID"),handler:"dulst.market.editSellOrder"
        ,count:
        this.el.find(".count").val(),price:
            this.el.find(".yourPrice").val()
           };
    ty.realtime.send(e)
},buyCard:function() {
    var e=this.model.get("cardID");
message= {cardID:
          e,handler:"dulst.market.buySellOrder"
             },ty.realtime.send(message)
},render:function() {
    var e=this;
$("#market-right").html(this.el).scrollbars( {forceScroll:!0}),ty.dulst.library.off(),ty.dulst.library.on("change",function() {
      ty.dulst.library.get("cards")[e.model.get("cardID")]?e.el.find("span.currentCount").text(ty.dulst.library.get("cards")[e.model.get("cardID")]):e.el.find("span.currentCount").text(0)
}),this.cardTransactions=new t.CardTransactionsView( {model:t.currentCard})
  }
}),this.CardTransactionsView=ty.View.extend( {initialize:function() {
    this.model.bind("change",this.render),this.element("dulstMarketCardSoldOrders"),this.render()
},events:{},render:function() {
    t.view.el.find(".transactions").html(this.el)
  }
                                                                                                     })
},ty.dulst.Market.prototype.buySellOrder=function(e) {"success"==e.status?flashMessage("You bought it for "+e.price+" coins."):"ownCard"==e.status?flashMessage("That already belongs to you."):flashMessage("You cannot buy this.")
},ty.dulst.Market.prototype.updateCardSellOrders=function(e) {
  var t=this,n=$("#sellOrder-"+e.cardID);
  e.cardID==t.currentCard.attributes.cardID&&t.card(e.cardID),0==e.count?n.remove():n.length>0?n.replaceWith(ty.t("cardSaleTemplate",e)):t.view.el.find("#buySell").prepend(ty.t("cardSaleTemplate",e))
},ty.dulst.Market.prototype.init=function(e) {
  var t=this;
  t.view?(t.view.rendered||t.view.render(),e&&e()):ty.load("dulst/market",function() {
    t.view=new t.MarketApp,t.view.render(),e&&e()
  })
},ty.dulst.Market.prototype.render=function() {
  var e=this;
  e.init(function() {
    e.view.render()
  })
},ty.dulst.Market.prototype.card=function(e) {
  var t=this;
  t.init(function() {
    ty.get("dulst/"+ty.dulst.gameID+"/market/cardOrders/"+e,function(e) {
      var n=_.filter(e,function(e) {
        return"sellOrder"==e.ntype
      }),i=_.filter(e,function(e) {
        return"soldOrder"==e.ntype
      });
      n=_.sortBy(n,function(e) {
        return e.price
}),t.currentCard.set( {sellOrders:n,soldOrders:i,title:e[0].cardName,price:e[0].price,cardID:e[0].cardID}),t.currentCard_view=new t.CardSales( {model:t.currentCard})
    })
  })
},ty.dulst.market=new ty.dulst.Market,ty.dulst.Matches=function() {
var e=this,t=Backbone.Model.extend( {idAttribute:"name"});
  _.bindAll(this);
var n=Backbone.Model.extend( {idAttribute:"name",url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/customMatch"
  }
                               });
e.MatchList=Backbone.Collection.extend( {model:t,url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/matches"
  }
                                          });
var i=ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var t=this;
e.customMatchForm=t.form("customMatchCreator", {autoSave:!1,autoSet:!0}).el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:181,width:364,title:"Start a New Custom Match",close:function() {
      e.customMatchForm.dialog("destroy").remove(),delete e.customMatchForm
},buttons:[{text:"Create Match",click:function() {
      var e=t.model.toJSON();
ty.realtime.send( {gameID:ty.dulst.gameID,gameTitle:ty.dulst.gameTitle,customTitle:e.customTitle,options:e.options,handler:"dulst.joinMatch"}),$(this).dialog("close")
    }
               }]
                                                                                        })
  }
}),o=ty.View.extend( {tagName:"li",className:"match",initialize:function() {
    this.model.bind("change",this.render),this.render()
},events:{"click span.link.loggedIn":"joinMatch","click a.spectate":"spectate"},joinMatch:function() {
    if(!ty.dulst.inQueue) {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,handler:"dulst.joinMatch"
             };
      ty.realtime.send(e)
    }
},spectate:function(e) {
    var t=$(e.target).prev().text(),n=$(e.target).closest(".match").attr("data-matchID");
    if(ty.dulst.inQueue)$(e.target).notify("You are already in queue for a new game!");
    else {
var i= {handler:"dulstPlay.spectate"
        ,player:
        t,gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,matchID:
              n
             };
      ty.realtime.send(i),$(e.target).notify("Asking to spectate.")
    }
},render:function() {
    var e=this;
    e.model.get("turns")?e.element("matchRowTemplate").prependTo("#matches"):e.model.get("player")&&e.element("matchWaitingTemplate").prependTo("#openMatches")
  }
                                             });
e.update=function() {e.collection.fetch()},e.MatchListView=ty.View.extend( {initialize:function() {
    var t=this;
    _.bindAll(t),e.collection.bind("add",t.addOne),e.collection.bind("reset",t.addAll),ty.load("dulst/matches",function() {
      $("#content").html(t.element("matchesContainer")),t.addAll()
    }),$("#dulstMenu li").removeClass("active"),$("#dulstMenu .matches").addClass("active"),ty.realtime.join("dulst-matches-"+ty.dulst.gameID,"ty.dulst.matches")
},events:{"click #customCreateButton":"customMatchForm"},customMatchForm:function() {
analytics.track("Create Custom Match Form", {user:user,gameID:ty.dulst.gameID,module:"dulst"}); "anon"
    !=ty.user.current.user?new i( {model:new n}):ty.user.register.dialog("open")
},addOne:function(e) {
e.get("name")&&new o( {model:e})
},addAll:function() {
    var t=this;
    $("#matches, #openMatches").empty(),e.collection.each(t.addOne)
  }
                                                                             })
},ty.dulst.Matches.prototype.display=function() {
  var e=this;
e.collection=new e.MatchList,e.collection.fetch( {success:function() {
e.matches=new e.MatchListView( {collection:e.collection})
},error:function() {
    flashMessage("error")
  }
                                                   })
},ty.dulst.matches=new ty.dulst.Matches,ty.Media=function() {
_.bindAll(this),this.channels= {bgm1:
                                  []
                                 }
},ty.Media.prototype.play=function(e,t) {
  var n=this,i=this.channels[e];
  if(i.length>0) {
    var o=$("#file-"+i[0]),r=o[0];
    o.css("display","inline"),r.paused&&r.play(),t?o.attr("loop","loop"):(o.removeAttr("loop"),r.addEventListener("ended",function() {
      n.channels[e].shift(),n.play(e),o.css("display","none")
    }))
  }
},ty.Media.prototype.playnow=function(e) {
  var t;
  e.mp3&&(new Audio).canPlayType("audio/mpeg")?t=new Audio(e.mp3):e.ogg?t=new Audio(e.ogg):e.wav&&(t=new Audio(e.wav)),t.play()
},ty.Media.prototype.skip=function(e,t) {
  var n=this,i=this.channels[e];
  if(i.length>0) {
    var o=$("#file-"+i[0])[0];
    o.pause(),n.channels[e].shift(),n.play(e,t)
  }
},ty.Media.prototype.pause=function(e) {
  var t=this.channels[e];
  if(t.length>0) {
    var n=$("#file-"+t[0])[0];
    n.pause()
  }
},ty.media=new ty.Media,ty.dulst.Onboarding=function() {
  var e=this,t=ty.onboarding,n= {};
t.boxes=n,"aaa"==user&&(t.init( {buttons:[{name:"Start the intro tutorial",onclick:t.next}],title:"Welcome to Dulst!",id:"onboard1",next:"onboard2",overlay:!0,afterShow:function() {
analytics.track("Init", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
}),n.onboard2= {title:"We've created an example game for you.",next:"onboard3",nextTimeout:1e3,width:500,overlay:!0},n.onboard3= {attachTo:"#onboard2",position:6,title:"It's called Animal Kingdom.",classString:"noArrow",id:"onboard3",next:"onboard4",nextTimeout:1e3,width:500,overlay:!0},n.onboard4= {buttons:[{name:"Check out Animal Kingdom",onclick:t.next}],classString:"noArrow",attachTo:"#onboard3",position:6,title:"Let's check it out.",id:"onboard4",next:"onboard7",width:500,afterShow:function() {
analytics.track("onboard4", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),ty.handler("dulst:renderCardList",function() {
      t.destroyAll();
      var n=ty.dulst.cardsInterface.cardsList.collection.filter(function(e) {
        var t=e.get("title");
        return"Leopard"==t?e:void 0
      });
      e.AfricanLeopardnid=n[0].id,t.show("onboard9")
    },!1,!0)
},overlay:!0
},n.onboard7= {title:"This left area shows the recently updated cards.",next:"onboard8",attachTo:"#gameDashboard aside.page .latestUpdatedCards",position:2,nextTimeout:1e3,width:400,highlight:"#gameDashboard aside.page .latestUpdatedCards",overlay:!0},n.onboard8= {classString:"noArrow",attachTo:"#onboard7",position:6,title:"Click on a card to go to the cards list.",width:400,next:"onboard9",highlight:"#gameDashboard aside.page .latestUpdatedCards",overlay:!0,afterShow:function() {
analytics.track("onboard8", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard9= {title:"The cards list shows all the cards in the game.",next:"onboard10",attachTo:"#content",position:2,offset:{left:0,top:100},nextTimeout:1e3,width:400,highlight:"#content",overlay:!0,afterShow:function() {
analytics.track("onboard9", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),ty.handler("dulst:cardView:Leopard",function() {
      $("#content").unbind("scroll",e.leopardScroll),t.destroyAll(),t.show("onboard11")
    },!1,!0)
  }
},n.onboard10= {classString:"noArrow",attachTo:"#onboard9",highlight:"#content",position:6,title:"Click on the Leopard.",width:400,overlay:!0,afterShow:function() {
analytics.track("onboard10", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard10=t.circle( {attachTo:"#cardID-"+e.AfricanLeopardnid,afterShow:function() {
      var t=this;
e.leopardScroll=function() {t.el.position({at:"center center",my:"center center",of:$("#cardID-"+e.AfricanLeopardnid)})},$("#content").bind("scroll",e.leopardScroll)
    }
                                                                                                                       })
  }
},n.onboard11= {attachTo:"#content-right",highlight:"#content-right",overlay:!0,nextTimeout:1e3,next:"onboard12",position:10,title:"The Leopard's data is on the right.",width:400,afterShow:function() {
analytics.track("onboard11", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),$("#card-properties .title.formItem").one("change",function() {
      t.destroyAll(),$("#content").unbind("scroll",e.titleScroll),t.show("onboard13")
    })
  }
},n.onboard12= {attachTo:"#onboard11",highlight:"#content-right",overlay:!0,classString:"noArrow",position:6,title:"Let's be more specific about the origin of this animal. Change its name from Leopard to African Leopard (or anything else you want).",width:400,afterShow:function() {
analytics.track("onboard12", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard12=t.circle( {size:"50",offset:"-70 0",attachTo:"#card-properties .title.formItem",afterShow:function() {
      var t=this;
e.titleScroll=function() {t.el.position({at:"center center",offset:"-70 0",my:"center center",of:$("#card-properties .title.formItem")})},$("#content-right").bind("scroll",e.titleScroll)
    }
                                                                                                                       })
  }
},n.onboard13= {buttons:[{name:"Proceed",onclick:t.next}],classString:"noArrow",next:"onboard14",position:10,title:"Good! You've edited a card.",width:400,overlay:!0,afterShow:function() {
analytics.track("onboard13", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard14= {attachTo:"#content-right",highlight:"#content-right",overlay:!0,nextTimeout:1e3,next:"onboard15",position:10,title:"Let's try editing the image of this card.",width:400,afterShow:function() {
    $("#card-properties .edit-generated-image").one("click",function() {
      t.destroyAll(),$("#content").unbind("scroll",e.editGeneratedImage),t.show("onboard16")
}),analytics.track("onboard14", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard15= {attachTo:"#onboard14",highlight:"#content-right",overlay:!0,classString:"noArrow",position:6,title:"Click the Reposition Card Image button.",width:400,afterShow:function() {
analytics.track("onboard15", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard15=t.circle( {attachTo:"#card-properties .edit-generated-image",afterShow:function() {
      var t=this;
e.editGeneratedImage=function() {t.el.position({at:"center center",my:"center center",of:$("#card-properties .edit-generated-image")})},$("#content-right").bind("scroll",e.editGeneratedImage)
    }
                                                                                                                       })
  }
},n.onboard16= {attachTo:"#content-right",highlight:"#content-right",overlay:!0,nextTimeout:1e3,next:"onboard17",position:10,title:"Drag the image around, and resize it.",width:400,afterShow:function() {
analytics.track("onboard16", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),ty.handler("dulst:cardView:"+ty.url(ty.dulst.cardsInterface.currentCard_view.model.get("title")),function() {
      $("#card-properties .generate").one("click",function() {
        t.destroyAll(),$("#content").unbind("scroll",e.generateButton),t.show("onboard18")
      })
    },!1,!0)
  }
},n.onboard17= {attachTo:"#onboard16",highlight:"#content-right",overlay:!0,classString:"noArrow",position:6,title:"When you're done, click on Save Image.",width:400,afterShow:function() {
analytics.track("onboard17", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard17=t.circle( {attachTo:"#card-properties .generate",afterShow:function() {
      var t=this;
e.generateButton=function() {t.el.position({at:"center center",my:"center center",of:$("#card-properties .generate")})},$("#content-right").bind("scroll",e.generateButton)
    }
                                                                                                                       })
  }
},n.onboard18= {buttons:[{name:"Proceed",onclick:t.next}],attachTo:"#content-right",highlight:"#content-right",overlay:!0,next:"onboard19",title:"Great! You've edited the image for the African Leopard.",width:400,afterShow:function() {
analytics.track("onboard18", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard19= {position:2,nextTimeout:1e3,attachTo:"#cardsList section header.section ul.admin",next:"onboard20",title:"Next we'll look at what cards players get when they join your game.",width:300,afterShow:function() {
analytics.track("onboard19", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),$("#cardsList .defaultlibrarylink").one("click",function() {
      t.destroyAll(),$("#content").unbind("scroll",e.adminButton),t.show("onboard21")
    })
  }
},n.onboard20= {position:6,attachTo:"#onboard19",classString:"noArrow",next:"onboard21",title:"Select Default Library from the Admin Menu.",width:300,afterShow:function() {
analytics.track("onboard20", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard20=t.circle( {attachTo:"#cardsList .admin .admin",afterShow:function() {
      var t=this;
e.adminButton=function() {t.el.position({at:"center center",my:"center center",of:$("#cardsList .admin .admin")})},$("#content").bind("scroll",e.adminButton)
    }
                                                                                                                       })
  }
},n.onboard21= {next:"onboard22",attachTo:"#content-right",highlight:"#content-right",position:10,nextTimeout:1e3,overlay:!0,title:"The right half changes to become the default library.",width:300,afterShow:function() {
analytics.track("onboard21", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard22= {overlay:!0,attachTo:"#onboard21",highlight:"#content-right",position:6,classString:"noArrow",next:"onboard23",nextTimeout:1e3,title:"New users will get these cards when joining your game.",width:300,afterShow:function() {
analytics.track("onboard22", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),$("#defaultdecksLink").one("click",function() {
      t.destroyAll(),$("#content-right").unbind("scroll",e.defaultDecksButton),t.show("onboard24")
    })
  }
},n.onboard23= {overlay:!0,highlight:"#content-right",position:6,classString:"noArrow",attachTo:"#onboard22",title:"Next let's look at the starter decks.",width:300,afterShow:function() {
analytics.track("onboard23", {user:user,gameID:ty.dulst.gameID,module:"onboarding"}),t.circles.onboard23=t.circle( {attachTo:"#defaultdecksLink",afterShow:function() {
      var t=this;
e.defaultDecksButton=function() {t.el.position({at:"center center",my:"center center",of:$("#defaultdecksLink")})},$("#content-right").bind("scroll",e.defaultDecksButton)
    }
                                                                                                                       })
  }
},n.onboard24= {position:6,nextTimeout:1e3,next:"onboard25",title:"These are the decks users will get upon joining the game.",width:300,afterShow:function() {
analytics.track("onboard24", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
},n.onboard25= {attachTo:"#onboard24",position:6,classString:"noArrow",next:"onboard26",nextTimeout:1e3,title:"And.",width:300,afterShow:function() {
analytics.track("onboard25", {user:user,gameID:ty.dulst.gameID,module:"onboarding"})
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    })
},ty.dulst=ty.dulst|| {},ty.dulst.matchID=0,ty.dulst.gameInit=function(e,t) {
  function n(e) {
    return e=_(e).clone(),e&&_(e).isArray()&&(e.forEach(function(t,n) {
      e[n]=t.trim().replace(/\s/gi,"-")
    }),e=e.join(" ")),e
  }
  function i(e,t,n) {
    if(O&&"me"==N) {
      $(".areaContainer .card, #card-container .card").removeClass("hover-select"),e.addClass("hover-select"),t.hasClass("combination-button")||(t=t.wrap('<div class="combination-button" />').parent());
      var i= {};
      if(e.data("qtip")) {
        var o=e.qtip("api").get("content.text");
        i=e.qtip("api").get("buttonsTextObj"),t.find(".dulstButton").each(function(e,t) {
          t=$(t),i[t.text()]||(o.append(t),i[t.text()]=1)
        })
} else e.qtip( {overwrite:!0,content:t,position:{target:e,my:"bottom center",at:"top center",adjust:{y:40}},show:{event:n.type,ready:!0},style:{classes:"dulstCardOption"},hide:{delay:200,fixed:!0},events:{hide:function(e,t) {
          t.destroy()
        }
      }
      }),t.find(".dulstButton").each(function(e,t) {
        t=$(t),i[$(t).text()]=1
      });
      e.qtip("api").set("buttonsTextObj",i)
    }
  }
  function o() {
$("#selectCardsReminder").hide(),ty.realtime.send( {handler:"dulstPlay.move",msg:"select card",ciidArray:v}),E=0,b=[],$("#card-container .selected").removeClass("selected"),$("#finish-select").fadeOut()
  }
  function r() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"choice:cancel"})
  }
  function s(e,t) {
    var n;
    if(e.effects&&e.effects[0]) {
      var i=_.find(ty.dulst.game.get("cardTypes"),function(t) {
        return t.name==e.type
      });
      if(e.effects[0].effectTrigger&&"use"==e.effects[0].effectTrigger.primary||e.effects[0].effectTrigger&&-1!=e.effects[0].effectTrigger.primary.indexOf("use"))if(t.addClass("useFromBoard"),e.effects[0].effectTrigger&&e.effects[0].effectTrigger["use-trigger-EffectNumber"]) {
          n=e.effects[0].effectTrigger["use-trigger-EffectNumber"].split(",");
          for(var o=0; o<n.length; o++)n[o]=n[o].split(":")[1],n[o]||(n[o]="Use Effect");
          t.attr("data-effectButtons-Board",n)
        } else t.attr("data-effectButtons-Board","Use Effect");
      else i.autoUseEffect&&(t.addClass("useFromBoard"),t.attr("data-effectButtons-Board","Use Effect"));
      for(var r=["Hand","Board","Afterlife","Deadpool","Sidearea"],o=0; o<r.length; o++)if(e.effects[0].effectTrigger&&(e.effects[0].effectTrigger.primary=="useFrom"+r[o]||!e.effects[0].effectTrigger.primary||-1!=e.effects[0].effectTrigger.primary.indexOf("useFrom"+r[o])))if(t.addClass("useFrom"+r[o]),e.effects[0].effectTrigger["useFrom"+r[o]+"-trigger-EffectNumber"]) {
            n=e.effects[0].effectTrigger["useFrom"+r[o]+"-trigger-EffectNumber"].split(",");
            for(var s=0; s<n.length; s++)n[s]=n[s].split(":")[1],n[s]||(n[s]="Use Effect");
            t.attr("data-effectButtons-"+r[o],n)
          } else t.attr("data-effectButtons-"+r[o],"Use Effect")
          }
  }
  function a() {
    function t() {
      return c%s==0?s:c%s
    }
           T=null,S=null,$("body").addClass("dulstPlay");
    var n=$("#content");
    contentHeight=n.height();
    var i=ty.t("dulst/playContainer");
n.html(i).prepend('<div id="cardShowArea"><div class="cardFullInfo"></div></div>'),$("#selectCardsContainer").dialog( {dialogClass:"selectCardsContainer",title:"Select from these cards",position:["center","center"],closeOnEscape:!1,closeText:"x",autoOpen:!1,width:525,height:340,buttons:[{text:"Finish Select",click:function() {
      $(this).dialog("close")
    }
}],open:function() {
      $(".selectCardsContainer :button").blur()
},close:function() {
      o()
    }
}),$("#afterlifeCardsContainer").dialog( {dialogClass:"afterlifeCardsContainer",title:"the Afterlife",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,width:525,height:340}),$("#deadpoolCardsContainer").dialog( {dialogClass:"deadpoolCardsContainer",title:"the Deadpool",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,width:525,height:340}),$("#sideareaCardsContainer").dialog( {dialogClass:"sideareaCardsContainer",title:"the Sidearea",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,width:525,height:340}),$("#choiceContainer").dialog( {dialogClass:"choiceContainer",title:"Make a Decision",position:["center","center"],closeOnEscape:!1,closeText:"x",autoOpen:!1,width:300,height:220,close:function() {
      r()
},open:function() {
      $(".choiceContainer :button").blur()
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }),y=n.width()>contentHeight?contentHeight:n.width();
    var s=6,a=40;
    if(A&&"grid"==A.type) {
      s=12,a=0;
      for(var l=[],c=1; s*s+1>c; c++)l.push( {number:"gridSpace-"+c,row:Math.ceil(c/s),col:t()})
      }
    var d=(y-a)/s;
    g=d*s+a,n.width()-g<300&&(g-=300-(n.width()-g),d=(g-a)/s),contentHeight>g&&(w=(contentHeight-g)/2),p=d*(s-2)+a,$("#board").css("height",p).css("width",p).css("margin-top",d);
    var u=20;
    A&&"grid"==A.type&&(u=2),x=d-u;
    var h=.8;
    if(f=x*h,$("#board").css("margin-left",f+20+"px"),m=f+a+f+p,ty.dulst.game.get("stats")&&$.each(ty.dulst.game.get("stats"),function(e,t) {
ty.t("dulstPlayStat-opponent", {stat:t}).css("bottom",44*e).appendTo("#opponent-stats"),ty.t("dulstPlayStat-me", {stat:t}).css("top",44*e).appendTo("#me-stats")
}),i.css( {width:m,height:g,"margin-top":w}),A&&"grid"==A.type) {
      $("#playContainer").append(ty.t("dulstPlayGrid",l));
      var v=m;
m>g&&(v=g),d=v/(s+2),x=d-u,f=x*h,$("#dulstPlayGrid .gridSpace").globalcss("height",d).css("width",d),$("#dulstPlayGrid").css( {height:d*s,"padding-top":(g-d*s)/2,"padding-left":(m-d*s)/2,width:d*s})
    }$("#playContainer .card").globalcss("height",x),$("#playContainer #board .row, #playContainer .side-spot").globalcss("height",d),$("#playContainer .side-spot").globalcss("width",f+20),$("#playContainer .stats .count").globalcss("width",f-8),A?$("#opponent-avatar").remove():($("#opponent-avatar").height(x).width(f),$("#opponent-avatar .avatar").height(f).width(f),$("#opponent-avatar .name").css("line-height",x-f-14+"px"),$("#opponent-avatar .name").css("font-size",x-f-14+"px")),$("#board-left").css("top",d),$("#board-right").css("top",0),$("#board-right").css("left",p+f+20),$("#me-hand, #opponent-hand").css("height",d).css("left",f+20),$("#opponent-hand").css("top",0),$("#me-hand").css("top",p+d);
    var b=n.width()-m,C=0;
b>302&&(C=(b-302)/2-5,i.css("margin-right",C),$("#cardShowArea").css( {"margin-left":C,"margin-top":w}),b=302),$("#cardShowArea").css("width",b);
    var _=$("#cardShowArea").width();
    800>=contentHeight&&(_=180,i.find(".side-divider .dulstButton").css("font-size","100%")),$("#cardShowArea .image img").globalcss("height","auto"),$("#cardShowArea .image img").globalcss("width",_),$("#cardShowArea .info").globalcss("max-height",contentHeight-_/h-20-114-30-15-10-w-w),$("#surrender").click(function() {
ty.realtime.send( {handler:"dulstPlay.surrender"}),$(this).hide()
    });
    var k,E,I=190,N=380;
    k=$("#playContainer").position().left+$("#playContainer").width()/2-N/2,E=$("#playContainer").position().top+$("#playContainer").height()/2-I/2;
    var D=ty.t("dulst/gameResults");
D.dialog( {dialogClass:"gameResultsContainer",position:[k,E],closeOnEscape:!1,closeText:"x",autoOpen:!1,width:N,height:I}),D.find(".return").bind("click",function() {
      ty.redirect(ty.dulst.subdomain),$(".playAMatch").text("Play a match!")
    });
    var P=$('<div id="matchChat" />');
    $("#cardShowArea").append(P);
    var O=!0;
P.chat("match-"+ty.dulst.gameID+"-"+e,O).css( {width:b,"margin-bottom":w}),P.find(".chatLog").css("height","6em"),P.children(".field-chatroom").bind("newMessage",function(e,t) {
      var n=t.body,i=/^\/a /g;
      if(i.test(n)) {
        var o=n.replace("/^/a /","");
ty.realtime.send( {handler:"dulstPlay.adminCommand",command:o})
      }
    })
  }
  function l(e,t) {
    if(e&&$("#c-"+e.ciid).length>=1) {
      var n;
      e.classes=_(e.class).clone(),e.classes&&_(e.classes).isArray()&&(e.classes.forEach(function(t,n) {
        e.classes[n]=t.trim().replace(/\s/gi,"-")
}),e.classes=e.classes.join(" ")),0===e.ciid&&(e.ciid="0"),$("#c-"+e.ciid).length>=1?n=$("#c-"+e.ciid).data("json",e).attr( {"data-type":e.type,src:e.imageGenerated,"data-dulstClass":e.classes,"data-name":e.title}).removeClass("facedown faceupdefense cardBack").addClass(e.position).addClass(e.type):(n=ty.t("CardfaceupTemplate",e).data("json",e),n.attr("src",e.imageGenerated).appendTo("#card-container"),n.appendTo("#card-container")),e.effects&&e.effects[0]&&s(e,n)
      }
                                          t&&t()
  }
  function c(e,t,n,i) {
    var o;
    if(o=$("#"+t),e.attr("data-location",t),e.removeClass(L),e.removeClass("effect-in-chain"),e.addClass(t),"me-deck"==n||"opponent-deck"==n) {
      var r=$("#"+n),s=r.position().left+r.parent().position().left,a=r.position().top+r.parent().position().top;
e.css( {left:s,top:a}),e.appendTo("#card-container")
    }
    i&&i.replaceWith(e);
    var l=m-o.position().left-f,s=l+10,a=o.position().top+10;
A&&"grid"==A.type&&(s=l+2,a=o.position().top+2),"opponent-FirstRow"==t||"opponent-SecondRow"==t||"opponent-hand"==t?e.css( {left:s,top:a}):o.hasClass("side-spot")?(s=o.position().left+o.parent().position().left+10,a=o.position().top+o.parent().position().top+10,e.css( {left:s,top:a}),o.hasClass("deck")&&setTimeout(function() {
      e.remove()
},2e3)):(A&&"grid"==A.type?(s=o.position().left+2,a=o.position().top+2):(s=o.position().left+10,a=o.position().top+10),e.css( {left:s,top:a})),"opponent-deck"!=t&&"me-deck"!=t&&"opponent-afterlife"!=t&&"me-afterlife"!=t&&"opponent-deadpool"!=t&&"me-deadpool"!=t&&"opponent-sidearea"!=t&&"me-sidearea"!=t&&d(t),"opponent-FirstRow"!=t&&"me-FirstRow"!=t&&"opponent-SecondRow"!=t&&"me-SecondRow"!=t&&e.removeClass("facedown facedowndefense")
  }
  function d(e) {
    var t=$("#card-container").find('.card[data-location="'+e+'"]').length,n=p-20,i=$("#"+e),o=i.position().left,r=0,s=i.position().top;
    A&&"grid"==A.type&&/gridSpace/i.test(e)?(o+=2,s+=2):(o+=10,s+=10,r=n>f*t+10*t?5+f:Math.round(n/t));
    var a=[],l=[],c=-1,d=function(t,n) {
if("opponent-FirstRow"==e||"opponent-SecondRow"==e||"opponent-hand"==e)mirroredLeft=m-(r*n+o)-f,t.css( {left:mirroredLeft,top:s});
      else {
        var i=r*n+o;
t.css( {left:i,top:s})
      }
    },u=function(e) {
      var t=_.find(a,function(t) {
        return t.k==e
      });
      return!t&&e>c?e:u(e+1)
    };
    $("#card-container").find('.card[data-location="'+e+'"]').each(function(e) {
      var t=e;
      if($(this).data().json) {
        var n=$(this).data().json.posX;
n&&"undefined"!=n&&(e=parseInt(n),a.push( {card:this,k:e}))
      }
      e==t&&l.push(this)
    });
    for(var h=a.length-1; h>=0; h--)d($(a[h].card),a[h].k);
    l.forEach(function(e,t) {
      t=u(t),c=t,d($(e),t)
    })
  }
  function u() {
    function e(e,t) {
      var n=$("<div />").attr("class","combination-button");
      if(e.attr("data-effectButtons-"+t))for(var i=e.attr("data-effectButtons-"+t).split(","),o=0; o<i.length; o++)n.append($("#useEffect-template").clone().removeAttr("id").text(i[o]).attr("data-effectButtonIndex",o));
      return n
    }
    function n() {
(l!=s||c!=a)&&(l=s,c=a,ty.realtime.send( {handler:"dulstPlay.mousemove",x:s,y:a,playContainerX:m,playContainerY:g}))
    }
    ty.dulst.joinMatchStatus=!1,$("#card-container, #selectCardsContainer, #deadpoolCardsContainer, #sideareaCardsContainer, #afterlifeCardsContainer, #winDrops").delegate(".card:not(.cardBack)","mouseover",function() {
      var e=$(this),t=e.data("json");
      t._test=ty.dulst._test,t!=$("#cardShowArea").data("json")&&($("#cardShowArea .cardFullInfo").html(ty.t("CardPreviewTemplate",t)),$("#cardShowArea").data("json",e.data("json")))
    }),$("#cardShowArea").delegate(".debugHelper","click",function() {
ty.realtime.send( {handler:"dulstPlay.adminCommand",command:"check card",ciid:$(this).attr("data-ciid")})
    });
    var r=["afterlife","deadpool","sidearea"];
    r.forEach(function(e) {
      $("#card-container").delegate(".card.opponent-"+e,"click",function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"view "+e,player:"opponent"})
      }),$("#card-container").delegate(".card.me-"+e,"click",function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"view "+e,player:"me"})
      })
    }),$("#card-container, #deadpoolCardsContainer, #sideareaCardsContainer, #afterlifeCardsContainer").delegate(".card","useEffect",function(e,t) {
ty.realtime.send( {handler:"dulstPlay.move",msg:"use effect",effectButtonIndex:t,ciid:$(this).attr("data-ciid")})
    }),$("#card-container").delegate('.Trap[data-location="me-SecondRow"]',"click",function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"use trap",ciid:$(this).attr("data-ciid")})
    }),$("#card-container").delegate('.useFromBoard[data-location="me-SecondRow"], .useFromBoard[data-location="me-FirstRow"]',"mouseover",function(t) {
      i($(this),e($(this),"Board"),t)
    }),$("#card-container").delegate('.useFromHand[data-location="me-hand"]',"mouseover",function(t) {
      i($(this),e($(this),"Hand"),t)
    }),$("#afterlifeCardsContainer").delegate(".useFromAfterlife","mouseover",function(t) {
      i($(this),e($(this),"Afterlife"),t)
    }),$("#deadpoolCardsContainer").delegate(".useFromDeadpool","mouseover",function(t) {
      i($(this),e($(this),"Deadpool"),t)
    }),$("#sideareaCardsContainer").delegate(".useFromSidearea","mouseover",function(t) {
      i($(this),e($(this),"Sidearea"),t)
    }),$(".useEffect").die("click").live("click",function() {
      $("#card-container, #deadpoolCardsContainer, #sideareaCardsContainer, #afterlifeCardsContainer").find(".card.hover-select").trigger("useEffect",$(this).attr("data-effectButtonIndex"))
    }),$("#card-container").delegate(".card","positionChange",function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"change position",ciid:parseInt($(this).attr("data-ciid"),10)})
    }),$(".giveEffectSource").die("click").live("click",function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"give effect run source",ciid:$(".card.hover-select").attr("data-ciid"),effectIndex:$(this).attr("data-effectIndex"),source:$(this).attr("data-sourceCard")})
    }),$("#selectCardsContainer").delegate(".card","click",function() {
      if(E>1) {
        if(!$(this).hasClass("selected")) {
          $(this).addClass("selected"),E--,v.push(parseInt($(this).attr("data-ciid"),10));
          var e=$("#selectCardsReminder").text().replace(E+1,E);
          $("#selectCardsReminder").text(e)
        }
      } else 1===E&&(v.push(parseInt($(this).attr("data-ciid"),10)),$("#selectCardsContainer").dialog("close").empty())
}),$("#opponent-FirstRow, #opponent-SecondRow").click(function() {"selected"==C&&(ty.realtime.send( {handler:"dulstPlay.move",msg:"attack",player:"player",attackerciid:$("#card-container").find(".selected-for-attack").attr("data-ciid"),ciid:$("#card-container").find(".selected-for-attack").attr("data-ciid")}),$("#card-container .selected-for-attack").removeClass("selected-for-attack"))
    }),$("#finish-select").click(function() {
      o()
    }),$("#card-container").delegate(".card","click",function(e,t) {
      var n=parseInt($(this).attr("data-ciid"),10);
      if(!(b.length>0&&-1==b.indexOf(n)))if(E>1) {
          if(!$(this).hasClass("selected")) {
            $(this).addClass("selected"),E--,v.push(n);
            var i=$("#selectCardsReminder").text().replace(E+1,E);
            $("#selectCardsReminder").text(i)
          }
        } else if(1===E)v.push(n),o();
        else {
          var r;
          if(r="right"==t?"right":"left","me-FirstRow"==$(this).attr("data-location"))"selected"==C&&$("#card-container .selected-for-attack").removeClass("selected-for-attack"),E>1||($(this).addClass("selected-for-attack"),C="selected");
          else if("opponent-FirstRow"==$(this).attr("data-location")) {
            if("selected"==C) {
              var s=$("#card-container").find(".selected-for-attack");
ty.realtime.send( {handler:"dulstPlay.move",msg:"attack",targetciid:$(this).attr("data-ciid"),targetFrom:$(this).attr("data-location"),attackerFrom:s.attr("data-location"),attackerciid:s.attr("data-ciid")}),C=void 0,s.removeClass("selected-for-attack")
            }
} else"me-SecondRow"==$(this).attr("data-location")?"selected"==C&&ty.realtime.send( {handler:"dulstPlay.move",msg:"use effect",ciid:$(this).attr("data-ciid")}):ty.realtime.send( {handler:"dulstPlay.move",msg:"click",clickButton:r,ciid:$(this).attr("data-ciid"),from:$(this).attr("data-location")})
        }
    }),$("#end-turn").click(function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"turn end"})
    }),$("#bottom-SecondRow").delegate(".trap.allow-activation, .effect.allow-activation","click",function() {
      $(this).trigger("use")
    });
    var s,a,l,c,d=function(e) {
      var t=$("#playContainer");
      s=e.pageX-t.offset().left,a=e.pageY-t.offset().top,move("#mouseNextNotification").x(s+15).y(a-13).duration("0s").end()
    };
    t||($(window).bind("mousemove",d),k=setInterval(n,50))
  }
  function h(e) {
    $("#statusMessage .latest").removeClass("latest");
$("<div/>", {"class":"msgText latest",text:e}).prependTo("#statusMessage");
    $("#statusMessage .msgText.active").removeClass("active"),setTimeout(function() {
      $("#statusMessage .latest").addClass("active").removeClass("latest")
    },100)
  }
  var f,p,m,g,y,v=[],b=[],w=0;
  ty.dulst.matchID=e;
var C,x,k,T,S,E=0,I="",N="",D=[],P=!1,A=ty.dulst.game.get("layout"),O=!0,M= {denied:
                                          []
                                                                              },L="me-hand me-deck me-afterlife me-FirstRow me-SecondRow me-deadpool me-sidearea opponent-hand opponent-deck opponent-afterlife opponent-FirstRow opponent-SecondRow opponent-deadpool opponent-sidearea";
  ty.load("dulst/play",function() {
    a(),P=!0,$.each(D,function(e,t) {
      ty.dulst.playEval(t)
    })
  });
  var R,j;
  if(ty.dulst.play=function(e) {
  1==P?ty.dulst.playEval(e):D.push(e)
  },ty.dulst.playEval=function(e) {
    switch("mousemove"!=e.msg,e.msg) {
    case"mousemove":
      var o=e.x,r=e.y,a=m-o*m/e.playContainerX-12,d=g-r*g/e.playContainerY-19;
      move("#mouseImg").x(a).y(d).duration("0s").end();
      break;
    case"card json":
var f=$("<div />", {text:e.card,"class":"dulstDebug"});
ty.dialog.dialog(f, {height:$(window).height()/1.5,width:300,modal:!1,title:"Debug data"});
      break;
    case"setStatus":
      h(e.text);
      break;
    case"setBackground":
      var p=$('<style id="dulstPlayCSS"></style>');
      p.appendTo("head"),p.html("#main, #doubleBackground{background:url("+e.bg+") no-repeat center center fixed; background-size: cover;}#ui-layout-center{background:transparent;}"),e.ladder?delete ty.dulst._test:ty.dulst._test=!0;
      {
$("<img/>", {id:"cardBackTemplate","class":"card cardBack",src:e.cardBack}).appendTo("#invisibleTemplates")
      }
if($("#me-deck").prepend($("#cardBackTemplate").clone().addClass("deck-back").removeAttr("id")),$("#opponent-deck").append($("#cardBackTemplate").clone().addClass("deck-back").removeAttr("id")),$.browser.webkit)$("#dulst_jPlayer").jPlayer( {volume:.4,ready:function() {
$(this).jPlayer("setMedia", {webm:"http://cdn2.dulst.com/cardSrcImage/164snvh4e_sweep.webm",mp3:"http://cdn4.dulst.com/cardSrcImage/164slp8hv_Sweep_Motion.mp3"}).jPlayer("play")
      }
                                                                                                                                                                                                                                                      });
      else {
var y= {user:
        ty.settings.siteName,ct:
        (new Date).getTime(),body:"Animations disabled for this browser. Try Google Chrome, animations work properly there."
               };
        $("#matchChat>.chat").chat("render",y)
      }
      break;
    case"cardHovered":
      var o=e.left,r=e.top,w=e.from.replace(/opponent/,"me");
      $("#"+w+" .card").addClass("opponent-hovered");
      break;
    case"player1":
      R="player1",j="player2",$("#me-deck .count").text(e.deckCount),u();
      break;
    case"player2":
      R="player2",j="player1",$("#me-deck .count").text(e.deckCount),u();
      break;
    case"opponentProfile":
      e.opponentAvatar[0]&&($("#opponent-avatar .avatar").attr("src",e.opponentAvatar[0]),$("#opponent-avatar .name").text(e.opponentName),$("#opponent-avatar").fadeIn());
      break;
    case"opponentDeckCount":
      I=e.opponentName,ty.notification&&ty.notification.send("DulstPlay","Game Started",I+" has joined your game!"),$("#opponent-deck .count").text(e.deckCount);
      break;
    case"updateDeckCount":
      $("#"+e.toPlayer+"-deck .count").text(e.count);
      break;
    case"loadMedia":
      _.each(e.media,function(e) {
        0==$("#file-"+e.nid).length&&ty.t("dulst_playLoadMedia",e).appendTo("#mediaContainer")
      });
      break;
    case"media":
      var C=e.nid+"-"+e.file;
      e.channel||(e.channel="new"),ty.media.channels[e.channel]=ty.media.channels[e.channel]||[];
      var D=ty.media.channels[e.channel]; "clear and play"
      ==e.command?"new"==e.channel?("loop"==e.loop&&$("#file-"+C).attr("loop","loop"),C=$("#file-"+C)[0],C.play()):(ty.media.channels[e.channel]=[C],"loop"==e.loop?ty.media.play(e.channel,!0):ty.media.play(e.channel)):"play"==e.command?"new"==e.channel?("loop"==e.loop&&$("#file-"+C).attr("loop","loop"),C=$("#file-"+C)[0],C.play()):(D[0]&&ty.media.pause(e.channel),ty.media.channels[e.channel].unshift(C),"loop"==e.loop?ty.media.play(e.channel,!0):ty.media.play(e.channel)):"add to channel"==e.command?(ty.media.channels[e.channel].push(C),ty.media.play(e.channel)):"pause"==e.command?ty.media.pause(e.channel):"skip file"==e.command?"loop"==e.loop?ty.media.skip(e.channel,!0):ty.media.skip(e.channel):"clear channel"==e.command&&(D[0]&&ty.media.pause(e.channel),ty.media.channels[e.channel]=[]);
      break;
    case"request spectate":
      break;
    case"change background":
      break;
    case"newTurn":
      N=e.turn,$("#board-spot-center-divider, #content").removeClass("me opponent").addClass(e.turn),"opponent"==e.turn?($("#end-turn").fadeOut(),$("#bottom-SecondRow .trap").addClass("allow-activation"),$(document).trigger("end-turn")):$("#end-turn").fadeIn();
      break;
    case"you lose":
      clearInterval(k),$("#surrender").fadeOut(),$("#board-spot-center-divider").notify("You completed a match!",function() {
        $("#gameResults").find(".win").remove(),$("#gameResults").find("span.points").append(" "+e.points+" "),$("#gameResults").find("span.coins").append(" "+e.coins+" "),$("#gameResults").find(".defeated").prepend(I+" "),$("#gameResults").find(".card").remove(),$("#gameResults").dialog("open").addClass("lose")
      });
      break;
    case"consolation drops":
      clearInterval(k),$("#surrender").fadeOut(),$("#board-spot-center-divider").notify("You completed a match!",function() {
        $("#gameResults").find(".win").remove(),$("#gameResults").find("span.points").append(" "+e.points+" "),$("#gameResults").find("span.coins").append(" "+e.coins+" "),$("#gameResults").find(".defeated").prepend(I+" "),$("#gameResults").find(".card .name").append(" "+e.card.title).addClass(e.card.type),$("#gameResults").dialog("open").addClass("lose")
      });
      break;
    case"you win no drop":
      $("#surrender").fadeOut(),clearInterval(k),$("#board-spot-center-divider").notify("Congratulations! You win!",function() {
        $("#gameResults").find(".lose").remove(),$("#gameResults").find(".card").remove(),$("#gameResults").find("span.points").append(" "+e.points+" "),$("#gameResults").find("span.coins").append(" "+e.coins+" "),$("#gameResults").find(".defeated").append(" "+I),$("#gameResults").dialog("open").addClass("winNoDrop")
      }),h("Congratulations! You win!");
      break;
    case"win drops":
      clearInterval(k),$("#surrender").fadeOut(),$("#board-spot-center-divider").notify("Congratulations! You win!",function() {
        $("#board-spot-center-divider").notify("You win a new card!",function() {
          var t,n,i=280,o=500;
          t=$("#playContainer").position().left+$("#playContainer").width()/2-o/2,n=$("#playContainer").position().top+$("#playContainer").height()/2-i/2+40,$.each(e.choices,function(e,t) {
            ty.t("selectCardTemplate",t).appendTo($("#winDrops")).find(".card").data("json",t)
}),$("#winDrops").dialog( {dialogClass:"winDropsContainer",position:[t,n],closeOnEscape:!1,closeText:"x",autoOpen:!0,width:o,height:i}),$("#winDrops img").each(function(e,t) {
            var t=$(t);
            setTimeout(function() {
              if(!t.data("hasLoaded")) {
                var e=t.attr("src").replace(/cdn\d\.dulst\.com/gi,"s3.amazonaws.com/dulst");
                t.attr("src",e)
              }
            },3e3),t.load(function() {
              t.data("hasLoaded",!0)
            })
          }),$("#winDrops").delegate(".card","click",function() {
T||(T=$(this).attr("data-name")),S||(S=$(this).attr("data-type")),ty.realtime.send( {handler:"dulstPlay.selectWinDrop",nid:$(this).attr("data-nid")})
          })
        })
      });
      break;
    case"win drops complete":
      $("#winDrops").dialog("close"),$("#gameResults").find(".lose").remove(),$("#gameResults").find(".card .name").append(" "+T).addClass(S),$("#gameResults").find("span.points").append(" "+e.points+" "),$("#gameResults").find("span.coins").append(" "+e.coins+" "),$("#gameResults").find(".defeated").append(" "+I),$("#gameResults").dialog("open");
      break;
    case"test log":
ty.dulst.console||(ty.dulst.console=ty.t("dulstPlayLogContainer",e),ty.dulst.console.dialog( {height:$(window).height()/2,width:300,modal:!1,title:"Game Console",resizable:!0,closeText:"X",close:function() {
ty.dulst.console.dialog("destroy").remove(),ty.dulst.console=void 0,ty.realtime.send( {handler:"dulstPlay.stopLog"})
      }
                                                                                                   }));
      break;
    case"test log item":
e.log.options=e.log.options|| {},$("#dulstLog").append(ty.t("dulstPlayLogItem", {log:e.log}));
      break;
    case"setStat":
      var P,O=e.stat,L=$("#"+e.player+"-"+O+" .count"),B=$("#"+e.player+"-"+O+" .alter-notice"),H=parseInt(L.text(),10),z=parseInt(e.changeTo,10)-H;
H<parseInt(e.changeTo,10)?(B.text("+"+z),P="increase"):(B.text(z),P="decrease"),B.removeClass("increase decrease").addClass(P).fadeIn(400),jQuery( {count:H}).animate( {count:parseInt(e.changeTo,10)}, {duration:1e3,step:function() {
        L.text(Math.round(this.count))
},complete:function() {
        B.fadeOut(2e3),L.text(e.changeTo)
      }
                                                                                                                                                                                                              });
      break;
    case"positionChange":
      var F=$("#c-"+e.ciid);
      e.position?F.removeClass("faceupdefense facedown faceup").addClass(e.position):F.hasClass("faceupdefense")?F.removeClass("faceupdefense facedown").addClass("faceup"):F.hasClass("faceup")?F.removeClass("faceup facedown").addClass("faceupdefense"):F.removeClass("facedown faceupdefense").addClass("faceup");
      break;
    case"flipCard":
      l(e.card);
      break;
    case"moveTo":
      var F=$("#c-"+e.ciid),w=void 0,q=void 0,W=e.cardData;
      W&&(q=F,0===W.ciid&&(W.ciid="0"),W.classes=n(W.class),F=ty.t("CardfaceupTemplate",W).data("json",W),F.attr("src",W.imageGenerated),W.effects&&e.cardData.effects[0]&&s(W,F),$("#c-"+e.ciid).length>=1?$("#c-"+e.ciid).replaceWith(F):F.appendTo("#card-container"),setTimeout(function() {
        if(!F.data("hasLoaded")) {
          var e=F.attr("src").replace(/cdn\d\.dulst\.com/gi,"s3.amazonaws.com/dulst");
          F.attr("src",e)
        }
      },3e3),F.load(function() {
        F.data("hasLoaded",!0)
      })),F.removeClass("hover-select");
      var V=e.toPlayer+"-"+e.to;
      A&&"grid"==A.type&&/gridSpace/i.test(e.to)&&(V=e.to),"hand"==e.from?"opponent"==e.fromPlayer&&"faceup"==e.position&&(w="opponent-hand"):"deadpool"==e.from?$("#"+e.fromPlayer+"-deadpool .count").textMath(-1):"sidearea"==e.from?$("#"+e.fromPlayer+"-sidearea .count").textMath(-1):"afterlife"==e.from?$("#"+e.fromPlayer+"-afterlife .count").textMath(-1):"deck"==e.from?($("#"+e.fromPlayer+"-deck .count").textMath(-1),1===parseInt($("#"+e.fromPlayer+"-deck .count").text(),10)&&$("#"+e.fromPlayer+"-deck .image").hide(),"me"==e.fromPlayer||$("#c-"+e.ciid).length<1&&(F=$("#cardBackTemplate").clone().attr("id","c-"+e.ciid)),w=e.fromPlayer+"-deck"):"FirstRow"==e.from&&F.removeClass("faceupdefense"),"FirstRow"==e.to&&"faceup"!=e.position&&(F=F.addClass("facedown").removeClass("faceup")),"SecondRow"==e.to&&(F=F.addClass("facedown").removeClass("faceup")),A&&"grid"==A.type&&/gridSpace/i.test(e.to)?F.attr("data-ciid",e.ciid).attr("data-location",e.to):F.attr("data-ciid",e.ciid).attr("data-location",e.toPlayer+"-"+e.to);
      var U=F.data("json");
      U&&(U.posX=e.posX,F.data("json",U)),c(F,V,w,q);
      break;
    case"reqTrap":
      if("me"==e.player) {
        var G=e.text;
        switch(G) {
        case"Invoke":
          G=""+I+" is trying to Invoke a Unit. Use a trap? (To use a trap, click on a trap card on your side of the board)";
          break;
        case"attack":
          G=e.trapData.targetciid?$("#c-"+e.trapData.targetciid).attr("data-name")+" is being attacked by "+$("#c-"+e.trapData.attackerciid).attr("data-name")+". Use a trap?":"You are being attacked by "+$("#c-"+e.trapData.attackerciid).attr("data-name")+". Use a trap?";
          break;
        case"use effect":
          G=I+" is using "+e.trapData.title+". Use a trap?";
          break;
        default:
          G="Use a trap?"
        }$("#board-spot-center-divider").qtip("destroy"),$("#board-spot-center-divider").notify(G,function() {
ty.realtime.send( {handler:"dulstPlay.move",msg:"decline trap"})
        })
      } else $("#waitingForOpponent").show();
      break;
    case"add class":
      h("You can't use this now.");
      break;
    case"remove card from match":
      var F=$("#c-"+e.ciid);
      F.remove();
      break;
    case"clientUpdateCard":
      l(e.card);
      break;
    case"setCardProperty":
      var F=$("#c-"+e.ciid),X=e.newCardProperty.property,Y=parseFloat(e.newCardProperty.newValue),J=e.newCardProperty.difference,W=$("#c-"+e.ciid).data("json");
      if(W) {
        var H=parseFloat(W[X]);
        W[X]=Y,F.data("json",W);
        var P,z=Y-H;
        P=Y>H?"increase":H>Y?"decrease":"equal";
        {
          W.title
        }
      } else {
        var Q=/-/;
        P=Q.test(J)?"decrease":"increase"
      }
        var K;
      if(ty.dulst.game.get("cardTypes").forEach(function(e) {
      e.properties&&-1!=e.properties.indexOf(X)&&(K=!0),e.secondaryProperties&&-1!=e.secondaryProperties.indexOf(X)&&(K=!0)
      }),F.length>0&&!F.data("cardChangingValueContainer")&&(F.data("cardChangingValueContainer",$('<div class="cardChangingValueContainer"></div>')),F.data("cardChangingValueContainer").appendTo("#card-container")),X=X.toUpperCase(),F.length>0&&"equal"!=P&&K) {
        F.data("cardChangingValueContainer").find("."+X).hide();
var Z=ty.t("dulst_cardChangingValue", {property:X}).appendTo(F.data("cardChangingValueContainer")),o=F.css("left"),r=parseFloat(F.css("top").replace("px","")),et=Z.children();
F.data("cardChangingValueContainer").css( {left:o,top:r+x+12}),et.removeClass("increase decrease").addClass(P).show(),F.hasClass("cardBack")?(et.find(".count").text(J),setTimeout(function() {
          et.fadeOut(2e3),setTimeout(function() {
            Z.remove()
          },2e3)
},1500)):$( {count:H}).animate( {count:Y}, {duration:1500,step:function() {
          var e=F.css("left"),t=parseFloat(F.css("top").replace("px",""));
F&&F.data("cardChangingValueContainer")&&F.data("cardChangingValueContainer").css( {left:e,top:t+x+12}),et.find(".count").text(Math.round(this.count))
},complete:function() {
          et.fadeOut(2e3),et.find(".count").text(e.changeTo),setTimeout(function() {
            Z.remove()
          },2e3)
        }
                                                   })
      }
      break;
    case"Insufficient effectPower":
      h("You cannot use this trap! Its effect power is too low!");
      break;
    case"incorrect trigger":
      h("You cannot use this trap right now.");
      break;
    case"status message":
      h(e.text);
      break;
    case"popup message":
      flashMessage(e.text);
      break;
    case"use trap":"me"
      ==e.player?($("#c-"+e.trapData.ciid).addClass("effect-in-chain faceup").removeClass("facedown"),$("#board-spot-center-divider").qtip("destroy")):"opponent"==e.player&&(l(e.trapData),$("#c-"+e.trapData.ciid).addClass("effect-in-chain"),$("#waitingForOpponent").hide(),h(I+" is using "+e.trapData.title));
      break;
    case"decline trap":"opponent"
      ==e.player&&$("#waitingForOpponent").hide();
      break;
    case"trap incorrect trigger":
      h("You can't use this right now");
      break;
    case"choice:spectateRequest":
      var tt=e.spectator,nt=e.clientID,it=JSON.parse(localStorage.getItem("ty.dulst.deniedSpectators"))||[];
      if(-1!=M.denied.indexOf(tt))return;
      if(it&&-1!=it.indexOf(tt))return;
      var ot=$("#choiceContainer").clone();
ot.dialog( {dialogClass:"choiceContainer",title:"Allow a spectator",position:["center","center"],closeOnEscape:!1,closeText:"x",autoOpen:!1,width:300,height:165,close:function() {
        ot.dialog("destroy")
},open:function() {
        $(".choiceContainer :button").blur()
      }
                 });
var rt=$("<div/>", {"class":"question",text:e.choiceQuestion});
      ot.empty().append(rt),$.each(e.choices.split("\n"),function(e,t) {
$("<button/>", {text:t.replace(/effect \w+/gi,"")}).appendTo(ot).click(function() {
var e=$(this).text(),t= {handler:"dulstPlay.spectateAnswer"
                         ,spectator:
                         tt,spectatorID:
                         nt,msg:
                                   e
                                  }; "Deny"
          ==e&&M.denied.push(tt),"Block this user"==e&&(it.push(tt),localStorage.setItem("ty.dulst.deniedSpectators",JSON.stringify(it))),ot.dialog("close"),ty.realtime.send(t)
        })
      }),ot.dialog("open");
      break;
    case"choice:request":
      if("me"==e.player) {
        if("multiple choice"==e.choiceType) {
var rt=$("<div/>", {"class":"question",text:e.choiceQuestion});
          $("#choiceContainer").empty().append(rt),$.each(e.choices.split("\n"),function(e,n) {
$("<button/>", {text:n.replace(/effect \w+/gi,""),"data-index":e}).appendTo("#choiceContainer").click(function() {
t||ty.realtime.send( {handler:"dulstPlay.move",choice:$(this).attr("data-index"),msg:"choice:select"}),$("#choiceContainer").dialog("close")
            })
          })
        }$("#choiceContainer").dialog("open")
      } else $("#waitingForOpponent").show();
      break;
    case"choice:selected":
      $("#waitingForOpponent").hide();
      break;
    case"reqSelect":
      if("me"==e.player) {
        v=[];
        var w=e.criteria,st="s";
        1==e.count&&(st=""),E=parseInt(e.count,10);
        var at="either your or "+I+"'s";
        e.criteria&&e.criteria.player&&(at=e.criteria.player,e.criteria.opponentsOwn?at="your":"opponent"==at?at=I+"'s":"me"==at?at="your":"owner"!=at||w.playerOpposite?"owner"==at&&w.playerOpposite?at=I+"'s":at||("me"==w?at="your":"opponent"==w&&(at=I+"'s")):at="your");
        var G=G="Select "+e.count+" card"+st+" from the board";
        if("FirstRow"==w||"SecondRow"==w||"opponentFirstRow"==w||"opponentSecondRow"==w||"allRows"==w||"OwnerBoard"==w||"opponentBoard"==w||"SecondRows"==w||"FirstRows"==w||"board"==w.from)G="FirstRow"==e.from?"Select "+e.count+" unit"+st+" from "+at+" side of the board":"Select "+e.count+" card"+st+" from the board",$("#finish-select").fadeIn();
        else if("hand"==w.from)G="Select "+e.count+" card"+st+" from "+at+" hand",$("#finish-select").fadeIn();
        else if("FirstRow"==w.from||"SecondRow"==w.from)G="Select "+e.count+" card"+st+" from "+at+" Board",$("#finish-select").fadeIn();
        else if(_.isArray(w.from))G="Select "+e.count+" card"+st+" from "+at+" hand or board",$("#finish-select").fadeIn();
        else {
          var lt=$("<div></div>");
          b=_.pluck(w,"ciid"),$.each(w,function(e,t) {
            ty.t("selectCardTemplate",t).appendTo(lt).find(".card").data("json",t)
          }),G="Select "+e.count+" card"+st,$("#selectCardsContainer").html(lt),$("#selectCardsContainer").dialog("open"),$("#selectCardsContainer img").each(function(e,t) {
            var t=$(t);
            setTimeout(function() {
              if(!t.data("hasLoaded")) {
                var e=t.attr("src").replace(/cdn\d\.dulst\.com/gi,"s3.amazonaws.com/dulst");
                t.attr("src",e)
              }
            },3e3),t.load(function() {
              t.data("hasLoaded",!0)
            })
          })
        }
             e.instructions&&(G=e.instructions),$("#selectCardsReminder").text(G),$("#selectCardsReminder").show()
      } else $("#waitingForOpponent").show();
      break;
    case"opponent select complete":
      $("#waitingForOpponent").hide();
      break;
    case"give effect source":
      var F=$("#c-"+e.ciid),ct=".card",dt=[],ut=e.effects,ht="both";
      if(ut&&ut.target&&ut.target.criteria) {
        var ft=ut.target.criteria;
        if(ft.type&&(ct=ct+"."+ft.type),"owner"==ft.player&&(ht="me"),"opponent"==ft.player&&(ht="opponent"),"board"==ft.from&&(ft.from=["FirstRow","SecondRow"]),ft.from&&_.isArray(ft.from))if(-1!=ft.from.indexOf("board")&&(ft.from.push("FirstRow"),ft.from.push("SecondRow")),"both"==ht) {
            for(var pt=0; pt<ft.from.length; pt++)dt.push(ct+".me-"+ft.from[pt]);
            for(var pt=0; pt<ft.from.length; pt++)dt.push(ct+".opponent-"+ft.from[pt])
            } else for(var pt=0; pt<ft.from.length; pt++)dt.push(ct+"."+ht+"-"+ft.from[pt]);
        else ft.from&&("both"==ht?(dt.push(ct+".me-"+ft.from),dt.push(ct+".opponent-"+ft.from)):dt.push(ct+"."+ht+"-"+ft.from))
        }
      ct=dt.join(",");
var mt=e.source,gt=$.trim(ut.action.effectFrom.replace(/effect \w+:/gi,""));
      $("#card-container").delegate(ct,"mouseover",function(t) {
        i($(this),$("<div data-sourceCard="+mt+" data-effectIndex="+e.effectIndex+' class="dulstButton giveEffectSource">'+gt+"</div>"),t)
      });
      break;
    case"selectFailedToValidate":
      var F=$("#c-"+e.ciid);
      F.hasClass("faceup")?h(F.attr("data-name")+" cannot be targeted by your effect."):h("Your effect failed");
      break;
    case"view afterlife":
      if("me"==e.player) {
        var lt=$("<div></div>");
        $.each(e.cards,function(e,t) {
          var n=ty.t("selectCardTemplate",t).appendTo(lt).find(".card").data("json",t),i=t;
          s(i,n)
        }),$("#afterlifeCardsContainer").html(lt),"your"==e.whose?$("#afterlifeCardsContainer").dialog("option","title","Your Afterlife"):$("#afterlifeCardsContainer").dialog("option","title","Your Opponent's Afterlife"),$("#afterlifeCardsContainer").dialog("open")
      } else"your"==e.whose?h("Your opponent is viewing your afterlife"):h("Your opponent is viewing her afterlife");
      break;
    case"view deadpool":
      if("me"==e.player) {
        var lt=$("<div></div>");
        $.each(e.cards,function(e,t) {
          var n=ty.t("selectCardTemplate",t).appendTo(lt).find(".card").data("json",t),i=t;
          s(i,n)
        }),$("#deadpoolCardsContainer").html(lt),"your"==e.whose?$("#deadpoolCardsContainer").dialog("option","title","Your Deadpool"):$("#deadpoolCardsContainer").dialog("option","title","Your Opponent's Deadpool"),$("#deadpoolCardsContainer").dialog("open")
      } else"your"==e.whose?h("Your opponent is viewing your deadpool"):h("Your opponent is viewing her deadpool");
      break;
    case"view sidearea":
      if("me"==e.player) {
        var lt=$("<div></div>");
        $.each(e.cards,function(e,t) {
          var n=ty.t("selectCardTemplate",t).appendTo(lt).find(".card").data("json",t),i=t;
          s(i,n)
        }),$("#sideareaCardsContainer").html(lt),"your"==e.whose?$("#sideareaCardsContainer").dialog("option","title","Your Sidearea"):$("#sideareaCardsContainer").dialog("option","title","Your Opponent's Sidearea"),$("#sideareaCardsContainer").dialog("open")
      } else"your"==e.whose?h("Your opponent is viewing your sidearea"):h("Your opponent is viewing her sidearea")
      }
  },jQuery.fn.textMath=function(e,t) {"*"==t?this.text(parseInt(this.text(),10)*e):"/"==t?this.text(parseInt(this.text(),10)/e):this.text(parseInt(this.text(),10)+e)
  },navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Bada/i)||navigator.userAgent.match(/blackberry/i)||navigator.userAgent.match(/kindle/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/Opera Mobi/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/PSP/i));
  else {
    var B=function() {
      $("#matchChat .fieldText").focus()
    };
    $(window).click(B)
  }
  ty.route.sectionClose("dulstPlay",function() {
ty.realtime.send( {handler:"dulstPlay.surrender"}),$("body").removeClass("dulstPlay"),$("#content").chat("close","match-"+ty.dulst.matchID),$("#dulstPlayCSS").remove(),$("style[id=dulstPlayCSS]").remove(),$("#winDrops").dialog("destroy").remove(),$("#gameResults").dialog("destroy").remove(),$("#selectCardsContainer").dialog("destroy").remove(),ty.dulst.console&&(ty.dulst.console.dialog("destroy").remove(),ty.dulst.console=void 0),$(window).unbind("click",B),$(window).unbind("mousemove",mouseNextNotification),clearInterval(k)
  })
},ty.dulst=ty.dulst|| {},ty.dulst.players=function(e) {
  function t(e) {
    $("#content").html(ty.t("dulst/playersContainer"));
    for(var t=0; t<e.length; t++)e[t].points=e[t]["dulst-"+n+"-p"],ty.t("playerRowTemplate",e[t]).appendTo($("#playersContainer"))
    }
      var n=ty.dulst.gameID;
  ty.load("dulst/cardsInterface",function() {
    ty.get("dulst/"+n+"/players/"+e,function(e) {
      t(e)
    })
  }),$("#dulstMenu li").removeClass("active"),$("#dulstMenu .players").addClass("active")
},ty.dulst.Profile=function() {
  var e=this;
_.bindAll(this),this.Profile=Backbone.Model.extend( {idAttribute:"name",defaults:{name:"anon"},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/profile/"+this.id
  }
                                                      });
ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var t=this;
return e.profileEditor&&e.profileEditor.dialog("close"),e.profileEditor=t.form("createProfileTemplate").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:500,width:364,title:"Edit Profile",close:function() {
      e.profileEditor.dialog("destroy").remove(),delete e.profileEditor
    }
                                                                                                                       }),t
  }
                  });
return this.ProfileView=ty.View.extend( {initialize:function() {
    var e=this;
    ty.load("dulst/profile",function() {
      e.render()
    })
},events:{"click .rank":"expandRanks","click li.achievement":"expandAchievements","click .createAchievement":"createAchievement","click .favoriteCards .expand":"expandFavoriteCards","click .favoriteDecks .expand":"expandFavoriteDecks","click .profileSettings":"profileSettings"},expandFavoriteCards:function() {
    var e=this,t=e.el.find(".favoriteCards .content");
    t.find(".expand").remove(),e.favoriteCards.forEach(function(e) {
      e.url="/"+ty.dulst.subdomain+"/cards/"+e.nid+"/"+ty.url(e.title),t.append(ty.t("cardListItemTemplate",e))
    })
},expandFavoriteDecks:function() {
    var e=this,t=e.el.find(".favoriteDecks .content");
    t.find(".expand").remove(),e.favoriteDecks.forEach(function(t) {
      t.url="/"+ty.dulst.subdomain+"/"+t.user+"/decks/"+t.nid+"/"+ty.url(t.title),e.el.find(".favoriteDecks").append(ty.t("dulstProfileDeckList",t))
    })
},expandRanks:function() {
    var e=this;
_.isArray(ty.dulst.game.get("ranks"))&&ty.dulst.game.get("ranks").length>0&&ty.dialog.information(ty.t("dulstProfileRanks", {current:e.userLibrary.rank,ranks:ty.dulst.game.get("ranks")})).position( {my:"right top",at:"left top",offset:"-13 -13",of:e.el.find(".rank")})
},expandAchievements:function(e) {
    var t=$(e.currentTarget);
    t.toggleClass("closed")
},createAchievement:function() {
    ty.post("dulst/"+ty.dulst.gameID+"/achievement")
},profileSettings:function() {},render:function() {
    function e(e) {
      var t,n,i;
      for(t=1; t<e.length; t++)n=Math.floor(Math.random()*(1+t)),n!=t&&(i=e[t],e[t]=e[n],e[n]=i);
      return e
    }
           var t=this;
    $("#content").html(t.element("dulstProfile")),t.userLibrary;
    var n,i,o=_.after(3,function() {
      if(t.userLibrary.gameCards=n,t.userLibrary.userCards=0,t.userLibrary.setsCount=i,t.userLibrary.cards)for(var e=n.length-1; e>=0; e--)t.userLibrary.cards[n[e].nid]&&t.userLibrary.userCards++;
      else t.userLibrary.level=0;
      t.el.find(".statsContainer").html(ty.t("dulstProfileStats",t.userLibrary))
    });
    ty.get("dulst/"+ty.dulst.gameID+"/profile/setsCount",function(e) {
      i=e.setsCount,o()
    }),ty.get("dulst/"+ty.dulst.gameID+"/droppableCards",function(e) {
      n=e,o()
    }),ty.get("dulst/"+ty.dulst.gameID+"/cardlibrary/"+t.model.get("name"),function(e) {
      t.userLibrary="failed"!=e.status?e: {},o()
    }),ty.get("dulst/"+ty.dulst.gameID+"/profile/"+t.model.get("name")+"/favoriteCards",function(n) {
      t.favoriteCards=n;
      var i=n.length;
      n=e(n).splice(0,5);
      var o=t.el.find(".favoriteCards .content");
      0==n.length&&window.user==t.model.get("name")?o.html("You haven't liked any cards yet. Go to the <a href=/"+ty.dulst.subdomain+"/cards>cards list</a> and like some cards."):(o.empty(),n.forEach(function(e) {
        e.url="/"+ty.dulst.subdomain+"/cards/"+e.nid+"/"+ty.url(e.title),o.append(ty.t("cardListItemTemplate",e))
      }),i>5&&o.append('<a class="expand">More</a>'))
    }),ty.get("dulst/"+ty.dulst.gameID+"/profile/"+t.model.get("name")+"/favoriteDecks",function(n) {
      t.favoriteDecks=n;
      var i=n.length;
      n=e(n).splice(0,5);
      var o=t.el.find(".favoriteDecks .content");
      0==n.length&&window.user==t.model.get("name")?o.html("You haven't liked any decks yet. View <a href=/"+ty.dulst.subdomain+"/"+window.user+"/decks>your decks</a> or a friend's decks, and like some of them."):(o.empty(),n.forEach(function(e) {
        e.url="/"+ty.dulst.subdomain+"/"+e.user+"/decks/"+e.nid+"/"+ty.url(e.title),o.append(ty.t("dulstProfileDeckList",e))
      }),i>5&&o.append('<a class="expand">More</a>'))
    }),ty.get("dulst/"+ty.dulst.gameID+"/profile/"+t.model.get("name")+"/achievements",function(e) {
      t.achievementsData=e;
      for(var n=e.achievements,i=e.userAchievements,o=_.uniq(_.pluck(n,"category")),r= {},s=o.length-1; s>=0; s--)r[o[s]]=ty.t("dulstAchievementCategory", {name:o[s]});
      var a=0,l=0;
      for(var c in n) {
        var d=n[c];
        d.id=c,d.user=t.model.get("name"),i&&i[c]&&(d.userLevel=i[c].level,isNaN(d.userLevel)&&(d.userLevel=0),l+=d.userLevel),d.userLevel>d.badges.length&&(d.userLevel=d.badges.length);
        var u=ty.t("dulstAchievementItem",d);
        if(d.userLevel&&d.userLevel>1)for(var s=0; s<d.userLevel-1; s++)ty.t("dulstAchievementMini",d.badges[s]).addClass("before").insertBefore(u.find("a.proper"));
        if(d.userLevel&&d.userLevel<d.badges.length)for(var s=d.userLevel; s<=d.badges.length-1; s++) {
            var h="after";
            s==d.userLevel&&(h="after next"),ty.t("dulstAchievementMini",d.badges[s]).addClass(h).appendTo(u)
          }
        else if(!d.userLevel)for(var s=1; s<=d.badges.length-1; s++) {
            var h="after";
            ty.t("dulstAchievementMini",d.badges[s]).addClass(h).appendTo(u)
          }
        u.appendTo(r[d.category].find(".content")),a+=d.badges.length
      }
    ty.t("dulstAchievementStats", {user:l,total:a,percentage:Math.round(l/a*100)}).appendTo(t.el.find(".achievements header.stats"));
      for(var c in r) {
        var f=r[c];
        f.appendTo(t.el.find(".achievements ul.achievements.content"))
      }
    })
},addAll:function() {
    e.collection.each(this.addOne)
  }
                                          }),this
},ty.dulst.Profile.prototype.display=function(e) {
  var t=this;
t.profile=new this.Profile( {name:e}),t.profile.fetch( {success:function() {
t.profileView=new t.ProfileView( {model:t.profile})
},error:function() {
    flashMessage("error")
  }
                                                         })
},ty.dulst.achievement= {queue:[],obtained:function(e) {
  ty.dulst.achievement.queue.push(e),ty.dulst.achievement.queue[0].playing||ty.dulst.achievement.play()
},play:function() {
  var e=ty.dulst.achievement.queue[0];
  if(e) {
    ty.dulst.achievement.queue[0].playing=!0;
    var t=ty.t("dulstAchievementsObtained",e.content);
ty.media.playnow( {mp3:"http://cdn4.dulst.com/cardSrcMedia/16tn8tsn0_achievements.mp3",ogg:"http://cdn5.dulst.com/cardSrcMedia/16tn90f6k_achievements.ogg"}),t.appendTo("body"),t.show(),setTimeout(function() {
      t.fadeOut(),setTimeout(function() {
        t.remove(),ty.dulst.achievement.queue.shift(),ty.dulst.achievement.play()
      },400)
    },4e3)
  }
}
},ty.dulst.RegionsInterface=function() {
  var e=this;
  _.bindAll(this),e.gameID=ty.dulst.gameID;
var t=Backbone.Model.extend( {idAttribute:"nid",defaults:{title:"new region",level:1,time:10,price:2e3,ntype:"region",cards:[],cardReward:[]},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/regions/"+this.id
  }
                               });
this.RegionList=Backbone.Collection.extend( {model:t,comparator:function(e) {
    var t=e.get("level").toString(),n=t.length;
    return 2===n&&(t="0"+t),1===n&&(t="00"+t),t+e.get("title")
},levelAvailable:function() {},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/regions"
  }
}),this.RegionView=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render","updateCard"),this.model.bind("otherUserChange",this.otherUserChange),this.render()
},events:{"change .formUpdateThis":"updateCard"},otherUserChange:function() {
    this.hasChanged()&&this.render()
},updateCard:function(e) {
    var t= {},n=this;
    n.el.find(".formUpdateThis").each(function() {
      var e=$(this).attr("name"),i=$(this).val();
      if("image"==e&&i.split(",").length>1) {
        var o=i.split(",");
        $(this).val(o[0]),i=o[0],o.shift();
        for(var r=o.length-1; r>=0; r--)cardsInterface.cardCollection.create( {version:n.model.get("version"),type:n.model.get("type"),image:o[r]})
        }
      if("number"==$(this).attr("type")&&(i=parseFloat(i)),$(this).hasClass("multiple"))if($(this).hasClass("fieldTags"))t[e]=i.split(",");
        else if("multiGroupKey"==$(this).attr("name")||"multiGroupValue"==$(this).attr("name")) {
          if("multiGroupKey"==$(this).attr("name")) {
            var s,i;
            s=$(this).val(),i=$(this).closest(".formMultiGroup").find('input[name="multiGroupValue"]').val();
            var a= {};
            a[s]=i,e=$(this).closest(".formMultiGroup").attr("name"),s&&s.length>0&&i&&i.length>0&&(t[e]&&_.isArray(t[e])?t[e].push(a):t[e]=[a])
          }
        } else t[e]&&_.isArray(t[e])?t[e].push(i):t[e]=[i];
      else t[e]=i
      }),t.customCardProperties||(t.customCardProperties=[]),t.effects=this.model.get("effects"),this.model.save(t),e&&$(e.target).hasClass("image")&&this.render()
},render:function() {
    var e=this;
    ty.dulst.staff?e.element("regionView"):e.element("regionView");
    e.el;
return $("#content-right").html(e.el).scrollbars( {forceScroll:!0}),this.delegateEvents(),this
  }
                                                                                 });
var n=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render");
    var e=this;
    this.model.bind("change",function() {
      1==_.size(e.model.changedAttributes())&&e.model.changedAttributes().ut||(e.render(),e.open())
    }),this.model.view=this,this.render()
},events:{"click .edit":"edit","click .take":"take"},edit:function() {
    var e=this;
new i( {model:e.model})
},toggleOpenClose:function() {
    var e=this;
    e.el.hasClass("open")?e.close():e.open()
},take:function() {
    var t=this;
analytics.track("Complete Region", {user:user,gameID:ty.dulst.gameID,module:"dulst"}),ty.post("dulst/"+ty.dulst.gameID+"/regions/take", {region:t.model.get("nid")},function(n) {
      if(n.status&&(t.el.find(".cardSlot").removeClass("filled").addClass("open").attr("data-tooltip","!first"),t.el.removeClass("progressComplete"),t.runProgressbar(),t.buildResultsContainer(),ty.dulst.regionLibraryinMemory(n.library),ty.dulst.regions.get("waiting")&&ty.dulst.regions.get("waiting").length>0)) {
        var i=ty.dulst.regions.get("waiting")[0],o=e.collection.get(i);
        t.el.notify("This region is complete. "+o.get("title")+" will now start.",function() {
          o.view.start()
        })
      }
    })
},complete:function() {
    this.el.addClass("progressComplete").removeClass("active")
},runProgressbar:function(e) {
    var t=this;
    if(e||(e=this.model.toJSON()),this.el.find(".progress").html(ty.t("regionProgressBar",e)),!this.progressRunner&&e.endTime&&e.endTime>(new Date).getTime()) {
      var n=1e3;
      e.time<5e6&&(n=500),e.time<5e5&&(n=100),e.time<12e4&&(n=50),e.time<4e4&&(n=20),this.progressRunner=regionInterval(function() {
        t.el.find(".progress").html(ty.t("regionProgressBar",e)),e.endTime<(new Date).getTime()&&(clearInterval(t.progressRunner),delete t.progressRunner,t.complete())
      },n)
    }
},stopProgressbar:function() {
    this.progressRunner&&(clearInterval(this.progressRunner),delete this.progressRunner)
},render:function() {{
      var e=this;
      e.model.toJSON()
    }
    return e.element("regionPlaceTemplate"),e.el.appendTo("#regions"),e
  }
}),i=ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var t=this;
return e.regionEditor&&e.regionEditor.dialog("close"),e.regionEditor=t.form("createRegionTemplate").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:500,width:364,title:"Edit Region",close:function() {
      e.regionEditor.dialog("destroy").remove(),delete e.regionEditor
    }
                                                                                                                   }),t
  }
                                             });
return e.RegionListView=ty.View.extend( {initialize:function() {
    var t=this;
    e.collection.bind("add",t.addOne),e.collection.bind("reregion",t.render),_.bindAll(this,"addOne","addAll","render")
},events:{"click .regionSettings":"regionSettings"},copyRegion:function() {
ty.t("dulst/copyRegionContainer").dialog( {title:"Copy",position:["center","center"],dialogClass:"dialogForm",closeOnEscape:!0,closeText:"x",autoOpen:!0,width:364,height:"auto",buttons:[{text:"Copy This Region",click:function() {
      var e=$(this);
      ty.post("dulst/"+e.data("originGame")+"/regions/copy/"+e.data("copiedRegion"),function(t) {
        e.find(".fieldText").notify(t.title+" has been copied.")
      })
    }
}],close:function() {
      $(this).dialog("destroy").remove()
},open:function() {
      var e=$(this);
$(this).data("originGame",ty.dulst.gameID),$(this).find(".fieldText").autocomplete( {source:function(e,t) {
        var n=ty.dulst.regionsInterface.collection.filter(function(t) {
          return-1!=t.get("title").indexOf(e.term)
        });
        t($.map(n,function(e) {
return {label:
        e.get("title"),nid:
                  e.get("nid")
                 }
        }))
},select:function(t,n) {
        e.data("copiedRegion",n.item.nid)
},change:function(t,n) {
        e.data("copiedRegion",n.item.nid)
      }
                                                                                          })
    }
                                              })
},render:function() {
    var t=this;
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .regions").addClass("active");
    var n=$("#main").width(),i=n-332;
$("#main").html('<div id="content" class="half" style="width:'+i+'px;"></div><div id="content-right" style="width:332px;"></div>'),$("#content").html(t.element("regionsContainerJade", {regionsCount:e.collection.length})),t.addAll(),e.visible=!0,ty.dulst.staff&&(ty.realtime.join(ty.dulst.gameID,"ty.dulst.regionsInterface"),ty.route.sectionClose("regionsInterface",function() {
      e.collection.each(function(e) {
        e.view.stopProgressbar()
      }),e.visible=!1,ty.realtime.leave(ty.dulst.gameID)
    }))
},regionSettings:function() {
e.regionSettingsEditor=self.form("regionSettings").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:500,width:364,title:"Edit Region",close:function() {
      e.regionSettingsEditor.dialog("destroy").remove(),delete e.regionSettingsEditor
    }
                                                                  })
},addOne:function(e) {
new n( {model:e})
},addAll:function() {
    e.collection.each(this.addOne)
  }
  }),this.init=function(t) {
    e.collection?(e.visible||e.regions.render(),t&&t()):(e.collection=new e.RegionList,ty.load("dulst/regions",function() {
e.collection.fetch( {success:function() {
e.regions=new e.RegionListView( {collection:e.collection}),e.regions.render(),t&&t()
},error:function() {
        flashMessage("error")
      }
                          })
    }))
  },this
},ty.dulst.RegionsInterface.prototype.region=function(e) {
  var t=this;
  return this.init(function() {
    var n=t.collection.get(e);
t.currentRegion_view=new t.RegionView( {model:n})
  }),this
},ty.dulst.RegionsInterface.prototype.display=function() {
  var e=this;
  return e.init(),this
},ty.dulst.RegionsInterface.prototype.newNode=function(e) {
  this.collection.get(e.message.nid)||"region"!=e.message.ntype||this.collection.add(e.message)
},ty.dulst.RegionsInterface.prototype.update=function(e) {
  this.collection.get(e.message.nid)&&"region"==e.message.ntype?this.collection.get(e.message.nid).region(e.message):"region"==e.message.ntype&&this.collection.add(e.message)
},ty.dulst.regionsInterface=new ty.dulst.RegionsInterface,ty.dulst.SetsInterface=function() {
  var e=this;
  this.gameID=ty.dulst.gameID,_.bindAll(this),$(".linkToSet").die("click").live("click",function(t) {
    var n=$(this).attr("href");
    if("#"==n[0]) {
      var i=$(this).attr("data-setID");
      e.sets.scrollTo(i)
    }
    t.preventDefault()
  });
var t=ty.Model.extend( {idAttribute:"nid",defaults:{title:"new set",level:1,time:10,price:2e3,ntype:"set",cards:[],cardReward:[]},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/sets/"+this.id
  }
                         });
this.SetList=Backbone.Collection.extend( {model:t,comparator:function(e) {
    var t=e.get("level").toString(),n=t.length;
    return 2===n&&(t="0"+t),1===n&&(t="00"+t),t+e.get("title")
},levelAvailable:function() {},releasedSets:function() {
    return this.filter(function(e) {
      var t=e.get("version");
      return"rc"!=t&&"alpha"!=t&&"beta"!=t?!0:void 0
    })
},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/sets"
  }
                                           });
var n=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render");
    var e=this;
    this.model.bind("change",function() {
      1==_.size(e.model.changedAttributes())&&e.model.changedAttributes().ut||(e.render(),e.open())
    }),this.model.view=this,this.render()
},events:{"click .edit":"edit","click .content":"toggleOpenClose","click .unlock":"unlock","click .cardSlot.open":"insert","click .take":"take"},edit:function() {
    var e=this;
new i( {model:e.model})
},toggleOpenClose:function() {
    var e=this;
    e.el.hasClass("open")?e.close():e.open()
},open:function() {
    var t=this;
    if(!t.el.hasClass("loaded")) {
      var n=t.model.get("cards"),i=t.model.get("cardReward");
ty.post("dulst/"+ty.dulst.gameID+"/setCards", {cards:_.uniq(i.concat(n))},function(i) {
        var o= {};
        $.each(i,function(e,t) {
          o[t.title]=t
        }),t.structure=o,t.buildResultsContainer();
        var r= {};
        $.each(n,function(n,i) {
          var s=e.collection.filter(function(e) {
            return-1!=e.get("cardReward").indexOf(i)&&"alpha"!=e.get("version")&&"beta"!=e.get("version")
          });
          s=_.map(s,function(e) {
return {title:
        e.get("title"),nid:
                    e.get("nid")
                   }
          }),s=ty.t("setLinks",s).html();
          var a=$('<div class="cardSlot open tooltip", data-tooltip="!first", data-tooltip-position="top",  data-tooltip-js="dulst_setCardsCount"><div class="tooltipContent"><p class="baseInfo">Insert '+i+' into this set. Once the card is inserted into the set, it will be unavailable for decks. This cannot be undone.</p><p class="count"></p>'+s+'</div><div class="text">'+i+"</div></div>");
          if(o[i]) {
            if(ty.dulst.sets.get(t.model.id)) {
              var l=o[i].nid;
              r[l]=r[l]||0,r[l]++;
              var c=_.filter(ty.dulst.sets.get(t.model.id).cards,function(e) {
                return e==l
              });
              c.length>=r[l]&&(a.addClass("filled").removeClass("open"),a.attr("data-tooltip","This card is in the set"))
            }
            delete o[i].url,ty.t("cardListItemTemplate",o[i]).appendTo(a),t.el.find(".inputs .cards").append(a)
          } else t.el.notify("Set has an improper card. Notify an admin.")
          }),t.el.addClass("loaded")
      })
    }
    t.el.addClass("open"),ty.dulst.sets.get(t.model.id)&&!ty.dulst.sets.get(t.model.id).endTime&&ty.dulst.sets.get(t.model.id).cards.length>=t.model.get("cards").length&&t.start(),ty.dulst.sets.get(t.model.id)&&ty.dulst.sets.get(t.model.id).endTime?t.runProgressbar(ty.dulst.sets.get(t.model.id)):t.runProgressbar(t.model.toJSON())
},close:function() {
    $(this.el).removeClass("open")
},unlock:function(e) {
    var t=this;
ty.post("dulst/"+ty.dulst.gameID+"/unlock", {set:t.model.id},function(n) {
      if(1==n.status) {
        var i= {};
i[t.model.id]= {time:0,cards:
                        []
                       },ty.dulst.sets.set(i),t.el.addClass("unlocked"),t.open()
      } else"insufficient coins"==n.status&&$(e.target).notify("Not enough coins")
      })
},insert:function(e) {
    var t=this,n=e.currentTarget;
t.el.hasClass("unlocked")?ty.post("dulst/"+ty.dulst.gameID+"/sets/insert", {card:$(e.currentTarget).find(".card").attr("data-cardID"),set:t.model.get("nid")},function(i) {
      if(i.status) {
        $(n).addClass("filled").removeClass("open").attr("data-tooltip","This card is in the set");
        var o= {};
        o[t.model.id]=i.set,ty.dulst.sets.set(o),ty.dulst.sets.get(t.model.get("nid")).cards.length>=t.model.get("cards").length&&t.start()
      } else $(e.currentTarget).notify("You do not have this card.")
      }):t.el.notify("Set is locked. First unlock the set.")
},start:function() {
    var e=this;
ty.post("dulst/"+ty.dulst.gameID+"/sets/start", {set:e.model.get("nid")},function(t) {
      t.status?(e.runProgressbar(t.set),e.el.addClass("active"),ty.dulst.setLibraryinMemory(t.library),e.buildResultsContainer()):"active limit"==t.message?e.el.notify("You've reached your active sets limit. This set will start after a you complete a current set."):"set not filled"==t.message&&(ty.dulst.setLibraryinMemory(t.library),e.el.notify("This set is not filled. Set removed from queue."))
    })
},buildResultsContainer:function() {
    var e,t=this,n=t.structure,i=t.model.get("cardReward"),o=n[i[0]];
    if(ty.dulst.sets.get(t.model.id)&&"undefined"!=typeof ty.dulst.sets.get(t.model.id).cardReward)o=n[i[ty.dulst.sets.get(t.model.id).cardReward]],o.url="/"+ty.dulst.subdomain+"/cards/"+o.nid+"/"+ty.url(o.title),e=ty.t("cardListItemTemplate",o),t.el.find(".resultContainer .result .cards").empty(),t.el.find(".resultContainer .result .cards").prepend(e);
    else if(i.length>1) {
      var r=_.map(i,function(e) {
        return" "+e
      });
      t.el.find(".resultContainer .result .cards").empty();
      for(var s=i.length-1; s>=0; s--)o=n[i[s]],o.url="/"+ty.dulst.subdomain+"/cards/"+o.nid+"/"+ty.url(o.title),e=ty.t("cardListItemTemplate",o),e.attr("data-tooltip","The output of this set will be a random one of "+r).addClass("tooltip"),t.el.find(".resultContainer .result .cards").prepend(e)
      } else o.url="/"+ty.dulst.subdomain+"/cards/"+o.nid+"/"+ty.url(o.title),e=ty.t("cardListItemTemplate",o),t.el.find(".resultContainer .result .cards").empty(),t.el.find(".resultContainer .result .cards").prepend(e);
    t.el.find(".finalCard").html(e.clone()),t.el.find(".finalTakeContainer .cardTitle").html(o.title)
},take:function() {
    var t=this;
analytics.track("Complete Set", {user:user,gameID:ty.dulst.gameID,module:"dulst"}),ty.post("dulst/"+ty.dulst.gameID+"/sets/take", {set:t.model.get("nid")},function(n) {
if(n.status&&(ty.media.playnow( {mp3:"http://cdn4.dulst.com/gameBackDrop/16ta0evc8_setcomplete2.mp3",ogg:"http://cdn4.dulst.com/gameBackDrop/16ta0gmp4_setcomplete.ogg"}),t.el.find(".cardSlot").removeClass("filled").addClass("open").attr("data-tooltip","!first"),t.el.removeClass("progressComplete"),t.runProgressbar(),t.buildResultsContainer(),ty.dulst.setLibraryinMemory(n.library),ty.dulst.sets.get("waiting")&&ty.dulst.sets.get("waiting").length>0)) {
        var i=ty.dulst.sets.get("waiting")[0],o=e.collection.get(i);
        t.el.notify("This set is complete. "+o.get("title")+" will now start.",function() {
          o.view.start()
        })
      }
    })
},complete:function() {
    this.el.addClass("progressComplete").removeClass("active")
},runProgressbar:function(e) {
    var t=this;
    if(e||(e=this.model.toJSON()),this.el.find(".progress").html(ty.t("setProgressBar",e)),!this.progressRunner&&e.endTime&&e.endTime>(new Date).getTime()) {
      var n=1e3;
      e.time<5e6&&(n=500),e.time<5e5&&(n=100),e.time<12e4&&(n=50),e.time<4e4&&(n=20),this.progressRunner=setInterval(function() {
        t.el.find(".progress").html(ty.t("setProgressBar",e)),e.endTime<(new Date).getTime()&&(clearInterval(t.progressRunner),delete t.progressRunner,t.complete())
      },n)
    }
},stopProgressbar:function() {
    this.progressRunner&&(clearInterval(this.progressRunner),delete this.progressRunner)
},render:function() {
    var e=this,t=e.model.toJSON();
return e.element("setRowTemplate"),ty.dulst.sets.get(t.nid)&&(e.el.addClass("unlocked"),ty.dulst.sets.get(t.nid).endTime&&ty.dulst.sets.get(t.nid).endTime<(new Date).getTime()?e.el.addClass("progressComplete"):ty.dulst.sets.get(t.nid).endTime&&ty.dulst.sets.get(t.nid).endTime>(new Date).getTime()&&e.el.addClass("active")),ty.dulst.level>=t.level?e.el.addClass("sufficient"):e.el.addClass("insufficient"),t.level||(t.level=0),0==$("#set-level-"+t.level).length&&ty.t("setLevelDivider", {level:t.level}).appendTo("#sets"),e.el.parent().attr("id")!="set-level-"+t.level&&e.el.appendTo("#set-level-"+t.level),e
  }
}),i=ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var t=this;
return e.setEditor&&e.setEditor.dialog("close"),e.setEditor=t.form("createSetTemplate").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:500,width:364,title:"Edit Set",close:function() {
      e.setEditor.dialog("destroy").remove(),delete e.setEditor
    }
                                                                                                       }),t
  }
                                             });
return e.SetListView=ty.View.extend( {initialize:function() {
    var t=this;
    e.collection.bind("add",t.addOne),e.collection.bind("reset",t.render),_.bindAll(this,"addOne","addAll","render"),ty.dulst.sets.off(),ty.dulst.sets.on("change",function() {
      t.el.find("span.unlocked").text(_.size(ty.dulst.sets.attributes)),t.el.find(".active span.active").text(_.size(_.filter(ty.dulst.sets.attributes,function(e) {
        return e.endTime
      })))
    }),ty.load("dulst/set",function() {
t.element("setsContainerJade", {setsCount:e.collection.releasedSets().length}),t.render(),t.addAll()
    })
},events:{"click #createSetButton":"addNew","click #copySet":"copySet","click #viewUnreleased":"viewUnreleased"},scrollTo:function(t) {
    var n=326;
t=t.replace("set-",""),$("#content").animate( {scrollTop:$("#set-"+t).position().top-$("#content").innerHeight()/2+n/2},500),e.collection.get(t).view.open()
},copySet:function() {
ty.t("dulst/copySetContainer").dialog( {title:"Copy",position:["center","center"],dialogClass:"dialogForm",closeOnEscape:!0,closeText:"x",autoOpen:!0,width:364,height:"auto",buttons:[{text:"Copy This Set",click:function() {
      var e=$(this);
      ty.post("dulst/"+e.data("originGame")+"/sets/copy/"+e.data("copiedSet"),function(t) {
        e.find(".fieldText").notify(t.title+" has been copied.")
      })
    }
}],close:function() {
      $(this).dialog("destroy").remove()
},open:function() {
      var e=$(this);
$(this).data("originGame",ty.dulst.gameID),$(this).find(".fieldText").autocomplete( {source:function(e,t) {
        var n=ty.dulst.setsInterface.collection.filter(function(t) {
          return-1!=t.get("title").indexOf(e.term)
        });
        t($.map(n,function(e) {
return {label:
        e.get("title"),nid:
                  e.get("nid")
                 }
        }))
},select:function(t,n) {
        e.data("copiedSet",n.item.nid)
},change:function(t,n) {
        e.data("copiedSet",n.item.nid)
      }
                                                                                          })
    }
                                           })
},render:function() {
    var t=this;
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .sets").addClass("active"),$("#content").html(t.el),e.rendered&&(e.collection.each(function(e) {
      e.view.delegateEvents()
    }),this.delegateEvents()),ty.dulst.staff&&(ty.realtime.join(ty.dulst.gameID,"ty.dulst.setsInterface"),ty.route.sectionClose("setsInterface",function() {
      ty.realtime.leave(ty.dulst.gameID)
    }))
},addNew:function() {
new i( {model:e.collection.create()})
},viewUnreleased:function(e) {
    $("#setsContainer").hasClass("viewUnreleased")?$(e.currentTarget).text("View Unreleased"):$(e.currentTarget).text("View Released"),$("#setsContainer").toggleClass("viewUnreleased")
},addOne:function(e) {
new n( {model:e})
},addAll:function() {
    e.collection.each(this.addOne),e.rendered=!0
  }
                                       }),this
},ty.dulst.SetsInterface.prototype.display=function(e) {
  var t=this;
return t.collection?(t.sets.render(),e&&e()):(t.collection=new t.SetList,t.collection.fetch( {success:function() {
t.sets=new t.SetListView( {collection:t.collection}),e&&e()
},error:function() {
    flashMessage("error")
  }
                                                                                               })),this
},ty.dulst.SetsInterface.prototype.showSet=function(e) {
  var t=this;
  return t.sets.scrollTo(e),this
},ty.dulst.SetsInterface.prototype.newNode=function(e) {
  this.collection.get(e.message.nid)||"set"!=e.message.ntype||this.collection.add(e.message)
},ty.dulst.SetsInterface.prototype.update=function(e) {
  this.collection.get(e.message.nid)&&"set"==e.message.ntype?this.collection.get(e.message.nid).set(e.message):"set"==e.message.ntype&&this.collection.add(e.message)
},ty.dulst.SetsInterface.prototype.formatTime=function(e) {
  function t(e) {
    return e>5?" and "+Math.round(e)+" minutes":""
  }
  function n(e) {
    return e>1?" and "+Math.round(e)+" hours":""
  }
         var e=parseFloat(e),i=60*e*1e3,o=i/1e3;
  o/=60;
  var r=o%60;
  o/=60;
  var s=o%24;
  o/=24;
  var a=o;
  return 1>e?"less than 1 minute":1==e?"1 minute":e>1&&2>e?"about 1 minute":2==e?"2 minutes":e>2&&60>e?"about "+Math.round(e)+" minutes":60==e?"1 hour":e>60&&120>e?"about 1 hour"+t(r):120==e?"2 hours":e>120&&1440>e?"about "+Math.round(s)+" hours":1440==e?"1 day":e>1440&&2880>e?"1 day"+n(s):2880==e?"2 days":e>2880?"about "+Math.round(a)+" days":void 0
},ty.dulst.setsInterface=new ty.dulst.SetsInterface,ty.tooltip.dulst_setCardsCount=function(e) {
  var t=e.find("a.card").attr("data-cardID");
  if(ty.dulst.library.get("cards")) {
    var n;
    n=1==ty.dulst.library.get("cards")[t]?"You have 1 copy of this card.":ty.dulst.library.get("cards")[t]>1?"You have "+ty.dulst.library.get("cards")[t]+" copies of this card.":"You don't have this card.",e.find(".count").text(n)
  }
},ty.dulst.Tournament=function() {
  var e=this;
  this.gameID=ty.dulst.gameID,_.bindAll(this);
var t=Backbone.Model.extend( {idAttribute:"nid",defaults:{title:"new tournament",time:10,price:2e3,ntype:"tournament",cards:[],rewards:[]},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/tournaments/"+this.id
  }
                               });
this.TournamentList=Backbone.Collection.extend( {model:t,comparator:function(e) {
    return e.get("title")
},url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/tournaments"
  }
                                                  });
var n=ty.View.extend( {initialize:function() {
    _.bindAll(this,"render");
    var e=this;
    this.model.bind("change",function() {
      1==_.size(e.model.changedAttributes())&&e.model.changedAttributes().ut||e.render()
    }),this.model.view=this,this.render()
},events:{"click .edit":"edit","click .join":"join"},edit:function() {
    var e=this;
new i( {model:e.model})
},join:function() {
    this.el.addClass("progressComplete").removeClass("active")
},render:function() {{
      var e=this;
      e.model.toJSON()
    }
    return e.element("tournamentItem"),e.el.appendTo("#tournamentList"),e
  }
}),i=ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var t=this;
return e.tournamentEditor&&e.tournamentEditor.dialog("close"),e.tournamentEditor=t.form("createTournament").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,height:500,width:364,title:"Edit Tournament",close:function() {
      e.tournamentEditor.dialog("destroy").remove(),delete e.tournamentEditor
    }
                                                                                                                           }),t
  }
                                             });
return e.TournamentListView=ty.View.extend( {initialize:function() {
    var t=this;
    e.collection.bind("add",t.addOne),e.collection.bind("retournament",t.render),_.bindAll(this,"addOne","addAll","render"),ty.load("dulst/tournament",function() {
t.element("tournamentContainer", {tournamentsCount:e.collection.length}),t.render(),t.addAll()
    })
},events:{"click #createTournament":"addNew"},render:function() {
    var t=this;
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .tournaments").addClass("active"),$("#content").html(t.el),e.rendered&&(e.collection.each(function(e) {
      e.view.delegateEvents()
    }),this.delegateEvents()),ty.dulst.staff&&(ty.realtime.join(ty.dulst.gameID,"ty.dulst.tournament"),ty.route.sectionClose("tournament",function() {
      ty.realtime.leave(ty.dulst.gameID)
    }))
},addNew:function() {
new i( {model:e.collection.create()})
},addOne:function(e) {
new n( {model:e})
},addAll:function() {
    e.collection.each(this.addOne),e.rendered=!0
  }
                                              }),this
},ty.dulst.Tournament.prototype.display=function() {
  var e=this;
return e.collection=new e.TournamentList,e.collection.fetch( {success:function() {
e.tournaments=new e.TournamentListView( {collection:e.collection})
},error:function() {
    flashMessage("error")
  }
                                                               }),this
},ty.dulst.Tournament.prototype.newNode=function(e) {
  this.collection.get(e.message.nid)||"tournament"!=e.message.ntype||this.collection.add(e.message)
},ty.dulst.Tournament.prototype.update=function(e) {
  this.collection.get(e.message.nid)&&"tournament"==e.message.ntype?this.collection.get(e.message.nid).set(e.message):"tournament"==e.message.ntype&&this.collection.add(e.message)
},ty.dulst.tournament=new ty.dulst.Tournament,function(e) {
var t= {init:
  function(t,n) {
    return this.each(function() {{
        var i=e(this);
e("<div/>", {"class":"field dulst-gameResults"})
      }
      if(ty.dulst.updateLibrary=function(e) {
      t==e.gameID&&ty.dulst.setLibraryinMemory(e.library)
      },user&&"anon"!=user)ty.get("dulst/"+t+"/cardlibrary/"+user,function(e) {
        if(e&&"failed"!=e.status) {
          var t=e.rank;
          ty.dulst.setLibraryinMemory(e),e.rank=t?ty.dulst.game.get("ranks")[t-1]:ty.dulst.game.get("ranks")[0],e.ranks=ty.dulst.game.get("ranks"),e.name=user,e.levelingProgress=parseInt((e.points-e.previousLevel)/(e.nlevel-e.previousLevel)*100),e.levelingProgress=e.levelingProgress+"%",ty.user.current.get(function(t) {
            t&&t.fieldAvatar&&(e.fieldAvatar=t.fieldAvatar),i.append(ty.t("userStatsContainer",e))
          }),n&&n()
        } else {
var e= {name:
        user,rank:"Guest"
        ,levelingProgress:"3%"
        ,points:"0"
        ,level:1,coins:"0"
                  ,nlevel:200
                 };
          i.append(ty.t("userStatsContainer",e)),n&&n()
        }
      });
      else {
var o= {name:"anon"
        ,rank:"Guest"
        ,levelingProgress:"3%"
        ,points:"0"
        ,level:1,coins:"0"
                ,nlevel:200
               };
        i.append(ty.t("userStatsContainer",o)),n&&n()
      }
    })
  }
         };
  e.fn.dulstGameResults=function(e) {
    return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)
  }
}(jQuery),ty.dulst.WikiInterface=function() {
  var e=this;
return _.bindAll(this),e.WikiEditView=ty.View.extend( {initialize:function() {
    this.render()
},render:function() {
    var e=this;
    return ty.load("node/node",function() {
e.editor=e.form("dulst_wikiNodeEdit").el.dialog( {dialogClass:"dialogForm",closeOnEscape:!0,autoOpen:!0,width:364,title:"Edit "+e.model.get("title").substring(0,38),close:function() {
        e.editor.dialog("destroy").remove()
      }
                                                       })
    }),e
  }
}),e.NodeModel=Backbone.Model.extend( {idAttribute:"title",url:function() {
    return"/api/dulst/"+ty.dulst.gameID+"/wiki/"+this.id
  }
}),e.WikiPageView=ty.View.extend( {initialize:function() {
    _.bindAll(this),this.model.bind("change",this.render),this.render(),ty.realtime.join(this.model.get("nid"),"ty.dulst.wikiInterface")
},events:{},change:function() {
    var e=this;
e.model.changedAttributes().title&&e.model.set( {title:e.model.previousAttributes().title,newTitle:e.model.get("title")}).save( {}, {success:function(e) {
      ty.redirect(ty.dulst.subdomain+"/wiki/"+ty.url(e.get("newTitle")))
},error:function() {
      flashMessage("error")
    }
                                                                                                                                        })
},render:function() {
    var t=this;
    ty.load("dulst/wiki",function() {
      e.wikiApp.el.find("#wikiPageContent").html(t.element("dulst_wikiPageTemplate"))
    })
  }
}),e.WikiApp=ty.View.extend( {initialize:function() {
    var t=this;
    $("#dulstMenu li").removeClass("active"),$("#dulstMenu .wiki").addClass("active"),ty.route.sectionClose("wiki",function() {
      ty.realtime.leave(e.wikiSettings.currentPage.get("nid")),delete e.wikiSettings
    }),t.render(),ty.get("dulst/"+ty.dulst.gameID+"/wiki",function(e) {
      t.menu(e)
    })
},events:{"click #createNewPage":"createNewPage"},menu:function(e) {
    var t=this;
    e&&(e=_.sortBy(e,function(e) {
      return e.wikiMenu
}),ty.t("dulstWikiMenu", {menu:e}).prependTo(t.el.children("section.wiki")))
},createNewPage:function() {
ty.dialog.prompt("Name of the New Page:", {title:"Title",value:"new wiki page"},function(e) {
ty.post("dulst/"+ty.dulst.gameID+"/wiki/"+ty.url(e), {title:e},function() {
        ty.redirect(ty.dulst.subdomain+"/wiki/"+ty.url(e))
      })
    })
},render:function() {
    var e=this;
    $("#content").html(e.element("wikiContainerJade"))
  }
                                                                                                                                                             }),this
},ty.dulst.WikiInterface.prototype.init=function(e) {
  var t=this,n=function() {
    t.wikiSettings= {},t.wikiApp=new t.WikiApp,e()
  };
  _.isUndefined(t.wikiSettings)?ty.load("dulst/cardsInterface",function() {
    n()
  }):e()
  },ty.dulst.WikiInterface.prototype.edit=function() {
  var e=this;
new e.WikiEditView( {model:e.wikiSettings.currentPage})
},ty.dulst.WikiInterface.prototype.update=function(e) {
  this.wikiSettings.currentPage.set(e.message)
},ty.dulst.WikiInterface.prototype.display=function() {
  ty.redirect(ty.dulst.subdomain+"/wiki/Wiki-Main-Page")
},ty.dulst.WikiInterface.prototype.page=function(e) {
  var t=this;
  this.init(function() {
t.wikiSettings.currentPage&&ty.realtime.leave(t.wikiSettings.currentPage.get("nid")),t.wikiSettings.currentPage=new t.NodeModel( {title:e}),t.wikiSettings.currentPage.fetch( {success:function() {
new t.WikiPageView( {model:t.wikiSettings.currentPage})
},error:function() {
      flashMessage("error")
    }
                                                                                                                                                                                  })
  })
},ty.dulst.wikiInterface=new ty.dulst.WikiInterface,ty.dulst.wishlist=function() {
  var e=function() {
    if(ty.dulst.wishlist.list) {
      if($("#tab-wishlist").empty(),$.each(ty.dulst.wishlist.list,function(e,n) {
      $("#tab-wishlist").append(t.clone().html($("#cardID-"+n).find("img").clone()))
      }),ty.dulst.wishlist.list.length<5)for(var e=5-ty.dulst.wishlist.list.length-1; e>=0; e--)$("#tab-wishlist").append(t.clone())
      } else {
      ty.dulst.wishlist.list=[];
      for(var e=4; e>=0; e--)$("#tab-wishlist").append(t.clone())
      }
  };
  if(this.container)this.container.dialog("open");
  else {
    var t=$('<div class="cardSlot open">Click here to add a new card</div>');
this.container=ty.t("dulst/wishlist",!1).dialog( {dialogClass:"wishlistContainer",title:"Cards Wishlist",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!0,width:450,resizable:!0,height:550,create:function() {
      $("#wishlist").tabs(),$("#wishlist").delegate(".cardSlot.open","click",function() {
        var e,t=$(this);
        t.notify("Click on a card in the cards list to add it to your wishlist"),$("#card-list-container").undelegate(".card","click"),$("#card-list-container").delegate(".card","click",function() {
$("#card-list-container").undelegate(".card","click"),e=$("#tab-wishlist .cardSlot").index(t),ty.dulst.wishlist.list[e]=$(this).attr("data-cardid"),ty.post("dulst/"+ty.dulst.gameID+"/wishlist", {list:ty.dulst.wishlist.list}),t.html($(this).find("img").clone())
        })
      })
},open:function() {
      if("cardsInterface"!=ty.route.currentSection[0]) {
        $(ty.dulst.cardsInterface).unbind("complete").bind("complete",function() {
          e()
        });
        var t="/cards";
        ty.redirect(t)
      } else e()
},close:function() {
      $("#card-list-container").undelegate(".card","click")
},buttons:[{text:"Close",click:function() {
      $(this).dialog("close")
    }
               }]
                                                     })
  }
},ty.dulst.sets=new ty.Model,ty.dulst.regions=new ty.Model,ty.dulst.library=new ty.Model,ty.dulst.setLibraryinMemory=function(e) {
  ty.dulst.library.set(e),ty.dulst.wishlist.list=e.wishlist,ty.dulst.level=e.level,e.sets=e.sets|| {},ty.dulst.sets.set(e.sets),ty.dulst.librarynid=e.nid
},function(e) {
var t= {init:
  function(t,n) {
    return this.each(function() {
      var i=e(this);
      if(i.is("textarea")&&!i.data("nodePostBox")) {
        var o=i.closest(".postBox");
        i.data("nodePostBox",!0),o.find(".submit").click(function() {
          if(!o.data("submitting")) {
            var e=o.find(".fieldText");
            e.trigger("submit");
            var t=e.val(),n=t,r=o.data("fieldReference");
r||(r=i.attr("data-fieldReference")),n&&""!=n?(n=_.str.truncate(n,45),o.data("submitting",!0),ty.node.create( {fieldBody:t,fieldReference:r,title:n},function() {
o.data("submitting",!1),o.find(".fieldText").val("").trigger("blur"),analytics.track("Post", {user:user,module:"node"})
            })):i.notify("Please type something before submitting.")
            }
        })
      } else i.data("nodePostBox")?(i.children(".postBox").data("fieldReference",t),n&&n(i)):ty.load("node/postForm",function() {
        var o=ty.t("node/postBox");
        i.data("nodePostBox",!0).append(o),ty.user.current.get(function(t) {
          e(".authorPane",o).replaceWith(ty.t("postUserBox",t))
        }),o.data("fieldReference",t),n&&n(i)
      });
      return i
    })
},close:
function(){},render:
  function() {}
         };
  e.fn.postBox=function(e) {
    return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)
  }
}(jQuery),ty.page= {render:function() {}},ty.path= {},function() {
  function e(e) {
    delete ty.dulst.subdomain,ty.load("dulst_site/staticPages",function() {
      ty.load("page/page",function() {
0==$("#staticSideBar").length&&$("#left").html(ty.t("dulstStaticSideBar", {})),e&&$("#content").html(ty.t("pageContainer", {content:ty.t(e,{}).html()}))
      })
    })
  }
  ty.route.bind("dulstCentral",function() {
    e()
  }),ty.path.about=function() {e("dulstAbout")},ty.path["about/contact"]=function() {e("dulstContact")},ty.path["about/terms"]=function() {e("dulstTerms")},ty.path["about/privacy"]=function() {e("dulstPrivacy")},ty.path["about/careers"]=function() {e("dulstCareers")},ty.path.wiki=function() {ty.dulst.gameID=102394,ty.dulst.game=new ty.node.Model({wikiReference:114924}),e(),ty.redirect("wiki/Wiki-Main-Page")},ty.path["wiki/:pageTitle"]=function(t) {
    ty.dulst.gameID=102394,ty.dulst.game=new ty.node.Model( {wikiReference:114924}),e(),ty.dulst.wikiInterface.page(t[0])
  }
}(); var wysihtml5= {version:"0.3.0",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"﻿",EMPTY_FUNCTION:function() {},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46}; window.rangy=function() {
  function e(e,t) {
    var n=typeof e[t];
    return n==u||!(n!=d||!e[t])||"unknown"==n
  }
  function t(e,t) {
    return!(typeof e[t]!=d||!e[t])
  }
  function n(e,t) {
    return typeof e[t]!=h
  }
  function i(e) {
    return function(t,n) {
      for(var i=n.length; i--;)if(!e(t,n[i]))return!1;
      return!0
    }
  }
  function o(e) {
    return e&&y(e,g)&&b(e,m)
  }
  function r(e) {
    window.alert("Rangy not supported in your browser. Reason: "+e),w.initialized=!0,w.supported=!1
  }
  function s(e) {
    var t="Rangy warning: "+e;
    w.config.alertOnWarn?window.alert(t):typeof window.console!=h&&typeof window.console.log!=h&&window.console.log(t)
  }
  function a() {
    if(!w.initialized) {
      var n,i=!1,s=!1;
      e(document,"createRange")&&(n=document.createRange(),y(n,p)&&b(n,f)&&(i=!0),n.detach());
      var a=t(document,"body")?document.body:document.getElementsByTagName("body")[0];
a&&e(a,"createTextRange")&&(n=a.createTextRange(),o(n)&&(s=!0)),i||s||r("Neither Range nor TextRange are implemented"),w.initialized=!0,w.features= {implementsDomRange:
    i,implementsTextRange:
          s
                                                                                                                                                          };
      for(var l=x.concat(C),c=0,d=l.length; d>c; ++c)try {
          l[c](w)
        } catch(u) {
          t(window,"console")&&e(window.console,"log")&&window.console.log("Init listener threw an exception. Continuing.",u)
        }
    }
  }
  function l(e) {
    e=e||window,a();
    for(var t=0,n=_.length; n>t; ++t)_[t](e)
    }
  function c(e) {
    this.name=e,this.initialized=!1,this.supported=!1
  }
                             var d="object",u="function",h="undefined",f=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer","START_TO_START","START_TO_END","END_TO_START","END_TO_END"],p=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],m=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],g=["collapse","compareEndPoints","duplicate","getBookmark","moveToBookmark","moveToElementText","parentElement","pasteHTML","select","setEndPoint","getBoundingClientRect"],y=i(e),v=i(t),b=i(n),w= {version:"1.2.2"
                                   ,initialized:
                                   !1,supported:
                                   !0,util:
  {
isHostMethod:
e,isHostObject:
t,isHostProperty:
n,areHostMethods:
y,areHostObjects:
v,areHostProperties:
b,isTextRange:
    o
},features:
  {},modules:
  {},config:
  {
alertOnWarn:
!1,preferTextRange:
    !1
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };
  w.fail=r,w.warn=s, {} .hasOwnProperty?w.util.extend=function(e,t) {
    for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
}:
  r("hasOwnProperty not supported");
  var C=[],x=[];
  w.init=a,w.addInitListener=function(e) {
    w.initialized?e(w):C.push(e)
  };
  var _=[];
  w.addCreateMissingNativeApiListener=function(e) {_.push(e)},w.createMissingNativeApi=l,c.prototype.fail=function(e) {throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+e)},c.prototype.warn=function(e) {w.warn("Module "+this.name+": "+e)},c.prototype.createError=function(e) {return new Error("Error in Rangy "+this.name+" module: "+e)},w.createModule=function(e,t) {
    var n=new c(e);
    w.modules[e]=n,x.push(function(e) {
      t(e,n),n.initialized=!0,n.supported=!0
    })
  },w.requireModules=function(e) {
    for(var t,n,i=0,o=e.length; o>i; ++i) {
      if(n=e[i],t=w.modules[n],!(t&&t instanceof c))throw new Error("Module '"+n+"' not found");
      if(!t.supported)throw new Error("Module '"+n+"' not supported")
      }
  };
  var k=!1,T=function() {
    k||(k=!0,w.initialized||a())
  };
  return typeof window==h?(r("No window found"),void 0):typeof document==h?(r("No document found"),void 0):(e(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",T,!1),e(window,"addEventListener")?window.addEventListener("load",T,!1):e(window,"attachEvent")?window.attachEvent("onload",T):r("Window does not have required addEventListener or attachEvent method"),w)
}(),rangy.createModule("DomUtil",function(e,t) {
  function n(e) {
    var t;
    return typeof e.namespaceURI==T||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t
  }
  function i(e) {
    var t=e.parentNode;
    return 1==t.nodeType?t:null
  }
  function o(e) {
    for(var t=0; e=e.previousSibling;)t++;
    return t
  }
  function r(e) {
    var t;
    return c(e)?e.length:(t=e.childNodes)?t.length:0
  }
  function s(e,t) {
    var n,i=[];
    for(n=e; n; n=n.parentNode)i.push(n);
    for(n=t; n; n=n.parentNode)if(N(i,n))return n;
    return null
  }
  function a(e,t,n) {
    for(var i=n?t:t.parentNode; i;) {
      if(i===e)return!0;
      i=i.parentNode
    }
      return!1
  }
  function l(e,t,n) {
    for(var i,o=n?e:e.parentNode; o;) {
      if(i=o.parentNode,i===t)return o;
      o=i
    }
      return null
  }
  function c(e) {
    var t=e.nodeType;
    return 3==t||4==t||8==t
  }
  function d(e,t) {
    var n=t.nextSibling,i=t.parentNode;
    return n?i.insertBefore(e,n):i.appendChild(e),e
  }
  function u(e,t) {
    var n=e.cloneNode(!1);
    return n.deleteData(0,t),e.deleteData(t,e.length-t),d(n,e),n
  }
  function h(e) {
    if(9==e.nodeType)return e;
    if(typeof e.ownerDocument!=T)return e.ownerDocument;
    if(typeof e.document!=T)return e.document;
    if(e.parentNode)return h(e.parentNode);
    throw new Error("getDocument: no document found for node")
  }
  function f(e) {
    var t=h(e);
    if(typeof t.defaultView!=T)return t.defaultView;
    if(typeof t.parentWindow!=T)return t.parentWindow;
    throw new Error("Cannot get a window object for node")
  }
  function p(e) {
    if(typeof e.contentDocument!=T)return e.contentDocument;
    if(typeof e.contentWindow!=T)return e.contentWindow.document;
    throw new Error("getIframeWindow: No Document object found for iframe element")
  }
  function m(e) {
    if(typeof e.contentWindow!=T)return e.contentWindow;
    if(typeof e.contentDocument!=T)return e.contentDocument.defaultView;
    throw new Error("getIframeWindow: No Window object found for iframe element")
  }
  function g(e) {
    return S.isHostObject(e,"body")?e.body:e.getElementsByTagName("body")[0]
  }
  function y(e) {
    for(var t; t=e.parentNode;)e=t;
    return e
  }
  function v(e,t,n,i) {
    var r,a,c,d,u;
    if(e==n)return t===i?0:i>t?-1:1;
    if(r=l(n,e,!0))return t<=o(r)?-1:1;
    if(r=l(e,n,!0))return o(r)<i?-1:1;
    if(a=s(e,n),c=e===a?a:l(e,a,!0),d=n===a?a:l(n,a,!0),c===d)throw new Error("comparePoints got to case 4 and childA and childB are the same!");
    for(u=a.firstChild; u;) {
      if(u===c)return-1;
      if(u===d)return 1;
      u=u.nextSibling
    }
      throw new Error("Should not be here!")
  }
  function b(e) {
    for(var t,n=h(e).createDocumentFragment(); t=e.firstChild;)n.appendChild(t);
    return n
  }
  function w(e) {
    if(!e)return"[No node]";
    if(c(e))return'"'+e.data+'"';
    if(1==e.nodeType) {
      var t=e.id?' id="'+e.id+'"':"";
      return"<"+e.nodeName+t+">["+e.childNodes.length+"]"
    }
          return e.nodeName
  }
  function C(e) {
    this.root=e,this._next=e
  }
  function x(e) {
    return new C(e)
  }
  function _(e,t) {
    this.node=e,this.offset=t
  }
  function k(e) {
    this.code=this[e],this.codeName=e,this.message="DOMException: "+this.codeName
  }
                                  var T="undefined",S=e.util;
  S.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||t.fail("document missing a Node creation method"),S.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method");
  var E=document.createElement("div");
  S.areHostMethods(E,["insertBefore","appendChild","cloneNode"]||!S.areHostObjects(E,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element implementation"),S.isHostProperty(E,"innerHTML")||t.fail("Element is missing innerHTML property");
  var I=document.createTextNode("test");
  S.areHostMethods(I,["splitText","deleteData","insertData","appendData","cloneNode"]||!S.areHostObjects(E,["previousSibling","nextSibling","childNodes","parentNode"])||!S.areHostProperties(I,["data"]))||t.fail("Incomplete Text Node implementation");
  var N=function(e,t) {
    for(var n=e.length; n--;)if(e[n]===t)return!0;
    return!1
  };
C.prototype= {_current:
              null,hasNext:
function(){return!!this._next},next:
function(){var e,t,n=this._current=this._next; if(this._current)if(e=n.firstChild)this._next=e; else{for(t=null; n!==this.root&&!(t=n.nextSibling);)n=n.parentNode; this._next=t} return this._current},detach:
  function() {
    this._current=this._next=this.root=null
  }
             },_.prototype= {equals:
function(e){return this.node===e.node&this.offset==e.offset},inspect:
  function() {
    return"[DomPosition("+w(this.node)+":"+this.offset+")]"
  }
},k.prototype= {INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},k.prototype.toString=function() {return this.message},e.dom= {arrayContains:
    N,isHtmlNamespace:
    n,parentElement:
    i,getNodeIndex:
    o,getNodeLength:
    r,getCommonAncestor:
    s,isAncestorOf:
    a,getClosestAncestorIn:
    l,isCharacterDataNode:
    c,insertAfter:
    d,splitDataNode:
    u,getDocument:
    h,getWindow:
    f,getIframeWindow:
    m,getIframeDocument:
    p,getBody:
    g,getRootContainer:
    y,comparePoints:
    v,inspectNode:
    w,fragmentFromNodeChildren:
    b,createIterator:
    x,DomPosition:
      _
                                                                                                                                                                                                                                     },e.DOMException=k
}),rangy.createModule("DomRange",function(e) {
  function t(e,t) {
    return 3!=e.nodeType&&(L.isAncestorOf(e,t.startContainer,!0)||L.isAncestorOf(e,t.endContainer,!0))
  }
  function n(e) {
    return L.getDocument(e.startContainer)
  }
  function i(e,t,n) {
    var i=e._listeners[t];
    if(i)for(var o=0,r=i.length; r>o; ++o)i[o].call(e, {target:e,args:n})
      }
  function o(e) {
    return new R(e.parentNode,L.getNodeIndex(e))
  }
  function r(e) {
    return new R(e.parentNode,L.getNodeIndex(e)+1)
  }
  function s(e,t,n) {
    var i=11==e.nodeType?e.firstChild:e;
    return L.isCharacterDataNode(t)?n==t.length?L.insertAfter(e,t):t.parentNode.insertBefore(e,0==n?t:L.splitDataNode(t,n)):n>=t.childNodes.length?t.appendChild(e):t.insertBefore(e,t.childNodes[n]),i
    }
  function a(e) {
    for(var t,i,o,r=n(e.range).createDocumentFragment(); i=e.next();) {
      if(t=e.isPartiallySelectedSubtree(),i=i.cloneNode(!t),t&&(o=e.getSubtreeIterator(),i.appendChild(a(o)),o.detach(!0)),10==i.nodeType)throw new j("HIERARCHY_REQUEST_ERR");
      r.appendChild(i)
    }
    return r
  }
  function l(e,t,n) {
    var i,o;
n=n|| {stop:
           !1
          };
    for(var r,s; r=e.next();)if(e.isPartiallySelectedSubtree()) {
        if(t(r)===!1)return n.stop=!0,void 0;
        if(s=e.getSubtreeIterator(),l(s,t,n),s.detach(!0),n.stop)return
        } else for(i=L.createIterator(r); o=i.next();)if(t(o)===!1)return n.stop=!0,void 0
          }
  function c(e) {
    for(var t; e.next();)e.isPartiallySelectedSubtree()?(t=e.getSubtreeIterator(),c(t),t.detach(!0)):e.remove()
    }
  function d(e) {
    for(var t,i,o=n(e.range).createDocumentFragment(); t=e.next();) {
      if(e.isPartiallySelectedSubtree()?(t=t.cloneNode(!1),i=e.getSubtreeIterator(),t.appendChild(d(i)),i.detach(!0)):e.remove(),10==t.nodeType)throw new j("HIERARCHY_REQUEST_ERR");
      o.appendChild(t)
    }
    return o
  }
  function u(e,t,n) {
    var i,o=!(!t||!t.length),r=!!n;
    o&&(i=new RegExp("^("+t.join("|")+")$"));
    var s=[];
    return l(new f(e,!1),function(e) {
      o&&!i.test(e.nodeType)||r&&!n(e)||s.push(e)
    }),s
  }
  function h(e) {
    var t="undefined"==typeof e.getName?"Range":e.getName();
    return"["+t+"("+L.inspectNode(e.startContainer)+":"+e.startOffset+", "+L.inspectNode(e.endContainer)+":"+e.endOffset+")]"
  }
  function f(e,t) {
    if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.collapsed) {
      this.sc=e.startContainer,this.so=e.startOffset,this.ec=e.endContainer,this.eo=e.endOffset;
      var n=e.commonAncestorContainer;
      this.sc===this.ec&&L.isCharacterDataNode(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==n||L.isCharacterDataNode(this.sc)?L.getClosestAncestorIn(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||L.isCharacterDataNode(this.ec)?L.getClosestAncestorIn(this.ec,n,!0):this.ec.childNodes[this.eo-1])
    }
  }
  function p(e) {
    this.code=this[e],this.codeName=e,this.message="RangeException: "+this.codeName
  }
  function m(e,t,n) {
    this.nodes=u(e,t,n),this._next=this.nodes[0],this._position=0
  }
  function g(e) {
    return function(t,n) {
      for(var i,o=n?t:t.parentNode; o;) {
        if(i=o.nodeType,L.arrayContains(e,i))return o;
        o=o.parentNode
      }
        return null
    }
  }
  function y(e,t) {
    if(G(e,t))throw new p("INVALID_NODE_TYPE_ERR")
    }
  function v(e) {
    if(!e.startContainer)throw new j("INVALID_STATE_ERR")
    }
  function b(e,t) {
    if(!L.arrayContains(t,e.nodeType))throw new p("INVALID_NODE_TYPE_ERR")
    }
  function w(e,t) {
    if(0>t||t>(L.isCharacterDataNode(e)?e.length:e.childNodes.length))throw new j("INDEX_SIZE_ERR")
    }
  function C(e,t) {
    if(V(e,!0)!==V(t,!0))throw new j("WRONG_DOCUMENT_ERR")
    }
  function x(e) {
    if(U(e,!0))throw new j("NO_MODIFICATION_ALLOWED_ERR")
    }
  function _(e,t) {
    if(!e)throw new j(t)
    }
  function k(e) {
    return!L.arrayContains(H,e.nodeType)&&!V(e,!0)
  }
  function T(e,t) {
    return t<=(L.isCharacterDataNode(e)?e.length:e.childNodes.length)
  }
  function S(e) {
    if(v(e),k(e.startContainer)||k(e.endContainer)||!T(e.startContainer,e.startOffset)||!T(e.endContainer,e.endOffset))throw new Error("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")
    }
  function E() {} function I(e) {
    e.START_TO_START=Z,e.START_TO_END=et,e.END_TO_END=tt,e.END_TO_START=nt,e.NODE_BEFORE=it,e.NODE_AFTER=ot,e.NODE_BEFORE_AND_AFTER=rt,e.NODE_INSIDE=st
  }
  function N(e) {
    I(e),I(e.prototype)
  }
  function D(e,t) {
    return function() {
      S(this);
      var n,i,o=this.startContainer,s=this.startOffset,a=this.commonAncestorContainer,c=new f(this,!0);
      o!==a&&(n=L.getClosestAncestorIn(o,a,!0),i=r(n),o=i.node,s=i.offset),l(c,x),c.reset();
      var d=e(c);
      return c.detach(),t(this,o,s,o,s),d
    }
  }
  function $(n,i,s) {
    function a(e,t) {
      return function(n) {
        v(this),b(n,B),b(W(n),H);
        var i=(e?o:r)(n);
        (t?l:u)(this,i.node,i.offset)
      }
    }
    function l(e,t,n) {
      var o=e.endContainer,r=e.endOffset;
      (t!==e.startContainer||n!==e.startOffset)&&((W(t)!=W(o)||1==L.comparePoints(t,n,o,r))&&(o=t,r=n),i(e,t,n,o,r))
    }
    function u(e,t,n) {
      var o=e.startContainer,r=e.startOffset;
      (t!==e.endContainer||n!==e.endOffset)&&((W(t)!=W(o)||-1==L.comparePoints(t,n,o,r))&&(o=t,r=n),i(e,o,r,t,n))
    }
    function h(e,t,n) {
      (t!==e.startContainer||n!==e.startOffset||t!==e.endContainer||n!==e.endOffset)&&i(e,t,n,t,n)
    }
n.prototype=new E,e.util.extend(n.prototype, {setStart:function(e,t) {
      v(this),y(e,!0),w(e,t),l(this,e,t)
},setEnd:function(e,t) {
      v(this),y(e,!0),w(e,t),u(this,e,t)
},setStartBefore:a(!0,!0),setStartAfter:a(!1,!0),setEndBefore:a(!0,!1),setEndAfter:a(!1,!1),collapse:function(e) {
      S(this),e?i(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):i(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)
},selectNodeContents:function(e) {
      v(this),y(e,!0),i(this,e,0,e,L.getNodeLength(e))
},selectNode:function(e) {
      v(this),y(e,!1),b(e,B);
      var t=o(e),n=r(e);
      i(this,t.node,t.offset,n.node,n.offset)
},extractContents:D(d,i),deleteContents:D(c,i),canSurroundContents:function() {
      S(this),x(this.startContainer),x(this.endContainer);
      var e=new f(this,!0),n=e._first&&t(e._first,this)||e._last&&t(e._last,this);
      return e.detach(),!n
},detach:function() {
      s(this)
},splitBoundaries:function() {
      S(this);
      var e=this.startContainer,t=this.startOffset,n=this.endContainer,o=this.endOffset,r=e===n;
      L.isCharacterDataNode(n)&&o>0&&o<n.length&&L.splitDataNode(n,o),L.isCharacterDataNode(e)&&t>0&&t<e.length&&(e=L.splitDataNode(e,t),r?(o-=t,n=e):n==e.parentNode&&o>=L.getNodeIndex(e)&&o++,t=0),i(this,e,t,n,o)
},normalizeBoundaries:function() {
      S(this);
      var e=this.startContainer,t=this.startOffset,n=this.endContainer,o=this.endOffset,r=function(e) {var t=e.nextSibling; t&&t.nodeType==e.nodeType&&(n=e,o=e.length,e.appendData(t.data),t.parentNode.removeChild(t))},s=function(i) {
        var r=i.previousSibling;
        if(r&&r.nodeType==i.nodeType) {
          e=i;
          var s=i.length;
          if(t=r.length,i.insertData(0,r.data),r.parentNode.removeChild(r),e==n)o+=t,n=e;
          else if(n==i.parentNode) {
            var a=L.getNodeIndex(i);
            o==a?(n=i,o=s):o>a&&o--
          }
        }
      },a=!0;
      if(L.isCharacterDataNode(n))n.length==o&&r(n);
      else {
        if(o>0) {
          var l=n.childNodes[o-1];
          l&&L.isCharacterDataNode(l)&&r(l)
        }
        a=!this.collapsed
      }
      if(a) {
        if(L.isCharacterDataNode(e))0==t&&s(e);
        else if(t<e.childNodes.length) {
          var c=e.childNodes[t];
          c&&L.isCharacterDataNode(c)&&s(c)
        }
      } else e=n,t=o;
      i(this,e,t,n,o)
},collapseToPoint:function(e,t) {
      v(this),y(e,!0),w(e,t),h(this,e,t)
    }
                                                 }),N(n)
  }
  function P(e) {
    e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:L.getCommonAncestor(e.startContainer,e.endContainer)
  }
  function A(e,t,n,o,r) {
    var s=e.startContainer!==t||e.startOffset!==n,a=e.endContainer!==o||e.endOffset!==r;
e.startContainer=t,e.startOffset=n,e.endContainer=o,e.endOffset=r,P(e),i(e,"boundarychange", {startMoved:s,endMoved:a})
  }
  function O(e) {
    v(e),e.startContainer=e.startOffset=e.endContainer=e.endOffset=null,e.collapsed=e.commonAncestorContainer=null,i(e,"detach",null),e._listeners=null
  }
  function M(e) {
this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this._listeners= {boundarychange:
                                       [],detach:
                                           []
                                                                                                   },P(this)
  }
                                         e.requireModules(["DomUtil"]);
  var L=e.dom,R=L.DomPosition,j=e.DOMException;
f.prototype= {_current:
              null,_next:
              null,_first:
              null,_last:
              null,isSingleCharacterDataNode:
              !1,reset:
function(){this._current=null,this._next=this._first},hasNext:
function(){return!!this._next},next:
function(){var e=this._current=this._next; return e&&(this._next=e!==this._last?e.nextSibling:null,L.isCharacterDataNode(e)&&this.clonePartiallySelectedTextNodes&&(e===this.ec&&(e=e.cloneNode(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:
function(){var e,t,n=this._current; !L.isCharacterDataNode(n)||n!==this.sc&&n!==this.ec?n.parentNode&&n.parentNode.removeChild(n):(e=n===this.sc?this.so:0,t=n===this.ec?this.eo:n.length,e!=t&&n.deleteData(e,t-e))},isPartiallySelectedSubtree:
function(){var e=this._current; return t(e,this.range)},getSubtreeIterator:
function(){var e; if(this.isSingleCharacterDataNode)e=this.range.cloneRange(),e.collapse(); else{e=new M(n(this.range)); var t=this._current,i=t,o=0,r=t,s=L.getNodeLength(t); L.isAncestorOf(t,this.sc,!0)&&(i=this.sc,o=this.so),L.isAncestorOf(t,this.ec,!0)&&(r=this.ec,s=this.eo),A(e,i,o,r,s)} return new f(e,this.clonePartiallySelectedTextNodes)},detach:
  function(e) {
    e&&this.range.detach(),this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null
  }
},p.prototype= {BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},p.prototype.toString=function() {return this.message},m.prototype= {_current:
    null,hasNext:
function(){return!!this._next},next:
function(){return this._current=this._next,this._next=this.nodes[++this._position],this._current},detach:
  function() {
    this._current=this._next=this.nodes=null
  }
                                                                                                                                       };
  var B=[1,3,4,5,7,8,10],H=[2,9,11],z=[5,6,10,12],F=[1,3,4,5,7,8,10,11],q=[1,3,4,5,7,8],W=L.getRootContainer,V=g([9,11]),U=g(z),G=g([6,10,12]),X=document.createElement("style"),Y=!1;
  try {
    X.innerHTML="<b>x</b>",Y=3==X.firstChild.nodeType
  } catch(J) {} e.features.htmlParsingConforms=Y;
  var Q=Y?function(e) {
    var t=this.startContainer,n=L.getDocument(t);
    if(!t)throw new j("INVALID_STATE_ERR");
    var i=null;
    return 1==t.nodeType?i=t:L.isCharacterDataNode(t)&&(i=L.parentElement(t)),i=null===i||"HTML"==i.nodeName&&L.isHtmlNamespace(L.getDocument(i).documentElement)&&L.isHtmlNamespace(i)?n.createElement("body"):i.cloneNode(!1),i.innerHTML=e,L.fragmentFromNodeChildren(i)
}:
  function(e) {v(this); var t=n(this),i=t.createElement("body"); return i.innerHTML=e,L.fragmentFromNodeChildren(i)},K=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],Z=0,et=1,tt=2,nt=3,it=0,ot=1,rt=2,st=3;
E.prototype= {attachListener:
function(e,t){this._listeners[e].push(t)},compareBoundaryPoints:
function(e,t){S(this),C(this.startContainer,t.startContainer); var n,i,o,r,s=e==nt||e==Z?"start":"end",a=e==et||e==Z?"start":"end"; return n=this[s+"Container"],i=this[s+"Offset"],o=t[a+"Container"],r=t[a+"Offset"],L.comparePoints(n,i,o,r)},insertNode:
function(e){if(S(this),b(e,F),x(this.startContainer),L.isAncestorOf(e,this.startContainer,!0))throw new j("HIERARCHY_REQUEST_ERR"); var t=s(e,this.startContainer,this.startOffset); this.setStartBefore(t)},cloneContents:
function(){S(this); var e,t; if(this.collapsed)return n(this).createDocumentFragment(); if(this.startContainer===this.endContainer&&L.isCharacterDataNode(this.startContainer))return e=this.startContainer.cloneNode(!0),e.data=e.data.slice(this.startOffset,this.endOffset),t=n(this).createDocumentFragment(),t.appendChild(e),t; var i=new f(this,!0); return e=a(i),i.detach(),e},canSurroundContents:
function(){S(this),x(this.startContainer),x(this.endContainer); var e=new f(this,!0),n=e._first&&t(e._first,this)||e._last&&t(e._last,this); return e.detach(),!n},surroundContents:
function(e){if(b(e,q),!this.canSurroundContents())throw new p("BAD_BOUNDARYPOINTS_ERR"); var t=this.extractContents(); if(e.hasChildNodes())for(; e.lastChild;)e.removeChild(e.lastChild); s(e,this.startContainer,this.startOffset),e.appendChild(t),this.selectNode(e)},cloneRange:
function(){S(this); for(var e,t=new M(n(this)),i=K.length; i--;)e=K[i],t[e]=this[e]; return t},toString:
  function() {
    S(this);
    var e=this.startContainer;
    if(e===this.endContainer&&L.isCharacterDataNode(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):"";
    var t=[],n=new f(this,!0);
    return l(n,function(e) {
      (3==e.nodeType||4==e.nodeType)&&t.push(e.data)
    }),n.detach(),t.join("")
},compareNode:
function(e){S(this); var t=e.parentNode,n=L.getNodeIndex(e); if(!t)throw new j("NOT_FOUND_ERR"); var i=this.comparePoint(t,n),o=this.comparePoint(t,n+1); return 0>i?o>0?rt:it:o>0?ot:st},comparePoint:
function(e,t){return S(this),_(e,"HIERARCHY_REQUEST_ERR"),C(e,this.startContainer),L.comparePoints(e,t,this.startContainer,this.startOffset)<0?-1:L.comparePoints(e,t,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:
Q,toHtml:
function(){S(this); var e=n(this).createElement("div"); return e.appendChild(this.cloneContents()),e.innerHTML},intersectsNode:
function(e,t){if(S(this),_(e,"NOT_FOUND_ERR"),L.getDocument(e)!==n(this))return!1; var i=e.parentNode,o=L.getNodeIndex(e); _(i,"NOT_FOUND_ERR"); var r=L.comparePoints(i,o,this.endContainer,this.endOffset),s=L.comparePoints(i,o+1,this.startContainer,this.startOffset); return t?0>=r&&s>=0:0>r&&s>0},isPointInRange:
function(e,t){return S(this),_(e,"HIERARCHY_REQUEST_ERR"),C(e,this.startContainer),L.comparePoints(e,t,this.startContainer,this.startOffset)>=0&&L.comparePoints(e,t,this.endContainer,this.endOffset)<=0},intersectsRange:
function(e,t){if(S(this),n(e)!=n(this))throw new j("WRONG_DOCUMENT_ERR"); var i=L.comparePoints(this.startContainer,this.startOffset,e.endContainer,e.endOffset),o=L.comparePoints(this.endContainer,this.endOffset,e.startContainer,e.startOffset); return t?0>=i&&o>=0:0>i&&o>0},intersection:
  function(e) {
    if(this.intersectsRange(e)) {
      var t=L.comparePoints(this.startContainer,this.startOffset,e.startContainer,e.startOffset),n=L.comparePoints(this.endContainer,this.endOffset,e.endContainer,e.endOffset),i=this.cloneRange();
      return-1==t&&i.setStart(e.startContainer,e.startOffset),1==n&&i.setEnd(e.endContainer,e.endOffset),i
    }
          return null
},union:function(e) {
    if(this.intersectsRange(e,!0)) {
      var t=this.cloneRange();
      return-1==L.comparePoints(e.startContainer,e.startOffset,this.startContainer,this.startOffset)&&t.setStart(e.startContainer,e.startOffset),1==L.comparePoints(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),t
    }
          throw new p("Ranges do not intersect")
},containsNode:
function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==st},containsNodeContents:
function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,L.getNodeLength(e))<=0},containsRange:
function(e){return this.intersection(e).equals(e)},containsNodeText:
  function(e) {
    var t=this.cloneRange();
    t.selectNode(e);
    var n=t.getNodes([3]);
    if(n.length>0) {
      t.setStart(n[0],0);
      var i=n.pop();
      t.setEnd(i,i.length);
      var o=this.containsRange(t);
      return t.detach(),o
    }
           return this.containsNodeContents(e)
},createNodeIterator:
function(e,t){return S(this),new m(this,e,t)},getNodes:
function(e,t){return S(this),u(this,e,t)},getDocument:
function(){return n(this)},collapseBefore:
function(e){v(this),this.setEndBefore(e),this.collapse(!1)},collapseAfter:
function(e){v(this),this.setStartAfter(e),this.collapse(!0)},getName:
function(){return"DomRange"},equals:
function(e){return M.rangesEqual(this,e)},inspect:
  function() {
    return h(this)
  }
  },$(M,A,O),e.rangePrototype=E.prototype,M.rangeProperties=K,M.RangeIterator=f,M.copyComparisonConstants=N,M.createPrototypeRange=$,M.inspect=h,M.getRangeDocument=n,M.rangesEqual=function(e,t) {return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},e.DomRange=M,e.RangeException=p
}),rangy.createModule("WrappedRange",function(e) {
  function t(e) {
    var t=e.parentElement(),n=e.duplicate();
    n.collapse(!0);
    var i=n.parentElement();
    n=e.duplicate(),n.collapse(!1);
    var o=n.parentElement(),r=i==o?i:s.getCommonAncestor(i,o);
    return r==t?r:s.getCommonAncestor(t,r)
  }
  function n(e) {
    return 0==e.compareEndPoints("StartToEnd",e)
  }
  function i(e,t,n,i) {
    var o=e.duplicate();
    o.collapse(n);
    var r=o.parentElement();
    if(s.isAncestorOf(t,r,!0)||(r=t),!r.canHaveHTML)return new a(r.parentNode,s.getNodeIndex(r));
    var l,c,d,u,h,f=s.getDocument(r).createElement("span"),p=n?"StartToStart":"StartToEnd";
    do r.insertBefore(f,f.previousSibling),o.moveToElementText(f);
    while((l=o.compareEndPoints(p,e))>0&&f.previousSibling);
    if(h=f.nextSibling,-1==l&&h&&s.isCharacterDataNode(h)) {
      o.setEndPoint(n?"EndToStart":"EndToEnd",e);
      var m;
      if(/[\r\n]/.test(h.data)) {
        var g=o.duplicate(),y=g.text.replace(/\r\n/g,"\r").length;
        for(m=g.moveStart("character",y); -1==(l=g.compareEndPoints("StartToEnd",g));)m++,g.moveStart("character",1)
        } else m=o.text.length;
      u=new a(h,m)
    } else c=(i||!n)&&f.previousSibling,d=(i||n)&&f.nextSibling,u=d&&s.isCharacterDataNode(d)?new a(d,0):c&&s.isCharacterDataNode(c)?new a(c,c.length):new a(r,s.getNodeIndex(f));
    return f.parentNode.removeChild(f),u
  }
  function o(e,t) {
    var n,i,o,r,a=e.offset,l=s.getDocument(e.node),c=l.body.createTextRange(),d=s.isCharacterDataNode(e.node);
    return d?(n=e.node,i=n.parentNode):(r=e.node.childNodes,n=a<r.length?r[a]:null,i=e.node),o=l.createElement("span"),o.innerHTML="&#feff;",n?i.insertBefore(o,n):i.appendChild(o),c.moveToElementText(o),c.collapse(!t),i.removeChild(o),d&&c[t?"moveStart":"moveEnd"]("character",a),c
  }
         e.requireModules(["DomUtil","DomRange"]);
  var r,s=e.dom,a=s.DomPosition,l=e.DomRange;
  if(!e.features.implementsDomRange||e.features.implementsTextRange&&e.config.preferTextRange) {
    if(e.features.implementsTextRange) {
      r=function(e) {this.textRange=e,this.refresh()},r.prototype=new l(document),r.prototype.refresh=function() {var e,o,r=t(this.textRange); n(this.textRange)?o=e=i(this.textRange,r,!0,!0):(e=i(this.textRange,r,!0,!1),o=i(this.textRange,r,!1,!1)),this.setStart(e.node,e.offset),this.setEnd(o.node,o.offset)},l.copyComparisonConstants(r);
      var c=function() {
        return this
      }(); "undefined"
      ==typeof c.Range&&(c.Range=r),e.createNativeRange=function(e) {
        return e=e||document,e.body.createTextRange()
      }
    }
  } else!function() {
    function t(e) {
      for(var t,n=d.length; n--;)t=d[n],e[t]=e.nativeRange[t]
      }
    function n(e,t,n,i,o) {
      var r=e.startContainer!==t||e.startOffset!=n,s=e.endContainer!==i||e.endOffset!=o;
      (r||s)&&(e.setEnd(i,o),e.setStart(t,n))
    }
    function i(e) {
      e.nativeRange.detach(),e.detached=!0;
      for(var t,n=d.length; n--;)t=d[n],e[t]=null
      }
                                           var o,a,c,d=l.rangeProperties;
    r=function(e) {if(!e)throw new Error("Range must be specified"); this.nativeRange=e,t(this)},l.createPrototypeRange(r,n,i),o=r.prototype,o.selectNode=function(e) {this.nativeRange.selectNode(e),t(this)},o.deleteContents=function() {this.nativeRange.deleteContents(),t(this)},o.extractContents=function() {var e=this.nativeRange.extractContents(); return t(this),e},o.cloneContents=function() {return this.nativeRange.cloneContents()},o.surroundContents=function(e) {this.nativeRange.surroundContents(e),t(this)},o.collapse=function(e) {this.nativeRange.collapse(e),t(this)},o.cloneRange=function() {return new r(this.nativeRange.cloneRange())},o.refresh=function() {t(this)},o.toString=function() {
      return this.nativeRange.toString()
    };
    var u=document.createTextNode("test");
    s.getBody(document).appendChild(u);
    var h=document.createRange();
    h.setStart(u,0),h.setEnd(u,0);
    try {
      h.setStart(u,1),a=!0,o.setStart=function(e,n) {this.nativeRange.setStart(e,n),t(this)},o.setEnd=function(e,n) {this.nativeRange.setEnd(e,n),t(this)},c=function(e) {
        return function(n) {
          this.nativeRange[e](n),t(this)
        }
      }
    } catch(f) {
      a=!1,o.setStart=function(e,n) {
        try {
          this.nativeRange.setStart(e,n)
        } catch(i) {
          this.nativeRange.setEnd(e,n),this.nativeRange.setStart(e,n)
        }
        t(this)
      },o.setEnd=function(e,n) {
        try {
          this.nativeRange.setEnd(e,n)
        } catch(i) {
          this.nativeRange.setStart(e,n),this.nativeRange.setEnd(e,n)
        }
        t(this)
      },c=function(e,n) {
        return function(i) {
          try {
            this.nativeRange[e](i)
          } catch(o) {
            this.nativeRange[n](i),this.nativeRange[e](i)
          }
          t(this)
        }
      }
    }
    o.setStartBefore=c("setStartBefore","setEndBefore"),o.setStartAfter=c("setStartAfter","setEndAfter"),o.setEndBefore=c("setEndBefore","setStartBefore"),o.setEndAfter=c("setEndAfter","setStartAfter"),h.selectNodeContents(u),o.selectNodeContents=h.startContainer==u&&h.endContainer==u&&0==h.startOffset&&h.endOffset==u.length?function(e) {
      this.nativeRange.selectNodeContents(e),t(this)
}:
    function(e) {this.setStart(e,0),this.setEnd(e,l.getEndOffset(e))},h.selectNodeContents(u),h.setEnd(u,3);
    var p=document.createRange();
    p.selectNodeContents(u),p.setEnd(u,4),p.setStart(u,2),o.compareBoundaryPoints=-1==h.compareBoundaryPoints(h.START_TO_END,p)&1==h.compareBoundaryPoints(h.END_TO_START,p)?function(e,t) {
      return t=t.nativeRange||t,e==t.START_TO_END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)
}:
    function(e,t) {return this.nativeRange.compareBoundaryPoints(e,t.nativeRange||t)},e.util.isHostMethod(h,"createContextualFragment")&&(o.createContextualFragment=function(e) {
      return this.nativeRange.createContextualFragment(e)
    }),s.getBody(document).removeChild(u),h.detach(),p.detach()
  }(),e.createNativeRange=function(e) {
    return e=e||document,e.createRange()
  };
  e.features.implementsTextRange&&(r.rangeToTextRange=function(e) {
    if(e.collapsed) {
      var t=o(new a(e.startContainer,e.startOffset),!0);
      return t
    }
           var n=o(new a(e.startContainer,e.startOffset),!0),i=o(new a(e.endContainer,e.endOffset),!1),r=s.getDocument(e.startContainer).body.createTextRange();
    return r.setEndPoint("StartToStart",n),r.setEndPoint("EndToEnd",i),r
  }),r.prototype.getName=function() {return"WrappedRange"},e.WrappedRange=r,e.createRange=function(t) {return t=t||document,new r(e.createNativeRange(t))},e.createRangyRange=function(e) {return e=e||document,new l(e)},e.createIframeRange=function(t) {return e.createRange(s.getIframeDocument(t))},e.createIframeRangyRange=function(t) {return e.createRangyRange(s.getIframeDocument(t))},e.addCreateMissingNativeApiListener(function(t) {
    var n=t.document; "undefined"
    ==typeof n.createRange&&(n.createRange=function() {
      return e.createRange(this)
    }),n=t=null
  })
}),rangy.createModule("WrappedSelection",function(e,t) {
  function n(e) {
    return(e||window).getSelection()
  }
  function i(e) {
    return(e||window).document.selection
  }
  function o(e,t,n) {
    var i=n?"end":"start",o=n?"start":"end";
    e.anchorNode=t[i+"Container"],e.anchorOffset=t[i+"Offset"],e.focusNode=t[o+"Container"],e.focusOffset=t[o+"Offset"]
  }
  function r(e) {
    var t=e.nativeSelection;
    e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.focusNode=t.focusNode,e.focusOffset=t.focusOffset
  }
  function s(e) {
    e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0
  }
  function a(t) {
    var n;
    return t instanceof k?(n=t._selectionNativeRange,n||(n=e.createNativeRange(x.getDocument(t.startContainer)),n.setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset),t._selectionNativeRange=n,t.attachListener("detach",function() {
      this._selectionNativeRange=null
    }))):t instanceof T?n=t.nativeRange:e.features.implementsDomRange&&t instanceof x.getWindow(t.startContainer).Range&&(n=t),n
    }
  function l(e) {
    if(!e.length||1!=e[0].nodeType)return!1;
    for(var t=1,n=e.length; n>t; ++t)if(!x.isAncestorOf(e[0],e[t]))return!1;
    return!0
  }
  function c(e) {
    var t=e.getNodes();
    if(!l(t))throw new Error("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element");
    return t[0]
  }
  function d(e) {
    return!!e&&"undefined"!=typeof e.text
  }
  function u(e,t) {
    var n=new T(t);
    e._ranges=[n],o(e,n,!1),e.rangeCount=1,e.isCollapsed=n.collapsed
  }
  function h(t) {
    if(t._ranges.length=0,"None"==t.docSelection.type)s(t);
    else {
      var n=t.docSelection.createRange();
      if(d(n))u(t,n);
      else {
        t.rangeCount=n.length;
        for(var i,r=x.getDocument(n.item(0)),a=0; a<t.rangeCount; ++a)i=e.createRange(r),i.selectNode(n.item(a)),t._ranges.push(i);
        t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,o(t,t._ranges[t.rangeCount-1],!1)
      }
    }
  }
  function f(e,t) {
    for(var n=e.docSelection.createRange(),i=c(t),o=x.getDocument(n.item(0)),r=x.getBody(o).createControlRange(),s=0,a=n.length; a>s; ++s)r.add(n.item(s));
    try {
      r.add(i)
    } catch(l) {
      throw new Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")
    }
    r.select(),h(e)
  }
  function p(e,t,n) {
    this.nativeSelection=e,this.docSelection=t,this._ranges=[],this.win=n,this.refresh()
  }
  function m(e,t) {
    for(var n,i=x.getDocument(t[0].startContainer),o=x.getBody(i).createControlRange(),r=0; rangeCount>r; ++r) {
      n=c(t[r]);
      try {
        o.add(n)
      } catch(s) {
        throw new Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")
      }
    }
    o.select(),h(e)
  }
  function g(e,t) {
    if(e.anchorNode&&x.getDocument(e.anchorNode)!==x.getDocument(t))throw new S("WRONG_DOCUMENT_ERR")
    }
  function y(e) {
    var t=[],n=new E(e.anchorNode,e.anchorOffset),i=new E(e.focusNode,e.focusOffset),o="function"==typeof e.getName?e.getName():"Selection";
    if("undefined"!=typeof e.rangeCount)for(var r=0,s=e.rangeCount; s>r; ++r)t[r]=k.inspect(e.getRangeAt(r));
    return"["+o+"(Ranges: "+t.join(", ")+")(anchor: "+n.inspect()+", focus: "+i.inspect()+"]"
  }
        e.requireModules(["DomUtil","DomRange","WrappedRange"]),e.config.checkSelectionRanges=!0;
  var v,b,w="boolean",C="_rangySelection",x=e.dom,_=e.util,k=e.DomRange,T=e.WrappedRange,S=e.DOMException,E=x.DomPosition,I="Control",N=e.util.isHostMethod(window,"getSelection"),D=e.util.isHostObject(document,"selection"),$=D&&(!N||e.config.preferTextRange);
  $?(v=i,e.isSelectionValid=function(e) {
    var t=(e||window).document,n=t.selection;
    return"None"!=n.type||x.getDocument(n.createRange().parentElement())==t
  }):N?(v=n,e.isSelectionValid=function() {
    return!0
  }):t.fail("Neither document.selection or window.getSelection() detected."),e.getNativeSelection=v;
  var P=v(),A=e.createNativeRange(document),O=x.getBody(document),M=_.areHostObjects(P,["anchorNode","focusNode"]&&_.areHostProperties(P,["anchorOffset","focusOffset"]));
  e.features.selectionHasAnchorAndFocus=M;
  var L=_.isHostMethod(P,"extend");
  e.features.selectionHasExtend=L;
  var R="number"==typeof P.rangeCount;
  e.features.selectionHasRangeCount=R;
  var j=!1,B=!0;
  _.areHostMethods(P,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof P.rangeCount&&e.features.implementsDomRange&&!function() {
    var e=document.createElement("iframe");
    O.appendChild(e);
    var t=x.getIframeDocument(e);
    t.open(),t.write("<html><head></head><body>12</body></html>"),t.close();
    var n=x.getIframeWindow(e).getSelection(),i=t.documentElement,o=i.lastChild,r=o.firstChild,s=t.createRange();
    s.setStart(r,1),s.collapse(!0),n.addRange(s),B=1==n.rangeCount,n.removeAllRanges();
    var a=s.cloneRange();
    s.setStart(r,0),a.setEnd(r,2),n.addRange(s),n.addRange(a),j=2==n.rangeCount,s.detach(),a.detach(),O.removeChild(e)
  }(),e.features.selectionSupportsMultipleRanges=j,e.features.collapsedNonEditableSelectionsSupported=B;
  var H,z=!1;
  O&&_.isHostMethod(O,"createControlRange")&&(H=O.createControlRange(),_.areHostProperties(H,["item","add"])&&(z=!0)),e.features.implementsControlRange=z,b=M?function(e) {
    return e.anchorNode===e.focusNode&&e.anchorOffset===e.focusOffset
}:
  function(e) {
    return e.rangeCount?e.getRangeAt(e.rangeCount-1).collapsed:!1
  };
  var F;
  _.isHostMethod(P,"getRangeAt")?F=function(e,t) {
    try {
      return e.getRangeAt(t)
    } catch(n) {
      return null
    }
}:
  M&&(F=function(t) {
    var n=x.getDocument(t.anchorNode),i=e.createRange(n);
    return i.setStart(t.anchorNode,t.anchorOffset),i.setEnd(t.focusNode,t.focusOffset),i.collapsed!==this.isCollapsed&&(i.setStart(t.focusNode,t.focusOffset),i.setEnd(t.anchorNode,t.anchorOffset)),i
  }),e.getSelection=function(e) {e=e||window; var t=e[C],n=v(e),o=D?i(e):null; return t?(t.nativeSelection=n,t.docSelection=o,t.refresh(e)):(t=new p(n,o,e),e[C]=t),t},e.getIframeSelection=function(t) {
    return e.getSelection(x.getIframeWindow(t))
  };
  var q=p.prototype;
  if(!$&&M&&_.areHostMethods(P,["removeAllRanges","addRange"])) {
    q.removeAllRanges=function() {
      this.nativeSelection.removeAllRanges(),s(this)
    };
    var W=function(t,n) {
      var i=k.getRangeDocument(n),o=e.createRange(i);
      o.collapseToPoint(n.endContainer,n.endOffset),t.nativeSelection.addRange(a(o)),t.nativeSelection.extend(n.startContainer,n.startOffset),t.refresh()
    };
    q.addRange=R?function(t,n) {
      if(z&&D&&this.docSelection.type==I)f(this,t);
      else if(n&&L)W(this,t);
      else {
        var i;
        if(j?i=this.rangeCount:(this.removeAllRanges(),i=0),this.nativeSelection.addRange(a(t)),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==i+1) {
          if(e.config.checkSelectionRanges) {
            var r=F(this.nativeSelection,this.rangeCount-1);
            r&&!k.rangesEqual(r,t)&&(t=new T(r))
          }
          this._ranges[this.rangeCount-1]=t,o(this,t,G(this.nativeSelection)),this.isCollapsed=b(this)
        } else this.refresh()
        }
}:
    function(e,t) {t&&L?W(this,e):(this.nativeSelection.addRange(a(e)),this.refresh())},q.setRanges=function(e) {
      if(z&&e.length>1)m(this,e);
      else {
        this.removeAllRanges();
        for(var t=0,n=e.length; n>t; ++t)this.addRange(e[t])
        }
    }
  } else {
    if(!(_.isHostMethod(P,"empty")&&_.isHostMethod(A,"select")&&z&&$))return t.fail("No means of selecting a Range or TextRange was found"),!1;
    q.removeAllRanges=function() {
      try {
        if(this.docSelection.empty(),"None"!=this.docSelection.type) {
          var e;
          if(this.anchorNode)e=x.getDocument(this.anchorNode);
          else if(this.docSelection.type==I) {
            var t=this.docSelection.createRange();
            t.length&&(e=x.getDocument(t.item(0)).body.createTextRange())
          }
          if(e) {
            var n=e.body.createTextRange();
            n.select(),this.docSelection.empty()
          }
        }
      } catch(i) {} s(this)
    },q.addRange=function(e) {this.docSelection.type==I?f(this,e):(T.rangeToTextRange(e).select(),this._ranges[0]=e,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,o(this,e,!1))},q.setRanges=function(e) {
      this.removeAllRanges();
      var t=e.length;
      t>1?m(this,e):t&&this.addRange(e[0])
    }
  }
  q.getRangeAt=function(e) {
    if(0>e||e>=this.rangeCount)throw new S("INDEX_SIZE_ERR");
    return this._ranges[e]
  };
  var V;
  if($)V=function(t) {
    var n;
    e.isSelectionValid(t.win)?n=t.docSelection.createRange():(n=x.getBody(t.win.document).createTextRange(),n.collapse(!0)),t.docSelection.type==I?h(t):d(n)?u(t,n):s(t)
  };
  else if(_.isHostMethod(P,"getRangeAt")&&"number"==typeof P.rangeCount)V=function(t) {
    if(z&&D&&t.docSelection.type==I)h(t);
    else if(t._ranges.length=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount) {
      for(var n=0,i=t.rangeCount; i>n; ++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.getRangeAt(n));
      o(t,t._ranges[t.rangeCount-1],G(t.nativeSelection)),t.isCollapsed=b(t)
    } else s(t)
    };
  else {
    if(!M||typeof P.isCollapsed!=w||typeof A.collapsed!=w||!e.features.implementsDomRange)return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;
    V=function(e) {
      var t,n=e.nativeSelection;
      n.anchorNode?(t=F(n,0),e._ranges=[t],e.rangeCount=1,r(e),e.isCollapsed=b(e)):s(e)
    }
  }
  q.refresh=function(e) {
    var t=e?this._ranges.slice(0):null;
    if(V(this),e) {
      var n=t.length;
      if(n!=this._ranges.length)return!1;
      for(; n--;)if(!k.rangesEqual(t[n],this._ranges[n]))return!1;
      return!0
    }
  };
  var U=function(e,t) {
    var n=e.getAllRanges(),i=!1;
    e.removeAllRanges();
    for(var o=0,r=n.length; r>o; ++o)i||t!==n[o]?e.addRange(n[o]):i=!0;
    e.rangeCount||s(e)
  };
  q.removeRange=z?function(e) {
    if(this.docSelection.type==I) {
      for(var t,n=this.docSelection.createRange(),i=c(e),o=x.getDocument(n.item(0)),r=x.getBody(o).createControlRange(),s=!1,a=0,l=n.length; l>a; ++a)t=n.item(a),t!==i||s?r.add(n.item(a)):s=!0;
      r.select(),h(this)
    } else U(this,e)
}:
  function(e) {
    U(this,e)
  };
  var G;
  !$&&M&&e.features.implementsDomRange?(G=function(e) {
    var t=!1;
    return e.anchorNode&&(t=1==x.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t
  },q.isBackwards=function() {
    return G(this)
  }):G=q.isBackwards=function() {return!1},q.toString=function() {for(var e=[],t=0,n=this.rangeCount; n>t; ++t)e[t]=""+this._ranges[t]; return e.join("")},q.collapse=function(t,n) {g(this,t); var i=e.createRange(x.getDocument(t)); i.collapseToPoint(t,n),this.removeAllRanges(),this.addRange(i),this.isCollapsed=!0},q.collapseToStart=function() {if(!this.rangeCount)throw new S("INVALID_STATE_ERR"); var e=this._ranges[0]; this.collapse(e.startContainer,e.startOffset)},q.collapseToEnd=function() {if(!this.rangeCount)throw new S("INVALID_STATE_ERR"); var e=this._ranges[this.rangeCount-1]; this.collapse(e.endContainer,e.endOffset)},q.selectAllChildren=function(t) {g(this,t); var n=e.createRange(x.getDocument(t)); n.selectNodeContents(t),this.removeAllRanges(),this.addRange(n)},q.deleteFromDocument=function() {
    if(z&&D&&this.docSelection.type==I) {
      for(var e,t=this.docSelection.createRange(); t.length;)e=t.item(0),t.remove(e),e.parentNode.removeChild(e);
      this.refresh()
    } else if(this.rangeCount) {
      var n=this.getAllRanges();
      this.removeAllRanges();
      for(var i=0,o=n.length; o>i; ++i)n[i].deleteContents();
      this.addRange(n[o-1])
    }
  },q.getAllRanges=function() {return this._ranges.slice(0)},q.setSingleRange=function(e) {this.setRanges([e])},q.containsNode=function(e,t) {for(var n=0,i=this._ranges.length; i>n; ++n)if(this._ranges[n].containsNode(e,t))return!0; return!1},q.toHtml=function() {
    var e="";
    if(this.rangeCount) {
      for(var t=k.getRangeDocument(this._ranges[0]).createElement("div"),n=0,i=this._ranges.length; i>n; ++n)t.appendChild(this._ranges[n].cloneContents());
      e=t.innerHTML
    }
      return e
  },q.getName=function() {return"WrappedSelection"},q.inspect=function() {return y(this)},q.detach=function() {this.win[C]=null,this.win=this.anchorNode=this.focusNode=null},p.inspect=y,e.Selection=p,e.selectionPrototype=q,e.addCreateMissingNativeApiListener(function(t) {"undefined"==typeof t.getSelection&&(t.getSelection=function() {
      return e.getSelection(this)
    }),t=null
  })
}); var Base=function() {}; Base.extend=function(e,t) {
  var n=Base.prototype.extend;
  Base._prototyping=!0;
  var i=new this;
  n.call(i,e),i.base=function() {},delete Base._prototyping;
  var o=i.constructor,r=i.constructor=function() {
    if(!Base._prototyping)if(this._constructing||this.constructor==r)this._constructing=!0,o.apply(this,arguments),delete this._constructing;
      else if(null!=arguments[0])return(arguments[0].extend||n).call(arguments[0],i)
      };
  return r.ancestor=this,r.extend=this.extend,r.forEach=this.forEach,r.implement=this.implement,r.prototype=i,r.toString=this.toString,r.valueOf=function(e) {return"object"==e?r:o.valueOf()},n.call(r,t),"function"==typeof r.init&&r.init(),r
},Base.prototype= {extend:function(e,t) {
  if(arguments.length>1) {
    var n=this[e];
    if(n&&"function"==typeof t&&(!n.valueOf||n.valueOf()!=t.valueOf())&&/\bbase\b/.test(t)) {
      var i=t.valueOf();
      t=function() {var e=this.base||Base.prototype.base; this.base=n; var t=i.apply(this,arguments); return this.base=e,t},t.valueOf=function(e) {return"object"==e?t:i},t.toString=Base.toString
    }
        this[e]=t
  } else if(e) {
    var o=Base.prototype.extend;
    Base._prototyping||"function"==typeof this||(o=this.extend||o);
    for(var r= {toSource:null},s=["constructor","toString","valueOf"],a=Base._prototyping?0:1; l=s[a++];)e[l]!=r[l]&&o.call(this,l,e[l]);
    for(var l in e)r[l]||o.call(this,l,e[l])
    }
  return this
}
},Base=Base.extend( {constructor:function() {
  this.extend(arguments[0])
}
}, {ancestor:Object,version:"1.1",forEach:function(e,t,n) {
  for(var i in e)void 0===this.prototype[i]&&t.call(n,e[i],i,e)
},implement:function() {
  for(var e=0; e<arguments.length; e++)"function"==typeof arguments[e]?arguments[e](this.prototype):this.prototype.extend(arguments[e]);
  return this
},toString:function() {
  return String(this.valueOf())
}
}),wysihtml5.browser=function() {
  function e(e) {
    return(/ipad|iphone|ipod/.test(e)&&e.match(/ os (\d+).+? like mac os x/)||[,0])[1]
  }
        var t=navigator.userAgent,n=document.createElement("div"),i=-1!==t.indexOf("MSIE")&&-1===t.indexOf("Opera"),o=-1!==t.indexOf("Gecko")&&-1===t.indexOf("KHTML"),r=-1!==t.indexOf("AppleWebKit/"),s=-1!==t.indexOf("Chrome/"),a=-1!==t.indexOf("Opera/");
return {USER_AGENT:
        t,supported:
function(){var t=this.USER_AGENT.toLowerCase(),i="contentEditable"in n,o=document.execCommand&&document.queryCommandSupported&&document.queryCommandState,r=document.querySelector&&document.querySelectorAll,s=this.isIos()&&e(t)<5||-1!==t.indexOf("opera mobi")||-1!==t.indexOf("hpwos/"); return i&&o&&r&&!s},isTouchDevice:
function(){return this.supportsEvent("touchmove")},isIos:
function(){var e=this.USER_AGENT.toLowerCase(); return-1!==e.indexOf("webkit")&&-1!==e.indexOf("mobile")},supportsSandboxedIframes:
function(){return i},throwsMixedContentWarningWhenIframeSrcIsEmpty:
function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:
function(){return!o},hasCurrentStyleProperty:
function(){return"currentStyle"in n},insertsLineBreaksOnReturn:
function(){return o},supportsPlaceholderAttributeOn:
function(e){return"placeholder"in e},supportsEvent:
  function(e) {
    return"on"+e in n||function() {
      return n.setAttribute("on"+e,"return;"),"function"==typeof n["on"+e]
    }()
},supportsEventsInIframeCorrectly:
function(){return!a},firesOnDropOnlyWhenOnDragOverIsCancelled:
function(){return r||o},supportsDataTransfer:
  function() {
    try {
      return r&&(window.Clipboard||window.DataTransfer).prototype.getData
    } catch(e) {
      return!1
    }
},supportsHTML5Tags:
function(e){var t=e.createElement("div"),n="<article>foo</article>"; return t.innerHTML=n,t.innerHTML.toLowerCase()===n},supportsCommand:
  function() {
var e= {formatBlock:
        i,insertUnorderedList:
        i||a||r,insertOrderedList:
            i||a||r
       },t= {insertHTML:
                 o
                };
    return function(n,i) {
      var o=e[i];
      if(!o) {
        try {
          return n.queryCommandSupported(i)
        } catch(r) {} try {
          return n.queryCommandEnabled(i)
        } catch(s) {
          return!!t[i]
        }
      }
            return!1
    }
}(),doesAutoLinkingInContentEditable:
function(){return i},canDisableAutoLinking:
function(){return this.supportsCommand(document,"AutoUrlDetect")},clearsContentEditableCorrectly:
function(){return o||a||r},supportsGetAttributeCorrectly:
function(){var e=document.createElement("td"); return"1"!=e.getAttribute("rowspan")},canSelectImagesInContentEditable:
function(){return o||i||a},clearsListsInContentEditableCorrectly:
function(){return o||i||r},autoScrollsToCaret:
function(){return!r},autoClosesUnclosedTags:
function(){var e,t,i=n.cloneNode(!1); return i.innerHTML="<p><div></div>",t=i.innerHTML.toLowerCase(),e="<p></p><div></div>"===t||"<p><div></div></p>"===t,this.autoClosesUnclosedTags=function(){return e},e},supportsNativeGetElementsByClassName:
function(){return-1!==String(document.getElementsByClassName).indexOf("[native code]")},supportsSelectionModify:
function(){return"getSelection"in window&&"modify"in window.getSelection()},supportsClassList:
function(){return"classList"in n},needsSpaceAfterLineBreak:
function(){return a},supportsSpeechApiOn:
function(e){var n=t.match(/Chrome\/(\d+)/)||[,0]; return n[1]>=11&&("onwebkitspeechchange"in e||"speech"in e)},crashesWhenDefineProperty:
function(e){return i&&("XMLHttpRequest"===e||"XDomainRequest"===e)},doesAsyncFocus:
function(){return i},hasProblemsSettingCaretAfterImg:
function(){return i},hasUndoInContextMenu:
  function() {
    return o||s||a
  }
         }
}(),wysihtml5.lang.array=function(e) {
return {contains:
function(t){if(e.indexOf)return-1!==e.indexOf(t); for(var n=0,i=e.length; i>n; n++)if(e[n]===t)return!0; return!1},without:
function(t){t=wysihtml5.lang.array(t); for(var n=[],i=0,o=e.length; o>i; i++)t.contains(e[i])||n.push(e[i]); return n},get:
  function() {
    for(var t=0,n=e.length,i=[]; n>t; t++)i.push(e[t]);
    return i
  }
         }
},wysihtml5.lang.Dispatcher=Base.extend( {observe:function(e,t) {
  return this.events=this.events|| {},this.events[e]=this.events[e]||[],this.events[e].push(t),this
},on:function() {
  return this.observe.apply(this,wysihtml5.lang.array(arguments).get())
},fire:function(e,t) {
  this.events=this.events|| {};
  for(var n=this.events[e]||[],i=0; i<n.length; i++)n[i].call(this,t);
  return this
},stopObserving:function(e,t) {
  this.events=this.events|| {};
  var n,i,o=0;
  if(e) {
    for(n=this.events[e]||[],i=[]; o<n.length; o++)n[o]!==t&&t&&i.push(n[o]);
    this.events[e]=i
  } else this.events= {};
  return this
}
}),wysihtml5.lang.object=function(e) {
return {merge:
function(t){for(var n in t)e[n]=t[n]; return this},get:
function(){return e},clone:
function(){var t,n={}; for(t in e)n[t]=e[t]; return n},isArray:
  function() {
    return"[object Array]"===Object.prototype.toString.call(e)
  }
         }
},function() {
  var e=/^\s+/,t=/\s+$/;
  wysihtml5.lang.string=function(n) {
return n=String(n), {trim:
function(){return n.replace(e,"").replace(t,"")},interpolate:
function(e){for(var t in e)n=this.replace("#{"+t+"}").by(e[t]); return n},replace:
    function(e) {
return {by:
      function(t) {
        return n.split(e).join(t)
      }
             }
    }
                        }
  }
}(),function(e) {
  function t(e) {
    return r(e)?e:(e===e.ownerDocument.documentElement&&(e=e.ownerDocument.body),s(e))
  }
  function n(e) {
    return e.replace(l,function(e,t) {
      var n=(t.match(c)||[])[1]||"",i=u[n];
      t=t.replace(c,""),t.split(i).length>t.split(n).length&&(t+=n,n="");
      var o=t,r=t;
      return t.length>d&&(r=r.substr(0,d)+"..."),"www."===o.substr(0,4)&&(o="http://"+o),'<a href="'+o+'">'+r+"</a>"+n
    })
  }
  function i(e) {
    var t=e._wysihtml5_tempElement;
    return t||(t=e._wysihtml5_tempElement=e.createElement("div")),t
  }
  function o(e) {
    var t=e.parentNode,o=i(t.ownerDocument);
    for(o.innerHTML="<span></span>"+n(e.data),o.removeChild(o.firstChild); o.firstChild;)t.insertBefore(o.firstChild,e);
    t.removeChild(e)
  }
  function r(e) {
    for(var t; e.parentNode;) {
      if(e=e.parentNode,t=e.nodeName,a.contains(t))return!0;
      if("body"===t)return!1
      }
                        return!1
  }
  function s(t) {
    if(!a.contains(t.nodeName)) {
      if(t.nodeType===e.TEXT_NODE&&t.data.match(l))return o(t),void 0;
      for(var n=e.lang.array(t.childNodes).get(),i=n.length,r=0; i>r; r++)s(n[r]);
      return t
    }
  }
       var a=e.lang.array(["CODE","PRE","A","SCRIPT","HEAD","TITLE","STYLE"]),l=/((https?:\/\/|www\.)[^\s<] {3,})/gi,c=/([^\w\/\-](,?))$/i,d=100,u= {")":"(","]":"[","}":"{"};
  e.dom.autoLink=t,e.dom.autoLink.URL_REG_EXP=l
}(wysihtml5),function(e) {
  var t=e.browser.supportsClassList(),n=e.dom;
  n.addClass=function(e,i) {return t?e.classList.add(i):(n.hasClass(e,i)||(e.className+=" "+i),void 0)},n.removeClass=function(e,n) {return t?e.classList.remove(n):(e.className=e.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," "),void 0)},n.hasClass=function(e,n) {
    if(t)return e.classList.contains(n);
    var i=e.className;
    return i.length>0&&(i==n||new RegExp("(^|\\s)"+n+"(\\s|$)").test(i))
  }
}(wysihtml5),wysihtml5.dom.contains=function() {
  var e=document.documentElement;
  return e.contains?function(e,t) {
    return t.nodeType!==wysihtml5.ELEMENT_NODE&&(t=t.parentNode),e!==t&&e.contains(t)
}:
  e.compareDocumentPosition?function(e,t) {
    return!!(16&e.compareDocumentPosition(t))
}:
        void 0
}(),wysihtml5.dom.convertToList=function() {
  function e(e,t) {
    var n=e.createElement("li");
    return t.appendChild(n),n
  }
  function t(e,t) {
    return e.createElement(t)
  }
  function n(n,i) {
    if("UL"===n.nodeName||"OL"===n.nodeName||"MENU"===n.nodeName)return n;
    var o,r,s,a,l,c,d,u,h,f=n.ownerDocument,p=t(f,i),m=n.querySelectorAll("br"),g=m.length;
    for(h=0; g>h; h++)for(a=m[h]; (l=a.parentNode)&&l!==n&&l.lastChild===a;) {
        if("block"===wysihtml5.dom.getStyle("display").from(l)) {
          l.removeChild(a);
          break
        }
        wysihtml5.dom.insert(a).after(a.parentNode)
      }
    for(o=wysihtml5.lang.array(n.childNodes).get(),r=o.length,h=0; r>h; h++)u=u||e(f,p),s=o[h],c="block"===wysihtml5.dom.getStyle("display").from(s),d="BR"===s.nodeName,c?(u=u.firstChild?e(f,p):u,u.appendChild(s),u=null):d?u=u.firstChild?null:u:u.appendChild(s);
    return n.parentNode.replaceChild(p,n),p
  }
         return n
}(),wysihtml5.dom.copyAttributes=function(e) {
return {from:
  function(t) {
return {to:
    function(n) {
      for(var i,o=0,r=e.length; r>o; o++)i=e[o],"undefined"!=typeof t[i]&&""!==t[i]&&(n[i]=t[i]);
return {andTo:
              arguments.callee
             }
    }
           }
  }
         }
},function(e) {
  var t=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"],n=function(t) {return i(t)?parseInt(e.getStyle("width").from(t),10)<t.offsetWidth:!1},i=function(n) {
    for(var i=0,o=t.length; o>i; i++)if("border-box"===e.getStyle(t[i]).from(n))return t[i]
      };
  e.copyStyles=function(i) {
return {from:
    function(o) {
      n(o)&&(i=wysihtml5.lang.array(i).without(t));
      for(var r,s="",a=i.length,l=0; a>l; l++)r=i[l],s+=r+":"+e.getStyle(r).from(o)+";";
return {to:
      function(t) {
return e.setStyles(s).on(t), {andTo:
                                      arguments.callee
                                     }
      }
             }
    }
           }
  }
}(wysihtml5.dom),function(e) {
  e.dom.delegate=function(t,n,i,o) {
    return e.dom.observe(t,i,function(i) {
      for(var r=i.target,s=e.lang.array(t.querySelectorAll(n)); r&&r!==t;) {
        if(s.contains(r)) {
          o.call(r,i);
          break
        }
        r=r.parentNode
      }
    })
  }
}(wysihtml5),wysihtml5.dom.getAsDom=function() {
  var e=function(e,t) {var n=t.createElement("div"); n.style.display="none",t.body.appendChild(n); try{n.innerHTML=e} catch(i) {} return t.body.removeChild(n),n},t=function(e) {
    if(!e._wysihtml5_supportsHTML5Tags) {
      for(var t=0,i=n.length; i>t; t++)e.createElement(n[t]);
      e._wysihtml5_supportsHTML5Tags=!0
    }
  },n=["abbr","article","aside","audio","bdi","canvas","command","datalist","details","figcaption","figure","footer","header","hgroup","keygen","mark","meter","nav","output","progress","rp","rt","ruby","svg","section","source","summary","time","track","video","wbr"];
  return function(n,i) {
    i=i||document;
    var o;
    return"object"==typeof n&&n.nodeType?(o=i.createElement("div"),o.appendChild(n)):wysihtml5.browser.supportsHTML5Tags(i)?(o=i.createElement("div"),o.innerHTML=n):(t(i),o=e(n,i)),o
  }
}(),wysihtml5.dom.getParentElement=function() {
  function e(e,t) {
    return t&&t.length?"string"==typeof t?e===t:wysihtml5.lang.array(t).contains(e):!0
    }
  function t(e) {
    return e.nodeType===wysihtml5.ELEMENT_NODE
  }
  function n(e,t,n) {
    var i=(e.className||"").match(n)||[];
    return t?i[i.length-1]===t:!!i.length
  }
  function i(t,n,i) {
    for(; i--&&t&&"BODY"!==t.nodeName;) {
      if(e(t.nodeName,n))return t;
      t=t.parentNode
    }
      return null
  }
  function o(i,o,r,s,a) {
    for(; a--&&i&&"BODY"!==i.nodeName;) {
      if(t(i)&&e(i.nodeName,o)&&n(i,r,s))return i;
      i=i.parentNode
    }
      return null
  }
  return function(e,t,n) {
    return n=n||50,t.className||t.classRegExp?o(e,t.nodeName,t.className,t.classRegExp,n):i(e,t.nodeName,n)
  }
}(),wysihtml5.dom.getStyle=function() {
  function e(e) {
    return e.replace(n,function(e) {
      return e.charAt(1).toUpperCase()
    })
  }
       var t= {"float":"styleFloat"
                 in document.createElement("div").style?"styleFloat":"cssFloat"
                },n=/\-[a-z]/g;
  return function(n) {
return {from:
    function(i) {
      if(i.nodeType===wysihtml5.ELEMENT_NODE) {
        var o=i.ownerDocument,r=t[n]||e(n),s=i.style,a=i.currentStyle,l=s[r];
        if(l)return l;
        if(a)try {
            return a[r]
          } catch(c) {} var d,u,h=o.defaultView||o.parentWindow,f=("height"===n||"width"===n)&&"TEXTAREA"===i.nodeName;
        return h.getComputedStyle?(f&&(d=s.overflow,s.overflow="hidden"),u=h.getComputedStyle(i,null).getPropertyValue(n),f&&(s.overflow=d||""),u):void 0
      }
    }
           }
  }
}(),wysihtml5.dom.hasElementWithTagName=function() {
  function e(e) {
    return e._wysihtml5_identifier||(e._wysihtml5_identifier=n++)
  }
         var t= {},n=1;
  return function(n,i) {
    var o=e(n)+":"+i,r=t[o];
    return r||(r=t[o]=n.getElementsByTagName(i)),r.length>0
  }
}(),function(e) {
  function t(e) {
    return e._wysihtml5_identifier||(e._wysihtml5_identifier=i++)
  }
         var n= {},i=1;
  e.dom.hasElementWithClassName=function(i,o) {
    if(!e.browser.supportsNativeGetElementsByClassName())return!!i.querySelector("."+o);
    var r=t(i)+":"+o,s=n[r];
    return s||(s=n[r]=i.getElementsByClassName(o)),s.length>0
  }
}(wysihtml5),wysihtml5.dom.insert=function(e) {
return {after:
function(t){t.parentNode.insertBefore(e,t.nextSibling)},before:
function(t){t.parentNode.insertBefore(e,t)},into:
  function(t) {
    t.appendChild(e)
  }
         }
},wysihtml5.dom.insertCSS=function(e) {
return e=e.join("\n"), {into:
  function(t) {
    var n=t.head||t.getElementsByTagName("head")[0],i=t.createElement("style");
    i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),n&&n.appendChild(i)
  }
                         }
},wysihtml5.dom.observe=function(e,t,n) {
  t="string"==typeof t?[t]:t;
  for(var i,o,r=0,s=t.length; s>r; r++)o=t[r],e.addEventListener?e.addEventListener(o,n,!1):(i=function(t) {"target"in t||(t.target=t.srcElement),t.preventDefault=t.preventDefault||function() {this.returnValue=!1},t.stopPropagation=t.stopPropagation||function() {this.cancelBubble=!0},n.call(e,t)
  },e.attachEvent("on"+o,i));
return {stop:
  function() {
    for(var o,r=0,s=t.length; s>r; r++)o=t[r],e.removeEventListener?e.removeEventListener(o,n,!1):e.detachEvent("on"+o,i)
    }
         }
},wysihtml5.dom.parse=function() {
  function e(e,n,i,o) {
    wysihtml5.lang.object(u).merge(d).merge(n).get(),i=i||e.ownerDocument||document;
    var r,s,a,l=i.createDocumentFragment(),c="string"==typeof e;
    for(r=c?wysihtml5.dom.getAsDom(e,i):e; r.firstChild;)a=r.firstChild,r.removeChild(a),s=t(a,o),s&&l.appendChild(s);
    return r.innerHTML="",r.appendChild(l),c?wysihtml5.quirks.getCorrectInnerHTML(r):r
  }
  function t(e,n) {
    var i,o=e.nodeType,r=e.childNodes,s=r.length,c=a[o],d=0;
    if(i=c&&c(e),!i)return null;
    for(d=0; s>d; d++)newChild=t(r[d],n),newChild&&i.appendChild(newChild);
    return n&&i.childNodes.length<=1&&i.nodeName.toLowerCase()===l&&!i.attributes.length?i.firstChild:i
  }
  function n(e) {
    var t,n,o=u.tags,r=e.nodeName.toLowerCase(),s=e.scopeName;
    if(e._wysihtml5)return null;
    if(e._wysihtml5=1,"wysihtml5-temp"===e.className)return null;
    if(s&&"HTML"!=s&&(r=s+":"+r),"outerHTML"in e&&(wysihtml5.browser.autoClosesUnclosedTags()||"P"!==e.nodeName||"</p>"===e.outerHTML.slice(-4).toLowerCase()||(r="div")),r in o) {
      if(t=o[r],!t||t.remove)return null;
t="string"==typeof t? {rename_tag:t}:
        t
    } else {
      if(!e.firstChild)return null;
t= {rename_tag:
          l
         }
    }
       return n=e.ownerDocument.createElement(t.rename_tag||r),i(e,n,t),e=null,n
  }
  function i(e,t,n) {
    var i,r,s,a,l,d,h,m= {},g=n.set_class,y=n.add_class,v=n.set_attributes,b=n.check_attributes,w=u.classes,C=0,x=[],_=[],k=[],T=[];
    if(v&&(m=wysihtml5.lang.object(v).clone()),b)for(l in b)h=f[b[l]],h&&(d=h(o(e,l)),"string"==typeof d&&(m[l]=d));
    if(g&&x.push(g),y)for(l in y)h=p[y[l]],h&&(a=h(o(e,l)),"string"==typeof a&&x.push(a));
    for(w["_wysihtml5-temp-placeholder"]=1,T=e.getAttribute("class"),T&&(x=x.concat(T.split(c))),i=x.length; i>C; C++)s=x[C],w[s]&&_.push(s);
    for(r=_.length; r--;)s=_[r],wysihtml5.lang.array(k).contains(s)||k.unshift(s);
    k.length&&(m["class"]=k.join(" "));
    for(l in m)try {
        t.setAttribute(l,m[l])
      } catch(S) {} m.src&&("undefined"!=typeof m.width&&t.setAttribute("width",m.width),"undefined"!=typeof m.height&&t.setAttribute("height",m.height))
  }
  function o(e,t) {
    t=t.toLowerCase();
    var n=e.nodeName;
    if("IMG"==n&&"src"==t&&r(e)===!0)return e.src;
    if(h&&"outerHTML"in e) {
      var i=e.outerHTML.toLowerCase(),o=-1!=i.indexOf(" "+t+"=");
      return o?e.getAttribute(t):null
    }
           return e.getAttribute(t)
  }
  function r(e) {
    try {
      return e.complete&&!e.mozMatchesSelector(":-moz-broken")
    } catch(t) {
      if(e.complete&&"complete"===e.readyState)return!0
      }
  }
  function s(e) {
    return e.ownerDocument.createTextNode(e.data)
  }
       var a= {1:
               n,3:
                 s
              },l="span",c=/\s+/,d= {tags:
  {},classes:
  {}
                                    },u= {},h=!wysihtml5.browser.supportsGetAttributeCorrectly(),f= {url:
  function() {
    var e=/^https?:\/\//i;return function(t){return t&&t.match(e)?t.replace(e,function(e){return e.toLowerCase()}):null}}(),alt:function(){var e=/[^ a-z0-9_\-]/gi;return function(t){return t?t.replace(e,""):""}}(),numbers:function(){var e=/\D/g;return function(t){return t=(t||"").replace(e,""),t||null}}()},p={align_img:function(){var e={left:"wysiwyg-float-left",right:"wysiwyg-float-right"};return function(t){return e[String(t).toLowerCase()]}}(),align_text:function(){var e={left:"wysiwyg-text-align-left",right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"};return function(t){return e[String(t).toLowerCase()]}}(),clear_br:function(){var e={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"};return function(t){return e[String(t).toLowerCase()]}}(),size_font:function(){var e={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller","+":"wysiwyg-font-size-larger"};return function(t){return e[String(t).charAt(0)]}}()};return e}(),wysihtml5.dom.removeEmptyTextNodes=function(e){for(var t,n=wysihtml5.lang.array(e.childNodes).get(),i=n.length,o=0;i>o;o++)t=n[o],t.nodeType===wysihtml5.TEXT_NODE&&""===t.data&&t.parentNode.removeChild(t)},wysihtml5.dom.renameElement=function(e,t){for(var n,i=e.ownerDocument.createElement(t);n=e.firstChild;)i.appendChild(n);return wysihtml5.dom.copyAttributes(["align","className"]).from(e).to(i),e.parentNode.replaceChild(i,e),i},wysihtml5.dom.replaceWithChildNodes=function(e){if(e.parentNode){if(!e.firstChild)return e.parentNode.removeChild(e),void 0;for(var t=e.ownerDocument.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e),e=t=null}},function(e){function t(t){return"block"===e.getStyle("display").from(t)}function n(e){return"BR"===e.nodeName}function i(e){var t=e.ownerDocument.createElement("br");e.appendChild(t)}function o(e){if("MENU"===e.nodeName||"UL"===e.nodeName||"OL"===e.nodeName){var o,r,s,a,l,c=e.ownerDocument,d=c.createDocumentFragment(),u=e.previousElementSibling||e.previousSibling;for(u&&!t(u)&&i(d);l=e.firstChild;){for(r=l.lastChild;o=l.firstChild;)s=o===r,a=s&&!t(o)&&!n(o),d.appendChild(o),a&&i(d);
           l.parentNode.removeChild(l)
  }
         e.parentNode.replaceChild(d,e)
                                                                                                      }
}
                                        e.resolveList=o
}(wysihtml5.dom),function(e) {
  var t=document,n=["parent","top","opener","frameElement","frames","localStorage","globalStorage","sessionStorage","indexedDB"],i=["open","close","openDialog","showModalDialog","alert","confirm","prompt","openDatabase","postMessage","XMLHttpRequest","XDomainRequest"],o=["referrer","write","open","close"];
e.dom.Sandbox=Base.extend( {constructor:function(t,n) {
    this.callback=t||e.EMPTY_FUNCTION,this.config=e.lang.object( {}).merge(n).get(),this.iframe=this._createIframe()
},insertInto:function(e) {"string"==typeof e&&(e=t.getElementById(e)),e.appendChild(this.iframe)
},getIframe:function() {
    return this.iframe
},getWindow:function() {
    this._readyError()
},getDocument:function() {
    this._readyError()
},destroy:function() {
    var e=this.getIframe();
    e.parentNode.removeChild(e)
},_readyError:function() {
    throw new Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet")
},_createIframe:function() {
    var n=this,i=t.createElement("iframe");
return i.className="wysihtml5-sandbox",e.dom.setAttributes( {security:"restricted",allowtransparency:"true",frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(i),e.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(i.src="javascript:'<html></html>'"),i.onload=function() {i.onreadystatechange=i.onload=null,n._onLoadIframe(i)},i.onreadystatechange=function() {/loaded|complete/.test(i.readyState)&&(i.onreadystatechange=i.onload=null,n._onLoadIframe(i))},i
},_onLoadIframe:function(r) {
    if(e.dom.contains(t.documentElement,r)) {
var s=this,a=r.contentWindow,l=r.contentWindow.document,c=t.characterSet||t.charset||"utf-8",d=this._getHtml( {charset:c,stylesheets:this.config.stylesheets});
      if(l.open("text/html","replace"),l.write(d),l.close(),this.getWindow=function() {
      return r.contentWindow
    },this.getDocument=function() {
      return r.contentWindow.document
    },a.onerror=function(e,t,n) {
      throw new Error("wysihtml5.Sandbox: "+e,t,n)
      },!e.browser.supportsSandboxedIframes()) {
        var u,h;
        for(u=0,h=n.length; h>u; u++)this._unset(a,n[u]);
        for(u=0,h=i.length; h>u; u++)this._unset(a,i[u],e.EMPTY_FUNCTION);
        for(u=0,h=o.length; h>u; u++)this._unset(l,o[u]);
        this._unset(l,"cookie","",!0)
      }
      this.loaded=!0,setTimeout(function() {
        s.callback(s)
      },0)
    }
},_getHtml:function(t) {
    var n,i=t.stylesheets,o="",r=0;
    if(i="string"==typeof i?[i]:i)for(n=i.length; n>r; r++)o+='<link rel="stylesheet" href="'+i[r]+'">';
    return t.stylesheets=o,e.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(t)
},_unset:function(t,n,i,o) {
    try {
      t[n]=i
    } catch(r) {} try {
      t.__defineGetter__(n,function() {
        return i
      })
    } catch(r) {} if(o)try {
        t.__defineSetter__(n,function() {})
      } catch(r) {} if(!e.browser.crashesWhenDefineProperty(n))try {
var s= {get:
        function() {
          return i
        }
               };
        o&&(s.set=function() {}),Object.defineProperty(t,n,s)
      } catch(r) {}
  }
                             })
}(wysihtml5),function() {
var e= {className:"class"
         };
  wysihtml5.dom.setAttributes=function(t) {
return {on:
    function(n) {
      for(var i in t)n.setAttribute(e[i]||i,t[i])
      }
           }
  }
}(),wysihtml5.dom.setStyles=function(e) {
return {on:
  function(t) {
    var n=t.style;
    if("string"==typeof e)return n.cssText+=";"+e,void 0;
    for(var i in e)"float"===i?(n.cssFloat=e[i],n.styleFloat=e[i]):n[i]=e[i]
    }
         }
},function(e) {
  e.simulatePlaceholder=function(t,n,i) {
    var o="placeholder",r=function() {n.hasPlaceholderSet()&&n.clear(),e.removeClass(n.element,o)},s=function() {
      n.isEmpty()&&(n.setValue(i),e.addClass(n.element,o))
    };
    t.observe("set_placeholder",s).observe("unset_placeholder",r).observe("focus:composer",r).observe("paste:composer",r).observe("blur:composer",s),s()
  }
}(wysihtml5.dom),function(e) {
  var t=document.documentElement; "textContent"
  in t?(e.setTextContent=function(e,t) {
    e.textContent=t
  },e.getTextContent=function(e) {
    return e.textContent
  }):"innerText"in t?(e.setTextContent=function(e,t) {
    e.innerText=t
  },e.getTextContent=function(e) {
    return e.innerText
  }):(e.setTextContent=function(e,t) {
    e.nodeValue=t
  },e.getTextContent=function(e) {
    return e.nodeValue
  })
}(wysihtml5.dom),wysihtml5.quirks.cleanPastedHTML=function() {
  function e(e,n,i) {
    n=n||t,i=i||e.ownerDocument||document;
    var o,r,s,a,l,c="string"==typeof e,d=0;
    o=c?wysihtml5.dom.getAsDom(e,i):e;
    for(l in n)for(s=o.querySelectorAll(l),r=n[l],a=s.length; a>d; d++)r(s[d]);
    return s=e=n=null,c?o.innerHTML:o
  }
             var t= {"a u":
                       wysihtml5.dom.replaceWithChildNodes
                      };
  return e
}(),function(e) {
  var t=e.dom;
  e.quirks.ensureProperClearing=function() {
    var e=function() {
      var e=this;
      setTimeout(function() {
        var t=e.innerHTML.toLowerCase();
        ("<p>&nbsp;</p>"==t||"<p>&nbsp;</p><p>&nbsp;</p>"==t)&&(e.innerHTML="")
      },0)
    };
    return function(n) {
      t.observe(n.element,["cut","keydown"],e)
    }
  }(),e.quirks.ensureProperClearingOfLists=function() {
    var n=["OL","UL","MENU"],i=function(i,o) {
      if(o.firstChild&&e.lang.array(n).contains(o.firstChild.nodeName)) {
var r=t.getParentElement(i, {nodeName:n});
        if(r) {
          var s=r==o.firstChild;
          if(s) {
            var a=r.childNodes.length<=1;
            if(a) {
              var l=r.firstChild?""===r.firstChild.innerHTML:!0;
              l&&r.parentNode.removeChild(r)
            }
          }
        }
      }
    };
    return function(n) {
      t.observe(n.element,"keydown",function(t) {
        if(t.keyCode===e.BACKSPACE_KEY) {
          var o=n.selection.getSelectedNode();
          i(o,n.element)
        }
      })
    }
  }()
}(wysihtml5),function(e) {
  var t="%7E";
  e.quirks.getCorrectInnerHTML=function(n) {
    var i=n.innerHTML;
    if(-1===i.indexOf(t))return i;
    var o,r,s,a,l=n.querySelectorAll("[href*='~'], [src*='~']");
    for(a=0,s=l.length; s>a; a++)o=l[a].href||l[a].src,r=e.lang.string(o).replace("~").by(t),i=e.lang.string(i).replace(r).by(o);
    return i
  }
}(wysihtml5),function(e) {
  var t=e.dom,n=["LI","P","H1","H2","H3","H4","H5","H6"],i=["UL","OL","MENU"];
  e.quirks.insertLineBreakOnReturn=function(o) {
    function r(n) {
var i=t.getParentElement(n, {nodeName:["P","DIV"]},2);
      if(i) {
        var r=document.createTextNode(e.INVISIBLE_SPACE);
        t.insert(r).before(i),t.replaceWithChildNodes(i),o.selection.selectNode(r)
      }
    }
    function s(s) {
      var a=s.keyCode;
      if(!(s.shiftKey||a!==e.ENTER_KEY&&a!==e.BACKSPACE_KEY)) {
var l=(s.target,o.selection.getSelectedNode()),c=t.getParentElement(l, {nodeName:n},4);
        return c?("LI"!==c.nodeName||a!==e.ENTER_KEY&&a!==e.BACKSPACE_KEY?c.nodeName.match(/H[1-6]/)&&a===e.ENTER_KEY&&setTimeout(function() {
          r(o.selection.getSelectedNode())
        },0):setTimeout(function() {
          var e,n=o.selection.getSelectedNode();
n&&(e=t.getParentElement(n, {nodeName:i},2),e||r(n))
        },0),void 0):(a!==e.ENTER_KEY||e.browser.insertsLineBreaksOnReturn()||(o.commands.exec("insertLineBreak"),s.preventDefault()),void 0)
        }
    }
           t.observe(o.element.ownerDocument,"keydown",s)
  }
}(wysihtml5),function(e) {
  var t="wysihtml5-quirks-redraw";
  e.quirks.redraw=function(n) {
    e.dom.addClass(n,t),e.dom.removeClass(n,t);
    try {
      var i=n.ownerDocument;
      i.execCommand("italic",!1,null),i.execCommand("italic",!1,null)
    } catch(o) {}
  }
}(wysihtml5),function(e) {
  function t(e) {
    var t=0;
    if(e.parentNode)do t+=e.offsetTop||0,e=e.offsetParent;
      while(e);
    return t
  }
         var n=e.dom;
e.Selection=Base.extend( {constructor:function(e) {
    window.rangy.init(),this.editor=e,this.composer=e.composer,this.doc=this.composer.doc
},getBookmark:function() {
    var e=this.getRange();
    return e&&e.cloneRange()
},setBookmark:function(e) {
    e&&this.setSelection(e)
},setBefore:function(e) {
    var t=rangy.createRange(this.doc);
    return t.setStartBefore(e),t.setEndBefore(e),this.setSelection(t)
},setAfter:function(e) {
    var t=rangy.createRange(this.doc);
    return t.setStartAfter(e),t.setEndAfter(e),this.setSelection(t)
},selectNode:function(t) {
    var i=rangy.createRange(this.doc),o=t.nodeType===e.ELEMENT_NODE,r="canHaveHTML"in t?t.canHaveHTML:"IMG"!==t.nodeName,s=o?t.innerHTML:t.data,a=""===s||s===e.INVISIBLE_SPACE,l=n.getStyle("display").from(t),c="block"===l||"list-item"===l;
    if(a&&o&&r)try {
        t.innerHTML=e.INVISIBLE_SPACE
      } catch(d) {} r?i.selectNodeContents(t):i.selectNode(t),r&&a&&o?i.collapse(c):r&&a&&(i.setStartAfter(t),i.setEndAfter(t)),this.setSelection(i)
},getSelectedNode:function(e) {
    var t,n;
    return e&&this.doc.selection&&"Control"===this.doc.selection.type&&(n=this.doc.selection.createRange(),n&&n.length)?n.item(0):(t=this.getSelection(this.doc),t.focusNode===t.anchorNode?t.focusNode:(n=this.getRange(this.doc),n?n.commonAncestorContainer:this.doc.body))
},executeAndRestore:function(t,n) {
    var i,o=this.doc.body,r=n&&o.scrollTop,s=n&&o.scrollLeft,a="_wysihtml5-temp-placeholder",l='<span class="'+a+'">'+e.INVISIBLE_SPACE+"</span>",c=this.getRange(this.doc);
    if(!c)return t(o,o),void 0;
    var d=c.createContextualFragment(l);
    c.insertNode(d);
    try {
      t(c.startContainer,c.endContainer)
    } catch(u) {
      setTimeout(function() {
        throw u
      },0)
    }
    caretPlaceholder=this.doc.querySelector("."+a),caretPlaceholder?(i=rangy.createRange(this.doc),i.selectNode(caretPlaceholder),i.deleteContents(),this.setSelection(i)):o.focus(),n&&(o.scrollTop=r,o.scrollLeft=s);
    try {
      caretPlaceholder.parentNode.removeChild(caretPlaceholder)
    } catch(h) {}
},executeAndRestoreSimple:function(e) {
    var t,n,i,o,r,s=this.getRange(),a=this.doc.body;
    if(!s)return e(a,a),void 0;
o=s.getNodes([3]),n=o[0]||s.startContainer,i=o[o.length-1]||s.endContainer,r= {collapsed:
                    s.collapsed,startContainer:
                    n,startOffset:
                    n===s.startContainer?s.startOffset:0,endContainer:i,endOffset:i===s.endContainer?s.endOffset:i.length
                                                                                  };
    try {
      e(s.startContainer,s.endContainer)
    } catch(l) {
      setTimeout(function() {
        throw l
      },0)
    }
    t=rangy.createRange(this.doc);
    try {
      t.setStart(r.startContainer,r.startOffset)
    } catch(c) {} try {
      t.setEnd(r.endContainer,r.endOffset)
    } catch(d) {} try {
      this.setSelection(t)
    } catch(u) {}
},insertHTML:function(e) {
    var t=rangy.createRange(this.doc),n=t.createContextualFragment(e),i=n.lastChild;
    this.insertNode(n),i&&this.setAfter(i)
},insertNode:function(e) {
    var t=this.getRange();
    t&&t.insertNode(e)
},surround:function(e) {
    var t=this.getRange();
    if(t)try {
        t.surroundContents(e),this.selectNode(e)
      } catch(n) {
        e.appendChild(t.extractContents()),t.insertNode(e)
      }
},scrollIntoView:function() {
    var n,i=this.doc,o=i.documentElement.scrollHeight>i.documentElement.offsetHeight,r=i._wysihtml5ScrollIntoViewElement=i._wysihtml5ScrollIntoViewElement||function() {
      var t=i.createElement("span");
      return t.innerHTML=e.INVISIBLE_SPACE,t
    }();
    o&&(this.insertNode(r),n=t(r),r.parentNode.removeChild(r),n>i.body.scrollTop&&(i.body.scrollTop=n))
},selectLine:function() {
    e.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()
},_selectLine_W3C:function() {
    var e=this.doc.defaultView,t=e.getSelection();
    t.modify("extend","left","lineboundary"),t.modify("extend","right","lineboundary")
},_selectLine_MSIE:function() {
    var e,t,n,i,o,r=this.doc.selection.createRange(),s=r.boundingTop,a=(r.boundingHeight,this.doc.body.scrollWidth);
    if(r.moveToPoint) {
      for(0===s&&(n=this.doc.createElement("span"),this.insertNode(n),s=n.offsetTop,n.parentNode.removeChild(n)),s+=1,i=-10; a>i; i+=2)try {
          r.moveToPoint(i,s);
          break
        } catch(l) {} for(e=s,t=this.doc.selection.createRange(),o=a; o>=0; o--)try {
          t.moveToPoint(o,e);
          break
        } catch(c) {} r.setEndPoint("EndToEnd",t),r.select()
    }
},getText:function() {
    var e=this.getSelection();
    return e?e.toString():""
},getNodes:function(e,t) {
    var n=this.getRange();
    return n?n.getNodes([e],t):[]
},getRange:function() {
    var e=this.getSelection();
    return e&&e.rangeCount&&e.getRangeAt(0)
},getSelection:function() {
    return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)
},setSelection:function(e) {
    var t=this.doc.defaultView||this.doc.parentWindow,n=rangy.getSelection(t);
    return n.setSingleRange(e)
  }
                           })
}(wysihtml5),function(e,t) {
  function n(e,t,n) {
    if(!e.className)return!1;
    var i=e.className.match(n)||[];
    return i[i.length-1]===t
  }
  function i(e,t,n) {
    e.className?(o(e,n),e.className+=" "+t):e.className=t
  }
  function o(e,t) {
    e.className&&(e.className=e.className.replace(t,""))
  }
  function r(e,t) {
    return e.className.replace(f," ")==t.className.replace(f," ")
  }
  function s(e) {
    for(var t=e.parentNode; e.firstChild;)t.insertBefore(e.firstChild,e);
    t.removeChild(e)
  }
  function a(e,t) {
    if(e.attributes.length!=t.attributes.length)return!1;
    for(var n,i,o,r=0,s=e.attributes.length; s>r; ++r)if(n=e.attributes[r],o=n.name,"class"!=o) {
        if(i=t.attributes.getNamedItem(o),n.specified!=i.specified)return!1;
        if(n.specified&&n.nodeValue!==i.nodeValue)return!1
        }
        return!0
  }
  function l(e,n) {
return t.dom.isCharacterDataNode(e)?0==n?!!e.previousSibling:n==e.length?!!e.nextSibling:!0:n>0&&n<e.childNodes.length
  }
  function c(e,n,i) {
    var o;
    if(t.dom.isCharacterDataNode(n)&&(0==i?(i=t.dom.getNodeIndex(n),n=n.parentNode):i==n.length?(i=t.dom.getNodeIndex(n)+1,n=n.parentNode):o=t.dom.splitDataNode(n,i)),!o) {
      o=n.cloneNode(!1),o.id&&o.removeAttribute("id");
      for(var r; r=n.childNodes[i];)o.appendChild(r);
      t.dom.insertAfter(o,n)
    }
    return n==e?o:c(e,o.parentNode,t.dom.getNodeIndex(o))
  }
  function d(t) {
    this.isElementMerge=t.nodeType==e.ELEMENT_NODE,this.firstTextNode=this.isElementMerge?t.lastChild:t,this.textNodes=[this.firstTextNode]
  }
  function u(e,t,n,i) {
    this.tagNames=e||[h],this.cssClass=t||"",this.similarClassRegExp=n,this.normalize=i,this.applyToAnyTagName=!1
  }
                                     var h="span",f=/\s+/g;
d.prototype= {doMerge:
function(){for(var e,t,n,i=[],o=0,r=this.textNodes.length; r>o; ++o)e=this.textNodes[o],t=e.parentNode,i[o]=e.data,o&&(t.removeChild(e),t.hasChildNodes()||t.parentNode.removeChild(t)); return this.firstTextNode.data=n=i.join(""),n},getLength:
function(){for(var e=this.textNodes.length,t=0; e--;)t+=this.textNodes[e].length; return t},toString:
  function() {
    for(var e=[],t=0,n=this.textNodes.length; n>t; ++t)e[t]="'"+this.textNodes[t].data+"'";
    return"[Merge("+e.join(",")+")]"
  }
             },u.prototype= {getAncestorWithClass:
  function(i) {
    for(var o; i;) {
      if(o=this.cssClass?n(i,this.cssClass,this.similarClassRegExp):!0,i.nodeType==e.ELEMENT_NODE&&t.dom.arrayContains(this.tagNames,i.tagName.toLowerCase())&&o)return i;
      i=i.parentNode
    }
      return!1
},postApply:
  function(e,t) {
    for(var n,i,o,r=e[0],s=e[e.length-1],a=[],l=r,c=s,u=0,h=s.length,f=0,p=e.length; p>f; ++f)i=e[f],o=this.getAdjacentMergeableTextNode(i.parentNode,!1),o?(n||(n=new d(o),a.push(n)),n.textNodes.push(i),i===r&&(l=n.firstTextNode,u=l.length),i===s&&(c=n.firstTextNode,h=n.getLength())):n=null;
    var m=this.getAdjacentMergeableTextNode(s.parentNode,!0);
    if(m&&(n||(n=new d(s),a.push(n)),n.textNodes.push(m)),a.length) {
      for(f=0,p=a.length; p>f; ++f)a[f].doMerge();
      t.setStart(l,u),t.setEnd(c,h)
    }
},getAdjacentMergeableTextNode:
  function(t,n) {
    var i,o=t.nodeType==e.TEXT_NODE,r=o?t.parentNode:t,s=n?"nextSibling":"previousSibling";
    if(o) {
      if(i=t[s],i&&i.nodeType==e.TEXT_NODE)return i
      } else if(i=r[s],i&&this.areElementsMergeable(t,i))return i[n?"firstChild":"lastChild"];
    return null
},areElementsMergeable:
function(e,n){return t.dom.arrayContains(this.tagNames,(e.tagName||"").toLowerCase())&&t.dom.arrayContains(this.tagNames,(n.tagName||"").toLowerCase())&&r(e,n)&&a(e,n)},createContainer:
function(e){var t=e.createElement(this.tagNames[0]); return this.cssClass&&(t.className=this.cssClass),t},applyToTextNode:
  function(e) {
    var n=e.parentNode;
    if(1==n.childNodes.length&&t.dom.arrayContains(this.tagNames,n.tagName.toLowerCase()))this.cssClass&&i(n,this.cssClass,this.similarClassRegExp);
    else {
      var o=this.createContainer(t.dom.getDocument(e));
      e.parentNode.insertBefore(o,e),o.appendChild(e)
    }
},isRemovable:
function(n){return t.dom.arrayContains(this.tagNames,n.tagName.toLowerCase())&&e.lang.string(n.className).trim()==this.cssClass},undoToTextNode:
  function(e,t,n) {
    if(!t.containsNode(n)) {
      var i=t.cloneRange();
      i.selectNode(n),i.isPointInRange(t.endContainer,t.endOffset)&&l(t.endContainer,t.endOffset)&&(c(n,t.endContainer,t.endOffset),t.setEndAfter(n)),i.isPointInRange(t.startContainer,t.startOffset)&&l(t.startContainer,t.startOffset)&&(n=c(n,t.startContainer,t.startOffset))
    }
    this.similarClassRegExp&&o(n,this.similarClassRegExp),this.isRemovable(n)&&s(n)
},applyToRange:
  function(t) {
    var n=t.getNodes([e.TEXT_NODE]);
    if(!n.length)try {
        var i=this.createContainer(t.endContainer.ownerDocument);
        return t.surroundContents(i),this.selectNode(t,i),void 0
      } catch(o) {} if(t.splitBoundaries(),n=t.getNodes([e.TEXT_NODE]),n.length) {
      for(var r,s=0,a=n.length; a>s; ++s)r=n[s],this.getAncestorWithClass(r)||this.applyToTextNode(r);
      t.setStart(n[0],0),r=n[n.length-1],t.setEnd(r,r.length),this.normalize&&this.postApply(n,t)
    }
},undoToRange:
function(t){var n,i,o=t.getNodes([e.TEXT_NODE]); if(o.length)t.splitBoundaries(),o=t.getNodes([e.TEXT_NODE]); else{var r=t.endContainer.ownerDocument,s=r.createTextNode(e.INVISIBLE_SPACE); t.insertNode(s),t.selectNode(s),o=[s]} for(var a=0,l=o.length; l>a; ++a)n=o[a],i=this.getAncestorWithClass(n),i&&this.undoToTextNode(n,t,i); 1==l?this.selectNode(t,o[0]):(t.setStart(o[0],0),n=o[o.length-1],t.setEnd(n,n.length),this.normalize&&this.postApply(o,t))},selectNode:
function(t,n){var i=n.nodeType===e.ELEMENT_NODE,o="canHaveHTML"in n?n.canHaveHTML:!0,r=i?n.innerHTML:n.data,s=""===r||r===e.INVISIBLE_SPACE; if(s&&i&&o)try{n.innerHTML=e.INVISIBLE_SPACE} catch(a) {} t.selectNodeContents(n),s&&i?t.collapse(!1):s&&(t.setStartAfter(n),t.setEndAfter(n))},getTextSelectedByRange:
function(e,t){var n=t.cloneRange(); n.selectNodeContents(e); var i=n.intersection(t),o=i?i.toString():""; return n.detach(),o},isAppliedToRange:
  function(t) {
    var n,i=[],o=t.getNodes([e.TEXT_NODE]);
    if(!o.length)return n=this.getAncestorWithClass(t.startContainer),n?[n]:!1;
    for(var r,s=0,a=o.length; a>s; ++s) {
      if(r=this.getTextSelectedByRange(o[s],t),n=this.getAncestorWithClass(o[s]),""!=r&&!n)return!1;
      i.push(n)
    }
    return i
},toggleRange:
  function(e) {
    this.isAppliedToRange(e)?this.undoToRange(e):this.applyToRange(e)
  }
                              },e.selection.HTMLApplier=u
}(wysihtml5,rangy),wysihtml5.Commands=Base.extend( {constructor:function(e) {
  this.editor=e,this.composer=e.composer,this.doc=this.composer.doc
},support:function(e) {
  return wysihtml5.browser.supportsCommand(this.doc,e)
},exec:function(e,t) {
  var n=wysihtml5.commands[e],i=wysihtml5.lang.array(arguments).get(),o=n&&n.exec,r=null;
  if(this.editor.fire("beforecommand:composer"),o)i.unshift(this.composer),r=o.apply(n,i);
  else try {
      r=this.doc.execCommand(e,!1,t)
    } catch(s) {} return this.editor.fire("aftercommand:composer"),r
},state:function(e) {
  var t=wysihtml5.commands[e],n=wysihtml5.lang.array(arguments).get(),i=t&&t.state;
  if(i)return n.unshift(this.composer),i.apply(t,n);
  try {
    return this.doc.queryCommandState(e)
  } catch(o) {
    return!1
  }
},value:function(e) {
  var t=wysihtml5.commands[e],n=t&&t.value;
  if(n)return n.call(t,this.composer,e);
  try {
    return this.doc.queryCommandValue(e)
  } catch(i) {
    return null
  }
}
}),function(e) {
  var t;
e.commands.bold= {exec:
function(t,n){return e.commands.formatInline.exec(t,n,"b")},state:
function(t,n){return e.commands.formatInline.state(t,n,"b")},value:
  function() {
    return t
  }
                   }
}(wysihtml5),function(e) {
  function t(e,t) {
    for(var n,i,o,s=t.length,a=0; s>a; a++)n=t[a],i=r.getParentElement(n, {nodeName:"code"}),o=r.getTextContent(n),o.match(r.autoLink.URL_REG_EXP)&&!i?i=r.renameElement(n,"code"):r.replaceWithChildNodes(n)
    }
  function n(t,n) {
    var s,a,l,c,d,u,h,f,p,m=t.doc,g="_wysihtml5-temp-"+ +new Date,y=/non-matching-class/g,v=0;
    for(e.commands.formatInline.exec(t,i,o,g,y),a=m.querySelectorAll(o+"."+g),s=a.length; s>v; v++) {
      l=a[v],l.removeAttribute("class");
      for(p in n)l.setAttribute(p,n[p])
      }
    u=l,1===s&&(h=r.getTextContent(l),c=!!l.querySelector("*"),d=""===h||h===e.INVISIBLE_SPACE,!c&&d&&(r.setTextContent(l,n.text||l.href),f=m.createTextNode(" "),t.selection.setAfter(l),t.selection.insertNode(f),u=f)),t.selection.setAfter(u)
  }
          var i,o="A",r=e.dom;
e.commands.createLink= {exec:
  function(e,i,o) {
    var r=this.state(e,i);
    r?e.selection.executeAndRestore(function() {
      t(e,r)
}):(o="object"==typeof o?o: {href:o},n(e,o))
},state:
function(t,n){return e.commands.formatInline.state(t,n,"A")},value:
  function() {
    return i
  }
                         }
}(wysihtml5),function(e) {
  var t,n=/wysiwyg-font-size-[a-z\-]+/g;
e.commands.fontSize= {exec:
function(t,i,o){return e.commands.formatInline.exec(t,i,"span","wysiwyg-font-size-"+o,n)},state:
function(t,i,o){return e.commands.formatInline.state(t,i,"span","wysiwyg-font-size-"+o,n)},value:
  function() {
    return t
  }
                       }
}(wysihtml5),function(e) {
  var t,n=/wysiwyg-color-[a-z]+/g;
e.commands.foreColor= {exec:
function(t,i,o){return e.commands.formatInline.exec(t,i,"span","wysiwyg-color-"+o,n)},state:
function(t,i,o){return e.commands.formatInline.state(t,i,"span","wysiwyg-color-"+o,n)},value:
  function() {
    return t
  }
                        }
}(wysihtml5),function(e) {
  function t(e,t,i) {
    e.className?(n(e,i),e.className+=" "+t):e.className=t
  }
  function n(e,t) {
    e.className=e.className.replace(t,"")
  }
  function i(t) {
    return t.nodeType===e.TEXT_NODE&&!e.lang.string(t.data).trim()
  }
  function o(e) {
    for(var t=e.previousSibling; t&&i(t);)t=t.previousSibling;
    return t
  }
  function r(e) {
    for(var t=e.nextSibling; t&&i(t);)t=t.nextSibling;
    return t
  }
  function s(e) {
    var t=e.ownerDocument,n=r(e),i=o(e);
    n&&!d(n)&&e.parentNode.insertBefore(t.createElement("br"),n),i&&!d(i)&&e.parentNode.insertBefore(t.createElement("br"),e)
  }
  function a(e) {
    var t=r(e),n=o(e);
    t&&c(t)&&t.parentNode.removeChild(t),n&&c(n)&&n.parentNode.removeChild(n)
  }
  function l(e) {
    var t=e.lastChild;
    t&&c(t)&&t.parentNode.removeChild(t)
  }
  function c(e) {
    return"BR"===e.nodeName
  }
  function d(e) {
    return c(e)?!0:"block"===m.getStyle("display").from(e)?!0:!1
  }
  function u(t,n,i,o) {
    if(o)var r=m.observe(t,"DOMNodeInserted",function(t) {
      var n,i=t.target;
      i.nodeType===e.ELEMENT_NODE&&(n=m.getStyle("display").from(i),"inline"!==n.substr(0,6)&&(i.className+=" "+o))
    });
    t.execCommand(n,!1,i),r&&r.stop()
  }
  function h(e,t) {
    e.selection.selectLine(),e.selection.surround(t),a(t),l(t),e.selection.selectNode(t)
  }
  function f(t) {
    return!!e.lang.string(t.className).trim()
  }
        var p,m=e.dom,g="DIV",y=["H1","H2","H3","H4","H5","H6","P","BLOCKQUOTE",g];
e.commands.formatBlock= {exec:
  function(i,o,r,a,l) {
    var c,d=i.doc,p=this.state(i,o,r,a,l);
    return r="string"==typeof r?r.toUpperCase():r,p?(i.selection.executeAndRestoreSimple(function() {
      l&&n(p,l);
      var e=f(p);
      e||p.nodeName!==(r||g)?e&&m.renameElement(p,g):(s(p),m.replaceWithChildNodes(p))
}),void 0):(null===r||e.lang.array(y).contains(r))&&(c=i.selection.getSelectedNode(),p=m.getParentElement(c, {nodeName:y}))?(i.selection.executeAndRestoreSimple(function() {
      r&&(p=m.renameElement(p,r)),a&&t(p,a,l)
    }),void 0):i.commands.support(o)?(u(d,o,r||g,a),void 0):(p=d.createElement(r||g),a&&(p.className=a),h(i,p),void 0)
},state:
function(e,t,n,i,o){n="string"==typeof n?n.toUpperCase():n; var r=e.selection.getSelectedNode(); return m.getParentElement(r,{nodeName:n,className:i,classRegExp:o})},value:
  function() {
    return p
  }
                          }
}(wysihtml5),function(e) {
  function t(e) {
    var t=o[e];
    return t?[e.toLowerCase(),t.toLowerCase()]:[e.toLowerCase()]
  }
  function n(n,i,o) {
    var s=n+":"+i;
    return r[s]||(r[s]=new e.selection.HTMLApplier(t(n),i,o,!0)),r[s]
  }
       var i,o= {strong:"b"
                 ,em:"i"
                 ,b:"strong"
                 ,i:"em"
                  },r= {};
e.commands.formatInline= {exec:
function(e,t,i,o,r){var s=e.selection.getRange(); return s?(n(i,o,r).toggleRange(s),e.selection.setSelection(s),void 0):!1},state:
function(t,i,r,s,a){var l,c=t.doc,d=o[r]||r; return e.dom.hasElementWithTagName(c,r)||e.dom.hasElementWithTagName(c,d)?s&&!e.dom.hasElementWithClassName(c,s)?!1:(l=t.selection.getRange(),l?n(r,s,a).isAppliedToRange(l):!1):!1},value:
  function() {
    return i
  }
                           }
}(wysihtml5),function(e) {
  var t;
e.commands.insertHTML= {exec:
function(e,t,n){e.commands.support(t)?e.doc.execCommand(t,!1,n):e.selection.insertHTML(n)},state:
function(){return!1},value:
  function() {
    return t
  }
                         }
}(wysihtml5),function(e) {
  var t="IMG";
e.commands.insertImage= {exec:
function(n,i,o){o="object"==typeof o?o:{src:o}; var r,s,a,l=n.doc,c=this.state(n); if(c)return n.selection.setBefore(c),a=c.parentNode,a.removeChild(c),e.dom.removeEmptyTextNodes(a),"A"!==a.nodeName||a.firstChild||(n.selection.setAfter(a),a.parentNode.removeChild(a)),e.quirks.redraw(n.element),void 0; c=l.createElement(t); for(s in o)c[s]=o[s]; n.selection.insertNode(c),e.browser.hasProblemsSettingCaretAfterImg()?(r=l.createTextNode(e.INVISIBLE_SPACE),n.selection.insertNode(r),n.selection.setAfter(r)):n.selection.setAfter(c)},state:
  function(n) {
    var i,o,r,s=n.doc;
    return e.dom.hasElementWithTagName(s,t)?(i=n.selection.getSelectedNode())?i.nodeName===t?i:i.nodeType!==e.ELEMENT_NODE?!1:(o=n.selection.getText(),(o=e.lang.string(o).trim())?!1:(r=n.selection.getNodes(e.ELEMENT_NODE,function(e) {
      return"IMG"===e.nodeName
    }),1!==r.length?!1:r[0])):!1:!1
},value:
  function(e) {
    var t=this.state(e);
    return t&&t.src
  }
                          }
}(wysihtml5),function(e) {
  var t,n="<br>"+(e.browser.needsSpaceAfterLineBreak()?" ":"");
e.commands.insertLineBreak= {exec:
function(t,i){t.commands.support(i)?(t.doc.execCommand(i,!1,null),e.browser.autoScrollsToCaret()||t.selection.scrollIntoView()):t.commands.exec("insertHTML",n)},state:
function(){return!1},value:
  function() {
    return t
  }
                              }
}(wysihtml5),function(e) {
  var t;
e.commands.insertOrderedList= {exec:
  function(t,n) {
var i,o,r=t.doc,s=t.selection.getSelectedNode(),a=e.dom.getParentElement(s, {nodeName:"OL"}),l=e.dom.getParentElement(s, {nodeName:"UL"}),c="_wysihtml5-temp-"+(new Date).getTime();
    return t.commands.support(n)?(r.execCommand(n,!1,null),void 0):(a?t.selection.executeAndRestoreSimple(function() {
      e.dom.resolveList(a)
    }):l?t.selection.executeAndRestoreSimple(function() {
      e.dom.renameElement(l,"ol")
    }):(t.commands.exec("formatBlock","div",c),o=r.querySelector("."+c),i=""===o.innerHTML||o.innerHTML===e.INVISIBLE_SPACE,t.selection.executeAndRestoreSimple(function() {
      a=e.dom.convertToList(o,"ol")
    }),i&&t.selection.selectNode(a.querySelector("li"))),void 0)
},state:
function(t){var n=t.selection.getSelectedNode(); return e.dom.getParentElement(n,{nodeName:"OL"})},value:
  function() {
    return t
  }
                                }
}(wysihtml5),function(e) {
  var t;
e.commands.insertUnorderedList= {exec:
  function(t,n) {
var i,o,r=t.doc,s=t.selection.getSelectedNode(),a=e.dom.getParentElement(s, {nodeName:"UL"}),l=e.dom.getParentElement(s, {nodeName:"OL"}),c="_wysihtml5-temp-"+(new Date).getTime();
    return t.commands.support(n)?(r.execCommand(n,!1,null),void 0):(a?t.selection.executeAndRestoreSimple(function() {
      e.dom.resolveList(a)
    }):l?t.selection.executeAndRestoreSimple(function() {
      e.dom.renameElement(l,"ul")
    }):(t.commands.exec("formatBlock","div",c),o=r.querySelector("."+c),i=""===o.innerHTML||o.innerHTML===e.INVISIBLE_SPACE,t.selection.executeAndRestoreSimple(function() {
      a=e.dom.convertToList(o,"ul")
    }),i&&t.selection.selectNode(a.querySelector("li"))),void 0)
},state:
function(t){var n=t.selection.getSelectedNode(); return e.dom.getParentElement(n,{nodeName:"UL"})},value:
  function() {
    return t
  }
                                  }
}(wysihtml5),function(e) {
  var t;
e.commands.italic= {exec:
function(t,n){return e.commands.formatInline.exec(t,n,"i")},state:
function(t,n){return e.commands.formatInline.state(t,n,"i")},value:
  function() {
    return t
  }
                     }
}(wysihtml5),function(e) {
  var t,n="wysiwyg-text-align-center",i=/wysiwyg-text-align-[a-z]+/g;
e.commands.justifyCenter= {exec:
function(t){return e.commands.formatBlock.exec(t,"formatBlock",null,n,i)},state:
function(t){return e.commands.formatBlock.state(t,"formatBlock",null,n,i)},value:
  function() {
    return t
  }
                            }
}(wysihtml5),function(e) {
  var t,n="wysiwyg-text-align-left",i=/wysiwyg-text-align-[a-z]+/g;
e.commands.justifyLeft= {exec:
function(t){return e.commands.formatBlock.exec(t,"formatBlock",null,n,i)},state:
function(t){return e.commands.formatBlock.state(t,"formatBlock",null,n,i)},value:
  function() {
    return t
  }
                          }
}(wysihtml5),function(e) {
  var t,n="wysiwyg-text-align-right",i=/wysiwyg-text-align-[a-z]+/g;
e.commands.justifyRight= {exec:
function(t){return e.commands.formatBlock.exec(t,"formatBlock",null,n,i)},state:
function(t){return e.commands.formatBlock.state(t,"formatBlock",null,n,i)},value:
  function() {
    return t
  }
                           }
}(wysihtml5),function(e) {
  var t;
e.commands.underline= {exec:
function(t,n){return e.commands.formatInline.exec(t,n,"u")},state:
function(t,n){return e.commands.formatInline.state(t,n,"u")},value:
  function() {
    return t
  }
                        }
}(wysihtml5),function(e) {
  function t(e) {
    for(var t; t=e.querySelector("._wysihtml5-temp");)t.parentNode.removeChild(t)
    }
  var n=90,i=89,o=8,r=46,s=40,a='<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+e.INVISIBLE_SPACE+"</span>",l='<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+e.INVISIBLE_SPACE+"</span>",c=e.dom;
e.UndoManager=e.lang.Dispatcher.extend( {constructor:function(e) {
    this.editor=e,this.composer=e.composer,this.element=this.composer.element,this.history=[this.composer.getValue()],this.position=1,this.composer.commands.support("insertHTML")&&this._observe()
},_observe:function() {
    var s,d=this,u=this.composer.sandbox.getDocument();
    if(c.observe(this.element,"keydown",function(e) {
    if(!e.altKey&&(e.ctrlKey||e.metaKey)) {
        var t=e.keyCode,o=t===n&&!e.shiftKey,r=t===n&&e.shiftKey||t===i;
        o?(d.undo(),e.preventDefault()):r&&(d.redo(),e.preventDefault())
      }
    }),c.observe(this.element,"keydown",function(e) {
      var t=e.keyCode;
      t!==s&&(s=t,(t===o||t===r)&&d.transact())
    }),e.browser.hasUndoInContextMenu()) {
      var h,f,p=function() {
        t(u),clearInterval(h)
      };
      c.observe(this.element,"contextmenu",function() {
        p(),d.composer.selection.executeAndRestoreSimple(function() {
          d.element.lastChild&&d.composer.selection.setAfter(d.element.lastChild),u.execCommand("insertHTML",!1,a),u.execCommand("insertHTML",!1,l),u.execCommand("undo",!1,null)
        }),h=setInterval(function() {
          u.getElementById("_wysihtml5-redo")?(p(),d.redo()):u.getElementById("_wysihtml5-undo")||(p(),d.undo())
        },400),f||(f=!0,c.observe(document,"mousedown",p),c.observe(u,["mousedown","paste","cut","copy"],p))
      })
    }
    this.editor.observe("newword:composer",function() {
      d.transact()
    }).observe("beforecommand:composer",function() {
      d.transact()
    })
},transact:function() {
    var e=this.history[this.position-1],t=this.composer.getValue();
    if(t!=e) {
      var n=this.history.length=this.position;
      n>s&&(this.history.shift(),this.position--),this.position++,this.history.push(t)
    }
},undo:function() {
    this.transact(),this.position<=1||(this.set(this.history[--this.position-1]),this.editor.fire("undo:composer"))
},redo:function() {
    this.position>=this.history.length||(this.set(this.history[++this.position-1]),this.editor.fire("redo:composer"))
},set:function(e) {
    this.composer.setValue(e),this.editor.focus(!0)
  }
                                          })
}(wysihtml5),wysihtml5.views.View=Base.extend( {constructor:function(e,t,n) {
  this.parent=e,this.element=t,this.config=n,this._observeViewChange()
},_observeViewChange:function() {
  var e=this;
  this.parent.observe("beforeload",function() {
    e.parent.observe("change_view",function(t) {
      t===e.name?(e.parent.currentView=e,e.show(),setTimeout(function() {
        e.focus()
      },0)):e.hide()
      })
  })
},focus:function() {
  if(this.element.ownerDocument.querySelector(":focus")!==this.element)try {
      this.element.focus()
    } catch(e) {}
},hide:function() {
  this.element.style.display="none"
},show:function() {
  this.element.style.display=""
},disable:function() {
  this.element.setAttribute("disabled","disabled")
},enable:function() {
  this.element.removeAttribute("disabled")
}
}),function(e) {
  var t=e.dom,n=e.browser;
e.views.Composer=e.views.View.extend( {name:"composer",CARET_HACK:"<br>",constructor:function(e,t,n) {
    this.base(e,t,n),this.textarea=this.parent.textarea,this._initSandbox()
},clear:function() {
    this.element.innerHTML=n.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK
},getValue:function(t) {
    var n=this.isEmpty()?"":e.quirks.getCorrectInnerHTML(this.element);
    return t&&(n=this.parent.parse(n)),n=e.lang.string(n).replace(e.INVISIBLE_SPACE).by("")
},setValue:function(e,t) {
    t&&(e=this.parent.parse(e)),this.element.innerHTML=e
},show:function() {
    this.iframe.style.display=this._displayStyle||"",this.disable(),this.enable()
},hide:function() {
    this._displayStyle=t.getStyle("display").from(this.iframe),"none"===this._displayStyle&&(this._displayStyle=null),this.iframe.style.display="none"
},disable:function() {
    this.element.removeAttribute("contentEditable"),this.base()
},enable:function() {
    this.element.setAttribute("contentEditable","true"),this.base()
},focus:function(t) {
    e.browser.doesAsyncFocus()&&this.hasPlaceholderSet()&&this.clear(),this.base();
    var n=this.element.lastChild;
    t&&n&&("BR"===n.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))
},getTextContent:function() {
    return t.getTextContent(this.element)
},hasPlaceholderSet:function() {
    return this.getTextContent()==this.textarea.element.getAttribute("placeholder")
},isEmpty:function() {
    var e=this.element.innerHTML,t="blockquote, ul, ol, img, embed, object, table, iframe, svg, video, audio, button, input, select, textarea";
    return""===e||e===this.CARET_HACK||this.hasPlaceholderSet()||""===this.getTextContent()&&!this.element.querySelector(t)
},_initSandbox:function() {
    var e=this;
    this.sandbox=new t.Sandbox(function() {
      e._create()
}, {stylesheets:this.config.stylesheets}),this.iframe=this.sandbox.getIframe();
    var n=document.createElement("input");
    n.type="hidden",n.name="_wysihtml5_mode",n.value=1;
    var i=this.textarea.element;
    t.insert(this.iframe).after(i),t.insert(n).after(i)
},_create:function() {
    var i=this;
    this.doc=this.sandbox.getDocument(),this.element=this.doc.body,this.textarea=this.parent.textarea,this.element.innerHTML=this.textarea.getValue(!0),this.enable(),this.selection=new e.Selection(this.parent),this.commands=new e.Commands(this.parent),t.copyAttributes(["className","spellcheck","title","lang","dir","accessKey"]).from(this.textarea.element).to(this.element),t.addClass(this.element,this.config.composerClassName),this.config.style&&this.style(),this.observe();
    var o=this.config.name;
    o&&(t.addClass(this.element,o),t.addClass(this.iframe,o));
    var r="string"==typeof this.config.placeholder?this.config.placeholder:this.textarea.element.getAttribute("placeholder");
    r&&t.simulatePlaceholder(this.parent,this,r),this.commands.exec("styleWithCSS",!1),this._initAutoLinking(),this._initObjectResizing(),this._initUndoManager(),(this.textarea.element.hasAttribute("autofocus")||document.querySelector(":focus")==this.textarea.element)&&setTimeout(function() {
      i.focus()
    },100),e.quirks.insertLineBreakOnReturn(this),n.clearsContentEditableCorrectly()||e.quirks.ensureProperClearing(this),n.clearsListsInContentEditableCorrectly()||e.quirks.ensureProperClearingOfLists(this),this.initSync&&this.config.sync&&this.initSync(),this.textarea.hide(),this.parent.fire("beforeload").fire("load")
},_initAutoLinking:function() {
    var i=this,o=n.canDisableAutoLinking(),r=n.doesAutoLinkingInContentEditable();
    if(o&&this.commands.exec("autoUrlDetect",!1),this.config.autoLink) {
      (!r||r&&o)&&this.parent.observe("newword:composer",function() {
        i.selection.executeAndRestore(function(e,n) {
          t.autoLink(n.parentNode)
        })
      });
      var s=this.sandbox.getDocument().getElementsByTagName("a"),a=t.autoLink.URL_REG_EXP,l=function(n) {
        var i=e.lang.string(t.getTextContent(n)).trim();
        return"www."===i.substr(0,4)&&(i="http://"+i),i
      };
      t.observe(this.element,"keydown",function(e) {
        if(s.length) {
var n,o=i.selection.getSelectedNode(e.target.ownerDocument),r=t.getParentElement(o, {nodeName:"A"},4);
          r&&(n=l(r),setTimeout(function() {
            var e=l(r);
            e!==n&&e.match(a)&&r.setAttribute("href",e)
          },0))
        }
      })
    }
},_initObjectResizing:function() {
    var i=["width","height"],o=i.length,r=this.element;
    this.commands.exec("enableObjectResizing",this.config.allowObjectResizing),this.config.allowObjectResizing?n.supportsEvent("resizeend")&&t.observe(r,"resizeend",function(t) {
      for(var n,s=t.target||t.srcElement,a=s.style,l=0; o>l; l++)n=i[l],a[n]&&(s.setAttribute(n,parseInt(a[n],10)),a[n]="");
      e.quirks.redraw(r)
    }):n.supportsEvent("resizestart")&&t.observe(r,"resizestart",function(e) {
      e.preventDefault()
    })
},_initUndoManager:function() {
    new e.UndoManager(this.parent)
  }
                                        })
}(wysihtml5),function(e) {
  var t=e.dom,n=document,i=window,o=n.createElement("div"),r=["background-color","color","cursor","font-family","font-size","font-style","font-variant","font-weight","line-height","letter-spacing","text-align","text-decoration","text-indent","text-rendering","word-break","word-wrap","word-spacing"],s=["background-color","border-collapse","border-bottom-color","border-bottom-style","border-bottom-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-style","border-top-width","clear","display","float","margin-bottom","margin-left","margin-right","margin-top","outline-color","outline-offset","outline-width","outline-style","padding-left","padding-right","padding-top","padding-bottom","position","top","left","right","bottom","z-index","vertical-align","text-align","-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing","-webkit-box-shadow","-moz-box-shadow","-ms-box-shadow","box-shadow","-webkit-border-top-right-radius","-moz-border-radius-topright","border-top-right-radius","-webkit-border-bottom-right-radius","-moz-border-radius-bottomright","border-bottom-right-radius","-webkit-border-bottom-left-radius","-moz-border-radius-bottomleft","border-bottom-left-radius","-webkit-border-top-left-radius","-moz-border-radius-topleft","border-top-left-radius","width"],a=["width","top","left","right","bottom"],l=["html             { height: 100%; }","body             { min-height: 100%; padding: 0; margin: 0; margin-top: -1px; padding-top: 1px; }","._wysihtml5-temp { display: none; }",e.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","body[disabled]   { background-color: #eee !important; color: #999 !important; cursor: default !important; }","img:-moz-broken  { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],c=function(e) {
    if(e.setActive)try {
        e.setActive()
      } catch(o) {} else {
var r=e.style,s=n.documentElement.scrollTop||n.body.scrollTop,a=n.documentElement.scrollLeft||n.body.scrollLeft,l= {position:
                r.position,top:
                r.top,left:
                r.left,WebkitUserSelect:
                      r.WebkitUserSelect
                                                                                                                         };
t.setStyles( {position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(e),e.focus(),t.setStyles(l).on(e),i.scrollTo&&i.scrollTo(a,s)
    }
  };
  e.views.Composer.prototype.style=function() {
    var d=this,u=n.querySelector(":focus"),h=this.textarea.element,f=h.hasAttribute("placeholder"),p=f&&h.getAttribute("placeholder");
    this.focusStylesHost=this.focusStylesHost||o.cloneNode(!1),this.blurStylesHost=this.blurStylesHost||o.cloneNode(!1),f&&h.removeAttribute("placeholder"),h===u&&h.blur(),t.copyStyles(s).from(h).to(this.iframe).andTo(this.blurStylesHost),t.copyStyles(r).from(h).to(this.element).andTo(this.blurStylesHost),t.insertCSS(l).into(this.element.ownerDocument),c(h),t.copyStyles(s).from(h).to(this.focusStylesHost),t.copyStyles(r).from(h).to(this.focusStylesHost);
    var m=e.lang.array(s).without(["display"]);
    if(u?u.focus():h.blur(),f&&h.setAttribute("placeholder",p),!e.browser.hasCurrentStyleProperty())var g=t.observe(i,"resize",function() {
      if(!t.contains(document.documentElement,d.iframe))return g.stop(),void 0;
      var e=t.getStyle("display").from(h),n=t.getStyle("display").from(d.iframe);
      h.style.display="",d.iframe.style.display="none",t.copyStyles(a).from(h).to(d.iframe).andTo(d.focusStylesHost).andTo(d.blurStylesHost),d.iframe.style.display=n,h.style.display=e
    });
    return this.parent.observe("focus:composer",function() {
      t.copyStyles(m).from(d.focusStylesHost).to(d.iframe),t.copyStyles(r).from(d.focusStylesHost).to(d.element)
    }),this.parent.observe("blur:composer",function() {
      t.copyStyles(m).from(d.blurStylesHost).to(d.iframe),t.copyStyles(r).from(d.blurStylesHost).to(d.element)
    }),this
  }
}(wysihtml5),function(e) {
var t=e.dom,n=e.browser,i= {66:"bold"
                            ,73:"italic"
                            ,85:"underline"
                             };
  e.views.Composer.prototype.observe=function() {
    var o=this,r=this.getValue(),s=this.sandbox.getIframe(),a=this.element,l=n.supportsEventsInIframeCorrectly()?a:this.sandbox.getWindow(),c=n.supportsEvent("drop")?["drop","paste"]:["dragdrop","paste"];
    t.observe(s,"DOMNodeRemoved",function() {
      clearInterval(d),o.parent.fire("destroy:composer")
    });
    var d=setInterval(function() {
      t.contains(document.documentElement,s)||(clearInterval(d),o.parent.fire("destroy:composer"))
    },250);
    t.observe(l,"focus",function() {
      o.parent.fire("focus").fire("focus:composer"),setTimeout(function() {
        r=o.getValue()
      },0)
    }),t.observe(l,"blur",function() {
      r!==o.getValue()&&o.parent.fire("change").fire("change:composer"),o.parent.fire("blur").fire("blur:composer")
    }),e.browser.isIos()&&t.observe(a,"blur",function() {
      var e=a.ownerDocument.createElement("input"),t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.scrollLeft||document.body.scrollLeft;
      try {
        o.selection.insertNode(e)
      } catch(i) {
        a.appendChild(e)
      }
      e.focus(),e.parentNode.removeChild(e),window.scrollTo(n,t)
    }),t.observe(a,"dragenter",function() {
      o.parent.fire("unset_placeholder")
    }),n.firesOnDropOnlyWhenOnDragOverIsCancelled()&&t.observe(a,["dragover","dragenter"],function(e) {
      e.preventDefault()
    }),t.observe(a,c,function(e) {
      var t,i=e.dataTransfer;
      i&&n.supportsDataTransfer()&&(t=i.getData("text/html")||i.getData("text/plain")),t?(a.focus(),o.commands.exec("insertHTML",t),o.parent.fire("paste").fire("paste:composer"),e.stopPropagation(),e.preventDefault()):setTimeout(function() {
        o.parent.fire("paste").fire("paste:composer")
      },0)
    }),t.observe(a,"keyup",function(t) {
      var n=t.keyCode;
      (n===e.SPACE_KEY||n===e.ENTER_KEY)&&o.parent.fire("newword:composer")
    }),this.parent.observe("paste:composer",function() {
      setTimeout(function() {
        o.parent.fire("newword:composer")
      },0)
    }),n.canSelectImagesInContentEditable()||t.observe(a,"mousedown",function(e) {
      var t=e.target; "IMG"
      ===t.nodeName&&(o.selection.selectNode(t),e.preventDefault())
    }),t.observe(a,"keydown",function(e) {
      var t=e.keyCode,n=i[t];
      (e.ctrlKey||e.metaKey)&&!e.altKey&&n&&(o.commands.exec(n),e.preventDefault())
    }),t.observe(a,"keydown",function(t) {
      var n,i=o.selection.getSelectedNode(!0),r=t.keyCode;
      !i||"IMG"!==i.nodeName||r!==e.BACKSPACE_KEY&&r!==e.DELETE_KEY||(n=i.parentNode,n.removeChild(i),"A"!==n.nodeName||n.firstChild||n.parentNode.removeChild(n),setTimeout(function() {
        e.quirks.redraw(a)
      },0),t.preventDefault())
    });
var u= {IMG:"Image: "
        ,A:"Link: "
           };
    t.observe(a,"mouseover",function(e) {
      var t,n=e.target,i=n.nodeName;
      if("A"===i||"IMG"===i) {
        var o=n.hasAttribute("title");
        o||(t=u[i]+(n.getAttribute("href")||n.getAttribute("src")),n.setAttribute("title",t))
      }
    })
  }
}(wysihtml5),function(e) {
  var t=400;
e.views.Synchronizer=Base.extend( {constructor:function(e,t,n) {
    this.editor=e,this.textarea=t,this.composer=n,this._observe()
},fromComposerToTextarea:function(t) {
    this.textarea.setValue(e.lang.string(this.composer.getValue()).trim(),t)
},fromTextareaToComposer:function(e) {
    var t=this.textarea.getValue();
    t?this.composer.setValue(t,e):(this.composer.clear(),this.editor.fire("set_placeholder"))
},sync:function(e) {"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(e):this.fromComposerToTextarea(e)
},_observe:function() {
    var n,i=this,o=this.textarea.element.form,r=function() {
      n=setInterval(function() {
        i.fromComposerToTextarea()
      },t)
    },s=function() {
      clearInterval(n),n=null
    };
    r(),o&&(e.dom.observe(o,"submit",function() {
      i.sync(!0)
    }),e.dom.observe(o,"reset",function() {
      setTimeout(function() {
        i.fromTextareaToComposer()
      },0)
    })),this.editor.observe("change_view",function(e) {"composer"!==e||n?"textarea"===e&&(i.fromComposerToTextarea(!0),s()):(i.fromTextareaToComposer(!0),r())
    }),this.editor.observe("destroy:composer",s)
  }
                                    })
}(wysihtml5),wysihtml5.views.Textarea=wysihtml5.views.View.extend( {name:"textarea",constructor:function(e,t,n) {
  this.base(e,t,n),this._observe()
},clear:function() {
  this.element.value=""
},getValue:function(e) {
  var t=this.isEmpty()?"":this.element.value;
  return e&&(t=this.parent.parse(t)),t
},setValue:function(e,t) {
  t&&(e=this.parent.parse(e)),this.element.value=e
},hasPlaceholderSet:function() {
  var e=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),t=this.element.getAttribute("placeholder")||null,n=this.element.value,i=!n;
  return e&&i||n===t
},isEmpty:function() {
  return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()
},_observe:function() {
var e=this.element,t=this.parent,n= {focusin:"focus"
                                     ,focusout:"blur"
                                      },i=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];
  t.observe("beforeload",function() {
    wysihtml5.dom.observe(e,i,function(e) {
      var i=n[e.type]||e.type;
      t.fire(i).fire(i+":textarea")
    }),wysihtml5.dom.observe(e,["paste","drop"],function() {
      setTimeout(function() {
        t.fire("paste").fire("paste:textarea")
      },0)
    })
  })
}
}),function(e) {
  var t=e.dom,n="wysihtml5-command-dialog-opened",i="input, select, textarea",o="[data-wysihtml5-dialog-field]",r="data-wysihtml5-dialog-field";
e.toolbar.Dialog=e.lang.Dispatcher.extend( {constructor:function(e,t) {
    this.link=e,this.container=t
},_observe:function() {
    if(!this._observed) {
      var o=this,r=function(e) {
        var t=o._serialize();
        t==o.elementToChange?o.fire("edit",t):o.fire("save",t),o.hide(),e.preventDefault(),e.stopPropagation()
      };
      t.observe(o.link,"click",function() {
        t.hasClass(o.link,n)&&setTimeout(function() {
          o.hide()
        },0)
      }),t.observe(this.container,"keydown",function(t) {
        var n=t.keyCode;
        n===e.ENTER_KEY&&r(t),n===e.ESCAPE_KEY&&o.hide()
      }),t.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",r),t.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(e) {
        o.fire("cancel"),o.hide(),e.preventDefault(),e.stopPropagation()
      });
      for(var s=this.container.querySelectorAll(i),a=0,l=s.length,c=function() {
      clearInterval(o.interval)
      }; l>a; a++)t.observe(s[a],"change",c);
      this._observed=!0
    }
},_serialize:function() {
    for(var e=this.elementToChange|| {},t=this.container.querySelectorAll(o),n=t.length,i=0; n>i; i++)e[t[i].getAttribute(r)]=t[i].value;
    return e
},_interpolate:function(e) {
    for(var t,n,i,s=document.querySelector(":focus"),a=this.container.querySelectorAll(o),l=a.length,c=0; l>c; c++)t=a[c],t!==s&&(e&&"hidden"===t.type||(n=t.getAttribute(r),i=this.elementToChange?this.elementToChange[n]||"":t.defaultValue,t.value=i))
},show:function(e) {
    var o=this,r=this.container.querySelector(i);
    if(this.elementToChange=e,this._observe(),this._interpolate(),e&&(this.interval=setInterval(function() {
    o._interpolate(!0)
    },500)),t.addClass(this.link,n),this.container.style.display="",this.fire("show"),r&&!e)try {
      r.focus()
    } catch(s) {}
},hide:function() {
    clearInterval(this.interval),this.elementToChange=null,t.removeClass(this.link,n),this.container.style.display="none",this.fire("hide")
  }
                                             })
}(wysihtml5),function(e) {
var t=e.dom,n= {position:"relative"
               },i= {left:0,margin:0,opacity:0,overflow:"hidden"
                     ,padding:0,position:"absolute"
                       ,top:0,zIndex:1
                    },o= {cursor:"inherit"
                          ,fontSize:"50px"
                          ,height:"50px"
                          ,marginTop:"-25px"
                          ,outline:0,padding:0,position:"absolute"
                          ,right:"-4px"
                          ,top:"50%"
                         },r= {"x-webkit-speech":""
                               ,speech:""
                                };
  e.toolbar.Speech=function(s,a) {
    var l=document.createElement("input");
    if(!e.browser.supportsSpeechApiOn(l))return a.style.display="none",void 0;
    var c=document.createElement("div");
e.lang.object(i).merge( {width:a.offsetWidth+"px",height:a.offsetHeight+"px"}),t.insert(l).into(c),t.insert(c).into(a),t.setStyles(o).on(l),t.setAttributes(r).on(l),t.setStyles(i).on(c),t.setStyles(n).on(a);
    var d="onwebkitspeechchange"in l?"webkitspeechchange":"speechchange";
    t.observe(l,d,function() {
      s.execCommand("insertText",l.value),l.value=""
    }),t.observe(l,"click",function(e) {
      t.hasClass(a,"wysihtml5-command-disabled")&&e.preventDefault(),e.stopPropagation()
    })
  }
}(wysihtml5),function(e) {
  var t="wysihtml5-command-disabled",n="wysihtml5-commands-disabled",i="wysihtml5-command-active",o="wysihtml5-action-active",r=e.dom;
e.toolbar.Toolbar=Base.extend( {constructor:function(t,n) {
    this.editor=t,this.container="string"==typeof n?document.getElementById(n):n,this.composer=t.composer,this._getLinks("command"),this._getLinks("action"),this._observe(),this.show();
    for(var i=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),o=i.length,r=0; o>r; r++)new e.toolbar.Speech(this,i[r])
},_getLinks:function(t) {
    for(var n,i,o,r,s,a=this[t+"Links"]=e.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+t+"]")).get(),l=a.length,c=0,d=this[t+"Mapping"]= {}; l>c; c++)n=a[c],o=n.getAttribute("data-wysihtml5-"+t),r=n.getAttribute("data-wysihtml5-"+t+"-value"),i=this.container.querySelector("[data-wysihtml5-"+t+"-group='"+o+"']"),s=this._getDialog(n,o),d[o+":"+r]= {link:
          n,group:
          i,name:
          o,value:
          r,dialog:
          s,state:
          !1
                                                                                                                                                                                                                                                                                                                                                                               }
},_getDialog:function(t,n) {
    var i,o,r=this,s=this.container.querySelector("[data-wysihtml5-dialog='"+n+"']");
    return s&&(i=new e.toolbar.Dialog(t,s),i.observe("show",function() {
o=r.composer.selection.getBookmark(),r.editor.fire("show:dialog", {command:n,dialogContainer:s,commandLink:t})
    }),i.observe("save",function(e) {
o&&r.composer.selection.setBookmark(o),r._execCommand(n,e),r.editor.fire("save:dialog", {command:n,dialogContainer:s,commandLink:t})
    }),i.observe("cancel",function() {
r.editor.focus(!1),r.editor.fire("cancel:dialog", {command:n,dialogContainer:s,commandLink:t})
    })),i
},execCommand:function(e,t) {
    if(!this.commandsDisabled) {
      var n=this.commandMapping[e+":"+t];
      n&&n.dialog&&!n.state?n.dialog.show():this._execCommand(e,t)
    }
},_execCommand:function(e,t) {
    this.editor.focus(!1),this.composer.commands.exec(e,t),this._updateLinkStates()
},execAction:function(e) {
    var t=this.editor;
    switch(e) {
    case"change_view":
      t.currentView===t.textarea?t.fire("change_view","composer"):t.fire("change_view","textarea")
    }
},_observe:function() {
    for(var e=this,t=this.editor,i=this.container,o=this.commandLinks.concat(this.actionLinks),s=o.length,a=0; s>a; a++)r.setAttributes( {href:"javascript:;",unselectable:"on"}).on(o[a]);
    r.delegate(i,"[data-wysihtml5-command]","mousedown",function(e) {
      e.preventDefault()
    }),r.delegate(i,"[data-wysihtml5-command]","click",function(t) {
      var n=this,i=n.getAttribute("data-wysihtml5-command"),o=n.getAttribute("data-wysihtml5-command-value");
      e.execCommand(i,o),t.preventDefault()
    }),r.delegate(i,"[data-wysihtml5-action]","click",function(t) {
      var n=this.getAttribute("data-wysihtml5-action");
      e.execAction(n),t.preventDefault()
    }),t.observe("focus:composer",function() {
      e.bookmark=null,clearInterval(e.interval),e.interval=setInterval(function() {
        e._updateLinkStates()
      },500)
    }),t.observe("blur:composer",function() {
      clearInterval(e.interval)
    }),t.observe("destroy:composer",function() {
      clearInterval(e.interval)
    }),t.observe("change_view",function(t) {
      setTimeout(function() {
        e.commandsDisabled="composer"!==t,e._updateLinkStates(),e.commandsDisabled?r.addClass(i,n):r.removeClass(i,n)
      },0)
    })
},_updateLinkStates:function() {
    var n,s,a,l,c=(this.composer.element,this.commandMapping),d=this.actionMapping;
    for(n in c)l=c[n],this.commandsDisabled?(s=!1,r.removeClass(l.link,i),l.group&&r.removeClass(l.group,i),l.dialog&&l.dialog.hide()):(s=this.composer.commands.state(l.name,l.value),e.lang.object(s).isArray()&&(s=1===s.length?s[0]:!0),r.removeClass(l.link,t),l.group&&r.removeClass(l.group,t)),l.state!==s&&(l.state=s,s?(r.addClass(l.link,i),l.group&&r.addClass(l.group,i),l.dialog&&("object"==typeof s?l.dialog.show(s):l.dialog.hide())):(r.removeClass(l.link,i),l.group&&r.removeClass(l.group,i),l.dialog&&l.dialog.hide()));
    for(n in d)a=d[n],"change_view"===a.name&&(a.state=this.editor.currentView===this.editor.textarea,a.state?r.addClass(a.link,o):r.removeClass(a.link,o))
},show:function() {
    this.container.style.display=""
},hide:function() {
    this.container.style.display="none"
  }
                                 })
}(wysihtml5),function(e) {
var t,n= {name:
          t,style:
          !0,toolbar:
          t,autoLink:
          !0,parserRules:
  {
tags:
    {
br:
      {},span:
      {},div:
      {},p:
      {}
},classes:
    {}
},parser:
e.dom.parse,composerClassName:"wysihtml5-editor"
,bodyClassName:"wysihtml5-supported"
,stylesheets:
[],placeholderText:
t,allowObjectResizing:
!0,supportTouchDevices:
  !0
           };
e.Editor=e.lang.Dispatcher.extend( {constructor:function(t,i) {
    if(this.textareaElement="string"==typeof t?document.getElementById(t):t,this.config=e.lang.object( {}).merge(n).merge(i).get(),this.textarea=new e.views.Textarea(this,this.textareaElement,this.config),this.currentView=this.textarea,this._isCompatible=e.browser.supported(),!this._isCompatible||!this.config.supportTouchDevices&&e.browser.isTouchDevice()) {
      var o=this;
      return setTimeout(function() {
        o.fire("beforeload").fire("load")
      },0),void 0
    }
    e.dom.addClass(document.body,this.config.bodyClassName),this.composer=new e.views.Composer(this,this.textareaElement,this.config),this.currentView=this.composer,"function"==typeof this.config.parser&&this._initParser(),this.observe("beforeload",function() {
      this.synchronizer=new e.views.Synchronizer(this,this.textarea,this.composer),this.config.toolbar&&(this.toolbar=new e.toolbar.Toolbar(this,this.config.toolbar))
    })
},isCompatible:function() {
    return this._isCompatible
},clear:function() {
    return this.currentView.clear(),this
},getValue:function(e) {
    return this.currentView.getValue(e)
},setValue:function(e,t) {
    return e?(this.currentView.setValue(e,t),this):this.clear()
},focus:function(e) {
    return this.currentView.focus(e),this
},disable:function() {
    return this.currentView.disable(),this
},enable:function() {
    return this.currentView.enable(),this
},isEmpty:function() {
    return this.currentView.isEmpty()
},hasPlaceholderSet:function() {
    return this.currentView.hasPlaceholderSet()
},parse:function(t) {
    var n=this.config.parser(t,this.config.parserRules,this.composer.sandbox.getDocument(),!0);
    return"object"==typeof t&&e.quirks.redraw(t),n
},_initParser:function() {
    this.observe("paste:composer",function() {
      var t=!0,n=this;
      n.composer.selection.executeAndRestore(function() {
        e.quirks.cleanPastedHTML(n.composer.element),n.parse(n.composer.element)
      },t)
    }),this.observe("paste:textarea",function() {
      var e,t=this.textarea.getValue();
      e=this.parse(t),this.textarea.setValue(e)
    })
  }
                                     })
}(wysihtml5),function(e) {
var t= {init:
  function(t) {
    return this.each(function() {
      var n=e(this);
n.addClass("field fieldComment").attr("id","comment-"+t),ty.realtime.join(t,"comment", {profile:["avatar","dulst."+ty.dulst.gameID]}),ty.comment= {newNode:
function(t){e("#comment-"+t.channel).comment("render",t.message)},update:
function(t){e("#comment-"+t.channel).comment("render",t.message)},postComment:
function(t){e("#comment-"+t.channel).comment("render",t)},joinChannel:
function(t){t.fieldBody=t.message+" joins the topic",t.commentType="notification",e("#comment-"+t.channel).comment("render",t)},leaveChannel:
function(t){t.commentType="notification",t.fieldBody=t.message+" has left",e("#comment-"+t.channel).comment("render",t)},disconnect:
function(t){t.fieldBody=t.message+" has left",t.commentType="notification",e("#comment-"+t.channel).comment("render",t)},prior:
      function(t) {
        e.each(t.messages,function(n,i) {
          e("#comment-"+t.channel).comment("render",i)
        })
      }
                                                                                                                                                        }
    })
},close:
function(t){ty.realtime.leave(t,"comment"),e(this).find(".comment").remove()},render:
  function(t) {
    var n=e(this); "notification"
==t.commentType?e("<div class='msg'>"+t.fieldBody+"</div>").appendTo(n):ty.node.render(t, {template:"nodePostTemplate",pageTemplate:"commentNodeTemplate"},function(i) {
      e("#node-"+t.nid).length>0?e("#node-"+t.nid).closest(".comment").replaceWith(i):(n.find(".postBox").length>0?n.find(".postBox").before(i):i.appendTo(n),n.scrollTop(n.scrollHeight)),n.trigger("renderMessage",[t])
    })
  }
         };
  e.fn.comment=function(e) {
    return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)
  }
}(jQuery),ty.fields.comments=function(e,t,n) {
  var i=e.find(".fieldComment");
  i.comment(t).postBox([t],function() {
    n&&n()
  })
},function(e) {
var t= {init:
  function(t,n,i) {
    return this.each(function() {
1005!=t?(e(this).html(ty.t("dulstMenuContainer", {gameID:t,gameTitle:n,subdomain:ty.dulst.subdomain,user:user})),e("#playerInfo").dulstGameResults(t,function() {
        e("#left").height()-e("#playerInfo").outerHeight()-e("#dulstMenu").outerHeight();
        e("#right").css("height","100%").chat("game-"+t),i&&i(),e("#right").find(".field-chatroom").bind("newMessage",function(e,t) {
          var n=t.body,i=/^\/a /g;
          if(i.test(n)) {
            var o=n.replace("/^/a /","");
ty.realtime.send( {handler:"dulst.adminCommand",command:o})
          }
        }),e.event.trigger("socialLinks")
      })):(ty.load("dulst_site/staticPages",function() {
        ty.load("page/page",function() {
          0==e("#staticSideBar").length&&e("#left").html(ty.t("dulstStaticSideBar", {}))
        })
      }),e("#right").css("height","100%").chat("game-"+t),i&&i(),e("#right").find(".field-chatroom").bind("newMessage",function(e,t) {
        var n=t.body,i=/^\/a /g;
        if(i.test(n)) {
          var o=n.replace("/^/a /","");
ty.realtime.send( {handler:"dulst.adminCommand",command:o})
        }
      }),e.event.trigger("socialLinks"))
    })
  }
         };
  e.fn.dulstMenu=function(e) {
    return t[e]?t[e].apply(this,Array.prototype.slice.call(arguments,1)):t.init.apply(this,arguments)
  }
}(jQuery),ty.dulst.checkSubdomain=function(e,t) {
  if(!ty.dulst.subdomain||ty.dulst.subdomain&&e!=ty.dulst.subdomain)if($("#right").chat("close","match-"+ty.dulst.gameID),e.match(/^game-\d+/gi)) {
      var n=e.match(/^game-\d+/gi)[0].replace(/^game-(\d)/gi,"$1");
      ty.dulst.subdomain=e,ty.dulst.initGame(n,function() {
        t&&t()
      })
    } else ty.get("dulst/"+e+"/gameID",function(n) {
      ty.dulst.subdomain=e,ty.dulst.initGame(n.gameID,function() {
        t&&t()
      })
    });
  else ty.dulst.loaded?t&&t():ty.dulst.gameID&&ty.dulst.initGame(ty.dulst.gameID,function() {
    t&&t()
  })
},ty.dulst.setCardWidth=function(e) {
  var t=$("#main").width(),n=100/parseInt(t/190),i=(e-6)*n/100,o=i-18,r=1.25*o;
  $(".card-list-container a.card").globalcss("width",n+"%"),ty.dulst.cardWidthStyle&&ty.dulst.cardWidthStyle.length>0&&ty.dulst.cardWidthStyle.remove(),ty.dulst.cardWidthStyle=$('<style id="cardWidthStyle"></style>'),ty.dulst.cardWidthStyle.appendTo("head"),ty.dulst.cardWidthStyle.html(".card-list-container .card img, .card-list-container .card video, .card-list-container .card .cardSlot{width: "+o+"px; height: "+r+"px;}")
},ty.dulst.initGame=function(e,t) {
  ty.dulst.gameID=e,ty.load("dulst/cardsInterface",function() {
    ty.get("dulst/"+e+"/gameSettings",function(n) {
      if(ty.dulst.subdomain=n.subdomain?n.subdomain:"game-"+e,ty.dulst.game=new ty.node.Model(n),ty.dulst.gameTitle=n.title,1005!=ty.dulst.gameID) {
        ty.dulst.colors=function() {
          ty.dulst.cardTypeColors&&_.each(ty.dulst.cardTypeColors,function(e) {
            e&&e.length>0&&e.remove()
          }),ty.dulst.cardTypeColors= {},ty.dulst.game.get("cardTypes").forEach(function(e) {
            var t=e.color,n=e.name,i=$('<style class="cardTypeColor"></style>');
            i.appendTo("head"),i.append(".card-list-container .list-container."+n+" a.current{background: "+t+";}"),i.append(".card-list-container .list-container."+n+" .card-list-container a:hover{color: "+t+";}"),i.append(".card-list-container a."+n+":hover{color: "+t+";}"),i.append("#cardFullInfo > div > div > div."+n+" .name, .cardFullInfo > div > div > div."+n+" .name, #cardFullInfo > div > div > div."+n+" .type .data, .cardFullInfo > div > div > div."+n+" .type .data{color: "+t+";}"),i.append(".card-list-container .list-container."+n+" h5{color: "+t+";}"),i.append(".card-list-container .list-container."+n+" a h5:hover, .card-list-container .list-container."+n+" h5.current {background: "+t+"; color:white;}"),i.append(" .card-list-container .cardStats ul li span."+n+"{color: "+t+";}"),i.append(" #playContainer .card[data-location=me-hand]."+n+"{border-bottom-color: "+t+";}"),ty.dulst.cardTypeColors[n]=i
          })
        },ty.dulst.colors();
        var i=ty.dulst.game.get("customCSS");
        i&&$("<style>"+i+"</style>").appendTo("body"),ty.handler("user:login dulst:newPlayerJoinGame",function() {
          ty.dulst.runCardsInterface()
        }),ty.dulst.runCardsInterface(function() {
          t&&t()
        }),ty.dulst.staff&&!n.gameComplete&&(ty.dulst.onboarding=new ty.dulst.Onboarding)
      }
    })
  })
},ty.dulst.runCardsInterface=function(e) {
  var t=ty.dulst.game.get("Administrator"),n=ty.dulst.game.get("Moderator").concat(t);
  ty.dulst.admin=-1==t.indexOf(user)?!1:!0,ty.dulst.staff=-1==n.indexOf(user)?!1:!0,ty.node.pagenid=ty.dulst.game.get("nid"),ty.node.pageTitle=ty.dulst.game.get("title"),$("#left").dulstMenu(ty.dulst.gameID,ty.dulst.gameTitle,function() {
    ty.dulst.inQueue&&$(".playAMatch").text("Matching..."),"anon"==user?$(".playAMatch").addClass("flashMessage").attr("data-flashMessage","Please log in first"):$(".playAMatch").attr("data-flashMessage","#play-info"),$("body .playAMatch").off("click").on("click",function() {
      if(user&&"anon"!=user) {
        if(ty.dulst.inQueue) {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,handler:"dulst.leaveQueue"
                 };
          ty.realtime.send(e)
        } else {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,handler:"dulst.joinMatch"
                 };
          ty.realtime.send(e)
        }
analytics.track("Queue Match", {user:user,gameID:ty.dulst.gameID,module:"dulst"})
      } else flashMessage("Please login first")
      }),ty.dulst.loaded=!0,$.event.trigger("dulst:gameLoad"),e&&e(),$("#section-title a").attr("href","/"+ty.dulst.subdomain),$("#section-title .title").text(ty.dulst.gameTitle),$("title").text(ty.dulst.gameTitle),setTimeout(function() {
      $("#branding .awesome").css("top",-50),setTimeout(function() {
        $("#section-title").removeClass("hidden"),$("#branding").removeClass("fullDisplay")
      },1e3)
    },3e3)
  })
},ty.route(":gameSubdomain","gameDashboard",function(e) {
  ty.dulst.checkSubdomain(e,ty.dulst.gameDashboard)
}),ty.route(":gameSubdomain/user/:userName","dulstProfile",function(e,t) {
  ty.dulst.profile||(ty.dulst.profile=new ty.dulst.Profile),ty.dulst.checkSubdomain(e,function() {
    ty.dulst.profile.display(t)
  })
}),ty.route(":gameSubdomain/cards","cardsInterface",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.cardsInterface&&ty.dulst.cardsInterface.gameID==ty.dulst.gameID?ty.dulst.cardsInterface.listCards():ty.dulst.cardsInterface=new ty.dulst.CardsList(ty.dulst.gameID,function() {
      ty.dulst.cardsInterface.listCards()
    })
  })
}),ty.route(":gameSubdomain/editType","cardsInterface",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.cardsInterface&&ty.dulst.cardsInterface.gameID==ty.dulst.gameID?ty.dulst.cardsInterface.listCards():ty.dulst.cardsInterface=new ty.dulst.CardsList(ty.dulst.gameID,function() {
      ty.dulst.cardsInterface.listCards()
    })
  })
}),ty.route(":gameSubdomain/cards/:cardID/:cardPath","cardsInterface",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.cardsInterface&&ty.dulst.cardsInterface.gameID==ty.dulst.gameID?ty.dulst.cardsInterface.cardsInterfaceCard(t):ty.dulst.cardsInterface=new ty.dulst.CardsList(ty.dulst.gameID,function() {
      ty.dulst.cardsInterface.cardsInterfaceCard(t)
    })
  })
}),ty.route(":gameSubdomain/starterDeck","cardsInterface",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.cardsInterface&&ty.dulst.cardsInterface.gameID==ty.dulst.gameID?ty.dulst.cardsInterface.defaultDeckInit():ty.dulst.cardsInterface=new ty.dulst.CardsList(ty.dulst.gameID,function() {
      ty.dulst.cardsInterface.defaultDeckInit()
    })
  })
}),ty.route(":gameSubdomain/starterCollection","cardsInterface defaultCardLibrary",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.cardsInterface&&ty.dulst.cardsInterface.gameID==ty.dulst.gameID?ty.dulst.cardsInterface.listCards(ty.dulst.cardsInterface.defaultCardLibraryInit):ty.dulst.cardsInterface=new ty.dulst.CardsList(ty.dulst.gameID,function() {
      ty.dulst.cardsInterface.listCards(ty.dulst.cardsInterface.defaultCardLibraryInit)
    })
  })
}),ty.route(":gameSubdomain/:userName/badges","badges",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.badges(t)
  })
}),ty.route(":gameSubdomain/:userName/decks","deck",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.decks.decksList(t)
  })
}),ty.route(":gameSubdomain/:userName/decks/:deckID/:deckTitle","deck",function(e,t,n,i) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.decks.showDeck(t,n,i)
  })
}),ty.route(":gameSubdomain/market","market",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.market.init()
  })
}),ty.route(":gameSubdomain/market/:cardID/:cardPath","market",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.market.card(t)
  })
}),ty.route(":gameSubdomain/cardIdeas","cardIdeas",function(e) {
  ty.dulst.checkSubdomain(e,ty.dulst.cardIdeasInterface)
}),ty.route(":gameSubdomain/sets","setsInterface",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.setsInterface&&ty.dulst.setsInterface.gameID==ty.dulst.gameID||(ty.dulst.setsInterface=new ty.dulst.SetsInterface),ty.dulst.setsInterface.display()
  })
}),ty.route(":gameSubdomain/sets/:setID","setsInterface",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.setsInterface&&ty.dulst.setsInterface.gameID==ty.dulst.gameID||(ty.dulst.setsInterface=new ty.dulst.SetsInterface),ty.dulst.setsInterface.display(function() {
      ty.dulst.setsInterface.showSet(t)
    })
  })
}),ty.route(":gameSubdomain/regions","regionsInterface",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.regionsInterface&&ty.dulst.regionsInterface.gameID==ty.dulst.gameID||(ty.dulst.regionsInterface=new ty.dulst.RegionsInterface),ty.dulst.regionsInterface.display()
  })
}),ty.route(":gameSubdomain/regions/:cardID/:cardPath","regionsInterface",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.regionsInterface&&ty.dulst.regionsInterface.gameID==ty.dulst.gameID||(ty.dulst.regionsInterface=new ty.dulst.RegionsInterface),ty.dulst.regionsInterface.region(t)
  })
}),ty.route(":gameSubdomain/players","players",function(e) {
  ty.dulst.checkSubdomain(e,ty.dulst.players)
}),ty.route(":gameSubdomain/matches","matches",function(e) {
  ty.dulst.checkSubdomain(e,ty.dulst.matches.display)
}),ty.route(":gameSubdomain/boardEditor/:boardID","dulstPlay",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.boadEditorInit(t)
  })
}),ty.route(":gameSubdomain/play/mode/:mode/:customTitle","dulstPlay",function(e,t,n) {
  ty.dulst.checkSubdomain(e,function() {
    if(ty.dulst.customGame==n)delete ty.dulst.customGame,ty.dulst.gameInit(n);
    else {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,customTitle:
        n,gameMode:
        t,handler:"dulst.joinMatch"
             };
      ty.realtime.send(e),ty.dulst.gameInit(n)
    }
  })
}),ty.route(":gameSubdomain/play/:matchID","dulstPlay",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.gameInit(t)
  })
}),ty.route(":gameSubdomain/spectate/:matchID","dulstPlay",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.gameInit(t,!0)
  })
}),ty.route(":gameSubdomain/play/test/:customTitle","dulstPlay",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,customTitle:
        t,test:"test"
        ,handler:"dulst.testJoinMatch"
           };
    ty.realtime.send(e),ty.dulst.gameInit("test-"+t)
  })
}),ty.route(":gameSubdomain/play/custom/:customTitle","dulstPlay",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    if(ty.dulst.customGame==t)delete ty.dulst.customGame,ty.dulst.gameInit(t);
    else {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,customTitle:
        t,handler:"dulst.joinMatch"
             };
      ty.realtime.send(e),ty.dulst.gameInit(t)
    }
  })
}),ty.route(":gameSubdomain/play/tutorial","dulstPlay",function(e) {
  ty.dulst.checkSubdomain(e,function() {
var e= {gameID:
        ty.dulst.gameID,gameTitle:
        ty.dulst.gameTitle,gameMode:"singleplayer"
        ,customTitle:"tutorial"
        ,handler:"dulst.joinMatch"
           };
    ty.realtime.send(e),ty.dulst.gameInit("tutorial")
  })
}),ty.route(":gameSubdomain/wiki","wiki",function(e) {
  ty.dulst.checkSubdomain(e,ty.dulst.wikiInterface.display)
}),ty.route(":gameSubdomain/wiki/:pageTitle","wiki",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.wikiInterface.page(t)
  })
}),ty.route(":subdomain/forums","forums",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.forums("forum",ty.settings.dulst.gameID)
  })
}),ty.route(":subdomain/forums/topic/:postID/:postTitle","forums nodeView",function(e,t,n) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.forums("post",t,n)
  })
}),ty.route(":subdomain/forums/:forumName","forums",function(e,t) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.forums("forum",t)
  })
}),ty.route(":subdomain/forums/:forumName/:pageNumber","forums",function(e,t,n) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.forums("forum",t,n)
  })
}),ty.route(":gameSubdomain/tournament","tournament",function(e) {
  ty.dulst.checkSubdomain(e,function() {
    ty.dulst.tournament=new ty.dulst.Tournament,ty.dulst.tournament.display()
  })
}),ty.route("blog","dulst",function() {
  ty.redirect("forums/Blog")
}),ty.route("games","dulstFront",function() {
  ty.dulst.games||(ty.dulst.games=new ty.dulst.Games),ty.dulst.games.display()
}),$("#branding").length>0?ty.load("dulst/dulstMenu",function() {
  var e=ty.t("dulstMainDropdown", {});
  e.appendTo("#branding"),e.find(".more").click(function() {
    e.find(".secondary").show(),$(this).hide()
  })
}):ty.handler("menu:mainMenuLoad",function() {
  ty.load("dulst/dulstMenu",function() {
    var e=ty.t("dulstMainDropdown", {});
    e.appendTo("#branding"),e.find(".more").click(function() {
      e.find(".secondary").show(),$(this).hide()
    })
  })
}),ty.handler("user:login",function(e) {
  ty.load("dulst/dulstMenu",function() {
    ty.get("dulst/games/user/"+window.user,function(t) {
      var n=[];
      t&&t.adminGames&&(n=t.adminGames.concat(t.playingGames)),t&&t.adminGames&&!t.playingGames&&(n=t.adminGames);
      var i=ty.t("dulstUserDropdown",n);
      i.appendTo(e)
    })
  })
}),ty.editor= {init:function(e) {
var t=e.prev(".editor-toolbar"),n=new wysihtml5.Editor(e[0], {toolbar:t[0],composerClassName:"tydai-editor",parserRules:{classes:{"wysiwyg-clear-both":1,"wysiwyg-clear-left":1,"wysiwyg-clear-right":1,"wysiwyg-color-aqua":1,"wysiwyg-color-black":1,"wysiwyg-color-blue":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-gray":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-maroon":1,"wysiwyg-color-navy":1,"wysiwyg-color-olive":1,"wysiwyg-color-purple":1,"wysiwyg-color-red":1,"wysiwyg-color-silver":1,"wysiwyg-color-teal":1,"wysiwyg-color-white":1,"wysiwyg-color-yellowgreen":1,"wysiwyg-color-maroon":1,"wysiwyg-color-plum":1,"wysiwyg-color-orange":1,"wysiwyg-color-brown":1,"wysiwyg-color-burlywood":1,"wysiwyg-color-lightskyblue":1,"wysiwyg-color-violet":1,"wysiwyg-color-hotpink":1,"wysiwyg-color-yellow":1,"wysiwyg-float-left":1,"wysiwyg-float-right":1,"wysiwyg-font-size-large":1,"wysiwyg-font-size-larger":1,"wysiwyg-font-size-medium":1,"wysiwyg-font-size-small":1,"wysiwyg-font-size-smaller":1,"wysiwyg-font-size-x-large":1,"wysiwyg-font-size-x-small":1,"wysiwyg-font-size-xx-large":1,"wysiwyg-font-size-xx-small":1,"wysiwyg-text-align-center":1,"wysiwyg-text-align-justify":1,"wysiwyg-text-align-left":1,"wysiwyg-text-align-right":1},tags:{b:{},i:{},h1:{},h2:{},h3:{},h4:{},img:{},a:{},span:{},div:{},br:{},li:{},ul:{},ol:{},blockquote:{},a:{check_attributes:{href:"url"}},img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"},add_class:{align:"align_img"}}}}});
  n.on("load",function() {
    wysihtml5.dom.insertCSS(["body { overflow: hidden; min-height: 5em;}.wysiwyg-font-size-smaller{font-size:smaller;}.wysiwyg-font-size-larger{font-size:larger;}.wysiwyg-font-size-xx-large{font-size:xx-large;}.wysiwyg-font-size-x-large{font-size:x-large;}.wysiwyg-font-size-large{font-size:large;}.wysiwyg-font-size-medium{font-size:medium;}.wysiwyg-font-size-small{font-size:small;}.wysiwyg-color-violet{color:violet;}.wysiwyg-color-hotpink{color:hotpink;}.wysiwyg-font-size-xx-small{font-size:xx-small;}.wysiwyg-color-black{color:#000;}.wysiwyg-color-silver{color:silver;}.wysiwyg-color-gray{color:gray;}.wysiwyg-color-white{color:#FFF;}.wysiwyg-color-maroon{color:maroon;}.wysiwyg-color-lightskyblue{color:lightskyblue;}.wysiwyg-color-red{color:red;}.wysiwyg-color-purple{color:purple;}.wysiwyg-color-fuchsia{color:fuchsia;}.wysiwyg-color-green{color:green;}.wysiwyg-color-brown{color:brown;}.wysiwyg-color-lime{color:lime;}.wysiwyg-color-plum{color:plum;}.wysiwyg-color-olive{color:olive;}.wysiwyg-color-burlywood{color:burlywood;}.wysiwyg-color-yellow{color:#FF0;}.wysiwyg-color-navy{color:navy;}.wysiwyg-color-blue{color:blue;}.wysiwyg-color-orange{color:orange;}.wysiwyg-color-yellowgreen{color:yellowgreen;}.wysiwyg-color-teal{color:teal;}.wysiwyg-color-aqua{color:aqua;}.wysiwyg-text-align-right{text-align:right;}.wysiwyg-text-align-center{text-align:center;}.wysiwyg-text-align-left{text-align:left;}.wysiwyg-float-left{float:left;margin:0 8px 8px 0;}.wysiwyg-float-right{float:right;margin:0 0 8px 8px;}"]).into(n.composer.sandbox.getDocument()),n.composer.element.addEventListener("keyup",function() {
      n.composer.iframe.style.height=n.composer.element.scrollHeight+5+"px"
    }),n.composer.iframe.style.height=n.composer.element.scrollHeight+5+"px",n.on("change:composer",function() {
      e.val(n.getValue()).trigger("change")
    })
  })
}
},$(document).ready(function() {
  ty.load("editor/toolbar",function() {
    $("body").delegate(".fieldEditor.textareaPreview","mouseover click tap",function() {
      var e=$(this).prev();
      e.data("editor_init")||(e.show(),e.data("editor_init",!0),ty.editor.init(e)),$(this).remove()
    })
  })
}),ty.fields.editor=function(e) {
  ty.load("editor/toolbar",function() {
    e.find("textarea.fieldEditor").each(function() {
      var e=$(this),t="editor_toolbar_advanced";
      if(!e.data("editor_toolbar")) {
        e.data("editor_toolbar",!0),"simple"==e.data("editor-toolbar")&&(t="editor_toolbar_simple"),t=ty.t(t, {});
        var n=$('<div class="textareaPreview fieldEditor fieldText"></div>');
        n.html(e.val()),e.before(t),e.after(n),e.hide()
      }
    })
  })
},ty.fields.multiple=function(e) {
  e.find(".content-add-another:not(.ui-multiple)").addClass("ui-multiple").bind("click",function() {
    var e=$(this).parent().children(".fieldMultiple:last").addClass("multiple").clone(),t=$("<div />");
    t.append(e),ty.fieldsRun(t),t.children().insertAfter($(this).parent().children(".fieldMultiple:last"))
  })
},ty.fields.tags=function(e) {
  e.find(".formSuggestions").each(function() {
    var e=$(this);
    e.hasClass("ui-autocomplete-input")||("undefined"!=typeof e.attr("data-formSuggestions-source")&&e.attr("data-formSuggestions-source")!==!1?e.autocomplete( {source:function(t,n) {
      ty.get(e.attr("data-formSuggestions-source")+t.term,function(e) {
        n($.map(e,function(e) {
return {label:e,value:e}
        }))
      })
    }
}):e.autocomplete( {source:function(t,n) {
        n($.map(e.attr("data-formSuggestions").split(","),function(e) {
return {label:
        e,value:
                  e
                 }
        }))
      }
    }))
  }),e.find(".fieldTags").tagit()
},function(e) {
  e.fn.userReference=function(t,n) {
    return this.each(function() {
      function t(t) {
        var n="";
        n='<li data-value="'+t+'" class="tagit-choice">\n',n+=t+"\n",n+='<a class="close">x</a>\n',n+='<input type="hidden" style="display:none;" value="'+t+'" name="item[tags][]">\n',n+="</li>\n";
        var i=this.tag_input.parent();
        e(n).insertBefore(i),this.tag_input.val("")
      }
e(this).autocomplete( {source:function(t,n) {
        ty.get("field_userReference/user/"+t.term,function(t) {
          n(e.map(t,function(e) {
return {label:
        e,value:
                    e
                   }
          }))
        })
},select:function(e,n) {
        t(n.item.name)
},change:function(e,n) {
        t(n.item.name)
      }
                            }),n&&n()
    })
  }
}(jQuery),ty.fields.userReference=function(e) {
  e.find(".form-userReference").userReference()
},ty.forums=function(e,t) {
  function n() {
    function n(e,t) {
      if("undefined"!=typeof e)for(var i=0; i<e.length; i++) {
          if(e[i].title==t)return[e[i].nid];
          var o=n(e[i].sub,t);
          if(null!=o)return o.unshift(e[i].nid),o
          }
                        return null
    }
    if("forum"==e) {
      var a,l=ty.forum[i].structure,c=n(l,t.forumName);
      c?(a=c[c.length-1],-1==c.indexOf(i)&&c.unshift(i),-1==c.indexOf("14658")?($("#content .postBoxContainer").postBox(c,function(e) {
        e.find("textarea").attr("placeholder","What's on your mind?")
      }),s.blog=!1):"Dulst"==window.user?($("#content .postBoxContainer").postBox(c,function(e) {
        e.find("textarea").attr("placeholder","What's on your mind?")
      }),s.blog=!0):($("#content .postBoxContainer").empty().data("nodePostBox",!1),s.blog=!0)):$("#content .postBoxContainer").postBox([a],function(e) {
        e.find("textarea").attr("placeholder","What's on your mind?")
      }),ty.realtime.leave(ty.forums.current);
      var d="hide";
ty.user.current.profile&&ty.user.current.profile.attributes&&(d=ty.user.current.profile.attributes.showClosed),ty.get("forum/"+a+"?"+$.param( {showClosed:d,page:r}),function(e) {
        ty.forums.joinChannel(e)
}),ty.realtime.join(i,"ty.forums", {showClosed:d,page:r}),ty.forums.current=a
    } else"post"==e&&(ty.node.load(o,function(e) {
ty.realtime.leave(ty.dulst.node.current),ty.dulst.node.current=o,ty.node.render(e, {template:"forumTopicTemplate"},function(e) {
        $("#content").find(".topics").hide(),e.find(".nodeContent").after('<div class="field fieldComment"></div>');
        var t=e.find(".fieldComment");
        t.comment(o),$("#content").find(".nodeView").show().html(e)
      })
    }),ty.route.sectionClose("nodeView",function() {
      ty.realtime.leave(o)
    }))
  }
var i=t.forumID,o=t.postID,r=t.pageNumber,s=(t.forumName, {}),a=Backbone.Model.extend( {idAttribute:"nid"}),l=Backbone.Collection.extend( {model:a,comparator:function(e) {
    return e.get("rt")?e.get("rt"):e.get("ut")?e.get("ut"):e.get("ct")
  }
}),c=ty.View.extend( {initialize:function() {
    _.bindAll(this),this.model.bind("change",this.render),this.model.view=this
},render:function() {
var e=this,t=e.model.toJSON(),n= {url:"/forums/topic/"
                                      +t.nid+"/"+ty.url(t.title)
                                     };
    if(t.posts||(n.posts=0),n.lr=t.lr|| {},n.lr.ct||n.ut?n.lr.ct||(n.lr.ct=t.ut):n.lr.ct=t.ct,n.lr.user||(n.lr.user=t.user),n.lr.ct&&(n.lr.ct=ty.formatTime(n.lr.ct)),s.blog?e.element("forumTopicItem",n):e.element("issueTopicItem",n),t.fieldStatus&&t.fieldStatus.issue) {
      var i=["Fixed","Duplicate","Resolved"];
      t.fieldStatus.issue=_.str.capitalize(t.fieldStatus.issue),-1!=i.indexOf(t.fieldStatus.issue)&&e.el.addClass("resolved"),e.el.attr("data-issue",t.fieldStatus.issue)
    }
    return e
  }
                                                                                                                                                                     });
  ty.forum.active?n():(ty.load("dulst/cardsInterface",function() {
    var e=ty.t("dulst/forumsContainer");
    $("#content").html(e),ty.get("forum/forums/"+i,function(e) {
      function t() {
        function e(t,n) {
var i=ty.t("forumForumItem", {title:n.title,url:"/forums/"+n.title}).appendTo(t).find(".subforumsContainer");
          n.sub&&n.sub.forEach(function(t) {
            e(i,t)
          })
        }$("#forums").empty(),ty.forum[i].structure.forEach(function(t) {
          e($("#forums"),t)
        })
      }
e=e|| {structure:
             []
      },ty.forum[i]= {structure:
                      [{nid:i,title:"Dulst",sub:e.structure}]
                           },e=ty.forum[i],t(),ty.forum.active=!0,n()
    })
  }),ty.route.sectionClose("forums",function() {
    ty.forum.active=!1,ty.realtime.leave(ty.forums.current),delete ty.forums.current
  })),ty.forums.joinChannel=function(e) {
    ty.forums.topics=new l(e.topics),$("#forumsContainer .mainContent").find(".topics").show(),$("#forumsContainer .mainContent").find(".nodeView").hide();
    var t=$('<ul id="topicsList" />');
    ty.forums.topics.each(function(e) {
var n=new c( {model:e});
      t.prepend(n.render().el)
    }),ty.forums.topics.bind("add",function(e) {
var t=new c( {model:e});
      $("#topicsList").prepend(t.render().el)
    }),$("#topicsList").replaceWith(t);
    var n;
e.data&&e.data.page&&(n=!0,r=parseInt(e.data.page,10)),$("#forumsContainer footer.section").pagination(e.count, {current_page:r,pages:e.pages,count:e.count,link_to:"__id__",items_per_page:20,isPaging:n}),$(".postBox .formItem span.text").text("Post New Topic ")
  }
},ty.forums.newNode=function(e) {
  ty.forums.topics.add(e.message)
},ty.forums.update=function(e) {
  ty.forums.topics.get(e.message.nid)?ty.forums.topics.get(e.message.nid).set(e.message):ty.forums.topics.add(e.message)
},ty.forums.topicsRemove=function(e) {
  ty.forums.topics.get(e.node.nid)&&ty.forums.topics.remove(e.node.nid)
},ty.forum= {},ty.route("forums","forums dulstCentral",function() {
ty.forums("forum", {forumID:1005,forumName:"Dulst"})
}),ty.route("forums/topic/:postID/:postTitle","forums nodeView dulstCentral",function(e,t) {
ty.forums("post", {postID:e,forumID:1005,postTitle:t})
}),ty.route("forums/:forumName","forums dulstCentral",function(e) {
ty.forums("forum", {forumName:e,forumID:1005})
}),ty.route("forums/:forumName/:pageNumber","forums dulstCentral",function(e,t) {
ty.forums("forum", {forumName:e,pageNumber:t,forumID:1005})
}),ty.Like=function() {},ty.Like.prototype.like=function(e,t) {
  var e=$(e);
  e.hasClass("liked")?ty.del("like/"+t, {},function(t) {
    if(t.status) {
      $(e).removeClass("liked active");
      var n=e.next(".likesCount"),i=parseInt(n.data("likes"));
i>2?(n.text(i-1+" likes"),n.data("likes",i-1)):2==i?(n.text("1 like"),n.data("likes",1)):(n.text(""),n.data("likes",0)),analytics.track("Unlike", {user:user,module:"like"})
    }
  }):ty.post("like/"+t, {},function(t) {
    if(t.status) {
      e.addClass("liked active");
      var n=e.next(".likesCount"),i=parseInt(n.data("likes"));
i>0?(n.text(i+1+" likes"),n.data("likes",i+1)):(n.text("1 like"),n.data("likes",1)),analytics.track("Like", {user:user,module:"like"})
    }
  })
},ty.Like.prototype.get=function(e,t) {
  this.queue||(this.queue=[]),this.cbQueue||(this.cbQueue= {}),this.cbQueue[e]=t,this.queue.push(e),this.queue.length>0?this.queue.push(e):setTimeout(function() {
    ty.get("like/"+e,$.param(this.queue,!0),function(e) {
      e.status&&t&&t()
    })
  },20)
},ty.fields.likes=function(e,t) {
  var n=e.find(".fieldLike");
  n.length>0&&ty.load("like/like",function() {
    n.each(function(e,n) {
      n=$(n),n.data("nid")&&(t=n.data("nid")),ty.node.load(t,function(e) {
        n.html(ty.t("fieldLike",e))
      }),ty.like.get(t,function() {})
    })
  })
},ty.like=new ty.Like,function() {
ty.region.mainMenu=$("<nav/>", {id:"mainMenu"});
  for(var menuItem,configMainMenuItems=ty.settings.modules.menu.mainMenu,i=configMainMenuItems.length-1; i>=0; i--)menuItem=$("<"+configMainMenuItems[i].element+"/>", {html:configMainMenuItems[i].content}),$.each(configMainMenuItems[i].attr,function(e,t) {"href"!=e||/^http/g.test(t)||(t="/"+t),menuItem.attr(e,t)
  }),configMainMenuItems[i].events&&$.each(configMainMenuItems[i].events,function(k,v) {
    menuItem.bind(k,function() {
      eval(v)
    })
  }),configMainMenuItems[i].show?eval(configMainMenuItems[i].show)&&menuItem.appendTo(ty.region.mainMenu):menuItem.appendTo(ty.region.mainMenu);
  $.event.trigger("menu:mainMenuLoad",ty.region.mainMenu)
}(),$(function() {
  ty.region.mainMenu.appendTo("#menu-temporary");
$("<nav/>", {id:"page-menu",html:'<div class="menuBlock"></div>'}),$("<nav/>", {id:"secondary-menu",html:'<div class="menuBlock"></div>'})
}),ty.settings.modules.page.pages.forEach(function(e) {
  var t="";
  e.events&&(t=" "+e.events),ty.route(e.path,"staticPage"+t,function() {
    ty.path[e.path](arguments)
  })
}),ty.points= {update:function(e) {
  var t=$("#pointsAPI-"+e.type),n=$("#pointsAPI-"+e.type+" .alter-notice"),i=parseInt($("#pointsAPI-"+e.type).text(),10),o=parseInt(e.points,10)-i;
i<parseInt(e.points,10)?(n.text("+"+o),direction="increase"):(n.text(o),direction="decrease"),n.removeClass("increase decrease").addClass(direction).fadeIn(400),jQuery( {count:i}).animate( {count:parseInt(e.points,10)}, {duration:1e3,step:function() {
    t.text(Math.round(this.count))
},complete:function() {
    n.fadeOut(2e3),t.text(e.points)
  }
                                                                                                                                                                                                                            }),$.event.trigger("pointsAPI:pointsUpdate", {type:e.type,by:o,direction:direction,to:e.points}),ty.points.localStore(e.type,e.points)
}
},ty.points.localStore=function(e,t) {
  localStorage.setItem(e,t)
},ty.voting= {update:function(e) {
  $("#pointsAPI-"+e.type).text(e.points)
}
},ty.realtime.serverMessage=function() {},$(function() {
  ty.load("search/search",function() {
    var e=ty.t("searchBlock", {}).addClass("menuItem");
e.find("input").focus(function() {}),e.find("input").autocomplete( {minLength:3,open:function() {
      e.find("input").autocomplete("widget").addClass("searchBoxResults"),e.find("input").autocomplete("widget").prepend(ty.t("searchBoxMenu", {}))
},source:function(e,t) {
      for(var n= {},i=0; i<ty.settings.modules.search.returnFields.length; i++)n[ty.settings.modules.search.returnFields[i]]=1;
      var o= {};
      ty.settings.modules.search.filters.forEach(function(e) {
        var t=[],n=_.clone(e.name);
        e.functions?t=ty.dulst.gameID:(t=_.clone(e),delete t.name),o[n]=t
}),ty.post("search/"+e.term, {filters:o,searchFields:ty.settings.modules.search.searchFields,ntypes:ty.settings.modules.search.ntypes,returnFields:n},function(e) {
        t([_.groupBy(e,"ntype")])
      })
    }
    }).data("autocomplete")._renderItem=function(e,t) {var n=ty.t("searchResultPreview",t); n.appendTo(e)},e.find("input").data("autocomplete").menu.options.selected=function() {e.find("input").autocomplete("close")},ty.region.mainMenu.append(e)
  })
}),ty.handler("socialLinks",function() {
$(".twitter.shareButton").sharrre( {share:{twitter:!0},template:'<div class="box"><div class="tweetButton"><img src="http://cdn1.dulst.com/cardSrcImage/1757qp90p_b2_btn_icon.gif"/><span>Tweet</span></div></div>',enableHover:!1,enableTracking:!0,buttons:{twitter:{via:"DulstGame"}},click:function(e) {
    e.simulateClick(),e.openPopup("twitter")
  }
}),$(".facebook.shareButton").sharrre( {share:{facebook:!0},template:'<div class="box"><img src="http://cdn1.dulst.com/cardSrcImage/1757ppadh_facebook_counter.png"/></div>',enableHover:!1,enableTracking:!0,click:function(e) {
    e.simulateClick(),e.openPopup("facebook")
  }
                                                                            })
}),function(e) {"use strict";
var t= {decelerate:
        !0,triggerHardware:
        !1,y:
        !0,x:
        !0,slowdown:
        .9,maxvelocity:40,throttleFPS:60,movingClass:
  {
up:"kinetic-moving-up"
,down:"kinetic-moving-down"
,left:"kinetic-moving-left"
,right:"kinetic-moving-right"
},deceleratingClass:
  {
up:"kinetic-decelerating-up"
,down:"kinetic-decelerating-down"
,left:"kinetic-decelerating-left"
,right:"kinetic-decelerating-right"
  }
         },n="kinetic-settings",i="kinetic-active";
  window.requestAnimationFrame||(window.requestAnimationFrame=function() {
    return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e) {
      window.setTimeout(e,1e3/60)
    }
}()),e.support=e.support|| {},e.extend(e.support, {touch:"ontouchend"in document});
  var o=function() {return!1},r=function(e,t) {return 0===Math.floor(Math.abs(e))?0:e*t},s=function(e,t) {var n=e; return e>0?e>t&&(n=t):0-t>e&&(n=0-t),n},a=function(e,t) {this.removeClass(e.movingClass.up).removeClass(e.movingClass.down).removeClass(e.movingClass.left).removeClass(e.movingClass.right).removeClass(e.deceleratingClass.up).removeClass(e.deceleratingClass.down).removeClass(e.deceleratingClass.left).removeClass(e.deceleratingClass.right),e.velocity>0&&this.addClass(t.right),e.velocity<0&&this.addClass(t.left),e.velocityY>0&&this.addClass(t.down),e.velocityY<0&&this.addClass(t.up)},l=function(e,t) {"function"==typeof t.stopped&&t.stopped.call(e,t)},c=function(e,t) {
    var n=e[0];
    t.x&&n.scrollWidth>0?(n.scrollLeft=t.scrollLeft=n.scrollLeft+t.velocity,Math.abs(t.velocity)>0&&(t.velocity=t.decelerate?r(t.velocity,t.slowdown):t.velocity)):t.velocity=0,t.y&&n.scrollHeight>0?(n.scrollTop=t.scrollTop=n.scrollTop+t.velocityY,Math.abs(t.velocityY)>0&&(t.velocityY=t.decelerate?r(t.velocityY,t.slowdown):t.velocityY)):t.velocityY=0,a.call(e,t,t.deceleratingClass),"function"==typeof t.moved&&t.moved.call(e,t),Math.abs(t.velocity)>0||Math.abs(t.velocityY)>0?window.requestAnimationFrame(function() {
      c(e,t)
    }):l(e,t)
    },d=function(t) {
    var i=e.kinetic.callMethods[t],o=Array.prototype.slice.call(arguments);
    i&&this.each(function() {
      var t=o.slice(1),r=e(this).data(n);
      t.unshift(r),i.apply(this,t)
    })
  },u=function(t,n) {var i=t[0]; e.support.touch?(i.addEventListener("touchstart",n.events.touchStart,!1),i.addEventListener("touchend",n.events.inputEnd,!1),i.addEventListener("touchmove",n.events.touchMove,!1)):t.mousedown(n.events.inputDown).mouseup(n.events.inputEnd).mousemove(n.events.inputMove),t.click(n.events.inputClick).bind("selectstart",o),t.bind("dragstart",n.events.dragStart)},h=function(t,n) {var i=t[0]; e.support.touch?(i.removeEventListener("touchstart",n.events.touchStart,!1),i.removeEventListener("touchend",n.events.inputEnd,!1),i.removeEventListener("touchmove",n.events.touchMove,!1)):t.unbind("mousedown",n.events.inputDown).unbind("mouseup",n.events.inputEnd).unbind("mousemove",n.events.inputMove),t.unbind("click",n.events.inputClick).unbind("selectstart",o),t.unbind("dragstart",n.events.dragStart)},f=function(o) {
    this.addClass(i).each(function() {
      var i,r,l,d,h=e.extend( {},t,o),f=this,p=e(this),m=!1,g=!1,y=!1,v=1e3/h.throttleFPS;
      h.velocity=0,h.velocityY=0;
      var b=function() {
        i=!1,r=!1,y=!1
      };
      e(document).mouseup(b).click(b);
      var w=function() {h.velocity=s(m-i,h.maxvelocity),h.velocityY=s(g-r,h.maxvelocity)},C=function(t) {return e.isFunction(h.filterTarget)?h.filterTarget.call(f,t)!==!1:!0},x=function(e,t) {y=!0,h.velocity=m=0,h.velocityY=g=0,i=e,r=t},_=function() {i&&m&&h.decelerate===!1&&(h.decelerate=!0,w(),i=m=y=!1,c(p,h))},k=function(t,n) {
        (!l||new Date>new Date(l.getTime()+v))&&(l=new Date,y&&(i||r)&&(d&&(e(d).blur(),d=null,p.focus()),h.decelerate=!1,h.velocity=h.velocityY=0,p[0].scrollLeft=h.scrollLeft=h.x?p[0].scrollLeft-(t-i):p[0].scrollLeft,p[0].scrollTop=h.scrollTop=h.y?p[0].scrollTop-(n-r):p[0].scrollTop,m=i,g=r,i=t,r=n,w(),a.call(p,h,h.movingClass),"function"==typeof h.moved&&h.moved.call(p,h)))
      };
h.events= {touchStart:
function(e){C(e.target)&&(x(e.touches[0].clientX,e.touches[0].clientY),e.stopPropagation())},touchMove:
function(e){y&&(k(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault&&e.preventDefault())},inputDown:
function(e){C(e.target)&&(x(e.clientX,e.clientY),d=e.target,"IMG"===e.target.nodeName&&e.preventDefault(),e.stopPropagation())},inputEnd:
function(e){_(),d=null,e.preventDefault&&e.preventDefault()},inputMove:
function(e){y&&(k(e.clientX,e.clientY),e.preventDefault&&e.preventDefault())},inputClick:
function(e){return Math.abs(h.velocity)>0?(e.preventDefault(),!1):void 0},dragStart:
      function() {
        return d?!1:void 0
      }
                },u(p,h),p.data(n,h).css("cursor","move"),h.triggerHardware&&p.css("-webkit-transform","translate3d(0,0,0)")
    })
  };
e.kinetic= {settingsKey:
            n,callMethods:
  {
start:
function(t,n){var i=e(this); t=e.extend(t,n),t&&(t.decelerate=!1,c(i,t))},end:
function(t){e(this); t&&(t.decelerate=!0)},stop:
function(e){e.velocity=0,e.velocityY=0,e.decelerate=!0},detach:
function(t){var n=e(this); h(n,t),n.removeClass(i).css("cursor","")},attach:
    function(t) {
      var n=e(this);
      u(n,t),n.addClass(i).css("cursor","move")
    }
  }
  },e.fn.kinetic=function(e) {
    return"string"==typeof e?d.apply(this,arguments):f.call(this,e),this
  }
}(window.jQuery||window.Zepto),ty.fields.upload=function(e) {
  e.find("input.form-file").each(function() {
    var e=$(this);
    e.hasClass("field-file")&&e.next("form").remove(),e.addClass("field-file"),e.uploadToInput(e.attr("data-uploadDestination"))
  })
},ty.user.current= {user:"anon",fieldAvatar:ty.settings.modules.user.defaultAvatar,get:function(e) {
  var t=ty.user.current; "anon"
  ==ty.user.current.user?ty.get("user/profile",function(t) {
    ty.user.current.user=t.user,ty.user.current.fieldAvatar=t.fieldAvatar,ty.user.current.profile=new ty.user.UserDisplayModel(t),"function"==typeof e&&e(t)
  }):"function"==typeof e&&e(t)
  }
},ty.handler("user:login",ty.user.current.get,!0),$(function() {
  ty.load("user/user",function() {
    function e() {
      $.event.trigger("user:login",s),o.appendTo("#invisibleTemplates"),r.appendTo("#invisibleTemplates"),s.appendTo("#mainMenu").find(".user").attr("href","/user/"+user).text(user)
    }
    function t() {
      o.appendTo("#mainMenu"),r.appendTo("#mainMenu"),s.appendTo("#invisibleTemplates"),ty.settings.user="anon",user="anon"
    }
        ty.user.loginBox=ty.t("user/login",!1),ty.user.register=ty.t("user/register",!1);
    var n=ty.user.register.find('input[type="email"]'),i=$("<div class='hint'></div>");
    i.css("display","none"),i.insertAfter(n),n.on("blur",function() {
i.css("display","none"),$(this).mailcheck( {suggested:function(e,t) {
        if(i.html())$(".address").html(t.address),$(".domain").html(t.domain);
        else {
          var t="Are you sure? Did you mean <span class='suggestion'><span class='address'>"+t.address+"</span>@<a class='domain'>"+t.domain+"</a></span>?";
          i.html(t).fadeIn(150)
        }
      }
                                                 })
    }),i.on("click",".domain",function() {
      return n.val($(".suggestion").text()),i.fadeOut(200,function() {
        $(this).empty()
      }),!1
    });
    var o=ty.t("user/login-link",!1),r=ty.t("user/register-link",!1),s=ty.t("user/user-header",!1); "anon"
    ==user?(o.appendTo("#mainMenu"),r.appendTo("#mainMenu")):e(),ty.user.loginBox.ajaxForm(function(t) {"authenticated"==t.status?(ty.settings.user=t.user,user=t.user,e(),ty.user.loginBox.dialog("close")):flashMessage("Incorrect email or password")
    }),ty.user.register.ajaxForm(function(t) {"registrationComplete"==t.status?(ty.settings.user=t.user,user=t.user,e(),ty.user.register.dialog("close")):"password too short"==t.status?ty.user.register.find(".password").notify("Password too short"):"password error"==t.status?ty.user.register.find(".password").notify("Passwords do not match"):"username error"==t.status?ty.user.register.find(".username").notify("This username is already registered. Please choose another."):"email error"==t.status?ty.user.register.find(".email").notify("This email is already registered. Please choose another."):flashMessage("Invalid registration")
    }),ty.user.logout=function() {
      $.post("/logout",void 0,function() {
        t()
      })
    },o.click(function() {
      ty.user.loginBox.dialog("open")
    }),r.click(function() {
      ty.user.register.dialog("open")
}),ty.user.loginBox.dialog( {title:"Login",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,modal:!0,dialogClass:"loginRegister"}),ty.user.register.dialog( {
title:"Register",position:["center","center"],closeOnEscape:!0,closeText:"x",autoOpen:!1,modal:!0,dialogClass:"loginRegister"
    })
  })
});
