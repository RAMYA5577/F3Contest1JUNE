let decrementBtn=document.getElementById("decrementBtn");
let incrementBtn=document.getElementById("incrementBtn");
let clearBtn=document.getElementById("clear");

let counter=document.getElementById("count");
counter.innerText=`${1}`;

//creating error message tag
let errorMessage=document.createElement("div");
errorMessage.className="errorMessage";
errorMessage.innerText="";

//to place the error tag in html document we need to get a parent and a sibling 
let parent=document.querySelector("body");
let nextSibling=document.getElementById("buttonArea");
//placing error message in html document
parent.insertBefore(errorMessage,nextSibling);


decrementBtn.addEventListener("click",decreaseCount);
incrementBtn.addEventListener("click",increaseCount);
clearBtn.addEventListener("click",clearCount);

//count variable to change the counter value;
let count=0;
//function for decrementButton
function decreaseCount(){
    count--;
    counter.innerText=`${count}`;
    if(count<0){
        count=0;
        counter.innerText=`${count}`
        errorMessage.innerText="Error: Can't go below 0."
    }
  
}

// function for incrementButton
function increaseCount(){
    count++;
    counter.innerText=`${count}`;
    errorMessage.innerText="";
}

//function for clearButton
function clearCount(){
    count=0;
    counter.innerText=`${count}`;
    errorMessage.innerText="";
}