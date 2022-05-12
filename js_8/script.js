function print_even_numbers()
{
    var a = parseInt(prompt("Enter a number: "));
    if (a % 2 == 0)
    {
        for (var i=1;i<=10;i++)
        {
            document.write(i + "<br>");
        }
    }
    else
    {
        document.write("The number is not even");
    }
}