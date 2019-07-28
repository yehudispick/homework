/*global $ */
(function(){
    'use strict';
    const name=$('#name');
    const address = $('#address');
    const submit=  $('#submit');
    const checkbox =$('#checkbox');
    const form =$('#form');

    submit.prop('disabled',true);
    checkbox.click(()=>{
        submit.prop('disabled', false);
    });
    form.submit(event =>{
        if(checkbox.prop('checked')){
            $('div').empty();
            $('div').append(`<h3>You typed:</h3>  Name: ${name.val()}  Address: ${address.val()}`);
            event.preventDefault();
            form[0].reset();
            submit.prop('disabled',true);
        }
      
    });
}
());