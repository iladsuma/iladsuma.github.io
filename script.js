function toggleHiddenContent() {
  var hiddenMessage = document.getElementById("hiddenMessage");
  var balloonContainer = document.querySelector('.balloon-container');
  var hiddenContent = document.getElementById("hiddenContent");

  if (hiddenMessage.style.display === "none") {
    hiddenMessage.style.display = "block";
  } else {
    hiddenMessage.style.display = "none";
    balloonContainer.style.display = "flex";
    hiddenContent.style.display = "block";
  }
}
