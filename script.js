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
  alert("You can't pause 'cool music' you have to pause 'OUR music'")
  xMusic.play();
 }
  
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'data:image/png;base64,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';

    // Append the link element to the head of the document
    document.getElementsByTagName('head')[0].appendChild(link);
    
    document.title = "Google";
    
  } else {
    // The user has returned to this site
    
  }
});
