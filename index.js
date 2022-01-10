console.log("This project is on Drag & Drop");

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listners for draggable event imgBox

//When we grab imgBox

imgBox.addEventListener("dragstart", (e) => {
  console.log("Drag start has been triggered");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

// When we drop imgBox

imgBox.addEventListener("dragend", (e) => {
  console.log("Drag end has been triggered");
  e.target.className = "imgBox";
});

//

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver has been triggered");
  });

  //

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("DragEnter has been triggered");
    // e.target.className = " dashed";
  });

  //

  whiteBox.addEventListener("dragleave", () => {
    console.log("DragLeave has been triggered");
  });

  //

  whiteBox.addEventListener("drop", (e) => {
    console.log("Drop has been triggered");
    e.target.append(imgBox);
  });
}
