let text;
let database = [];
let num = 1;

function addElement() {

    text = document.getElementById("add_content").value;
    database[num]=text;

    const container = document.createElement("div");
    container.id = num;
    container.classList.add("container");
    const bg = document.getElementById("content");
    bg.appendChild(container);
    
    const newDiv = document.createElement("div");
    const newbut = document.createElement("button");
    newDiv.classList.add("item");
    newbut.classList.add("button");
    document.getElementById(num).appendChild(newbut);
    document.getElementById(num).appendChild(newDiv);

    let info = "  " + database[num];
    newbut.appendChild(document.createTextNode("-"));
    newDiv.appendChild(document.createTextNode(info));
    num++;

    container.addEventListener("click", function(){
        bg.removeChild(container);
    });   
}

let add = document.getElementById("add_icon");
add.addEventListener("click", function(){addElement()});
