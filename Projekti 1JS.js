//Lisää listaelementtejä, luo poistopainikkeen elementille ja klikkaamalla voi merkitä tehdyksi yhden listaelementin .
function newListElement() {
  var list = document.getElementById("ul");

  var input = document.getElementById("input").value;

  var addListElement = document.createElement("li");
  addListElement.Class = "check";

  var pElement = document.createElement("p");

  var span = document.createElement("span");
  var deleteIcon = document.createElement("img");
  deleteIcon.src = "removeIcon.png";
  deleteIcon.id = "deleteicon";

  pElement.appendChild(document.createTextNode(input));
  addListElement.appendChild(pElement);
  span.appendChild(deleteIcon);
  pElement.appendChild(span);

  if (input === "" || input.length < 3) {
    alert("Tekstin tulee olla vähintään 3 merkkiä pitkä.");
    document.getElementById("input").style.borderColor = "red";
  } else {
    document.getElementById("input").style.borderColor = "";
    list.appendChild(addListElement);
  }

  addListElement.addEventListener(
    "click",
    function () {
      document - this.classList.toggle("check");
    },
    false
  );

  deleteIcon.addEventListener("click", function () {
    addListElement.remove();
    localStorage.removeItem("tehtävät[]");
  });

  //Poistaa osan listaelementeistä, ja tyhjentää koko local storagen.
  document.getElementById("removeAll").addEventListener("click", function () {
    addListElement.remove();
    localStorage.removeItem("tehtävät");
  });
  save();
  document.getElementById("input").value = "";
}

//Tallentaa lisätyn listaelementin LocalStorageen.
function save() {
  console.log();
  var input = document.getElementById("input").value;
  var aa = JSON.parse(localStorage.getItem("tehtävät")) || [];
  aa.push(input);
  localStorage.setItem("tehtävät", JSON.stringify(aa));
}

//Hakee sivun latautuessa LocalStoragesta listaelementit.
function search() {
  console.log();
  var lista = JSON.parse(localStorage.getItem("tehtävät"));

  if (lista != null) {
    let kpl = lista.length;
    for (i = 0; i < kpl; i++) {
      console.log(lista[i]);

      document.getElementById("ul").innerHTML +=
        "<li id=lista>" +
        "<p>" +
        lista[i] +
        "<span>" +
        "<img src=removeIcon.png id=deleteicon>" +
        "</img>" +
        "</span>" +
        "</p>" +
        "</li>";
    }
  }
}
