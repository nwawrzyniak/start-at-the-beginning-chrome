function startAtTheBeginning() {
  console.info("DOM fully loaded and parsed. Beginning execution of script \"satb.js\".");

  chrome.storage.sync.get(["isActive"], function(result) {
    if (result.isActive) {
      const searchParams = new URLSearchParams(window.location.search);
      const v = searchParams.get("v");
      const t = searchParams.get("t");
      if (t == null) {
        // No t parameter found. Do nothing.
      }
      else if (t != "0s") {
        window.open("https://www.youtube.com/watch?v=" + v + "&t=0s", "_self");
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startAtTheBeginning);
} else {
  startAtTheBeginning();
}
