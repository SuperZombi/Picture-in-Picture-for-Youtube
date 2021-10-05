chrome.storage.sync.get({ changeIcon: true, animation: "default" }, results => {
  const changeIconCheckbox = document.querySelector('#changeIcon');
  
  function ChangeColor() {
    var clrDiv = document.getElementById("animation")
    if (!changeIconCheckbox.checked){
      clrDiv.style.backgroundColor = "#E7E7E7";
      clrDiv.style.filter = "blur(1px)";
      clrDiv.style.pointerEvents = "none";
      clrDiv.style.userSelect = "none";
    }
    else{
      clrDiv.style.backgroundColor = "";
      clrDiv.style.filter = "";
      clrDiv.style.pointerEvents = "auto";
      clrDiv.style.userSelect = "auto";
    }
  }
  changeIconCheckbox.onclick = function() { ChangeColor(); }

  changeIconCheckbox.checked = results.changeIcon;
  ChangeColor()

  document.querySelector(`input[value="${results.animation}"]`).checked = "checked"


  document.getElementById("save").onclick = _ => {
    chrome.storage.sync.set({
      changeIcon: changeIconCheckbox.checked,
      animation: document.querySelector('input[name="animation"]:checked').value
    }, _ => {
      // Reload extension to make opt-out change immediate. 
      chrome.runtime.reload();
      window.close();
    });
  };
});
