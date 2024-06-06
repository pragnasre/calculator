# calculator
#HTML
<!DOCTYPE.html>

<html>

    <head> 

    <meta charset="utf-8"> 

    <title>Calculator</title> 

    <link rel="stylesheet" href="cal.css">  

</head> 

<body>  

    <div class="cal">   

        <div class="display"> 

        <input type="text" size="18" id="name"> 

        </div>   

        <div class="elements">   

           <p> <input type="button" class="button white" value="C" onclick='a("")'>

               <input type="button" class="button white" value="%" onclick='b("%")'></p>

                                   <p> <input type="button" class="button white" value="7" onclick='b("7")'> 

               <input type="button" class="button white" value="8" onclick='b("8")'> 

               <input type="button" class="button white" value="9" onclick='b("9")'> 

               <input type="button" class="button white" value="" onclick='b("")'> </p>   

           <p> <input type="button" class="button white" value="4" onclick='b("4")'> 

               <input type="button" class="button white" value="5" onclick='b("5")'> 

               <input type="button" class="button white" value="6" onclick='b("6")'> 

               <input type="button" class="button white" value="-" onclick='b("-")'> </p>   

           <p> <input type="button" class="button white" value="1" onclick='b("1")'> 

               <input type="button" class="button white" value="2" onclick='b("2")'> 

               <input type="button" class="button white" value="3" onclick='b("3")'> 

               <input type="button" class="button white" value="+" onclick='b("+")'> </p>   

           <p> <input type="button" class="button white" value="0" onclick='b("0")'>  

               <input type="button" class="button white" value="." onclick='b(".")'>

               <input type="button" class="button white" value="/" onclick='b("/")'>                                     

               <input type="button" class="button white" value="=" onclick='e()'> </p>   

        </div>   

</div>  

</body> 

<script src="calculator.js"></script> 

</html>

#CSS
.cal  

{   

background-color:black;

height:300px;   

width:270px;            

}  

.elements

{       

top:15px;   

}

.display   

{   

width:220px;     

height:40px;   

}   

.display input 

{        

height:35px;   

color:black;   

background-color:white;   

font-size:21px;   

text-align:right;   

}     

.button   

{   

width:40px;   

height:30px;   

margin-left:17px;              

}    

.button.white   

{   

color:black;      

font-weight:bold; 

}            

p   

{   

line-height:10px;   

}

#JS
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
