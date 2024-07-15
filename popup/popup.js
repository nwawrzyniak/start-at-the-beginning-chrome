function popup() {
  console.info("DOM fully loaded and parsed. Beginning execution of script \"popup.js\".");
  // main code execution here
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", popup);
} else {
  popup();
}
