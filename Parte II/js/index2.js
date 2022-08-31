var count = 9;
var countElement = document.querySelector("#count");

console.log(countElement);

function addLike(){
    count++;
    countElement.innerText = count + " like(s)";
    console.log(count);
}

var count_2 = 12;
var count_2Element = document.querySelector("#count-2");

console.log(count_2Element);

function Like(){
    count_2++;
    count_2Element.innerText = count_2 + " like(s)";
    console.log(count_2);
}

var count_3 = 9;
var count_3Element = document.querySelector("#count-3");

console.log(count_3Element);

function countLike(){
    count_3++;
    count_3Element.innerText = count_3 + " like(s)";
    console.log(count_3);
}