const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "10px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`;
    }
  });
});

const body = document.body;
body.addEventListener("keydown", (event) => {
  console.log(event.code);

  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "green")
      : (body.style.backgroundColor = "");
  }
});
