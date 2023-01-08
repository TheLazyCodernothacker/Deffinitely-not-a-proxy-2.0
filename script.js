  var xMusic = new Audio('Assets/sounds/coolsong.mp3');
  var yMusic = new Audio('Assets/sounds/Studio_Project.mp3');
  var Nugget = new Audio('Assets/sounds/Nugget.mp3');
  var celery = new Audio('Assets/sounds/Celebrate.mp3');
  var SauceBad = new Audio('Assets/sounds/boo.mp3');
function playMusic(){
  xMusic.play();
  }
function rickroll(){
  yMusic.play();
  alert("We're no strangers to love You know the rules and so do I (do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but you're too shy to say it (to say it) Inside, we both know what's been going on (going on) We know the game and we're gonna play it I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you")
  }

function confirmjoke() {
  let text = "This is a joke, nothing here is meant to be serious and you shouldn't be scared. Anything you do on this website will not affect you at all. Anything you submit won't be sent to a server and any virus you download will do nothing to your computer.";
  if (confirm(text) == true) {
  }
}


function chickenNuggie() {
  Nugget.play();
  alert("Corn downloaded!")
  const pictureUrl = "./Assets/corn.png";
  const a = document.createElement("a");
  a.href = pictureUrl;
  a.download = "corn.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
 }
 
function morechickenNuggie() {
  Nugget.play();
  alert("More Corn downloaded!")
  const pictureUrl = "./Assets/corn.png";
  const a = document.createElement("a");
  a.href = pictureUrl;
  a.download = "corn.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
 }
 
 
function MOREchickenNuggie() {
  Nugget.play();
  alert("MORE Corn downloaded!")
  const pictureUrl = "./Assets/corn.png";
  const a = document.createElement("a");
  a.href = pictureUrl;
  a.download = "corn.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
 }

 function stopmusic() {
  alert("You can't pause 'cool music' you have to pause 'OUR music'")
  xMusic.play();
 }

function CelebrateDif() {
  celery.play();
 }

function BadSauce() {
  SauceBad.play();
}
  
