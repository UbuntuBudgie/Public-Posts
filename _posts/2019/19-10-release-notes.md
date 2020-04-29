---
ID: 1401
post_title: 19.10 RELEASE NOTES
post_name: 19-10-release-notes
author: Nikola
post_date: 2019-09-25 14:06:01
layout: post
link: >
  https://ubuntubudgie.org/2019/09/25/19-10-release-notes/
published: true
tags: [ ]
categories:
  - News
---
<!-- wp:heading {"level":1} -->
<h1>VERSION</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Ubuntu Budgie v19.10 (Eoan Ermine)</strong>&nbsp;<strong>Release:</strong>&nbsp;Oct 17th, 2019</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ubuntu Budgie 19.10 will be supported for 9 months until Jul 2020. If you need Long Term Support, it is recommended you use Ubuntu 18.04 LTS instead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In these release notes the areas covered are:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>New features and enhancements</li><li>Issues Resolved</li><li>Upgrading from 18.04 / 18.10 / 19.04 Ubuntu Budgie</li><li>Known Issues when upgrading</li><li>Where to download Ubuntu Budgie</li></ul>
<!-- /wp:list -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:heading {"level":1} -->
<h1 id="new-features-and-enhancements">NEW FEATURES AND ENHANCEMENTS</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2 id="19-10-stuff-to-look-out-for">19.10 STUFF TO LOOK OUT FOR</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Ubuntu Budgie Team Wallpapers for 19.10 - the UB team has decided for this release to choose their favourite wallpapers - quite an eclectic bunch. I hope you like them. We will next run a community contest for the 20.04 LTS</li><li>All our backport packages have now been rebuilt for 19.10 - look out for nemo 4, nemo-share and nemo-dropbox and also skippy-xd is available through backports.</li><li>Budgie Welcome - Translation team has been bustling - many more languages now available</li><li>Latest versions of our default themes Pocillo, QogirBudgie and Arc</li><li>Budgie Appindicators now deal with shrinking panel sizes</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="budgie-desktop-">BUDGIE DESKTOP:</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once again Ubuntu Developers (thanks Marco Trevisan) &amp; Ubuntu Budgie continues to take the lead to ensure budgie desktop remains compatible with the latest GNOME stack. This time around the development ride has been particularly rough but I've worked with the GNOME mutter developers to ensure a smooth ride for all distros uplifting to GNOME 3.34.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I've added the following enhancements:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>patch to bring support for nemo-desktop and DesktopFolder to budgie desktop settings.</li><li>ability to increase the spacer applet sizing without impacting the overall size of the panel.</li><li>sort the menu taking into account your user locale characters such as accents</li><li>ability to launch applications from the menu requiring elevated privileges</li><li>hopefully reduced the occasional budgie desktop based apport dialogs seen during logon</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Also have pulled from upstream a Fonts DPI configuration option in budgie desktop settings.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="accessibility">ACCESSIBILITY</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We have taken a closer look at making our distro more easy to use for those of us who need just a little extra help. This is where we need your help. What tricks &amp; techniques are you aware of that helps improve the accessibility of the desktop?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We have incorporated a super useful screen magnifier - just enable via the Settings - Accessibility options</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Bind both Super + Alt + = and Super + Alt + + as zoom-in keys</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1411} -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/magni.png" alt="Magni" class="wp-image-1411"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Also we have included the on-screen keyboard (onboard)</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1412} -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/onboard.png" alt="" class="wp-image-1412"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 id="nvidia">NVIDIA</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Our 19.10 distro now includes the NVIDIA proprietary driver sets on its ISO. This allows NVIDIA users to install &amp; configure drivers out of the box without needing an internet connection. Just click the wifi installer option to install the correct NVIDIA driver for your computer - obviously assuming that your hardware needs it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Likewise, we have added support for Optimus graphics switching direct from the budgie panel. If you have Optimus graphics look for the intel/nvidia icon to switch between your intel &amp; nvidia GPUs.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1413,"align":"none","className":"size-full wp-image-1413"} -->
<figure class="wp-block-image alignnone size-full wp-image-1413"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/nvidia_menu.png" alt="Nvidia Menu" class="wp-image-1413"/><figcaption>Nvidia Menu</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 id="zfs">ZFS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We are pleased to support <a href="https://ubuntu.com/blog/enhancing-our-zfs-support-on-ubuntu-19-10-an-introduction" class="ek-link">Ubuntu's ZFS initiative</a>. For Ubuntu Budgie, you will have the option to <a href="https://didrocks.fr/2019/10/11/ubuntu-zfs-support-in-19.10-zfs-on-root/" class="ek-link">install the ZFS file-system</a> from the ISO</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1414,"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/ZFS.jpg" alt="Zfs" class="wp-image-1414"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Remember this is experimental - so don't use on a valuable production system. Canonical devs are very interested in feedback - so this is an easy way to help-out early with 20.04LTS development.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You will need a minimum of 4GB RAM to install ZFS - don't use on RAM limited systems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="budgie-applets-budgie-mini-apps">BUDGIE APPLETS &amp; BUDGIE MINI-APPS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Debuting for 19.10 are Window Previews, QuickChar, FuzzyClock, Workspace Stopwatch, Budgie Brightness Controller and Budgie Status-Notifier</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="window-previews">WINDOW PREVIEWS</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Window previews (Alt Tab replacement) has been rewritten in vala - faster with per workspace/all workspaces and shift backwards controls. Additionally, Alt Above-Tab shows windows of the currently active application only.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1415} -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/previews.png" alt="Previews" class="wp-image-1415"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Enable through Menu - Previews Control</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="quickchar-mini-app">QUICKCHAR MINI APP</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Quickly find and choose the equivalent locale character for an ascii character</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Press Super+Alt+C to call the window</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type a character, and all its derivates will appear. Click one (or tab to the targeted character and press Return) and the character will be pasted into the document</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Press again to toggle visibility, or Escape to hide</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1416} -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/chars.png" alt="Chars" class="wp-image-1416"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Install via Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="fuzzyclock-applet">FUZZYCLOCK APPLET</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Shows the time in a Fuzzy Way.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Supports 24-hour format Supports Dates Supports Horizontal Panels</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1417,"align":"none","className":"size-full wp-image-1417"} -->
<figure class="wp-block-image alignnone size-full wp-image-1417"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/fuzzy.png" alt="Fuzzy" class="wp-image-1417"/><figcaption>Fuzzy</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This is a new applet contributed by community member Adam Dyess - Thanks Adam!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Install via Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="workspace-stopwatch-applet">WORKSPACE STOPWATCH APPLET</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Workspace Timer Applet is an applet to keep track of usage per workspace, e.g. to find out how much minutes/hours were actually spent on a job. Workspaces can be freely named, custom names and all data are rmembered, also after logout/restart, until the RESET button is pressed. The log file is updated on workspace switch/clicking the icon for popup or else every 30 seconds. Time during suspend is automatically retracted from a workspace' time.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1418,"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/stopwatch.png" alt="Stopwatch" class="wp-image-1418"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Install via Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="add-budgie-brightness-controller-applet">ADD BUDGIE-BRIGHTNESS-CONTROLLER APPLET</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Brightness Controller is a Budgie Desktop applet allowing you to control the desktop/laptop brightness via your hardware brightness controller or via Xorg as a fallback.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1419,"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/brightnesscontroller.jpg" alt="Brightnesscontroller" class="wp-image-1419"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Install via Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="budgie-status-notifier">BUDGIE STATUS-NOTIFIER</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>System Tray in KDE StatusNotifierItem format.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":1420,"align":"center"} -->
<div class="wp-block-image"><figure class="aligncenter"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/sntray-applet.jpg" alt="" class="wp-image-1420"/></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Install via Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="extras-changes">EXTRAS CHANGES</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Add budgie-extras-daemon to handle applet shortcut key handling</li><li>Add automatic multi-monitor support for Showtime</li><li>Showtime bug fix to deal with more locale variations</li><li>Set the defaults for hotcorners</li><li>Scaling fixes for Showtime when theme/resolution/font changes</li><li>Display Window Mover applet correctly on primary monitor when multiple monitors are available</li><li>Rework Dropby to display in an independent window rather than a popup - this resolves panel freeze issues.</li><li>Dropby bug-fix to deal with non-accessible mount-points</li><li>display dropby window close button icon</li><li>Dropby - Fix right corner action appearance</li><li>Window Mover no longer disappears when navigating using cursor keys</li><li>hide countdown message window from docks</li><li>Add option for take-a-break to unlock the screensaver</li><li>Lots of translation updates</li><li>Fix visualspace window being displayed when releasing ctrl/alt after arrow keys</li><li>Correctly integrate hotcorners with window previews</li><li>Reduce budgie panel CPU usage with keyboard auto-switch applet</li><li>Fix for crash with keyboard auto-switch with malformed config file</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>All these productivity applets and mini-apps are now available from Budgie Welcome - select Menu - Budgie Applets</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Remember, budgie-applets showcases many more indie developer applets</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In total Ubuntu Budgie users have direct install access to 35 budgie applets and budgie mini-apps through budgie-welcome</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to showcase your applet in UB contact us and let us know about your project.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Daily builds for budgie-extras is available - so to get the latest (warts and all) ppa:ubuntubudgie-dev/budgie-extras-daily</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="key-features-available-to-ub-from-ubuntu">KEY FEATURES AVAILABLE TO UB FROM UBUNTU</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Linux kernel v5.3</li><li>GNOME 3.34 applications - our favourite - look out for the wallpaper changer. Very nice!</li></ul>
<!-- /wp:list -->

<!-- wp:image {"id":1421} -->
<figure class="wp-block-image"><img src="https://ubuntubudgie.org/wp-content/uploads/2019/10/ubuntubudgie19.10-on-QEMU-KVM_045.png" alt="Ubuntubudgie19.10 On Qemu Kvm 045" class="wp-image-1421"/></figure>
<!-- /wp:image -->

<!-- wp:list -->
<ul><li>Latest version of LibreOffice 6.3</li><li>A shed-load of fixes throughout the Ubuntu stack - congrats on all Canonical, Ubuntu devs, Debian devs and all devs in the free software community for all of their hard-work which everyone should be pleased about :)</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>What does all that mean - most cutting edge yet stable software that brings great benefits for brand new hardware compatibility - including support for the very latest games.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 id="ub-maintained-packages">UB MAINTAINED PACKAGES</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Apart from the above (!) UB maintains many Debian packages. New versions available in 19.10 include:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>slick-greeter</li><li>Arc-Theme</li><li>DesktopFolder</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="issues-resolved-">ISSUES RESOLVED:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Budgie Pixel Saver has been fixed to work with newer versions of mutter.</li><li>Appindicator applet now ignores right-click events; this is now consistent with all budgie applets and prevents confusion between left/right click events.</li><li>Out of the box we are now Python 2 free - better security especially due to the imminent end-of-life for python 2 security fixes.</li><li>Thunderbolt support is now available from the start menu.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 id="known-issues-">KNOWN ISSUES:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li> <p>If you find that after the upgrade clicking the menu button crashes the panel, then <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd> to open a terminal then run:</p><pre><code class="hljs nginx"><span class="hljs-title">nohup</span> budgie-panel --reset --replace &amp; </code></pre></li><li> <p>Please read the <a href="https://wiki.ubuntu.com/EoanErmine/ReleaseNotes" class="ek-link">Ubuntu Release notes</a> which covers issues common to all Ubuntu Flavors.</p> </li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 id="upgrading">UPGRADING</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2 id="how-to-upgrade-from-19-04-to-19-10">HOW TO UPGRADE FROM 19.04 TO 19.10</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>IMPORTANT:</strong>&nbsp;remember to double-check you have the following vital package before you upgrade:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo apt install ubuntu-budgie-desktop
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After the release of 19.10, you will be offered to upgrade when you run Software &amp; Updates.</p>
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
<h2 id="how-to-upgrade-from-18-04-or-18-10-to-19-10">HOW TO UPGRADE FROM 18.04 OR 18.10 TO 19.10</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Short story - you cannot directly upgrade. You must first upgrade to 18.10 ... then 19.04 before upgrading to 19.10. Anything else is not supported nor supportable.</p>
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
<p>http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="download">DOWNLOAD</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Final release is available here: <a href="https://ubuntubudgie.org/downloads/" class="ek-link">https://ubuntubudgie.org/downloads/</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="getting-support">GETTING SUPPORT</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Thanks to the generosity of discourse.org, our support site is the crucial site for all things Ubuntu Budgie.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One to bookmark <a href="https://discourse.ubuntubudgie.org" class="ek-link">https://discourse.ubuntubudgie.org</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>More information can be found <a href="https://ubuntubudgie.org/2018/03/08/welcome-to-discourse/" class="ek-link">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 id="infrastructure">INFRASTRUCTURE</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We just wanted to thank our infrastructure sponsors who help us keep the lights on.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-digital-ocean-https-www-digitalocean-com-"><a href="https://www.digitalocean.com/" class="ek-link">DIGITAL OCEAN</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>On a mission to simplify cloud computing so developers and their teams can spend more time building software that changes the world.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-discourse-https-www-discourse-org-"><a href="https://www.discourse.org/" class="ek-link">DISCOURSE</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Discourse is the 100% open source discussion platform built for the next decade of the Internet. Use it as a mailing list, discussion forum, long-form chat room, and more!</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="-status-io-https-status-io-"><a href="https://status.io/" class="ek-link">STATUS.IO</a></h3>
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