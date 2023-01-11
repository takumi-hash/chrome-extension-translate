const existingOptions = chrome.storage.sync.get(["options"]);

chrome.storage.sync.get(["apiKey"], function (value) {
  if (typeof value.apiKey !== "undefined") {
    document.getElementById("apiKey").value = value.apiKey;
  }
});

document.getElementById("apiKeyBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const secret = document.getElementById("apiKey").value;
  var options = {
    apiKey: secret,
  };
  chrome.storage.sync.set(options);
  document.querySelector("#msg").innerText = `API Key set as ${options.apiKey}`;
});
