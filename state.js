// Установить значение cookie
const state = "value";
const cookieName = "state";
const expirationDays = 30;
const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + expirationDays);

document.cookie = `${cookieName}=${state}; expires=${expirationDate.toUTCString()}; path=/`;
// Получить значение cookie
const cookiesName = "state";

const getCookieValue = (cookieName) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    if (cookie[0] === cookieName) {
      return cookie[1];
    }
  }
  return null;
};

const savedState = getCookieValue(cookieName);
// Очистить cookie
const cookiessName = "state";
const expirationsDate = new Date(0);

document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/`;
