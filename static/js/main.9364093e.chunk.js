(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(66),s=a.n(r),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,225)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},i=a(121),j=a(210),u=a(11),b=a(79),l=a(26),p=a(22),d=a(0),O=a.n(d),x=a(2),h=a(4),f=a(58),m=a(204),v=a(215),g=a(218),y=a(59),w=a(64),k=a(5);function S(e){var t=Object(c.useState)({desc:"",price:0}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],j=o[1],b=function(e){r(Object(f.a)(Object(f.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},l=e.product.id?"\u4fee\u6539":"\u65b0\u589e",p=function(){var t=Object(x.a)(O.a.mark((function t(){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,a=Object(y.d)(),j(""),"\u65b0\u589e"!==l){t.next=10;break}return t.next=6,Object(y.a)(Object(y.b)(a,"product"),{desc:n.desc,price:parseInt(n.price)});case 6:c=t.sent,console.log(c.id),t.next=12;break;case 10:return t.next=12,Object(w.g)(Object(w.d)(a,"product",n),{desc:n.desc,price:parseInt(n.price)});case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.code),"permission-denied"===t.t0.code&&j("\u5c1a\u672a\u767b\u5165!!");case 18:e.close();case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)(m.a,{label:"\u7522\u54c1\u63cf\u8ff0",variant:"outlined",name:"desc",value:n.desc,onChange:b}),Object(k.jsx)("br",{}),"\u7522\u54c1\u50f9\u683c:",Object(k.jsx)(v.a,{type:"number",name:"price",value:n.price,onChange:b}),Object(k.jsx)("br",{}),Object(k.jsx)(g.a,{variant:"contained",href:"#contained-buttons",onClick:p,children:"\u65b0\u589e"}),i]})}var C=a(221),I=a(213),T=a(219),N=a(222),E=a(120),P=a.n(E),U=a(220),z=a(202),A=a(205);function B(){var e=n.a.useState("1"),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(k.jsx)(T.a,{sx:{width:"100%",typography:"body1"},children:Object(k.jsx)(z.a,{value:a,children:Object(k.jsx)(T.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(k.jsxs)(A.a,{onChange:function(e,t){c(t)},"aria-label":"lab API tabs example",children:[Object(k.jsx)(U.a,{label:"product",value:"1",component:b.b,to:"/product"}),Object(k.jsx)(U.a,{label:"employee",value:"2",component:b.b,to:"/employee"}),Object(k.jsx)(U.a,{label:"ImageUpload",value:"3",component:b.b,to:"/ImageUpload"})]})})})})}var D=void 0,F=1,J=2,M=0,G=n.a.createContext({status:F,setStatus:function(e){D.status=e}}),R=a(35),K=a(214),L=a(217),Q=a(208),H=a(211),V={apiKey:"AIzaSyDbvwJFecQyyjezxed4NTDTkaCVUE2Q1K4",authDomain:"product-558a8.firebaseapp.com",projectId:"product-558a8",storageBucket:"product-558a8.appspot.com",messagingSenderId:"124782432067",appId:"1:124782432067:web:b73d265599a117e4f5e9f6",measurementId:"G-DTWMG0S34G"};function W(){0===Object(R.a)().length&&Object(R.b)(V);var e=Object(y.d)(),t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),i=o[0],j=o[1],b=Object(c.useState)(!1),l=Object(u.a)(b,2),d=l[0],h=l[1],f=Object(c.useState)([{desc:"iPad",price:2e4},{desc:"iPhone X",price:3e4}]),m=Object(u.a)(f,2),v=m[0],g=m[1],E=Object(c.useContext)(G);Object(c.useEffect)((function(){function t(){return(t=Object(x.a)(O.a.mark((function t(){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,Object(y.c)(Object(y.b)(e,"product"));case 3:a=t.sent,c=[],a.forEach((function(e){console.log(e.id," => ",e.data()),c.push({desc:e.data().desc,price:e.data().price})})),console.log(c),g([].concat(c)),r(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,i,d]);var U=function(e){g((function(t){return[].concat(Object(p.a)(t),[e])})),j(!1)},z=function(){j(!1)},A=function(){var t=Object(x.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,Object(w.c)(Object(w.d)(e,"product",a));case 4:h(d+1),r(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){return Object(k.jsxs)(L.a,{subheader:"Product list","aria-label":"product list",children:[v.map((function(e,t){return Object(k.jsxs)(Q.a,{divider:!0,children:[Object(k.jsx)(H.a,{primary:e.desc,secondary:"NT$"+e.price}),Object(k.jsx)(C.a,{edge:"end","aria-label":"delete",onClick:function(){return A(e.id)},children:Object(k.jsx)(P.a,{})}),Object(k.jsx)(I.a,{onClose:z,open:i,children:Object(k.jsx)(S,{update:U,product:e,close:z})}),";"]},t)})),E.status===F?Object(k.jsx)(T.a,{}):Object(k.jsx)(T.a,{sx:{width:"100vw",textAlign:"center"},children:Object(k.jsx)(N.a,{size:"medium",color:"secondary","aria-label":"add",onClick:function(){return j(!0)},children:"+"})})]})};return Object(k.jsxs)(T.a,{sx:{width:"100vw",height:"100vh",backgroundColor:"background.paper",color:"black",textAlign:"left"},children:[Object(k.jsx)(B,{}),n?Object(k.jsx)(K.a,{}):Object(k.jsx)(D,{})]})}function X(){var e=Object(c.useState)([{id:"0",name:"Ben",department:"IT"},{id:"1",name:"Rich",department:"Marketing"},{id:"2",name:"Ruby",department:"Management"},{id:"3",name:"Judy",department:"IT"},{id:"4",name:"Rain",department:"IT"}]),t=Object(u.a)(e,1)[0],a=Object(c.useState)(0),n=Object(u.a)(a,2),r=n[0],s=n[1];return Object(k.jsxs)(T.a,{sx:{width:"100vw",height:"100vh",backgroundColor:"background.paper",color:"black",textAlign:"left"},children:[Object(k.jsx)(B,{}),Object(k.jsx)(L.a,{subheader:"Employee list","aria-label":"employee list",children:t.map((function(e,t){return Object(k.jsx)(Q.a,{divider:!0,onClick:function(){return function(e){s(e)}(t)},selected:r===t,children:Object(k.jsx)(H.a,{primary:e.name,secondary:"@"+e.department})},t)}))})]})}var $=a(55);function q(e){0===Object(R.a)().length&&Object(R.b)(V);var t=Object(c.useState)({email:"",password:"",displayName:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],j=o[1],b=Object(c.useContext)(G),l=function(e){r(Object(f.a)(Object(f.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},p=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object($.b)(),e.next=4,Object($.a)(t,n.email,n.password);case 4:if(!e.sent){e.next=8;break}return e.next=8,Object($.e)(t.currentUser,{displayName:n.displayName});case 8:j(""),b.setStatus(F),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j(""+e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("form",{children:[Object(k.jsx)(m.a,{type:"text",name:"displayName",value:n.displayName,placeholder:"\u59d3\u540d",label:"\u59d3\u540d:",onChange:l}),Object(k.jsx)("br",{}),Object(k.jsx)(m.a,{type:"email",name:"email",value:n.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:l}),Object(k.jsx)("br",{}),Object(k.jsx)(m.a,{type:"password",name:"password",value:n.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:l,autoComplete:"current-password"}),Object(k.jsx)("br",{}),i,Object(k.jsx)(g.a,{variant:"contained",color:"primary",onClick:p,children:"\u8a3b\u518a"}),Object(k.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(){b.setStatus(F)},children:"\u5df2\u7d93\u8a3b\u518a\uff0c\u6211\u8981\u767b\u5165"})]})}function Y(e){0===Object(R.a)().length&&Object(R.b)(V);var t=Object(c.useState)({email:"",password:"",displayName:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],j=o[1],b=Object(c.useContext)(G),l=function(e){r(Object(f.a)(Object(f.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},p=function(){var t=Object(x.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object($.b)(),t.next=4,Object($.c)(a,n.email,n.password);case 4:t.sent&&e.setStatus("signedIn"),j(""),b.setStatus(J),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),j(""+t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)("form",{children:[Object(k.jsx)(m.a,{type:"email",name:"email",value:n.email,placeholder:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1",label:"\u96fb\u5b50\u90f5\u4ef6\u4fe1\u7bb1:",onChange:l,autoComplete:"email"}),Object(k.jsx)("br",{}),Object(k.jsx)(m.a,{type:"password",name:"password",value:n.password,placeholder:"\u5bc6\u78bc",label:"\u5bc6\u78bc:",onChange:l,autoComplete:"current-password"}),Object(k.jsx)("br",{}),i,Object(k.jsx)("br",{}),Object(k.jsx)(g.a,{variant:"contained",color:"primary",onClick:p,children:"\u767b\u5165"}),Object(k.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(){b.setStatus(M)},children:"\u6211\u8981\u8a3b\u518a"})]})}function Z(e){0===Object(R.a)().length&&Object(R.b)(V);var t=Object(c.useState)(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useContext)(G),o=function(){var t=Object(x.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object($.b)(),t.next=4,Object($.d)(a);case 4:r(""),e.setStatus("signIn"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r(""+t.t0),s.setStatus(F);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)("form",{children:[Object(k.jsx)(g.a,{variant:"contained",color:"primary",onClick:o,children:"\u767b\u51fa"}),n,Object(k.jsx)("br",{})]})}function _(){var e=Object(c.useState)("signIn"),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)(B,{}),"signUp"===a?Object(k.jsx)(q,{setStatus:n}):"signIn"===a?Object(k.jsx)(Y,{setStatus:n}):Object(k.jsx)(Z,{setStatus:n})]})}var ee=a(61),te=a(223),ae=a(224);function ce(){0===Object(R.a)().length&&Object(R.b)(V);var e=Object(ee.b)(),t=Object(c.useState)(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),i=o[0],j=o[1],b=Object(c.useState)(0),l=Object(u.a)(b,2),d=l[0],h=l[1],f=function(){var t=Object(x.a)(O.a.mark((function t(a){var c,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a.target.files[0]),t.prev=1,r(""),c=Object(ee.d)(e,a.target.files[0].name),t.next=6,Object(ee.e)(c,a.target.files[0]);case 6:return console.log("Uploaded a blob or file!"),t.next=9,Object(ee.a)(c);case 9:n=t.sent,console.log(n),h((function(e){return e+1})),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0.code),"storage/unauthorized"===t.t0.code&&r("\u5c1a\u672a\u767b\u5165");case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){function t(){return t=Object(x.a)(O.a.mark((function t(){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r("waiting..."),a=Object(ee.d)(e,"/"),t.next=5,Object(ee.c)(a);case 5:c=t.sent,j([]),c.items.forEach(function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)(t);case 2:a=e.sent,j((function(e){return[].concat(Object(p.a)(e),[{img:a,title:t.name}])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(""),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),r("\u5c1a\u672a\u767b\u5165"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,d]),Object(k.jsxs)(T.a,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(v.a,{type:"file",accept:"image/x-png,image/jpeg",onChange:f}),Object(k.jsx)("br",{}),n,Object(k.jsx)(te.a,{sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:i.map((function(e){return Object(k.jsx)(ae.a,{children:Object(k.jsx)("img",{src:"".concat(e.img,"?w=164&h=164&fit=crop&auto=format"),srcSet:"".concat(e.img,"?w=164&h=164&fit=crop&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy"})},e.title)}))})]})}function ne(){var e=Object(c.useState)(F),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(k.jsx)(G.Provider,{value:{status:a,setStatus:n},children:Object(k.jsx)(b.a,{children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{exact:!0,path:"/",component:_}),Object(k.jsx)(l.a,{path:"/product",component:W}),Object(k.jsx)(l.a,{exact:!0,path:"/employee",component:X}),Object(k.jsx)(l.a,{path:"/ImageUpload",component:ce})]})})})}var re=Object(i.a)({palette:{primary:{main:"#ff9800"},secondary:{main:"#ba68c8"},dark:{main:"#03a9f4"}}});s.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(j.a,{theme:re,children:Object(k.jsx)(ne,{})})}),document.getElementById("root")),o()}},[[156,1,2]]]);
//# sourceMappingURL=main.9364093e.chunk.js.map