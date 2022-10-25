function    newListElement()    {
    var list = document.getElementById('ul');
    var input = document.getElementById('input').value;
    var add = document.createElement('li');

    if (input === '' || input.length < 3) {
        alert("Tekstin tulee olla vähintään 3 merkkiä pitkä.");
        
      } else {
       
    add.appendChild(document.createTextNode(input));
    list.appendChild(add);
      } 
      
    document.getElementById("input").value = "";
}


let lista = {
  nimi: "Sami"
  ikä: 45
}

let lista_serialized = JSON.stringify(lista);
localStorage.setItem("lista", lista);
console.log(localStorage);