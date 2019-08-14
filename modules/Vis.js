import Analyser from './Analyser.js';

// visualiser class - create a new one of these to create a new vis
class Vis extends Analyser {
	
	constructor(size, trackid, isLocal, loop) {
		super(size, trackid, isLocal, loop);
		this.raf = 1;
	}
	
	populateArrays() {
	}
	
	start() {
		this.run();
		this.running = true;

		const loop = (t) => {
      this.raf = requestAnimationFrame(loop);
      
			// add all these to populate arrays eventually
      this.getData();
			this.frequencies = this.getFrequencies();
			// console.log(this.frequencies);
      
      // cancel if an error was thrown
      try { this.drawFunction() } catch (e) {
        console.error(e);
        cancelAnimationFrame(this.raf);
      }
    }
    
		requestAnimationFrame(loop);
	}
	
	stop() {
		this.running = false;
		
		this.disconnect();
		cancelAnimationFrame(this.raf);
	}
	
	draw(fn) {
		this.drawFunction = fn
	}
}

export default Vis;