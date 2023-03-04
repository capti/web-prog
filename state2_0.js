// Получить значение cookie
const getCookieValue = (cookieName) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === cookieName) {
      return cookie[1];
    }
  }
  return;
};
// Установить значение cookie
const state = "value";
const cookieName = "state";
// Очистить cookie
const expirationDate = new Date(0);
const savedState = getCookieValue(cookieName);
document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/`;
