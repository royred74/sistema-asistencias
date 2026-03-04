const USERS = {
    'ana@colegio.edu': { password: '123456', role: 'admin', name: 'Ana Admin' },
    'carlos@colegio.edu': { password: '123456', role: 'director', name: 'Carlos Director' },
    'maria@colegio.edu': { password: '123456', role: 'profesor', name: 'María Profesora' },
    'luis@colegio.edu': { password: '123456', role: 'estudiante', name: 'Luis Estudiante' },
    'roberto@colegio.edu': { password: '123456', role: 'padre', name: 'Roberto Padre' }
};

let currentUser = null;

function login(email, password, role) {
    const user = USERS[email];
    if (!user) return { success: false, error: 'Usuario no encontrado' };
    if (user.role !== role) return { success: false, error: 'Rol incorrecto' };
    if (user.password !== password) return { success: false, error: 'Contraseña incorrecta' };
    
    currentUser = { email, ...user };
    localStorage.setItem('appUser', JSON.stringify(currentUser));
    return { success: true, user: currentUser };
}

function logout() {
    currentUser = null;
    localStorage.removeItem('appUser');
}

function getCurrentUser() {
    if (!currentUser) {
        const saved = localStorage.getItem('appUser');
        if (saved) currentUser = JSON.parse(saved);
    }
    return currentUser;
}
