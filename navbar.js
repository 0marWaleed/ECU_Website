var navBar = document.getElementById("navBar")
function showMenu(){
    navBar.style.display = "block";
    
    setTimeout(function(){
      navBar.style.right = "0";
    },80)
}
function hideMenu(){
    navBar.style.right = "-45%";
    setTimeout(function(){
      navBar.style.display = "none";
    },1020)
}
