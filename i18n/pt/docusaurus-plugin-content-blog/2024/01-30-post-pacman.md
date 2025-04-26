---
slug: 02-post-pacman
title: Corrigindo problema de pacote inválido ou corrompido (Assinatura PGP)
authors: adi1090x
tags: [howto, theme, openbox, bspwm, wm]
---

Se você tem `erro de pacote inválido ou corrompido (Assinatura PGP)`, faça isso:

<!-- truncate -->

- Abra o terminal
- Digite: `sudo pacman -S archlinux-keyring` e aperte **`Enter`**
- Depois digite: `sudo pacman-key --init` e aperte **`Enter`**
- Depois: `sudo pacman-key --populate` e aperte **`Enter`**
- Pronto! (Isso apaga os pacotes corrompidos também.)
