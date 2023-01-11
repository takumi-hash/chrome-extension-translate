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
  document.querySelector(
    "#msg-api"
  ).innerText = `API Key set as ${options.apiKey}`;
});

chrome.storage.sync.get(["targetLang"], function (value) {
  if (typeof value.targetLang !== "undefined") {
    var selectedOption = document.getElementById(value.targetLang);
    selectedOption.selected = true;
    document.getElementById("selected-lang").textContent = value.targetLang;
  }
});

document.getElementById("langBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const lang = document.getElementById("lang-select").value;
  var options = {
    targetLang: lang,
  };
  chrome.storage.sync.set(options);
  document.querySelector(
    "#msg-lang"
  ).innerText = `Target Language set to ${options.targetLang}`;
});
