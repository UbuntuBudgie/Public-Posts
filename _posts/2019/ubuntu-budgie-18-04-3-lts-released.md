---
ID: 1439
post_title: UBUNTU BUDGIE 18.04.3 LTS RELEASED!
post_name: ubuntu-budgie-18-04-3-lts-released
author: Nikola
post_date: 2019-08-07 13:12:43
layout: post
link: >
  https://ubuntubudgie.org/2019/08/07/ubuntu-budgie-18-04-3-lts-released/
published: true
tags: [ ]
categories:
  - News
---
We are pleased to announce the <strong>release</strong> of the next version of our distro, our third LTS point release as an official flavor of the <strong>Ubuntu</strong> family.

The LTS version is supported for 3 years while the regular releases are supported for 9 months.

<!--more-->

The new release rolls-up various fixes and optimizations the Ubuntu Budgie team have released since the 18.04.2 release in February:
<ol>
 	<li>The kernel and graphics found in 19.04 have been backported to 18.04. This is part of the Hardware-Enablement-Stack release and 18.04 users who install the HWE (see later) are automatically upgraded to the next kernel and graphics stack approx 3-4 months after an interim release. So 18.04.2 users will see the new packages appearing now.</li>
 	<li>budgie welcome updates including new applet take-a-break</li>
 	<li>All 19.04 applets and fixes have been backported.</li>
 	<li>Lots more translation updates to budgie welcome</li>
 	<li>Updated:
<ul>
 	<li>budgie-screenshot-applet</li>
 	<li>budgie-weather-applet</li>
 	<li>budgie-sys-monitor-applet</li>
 	<li>budgie-cpufreq-applet</li>
 	<li>budgie-advanced-brightness-controller</li>
 	<li>Revised Pocillo theme</li>
</ul>
</li>
</ol>
For the more adventurous we have the 10.5 budgie desktop in our backports repository. Just enable via budgie-welcome - recommendations.

We also inherits hundreds of stability, bug-fixes and optimizations made to the underlying Ubuntu repositories. Many thanks to all the volunteers, Debian &amp; Ubuntu maintainers and Canonical employees who have done such a sterling job packaging the changes that many more developers from all over the world have resolved. The power of FOSS that we are all proud to be part of.

You can read more about 18.04 via our <a href="https://ubuntubudgie.org/blog/2018/03/08/18-04-release-notes">release notes</a>. Upgrade instructions from 16.04 budgie-remix is included. Please have a read of these since there is an extra step you need to do post-upgrade.

<a href="https://ubuntubudgie.org/downloads/"><strong>Download</strong> links</a> and installation guide are provided. As always - do check the md5sum hash value of the downloaded ISO - this really does help you get on with a flying start for your install.

Users of Ubuntu 16.04 are offered an automatic upgrade to 18.04 via Update Manager. For further information about upgrading, see:
<ul>
 	<li><a href="https://help.ubuntu.com/community/BionicUpgrades">https://help.ubuntu.com/community/BionicUpgrades</a></li>
</ul>
As always, upgrades to the latest version of Ubuntu are entirely free of charge.

We recommend that all users read the the Ubuntu 18.04 release notes, which document caveats and workarounds for known issues affecting all flavours including Ubuntu Budgie. They are available at:
<ul>
 	<li><a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes">https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes</a></li>
</ul>
<h2 id="hwe">HWE</h2>
The Ubuntu LTS enablement (also called HWE or Hardware Enablement) stacks provide newer kernel and X support for existing Ubuntu LTS releases. These enablement stacks can be installed manually but are also available when installing with Ubuntu LTS point release media such as 18.04.3

We would stress - if everything is working as you expect, there is no need to change to the HWE. If you need newer graphics for applications and games, or if you are moving your installation to newer hardware then you may wish to consider uplifting your installation to the HWE.

To install the HWE (only applies to everyone who installed at 18.04 and 18.04.1):
<pre><code class="hljs sql">sudo apt-get <span class="hljs-operator"><span class="hljs-keyword">install</span> <span class="hljs-comment">--install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04</span>
</span></code></pre>
<h2 id="32bit-iso">32BIT ISO</h2>
32 bit support is something we have committed to support for the duration of the LTS period. The vast majority of computers today will run the 64bit ISO just fine - so please use that first.

32bit HWE intel graphics <a href="https://bugs.launchpad.net/ubuntu/+source/linux-hwe/+bug/1838698">may cause issues</a> with either booting or after installation.

<hr />

If you have a question, or if you think you may have found a bug but aren't sure, you can try asking in any of the following places:
<ul>
 	<li><code>#ubuntu on irc.freenode.net</code></li>
 	<li>Ubuntu Budgie's support <a href="https://discourse.ubuntubudgie.org/">forum</a> is always open and ready to help you.</li>
 	<li><a href="http://lists.ubuntu.com/mailman/listinfo/ubuntu-users">http://lists.ubuntu.com/mailman/listinfo/ubuntu-users</a></li>
 	<li><a href="http://www.ubuntuforums.org">http://www.ubuntuforums.org</a></li>
 	<li><a href="http://askubuntu.com">http://askubuntu.com</a></li>
</ul>
<h2 id="help-shape-ubuntu">HELP SHAPE UBUNTU</h2>
If you would like to help shape Ubuntu, take a look at the list of ways you can participate at:
<ul>
 	<li><a href="http://www.ubuntu.com/community/get-involved">http://www.ubuntu.com/community/get-involved</a></li>
</ul>
<strong>Thank you all</strong> for your continued support - <strong>spread the news!</strong>

David, Ubuntu Budgie Project Leader.