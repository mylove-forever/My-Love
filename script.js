function revealQuestion() {
    const slider = document.getElementById('slider');
    const question = document.getElementById('question');
    const sliderText = document.getElementById('slider-text');

    if (slider.value >= 100) {
        question.classList.remove('hidden');
        question.style.opacity = 1;
        sliderText.style.display = 'none';
    }
}
