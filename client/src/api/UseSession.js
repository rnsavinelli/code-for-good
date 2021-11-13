function UseSession() {
  return localStorage.getItem("session") === "true";
}

export default UseSession;
