let myLeads = []
let oldLeads=[]

const inputEl = document.getElementById("input-el")
const inputBTN = document.getElementById("input-btn")
const tabBTN = document.getElementById("tab-btn")
const ulEL = document.getElementById("ul-el")
const deleteBTN = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))  // get leads from local storage and set the value as current array
console.log(leadsFromLocalStorage) 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage  // check only if there is previus data we will render the leads
    render(myLeads)
}

function render(leads){

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        console.log(leads[i]);
        //listItems+= "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems+= `
                        <li>
                            <a target='_blank' href= '${leads[i]}'> 
                                ${leads[i]}  
                            </a>
                        </li>
                    `
    }

    ulEL.innerHTML = listItems  //imporve performance by rendering only once after entire loop is complete
}

inputBTN.addEventListener("click",function(){ // listens for click event and invokes function()

    myLeads.push(inputEl.value)
    console.log(myLeads)
    render(myLeads)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
})

deleteBTN.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

//const tabs=[{url: "https://www. linkedin.com/in/per-harald-borgen/"}]

tabBTN.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){ // using chrome API to fetch the current Tab
        console.log(tabs[0].url)  
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads ))
        render(myLeads) 
    })   
})





    


