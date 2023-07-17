---
slug: 02-post-bspwm
title: Cambiar temas e íconos en bspwm
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

En Archcraft, Bspwm usa `xsettingsd`, un daemon que implementa las especificaciones de *XSETTINGS*.
Para cambiar el tema gtk, íconos y la forma del cursor, es necesario editar el archivo **~/.config/bspwm/xsettingsd**.

- Edita el archivo **~/.config/bspwm/xsettingsd** con tu editor de texto favorito

```bash
$ vim ~/.config/bspwm/xsettingsd
```

<!--truncate-->
  
- Cambia los valores de las siguientes líneas de acuerdo a lo que desees aplicar

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

<!-- I strongly recommend to update the URL, the wiki/settings repository is off. -->
- Reinicia el proceso `xsettingsd`. Échale un vistazo a los [temas](https://github.com/derat/xsettingsd/wiki/Settings) disponibles para aplicar.
