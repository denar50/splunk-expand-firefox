const expandLogs = () =>
  browser.tabs.executeScript({
    file: "expandLogs.js"
  });

browser.browserAction.onClicked.addListener(expandLogs);
