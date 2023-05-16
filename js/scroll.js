const titleToUnderline = document.querySelectorAll(".section--title");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("on-scroll", entry.isIntersecting)
    })  
}, {
    rootMargin: "-120px",
}
);

titleToUnderline.forEach(titleNoUnderlined => {
    observer.observe(titleNoUnderlined)
});