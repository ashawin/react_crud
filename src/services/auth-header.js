export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { Autherization: 'Bearer ' + user.accessToken }
    } else {
        return {}
    }
}