$(document).ready(function() {
    const links = [
        { url: 'https://www.diwisata.my.id/', text: 'Blog', target:'_blank', icon: 'fas fa-globe', disabled: false },
        { url: 'https://api.whatsapp.com/send/?phone=6281939703518&text=Hallo,%20Ka%20Ibnu%20Fajar', text: 'Contact WA', target:'_blank', icon: 'fab fa-whatsapp', disabled: false },
        { url: 'portfolio', text: 'Portofolio', target:'_self', icon: 'fas fa-book', disabled: false }
    ];

    links.forEach(link => {
        const disabledClass = link.disabled ? 'pointer-events-none opacity-50' : '';
        const linkUrl = link.disabled ? '#' : link.url;
        $('#links').append(`
            <a href="${linkUrl}" ${link.disabled ? 'disabled' : ''} target="${link.target}" rel="noopener noreferrer" class="block link-card p-4 rounded-lg shadow-md ${disabledClass}">
                <div class="flex items-center">
                    <span class="text-2xl mr-4"><i class="${link.icon}"></i></span>
                    <span class="text-lg font-medium">${link.text}</span>
                </div>
            </a>
        `);
    });

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
});