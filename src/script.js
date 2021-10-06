chrome.storage.sync.get({ changeIcon: true, animation: "default" }, results => {
	change = results.changeIcon;
	animation = results.animation;
});
var oldHref = document.location.href;

window.onload = function() {
	main();
	var bodyList = document.querySelector("body");
	observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (oldHref != document.location.href) {
				oldHref = document.location.href;
				main();
			}
		});
	});

	var config = {childList: true, subtree: true};

	observer.observe(bodyList, config);
}

function main(){
	array = document.getElementsByTagName('video');
	if (array.length > 0){
		button = document.getElementsByClassName('ytp-pip-button')[0];
		button.style.display = 'inline-block';

		document.addEventListener('fullscreenchange', (event) => {
			if (document.fullscreenElement) {
				button.style.display = 'none';
			}
			else {
				button.style.display = 'inline-block';
			}
		});

		if (change){
			hover_animation = true;
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
					g = document.getElementById('pip_svg');
					g.innerHTML = "";

					path1 = document.createElement('path');
					path1.setAttribute('d', "M1645 1619 c-11 -6 -172 -163 -357 -348 l-338 -336 0 142 c0 137 -1 142 -26 172 -32 38 -80 49 -122 27 -17 -9 -36 -25 -42 -35 -14 -26 -14 -586 0 -612 24 -45 53 -49 333 -49 167 0 276 4 296 11 64 22 80 107 32 161 l-29 33 -148 5 -147 5 244 238 c134 131 290 287 347 347 95 102 102 113 102 151 0 75 -79 123 -145 88z");
					path2 = document.createElement('path');
					path2.setAttribute('d', "M26 1584 l-26 -27 0 -664 0 -664 25 -24 24 -25 836 0 837 0 29 29 29 29 0 307 c0 325 -3 350 -49 375 -35 18 -87 12 -120 -16 l-31 -26 0 -249 0 -249 -690 0 -690 0 0 515 0 515 411 0 411 0 29 29 c41 41 41 101 0 142 l-29 29 -485 0 -484 0 -27 -26z");
					
					g.appendChild(path1);
					g.appendChild(path2);

					g.innerHTML += "";
				});
				document.addEventListener('leavepictureinpicture', () => {
					g = document.getElementById('pip_svg');
					g.innerHTML = "";

					path1 = document.createElement('path');
					path1.setAttribute('d', "M1348 1825 c-35 -19 -48 -44 -48 -90 0 -46 23 -81 62 -94 17 -6 88 -11 157 -11 l125 0 -342 -343 -342 -343 0 -51 c0 -45 4 -54 31 -77 22 -19 42 -26 72 -26 41 0 44 3 389 347 l348 348 0 -138 c0 -155 9 -186 59 -207 42 -17 95 -5 121 27 19 25 20 39 20 319 l0 293 -24 28 -24 28 -289 2 c-241 2 -292 0 -315 -12z");
					path2 = document.createElement('path');
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

			svg = button.children[0];
			svg.innerHTML = "";
			
			svg.setAttribute('version', '1.0');
			svg.setAttribute('width', '100%');
			svg.setAttribute('height', '100%');
			svg.setAttribute('viewBox', "0 0 300.000000 300.000000");

			g = document.createElement('g');
			g.setAttribute('transform', 'translate(60.000000,240.000000) scale(0.100000,-0.100000)');
			g.setAttribute('fill', '#fff');
			g.setAttribute('stroke', 'none');
			g.setAttribute('id', 'pip_svg');

			path1 = document.createElement('path');
			path1.id = "pip_custom_path"
			path1.style.transformOrigin = 'center'
			path1.style.transition = "0.25s cubic-bezier(0, 0.5, 0.2, 1)"
			
			path1.setAttribute('d', "M1348 1825 c-35 -19 -48 -44 -48 -90 0 -46 23 -81 62 -94 17 -6 88 -11 157 -11 l125 0 -342 -343 -342 -343 0 -51 c0 -45 4 -54 31 -77 22 -19 42 -26 72 -26 41 0 44 3 389 347 l348 348 0 -138 c0 -155 9 -186 59 -207 42 -17 95 -5 121 27 19 25 20 39 20 319 l0 293 -24 28 -24 28 -289 2 c-241 2 -292 0 -315 -12z");
			path2 = document.createElement('path');
			path2.setAttribute('d', "M26 1584 l-26 -27 0 -664 0 -664 25 -24 24 -25 836 0 837 0 29 29 29 29 0 307 c0 325 -3 350 -49 375 -35 18 -87 12 -120 -16 l-31 -26 0 -249 0 -249 -690 0 -690 0 0 515 0 515 411 0 411 0 29 29 c41 41 41 101 0 142 l-29 29 -485 0 -484 0 -27 -26z");
			
			g.appendChild(path1);
			g.appendChild(path2);
			svg.appendChild(g);

			svg.innerHTML += "";
		}
	}
}
