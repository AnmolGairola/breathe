let radius = 100, increase = true, wait = false, bruh = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw() {  
  createCanvas(windowWidth, windowHeight);
  background(36, 36, 36)
  
  
  //Inhale----------------------------------------------------
  
  if(radius < 300 && increase && !wait) radius += log(radius)/4
  
  if(radius > 300) {
    radius = 300
    increase = false 
    wait = true
  }

  //Wait----------------------------------------------------
  
  if(wait){
    bruh += log(300) * .7
    print(bruh)
    
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
  circle(windowWidth/2, windowHeight/2, radius)
  
  //Text--------------------------------------------------------
 
  if(wait){
    fill(255)
    textSize(30);
    text('hold', windowWidth/2, windowHeight/2 + 200);
    textAlign(CENTER);
  
  }
  
  else if(increase){
    fill(255)
    textSize(30);
    text('Inhale', windowWidth/2, windowHeight/2 + 200);
    textAlign(CENTER);
  
  }
  
  else if(!increase){
    fill(255)
    textSize(30);
    text('Exhale', windowWidth/2, windowHeight/2 + 200);
    textAlign(CENTER);
  
  }
  
  
  
  
}

