document.addEventListener("DOMContentLoaded", () => {
  const downloadButtons = document.querySelectorAll('.btn.download');

  downloadButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const link = document.createElement('a');
      link.href = button.href;
      link.download = button.href.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      button.classList.remove('btn');
      setTimeout(() => {
        button.classList.add('btn');
      }, 10);
    });
  });

  const viewButtons = document.querySelectorAll('.btn.view');

  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.remove('view');
      setTimeout(() => {
        button.classList.add('view');
      }, 10);
    });
  });
});