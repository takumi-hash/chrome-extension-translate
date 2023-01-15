let secret;
let targetLang;

// document.body.onload = function () {
//   chrome.storage.sync.get(["apiKey", "targetLang"], function (value) {
//     secret = value.apiKey;
//     targetLang = value.targetLang;
//   });
// };
document.body.onload = function () {
  chrome.storage.sync.get(["apiKey", "targetLang"], function (value) {
    secret = value.apiKey;
    targetLang = value.targetLang;

    if (typeof secret === "undefined") {
      document.getElementById("apiKeyMsg").innerText =
        "Your DeepL API Key is not set. Plase set up on the Option page.";
    } else {
      document.getElementById("apiKeyMsg").innerText =
        "API Key is set :) Start playing video on Udemy with captions. Translation will start automatically.";
    }
  });
};

document.getElementById("btn").addEventListener("click", async () => {
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.runtime.openOptionsPage();
});

// function onRun() {
//   chrome.storage.sync.get(null, (options) => {
//     document.body.style.backgroundColor = options.colorValue;
//   });
// }
