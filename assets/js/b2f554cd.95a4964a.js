"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"03-archcraft-update","metadata":{"permalink":"/blog/03-archcraft-update","editUrl":"https://github.com/archcraft-os/documentation/edit/main/blog/2024/10-20-update-archcraft.mdx","source":"@site/blog/2024/10-20-update-archcraft.mdx","title":"Update Archcraft to October 2024 version","description":"MAJOR The most recent Archcraft October ISO has undergone significant modifications that cannot be fully implemented through a Pacman update. To upgrade your current installation to the most recent Archcraft version, some manual tasks must be completed.","date":"2024-10-20T00:00:00.000Z","formattedDate":"October 20, 2024","tags":[{"label":"archcraft","permalink":"/blog/tags/archcraft"},{"label":"update","permalink":"/blog/tags/update"},{"label":"os","permalink":"/blog/tags/os"}],"readingTime":4.355,"hasTruncateMarker":true,"authors":[{"name":"Aditya Shakya","title":"Developer of Archcraft","url":"https://github.com/adi1090x","imageURL":"https://github.com/adi1090x.png","key":"adi1090x"}],"frontMatter":{"slug":"03-archcraft-update","title":"Update Archcraft to October 2024 version","authors":"adi1090x","tags":["archcraft","update","os"],"hide_table_of_contents":true},"unlisted":false,"nextItem":{"title":"How to fix invalid or corrupted package (PGP signature)issue?","permalink":"/blog/02-post-pacman"}},"content":"\x3c!-- Badges --\x3e\\nexport const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'25px\',\\n      color: \'#fff\',\\n      padding: \'0.2rem 0.4rem\',\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\n<Highlight color=\\"#e06b74\\"><b>MAJOR</b></Highlight> The most recent Archcraft October ISO has undergone significant modifications that cannot be fully implemented through a Pacman update. To upgrade your current installation to the most recent Archcraft version, some manual tasks must be completed.\\n\\n\x3c!--truncate--\x3e\\n\\nTo ensure a seamless and successful upgrade, please adhere to the following steps:\\n\\n## Perform a comprehensive system upgrade\\n\\nCommence the process by upgrading the system. To achieve this, launch a terminal and execute the following command:\\n\\n```bash\\nsudo pacman -Syyu\\n```\\nUpon completion, proceed to reboot the computer. Post-reboot, you may encounter certain unexpected changes, such as:\\n\\n- Compromised Openbox themes\\n- Truncated icons/glyphs within Rofi\\n- Issues with the Picom compositor\\n- And so on\\n\\nFret not, for we shall rectify these matters. Simply adhere to the subsequent steps:\\n\\n### 1. Install `archcraft-skeleton` package\\nA new package called `archcraft-skeleton` is now available for installation. This package contains updated configuration files for Picom and other applications.\\n\\nSince the old configuration files already exist on your system and are not associated with any specific package, you will need to overwrite them with the new files. To do this, simply run the following command:\\n```bash\\nsudo pacman -S --overwrite \\"*\\" archcraft-skeleton\\n```\\n\\n### 2. Install New Cursor, Icons, and Themes\\nThe repository now includes numerous new cursor, icon, and GTK themes. These new themes will not be automatically installed during system upgrades because they are part of a group package. To install all the new cursor, icon, and GTK themes, execute the following command:\\n```bash\\nsudo pacman -S archcraft-cursors archcraft-icons archcraft-themes\\n```\\n\\n### 3. Update the Openbox Window Manager Configuration\\n\\nThe Openbox window manager has undergone significant visual updates, particularly with icon and nerd fonts. These changes may cause glyphs to break in various components like Polybar, Rofi, and other places where custom icons are used. To address this, you have two options:\\n\\n1. **Manual Update**:\\n   - Use the tool `meld` to compare and merge the new and old configurations. The updated configuration files should be located in your config directory under `openbox_pacnew_YYYY-MM-DD`. Open these files with `meld` and integrate the necessary changes into your existing setup.\\n\\n2. **Automated Update**:\\n   - If you\'d like to streamline the process, you can back up your existing Openbox configuration and apply the new files. To do this, execute the following commands in your terminal:\\n\\n   ```bash\\n   cp -rf ~/.config/openbox ~/.config/openbox_backup_$(date +%Y-%m-%d)\\n   mv ~/.config/openbox_pacnew_YYYY-MM-DD ~/.config/openbox\\n   ```\\n\\nAfter completing these steps, log out and log back in to apply the new configurations.\\n\\n### 4. Update the BSPWM Window Manager Configuration\\n\\nSimilar to Openbox, the BSPWM window manager has also undergone several visual changes. You have two options to update BSPWM:\\n\\n1. **Manual Update**:\\n   - As with Openbox, you can use `meld` to compare the new and old BSPWM configuration directories. The new configuration files will be installed in your config directory under `bspwm_pacnew_YYYY-MM-DD`. Use `meld` to review and apply changes as needed.\\n\\n2. **Automated Update**:\\n   - For a simpler approach, back up your current BSPWM configuration and replace it with the new files by running:\\n\\n   ```bash\\n   cp -rf ~/.config/bspwm ~/.config/bspwm_backup_$(date +%Y-%m-%d)\\n   mv ~/.config/bspwm_pacnew_YYYY-MM-DD ~/.config/bspwm\\n   ```\\n\\nAfter these changes, log out and log back in to activate the new configuration.\\n\\n### 5. Update the Picom Compositor Configuration\\n\\nThe package installed in Step 1 (`archcraft-skeleton`) includes updated configuration files for Picom. To apply the new Picom configuration, simply copy the `picom.conf` file from `/etc/skel` to your local config directory by running:\\n\\n```bash\\ncp /etc/skel/.config/picom.conf ~/.config/picom.conf\\n```\\n\\nAfter copying, restart the Picom compositor to apply the new configuration.\\n\\n### 6. Miscellaneous Updates\\n\\nIn addition to the major changes, there are a few minor updates that you may want to apply.\\n\\n#### a. Updated Alacritty Configuration\\nThe Alacritty terminal configuration has been updated. You can copy the new configuration files from `/etc/skel` to your home directory by running the following command:\\n\\n```bash\\ncp -r /etc/skel/.config/alacritty ~/.config/alacritty\\n```\\n\\n#### b. New Kitty Terminal Configuration\\nSupport for the Kitty terminal has been added to both Openbox and BSPWM. To start using Kitty, install it and copy the configuration files to your home directory:\\n\\n```bash\\nsudo pacman -S kitty\\ncp -r /etc/skel/.config/kitty ~/.config/kitty\\n```\\n\\n#### c. Updated Neofetch Configuration\\nThe Neofetch configuration has also been updated. If you prefer to use the latest version, copy the new configuration files with this command:\\n\\n```bash\\ncp -r /etc/skel/.config/neofetch ~/.config/neofetch\\n```\\n\\n#### d. Updated Zsh Theme Configuration\\nThe Archcraft Zsh theme has been updated as well. If you\'d like to use the new theme, copy the updated configuration files by running:\\n\\n```bash\\ncp -r /etc/skel/.oh-my-zsh ~/.oh-my-zsh\\n```\\n___\\n\\nThese are the necessary changes to fully update your installation to the latest release. Please note that if you are using a window manager other than Openbox or BSPWM, those configurations have not been updated yet. However, updates for those will be available soon. I am currently focused on preparing new ISO releases, after which I will work on updating the additional window managers.\\n\\nI hope this guide has been helpful in assisting you with the update process. Stay tuned for further updates.\\n\\nTake care!"},{"id":"02-post-pacman","metadata":{"permalink":"/blog/02-post-pacman","editUrl":"https://github.com/archcraft-os/documentation/edit/main/blog/2024/01-30-post-pacman.md","source":"@site/blog/2024/01-30-post-pacman.md","title":"How to fix invalid or corrupted package (PGP signature)issue?","description":"If you get invalid or corrupted package (PGP signature) error, do :","date":"2024-01-30T00:00:00.000Z","formattedDate":"January 30, 2024","tags":[{"label":"howto","permalink":"/blog/tags/howto"},{"label":"theme","permalink":"/blog/tags/theme"},{"label":"openbox","permalink":"/blog/tags/openbox"},{"label":"bspwm","permalink":"/blog/tags/bspwm"},{"label":"wm","permalink":"/blog/tags/wm"}],"readingTime":0.225,"hasTruncateMarker":true,"authors":[{"name":"Aditya Shakya","title":"Developer of Archcraft","url":"https://github.com/adi1090x","imageURL":"https://github.com/adi1090x.png","key":"adi1090x"}],"frontMatter":{"slug":"02-post-pacman","title":"How to fix invalid or corrupted package (PGP signature)issue?","authors":"adi1090x","tags":["howto","theme","openbox","bspwm","wm"]},"unlisted":false,"prevItem":{"title":"Update Archcraft to October 2024 version","permalink":"/blog/03-archcraft-update"},"nextItem":{"title":"How to create my own themes in openbox and bspwm?","permalink":"/blog/01-post-theme"}},"content":"If you get `invalid or corrupted package (PGP signature) error`, do :\\n\\n\x3c!-- truncate --\x3e\\n\\n- Open a terminal\\n- Run: `sudo pacman -S archlinux-keyring`\\n- Then Run: `sudo pacman-key --init`\\n- Then Run: `sudo pacman-key --populate`\\n- Done! (Also delete the corrupted pkgs too.)"},{"id":"01-post-theme","metadata":{"permalink":"/blog/01-post-theme","editUrl":"https://github.com/archcraft-os/documentation/edit/main/blog/2024/01-30-post-theme.md","source":"@site/blog/2024/01-30-post-theme.md","title":"How to create my own themes in openbox and bspwm?","description":"Creating your own themes is super easy now. In this short guide, I\'ll make a new theme for openbox. The same steps will also be applied to create a new theme in bspwm. Follow the steps below:","date":"2024-01-30T00:00:00.000Z","formattedDate":"January 30, 2024","tags":[{"label":"howto","permalink":"/blog/tags/howto"},{"label":"theme","permalink":"/blog/tags/theme"},{"label":"openbox","permalink":"/blog/tags/openbox"},{"label":"bspwm","permalink":"/blog/tags/bspwm"},{"label":"wm","permalink":"/blog/tags/wm"}],"readingTime":0.88,"hasTruncateMarker":true,"authors":[{"name":"Aditya Shakya","title":"Developer of Archcraft","url":"https://github.com/adi1090x","imageURL":"https://github.com/adi1090x.png","key":"adi1090x"}],"frontMatter":{"slug":"01-post-theme","title":"How to create my own themes in openbox and bspwm?","authors":"adi1090x","tags":["howto","theme","openbox","bspwm","wm"]},"unlisted":false,"prevItem":{"title":"How to fix invalid or corrupted package (PGP signature)issue?","permalink":"/blog/02-post-pacman"},"nextItem":{"title":"How to change theme and icons in Bspwm?","permalink":"/blog/02-post-bspwm"}},"content":"Creating your own themes is super easy now. In this short guide, I\'ll make a new theme for **openbox**. The same steps will also be applied to create a new theme in bspwm. Follow the steps below:\\n\\n\x3c!-- truncate --\x3e\\n\\n- Open file manager and go to `~/.config/openbox-themes/themes`. For bspwm, go to `~/.config/bspwm/themes`\\n- Now, Copy an existing theme and give it a name. eg: copy **default** to **mytheme**\\n- At this point, You have got a new theme and you can see it in `Preferences > Change Style`\\n- Now, Change to **mytheme** directory and start working on your theme.\\n- Put the **wallpaper** you want to use for the theme. Make sure the name of the file should be `wallpaper`\\n- Edit `theme.bash` file to change: **Colors, Fonts, Icons, GTK & Openbox Theme** and basically everything.\\n- Go to **polybar** directory and change it\'s appearance, position, size, etc.\\n- Go to **rofi** directory and change it\'s layout, size, position, etc.\\n- Use your own creativity.\\n- And... That\'s it, You have your own theme!"},{"id":"02-post-bspwm","metadata":{"permalink":"/blog/02-post-bspwm","editUrl":"https://github.com/archcraft-os/documentation/edit/main/blog/2021/07-20-post-bspwm.md","source":"@site/blog/2021/07-20-post-bspwm.md","title":"How to change theme and icons in Bspwm?","description":"In Archcraft, Bspwm use xsettingsd, a daemon that implements the XSETTINGS specification.","date":"2021-07-20T00:00:00.000Z","formattedDate":"July 20, 2021","tags":[{"label":"howto","permalink":"/blog/tags/howto"},{"label":"bspwm","permalink":"/blog/tags/bspwm"},{"label":"xsettingsd","permalink":"/blog/tags/xsettingsd"},{"label":"gtk","permalink":"/blog/tags/gtk"}],"readingTime":0.4,"hasTruncateMarker":true,"authors":[{"name":"Aditya Shakya","title":"Developer of Archcraft","url":"https://github.com/adi1090x","imageURL":"https://github.com/adi1090x.png","key":"adi1090x"}],"frontMatter":{"slug":"02-post-bspwm","title":"How to change theme and icons in Bspwm?","authors":"adi1090x","tags":["howto","bspwm","xsettingsd","gtk"]},"unlisted":false,"prevItem":{"title":"How to create my own themes in openbox and bspwm?","permalink":"/blog/01-post-theme"},"nextItem":{"title":"How to add my music in the player?","permalink":"/blog/01-post-mpd"}},"content":"In Archcraft, Bspwm use `xsettingsd`, a daemon that implements the *XSETTINGS* specification.\\nTo change gtk theme, icons and cursor theme, you need to edit the **~/.config/bspwm/xsettingsd** file.\\n\\n- Edit **~/.config/bspwm/xsettingsd** file with your favorite text editor\\n\\n```bash\\n$ vim ~/.config/bspwm/xsettingsd\\n```\\n\\n\x3c!--truncate--\x3e\\n  \\n- Change the values of following lines according to the stuff you want to apply\\n\\n```bash\\nNet/ThemeName \\"Arc-Dark\\"\\nNet/IconThemeName \\"Arc-Circle\\"\\nGtk/CursorThemeName \\"Pear\\"\\n```\\n\\n- Restart the `xsettingsd` daemon. Have a look at [xsettingsd wiki](https://github.com/derat/xsettingsd/wiki/Settings) for all available options."},{"id":"01-post-mpd","metadata":{"permalink":"/blog/01-post-mpd","editUrl":"https://github.com/archcraft-os/documentation/edit/main/blog/2021/07-20-post-mpd.md","source":"@site/blog/2021/07-20-post-mpd.md","title":"How to add my music in the player?","description":"To add your favorite music in mpd, (assuming your songs are stored in ~/Music directory) follow the steps below :","date":"2021-07-20T00:00:00.000Z","formattedDate":"July 20, 2021","tags":[{"label":"howto","permalink":"/blog/tags/howto"},{"label":"mpd","permalink":"/blog/tags/mpd"},{"label":"ncmpcpp","permalink":"/blog/tags/ncmpcpp"},{"label":"polybar","permalink":"/blog/tags/polybar"}],"readingTime":0.335,"hasTruncateMarker":true,"authors":[{"name":"Aditya Shakya","title":"Developer of Archcraft","url":"https://github.com/adi1090x","imageURL":"https://github.com/adi1090x.png","key":"adi1090x"}],"frontMatter":{"slug":"01-post-mpd","title":"How to add my music in the player?","authors":"adi1090x","tags":["howto","mpd","ncmpcpp","polybar"]},"unlisted":false,"prevItem":{"title":"How to change theme and icons in Bspwm?","permalink":"/blog/02-post-bspwm"}},"content":"To add your favorite music in `mpd`, (*assuming your songs are stored in `~/Music` directory*) follow the steps below :\\n\\n\x3c!-- truncate --\x3e\\n\\n- Open a terminal and run **ncmpcpp**\\n- In `ncmpcpp`, press <kbd>2</kbd> to open **song browser**\\n- In browser tab, press <kbd>u</kbd> to update the **music database**\\n- Select your songs and press <kbd>SPACE</kbd> to add the songs in your **current playlist**\\n- Done!"}]}')}}]);