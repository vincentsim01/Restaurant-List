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

//PRINT ALL RESTAURANT NAMES//


function printAllRestaurantNames(){
    restaurantList.forEach((resto)=>{

        console.log(resto);


        }

    )
}

// printAllRestaurantNames();



//FILTER RESTAURANTS BY CITY//


function filterRestaurantByCity(clausa){
    var filteredRestaurants=restaurantList.filter((ristorante)=>{
        return ristorante.city.includes(clausa);
        } 
     );

     return filteredRestaurants;
     
};

// var benzi=restaurantList.filter((ristorante)=>{return ristorante.price<3000;});


var filtertheRestaurant=filterRestaurantByCity("B");

// console.log(filtertheRestaurant);










orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76

    }; 



    // a. Calculate the total number of orders placed for the restaurant?

    const values = Object.values(orderData);

    const sum = values.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    console.log(sum);




    // b. Calculate the number of order proportion options. 



    const counting=Object.keys(orderData).length;

    console.log(counting);



    // c. Calculate the percentage of each proportion in below format:



    // const keyPercentage = Object.values(orderData).forEach(val => console.log(
        
        
    //     "Order:",'\n'+
    //     "Percentage:"+val/parseInt(sum)*100, '\n'
    //     +"Restaurant:Punjabi"
        
        
        
        
        
    //     ));



    
    
    
    
    for (const [key, value] of Object.entries(orderData)) {

        var count=0;

        for (let step = 0; step < Object.keys(orderData).length+1; step++) {
            // Runs 5 times, with values of step 0 through 4.

    


        console.log("ID:"+step,'\n'+
                    "Order:"+key,'\n'+
                    "Percentage:"+value/parseInt(sum)*100, '\n'+
                    "Restaurant:Punjabi");

        }
        // console.log(`id:1 <br> order:${key} <br> Percentage: ${value}/${sum}*100 <br> Restaurant: Punjabi Taka`);
      }



//     var theOrder=[{
//         id: 1,
//         order: "Below 500",
//         percentage: "10.05",
//         restaurant: "Punjabi Tadka"
//        },
//        {
//         id: 2,
//         order: "500-1000",
//         percentage: "14.57",
//         restaurant: "Punjabi Tadka"
//        },
//        {
//         id: 3,
//         order: "1000-1500",
//         percentage: "15.08",
//         restaurant: "Punjabi Tadka"
//        },
//        {
//         id: 4,
//         order: "1500-2000",
//         percentage: "22.11",
//         restaurant: "Punjabi Tadka"
//        },
//        {
//         id: 5,
//         order: "Above 2000",
//         percentage: "38.19",
//         restaurant: "Punjabi Tadka"
//        }] 




// console.log(theOrder);

