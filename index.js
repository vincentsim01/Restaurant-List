var restaurantList = [
    {
        name:"Restaurant A",
        address:"Street A District A City A State A Province A",
        city:""

    },
    {
        name:"Restaurant B",
        address:"Street B District B City B State B Province B",
        city:""

    },
    {
        name:"Restaurant C",
        address:"Street C District C City C State C Province C",
        city:""

    },
    {
        name:"Restaurant D",
        address:"Street D District D City D State D Province D",
        city:""

    },
    {
        name:"Restaurant E",
        address:"Street E District E City E State E Province E",
        city:""

    }
];


// body.onload=printAllRestaurantNames;


function printAllRestaurantNames(){
    restaurantList.forEach((resto)=>console.log(resto));

}

printAllRestaurantNames();