---
slug: 02-post-bspwm
title: Changer les thèmes et les icônes dans bspwm
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

Dans Archcraft, BSPWM utilise `xsettingsd`, un démon qui implimente la specification *XSETTINGS*
Pour changer les thémes GTK, icons et le theme du curseur , vous devez éditer le fichier **~/.xsettingsd**
- Éditez **~/.xsettingsd** avec votre éditeur de texte de choix
```bash
$ vim ~/.xsettingsd
```

<!--truncate-->
  
- Changez ces valeurs avec les valeurs que vous voulez mettre
```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- Redémarez le démon `xsettingsd`. Jettez un coup d'oeil au [wiki](https://github.com/derat/xsettingsd/wiki/Settings) pour toutes les options possibles
