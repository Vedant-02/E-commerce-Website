const scriptURL = 'https://script.google.com/macros/s/AKfycbwxHNwaAMCYhBIMwt3Tx6YrI7EZTEcfPSyws0iayvvIAZ3zX_TlIj9w/exec'
const form = document.forms['sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
      if (alert('your response has been recorded.')){

      }
      else{
          setTimeout('location.reload(true);',700);
      }
  });