"use strict";(self.webpackChunktutorial_RTK_Query=self.webpackChunktutorial_RTK_Query||[]).push([[121],{121:function(e,s,n){n.r(s),n.d(s,{default:function(){return o}});var a=n(439),r=n(791),i=n(981),t=n(184),c=function(e){var s=e.submit;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(e.currentTarget.elements.pokemonName.value)},className:"form",children:[(0,t.jsx)("label",{className:"label",htmlFor:"pokemonName",children:(0,t.jsx)("input",{id:"pokemonName",type:"text",name:"pokemonName",placeholder:"input pokemon name"})}),(0,t.jsx)("button",{type:"submit",className:"button",children:"Search"})]})})},l=function(e){var s=e.pokemonData;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"pokemonCard",children:[(0,t.jsx)("div",{className:"imageBlock",children:(0,t.jsx)("img",{className:"pokemonImage",src:s.sprites.other.dream_world.front_default,alt:s.name,width:200})}),(0,t.jsxs)("div",{className:"pokemonContent",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Name: "}),(0,t.jsx)("span",{children:(0,t.jsx)("i",{children:(0,t.jsx)("b",{children:s.name})})})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Weight: "}),(0,t.jsx)("span",{children:(0,t.jsx)("i",{children:(0,t.jsxs)("b",{children:[s.weight/10," kg"]})})})]})]})]})})},o=function(){var e=(0,r.useState)(""),s=(0,a.Z)(e,2),n=s[0],o=s[1],d=(0,i.H)(n,{skip:""===n,refetchOnFocus:!0,refetchOnReconnect:!0}),m=d.data,h=d.currentData,u=d.isError,x=d.error,j=d.isFetching,p=d.isSuccess;return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h1",{className:"headers",children:"Pokemon information Layout"}),(0,t.jsx)(c,{submit:o}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{children:[j&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h3",{className:"headers",children:"Loading...."})}),u&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h3",{className:"headers",children:x.data})}),h&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h3",{className:"headers",children:"Success!"})})]}),p&&(0,t.jsx)(l,{pokemonData:m})]})]})}}}]);
//# sourceMappingURL=121.5a6822cc.chunk.js.map