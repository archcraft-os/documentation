---
slug: 02-post-bspwm
title: Zmień motyw i ikony bspwm
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

Bspwm w Archcraftcie używa `xsettingsd`, demona, który implementuje specyfikację *XSETTINGS*.
Aby zmienić motyw gtk, ikony i motyw kursora, należy edytować plik **~/.xsettingsd**.

- Edytuj **~/.xsettingsd** używając swojego ulubionego edytora tekstowego.

```bash
$ vim ~/.xsettingsd
```

<!--truncate-->
  
- Edytuj poszczególne wartości, w zależnośći od tego co chcesz zmienić.

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- Zrestartuj daemona `xsettingsd`. Zobacz [tutaj](https://github.com/derat/xsettingsd/wiki/Settings), jeśli chcesz zobaczyć wszystkie dostępne opcje.