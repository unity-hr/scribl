document.addEventListener('DOMContentLoaded', function () {
  var hash = location.hash;
  var links = document.querySelector('.navigation-list');
  var active;

  if (hash) {
    active = links.querySelector('a[href="' + hash + '"]');
    active.parentNode.classList.add('active');
  } else {
    links.children[0].classList.add('active');
  }

  links.addEventListener('click', function (event) {
    var target = event.target;
    var parent = target.parentNode;

    if (target && target.nodeName === 'A') {
      links.querySelector('.active').classList.remove('active');
      parent.classList.add('active');
    }
  });
});
