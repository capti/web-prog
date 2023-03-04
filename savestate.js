// Set a cookie with the site state
function setSiteStateCookie(state) {
    document.cookie = "siteState=" + state + "; path=/";
  }
  
  // Get the site state from the cookie
  function getSiteStateFromCookie() {
    const name = "siteState=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }
  
  // Example usage
  const currentState = "example state";
  setSiteStateCookie(currentState);
  const savedState = getSiteStateFromCookie();
  console.log(savedState); // Output: "example state"
  