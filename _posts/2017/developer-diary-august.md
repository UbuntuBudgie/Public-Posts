---
ID: 811
post_title: 'Developer Diary &#8211; August'
post_name: developer-diary-august
author: Nikola
post_date: 2017-09-03 23:26:38
layout: post
link: >
  https://ubuntubudgie.org/2017/09/03/developer-diary-august/
published: true
tags: [ ]
categories:
  - News
---
<h1 id="shoutout">Shoutout</h1>
Well this month has been monumentally busy - in summary
<ul>
 	<li><a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=28">budgie-remix 16.04.3 </a> was released</li>
 	<li><a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=30">budgie-desktop 10.4 </a> was released</li>
 	<li><a href="https://wiki.ubuntu.com/ArtfulAardvark/Beta1/UbuntuBudgie">Ubuntu Budgie 17.10 beta 1 </a> was released</li>
 	<li>launch of our first <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=29">Ubuntu Budgie branded </a> desktops and laptops</li>
 	<li>a whole host of bug-fixes...</li>
 	<li>and we've found sometime to do some really nice development stuff</li>
</ul>
We need a holiday ... no chance!
<h1 id="budgie-remix-16-04-3-is-released">budgie-remix 16.04.3 is released</h1>
First up this month was our point release of budgie-remix. This is our wrap up of our 16.04 release with the latest hardware-enablement stack, updated budgie-desktop 10.3.1 and all updates in the last 6 months.

I finally solved two important bugs with the installer. Now you can install in any language without the installer crashing. Secondly, the correctly locale that you have chosen on installed is shown by default on the subsequent logon screen - previously it always defaulted to English - US. Yay!

Grab the download iso's from our <a href="https://ubuntubudgie.org/admin/blog/post/@page/3">Download </a> page.

Read more about this <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=28">here </a>.
<h1 id="budgie-desktop-10-4-was-released">budgie-desktop 10.4 was released</h1>
This was the big one!

Upstream really pushed the boat on this release. It is now officially the LTS (long-term support) release allowing a much needed breathing space for the next version of budgie desktop (v11) to be researched and developed properly without massive time pressures.

I have packaged this for Debian unstable, Debian Buster, persuaded Ubuntu to accept it for 17.10 in time for beta 1, backported to 17.04 ... and worked with upstream on lots of issues for a successful 16.04 backport.

On top of that I have packaged up lots of the latest changes in the 3rd party budgie-applet land and themes ... and landed a brand-new version of budgie welcome for 16.04/17.04 and 17.10.

Anyway - <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=30">read more </a> and enjoy!
<h1 id="17-10-ubuntu-budgie-beta-1-released">17.10 Ubuntu Budgie Beta 1 released</h1>
I spent a considerable amount of time updating and pushing the latest changes into the official repositories, together with testing and reporting various issues with beta 1.

This is the sort of thing all distro's do but is often hidden from end-users. Vital work I'm sure you agree. I hope you can all help out now downloading and testing. If you can diagnose (and even fix) issues then this will be of great help.

The development team really does need a <strong>new permanent team member</strong> (or two!) - chief tester. I'll follow this blog with the kind of person I'm looking for. So please consider pushing yourself forward. We really do need you!
<h1 id="ubuntu-budgie-special-edition-laptops-and-desktops">Ubuntu Budgie special edition laptops and desktops</h1>
What? You haven't heard?!
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/jupiter-small.jpg" alt="Jupiter small" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
Absolutely instrumental in driving this has been Vincenzo. So all the kudos and plaudits are well deserved. Thanks Vincenzo.

We have a brilliant new partner - Nimbusoft - and together we are happy to present three really excellent and special laptops and desktops for your delectation.

Have a read of our <a href="https://ubuntubudgie.org/admin/blog/post/@blog/id?id=29">release notice </a> - and browse our <a href="https://nimbusoft.com/ubuntu-budgie/">Nimbusoft shop </a>.
<h1 id="fixes">Fixes</h1>
Budgie Desktop now has a global menu applet that is in the 17.10 repositories. I have worked with upstream to resolve freezing issues when the applet is active. This patch has been submitted to Ubuntu Mate (who sponsor this package) and accepted for 17.10. I have backported this for 17.04 users as well.

This is now in budgie-welcome as well so that this applet - with all the other applets for Budgie Desktop is easily installable.

It was reported that a few budgie-remix users did not instantly see new installed packages appearing in the menu. I have backported a zesty patch for xenial users. This will be now resolved.

Debian started its migration from GTK+3.22 to GTK+3.24. Unfortunately, not all went as planned and Debian Buster was left with a real mix and match. This broke budgie desktop and users were unable to login. Within a day I managed to push a bug-fix patch and ran around one weekend finding a sponsor to-do an emergency fix.
<h1 id="new-development">New Development</h1>
I have packaged a promising new applet from an indie developer - budgie-weather-applet. It looks and works very nicely. Still early days. The requisite changes are now in budgie-welcome. Unfortunately, the applet does not compile under 16.04. So here is an opportunity - if you want to get it working, give us a shout and I'll try to give you a helping hand.

"Where Ubuntu Budgie leads... Ubuntu says ...'that is a good idea'!"

My Rhythmbox make-over plugin called 'alternative-toolbar' which budgie-remix and Ubuntu Budgie have used in all their versions has now been pulled into Ubuntu itself. I've taken to fix up some usability issues (podcasts/radio stations) as well and this is now in 17.10.

After struggling for more than a year I finally solved why my budgie version of indicator-sysmonitor was crashing. A one line code change! Anyway - enjoy, another applet now available in budgie-welcome.

Speaking of new development. New team member Jacob has been exploring new optional applets for you to investigate and add to your budgie desktop if you think they are useful.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/hotcorners.jpg" alt="Hotcorners" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
(hotcorner support)
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/workspace-overview.jpg" alt="Workspace overview" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
(an alternative workspace overview/switcher)
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/wallpaperworkspace.png" alt="Wallpaperworkspace" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
(different wallpaper per workspace)
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/workspace-switcher.jpg" alt="Workspace switcher" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
(on demand workspace switcher)

Just a few pictures - more about these later when we have created a simple installer and dusted off a few usability issues.

... and new today - secret squirrel stuff - shush!

Window previews ...
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/09/window20preview.jpg" alt="Window%20preview" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
(very early code - lets see if we can crack the intracasies around all of these)
<h1 id="random-stuff">Random Stuff</h1>
Our website ubuntubudgie.org was up for renewal in September.

Thanks to your donations, we have renewed the domain for a further 3 years. We'll look to renewing budgie-remix.org similarly as well later on in the year before its renewal date reaches early in the new year.

<hr />

David (project lead)