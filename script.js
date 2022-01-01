function submission()
{
    var currentdate = new Date();
var datetime = currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
    var name = prompt("Whats Your Good Name")
var greet = "";
if( currentdate.getHours()>12 && currentdate.getHours()<16)
{
    greet = "Good Afternoon";
}
else if(currentdate.getHours()<12 && currentdate.getHours()>5)
{
    greet = "Good Morning";
}
else if(currentdate.getHours()>16 && currentdate.getHours()<20)
{
    greet = "Good Evening"
} 
else
{
    greet = "Good Night"
}
    document.getElementById("b2").innerHTML = greet +"  "+ name
    
}