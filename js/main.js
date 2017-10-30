(function () {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../service-worker.js')
      .catch(console.error);
  }
} ());
