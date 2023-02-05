/* Btn */
const btnDarkMode = document.querySelector('.dark-mode-btn');
//Checking #1 dark mode in system settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
	btnDarkMode.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
}
//checking #2 dark mode in local storage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active');
	document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active');
	document.body.classList.remove('dark');
}

//if system settings changed , chage mode
window.matchMedia &&
	window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', (event) => {
		const newColorScheme = event.matches ? 'dark' : 'light';
		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-btn--active');
			document.body.classList.add('dark');
			localStorage.setItem('darkMode', 'dark');
		} else {
			btnDarkMode.classList.remove('dark-mode-btn--active');
			document.body.classList.remove('dark');
			localStorage.setItem('darkMode', 'light');
		}
	});
// Turn on Dark mode  by button
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active');
	const isDark = document.body.classList.toggle('dark');
	if (isDark) {
		localStorage.setItem('darkMode', 'dark');
	} else {
		localStorage.setItem('darkMode', 'light');
	}
};
