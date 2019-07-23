window.pcs =window.pcs ||{};
window.pcs.clock =(function(){
    'use strict';
   
    
    const clockDiv = document.createElement('div');
    const span =document.createElement('span');
    span.id='span';    
    clockDiv.style.position="absolute";
    clockDiv.style.display='flex';
    clockDiv.style.right='0';
    clockDiv.style.bottom ='0';
    clockDiv.style.width ='90px';
    clockDiv.style.height ='70px';
    clockDiv.style.backgroundColor ="MediumTurquoise";
    clockDiv.style.color ="white";
    clockDiv.style.borderRadius="4px";
    clockDiv.style.alignItems="center";
    clockDiv.style.justifyContent="center";
    clockDiv.appendChild(span);
    document.body.appendChild(clockDiv);

    
        function tick(){
            let d =new Date();
            let hours = d.getHours();
            let minutes = d.getMinutes();
            let seconds = d.getSeconds();
            let ampm;
            if(hours===0){
                hours=12;
                ampm=" AM";
            }else if(hours<12){
                ampm=" AM";
            }else if(hours===12){
                ampm=" PM";
            }else if(hours>12){
                ampm=" PM";
                hours-=12;
            }
            if(minutes<=9) {
                minutes="0"+minutes;
            }
            if(seconds<=9) {
                seconds="0"+seconds;
            }

            document.getElementById('span').innerHTML=`${hours}:${minutes}:${seconds} ${ampm}`;
            
        }

        setInterval(tick,1000);
    
    return{ 
        tick: tick
    };
   
}

());