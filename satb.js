function startAtTheBeginning() {
  console.info("DOM fully loaded and parsed. Beginning execution of script \"satb.js\".");
  // main code execution here
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startAtTheBeginning);
} else {
  startAtTheBeginning();
}
