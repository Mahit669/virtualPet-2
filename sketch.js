var dogImg , happyDogImg ,dog , database , foodS , foodstock ;

var lastFed , feed , addFood;
var foodObj , fedTime;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  foodObj = new Food();

    //database
    database = firebase.database();
    foodStock = database.ref('Food');
    foodStock.on("value",readStock);

    fedTime=database.ref('FeedTime');
    fedTime.on("value",function(data){
      lastFed=data.val();
    })
  
  //sprites and their animation
  dog = createSprite(350,350,1900,100);
  dog.addImage(dogImg,200,200);
  dog.scale = 0.2;

  feed=createButton("Feed the dog");
  feed.position(400 , 100);
  feed.mousePressed(feedDog);

  addFood=createButton("add Food");
  addFood.position(600 , 100);
  addFood.mousePressed(addFoods);
}


function draw() {  
  

  foodObj.display();
  foodObj.getFedTime();

  feed.show();
  addFood.show();

  drawSprites();

}
// function to read values from DB
function readStock(data){
  foodS = data.val();
  foodObj.updateFoodStock(foodS)
}



function feedDog(){
  dog.addImage(happyDogImg);

  if(foodObj.getFoodStock()<=0){

    foodObj.updateFoodStock(foodObj.getFoodStock()*0);

  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }

 
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedTime:hour()
  })
  //foodS = foodS - 1;
  //database.ref('/').update({
   // Food: foodS
 // })

}
function addFoods(){
  foodS ++;
  database.ref('/').update({
    Food: foodS
  })
}

