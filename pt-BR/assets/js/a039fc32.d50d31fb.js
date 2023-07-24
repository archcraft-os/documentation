"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[3645],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6430:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:3},u="Melhorar a Wiki",s={unversionedId:"contrib/contrib-wiki",id:"contrib/contrib-wiki",isDocsHomePage:!1,title:"Melhorar a Wiki",description:"Siga este guia se quiser adicionar documenta\xe7\xe3o na Wiki do Archcraft...",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/contrib/contrib-wiki.mdx",sourceDirName:"contrib",slug:"/contrib/contrib-wiki",permalink:"/pt-BR/docs/contrib/contrib-wiki",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/contrib/contrib-wiki.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Escreva Tutoriais",permalink:"/pt-BR/docs/contrib/contrib-blog"},next:{title:"Traduzir a Wiki",permalink:"/pt-BR/docs/contrib/contrib-translate"}},l=[{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Arquivos e formato",id:"arquivos-e-formato",children:[]},{value:"Conte\xfado inicial",id:"conte\xfado-inicial",children:[]}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"melhorar-a-wiki"},"Melhorar a Wiki"),(0,i.kt)("p",null,"Siga este guia se quiser adicionar documenta\xe7\xe3o na Wiki do Archcraft..."),(0,i.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pt-BR/docs/contrib/setup-env"},"configurar")," o ambiente de desenvolvimento local,\nse voc\xea quer trabalhar localmente. "),(0,i.kt)("li",{parentName:"ul"},"Voc\xea deve ter o entendimento b\xe1sico da sintaxe de ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/cheat-sheet"},"Markdown")," e ",(0,i.kt)("a",{parentName:"li",href:"https://mdxjs.com"},"MDX"),". Veja ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown Features"),"."),(0,i.kt)("li",{parentName:"ul"},"Voc\xea deve saber, pelo menos, como criar um ",(0,i.kt)("em",{parentName:"li"},"fork"),", ",(0,i.kt)("em",{parentName:"li"},"clonar")," um reposit\xf3rio e criar um ",(0,i.kt)("em",{parentName:"li"},"pull request"),".")),(0,i.kt)("h2",{id:"arquivos-e-formato"},"Arquivos e formato"),(0,i.kt)("p",null,"O diret\xf3rio ",(0,i.kt)("strong",{parentName:"p"},"docs")," tem subdiret\xf3rios (para documenta\xe7\xf5es de categorias) que cont\xe9m\nos arquivos ",(0,i.kt)("inlineCode",{parentName:"p"},".md")," e ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx")," para cada post wiki e um arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},"_category_.json")," para a categoria de documentos."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"O arquivo ",(0,i.kt)("inlineCode",{parentName:"li"},"_category_.json")," \xe9 usado para rotular e posicionar (na barra lateral) a categoria."),(0,i.kt)("li",{parentName:"ul"},"Aqui est\xe1 o exemplo da se\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"li"},"Boot Archcraft")," do nosso wiki")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docs    # Diret\xf3rio principal\n\u2514\u2500\u2500 boot-iso                        # Categoria do documento\n   \u251c\u2500\u2500 _category_.json              # Propriedades da categoria\n   \u251c\u2500\u2500 boot-with-usb.mdx            # Pagina da Wiki\n   \u2514\u2500\u2500 boot-with-grub.mdx           # Outra p\xe1gina da Wiki na mesma categoria\n")),(0,i.kt)("h2",{id:"conte\xfado-inicial"},"Conte\xfado inicial"),(0,i.kt)("p",null,"No ",(0,i.kt)("inlineCode",{parentName:"p"},"Conte\xfado inicial"),", voc\xea pode especificar a posi\xe7\xe3o do doc na categoria, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{2}","{2}":!0},"---\nsidebar_position: 1\nhide_table_of_contents: true\n---\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Para mais informa\xe7\xf5es, visite ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus:Docs"))))}d.isMDXComponent=!0}}]);