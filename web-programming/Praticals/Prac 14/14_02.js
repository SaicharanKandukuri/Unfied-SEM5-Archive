function plaindrom_check() {
    var str = prompt("Enter a string: ");
    var str_rev = str.split("").reverse().join("");
    if (str == str_rev) {
        console.log("Plaindrom");
        alert("Plaindrom");
    }
    else {
        console.log("Not a plaindrom");
        alert("Not a plaindrom");
    }
}
