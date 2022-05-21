const items = document.querySelectorAll('.list__item');

items.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});
