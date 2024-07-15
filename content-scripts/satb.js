function startAtTheBeginning() {
  console.info("DOM fully loaded and parsed. Beginning execution of script \"satb.js\".");

  chrome.storage.sync.get(["isActive"], function(result) {
    if (result.isActive) {
      const searchParams = new URLSearchParams(window.location.search);
      const v = searchParams.get("v");
      const t = searchParams.get("t");
      const list = searchParams.get("list");
      var listParam = "";
      if (list != null) {
        listParam = "&list=" + list;
      }
      if (t == null) {
        if (listParam != "") {
          window.open("https://www.youtube.com/watch?v=" + v + listParam + "&t=0s", "_self");
        }
      }
      else if (t != "0s") {
        if (listParam != "") {
          window.open("https://www.youtube.com/watch?v=" + v + listParam + "&t=0s", "_self");
        }
        else {
          window.open("https://www.youtube.com/watch?v=" + v + "&t=0s", "_self");
        }
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startAtTheBeginning);
} else {
  startAtTheBeginning();
}
