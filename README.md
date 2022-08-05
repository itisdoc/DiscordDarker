# DiscordDarker
A custom CSS injector skin for Discord.

# Recommended Settings:
Appearance: Dark mode (to look better)

# UPDATE
The upcoming new version of [CustomCord](https://github.com/trisn0w/customcord/releases/latest) supports DiscordDarker, and will have it pre-installed.

# Usage
Enter this code into the WebTools console, and you get DiscordDarker!
```js
var link=document.createElement("style");link.id="d-darker";link.innerText="span, .userInfoBody-1zgAd0, .clamped-2ZePhX, .text-md-normal-304U3g,.fieldList-in8WkP > span, .bodyNormal-250CQK, .contentImagesUserPopout-Kqai8z, .details-2, .defaultColor-24IHKz,.meNoNickname-1TjuLc, .username-3JLfHz {color: black;}.membersWrap-3NUR2t .hiddenMembers-8kpYM0, .scroller-3X7KbA, .members-3WRCEx, .flex-2S1XBF, .content-2hZxGK .container-3PVapX, .content-FDHp32, .container-3PVapX, .content-FDHp32, .formNotice-2nS8ey, .container-YkUktl, .authedApp-8q3NA9, .ontentColumn-1C7as, .app-3xd6d0, .contentRegion-3HkfJJ, .contentColumn-1C7as6, .contentColumnDefault-3eyv5o, .contentRegionScroller-2_GT_N {position: relative;background-color: #090909;}.userInfo-regn9W, .accountProfileCard-lbN7n-, .body-2wLx-E, .bodyInnerWrapper-2bQs1k, .footer-3naVBw, .headerTop-3GPUSF {background-color: white;}.background-3d_SjE, .fieldList-in8WkP {background-color: #efefef;}.editor-H2NA06>span, .markup-eYLPri {color: white;}.scrollerContent-2SW0kQ, .container-2sjPya, .markup-eYLPri, .messageContent-2t3eCI, .headerText-1qIDDT, .subtext-2HDqJ7, .customStatus-1UAQAK, .membersGroup-2eiWxl, .membersGroup-2eiWxl, .container-q97qHp {color: white;}.member-2gU6Ar {margin-right: 10px;}.form-3gdLxP, .webkit-QgSAqd {margin-top: 10px;}.animatedContainer-2laTjx {z-index: 2;width: 234px;}.container-2o3qEW, .containerDefault-YUSmu3, .containerDefault-3TQ5YN, .sectionDivider-189lqb, .content-2a4AW9, .container-ZMc96U, .title-31SJ6t, .sidebarRegion-1VBisG, .sidebar-nqHbhN, .title-31SJ6t, .container-ZMc96U, .form-3gdLxP, .chatContent-3KubbW, .form-3gdLxP:before, .member-2gU6Ar, .members-3WRCEx {background-color: #202020;}.userInfoBody-1zgAd0, .clamped-2ZePhX, .message-372Ods, em {text-align: center;color: black;}",document.getElementsByTagName("head")[0].appendChild(link);alert('Successfully installed!');
```

**NOTE: Don't like it? Just refresh the page and it'll be gone!**<br>
**ANOTHER NOTE: Does the image below not look like what the CSS made? Try doing this instead:**
```js
var link=document.createElement("style");link.innerText=`/* everything in dark.css here */`,document.getElementsByTagName("head")[0].appendChild(link);alert('Successfully installed!');
```

### Screenshot
On discord's dark mode</br>
![screenshot1](https://i.ibb.co/VwBQnFW/image.png)

On discord's light mode + dark sidebar
![ltmd-screenshot](https://i.ibb.co/TwmkTzj/image.png)

# JS
If you want other features that only work with JS, copy and paste the [Custom JS](custom.js) we made.

### All DiscordDarker Settings
`home-button-logo` => `HTMLElement` || DEFAULT: `HTMLElement`
