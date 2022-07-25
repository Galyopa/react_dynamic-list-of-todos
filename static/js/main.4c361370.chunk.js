(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(5),s=n.n(c),r=n(2),o=n(1),i=(n(13),n(14),n(6)),a=n.n(i),u=n(7),l=(n(17),n(0)),d=function(e){var t=e.todos,n=e.onButtonClick,c=Object(o.useState)(""),s=Object(r.a)(c,2),i=s[0],d=s[1],j=Object(o.useState)(""),b=Object(r.a)(j,2),O=b[0],h=b[1],p=Object(o.useState)(""),m=Object(r.a)(p,2),f=m[0],x=m[1],v=Object(o.useCallback)(Object(u.debounce)(h,1e3),[]),_=Object(o.useMemo)((function(){var e=O.toLowerCase();return t.filter((function(t){return t.title.toLowerCase().includes(e)&&(!f||String(t.completed)===f)}))}),[t,O,f]);return Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsxs)("label",{children:["Filter by title",Object(l.jsx)("input",{type:"text",name:"query",value:i,onChange:function(e){d(e.target.value),v(e.target.value)}})]}),Object(l.jsxs)("select",{name:"status",id:"status",value:f,onChange:function(e){return x(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All tasks"}),Object(l.jsx)("option",{value:"true",children:"Completed"}),Object(l.jsx)("option",{value:"false",children:"Active"})]}),Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list",children:_.map((function(e){return Object(l.jsxs)("li",{className:a()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return n(e.userId)},children:"User#".concat(e.userId)})]},e.id)}))})})]})},j=n(8),b=n(4),O=n.n(b),h=function(){var e=Object(j.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate.academy/students-api/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(n(20),function(e){var t=e.userId,n=e.onButtonClick,c=Object(o.useState)(null),s=Object(r.a)(c,2),i=s[0],a=s[1];return Object(o.useEffect)((function(){(function(e){return h("/users/".concat(e))})(t).then((function(e){return a(e)}))}),[t]),Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(null===i||void 0===i?void 0:i.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===i||void 0===i?void 0:i.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===i||void 0===i?void 0:i.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===i||void 0===i?void 0:i.phone}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(0)},children:"Clear"})]})}),m=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)([]),i=Object(r.a)(s,2),a=i[0],u=i[1],j=function(e){c(e)};return Object(o.useEffect)((function(){h("/todos").then((function(e){return u(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(d,{todos:a,onButtonClick:j})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:n?Object(l.jsx)(p,{userId:n,onButtonClick:j}):"No user selected"})})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4c361370.chunk.js.map