
let formBtn= document.querySelector('#login-btn')
let loginForm= document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let videoBtn = document.querySelectorAll('.vid-btn');

window.addEventListener('scroll',() =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
});




formBtn.addEventListener('click', () =>{
    loginForm.classList.toggle('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
});

