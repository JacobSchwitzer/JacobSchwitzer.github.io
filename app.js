function showContent(){
    var x = document.getElementById("TestImage");
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("ShowButton").innerText = "Hide shown content";
    } else{
        x.style.display = "none";
        document.getElementById("ShowButton").innerText = "Show hidden content";
    }
}