let timer = document.getElementById('timer');
let toggleBtn =document.getElementById('toggle');
let resetBtn =document.getElementById('reset');

let watch = new Stopwatch({
	elem: timer,
	delay: 10
});




function start(){
	watch.start();
	toggleBtn.textContent = "Stop";
}



function stop(){
	watch.stop();
	toggleBtn.textContent = "Start";
}

toggleBtn.addEventListener('click', function(){
	(watch.isOn) ? stop() : start();     
});



resetBtn.addEventListener('click', function(){
	watch.reset();
});
