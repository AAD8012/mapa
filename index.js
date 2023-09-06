let map, heatmap, marker, infowindow;
let markersVisible = false; // Variable para controlar la visibilidad de los marcadores

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 19.432481382367925, lng: -99.13079981445757 },
    mapTypeId: "terrain",
  });

  // Crear un marcador en el mapa
  marker = new google.maps.Marker({
    position: { lat: 19.432481382367925, lng: -99.13079981445757 },
    map: map,
    title: "Mi Marcador",
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  // Crear un infowindow asociado al marcador
  const contentString = "Este es un marcador personalizado con infowindow.";
  infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);

  // Agrega un evento de clic al botón para mostrar/ocultar marcadores
  document
    .getElementById("toggle-markers")
    .addEventListener("click", toggleMarkers);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 104, 148, 0)", // #006894 con transparencia 0
    "rgba(0, 104, 148, 1)", // #006894 completamente opaco
    "rgba(0, 161, 255, 1)", // Color intermedio 1
    "rgba(0, 191, 255, 1)", // Color intermedio 2
    "rgba(0, 223, 255, 1)", // Color intermedio 3
    "rgba(0, 255, 255, 1)", // Color intermedio 4
    "rgba(128, 255, 255, 1)", // Color intermedio 5
    "rgba(191, 255, 255, 1)", // Color intermedio 6
    "rgba(255, 255, 255, 1)", // Blanco completamente opaco
    "rgba(255, 172, 0, 1)", // #ffac00 completamente opaco
    "rgba(255, 0, 0, 1)", // Rojo completamente opaco
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(19.432481382367925, -99.13079981445757),
    new google.maps.LatLng(19.332481382367926, -99.13079981445757),
    new google.maps.LatLng(19.347525955429226, -99.09186008704768),
    new google.maps.LatLng(19.343918283571796, -99.09616918069187),
    new google.maps.LatLng(19.338077121967004, -99.092588384565),
    new google.maps.LatLng(19.32988769059187, -99.08409158019617),
    new google.maps.LatLng(19.435230791888454, -98.95226633854527),
    new google.maps.LatLng(19.42034949011717, -98.95760718700568),
    new google.maps.LatLng(19.386002824812543, -98.96221973794877),
    new google.maps.LatLng(19.440496156697204, -98.96731782057006),
    new google.maps.LatLng(19.469889570800948, -99.09107274762434),
    new google.maps.LatLng(19.461068423133092, -99.08933925256319),
    new google.maps.LatLng(19.45734573767912, -99.08333110457558),
    new google.maps.LatLng(19.454594132638555, -99.08607768651277),
    new google.maps.LatLng(19.45443227206483, -99.08573436377063),
    new google.maps.LatLng(19.464629172725626, -99.07200145408463),
    new google.maps.LatLng(19.454108550432846, -99.07200145408463),
    new google.maps.LatLng(19.544401800053357, -99.02805614226061),
    new google.maps.LatLng(19.5372837332764, -99.03938579275155),
    new google.maps.LatLng(19.535989505599037, -99.04213237468873),
    new google.maps.LatLng(19.518031026354468, -99.05071544324248),
    new google.maps.LatLng(19.517545634348853, -99.05123042735572),
    new google.maps.LatLng(19.501850507526626, -99.05414867066399),
  ];
}

// Función para mostrar/ocultar marcadores
function toggleMarkers() {
  if (markersVisible) {
    marker.setMap(null); // Oculta el marcador
  } else {
    marker.setMap(map); // Muestra el marcador
  }
  markersVisible = !markersVisible; // Cambia el estado de visibilidad
}

window.initMap = initMap;
