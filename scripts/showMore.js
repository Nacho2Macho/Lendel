const showMore = document.querySelector('.catalog-cards__btn');
const productsLength = document.querySelectorAll('.item-cards').length;
let items = 8;

showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector(`.tab-cards__content[data-tabs-target="${activeTab}"]`).children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});