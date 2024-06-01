const cont = document.getElementById('cont');
const registerBtn = document.getElementById('register');
const masukBtn = document.getElementById('masuk');
registerBtn.addEventListener('click', ()=>{
    cont.classList.add("active");
});
masukBtn.addEventListener('click', ()=>{
    cont.classList.remove("active");
});
