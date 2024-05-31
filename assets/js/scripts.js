let completedIndex = 0;
let upcomingIndex = 0;

const completedSlider = document.getElementById('completed-slider');
const upcomingSlider = document.getElementById('upcoming-slider');

function showSlide(slider, index) {
    const slides = slider.getElementsByClassName('card');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${index * 220}px)`;
    }
}

function nextSlide() {
    completedIndex = (completedIndex + 1) % (completedSlider.getElementsByClassName('card').length / 5);
    upcomingIndex = (upcomingIndex + 1) % (upcomingSlider.getElementsByClassName('card').length / 5);
    showSlide(completedSlider, completedIndex);
    showSlide(upcomingSlider, upcomingIndex);
}

setInterval(nextSlide, 3000); // Slide changes every 3 seconds

// Rotate card on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
