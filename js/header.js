window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.nav-bar')
        scroll.classList.toggle('active', window.scrollY > 200)
})