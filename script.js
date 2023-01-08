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
    link.href = 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png';

    // Append the link element to the head of the document
    document.getElementsByTagName('head')[0].appendChild(link);
    
    document.title = "Google";
    
  } else {
    // The user has returned to this site
    
  }
});
