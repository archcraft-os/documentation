"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[151],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),b=k.tabGroupChoices,v=k.setTabGroupChoices,g=(0,r.useState)(h),N=g[0],y=g[1],w=[];if(null!=p){var x=b[p];null!=x&&x!==N&&f.some((function(e){return e.value===x}))&&y(x)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;y(r),null!=p&&(v(p,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4727:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],u={sidebar_position:1,hide_table_of_contents:!0},c="\u4f7f\u7528USB\u8bbe\u5907\u5f15\u5bfc Archcraft",p={unversionedId:"boot-iso/boot-with-usb",id:"boot-iso/boot-with-usb",isDocsHomePage:!1,title:"\u4f7f\u7528USB\u8bbe\u5907\u5f15\u5bfc Archcraft",description:"dd (Linux)",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/boot-iso/boot-with-usb.mdx",sourceDirName:"boot-iso",slug:"/boot-iso/boot-with-usb",permalink:"/zh/docs/boot-iso/boot-with-usb",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/boot-iso/boot-with-usb.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/zh/docs/intro"},next:{title:"\u4f7f\u7528GRUB\u5f15\u5bfc Archcraft",permalink:"/zh/docs/boot-iso/boot-with-grub"}},d=[{value:"dd (Linux)",id:"dd-linux",children:[]},{value:"Etcher (Linux, Mac, Windows)",id:"etcher-linux-mac-windows",children:[]},{value:"Rufus (Windows)",id:"rufus-windows",children:[]},{value:"\u5176\u4ed6\u65b9\u5f0f (Linux)",id:"\u5176\u4ed6\u65b9\u5f0f-linux",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528usb\u8bbe\u5907\u5f15\u5bfc-archcraft"},"\u4f7f\u7528USB\u8bbe\u5907\u5f15\u5bfc Archcraft"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"dd",label:"dd",default:!0,mdxType:"TabItem"},(0,o.kt)("h2",{id:"dd-linux"},"dd (Linux)"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Linux"),", \u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"dd"))," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2aArchcraft\u7684USB\u5f15\u5bfc\u8bbe\u5907\u3002\ndd \u53ef\u4ee5\u521b\u5efa\u540c\u65f6\u652f\u6301 BIOS \u548c UEFI \u542f\u52a8\u7684USB\u5f15\u5bfc\u3002\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u662f\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u7b80\u5355\u53c8\u5e7f\u6cdb\u9002\u7528\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u4e0b\u9762\u7684\u6b65\u9aa4\uff0c\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"dd"))," \u547d\u4ee4\u521b\u5efa\u4e00\u4e2aArchcraft\u7684USB\u5f15\u5bfc\u8bbe\u5907 :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u7ec8\u7aef\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo fdisk -l")," \u83b7\u53d6USB\u8bbe\u5907\u7684\u4fe1\u606f\u3002\u4ee5\u6211\u4e3a\u4f8b, \u6211\u7684USB\u8bbe\u5907\u88ab\u6302\u8f7d\u5728 ",(0,o.kt)("strong",{parentName:"li"},"/dev/sda"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo fdisk -l\n\nDisk /dev/sda: 29.25 GiB, 31406948352 bytes, 61341696 sectors\nDisk model: Cruzer Blade\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0x940318b0\n")),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"lsblk")," \u901a\u8fc7\u8bbe\u5907\u7684\u5b58\u50a8\u5927\u5c0f\u627e\u5230\u4f60\u7684USB\u8bbe\u5907\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsblk\n\nNAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda           8:0    1  29.3G  0 disk\n\u251c\u2500sda1        8:1    1   1.6G  0 part\n\u2514\u2500sda2        8:2    1    54M  0 part\nnvme0n1     259:0    0 238.5G  0 disk\n...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u627e\u5230\u4f60\u7684USB\u8bbe\u5907\u4e4b\u540e, \u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"dd")," \u547d\u4ee4\u5199\u5165Archcraft\u7684ISO\u955c\u50cf ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo dd bs=4M if=path/to/archcraft.iso of=/dev/sdX status=progress oflag=sync\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u7528\u81ea\u5df1\u7684Archcraft\u955c\u50cf\u8def\u5f84\u66ff\u4ee3 ",(0,o.kt)("strong",{parentName:"li"},"path/to/archcraft.iso"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u7528\u81ea\u5df1\u7684USB\u8bbe\u5907\u4fe1\u606f\u66ff\u4ee3 ",(0,o.kt)("strong",{parentName:"li"},"sdX"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540c\u65f6\u652f\u6301 ",(0,o.kt)("strong",{parentName:"li"},"BIOS \u548c UEFI"),"\u542f\u52a8\u7684USB\u8bbe\u5907\u5c31\u5236\u4f5c\u5b8c\u6210\u4e86\u3002"))),(0,o.kt)(l.Z,{value:"etcher",label:"Etcher",mdxType:"TabItem"},(0,o.kt)("h2",{id:"etcher-linux-mac-windows"},"Etcher (Linux, Mac, Windows)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher")," \u662f\u4e00\u4e2a\u7528Node.js \u548c Electron\u7f16\u5199\u7684\u4e00\u4e2a\u7cfb\u7edf\u955c\u50cf\u5199\u5165\u8f6f\u4ef6\uff0c\u53ef\u4ee5\u5c06\u955c\u50cf\u5199\u5165\u5230SD\u5361\u6216\u8005USB\u8bbe\u5907\u4e0a\u3002\nEtcher\u907f\u514d\u4f60\u610f\u5916\u5730\u5c06\u955c\u50cf\u5199\u5165\u5230\u7535\u8111\u786c\u76d8\u5185\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u786e\u4fdd\u955c\u50cf\u53ef\u4ee5\u6b63\u786e\u5199\u5165\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u4e0b\u9762\u7684\u6b65\u9aa4\uff0c\u4f7f\u7528Etcher\u521b\u5efa\u4e00\u4e2aArchcraft\u7684USB\u5f15\u5bfc\u8bbe\u5907 :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884cEtcher. \u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Select Image")," \u9009\u62e9\u4e0b\u8f7d\u597d\u7684Archcraft\u7684ISO\u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u5199\u5165\u7684USB\u8bbe\u5907, ",(0,o.kt)("strong",{parentName:"li"},"\u6ce8\u610f")," \u9009\u62e9\u6b63\u786e\u7684\u8bbe\u5907\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"Flash!")," \u7b49\u5f85\u5199\u5165\u5b8c\u6210\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u540c\u65f6\u652f\u6301 ",(0,o.kt)("strong",{parentName:"li"},"BIOS \u548c UEFI"),"\u542f\u52a8\u7684USB\u8bbe\u5907\u5c31\u5236\u4f5c\u5b8c\u6210\u4e86\u3002"))),(0,o.kt)(l.Z,{value:"rufus",label:"Rufus",mdxType:"TabItem"},(0,o.kt)("h2",{id:"rufus-windows"},"Rufus (Windows)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rufus.akeo.ie/"},"Rufus")," \u662f\u4e00\u4e2a\u591a\u7528\u9014\u7684ISO\u955c\u50cf\u5199\u5165\u8f6f\u4ef6\u3002\u5b83\u6709\u56fe\u5f62\u754c\u9762\uff0c\u800c\u4e14\u5e76\u4e0d\u8981\u6c42USB\u8bbe\u5907\u662f\u5426\u88ab\u6b63\u786e\u683c\u5f0f\u5316\u3002\n\u53ea\u8981\u9009\u62e9Archcraft ISO\u955c\u50cf, \u60f3\u8981\u5199\u5165\u7684USB\u8bbe\u5907\uff0c\u7136\u540e\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"START")," \u5c31\u884c\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684USB\u5f15\u5bfc\u8bbe\u5907\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"DD")," \u547d\u4ee4\u521b\u5efa\u5f15\u5bfc\u3002"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rufus\u7248\u672c \u2265 3.0\uff0c\u8bf7\u4ece Partition scheme \u4e0b\u62c9\u83dc\u5355\u91cc\u9009\u62e9GPT\u3002\u70b9\u51fb START \u4e4b\u540e\uff0c\u5c31\u4f1a\u5f39\u51fa\u4e00\u4e2a\u6a21\u5f0f\u9009\u62e9\u5bf9\u8bdd\u6846\uff0c\u8fd9\u65f6\u8bf7\u9009\u62e9 DD Image \u6a21\u5f0f."),(0,o.kt)("li",{parentName:"ul"},"Rufus\u7248\u672c < 3.0\uff0c\u8bf7\u4ece\u5e95\u90e8\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 DD Image \u6a21\u5f0f\u3002"))),(0,o.kt)(l.Z,{value:"\u5176\u4ed6\u65b9\u5f0f",label:"\u5176\u4ed6\u65b9\u5f0f",mdxType:"TabItem"},(0,o.kt)("h2",{id:"\u5176\u4ed6\u65b9\u5f0f-linux"},"\u5176\u4ed6\u65b9\u5f0f (Linux)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cat"))," : \u6253\u5f00\u7ec8\u7aef\u6267\u884c :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cat path/to/archcraft.iso > /dev/sdX\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"cp"))," : \u6253\u5f00\u7ec8\u7aef\u6267\u884c :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cp path/to/archcraft.iso /dev/sdX\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tee"))," : \u6253\u5f00\u7ec8\u7aef\u6267\u884c :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tee < path/to/archcraft.iso > /dev/sdx\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u7528\u81ea\u5df1\u7684Archcraft\u955c\u50cf\u8def\u5f84\u66ff\u4ee3 ",(0,o.kt)("strong",{parentName:"li"},"path/to/archcraft.iso"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u7528\u81ea\u5df1\u7684USB\u8bbe\u5907\u4fe1\u606f\u66ff\u4ee3 ",(0,o.kt)("strong",{parentName:"li"},"sdX"),"\u3002")))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);