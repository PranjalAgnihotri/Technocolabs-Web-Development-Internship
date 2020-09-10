var userName="";
var a="Hello !"+userName;
var b="Hello !";
var message= if(userName.length()==0)?console.log(a);: console.log(b);
var userQuestion="";
var randomNumber=Math.floor(Math.random() * 8);
var eightball="";
Switch(randomNumber)
{
 Case 0:
 eightball="It is certain";
 break;
 Case 1:
 eightball="It is decidedly so";
 break;
 Case 2:
 eightball="Reply hazy try again";
 break;
  Case 3:
  eightball="Cannot predict now";
  break;
  Case 4:
  eightball="Do not count on it";
  break;
  Case 5:
  eightball="My sources say no";
  break;
  Casse 6:
  eightball="Outlook not so good";
  break;
  Case 7:
  eightball="Signs point to yes";
  break;
  }
  console.log(eightball);