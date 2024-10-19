document.querySelectorAll('.btn').forEach(button => {
    button.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';
    
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        this.style.backgroundColor = '#e08aa9';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        this.style.backgroundColor = '#ffc4e1';
    });
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const themeToggleButton = document.querySelector('.theme-toggle');

    themeToggleButton.textContent = body.classList.contains('dark-theme') 
        ? 'Switch to Light Theme' 
        : 'Switch to Dark Theme';
}const themeButton = document.getElementById('theme-button');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeButton.textContent = body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
});
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
