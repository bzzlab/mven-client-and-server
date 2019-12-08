import store from '../store';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    //fake token at the moment
    const token = {
        username: 'hans'
    };
    setToken(token);
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUsername() {
    return 'hans';
}

export function getUserid() {
    return 1;
}
