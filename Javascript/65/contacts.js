/*global $, pcs*/
(function(){
    'use strict';
    
    const theTable= $('#contactsTable tbody');
    const contacts =[];
      
     
     

     function addContact(newContact){
        if (!contacts.length){
            theTable.empty();
        }
        
        contacts.push(newContact);
        
        theTable.append(`<tr>
                            <td>${newContact.firstName}</td>
                            <td>${newContact.lastName}</td>
                            <td>${newContact.address}</td>
                            <td>${newContact.email}</td>
                        </tr>`
        );

     }
     const firstNameElem =$('#first');
     const lastNameElem =$('#last');
     const addressElem =$('#address');
     const emailElem =$('#email');
     const addContactForm = $('#addContactForm');
     
     addContactForm.submit(event => {
        const newContact={
            firstName: firstNameElem.val(),
            lastName: lastNameElem.val(),
            address: addressElem.val(),
            email: emailElem.val()
            
        };
        addContact(newContact);
        hideAddContactForm();
        event.preventDefault();
        
     });
    $('#cancel').click(()=>{
         hideAddContactForm();

    });
    
    $('#addContact').click(() => {
        //contactForm.show();
        addContactForm.slideDown('slow');
    });

     function hideAddContactForm(){
        addContactForm.slideUp('fast');
        addContactForm[0].reset();

     }
     $('#loadContacts').click(()=>{
        if (!contacts.length){
            theTable.empty();
        }
        fetch('contact.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }else {
                return Promise.reject( 
                         `${response.status}  ${response.statusText}`
                    );
            }
        })
        .then(rt => { 
            contacts.push(rt);
            rt.forEach(person => {
                theTable.append(`<tr>
                            <td>${person.firstName}</td>
                            <td>${person.lastName}</td>
                            <td>${person.address}</td>
                            <td>${person.email}</td>
                        </tr>`
                );
            });
        })
        .catch(err =>{
            pcs.messageBox.show(('Failure <br><br>' + err));}
             ); 
     });

}());