document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class name "name"
    var names = document.querySelectorAll(".name");

    // Loop through each "name" element
    names.forEach(function(name) {
        // Add a click event listener to each "name" element
        name.addEventListener("click", function() {
            // Change the background color of the clicked "name" element
            this.style.backgroundColor = "lightblue";

            // You can add more actions or functionality here
        });
    });
});