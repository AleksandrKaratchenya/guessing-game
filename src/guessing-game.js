class GuessingGame {
    constructor() {}

    setRange(min, max) {
this.min=min;
this.max=max;
    }

   
    guess() {

return (this.max+this.min)/2|0 +2;
 
   }

    lower() {
const a= (this.max+this.min);
this.max=a/2;

    }

    greater() {
const a= (this.max+this.min)/2;

this.min=a;

    }
}

module.exports = GuessingGame;
