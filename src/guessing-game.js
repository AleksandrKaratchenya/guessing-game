class GuessingGame {
    constructor() {}

    setRange(min, max) {
this.min=min;
this.max=max;
this.counter=0;
    }

    guess() {

return Math.floor((this.max+this.min)/2)+Math.floor(this.counter*0.5);
    }

    lower() {
if((this.max+this.min)%2!=0)
this.counter++;
const a= (this.max+this.min);
this.max=Math.floor(a/2);

    }

    greater() {
if((this.max+this.min)%2!=0)
this.counter++;
const a= Math.floor((this.max+this.min)/2);
this.min=a;

    }
}

module.exports = GuessingGame;
