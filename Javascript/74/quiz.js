(function(){
    'use strict';

    class Item{
        constructor(name, quantity, price){
            this.name = name;
            this.quantity = quantity;
            this.price = price;
        }
    }

    class Order{
        constructor(costumer, address, items){
            this.customer = costumer;
            this.address  = address;
            this.items = items;
        }

        get total(){
            let total;
            this.items.forEach(item => {
              total+= item.total;
            });
            return total;
        }
    }
    fetch('order.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        }else {
            return Promise.reject( 
                     `${response.status}  ${response.statusText}`
                );
        }
    })
    .then(orders => { 
        orders.forEach(order=>{
            let i=[];
            order.items.forEach( item =>{
                
                const price = item.total/item.quantity;
                 i.push(new Item(item.item, item.quantity, price));
            });
            const o = new Order(order.customer, order.address, i);
            console.log(o);
           
            
        });
        
    });



}());