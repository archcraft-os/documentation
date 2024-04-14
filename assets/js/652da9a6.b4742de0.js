"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[4358],{79888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(85893),s=n(11151),a=n(74866),o=n(85162);const i={sidebar_position:1,hide_table_of_contents:!0},l="Create A Bootable USB",c={id:"boot-iso/boot-with-usb",title:"Create A Bootable USB",description:"dd (Linux)",source:"@site/docs/boot-iso/boot-with-usb.mdx",sourceDirName:"boot-iso",slug:"/boot-iso/boot-with-usb",permalink:"/docs/boot-iso/boot-with-usb",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/boot-iso/boot-with-usb.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"Boot Archcraft with GRUB",permalink:"/docs/boot-iso/boot-with-grub"}},d={},u=[{value:"dd (Linux)",id:"dd-linux",level:2},{value:"Etcher (Linux, Mac, Windows)",id:"etcher-linux-mac-windows",level:2},{value:"Rufus (Windows)",id:"rufus-windows",level:2},{value:"Other Options (Linux)",id:"other-options-linux",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-a-bootable-usb",children:"Create A Bootable USB"}),"\n","\n","\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{value:"dd",label:"dd",default:!0,children:[(0,r.jsx)(t.h2,{id:"dd-linux",children:"dd (Linux)"}),(0,r.jsxs)(t.p,{children:["If you're already using ",(0,r.jsx)(t.strong,{children:"Linux"}),", you can create an Archcraft bootable USB with ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"dd"})}),".\ndd creates both BIOS and UEFI bootable USB and this method is recommended due to its simplicity and universal availability.\nFollow the steps below to create a bootable USB with dd :"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Open a terminal and run ",(0,r.jsx)(t.code,{children:"sudo fdisk -l"})," to get the USB info. In my case, it's ",(0,r.jsx)(t.strong,{children:"/dev/sda"}),"."]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ sudo fdisk -l\n\nDisk /dev/sda: 29.25 GiB, 31406948352 bytes, 61341696 sectors\nDisk model: Cruzer Blade\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0x940318b0\n"})}),(0,r.jsxs)(t.p,{children:["You can also run ",(0,r.jsx)(t.code,{children:"lsblk"})," to find your USB device, by judging the size of it."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ lsblk\n\nNAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda           8:0    1  29.3G  0 disk\n\u251c\u2500sda1        8:1    1   1.6G  0 part\n\u2514\u2500sda2        8:2    1    54M  0 part\nnvme0n1     259:0    0 238.5G  0 disk\n...\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["After finding your USB device, Run ",(0,r.jsx)(t.code,{children:"dd"})," to flash the ISO on USB"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ sudo dd bs=4M if=path/to/archcraft.iso of=/dev/sdX status=progress oflag=sync\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Make sure you replace ",(0,r.jsx)(t.strong,{children:"path/to/archcraft.iso"})," with the Archcraft ISO path and ",(0,r.jsx)(t.strong,{children:"sdX"})," with your USB device."]}),"\n",(0,r.jsxs)(t.li,{children:["This will create a bootable Archcraft USB for both ",(0,r.jsx)(t.strong,{children:"BIOS and UEFI"}),"."]}),"\n"]})]}),(0,r.jsxs)(o.Z,{value:"etcher",label:"Etcher",children:[(0,r.jsx)(t.h2,{id:"etcher-linux-mac-windows",children:"Etcher (Linux, Mac, Windows)"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.balena.io/etcher/",children:"Etcher"})," is an OS image flasher built with Node.js and Electron, capable of flashing an SDCard or USB drive.\nIt protects you from accidentally writing to your hard-drives and ensures every byte of data was written correctly.\nFollow the steps below to create a bootable USB with Etcher :"]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Launch Etcher. Click on ",(0,r.jsx)(t.strong,{children:"Select Image"})," and select the Archcraft ISO."]}),"\n",(0,r.jsxs)(t.li,{children:["Select your USB drive, ",(0,r.jsx)(t.strong,{children:"Be careful here"})," and select the right one."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Flash!"})," and wait for it to finish."]}),"\n",(0,r.jsxs)(t.li,{children:["This will create a bootable Archcraft USB for both ",(0,r.jsx)(t.strong,{children:"BIOS and UEFI"}),"."]}),"\n"]})]}),(0,r.jsxs)(o.Z,{value:"rufus",label:"Rufus",children:[(0,r.jsx)(t.h2,{id:"rufus-windows",children:"Rufus (Windows)"}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://rufus.akeo.ie/",children:"Rufus"})," is a multi-purpose USB ISO writer. It provides a graphical user interface and does not care if the drive is properly formatted or not.\nSimply select the Archcraft ISO, the USB drive you want to create the bootable Archcraft onto and click ",(0,r.jsx)(t.strong,{children:"START"}),"."]}),(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If the USB drive does not boot properly using the default ISO Image mode, ",(0,r.jsx)(t.strong,{children:"DD"})," Image mode should be used instead."]})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For Rufus version \u2265 3.0 select GPT from the Partition scheme drop-down menu. After clicking START you will get the mode selection dialog, select DD Image mode."}),"\n",(0,r.jsx)(t.li,{children:"For Rufus version < 3.0 select DD Image mode from the drop-down menu on the bottom."}),"\n"]})]}),(0,r.jsxs)(o.Z,{value:"other",label:"Other",children:[(0,r.jsx)(t.h2,{id:"other-options-linux",children:"Other Options (Linux)"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["With ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"cat"})})," : Open a terminal and run :"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ sudo cat path/to/archcraft.iso > /dev/sdX\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["With ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"cp"})})," : Open a terminal and run :"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ sudo cp path/to/archcraft.iso /dev/sdX\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["With ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"tee"})})," : Open a terminal and run :"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ sudo tee < path/to/archcraft.iso > /dev/sdx\n"})}),(0,r.jsxs)(t.p,{children:["Make sure you replace ",(0,r.jsx)(t.strong,{children:"path/to/archcraft.iso"})," with the Archcraft ISO path and ",(0,r.jsx)(t.strong,{children:"sdX"})," with your USB device."]})]}),(0,r.jsxs)(o.Z,{value:"video",label:"Video",children:[(0,r.jsx)(t.p,{children:"Here's a youtube video about creating a bootable USB drive for Archcraft."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://youtu.be/lattcBvG5_k",children:(0,r.jsx)(t.img,{src:"https://i3.ytimg.com/vi/lattcBvG5_k/maxresdefault.jpg",alt:"video"})})})]})]})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(90512);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),s=n(90512),a=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:s}),[p,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),m=(()=>{const e=c??p;return b({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);