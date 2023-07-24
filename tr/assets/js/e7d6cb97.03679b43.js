"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2319],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5379:function(e,t,a){a.r(t),a.d(t,{Highlight:function(){return m},assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],l={slug:"02-issue-news",title:"Issues In September 2021 Release",authors:"adi1090x",tags:["bug","issues","iso"]},o=void 0,p={permalink:"/tr/news/02-issue-news",source:"@site/news/2021/09-30-issues.mdx",title:"Issues In September 2021 Release",description:"<span",date:"2021-09-30T00:00:00.000Z",formattedDate:"September 30, 2021",tags:[{label:"bug",permalink:"/tr/news/tags/bug"},{label:"issues",permalink:"/tr/news/tags/issues"},{label:"iso",permalink:"/tr/news/tags/iso"}],truncated:!0,authors:[{name:"Aditya Shakya",title:"Developer of Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],prevItem:{title:"October 2021 Release Available",permalink:"/tr/news/03-release-news"},nextItem:{title:"September 2021 Release Available",permalink:"/tr/news/01-release-news"}},c={authorsImageUrls:[void 0]},d=[{value:"Summery",id:"summery",children:[]},{value:"Issues",id:"issues",children:[]},{value:"Solutions",id:"solutions",children:[{value:"Install drivers",id:"install-drivers",children:[]},{value:"Remove Flatpak",id:"remove-flatpak",children:[]},{value:"Install Sddm",id:"install-sddm",children:[]}]}],m=function(e){var t=e.children,a=e.color;return(0,s.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},u={toc:d,Highlight:m};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"summery"},"Summery"),(0,s.kt)("p",null,"Due to a ",(0,s.kt)(m,{color:"#E06B74",mdxType:"Highlight"},"bug")," in installer scripts, users are facing few issues on September ISO.\nSupport for ",(0,s.kt)(m,{color:"#55B6C2",mdxType:"Highlight"},"flatpak")," caused issues with gtk applications such as ",(0,s.kt)("strong",{parentName:"p"},"thunar")," and ",(0,s.kt)("strong",{parentName:"p"},"plank"),"."),(0,s.kt)("h2",{id:"issues"},"Issues"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Unable to adjust display brightness"),(0,s.kt)("li",{parentName:"ol"},"Launching Thunar and plank takes a long time"),(0,s.kt)("li",{parentName:"ol"},"Lightdm greeter crashes / lags / shows error")),(0,s.kt)("h2",{id:"solutions"},"Solutions"),(0,s.kt)("p",null,"You can try these methods to fix issues with the new ISO."),(0,s.kt)("h3",{id:"install-drivers"},"Install drivers"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"lspci")," to get the information about available graphics card(s) on your system, and install the appropriate drivers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ lspci -k | grep -P 'VGA|3D|Display'\n03:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Picasso (rev c2)\n")),(0,s.kt)("p",null,"In that case, Install ",(0,s.kt)("inlineCode",{parentName:"p"},"xf86-video-amdgpu")," package and reboot the system."),(0,s.kt)("h3",{id:"remove-flatpak"},"Remove Flatpak"),(0,s.kt)("p",null,"Remove ",(0,s.kt)("inlineCode",{parentName:"p"},"flatpak")," package to resolve the issue with gtk applications."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -Rnscv flatpak\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This operation will also remove ",(0,s.kt)("inlineCode",{parentName:"p"},"pamac-all")," as flatpak is one of its dependencies.\nYou can install ",(0,s.kt)("inlineCode",{parentName:"p"},"pamac-aur")," if you want a ",(0,s.kt)("strong",{parentName:"p"},"Graphical package manager"),". "))),(0,s.kt)("h3",{id:"install-sddm"},"Install Sddm"),(0,s.kt)("p",null,"Due to the removal of drivers from the installed system, lightdm's webkit greeter crashes and fails to load the default theme.\nAlso, It's a bit slow on older machines. To fix this issue, Install ",(0,s.kt)("inlineCode",{parentName:"p"},"sddm")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"archcraft-sddm-theme-default")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S sddm archcraft-sddm-theme-default\n")),(0,s.kt)("p",null,"Copy sddm config file, Use ",(0,s.kt)("strong",{parentName:"p"},"archcraft"),"  as the theme name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cp /usr/lib/sddm/sddm.conf.d/default.conf /etc/sddm.conf.d/default.conf\n")),(0,s.kt)("p",null,"Enable sddm service and reboot the computer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl enable -f sddm-plymouth.service\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"All the issues above will be fixed ASAP and a new ISO will be uploaded soon.")))))}h.isMDXComponent=!0}}]);