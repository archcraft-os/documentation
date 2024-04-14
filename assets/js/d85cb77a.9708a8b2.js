"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[1971],{8255:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var i=n(85893),t=n(11151);const d={sidebar_position:2},c="Install Archcraft With ABIF",r={id:"install-archcraft/install-with-abif",title:"Install Archcraft With ABIF",description:"ABIF is the secondary installer in Archcraft, It is based on the command line and very powerful (I personally use it).",source:"@site/docs/install-archcraft/install-with-abif.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/install-with-abif",permalink:"/docs/install-archcraft/install-with-abif",draft:!1,unlisted:!1,editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/install-archcraft/install-with-abif.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install Archcraft With Calamares",permalink:"/docs/install-archcraft/install-with-calamares"},next:{title:"Post Installation",permalink:"/docs/install-archcraft/post-install"}},a={},h=[{value:"Prepare Installation",id:"prepare-installation",level:3},{value:"Partition Disk",id:"partition-disk",level:3},{value:"Setup LUKS Encryption",id:"setup-luks-encryption",level:3},{value:"Setup LVM",id:"setup-lvm",level:3},{value:"Mount Partitions",id:"mount-partitions",level:3},{value:"Install Base",id:"install-base",level:3},{value:"Configure Base",id:"configure-base",level:3},{value:"Review Config files",id:"review-config-files",level:3},{value:"Finish",id:"finish",level:3}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"install-archcraft-with-abif",children:"Install Archcraft With ABIF"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ABIF"})})," is the secondary installer in Archcraft, It is based on the command line and very powerful (",(0,i.jsx)(s.em,{children:"I personally use it"}),").\nIt is expected that the people who use this installer to install Archcraft, know what they are doing."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.em,{children:["I won't recommend using this installer if you're a beginner, Use ",(0,i.jsx)(s.a,{href:"./install-with-calamares",children:"Calamares"})," instead."]}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.em,{children:"But if you still want to use this installer, You can follow this guide."})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["In this guide, I'll be installing Archcraft on an UEFI system with ",(0,i.jsx)(s.code,{children:"Encryption"})," and ",(0,i.jsx)(s.code,{children:"LVM"})," by using ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ABIF"})}),".\nThe process will be the same if you are using BIOS."]}),"\n",(0,i.jsxs)(s.p,{children:["I'm assuming that you have already created a ",(0,i.jsx)(s.a,{href:"../boot-iso/boot-with-usb",children:"bootable USB"})," with Archcraft ISO, boot system with it and\nselect ",(0,i.jsx)(s.strong,{children:"Boot Archcraft"}),". Launch the installer via either welcome app or menu."]}),"\n",(0,i.jsxs)(s.p,{children:["Select the installer language and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(48358).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"prepare-installation",children:"Prepare Installation"}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Prepare Installation"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(2159).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set Virtual Console"}),", Choose your layout and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(48313).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set Desktop Keyboard Layout"}),", Choose your layout and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(83163).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"partition-disk",children:"Partition Disk"}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"List Devices"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(64338).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.p,{children:"Here, You can see available disks and partitions on your system."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(34704).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.p,{children:"If your disk is already partitioned, you can skip this and move to :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#setup-luks-encryption",children:"Setup LUKS"})," (",(0,i.jsxs)(s.em,{children:["If you want to use ",(0,i.jsx)(s.code,{children:"Encryption"})]}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#setup-lvm",children:"Setup LVM"})," (",(0,i.jsxs)(s.em,{children:["If you want to setup ",(0,i.jsx)(s.code,{children:"LVM"})]}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#mount-partitions",children:"Mount Partitions"})," (",(0,i.jsx)(s.em,{children:"If you just want a normal installation"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to do the partitioning, Select ",(0,i.jsx)(s.code,{children:"Partition Disk"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(75299).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Your Disk"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(92356).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Choose any partitioning utility (* Using ",(0,i.jsx)(s.code,{children:"gparted"})," here*) and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(3285).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Do the partitioning and when you're done, exit ",(0,i.jsx)(s.code,{children:"gparted"})]}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsxs)(s.p,{children:["If your system already has an EFI partition, Make sure it has at least ",(0,i.jsx)(s.code,{children:"100MB of free storage"}),", or the installation will fail."]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(92908).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"setup-luks-encryption",children:"Setup LUKS Encryption"}),"\n",(0,i.jsxs)(s.p,{children:["If you don't want to use ",(0,i.jsx)(s.strong,{children:"Disk Encryption"}),", You can skip this and move to :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#setup-lvm",children:"Setup LVM"})," (",(0,i.jsxs)(s.em,{children:["If you want to setup ",(0,i.jsx)(s.code,{children:"LVM"})]}),")"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#mount-partitions",children:"Mount Partitions"})," (",(0,i.jsxs)(s.em,{children:["If you don't want to use ",(0,i.jsx)(s.code,{children:"LVM"})]}),")"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you want to use ",(0,i.jsx)(s.strong,{children:"Disk Encryption"}),", Select ",(0,i.jsx)(s.code,{children:"LUKS Encryption"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(26906).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["I'll just go with ",(0,i.jsx)(s.code,{children:"Automatic LUKS"})," but if you have preferences, Use that and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(75237).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the partition you want to encrypt (",(0,i.jsxs)(s.em,{children:["I'll encrypt root which is ",(0,i.jsx)(s.code,{children:"/dev/sda2"})]}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(73560).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the name for ",(0,i.jsx)(s.code,{children:"Encrypted block device"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(3773).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Type a strong ",(0,i.jsx)(s.code,{children:"password"})," and press ",(0,i.jsx)("kbd",{children:"Enter"}),", Do it again."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(46693).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["You can review your LUKS setup here. When done, press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(64836).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Repeat the process to encrypt other partitions (",(0,i.jsxs)(s.em,{children:["for ex : ",(0,i.jsx)(s.code,{children:"/home"})]}),").\nWhen you're done, Select ",(0,i.jsx)(s.code,{children:"Back"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(71569).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"setup-lvm",children:"Setup LVM"}),"\n",(0,i.jsxs)(s.p,{children:["If you don't want to set up ",(0,i.jsx)(s.strong,{children:"Logical Volumes"}),", You can skip this and move to ",(0,i.jsx)(s.a,{href:"#mount-partitions",children:"Mount Partitions"}),".",(0,i.jsx)("br",{}),"\nIf you do, Select ",(0,i.jsx)(s.code,{children:"Logical Volume Management"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(95882).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Create a ",(0,i.jsx)(s.strong,{children:"Volume Group"})," first, Select ",(0,i.jsx)(s.code,{children:"Create VG and LV(s)"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(4834).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the name of the ",(0,i.jsx)(s.code,{children:"group"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(17989).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the ",(0,i.jsx)(s.code,{children:"Partitions"})," (",(0,i.jsxs)(s.em,{children:["use ",(0,i.jsx)("kbd",{children:"SPACE"})]}),") you want to add to the LV group and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(28142).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Press ",(0,i.jsx)("kbd",{children:"Enter"})," to confirm the creation of the group."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(37632).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["You'll get a dialog, confirming that the group has been created. press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(95207).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the ",(0,i.jsx)(s.code,{children:"Numbers"})," of volumes in the group (",(0,i.jsx)(s.em,{children:"We choose two partition to add in the group earlier"}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(1597).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the name of first LV (",(0,i.jsxs)(s.em,{children:["for ",(0,i.jsx)(s.code,{children:"root"})]}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(29632).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the size of the ",(0,i.jsx)(s.code,{children:"LV"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(73752).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["You'll see that the LV has been created. press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(24372).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Do the same for the second LV, Enter name and press ",(0,i.jsx)("kbd",{children:"Enter"}),". The size will be selected automatically."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(55854).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Press ",(0,i.jsx)("kbd",{children:"Enter"})," to view your LVM scheme."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(55917).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["When you're done and press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(60566).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"mount-partitions",children:"Mount Partitions"}),"\n",(0,i.jsxs)(s.p,{children:["Now that we have set up Partitions, (",(0,i.jsx)(s.em,{children:"Encryption and LVM"}),"). It's time to mount them for installation."]}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Mount Partitions"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(20950).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the ",(0,i.jsx)(s.code,{children:"Root Partition"})," and press ",(0,i.jsx)("kbd",{children:"Enter"}),". Keep in mind that :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you setup ",(0,i.jsx)(s.strong,{children:"LVM"})," (",(0,i.jsx)(s.em,{children:"with encryption"}),"), choose that for ",(0,i.jsx)(s.code,{children:"root"})," (",(0,i.jsxs)(s.em,{children:["for ex : in this setup ",(0,i.jsx)(s.strong,{children:"/dev/mapper/archcraft-lvol_root"})," will be the root"]}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["If you setup ",(0,i.jsx)(s.strong,{children:"Encryption"})," only (",(0,i.jsx)(s.em,{children:"no LVM"}),"), choose that for ",(0,i.jsx)(s.code,{children:"root"})," (",(0,i.jsx)(s.em,{children:"/dev/mapper/cryptroot"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["If you've not setup ",(0,i.jsx)(s.em,{children:"Encryption"})," or ",(0,i.jsx)(s.em,{children:"LVM"}),", choose ",(0,i.jsx)(s.code,{children:"root"})," normally (",(0,i.jsx)(s.em,{children:"/dev/sda2"}),")"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(84116).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"ext4"})," as file system (",(0,i.jsx)(s.em,{children:"you can choose any other fs type"}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(36854).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Yes"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to format the partition, Ignore other stuff."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(49910).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["If you have set up a ",(0,i.jsx)(s.strong,{children:"Swap Partition"}),", You can mount it here. You can also use a ",(0,i.jsx)(s.code,{children:"Swapfile"})," if you want.\nSelect whatever you prefer and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(80285).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Now, Mount the ",(0,i.jsx)(s.code,{children:"boot"})," partition. Select your ",(0,i.jsx)(s.code,{children:"EFI partition"})," (",(0,i.jsx)(s.em,{children:"/dev/sda1"}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(15828).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsxs)(s.p,{children:["Your system may already have an ",(0,i.jsx)(s.strong,{children:"EFI"})," partition. In that case ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DO NOT FORMAT IT"})})," or you won't be able to boot into other installed OS (Let's say windows)",(0,i.jsx)("br",{}),"\nJust mount the EFI partition to ",(0,i.jsx)(s.code,{children:"/boot"})]})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"No"})," if you don't want to format the EFI partition and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(61370).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"/boot"})," as mount point and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(73685).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["And, Now you can mount the rest of the partitions (",(0,i.jsx)(s.em,{children:"for ex: /home"}),") here. Select it and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(36858).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Again, Select ",(0,i.jsx)(s.code,{children:"ext4"})," (",(0,i.jsx)(s.em,{children:"or any other"}),") as FS and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(76241).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the ",(0,i.jsx)(s.code,{children:"mount point"})," for the partition and and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(68030).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["When you're done mounting all the partitions, Select ",(0,i.jsx)(s.code,{children:"Done"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(86342).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Back"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to go to Installation."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(40307).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"install-base",children:"Install Base"}),"\n",(0,i.jsxs)(s.p,{children:["Now all the partitions are mounted and ready, Let's install the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Base packages"})})]}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Install Base"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(93750).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Install Base Packages"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(8748).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Wait for the installation to complete. In the meantime, ",(0,i.jsx)(s.a,{href:"https://youtu.be/dQw4w9WgXcQ?t=5",children:"Lighten Up Your Mood..."})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(95266).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["After the installation is done, Select ",(0,i.jsx)(s.code,{children:"Run Mkinitcpio"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(69516).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["This will generate the ",(0,i.jsx)(s.strong,{children:"initramfs-linux"})," and ",(0,i.jsx)(s.strong,{children:"initramfs-linux-fallback"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(10297).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Install Bootloader"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(32021).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"grub"})," as bootloader and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(14537).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Yes"})," to make ",(0,i.jsx)(s.em,{children:"grub"})," default bootloader and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(32965).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Back"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit installation."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(76515).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"configure-base",children:"Configure Base"}),"\n",(0,i.jsx)(s.p,{children:"Archcraft is installed on your system. It's time to configure your installation."}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Configure Base"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(76770).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Generate FSTAB"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(68494).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Part UUID"})," for ",(0,i.jsx)(s.strong,{children:"UEFI"})," and ",(0,i.jsx)(s.code,{children:"Device UUID"})," for ",(0,i.jsx)(s.strong,{children:"BIOS"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(84270).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set Hostname"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(30119).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter the ",(0,i.jsx)(s.code,{children:"hostname"})," for your system and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(29224).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set System Locale"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(92558).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the locale you want to use (",(0,i.jsxs)(s.em,{children:[(0,i.jsx)(s.code,{children:"en_US.UTF-8"})," for US English"]}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(70986).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set Timezone and Clock"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(14256).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select your ",(0,i.jsx)(s.code,{children:"Time Zone"})," (eg : ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.code,{children:"ASIA"})}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(59059).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select your ",(0,i.jsx)(s.code,{children:"Region"})," (eg : ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.code,{children:"Kolkata"})}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(32249).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Yes"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(70365).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"utc"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["To dual boot with Windows it is recommended to ",(0,i.jsx)(s.a,{href:"https://wiki.archlinux.org/title/System_time#UTC_in_Microsoft_Windows",children:"configure Windows to use UTC"}),",\nrather than Linux to use localtime. (",(0,i.jsx)(s.em,{children:"Windows by default uses localtime"}),")"]})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(94215).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Set Root Password"})," to set a password for ",(0,i.jsx)(s.strong,{children:"root"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(19810).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Add New User(s)"})," to create new user account(s) and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(27153).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter ",(0,i.jsx)(s.code,{children:"username"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(36672).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Enter ",(0,i.jsx)(s.code,{children:"password"})," for your user account and press ",(0,i.jsx)("kbd",{children:"Enter"}),". Confirm the password."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(98740).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Security and systemd Tweaks"})," to tweak that stuff (",(0,i.jsx)(s.em,{children:"If you know what to do"}),") and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(90715).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["When you're done, Select ",(0,i.jsx)(s.code,{children:"Back"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to exit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(29309).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"review-config-files",children:"Review Config files"}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Review Configuration Files"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(92238).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select the ",(0,i.jsx)(s.code,{children:"file"})," you want to view and press ",(0,i.jsx)("kbd",{children:"Enter"}),". When you're done, Select ",(0,i.jsx)(s.code,{children:"Back"})," to exit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(76455).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.h3,{id:"finish",children:"Finish"}),"\n",(0,i.jsxs)(s.p,{children:["Everything is completed... You can now ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Quit the installer"})})," and reboot the system."]}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Done"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(25950).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsxs)(s.p,{children:["Select ",(0,i.jsx)(s.code,{children:"Yes"})," and press ",(0,i.jsx)("kbd",{children:"Enter"})," to quit."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(70912).Z+"",width:"1100",height:"770"})}),"\n",(0,i.jsx)(s.p,{children:"Reboot into your newly installed system."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"img",src:n(13387).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Well, That\u2019s it! Archcraft is installed on your system. Enjoy!"})})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},48358:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/1-12324f59ce88b4ca08dc344fa6212505.png"},92908:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/10-0c86aed77bd3124d6e836589f3a7a3df.png"},26906:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/11-94cec2647e24b3f5bf9162e0a72bdee3.png"},75237:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/12-f7adbcb45c899e039c77d7c9745a8656.png"},73560:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/13-7ce6f3d4373cf156c3818c5e9d44b298.png"},3773:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/14-30122bae18205101e437a7e3b848b7c5.png"},46693:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/15-a6abdb46eb8904ac9ec9bab9dd857c32.png"},64836:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/16-81a2f8c952c8d4edb07bcb667c825049.png"},71569:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/17-c0b92841d87c9f3cef4430a60e16e496.png"},95882:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/18-f1e07d9a208fa262e0df2ec4f0b5f604.png"},4834:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/19-9f3e70d38b589016221ff5b25650f33d.png"},2159:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/2-ca1ddfdad6bfac49d09894ffab937b64.png"},17989:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/20-5ea7ea8482aeb586f0cb8beb8ec370e5.png"},28142:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/21-72efda02228c5b37d3fd8803a9b90183.png"},37632:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/22-58448f8652d4f963f818fc17cca5ea14.png"},95207:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/23-5504c5e22e7e6beb8d77181c6499bc95.png"},1597:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/24-4d5534f03b910f85973d69ca82e4b67f.png"},29632:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/25-379e6ed8e95f7fbb1f64628b10bcff66.png"},73752:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/26-26fd50c335dbd4c9772b3900b6da7bba.png"},24372:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/27-12995db5fa351dad78e227819ec49aea.png"},55854:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/28-98a527ddea0f069afef6dd5bcd323b09.png"},55917:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/29-48506b0d281f25a04b102eaf7d51b479.png"},48313:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/3-d29f910eec3784b7d055d2e0c1f5414d.png"},60566:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/30-332683db71686349784a639331395b1d.png"},20950:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/31-af6bdd9bc060e1bb609efbc436e30e22.png"},84116:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/32-3d7a3218598575ccf7f91dfc03daf258.png"},36854:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/33-866de8f5d4a2a8d815e78868e10c6322.png"},49910:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/34-38d69cbd3461376712eefe09c14a0952.png"},80285:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/35-89dbbaf53f27a21fb3741ce1d2ee081d.png"},15828:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/36-5cbe2d5f354ac65d46f346b01d6e625a.png"},61370:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/37-8365f1333e48bce254d808215cfc6f91.png"},73685:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/38-98896945a88cd179b8b3c981997c8fdb.png"},36858:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/39-14ef299f1db3c0cf104d3161a5738e66.png"},83163:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/4-cb3362d9fe928f83b4b2f804542c875c.png"},76241:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/40-09bd41809a2f8956556c2efbd8e1a035.png"},68030:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/41-f5167623c165196fbc4a721d539ad75a.png"},86342:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/42-927ab47e553c7a11e78b793bdc9d5685.png"},40307:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/43-6612e95273a21f6b5dd2255b8013d95f.png"},93750:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/44-baa756ac9f0a2c8d86a0261ac5d918c4.png"},8748:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/45-9c308e1fdfe3a2e4597e95bded3be45d.png"},95266:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/46-9ec2c12091058f331d00ac56d8290d20.png"},69516:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/47-0ab1279f611b1e3fb25cc1f840eac176.png"},10297:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/48-23235e2b6891dd9de4af2419746e88c0.png"},32021:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/49-309c06690ac33a9cfb246e45a3bf61b0.png"},64338:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/5-40e427a215ea04307b0e36e32467ed4a.png"},14537:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/50-341e1440163d838dd8572c62ff8f6a46.png"},32965:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/51-f09c9e09d9031bc17555cbbb5c6bbd2c.png"},76515:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/52-dcf85ec78de0e9dfc558e49bcc862ea8.png"},76770:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/53-70ee3e3fc2cb70e0c3152716dcf1b8a4.png"},68494:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/54-13c0d4c403e709054c4ed2ca67300a05.png"},84270:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/55-dfb504a5193eba43ce8a837db55c2547.png"},30119:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/56-c636a5cd02967482de5405b836fcbbae.png"},29224:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/57-0a2f994dfe74083a71adea3d3b41f0ba.png"},92558:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/58-7b5d57cefd07566cc32899292b82a0cc.png"},70986:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/59-83d9e2e0937071fc5154499b6af1bc58.png"},34704:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/6-8b6542617b214a06449fa510730ef9ee.png"},14256:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/60-76f34291d179728d678dfa242c198319.png"},59059:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/61-0c5b9bc9c64b6d61fc6a069930060476.png"},32249:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/62-e567fd551522f7d707cba14a5b38e71b.png"},70365:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/63-137dcebe9c51d901799ec5c4bc668717.png"},94215:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/64-414da8986b822123f19f3b367754137d.png"},19810:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/65-761bf6833d30ce9abd4b738a1f2a2205.png"},27153:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/66-c2b39355718a2eb4ac31e0b388859ec4.png"},36672:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/67-892ca61586d6262219a8126188803778.png"},98740:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/68-18e113702929b2bcf47fe62171cc3cae.png"},90715:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/69-a8edff98c80172cca4289dda206c3c73.png"},75299:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/7-b237f5b0764336403c6b8e59fd888b77.png"},29309:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/70-479d43b29db1e455416e794c974243bd.png"},92238:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/71-67c5370fbe1f1d527de1818d3ac2a529.png"},76455:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/72-5bd8f4d69709de49df5eac4a136e2180.png"},25950:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/73-f3d1e9bcf0a2331e76fad021e5b9bc22.png"},70912:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/74-023f72469808bd79eff56609ec9a9837.png"},13387:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/75-805f7b5c138e55517fba648e7db219d7.png"},92356:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/8-47de5d10219a739d4a30863e6fb2696b.png"},3285:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/9-1bd7d8ab29eeff428a59c61c1829737b.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>c});var i=n(67294);const t={},d=i.createContext(t);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);