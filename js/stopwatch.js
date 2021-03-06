function Stopwatch(opts){
	let time = 0;
	let interval;
	let offset;

	let elem = opts.elem;
	let delay = opts.delay;
// .........................................................................PRIVATE FUNCTIONS
	function update(){
		console.log(this);
		if (this.isOn) {
			time += delta();
		}

		
		let formattedTime = timeFormatter(time);
		elem.textContent = formattedTime;
	}

	function delta(){
		let now = Date.now();
		let timePassed = now - offset;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMilliseconds){
		let time = new Date(timeInMilliseconds);
		let minutes= time.getMinutes().toString();
		let seconds = time.getSeconds().toString();
		let milliseconds = time.getMilliseconds().toString();

		if (minutes.length < 2) {
			minutes= "0" + minutes;
		}

		if (seconds.length < 2) {
			seconds= "0" + seconds;
		}

		while (milliseconds.length < 3){
			milliseconds = "0" + milliseconds;
		}

		return minutes + ' : ' + seconds + ' . ' + milliseconds;


	};



	this.isOn = false;

// .........................................................................PUBLIC FUNCTIONS
// The start function
	this.start = function(){
		if (!this.isOn) {
			interval = setInterval(update.bind(this), delay);
			offset = Date.now();
			this.isOn = true;
		}
	};

// The stop function
	this.stop = function(){
		if (this.isOn) {
			clearInterval(interval);
			interval = null;
			this.isOn = false;
		}
	};

// The reset function
	this.reset = function(){
		if (!this.isOn) {
			time = 0;
			update();
		}
	};
}

