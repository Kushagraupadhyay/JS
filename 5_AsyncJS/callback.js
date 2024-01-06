// calling one function from inside another function is callback

// function one(func_two){
//     console.log("Step 1")
//     func_two()
// }

// function two(){
//     console.log("Step 2")
// }

// //one()
// one(two)

let stocks ={
    Fruits:["strawberry","grapes", "banana","apple" ] ,
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]

}

let order = (Fruit_name,call_production)=>{

    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
    },2000)
    call_production() // here whatever function will be passed in call_produciton will be used as a callback
}

//callback hell

let production = () =>{

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
            console.log("start the machine")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0)
  };

order(0,production)

