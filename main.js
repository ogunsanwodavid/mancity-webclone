/*The function for close and open //with the hamburger and //the close button in the hidden nav*/
//The open with the hamburger
function hambgFunction() {
  let x = document.getElementById("hidden-nav");

  if (x.style.height === 0) {
    x.style.height = "100%"
  } else {
    x.style.height = "100%"
  }
}


//The close with the close icon
function closeNavFunction() {
  let x = document.getElementById("hidden-nav");

  x.style.height = "0"
}