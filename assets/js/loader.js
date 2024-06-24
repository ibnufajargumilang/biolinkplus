$(document).ready(function() {
    function setTheme(theme) {
        if (theme === 'dark') {
            $('body').removeClass('light-mode').addClass('dark-mode');
            $('#toggleDarkMode').text('🌞');
            $('#dark-mode-toggle').text('🌞');
        } else {
            $('body').removeClass('dark-mode').addClass('light-mode');
            $('#toggleDarkMode').text('🌙');
            $('#dark-mode-toggle').text('🌙');
        }
    }

    function syncTheme() {
        const currentMode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
        setTheme(currentMode);
        localStorage.setItem('theme', currentMode);
    }

    $('#toggleDarkMode, #dark-mode-toggle').click(function() {
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

    // Inisialisasi Barba.js
    Barba.init({
        transitions: [{
            name: 'fade',
            leave(data) {
                const done = this.async();
                gsap.to(data.current.container, { opacity: 0, duration: 0.5, onComplete: done });
            },
            enter(data) {
                gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
            }
        }]
    });

    // Bind ulang semua event yang diperlukan setelah mengganti isi halaman
    function bindEvents() {
        $('#toggleDarkMode, #dark-mode-toggle').click(function() {
            const currentMode = $('body').hasClass('dark-mode') ? 'light' : 'dark';
            setTheme(currentMode);
            localStorage.setItem('theme', currentMode);
            syncTheme();
        });

        $('#info-button').click(function() {
            $('#info-modal').fadeIn();
        });

        $('.close-modal').click(function() {
            $('#info-modal').fadeOut();
        });
    }

    // Panggil bindEvents untuk pertama kali
    bindEvents();
});