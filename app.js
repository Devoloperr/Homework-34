let header = document.querySelector("h1")
header.remove();
let header1 = document.createElement("h1")
header1.innerHTML= "Series";
let body = document.querySelector("body")
body.prepend(header1);
