(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(5),a=(n(20),n(21),n(8)),s=n(11),i=n(4),j=n(1),o=n(2),l=(n(22),n(23),n(0)),b=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},d=function(e){var t=e.isLoading,n=e.usersArr;return Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[t&&Object(l.jsx)(b,{}),!n.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})]})})},h=n(6),x=n.n(h),p=function(e){var t=e.to,n=e.text;return Object(l.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return x()("navbar-item ",{"has-background-grey-lighter":t})},children:n})},O=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(p,{to:"/",text:"Home"}),Object(l.jsx)(p,{to:"/people",text:"People"})]})})})},u=function(){return Object(l.jsx)("p",{children:"page not found"})},m=function(e){return e.name="name",e.fatherName="fatherName",e.motherName="motherName",e}({}),f=function(e){var t=e.person,n=e.handlePersonClick,c=e.personType,a=e.isPresentInTable,s=void 0===a||a;return Object(l.jsx)(l.Fragment,{children:s?Object(l.jsx)(r.b,{to:"#/people/".concat(t.slug),onClick:function(){n(t[c])},className:x()("",{"has-text-danger":c===m.name&&"f"===t.sex||c===m.motherName}),children:t[c]}):t[c]||"-"})},v=function(e){var t=e.usersArr,n=Object(j.useState)(null),c=Object(i.a)(n,2),r=c[0],a=c[1],s=function(e){a(e)},o=function(e){return t.some((function(t){return t.name===e}))};return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"person",className:r===e.name?"has-background-warning":"",children:[Object(l.jsx)("td",{children:Object(l.jsx)(f,{person:e,handlePersonClick:s,personType:m.name})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),Object(l.jsx)("td",{children:Object(l.jsx)(f,{person:e,personType:m.motherName,isPresentInTable:o(e.motherName),handlePersonClick:s})}),Object(l.jsx)("td",{children:Object(l.jsx)(f,{person:e,personType:m.fatherName,isPresentInTable:o(e.fatherName),handlePersonClick:s})})]},e.name)}))})]})},g=function(){var e=Object(j.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)([]),b=Object(i.a)(r,2),h=b[0],x=b[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,x(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error");case 14:return e.prev=14,c(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(O,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"people",element:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)(v,{usersArr:h})]})}),Object(l.jsx)(o.b,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(o.b,{path:"home",element:Object(l.jsx)(o.a,{to:"/",replace:!0})}),Object(l.jsx)(o.b,{path:"*",element:Object(l.jsx)(u,{})})]}),Object(l.jsx)(d,{isLoading:n,usersArr:h})]})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a,{children:Object(l.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.ef184c60.chunk.js.map