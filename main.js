document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
            alert(`You rated this ${rating} stars!`);
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', () => {
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
    });
});
