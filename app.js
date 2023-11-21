// Arrays 


var arrstr = ["Berlin", "nairobi", "tokyo","proffessor"]

var num = [3,5,3,6,7]

var mixed = [3,6,7,"Berlin", "tokyo"]

 
var education = [ "SSC <br>","HSC<br>","BCS<br>","BS<br>","BSOM<br>", "MS<br>","MPHIL<br>","PHD<br>" ]
document.write(education)

 
var students = ["ahmar" , "umar", "naveed"]
var score = ["300","400","350"]
document.write("score of "  +students[0]+  " is "  +score[0]+ "<br>") 
document.write("score of "  +students[1]+ " is "  +score[1]+ "<br>")
 document.write("score of "  +students[2]+ " is "   +score[2]) 
 


 
 var colName= prompt("whats color you want im biginer of aray  ( check your answer in sec A )") 
var colName1=prompt("whats color you want in end of the aray (check your answer in sec A )")
 var color =  [ colName  + " <br> green  " + " <br> blue <br>" + colName1 ]
 document.write (color)  
 

document.write(" <h2> sec B </h2>")
var color1 = ["red" , "green" , "blue" , "red" ]
color1.pop();
document.write(color1 + "<br>"  )


document.write(" <h2> sec C </h2>")
var color2 = ["red" , "green" , "blue" , "red" ]
color2.push("dark","black")
document.write(color2 + "<br>")


document.write(" <h2> sec D </h2>")
var color3 = ["red" , "green" , "blue" , "red" ]
color3.shift()
document.write(color3)


document.write(" <h2> sec E </h2>")
var color4 = ["red" , "green" , "blue" , "red" ]
color4.unshift("dark","black")
document.write(color4)





document.write(" <h2> sec F </h2>")
var colorName = prompt("write a  index num  to add yellow color ( 1 to 4) check answer in  sec F ")
var color5 = ["red" , "green" , "blue" , "red" ]
color5.splice( colorName , 0 , "yellow")
document.write(color5)
document.write ("  <br> <h1> Q9 end </h1> <br>" )



document.write ("   <h1> Q10 start </h1> " )
var studentScore = [320 , 230 , 480 , 120]
document.write ('score of students : '  + studentScore + "<br>" )
studentScore.sort()
document.write( ' ordered score of students : '  + studentScore  )
document.write ("   <h1> Q10 end </h1> <br> " )



document.write ("   <h1> Q11 start </h1> " )
var cityName = ["karachi","hyderbad" , "lahore" ,"jhuddo","noukot" ]
document.write("cities name :" + cityName + "<br>")
selectedCity =  cityName.slice(-2)
document.write("seleted cities :" + selectedCity)
document.write ("   <h1> Q11 end </h1> <br> " )



document.write ("   <h1> Q12 start </h1> " )
var arr = ["this" , "is" , "a" ,"cat"]
document.write(" <h3> array </h3>  : " + arr + '<br>')
arr =  brr = ("this  is a cat")
document.write(" <h3> string </h3>   : " + brr )
document.write ("   <h1> Q12 end </h1> <br> " )



document.write ("   <h1> Q13 start </h1> " )
var store =["keyboard" ,"mouse" , "printer" , 'moniter']
document.write("<h3> devices </h3> " + store)
document.write(" <h4> out </h4> " + store[0] ) 
store.shift(0)
document.write(" <h4> out </h4> " + store[0] )
store.shift(1)
document.write(" <h4> out </h4> " + store[0] )
store.shift(2)
document.write(" <h4> out </h4> " + store[0] )
store.shift(3)
document.write ("   <h1> Q13 end </h1> <br> " )



document.write ("   <h1> Q14 start </h1> " )
var store =["keyboard" ,"mouse" , "printer" , 'moniter']
document.write("<h3> devices </h3> " + store)
var  store1 = store.pop() 
document.write(" <h4> out </h4> " + store1) 
var  store2 = store.pop() 
document.write(" <h4> out </h4> " + store2)
var  store3 = store.pop() 
document.write(" <h4> out </h4> " + store3)
var  store4 = store.pop() 
document.write(" <h4> out </h4> " + store4 )
