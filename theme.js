const light_theme = document.querySelector('#theme-css');
const button_toggle = document.querySelector('#sun-moon');

// Event Listeners
if (button_toggle) button_toggle.addEventListener("click", switchTheme);

// Functions
function switchTheme() {

    const oldTheme = getTheme();
   
    let newTheme;

    if (oldTheme === 'light') {
        newTheme = 'dark';
    } else newTheme = 'light'

    localStorage.setItem('theme', newTheme);
    light_theme.href = `./css/${newTheme}.css`;
}

function getTheme() {
  let theme = localStorage.getItem('theme')

  if (theme === null) {
      theme = 'light';
      localStorage.setItem("theme", theme)
  }

  return theme;
}

// Anonymous Function
(() => {
     styles = getTheme();
    light_theme.href = `./css/${styles}.css`;
})()