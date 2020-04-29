---
ID: 768
post_title: >
  How To Enable Global Menus in Ubuntu
  Budgie
post_name: >
  how-to-enable-global-menus-in-ubuntu-budgie
author: Nikola
post_date: 2017-06-04 21:32:37
layout: post
link: >
  https://ubuntubudgie.org/2017/06/04/how-to-enable-global-menus-in-ubuntu-budgie/
published: true
tags: [ ]
categories:
  - News
---
The intent of this post is to provide a short and to the point how to enable the global menu in Ubuntu Budgie. <strong>Please keep in mind that this is in testing</strong>. So the general caveats apply when installing test software. Things have been smooth for me at this point.

So on to it.
<h3 id="add-the-specific-global-menu-test-ppa-">Add the specific global menu test PPA.</h3>
<pre><code>sudo add-apt-repository ppa:ubuntubudgie-dev/global-menu-test
sudo apt-get update
</code></pre>
<h3 id="install-the-required-packages-">Install the required packages.</h3>
<pre><code>sudo apt install budgie-pixel-saver-applet budgie-appmenu-applet
</code></pre>
<ul>
 	<li>Logout and then back in to see the new applets in Raven.</li>
</ul>
<h3 id="add-the-new-applets-to-your-panel">Add the new applets to your panel</h3>
<ul>
 	<li>Open Raven (<em>Box with arrow in the upper right corner of your panel</em>)</li>
 	<li>Press the gear Icon (<em>top right corner of Raven</em>)</li>
 	<li>Select Panel tab (<em>top right corner</em>)</li>
 	<li>Press the <code>+</code> next to the <em>Applets</em> title</li>
 	<li>Add the <code>show-menus-from-windws</code> &amp; <code>pixel saver</code> applets</li>
 	<li>Adjust the location of the applets to your desired spot. Usually be defaukt they are added centered. Not so ideal forthis use case. I usually add both just to the right of the spacer applet next to the menu.</li>
</ul>
The the the that's all folks!