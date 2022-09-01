const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  document.body.className = "dark"
  theme = "dark"
}
else{
  theme = "light"
}

chrome.storage.sync.get({ changeIcon: true, animation: "default",
                          hideClips: false, hideThanks: false, hideDownload: false, hideSponsor: false,
                          hideButtonLabels: false,
                          speedometer: false, fullscreen: false }, results => {
  const changeIconCheckbox = document.querySelector('#changeIcon');
  
  function ChangeColor() {
    var clrDiv = document.getElementById("animation")
    if (!changeIconCheckbox.checked){
      if (theme == "dark"){
        clrDiv.style.backgroundColor = "#313131";
      }
      else{
        clrDiv.style.backgroundColor = "#E7E7E7";
      }

      list = document.getElementById("animation").getElementsByTagName("img")
      intervals = []
      for (let item of list) {
          var x = setInterval(function() {
              item.setAttribute('src',item.src)
          },1)
          intervals.push(x)
      }
     
      clrDiv.style.filter = "blur(1px) grayscale(1)";
      clrDiv.style.pointerEvents = "none";
      clrDiv.style.userSelect = "none";
    }
    else{
      try{
        for (let item of intervals) {
            clearInterval(item)
        }        
      }catch{}

      clrDiv.style.backgroundColor = "";
      clrDiv.style.filter = "";
      clrDiv.style.pointerEvents = "auto";
      clrDiv.style.userSelect = "auto";
    }
  }
  changeIconCheckbox.onclick = function() { ChangeColor(); }

  changeIconCheckbox.checked = results.changeIcon;
  ChangeColor()

  document.querySelector(`input[value="${results.animation}"]`).checked = "checked";

  const hideButtonLabelsCheckbox = document.querySelector('#hideButtonLabels');
  const hideClipCheckbox = document.querySelector('#hideClips');
  const hideThanksCheckbox = document.querySelector('#hideThanks');
  const hideDownloadCheckbox = document.querySelector('#hideDownload');
  const hideSponsorCheckbox = document.querySelector('#hideSponsor');

  const speedometerCheckbox = document.querySelector('#speedometer');
  const fullscreenCheckbox = document.querySelector('#fullscreen');

  hideButtonLabelsCheckbox.checked = results.hideButtonLabels;
  hideClipCheckbox.checked = results.hideClips;
  hideThanksCheckbox.checked = results.hideThanks;
  hideDownloadCheckbox.checked = results.hideDownload;
  hideSponsorCheckbox.checked = results.hideSponsor;

  speedometerCheckbox.checked = results.speedometer;
  fullscreenCheckbox.checked = results.fullscreen;

  document.getElementById("save").onclick = _ => {
    chrome.storage.sync.set({
      changeIcon: changeIconCheckbox.checked,
      animation: document.querySelector('input[name="animation"]:checked').value,
      hideButtonLabels: hideButtonLabelsCheckbox.checked,
      hideClips: hideClipCheckbox.checked,
      hideThanks: hideThanksCheckbox.checked,
      hideDownload: hideDownloadCheckbox.checked,
      hideSponsor: hideSponsorCheckbox.checked,
      speedometer: speedometerCheckbox.checked,
      fullscreen: fullscreenCheckbox.checked
    }, _ => {
      // Reload extension to make opt-out change immediate. 
      chrome.runtime.reload();
      window.close();
    });
  };
});
