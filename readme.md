# Chrome Extension to fill Ocado cart

## Loading the extension

![](http://drop.whoisjuliosantos.com/mbbclO+)

Visit [chrome://extensions](chrome://extensions), tick "Developer mode", and click "Load unpacked". Find the folder with these files and proceed. You may need to click the toggle on the bottom right corner for it to show up next your URL bar.

![](http://drop.whoisjuliosantos.com/dV7VOB+)

## Operation and further development

This extension operates as a proxy between the meal planner app/website and Ocado's website. The extension will display the current number of selected items and a button to clear that selection. Each item in the selection has its own SKU and the total quantity desired.
If the user is currently on ocado.com, an extra button will appear that sends all items and respective quantities in the current selection straight to the shopping trolley on Ocado. A page refresh is usually necessary to see this action reflected on the trolley.

The Meal Planner website consists of the website.html and website_scripts.js files and should be running on some hosting server so that chrome can accept messages sent from it to the extension. The new hosting must be added to manifest.json for the same reason, namely to the "permissions" and "externally_connectable.matches" sections. See current amazonaws.com example there.

When following the above instructions to create your extension, don't forget to update the extension ID on the website_scripts.js file, since that ID will be unique to your development environment.

