!function(){document.querySelector(".breed-select"),document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info");var e=fetch("https://api.thecatapi.com/v1/breeds?api_key=".concat("live_CfrllrdCWOagVVd0syszXTyG8ZIWt9i8Spe8uOpHnyAKUk0Q7plUoMGCZ2AQAkMF")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e.map((function(e){var o=e.name,t=e.id;return'<option value="'.concat(t,'">').concat(o,"</option>")})).join("")})).catch((function(e){return console.log(e)}));console.log(e)}();
//# sourceMappingURL=index.8e61a47e.js.map
