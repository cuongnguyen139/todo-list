(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=(n(14),n(5)),l=n(9),o=n(3),d=n(8),u=n(18),j=n(0),b=Object(c.createContext)(),f=function(t){var e=Object(c.useState)(d),n=Object(o.a)(e,2),i=n[0],s=n[1],a=Object(c.useState)(null),f=Object(o.a)(a,2),m=f[0],O=f[1];return Object(j.jsx)(b.Provider,{value:{tasks:i,edittedItem:m,addTask:function(t){s([].concat(Object(l.a)(i),[{title:t,id:Object(u.a)()}]))},removeTask:function(t){s(i.filter((function(e){return e.id!==t})))},findItem:function(t){var e=i.find((function(e){return e.id===t}));O(e)},editTask:function(t,e,n){var c=i.map((function(c){return c.id===e?{title:t,id:e,complete:n}:c}));s(c),O(null)},toggleHandler:function(t){var e=i.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{complete:!e.complete}):Object(r.a)({},e)}));s(e)}},children:t.children})},m=function(t){var e=t.task;console.log(e);var n=Object(c.useContext)(b),i=n.removeTask,s=n.findItem,a=n.toggleHandler;return Object(j.jsxs)("li",{className:"list-group-item border-0",children:[Object(j.jsx)("span",{className:e.complete?"strike":"",onClick:function(){return a(e.id)},children:e.title}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn btn-danger mr-3",onClick:function(){return i(e.id)},children:Object(j.jsx)("i",{className:"fas fa-trash-alt"})}),Object(j.jsx)("button",{className:"btn btn-info",onClick:function(){return s(e.id)},children:Object(j.jsx)("i",{className:"fas fa-pen"})})]})]})},O=function(){var t=Object(c.useContext)(b).tasks;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(j.jsx)(m,{task:t},t.id)}))})})},p=function(){var t=Object(c.useContext)(b),e=t.addTask,n=t.edittedItem,i=t.editTask,s=Object(c.useState)(""),a=Object(o.a)(s,2),r=a[0],l=a[1];return Object(c.useEffect)((function(){l(n?n.title:"")}),[n]),Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),n?i(r,n.id,n.complete):(e(r),l(""))},children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("input",{className:"form-control",onChange:function(t){l(t.target.value)},value:r,type:"text",placeholder:"add a task",required:!0}),Object(j.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:n?"Finish editting":"Add a task"})]})})},x=function(){return Object(j.jsx)("h1",{className:"text-center",children:"Task Management"})},h=function(){return Object(j.jsx)(f,{children:Object(j.jsxs)("div",{className:"container text-center",children:[Object(j.jsx)(x,{}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{})]})})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},8:function(t){t.exports=JSON.parse('[{"id":1,"title":"Task 1","complete":false},{"id":2,"title":"Task 2","complete":false},{"id":3,"title":"Task 3","complete":false},{"id":4,"title":"Task 4","complete":false},{"id":5,"title":"Task 5","complete":false}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.baef228d.chunk.js.map