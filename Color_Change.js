var modal = document.getElementById("modal");

var changeBtn = document.getElementById("change");

var preview = document.getElementById("preview");


function Preview() {
    color = document.querySelector('input[name="colors"]:checked').value;
    console.log("The color is " + color);
    preview.style.background = color;
}

function changeColor() {
    console.log("The color is: " + color);
    document.body.style.background = color;
}

changeBtn.onclick = function() {
    modal.style.display = "grid"
}

function Close() {
    modal.style.display = "none";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        preview.style.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}