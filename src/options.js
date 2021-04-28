chrome.storage.sync.get({ changeIcon: true }, results => {
  const changeIconCheckbox = document.querySelector('#changeIcon');

  changeIconCheckbox.checked = results.changeIcon;
  changeIconCheckbox.onchange = _ => {
    chrome.storage.sync.set({
      changeIcon: changeIconCheckbox.checked
    }, _ => {
      // Reload extension to make opt-out change immediate. 
      chrome.runtime.reload();
      window.close();
    });
  };
});
