---
ID: 690
post_title: >
  HOW TO UPGRADE FROM BUDGIE-REMIX 16.04
  TO 16.10
post_name: >
  how-to-upgrade-from-budgie-remix-16-04-to-16-10
author: Nikola
post_date: 2016-10-08 20:53:54
layout: post
link: >
  https://ubuntubudgie.org/2016/10/08/how-to-upgrade-from-budgie-remix-16-04-to-16-10/
published: true
tags: [ ]
categories:
  - News
---
<h4><img class="alignnone size-full wp-image-1101" src="https://budgieremix.files.wordpress.com/2016/10/how_to_upgrade.jpg?w=662" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/how_to_upgrade.jpg?w=662 662w, https://budgieremix.files.wordpress.com/2016/10/how_to_upgrade.jpg?w=150 150w, https://budgieremix.files.wordpress.com/2016/10/how_to_upgrade.jpg 720w" alt="how_to_upgrade" /></h4>
<h4><strong>HOW DO I UPGRADE TO BUDGIE-REMIX 16.10 ?</strong></h4>
Good question – our recommended upgrade method is below – please follow this if you intend to upgrade to budgie-remix 16.10 from budgie-remix 16.04.1.
<h4>BEST METHOD</h4>
<ul>
 	<li>clean install – backup what you need to a USB external drive and restore later.</li>
</ul>
<h4>ALTERNATIVELY UPGRADE AS FOLLOWS:</h4>
<strong>IMPORTANT:</strong>
<ul>
 	<li>backup – backup – backup – we cannot stress this enough – Use <a href="http://askubuntu.com/questions/19901/how-to-make-a-disk-image-and-restore-from-it-later" target="_blank" rel="noopener">this Q&amp;A</a> to help</li>
 	<li>make sure you are fully up-to-date – <strong>don’t miss this step</strong></li>
</ul>
<pre>sudo apt update
sudo apt full-upgrade</pre>
<ul>
 	<li>Plugin to a wired connection not wireless</li>
</ul>
<h4>STEP 1</h4>
<ul>
 	<li>Launch gnome-software:</li>
</ul>
<img class="aligncenter size-full wp-image-1091" src="https://budgieremix.files.wordpress.com/2016/10/s5.png?w=662&amp;h=191" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/s5.png?w=662&amp;h=191 662w, https://budgieremix.files.wordpress.com/2016/10/s5.png?w=150&amp;h=43 150w, https://budgieremix.files.wordpress.com/2016/10/s5.png?w=720&amp;h=208 720w, https://budgieremix.files.wordpress.com/2016/10/s5.png?w=768&amp;h=222 768w, https://budgieremix.files.wordpress.com/2016/10/s5.png 882w" alt="s5" width="662" height="191" />
<ul>
 	<li>Choose Software &amp; Updates</li>
</ul>
<img class="aligncenter size-full wp-image-1090" src="https://budgieremix.files.wordpress.com/2016/10/s4.png?w=662&amp;h=315" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/s4.png?w=662&amp;h=315 662w, https://budgieremix.files.wordpress.com/2016/10/s4.png?w=150&amp;h=71 150w, https://budgieremix.files.wordpress.com/2016/10/s4.png?w=720&amp;h=342 720w, https://budgieremix.files.wordpress.com/2016/10/s4.png?w=768&amp;h=365 768w, https://budgieremix.files.wordpress.com/2016/10/s4.png 932w" alt="s4" width="662" height="315" />
<ul>
 	<li>in the update tab change “notify me of a new ubuntu version”  to the value “For any new version”</li>
</ul>
<ul>
 	<li>close gnome-software</li>
</ul>
<h4>STEP 2</h4>
<ul>
 	<li>CTRL+ALT+T to open a terminal and type the following:</li>
</ul>
<pre>sudo do-release-upgrade</pre>
<ul>
 	<li>press ENTER when requested</li>
</ul>
<img class="aligncenter size-full wp-image-1089" src="https://budgieremix.files.wordpress.com/2016/10/s3.png?w=662&amp;h=426" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/s3.png?w=662&amp;h=426 662w, https://budgieremix.files.wordpress.com/2016/10/s3.png?w=150&amp;h=96 150w, https://budgieremix.files.wordpress.com/2016/10/s3.png?w=720&amp;h=463 720w, https://budgieremix.files.wordpress.com/2016/10/s3.png 767w" alt="s3" width="662" height="426" />
<ul>
 	<li>press y when requested to download all updates</li>
</ul>
<img class="aligncenter size-full wp-image-1088" src="https://budgieremix.files.wordpress.com/2016/10/s2.png?w=662&amp;h=426" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/s2.png?w=662&amp;h=426 662w, https://budgieremix.files.wordpress.com/2016/10/s2.png?w=150&amp;h=96 150w, https://budgieremix.files.wordpress.com/2016/10/s2.png?w=720&amp;h=463 720w, https://budgieremix.files.wordpress.com/2016/10/s2.png 767w" alt="s2" width="662" height="426" />
<ul>
 	<li>press y to remove obsolete packages</li>
</ul>
<img class="aligncenter size-full wp-image-1087" src="https://budgieremix.files.wordpress.com/2016/10/s1.png?w=662&amp;h=426" sizes="(max-width: 662px) 100vw, 662px" srcset="https://budgieremix.files.wordpress.com/2016/10/s1.png?w=662&amp;h=426 662w, https://budgieremix.files.wordpress.com/2016/10/s1.png?w=150&amp;h=96 150w, https://budgieremix.files.wordpress.com/2016/10/s1.png?w=720&amp;h=463 720w, https://budgieremix.files.wordpress.com/2016/10/s1.png 767w" alt="s1" width="662" height="426" />

<strong>IMPORTANT</strong>: press n to complete the upgrade i.e. <strong>you DONT want to reboot</strong>.
<pre>sudo add-apt-repository ppa:budgie-remix/ppa
sudo apt update
sudo apt full-upgrade
sudo reboot --</pre>
If you are using the plank dock with Arc-Theme – start menu – plank preferences
Change the plank theme to GTK+ and the new recommended icon size is 32px