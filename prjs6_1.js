let mymessage= "",
let city= window.prompt('What is the name of  your city?', "");
if ( ( city==="")||(city===null )){
    mymessage="no city entered";}
else{   
switch (city){
    case "jhonstown":
        mymessage="We can have items delivered to you in 3 days.";
        break;
    case 'Donville':
        mymessage="We can have items delivered to you in 1 week.";
        break;
    case "Danieltown || Martyville" :
        mymessage="We can have items delivered to you in 2 weeks.";
        break;
        default:
        mymessage="Sorry! We do not deliver to your city yet";
           
}
}
