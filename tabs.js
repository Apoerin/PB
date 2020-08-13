class TabList {

    constructor(buttonsContainer, tabs, btns) {
        this.buttonsContainer = buttonsContainer;
        this.tabs = tabs;

        this.buttonsContainer.addEventListener('click', event => {
            const index = event.target.closest('.tab').dataset.value;

            this.openTab(index);
        });
    }

    openTab(index) {
        this.tabs.querySelector('.active').classList.remove('active');
        this.tabs.querySelector(`.content--${index}`).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const buttonsContainer = document.querySelector('.tab-buttons');
    const tabs = document.querySelector('.tab-content');

    const tabList = new TabList(buttonsContainer, tabs);
})

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('active');
                } else if (current.classList.contains('active') === true) {
                    current.classList.remove('active');
                } else {
                    current.classList.add('active')
                }
            }
            e.preventDefault();
        });
    }
}

toggleItem(document.querySelectorAll('.tab'));
