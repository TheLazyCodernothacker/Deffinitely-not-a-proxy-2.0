  var xMusic = new Audio('Assets/sounds/coolsong.mp3');
  var yMusic = new Audio('Assets/sounds/Studio_Project.mp3');
function playMusic(){
  xMusic.play();
  }
function rickroll(){
  yMusic.play();
  }

function confirmjoke() {
  let text = "This is a joke, nothing here is meant to be serious and you shouldn't be scared. Anything you do on this website will not affect you at all. Anything you submit won't be sent to a server and any virus you download will do nothing to your computer.";
  if (confirm(text) == true) {
  }
}

 function stopmusic() {
  yMusic.stop()
  xMusic.stop()
 }
  
  
