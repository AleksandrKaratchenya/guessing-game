class GuessingGame {
    constructor() {}

 
   setRange(min, max)
 {

this.min=min;

this.max=max;

this.mid;
    }

  
 
    guess()
 { 
this.mid=Math.floor((this.min+(this.max-this.min)/2));

return this.mid; }

 
   lower() {
 this.max=this.mid-1;

//this.mid=Math.floor((this.min+(this.max-this.min)/2)|0);
    }

 
   greater() {
this.min=this.mid+1;

//this.mid=Math.floor((this.min+(this.max-this.min)/2));
    }

}

module.exports = GuessingGame;
