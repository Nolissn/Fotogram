let pictures = [
  "black_hole.webp",
  "blue_giant.webp",
  "cosmic_net.webp",
  "galaxy.webp",
  "nebula.webp",
  "pulsar.webp",
  "saturn.webp",
  "space_exploration.webp",
  "space_walk.webp",
  "sun.webp",
  "triple_star_system.webp",
  "voyager.webp",
];

let currentIndex = 0;

function addfirstrow() {
  let row_one = document.getElementById("pictures_div_row_one");
  for (let index = 0; index < 7; index++) {
    row_one.innerHTML += getFirstRowTemplate(index);
  }
}

function getFirstRowTemplate(index) {
  return `<div class="thumbnail_div" onclick="openDialog(${index})">
        <img src="./assets/pictures/${pictures[index]}" alt="thumbnail" class="thumbnail_imgage"/>
    </div>`;
}

function addsecondrow() {
  let row_two = document.getElementById("pictures_div_row_two");
  for (let index = 7; index < pictures.length; index++) {
    row_two.innerHTML += getSecondRowTemplate(index);
  }
}

function getSecondRowTemplate(index) {
  return `<div class="thumbnail_div" onclick="openDialog(${index})">
        <img src="./assets/pictures/${pictures[index]}" alt="thumbnail" class="thumbnail_imgage" />
    </div>`;
}

function openDialog(index) {
  showPicture(index);
  document.getElementById("dialogID").showModal();
}

function showPicture(index) {
  currentIndex = index;
  document.getElementById("dialog_image").src =
    "./assets/pictures/" + pictures[index];
  document.getElementById("dialog_counter").innerHTML = index + 1;
  showTitle(index);
}

function showTitle(index) {
  let title = pictures[index].replace(".webp", "");
  title = title.replaceAll("_", " ");
  title = title.charAt(0).toUpperCase() + title.slice(1);
  document.getElementById("dialog_header_text_id").innerText = title;
}

function directionLeft() {
  if (currentIndex === 0) {
    showPicture(pictures.length - 1);
  } else {
    showPicture(currentIndex - 1);
  }
}

function directionRight() {
  if (currentIndex === 11) {
    showPicture(pictures.length - 12);
  } else {
    showPicture(currentIndex + 1);
  }
}

function closeDialog() {
  document.getElementById("dialogID").close();
}

addfirstrow();
addsecondrow();