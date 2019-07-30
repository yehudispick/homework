/*global $, pcs*/
(function(){
    'use strict';
    const loadButton = $("#loadButton");
    const fileInput = $("#fileInput");
    const openedFile =$("#openedFile");
    const spinner = $('#spinner-icon');
   
    loadButton.click(()=>{
        if(fileInput.val().length>0){
            spinner.addClass("is-active");
            setTimeout(() => {
                fetch(fileInput.val())
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    }else {
                        return Promise.reject( 
                                 `${response.status}  ${response.statusText}`
                            );
                    }
                })
                .then(rt => { 
                    spinner.removeClass("is-active");
                    openedFile.text( rt);})
                .catch(err =>{
                    spinner.removeClass("is-active");
                     pcs.messageBox.show(('Failure <br><br>' + err));}
                     ); 
            }, 2000);
        }       
    });  
}());