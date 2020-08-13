(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(27),a(9)),i=a(5),s=a.n(i),u=a(7),m=a(6),p=a(12),d="localhost"===window.location.hostname?"http://localhost:1337":"https://travel-log-api.now.sh";function h(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/api/logs"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.apiKey,delete t.apiKey,e.next=4,fetch("".concat(d,"/api/logs"),{method:"POST",headers:{"content-type":"application/json","X-API-KEY":a},body:JSON.stringify(t)});case 4:if(!(n=e.sent).headers.get("content-type").includes("text/html")){e.next=12;break}return e.next=8,n.text();case 8:c=e.sent,r={message:c},e.next=15;break;case 12:return e.next=14,n.json();case 14:r=e.sent;case 15:if(!n.ok){e.next=17;break}return e.abrupt("return",r);case 17:throw(l=new Error(r.message)).response=r,l;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=a(21),y=function(e){var t=e.location,a=e.onClose,c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1],p=Object(n.useState)(""),d=Object(m.a)(p,2),h=d[0],f=d[1],E=Object(g.a)(),y=E.register,x=E.handleSubmit,v=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),n.latitude=t.latitude,n.longitude=t.longitude,e.next=6,b(n);case 6:a(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),f(e.t0.message),i(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:x(v),className:"entry-form"},h?r.a.createElement("h3",{className:"error"},h):null,r.a.createElement("label",{htmlFor:"apiKey"},"API KEY"),r.a.createElement("input",{type:"password",name:"apiKey",required:!0,ref:y}),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",required:!0,ref:y}),r.a.createElement("label",{htmlFor:"comments"},"Comments"),r.a.createElement("textarea",{name:"comments",rows:3,ref:y}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",rows:3,ref:y}),r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",ref:y}),r.a.createElement("label",{htmlFor:"visitDate"},"Visit Date"),r.a.createElement("input",{name:"visitDate",type:"date",required:!0,ref:y}),r.a.createElement("button",{disabled:o},o?"Loading...":"Create Entry"))},x=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),i=Object(m.a)(l,2),d=i[0],f=i[1],b=Object(n.useState)(null),E=Object(m.a)(b,2),g=E[0],x=E[1],v=Object(n.useState)({width:"100vw",height:"100vh",latitude:37.6,longitude:-95.665,zoom:3}),j=Object(m.a)(v,2),w=j[0],O=j[1],k=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){k()}),[]);return r.a.createElement(p.c,Object.assign({},w,{mapStyle:"mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay",mapboxApiAccessToken:"pk.eyJ1IjoibWFiZGVsYmFzaXIiLCJhIjoiY2tkcndmM3ozMGNhdzJzdDY3NXQyZHIxNiJ9.smjKiQT23bzGz0lZdqLstg",onViewportChange:O,onDblClick:function(e){var t=Object(m.a)(e.lngLat,2),a=t[0],n=t[1];x({latitude:n,longitude:a})}}),a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement(p.a,{latitude:e.latitude,longitude:e.longitude},r.a.createElement("div",{onClick:function(){return f(Object(o.a)({},e._id,!0))}},r.a.createElement("svg",{className:"marker yellow",style:{height:"".concat(6*w.zoom,"px"),width:"".concat(6*w.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))))),d[e._id]?r.a.createElement(p.b,{latitude:e.latitude,longitude:e.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return f({})},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.comments),r.a.createElement("small",null,"Visited on: ",new Date(e.visitDate).toLocaleDateString()),e.image&&r.a.createElement("img",{src:e.image,alt:e.title}))):null)})),g?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{latitude:g.latitude,longitude:g.longitude},r.a.createElement("div",null,r.a.createElement("svg",{className:"marker red",style:{height:"".concat(6*w.zoom,"px"),width:"".concat(6*w.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})))))),r.a.createElement(p.b,{latitude:g.latitude,longitude:g.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return x(null)},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement(y,{onClose:function(){x(null),k()},location:g})))):null)};l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.db6a41b4.chunk.js.map