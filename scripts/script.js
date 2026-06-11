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

function addfirstrow() {
  let row_one = document.getElementById("pictures_div_row_one");
  for (let index = 0; index < 7; index++) {
    row_one.innerHTML += getFirstRowTemplate(index);
  }
}

function getFirstRowTemplate(index)
{
  return `<div class="thumbnail_div" onclick="openDialog()">
        <img src="./assets/pictures/${pictures[index]}" alt="thumbnail" class="thumbnail_imgage">
    </div>`;
}

function addsecondrow() {
  let row_two = document.getElementById("pictures_div_row_two");
  for (let index = 7; index < pictures.length; index++) {
    row_two.innerHTML += getSecondRowTemplate(index);
  }
}

function getSecondRowTemplate(index)
{
  return `<div class="thumbnail_div" onclick="openDialog()">
        <img src="./assets/pictures/${pictures[index]}" alt="thumbnail" class="thumbnail_imgage">
    </div>`;
}

function openDialog(){
  let dialog = document.getElementById("dialogID");
  dialog.showModal();
}

addfirstrow();
addsecondrow();