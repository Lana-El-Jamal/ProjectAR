let surfGif;
let showGif = false; 

function preload() {
 surfGif = loadImage("surf.gif");  // Preload the GIF
}

function setup() {
  createARCanvas(400, 400, P2D, { scale: 2, markerId: 4 });
}

function draw() {
  clear();  // Clear the canvas for better visibility

  if (showGif) {
    image(surfGif, width / 2 - surfGif.width / 2, height / 2 -surfGif.height / 2); // Draw GIF when marker is found
  }
}

// Show the GIF when the marker is found
function p5SimpleARMarkerFound(markerId) {
  if (markerId === 4) {  
    showGif = true;  // Set flag to show GIF
  }
}

// Hide the GIF when the marker is lost
function p5SimpleARMarkerLost(markerId) {
  if (markerId === 4) {  
    showGif = false;  // Hide the GIF
  }
}
