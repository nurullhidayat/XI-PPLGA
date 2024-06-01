/* scripts.js */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const gridItems = document.querySelectorAll('.grid-container div');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hovered');
        });
    });

    const toggleMenu = document.querySelector('.toggle-menu');
    const nav = document.querySelector('header nav');

    toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}
