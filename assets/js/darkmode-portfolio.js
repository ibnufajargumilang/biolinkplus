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
});

$(document).ready(function() {
    // Contoh data adminn
    const admins = [
        { name: "John Doe", email: "john@example.com", role: "Admin" },
        { name: "Jane Smith", email: "jane@example.com", role: "Super Admin" }
    ];

    // Contoh log aktivitas
    const activityLogs = [
        { date: "2024-06-25", admin: "John Doe", activity: "Login" },
        { date: "2024-06-24", admin: "Jane Smith", activity: "Menghapus pengguna" }
    ];

    function loadAdminList() {
        const adminList = $('#admin-list');
        adminList.empty();
        admins.forEach((admin, index) => {
            const adminRow = `
                <tr>
                    <td class="py-2 px-4 border-b">${admin.name}</td>
                    <td class="py-2 px-4 border-b">${admin.email}</td>
                    <td class="py-2 px-4 border-b">${admin.role}</td>
                    <td class="py-2 px-4 border-b">
                        <button class="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2 mb-1">Edit</button>
                        <button class="bg-red-500 text-white py-1 px-3 rounded-md" onclick="confirmDelete(${index})">Hapus</button>
                    </td>
                </tr>
            `;
            adminList.append(adminRow);
        });
    }

    function loadActivityLog() {
        const activityLog = $('#activity-log');
        activityLog.empty();
        activityLogs.forEach(log => {
            const logRow = `
                <tr>
                    <td class="py-2 px-4 border-b">${log.date}</td>
                    <td class="py-2 px-4 border-b">${log.admin}</td>
                    <td class="py-2 px-4 border-b">${log.activity}</td>
                </tr>
            `;
            activityLog.append(logRow);
        });
    }

    // Fungsi untuk menambah admin baru
    $('#add-admin-form').submit(function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const role = $('#role').val();
        admins.push({ name, email, role });
        loadAdminList();
        this.reset();
    });

    // Fungsi untuk mengonfirmasi penghapusan admin
    let adminIndexToDelete = -1;
    window.confirmDelete = function(index) {
        adminIndexToDelete = index;
        $('#delete-modal').removeClass('hidden');
    };

    $('#cancel-delete').click(function() {
        $('#delete-modal').addClass('hidden');
        adminIndexToDelete = -1;
    });

    $('#confirm-delete').click(function() {
        if (adminIndexToDelete > -1) {
            admins.splice(adminIndexToDelete, 1);
            loadAdminList();
            $('#delete-modal').addClass('hidden');
            adminIndexToDelete = -1;
        }
    });

    // Memuat daftar admin dan log aktivitas saat halaman siap
    loadAdminList();
    loadActivityLog();
});