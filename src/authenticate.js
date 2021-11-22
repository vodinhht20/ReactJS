    export const authenticate = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    };
    export const isAuthenticate = () => {
        if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
        } else {
        return false;
        }
    };
  export const authLogout = () => {
    localStorage.removeItem("user");
      return true;
  }