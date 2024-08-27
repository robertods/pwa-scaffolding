import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  const updateDialog = document.getElementById('update-dialog');
  const updateYesButton = document.getElementById('update-yes');
  const updateNoButton = document.getElementById('update-no');

  wb.addEventListener('waiting', () => {
    updateDialog.classList.remove('hidden');

    updateYesButton.addEventListener('click', () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });
      wb.messageSkipWaiting();
    });

    updateNoButton.addEventListener('click', () => {
      updateDialog.classList.add('hidden');
    });
  });

  wb.addEventListener('externalwaiting', () => {
    updateDialog.classList.remove('hidden');

    updateYesButton.addEventListener('click', () => {
      wb.addEventListener('controlling', () => {
        window.location.reload();
      });
      wb.messageSkipWaiting();
    });

    updateNoButton.addEventListener('click', () => {
      updateDialog.classList.add('hidden');
    });
  });

  wb.register();
}
