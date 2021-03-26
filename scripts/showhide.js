var x = document.getElementById("output");
var y = document.getElementById("outputMessages");
function showHide(button) {
    if (button === 'messages') {
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    } else {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
 }
}