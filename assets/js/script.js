$(document).ready(function() {
    const links = [
        { url: 'https://www.diwisata.my.id/', text: 'Blog', target: '_blank', id: 'linkone', icon: 'fas fa-globe', disabled: false },
        { url: 'https://api.whatsapp.com/send/?phone=6281939703518&text=Hallo,%20Ka%20Ibnu%20Fajar', text: 'Contact WA', target: '_blank', id: 'linktwo', icon: 'fab fa-whatsapp', disabled: false },
        { url: 'portfolio/index.html', text: 'Portofolio', target: '_self', id: 'linktree', icon: 'fas fa-book', disabled: false }
    ];

    links.forEach(link => {
        const disabledClass = link.disabled ? 'pointer-events-none opacity-50' : '';
        const linkUrl = link.disabled ? '#' : link.url;
        $('#links').append(`
            <a href="${linkUrl}" ${link.disabled ? 'disabled' : ''} target="${link.target}" id="${link.id}" data-barba="wrapper" data-barba-prevent="self" rel="noopener noreferrer" class="block link-card p-4 rounded-lg shadow-md ${disabledClass}">
                <div class="flex items-center">
                    <span class="text-2xl mr-4"><i class="${link.icon}"></i></span>
                    <span class="text-lg font-medium">${link.text}</span>
                </div>
            </a>
        `);
    });

    // Memuat barba-init.js sebagai dependensi
    $.getScript('loader.js', function() {
        console.log('loader.js loaded');
    });
});