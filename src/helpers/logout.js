export default function logout() {
  localStorage.removeItem("@QuotaWatcher#LastLogin");
}