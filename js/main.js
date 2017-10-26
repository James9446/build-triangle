// Function for creating line
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// Build triangle function 
function buildTriangle(num) {
	var newLine = '';
    for (var i = 1; i <= num; i++) {
        newLine += makeLine(i);
    }
    return newLine;
}
buildTriangle(10);
// test 
console.log(buildTriangle(10));