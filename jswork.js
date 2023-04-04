let fortune= ["hi","hello","hey"]
function add(){
    var myindex;
    myindex= Math.floor(Math.random()*fortune.lenght);
    document.write(fortune[myindex]);

}
add();
