(function(){
    'use strict';
    const account1 ={
        balance: 10000
    };
    const account2 ={
        balance: 500
    };
    function transaction(amount){
        this.balance +=amount;
        
        if(amount<0){
           console.log('withdrew',amount,'balance:', this.balance);
        }
        else if(amount>=0){
           console.log('deposited',amount,'balance:', this.balance);
        }
        else{
            console.log('invalid number');
        }
  
    }
    transaction.call(account1,-500);
    transaction.apply(account2,[100]);
    
}());