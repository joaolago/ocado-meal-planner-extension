//when clicking the "Add to Ocado Cart" button
document.getElementById("fill-cart").onclick = () => {
  chrome.storage.sync.get('items', (data) => {
    data.items.forEach(item => {
      
      //tells the extension to call ocado with this item's SKU and desired quantity
      chrome.tabs.executeScript(
        {
          code: `
            csrf = document.querySelector("meta[name=_csrf]").content;
            quantity = 1;
            fetch("https://www.ocado.com/webshop/addToBasket.do", {
              "headers": {
                "content-type": "application/x-www-form-urlencoded",
              },
              "body": "_csrf=" + csrf + "&sku=" + ${item.sku} + "&quantity=" + ${item.quantity} + "&ajax=true",
              "method": "POST",
              "credentials": "include"
            });
          `
        },
      )
    });
  });
};

// clears the current item selection when the "Clear Selection" button is clicked
document.getElementById("clear-cart").onclick = () => {
  clearItems();
}

// writes the current number of items in the UI
const getCurrentItems = () => (
  chrome.storage.sync.get('items', (data)=>{
    document.getElementById("nr-items").innerHTML = data.items.length;
  })
);

// clears the current item selection and writes "0" on the UI
const clearItems = () => {
  chrome.storage.sync.set({ items: [] }, function () {
    document.getElementById("nr-items").innerHTML = "0";
  });
}

// checks the current item list and updates the UI when the pop up opens
getCurrentItems();


chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  let url = tabs[0].url;
  if (url.indexOf("ocado.com") >= 0) {
    document.getElementById("fill-cart").classList.remove('hidden');
  } else {
    document.getElementById("fill-cart").classList.add('hidden');
  }
  // use `url` here inside the callback because it's asynchronous!
});