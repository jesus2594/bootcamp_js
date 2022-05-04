    const arr = ["alfonso", "Manuel", "Diego", "gilberto"];
   
   var nombres = arr.map(function(nombre){
    return '<li>' + nombre.toString() + '</li>'
  })
  document.getElementById("nombres").innerHTML = nombres;
  

   