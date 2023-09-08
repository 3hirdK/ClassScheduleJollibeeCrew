const ulElem = document.querySelectorAll('a');


ulElem.forEach(link => {
    link.addEventListener('click', function (e) {
        ulElem.forEach(otherLinks => {
            otherLinks.classList.remove('active');
        })
        link.classList.add('active');
    })
});
