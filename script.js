
var wage = document.getElementById("navigation");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        changePage(e);
    }
    else if (e.keyCode == 9) {
        tabComplete(e);
    }
});

function changePage(e) {
    var destination = document.getElementById("navigation").value;
   console.log(destination);
}

function tabComplete(e) {
    var destination = document.getElementById("navigation");

    console.log("Tab: " + destination.value);
    if (destination.value.substring(0,1) == "p" ) {
        destination.value = "projects";
        window.location.href="https://github.com/ronakdev";
    }
    else if (destination.value.substring(0,1) == "r") {
        
                destination.value = "resume";
        window.location.href ="resume.pdf";

    }
    
    else if (destination.value.substring(0,1) == "a") {
        
                destination.value = "apps";
        window.location.href = "apps";

    }
    e.preventDefault();
}