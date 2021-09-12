const toggleClassBetweenElems = (activeElemsWayForRemoveClass, className, addClassElem) => {
    $(activeElemsWayForRemoveClass).removeClass(className);
    addClassElem.classList.add(className);
}

const toggle = (elems, className, activeElemsWay) => {
    for(let elem of elems) {
        elem.addEventListener('click', (event) => {
            toggleClassBetweenElems(activeElemsWay, className, event.currentTarget);
        });
    }
}

const changeClassUponArrowsClickAndClicking = (elems, buttons, activeElemsWay, className) => {
    let indexNumberOfActiveElem = 1;

    for(let elem of elems) {
        elem.addEventListener('click', (event) => {
            indexNumberOfActiveElem = event.currentTarget.dataset.num;
            toggleClassBetweenElems(activeElemsWay, className, elems[indexNumberOfActiveElem]);
        });
    }

    buttons[0].addEventListener('click', () => {
        if (indexNumberOfActiveElem == 0) {
            indexNumberOfActiveElem = 2;
        } else {
            indexNumberOfActiveElem--;
        }
        toggleClassBetweenElems(activeElemsWay, className, elems[indexNumberOfActiveElem]);
    });

    buttons[1].addEventListener('click', () => {
        if (indexNumberOfActiveElem == 2) {
            indexNumberOfActiveElem = 0;
        } else {
            indexNumberOfActiveElem++;
        }

        toggleClassBetweenElems(activeElemsWay, className, elems[indexNumberOfActiveElem]);
    });
}

const toggleClassOfAllElems = (className, $elems, triggerElems) => {
    triggerElems.addEventListener('click', () => {
        for(let elem of $elems) {
            elem.toggleClass(className)
        }
    });
}

const links = document.getElementsByClassName('navigation')[0].children;

for(let link of links) {
    let hrefOfLink = link.getAttribute('href');
    if(hrefOfLink != '#') {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            if($('header').hasClass('active')) {          //hide menu
                $('header').removeClass('active');
                $('.menu').removeClass('active');
            }

            let elemToScrolling = document.getElementsByClassName(hrefOfLink.split('').slice(1).join(''))[0];
            elemToScrolling.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            });
        });
    }
}

const posts = document.querySelectorAll('.recentPosts .posts .post');
const buttons = document.querySelectorAll('.recentPosts .changeButtons .changeButton');

changeClassUponArrowsClickAndClicking(posts, buttons, '.recentPosts .posts .post.active', 'active');
toggle(document.querySelectorAll('.filters button'), 'active', '.filters button.active'); //function for projects filters
toggleClassOfAllElems ('active', [$('header'), $('.menu')], document.getElementsByClassName('burger')[0])




