document.getElementById("startButton").addEventListener("click", function(e){
  document.getElementById("welcome").style.left = "-10000px";
});
let checker = 0;

document.getElementById("end").addEventListener("change", mover);
document.getElementById("travelMode").addEventListener("change", mover);
document.getElementById("ticket").addEventListener("click", mover);

function mover(e){
  e.target.style.width = '100%';
  e.target.style.marginTop = '0';
  e.target.style.backgroundColor = '#2980b9';
  checker = 1;
  if (checker != 0) {
    document.getElementById('footerText').style.left= "-3700px";
    checker = 0;
  }
}

let open = false;
let openMap = false;
let classname = document.getElementsByClassName('item-header');
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function(e) {
      if(e.target.classList.contains('openMap') && openMap == false) {
        document.getElementsByClassName('starter')[0].style.display = 'none';
        openMap = true;
      } else if (e.target.classList.contains('openMap') && openMap == true) {
        document.getElementsByClassName('starter')[0].style.display = 'black';
        openMap = false;
      } else if (open==false) {
        e.target.parentNode.style.left = "-505px";
        open = true;
      } else {
        e.target.parentNode.style.left = "0px";
        open = false;
      }
    });
};


// let directions = new DirectionsService();
