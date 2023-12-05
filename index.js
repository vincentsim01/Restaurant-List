var pointEntry=document.getElementById("pointEntry");


var restaurantList = [
    {
        name:"Restaurant A",
        address:"Street A District A City A State A Province A",
        city:"A",
        price:1000

    },
    {
        name:"Restaurant B",
        address:"Street B District B City B State B Province B",
        city:"A",
        price:2000

    },
    {
        name:"Restaurant C",
        address:"Street C District C City C State C Province C",
        city:"C",
        price:4000

    },
    {
        name:"Restaurant D",
        address:"Street D District D City D State D Province D",
        city:"B",
        price:500
        

    },
    {
        name:"Restaurant E",
        address:"Street E District E City E State E Province E",
        city:"B",
        price:3000

    }
];


// body.onload=printAllRestaurantNames;


function printAllRestaurantNames(){
    restaurantList.forEach((resto)=>{

        console.log(resto);


        }

    )
}

// printAllRestaurantNames();


function filterRestaurantByCity(clausa){
    var filteredRestaurants=restaurantList.filter((ristorante)=>{
        return ristorante.city.includes(clausa);
        } 
     );

     return filteredRestaurants;
     
};

var filtertheRestaurant=filterRestaurantByCity("C");

console.log(filtertheRestaurant);


// var bena=restaurantList.filter((ristorante)=>{return ristorante.city=="A";});


// var benzi=restaurantList.filter((ristorante)=>{return ristorante.price<3000;});

// console.log(bankai);

// console.log(benzi);

// console.log(bena);