/* global $ */
(function (){
    'use strict';
    const videos =$('#videos');
    $('#playing').hide();

    fetch('youTube.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        }else {
            return Promise.reject( 
                     `${response.status}  ${response.statusText}`
                );
        }
    })
    .then(rt=>{
        rt.forEach(video => {
            if(video.image===""){
               video.image="pictureUnavailable.jpg";
            }
            const format=$(`<div class="video"> <h3>${video.title}</h3> <img id="image" src="${video.image}"></div>`);
            videos.append(format);
            format.click(()=>{
                format.empty();
                format.append(` <h3>${video.title}</h3><video id="theVideo"src="${video.video}" controls autoplay></video>`);
                $('#theVideo')[0].play();
                });
        });
    })

    .catch(err => console.error('Failure', err)); 

}());