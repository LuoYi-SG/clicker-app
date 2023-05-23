function add1(){
    const nice = document.getElementById("nice");
    var niceValue = parseInt(nice.innerHTML);
    niceValue++;
    nice.innerHTML = niceValue;
}