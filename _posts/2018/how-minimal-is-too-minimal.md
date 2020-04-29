---
ID: 908
post_title: How minimal is too minimal?
post_name: how-minimal-is-too-minimal
author: Nikola
post_date: 2018-05-06 14:14:04
layout: post
link: >
  https://ubuntubudgie.org/2018/05/06/how-minimal-is-too-minimal/
published: true
tags: [ ]
categories:
  - News
---
So, with the release of Bionic Beaver (18.04) came a new feature for a "minimal" install. This minimal feature is something that many people have provided excellent feedback on and it appears to be a loved feature. I'm one of those people. But with that, comes to the opinionated concept of how minimal is "too" minimal. Is this just a reduction of apps? Does this include knocking down configuration to the defaults of the upstream packages? Somewhere in the middle? Each person you ask will have a different answer. We had gone more so on the extreme side to allow people to layer up as they saw fit, and many people love this approach. But it is not for everyone.

The unfortunate thing is that the installer in its current form does not allow for a middle tier.

And, the fortunate thing is that it is pretty darn simple to add a few packages to get the "Ubuntu Budgie" feel and configuration. i.e. panel layout/default keyboard shortcuts such as print-screen, tilix quake mode, dynamic workspaces, window-shuffler, etc.

TLDR;
<ul>
 	<li>Install with the minimal install option.</li>
 	<li>Open a terminal and run:</li>
</ul>
<em>sudo apt update &amp;&amp; sudo apt install budgie-desktop-environment gnome-screenshot &amp;&amp; nohup budgie-panel --reset --replace &amp;</em>
<ul>
 	<li>Reboot to activate all the goodness.</li>
</ul>
If you come across anything that you feel needs to be added to this set of commands, we invite you over to <a href="https://discourse.ubuntubudgie.org/">the forum </a> to discuss!

I'm sure there will need to be some refinement to these instructions. :-)