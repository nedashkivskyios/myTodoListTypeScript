(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(7),o=n.n(c),r=(n(12),n(6)),s=n(2),a=n(17),l=(n(13),n(0)),u=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1];return Object(l.jsxs)("div",{className:"ToDoList",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{className:e.error?"errorInput":"",value:c,onChange:function(t){o(t.currentTarget.value),e.setError(null)}}),Object(l.jsx)("button",{onClick:function(){e.addTask(c),o("")},children:"+"}),Object(l.jsx)("div",{className:"error",children:e.error?e.error:""})]}),Object(l.jsx)("ul",{children:e.task.map((function(t){return Object(l.jsxs)("li",{className:t.isDone?"isDone":"",children:[Object(l.jsx)("button",{onClick:function(){e.removeTask(t.id)},children:"x"}),Object(l.jsx)("input",{onChange:function(n){var i=n.currentTarget.checked;e.changeStatus(t.id,i)},type:"checkbox",checked:t.isDone}),Object(l.jsx)("span",{children:t.title})]},t.id)}))}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"all"===e.filter?"activeButton":"",onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{className:"notdone"===e.filter?"activeButton":"",onClick:function(){e.setFilter("notdone")},children:"Active"}),Object(l.jsx)("button",{className:"done"===e.filter?"activeButton":"",onClick:function(){e.setFilter("done")},children:"Completed"})]})]})};var d=function(){var e=Object(i.useState)([{id:Object(a.a)(),title:"HTML&CSS",isDone:!0},{id:Object(a.a)(),title:"JS",isDone:!0},{id:Object(a.a)(),title:"React",isDone:!1},{id:Object(a.a)(),title:"rest api",isDone:!1},{id:Object(a.a)(),title:"graphQL",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(null),d=Object(s.a)(o,2),j=d[0],b=d[1],h=Object(i.useState)("all"),O=Object(s.a)(h,2),f=O[0],v=O[1],m=n;return"done"===f&&(m=m.filter((function(e){return e.isDone}))),"notdone"===f&&(m=m.filter((function(e){return!e.isDone}))),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{addTask:function(e){if(0===e.trim().length)b("Title is required");else{var t={id:Object(a.a)(),title:e,isDone:!1},i=[].concat(Object(r.a)(n),[t]);c(i)}},title:"How to learn",error:j,task:m,changeStatus:function(e,t){var i=n.find((function(t){return t.id===e}));i&&(i.isDone=t),c(Object(r.a)(n))},removeTask:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)},setFilter:v,setError:b,filter:f})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(l.jsx)(d,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e8e8ce18.chunk.js.map