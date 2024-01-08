"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[4817],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(7294),o=t(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var r,t=e.lazy,o=e.block,u=e.defaultValue,s=e.values,p=e.groupId,f=e.className,d=n.Children.toArray(e.children),m=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=u?u:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value,v=a(),h=v.tabGroupChoices,b=v.setTabGroupChoices,g=(0,n.useState)(y),w=g[0],O=g[1],k=[];if(null!=p){var x=h[p];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var r=e.currentTarget,t=k.indexOf(r),n=m[t].value;O(n),null!=p&&(b(p,n),setTimeout((function(){var e,t,n,o,a,i,c,u;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,t>=0&&a<=u&&o<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},j=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n=k.indexOf(e.target)+1;t=k[n]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;t=k[o]||k[k.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},m.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":w===r}),key:r,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=t?t:r)}))),t?(0,n.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==w})}))))}},9443:function(e,r,t){var n=(0,t(7294).createContext)(void 0);r.Z=n},2873:function(e,r,t){t.r(r),t.d(r,{Highlight:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=(t(5064),t(8215),["components"]),c={sidebar_position:4},l="Hyprland",u={unversionedId:"wayland-compositors/hyprland",id:"wayland-compositors/hyprland",isDocsHomePage:!1,title:"Hyprland",description:"More information : Here",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/wayland-compositors/hyprland.mdx",sourceDirName:"wayland-compositors",slug:"/wayland-compositors/hyprland",permalink:"/zh/docs/wayland-compositors/hyprland",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/wayland-compositors/hyprland.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"River",permalink:"/zh/docs/wayland-compositors/river"},next:{title:"Newm",permalink:"/zh/docs/wayland-compositors/newm"}},s=[],p=function(e){var r=e.children,t=e.color;return(0,a.kt)("span",{style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},r)},f={toc:s,Highlight:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hyprland"},"Hyprland"),(0,a.kt)("p",null,"More information : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-hyprland"},"Here")))}d.isMDXComponent=!0},6010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);