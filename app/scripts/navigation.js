document.addEventListener('DOMContentLoaded', function () {
  var hash = location.hash;
  var links = document.querySelector('.navigation-list');
  var active;

  if (hash) {
    active = links.querySelector('a[href="' + hash + '"]');
    active.parentNode.classList.add('active');
  } else {
    if (document.querySelector('.page-home')) {
      links.children[0].classList.add('active');
    }
  }

  links.addEventListener('click', function (event) {
    var target = event.target;
    var parent = target.parentNode;
    var active = links.querySelector('.active');

    if (target && target.nodeName === 'A') {
      if (active) {
        active.classList.remove('active');
      }

      parent.classList.add('active');
    }
  });
});
