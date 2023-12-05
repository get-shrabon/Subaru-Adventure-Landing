let slideBox = document.querySelectorAll(".slide__box");
for (let i = 0; i < slideBox.length; i++) {
  const element = slideBox[i];
  element.addEventListener('click', function(){
      if (element.classList.contains("activeBox")) {
        element.classList.remove("activeBox");
      } else {
        element.classList.add("activeBox");
      }
  })
  
}

