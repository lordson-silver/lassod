const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login_link');
const registerlink = document.querySelector('.register_link');
const btnPopup = document.querySelector('.btnLogin_popup');
const iconclose = document.querySelector('.icon_close');


registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})

iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})