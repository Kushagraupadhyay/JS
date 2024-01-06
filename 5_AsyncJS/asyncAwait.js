let stocks ={
    Fruits:["strawberry","grapes", "banana","apple" ] ,
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]

}

let is_shop_open = true

let toppings_choice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("which topping would you love? ")
            )             
        },3000);
    })
}

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()  // await makes the async func wait for the topping_choice before execution of D and E

    console.log(" D ")
    console.log(" E ")
}

kitchen()

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders")

// async function order (){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exist", error)
//     }
//     finally{
//         console.log("runs code anyways")
//     }
// }

// order()
// .then(()=>{
//     console.log("ajkfqehuc")
// })