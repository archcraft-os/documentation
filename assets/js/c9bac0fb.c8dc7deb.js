"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[6879],{12126:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(85893),a=o(11151);const r={slug:"02-post-pacman",title:"How to fix invalid or corrupted package (PGP signature)issue?",authors:"adi1090x",tags:["howto","theme","openbox","bspwm","wm"]},i=void 0,s={permalink:"/blog/02-post-pacman",editUrl:"https://github.com/archcraft-os/documentation/edit/main/blog/2024/01-30-post-pacman.md",source:"@site/blog/2024/01-30-post-pacman.md",title:"How to fix invalid or corrupted package (PGP signature)issue?",description:"If you get invalid or corrupted package (PGP signature) error, do :",date:"2024-01-30T00:00:00.000Z",formattedDate:"January 30, 2024",tags:[{label:"howto",permalink:"/blog/tags/howto"},{label:"theme",permalink:"/blog/tags/theme"},{label:"openbox",permalink:"/blog/tags/openbox"},{label:"bspwm",permalink:"/blog/tags/bspwm"},{label:"wm",permalink:"/blog/tags/wm"}],readingTime:.225,hasTruncateMarker:!0,authors:[{name:"Aditya Shakya",title:"Developer of Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],frontMatter:{slug:"02-post-pacman",title:"How to fix invalid or corrupted package (PGP signature)issue?",authors:"adi1090x",tags:["howto","theme","openbox","bspwm","wm"]},unlisted:!1,nextItem:{title:"How to create my own themes in openbox and bspwm?",permalink:"/blog/01-post-theme"}},c={authorsImageUrls:[void 0]},l=[];function p(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["If you get ",(0,n.jsx)(t.code,{children:"invalid or corrupted package (PGP signature) error"}),", do :"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open a terminal"}),"\n",(0,n.jsxs)(t.li,{children:["Run: ",(0,n.jsx)(t.code,{children:"sudo pacman -S archlinux-keyring"})]}),"\n",(0,n.jsxs)(t.li,{children:["Then Run: ",(0,n.jsx)(t.code,{children:"sudo pacman-key --init"})]}),"\n",(0,n.jsxs)(t.li,{children:["Then Run: ",(0,n.jsx)(t.code,{children:"sudo pacman-key --populate"})]}),"\n",(0,n.jsx)(t.li,{children:"Done! (Also delete the corrupted pkgs too.)"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var n=o(67294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);