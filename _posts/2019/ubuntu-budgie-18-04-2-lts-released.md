---
ID: 1128
post_title: Ubuntu Budgie 18.04.2 LTS Released!
post_name: ubuntu-budgie-18-04-2-lts-released
author: Nikola
post_date: 2019-02-15 16:45:23
layout: post
link: >
  https://ubuntubudgie.org/2019/02/15/ubuntu-budgie-18-04-2-lts-released/
published: true
tags: [ ]
categories:
  - News
---
<p>We are pleased to announce the <strong>release</strong> of the next version of our distro, our second LTS point release as an official flavor of the <strong>Ubuntu</strong> family.</p>
<p>The LTS version is supported for 3 years while the regular releases are supported for 9 months. </p>
<!--more-->
<p>The new release rolls-up various fixes and optimizations the Ubuntu Budgie team have released since the 18.04.1 release in July last year:</p>
<ol>
<li>
<p>The kernel and graphics found in 18.10 have been backported to 18.04.  This is part of the Hardware-Enablement-Stack release and 18.04 users who install the HWE (see later) are automatically upgraded to the next kernel and graphics stack approx 3-4 months after a release.</p>
</li>
<li>
<p>Maintenance release of budgie desktop:</p>
<ul>
<li>Ensure show-desktop applet toggles correctly after showing a tooltip</li>
<li>Allow cancel from polkit windows</li>
<li>Make notifications consistent size; stop overlarge notification windows</li>
<li>Ensure notifications remain visible if mouse is hovering over theme</li>
<li>Support user based themes in legacy ~/.themes folder</li>
<li>Enable autohiding when using multiple budgie panels</li>
<li>deduplicate All category Menu</li>
</ul>
</li>
<li>
<p>Maintenance release of our Pocillo theme with fixes to resolve:</p>
<ul>
<li>Raven Styling</li>
<li>Vertical dock highlighting</li>
<li>GtkColorChooser border truncation</li>
<li>GEdit search styling</li>
<li>Eog zoom truncation</li>
<li>Ensure Titlebar button are always circular</li>
<li>Nemo not themed</li>
</ul>
</li>
<li>
<p>budgie welcome updates including new applets Desktop Weather &amp; Network Manager</p>
</li>
<li>
<p>Lots more translation updates to budgie welcome</p>
</li>
</ol>
<p>For the more adventurous we have also made available the budgie desktop version found in our 18.10 release.  For more details please read the <a href="https://ubuntubudgie.org/blog/2018/09/27/18-10-release-notes">release notes</a></p>
<p>We also inherits hundreds of stability, bug-fixes and optimizations made to the underlying Ubuntu repositories.  Many thanks to all the volunteers, Debian &amp; Ubuntu maintainers and Canonical employees who have done such a sterling job packaging the changes that many more developers from all over the world have resolved.  The power of FOSS that we are all proud to be part of.</p>
<p>You can read more about 18.04 via our <a href="https://ubuntubudgie.org/blog/2018/03/08/18-04-release-notes">release notes</a>.  Upgrade instructions from 16.04 budgie-remix is included.  Please have a read of these since there is an extra step you need to do post-upgrade.</p>
<p><a href="https://ubuntubudgie.org/downloads"><strong>Download</strong> links</a> and installation guide are provided.  As always - do check the md5sum hash value of the downloaded ISO - this really does help you get on with a flying start for your install.</p>
<p>Users of Ubuntu 16.04 are offered an automatic upgrade to
18.04 via Update Manager.  For further information about upgrading,
see:</p>
<ul>
<li><a href="https://help.ubuntu.com/community/BionicUpgrades">https://help.ubuntu.com/community/BionicUpgrades</a></li>
</ul>
<p>As always, upgrades to the latest version of Ubuntu are entirely free of
charge.</p>
<p>We recommend that all users read the the Ubuntu 18.04 release notes, which
document caveats and workarounds for known issues affecting all flavours including Ubuntu Budgie.  They are available at:</p>
<ul>
<li><a href="https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes">https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes</a></li>
</ul>
<h2>HWE</h2>
<p>The Ubuntu LTS enablement (also called HWE or Hardware Enablement) stacks provide newer kernel and X support for existing Ubuntu LTS releases. These enablement stacks can be installed manually but are also available when installing with Ubuntu LTS point release media such as 18.04.2</p>
<p>We would stress - if everything is working as you expect, there is no need to change to the HWE.  If you need newer graphics for applications and games, or if you are moving your installation to newer hardware then you may wish to consider uplifting your installation to the HWE.</p>
<p>To install the HWE (only applies to everyone who installed at 18.04 and 18.04.1):</p>
<pre><code>sudo apt-get install --install-recommends linux-generic-hwe-18.04 xserver-xorg-hwe-18.04</code></pre>
<hr />
<p>If you have a question, or if you think you may have found a bug but
aren't sure, you can try asking in any of the following places:</p>
<ul>
<li><code>#ubuntu on irc.freenode.net</code></li>
<li>Ubuntu Budgie's support <a href="https://discourse.ubuntubudgie.org/">forum</a> is always open and ready to help you.</li>
<li><a href="http://lists.ubuntu.com/mailman/listinfo/ubuntu-users">http://lists.ubuntu.com/mailman/listinfo/ubuntu-users</a></li>
<li><a href="http://www.ubuntuforums.org">http://www.ubuntuforums.org</a></li>
<li><a href="http://askubuntu.com">http://askubuntu.com</a></li>
</ul>
<h2>Help Shape Ubuntu</h2>
<p>If you would like to help shape Ubuntu, take a look at the list of ways
you can participate at:</p>
<ul>
<li><a href="http://www.ubuntu.com/community/get-involved">http://www.ubuntu.com/community/get-involved</a></li>
</ul>
<p><strong>Thank you all</strong> for your continued support - <strong>spread the news!</strong></p>
<p>David, Ubuntu Budgie Project Leader.</p>
<p>P.S. here is a nice video to show off 18.04 Ubuntu Budgie. Enjoy!</p>
<iframe src="https://www.youtube.com/embed/atBXTU0Sv5w?controls=1" allowfullscreen="" width="690" height="390"></iframe>