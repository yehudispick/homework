/* global google, $*/

window.initMap = function(){
    'use strict';
    const input= $('#input');
    let loc ={lat:0 ,lng:0};

    const map=new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 3,
        mapTypeId:google.maps.MapTypeId.SATELLITE
      });

    $('#search').click(()=>{
        $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${input.val()}&maxRows=10&username=//&type=json`)
        
        .done(results=>{
            results.geonames.forEach(result=> {
              let list=  $(`<li id='list'>
                    <img  id='image' src="${result.thumbnailImg}" alt ="no available picture"/>
                    <span id='title'>${result.title}</span>
                </li> `).appendTo($('#sidebar ul'));
                $('#sidebar').css('display', 'block');
                loc.lat=result.lat;
                loc.lng=result.lng;
                let marker = new google.maps.Marker({
                    position: loc,
                    map: map,
                    title: `${result.title}`,
                    icon: {
                        url: result.thumbnailImg,
                        scaledSize: new google.maps.Size(50, 50)
                    }
                
                });
                const infoWindow = new google.maps.InfoWindow();
                list.click(()=>{
                    map.panTo({
                        lat: result.lat,
                        lng:result.lng});
                    map.setZoom(15);
                });
                marker.addListener('click', () => {
                infoWindow.setContent(`
                    ${result.summary}
                    <br>
                    <a target="_blank" href="https://${result.wikipediaUrl}">more info</a>
                `);
                infoWindow.open(map, marker);
                map.panTo(marker.getPosition());
                map.setZoom(8);
                });

        });
    
    });
    
});
};