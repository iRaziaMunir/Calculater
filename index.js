let input = document.getElementById('inputBox');
let buttons = document.querySelector('button');
let string = " ";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.terget.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        string += e.terget.innerHTML;
        input.value = string;
    
    })
})