function selectRole(role) {
    localStorage.setItem('selectedRole', role);
    window.location.href = 'login.html';
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = localStorage.getItem('selectedRole');
    
    const result = login(email, password, role);
    
    if (result.success) {
        window.location.href = `../pages/${role}/dashboard.html`;
    } else {
        document.getElementById('errorMessage').textContent = result.error;
    }
}
