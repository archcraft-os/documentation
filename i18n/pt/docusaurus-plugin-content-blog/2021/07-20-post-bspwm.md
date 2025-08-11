---
slug: 02-post-bspwm
title: Alterar temas e ícones no bspwm
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

No Archcraft, o Bspwm usa o `xsettingsd`, um daemon que implementa a especificação *XSETTINGS*.
Para alterar o tema gtk, os ícones e o tema do cursor, você precisa editar o arquivo **~/.config/bspwm/xsettingsd**.

- Edite o arquivo **~/.config/bspwm/xsettingsd** com seu editor de texto favorito

```bash
$ vim ~/.config/bspwm/xsettingsd
```

<!--truncate-->
  
- Altere os valores das linhas a seguir de acordo com o que você deseja aplicar

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- Reinicie o daemon `xsettingsd`. Dê uma olhada [aqui](https://github.com/derat/xsettingsd/wiki/Settings) para todas as opções disponíveis.
