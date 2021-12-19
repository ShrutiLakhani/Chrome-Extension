const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, happyface)
{
    welcomeEl.textContent = `${greeting} , ${name} ! ${happyface}`
}

function add(x,y)
{
    let sum = x + y;
    return sum;
}

let myArr = [100,102,1009,9999];

function getFirst(arr)
{
  return arr[3];
}

console.log (getFirst(myArr));

console.log( add(3,4));
console.log( add(9,102));
greetUser("Hola", "Money" , "😊")