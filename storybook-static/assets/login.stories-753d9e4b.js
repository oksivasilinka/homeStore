import{j as o}from"./createTheme-33b81505.js";import{r as g}from"./index-f1286426.js";import{c as u,u as d,b as l,s as h,N as f,a as x}from"./index-a54c795a.js";import{A as L}from"./infoConfirm-88274560.js";import{T as j}from"./header-3ea94561.js";import{d as S}from"./productCard-9fbb9210.js";import{A}from"./authWithGoogle-61dabf19.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-3e7e6ab6.js";import"./Paper-3ad17dc0.js";import"./inheritsLoose-caa56c31.js";import"./assertThisInitialized-081f9914.js";import"./categoryFilter-7586b7e4.js";const E=s=>s.auth.isLoggedIn,v=()=>{const s=u(),r=d(),n=l(E),{login:m}=x;g.useEffect(()=>{r(h({error:null}))},[]);const p=c=>{r(m(c)).then(()=>{n&&s("/sign-in")})};return o.jsxs("div",{className:S.wrapper,children:[o.jsx(L,{login:!0,onSubmit:p,title:"Зарегистрироваться",titleButton:"Зарегистрироваться"}),o.jsx(A,{}),o.jsx(j,{children:o.jsx(f,{to:"/sign-in",children:"У Вас уже есть аккаунт"})})]})},R={component:v,tags:["autodocs"],title:"Pages/Login"},t={args:{}};var e,a,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {}
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const W=["LoginStory"];export{t as LoginStory,W as __namedExportsOrder,R as default};
