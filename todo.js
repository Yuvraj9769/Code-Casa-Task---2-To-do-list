let inval=document.getElementById("inp");
let btn = document.getElementById("btn");
let ulitem = document.getElementsByClassName("ulitem")[0];

btn.addEventListener("click", () => {
  if (inval.value != "") {
    let li = document.createElement("li");
    li.innerHTML = document.getElementById("inp").value;
    ulitem.append(li);
    let but = document.createElement("button");
    but.innerHTML = " X ";
    li.append(but);
    document.getElementById("inp").value = "";
    Array.from(document.getElementsByTagName("button")).forEach((e) => {
      e.addEventListener("click", () => {
        e.parentElement.remove();
      });
    });
  } 
  else {
    alert("Please Enter some text to add in to do list");
  }

});

inval.addEventListener("keypress", (e) => {
  if(e.key==="Enter")
  {
    if (inval.value != "") {
      let li = document.createElement("li");
      li.innerHTML = document.getElementById("inp").value;
      ulitem.append(li);
      let but = document.createElement("button");
      but.innerHTML = " X ";
      li.append(but);
      document.getElementById("inp").value = "";
      Array.from(document.getElementsByTagName("button")).forEach((e) => {
        e.addEventListener("click", () => {
          e.parentElement.remove();
        });
      });
    } 
    else {
      alert("Please Enter some text to add in to do list");
    }
  }
});