---
ID: 1123
post_title: 19.04 Release Notes
post_name: 19-04-release-notes
author: Nikola
post_date: 2019-03-27 16:36:47
layout: post
link: >
  https://ubuntubudgie.org/2019/03/27/19-04-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<!-- wp:paragraph -->
<p><strong>Ubuntu Budgie v19.04 (Disco Dingo)</strong>&nbsp;<strong>Final Release:</strong>&nbsp;Apr 18th, 2019</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ubuntu Budgie 19.04 will be supported for 9 months until Jan 2020. If you need Long Term Support, it is recommended you use Ubuntu 18.04 LTS instead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In these release notes the areas covered are:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>New features and enhancements</li><li>Issues Resolved</li><li>Upgrading from 18.04 / 18.10 Ubuntu Budgie</li><li>Known Issues when upgrading</li><li>Where to download Ubuntu Budgie</li></ul>
<!-- /wp:list -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:heading {"level":1} -->
<h1 id="new-features-and-enhancements">NEW FEATURES AND ENHANCEMENTS</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2 id="18-10-stuff-carried-through-to-19-04">18.10 STUFF CARRIED THROUGH TO 19.04</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Firefox is the default browser. So out goes a chromium-browser icon on both the icon-task-list and plank dock - in comes Firefox</li><li>For good measure, we have added ubuntu budgie welcome as a default program icon to make discovery instant (on both the icon-task-list and plank dock).</li><li>We have dropped TLP from the default install. The power savings in the kernel from kernel 4.18 and later are significant for newer computers. TLP is still available to be installed if the kernel power savings do not impact you due to using an older CPU.</li><li>The caffeine appindicator has been dropped - this has been replaced with the native caffeine budgie-applet that comes with budgie-desktop v10.5</li><li>We've added a new game 2048 as part of the default install - a great way to while away a few hours</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="19-04-stuff-to-look-out-for">19.04 STUFF TO LOOK OUT FOR</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>New default wallpaper</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"left"} -->
<div class="wp-block-image"><figure class="alignleft"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/desktop.jpg" alt="Desktop"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Fonts have changed from "Ubuntu" to "Noto Sans" except for the terminal font since Ubuntu is much easier to read!</li><li>Ubuntu Budgie Team Wallpapers for 19.04 - the UB team has decided for this release to choose their favourite wallpapers - quite an eclectic bunch. I hope you like them. We will next run a community contest for the 20.04 LTS</li><li>Budgie Welcome - Translation team has been bustling - many more languages now available</li><li>Budgie Welcome - Browser Ballot available from getting started now is Snap capable - we offer GNOME Web and Midori as options for web-browsers as well as the Snap versions of Firefox and Chromium-Browser. Chrome, Vivaldi and the repo versions of Firefox and Chromium-Browser are still available.</li><li>Catfish file and text search is now a default install</li><li>The community has requested Files (Nautilus) to be switched to Files (Nemo) - so welcome back split screen and other goodies. Tip - press Alt or right-click the toolbar to show the Menu for preferences etc.</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/nemo.jpg" alt="Nemo"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Nemo can be launched from Plank as well as the icon-task-list applet</li><li>v3.8.6 is the version of Nemo in the repositories. v4.0.6 is available in our backports PPA</li><li>nemo-dropbox is available in our backports PPA</li><li>nemo-share is available from our backports PPA - this adds a right click option to enable folders to be shared without needing root permission.</li><li>budgie-nemo integration - right click options for changing the background, launch budgie-desktop-settings and catfish file &amp; text search</li><li>Nemo folder-color is unfortunately not available in the repositories, so it has been dropped.</li><li>Latest version of moka-icon-theme is available - Pocillo uses Moka icons</li><li>budgie-desktop is built upon mutter 3.32 - so we benefit from all the good speed-ups work upstream</li><li>Introducing a default theme QogirBudgie from the fiendishly clever themer&nbsp;<a href="https://github.com/vinceliuice/Qogir-theme">vinceliuice</a>&nbsp;- so three of the best themes are now default in budgie-desktop-settings (Arc, Pocillo and QogirBudgie)</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/qogirbudgie.jpg" alt="Qogirbudgie"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Keyboard friendly window shuffler. CTRL+ALT+keypad numbers; The currently focussed window can be now tiled to each corner, side to side or maximized/unmaximized all from the keyboard. Give it a try.</li><li>New version of the login screen slick-greeter</li><li>Revamped budgie-themes to be 19.04 friendly</li><li>Main Menu option "Budgie Discourse" to have direct access to our community site</li><li>Previously hidden, Advanced Network Configuration, LibreOffice Math, Software Sources and Additional Drivers are now available from the menu</li><li>During the 19.04 development cycle we have been working with a great Elementary OS project called&nbsp;<a href="https://github.com/spheras/desktopfolder">DesktopFolder</a>. We will be working with the maintainer again during the 19.10 cycle and hopefully, we can then replace nemo-desktop with DesktopFolder. If you want to try out this project we have daily builds for DesktopFolder available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/desktop-icons</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/desktopfolder.jpg" alt="Desktopfolder"/><figcaption>Desktop Folder</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>As the community has requested, Plank dock has now been switched to the bottom of the screen, is transparent and has the bounce animations by default</li><li>UB logo is proudly displayed in the About screen</li><li>Pocillo-gtk-theme has been revamped - key visual has been the Green suggestion buttons are now a darkish blue.</li><li>Budgie-Welcome - we have now removed our little-used budgie-remix Reddit and G+ page icons</li><li>Rhythmbox alternative toolbar - consolidated appmenu - fix for crashes when used with non-english locales</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="budgie-desktop-is-now-officially-at-v10-5-so-look-out-for-">BUDGIE DESKTOP IS NOW OFFICIALLY AT V10.5 SO LOOK OUT FOR:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Raven Sound Output widget enables you to do global as well as per-app volume control and output device changing</li><li>Raven Sound Input widget enables you to do microphone control and input device changes.</li><li>Ability to mute/unmute applications and an option to allow raising volume above 100%. Tweaks are available to better work across more GTK themes</li><li>Raven section in Budgie Desktop Settings. Under this section, you’re able to show and hide individual widgets as well as enable the ability to raise your volume above 100% in Raven.</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/ravensettings.jpg" alt="Ravensettings"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Ability to enable window focus change to be on mouse enter/leave via the “Windows” section of Budgie Desktop Settings, as opposed to click-to-focus.</li><li>The “Fonts” section of Budgie Desktop Settings introduces a new Text Scaling option</li><li>Ability to dismiss individual notifications</li><li>Notification grouping on an application basis</li><li>Large Notifications are now truncated to prevent huge notification windows being displayed</li><li>Caffeine powered - a new applet that prevents screen dimming and lock screen triggering. This is now the default on the panel</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/caffeine.jpg" alt="Caffeine"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>You can now middle-click on the Bluetooth applet to toggle Bluetooth airplane mode.</li><li>You can now middle-click on the Sound applet to mute and unmute global audio.</li><li>Workspace Applet revamped.</li><li>Icon Task List Grouping - displayed icons can optionally group the windows of the same application</li><li>Substantial new and updated translations for the desktop</li><li>Ability to set the Notification position (previously was always top right)</li><li>Launch a new instance of an application via the middle button on icon-task-list</li><li>Scroll up on icon button to focus</li><li>Sundry menu category has been eliminated</li><li>Center all new windows is now an option in budgie-desktop-settings</li><li>Power and printer notifications are no longer added to Raven notifications</li><li>Sound widgets in Raven are removed if there are no devices</li><li>Fix pinning issues with icon-tasklist-applet</li><li>Firefox tabs that have audio now shown as "Firefox" rather than "AudioIPCServer" in Raven</li><li>Slick Greeter now shows user wallpapers by default - can be changed via Menu Login Window</li><li>Disable night-light when apps are using full-screen</li><li>Display week numbers in Raven Calendar</li><li>Default to not show the Powerstrip at the bottom of Raven</li><li>When desktop icons is switched off - extra option available to switch Displays</li><li>Non-friendly themes such as Adwaita are now hidden from budgie-desktop-settings</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="budgie-applets">BUDGIE APPLETS</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>ShowTime applet has been completely revamped and rewritten - includes the ability to drag around the screen enabled via budgie-desktop-settings</li><li>A bug in WeatherShow, causing occasional crashes, has been fixed</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>New productivity applets are now available from Budgie Welcome:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>New Pomodoro like applet Take-A-Break</li></ul>
<!-- /wp:list -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/takeabreak-applet.jpg" alt="Takeabreak applet"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>We are also pleased to showcase many more indie developer applets - to pick a few:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>budgie-cpu-freq-applet, budgie-sys-monitor-applet are new to 19.04</li></ul>
<!-- /wp:list -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/cpufreq-applet.jpg" alt="Cpufreq applet"/></figure>
<!-- /wp:image -->

<!-- wp:image {"align":"right"} -->
<div class="wp-block-image"><figure class="alignright"><img src="https://ubuntubudgie.org/storage/Blog/1904releasenotes/sys-monitor-applet.jpg" alt="Sys monitor applet"/></figure></div>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>kangaroo, app-launcher, trash applet, recently used, advanced brightness controller, browser-profile-launcher are from 18.10</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>In budgie-welcome, showtime, quicknote and dropby applets are hidden once installed. These are three critical applets and should never be removed manually. They don't need to be added to a panel though.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>In total Ubuntu Budgie users have direct install access to 28 applets through budgie-welcome</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to showcase your applet in UB contact us and let us know about your project.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Daily builds for budgie-extras is now available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/budgie-extras-daily</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 id="key-features-available-to-ub-from-ubuntu">KEY FEATURES AVAILABLE TO UB FROM UBUNTU</h1>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Linux kernel v5</li><li>GNOME 3.32 applications - all apps need regression testing</li><li>Latest version of LibreOffice 6.2</li><li>Fractional Display scaling is an experimental option:</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>gsettings set org.gnome.mutter experimental-features "[</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then use Settings - Displays to set the scale 1, 1.25 etc.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Live Patch is available directly from the menu although the capability is only applicable to LTS users; so this is prep work for 20.04LTS</li><li>A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and all devs in the free software community for all of their hard-work which everyone should be pleased about :)</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>What does all that mean - most cutting edge yet stable software that brings great benefits for brand new hardware compatibility - including support for the very latest games.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="ub-maintained-packages">UB MAINTAINED PACKAGES</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Apart from the above (!) UB maintains many Debian packages. New versions available in 19.04 include:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>rhythmbox-plugin-alternative-toolbar</li><li>slick-greeter</li><li>Arc-Theme</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 id="issues-resolved-">ISSUES RESOLVED:</h1>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>bug-fix to sweep up default install icons that are not Moka based - so applications have renamed their icon names, so Moka needs to keep up</li><li>Workspace switching stopped working in 18.10 - the previously manual dconf fix is now in 19.04</li><li>19.04 minimal installs - gnome-online-accounts work out of the box</li><li>Window animations have been re-enabled. Check that in budgie-desktop-settings - style that animations is enabled.</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 id="known-issues-">KNOWN ISSUES:</h1>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>If you find that after the upgrade clicking the menu button crashes the panel, then&nbsp;CTRL+ALT+T&nbsp;to open a terminal then run:</li></ul>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code>nohup budgie-panel --reset --replace &amp;
</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li>Desktop Icons/ Nemo Folders on the upgrade to 19.04 from 18.10.<ul><li>Desktop icons will not carry over its position from 18.10 - remember this is very different software. So you will need to rearrange your desktop again.</li><li>Icon-view Folder icon sizes are different between Nautilus and Nemo. You will need to use the zoom capability to see what works for you.</li><li>The default version of Nemo is 3.8.5. The spacing between icons is much larger than we have been used to with Nautilus. V4 that is available in backports somewhat resolves this issue.</li><li>On upgrade from 18.10 you may have both Nautilus and Nemo installed. You can safely remove nautilus via&nbsp;<code>sudo apt purge nautilus</code>.</li><li>on upgrade if you have an icon shortcut in either Plank or the icon-tasklist applet for Nautilus you will need to undock/unpin and redock/repin Nemo (unless of course you still want to continue using Nautilus)</li></ul></li><li>Please read the&nbsp;<a href="https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes">Ubuntu Release notes</a>&nbsp;which covers issues common to all Ubuntu Flavors</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 id="upgrading">UPGRADING</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2 id="how-to-upgrade-from-18-10-to-19-04">HOW TO UPGRADE FROM 18.10 TO 19.04</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>IMPORTANT:</strong>&nbsp;remember to double-check you have the following vital package before you upgrade:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo apt install ubuntu-budgie-desktop
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After the release of 19.04, you will be offered to upgrade when you run Software &amp; Updates.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Alternatively, from a command line run:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>update-manager
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>IMPORTANT</strong>&nbsp;We do not recommend running&nbsp;<code>do-release-upgrade</code>&nbsp;from a Tilix terminal since this will hang during the upgrade. If you want to use&nbsp;<code>do-release-upgrade</code>&nbsp;switch to a TTY and login before running the command.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="how-to-upgrade-from-18-04-to-19-04">HOW TO UPGRADE FROM 18.04 TO 19.04</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Short story - you cannot directly upgrade. You must first&nbsp;<a href="https://ubuntubudgie.org/blog/2018/09/27/18-10-release-notes">upgrade</a>&nbsp;to 18.10 before upgrading to 19.04. Anything else is not supported nor supportable.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>Please refer to the community wiki for more help:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Also, Ask Ubuntu has an excellent guide to help you upgrade:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="download">DOWNLOAD</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Final release &amp; Dailies are found here:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://ubuntubudgie.org/downloads">https://ubuntubudgie.org/downloads</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="getting-support">GETTING SUPPORT</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Thanks to the generosity of discourse.org, our support site is the crucial site for all things Ubuntu Budgie.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One to bookmark&nbsp;<a href="https://discourse.ubuntubudgie.org/">https://discourse.ubuntubudgie.org</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>More information can be found&nbsp;<a href="https://ubuntubudgie.org/blog/2018/03/08/welcome-to-discourse">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="infrastructure">INFRASTRUCTURE</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We just wanted to thank our infrastructure sponsors who help us keep the lights on.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-digital-ocean-https-www-digitalocean-com-"><a href="https://www.digitalocean.com/">DIGITAL OCEAN</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-discourse-https-www-discourse-org-"><a href="https://www.discourse.org/">DISCOURSE</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-status-io-https-status-io-"><a href="https://status.io/">STATUS.IO</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Status.io was built to help companies enhance transparency and keep their customers in the loop during downtime. The Status.io platform enables organizations to maintain a customized public system status page, external to their infrastructure, that always displays the current health of their app, website or service.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator"/>
<!-- /wp:separator -->

<!-- wp:paragraph -->
<p>David (project lead)</p>
<!-- /wp:paragraph -->