
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      input.value = string;
    }
    else if (e.target.innerHTML === 'AC') {
      string = '';
      input.value = string;
    }
    else if (e.target.innerHTML === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else
    {
      if(e.target.classList.contains('operater'))
      {
        if(string.length)
        {
          const operatersList = ['*', '/', '+', '-', '%', '.'];
          let = currentOperater = string[string.length -1];
          let containsAnyOperater = operatersList.some(operater => currentOperater.includes(operater));

          if(containsAnyOperater)
          {
            string = string.slice(0, -1) + e.target.innerHTML;
          }
          else
          {
            string += e.target.innerHTML;
          }
        }
      }
      else
      {
        string += e.target.innerHTML;
      }

      input.value = string;
    }
  });
});

document.addEventListener('keydown', function(event) {
  const key = event.key;
  buttons.forEach(button =>
    {
      if(key == button.innerText)
      {
        button.click();
      }
      else if(key == 'Enter' && button.innerText == '=')
      {
        button.click();
      }
    }
  );
});
