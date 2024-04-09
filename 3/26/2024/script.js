var the_number = 0;

function Clicker(){
    //alert("Ninja")
    document.getElementById('theCount').innerHTML = the_number;
    the_number++;

}

function parrotText(){
    var parrotWord = document.getElementById('parrotInput').value;
    alert(parrotWord)
}

function changeColor(){
    var colorValue = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorValue;
}