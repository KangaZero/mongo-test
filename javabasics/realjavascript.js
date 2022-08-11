let box = document.getElementById("box");
  function grow(){
    box.style.height = "200px";
    box.style.width = "200px";
    }
    function reset(){
        box.style="height:150px; width:150px; background-color:orange; margin:25px";
        box2.style="height: 150px; width: 150px; background-color: black;"
    }
    function blue(){
        box.style.backgroundColor = "blue";
    }
    function fade(){
        box.style.height = "";
    } //sneaky solution 
    function special(){
        box.style.borderRadius = "25px"
    }
    
   
const box2 = document.getElementById("box2");
    function what(){
        box2.style = "margin: auto; height: 150px; width: 150px; background-color: black;"
    }
