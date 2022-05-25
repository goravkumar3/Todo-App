var main = document.getElementById("main");
var heading = document.createElement("h1");
var headingText = document.createTextNode("Todo App");
heading.append(headingText);
main.append(heading);
var mainDiv = document.createElement("div");
main.append(mainDiv);
mainDiv.setAttribute("class", "inDiv");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add your new task...");
mainDiv.append(input);
input.setAttribute("class", "in");
var btn = document.createElement("button");
mainDiv.append(btn);
btn.setAttribute("onclick", "add()");
btn.setAttribute("class", "btn");
var plus = document.createElement("img");
plus.setAttribute("src", "./icons/plus.png");
plus.setAttribute("alt", "Add icon");
plus.setAttribute("class", "plus");
btn.appendChild(plus);
var secDiv = document.createElement("div");
main.append(secDiv);
var ul = document.createElement("ul");
function add() {
  if (input.value == "") {
    var msg = document.createElement("p");
    var msgText = document.createTextNode("Please type something.....");
    secDiv.appendChild(msg);
    msg.appendChild(msgText);
    setTimeout(function () {
      msg.style = "display:none";
    }, 2000);
    msg.style.display = "block";
  } else {
    secDiv.appendChild(ul);
    var list = document.createElement("li");
    var out=document.createElement("h3");
    var del = document.createElement("img");
    del.setAttribute("src", "./icons/delete.png");
    del.setAttribute("alt", "Delete_icon");
    del.setAttribute("class", "delete");
    list.setAttribute("class", "list");
    out.setAttribute("class","h3")
    var edit = document.createElement("img");
    edit.setAttribute("src", "./icons/edit.png");
    edit.setAttribute("alt", "edit_icon");
    edit.setAttribute("class", "delete ");
    ul.append(list);
    list.appendChild(out);
    var outText = document.createTextNode(input.value);
    out.appendChild(outText);
    list.appendChild(edit);
    list.append(del);
    del.addEventListener("click", function () {
      this.parentNode.remove();
    });
    edit.addEventListener("click",function(){
      var editing=prompt("you edit it",out.textContent);
      out.innerHTML=editing;
      // diferent work
      // var currInput=document.createElement("input");
      // currInput.setAttribute("type","text");
      // currInput.setAttribute("class","in");
      // var currInputText=edit.previousElementSibling.textContent;
      // currInput.value=currInputText;
      // edit.parentElement.replaceChild(currInput,edit.previousElementSibling);
    });
  }
}
