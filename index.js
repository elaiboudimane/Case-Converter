let txtArea = document.getElementById("Case-converter-text");

let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");
let saveTextFileBtn = document.getElementById("save-text-file");

function upperCase(str) {
    return str.toUpperCase();
}

function lowerCase(str) {
    return str.toLowerCase();
}

function properCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function sentenceCase(str) {
    str = str.toLowerCase().split('. ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join('. ');
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upperCaseBtn.addEventListener("click", function() {
    txtArea.value = upperCase(txtArea.value);
});

lowerCaseBtn.addEventListener("click", function() {
    txtArea.value = lowerCase(txtArea.value);
});

properCaseBtn.addEventListener("click", function() {
    txtArea.value = properCase(txtArea.value);
});

sentenceCaseBtn.addEventListener("click", function() {
    txtArea.value = sentenceCase(txtArea.value);
});

saveTextFileBtn.addEventListener("click", function() {
    download("text.txt", txtArea.value);
});