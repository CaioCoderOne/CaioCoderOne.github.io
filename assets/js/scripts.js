let completedIndex = 0;
let upcomingIndex = 0;

const completedSlider = document.getElementById('completed-slider');
const upcomingSlider = document.getElementById('upcoming-slider');

function showSlide(slider, index) {
    const slides = slider.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${index * 100}%)`;
    }
}

function nextSlide() {
    completedIndex = (completedIndex + 1) % completedSlider.getElementsByClassName('slide').length;
    upcomingIndex = (upcomingIndex + 1) % upcomingSlider.getElementsByClassName('slide').length;
    showSlide(completedSlider, completedIndex);
    showSlide(upcomingSlider, upcomingIndex);
}

setInterval(nextSlide, 3000); // Slide changes every 3 seconds
