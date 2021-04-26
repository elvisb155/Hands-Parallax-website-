const modelParams = {
  flipHorizontal: true,   // flip e.g for video 
  imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
  maxNumBoxes: 2,        // maximum number of boxes to detect
  iouThreshold: 1.1,      // ioU threshold for non-max suppression
  scoreThreshold: 1.1    // confidence threshold for predictions.
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

let player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21;
player1 = new Tone.Player('/audios/vc1.mp3').toDestination();
player2 = new Tone.Player('/audios/vc2.mp3').toDestination();
player3 = new Tone.Player('/audios/vc3.mp3').toDestination();
player4 = new Tone.Player('/audios/vc4.mp3').toDestination();
player5 = new Tone.Player('/audios/vc5.mp3').toDestination();
player6 = new Tone.Player('/audios/vc6.mp3').toDestination();
player7 = new Tone.Player('/audios/vc7.mp3').toDestination();
player8 = new Tone.Player('/audios/vc8.mp3').toDestination();
player9 = new Tone.Player('/audios/vc9.mp3').toDestination();
player10 = new Tone.Player('/audios/vc10.mp3').toDestination();
player11 = new Tone.Player('/audios/vc11.mp3').toDestination();
player12 = new Tone.Player('/audios/vc12.mp3').toDestination();
player13 = new Tone.Player('/audios/vc13.mp3').toDestination();
player14 = new Tone.Player('/audios/vc14.mp3').toDestination();
player15 = new Tone.Player('/audios/vc15.mp3').toDestination();
player16 = new Tone.Player('/audios/vc16.mp3').toDestination();
player17 = new Tone.Player('/audios/vc17.mp3').toDestination();
player18 = new Tone.Player('/audios/vc18.mp3').toDestination();
player19 = new Tone.Player('/audios/vc19.mp3').toDestination();
player20 = new Tone.Player('/audios/vc20.mp3').toDestination();
player21 = new Tone.Player('/audios/vc21.mp3').toDestination();

let allPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21];

Tone.loaded().then(() => {


})

document.querySelector('#stop').addEventListener('click', () => {  
stopAll();

// players.stopAll();

// allPlayers.forEach(player => {
//   player.stop();
// })

// player1.stop();
// player2.stop();
// player3.stop();
// player4.stop();
// player5.stop();
// player6.stop();
// player7.stop();
// player8.stop();
// player9.stop();
// player10.stop();
// player11.stop();
// player12.stop();

})

function stopAll() {
allPlayers.forEach(player => {
  player.stop();
})
}

function runDetection(){
// console.log('detect')
model.detect(video) .then(predictions => {
  if(predictions.length !==0){
    let hand1 = predictions[0].bbox;
    let x = hand1[0];
    let y = hand1[1];
    // let x = hand2[2];
    // let y = hand2[3];
    // console.log(x)
   
    if (y > 100) {
      console.log(y, ", ", x)
      if (x < 100) {
        if(player1.state === "stopped"){
          player1.start()
        }
      } else if (x > 300) {
        if(player3.state === "stopped"){
          player3.start()
        }
  } else if (y > 200) {
    console.log(y, ", ", x)
       } else if (x < 100) {
        if(player4.state === "stopped"){
         triggerPlayback(player4)
        }
          // player4.start()
        } else if (x > 200) {
          if(player5.state === "stopped"){
          triggerPlayback(player5);
        } else if (x > 300) {
          if(player6.state === "stopped"){
          triggerPlayback(player6);
        } 
    }
    //PLAY THE SOUND
    // audio.play();
  }
});
}

function triggerPlayback(player) {
if(player.state === "stopped"){
  player.start()
}
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
          setInterval(runDetection, 250);
          console.log('Start Detection');
  },
  err => console.log(err)
  );
}
});






document.querySelector('#startAudio')?.addEventListener('click', async () => {
await Tone.start()
console.log('audio is ready')

})
