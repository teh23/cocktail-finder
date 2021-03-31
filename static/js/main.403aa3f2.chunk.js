(this["webpackJsonpcocktail-finder"]=this["webpackJsonpcocktail-finder"]||[]).push([[0],{37:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(8),c=s.n(a),r=(s(10),s(0)),i=function(){return Object(r.jsxs)("section",{className:"hero is-primary has-background-primary-dark is-medium",children:[Object(r.jsx)("div",{className:"hero-head",children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"navbar-brand",children:Object(r.jsx)("a",{href:"#",className:"navbar-item is-size-5 has-text-weight-bold is-family-sans-serif has-text-white",children:"COCKTAIL FINDER"})}),Object(r.jsx)("span",{className:"navbar-burger","data-target":"navbarMenuHeroA",children:Object(r.jsx)("span",{})}),Object(r.jsx)("div",{id:"navbarMenuHeroA",className:"navbar-menu",children:Object(r.jsxs)("div",{className:"navbar-end",children:[Object(r.jsx)("a",{href:"#",className:"navbar-item is-active",children:"Home"}),Object(r.jsx)("span",{className:"navbar-item",children:Object(r.jsxs)("a",{className:"button",children:[Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fab fa-github"})}),Object(r.jsx)("span",{children:"Project"})]})})]})})]})})}),Object(r.jsxs)("div",{className:"hero-body",children:[Object(r.jsxs)("div",{className:"container has-text-centered",children:[Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-cocktail icon is-large"})}),Object(r.jsx)("span",{className:"title is-1 has-text-light ml-5",children:"Cocktail finder"}),Object(r.jsx)("p",{className:"subtitle mt-3 is-5 has-text-grey-lighter",children:"search your favorite drink recipe"})]}),Object(r.jsxs)("div",{className:"container has-text-centered mt-5 is-medium",children:[Object(r.jsx)("div",{className:"columns is-centered",children:Object(r.jsx)("div",{className:"column is-8",children:Object(r.jsx)("input",{className:"input"})})}),Object(r.jsx)("button",{className:"mt-5 pl-5 pr-5 button is-primary ",children:"Search"})]})]})]})},l=s(4),o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("progress",{className:"mt-5 mb-5 progress is-small is-primary",max:"100"})})},u=(s(36),function(e){var t=e.title,s=Object(l.c)((function(e){return e.filters}));return s.loading?Object(r.jsx)(o,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"title",children:t}),s.categories.map((function(e){return Object(r.jsx)("button",{className:"is-small button mr-2 mt-3",children:e.name},e.name)}))]})}),j=s(24),d=function(e){var t=e.title,s=Object(l.c)((function(e){return e.filters})),a=Object(n.useState)(""),c=Object(j.a)(a,2),i=c[0],u=c[1];if(s.loading)return Object(r.jsx)(o,{});return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"title",children:t}),Object(r.jsx)("input",{className:"input",onChange:function(e){u(e.target.value)},value:i,placeholder:"search.."}),s.glasses.filter((function(e){return""===i?e.name:e.name.toLowerCase().includes(i.toLowerCase())})).map((function(e){return Object(r.jsx)("button",{className:" is-small button mr-2 mt-3 ",children:e.name},e.name)}))]})},b=function(e){var t=e.title;return Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"title",children:t})})},m=function(){return Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsxs)("div",{className:"columns is-9",children:[Object(r.jsx)("div",{className:"column is-3",children:Object(r.jsx)("div",{className:"box",children:Object(r.jsx)(u,{title:"Categories:"})})}),Object(r.jsxs)("div",{className:"column  is-9",children:[Object(r.jsx)("div",{className:"box",children:Object(r.jsx)(d,{title:"Glasses:"})}),Object(r.jsx)("div",{className:"box",children:Object(r.jsx)(b,{title:"Results:"})})]})]}),Object(r.jsx)("div",{className:"column is-12"})]})},h=(s(37),s(3)),p=s.n(h),x=s(5),O=s(7),f=s.n(O),v={getCategories:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getGlasses:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getIngredients:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAlcoholic:function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},g={categories:"",glasses:"",ingredients:"",alcoholic:"",loading:!0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return t.data;default:return e}};var w=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(x.a)(p.a.mark((function e(t){var s,n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getCategories();case 2:return s=e.sent,e.next=5,v.getGlasses();case 5:return n=e.sent,e.next=8,v.getIngredients();case 8:return a=e.sent,e.next=11,v.getAlcoholic();case 11:c=e.sent,t({type:"FETCH_CATEGORIES",data:{categories:s.map((function(e){return{name:e.strCategory,state:!1}})),glasses:n.map((function(e){return{name:e.strGlass,state:!1}})),ingredients:a.map((function(e){return{name:e.strIngredient1,state:!1}})),alcoholic:c.map((function(e){return{name:e.strAlcoholic,state:!1}})),loading:!1}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{}),Object(r.jsx)(m,{})]})},k=s(6),y=s(23),C=Object(k.c)({filters:N}),E=Object(k.d)(C,Object(k.a)(y.a));c.a.render(Object(r.jsx)(l.a,{store:E,children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.403aa3f2.chunk.js.map