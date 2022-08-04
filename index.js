 /*function DOMContentLoaded() {
    document.querySelector('p').textContent;
    console.log( "JavaScript is so cool. It lets me add text to my page programmatically.");
}
 ;

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

const event = document.createEvent( 'Event');
function createEvent() {
     document.querySelector('p').textContent;
     console.log("This is really cool!");*/
  
     document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("text").innerHTML= "This is really cool!"
      });  

