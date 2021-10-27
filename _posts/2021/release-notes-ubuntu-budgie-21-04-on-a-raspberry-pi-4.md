---
ID: 2215
post_title: 'Release notes &#8211; Ubuntu Budgie 21.04 on a Raspberry Pi 4'
post_name: >
  release-notes-ubuntu-budgie-21-04-on-a-raspberry-pi-4
author: Nikola
post_date: 2021-03-21 12:43:07
layout: post
link: >
  https://ubuntubudgie.org/2021/03/release-notes-ubuntu-budgie-21-04-on-a-raspberry-pi-4/
published: true
tags: [ ]
categories:
  - Other
---
<p>[caption id="attachment_2070" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bd3eaa62.png" alt="Systeminfo" width="744" height="436" class="size-medium wp-image-2070" /> Systeminfo[/caption]</p>
<h1>Ubuntu Budgie v21.04 Raspberry Pi 4 Release: 22nd April , 2021</h1>
<p><strong>Beta 1</strong></p>
<p>This is our very first Raspberry Pi image of Ubuntu Budgie.  Team member Sam Lane has been actively creating this and we as a team hope you enjoy his efforts and ideas.</p>
<p>In these release notes the areas covered are:</p>
<ul>
<li>Budgie ARM Configuration Tool</li>
<li>Raspberry Pi Remote Options</li>
<li>FindMyPi</li>
<li>Known Issues</li>
<li>Where to download Ubuntu Budgie</li>
</ul>
<h2>Summary</h2>
<p>Ubuntu Budgie is the sum of many hundreds of developers working together.  </p>
<p>21.04 is a large release in itself and we'll describe the desktop release in separate release notes.</p>
<p>Here we describe what we have done for Ubuntu Budgie on a Raspberry Pi.</p>
<p>We recommend this image for a <strong>Raspberry Pi 4 &amp; 400 with 4/8Gb Ram 32Gb SD Card</strong>. Whilst the image can be installed on older variants we do not recommend it.  Best use other more suited images for these lower powered Pi's.  The image can be installed on a connected SSD.</p>
<p>The team recommends using <strong>KMS</strong> graphics for direct access (attached displays) and <strong>FKMS</strong> for remote access</p>
<h2>Budgie ARM &amp; Pi Configuration Tool</h2>
<p>Central to Ubuntu Budgie on a Pi 4 is our ARM &amp; Pi Configuration Tool.  This provides key customisation capabilities for the unique aspects of Pi usage.</p>
<ul>
<li>Compact and Mini Layouts – these layouts will optimize the font sizes and menus to allow a full Ubuntu Budgie experience on low resolution screens.</li>
</ul>
<p>[caption id="attachment_2060" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bd65cd31.png" alt="Compact" width="744" height="436" class="size-medium wp-image-2060" /> Compact[/caption]</p>
<p>[caption id="attachment_2065" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bd8c2239.png" alt="Mini Layout" width="744" height="436" class="size-medium wp-image-2065" /> Mini Layout[/caption]</p>
<ul>
<li>Overclocking - easily switch between 1.5GHz, 1.8GHz, and 2.0GHz CPU speeds.  Clock speed and over_voltage will be adjusted automatically (reboot required)</li>
</ul>
<p>[caption id="attachment_2068" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bdb2c047.png" alt="Overclock3" width="744" height="436" class="size-medium wp-image-2068" /> Overclock3[/caption]</p>
<ul>
<li>
<p>CPU temp monitor - shows the current temperature, color coded green, yellow, and red to warn of overheating and throttling</p>
<p>[caption id="attachment_2066" align="alignnone" width="318"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bdc7f502.png" alt="Overclock" width="318" height="242" class="size-medium wp-image-2066" /> Overclock[/caption]</p>
</li>
</ul>
<p>[caption id="attachment_2067" align="alignnone" width="318"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690bddd6284.png" alt="Overclock2" width="318" height="242" class="size-medium wp-image-2067" /> Overclock2[/caption]</p>
<ul>
<li>Change Pi video modes - select between FKMS (default), KMS (recommended and continually developed), and legacy (llvmpipe) video modes</li>
</ul>
<p>[caption id="attachment_2061" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be03fcf3.png" alt="Display Modes" width="744" height="436" class="size-medium wp-image-2061" /> Display Modes[/caption]</p>
<ul>
<li>GPU memory adjustment - while typically not needed, you can select between the default 128MB, 256MB or 512MB GPU memory options.</li>
</ul>
<p>[caption id="attachment_2062" align="alignnone" width="318"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be1956d9.png" alt="Display Options" width="318" height="242" class="size-medium wp-image-2062" /> Display Options[/caption]</p>
<h2>Raspberry Pi Remote Options</h2>
<ul>
<li>SSH and VNC - easily enable VNC screen sharing and SSH to access your Pi via gnome-remote-desktop </li>
<li>XRDP service - XRDP can be installed and properly set up to allow remote access.  Please note, the same user account cannot be logged in remotely and locally simultaneously, however different user accounts can be</li>
</ul>
<p>[caption id="attachment_2069" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be409cac.png" alt="Remote" width="744" height="496" class="size-medium wp-image-2069" /> Remote[/caption]</p>
<p>[caption id="attachment_2071" align="alignnone" width="744"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be679fb6.png" alt="Vnc" width="744" height="418" class="size-medium wp-image-2071" /> Vnc[/caption]</p>
<ul>
<li>Remote tab will display the Pi’s current IP address to provide easier access</li>
</ul>
<h2>FindMyPi</h2>
<ul>
<li>FindMyPi - using the configuration app on a machine other than a Raspberry Pi will scan the current network and show a list of IP addresses for Pis detected.  Click the &quot;Enable nmap&quot; button to install the scanning tool <code>nmap</code>.  You do not need the Arm &amp; Pi configuration app running on the Pi 4 if using nmap.</li>
</ul>
<p>[caption id="attachment_2063" align="alignnone" width="493"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be7d21d6.png" alt="Findmypi" width="493" height="277" class="size-medium wp-image-2063" /> Findmypi[/caption]</p>
<p>Look for this in your Menu via the regular 21.04 desktop image (it is preinstalled).</p>
<ul>
<li>For locations or networks where nmap may not be legally used to scan a network (e.g. certain workplaces/government locations), the Configuration Tool  running on a Pi can enable a fallback UDP server to allow locating Pis on the network.  Thus do use the &quot;Start on login&quot; option if using this fallback option to ensure the Pi can be found on boot.</li>
</ul>
<p>[caption id="attachment_2064" align="alignnone" width="425"]<img src="https://ubuntubudgie.org/wp-content/uploads/2021/04/post-2215-60690be92ca08.png" alt="Findpiserver" width="425" height="256" class="size-medium wp-image-2064" /> Findpiserver[/caption]</p>
<h2>Current known issues</h2>
<ul>
<li>
<p>the graphics are slightly glitchy under the default fkms. We recommend using the KMS mode for direct access displays and fkms for remote access.</p>
</li>
<li>
<p>nmap via the budgie-arm-environment app installed on Intel/AMD does not work on first install. Do run an update first and reboot.</p>
</li>
</ul>
<h2>Downloads</h2>
<p>Our image is located on SourceForge - options to install are found on our Downloads page</p>