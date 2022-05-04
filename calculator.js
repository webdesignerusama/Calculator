let screen= document.getElementById('screen');

buttons = document.querySelectorAll('button');
console.log(buttons)
let secreenValue= '';
 for(item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        console.log(buttonText)
            if(buttonText=='X'){
               buttonText = '*';
               secreenValue+=buttonText;
               screen.value=secreenValue;

            }
            else if(buttonText=='C'){
                      secreenValue='';
                      screen.value= secreenValue;
            }
            else if(buttonText=='='){

                screen.value= eval(secreenValue)
            }
            else{
                secreenValue+=buttonText;
                screen.value=secreenValue;
            }

    })
 }