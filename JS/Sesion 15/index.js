let map;

function iniciar(){

var boton=document.getElementById('obtener');

boton.addEventListener('click', verLocalizacion, false);

}

 
function verLocalizacion(){
  navigator.geolocation.getCurrentPosition(verPosicion, verError);
}


function verPosicion(posicion){

var ubicacion=document.getElementById('localizacion');


map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: posicion.coords.latitude, lng: posicion.coords.longitude },
    zoom: 8,
  });



}

function verError(error){

alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+

'a internet y habilite la opción permitir compartir ubicación física');

}

window.addEventListener('load', iniciar, false);



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;