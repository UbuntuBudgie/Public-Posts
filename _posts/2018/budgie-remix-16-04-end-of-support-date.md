---
ID: 911
post_title: 'budgie-remix 16.04 &#8211; end of support date'
post_name: budgie-remix-16-04-end-of-support-date
author: Nikola
post_date: 2018-05-22 14:16:09
layout: post
link: >
  https://ubuntubudgie.org/2018/05/22/budgie-remix-16-04-end-of-support-date/
published: true
tags: [ ]
categories:
  - News
---
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2018/05/budgie-remix.png" alt="Budgie remix" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
With a heavy heart the Ubuntu Budgie team today announce the end-of-support for our 16.04 budgie-remix edition from the beginning of August 2018.

We would like to thank the almost quarter of a million downloaders since we first launched budgie-remix back in April 2016 for at least having a look at our fledgling distro.

We didnt really expect to support 16.04 for this length of time - we were not an official distro back then but enough people contacted us to convince us to continue rather than the usual 9 months Ubuntu distro support cadence.

With a rolling release mechanism for all thing budgie-desktop - the GUI, applets, budgie-welcome, themes etc, the latest 16.04.4 is very much different from the initial 16.04 release.
<h2 id="but-i-want-to-continue-">but I want to continue...</h2>
Don't worry! 16.04 Budgie Remix will not self destruct. The underlying pinnings of Ubuntu will keep you updated. Many components share the Ubuntu GNOME support arrangements and will receive updates until May/June 2019. The key linux kernel is updated through Ubuntu itself for 5 years.

However our strong recommendation is that you move to 18.04.1 as soon as it is practical for you.
<h2 id="moving-forward">moving forward</h2>
18.04.1 will be automatically announced through a prompt for all 16.04 users mid July. Just upgrade when prompted and finally run the "Budgie Complete Installation" menu option to finish.

You'll then be on the full 18.04.1 release.

Some of the packages that were installed as part of the budgie-remix backports PPA will be uninstalled as part of the upgrade. Use budgie-welcome to reinstall anything that is removed.

We also recommend you reset the panel to benefit from the revised Pocillo theme and applets:
<pre><code>nohup budgie-panel --reset --replace &amp;
</code></pre>
Please refer to the community wiki for more help:

<a href="https://help.ubuntu.com/community/Upgrades">https://help.ubuntu.com/community/Upgrades</a>

Also, Ask Ubuntu has an excellent guide to help you upgrade:

<a href="http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu">http://askubuntu.com/questions/110477/how-do-i-upgrade-to-a-newer-version-of-ubuntu</a>

As an alternative you might want to backup your important 16.04 data and do a fresh install - good way for a thorough spring clean!