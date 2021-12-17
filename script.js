let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
var inputText = document.querySelector("#input-el");
var btnVal = document.querySelector("#input-btn")
const ulEl= document.querySelector("#ul-el");

btnVal.addEventListener("click", function()
{
    var textInput = inputText.value;
    //myLeads.push(textInput);
    for (let i=0; i<myLeads.length;i++)
    {
    console.log(myLeads[i]);
    }
})

