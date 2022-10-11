var textnum=0;
function postFunction()
{
   var textforpost = document.getElementById("text1").value;
   console.log("textnum = "+textnum);
   switch(textnum) 
   {
       case 0:
           document.getElementById("topic1").innerText = textforpost;
           textnum++;
        break;
        case 1:
            document.getElementById("comment1").innerText = textforpost;
            textnum++;
        break;
        case 2:
            document.getElementById("comment2").innerText = textforpost;
            textnum++;
        break;
   }
}
function clearFunction()
{
    document.getElementById("text1").innerText = ("");
    document.getElementById("topic1").innerText = ("");
    document.getElementById("comment1").innerText = ("");
    document.getElementById("comment2").innerText = ("");

    const textarea = document.getElementById('text1');
    textarea.value = '';

    textnum = 0;
}
function changeImage() 
{ 
        var LunaImg = document.getElementById("img01"); 
        LunaImg.src = "pic/m1.png"; 

        var LunaImg = document.getElementById("img02"); 
        LunaImg.src = "pic/m4.png"; 

        var LunaImg = document.getElementById("img03"); 
        LunaImg.src = "pic/m3.png"; 
}