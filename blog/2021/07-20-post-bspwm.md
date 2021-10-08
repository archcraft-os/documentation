---
slug: 02-post-bspwm
title: Change themes and icons in bspwm
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

In Archcraft, Bspwm use `xsettingsd`, a daemon that implements the *XSETTINGS* specification.
To change gtk theme, icons and cursor theme, you need to edit the **~/.xsettingsd** file.

- Edit **~/.xsettingsd** file with your favorite text editor

```bash
$ vim ~/.xsettingsd
```

<!--truncate-->
  
- Change the values of following lines according to the stuff you want to apply

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- Restart the `xsettingsd` daemon. Have a look at [this](https://github.com/derat/xsettingsd/wiki/Settings) for all available options.
