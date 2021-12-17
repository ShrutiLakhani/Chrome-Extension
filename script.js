let myLeads = []
var inputText = document.querySelector("#input-el");
var btnVal = document.querySelector("#input-btn")
const ulEl= document.querySelector("#ul-el");
const divBtn = document.querySelector("#container")
const outputVal = document.querySelector("#output") 

btnVal.addEventListener("click", function()
{
  //  textInput = inputText.value;
    myLeads.push(inputText.value);
    inputText.value = "";
    
    renderLeads();
})

function renderLeads()
{
    let listItems = ""
    for (let i=0;i<myLeads.length;i++)
    {
      listItems += `
      <li>
         <a target='_blank' href= '${myLeads[i]}'> ${myLeads[i]} </a>
      </li> `
    }
    ulEl.innerHTML = listItems
}




