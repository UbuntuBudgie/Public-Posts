---
ID: 1707
post_title: >
  Ubuntu Budgie 20.04LTS Release Notes for
  18.04 Upgraders
post_name: >
  ubuntu-budgie-20-04lts-release-notes-for-18-04-upgraders
author: David
post_date: 2020-04-21 14:01:52
layout: post
link: >
  https://ubuntubudgie.org/2020/04/21/ubuntu-budgie-20-04lts-release-notes-for-18-04-upgraders/
published: true
tags: [ ]
categories:
  - News
---
<p>[caption id="attachment_1754" align="alignnone" width="719"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/ubuntu_budgie_2004_header.jpg" alt="Ubuntu Budgie 20.04 Desktop" width="719" height="300" class="size-full wp-image-1754" /> Ubuntu Budgie 20.04 Desktop[/caption]</p>
<h1>VERSION</h1>
<h3>Ubuntu Budgie v20.04 (Focal Fossa) Release: April 23rd, 2020</h3>
<p>Ubuntu Budgie 20.04 is a LTS (Long Term Support) release that will be supported for 3 years until April 2023. Long Term Releases provide assured stability over a longer term than a standard 9 month release. Critical and stability fixes will be released for all the supported Ubuntu Budgie components; these will be undertaken by ourselves, Canonical and the wider Ubuntu community.</p>
<p>This is the 18.04 upgraders release note. This takes the 19.10/19.04 and 18.10 release notes and highlights the key parts that 18.04 upgraders need to be aware of.</p>
<p>If you are upgrading from 19.10 we have a <a href="https://ubuntubudgie.org/2020/04/02/ubuntu-budgie-20-04lts-release-notes/" title="release note">release note</a> more applicable to you!</p>
<p>In these release notes the areas covered are:</p>
<ul>
<li>New features and enhancements</li>
<li>Issues Resolved</li>
<li>Upgrading from 18.04 Ubuntu Budgie</li>
<li>Known Issues when upgrading</li>
<li>Where to download Ubuntu Budgie</li>
</ul>
<p>[caption id="attachment_1756" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/ub_desktop_2004-744x393.jpg" alt="Ub Desktop 2004" width="744" height="393" class="size-medium wp-image-1756" /> UB Desktop 20.04[/caption]</p>
<h1>NEW FEATURES AND ENHANCEMENTS</h1>
<h2>20.04 STUFF TO LOOK OUT FOR</h2>
<ul>
<li>Stylish menu applet as the default</li>
<li>budgie based network manager applet as the default</li>
<li>Window Shuffler - animations, faster, keyboard friendly tiling CTRL+ALT+keypad numbers; The currently focussed window can be now tiled to each corner, side to side or maximized/unmaximized all from the keyboard. Give it a try (enable via Menu - Shuffler control).</li>
<li>Desktop Layouts - choose your default desktop layout with one click</li>
<li>4K resolution friendly budgie desktop and budgie applet support</li>
<li>GNOME Firmware and Drawing are new default applications</li>
<li>Ubuntu Budgie Team Wallpapers for 20.04 - there was a community contest to choose its favourite wallpapers - and the community certainly contributed <a href="https://ubuntubudgie.org/2020/02/11/congratulation-to-winners-of-20-04-wallpaper-competition/" title="amazing">amazing desktop images</a>. I hope you like them. We will next run a community contest for the 22.04 LTS</li>
<li>All our backport packages have now been rebuilt for 20.04 - look out for nemo-share and nemo-dropbox and also skippy-xd is available through backports.</li>
<li>Firefox is the default browser.</li>
<li>Catfish file and text search is now a default install</li>
<li>The community has requested Files (Nautilus) to be switched to Files (Nemo) - so welcome back split screen and other goodies. Tip - press Alt or right-click the toolbar to show the Menu for preferences etc. </li>
<li>budgie-nemo integration - right click options for changing the background, launch budgie-desktop-settings and catfish file &amp; text search. Nemo folder-color is unfortunately not available in the repositories, so it has been dropped. </li>
<li>QogirBudgie from the fiendishly clever themer vinceliuice - so three of the best themes are now default in budgie-desktop-settings (Arc, Pocillo and QogirBudgie)  </li>
<li>As the community has requested, Plank dock has now been switched to the bottom of the screen, is transparent and has the bounce animations by default </li>
</ul>
<h2>BUDGIE DESKTOP:</h2>
<p>Ubuntu Budgie 20.04 LTS ships with budgie-desktop v10.5.1.  This is a massive upgrade for 18.04 users and the updates are too extensive to list.  So here are the areas you should go/look and discover!</p>
<ul>
<li>Raven - Sound controls</li>
<li>New Raven section in Budgie Desktop Settings. </li>
<li>Ability to enable window focus change to being on mouse enter / leave via the “Windows” section of Budgie Desktop Settings, as opposed to click-to-focus. </li>
<li>The “Fonts” section of Budgie Desktop Settings introduces hint, Text Scaling and anti-aliasing options</li>
<li>Raven Notification grouping and the ability to turn off notifications. Look out for setting the Notification position as well.</li>
<li>You can now middle click on the Bluetooth applet to toggle Bluetooth airplane mode. You can now middle click on the Sound applet to mute and unmute global audio. </li>
<li>Icon Task List has received a lot of love; Grouping, launching instances via middle lick, favourites. </li>
<li>Under the Desktop section of Budgie Desktop Settings, you'll find a new option called “Number of virtual desktops”, where you can go from just having one workspace up to eight! </li>
</ul>
<h3>Ubuntu Budgie Experience</h3>
<p>The following areas have been added or changed to enhance our budgie-desktop implementation:</p>
<ul>
<li>System Tray applet now dropped as a default - it is buggy and the network manager applet is now/intended as a default</li>
<li>At the same time - added the ability to not run network-manager applet - this ensures the buggy system tray icon no longer appears</li>
<li>CTRL+ALT+left/right swaps workspaces without a workspace indicator in the middle of the screen. This has been done to speed up switching workspaces &amp; most importantly removes the possibility of crashes due to conflicts with the workspace animations</li>
<li>Event alerts sounds are disabled by default now - if you want alert sounds choose the alert noise you want and sound level in Settings - Sound</li>
<li>HiDPI (4K) support for Budgie applets (both in built-in and third-party) and their popup functionality</li>
<li>Fix for keyboard shortcuts mysteriously going missing</li>
<li>Fix for multimonitors to stop windows overlapping the top-bar when maximised</li>
<li>Switch from qt5-style-plugins to qt5ct for QT app styling - apps such as vlc. You should see a QT5 Config app now in the menu to help you configure styling of QT apps. Also to note - some QT5 apps such as VLC also have styling options built in as well.</li>
<li>Moka based icons revised to capture GNOME 3.32/3.34 and 3.36 changes</li>
<li>Support large global menu in budgie-desktop panel</li>
<li>Better lock screen styling - buttons are now flat and match the lock screen dialog</li>
<li>Pixel Saver &amp; Pocillo: Close button is now styled to match CSD windows</li>
<li>Stylish menu applet as the default</li>
<li>budgie based network manager applet as the default</li>
<li>Window Shuffler - animations, faster, keyboard friendly tiling CTRL+ALT+keypad numbers; The currently focussed window can be now tiled to each corner, side to side or maximized/unmaximized all from the keyboard. Give it a try (enable via Menu - Shuffler control).</li>
<li>4K resolution friendly budgie desktop and budgie applet support</li>
<li>GNOME Firmware and Drawing are new default applications</li>
<li>All our backport packages have now been rebuilt for 20.04 - look out for nemo-share and nemo-dropbox and also skippy-xd is available through backports.</li>
<li>We have dropped TLP from the default install. The power savings in the latest kernels are significant for newer computers. TLP is still available to be installed if the kernel power savings do not impact you due to using an older CPU.</li>
<li>The caffeine appindicator has been dropped - this has been replaced with the native caffeine budgie-applet that comes with budgie-desktop v10.5 </li>
<li>We've added a new game 2048 as part of the default install - a great way to while away a few hours </li>
<li>Catfish file and text search is now a default install</li>
<li>The community has requested Files (Nautilus) to be switched to Files (Nemo) - so welcome back split screen and other goodies. Tip - press Alt or right-click the toolbar to show the Menu for preferences etc. </li>
<li>budgie-nemo integration - right click options for changing the background, launch budgie-desktop-settings and catfish file &amp; text search. Nemo folder-color is unfortunately not available in the repositories, so it has been dropped. </li>
<li>QogirBudgie from the fiendishly clever themer vinceliuice - so three of the best themes are now default in budgie-desktop-settings (Arc, Pocillo and QogirBudgie)  </li>
<li>Advanced Network Configuration, LibreOffice Math, Software Sources and Additional Drivers are now available from the menu </li>
<li>As the community has requested, Plank dock has now been switched to the bottom of the screen, is transparent and has the bounce animations by default </li>
<li>UB logo is proudly displayed in the About screen and is the default menu icon </li>
<li>ability to increase the spacer applet sizing without impacting the overall size of the panel.</li>
<li>ability to launch applications from the menu requiring elevated privileges</li>
</ul>
<p>Note also GNOME Upstream have now removed the split of Application Menus from the Window menu. So for Budgie this means there is no separate “Application” icon in the decoration to show the appmenu. Appmenus are now combined in the Window menu.</p>
<h2>Desktop Layouts</h2>
<p>For 20.04 LTS we now support a one click method to set up your desktop with a look and feel that you are most comfortable with.</p>
<p>[caption id="attachment_1632" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/layouts-744x410.jpg" alt="Layouts" width="744" height="410" class="size-medium wp-image-1632" /> Layouts[/caption]</p>
<p>Accessed through the Menu - Themes &amp; Layouts, the following layouts can be used:</p>
<ul>
<li>Traditional Budgie</li>
<li>Classic Ubuntu Budgie</li>
<li>Ubuntu Budgie</li>
<li>Cupertino</li>
<li>The One</li>
<li>redmond</li>
</ul>
<p>Choosing a layout replaces your current setup with a predefined panel and applet layout. Combine that with the theme makeover option, you now have a extremely fast method to configure Ubuntu Budgie the way you want to.</p>
<h2>BUDGIE APPLETS &amp; BUDGIE MINI-APPS</h2>
<h3>WeatherShow</h3>
<p>Weather forecast every three hours and over five days. This Desktop based weather applet is installed by default and can be added to your panel. </p>
<p>[caption id="attachment_1709" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/weathershow-applet-744x402.jpg" alt="Weathershow Applet" width="744" height="402" class="size-medium wp-image-1709" /> Weathershow Applet[/caption]</p>
<h3>Budgie Applications Menu</h3>
<p>We are pleased to ship by default our take on a simple but elegant menu for our desktop. Heavily based upon the good work of the ElementaryOS crew, this menu displays your installed applications via a Grid View as well as the traditional category view budgie users know and love.</p>
<p>[caption id="attachment_1648" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/appscreen-744x385.jpg" alt="Appscreen" width="744" height="385" class="size-medium wp-image-1648" /> Appscreen[/caption]</p>
<p>We have enhanced the menu to optionally show the budgie powerstrip - so for those users who dont want to use the default power applet in the panel. The menu has many extra features - e.g. right click action options for those applications live steam that offer them.</p>
<p>[caption id="attachment_1637" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/appmenu3-744x637.jpg" alt="Appmenu3" width="744" height="637" class="size-medium wp-image-1637" /> Appmenu3[/caption]</p>
<p>… a couple of hidden extras - type 2+2 - its a built in calculator or type ubuntubudgie.org into the search.</p>
<p>Again optionally - if you install zeitgeist the menu will start to learn what you frequently search for - and the search results be more tailored to your frequent requests - i.e. find things first time.</p>
<h3>Network Manager Applet</h3>
<p>Budgie Desktop has shipped with a legacy network manager icon in the panel. It has never integrated very well - and together with the buggy system tray weird icon effects were visible on logon.</p>
<p>[caption id="attachment_1630" align="alignnone" width="303"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/nm1.jpg" alt="Nm1" width="303" height="500" class="size-full wp-image-1630" /> Nm1[/caption]</p>
<p>Enter the native Network Manager budgie applet. This integrates fully with our budgie desktop. We have tidied up and built upon the good work of the Daniel Pinto (original creator) and the ElementaryOS team from which the budgie-applet was derived from.</p>
<h3>Budgie Window Shuffler</h3>
<p>Focal's Window Shuffler is a completely rewritten and re- designed version of Budgie's tiling add-on. Apart from the drastically improved responsiveness, features now include:</p>
<ul>
<li>Setting margins and padding of the window grid
[caption id="attachment_1629" align="alignnone" width="600"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/shuff1.jpg" alt="Shuff1" width="600" height="338" class="size-full wp-image-1629" /> Shuff1[/caption]</li>
<li>Shortcuts for snapping windows to the nearest tile</li>
<li>Shortcuts for resizing windows in all directions</li>
<li>Scroll over the GUI grid to set its shade</li>
<li>Targeted position preview when using the GUI grid
[caption id="attachment_1628" align="alignnone" width="600"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/shuff2.jpg" alt="Shuff2" width="600" height="338" class="size-full wp-image-1628" /> Shuff2[/caption]</li>
<li>Animated window movement when using shortcuts to move windows</li>
<li>Swapping windows in case a window is moved to an existing window's position</li>
<li>Shortcuts for Quarter / half tiling</li>
</ul>
<p>The new Shuffler Control window
[caption id="attachment_1627" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/shuff3-744x660.jpg" alt="Shuff3" width="744" height="660" class="size-medium wp-image-1627" /> Shuff3[/caption]</p>
<h3>Wallstreet</h3>
<p>One request that continually was made was to have the ability to rotate through a folder full of photos and display on your desktop. We know there are many heavy-weight tools out there - but what our community wanted is a simple - very lightweight solution built into the desktop.</p>
<p>[caption id="attachment_1625" align="alignnone" width="535"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/wallstreet.jpg" alt="Wallstreet" width="535" height="566" class="size-full wp-image-1625" /> Wallstreet[/caption]</p>
<p>Enter - WallStreet - a new lightweight wallpaper rotator every x minutes. Just enable it through the menu - wallstreet control</p>
<h3>Visual-Space</h3>
<p>New applet budgie-visualspace-applet - a stylish compact workspace switcher as a default on the panel.</p>
<p>[caption id="attachment_1626" align="alignnone" width="501"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/visualspace.jpg" alt="Visualspace" width="501" height="517" class="size-full wp-image-1626" /> Visualspace[/caption]</p>
<p>So this desktop focused productivity tool is used if you have lots of windows spread over your desktop and/or between workspaces - you can quickly focus that window without having to alt-tab through everything.</p>
<h3>Dropby</h3>
<p>Dropby applet makes a reappearance as a default panel applet</p>
<p>[caption id="attachment_1650" align="alignnone" width="498"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/dropby-1.jpg" alt="Dropby" width="498" height="129" class="size-full wp-image-1650" /> Dropby[/caption]</p>
<p>When any USB device is connected then you have easy access to it - with the ability to copy its contents, open to see what is on it and to eject the device safely directly from a popup and panel applet.</p>
<h3>Other notable applets and mini apps</h3>
<ul>
<li>Kangaroo - Quick and easy browsing, across (possibly) many folder layers, without having to-do a single mouse click. </li>
<li>App launcher - Display your favorite applications in a menu and on the panel. </li>
<li>Trash applet (vala based) - Show, hide and restore trash items. </li>
<li>Recently Used (vala based) - Show recently used items in a menu. </li>
<li>Quick Notes &amp; Hot Corners: These existing applets have been rewritten from Python based to Vala based. This has been done to greatly enhance the speed of the applets and make them memory efficient; in addition they have picked up a few enhancements so browse around in the applet setting to discover whats new  </li>
<li>New Pomodoro like applet Take-A-Break 
<ul>
<li>QUICKCHAR MINI APP - Quickly find and choose the equivalent locale character for an ascii character. Press Super+Alt+C to call the window. Type a character, and all its derivates will appear. Click one (or tab to the targeted character and press Return) and the character will be pasted into the document. Press again to toggle visibility, or Escape to hide</li>
<li>FUZZYCLOCK APPLET - Shows the time in a Fuzzy Way. Supports 24-hour format Supports Dates Supports Horizontal Panels</li>
</ul></li>
</ul>
<p>[caption id="attachment_1417" align="alignnone" width="640"]<img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/fuzzy.png" alt="Fuzzy" width="640" height="206" class="size-full wp-image-1417" /> Fuzzy[/caption]
This is a new applet contributed by community member Adam Dyess - Thanks Adam!</p>
<ul>
<li>
<p>WORKSPACE STOPWATCH APPLET - Workspace Timer Applet is an applet to keep track of usage per workspace, e.g. to find out how much minutes/hours were actually spent on a job. Workspaces can be freely named, custom names and all data are rmembered, also after logout/restart, until the RESET button is pressed. The log file is updated on workspace switch/clicking the icon for popup or else every 30 seconds. Time during suspend is automatically retracted from a workspace time.</p>
</li>
<li>
<p>BUDGIE-BRIGHTNESS-CONTROLLER APPLET - Brightness Controller is a Budgie Desktop applet allowing you to control the desktop/laptop brightness via your hardware brightness controller or via Xorg as a fallback.</p>
</li>
</ul>
<p>[caption id="attachment_1419" align="alignnone" width="200"]<img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/brightnesscontroller.jpg" alt="Brightnesscontroller" width="200" height="180" class="size-full wp-image-1419" /> Brightnesscontroller[/caption]</p>
<ul>
<li>
<p>BUDGIE STATUS-NOTIFIER - display status notifications</p>
</li>
<li>
<p>Showtime - Adds automatic multi-monitor support for Showtime</p>
</li>
<li>
<p>Display Window Mover applet correctly on primary monitor when multiple monitors are available</p>
</li>
<li>
<p>Rework Dropby to display in an independent window rather than a popup - this resolves panel freeze issues. </p>
</li>
<li>
<p>Weathershow applet - Display temperature correctly on vertical panels</p>
</li>
<li>
<p>Tweaked budgie-pixel-saver-applet to correctly handle displaying Titles/Titles &amp; Buttons/Buttons</p>
</li>
</ul>
<p>All these productivity applets and mini-apps are now available from Budgie Welcome - select Menu - Budgie Applets</p>
<h3>WINDOW PREVIEWS</h3>
<p>Window previews (Alt Tab replacement) has been rewritten in vala - faster with per workspace/all workspaces and shift backwards controls. Additionally, Alt Above-Tab shows windows of the currently active application only.</p>
<p>[caption id="attachment_1415" align="alignnone" width="640"]<img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/previews.png" alt="Previews" width="640" height="242" class="size-full wp-image-1415" /> Previews[/caption]</p>
<p>Remember, budgie-applets showcases many more indie developer applets</p>
<p>In total Ubuntu Budgie users have direct install access to 35 budgie applets and budgie mini-apps through budgie-welcome</p>
<p>If you want to showcase your applet in UB contact us and let us know about your project. Daily builds for budgie-extras is available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/budgie-extras-daily</p>
<h2>Budgie Welcome</h2>
<h3>Budgie Themes &amp; Layouts</h3>
<p>We have shipped for a few releases now the ability via one-click to completely update the look of your desktop - cursors, icons, themes etc. From 20.04, this makeover ability can now be individually applied i.e. just the theme, or icon etc. giving you an easy way to mix and match between different makeovers.</p>
<p>[caption id="attachment_1631" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/makeover-744x407.jpg" alt="Makeover" width="744" height="407" class="size-medium wp-image-1631" /> Makeover[/caption]</p>
<p>Latest version of vimix theme available through Menu - Budgie Themes &amp; Layouts is shipped in 20.04 together with QogirBudgie (available by default on the installation)</p>
<h2>Default Applications</h2>
<h3>Drawing</h3>
<p>[caption id="attachment_1635" align="alignnone" width="683"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/drawing.jpg" alt="Drawing" width="683" height="820" class="size-full wp-image-1635" /> Drawing[/caption]</p>
<p>We are pleased to ship by default the stylish new Drawing application. This application is a basic image editor, similar to Microsoft Paint, but aiming at the GNOME based desktops such as GNOME Shell and Budgie Desktop. PNG, JPEG and BMP format files are supported.</p>
<h3>GNOME Firmware</h3>
<p>Ubuntu Budgie now ships with GNOME Firmware - it is really a power user tool to resolve those specific vendor device issues that can be resolved by firmware. We don't expect you to generally use this to update stuff - only update if you are having issues that cannot be resolved by updating the linux kernel. Also to note - not all manufacturers release firmware that can be installed via linux - you may still have to resort to MS Windows based upgrades.</p>
<h3>Celluloid</h3>
<p>[caption id="attachment_1636" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2020/04/celluloid-744x482.jpg" alt="Celluloid" width="744" height="482" class="size-medium wp-image-1636" /> Celluloid[/caption]</p>
<p>Celluloid has now replaced gnome-mpv</p>
<h3>Samba</h3>
<p>Samba has been removed as a default install</p>
<h3>Android Phone integration</h3>
<p>Ubuntu Budgie now provides seamless desktop-to/from-android phone transfer capabilities - we now ship with go-mtpfs by default. Simply plug-in your android phone and it will appear automatically in nemo allowing you to copy files/photos etc between your phone and the desktop.</p>
<h3>ACCESSIBILITY</h3>
<p>We have taken a closer look at making our distro more easy to use for those of us who need just a little extra help. This is where we need your help. What tricks &amp; techniques are you aware of that helps improve the accessibility of the desktop?</p>
<p>We have incorporated a super useful screen magnifier - just enable via the Settings - Accessibility options</p>
<p>Bind both Super + Alt + = and Super + Alt + + as zoom-in keys</p>
<p><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/magni.png" alt="Magni" /></p>
<p>Also we have included the on-screen keyboard (onboard) ### NVIDIA</p>
<p>Our distro now includes the NVIDIA proprietary driver sets on its ISO. This allows NVIDIA users to install &amp; configure drivers out of the box without needing an internet connection. Just click the wifi installer option to install the correct NVIDIA driver for your computer - obviously assuming that your hardware needs it.</p>
<p>Likewise, we have added support for Optimus graphics switching direct from the budgie panel. If you have Optimus graphics look for the intel/nvidia icon to switch between your intel &amp; nvidia GPUs.</p>
<p>[caption id="attachment_1413" align="alignnone" width="640"]<img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/nvidia_menu.png" alt="Nvidia Menu" width="640" height="272" class="size-full wp-image-1413" /> Nvidia Menu[/caption]</p>
<h2>KEY FEATURES AVAILABLE TO UB FROM UBUNTU</h2>
<ul>
<li>Linux kernel v5.4</li>
<li>GNOME 3.36 applications</li>
<li>Latest version of LibreOffice 6.4</li>
<li>Latest ZFS support with automatic APT rollback support</li>
<li>A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and all devs in the free software community for all of their hard-work which everyone should be pleased about 🙂</li>
<li>What does all that mean - most cutting edge yet stable software that brings great benefits for brand new hardware compatibility - including support for the very latest games.</li>
</ul>
<h2>UB MAINTAINED PACKAGES</h2>
<p>Apart from the above (!) UB maintains many Debian packages. New versions available in 20.04 include:</p>
<ul>
<li>Slick Greeter</li>
<li>Login Window Preferences</li>
<li>DesktopFolder</li>
</ul>
<h2>ISSUES RESOLVED:</h2>
<ul>
<li>GNOME Software Updates tab has been hidden - it doesn't really work and the recommended update process is via Menu - Software &amp; Updates</li>
<li>Fixed budgie-desktop bug to allow custom layouts that include left &amp; right panels.</li>
<li>Papercut - uninstalling default applets now no longer uninstalls the Ubuntu Budgie desktop environment.</li>
<li>Budgie Desktop now includes a patch developed by myself hopefully to reduce the number of crash reports you see on first logon.</li>
</ul>
<h2>KNOWN ISSUES:</h2>
<ul>
<li>When installed on default VirtualBox settings or QEMU, on first logon the session will crash when budgie-welcome is first open. The session also crashes when other applications such as Settings is open. <a href="https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1745345">https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1745345</a></li>
<li>For virtualbox ensure the VMSVGA graphics driver is used in the virtual machine settings</li>
<li>For QEMU use the VMVGA graphics driver.</li>
<li>Alternatively for both uninstall the gstreamer1.0-vaapi package</li>
<li>If you find that after the upgrade clicking the menu button crashes the panel, then CTRL+ALT+T to open a terminal then run:</li>
<li><code>nohup budgie-panel --reset --replace &amp;</code></li>
<li>Launching terminal based apps from the menu does not work. Workaround is to fool GLib to assume that a supported terminal (tilix isnt supported) is installed  <code>sudo ln -s /usr/bin/tilix /usr/bin/nxterm</code>. <a href="https://bugs.launchpad.net/ubuntu/+source/budgie-desktop/+bug/1873428">https://bugs.launchpad.net/ubuntu/+source/budgie-desktop/+bug/1873428</a></li>
<li>Please read the <a href="https://wiki.ubuntu.com/FocalFossa/ReleaseNotes" title="Ubuntu">Ubuntu Release</a> notes which covers issues common to all Ubuntu Flavors.</li>
</ul>
<h1>UPGRADING</h1>
<h2>HOW TO UPGRADE FROM 18.10/19.04/19.10 TO 20.04</h2>
<p>IMPORTANT: remember to double-check you have the following vital package before you upgrade:</p>
<pre><code>sudo apt install ubuntu-budgie-desktop</code></pre>
<p>After the release of 20.04, you will be offered to upgrade when you run Software &amp; Updates. Alternatively, from a command line run:</p>
<pre><code>update-manager</code></pre>
<p>IMPORTANT We do not recommend running <code>do-release-upgrade</code> from a Tilix terminal since this will hang during the upgrade. If you want to use do-release-upgrade switch to a TTY and login before running the command.</p>
<p>Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.</p>
<h2>HOW TO UPGRADE FROM 18.04.4</h2>
<p>18.04 LTS users using the 64bit edition will be offered the upgrade to 20.04 in July/August 2020 when the first point release (20.04.1) is made available. The first few months (April to July) are used to iron out those particularly troublesome issues not found at the initial release. So be patient and you will be rewarded with an upgrade window notification when to move to 20.04.</p>
<p>The Caffeine application indicator will be removed as part of the upgrade process. You can replace this with the native budgie caffeine applet in budgie-desktop-settings - panel - add applets</p>
<p>To get the 20.04 panel layout use the Menu - Budgie themes &amp; Layouts application.</p>
<p>18.04 LTS users using the 32bit edition cannot upgrade to 20.04 - 32bit support was dropped after 18.04.</p>
<p>Please refer to the community wiki for more help: <a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a>Also, Ask Ubuntu has an excellent guide to help you upgrade: <a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a></p>
<h1>DOWNLOAD</h1>
<p>Final release is available here: <a href="https://ubuntubudgie.org/downloads/">https://ubuntubudgie.org/downloads/</a>Beta release is available here: <a href="http://cdimage.ubuntu.com/ubuntu-budgie/releases/focal/beta/">http://cdimage.ubuntu.com/ubuntu-budgie/releases/focal/beta/</a></p>
<h1>GETTING SUPPORT</h1>
<p>Thanks to the generosity of discourse.org, our support site is the crucial site for all things Ubuntu Budgie.</p>
<p>One to bookmark <a href="https://discourse.ubuntubudgie.org">https://discourse.ubuntubudgie.org</a>More information can be found here.</p>
<h2>INFRASTRUCTURE</h2>
<p>We just wanted to thank our infrastructure sponsors who help us keep the lights on.</p>
<p><a href="https://www.digitalocean.com/" title="DIGITAL">DIGITAL OCEAN</a></p>
<p>On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.</p>
<p><a href="https://www.discourse.org/" title="DISCOURSE">DISCOURSE</a></p>
<p>Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!</p>
<p><a href="https://status.io/" title="STATUS.IO">STATUS.IO</a></p>
<p>Status.io was built to help companies enhance transparency and keep their customers in the loop during downtime. The Status.io platform enables organizations to maintain a customized public system status page, external to their infrastructure, that always displays the current health of their app, website or service.</p>
<p><a href="https://upcloud.com/" title="UpCloud">UpCloud</a></p>
<p>Cloud hosting for developers - Platinum client hardware partner for the Ubuntu Budgie team</p>
<hr />
<p>David (project lead)</p>