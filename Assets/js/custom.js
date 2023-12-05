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

// document
//   .querySelector(".slide__box")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     var slideBox = document.querySelector(".slide__box");
//     for (let i = 0; i < slideBox.length; i++) {
//       const element = slideBox[i];
//           if (element.classList.contains("activeBox")) {
//             element.classList.remove("activeBox");
//           } else {
//             element.classList.add("activeBox");
//           }
//     }
    

//   });
