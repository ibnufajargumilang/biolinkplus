$(document).ready(function() {
    function setTheme(theme) {
        if (theme === 'dark') {
            $('body').removeClass('light-mode').addClass('dark-mode');
            $('#dark-mode-icon').text('🌞');
            $('#toggleDarkMode').text('🌞');
        } else {
            $('body').removeClass('dark-mode').addClass('light-mode');
            $('#dark-mode-icon').text('🌙');
            $('#toggleDarkMode').text('🌙');
        }
    }

    function syncTheme() {
        const currentMode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
        setTheme(currentMode);
        localStorage.setItem('theme', currentMode);
    }

    $('#dark-mode-toggle, #toggleDarkMode').click(function() {
        const currentMode = $('body').hasClass('dark-mode') ? 'light' : 'dark';
        setTheme(currentMode);
        localStorage.setItem('theme', currentMode);
        syncTheme();
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }

    $('#info-button').click(function() {
        $('#info-modal').fadeIn();
    });

    $('.close-modal').click(function() {
        $('#info-modal').fadeOut();
    });
});