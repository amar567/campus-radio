function loadMags() {
    let count = 6;
    magBox = document.getElementById("mag-box");
    for (let i = 0; i < count; i++) {
        magazine = document.createElement('div');
        magazine.className = "added";
        magBox.appendChild(magazine);
    }
}

function removeMags() {
    removable = document.getElementsByClassName("added");
    for (magazine of removable) {
        magazine.remove();
    }
}