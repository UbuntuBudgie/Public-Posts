---
ID: 821
post_title: 17.10 Release Notes
post_name: 17-10-release-notes
author: Nikola
post_date: 2017-09-26 23:27:20
layout: post
link: >
  https://ubuntubudgie.org/2017/09/26/17-10-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/09/ubuntu-budgie-17.10-final-small.jpg" alt="Ubuntu Budgie 17.10" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<h2 id="version">Version</h2>
Ubuntu Budgie v17.10 (artful) Release: Oct 19th, 2017

<hr />

<h1 id="new-features-and-enhancements">New features and enhancements</h1>
<ul>
 	<li>Files (Nautilus) 3.26 with Folder-Color to change color and add emblems to folders</li>
 	<li>Files now come with Various Document Templates available to use</li>
 	<li>Settings (gnome-control-center) has had a stylish makeover</li>
 	<li>GNOME-based apps are now available at the latest upstream version 3.26 (if released)</li>
 	<li>Budgie-welcome now has proper header bars so can move the window!</li>
 	<li>Budgie-welcome now translated now displays in multiple languages thanks to our fantastic <a href="https://www.transifex.com/ubuntu-budgie/budgie-welcome">transifex </a> translation team. Superb job to you all. You have done us proud :)</li>
 	<li>One click switch between IBUS and FCITX</li>
 	<li>Replaced GNOME Photos with gThumb</li>
 	<li>Budgie-welcome default settings now have stylish and extended makeovers</li>
 	<li>Budgie-welcome includes new link to the Ubuntu Budgie shop
<ul>
 	<li>Gadgets, clothing and other items to buy</li>
 	<li>Ubuntu Budgie desktops and All-in-one computers to purchase</li>
</ul>
</li>
 	<li>Budgie-welcome can now install many new third-party budgie applets
<ul>
 	<li>Global Menu Applet can be added to the panel</li>
</ul>
</li>
 	<li>Budgie-welcome included links to snap and flatpak websites for extra software install options</li>
 	<li>One-click theming has better font support for Material design based themes - fonts are better sized.</li>
 	<li>Budgie Desktop 10.4 uplift from 10.2.9
<ul>
 	<li>Stylish Alt-Tab support</li>
 	<li>Raven now supports Spotify</li>
 	<li>Switch windows controls to the left or right support</li>
 	<li>Places now supports encrypted volumes and SMB shares and other fixes.</li>
 	<li>Supports customisable date and time display</li>
 	<li>Bottom panel popovers now work without the dreaded "jump down" effect</li>
 	<li>All popovers are now stylishly animated</li>
 	<li>Raven has been restyled - Budgie Settings dialog now introduced</li>
 	<li>Workspace applet completely revamped</li>
 	<li>Budgie Menu revamped - easier to type and find things</li>
 	<li>Support for left and right side panels</li>
 	<li>All panels can now be converted into Docks</li>
 	<li>All panels support transparency for the system theme</li>
 	<li>All panels and docks can now dynamically autohide</li>
</ul>
</li>
 	<li>Night-light and Caffeine (deactivates screensaver) are now shipped as default panel icons</li>
 	<li>Screen lock has had a stylish makeover</li>
 	<li>Move from Terminix to Tilix for the terminal emulator</li>
 	<li>Support Tilix Quake mode - just press F12!</li>
 	<li>Ubuntu 17.10 Community Contest Wallpapers - congrats to all the winners!</li>
 	<li>Added a material design inspired wallpaper - used when using budgie-welcome makeovers.</li>
 	<li>Revamped Panel Icons - stylish support for common applications such as Caffeine and Dropbox</li>
 	<li>login screen changed from lightdm-gtk-greeter to slick-greeter</li>
</ul>
<h1 id="issues-resolved-">Issues Resolved:</h1>
<ul>
 	<li>Dropbox icon correctly displayed in the panel</li>
 	<li>GNOME-Control-Settings icons are now accessible via the menu</li>
 	<li>Extra terminals uxterm and xterm are no longer shown in the menu</li>
 	<li>various applications that were should twice in the menu out-of-the-box are now shown just once.</li>
 	<li>Reduced memory idle usage by dropping tracker related applications.</li>
 	<li>Dropped GNOME Contacts, GNOME Documents and GNOME Photos</li>
 	<li>Debian wallpaper is no longer shipped with Ubuntu Budgie</li>
 	<li>Display video thumbnails in Files</li>
 	<li>Disable default Guest Session</li>
 	<li>For legacy BIOS boots, Plymouth now correctly shows the crypt password entry field for when drives are encrypted. Note - you should still avoid EFI Boot full encypted drives since this long running issue across all Ubuntu variants is still broken.</li>
 	<li>Can now remove default installed applications without removing all key budgie desktop applications.</li>
 	<li>Fixes for the AppIndicator applet to not display huge icons such as Steam, menu theming fixes</li>
 	<li>New material design wallpaper which replaces our xenial based wallpaper for material designs. This means faster install times for these makeovers.</li>
 	<li>Slim down the ISO size - we have managed to shrink the ISO from approx 1.5G at 17.04 to 1.3G at 17.10 whilst adding everything above. Magic!</li>
</ul>
<h2 id="upgrading">Upgrading</h2>
<h3 id="how-to-upgrade-from-17-04-to-17-10">How to upgrade from 17.04 to 17.10</h3>
<strong>IMPORTANT:</strong> remember to double-check you have the following vital package before you upgrade:
<pre><code>sudo apt install ubuntu-budgie-desktop
</code></pre>
After the release of 17.10, you will be offered to upgrade when you run Software &amp; Updates.

Alternatively, from a command line run:
<pre><code>update-manager
</code></pre>
For upgrading from the Final Beta:
<pre><code>update-manager -d
</code></pre>
Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

If you see the following issue:
<pre><code>Errors were encountered while processing:
/tmp/apt-dpkg-install-I4K4cn/075-gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
Unpacking gir1.2-budgie-1.0 (10.4-1ubuntu4) ...
dpkg: error processing archive /var/cache/apt/archives/gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb (--unpack):
trying to overwrite '/usr/lib/girepository-1.0/Budgie-1.0.typelib', which is also in package gir1.2-budgie-desktop-1.0 10.4-0ubuntu0.1
Errors were encountered while processing:
/var/cache/apt/archives/gir1.2-budgie-1.0_10.4-1ubuntu4_amd64.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
</code></pre>
Run the following:
<pre><code>sudo apt-get -o Dpkg::Options::="--force-overwrite" install gir1.2-budgie
sudo apt -f install
sudo apt update &amp;&amp; sudo apt upgrade
sudo apt install --reinstall ubuntu-budgie-desktop budgie-desktop-environment
sudo apt purge gir1.2-budgie-desktop
</code></pre>
We recommend removing the following applications to reduce your startup memory usage:
<pre><code>sudo apt purge gnome-contacts gnome-documents gnome-photos tracker
</code></pre>
The first time you run budgie-welcome, Tilix Quake mode (press F12) will be automatically enabled.

Please refer to the community wiki for more help:

<a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a>

Also, Ask Ubuntu has an excellent guide to help you upgrade:

<a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a>
<h3 id="known-issues">Known issues</h3>
<ul>
 	<li>If you find that after the upgrade clicking the menu button crashes the panel, then <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> to open a terminal then run:nohup budgie-panel --reset --replace &amp;</li>
</ul>
<h3 id="how-to-upgrade-from-16-04-to-17-10">How to upgrade from 16.04 to 17.10</h3>
There is not a direct 16.04 to 17.10 upgrade route. You are recommended to to-do a fresh install - obviously remembering to backup any important documents etc. first.
<h1 id="download">Download</h1>
To download the ISO, head on over to:

<a href="https://ubuntubudgie.org/downloads">https://ubuntubudgie.org/downloads</a>