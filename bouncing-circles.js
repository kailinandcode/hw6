//Assignment: bouncing-circles.js Modify the code in the following ways:

/**
Add a "radius" property to each circle.
Decrease the radius every time the circle hits a boundary.
Reset the location & size of each circle when it disappears.
Add a visual indicator that triggers when a circle hits a boundary.
**/var circles = [];
var radi = [];
var hitBoundary = false;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(360), 60, 100)
    }
    radi[index] = random(1, 50);
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

    //indicate hit boundary
    if (hitBoundary == true) {
      fill(random(0, 255), random(0, 255), 100);
      textSize(30);
      text('H I T', width/2, height/2);
    }
    // draw it
    else {
    fill(circle.c);
    ellipse(circle.x, circle.y, radi[index]);
    }
    
    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      
      circle.xd = -circle.xd;
      
      if (radi[index] <= 0) {
        radi[index] = random(10, 50);
        circle.x = random(0, width);
        circle.y = random(0, height);
      }
      else if (radi[index] > 3) {
    		radi[index] -= 3;
    	}
      hitBoundary = true;
    }
    else if (circle.y > height || circle.y < 0) {
      
      circle.yd = -circle.yd;
      if (radi[index] <= 0) {
        radi[index] = random(10, 50);
        circle.x = random(0, width);
        circle.y = random(0, height);
      }
      else if (radi[index] > 3) {
    		radi[index] -= 3;
    	}
      hitBoundary = true;
    }
    else {
      hitBoundary = false;
    }
  }
}
