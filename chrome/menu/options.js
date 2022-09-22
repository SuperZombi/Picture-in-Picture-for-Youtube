const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
	document.body.className = "dark"
	theme = "dark"
}
else{
	theme = "light"
}

chrome.storage.sync.get(null, results => {
	for (let [key, value] of Object.entries(results)) {
		if (key == "shortcuts"){
			for (let [hotkey, val] of Object.entries(value)) {
				let checkbox = document.querySelector(`#shortCuts input[name=${hotkey}]`)
				checkbox.checked = true;
				let select = document.querySelector(`#shortCuts select[name=${hotkey}]`)
				if (select){
					select.value = val
				}
			}
		}
		else{
			let elements = document.querySelectorAll(`input[name=${key}]:not(.shortcut)`)
			let input;
			if (elements.length > 1){
				input = document.querySelector(`input[name=${key}][value=${value}]`)
			} else{ input = elements[0]; }
			if (input.type == "radio" || input.type == "checkbox"){
				input.checked = value
			}
		}
	}

	main();
});

function main(){
	document.querySelector('#changeIcon').onclick = function() { ChangeColor(); }
	ChangeColor()

	initSave()
	initReset()
	initShortcuts()
	document.querySelector("#openShortcuts").addEventListener("click", ()=>{
		let el = document.querySelector("#shortCuts")
		if (el.style.display == "block"){
			el.style.display = "none"
		} else{
			el.style.display = "block"
		}
	})
	check_updates()
}

function initReset(){
	window.addEventListener("keydown", function(e){
		if (e.keyCode == 17){ // CTRL
			if (!event.repeat){
				document.getElementById("save").innerHTML = chrome.i18n.getMessage("resetBut")
				document.getElementById("save").onclick = _ => {
					chrome.storage.sync.clear();
					chrome.runtime.reload();
					window.close();
				}
			}
		}
	})
	window.addEventListener("keyup", function(e){
		if (e.keyCode == 17){ // CTRL
			document.getElementById("save").innerHTML = chrome.i18n.getMessage("saveBut")
			initSave()
		}
	})
}

function initShortcuts(){
	function allChecked(){
		return Array.from(document.querySelectorAll('#shortCuts input[type=checkbox]:not(#activeAllShortcuts)'))
				.map(e=>{return e.checked})
				.every(x=>x)
	}
	document.querySelector("#activeAllShortcuts").checked = allChecked();

	document.querySelector("#activeAllShortcuts").addEventListener("change",e=>{
		let current = e.target.checked;
		document.querySelectorAll("#shortCuts input[type=checkbox]:not(#activeAllShortcuts)").forEach(function(el){
			el.checked = current;
		})
	})

	document.querySelectorAll("#shortCuts input[type=checkbox]:not(#activeAllShortcuts)").forEach(function(el){
		el.addEventListener("change",e=>{
			document.querySelector("#activeAllShortcuts").checked = allChecked();
		})
	})
}

function initSave(){
	document.getElementById("save").onclick = _ => {
		let settings = {}
		let elements = document.querySelectorAll(`input:not(.shortcut)`)
		elements.forEach(function(el){
			if (el.type == "checkbox"){
				settings[el.name] = el.checked
			}
			else if (el.type == "radio"){
				if (el.checked){
					settings[el.name] = el.value
				}
			}
		})

		let shortcuts = {}
		let elements2 = [...document.querySelectorAll("#shortCuts input:not(#activeAllShortcuts)"),
							...document.querySelectorAll("#shortCuts select")]
		elements2.forEach(function(el){
			if (el.type == "checkbox"){
				if (el.checked){
					shortcuts[el.name] = el.checked
				}
			}
			else if (el.tagName === 'SELECT'){
				if (document.querySelector(`#shortCuts input[type=checkbox][name=${el.name}]`).checked){
					shortcuts[el.name] = el.value
				}
			}
		})
		settings["shortcuts"] = shortcuts

		chrome.storage.sync.set({
			...settings
			}, _ => {
			// Reload extension to make opt-out change immediate. 
			chrome.runtime.reload();
			window.close();
		});
	};
}

function ChangeColor() {
	let clrDiv = document.getElementById("animation")
	let checkbox = document.getElementById("changeIcon")
	if (!checkbox.checked){
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

class Version{
	constructor(text) {
		this.version = text.split(".").map(x=>parseInt(x));
	}
	diff(what){
		let array = [this.version, what.version]
		let temp = array.map(el => el.length)
		let max_length = array[temp.indexOf(Math.max(...temp))].length
		
		for (var i = 0; i < max_length; i++) {
			// A bigger than B
			if ( (parseInt(this.version[i]) || 0) > (parseInt(what.version[i]) || 0) ) {
				return 1;
			}

			// B bigger than A
			if ( (parseInt(this.version[i]) || 0) < (parseInt(what.version[i]) || 0) ) {
				return -1;
			}
		}
		return 0;
	}
}

function check_updates(){
	let current_version = new Version(chrome.runtime.getManifest().version)

	fetch("https://api.github.com/repos/SuperZombi/Picture-in-Picture-for-Youtube/tags")
		.then(response => response.json())
		.then(data => {
			let last_version = new Version(data[0].name)
			if (last_version.diff(current_version) == 1){
				document.getElementById("update").parentNode.title = chrome.i18n.getMessage("updateAvailable")
				document.getElementById("update").parentNode.style.cursor = "help"
				document.getElementById("update").style.display = "inline-block"
			}
		});
}
