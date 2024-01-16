document.getElementById("view-groups").addEventListener("click", function() {
  
  var popup = document.getElementById("popup");
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  popup.style.display = "block";
  overlay.style.display = "block";

  document.getElementById("cross").addEventListener("click", function() {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
