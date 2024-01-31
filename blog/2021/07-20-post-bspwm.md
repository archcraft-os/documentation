---
slug: 02-post-bspwm
title: How to change theme and icons in Bspwm?
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

In Archcraft, Bspwm use `xsettingsd`, a daemon that implements the *XSETTINGS* specification.
To change gtk theme, icons and cursor theme, you need to edit the **~/.config/bspwm/xsettingsd** file.

- Edit **~/.config/bspwm/xsettingsd** file with your favorite text editor

```bash
$ vim ~/.config/bspwm/xsettingsd
```

<!--truncate-->
  
- Change the values of following lines according to the stuff you want to apply

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- Restart the `xsettingsd` daemon. Have a look at [this](https://github.com/derat/xsettingsd/wiki/Settings) for all available options.
