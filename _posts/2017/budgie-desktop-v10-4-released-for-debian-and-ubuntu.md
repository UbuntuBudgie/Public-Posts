---
ID: 806
post_title: >
  Budgie Desktop v10.4 released for Debian
  and Ubuntu
post_name: >
  budgie-desktop-v10-4-released-for-debian-and-ubuntu
author: Nikola
post_date: 2017-08-28 23:25:01
layout: post
link: >
  https://ubuntubudgie.org/2017/08/28/budgie-desktop-v10-4-released-for-debian-and-ubuntu/
published: true
tags: [ ]
categories:
  - News
---
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/08/budgie-desktop-v10.4-release-small.jpg" alt="Budgie desktop v10.4 release small" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
Its my pleasure to announce the release of the latest Budgie Desktop for both Debian and Ubuntu users.

The release is for:
<ol>
 	<li>Debian unstable</li>
 	<li>Debian Buster (will be sync'd next week)</li>
 	<li>Ubuntu 17.10</li>
 	<li>Ubuntu Budgie 17.10</li>
 	<li>Ubuntu 17.04</li>
 	<li>Ubuntu Budgie 17.04</li>
 	<li>Ubuntu 16.04.3</li>
 	<li>budgie-remix 16.04.3</li>
</ol>
At the same time, I have refreshed all builds made available by the fantastic indie budgie developers
<ul>
 	<li>budgie brightness control applet</li>
 	<li>budgie calendar applet</li>
 	<li>budgie haste applet</li>
 	<li>budgie indicator applet</li>
 	<li>budgie system monitor applet</li>
 	<li>budgie pixel saver applet (17.04/17.10)</li>
 	<li>budgie weather applet (17.04/17.10)</li>
 	<li>budgie global menu (17.04/17.10)</li>
</ul>
Budgie Welcome has been updated with all the latest translations; all the above applets can be installed from Budgie Welcome.

... and you want more?! EvopPop and EvoPop Azure themes are also now available to be installed - just open up Budgie Welcome - default settings

Upstream, the <a href="https://budgie-desktop.org/2017/08/18/release-of-budgie-10-4/">Budgie Desktop organisation </a> has published a really great guide of all whats new - so check it out now!

<strong>Notes</strong>:

Budgie Pixel Saver applet no longer works on Ubuntu 16.04. If you want to have a look and fix it up then get in touch.

Budgie Desktop v10.4 introduces theming changes - specifically themes for the new popovers you see when clicking on applets. All 3rd party budgie themes will need updates to make the popovers work correctly. So again - please contact us and help out fixing these themes - especially for those Ubuntu 16.04 themes.

All of you need to dig in please - upstream themers have moved on to newer GTK versions, so you all need to <strong>help and fix for your fellow 16.04 users</strong>.

<strong>How to install</strong>:

For Debian unstable and Debian Buster:
<pre><code>sudo apt install budgie-desktop
</code></pre>
For budgie-remix 16.04 users, just update &amp; reboot as normal.

For 16.04 Ubuntu users:
<pre><code>sudo add-apt-repository ppa:budgie-remix/ppa
sudo apt update
sudo apt install budgie-desktop
</code></pre>
For 17.04 Ubuntu users:
<pre><code>sudo add-apt-repository ppa:ubuntubudgie/backports
sudo apt update
sudo apt install budgie-desktop
</code></pre>
For 17.04 Ubuntu Budgie users:
<ul>
 	<li>Open budgie-welcome - Recommendations. Enable "Backports". Then, update and reboot as normal</li>
</ul>
For 17.10 Ubuntu users:
<pre><code>sudo apt install budgie-desktop
</code></pre>
For 17.10 Ubuntu Budgie users ... just update and reboot!

David (project lead)