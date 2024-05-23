//author: percy
//created: 5/23

//return gryffindor, ravenclaw, slytherin, and hufflepuff
// depending on length mod 4

function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

var myButton = document.getElementByID("button");
myButton.addEventListener("click", function(){
    var name = document.getElementByID("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementByID("output").innerHTML = newText;
})
