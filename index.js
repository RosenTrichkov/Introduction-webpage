let buttonAnimation = document.querySelector("button");

buttonAnimation.addEventListener("click",function () {
  buttonAnimation.classList.add("pressed");
    setTimeout(function(){
        buttonAnimation.classList.remove("pressed");
    }, 100)});

    function dropdownFunction() {
      document.getElementById("dropdown").classList.toggle("show");
    };

    window.onclick = function(event) {
      if (!event.target.matches('.dbutton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }