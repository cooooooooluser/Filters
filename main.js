function preload(){
      
}

function setup() {
     canvas= createCanvas(640, 480);
     canvas.position(110, 320);
     video= createCapture(VIDEO);
     video.hide();

     tintColor=" ";

}

function draw() {
     image(video, 0,0 , 640, 480);
     tint(tintColor);
}

function take_snapshot(){
      save("picture_take_.png");
}

function applyfilter() {
     tintColor = document.getElementById("filtercolor").value;
}