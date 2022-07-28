function read(filepath) {
    const file = filepath;
    const reader = new FileReader();
    var content = reader.readAsText(file);

    return content;
}

function parseJson() {
    var content = read("data.json");
    var json = JSON.parse(content);
    // show on doc
    document.getElementById('json').innerHTML = json;
}
