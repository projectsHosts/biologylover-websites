export const isLoggedIn = () => {
  return !!localStorage.getItem("token"); 
  // agar tum cookie use karte ho to uska check lagao
};
