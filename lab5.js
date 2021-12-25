let text;
let database = [];
let num = 0;

function addElement() {

    text = document.getElementById("add_content").value;
    database[num]=text;

    const container = document.createElement("div");
    container.id = num;
    container.classList.add("container");
    const bg = document.getElementById("content");
    bg.appendChild(container);
    num++;

    const newDiv = document.createElement("div");
    const newbut = document.createElement("button");
    newDiv.classList.add("item");
    newbut.classList.add("button");
    cont.appendChild(newDiv);

    newbut.appendChild(document.createTextNode("-"));
    const myNodeList = bg.querySelectorAll("div");

    for (let i = 1; i <= myNodeList.length; i++) {      
        let div_id = i;
        let element = document.getElementById(div_id);
        if(element.firstChild){
            element.removeChild(element.firstChild);
        }
        let info = div_id + " . " + database[i];
        let newContent = document.createTextNode(info);        
        element.appendChild(newContent);
    }

    
    let button =  document.getElementById(but_id);
    button.addEventListener("click", function(){rmElement(con_id)});   
}

function rmElement(id){
    const bg = document.getElementById("content");
    const con = document.getElementById(id);
    bg.removeChild(con);
}


let add = document.getElementById("add_icon");
add.addEventListener("click", function(){addElement()});
