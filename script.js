
var wage = document.getElementById("navigation");

wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        runCommand();
    }
    else if (e.keyCode == 9) {
        tabComplete(e);
        e.preventDefault();
    }
});

function goTo(location) {
    window.location.href = location;
}

function runCommand() {
   var destintation =  document.getElementById("navigation").value;
    destintation = destintation.toLowerCase();
    if (destintation.substring(0,2) == "cd") {
        destintation = destintation.substring(3,destintation.length);
    }
    if (destintation.substring(0,3) == "g++") {
        alert("what dafaq do you think you are gonna compile?!");
    }
    else if (destintation.substring(0,5) == "cmake") {
        alert("respect. but again, what dafaq do you think you are gonna compile?!!?!");
    }
    else {
        switch (destintation) {
            case "./.secretcommand.sh": {
                alert("It ain't gonna be that easy :D");
                break;
            }
            case "sudo": {
                alert("Good News: There isn't a password (idk why).\n\n Bad News: You didn't complete the challenge.")
                break;
            }
            case "sudo ./.secretcommand.sh":
                alert("you have completed the first challenge. i dare ye to find the final challenge :D :D");
                break;
            case "sudo su":
                alert("god damn it you solved the second. but I DOUBT YOU WILL FIND THE FINAL");
                break;
            case "sudo apt install sl lolcat tree":
                alert("Idk who dafaq you are, but you know me way to well.");
                break;
            case "sl":
                var msg = '                              (@@) (  ) (@)  ( )  @@    ()    @     O     @\n'+
    '                         (   )\n' +
    '                     (@@@@)\n' +
    '                  (    )\n' +
    '\n' +
    '                (@@@)\n' +
    '               ====        ________                ___________\n' +
    '           _D _|  |_______/        \__I_I_____===__|_________|\n' +
    '            |(_)---  |   H\________/ |   |        =|___ ___|      ______________\n' +
    '            /     |  |   H  |  |     |   |         ||_| |_||     _|\n' +
    '           |      |  |   H  |__--------------------| [___] |   =|\n' +
    '           | ________|___H__/__|_____/[][]~\_______|       |   -|\n' +
    '           |/ |   |-----------I_____I [][] []  D   |=======|____|_______________\n' +
    '         __/ =| o |=-O=====O=====O=====O \ ____Y___________|__|_________________\n' +
    '          |/-=|___|=    ||    ||    ||    |_____/~\___/          |_D__D__D_|  |_\n' +
    '           \_/      \__/  \__/  \__/  \__/      \_/               \_/   \_/    \ \nIdk how to animate stuff sry';
                alert(msg);
                break;
            case "ls":
                alert("Easter Egg [Directory]");
                break;
            case "ls -a":
                alert(".secretcommand.sh");
                break;
            case "help":
                alert(" Use basic and custom terminal commands to navigate your way through!\n\n achievments -> View my Achievements \n\n projects -> View my Projects\n\n resume -> View my Resume\n\n apps -> View my resume");
                break;
            case "achievements":
                goTo("/achievements");
                break;
            case "projects":
                goTo("/projects");
                break;
            case "resume":
                goTo("/resume.pdf");
                break;
            case "apps":
                goTo("/apps");
                break;
            case "easter":
                goTo("/spookyspookyskeletonstotallynotaneasteregg");
            default:
                var nav = document.getElementById("navigation")
                nav.value = "invalid command";
                nav.setSelectionRange(0, nav.value.length)
        }
    }

}
function tabComplete() {
    var destination = document.getElementById("navigation");

    console.log("Tab: " + destination.value);
    if (destination.value.substring(0,1) == "p" ) {
        destination.value = "projects";
    }
    else if (destination.value.substring(0,1) == "r") { 
        destination.value = "resume";
    }
    
    else if (destination.value.substring(0,2) == "ap") {
        destination.value = "apps";
    }
    else if (destination.value.substring(0,2) == "ac") {
        destination.value = "achievements";
    }
    else if (destination.value.substring(0,1) == "l") {
        destination.value = "ls";
    }
    else if (destination.value.substring(0,1) == "c") {
        destination.value = "cd";
    }
    else if (destination.value.substring(0,1) == ".") {
        destination.value = "./";
    }
    else if (destination.value.substring(0,1) == "s") {
        destination.value = "sudo";
    }
}