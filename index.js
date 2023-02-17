var generateImage = function(size) {
  var image = new Image();
  image.src = "data:image/png;base64," + btoa(createTerabyteImage(size));
  image.open();
};
generateImage(17);
