var screw
var body
var holder
var spd
var canv
var zmm
var spdn
var zmmn

function setup() {
  canv = createCanvas(800, 800, WEBGL);
  canv.parent('canv')
  screw = loadModel("tinker.obj")
  body = loadModel("tinker3.obj")
  holder = loadModel("tinker2.obj")
  spd = createSlider(-10, 10, 3, 0.1);
  spd.style('width', '80px');
  spd.parent('s1')
  spdn = createDiv(spd.value())
  zmm = createSlider(-100, 100, 0, 5);
  zmm.style('width', '80px');
  zmm.parent('s2')
}
var ill = 0;

function draw() {
  rectMode(CENTER)
  angleMode(DEGREES)
  background(10);

  directionalLight(255, 255, 255, 0, 100, 0)
  //push()
  //translate(75,0,0)
  //ambientMaterial(255,0,0)
  //sphere(25)
  //translate(-75,75,0)
  //ambientMaterial(0,255,0)
  //sphere(25)
  //translate(0,-75,75)
  //ambientMaterial(0,0,255)
  //sphere(25)
  //pop()



  push()
  translate(0, 100, 0)
  rotateX(-45 + map(mouseY, 0, height, 180, -180))
  ill = ill % 360
  noStroke()

  push()
  rotateY(map(mouseX, 0, width, -180, 180))
  translate(0, -75, 0)
  translate(0, -10, 0)
  rotateX(135)
  translate(0, -5, 0)
  rotateY(0)
  rotateZ(ill)
  //rotateZ(0)
  translate(0, 0, -5.5)
  ambientMaterial(15, 15, 255)
  model(screw)
  pop()

  push()
  rotateY(map(mouseX, 0, width, -180, 180))
  translate(-10, 4, 0)
  translate(0, -75, 0)
  rotateX(135)
  rotateY(0)
  rotateZ(180)
  translate(0, 0, -5.5)
  ambientMaterial(255, 15, 15)
  model(body)
  pop()

  ill += 3;
  push()

  rotateY(map(mouseX, 0, width, -180, 180))
  translate(0, 0, 0)
  rotateX(-45)
  rotateY(180)
  rotateZ(0)

  ambientMaterial(15, 255, 15)
  model(holder)
  pop()
  pop()
} 
