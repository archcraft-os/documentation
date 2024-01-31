---
slug: 02-post-pacman
title: How to fix invalid or corrupted package (PGP signature)issue?
authors: adi1090x
tags: [howto, theme, openbox, bspwm, wm]
---

If you get `invalid or corrupted package (PGP signature) error`, do :

<!-- truncate -->

- Open a terminal
- Run: `sudo pacman -S archlinux-keyring`
- Then Run: `sudo pacman-key --init`
- Then Run: `sudo pacman-key --populate`
- Done! (Also delete the corrupted pkgs too.)
