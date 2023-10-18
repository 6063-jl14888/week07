let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height)
  print(mImg.pixels.length);
  noloop();
  
}

function draw() {
  background(255);

  noStroke();

  mImg.loadPixels();

  let spacing = 32;

  for(let y = 0; y < mImg.height; y+=spacing){
    for (let x = 0; x < mImg.width; x+=spacing){
     let pixelIndex = 4* (y * mImg.width+x);
     let redVal = mimg.pixels[pixelIndex + 0];
     let greenVal = mimg.pixels[pixelIndex + 1 ];
     let blueVal = mimg.pixels[pixelIndex + 2];

      fill(redVal,greenVal,blueVal)
      rect(x,y,spacing,spacing);

  }
}
  mImg.updatePixels();
  //image(mImg, (width-mImg.width)/2, 0);
}

