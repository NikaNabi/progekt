const loginForm = document.getElementById('login-form'); 

loginForm.addEventListener('submit', function(event) { 
    event.preventDefault(); 

    const username = loginForm.elements.username.value; 
    const password = loginForm.elements.password.value; 

    const userData = JSON.parse(localStorage.getItem('userData')); 

    if (userData && userData.username === username && userData.password === password) { 
        alert('Вы успешно вошли!'); 
    } else { 
        alert('Ошибка авторизации'); 
    } 
});