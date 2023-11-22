document.getElementById('videoCard').addEventListener('click', function() {
    window.location.href = 'branding.html';
});
document.addEventListener('DOMContentLoaded', function () {
    var confirmButton = document.getElementById('confirmButton');

    confirmButton.addEventListener('click', function () {
      var modal = new bootstrap.Modal(document.getElementById('Modal5'));
      modal.hide();

      window.location.href = 'branding.html';
    });
  });