$.each($('.filters button'), (index, button) => {               //function for projects filters
    button.addEventListener('click', (event) => {
       $('.filters button.active').removeClass('active');
       event.target.classList.add('active');
    });
});
