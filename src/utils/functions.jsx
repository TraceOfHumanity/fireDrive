//============= changes theme to dark or light=============//
export const handleThemeSwitch = () => {
  const theme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  }
  return "dark";
};
//============= /changes theme to dark or light=============//
