var userName='';
userName ? console.log(`Hello, ${userName}!`) : console.log('hello');
let userQuestion="what is future goals in the software development environment";
console.log(userQuestion)
let randomNumber =Math.floor(Math.random() * 8);
let eightball='';
if(randomNumber === 0){
    eightball='It is certain'
}
else if(randomNumber === 1){
    eightball ='It is decidely so'
}
else if(randomNumber === 2)
{
    eightball='Reply hazy try again'
}
else if(randomNumber ===3)
{
    eightball='Icannot predict now'
}
else if(randomNumber === 4)
{
    eightball='My sources says no'
}
else if(randomNumber === 5)
{
    eightball='Outlook not so good'
}
else if(randomNumber === 6)
{
    eightball='Signs point to yes'
}
console.log(eightball);
switch(randomNumber){
    case 0:
        eightball='It is certain'
        break;
      case 1:
      eightball='It is decidely so'
      break;
      case 2:
        eightball='Reply hazy try again'
      break;
      case 3:
        eightball='I cannot predict now'
        break;
        case 4:
           eightball='My sources says no'
          break;
          case 5:
           eightball='Outlook not so good'
          break
          case 6:
            eightball='Signs point to yes'
            default:
                eightball='try again '       
}
console.log(eightball);