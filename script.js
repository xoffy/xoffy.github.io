
/** @type {HTMLDivElement} */
var widget = document.getElementById("widget");

/** @type {HTMLDivElement[]} */
var letters = [];

var deadcafe = "deadcafe.me";

var colors = [
    "#d8137f",
    "#d65407",
    "#dc8a0e",
    "#17ad98",
    "#149bda",
    "#796af5",
    "#bb60ea",
    "#c720ca"
];

var offset = 0;

for (var i = 0; i < deadcafe.length; i++) {
    /** @type {HTMLDivElement} */
    var letter = document.getElementById("letter-" + (i + 1));
    letter.style.color = colors[0];
    letters.push(letter);
}

window.setInterval(function() {
    for (var i = 0; i < letters.length; i++) {
        letters[i].style.color = colors[(offset - i) % colors.length];
    }
    offset += 1;
}, 120);
