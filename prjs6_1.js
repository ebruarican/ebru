var mymessage=""
var city= window.prompt('What is the name of  your city?'),
if ( city=="",'null' ){
    mymessage="no city entered"}
switch (city){
    case "jhonstown":
        window.alert("We can have items delivered to you in 3 days.")
        break;
    case 'Donville':
        window.alert("We can have items delivered to you in 1 week.")
        break;
    case "Danieltown II Martyville" :
        window.alert("We can have items delivered to you in 2 weeks.")
        break;
        default;
        window.alert("Sorry! We do not deliver to your city yet")
           
}

