const elm = document.body;
const config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};

let caption;
let nowString;
let secret;
chrome.storage.sync.get(["apiKey", "targetLang"], function (value) {
  secret = value.apiKey;
  targetLang = value.targetLang;
});

const observer = new MutationObserver(function () {
  caption =
    $("div[class^='well--container--']").length == 1
      ? $("div[class^='well--container--']").text()
      : $("div[class^='captions-display--captions-container']").text();
  if (caption !== "" && nowString !== caption) {
    console.log("Chrome Extension Traslation started.");
    nowString = caption;
    observer.disconnect();
    $.post("https://api-free.deepl.com/v2/translate", {
      auth_key: secret,
      text: nowString,
      target_lang: targetLang,
    })
      .done(function (data) {
        console.log(data.translations[0].text);
        if ($("div[id^='custom-deepl']").length < 1) {
          let customArea = '<div id="custom-deepl"></div>';
          $("body").append(customArea);
        }
        $("div[id^='custom-deepl']").text(data.translations[0].text);
      })
      .always(function () {
        observer.observe(elm, config);
      });
  }
});

observer.observe(elm, config);
