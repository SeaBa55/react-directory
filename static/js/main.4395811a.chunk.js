(this["webpackJsonpreact-directory"]=this["webpackJsonpreact-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n(12),s=n.n(a),i=(n(20),n(21),n(14));n(22);var o=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.image,className:"img-fluid img-thumbnail",alt:"profile"})}),Object(c.jsx)("td",{children:e.firstName}),Object(c.jsx)("td",{children:e.lastName})]})};n(23);var l=function(){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",children:"First Name"}),Object(c.jsx)("th",{scope:"col",children:"Last Name"})]})},d=n(13),j=n.n(d),u={getUsers:function(){return j.a.get("https://randomuser.me/api/?results=20&nat=us")}};var b=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){u.getUsers().then((function(e){a(e.data.results)}))}),[]),Object(c.jsxs)("table",{className:"table table-striped table-dark",children:[Object(c.jsx)("thead",{children:Object(c.jsx)(l,{})}),Object(c.jsx)("tbody",{children:n.map((function(e,t){return Object(c.jsx)(o,{image:e.picture.medium,firstName:e.name.first,lastName:e.name.last},t)}))})]})};n(41);var m=function(){return Object(c.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon1",children:"Search"})}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"search name","aria-label":"Example text with button addon","aria-describedby":"button-addon1"})]})};var h=function(){return Object(c.jsxs)("div",{className:"container col-12",children:[Object(c.jsx)(m,{}),Object(c.jsx)(b,{})]})};n(42);var f=function(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})};n(43);var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{children:Object(c.jsx)(h,{})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(44);s.a.render(Object(c.jsx)(p,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.4395811a.chunk.js.map