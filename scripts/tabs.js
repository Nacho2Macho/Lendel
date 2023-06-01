let activeTab = 'allProduct'

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.catalog-cards__tab');
	const tabsBtn = document.querySelectorAll('.tab-cards__btn');
	const tabsContent = document.querySelectorAll('.tab-cards__content');

	if (tabs) {


		tabs.addEventListener('click', (e) => {
			items = 8;
			activeTab = e.target.dataset.tabsPath;
			if (e.target.classList.contains('tab-cards__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => { el.classList.remove('tab-cards__btn--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tab-cards__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tab-cards__btn--active');
				let activeParent = activeBtn.closest('.tab-cards__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tab-cards__btn')
					tabsBtn.forEach(el => { el.classList.remove('tab-cards__btn--active') });
					prevActive.classList.add('tab-cards__btn--active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}

			if (e.target.classList.contains('tabs__arrow--next')) {
				let activeBtn = document.querySelector('.tab-cards__btn--active');
				let activeParent = activeBtn.closest('.tab-cards__item');
				let nextParent = activeParent.nextElementSibling;

				if (nextParent) {
					let nextActive = nextParent.querySelector('.tab-cards__btn');
					tabsBtn.forEach(el => { el.classList.remove('tab-cards__btn--active') });
					nextActive.classList.add('tab-cards__btn--active');

					let path = nextActive.dataset.tabsPath;

					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => { el.classList.remove('tab-cards__content--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tab-cards__content--active');
	};
});