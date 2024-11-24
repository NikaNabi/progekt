const registrationForm = document.getElementById('registration-form'); 

registrationForm.addEventListener('submit', function(event) { 
    event.preventDefault(); 

    const username = registrationForm.elements.username.value; 
    const password = registrationForm.elements.password.value; 

    const userData = { 
        username: username, 
        password: password 
    }; 

    localStorage.setItem('userData', JSON.stringify(userData)); 

    alert('Успешная регистрация!'); 
});