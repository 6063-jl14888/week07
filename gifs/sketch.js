class sprite{
  constructor(_x, _y, _imgs){
    this.x=_x;
    this.y=_y;
    this.imgs=_imgs;
    this.imgIndex = 0;
  }
  draw
}




let spriteInfo = [
  { name: "finn", imgCnt: 7, imgs: [] },
  { name: "ice-king", imgCnt: 6, imgs: [] },
  { name: "jake", imgCnt: 6, imgs: [] },
  { name: "princess-muscles", imgCnt: 7, imgs: [] },
];

function preload() {
  for (let si = 0; si < spriteInfo.length; si++) {
    for (let ii = 0; ii < spriteInfo[si].imgCnt; ii++) {
      let sName = spriteInfo[si].name;
      let sImg = loadImage("./sprites/"+sName+"/tile00"+ii+".png");
      spriteInfo[si].imgs.push(sImg);
    }
  }
}

let mSprites = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  let character = spriteInfo[0];
  let charImgs = character.imgs;

  for (let i = 0; i < charImgs.length; i++){
    let xy = map(i,0,charImgs, 0, height);
    image(charImgs[i],xy, xy);
  }
}
