
// my version
// window.addEventListener('DOMContentLoaded', function () {
//     const openModal = document.querySelector('#myBtn');
//     const closeModal = document.querySelector('.close');
//     const modal = document.querySelector('.modal');

//     openModal.addEventListener('click', () => {
//         modal.style.display = 'block';
//     });

//     closeModal.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

// });

const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.querySelector('.close');

btn.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};