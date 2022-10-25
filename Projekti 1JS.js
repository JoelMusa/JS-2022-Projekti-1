function    newListElement()    {
    var list = document.getElementById('ul');
    var input = document.getElementById('input').value;
    var addList = document.createElement('li');
    var addCheckbox = document.createElement('input')
    addCheckbox.type = "checkbox"
    addCheckbox.id = "checkbox"

    if (input === '' || input.length < 3) {
        alert("Tekstin tulee olla vähintään 3 merkkiä pitkä.");
        
      } else {
    addList.appendChild(addCheckbox)  
    addList.appendChild(document.createTextNode(input));
    list.appendChild(addList);
    
    
      } 
    
      document.getElementById("input").value = "";
}

var list = document.querySelector('ul');
list.addEventListener('click', check(), uncheck())


function check() {
  document.getElementById("myCheck").checked = true;
}

function uncheck() {
  document.getElementById("myCheck").checked = false;
}
