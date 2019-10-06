export default function authenticated() {
    const auth = JSON.parse(localStorage.getItem("@QuotaWatcher#LastLogin"));
    if (auth) {
        const lastLogin = new Date(auth.date);
        const minutes = lastLogin.getMinutes();
        const hours = lastLogin.getHours();
        const nowMinutes = new Date().getMinutes();
        const nowHours = new Date().getHours();
        if (hours === nowHours) {
            if (minutes - nowMinutes > 45) return false;
            else return true;
        } else return false;
    } else return false
}