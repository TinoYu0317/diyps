var initials ='ty'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_01.jpg');
  head2 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_02.jpg');
  head3 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_03.png');
  head4 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_04.jpg');
  head5 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_05.jpg');
  head6 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_06.png');
  head7 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_07.jpg');
  head8 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_08.jpg');
  head9 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_09.jpg');
  head10 = loadImage('https://tinoyu0317.github.io/diyps/cathead/head_10.jpg');
}
 
function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    image(img, mouseX-50, mouseY-50);
    
  } else if (toolChoice == '2') { // second tool

    stroke(01);
    image(head2, mouseX-50, mouseY-50);;
  } else if (toolChoice == '3') { // third tool

    stroke(01);
    image(head3, mouseX-50, mouseY-50);;
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    image(head4, mouseX-50, mouseY-50);;
  } else if (key == '5') { // this tool calls a function
    image(head10, mouseX-50, mouseY-50);;
  } else if (toolChoice == '6') {

    stroke(200);
    image(head5, mouseX-50, mouseY-50);
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    image(head6, mouseX-50, mouseY-50);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    image(head7, mouseX-50, mouseY-50);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    image(head8, mouseX-50, mouseY-50);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    image(head9, mouseX-50, mouseY-50);
    
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
