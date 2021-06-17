const signUpModal=document.getElementById('signupModal');
const closeBtn=document.getElementById('closeBtn');
const newAccountBtn=document.getElementById('newAccountBtn');



closeBtn.onclick=function(){
    closeModal(signUpModal);
}
newAccountBtn.onclick=function(){
    openModal(signUpModal);
}
window.addEventListener('keyup', escPress);
function closeModal(modal){
    modal.style.display="none";
}
function openModal(modal){
    modal.style.display="flex";
}

function escPress(e){
    if(e.which=='27'){
        closeModal(signUpModal);
    }
}