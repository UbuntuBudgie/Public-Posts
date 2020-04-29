---
ID: 847
post_title: 'Developer Diary &#8211; October'
post_name: developer-diary-october
author: Nikola
post_date: 2017-11-01 13:30:34
layout: post
link: >
  https://ubuntubudgie.org/2017/11/01/developer-diary-october/
published: true
tags: [ ]
categories:
  - News
---
<div class="uk-htmleditor-navbar">
<div class="uk-htmleditor-navbar-flip">

<span style="color: #232324; font-family: Montserrat, 'Helvetica Neue', Arial, sans-serif; font-size: 2.618em;">Showcase</span>

</div>
</div>
<div class="uk-htmleditor-content">
<div class="uk-htmleditor-preview">

This month's activities have been dominated by the final push and release of our <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=33">second release </a> as an official member of the Ubuntu family.

It has been an interesting six months - and this month was no exception; more on that later.

We are very grateful to our small yet growing band of <a href="https://ubuntubudgie.org/admin/blog/post/@page/5">Patreons and Paypal contributors this month </a>. Everyone who does help out this well makes this project viable for now and the long-term.

So much so, we have met another of our goals, and it is our pleasure to make a sizeable donation to our friends at the Solus Project. Without their stewardship of the budgie desktop, we just wouldn't have this distro.
<h1 id="new-default-look">New Default look</h1>
Nikola is spending the time to research a possible revised out-of-the-box-experience for Ubuntu Budgie 18.04. A revised GTK-theme and looking closely at the various software centres as well.

If you have any experience with developing and maintaining themes and would like to get involved <strong>please raise your hand</strong>and get in touch.

Our default desktop artwork that we use for media, login screen, desktop and lock-screen is also being assessed. You can directly change our outward look - enter our <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=34">faces competition </a>
<h1 id="development">Development</h1>
The seven additional applets which were developed by team member Jacob in the past few months have come to the point of their first release. Without exception, they are technically "ready to see the world". We are currently polishing integration in the Budgie desktop.

Time for a short introduction.
<ol>
 	<li>ShowTime - a digital clock on your desktop*Options include setting position, colours of both date &amp; time.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/clock.png" alt="Clock" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>WindowPreviewsPressing <kbd>Alt</kbd> + <kbd>Tab</kbd> will call an expose-like overview of windows on the current workspace. Pressing <kbd>Super</kbd> + <kbd>Tab</kbd> will show an overview of windows of the currently active application. At the bottom of the previews window, small bullet-buttons show the number of windows on all workspaces. Clicking either one will bring up an overview of the referring workspace.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/prv.png" alt="Prv" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>HotCornersHot corners are available from the applet's menu. No need to restart the applet just set your commands and activate the corner. If none of the corners is enabled, the applet automatically hibernates.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/hotcorners.png" alt="Hotcorners" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>WallpaperSwitcherAutomatically Switch wallpaper on switching workspaces. Just set the wallpaper like you are used to, and the wallpaper will be remembered for that workspace.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/wswitcher.png" alt="Wswitcher" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>QuickNoteThe most straightforward way to make a quick note. Comes with a ten-step undo/redo option.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/quicknote.png" alt="Quicknote" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>WindowMoverAdding this applet will add the following functionality to your desktop:
<ul>
 	<li>Drag a window to the bottom of your screen, and a quick "move to" -bar appears. Click any of the buttons or press the corresponding key on your keyboard, and the window will move to the targeted workspace.</li>
 	<li>Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>w</kbd> will call the bar, acting on the currently active window.</li>
 	<li>Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>s</kbd> calls a similar bar (now with small arrows) to make the desktop jump to any of the other workspaces.</li>
</ul>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/mover.png" alt="Mover" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
 	<li>WorkspaceOverviewAccess all of your windows, spread over all workspaces, from one single applet. Select any of the windows to move to the corresponding workspace and raise the window. To turn the applet into a simple workspace applet, just make your choice from the applet's <em>Mode</em> menu.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/11/workspaceoverview.png" alt="Workspaceoverview" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div></li>
</ol>
So how where can I install these you may be thinking. Well we will be asking for intrepid testers through our <a href="https://gitter.im/ubuntubudgie/community">gitter community channel </a>. So come on in a join the fun :)

Thanks to community member Zbigniew Stępniewski for helping out with some changes to budgie welcome.
<h1 id="random">Random</h1>
Both Jacob and myself spent an exhausting weekend at the beginning of the month to investigate various instability issues due to multiple non-budgie updates released after beta 2.

These issues were eventually traced by the Linux community to one tiny bit of code released as part of the GNOME 3.26 point release. Phew!

A big shout out and thanks to Jane Atkinson (irihapeti) for helping out and most importantly adding results to the QA ISO website as part of the 17.10 release candidate testing.

Dustin has been looking at how the team who are from all over the world can best keep in touch with you - our community - and each other. Part of this has been evaluating different chat solutions as well as bridging options. Things are still up in the air due to nothign feelign quite "right". One of our previous bridging issues has been solved by a bug we filed upstream, so that may change our direction.

Dustin has also been evaluating how snaps will fit into 18.04 (and beyond), researching potential things such as applets as snaps, and most likely the welcome app being snapped up!

<hr />

David (project lead)

</div>
</div>