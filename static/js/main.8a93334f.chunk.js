(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(9),o=n.n(c),a=(n(14),n(5)),l=n(6),r=n(3),s=n(2),u=n(19),d=(n(15),n(0)),j=function(t){var e=Object(i.useState)(""),n=Object(s.a)(e,2),c=n[0],o=n[1],a=Object(i.useState)(null),l=Object(s.a)(a,2),r=l[0],u=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:r?"errorInput":"",value:c,onChange:function(t){o(t.currentTarget.value),u(null)}}),Object(d.jsx)("button",{onClick:function(){0===c.trim().length?u("Title is required"):(t.callback(c),o(""))},children:"+"}),Object(d.jsx)("div",{className:"error",children:r||""})]})},b=function(t){var e=Object(i.useState)(!1),n=Object(s.a)(e,2),c=n[0],o=n[1],a=Object(i.useState)(t.title),l=Object(s.a)(a,2),r=l[0],u=l[1];return c?Object(d.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},value:r,onBlur:function(){t.onChange(r),o(!1)},type:"text",autoFocus:!0}):Object(d.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.title})},f=function(t){return Object(d.jsxs)("div",{className:"ToDoList",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{onChange:function(e){t.changeTodolistTitle(e)},title:t.title}),Object(d.jsx)("button",{onClick:function(){t.removeTodolist(t.todolistID)},children:"x"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(j,{callback:t.addTask})}),Object(d.jsx)("ul",{children:t.task.map((function(e){return Object(d.jsxs)("li",{className:e.isDone?"isDone":"",children:[Object(d.jsx)("button",{onClick:function(){t.removeTask(t.todolistID,e.id)},children:"x"}),Object(d.jsx)("input",{onChange:function(n){var i=n.currentTarget.checked;t.changeStatus(t.todolistID,e.id,i)},type:"checkbox",checked:e.isDone}),Object(d.jsx)(b,{title:e.title,onChange:function(n){t.changeTaskTitle(t.todolistID,n,e.id)}})]},e.id)}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"all"===t.filter?"activeButton":"",onClick:function(){t.changeFilter("all",t.todolistID)},children:"All"}),Object(d.jsx)("button",{className:"notdone"===t.filter?"activeButton":"",onClick:function(){t.changeFilter("notdone",t.todolistID)},children:"Active"}),Object(d.jsx)("button",{className:"done"===t.filter?"activeButton":"",onClick:function(){t.changeFilter("done",t.todolistID)},children:"Completed"})]})]})},O=Object(u.a)(),h=Object(u.a)();var v=function(){var t,e=Object(i.useState)([{id:O,title:"What to learn",filter:"all"},{id:h,title:"What to buy",filter:"all"}]),n=Object(s.a)(e,2),c=n[0],o=n[1],b=Object(i.useState)((t={},Object(r.a)(t,O,[{id:Object(u.a)(),title:"HTML&CSS",isDone:!0},{id:Object(u.a)(),title:"JS",isDone:!0},{id:Object(u.a)(),title:"React",isDone:!1},{id:Object(u.a)(),title:"rest api",isDone:!1},{id:Object(u.a)(),title:"graphQL",isDone:!1}]),Object(r.a)(t,h,[{id:Object(u.a)(),title:"Beer",isDone:!1},{id:Object(u.a)(),title:"Milk",isDone:!1},{id:Object(u.a)(),title:"Bread",isDone:!1}]),t)),v=Object(s.a)(b,2),x=v[0],g=v[1],k=function(t,e){var n=c.find((function(t){return t.id===e}));n&&(n.filter=t,o(Object(l.a)(c)))},m=function(t,e){var n=x[t];x[t]=n.filter((function(t){return t.id!==e})),g(Object(a.a)({},x))},D=function(t){var e=c.filter((function(e){return e.id!==t}));o(e),delete x[t]},T=function(t,e,n){var i=x[t].find((function(t){return t.id===e}));i&&(i.isDone=n),g(Object(a.a)({},x))},p=function(t,e,n){var i=x[t].find((function(t){return t.id===n}));i&&(i.title=e),g(Object(a.a)({},x))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{callback:function(t){var e=Object(u.a)();o([{id:e,title:t,filter:"all"}].concat(Object(l.a)(c))),x[e]=[]}}),c.map((function(t){var e=x[t.id];"done"===t.filter&&(e=e.filter((function(t){return t.isDone}))),"notdone"===t.filter&&(e=e.filter((function(t){return!t.isDone})));return Object(d.jsx)(f,{todolistID:t.id,title:t.title,filter:t.filter,task:e,addTask:function(e){var n=x[t.id],i={id:Object(u.a)(),title:e,isDone:!1};x[t.id]=[].concat(Object(l.a)(n),[i]),g(Object(a.a)({},x))},changeStatus:T,removeTask:m,changeFilter:k,removeTodolist:D,changeTodolistTitle:function(e){var n=c.find((function(e){return e.id===t.id}));n&&(n.title=e),o(Object(l.a)(c))},changeTaskTitle:p},t.id)}))]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8a93334f.chunk.js.map