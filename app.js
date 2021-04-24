const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 1,        // maximum number of boxes to detect
    iouThreshold: 0.1,      // ioU threshold for non-max suppression
    scoreThreshold: 0.1    // confidence threshold for predictions.
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

let player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12;
player1 = new Tone.Player('vc1.mp3').toDestination();
player2 = new Tone.Player('vc2.mp3').toDestination();
player3 = new Tone.Player('vc3.mp3').toDestination();
player4 = new Tone.Player('vc4.mp3').toDestination();
player5 = new Tone.Player('vc5.mp3').toDestination();
player6 = new Tone.Player('vc6.mp3').toDestination();
player7 = new Tone.Player('vc7.mp3').toDestination();
player8 = new Tone.Player('vc8.mp3').toDestination();
player9 = new Tone.Player('vc9.mp3').toDestination();
player10 = new Tone.Player('vc10.mp3').toDestination();
player11 = new Tone.Player('vc11.mp3').toDestination();
player12 = new Tone.Player('vc12.mp3').toDestination();

Tone.loaded().then(() => {
  
  
})

document.querySelector('#stop').addEventListener('click', () => {  
  // players.stopAll();
  player1.stop();
  player2.stop();
  player3.stop();
  player4.stop();
  player5.stop();

})

function runDetection(){
  // console.log('detect')
  model.detect(video) .then(predictions => {
    if(predictions.length !==0){
      let hand1 = predictions[0].bbox;
      let x = hand1[0];
      let y = hand1[1];
      console.log(x)
     
      if (y > 100) {
        if (x < 0) {
          // player1.start()
        // } else if(x > 150){
        //   player2.start()
        } else if(x > 200){
          player2.start()
        // } else if(x > 250){
        //   player4.start()
        } else if(x > 3000){
          player3.start()
        // } else if(x > 350){
        //   player6.start()

        } else if (y > 200) {
         } else if (x < 100) {
            player4.start()
          // } else if(x > 150){
          //   player2.start()
          } else if(x > 200){
            player5.start()
          // } else if(x > 250){
          //   player4.start()
          } else if(x > 3000){
            player6.start()
          // } else if(x > 350){
          //   player6.start()
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






document.querySelector('#startAudio')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
 
})
  