//side bar

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";

}

document.getElementById("tip").addEventListener("mouseover", drop, back)
    /*
    function drop() {
        x = document.getElementById("about");
        x.style.top = "0px"
    }

    function back() {
        x = document.getElementById("about");
        x.style.top = "-500px"
    }
    */


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}