"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2915],{51208:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>a,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=s(85893),i=s(11151);s(74866),s(85162);const t={sidebar_position:7,hide_table_of_contents:!1},l="Fluxbox",d={id:"window-managers/stacking-wm/fluxbox",title:"Fluxbox",description:"Fluxbox is a window manager for X11. It is based on the fluxbox 0.61.1 code, but with significant enhancements. Fluxbox provides a number of window management features such as tabbing and grouping. All Fluxbox configuration is stored in plaintext files; however, some settings are exposed graphically in the configuration menu.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/window-managers/stacking-wm/fluxbox.mdx",sourceDirName:"window-managers/stacking-wm",slug:"/window-managers/stacking-wm/fluxbox",permalink:"/fr/docs/window-managers/stacking-wm/fluxbox",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/stacking-wm/fluxbox.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"EvilWM",permalink:"/fr/docs/window-managers/stacking-wm/evilwm"},next:{title:"Bspwm",permalink:"/fr/docs/window-managers/tiling-wm/bspwm"}},c={},o=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Config Structure",id:"config-structure",level:3},{value:"Terminal",id:"terminal",level:3},{value:"Notification",id:"notification",level:3},{value:"Wallpaper",id:"wallpaper",level:3},{value:"Statusbar",id:"statusbar",level:3},{value:"Launchers and Applets",id:"launchers-and-applets",level:3},{value:"Compositor",id:"compositor",level:3},{value:"Window Manager",id:"window-manager",level:3},{value:"Keybindings",id:"keybindings",level:2},{value:"Applications",id:"applications",level:3},{value:"Menu and Applets",id:"menu-and-applets",level:3},{value:"Hardware Keys",id:"hardware-keys",level:3},{value:"Workspaces",id:"workspaces",level:3},{value:"Window Management",id:"window-management",level:3},{value:"Window Manager",id:"window-manager-1",level:3},{value:"Misc Keys",id:"misc-keys",level:3},{value:"Screenshots",id:"screenshots",level:2},{value:"FAQs",id:"faqs",level:2}],a=({children:e,color:n})=>{const s={span:"span",...(0,i.a)()};return(0,r.jsx)(s.span,{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"},children:e})};function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fluxbox",children:"Fluxbox"}),"\n","\n","\n","\n",(0,r.jsx)(n.p,{children:"Fluxbox is a window manager for X11. It is based on the fluxbox 0.61.1 code, but with significant enhancements. Fluxbox provides a number of window management features such as tabbing and grouping. All Fluxbox configuration is stored in plaintext files; however, some settings are exposed graphically in the configuration menu."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/main.png",alt:"img"})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["Once you finish installing Archcraft, ",(0,r.jsx)(n.strong,{children:"Fluxbox"})," can be installed on the top of it. It's pre-configured and ready to go. Open a terminal and run the following command to install Fluxbox :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ sudo pacman -Sy archcraft-fluxbox\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Fluxbox is pre-configured in Archcraft. In this section, We'll see how the Fluxbox window manager is configured, what tools and utilities are used to make it look and work like a complete desktop environment."}),"\n",(0,r.jsx)(n.h3,{id:"config-structure",children:"Config Structure"}),"\n",(0,r.jsx)(n.p,{children:"The configuration structure of Fluxbox in Archcraft looks something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox         : fluxbox config directory\n\u251c\u2500\u2500 alacritty      : terminal config\n\u251c\u2500\u2500 backgrounds    : wallpapers\n\u251c\u2500\u2500 scripts        : scripts used for fluxbox\n\u251c\u2500\u2500 styles         : fluxbox styles/themes\n\u251c\u2500\u2500 theme          : desktop theme (polybar, rofi configs) \n\u251c\u2500\u2500 apps           : window configuration of specific apps\n\u251c\u2500\u2500 dunstrc        : dunst config for notifications\n\u251c\u2500\u2500 init           : main fluxbox configuration file\n\u251c\u2500\u2500 keys           : fluxbox keyboard shortcuts file\n\u251c\u2500\u2500 menu           : fluxbox menu config file\n\u251c\u2500\u2500 picom.conf     : compositor config\n\u251c\u2500\u2500 startup        : launch startup apps\n\u251c\u2500\u2500 windowmenu     : config file for altering the window menu\n\u2514\u2500\u2500 xsettingsd     : gtk themes, icons and fonts config file\n"})}),"\n",(0,r.jsx)(n.h3,{id:"terminal",children:"Terminal"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Alacritty"})," is the default terminal. In the Fluxbox window manager, alacritty is launched with an alternative config file. If you need to change anything, make sure you modify the config files in ",(0,r.jsx)(n.code,{children:"~/.fluxbox/alacritty"})," directory. These are the following config files you can modify to change the behaviour of your terminal:"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/alacritty/alacritty.toml"})})," : Main configuration file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/alacritty/colors.toml"})})," : Colors configurations ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/alacritty/fonts.toml"})})," : Fonts configurations"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with alacritty config, run : ",(0,r.jsx)(n.code,{children:"man 5 alacritty"})," in terminal."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"notification",children:"Notification"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dunst"})," is used as a notification daemon for notifications in Fluxbox. In the Fluxbox window manager, dunst is launched with an alternative config file, which is ",(0,r.jsx)(n.code,{children:"~/.fluxbox/dunstrc"}),". So, If you need to modify anything, make sure you edit this file."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with dunst config, run : ",(0,r.jsx)(n.code,{children:"man 5 dunst"})," in terminal."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"wallpaper",children:"Wallpaper"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hsetroot"})," sets the wallpaper in the Fluxbox. If you want to change the wallpaper, Edit ",(0,r.jsx)(n.code,{children:"~/.fluxbox/startup"})," script and add the path to your wallpaper :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Restore wallpaper\nhsetroot -cover '/path/to/your/wallpaper'\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["To change the wallpaper quickly, Right click on desktop and go to ",(0,r.jsx)(n.code,{children:"Fluxbox > Backgrounds"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"statusbar",children:"Statusbar"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Polybar"})," is used as the statusbar in Archcraft's Fluxbox window manager."]}),"\n",(0,r.jsxs)(n.p,{children:["The configurations for polybar can be found inside the ",(0,r.jsx)(n.em,{children:"theme"})," directory directory of Fluxbox ",(0,r.jsx)(n.code,{children:"~/.fluxbox/theme"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to modify the ",(0,r.jsx)(n.strong,{children:"polybar"})," settings, or perhaps want to add/remove modules, then you need to edit the following files :"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/polybar/config.ini"})})," : Main config file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/polybar/colors.ini"})})," : Colors config file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/polybar/modules.ini"})})," : Modules config file"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with polybar config, visit : ",(0,r.jsx)(n.a,{href:"https://github.com/polybar/polybar/wiki",children:"polybar wiki"})]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you want to use the default Fluxbox toolbar instead of polybar, Edit ",(0,r.jsx)(n.code,{children:"~/.fluxbox/init"})," file and enable it."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"...\nsession.screen0.toolbar.visible: true\n...\n"})}),(0,r.jsxs)(n.p,{children:["Also, edit ",(0,r.jsx)(n.code,{children:"~/.fluxbox/startup"})," script and disable polybar on startup."]})]}),"\n",(0,r.jsx)(n.h3,{id:"launchers-and-applets",children:"Launchers and Applets"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Rofi"})," is used for application launchers, command runner and various applets. To modify the rofi config, edit ",(0,r.jsx)(n.code,{children:"~/.config/rofi/config.rasi"})," file."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with rofi config, run : ",(0,r.jsx)(n.code,{children:"man rofi"})," in terminal."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The scripts for rofi that are used in Fluxbox can be found it ",(0,r.jsx)(n.code,{children:"~/.fluxbox/scripts"})," directory. These are the following scripts that uses rofi to provide the launchers and applets in Fluxbox :"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_askpass"})})," : rofi based ",(0,r.jsx)(n.code,{children:"sudo"})," frontend to get root password ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_asroot"})})," : applet to open apps as root ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_bluetooth"})})," : bluetooth applet to quickly connect to BT devices ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_launcher"})})," : an application launcher, cmd runner, file manager and task manager  ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_music"})})," : music applet, that controls MPD with ",(0,r.jsx)(n.code,{children:"mpc"})," ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_powermenu"})})," : power menu, with confirmation dialog ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_runner"})})," : quickly lets you run a command ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_screenshot"})})," : screenshot applet that works with maim ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_status"})})," : applet to show various system informations ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rofi_windows"})})," : applet to manage opened windows"]}),"\n",(0,r.jsx)(n.p,{children:"If you want to modify any applet or perhaps want to extend the functionality of the applet, just edit these scripts above."}),"\n",(0,r.jsxs)(n.p,{children:["The configuration of each script can be found inside the ",(0,r.jsx)(n.em,{children:"theme"})," directory of Fluxbox ",(0,r.jsx)(n.code,{children:"~/.fluxbox/theme"})]}),"\n",(0,r.jsxs)(n.p,{children:["Let's say you want to modify the looks of ",(0,r.jsx)(n.strong,{children:"launcher"}),", then you need to edit the ",(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/rofi/launcher.rasi"})," file. Same goes for every other applet, Edit the respective file in the same directory."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with rofi theming, run : ",(0,r.jsx)(n.code,{children:"man rofi-theme"})," in terminal."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To change the colors and fonts of the launchers and applets, Edit the ",(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/rofi/shared/colors.rasi"})," and ",(0,r.jsx)(n.code,{children:"~/.fluxbox/theme/rofi/shared/fonts.rasi"})," files."]}),"\n",(0,r.jsx)(n.h3,{id:"compositor",children:"Compositor"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Picom"})," is used for compositing. It's a lightweight compositor with shadowing, advanced blurring and fading. In Fluxbox, picom is launched with an alternative config file, which is ",(0,r.jsx)(n.code,{children:"~/.fluxbox/picom.conf"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you need to change anything related to picom, Edit this picom config file."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with picom config, check the picom's default config file in ",(0,r.jsx)(n.code,{children:"/etc/xdg/picom.conf"})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["If you're having screen-tearing issues, using ",(0,r.jsx)(n.code,{children:"glx"})," backend can solve this issue. ",(0,r.jsx)("br",{}),"\nIf you're facing lagging, hangs and freezes, try switching between ",(0,r.jsx)(n.code,{children:"xrender"})," and ",(0,r.jsx)(n.code,{children:"glx"})," backend."]})}),"\n",(0,r.jsx)(n.h3,{id:"window-manager",children:"Window Manager"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of Fluxbox is available in your home directory. To configure Fluxbox window manager, these are the files that are used :"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"apps"})})," : a configuration file for remembering the window configuration of specific apps ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"init"})})," : the main fluxbox resource configuration file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"keys"})})," : the fluxbox keyboard shortcuts (hotkeys) file ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"menu"})})," : the fluxbox menu config ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"startup"})})," : where to launch startup apps ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"windowmenu"})})," : a configuration file for altering the Window Menu itself"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If you need any help with fluxbox configuration, See the manpages. Also visit ",(0,r.jsx)(n.a,{href:"https://fluxboxwiki.github.io/",children:"Fluxbox Wiki"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"keybindings",children:"Keybindings"}),"\n",(0,r.jsxs)(n.p,{children:["Here's a list of some important keybinds you need to know for operating Fluxbox easily. If you want to view, modify or add new keybinds, Edit ",(0,r.jsx)(n.code,{children:"~/.fluxbox/keys"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"applications",children:"Applications"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Return"})}),(0,r.jsx)(n.td,{children:"Open terminal (alacritty)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + T"})}),(0,r.jsx)(n.td,{children:"Open fullscreen terminal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + F"})}),(0,r.jsx)(n.td,{children:"Open file manager (thunar)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + E"})}),(0,r.jsx)(n.td,{children:"Open text editor (geany)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + W"})}),(0,r.jsx)(n.td,{children:"Open web browser (firefox)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"menu-and-applets",children:"Menu and Applets"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super"})}),(0,r.jsx)(n.td,{children:"Open application launcher"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F1"})}),(0,r.jsx)(n.td,{children:"Open application launcher"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F2"})}),(0,r.jsx)(n.td,{children:"Open command runner"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + R"})}),(0,r.jsx)(n.td,{children:"Open command runner"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + N"})}),(0,r.jsx)(n.td,{children:"Open network manager applet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + B"})}),(0,r.jsx)(n.td,{children:"Open bluetooth applet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + M"})}),(0,r.jsx)(n.td,{children:"Open music applet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + X"})}),(0,r.jsx)(n.td,{children:"Open powermenu applet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + S"})}),(0,r.jsx)(n.td,{children:"Open status applet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Space"})}),(0,r.jsx)(n.td,{children:"Open fluxbox root menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + Space"})}),(0,r.jsx)(n.td,{children:"Open fluxbox window menu"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"hardware-keys",children:"Hardware Keys"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"Print"})}),(0,r.jsx)(n.td,{children:"Take screenshot"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + Print"})}),(0,r.jsx)(n.td,{children:"Take screenshot in 5 seconds delay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"shift + Print"})}),(0,r.jsx)(n.td,{children:"Take screenshot in 10 seconds delay"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + Print"})}),(0,r.jsx)(n.td,{children:"Take screenshot of currently focused window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Print"})}),(0,r.jsx)(n.td,{children:"Take screenshot of selected area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86AudioRaiseVolume"})}),(0,r.jsx)(n.td,{children:"Increase volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86AudioLowerVolume"})}),(0,r.jsx)(n.td,{children:"Decrease volume"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86AudioMute"})}),(0,r.jsx)(n.td,{children:"Toggle mute speakers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86AudioMicMute"})}),(0,r.jsx)(n.td,{children:"Toggle mute microphone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86Audio + Next/Prev/Play/Stop"})}),(0,r.jsx)(n.td,{children:"Media controls (MPD)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86MonBrightnessUp"})}),(0,r.jsx)(n.td,{children:"Increase display brightness"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"XF86MonBrightnessDown"})}),(0,r.jsx)(n.td,{children:"Decrease display brightness"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"workspaces",children:"Workspaces"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + 1..5"})}),(0,r.jsx)(n.td,{children:"Switch to respective workspace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + 1..5"})}),(0,r.jsx)(n.td,{children:"Send the current window to respective workspace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + ctrl + 1..5"})}),(0,r.jsx)(n.td,{children:"Send the current window and change to respective workspace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + Left/Right"})}),(0,r.jsx)(n.td,{children:"Send the current window and follow it to previous/next workspace"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"window-management",children:"Window Management"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + C/Q"})}),(0,r.jsx)(n.td,{children:"Close focused window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + D"})}),(0,r.jsx)(n.td,{children:"Toggle show desktop"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F4"})}),(0,r.jsx)(n.td,{children:"Close window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F5"})}),(0,r.jsx)(n.td,{children:"Minimize window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F6"})}),(0,r.jsx)(n.td,{children:"Maximize window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F7"})}),(0,r.jsx)(n.td,{children:"Toggle decorations"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + F11"})}),(0,r.jsx)(n.td,{children:"Toggle fullscreen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"alt + Tab"})}),(0,r.jsx)(n.td,{children:"Cycle opened windows"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Tab"})}),(0,r.jsx)(n.td,{children:"Cycle through tabs in the current window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + 1..9"})}),(0,r.jsx)(n.td,{children:"Go to a specific tab in the current window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + D"})}),(0,r.jsx)(n.td,{children:"Remove the current tab from the tab group, placing it in its own window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + Left/Right/Up/Down"})}),(0,r.jsx)(n.td,{children:"Move focused window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + super + Left/Right/Up/Down"})}),(0,r.jsx)(n.td,{children:"Resize focused window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Left/Right/Up/Down"})}),(0,r.jsx)(n.td,{children:"Window snapping"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + H"})}),(0,r.jsx)(n.td,{children:"Arrange windows horizontally"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + V"})}),(0,r.jsx)(n.td,{children:"Arrange windows vertically"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + H"})}),(0,r.jsx)(n.td,{children:"Arrange windows stack right"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + L"})}),(0,r.jsx)(n.td,{children:"Arrange windows stack left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + J"})}),(0,r.jsx)(n.td,{children:"Arrange windows stack bottom"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + shift + K"})}),(0,r.jsx)(n.td,{children:"Arrange windows stack top"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"window-manager-1",children:"Window Manager"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + Delete"})}),(0,r.jsx)(n.td,{children:"Quit fluxbox"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + BackSpace"})}),(0,r.jsx)(n.td,{children:"Restart fluxbox"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + R"})}),(0,r.jsx)(n.td,{children:"Reconfigure fluxbox"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"misc-keys",children:"Misc Keys"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Keys"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + M"})}),(0,r.jsx)(n.td,{children:"Run ncmpcpp with album art"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"ctrl + alt + L"})}),(0,r.jsx)(n.td,{children:"Trigger lockscreen"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + P"})}),(0,r.jsx)(n.td,{children:"Run colorpicker"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)("kbd",{children:"super + Escape"})}),(0,r.jsx)(n.td,{children:"Run xkill"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,r.jsxs)(n.p,{children:["Here's few screenshots of ",(0,r.jsx)(n.code,{children:"Fluxbox"})," desktop. These'll give you an idea of the experience of Fluxbox in Archcraft."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Desktop 1"}),(0,r.jsx)(n.th,{children:"Desktop 2"}),(0,r.jsx)(n.th,{children:"Desktop 3"}),(0,r.jsx)(n.th,{children:"Desktop 4"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_1.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_2.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_3.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_4.png",alt:"img"})})]})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Desktop 5"}),(0,r.jsx)(n.th,{children:"Desktop 6"}),(0,r.jsx)(n.th,{children:"Desktop 7"}),(0,r.jsx)(n.th,{children:"Desktop 8"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_5.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_6.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_7.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_8.png",alt:"img"})})]})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Desktop 9"}),(0,r.jsx)(n.th,{children:"Desktop 10"}),(0,r.jsx)(n.th,{children:"Desktop 11"}),(0,r.jsx)(n.th,{children:"Desktop 12"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_9.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_10.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_11.png",alt:"img"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/archcraft-os/misc-files/main/screenshots/fluxbox/desktop/desktop_12.png",alt:"img"})})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"How to update my config to new configs?"})}),(0,r.jsxs)(n.p,{children:["When a new version of Archcraft Fluxbox get released, And you update the system by ",(0,r.jsx)(n.code,{children:"sudo pacman -Syu"})," or you update the Fluxbox package by ",(0,r.jsx)(n.code,{children:"sudo pacman -S archcraft-fluxbox"}),", New config files get installed as ",(0,r.jsx)(n.strong,{children:"~/.fluxbox_pacnew_YYYY-MM-DD"})," in your home directory."]}),(0,r.jsx)(n.p,{children:"To use new configs :"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["backup your old ",(0,r.jsx)(n.code,{children:"~/.fluxbox"})," directory"]}),"\n",(0,r.jsxs)(n.li,{children:["move ",(0,r.jsx)(n.code,{children:"~/.fluxbox_pacnew_YYYY-MM-DD"})," to ",(0,r.jsx)(n.code,{children:"~/.fluxbox"})]}),"\n",(0,r.jsx)(n.li,{children:"logout and login again."}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"How to change GTK theme, icons and cursor?"})}),(0,r.jsxs)(n.p,{children:["To change GTK theme, icons and cursor in Fluxbox session, Edit ",(0,r.jsx)(n.code,{children:"~/.fluxbox/xsettingsd"})," file and restart Fluxbox to apply the changes."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Net/ThemeName "Arc-Dark"\nNet/IconThemeName "Arc-Circle"\nGtk/CursorThemeName "Qogirr"\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"How to manage multiple monitors and resolution in Fluxbox?"})}),(0,r.jsxs)(n.p,{children:["If you use multiple monitors with Fluxbox window manager, you can manage them by running ",(0,r.jsx)(n.em,{children:"Manager Monitors"})," or ",(0,r.jsx)(n.code,{children:"archcraft-randr"})," app."]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Why Alacritty is not working on my computer?"})}),(0,r.jsx)(n.p,{children:"Since Alacritty is a OpenGL based terminal emulator, It may not work on some computer hardwares. You can make it work on such computers by following these methods :"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open alacritty with ",(0,r.jsx)(n.strong,{children:"LIBGL_ALWAYS_SOFTWARE=1"})," variable. Edit the keybindings/script launching alacritty and replace ",(0,r.jsx)(n.code,{children:"alacritty"})," with ",(0,r.jsx)(n.code,{children:"LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n",(0,r.jsxs)(n.li,{children:["Edit ",(0,r.jsx)(n.strong,{children:"/usr/share/applications/Alacritty.desktop"})," desktop file and replace ",(0,r.jsx)(n.code,{children:"Exec=alacritty"})," with ",(0,r.jsx)(n.code,{children:"Exec=env LIBGL_ALWAYS_SOFTWARE=1 alacritty"})]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>l});s(67294);var r=s(90512);const i={tabItem:"tabItem_Ymn6"};var t=s(85893);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>y});var r=s(67294),i=s(90512),t=s(12466),l=s(16550),d=s(20469),c=s(91980),o=s(67392),a=s(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const i=(0,l.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=x(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[o,h]=j({queryString:s,groupId:i}),[p,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,a.Nk)(s);return[i,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),b=(()=>{const e=o??p;return u({value:e,tabValues:t})?e:null})();(0,d.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,t]),tabValues:t}}var f=s(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(85893);function g(e){let{className:n,block:s,selectedValue:r,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),a=e=>{const n=e.currentTarget,s=c.indexOf(n),i=d[s].value;i!==r&&(o(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:a,...t,className:(0,i.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...e,...n}),(0,m.jsx)(w,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var r=s(67294);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);