$(document).ready(function () {
    // Dark Mode Functions
    function setTheme(theme) {
        if (theme === "dark") {
            $("body").removeClass("light-mode").addClass("dark-mode");
            $("#toggleDarkMode").text("🌞");
        } else {
            $("body").removeClass("dark-mode").addClass("light-mode");
            $("#toggleDarkMode").text("🌙");
        }
    }

    function syncTheme() {
        const currentMode = $("body").hasClass("dark-mode") ? "dark" : "light";
        setTheme(currentMode);
        localStorage.setItem("theme", currentMode);
    }

    $("#toggleDarkMode").click(function () {
        const currentMode = $("body").hasClass("dark-mode") ? "light" : "dark";
        setTheme(currentMode);
        localStorage.setItem("theme", currentMode);
        syncTheme();
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
    }

    $("#info-button").click(function () {
        $("#info-modal").fadeIn();
    });

    $(".close-modal").click(function () {
        $("#info-modal").fadeOut();
    });

    // Admin Management Functions
    const admins = [
        { name: "John Doe", email: "john@example.com", role: "Admin" },
        { name: "Jane Smith", email: "jane@example.com", role: "Super Admin" },
    ];

    const adminActivityLogs = [
        { date: "2024-06-25", admin: "John Doe", activity: "Login" },
        { date: "2024-06-24", admin: "Jane Smith", activity: "Menghapus pengguna" },
    ];

    function loadAdminList() {
        const adminList = $("#admin-list");
        adminList.empty();
        admins.forEach((admin, index) => {
            const adminRow = `
                <tr>
                    <td class="py-4 px-6 whitespace-nowrap">${admin.name}</td>
                    <td class="py-4 px-6 whitespace-nowrap">${admin.email}</td>
                    <td class="py-4 px-6 whitespace-nowrap">${admin.role}</td>
                    <td class="py-4 px-6 whitespace-nowrap">
                        <button class="bg-yellow-500 text-white py-1 px-3 rounded-md mb-1">Edit</button>
                        <button class="bg-red-500 text-white py-1 px-3 rounded-md" onclick="confirmDeleteAdmin(${index})">Hapus</button>
                    </td>
                </tr>
            `;
            adminList.append(adminRow);
        });
    }

    function loadAdminActivityLog() {
        const activityLog = $("#activity-log");
        activityLog.empty();
        adminActivityLogs.forEach((log) => {
            const logRow = `
                <tr>
                    <td class="py-4 px-6 whitespace-nowrap">${log.date}</td>
                    <td class="py-4 px-6 whitespace-nowrap">${log.admin}</td>
                    <td class="py-4 px-6 whitespace-nowrap">${log.activity}</td>
                </tr>
            `;
            activityLog.append(logRow);
        });
    }

    $("#add-admin-form").submit(function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const role = $("#role").val();
        admins.push({ name, email, role });
        loadAdminList();
        this.reset();
    });

    let adminIndexToDelete = -1;
    window.confirmDeleteAdmin = function (index) {
        adminIndexToDelete = index;
        $("#delete-modal").removeClass("hidden");
    };

    $("#cancel-delete").click(function () {
        $("#delete-modal").addClass("hidden");
        adminIndexToDelete = -1;
    });

    $("#confirm-delete").click(function () {
        if (adminIndexToDelete > -1) {
            admins.splice(adminIndexToDelete, 1);
            loadAdminList();
            $("#delete-modal").addClass("hidden");
            adminIndexToDelete = -1;
        }
    });

    loadAdminList();
    loadAdminActivityLog();

    // User Management Functions
    const users = [
        { name: "Alice", email: "alice@example.com", status: "active" },
        { name: "Bob", email: "bob@example.com", status: "inactive" },
    ];

    const userActivityLogs = [
        { date: "2024-06-25", user: "Alice", activity: "Login" },
        { date: "2024-06-24", user: "Bob", activity: "Menambahkan pengguna baru" },
    ];

    function loadUserList() {
        const userList = $("#user-list");
        userList.empty();
        users.forEach((user, index) => {
            const userRow = `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">${user.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${user.email}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${user.status === "active" ? "Aktif" : "Tidak Aktif"}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button class="bg-yellow-500 text-white py-1 px-3 rounded-md mb-1">Edit</button>
                        <button class="bg-red-500 text-white py-1 px-3 rounded-md" onclick="confirmDeleteUser(${index})">Hapus</button>
                        <button class="bg-blue-500 text-white py-1 px-3 rounded-md" onclick="toggleStatus(${index})">${user.status === "active" ? "Deaktivasi" : "Aktivasi"}</button>
                    </td>
                </tr>
            `;
            userList.append(userRow);
        });
    }

    function loadUserActivityLog() {
        const activityLog = $("#activity-log");
        activityLog.empty();
        userActivityLogs.forEach((log) => {
            const logRow = `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap">${log.date}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${log.user}</td>
                    <td class="px-6 py-4 whitespace-nowrap">${log.activity}</td>
                </tr>
            `;
            activityLog.append(logRow);
        });
    }

    $("#add-user-form").submit(function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const status = $("#status").val();
        users.push({ name, email, status });
        loadUserList();
        this.reset();
    });

    let userIndexToDelete = -1;
    window.confirmDeleteUser = function (index) {
        userIndexToDelete = index;
        $("#delete-modal").removeClass("hidden");
    };

    $("#cancel-delete").click(function () {
        $("#delete-modal").addClass("hidden");
        userIndexToDelete = -1;
    });

    $("#confirm-delete").click(function () {
        if (userIndexToDelete > -1) {
            users.splice(userIndexToDelete, 1);
            loadUserList();
            $("#delete-modal").addClass("hidden");
            userIndexToDelete = -1;
        }
    });

    window.toggleStatus = function (index) {
        users[index].status = users[index].status === "active" ? "inactive" : "active";
        loadUserList();
    };

    loadUserList();
    loadUserActivityLog();
});
