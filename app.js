function changeColor(newColor) {
  const elem = document.getElementById("demo");
  elem.style.color = newColor;
}

const collection = document.getElementsByName("devices");
for (let i = 0; i < collection.length; i++) {
  if (collection[i].type == "checkbox") {
    collection[i].checked = true;
  }
}
