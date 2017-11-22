(function () {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../service-worker.js')
      .catch(console.error);
  }

  document
    .querySelector('[data-toggle]')
    .addEventListener('click', function (e) {
      var targetId = e.srcElement.getAttribute('data-toggle');
      var targetElement = document.getElementById(targetId);

      if (targetElement.classList.contains('expanded')) {
        targetElement.classList.remove('expanded');
        return;
      }

      targetElement.classList.add('expanded');
    });
} ());
