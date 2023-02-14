import React from "react";
import darkMoon from "../ico/moonDark.png";
import lightMoon from "../ico/moonLight.png";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={`flex flex-row items-center ${
        theme === "dark" ? clickedClass : ""
      }`}
      onClick={(e) => switchTheme(e)}
    >
      {" "}
      <img className="w-6 h-6 " src={darkMoon} alt="moon icon" />
      <img className="w-6 h-6 dark:hidden" src={lightMoon} alt="moon icon" />
      <span className="font-nunito font-extrabold text-sm text-vDarkBlueDark dark:text-white mr-8">
        Dark Mode
      </span>
    </button>
  );
};

export default DarkMode;
