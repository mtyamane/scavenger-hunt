var input, submit;
var solved = false;
var partyPopper1_load, partyPopper1_create;
var partyPopper2_load, partyPopper2_create;
var shaq_load, shaq_create;
var squid_load, squid_create;

function preload() {
  partyPopper1_load = loadImage("imgs/partyPopper1.png");
  partyPopper1_create = createImage("imgs/partyPopper1.png");
  partyPopper2_load = loadImage("imgs/partyPopper2.png");
  partyPopper2_create = createImage("imgs/partyPopper2.png");
  shaq_load = loadImage("gifs/shaq.gif");
  shaq_create = createImage("gifs/shaq.gif");
  squid_load = loadImage("gifs/squid.gif");
  squid_create = createImage("gifs/squid.gif");
  confetti_load = loadImage("gifs/confetti.gif");
  confetti_create = createImage("gifs/confetti.gif");
}

function setup() {
  huzzah = loadSound('sounds/huzzah.mp3');
  yeah = loadSound('sounds/yeah.mp3');

  createCanvas(windowWidth, windowHeight);
  
  input = createInput();
  submit = createButton('submit');

  xInput = width/2 - (input.width/2) - (submit.width/2);
  yInput = height/2 + 40;
  input.position(xInput, yInput);
  
  submit.position(input.x + input.width, yInput);
  submit.mousePressed(solve);

  background(220);
  textAlign(CENTER);
  textSize(70);
  text('Hello!', width/2, height/2);
  textSize(12);
  text('What is the answer to the scavenger hunt?', width/2, height/2 +30);
}

function draw() {
    if (solved) {
      // display celebration gifs!
      background('#90EE90');
      image(shaq_load, width - 300, height- 300, 300, 300);
      image(squid_load, 0, height- 300, 300, 300);
      image(confetti_load, 0, 0, width, height);
      textSize(70);
      textAlign(CENTER);
      text('CORRECT!', width/2, height/2);
      textSize(12)
      text('What is the answer to the scavenger hunt?', width/2, height/2 +30);
      image(partyPopper1_load, width/2 + 200, height/2 - 50, 100, 100);
      image(partyPopper2_load, width/2 - 300, height/2 - 50, 100, 100);
    }
}

ans = "lightly fried kiwi"
function solve() {
  let inp = input.value();  // save input
  input.value('');          // clear input

  textSize(70);
  textAlign(CENTER);
  if (inp == ans) {
    background('#90EE90');
    text('CORRECT!', width/2, height/2);
    solved = true;
    huzzah.play();
    yeah.play();
  } else if (inp == '') {
    background(220);
    text('Hello!', width/2, height/2);
    solved = false;
    if (huzzah.isPlaying() || yeah.isPlaying()){
      huzzah.stop();
      yeah.stop();
    }
  } else {
    background('#FF7F7F');
    text('WRONG!', width/2, height/2);
    solved = false;
    if (huzzah.isPlaying() || yeah.isPlaying()){
      huzzah.stop();
      yeah.stop();
    }
  }
  textSize(12)
  text('What is the answer to the scavenger hunt?', width/2, height/2 +30);
}