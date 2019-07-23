window.pcs =window.pcs ||{};

window.pcs=function(id){
    'use strict';
    function get(id){
        return document.getElementById(id);
    }
    function setCss(element,property,style){
        element.style[property]=style;
    }

    function getCss(element,property){
       //return element.style[property];
        return getComputedStyle(element)[property];
    }
    
    const elem = get(id);

    return {
                
                /*setCss: function(property,style){
                    setCss(elem,property,style);
                },
                getCss: function(property){
                    return getCss(elem,property);
                },*/
                css: function(property,style){
                    if(arguments.length<2){
                        return   getCss(elem,property);
                    }
                    setCss(elem,property,style);
                        return this;
                },
                hide: function(){
                    setCss(elem,'display','none');
                    return this;
                },
                show: function(){
                    setCss(elem,'display','block');
                    return this;
                },
                click: function(callback){
                    elem.addEventListener('click',callback);              
                    return this;
    
                },
                colorChanger: function(interval, speed =1000 ){
                    let intervalid=setInterval(()=>{
                        setCss(elem,'backgroundColor',`rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
                    },speed);
                    setTimeout(()=>{
                        clearInterval(intervalid);
                    },interval);
                    return this;                
                },
                data: function(key,value){
                    if(arguments.length<2){                        
                        return elem[key];   
                    }
                    elem[key]=value;                
                    return this;
                }
                
                
            };   
};