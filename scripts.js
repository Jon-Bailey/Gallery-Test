const listItem = document.querySelectorAll('li');
const image = document.querySelectorAll('img');
const header = document.getElementById('header-text');
const subtext = document.getElementById('subtext');

listItem.forEach((li, i) => {
    li.addEventListener('mouseenter', () => {
        image[i].style.visibility = 'visible';
        li.classList.add('selected');
    })
    li.addEventListener('mouseleave', () => {
        image[i].style.visibility = 'hidden';
        li.classList.remove('selected');
    })
});