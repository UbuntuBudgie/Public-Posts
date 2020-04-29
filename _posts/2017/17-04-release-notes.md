---
ID: 732
post_title: 17.04 Release Notes
post_name: 17-04-release-notes
author: Nikola
post_date: 2017-04-11 21:16:38
layout: post
link: >
  https://ubuntubudgie.org/2017/04/11/17-04-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<h2 id="version">Version</h2>
Ubuntu Budgie v17.04 (zesty) Released: April 13th 2017

<hr />

A significant portion of this development cycle has been spent integrating with the Canonical build-system. Key visible integration items were:
<ul>
 	<li>Plymouth customisations</li>
 	<li>utilizing the Ubiquity installer</li>
 	<li>reworking packages to remove the "budgie-remix" identities and replaced with the updated "Ubuntu Budgie" identity.</li>
</ul>
<h2 id="new-features-and-enhancements">New Features and Enhancements</h2>
<ul>
 	<li>budgie-desktop upgraded to v10.2.9 from v10.2.7</li>
 	<li>a first login welcome screen to help you get up and running with items such as:
<ul>
 	<li>install drivers</li>
 	<li>perform updates</li>
 	<li>install complex ibus language support</li>
 	<li>web browser ballot - one click install/uninstall of additional browsers such as Chrome, Firefox, Vivaldi, etc.</li>
 	<li>Full theme change support is now available. You can switch the entire interface (fonts, wallpaper, theme, cursors) to material based design themes (Adapta or Vimix) or the Arc theme style (default)</li>
</ul>
</li>
 	<li>a backports repository is now optionally available via budgie-welcome with additional packages such as:
<ul>
 	<li>skippy-xd (Expose-Like Window selector)</li>
 	<li>the latest budgie-screenshot panel applet allowing you to grab screenshots (optionally send to Imgur)</li>
 	<li>17.04 compatible Paper GTK Theme, Paper icon and cursor themes</li>
 	<li>(Coming Soon) v10.3 of the budgie-desktop</li>
</ul>
</li>
 	<li>application indicator support (default - respects the panel system theme or custom themes)</li>
 	<li>panel applet to control the volume (default)</li>
 	<li>panel applet to navigate to file system places (default)</li>
 	<li>OSD (On Screen Display) of volume changes</li>
 	<li>drag-and-drop reordering of the icon-tasklist applet</li>
 	<li>ibus support</li>
 	<li>keyboard switching applet</li>
 	<li>Plank now defaults to a predefined set of applications rather than a random set of apps</li>
 	<li>QT Apps now inherit the currently applied GTK theme</li>
 	<li>additional languages are now available for installation via the Settings application including improved font support for our Chinese &amp; Japanese community</li>
 	<li>existing applications such as Eye-of-GNOME (eog) and Evince have better support in non-Unity based desktops</li>
 	<li>integrated the latest GNOME mutter window manager (difficult due to debugging and fixing crash issues)</li>
 	<li>Added the following GNOME applications:
<ul>
 	<li>GNOME disk usage Analyser</li>
 	<li>GNOME characters</li>
 	<li>GNOME contacts</li>
 	<li>GNOME documents</li>
 	<li>GNOME font-viewer</li>
 	<li>GNOME log-viewer</li>
 	<li>GNOME maps</li>
 	<li>GNOME weather</li>
 	<li>GNOME color manager</li>
 	<li>GNOME accessibility support</li>
</ul>
</li>
 	<li>GTK+3.22 Arc-theme support</li>
 	<li>Latest Moka-icon-theme (5.3.5)</li>
 	<li>new wallpapers
<ul>
 	<li>thank you to all wallpaper contest contributors!</li>
 	<li>our winners are credited in the Settings application (<code>settings --&gt; background</code>)</li>
 	<li>two additional wallpapers have been added by team members</li>
</ul>
</li>
 	<li>additional theming changes, bug-fixes and translation updates</li>
</ul>
<h2 id="compatibility-changes">Compatibility Changes</h2>
<ul>
 	<li>replaced GNOME Terminal with Terminix</li>
 	<li>dropped LibreOffice Base from the ISO image</li>
 	<li>changed the default browser to Chromium from Firefox</li>
 	<li>changed the default video player to GNOME MPV from GNOME Videos for instant multimedia playback out-of-the-box</li>
 	<li>changed the default for mouse and touchpad support to libinput from synaptics</li>
</ul>
<h2 id="issues-resolved">Issues Resolved</h2>
<ul>
 	<li>crashing when installing/removing applications</li>
 	<li>disappearing session when removing keyboard layouts</li>
 	<li>oversized icons in the LibreOffice window decoration now display at the proper size</li>
</ul>
<h2 id="known-issues">Known Issues</h2>
<h3 id="upgrading-from-16-10-to-17-04">Upgrading from 16.10 to 17.04</h3>
<ul>
 	<li>existing accounts on the system will launch terminix showing a VTE misconfiguration error
<ul>
 	<li>To resolve: <code>cat /usr/share/budgie-desktop/vteprompt.txt &gt;&gt; ~/.bashrc</code></li>
</ul>
</li>
 	<li>your system will have the default applications (from 16.10 and 17.04) for web browsing, video players and terminals.
<ul>
 	<li>To resolve: <code>sudo apt purge firefox gnome-terminal totem &amp;&amp; sudo apt autoremove</code></li>
</ul>
</li>
</ul>
<h2 id="upgrading">Upgrading</h2>
<h3 id="how-to-upgrade-from-16-10-to-17-04">How to upgrade from 16.10 to 17.04</h3>
After the release of 17.04 you will be offered to upgrade when you run Software &amp; Updates.

Alternatively, from a command line run:
<pre><code>sudo do-release-upgrade
</code></pre>
Packages that were installed as part of the previous PPA (ppa:budgie-remix/ppa) will be uninstalled as part of the upgrade. These packages can be reinstalled via the 17.04 Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports)

Please refer to the community wiki for more help:

<a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a>

Also, Ask Ubuntu has a great guide to help you upgrade:

<a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a>
<h3 id="how-to-upgrade-from-16-04-to-17-04">How to upgrade from 16.04 to 17.04</h3>
There is not a direct 16.04 to 17.04 upgrade route. You are recommended to upgrade through 16.10 first and then to 17.04, or to-do a fresh install.

To upgrade from 16.04 to 16.10 - <a href="https://ubuntubudgie.org/blog/2016/10/08/how-to-upgrade-from-budgie-remix-16-04-to-16-10">https://ubuntubudgie.org/blog/2016/10/08/how-to-upgrade-from-budgie-remix-16-04-to-16-10</a>