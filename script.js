let myLeads = [];


var inputText = document.querySelector("#input-el");
var btnVal = document.querySelector("#input-btn")
var btnDel = document.querySelector("#del-btn")
const ulEl= document.querySelector("#ul-el");
const divBtn = document.querySelector("#container")
const outputVal = document.querySelector("#output") 

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
 if (leadsFromLocalStorage)
 {
     myLeads = leadsFromLocalStorage
     render(myLeads)
 }

 function render(leads)
{
    let listItems = ""
    for (let i=0;i<myLeads.length;i++)
    {
      listItems += `
      <li>
         <a target='_blank' href= '${leads[i]}'> ${leads[i]} </a>
      </li> `
    }
    ulEl.innerHTML = listItems
}


btnVal.addEventListener("click", function()
{
  //  textInput = inputText.value;
    myLeads.push(inputText.value);
    inputText.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
})

btnDel.addEventListener("dblclick", function()
{
    console.log("double clicked")
    localStorage.clear();
    myLeads = [];
    
    render(myLeads);
})





