const toggleClass = (activeElemsWay, className, addClassElem) => {
    $(activeElemsWay).removeClass(className);
    addClassElem.classList.add(className);
}

const toggle = (elems, className, activeElemsWay) => {
    for(let elem of elems) {
        elem.addEventListener('click', (event) => {
            toggleClass(activeElemsWay, className, event.currentTarget);
        });
    }
}

const changeClassUponArrowsClickAndClicking = (elems, buttons, activeElemsWay, className) => {
    let indexNumberOfActiveElem = 1;

    for(let elem of elems) {
        elem.addEventListener('click', (event) => {
            indexNumberOfActiveElem = event.currentTarget.dataset.num;
            toggleClass(activeElemsWay, className, elems[indexNumberOfActiveElem]);
        });
    }

    buttons[0].addEventListener('click', () => {
        if (indexNumberOfActiveElem == 0) {
            indexNumberOfActiveElem = 2;
        } else {
            indexNumberOfActiveElem--;
        }
        toggleClass(activeElemsWay, className, elems[indexNumberOfActiveElem]);
    });

    buttons[1].addEventListener('click', () => {
        if (indexNumberOfActiveElem == 2) {
            indexNumberOfActiveElem = 0;
        } else {
            indexNumberOfActiveElem++;
        }

        toggleClass(activeElemsWay, className, elems[indexNumberOfActiveElem]);
    });
}

const posts = document.querySelectorAll('.recentPosts .posts .post')
const buttons = document.querySelectorAll('.recentPosts .changeButtons .changeButton')

changeClassUponArrowsClickAndClicking(posts, buttons, '.recentPosts .posts .post.active', 'active');
toggle(document.querySelectorAll('.filters button'), 'active', '.filters button.active'); //function for projects filters


