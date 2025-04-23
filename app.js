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

function highlightParagraphs() {
  // Get all elements with the class 'highlight'
  var elements = document.getElementsByClassName("highlight");
  // Loop through the elements and change their background color
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
  }
}
