let con = document.querySelector("#add");
let isstatus = document.querySelector("h5");

con.addEventListener("click",function(){
  if(con.innerHTML == "Add friend"){
    isstatus.innerHTML = "Friend";
    con.innerHTML = "Remove";
  }
  else{
    isstatus.innerHTML = "Stranger";
    con.innerHTML = "Add friend";
  }
})

