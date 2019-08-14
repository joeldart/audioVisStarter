console.clear();
// import framework
import Vis from '/modules/Vis.js';

// setup
const visEl = document.querySelector('#visual');
// setup 2D canvas plus resize
// set up dpr for  vis
const dpr = window.devicePixelRatio;
// get window dimensions & set canvas to fill window
function Dimensions() {
	this.width = (window.innerWidth)*dpr;
	this.height = (window.innerHeight)*dpr;
	this.centerX = this.width/2;
	this.centerY = this.height/2;
	
	this.setFullscreen = function(el) {
		el.width = this.width;
		el.height = this.height;
	}
	
	this.update = function() {
		this.width = (window.innerWidth)*dpr;
		this.height = (window.innerHeight)*dpr;
	}
}

let screenDim = new Dimensions();
screenDim.setFullscreen(visEl);
window.addEventListener("resize", function(e) {
	screenDim.update();
	screenDim.setFullscreen(visEl);
	init();
}, false);
const ctx = visEl.getContext('2d');
// set up canvas defaults
ctx.lineWidth = 0.0;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

const binSize = 128;
const elAmount = Math.floor(binSize/3); // Returned frequncies is a third

// create a new vis
const vis = new Vis(binSize, "/ooh-sweetness.mp3", true, true);
const vis2 = new Vis(binSize, "/soft little skipping in the field.mp3", true, true);
const vis3 = new Vis(binSize, "/bouncy.mp3", true, true);
const vis4 = new Vis(binSize, "/bum-bum-bum.mp3", true, true);
const vis5 = new Vis(binSize, "/jaunty bum.mp3", true, true);
const vis6 = new Vis(binSize, "/weepies ish maybe.mp3", true, true);
const vis7 = new Vis(binSize, "/da da da.mp3", true, true);
const vis8 = new Vis(binSize, "/ba um ba um ba um ba um.mp3", true, true);

vis.draw(()=>{});//noop
vis2.draw(()=>{});//noop
vis3.draw(()=>{});//noop
vis4.draw(()=>{});//noop
vis5.draw(()=>{});//noop
vis6.draw(()=>{});//noop
vis7.draw(()=>{});//noop
vis8.draw(()=>{});//noop
let hue = 0;
let hueChange = 10;
let rotation = 0;
let rotationChange = 0;
	setInterval(()=> {
		hue = (hue + hueChange) % 255
		rotation = rotation + rotationChange;
	}, 10);
// setup our draw loop: THIS IS WHERE THE MAGIC HAPPENS!!


	const loop = (t) => {
		// add all these to populate arrays eventually
		ctx.clearRect(0, 0, screenDim.width, screenDim.height);
		ctx.save();
		ctx.translate(screenDim.width/2, screenDim.height/2);
		ctx.rotate(Math.PI *(rotation/360));
		ctx.translate(-screenDim.width/2, -screenDim.height/2);
		
		// loop over our frequencies and draw a shape for each one
		if (vis2 && vis2.frequencies && vis2.running)
		{
			vis2.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			})
		}
		if (vis && vis.frequencies && vis.running) {
			ctx.save();
			ctx.translate(screenDim.width - 450, 0);
			ctx.scale(-1, 1);
			vis.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}	  
		if (vis3 && vis3.frequencies && vis3.running) {
			ctx.save();
			ctx.translate(0, screenDim.height);
			ctx.scale(1, -1);
			vis3.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}
		if (vis4 && vis4.frequencies && vis4.running) {
			ctx.save();
			ctx.translate(screenDim.width - 450, screenDim.height);
			ctx.scale(-1, -1);
			vis4.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}	  
		if (vis5 && vis5.frequencies && vis5.running)
		{
			vis5.frequencies.forEach((f, i) => {
				ctx.save();
				ctx.translate(400, 0);
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
				ctx.restore();
			})
		}
		if (vis6 && vis6.frequencies && vis6.running) {
			ctx.save();
			ctx.translate(screenDim.width - 950, 0);
			ctx.scale(-1, 1);
			vis6.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}	  
		if (vis7 && vis7.frequencies && vis7.running) {
			ctx.save();
			ctx.translate(400, screenDim.height);
			ctx.scale(1, -1);
			vis7.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}
		if (vis8 && vis8.frequencies && vis8.running) {
			ctx.save();
			ctx.translate(screenDim.width - 950, screenDim.height);
			ctx.scale(-1, -1);
			vis8.frequencies.forEach((f, i) => {
				ctx.beginPath();
				ctx.fillStyle = "hsl(" + hue + ",100%, 50%)";//'red';
				ctx.arc(i*20, i*20, f, 0, 5);
				ctx.fill();
				ctx.closePath();
			});
			ctx.restore();
		}
		ctx.restore();
		requestAnimationFrame(loop);		
  	}
	requestAnimationFrame(loop);

	var hash = {
		53: vis,
		54: vis2,
		55: vis3,
		56: vis4,
		57: vis5,
		58: vis6,
		59: vis7,
		60: vis8
	};


	navigator.requestMIDIAccess({ sysex: false }).then(function(access) {
		// Get lists of available MIDI controllers
		const inputs = Array.from(access.inputs.values());
		//const outputs = Array.from(access.outputs.values());

		inputs[0].onmidimessage = function (message) {
			//[1]53->60
			//[0]144 on 128 off and 176 is pot change
			const data = message.data; // this gives us our [command/channel, note, velocity] data.
			console.log('MIDI data in', data); // MIDI data [144, 63, 73]
			if (data[0] === 144) {
				var currVis = hash[data[1]];
				currVis.start();
			} else if (data[0] === 128){
				var currVis = hash[data[1]];
				currVis.stop();
			} else if (data[0] === 176){
				if (data[1]===1){
					hueChange = Math.floor(data[2] / 3);
				} else if (data[1] === 2){
					rotationChange = data[2]/10;
				}
			}
		};
});


// ===================== CONTROLS edit here if you want to start/stop multiple vis
const controls = document.querySelector('#controls');

controls.querySelector('[data-control="play"]').addEventListener('click', function(e) {
	if (vis.audio_ctx.state === 'suspended') {
		vis.audio_ctx.resume();
	}
	this.style.display = "none";
})

// document.querySelector('#controls2').querySelector('[data-control="play"]').addEventListener('click', function(e) {
// 	if (this.dataset.on === 'false') {
// 		this.dataset.on = "true";
// 		vis2.start();
// 	} else {
// 		this.dataset.on = "false";
// 		vis2.stop();
// 	}
// })

// document.querySelector('#controls3').querySelector('[data-control="play"]').addEventListener('click', function(e) {
// 	if (this.dataset.on === 'false') {
// 		this.dataset.on = "true";
// 		vis3.start();
// 	} else {
// 		this.dataset.on = "false";
// 		vis3.stop();
// 	}
// })

// 	document.querySelector('#controls4').querySelector('[data-control="play"]').addEventListener('click', function(e) {
// 		if (this.dataset.on === 'false') {
// 			this.dataset.on = "true";
// 			vis4.start();
// 		} else {
// 			this.dataset.on = "false";
// 			vis4.stop();
// 		}
// 	})
		