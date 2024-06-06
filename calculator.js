function a(c)   

{   

document.getElementById("name").value=c;   

}   

function b(c)   

{document.getElementById("name").value+=c;   

}   

function e()   

{   

try   

    {   

     a(eval(document.getElementById("name").value))   

    }   

    catch(e)   

    {   

     a('Error') }   

}