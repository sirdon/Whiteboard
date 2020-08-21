let submitBtn = document.querySelector("#click");
let itemBox = document.querySelector("#item");
let ul = document.querySelector("ul");
submitBtn.addEventListener("click", function(){
    if(itemBox.value){
        let val = itemBox.value;
        let li = document.createElement("li");
        li.innerText= val;
        ul.appendChild(li);
        itemBox.value = "";
    }else{
        alert("enter some data")
    }
})