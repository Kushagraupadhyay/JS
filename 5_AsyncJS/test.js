// execution without promises and async await

let stocks ={
    Fruits:["strawberry","grapes", "banana","apple" ] ,
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
 
}

let is_shop_open = true

let order = (time , work) =>{
        if(is_shop_open){
            setTimeout(()=>{
                work()
            },time) 
        }
        else 
        {
            return console.log("our shop is closed")
        }
}

// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2

order(0,()=>console.log('production has started'))


// step 3

order(2000, ()=>console.log("Fruit has been chopped"))


// step 4

order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))


// step 5

order(1000, ()=>console.log("start the machine"))


// step 6

order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))


// step 7

order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))


// Step 8

order(2000, ()=>console.log("Serve Ice Cream"))


console.log("Customer Left")


console.log("Day ended shopis closed")
