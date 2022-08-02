const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  document.body.className = "dark"
  theme = "dark"
}
else{
  theme = "light"
}

chrome.storage.sync.get({ changeIcon: true, animation: "default",
                          hideClips: false, hideThanks: false, hideSponsor: false }, results => {
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

  const hideClipCheckbox = document.querySelector('#hideClips');
  const hideThanksCheckbox = document.querySelector('#hideThanks');
  const hideSponsorCheckbox = document.querySelector('#hideSponsor');

  hideClipCheckbox.checked = results.hideClips;
  hideThanksCheckbox.checked = results.hideThanks;
  hideSponsorCheckbox.checked = results.hideSponsor;

  document.getElementById("save").onclick = _ => {
    chrome.storage.sync.set({
      changeIcon: changeIconCheckbox.checked,
      animation: document.querySelector('input[name="animation"]:checked').value,
      hideClips: hideClipCheckbox.checked,
      hideThanks: hideThanksCheckbox.checked,
      hideSponsor: hideSponsorCheckbox.checked
    }, _ => {
      // Reload extension to make opt-out change immediate. 
      chrome.runtime.reload();
      window.close();
    });
  };
});
