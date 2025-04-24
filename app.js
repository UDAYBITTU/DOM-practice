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

function countpara() {
  var totalpara = document.getElementsByTagName("p");
  alert("total p tags are: " + totalpara.length);
}

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  const paragraph = document.querySelector("#myParagraph");
  paragraph.textContent = "The text has been changed!";
});

 const elements = document.querySelectorAll(".highlight");
 elements.forEach((element) => {
   element.style.color = "red";
 });


//************************************************************************************************ */
const redButton = document.getElementById("redButton");
redButton.addEventListener('click', changeTextColor);

function changeTextColor() {
  const p = document.getElementById('welcome');
  if (p.className === "text-default") {
    p.className = "my-new-class";
    p.textContent = "color changed to new color";
  } else {
    p.className = "text-default";
    p.textContent = "color changed to default";
  }
}
//************************************************************************************************ */