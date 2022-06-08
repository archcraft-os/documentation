---
slug: 02-post-bspwm
title: bspwm'de tema ve ikonları değiştirme
authors: adi1090x
tags: [howto, bspwm, xsettingsd, gtk]
---

Archcraft'ta Bspwm, *XSETTINGS* tanımlamalarını uygulayan bir arka plan programı olan `xsettingsd`'yi kullanır.
gtk temasını, ikonları ve imleç temasını değiştirmek için  **~/.xsettingsd** dosyasını editleyin.

-  **~/.xsettingsd** dosyasını favori metin düzenleyicinizle düzenleyin.

```bash
$ vim ~/.xsettingsd
```

<!--truncate-->
  
- Uygulamak istediğiniz ayarlara göre aşağıdaki satırların değerlerini değiştirin.

```bash
Net/ThemeName "Arc-Dark"
Net/IconThemeName "Arc-Circle"
Gtk/CursorThemeName "Pear"
```

- `xsettingsd` arka plan programını yeniden başlatın. Mevcut tüm seçenekler için [buraya](https://github.com/derat/xsettingsd/wiki/Settings) bir göz atın.
