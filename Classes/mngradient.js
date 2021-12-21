var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

function gradient() {
    var gradient = context.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
context.strokeStyle = gradient;
context.lineWidth = 3;
context.clearRect(0, 0, canvas.width, canvas.height);
}