//receives messages from the website 
chrome.runtime.onMessageExternal.addListener(
  function (request, sender, sendResponse) {

    //we're looking for the presence of "item" in the incoming message
    if (request.item) {
      //we'll grab all items currently in our selection
      chrome.storage.sync.get('items', function (data) {
        let currentItems = data.items;

        //and inject the new item into the selection
        currentItems.push(request.item);
         
        //then update the selection on the extension's storage
        chrome.storage.sync.set({ items: currentItems }, function () {
          sendResponse({ status: "added" });
        });
      });
    }
  }
);


