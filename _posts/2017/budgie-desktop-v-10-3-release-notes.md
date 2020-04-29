---
ID: 745
post_title: 'Budgie Desktop V 10.3 &#8211; Release Notes'
post_name: budgie-desktop-v-10-3-release-notes
author: Nikola
post_date: 2017-04-23 21:23:43
layout: post
link: >
  https://ubuntubudgie.org/2017/04/23/budgie-desktop-v-10-3-release-notes/
published: true
tags: [ ]
categories:
  - News
---
With the Qt 5-based Budgie Desktop 11 beginning development, 10.3 marks the final phase of the 10.x series. Future 10.3 releases will only include minor updates and tweaks.
<h3 id="improvements">Improvements</h3>
<h4 id="mpris-artwork">MPRIS Artwork</h4>
Budgie now supports the downloading of artwork for the MprisClient. Including new code to prevent duplicate artwork from being downloaded (previously most noticeable in Spotify).
<h4 id="alt-tab">Alt-Tab</h4>
Added a new implementation of Alt-Tab improving upon the previous version with enhanced speed, visuals and reliability.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/04/10.3-altTab.png" alt="10.3 altTab" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<h4 id="customizations">Customizations</h4>
<h6 id="clock-applet">Clock Applet</h6>
With the 10.3 release, Clock Applet now includes customization options such as displaying 24 hour time and the date.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/04/10.3-clock.png" alt="10.3 clock" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<h6 id="window-buttons">Window Buttons</h6>
Budgie Settings now allows you to choose a left or right window button layout.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/04/10.3-left_right.png" alt="10.3 left right" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<h3 id="fixes-improvements">Fixes / Improvements</h3>
<h5 id="gtk-3-22">GTK 3.22</h5>
The following issues have been resolved with GTK 3.22:
<ul>
 	<li>When Budgie panel is located at the bottom, Budgie Menu and popovers will no longer move from the top to the bottom of the screen.</li>
 	<li>Duplicate popover animations.</li>
 	<li>The Run dialogue will cease to appear "stumpy".</li>
</ul>
<h5 id="budgie-applets">Budgie Applets</h5>
Various Budgie Applets have had the following bug fixes:
<ul>
 	<li>Clock Applet: Vertical alignment now appears correctly.</li>
 	<li>Icon Tasklist: Resolved the inability to pin GNOME Twitch via the Icon Tasklist.</li>
 	<li>Tray Icons: By syncing natray with the upstream gnome-panel, icons are spaced correctly.</li>
 	<li>Places Applet: Added support for encrypted volumes and remote (S/FTP, SMB) shares, and clicking on S/FTP bookmarks now open them in the default file manager.</li>
</ul>
<h5 id="raven">Raven</h5>
Removed the initial network connection notification to avoid spamming the user on startup.
<h5 id="budgie-window-manager">Budgie Window Manager</h5>
Resolved a crash in <code>budgie-wm</code> that would occur when the current locale is deleted.
<h3 id="credits">Credits</h3>
<em>The informational content has been derived from the Solus Project's Budgie Desktop original release notes located here: <a href="https://solus-project.com/2017/04/18/solus-releases-iso-snapshot-20170418-0/">https://solus-project.com/2017/04/18/solus-releases-iso-snapshot-20170418-0/</a>.</em>

<strong>Special thanks to the Solus Project who had put a reward in place (500 EUR) to encourage a community contribution and push the Alt-Tab switcher through!</strong>
<h3 id="how-to-update-to-budgie-desktop-v-10-3">How to Update to Budgie Desktop V 10.3</h3>
<h5 id="16-04-and-16-10-budgie-remix-">16.04 and 16.10 (budgie-remix)</h5>
You simply will need to update using the traditional mechanisms such as the <strong>Software</strong>application, or running the following command:
<pre><code>sudo apt-get upgrade
</code></pre>
<h5 id="17-04-ubuntu-budgie-">17.04 (Ubuntu Budgie)</h5>
You will first need to enable the <strong>backports</strong> PPA before you will have the 10.3 update made available to you.
<ul>
 	<li>open the <code>budgie-welcome</code> application</li>
 	<li>go to <strong>recommendations</strong></li>
 	<li>select the option to <strong>enable the "Backports" repository</strong>.</li>
</ul>
At this point, you can then update using the traditional mechanisms such as the <strong>Software</strong>application, or running the following command:
<pre><code>sudo apt-get update &amp;&amp; sudo apt-get upgrade</code></pre>