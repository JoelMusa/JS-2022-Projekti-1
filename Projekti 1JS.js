function newListElement()    {
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

function tallenna() {

  var input = document.getElementById('input').value;
  var old = JSON.parse(localStorage.getItem('tehtävät')) || []; 
    old.push(input);
    localStorage.setItem('tehtävät', JSON.stringify(old));


}


  

  



  








