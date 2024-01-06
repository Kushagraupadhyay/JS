//document.getElementById("count-el").innerText = 5

// linking tha parameter to the html button ID
let countEl = document.getElementById("count-el")

let count = 0

//Onclick event Listener
function increment(){
    console.log("The button was clicked")
    count=count+1
    countEl.innerText = count // setting countel inner text with the value of count
}

let saveEl = document.getElementById("save-el")
let CountStr = saveEl.innerText

function save(){
    console.log(count);
    CountStr+=count+" - "   // keeping track of previous enties
    saveEl.textContent = CountStr // innerText was removing spaces in string " = " so we used textContent
    count=0    // reset counter
    countEl.textContent=count  // reflect the reset counter on the UI
}




