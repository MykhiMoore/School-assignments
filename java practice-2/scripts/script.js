window.onload = function(){
    //alert(ninja)

    document.getElementById("main_title").innerHTML = "dominate the dom";

    document.getElementById("main_body").style = "background-color: #aF8965";

    document.getElementById("main_title").style = "background-color: #000; color: #abdbe3; padding 3px";

    document.getElementById("first_paragrah").innerHTML = Whatevs;
}
    let the_count = 0

    function clicker(){
        the_count++; document.getElementById("counter").innerHTML = the_count;

        if(the_count >= 20){
            alert("I can't count any higher.")
            the_count = 0;
        }
    }
    