class GuessingGame {
   
 constructor() {}

    
setRange(min, max) {
this.min=min;
this.max=max;
    }

  
 
    guess() {
    	
if((this.min+this.max)%2==0)

this.middle = Math.floor((this.min + (this.max - this.min)/2));

else this.middle= Math.floor((this.min + (this.max - this.min)/2))+1;
return this.middle;
 
   }

  
  lower() {
   

this.max=this.middle;
    }

  
  greater() {


this.min=this.middle;

    }

}

module.exports = GuessingGame;

