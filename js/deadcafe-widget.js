
/** @type {HTMLDivElement} */
var description = document.getElementById("deadcafe-description");
if (description != null) {
    description.innerHTML = "(⊃｡•́‿•̀｡)⊃";
}

/** @type {HTMLDivElement} */
var widget = document.getElementById("deadcafe-widget");

/** @type {HTMLDivElement[]} */
var letters = [];
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
widget.childNodes.forEach(function(e) {
    if (e.nodeType != Node.ELEMENT_NODE) {
        return;
    }
    if (e.getAttribute("class") == "deadcafe-letter") {
        letters.push(e);
    }
});

var offset = 0;

var shift_rainbow = function() {
    for (var i = 0; i < letters.length; i++) {
        letters[i].style.color = colors[(offset - i) % colors.length];
    }
    offset += 1;
};

for (var i = 0; i < letters.length; i++) {
    shift_rainbow();
}

if (description) {
    var interval = 120;
} else {
    var interval = 1250;
}
window.setInterval(shift_rainbow, interval);