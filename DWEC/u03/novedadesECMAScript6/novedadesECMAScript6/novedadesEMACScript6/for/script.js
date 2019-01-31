let personal = ["c#", "python", "javascript", "ruby"];

document.write("------for tradicional----------")
for (let i = 0; i < personal.length; i++) {
    document.write(`<br>${personal[i]}`);
}

document.write("<br>------for in----------");

for (let ele in personal) { // ele es el índice
    document.write(`<br>${personal[ele]}`);
}

document.write("<br>------for of----------");

for (let ele of personal) {
    document.write(`<br>${ele}`);
}

document.write("<br>------for each----------");

personal.forEach(function (ele, i) {
    document.write(`<br>${ele} índice: ${i}`);
});