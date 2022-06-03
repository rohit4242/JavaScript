
function checkpass()
{
    var a=document.getElementById("t1").value;
    
    if(a.length<8)
    {
document.getElementById("p1").innerHTML="<h2>Weak</h2>";
    }
    else if(a.length<16)
    {
    document.getElementById("p1").innerHTML="<h2>Average</h2>";
    }
else
{
    document.getElementById("p1").innerHTML="<h2>Strong</h2>";
}
}
