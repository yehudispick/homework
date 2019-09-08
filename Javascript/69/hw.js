/* global google, $*/

window.initMap = function(){
    'use strict';
    const input= $('#input');
    const rowsInput =$('#rows');
    const ul=$('#sidebar ul');
    let loc ={lat:0 ,lng:0};
    let markers=[];
    let circles=[];
    let rectangles=[];
    let polygons=[];
    let polylines=[];
    let openSummary;
        

    const map=new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 3,
        mapTypeId:google.maps.MapTypeId.SATELLITE
      });

      $('#inputForm').submit(e =>{
        e.preventDefault();
        $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${input.val()}&maxRows=${rowsInput.val()}&username=yehudis&type=json`)
        
        .done(results=>{
            const bounds = new google.maps.LatLngBounds();
            if(ul!==null){
                ul.empty();
            }
            results.geonames.forEach(result=> {
                
              let list=  $(`<li id='list'>
                    <img  id='image' src="${result.thumbnailImg}" alt ="no available picture"/>
                    <span id='title'>${result.title}</span>
                    <div class="summary"> ${result.summary}</div>
                </li> `).appendTo(ul);
                $('#sidebar').css('display', 'block');
                loc.lat=result.lat;
                loc.lng=result.lng;
                bounds.extend(loc);
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
                    const placeSummary = $(list.find('.summary'));
                    //if (!placeSummary.is(":visible")) {
                    if (!placeSummary.is(openSummary)) {
                        map.fitBounds(bounds);
                        setTimeout(() => {
                            map.panTo(loc);
                            setTimeout(() => {
                                map.setZoom(18);
                            }, 500);
                        }, 500);
                        //$('.summary').slideUp('slow');
                        if (openSummary) {
                            openSummary.slideUp('slow');
                        }
                        placeSummary.slideDown('slow');

                        openSummary = placeSummary;
                    }
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
const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        
        if (event.type === 'marker') {
            markers.push(event.overlay.position);
            localStorage.markers = JSON.stringify(markers);
        }
        if (event.type === 'circle') {
            circles.push({center: event.overlay.center, radius: event.overlay.radius});
            localStorage.circles = JSON.stringify(circles);    
        }
        if (event.type === 'rectangle') {
            rectangles.push(event.overlay.getBounds());
            localStorage.rectangles = JSON.stringify(rectangles);    
        }
        if (event.type === 'polygon') {
            polygons.push(event.overlay.getPath().getArray());
            localStorage.polygons = JSON.stringify(polygons);    
        }
        if (event.type === 'polyline') {
            polylines.push(event.overlay.getPath().getArray());
            localStorage.polylines = JSON.stringify(polylines);    
        }
    });

    if (localStorage.markers) {
        markers =JSON.parse(localStorage.markers);
        markers.forEach(marker =>{
            new google.maps.Marker({
                position: marker ,
                map: map
            });
        });
        
    }
    if (localStorage.circles) {
        circles=JSON.parse(localStorage.circles);
        circles.forEach(circle =>{
            new google.maps.Circle({
                center: circle.center,
                radius: circle.radius,                
                map: map
            });
        });
        
    }
    if (localStorage.rectangles) {
        rectangles =JSON.parse(localStorage.rectangles);
        rectangles.forEach(rectangle =>{
            new google.maps.Rectangle({
                bounds: rectangle ,
                map: map
            });
        });
    }
    if (localStorage.polygons) {
        polygons =JSON.parse(localStorage.polygons);
        polygons.forEach(polygon =>{
            new google.maps.Polygon({
                path: polygon ,
                map: map
            });
        });
    }
    if (localStorage.polylines) {
        polylines =JSON.parse(localStorage.polylines);
        polylines.forEach(polyline =>{
            new google.maps.Polyline({
                path: polyline ,
                map: map
            });
        });
    }

};