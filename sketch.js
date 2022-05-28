let radius = 100, increase = true, wait = false, bruh = 0, countDown = true
let timer = 3
let ww, wh
let heightOffset = 2

function preload(){
  
  ww = displayWidth
  wh = displayHeight
  
}

function setup() {
  createCanvas(ww, wh);  
}

function draw() {  

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ww = displayWidth
    wh = displayHeight
    heightOffset = 3
}
  
else{
  ww = windowWidth
  wh = windowHeight
}

  createCanvas(ww, wh);
  background(36, 36, 36)

  
  //Inhale----------------------------------------------------
  
  if(radius < 300 && increase && !wait && !countDown) radius += log(radius)/4
  
  if(radius > 300) {
    radius = 300
    increase = false 
    wait = true
  }

  //Wait----------------------------------------------------
  
  if(wait){
    bruh += log(300) * .6
    //print(bruh)
    
    if(bruh > 300){
      wait = false
      bruh = 0
    }
  }
  
  //Exhale----------------------------------------------------
  
  if(!increase && radius > 100 && !wait) radius -= log(radius * .1) / 3
  
  if(radius < 100 && !wait && !increase) {
    increase = true
    wait = true
  }
  
  //Gradient----------------------------------------------------
  
  let gradient = drawingContext.createLinearGradient(
  width/2-200, height/2+200, width/2+200, height/2+200
  );
  
  gradient.addColorStop(0, color(37, 141, 232));
  gradient.addColorStop(1, color(153, 161, 168));
  
  drawingContext.fillStyle = gradient;
  
  //Circle------------------------------------------------------
  noStroke()
  circle(ww/2, wh/heightOffset, radius)
  
  //Text--------------------------------------------------------
 
  if(wait){
    fill(255)
    textSize(30);
    text('hold', ww/2, wh/heightOffset + 200);
    textAlign(CENTER);
  
  }
  
  else if(increase && !countDown){
    fill(255)
    textSize(30);
    text('Inhale', ww/2, wh/heightOffset + 200);
    textAlign(CENTER);
  
  }
  
  else if(!increase){
    fill(255)
    textSize(30);
    text('Exhale', ww/2, wh/heightOffset + 200);
    textAlign(CENTER);
  
  }
  
  //Countdown----------------------------------------------------------------------

  if(countDown){
    fill(255)
    textSize(30);
    textAlign(CENTER);
    text(timer, ww/2, wh/heightOffset + 200)
  }
  

  //  fill(255)
  //  textSize(30);
  //  textAlign(CENTER);
  //  text("Testing something", ww/2, wh/heightOffset + 300)
  // text(displayHeight, ww/2, wh/heightOffset + 400)
  
  if (frameCount % 60 == 0 && timer > 0 && countDown) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    countDown = false
  }

}

//Do not let the browser sleep --------------------------------------------------------------------------------

// Create the root video element
var video = document.createElement('video');
video.setAttribute('loop', '');
// Add some styles if needed
video.setAttribute('style', 'position: fixed;');

// A helper to add sources to video
function addSourceToVideo(element, type, dataURI) {
    var source = document.createElement('source');
    source.src = dataURI;
    source.type = 'video/' + type;
    element.appendChild(source);
}

// A helper to concat base64
var base64 = function(mimeType, base64) {
    return 'data:' + mimeType + ';base64,' + base64;
};

// Add Fake sourced
addSourceToVideo(video,'webm', base64('video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA='));
addSourceToVideo(video, 'mp4', base64('video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAABsW1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAA+gAAAAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVxtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEcc3RibAAAALhzdHNkAAAAAAAAAAEAAACobXA0dgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAFJlc2RzAAAAAANEAAEABDwgEQAAAAADDUAAAAAABS0AAAGwAQAAAbWJEwAAAQAAAAEgAMSNiB9FAEQBFGMAAAGyTGF2YzUyLjg3LjQGAQIAAAAYc3R0cwAAAAAAAAABAAAAAQAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAAEwAAAAEAAAAUc3RjbwAAAAAAAAABAAAALAAAAGB1ZHRhAAAAWG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAK2lsc3QAAAAjqXRvbwAAABtkYXRhAAAAAQAAAABMYXZmNTIuNzguMw=='));

// Append the video to where ever you need
document.body.appendChild(video);

// Start playing video after any user interaction.
// NOTE: Running video.play() handler without a user action may be blocked by browser.
var playFn = function() {
    video.play();
    document.body.removeEventListener('touchend', playFn);
};
document.body.addEventListener('touchend', playFn);