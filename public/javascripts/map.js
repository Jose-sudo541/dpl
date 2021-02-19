
var map = L.map('mapid').setView([28.4965, -13.8622], 13);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'  

}).addTo(map);


L.marker([28.503789, -13.853296]).addTo(map);

L.marker([28.501367, -13.853476]).addTo(map);

L.marker([28.502412, -13.858105]).addTo(map);


$.ajax ( {

    dataType: "json",

    url: "api/bicicletas",

    success: function(result){

        console.log(result);

        result.bicicletas.forEach(function(bici){

            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);

        });

    }

});

