---
ID: 927
post_title: 18.10 Release Notes
post_name: 18-10-release-notes
author: Nikola
post_date: 2018-09-27 14:32:49
layout: post
link: >
  https://ubuntubudgie.org/2018/09/27/18-10-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<div class="uk-htmleditor-navbar">
<div class="uk-htmleditor-navbar-flip">

<span style="color: #232324; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 2.058em;">Version</span>

</div>
</div>
<div class="uk-htmleditor-content">
<div class="uk-htmleditor-preview">

<strong>Ubuntu Budgie v18.10 (Cosmic Cuttlefish)</strong> <strong>Release:</strong> Oct 18th, 2018

Ubuntu Budgie 18.10 will be supported for 9 months until July 2019. If you need Long Term Support, it is recommended you use Ubuntu 18.04 LTS instead.

<strong>beta release notes - 27 Sept 2018</strong>

In these release notes the areas covered are:
<ul>
 	<li>New features and enhancements</li>
 	<li>Issues Resolved</li>
 	<li>Upgrading from 18.04 Ubuntu Budgie</li>
 	<li>Known Issues when upgrading</li>
 	<li>Where to download Ubuntu Budgie</li>
</ul>
<h1 id="new-features-and-enhancements">New features and enhancements</h1>
<ul>
 	<li>Budgie Desktop "v10.5" (almost) - we are pleased to promote the latest available capabilities made available by the Solus upstream project.</li>
 	<li>Due to overwhelming vote (75% for), Firefox now becomes our default browser. So out goes a chromium-browser icon on both the icon-task-list and plank dock - in comes Firefox</li>
 	<li>... and for good measure we have added ubuntu budgie welcome as a default program icon to make discovery instant.</li>
 	<li>We have dropped TLP from the default install. The powersavings in the kernel from kernel 4.18 are significant for newer computers. TLP is still available to be installed if the kernel powersavings do not impact you due to using an older CPU.</li>
 	<li>The caffeine appindicator has been dropped - this has been replaced with the native caffeine budgie-applet that comes with budgie-desktop v10.5</li>
 	<li>We've added a new game 2048 as part of the default install - great way to while-away a few hours</li>
 	<li>More new productivity applets are now available from Budgie Welcome</li>
 	<li>Ubuntu Budgie Team Wallpapers for 18.10 - the UB team has decided for this release to choose their favorite wallpapers - quite an eclectic bunch. Hope you like them. We will next run a community contest for the 20.04 LTS</li>
 	<li>Budgie Welcome - Translation team has been very busy - many more languages now available</li>
</ul>
<h1 id="budgie-applets">Budgie Applets</h1>
New productivity applets are now available from Budgie Welcome:
<ul>
 	<li>WeatherShow - Weather forecast every three hours and over five days. This Desktop based weather applet is installed by default and can be added to your panel.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/weathershow-applet.jpg" alt="Weathershow applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Kangaroo - Quick and easy browsing, across (possibly) many folder layers, without having to-do a single mouse click.</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/kangaroo-applet.jpg" alt="Kangaroo applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<ul>
 	<li>App launcher - Display your favorite applications in a menu and on the panel.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/applauncher-applet.jpg" alt="Applauncher applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Trash applet (vala based) - Show, hide and restore trash items.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/trash-applet.jpg" alt="Trash applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Recently Used (vala based) - Show recently used items in a menu.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/recentlyused-applet.jpg" alt="Recentlyused applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
</ul>
A couple of existing applets have been rewritten from Python based to Vala based. This has been done to greatly enhance the speed of the applets and make them memory efficient; in addition they have picked up a few enhancements so browse around in the applet setting to discover whats new
<ul>
 	<li>Quick Notes</li>
 	<li>Hot Corners</li>
</ul>
We are also pleased to show-case many more indie developer applets - to just pick a few:
<ul>
 	<li>Advanced Brightness Controller - Control the backlight via your graphics driver controller or GNOME's brightness controller.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/advanced-brightness-applet.jpg" alt="Advanced brightness applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>Browser Profile Launcher - Launch and create multiple Chromium/Chrome profiles.</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/browser-profile-launcher-applet.jpg" alt="Browser profile launcher applet" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<strong>In total Ubuntu Budgie users have direct install access to twenty-seven applets through budgie-welcome</strong>

If you want to showcase your applet in UB contact us and let us know about your project.
<h1 id="budgie-desktop">Budgie Desktop</h1>
Whilst v10.5 was not made official by the time of Cosmic Feature freeze, we have grabbed as much as we can to showcase the good work that has been made by Solus and the wider budgie development community.

We are particularly proud of Canonical's Iain Lane (Laney) who provided a massive mutter compatible patch. Without it we would not have been able to bring you 18.10. Cheers Iain :)

From myself I have built upon Iain's good work to resolve as many GTK+3.24 and Mutter 3.30 introduced issues as we have been able to.

From upstream's <a href="https://getsol.us/2018/08/10/summertime-solus/">blog </a>, in no particular order look out for the following:
<ul>
 	<li>Raven Sound Output widget enables you to do global as well as per-app volume control and output device changing</li>
 	<li>Raven Sound Input widget enables you to do microphone control and input device changing.</li>
 	<li>Ability to mute / unmute applications and an option to allow raising volume above 100%</li>
 	<li>New Raven section in Budgie Desktop Settings. Under this new section, you’re able to show and hide individual widgets as well as enable the ability to raise your volume above 100% in Raven.</li>
 	<li>Ability to enable window focus change to being on mouse enter / leave via the “Windows” section of Budgie Desktop Settings, as opposed to click-to-focus.</li>
 	<li>The “Fonts” section of Budgie Desktop Settings introduces a new Text Scaling option</li>
 	<li>Ability to dismiss individual notifications</li>
 	<li>Notification grouping on an application basis</li>
 	<li>Large Notifications are now truncated to prevent huge notification windows being displayed</li>
 	<li>Caffeine powered - new applet that prevents screen dimming and lock screen triggering. This is now the default on the panel</li>
 	<li>You can now middle click on the Bluetooth applet to toggle Bluetooth airplane mode.</li>
 	<li>You can now middle click on the Sound applet to mute and unmute global audio.</li>
 	<li>We now hide the add workspace button in the Workspace Applet during initialization.</li>
 	<li>Icon Task List Grouping - displayed icons can optionally group the windows of the same application</li>
</ul>
<h1 id="key-features-available-to-ub-from-ubuntu">Key features available to UB from Ubuntu</h1>
<ul>
 	<li>GNOME 3.30 applications</li>
 	<li>Linux Kernel 4.18</li>
 	<li>A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and literally all devs in the free software community for all of their hard-work which everyone should be very happy about :)</li>
</ul>
<h1 id="ub-maintained-packages">UB Maintained packages</h1>
Apart from the above (!) UB maintains a number of Debian packages. New versions available in 18.10 include:
<ul>
 	<li>rhythmbox-plugin-alternative-toolbar</li>
 	<li>faba-icon-theme</li>
 	<li>slick-greeter</li>
 	<li>GTK+3.24 fixed version of budgie-haste-applet</li>
 	<li>GTK+3.24 fixed version of budgie-screenshot-applet</li>
 	<li>Arc-Theme</li>
</ul>
<h1 id="other-distros">Other distros</h1>
We are particularly pleased to see our Budgie Applets now available to the wider Linux community. If you are on Arch Linux / Manjaro, look out for "budge-extras" in your official Arch community repository. Debian Buster is now sync'd with Ubuntu and will now continue to receive the latest developments from the UB team.
<h1 id="issues-resolved-">Issues Resolved:</h1>
<ul>
 	<li>ShowTime crashes &amp; HiDPI positioning</li>
 	<li>Hotcorners activation issues when using HiDPI displays</li>
 	<li>Various display issues for Window Previews</li>
</ul>
<h1 id="known-issues-">Known Issues:</h1>
<ul>
 	<li>If you find that after the upgrade clicking the menu button crashes the panel, then <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> to open a terminal then run:</li>
</ul>
<pre><code>nohup budgie-panel --reset --replace &amp;
</code></pre>
<ul>
 	<li>Window artefacts displayed when using the budgie menu, notifications and alt+tab. For the interim please disable window animations from budgie-settings. We'll continue to investigate.</li>
 	<li>Workspace switching - switching animation is now up/down instead of the usual left/right.</li>
 	<li>Super +D Showdesktop does not work</li>
 	<li>Showtime settings color button is always white</li>
 	<li>Dropby popover does not popup when a USB device is inserted</li>
 	<li>Some apps do not respect left/right decoration placement</li>
</ul>
<h1 id="upgrading">Upgrading</h1>
<h2 id="how-to-upgrade-from-18-04-to-18-10">How to upgrade from 18.04 to 18.10</h2>
<strong>IMPORTANT:</strong> remember to double-check you have the following vital package before you upgrade:
<pre><code>sudo apt install ubuntu-budgie-desktop
</code></pre>
After the release of 18.10, you will be offered to upgrade when you run Software &amp; Updates - BUT IMPORTANTLY - you need to first switch to being offered updates "For Any Version" in the Update tab of Update Manager - Settings.

Alternatively, from a command line run:
<pre><code>update-manager
</code></pre>
<strong>IMPORTANT</strong> We do not recommend running <code>do-release-upgrade</code> from a Tilix terminal since this will hang during the upgrade. If you want to use <code>do-release-upgrade</code> switch to a TTY and login before running the command.

Some of the packages that were installed as part of the Ubuntu Budgie backports PPA (ppa:ubuntubudgie/backports) will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

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
<h1 id="getting-support">Getting support</h1>
Thanks to the generosity of discourse.org, our support site is the key site for all things Ubuntu Budgie.

One to book-mark <a href="https://discourse.ubuntubudgie.org/">https://discourse.ubuntubudgie.org</a>

More information can be found <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=39">here </a>.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/discourse.png" alt="Discourse" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
</div>
</div>