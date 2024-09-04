
document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    document.querySelector('#sub').onclick = () => {
        navbar.classList.toggle('active');
    }
});
