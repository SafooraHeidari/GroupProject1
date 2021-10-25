

// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);

        window.scrollTo(0, c - c / 16);
    }
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}

