(this["webpackJsonpcocktail-finder"]=this["webpackJsonpcocktail-finder"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(10),r=a.n(c),i=(a(12),a(8)),l=a(4),o=a(2),u=a.n(o),j=a(5),d=a(9),b=a(6),h=a.n(b),m={getCategories:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getGlasses:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getIngredients:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAlcoholic:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list");case 2:return t=e.sent,e.abrupt("return",t.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},p={searchByName:function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.drinks);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x={categories:"",glasses:"",ingredients:"",alcoholic:"",searchByName:{data:"",loading:!0},loading:!0},O=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.searchByName(e);case 2:s=t.sent,a({type:"FETCH_SEARCH",data:{data:s,loading:!1}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:t.data.categories,alcoholic:t.data.alcoholic,glasses:t.data.glasses,ingredients:t.data.ingredients,loading:t.data.loading});case"FETCH_SEARCH":return Object(d.a)(Object(d.a)({},e),{},{searchByName:t.data});default:return e}},v=a(0),g=function(){var e=n.a.useState(""),t=Object(i.a)(e,2),a=t[0],s=t[1],c=n.a.useState(!1),r=Object(i.a)(c,2),o=r[0],u=r[1],j=Object(l.b)(),d=function(e){e.preventDefault(),"click"!==e.type&&"13"!==e.which||j(O(a))};return Object(v.jsxs)("section",{className:"hero is-primary has-background-primary-dark is-medium",children:[Object(v.jsx)("div",{className:"hero-head",children:Object(v.jsx)("nav",{className:"navbar",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"navbar-brand",children:[Object(v.jsx)("a",{href:"#",className:"navbar-item is-size-5 has-text-weight-bold is-family-sans-serif has-text-white",children:"COCKTAIL FINDER"}),Object(v.jsxs)("p",{className:"has-text-white navbar-burger ".concat(o?"is-active":""),role:"button",onClick:function(){u(!o)},"data-target":"navbarMenuHeroA",children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]})]}),Object(v.jsx)("div",{id:"navbarMenuHeroA",className:"navbar-menu pb-0  pt-0 ".concat(o?"is-active":""),children:Object(v.jsxs)("div",{className:"navbar-end",children:[Object(v.jsx)("a",{href:"#",className:"navbar-item is-active",children:"Home"}),Object(v.jsx)("span",{className:"navbar-item",children:Object(v.jsxs)("a",{href:"https://github.com/teh23/cocktail-finder",className:"button",children:[Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)("i",{className:"fab fa-github"})}),Object(v.jsx)("span",{children:"Project"})]})})]})})]})})}),Object(v.jsxs)("div",{className:"hero-body-padding-medium mt-6",children:[Object(v.jsxs)("div",{className:"container has-text-centered",children:[Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)("i",{className:"fas fa-cocktail icon is-large"})}),Object(v.jsx)("span",{className:"title is-1 has-text-light ml-5",children:"Cocktail finder"}),Object(v.jsx)("p",{className:"subtitle mt-3 is-5 has-text-grey-lighter",children:"search your favorite drink recipe"})]}),Object(v.jsxs)("div",{className:"container has-text-centered mt-5 is-medium",children:[Object(v.jsx)("div",{className:"columns is-centered",children:Object(v.jsx)("div",{className:"column is-8",children:Object(v.jsx)("input",{className:"input",placeholder:"search by name...",value:a,onChange:function(e){s(e.target.value),j(O(e.target.value))}})})}),Object(v.jsx)("button",{className:"mt-5 mb-5 pl-5 pr-5 button is-primary ",onClick:d,onKeyDown:d,children:"Search"})]})]})]})},N=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("progress",{className:"mt-5 mb-5 progress is-small is-primary",max:"100"})})},w=function(e){var t=e.title,a=Object(l.c)((function(e){return e.filters}));return a.loading?Object(v.jsx)(N,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"title",children:t}),a.categories.map((function(e){return Object(v.jsx)("button",{className:"is-small button mr-2 mt-3",children:e.name},e.name)}))]})},k=function(e){var t=e.title,a=Object(l.c)((function(e){return e.filters})),n=Object(s.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];if(a.loading)return Object(v.jsx)(N,{});return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"title",children:t}),Object(v.jsx)("input",{className:"input",onChange:function(e){o(e.target.value)},value:r,placeholder:"search.."}),a.glasses.filter((function(e){return""===r?e.name:e.name.toLowerCase().includes(r.toLowerCase())})).map((function(e){return Object(v.jsx)("button",{className:" is-small button mr-2 mt-3 ",children:e.name},e.name)}))]})},y=a(25),C=(a(57),function(e){var t=e.row;return Object(v.jsx)("div",{className:"test",children:Object(v.jsxs)("div",{className:" columns ",children:[Object(v.jsx)("div",{className:"column is-1",children:Object(v.jsx)("figure",{className:"image is-64x64",children:Object(v.jsx)("img",{src:t.strDrinkThumb,className:"",alt:"".concat(t.strDrink," drink")})})}),Object(v.jsxs)("div",{className:"column",children:[Object(v.jsxs)("div",{className:"columns",children:[Object(v.jsx)("span",{className:"column has-text-left",children:Object(v.jsx)("b",{children:t.strDrink})}),Object(v.jsxs)("span",{className:"column has-text-right is-size-7",children:[Object(v.jsx)("span",{className:"mr-2",children:t.strAlcoholic}),Object(v.jsx)("span",{className:"mr-2",children:"/"}),Object(v.jsx)("span",{className:"mr-2",children:t.strCategory}),Object(v.jsx)("span",{className:"mr-2",children:"/"}),Object(v.jsx)("span",{className:"mr-2",children:t.strGlass})]})]}),Object(v.jsx)("p",{children:t.strInstructions})]})]})})}),E=function(e){var t=e.title,a=Object(l.c)((function(e){return e.filters}));return""===a.searchByName.data||null===a.searchByName.data?(null===a.searchByName.data&&Object(y.toast)({message:"<h1>No one know this drink...</h1>",type:"is-danger",dismissible:!0,pauseOnHover:!0,position:"top-left",animate:{in:"fadeIn",out:"fadeOut"}}),Object(v.jsx)("div",{children:Object(v.jsx)("p",{className:"title",children:t})})):a.searchByName.loading?Object(v.jsx)(N,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"title",children:t}),a.searchByName.data.map((function(e){return Object(v.jsx)(C,{row:e})}))]})},A=function(){return Object(v.jsxs)("div",{className:"container mt-5",children:[Object(v.jsxs)("div",{className:"columns is-9",children:[Object(v.jsxs)("div",{className:"column is-3",children:[Object(v.jsx)("div",{className:"content-box",children:Object(v.jsx)(w,{title:"Categories:"})}),Object(v.jsx)("div",{className:"content-box",children:Object(v.jsx)(k,{title:"Glasses:"})})]}),Object(v.jsx)("div",{className:"column is-9",children:Object(v.jsx)("div",{className:"content-box",children:Object(v.jsx)(E,{title:"Results:"})})})]}),Object(v.jsx)("div",{className:"column is-12"})]})};a(58);var B=function(){var e=Object(l.b)();return Object(s.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var a,s,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getCategories();case 2:return a=e.sent,e.next=5,m.getGlasses();case 5:return s=e.sent,e.next=8,m.getIngredients();case 8:return n=e.sent,e.next=11,m.getAlcoholic();case 11:c=e.sent,t({type:"FETCH_CATEGORIES",data:{categories:a.map((function(e){return{name:e.strCategory,state:!1}})),glasses:s.map((function(e){return{name:e.strGlass,state:!1}})),ingredients:n.map((function(e){return{name:e.strIngredient1,state:!1}})),alcoholic:c.map((function(e){return{name:e.strAlcoholic,state:!1}})),loading:!1}});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(v.jsxs)("div",{className:"has-background-white-ter",children:[Object(v.jsx)(g,{}),Object(v.jsx)(A,{})]})},H=a(7),I=a(26),S=Object(H.c)({filters:f}),T=Object(H.d)(S,Object(H.a)(I.a));r.a.render(Object(v.jsx)(l.a,{store:T,children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.432227e7.chunk.js.map