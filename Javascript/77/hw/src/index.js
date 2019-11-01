/* global $ */
//(function (){
    'use strict';

    import $ from 'jquery';
    
    let number = 0;

    $('#button').click(()=>{
        number++;
        $('#result').text('You pressed the button ' + number + ' times.');
    });
//}());