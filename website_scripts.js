
const clickAction = (event) => {
  //this should be the ID of your extension found in chrome://extensions/
  var editorExtensionId = "kjkgpofglfaefhhjlnminkolpjiajefi";
  
  // the extension is expecting to receive an item in the following format: {sku: "123456", quantity: 3}
  var item = { sku: event.target.dataset.sku, quantity: 1 };

  chrome.runtime.sendMessage(editorExtensionId, { item: item },
    function (response) {
      console.log("reponse", response)
    }
  );
}

// let's select all buttons
var itemButtons = document.getElementsByClassName("add-item");

// and add the click event to each
Array.from(itemButtons).forEach(function (element) {
  element.addEventListener('click', clickAction);
});