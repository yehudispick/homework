/* global $ */
//(function (){
    'use strict';

    import './css/index.css';

    import picture from './images/coffee.jpg';

    import $ from 'jquery';
    // const $ = require('jquery');

    let number = 0;

    $('#button').click(()=>{
        number++;
        $('#result').text('You pressed the button ' + number + ' times.');
        const Image = document.createElement('img');
        Image.src = picture;
        document.body.appendChild(Image);
    });
//}());