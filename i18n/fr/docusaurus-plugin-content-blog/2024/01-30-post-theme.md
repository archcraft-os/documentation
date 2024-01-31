---
slug: 01-post-theme
title: How to create my own themes in openbox and bspwm?
authors: adi1090x
tags: [howto, theme, openbox, bspwm, wm]
---

Creating your own themes is super easy now. In this short guide, I'll make a new theme for **openbox**. The same steps will also be applied to create a new theme in bspwm. Follow the steps below:

<!-- truncate -->

- Open file manager and go to `~/.config/openbox-themes/themes`. For bspwm, go to `~/.config/bspwm/themes`
- Now, Copy an existing theme and give it a name. eg: copy **default** to **mytheme**
- At this point, You have got a new theme and you can see it in `Preferences > Change Style`
- Now, Change to **mytheme** directory and start working on your theme.
- Put the **wallpaper** you want to use for the theme. Make sure the name of the file should be `wallpaper`
- Edit `theme.bash` file to change: **Colors, Fonts, Icons, GTK & Openbox Theme** and basically everything.
- Go to **polybar** directory and change it's appearance, position, size, etc.
- Go to **rofi** directory and change it's layout, size, position, etc.
- Use your own creativity.
- And... That's it, You have your own theme!
