const slides = document.querySelector('.slides');
const slideIssue = document.querySelectorAll('.slides ul');
let currentIdx = 0;
const slideCount = slideIssue.length;
const prev = document.querySelector('.prev_btn');
const next = document.querySelector('.next');
const slideWidth = 300;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * 400 + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function() {
    if (currentIdx != 0) moveSlide(currentIdx - 1);
});
next.addEventListener('click', function() {
    if (currentIdx != slideCount - 1) {
        moveSlide(currentIdx + 1);
    }
});