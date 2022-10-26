function    newListElement()    {
    var list = document.getElementById('ul');
    var input = document.getElementById('input').value;
    localStorage.setItem("Tehtävät", JSON.stringify(input));
    localStorage.removeItem(Tehtävät);
    
    var add = document.createElement('li');

    if (input === '' || input.length < 3) {
        alert("Tekstin tulee olla vähintään 3 merkkiä pitkä.");
        
      } else {
       
    add.appendChild(document.createTextNode(input));
    list.appendChild(add);
      } 
      
    document.getElementById("input").value = "";
};



