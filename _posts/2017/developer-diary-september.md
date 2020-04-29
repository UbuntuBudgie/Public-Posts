---
ID: 828
post_title: 'Developer Diary &#8211; September'
post_name: developer-diary-september
author: Nikola
post_date: 2017-10-01 13:18:15
layout: post
link: >
  https://ubuntubudgie.org/2017/10/01/developer-diary-september/
published: true
tags: [ ]
categories:
  - News
---
<h1 id="our-fabulous-community">Our fabulous community</h1>
Thank-you to everyone who has donated this month. We now have raised enough to cover:
<ul>
 	<li>URL renewal costs for budgie-remix.org and ubuntubudgie.org for the next three years</li>
 	<li>Put aside server costs for the next three years if our sponsorship with DigitalOcean is not renewed.</li>
</ul>
Our <a href="https://ubuntubudgie.org/admin/blog/post/@page/5">donation page </a> has been revamped with additional goals to enable the team to help you the community. Please check it out.
<h1 id="17-10-beta-2">17.10 Beta 2</h1>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/10/beta2.jpg" alt="Drawing" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
Again - many thanks to those who have helped testing our final beta release for 17.10.

Have a look at a nice <a href="https://www.youtube.com/watch?v=itFPmr991dM&amp;feature=youtu.be">beta 2 video </a> to see 17.10 in all its glory :)
<h1 id="bug-fixing-galore">Bug-Fixing Galore</h1>
Ubuntu 17.10 entered its "freeze" phase at the beginning of September. What this means is that new features are discouraged, and developers instead are encouraged to concentrate on bug-fixing.
<ol>
 	<li>The ISO installer was missing budgie wallpaper. I fixed that... and at the same time, the installer dialog became Arc themed. Simply Gorgeous</li>
 	<li>At beta 1 I had put in a workaround to enable budgie-welcome to work without crashing due to a new WebKit library. Shortly after, upstream had advised what the real fix should be and the fix was applied as required. The budgie-welcome package now operates much more smoothly. The new WebKit library is also due to be backported to 17.04 to fix additional security issues. Extra time was spent backporting the Artful fixes to the Zesty version of budgie-welcome to ensure it does not crash.</li>
 	<li>More fixes were added to our desktop settings package budgie-desktop-environment. Tilix no longer throws the irritating VTE error if launched quickly after login. Also, I managed to squeeze in a Dark theming for Tilix (looks much better now!) and when highlighting terminal text, the text is now automatically copied to the clipboard.</li>
 	<li>Our translators for budgie-welcome have been very busy. So these updated translations have been pulled in and updated in the repositories. Budgie-welcome is now truly multilingual!</li>
</ol>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/10/Selection_033.jpg" alt="Drawing" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<ol>
 	<li>Caught a very irritating issue with Slick Greeter for those that use multiple desktop environments - slick greeter insisted in showing every desktop environment with a budgie logo. I pushed a pull-request to Linux Mint to get this fixed.</li>
 	<li>In budgie-desktop 10.4 the budgie-desktop-settings application and the Plank application were not playing ball - there was a "budgie panel" icon that could not be removed from Plank. A simple fix was pushed to the upstream budgie-desktop project, and then uploaded to Ubuntu. This will also be backported to 17.04 and 16.04 in due course.</li>
 	<li>gthumb was displaying a rather irritating menu addition to the headerbar breaking the look and feel to the app. Luckily the great gthumb devs upstream had fixed this, so I backported this fix for all Ubuntu users.</li>
 	<li>Finally I have managed to track down why some app indicators were displaying huge icons. Bad bad apps - so we have basically ignored the sizing they wanted and sized it per the appindicator specification.</li>
</ol>
<h1 id="new-development">New Development</h1>
In the past weeks, Jacob has been working hard on a collection of Budgie-extras; a new set of handy applets to add to the default desktop. A sneak preview of two of the most recent developments includes the upcoming Window Previews:
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/10/wpreviews.png" alt="Wpreviews" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
and a small, extremely easy and simple note applet; Quick Note:
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/10/quicknote.png" alt="Quicknote" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
Other applets that were mentioned before, the Hot Corners, the Window Mover (move windows quickly among workspaces), the Workspace Overview (menu) and the Wallpaper Switcher are nearly finished.

To be continued!
<h1 id="communications-infrastructure">Communications Infrastructure</h1>
While we are busy with the upcoming 17.10 release, we have a few background things brewing that Dustin is working on. One of these such things has been how we would like to interact with the community in our real-time chat, as well as our internal communications.

Today, the Ubuntu Budgie project leverages the Gitter platform for both internal and community communications. While the platform as a whole is quite decent, one reoccurring issue our team members are having is related to notifications. Gitter (with good intentions) intercepts all mobile notifications when you have a desktop client running. While this at its heart is appealing on some level, if you are in the scenario where you have multiple computers (any of which could have the Gitter client running) - at times this can be bad.

We are a distributed team (as nearly all OSS projects are), working from multiple time zones. Communication can happen at all hours of the day. Compound that with community members potentially needing assistance - missing notifications at times can be undesired. So with that transpiring, we are evaluating moving to a new platform. While we do not have many requirements, every bullet point is important to us.
<h3 id="requirements">Requirements</h3>
<ul>
 	<li>Must have a reliable method for our community members to join without issue.</li>
 	<li>Would prefer a web client to be available for the community members to keep the barrier to entry low.</li>
 	<li>Must support integrations - specifically GitHub, and Trello. But would like extensibility for future projects we are working on (bots, etc.).</li>
 	<li>Mobile and Desktop applications</li>
 	<li>Excellent notification system!!!!</li>
</ul>
<h3 id="considerations">Considerations</h3>
In no particular order, we have been looking at:
<ul>
 	<li>Discord</li>
 	<li>Slack</li>
 	<li>Mattermost</li>
 	<li>Hipchat</li>
 	<li>Riot</li>
 	<li>Rocketchat</li>
 	<li>Telegram</li>
 	<li>IRC</li>
</ul>
Since Gitter is OSS, one may ask why we don't submit a PR, etc. The reason is due to other initiatives, having a smaller team and time constraints. We are trying to stay focused on the project at hand (Ubuntu Budgie).
<h3 id="feedback">Feedback</h3>
What would you as the community like to see? Do you feel like we have overlooked any potential solutions? While we cannot please everyone, we are curious to see what your feedback would reflect.

<hr />

David (project lead)