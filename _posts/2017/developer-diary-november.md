---
ID: 862
post_title: 'Developer Diary &#8211; November'
post_name: developer-diary-november
author: Nikola
post_date: 2017-12-01 13:33:24
layout: post
link: >
  https://ubuntubudgie.org/2017/12/01/developer-diary-november/
published: true
tags: [ ]
categories:
  - News
---
<h1 id="showcase">Showcase</h1>
<h1 id="development">Development</h1>
A new release of the applet budgie-brightness-control was made available by its developer. A few bug fixes was made, and the orientation of the slider was made horizontal. This is now available in backports to be installed.

I have created a git release of budgie-pixel-saver-applet from the same developer as budgie-brightness-control. This fixes the window button theming as well as respecting left/right window control settings from Budgie Settings.

A bug fix release has been uploaded to both Debian Buster and Ubuntu Bionic. This allows the software to actually build against the latest software in Bionic (meson).

Ubuntu packagers have updated Bionic with the version latest Tilix software.

Two more applets were added to the series of applets. A total of nine additional applets were developed since last summer. All applets are available in Budgie Welcome. The two latest additions are:

<strong>Keyboard AutoSwitch</strong>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/12/keyboardautoswitch.png" alt="Keyboardautoswitch" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
Together with the existing Keyboard Layout Indicator as a companion (available in Budgie Desktop Settings), Keyboard AutoSwitch is a flexible and easy way to set exceptions (applications) to the default keyboard layout. Simply set a different layout with the application's window in front, and the layout is remembered for that specific application.

<strong>CountDown</strong>
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/12/countdown.png" alt="Countdown" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
CountDown is a desktop timer, with a number of options to be notified when the countdown is finished. Optionally, the applet can temporarily overrule suspend, to prevent the computer from stop counting.

<strong>Update of HotCorners</strong>

Hotcorners saw its first major changes last week. A dropdown list with predefined, often used options was added to the menu, for convenient usage. Clicking the checkbox will now clear the entry to be able to set customized commands.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/12/menu.png" alt="Menu" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>
<strong>Coming soon: ClockWorks</strong>

Nearly finished, available soon, is the ClockWorks Applet, a world clock applet. User can add, remove or rename clocks instantly.
<div class="uk-overlay uk-overlay-hover uk-visible-hover">

<img src="https://ubuntubudgie.org/wp-content/uploads/2017/12/ClockWorks.png" alt="ClockWorks" />
<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>
</div>