$(document).ready(function() {
    function setTheme(theme) {
        if (theme === 'dark') {
            $('body').removeClass('light-mode').addClass('dark-mode');
            $('#toggleDarkMode').text('🌞');
        } else {
            $('body').removeClass('dark-mode').addClass('light-mode');
            $('#toggleDarkMode').text('🌙');
        }
    }

    function syncTheme() {
        const currentMode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
        setTheme(currentMode);
        localStorage.setItem('theme', currentMode);
    }

    $('#toggleDarkMode').click(function() {
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

    $(document).ready(function() {
        // Toggle sidebar hide/show
        $('#sidebar-toggle').click(function() {
            $('#sidebar').toggleClass('sidebar-expanded sidebar-collapsed');
            $('#main-header').toggleClass('header-expanded header-collapsed');
            $('#main-content').toggleClass('content-expanded content-collapsed');
        });
    });
});