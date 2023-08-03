---
slug: 02-post-bspwm
title: 在bspwm中更改主题和图标
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

在Archcraft中，Bspwm使用`xsettingsd`——一个遵循*XSETTINGS*规范的守护进程。
想要更改gtk主题、图标以及光标，你需要修改**~/.config/bspwm/xsettingsd**文件。

- 用你喜欢的编辑器编辑 **~/.config/bspwm/xsettingsd**

```bash
$ vim ~/.config/bspwm/xsettingsd
```

<!--truncate-->
  
- 根据你的需求修改以下行的值：

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- 重启`xsettingsd`进程。可以访问[这里](https://github.com/derat/xsettingsd/wiki/Settings)来参考更多可用选项。
