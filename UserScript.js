// ==UserScript==
// @name         Picture-in-Picture for Youtube
// @version      2.1
// @description  Add Picture-in-Picture button active.
// @author       Super Zombi
// @match        https://www.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA0LTI4VDE0OjM5OjU1KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0wNlQxMTo0OTo0NCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0wNlQxMTo0OTo0NCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjhmM2M5YmEtZjdiYS03ZDRjLTkwNmEtNmRiN2EwMDJiOTJmIiB4bXBNTTpEb2N1bWVudElEPSJ4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
// @homepageURL  https://github.com/SuperZombi/Picture-in-Picture-for-Youtube
// @supportURL   https://github.com/SuperZombi/Picture-in-Picture-for-Youtube/issues
// @updateURL    https://raw.githubusercontent.com/SuperZombi/Picture-in-Picture-for-Youtube/main/UserScript.js
// @downloadURL  https://raw.githubusercontent.com/SuperZombi/Picture-in-Picture-for-Youtube/main/UserScript.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// ==/UserScript==

const locale = {
  'en': {
    "settings": "Settings",
    "changePip": "Change PiP Icon",
    "animation": "Animation",
    "noAnimation": "No animation",
    "otherSet": "Other settings",
    "hideClips": "Hide «Clips» Button",
    "hideThanks": "Hide «Thanks» Button",
    "hideSponsor": "Hide «Sponsor» Button",
    "saveBut": "Save",
    "closeBut": "Close"
  },
  'ru': {
    "settings": "Настройки",
    "changePip": "Изменить иконку PiP",
    "animation": "Анимация",
    "noAnimation": "Без анимации",
    "otherSet": "Другие настройки",
    "hideClips": "Скрыть кнопку «Клипы»",
    "hideThanks": "Скрыть кнопку «Спасибо»",
    "hideSponsor": "Скрыть кнопку «Спонсировать»",
    "saveBut": "Сохранить",
    "closeBut": "Закрыть"
  },
  'uk': {
    "settings": "Налаштування",
    "changePip": "Змінити іконку PiP",
    "animation": "Анімація",
    "noAnimation": "Без анімації",
    "otherSet": "Інші налаштування",
    "hideClips": "Сховати кнопку «Кліпи»",
    "hideThanks": "Сховати кнопку «Дякую»",
    "hideSponsor": "Сховати кнопку «Спонсорувати»",
    "saveBut": "Зберегти",
    "closeBut": "Закрити"
  }
}

function get_message(name, default_="en"){
  var userLang = (navigator.language || navigator.userLanguage).toLowerCase(); 
  if (Object.keys(locale).includes(userLang) && Object.keys(locale[userLang]).includes(name)){
    return locale[userLang][name]
  }
  return locale[default_][name]
}

GM_registerMenuCommand(get_message("settings"), ()=>{
  let div = document.createElement("div")
  div.style.position = 'fixed'
  div.style.zIndex = 10000
  div.style.top = 0
  div.style.right = 0
  div.style.borderRadius = "0 0 0 12px";
  div.style.background = "white";
  div.style.filter = "drop-shadow(0px 0px 2px black)";
  div.style.fontSize = "14pt"
  div.style.minWidth = "280px"

  if (document.documentElement.getAttribute('dark')){
    div.style.backgroundColor = "#181818";
    div.style.color = "white";
    div.style.filter = "drop-shadow(0px 0px 2px white)";
  }

  let close = document.createElement("div")
  close.title = get_message("closeBut")
  close.style.textAlign = "right"
  close.style.cursor = "pointer"
  close.style.margin = "10px"
  close.innerHTML = "<img height='20px' src='data:image/png;base64,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'>"
  close.onclick = _ => {
    div.remove()
  }
  div.appendChild(close)

  let content = document.createElement("div")
  content.style.textAlign = "center"
  content.style.padding = "20px"
  content.style.paddingTop = 0
  content.innerHTML = `
    <h3>${get_message('settings')}</h3>

    <hr style="border-top: 1px solid #dfe1e8; margin: 0.5em 0;">

    <label>
      <input class="pip_settings" type="checkbox" name="changeIcon" checked>
      <a>${get_message('changePip')}</a>
    </label>

    <hr style="border-top: 1px solid #dfe1e8; margin: 0.5em 0;">

    <div>
      <p style="margin-top: 10px; margin-bottom: 10px; text-align: center;">${get_message('animation')}:</p>
      <label style="display:block; padding-bottom: 5px;">
        <input class="pip_settings" type="radio" value="default" name="animation" checked>
        <a>${get_message('noAnimation')}</a>
      </label>
      <label style="display:block;">
        <input class="pip_settings" type="radio" value="animation_1" name="animation">
        <a>${get_message('animation')} 1</a>
        <img height="30px" style="vertical-align: middle;" src="${images["A1.gif"]}">
      </label>
      <label style="display:block;">
        <input class="pip_settings" type="radio" value="animation_2" name="animation">
        <a>${get_message('animation')} 2</a>
        <img height="30px" style="vertical-align: middle;" src="${images["A2.gif"]}">
      </label>
      <label style="display:block;">
        <input class="pip_settings" type="radio" value="animation_3" name="animation">
        <a>${get_message('animation')} 3</a>
        <img height="30px" style="vertical-align: middle;" src="${images["A3.gif"]}">
      </label>
    </div>

    <hr style="border-top: 1px solid #dfe1e8; margin: 0.5em 0;">

    <details style="margin-top:10px; margin-bottom:10px; text-align: left; font-size: 12pt;">
      <summary style="text-align: center; cursor: pointer; user-select: none;">${get_message('otherSet')}</summary>
        <label style="display:block; margin-top:10px;">
          <input class="pip_settings" type="checkbox" name="hideClips">
          <a>${get_message('hideClips')}</a>
        </label>
        <label style="display:block; margin-top:8px;">
          <input class="pip_settings" type="checkbox" name="hideThanks">
          <a>${get_message('hideThanks')}</a>
        </label>

        <label style="display:block; margin-top:8px;">
          <input class="pip_settings" type="checkbox" name="hideSponsor">
          <a>${get_message('hideSponsor')}</a>
        </label>
    </details>
    <hr style="border-top: 1px solid #dfe1e8; margin: 0.5em 0;">
    <button name="save" style="font-size: 14pt; cursor: pointer; border: 5em; outline: none;
                              margin-top: 5px; padding: 0.5em 1.5em; border-radius: 65px;
                              background-image: linear-gradient(45deg, #4568dc, #b06ab3);
                              box-shadow: 1px 1px 10px grey; color: white;">
      ${get_message('saveBut')}</button>
    <p style="display: flex; align-items: center; justify-content: space-between; margin-top: 1em">
      <a style="display: flex; align-items: center;" href="https://github.com/SuperZombi/Picture-in-Picture-for-Youtube" target="_blank">
        <svg style="background: white; border-radius: 50px; padding: 1px;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span style="margin-left:5px; color: blue;">GitHub</span>
      </a>

      <img style="margin-top:2px;" src="https://shields.io/badge/version-v2.1-blue">
    </p>
  `
  div.appendChild(content)
  let keys = GM_listValues()
  keys.forEach(e=>{
    let els = div.querySelectorAll(`input[name=${e}]`)
    if (els.length > 1){
      let val = db_get(e)
      let el = Array.from(els).filter(e=>e.value == val)[0]
      el.checked = true
    }
    else{
      els[0].checked = db_get(e)
    }
  })

  let save = div.querySelector("button[name=save]")
  save.onclick = () => {
    let settings = {}
    let inputs = div.querySelectorAll("input.pip_settings")
    Array.from(inputs).forEach(e=>{
      if (e.type == "checkbox"){
        settings[e.name] = e.checked
      }
      else if (e.type == "radio" && e.checked){
        settings[e.name] = e.value
      }
    })
    db_save(settings)
    window.location.reload()
  }

  document.body.appendChild(div)
})

var oldHref = document.location.href;

main();
var bodyList = document.querySelector("body");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (oldHref != document.location.href) {
      oldHref = document.location.href;
      main();
    }
  });
});

var config = {childList: true, subtree: true};
observer.observe(bodyList, config);

function db_get(value, default_=undefined){
  let val = GM_getValue(value)
  if (val != undefined){
    return val
  }
  else{ return default_ }
}
function db_save(array){
  for (let el in array) {
    GM_setValue(el, array[el])
  }
}

function getVideoId(url) {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  if (pathname.startsWith("/clip")) {
    return document.querySelector("meta[itemprop='videoId']").content;
  } else {
    return urlObject.searchParams.get("v");
  }
}
function isVideoLoaded() {
  const videoId = getVideoId(window.location.href);
  return (
    document.querySelector(`ytd-watch-flexy[video-id='${videoId}']`) !== null ||
    // mobile: no video-id attribute
    document.querySelector('#player[loading="false"]:not([hidden])') !== null
  );
}
function getButtons() {
  //---   If Menu Element Is Displayed:   ---//
  if (document.getElementById("menu-container")?.offsetParent === null) {
    return document.querySelector("ytd-menu-renderer.ytd-watch-metadata > div");
    //---   If Menu Element Isnt Displayed:   ---//
  } else {
    return document
      .getElementById("menu-container")
      ?.querySelector("#top-level-buttons-computed");
  }
}


function hide_icon(target_svg){
  let timerId = setInterval(() => {
    if (getButtons()?.offsetParent && isVideoLoaded()) {
      var arr = document.querySelectorAll('#top-level-buttons-computed > ytd-button-renderer')
      for (let i = 0; i < arr.length; i++){
        if (target_svg == arr[i].getElementsByTagName('svg')[0].getElementsByTagName('path')[0].getAttribute('d')){
          arr[i].remove()
          break
        }
      }
      clearInterval(timerId)
    }
  }, 250);
}
function hide_button(id){
  let timerId = setInterval(() => {
    if (getButtons()?.offsetParent && isVideoLoaded()) {
      let el = document.getElementById(id)
      el.remove()
      clearInterval(timerId)
    }
  }, 250);
}


function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function main(){
  const clips_svg = "M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"
  const thanks_svg = "M16.5,3C19.02,3,21,5.19,21,7.99c0,3.7-3.28,6.94-8.25,11.86L12,20.59l-0.74-0.73l-0.04-0.04C6.27,14.92,3,11.69,3,7.99 C3,5.19,4.98,3,7.5,3c1.4,0,2.79,0.71,3.71,1.89L12,5.9l0.79-1.01C13.71,3.71,15.1,3,16.5,3 M16.5,2c-1.74,0-3.41,0.88-4.5,2.28 C10.91,2.88,9.24,2,7.5,2C4.42,2,2,4.64,2,7.99c0,4.12,3.4,7.48,8.55,12.58L12,22l1.45-1.44C18.6,15.47,22,12.11,22,7.99 C22,4.64,19.58,2,16.5,2L16.5,2z M11.33,10.86c0.2,0.14,0.53,0.26,1,0.36c0.47,0.1,0.86,0.22,1.18,0.35 c0.99,0.4,1.49,1.09,1.49,2.07c0,0.7-0.28,1.27-0.83,1.71c-0.33,0.26-0.73,0.43-1.17,0.54V17h-2v-1.16 c-0.18-0.05-0.37-0.1-0.53-0.19c-0.46-0.23-0.92-0.55-1.18-0.95C9.15,14.48,9.06,14.24,9,14h2c0.05,0.09,0.07,0.18,0.15,0.25 c0.23,0.19,0.54,0.29,0.92,0.29c0.36,0,0.63-0.07,0.82-0.22s0.28-0.35,0.28-0.59c0-0.25-0.11-0.45-0.34-0.6s-0.59-0.27-1.1-0.39 c-1.67-0.39-2.51-1.16-2.51-2.34c0-0.68,0.26-1.26,0.78-1.71c0.28-0.25,0.62-0.43,1-0.54V7h2v1.12c0.46,0.11,0.85,0.29,1.18,0.57 C14.59,9.05,14.9,9.48,15,10h-2c-0.04-0.09-0.1-0.17-0.16-0.24c-0.17-0.19-0.44-0.29-0.81-0.29c-0.32,0-0.56,0.08-0.74,0.24 c-0.17,0.16-0.26,0.36-0.26,0.6C11.03,10.53,11.13,10.72,11.33,10.86z"

  var array = document.getElementsByTagName('video');
  if (array.length > 0){
    if (youtube_parser(window.location.href)){
      if (db_get("hideClips", false)){
        hide_icon(clips_svg)
      }
      if (db_get("hideThanks", false)){
        hide_icon(thanks_svg)
      }
      if (db_get("hideSponsor", false)){
        hide_button("sponsor-button")
      }
    }

    var button = document.getElementsByClassName('ytp-pip-button')[0];
    button.style.display = 'inline-block';

    document.addEventListener('fullscreenchange', (event) => {
      if (document.fullscreenElement) {
        button.style.display = 'none';
      }
      else {
        button.style.display = 'inline-block';
      }
    });

    if (db_get("changeIcon", true)){
      var hover_animation = true;
      var animation = db_get("animation", "default")
      if (animation == "animation_1"){
        document.addEventListener('enterpictureinpicture', () => {
          document.getElementById('pip_custom_path').style.transform = "translate(2450px, 2100px) rotateY(180deg) rotateX(180deg)"
        });
        document.addEventListener('leavepictureinpicture', () => {
          document.getElementById('pip_custom_path').style.transform = ""
        });
      }
      else if (animation == "animation_2"){
        document.addEventListener('enterpictureinpicture', () => {
          document.getElementById('pip_custom_path').style.transform = "translateY(2100px) translateX(2450px) rotate(-180deg)"
        });
        document.addEventListener('leavepictureinpicture', () => {
          document.getElementById('pip_custom_path').style.transform = ""
        });
      }
      else if (animation == "animation_3"){
        document.addEventListener('enterpictureinpicture', () => {
          document.getElementById('pip_custom_path').style.opacity = 0
          setTimeout(_=>{
            document.getElementById('pip_custom_path').setAttribute('d', "M1645 1619 c-11 -6 -172 -163 -357 -348 l-338 -336 0 142 c0 137 -1 142 -26 172 -32 38 -80 49 -122 27 -17 -9 -36 -25 -42 -35 -14 -26 -14 -586 0 -612 24 -45 53 -49 333 -49 167 0 276 4 296 11 64 22 80 107 32 161 l-29 33 -148 5 -147 5 244 238 c134 131 290 287 347 347 95 102 102 113 102 151 0 75 -79 123 -145 88z");
            document.getElementById('pip_custom_path').style.opacity = 1
          }, 200)
        });
        document.addEventListener('leavepictureinpicture', () => {
          document.getElementById('pip_custom_path').style.opacity = 0
          setTimeout(_=>{
            document.getElementById('pip_custom_path').setAttribute('d', "M1348 1825 c-35 -19 -48 -44 -48 -90 0 -46 23 -81 62 -94 17 -6 88 -11 157 -11 l125 0 -342 -343 -342 -343 0 -51 c0 -45 4 -54 31 -77 22 -19 42 -26 72 -26 41 0 44 3 389 347 l348 348 0 -138 c0 -155 9 -186 59 -207 42 -17 95 -5 121 27 19 25 20 39 20 319 l0 293 -24 28 -24 28 -289 2 c-241 2 -292 0 -315 -12z");
            document.getElementById('pip_custom_path').style.opacity = 1
          }, 200)
        });
      }
      else{
        hover_animation = false;

        document.addEventListener('enterpictureinpicture', () => {
          var g = document.getElementById('pip_svg');
          g.innerHTML = "";

          var path1 = document.createElement('path');
          path1.setAttribute('d', "M1645 1619 c-11 -6 -172 -163 -357 -348 l-338 -336 0 142 c0 137 -1 142 -26 172 -32 38 -80 49 -122 27 -17 -9 -36 -25 -42 -35 -14 -26 -14 -586 0 -612 24 -45 53 -49 333 -49 167 0 276 4 296 11 64 22 80 107 32 161 l-29 33 -148 5 -147 5 244 238 c134 131 290 287 347 347 95 102 102 113 102 151 0 75 -79 123 -145 88z");
          var path2 = document.createElement('path');
          path2.setAttribute('d', "M26 1584 l-26 -27 0 -664 0 -664 25 -24 24 -25 836 0 837 0 29 29 29 29 0 307 c0 325 -3 350 -49 375 -35 18 -87 12 -120 -16 l-31 -26 0 -249 0 -249 -690 0 -690 0 0 515 0 515 411 0 411 0 29 29 c41 41 41 101 0 142 l-29 29 -485 0 -484 0 -27 -26z");
          
          g.appendChild(path1);
          g.appendChild(path2);

          g.innerHTML += "";
        });
        document.addEventListener('leavepictureinpicture', () => {
          var g = document.getElementById('pip_svg');
          g.innerHTML = "";

          var path1 = document.createElement('path');
          path1.setAttribute('d', "M1348 1825 c-35 -19 -48 -44 -48 -90 0 -46 23 -81 62 -94 17 -6 88 -11 157 -11 l125 0 -342 -343 -342 -343 0 -51 c0 -45 4 -54 31 -77 22 -19 42 -26 72 -26 41 0 44 3 389 347 l348 348 0 -138 c0 -155 9 -186 59 -207 42 -17 95 -5 121 27 19 25 20 39 20 319 l0 293 -24 28 -24 28 -289 2 c-241 2 -292 0 -315 -12z");
          var path2 = document.createElement('path');
          path2.setAttribute('d', "M26 1584 l-26 -27 0 -664 0 -664 25 -24 24 -25 836 0 837 0 29 29 29 29 0 307 c0 325 -3 350 -49 375 -35 18 -87 12 -120 -16 l-31 -26 0 -249 0 -249 -690 0 -690 0 0 515 0 515 411 0 411 0 29 29 c41 41 41 101 0 142 l-29 29 -485 0 -484 0 -27 -26z");
          
          g.appendChild(path1);
          g.appendChild(path2);

          g.innerHTML += "";
        });
      }

      button.style.transform = 'scale(0.9)';
      button.style.transition = '0.2s';

      if (hover_animation){
        button.onmouseover = function() {
          this.style.transform = "scale(0.95)"
        }
        button.onmouseleave = function() {
          this.style.transform = 'scale(0.9)'
        }
      }

      var svg = button.children[0];
      svg.innerHTML = "";
      
      svg.setAttribute('version', '1.0');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', "0 0 300.000000 300.000000");

      var g = document.createElement('g');
      g.setAttribute('transform', 'translate(60.000000,240.000000) scale(0.100000,-0.100000)');
      g.setAttribute('fill', '#fff');
      g.setAttribute('stroke', 'none');
      g.setAttribute('id', 'pip_svg');

      var path1 = document.createElement('path');
      path1.id = "pip_custom_path"
      path1.style.transformOrigin = 'center'
      path1.style.transition = "0.25s cubic-bezier(0, 0.5, 0.2, 1)"
      
      path1.setAttribute('d', "M1348 1825 c-35 -19 -48 -44 -48 -90 0 -46 23 -81 62 -94 17 -6 88 -11 157 -11 l125 0 -342 -343 -342 -343 0 -51 c0 -45 4 -54 31 -77 22 -19 42 -26 72 -26 41 0 44 3 389 347 l348 348 0 -138 c0 -155 9 -186 59 -207 42 -17 95 -5 121 27 19 25 20 39 20 319 l0 293 -24 28 -24 28 -289 2 c-241 2 -292 0 -315 -12z");
      var path2 = document.createElement('path');
      path2.setAttribute('d', "M26 1584 l-26 -27 0 -664 0 -664 25 -24 24 -25 836 0 837 0 29 29 29 29 0 307 c0 325 -3 350 -49 375 -35 18 -87 12 -120 -16 l-31 -26 0 -249 0 -249 -690 0 -690 0 0 515 0 515 411 0 411 0 29 29 c41 41 41 101 0 142 l-29 29 -485 0 -484 0 -27 -26z");
      
      g.appendChild(path1);
      g.appendChild(path2);
      svg.appendChild(g);

      svg.innerHTML += "";
    }
  }
}


})();
