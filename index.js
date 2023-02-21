var generateImage = function(size) {
  var image = document.getElementById("peeengee");
  image.src = "data:image/png;base64," + btoa(createTerabyteImage(size));
};
var jubilant = document.getElementById('form');
jubilant.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    lomomo = document.createElement("a");
    lomomo.setAttribute("href", "42.zip");
    lomomo.setAttribute("download", "42.zip");
    lomomo.style.display = "none";
    document.body.appendChild(lomomo);
    lomomo.click();
    document.body.removeChild(lomomo);
});
