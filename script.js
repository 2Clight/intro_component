
const firstName= document.getElementById('fname');
const lastName=document.getElementById('lname');
const email=document.getElementById('email');
const password=document.getElementById('password');

const form=document.querySelector('form');
const errors=document.querySelectorAll('.error')

form.addEventListener('submit', (e)=>{
   
    if(firstName.value===''){
        e.preventDefault();
        firstName.classList.add('input_error');
        errors[0].style.display = "block";
        errors[0].innerHTML= "first name is required"
      
        
    }
    else{
        firstName.classList.remove('input_error');
        errors[0].style.display="none";
    }
    if(lastName.value===''){
        e.preventDefault();
        lastName.classList.add('input_error');
        errors[1].style.display = "block";
        errors[1].innerHTML= "last name is required"
        
    }
    else{
        lastName.classList.remove('input_error');
        errors[1].style.display = "none";
        errors[1].innerHTML= "last name is entered"
       
    }
    let validEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.value.match(validEmail)){
        e.preventDefault();
        email.classList.add('input_error');
        errors[2].style.display = "block";
        errors[2].innerHTML= "Looks like this is not an email"
       
    }
    else{
        email.classList.remove('input_error');
        errors[2].style.display = "none";
    }
    if(password.value.length < 1){
        e.preventDefault();
        password.classList.add('input_error');
        errors[3].style.display = "block";
        errors[3].innerHTML= "password can not be empty"
        
    }
    else{
        password.classList.remove('input_error');
        errors[3].style.display = "none";
    }
});







