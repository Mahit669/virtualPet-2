class Food{
    constructor(){
this.image = loadImage("images/Milk.png");
this.foodStock=0;
this.lastFed=0;
    }
    getFoodStock(){
            return this.foodStock;
       
    }
    updateFoodStock(foodStock){

        this.foodStock=foodStock;
    }
    getFedTime(lastFed){

        this.lastFed=lastFed;
      
    }

    deductFood(){

        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }

    
    display(){
        background(46,139,87);

        fill(255,255,254);
        textSize(15);
        if(this.lastFed>=12){
          text("Last Feed : "+ this.lastFed%12 + " PM" ,10,30);
        }else if(this.lastFed===0){
          text("last Feed : 12 AM" , 10 , 30);
        }else{
          text("last Feed : "+ this.lastFed + " AM", 10,30);
        }

var x=80, y=100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock !=0){
    for(var i=0;i<this.foodStock;i++){
        if(i%10===0){
            x=80;
            y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
    }
}
    }
}