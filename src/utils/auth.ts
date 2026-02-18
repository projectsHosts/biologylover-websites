export const isLoggedIn = () => {
  return !!localStorage.getItem("token"); 
  // agar tum cookie use karte ho to uska check lagao
};

export const getUserId = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
   return payload.userId || payload.id || payload.uid || null;
  } catch (error) {
    return null;
  }
};
