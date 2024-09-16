const toggleThemeBtn = document.getElementById('toggleTheme');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') 
        ? 'Світла тема' 
        : 'Темна тема';
});
