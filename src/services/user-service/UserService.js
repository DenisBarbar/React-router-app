export default class UserService {

    login(login, password) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
    }

    isAuth() {
       return !!localStorage.getItem('login');
    }

    logout() {
        localStorage.clear();
        console.log('logged out')
    }
}