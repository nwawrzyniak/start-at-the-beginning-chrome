function popup() {
  console.info("DOM fully loaded and parsed. Beginning execution of script \"popup.js\".");

  const checkbox = document.querySelector(".satb-switch input");
  chrome.storage.sync.get(["isActive"], function(result) {
    if (result.isActive !== undefined) {
      checkbox.checked = result.isActive;
    }
  });
  checkbox.addEventListener("change", function() {
    chrome.storage.sync.set({ isActive: checkbox.checked }, function() {
      console.log("The value is set to " + checkbox.checked);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", popup);
} else {
  popup();
}
