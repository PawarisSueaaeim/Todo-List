const input = document.querySelector("#add");
const btn = document.querySelector("#btn-add");
const elementlist = document.querySelector(".todoList");
const list = document.querySelector("#list");



input.focus()
btn.onclick = function(){
    const input = document.querySelector("#add");
    var txt = input.value;
    if(txt ==""){
        alert("you must write something");
    }
    else{
        const div = document.createElement("div") ;
        div.classList.add("itemlist");
        const li = document.createElement("li");
        const icon = '<i class="fas fa-times"></i>';
        const btndelete = document.createElement("button");
        btndelete.setAttribute("id", "btn-delete");
        btndelete.innerHTML = icon;
        btndelete.onclick = removeli ;

        
        // const btnclear = document.createElement("button");
        // btnclear.setAttribute("id","btn-clear");
        // btnclear.innerHTML=("Clear All");
        // btnclear.onclick = removeall;
    
       
        li.innerHTML = txt;
        // div.appendChild(btndelete);
        div.appendChild(li) ;
        div.appendChild(btndelete) ;
        // list.appendChild(btnclear);
        

        // btndelete.addEventListener("click",deletelist);
        // btndelete.classList.add("btn-delete");
        // list.appendChild(btndelete);
        list.insertBefore(div,list.childNodes[0]);

        // elementlist.prepend(list);
        input.value = "";
        input.focus()
    }
    
};

input.addEventListener('keypress', function(e) {
    
    if (e.key == "Enter") {
        var txt = input.value;
        if(txt ==""){
            alert("you must write something");
        } else {
            const div = document.createElement("div") ;
            div.classList.add("itemlist");
            const li = document.createElement("li");
            const icon = '<i class="fas fa-times"></i>';
            const btndelete = document.createElement("button");
            btndelete.setAttribute("id", "btn-delete");
            btndelete.innerHTML = icon;
            btndelete.onclick = removeli ;
            
            li.innerHTML = txt;
            // div.appendChild(btndelete);
            div.appendChild(li) ;
            div.appendChild(btndelete) ;
            
            
            list.insertBefore(div,list.childNodes[0]);
            
            input.value = "";
            input.focus() ;
        }
    }
})



list.onclick = function(e){
   
    if(e.target.tagName == "LI"){
         e.target.classList.toggle("checked");
    }
};

removeli = function(e){
   
    var parent = e.target.parentElement ;
    if (parent.tagName === "BUTTON") {
        parent = parent.parentElement ;
    }
    
    if (parent.tagName === "LI") {
        parent = parent.parentElement ;
    }
    
    const list = document.querySelector("#list") ;
    list.removeChild(parent) ;
    
}

removeall = function(e) {
    // const list = document.querySelector("#list");
    for (var i = 0; i< list.length ; i++) {
        list.removeChild(list[i]);
    }
    // const elementlist = document.querySelector(".element-list");
    const list = document.querySelector("#list");
    

}
