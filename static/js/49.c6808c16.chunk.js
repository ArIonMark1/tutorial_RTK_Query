"use strict";(self.webpackChunktutorial_RTK_Query=self.webpackChunktutorial_RTK_Query||[]).push([[49],{49:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var s=r(439),i=r(791),t=r(981),c=r(184),h=function(e){var n=e.submit;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{children:(0,c.jsx)("h2",{children:"Pokemon Page"})}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(e.currentTarget.elements.pokemonName.value)},children:[(0,c.jsx)("input",{type:"text",name:"pokemonName",placeholder:"input pokemon name"}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})]})},a=function(e){var n=e.pokemonData;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"PokemonCard"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:(0,c.jsx)("img",{src:n.sprites.other.dream_world.front_default,alt:n.name,width:200})}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:"Name: "}),(0,c.jsx)("span",{children:(0,c.jsx)("i",{children:(0,c.jsx)("b",{children:n.name})})})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{children:"Weight: "}),(0,c.jsx)("span",{children:(0,c.jsx)("i",{children:(0,c.jsxs)("b",{children:[n.weight/10," kg"]})})})]})]})]})},d=function(){var e=(0,i.useState)(""),n=(0,s.Z)(e,2),r=n[0],d=n[1],l=(0,t.H)(r,{skip:""===r,refetchOnFocus:!0,refetchOnReconnect:!0}),o=l.data,x=l.currentData,j=l.isError,u=l.error,m=l.isFetching,p=l.isSuccess;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:"Pokemon information Layout"}),(0,c.jsx)("hr",{}),(0,c.jsx)(h,{submit:d}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("hr",{}),m&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"Loading...."}),(0,c.jsx)("hr",{})]}),j&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:u.data}),(0,c.jsx)("hr",{})]}),x&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"Success!"}),(0,c.jsx)("hr",{})]})]}),p&&(0,c.jsx)(a,{pokemonData:o})]})]})}}}]);
//# sourceMappingURL=49.c6808c16.chunk.js.map