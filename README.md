<img src="github/images/app-icon.png" height="128" align="right"></img>

# Picture-in-Picture-for-Youtube

<p align="right">
    <img align="left" src="https://shields.io/badge/version-v2.6.2-blue">
    <a href="#donate"><img src="https://shields.io/badge/💲-Support_the_Project-2ea043"></a>
</p>

### Chrome extension

❗ Attention! After changing the plugin settings, reload the YouTube page. ❗

<img src="github/images/image.png"></img></br>
<img width="320px" src="github/images/speed.png">

## Animations:
<details>
  <summary></summary>
  
  Animation 1:</br>
  ![Alt Text](github/images/animation1.gif)</br>
  Animation 2:</br>
  ![Alt Text](github/images/animation2.gif)</br>
  Animation 3:</br>
  ![Alt Text](github/images/animation3.gif)
</details>

## Overview:
<details>
  <summary></summary>
  <p align="center">
    <img src="github/images/Light.png" width="400px">
    <img src="github/images/Dark.png" width="400px">
    </br>
    <img src="github/images/hide_icons.png" width="800px">
    </br>
     <img src="github/images/other_settings.png" width="400px"></br>
     <img src="github/images/hotkeys.png" width="400px"></br>
  </p>  
</details>


## Installation:

### <img width="18px" src="https://www.svgrepo.com/show/452180/chrome.svg"> [Chrome Web Store](https://chrome.google.com/webstore/detail/picture-in-picture-for-yo/choemllnhinpmdednemjdpbaolkpnhck)

### Chrome (dev):
  1. Download latest **[Release](https://github.com/SuperZombi/Picture-in-Picture-for-Youtube/releases)**.
  2. Unpack the ```src``` folder to a convenient location.
  3. ```⋮``` > "Additional tools" > "Extensions".
  4. Turn on "Developer Mode".
  5. Press "Load unpacked extension".
  6. Select the path to the ```src``` folder.

### <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Tampermonkey_logo.svg" width="18px"> Tampermonkey:
1. Install **[Tampermonkey](https://www.tampermonkey.net/)**.
2. Install **[Script](https://raw.githubusercontent.com/SuperZombi/Picture-in-Picture-for-Youtube/main/pip.user.js)**.


## How to open Settings:
<details>
  <summary></summary>
  
  ❗ Don't forget to click the `Save` button. ❗
  
  ![Alt Text](github/images/img1.png)</br>
  ![Alt Text](github/images/img2.png)
</details>


## List of changes:
  #### 2.6.2:
   * 🔴 `Shorts` Remove Video Downloading (YouTube policy).

  #### 2.6.1:
   * 🟢 `Shorts` Hide «Remix» in Shorts.
   * 🟢 `Shorts` Hide Channel Avatar in Shorts.
   * 🟡 Fixed «Hide button labels».

  ### 2.6.0:
   * 🟢 `Shorts` Video Downloading

<br/>
<details>
  <summary>Other</summary>

  #### 2.5.4:
   * `Shorts` Fixed interface due to YouTube update.

  #### 2.5.3:
   * `Shorts` Fixed ads skipping.

  #### 2.5.2:
   * `Shorts` Fix Ignoring shortcuts when the search bar is active.

  #### 2.5.1:
   * `Shorts` Fixed «Watch on TV».

  ### 2.5.0:
   * 🟢 Hide «Watch on TV» button.
   * 🟢 `Shorts` Ads Skip.
   * 🟡 `Shorts` Fixed fullscreen video controls.
   * 🔴 `Shorts` ShowTimeline is deprecated.

  #### 2.4.11:
   * `Shorts` Fullscreen and speedometer icons are no longer draggable.

  #### 2.4.10:
   * `Shorts` Fixed a bug with the inability to rewind the progress bar.

  #### 2.4.9:
   * `Shorts` Fixed a bug that caused the plugin to not work.

  #### 2.4.8:
   * `Shorts` Fixed a bug when AutoNext not worked.

  #### 2.4.7:
   * `Shorts` Fixed a bug when shortcuts worked if you wrote in the search bar or comments.
   * `Shorts` Added a new shortcut on spacebar - Play/Pause (This key is currently assigned by YouTube the following video)

  #### 2.4.6:
   * Fixed bug with Speedometer not displaying on click

  #### 2.4.5:
   * Autoplay next video in shorts 

  ##### 2.4.4.1:
   * Support for different youtube versions

  #### 2.4.4:
   * Return of some old functions and bug fixes

  #### 2.4.3:
   * Updated with the new visual changes of YouTube

  ##### 2.4.2.1:
   * Maximum volume bug fixed

  #### 2.4.2:
   * Bug fixes

  #### 2.4.1:
   * Speedometer bug fixes

  ### 2.4:
   * Timeline and controls in Shorts.
   * Hotkeys for rewind and Fullscreen in Shorts.
    * <details><summary>Maximum volume.</summary>
      By default, YouTube makes sound audio normalization, and volume of the video actually turns out to be in the range from 0.75 to 0.85 (Even if the player is set to 100%)</details>
   * <details><summary>«Open in YouTube» in Shorts.</summary>
      Opens the current video in the standard YouTube player in a new tab.</details>
   * Redesigned settings engine. [dev]
   * Optimization, User Experience improvement and Bug fixes.
   * (Hold `ctrl` to reset extension settings)

  ### 2.3:
  * Added a function to hide the <code>Download</code> button.
  * <details><summary>Added a function to hide labels for buttons.</summary><img src="github/images/hideButtonLabels.png"></details>
  
  ### 2.2:
  * Added speed control for Shorts.
  * Added full screen mode for Shorts.
  
  ### 2.1:
  * Added a function to hide the <code>Thanks</code> button.
  * Added a function to hide the <code>Sponsor</code> button.
  
  #### 2.0.1:
  * Ukranian localization.

  ### 2.0:
  * Extension moved to manifest version 3.
  
  #### 1.6.1:
  * Bug fix.

  ### 1.6:
  * Russian localization.
  
  #### 1.5.1:
  * Hiding the Clips button is now more stable.

  ### 1.5:
  * <details><summary>Added a function to hide the <code>Create Clip</code> button.</summary><img src="github/images/clip-youtube.png"></details>
  
  #### 1.4.1:
  * Added animation pause in settings, when `Change Pip Icon` is disabled.
  
  ### 1.4:
  * Added new animation.
  * Added hover animation.
  * Dark Theme in Settings.
  * Preview animations in Settings.
  
  ### 1.3:
  * The plugin is adapted for the new YouTube interface.
  * Added animation (enable it in the settings)

  ### 1.2:
  * Fixed a bug where the button did not appear. (Previously, it was necessary to reload the page)

  ### 1.1:
  * The button is hidden in full screen mode.
  * Changed the icon of the button during the active "Picture in Picture" mode.
  * Now you can make the choice to change the custom button or not.

  ### 1.0:
  * The "Picture in Picture" button is now displayed.
  * The button is changed to a custom one.
  
</details>

<hr>

#### 💲Donate

<table>
  <tr>
    <td>
       <img width="18px" src="https://www.google.com/s2/favicons?domain=https://donatello.to&sz=256">
    </td>
    <td>
      <a href="https://donatello.to/super_zombi">Donatello</a>
    </td>
  </tr>
  <tr>
    <td>
       <img width="18px" src="https://www.google.com/s2/favicons?domain=https://www.donationalerts.com&sz=256">
    </td>
    <td>
      <a href="https://www.donationalerts.com/r/super_zombi">Donation Alerts</a>
    </td>
  </tr>
</table>
