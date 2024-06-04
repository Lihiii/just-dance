let phrase = "JUST  DANCE";
let letters = phrase.split("");
let t = 0; // Time variable for controlling the animation
let logoImg;

function preload(){
   logoImg = loadImage("hit_logo.png");

}
function setup() {
  createCanvas(400, 400);
  textSize(55);
  textAlign(CENTER, CENTER);
  frameRate(30);
  loadFont = "futura-condensedlight.otf";

 
}
  if (image) {
    image(logoImg,350,340,35,35);  
    }
function draw() {
  background(255, 0, 104);
 if (image) {
    image(logoImg,350,340,35,35);  
    }
  let xOffset = width / 2 - textWidth(phrase) / 2;
  let yOffset = height / 2;

  for (let i = 0; i < letters.length; i++) {
    
if (image) {
    image(logoImg,350,340,35,35);  
    }
    
    textSize(14)
    fill(255)
    
        text("Lihi  shlomo", 57, 360)
    text("Digital platforms", 63,50)
      if (image) {
    image(logoImg,350,340,35,35);  
    }
    
   
   
    
    textSize(55)
       
    let letter = letters[i];
    let x =
      xOffset + textWidth(letters.slice(0, i).join("")) + textWidth(letter) / 2;
    let y = yOffset;

    // Calculate the stretch and size based on a sine wave, with a phase shift for each letter
    let stretch = abs(sin(t - i * 20)) * 9 + 1; // Sine wave for individual letter vertical stretch
    let sizeChange = abs(sin(t - i * 0.3)) * 9 + 32; // Sine wave for individual letter size

    push();
    translate(x, y);
    scale(1, stretch); // Stretch the letter vertically and horizontally
    fill(0); //
    textSize(65);
    text(letter, 0, 0);
     if (image) {
    image(logoImg,350,340,35,35);  
    }
    
     
   

    pop();
  }

  t += 0.05; // Increment the time variable for the next frame
}