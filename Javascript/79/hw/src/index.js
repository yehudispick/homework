
    'use strict';

    import './css/index.css';
    import $ from 'jquery';

    $('#changeColor').on( "click", ()=>{
        let color = $('#colorInput').val();
        $('body').css("backgroundColor",color);   
    });
    
