let markers, map;

function initMap() {
  const posicion = {
    
    lat: -74.79096292448725,
    lng: 10.970113607278158,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        
        lat: 2.334330436732388,
        lng: 48.875094194521225,
      },
      map,
      title: "Paris",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 3.215235548049214,
        lng:  51.17812552036296,
      },
      map,
      title: "Brujas",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 24.989693858053613,
        lng: 60.18206847923627,
      },
      map,
      title: "Helsinki",  
    })
  );
}