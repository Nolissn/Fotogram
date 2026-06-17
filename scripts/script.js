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

function renderThumbnails() {
  let section = document.querySelector(".picture_section");
  for (let index = 0; index < pictures.length; index++) {
    section.innerHTML += getThumbnailTemplate(index);
  }
}

function getThumbnailTemplate(index) {
  return `<div class="thumbnail_div" onclick="openDialog(${index})" tabindex="0">
        <img src="./assets/pictures/${pictures[index]}" alt="thumbnail" class="thumbnail_imgage"/>
    </div>`;
}

function openDialog(index) {
  showPicture(index);
  document.getElementById("dialogID").showModal();
}

function dialogClickedOutside(event) {
  let rect = event.currentTarget.getBoundingClientRect();
  let clickedInside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!clickedInside) {
    closeDialog();
  }
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