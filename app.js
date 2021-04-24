const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 1,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 1.0    // confidence threshold for predictions.
  }
  
  navigator.getUserMedia = 
  navigator.getUserMedia || 
  navigator.webkitGetUserMedia || 
  navigator.mozGetUserMedia || 
  navigator.msGetUserMedia;

  //SELECT EVERYTHING FROM HTML

const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
// const player = new Tone.Player("vc1.mp3",
//     () => {
//       // player.start();
//     }
//   ).toDestination();
let model; 

function runDetection(){
  // console.log('detect')
  model.detect(video) .then(predictions => {
    if(predictions.length !==0){
      let hand1 = predictions[0].bbox;
      let x = hand1[0];
      let y = hand1[1];
      console.log(x)
     
      if (y > 300) {
        if (x < 200) {
          player1.start()
          // audio.src = "vc1.mp3";
        } else if(x > 400){
          player2.start()
          // audio.src = "vc2.mp3";
        } else if(x > 350){
          audio.src = "vc3.mp3";
        } else if(x > 300){
          audio.src = "vc4.mp3";
        } else if(x > 250){
          audio.src = "vc10.mp3";
        } else if(x > 200){
          audio.src = "vc11.mp3";
        } else if(x > 150){
          audio.src = "vc12.mp3";
        } 
      }
      //PLAY THE SOUND
      audio.play();
    }
  });
      
}

console.log(handTrack)

handTrack.load().then(lmodel => {
    console.log("model loaded")
    model = lmodel;
  })
  
handTrack.startVideo(video).then(status => {
  if(status){
    console.log('Start Video')
    navigator.getUserMedia({video: {}}, stream=> {
        video.srcObject = stream;
        //Run our detection
            setInterval(runDetection, 100);
            console.log('Start Detection');
    },
    err => console.log(err)
    );
  }
});


let player1, player2;



document.querySelector('#startAudio')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
  player1 = new Tone.Player('https://github.com/elvisb155/Hands-Parallax-website-/blob/main/vc1.mp3?raw=true').toDestination();
  player2 = new Tone.Player('vc2.mp3').toDestination();
  player3 = new Tone.Player('vc2.mp3').toDestination();
  player4 = new Tone.Player('vc2.mp3').toDestination();
  player5 = new Tone.Player('vc2.mp3').toDestination();
  player6 = new Tone.Player('vc2.mp3').toDestination();
  player7 = new Tone.Player('vc2.mp3').toDestination();
  player8 = new Tone.Player('vc2.mp3').toDestination();
  player9 = new Tone.Player('vc2.mp3').toDestination();
  player10 = new Tone.Player('vc2.mp3').toDestination();
  player11 = new Tone.Player('vc2.mp3').toDestination();
  player12 = new Tone.Player('vc2.mp3').toDestination();
})
  