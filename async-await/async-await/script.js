let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log("start the production")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("Start the machine")
        
        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log("serving ice cream")

    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();

// let toppings_choice = () => {

//     return new Promise( (resolve, reject)=>{
//         setTimeout(()=>{
//         resolve(console.log("which topping do you like?"));
//         }, 3000);
//     } );
// };

// async function kitchen(){
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppings_choice()

//     console.log(" D ")
//     console.log(" E ")

// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking others orders")