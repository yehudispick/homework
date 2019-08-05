/*global $, pcs*/
(function(){
    'use strict';
    let form=$('#recipeChooser');
    let name=$('#recipeName');
    let pic=$('#output img');
    let ingredients=$('#ingredients');

    
    fetch('recipe.json')
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
        rt.forEach(recipe=>{
            form.append(`<input type="radio" name="recipes" value="${recipe}"> ${recipe}`);
        });
        $('input[name ="recipes"]').change( (event)=>{
            fetch(`${event.target.value}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else {
                    return Promise.reject( 
                             `${response.status}  ${response.statusText}`
                        );
                }
            })

        
    
        .then(recipe =>{
           pic.attr('src', recipe.picture);
            name.text(recipe.recipeName);
            ingredients.empty();
            recipe.ingredients.forEach(ingredient =>{
                ingredients.append(`<li>${ingredient}</li>`);
            });
        })
       
        .catch(err =>{
        
            pcs.messageBox.show((err,true));}
            ); 

        });
    })
    .catch(err =>{
        
        pcs.messageBox.show((err,true));}
        ); 
      
}());