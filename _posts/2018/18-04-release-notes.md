---
ID: 875
post_title: 18.04 Release Notes
post_name: 18-04-release-notes
author: Nikola
post_date: 2018-03-08 13:58:08
layout: post
link: >
  https://ubuntubudgie.org/2018/03/08/18-04-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<h2 id="version">Version</h2>
Ubuntu Budgie v18.04 (bionic beaver) Release: Apr 26th, 2018

<strong>final release notes</strong>

In these release notes the areas covered are:
<ul>
 	<li>New features and enhancements</li>
 	<li>Issues Resolved</li>
 	<li>Upgrading from 17.10 Ubuntu Budgie</li>
 	<li>Upgrading from 16.04.4 budgie-remix</li>
 	<li>Known Issues when upgrading</li>
 	<li>Where to download Ubuntu Budgie</li>
 	<li>Our new support site <a href="https://discourse.ubuntubudgie.org/">https://discourse.ubuntubudgie.org</a></li>
</ul>

<hr />

<h1 id="new-features-and-enhancements">New features and enhancements</h1>
<ul>
 	<li>Add support for openvnc connections via the network-manager applet</li>
 	<li>Better font handling for our Chinese and Korean users</li>
 	<li>Add color emoji support for GNOME Characters</li>
 	<li>Better key shortcuts
<ul>
 	<li><code>Print</code> Screen button now works as does <code>&lt;Shift&gt;&lt;Ctrl&gt;Print</code> - Copy a screenshot of an area to clipboard, <code>&lt;Shift&gt;Print</code> - Save a screenshot of an area to Pictures, <code>&lt;Ctrl&gt;Print</code> - Copy a screenshot of a window to clipboard, <code>&lt;Alt&gt;Print</code> - Save a screenshot of a window to Pictures,</li>
 	<li><code>Super+D</code> now toggles the desktop</li>
 	<li><code>Super+E</code> to show a new Files window</li>
 	<li><code>Alt+Q</code> or <code>F12</code> shows Tilix Quake mode</li>
</ul>
</li>
 	<li>Default Budgie Applets
<ul>
 	<li>Quick Note - quickest way to make short notes
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/Quicknote.png" alt="Quicknote" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>DropBy applet (Media savvy applet pops up when USB based devices/phones connected to open, copy files etc)
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/DropBy.png" alt="DropBy" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>ShowTime - desktop clock with customizable colors
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/time.png" alt="Time" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
</ul>
</li>
 	<li>New applets, available via Budgie Settings
<ul>
 	<li>Hot Corners - options include a number of preset actions, custom commands and using pressure</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/hotcorners.png" alt="Hotcorners" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<ul>
 	<li>Window Previews - available via Budgie Settings
<kbd>Alt</kbd> + <kbd>Tab</kbd> to browse through all windows, <kbd>Alt</kbd> + <kbd>`</kbd> (grave, above Tab) to browse through the active application's windows. Furthermore: browse through workspaces, Hot Corners integration</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/windowpreviews.png" alt="Windowpreviews" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<ul>
 	<li>Rotation Lock - available via Budgie Settings - increasingly many more people have laptops that support screen-rotation</li>
</ul>
</li>
</ul>
<ul>
 	<li>More new applets, available from Budgie Welcome
<ul>
 	<li>Clockworks - Keep track on different time zones
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/clockworks.png" alt="Clockworks" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>CountDown - A simple countdown applet with several options
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/countdown.png" alt="Countdown" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Keyboard Autoswitch - Applet to work together with the Keyboard Layout applet, set a different language per application
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/autoswitch.png" alt="Autoswitch" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Wallpaper Switcher - Set a different wallpaper per workspace</li>
 	<li>Window Mover - Move windows quickly across workspaces by dragging and click the targeted workspace</li>
 	<li>Workspace Overview - Quickly move to any window on any workspace from a menu</li>
 	<li>Weather applet</li>
</ul>
</li>
 	<li>We are also pleased to show-case many more indie developer applets - to just pick a few:
<ul>
 	<li>Budgie Calendar Applet</li>
 	<li>Global Menu</li>
 	<li>Pixel Saver</li>
</ul>
</li>
 	<li>keyboard and GUI friendly window-shuffler capability. This short video explains all - enjoy!</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/hqdefault.jpg" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<ul>
 	<li>New exciting GTK+ theme by default called Pocillo
<ul>
 	<li>Dynamic panel colouring - semi-transparent turns to transparent for maximised windows</li>
 	<li>Ripple effect buttons</li>
 	<li>Coloring takes Arc styling; this allows seamless integration with Budgie System Theming if required</li>
 	<li>Dark, Light and Standard variants</li>
 	<li>All themes also have Slim equivalents - these themes are recommended for lower resolution laptops &amp; desktops</li>
 	<li>Theming of Slick-Greeter and lock-screen</li>
</ul>
</li>
 	<li>Arc-Theme now being co-maintained with Ubuntu Budgie &amp; Arch Linux - exciting collaboration and the latest fixes for all DE's is now in 18.04</li>
 	<li>We maintain a Vimix theme debian package is now installable via our backports PPA since the third-party we originally linked to is not actively maintaining its package</li>
 	<li>Support for Dynamic Workspaces
<ul>
 	<li>Visual splashscreen shows when changing workspaces - CTRL+ALT Left/Right
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/dynaspace.png" alt="Dynaspace" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Pressing CTRL+ALT Right will create more workspaces on the fly. Pressing CTRL+ALT Left will remove unused workspaces that may have been created.</li>
</ul>
</li>
 	<li>Menu has Logout, Shutdown, Suspend and Restart action entries</li>
 	<li>Snap version of Budgie Welcome:
<ul>
 	<li>We can be much more dynamic now for the LTS period. As an when new software, themes and applets are developed by the community we can now showcase these instantly via Budgie Welcome</li>
 	<li>Our discourse support site is now displayed on the home-page. The social media icons have moved to the right of the screen and Gitter has now been removed (since discourse is our new support site)</li>
 	<li>Community page has been revamped</li>
 	<li>Lots of translation updates</li>
 	<li>In-line with Ubuntu Policy, third-party repo installs now displays a prompt. Accepting that prompt continues with the installation and adds the third-party repo e.g. Chrome, Vivaldi, Ubuntu Budgie backports PPA</li>
</ul>
</li>
 	<li>We maintain the Slick Greeter package on behalf of both Debian and Ubuntu - latest version has been included with better multimonitor support</li>
 	<li>We develop and maintain the Alternative Toolbar for Rhythmbox. It gains an easy to use toggle to show menu options for each music source. Also lots of important fixes for various crashes reported since 17.10</li>
 	<li>Budgie Indicator Applet - our appindicator supports Vertical Panels!</li>
 	<li>Super Community Wallpapers for 18.04 - exciting range of the best wallpapers from the Budgie Community wallpaper contest held last year</li>
 	<li>Budgie Welcome
<ul>
 	<li>Translation team has been very busy - many more languages now available</li>
 	<li>Pop GTK Theme makeover</li>
 	<li>Ant GTK Theme makeover</li>
 	<li>Fixed live session booting instructions</li>
 	<li>Re-done Adapta GTK Theme makeover with Papirus icons theme, better panel look and feel</li>
 	<li>All applets now can show a much larger image when clicking (lightbox view)</li>
 	<li>Replace Flat-Plat with Materia GTK Theme makeover</li>
 	<li>Add important upstream support links for all Budgie Applets</li>
</ul>
</li>
 	<li>Minimal Installation option - a stripped back install with just Chromium and a few key utilities to start you on your way</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/minimal2018.0420installation.png" alt="Minimal%2018.04%20installation" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<h1 id="key-features-available-to-ub-from-ubuntu">Key features available to UB from Ubuntu</h1>
<ul>
 	<li>spice-vdagent added - we now work much better in VMs such as GNOME Boxes, QEMU</li>
 	<li>GNOME 3.28 applications</li>
 	<li>Nautilus 3.26 is retained - this is to ensure desktop icons support is maintained throughout the LTS period</li>
 	<li>Linux Kernel 4.15</li>
 	<li>A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and literally all devs in the free software community for all of their hard-work which everyone should be very happy about :)</li>
</ul>
<h1 id="issues-resolved-">Issues Resolved:</h1>
<ul>
 	<li>removed the obsolete xdiagnose application</li>
 	<li>IBus Keyboard switcher now correctly cycles through layouts</li>
 	<li>We no longer interfere when KDE is installed at the same time as Budgie</li>
 	<li>Snapping of windows now longer causes lock-ups in a small number of use-cases; snapping animation has been removed</li>
 	<li>The text version of the Plymouth theme now correctly displays 18.04 in the text</li>
 	<li>The logo version of the Plymouth theme now has the progress bars centered with the logo</li>
 	<li>Skippy-XD has now been removed from the recommendations page - the software is unmaintained for a few years now. It is still installable via command-line through our backports PPA on a "try if it works" basis.</li>
 	<li>Vivaldi is no longer shown on the 32bit ISO - there is no 32bit packages available</li>
</ul>
<h1 id="known-issues-">Known Issues:</h1>
<ul>
 	<li>LightDM changes have resulted in the greeter not showing at selected users wallpaper. We ship the "Login Window" application to configure Slick-Greeter</li>
 	<li>If you find that after the upgrade clicking the menu button crashes the panel, then <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> to open a terminal then run:</li>
</ul>
<pre><code>nohup budgie-panel --reset --replace &amp;
</code></pre>
<h1 id="upgrading">Upgrading</h1>
<h2 id="how-to-upgrade-from-17-10-to-18-04">How to upgrade from 17.10 to 18.04</h2>
<strong>IMPORTANT:</strong> remember to double-check you have the following vital package before you upgrade:
<pre><code>sudo apt install ubuntu-budgie-desktop
</code></pre>
After the release of 18.04, you will be offered to upgrade when you run Software &amp; Updates.

Alternatively, from a command line run:
<pre><code>update-manager
</code></pre>
<strong>IMPORTANT</strong> We do not recommend running <code>do-release-upgrade</code> from a Tilix terminal since this will hang during the upgrade. If you want to use <code>do-release-upgrade</code> switch to a TTY and login before running the command.

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

<strong>POST UPGRADE</strong> From the menu run <code>Budgie Complete Installation</code> to install snap version of budgie-welcome.

We also recommend you reset the panel to benefit from the revised Pocillo theme and applets:
<pre><code>nohup budgie-panel --reset --replace &amp;
</code></pre>
<h2 id="how-to-upgrade-from-16-04-budgie-remix-to-18-04">How to upgrade from 16.04 budgie-remix to 18.04</h2>
16.04 users are not automatically offered an upgrade until the first point release i.e. 18.04.1 which is released in July 2018.

Alternatively - to force an upgrade from 16.04.4 from a command line run:
<pre><code>update-manager -d
</code></pre>
Some of the packages that were installed as part of the budgie-remix backports PPA will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

From the menu run <code>Budgie Complete Installation</code> to install snap version of budgie-welcome and to remove the budgie-remix meta package correctly.

We also recommend you reset the panel to benefit from the revised Pocillo theme and applets:
<pre><code>nohup budgie-panel --reset --replace &amp;
</code></pre>

<hr />

Please refer to the community wiki for more help:

<a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a>

Also, Ask Ubuntu has an excellent guide to help you upgrade:

<a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a>
<h1 id="download">Download</h1>
To download the ISO, head on over to:

<a href="https://ubuntubudgie.org/downloads">https://ubuntubudgie.org/downloads</a>
<h1 id="introducing-our-new-support-site">Introducing our new support site</h1>
Also - we now have introduced our new support site. Thanks to the generosity of discourse.org, our new discourse based website is now up and running.

One to book-mark <a href="https://discourse.ubuntubudgie.org/">https://discourse.ubuntubudgie.org</a>

More information can be found <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=39">here </a>.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/03/discourse.png" alt="Discourse" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>